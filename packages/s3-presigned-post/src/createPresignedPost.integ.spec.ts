// Run using AWS_SMOKE_TEST_REGION=[Region] AWS_SMOKE_TEST_BUCKET=[Bucket] yarn test:e2e
// These params are established in /tests/e2e.

import { NoSuchKey, S3 } from "@aws-sdk/client-s3";
const FormData = require("form-data");

import { createReadStream, existsSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { createPresignedPost } from "./createPresignedPost";

const region = process.env.AWS_SMOKE_TEST_REGION ?? "";
const Bucket = process.env.AWS_SMOKE_TEST_BUCKET ?? "";
if (!Bucket) {
  throw new Error("process.env.AWS_SMOKE_TEST_BUCKET is not set.");
}
if (!region) {
  throw new Error("process.env.AWS_SMOKE_TEST_REGION is not set.");
}

describe(createPresignedPost.name, () => {
  it("should allow custom endpoints to be modified by endpoint resolution options", async () => {
    const Key = "test-key";
    {
      const client = new S3({
        region,
        forcePathStyle: true,
        endpoint: `https://s3.dualstack.${region}.amazonaws.com`,
      });
      const { url } = await createPresignedPost(client, { Bucket, Key });
      expect(url).toBe(`https://s3.dualstack.${region}.amazonaws.com/${Bucket}`);
    }
    {
      const client = new S3({ region, endpoint: `https://s3.dualstack.${region}.amazonaws.com` });
      const { url } = await createPresignedPost(client, { Bucket, Key });
      expect(url).toBe(`https://${Bucket}.s3.dualstack.${region}.amazonaws.com/`);
    }
  });

  describe("test with real bucket", () => {
    let Key: string;
    let client: S3;
    let contents: string;
    let fileLocation: string;

    beforeAll(async () => {
      Key = `aws-sdk-js-integration-test-s3-presigned-post-${Date.now()}.txt`;
      contents = "Hello, world!";
      fileLocation = join(__dirname, Key);
      client = new S3({ region, endpoint: `https://s3.dualstack.${region}.amazonaws.com` });

      await client.headBucket({ Bucket });
      writeFileSync(fileLocation, contents, "utf-8");
    });

    afterAll(async () => {
      if (existsSync(fileLocation)) {
        rmSync(fileLocation);
      }
    });

    beforeEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    afterEach(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    it("should put an object using a presigned post w/ custom endpoint", async () => {
      const { url, fields } = await createPresignedPost(client, { Bucket, Key });

      expect(url).toBe(`https://${Bucket}.s3.dualstack.${region}.amazonaws.com/`);

      const form = new FormData();
      Object.entries(fields).forEach(([field, value]) => {
        form.append(field, value);
      });
      form.append("file", createReadStream(fileLocation));

      const precheck = await client.getObject({ Bucket, Key }).catch((err) => err);
      expect(precheck).toBeInstanceOf(NoSuchKey);

      const submit: { statusCode: number } = await new Promise((resolve, reject) => {
        form.submit(url, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      });

      expect(submit.statusCode).toBe(204);

      const check = await client.getObject({ Bucket, Key });

      expect(await check.Body?.transformToString()).toEqual(contents);
    });
  });
});
