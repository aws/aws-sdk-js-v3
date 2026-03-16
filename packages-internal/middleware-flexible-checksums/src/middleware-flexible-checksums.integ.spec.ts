import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import type { S3ExtensionConfiguration } from "@aws-sdk/client-s3";
import { ChecksumAlgorithm, S3 } from "@aws-sdk/client-s3";
import type { HttpHandler, HttpRequest } from "@smithy/protocol-http";
import { HttpResponse } from "@smithy/protocol-http";
import type { Checksum } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";
import { ChecksumStream } from "@smithy/util-stream";
import { fromUtf8 } from "@smithy/util-utf8";
import { Readable, Transform } from "node:stream";
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

  describe("Novel checksums", () => {
    /**
     * This highly performant checksum algorithm always returns the bytes of the string "Hello, world."
     * and the number of bytes seen.
     */
    class HelloWorldChecksum implements Checksum {
      private hash = "Hello, world.";
      private bytesSeen = 0;

      public constructor() {}

      public reset(): void {
        this.bytesSeen = 0;
      }

      public update(data: Uint8Array): void {
        this.bytesSeen += data.byteLength;
      }

      async digest(): Promise<Uint8Array> {
        return fromUtf8(this.hash + this.bytesSeen);
      }
    }

    class HelloWorldChecksumExtension {
      configure(extensions: S3ExtensionConfiguration) {
        extensions.addChecksumAlgorithm({
          algorithmId() {
            return "HELLOWORLD";
          },
          checksumConstructor() {
            return HelloWorldChecksum;
          },
        });
      }
    }

    describe("novel request checksum", () => {
      it("should send a request with the novel checksum in the header if the implementation is provided", async () => {
        const s3 = new S3({
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          extensions: [new HelloWorldChecksumExtension()],
        });
        requireRequestsFrom(s3).toMatch({
          headers: {
            "x-amz-checksum-helloworld": toBase64(fromUtf8("Hello, world.2")),
          },
        });

        await s3.putObject({
          Bucket: "bucket",
          Key: "key",
          Body: "hi",
          ChecksumAlgorithm: "HELLOWORLD" as any,
        });

        expect.assertions(1);
      });

      it("should throw an error if the requested algorithm implementation is not available", async () => {
        const s3 = new S3({
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          extensions: [],
        });
        requireRequestsFrom(s3).toMatch({
          headers: {
            "x-amz-checksum-helloworld": toBase64(fromUtf8("Hello, world.2")),
          },
        });

        try {
          await s3.putObject({
            Bucket: "bucket",
            Key: "key",
            Body: "hi",
            ChecksumAlgorithm: "HELLOWORLD" as any,
          });
        } catch (e) {
          expect(e.message).toMatch(/The checksum algorithm "HELLOWORLD" is not supported by the client/);
        }

        expect.assertions(1);
      });
    });

    describe("novel response checksum", () => {
      it("should receive a request and verify the novel checksum", async () => {
        const s3 = new S3({
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          extensions: [new HelloWorldChecksumExtension()],
        });

        requireRequestsFrom(s3)
          .toMatch({
            hostname: "bucket.s3.us-west-2.amazonaws.com",
          })
          .respondWith(
            new HttpResponse({
              statusCode: 200,
              headers: {
                "x-amz-checksum-helloworld": toBase64(fromUtf8("Hello, world.2")),
              },
              body: Readable.from(Buffer.from("hi_extra_bytes")),
            })
          );

        const get = await s3.getObject({
          Bucket: "bucket",
          Key: "key",
        });

        expect.assertions(3);

        expect(get.Body).toBeInstanceOf(ChecksumStream);
        try {
          await get.Body?.transformToByteArray();
        } catch (e) {
          const [ex, ac] = [toBase64(fromUtf8("Hello, world.2")), toBase64(fromUtf8("Hello, world.14"))];
          expect(e.message).toEqual(
            `
Checksum mismatch: expected "${ex}" but received "${ac}" in response header "x-amz-checksum-helloworld".
`.trim()
          );
        }
      });

      it("should ignore the checksum header and perform no checksum validation if no matching algorithm implementation is available", async () => {
        const s3 = new S3({
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          extensions: [],
        });

        requireRequestsFrom(s3)
          .toMatch({
            hostname: "bucket.s3.us-west-2.amazonaws.com",
          })
          .respondWith(
            new HttpResponse({
              statusCode: 200,
              headers: {
                "x-amz-checksum-helloworld": toBase64(fromUtf8("Hello, world.2")),
              },
              body: Readable.from(Buffer.from("hi_extra_bytes")),
            })
          );

        const get = await s3.getObject({
          Bucket: "bucket",
          Key: "key",
        });

        expect.assertions(3);

        expect(get.Body).not.toBeInstanceOf(ChecksumStream);

        const objectContent = await get.Body?.transformToString();
        expect(objectContent).toEqual("hi_extra_bytes");
      });
    });
  });
});
