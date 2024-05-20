import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import type { AwsCredentialIdentity } from "@smithy/types";
import { randomBytes } from "crypto";
import { Readable } from "stream";

const region: string | undefined = process?.env?.AWS_SMOKE_TEST_REGION;
const credentials: AwsCredentialIdentity | undefined = (globalThis as any).credentials || undefined;
const Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET;

jest.setTimeout(45_000);

describe("@aws-sdk/lib-storage", () => {
  let Key = ``;
  const data = randomBytes(20_240_000);
  const dataString = data.toString();

  const client = new S3({
    region,
    credentials,
  });

  describe("Upload", () => {
    beforeAll(() => {
      Key = `multi-part-file-${Date.now()}`;
    });
    afterAll(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    for (const body of [data, dataString, Readable.from(data)]) {
      it("should upload in parts for input type " + body.constructor.name, async () => {
        const s3Upload = new Upload({
          client,
          params: {
            Bucket,
            Key,
            Body: body,
          },
        });
        await s3Upload.done();

        const object = await client.getObject({
          Bucket,
          Key,
        });

        expect(await object.Body?.transformToString()).toEqual(dataString);
      });
    }

    it("should call AbortMultipartUpload if unable to complete a multipart upload.", async () => {
      class MockFailureS3 extends S3 {
        public counter = 0;
        async send(command: any, ...rest: any[]) {
          if (command?.constructor?.name === "UploadPartCommand" && this.counter++ % 3 === 0) {
            throw new Error("simulated upload part error");
          }
          return super.send(command, ...rest);
        }
      }

      const client = new MockFailureS3({
        region,
        credentials,
      });

      const requestLog = [] as string[];

      client.middlewareStack.add(
        (next, context) => async (args) => {
          const result = await next(args);
          requestLog.push([context.clientName, context.commandName, result.output.$metadata.httpStatusCode].join(" "));
          return result;
        },
        {
          name: "E2eRequestLog",
          step: "build",
          override: true,
        }
      );

      const s3Upload = new Upload({
        client,
        params: {
          Bucket,
          Key,
          Body: data,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      await s3Upload.done().catch((ignored) => {});

      const uploadStatus = await client
        .listParts({
          Bucket,
          Key,
          UploadId: s3Upload.uploadId,
        })
        .then((listParts) => listParts.$metadata.httpStatusCode)
        .catch((err) => err.toString());

      expect(uploadStatus).toMatch(/NoSuchUpload:(.*?)aborted or completed\./);
      expect(requestLog).toEqual([
        "S3Client CreateMultipartUploadCommand 200",
        "S3Client UploadPartCommand 200",
        "S3Client UploadPartCommand 200",
        "S3Client AbortMultipartUploadCommand 204",
      ]);
    });
  });
});
