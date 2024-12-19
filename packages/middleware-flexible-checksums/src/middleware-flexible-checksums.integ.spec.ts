import { ChecksumAlgorithm, S3 } from "@aws-sdk/client-s3";
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Readable, Transform } from "stream";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-flexible-checksums", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  const testCases: [string, ChecksumAlgorithm, string][] = [
    ["", ChecksumAlgorithm.CRC32, "AAAAAA=="],
    ["abc", ChecksumAlgorithm.CRC32, "NSRBwg=="],
    ["Hello world", ChecksumAlgorithm.CRC32, "i9aeUg=="],

    ["", ChecksumAlgorithm.CRC32C, "AAAAAA=="],
    ["abc", ChecksumAlgorithm.CRC32C, "Nks/tw=="],
    ["Hello world", ChecksumAlgorithm.CRC32C, "crUfeA=="],

    ["", ChecksumAlgorithm.SHA1, "2jmj7l5rSw0yVb/vlWAYkK/YBwk="],
    ["abc", ChecksumAlgorithm.SHA1, "qZk+NkcGgWq6PiVxeFDCbJzQ2J0="],
    ["Hello world", ChecksumAlgorithm.SHA1, "e1AsOh9IyGCa4hLN+2Od7jlnP14="],

    ["", ChecksumAlgorithm.SHA256, "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU="],
    ["abc", ChecksumAlgorithm.SHA256, "ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="],
    ["Hello world", ChecksumAlgorithm.SHA256, "ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw="],
  ];

  describe(S3.name, () => {
    const client = new S3({ region: "us-west-2", logger });

    describe("putObject", () => {
      testCases.forEach(([body, checksumAlgorithm, checksumValue]) => {
        const checksumHeader = `x-amz-checksum-${checksumAlgorithm.toLowerCase()}`;

        it(`sets ${checksumHeader}="${checksumValue}"" for checksum="${checksumAlgorithm}"`, async () => {
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
                    Expect: "100-continue",
                  }
                : {}),
              "x-amz-sdk-checksum-algorithm": checksumAlgorithm,
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
            ChecksumAlgorithm: checksumAlgorithm,
          });

          expect.hasAssertions();
        });
      });
    });

    describe("getObject", () => {
      testCases.forEach(([body, checksumAlgorithm, checksumValue]) => {
        const checksumHeader = `x-amz-checksum-${checksumAlgorithm.toLowerCase()}`;

        it(`validates ${checksumHeader}="${checksumValue}"" set for checksum="${checksumAlgorithm}"`, async () => {
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
          });

          const response = await client.getObject({
            Bucket: "b",
            Key: "k",
            ChecksumMode: "ENABLED",
          });

          await expect(response.Body?.transformToString()).resolves.toEqual(body);
        });
      });
    });

    it("should not set binary file content length", async () => {
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
      ].forEach(([algo, id]) => {
        it(`should feature-detect checksum ${algo}=${id}`, async () => {
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
