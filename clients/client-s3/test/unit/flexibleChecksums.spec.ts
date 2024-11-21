import { ChecksumAlgorithm } from "@aws-sdk/middleware-flexible-checksums";
import { HttpRequest } from "@smithy/protocol-http";
import { BuildMiddleware } from "@smithy/types";
import { Readable } from "stream";
import { describe, expect, test as it } from "vitest";

import { ChecksumAlgorithm as Algo, S3 } from "../../src/index";

describe("Flexible Checksums", () => {
  const testCases: [string, string, string][] = [
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

  describe("putObject", () => {
    describe.each(testCases)(
      `for body="%s" and checksumAlgorithm="%s", sets checksum="%s"`,
      (body, checksumAlgorithm, checksumValue) => {
        const checksumHeader = `x-amz-checksum-${checksumAlgorithm.toLowerCase()}`;
        const getBodyAsReadableStream = (content: string) => {
          const readableStream = new Readable();
          const separator = " ";
          const wordsAsChunks = content.split(separator);
          wordsAsChunks.forEach((word, index) => {
            readableStream.push(word);
            if (index !== wordsAsChunks.length - 1) {
              readableStream.push(separator);
            }
          });
          readableStream.push(null);
          return readableStream;
        };

        it(`when body is sent as a string`, async () => {
          const requestChecksumValidator: BuildMiddleware<any, any> = (next) => async (args) => {
            // middleware intercept the request and return it early
            const request = args.request as HttpRequest;
            const { headers } = request;

            expect(headers["x-amz-sdk-checksum-algorithm"]).toEqual(checksumAlgorithm);
            expect(headers[checksumHeader]).toEqual(checksumValue);

            return { output: {} as any, response: {} as any };
          };

          const client = new S3({
            region: "us-west-2",
            credentials: {
              accessKeyId: "CLIENT_TEST",
              secretAccessKey: "CLIENT_TEST",
            },
          });
          client.middlewareStack.addRelativeTo(requestChecksumValidator, {
            relation: "after",
            toMiddleware: "flexibleChecksumsMiddleware",
          });

          return await client.putObject({
            Bucket: "bucket",
            Key: "key",
            Body: body,
            ChecksumAlgorithm: checksumAlgorithm as Algo,
          });
        });

        it(`when body is sent as a stream`, async () => {
          const requestChecksumValidator: BuildMiddleware<any, any> = (next) => async (args) => {
            // middleware intercept the request and return it early
            const request = args.request as HttpRequest;
            const { headers, body } = request;
            expect(headers["content-length"]).toBeUndefined();
            expect(headers["content-encoding"]).toEqual("aws-chunked");
            expect(headers["transfer-encoding"]).toEqual("chunked");
            expect(headers["x-amz-content-sha256"]).toEqual("STREAMING-UNSIGNED-PAYLOAD-TRAILER");
            expect(headers["x-amz-trailer"]).toEqual(checksumHeader);
            body.on("data", (data: any) => {
              const stringValue = data.toString();
              if (stringValue.startsWith(checksumHeader)) {
                const receivedChecksum = stringValue.replace("\r\n", "").split(":")[1];
                expect(receivedChecksum).toEqual(checksumValue);
              }
            });
            return { output: {} as any, response: {} as any };
          };

          const client = new S3({
            region: "us-west-2",
            credentials: {
              accessKeyId: "CLIENT_TEST",
              secretAccessKey: "CLIENT_TEST",
            },
          });
          client.middlewareStack.addRelativeTo(requestChecksumValidator, {
            relation: "after",
            toMiddleware: "flexibleChecksumsMiddleware",
          });

          const bodyStream = getBodyAsReadableStream(body);
          await client.putObject({
            Bucket: "bucket",
            Key: "key",
            Body: bodyStream,
            ChecksumAlgorithm: checksumAlgorithm as Algo,
          });
        });
      }
    );
  });

  describe("getObject", async () => {
    it.each(testCases)(
      `for body="%s" and checksumAlgorithm="%s", validates ChecksumMode`,
      async (body, checksumAlgorithm, checksumValue) => {
        const checksumHeader = `x-amz-checksum-${checksumAlgorithm.toLowerCase()}`;

        const responseBody = new Readable();
        responseBody.push(body);
        responseBody.push(null);
        const responseChecksumValidator: BuildMiddleware<any, any> = (next, context) => async (args) => {
          const request = args.request as HttpRequest;
          return {
            output: {
              $metadata: { attempts: 0, httpStatusCode: 200 },
              request,
              context,
              Body: responseBody,
            } as any,
            response: {
              body: responseBody,
              headers: {
                [checksumHeader]: checksumValue,
              },
            } as any,
          };
        };

        const client = new S3({
          region: "us-west-2",
          credentials: {
            accessKeyId: "CLIENT_TEST",
            secretAccessKey: "CLIENT_TEST",
          },
        });
        client.middlewareStack.addRelativeTo(responseChecksumValidator, {
          relation: "after",
          toMiddleware: "flexibleChecksumsMiddleware",
        });

        const { Body } = await client.getObject({
          Bucket: "bucket",
          Key: "key",
          ChecksumMode: "ENABLED",
        });
        (Body as Readable).on("data", (chunk) => {
          expect(chunk.toString()).toEqual(body);
        });
      }
    );
  });
});
