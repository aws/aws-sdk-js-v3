import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { ChecksumAlgorithm, S3 } from "@aws-sdk/client-s3";
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Readable, Transform } from "stream";
import { describe, expect, test as it } from "vitest";

import { DEFAULT_CHECKSUM_ALGORITHM, RequestChecksumCalculation, ResponseChecksumValidation } from "./constants";

describe("middleware-flexible-checksums", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  const testCases: [string, ChecksumAlgorithm | undefined, string][] = [
    ["", ChecksumAlgorithm.CRC32, "AAAAAA=="],
    ["abc", ChecksumAlgorithm.CRC32, "NSRBwg=="],
    ["Hello world", ChecksumAlgorithm.CRC32, "i9aeUg=="],

    ["", ChecksumAlgorithm.CRC32C, "AAAAAA=="],
    ["abc", ChecksumAlgorithm.CRC32C, "Nks/tw=="],
    ["Hello world", ChecksumAlgorithm.CRC32C, "crUfeA=="],

    ["", ChecksumAlgorithm.CRC64NVME, "AAAAAAAAAAA="],
    ["abc", ChecksumAlgorithm.CRC64NVME, "BeXKuz/B+us="],
    ["Hello world", ChecksumAlgorithm.CRC64NVME, "OOJZ0D8xKts="],

    ["", ChecksumAlgorithm.SHA1, "2jmj7l5rSw0yVb/vlWAYkK/YBwk="],
    ["abc", ChecksumAlgorithm.SHA1, "qZk+NkcGgWq6PiVxeFDCbJzQ2J0="],
    ["Hello world", ChecksumAlgorithm.SHA1, "e1AsOh9IyGCa4hLN+2Od7jlnP14="],

    ["", ChecksumAlgorithm.SHA256, "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU="],
    ["abc", ChecksumAlgorithm.SHA256, "ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="],
    ["Hello world", ChecksumAlgorithm.SHA256, "ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw="],

    // Choose default checksum algorithm when explicily not provided.
    ["", undefined, "AAAAAA=="],
    ["abc", undefined, "NSRBwg=="],
    ["Hello world", undefined, "i9aeUg=="],
  ];

  describe(S3.name, () => {
    describe("putObject", () => {
      describe.each([undefined, RequestChecksumCalculation.WHEN_SUPPORTED, RequestChecksumCalculation.WHEN_REQUIRED])(
        `when requestChecksumCalculation='%s'`,
        (requestChecksumCalculation) => {
          testCases.forEach(([body, checksumAlgorithm, checksumValue]) => {
            const client = new S3({ region: "us-west-2", logger, requestChecksumCalculation });
            const checksumHeader = `x-amz-checksum-${(checksumAlgorithm ?? DEFAULT_CHECKSUM_ALGORITHM).toLowerCase()}`;

            it(`tests ${checksumHeader}="${checksumValue}"" for checksum="${checksumAlgorithm}"`, async () => {
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
                  ...(requestChecksumCalculation === RequestChecksumCalculation.WHEN_REQUIRED &&
                  checksumAlgorithm === undefined
                    ? {}
                    : {
                        "x-amz-sdk-checksum-algorithm": checksumAlgorithm,
                        [checksumHeader]: checksumValue,
                      }),
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
                ChecksumAlgorithm: checksumAlgorithm as ChecksumAlgorithm,
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
          testCases.forEach(([body, checksumAlgorithm, checksumValue]) => {
            const checksumHeader = `x-amz-checksum-${(checksumAlgorithm ?? DEFAULT_CHECKSUM_ALGORITHM).toLowerCase()}`;

            it(`validates ${checksumHeader}="${checksumValue}"" for checksum="${checksumAlgorithm}"`, async () => {
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
                        ...(responseChecksumValidation === ResponseChecksumValidation.WHEN_REQUIRED &&
                        !checksumAlgorithm
                          ? {}
                          : {
                              "x-amz-checksum-mode": "ENABLED",
                            }),
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
                // Do not pass ChecksumMode if algorithm is not explicitly defined. It'll be set by SDK.
                ChecksumMode: checksumAlgorithm ? "ENABLED" : undefined,
              });

              await expect(response.Body?.transformToString()).resolves.toEqual(body);
            });
          });
        }
      );
    });

    it("should not set binary file content length", async () => {
      const client = new S3({ region: "us-west-2", logger });

      requireRequestsFrom(client).toMatch({
        method: "PUT",
        hostname: "s3.us-west-2.amazonaws.com",
        protocol: "https:",
        path: "/b/k",
        headers: {
          "content-type": "application/octet-stream",
          "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
          "content-length": /undefined/,
        },
        query: {
          "x-id": "PutObject",
        },
      });

      const stream = new Transform({
        transform(chunk) {
          return chunk;
        },
      });
      stream.write("hello");

      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: stream,
        ChecksumAlgorithm: "SHA256",
      });

      expect.hasAssertions();
    });

    describe("features", () => {
      [
        ["SHA256", "Y"],
        ["SHA1", "X"],
        ["CRC32", "U"],
        ["CRC32C", "V"],
        ["CRC64NVME", "W"],
      ].forEach(([algo, id]) => {
        it(`should feature-detect checksum ${algo}=${id}`, async () => {
          const client = new S3({ region: "us-west-2", logger });

          requireRequestsFrom(client).toMatch({
            headers: {
              "user-agent": new RegExp(`(.*?) m\/(.*?)${id}(.*?)$`),
            },
          });

          await client.putObject({
            Bucket: "b",
            Key: "k",
            Body: "abcd",
            ChecksumAlgorithm: algo as ChecksumAlgorithm,
          });

          expect.hasAssertions();
        });
      });
    });
  });
});
