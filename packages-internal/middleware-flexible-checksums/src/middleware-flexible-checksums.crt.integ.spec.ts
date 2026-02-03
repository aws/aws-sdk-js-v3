// Testing CRT implementation of CRC64NVME
import "@aws-sdk/crc64-nvme-crt";

import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { ChecksumAlgorithm, S3 } from "@aws-sdk/client-s3";
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Readable, Transform } from "stream";
import { describe, expect, test as it } from "vitest";

import { RequestChecksumCalculation, ResponseChecksumValidation } from "./constants";

describe("middleware-flexible-checksums", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  const testCases: [string, string][] = [
    ["", "AAAAAAAAAAA="],
    ["abc", "BeXKuz/B+us="],
    ["Hello world", "OOJZ0D8xKts="],
  ];

  describe(S3.name, () => {
    describe("putObject", () => {
      describe.each([undefined, RequestChecksumCalculation.WHEN_SUPPORTED, RequestChecksumCalculation.WHEN_REQUIRED])(
        `when requestChecksumCalculation='%s'`,
        (requestChecksumCalculation) => {
          testCases.forEach(([body, checksumValue]) => {
            const client = new S3({ region: "us-west-2", logger, requestChecksumCalculation });
            const checksumHeader = `x-amz-checksum-${ChecksumAlgorithm.CRC64NVME.toLowerCase()}`;

            it(`tests ${checksumHeader}="${checksumValue}"" for checksum="${ChecksumAlgorithm.CRC64NVME}"`, async () => {
              requireRequestsFrom(client).toMatch({
                method: "PUT",
                hostname: "s3.us-west-2.amazonaws.com",
                protocol: "https:",
                path: "/b/k",
                headers: {
                  "content-type": "application/octet-stream",
                  ...(body.length
                    ? {
                        "content-length": body.length.toString(),
                      }
                    : {}),
                  "x-amz-sdk-checksum-algorithm": ChecksumAlgorithm.CRC64NVME,
                  [checksumHeader]: checksumValue,
                  host: "s3.us-west-2.amazonaws.com",
                  "x-amz-user-agent": /./,
                  "user-agent": /./,
                  "amz-sdk-invocation-id": /./,
                  "amz-sdk-request": /./,
                  "x-amz-date": /./,
                  "x-amz-content-sha256": /./,
                  authorization: /./,
                },
                query: {
                  "x-id": "PutObject",
                },
              });

              await client.putObject({
                Bucket: "b",
                Key: "k",
                Body: body,
                ChecksumAlgorithm: ChecksumAlgorithm.CRC64NVME,
              });

              expect.hasAssertions();
            });
          });
        }
      );
    });

    describe("getObject", () => {
      describe.each([undefined, ResponseChecksumValidation.WHEN_SUPPORTED, ResponseChecksumValidation.WHEN_REQUIRED])(
        `when responseChecksumValidation='%s'`,
        (responseChecksumValidation) => {
          testCases.forEach(([body, checksumValue]) => {
            const checksumHeader = `x-amz-checksum-${ChecksumAlgorithm.CRC64NVME.toLowerCase()}`;

            it(`validates ${checksumHeader}="${checksumValue}"" for checksum="${ChecksumAlgorithm.CRC64NVME}"`, async () => {
              const client = new S3({
                region: "us-west-2",
                logger,
                requestHandler: new (class implements HttpHandler {
                  async handle(request: HttpRequest): Promise<any> {
                    expect(request).toMatchObject({
                      method: "GET",
                      hostname: "s3.us-west-2.amazonaws.com",
                      protocol: "https:",
                      path: "/b/k",
                      headers: {
                        "x-amz-checksum-mode": "ENABLED",
                        host: "s3.us-west-2.amazonaws.com",
                        "x-amz-user-agent": /./,
                        "user-agent": /./,
                        "amz-sdk-invocation-id": /./,
                        "amz-sdk-request": /./,
                        "x-amz-date": /./,
                        "x-amz-content-sha256": /./,
                        authorization: /./,
                      },
                      query: {
                        "x-id": "GetObject",
                      },
                    });
                    return {
                      response: new HttpResponse({
                        statusCode: 200,
                        headers: {
                          "content-type": "application/octet-stream",
                          "content-length": body.length.toString(),
                          [checksumHeader]: checksumValue,
                        },
                        body: Readable.from([body]),
                      }),
                    };
                  }
                  updateHttpClientConfig(key: never, value: never): void {}
                  httpHandlerConfigs() {
                    return {};
                  }
                })(),
                responseChecksumValidation,
              });

              const response = await client.getObject({
                Bucket: "b",
                Key: "k",
                ChecksumMode: "ENABLED",
              });

              await expect(response.Body?.transformToString()).resolves.toEqual(body);
            });
          });
        }
      );
    });
  });
});
