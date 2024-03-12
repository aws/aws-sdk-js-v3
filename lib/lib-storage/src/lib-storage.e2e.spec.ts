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
  });
});
