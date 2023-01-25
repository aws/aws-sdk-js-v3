import { NoSuchKey, S3 } from "@aws-sdk/client-s3";
const FormData = require("form-data");
import { createReadStream, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { createPresignedPost } from "./createPresignedPost";

describe(createPresignedPost.name, () => {
  const Bucket = "aws-sdk-js-integration-test-s3-presigned-post";
  const Key = "temp-file.txt";
  const contents = "Hello, world!";
  const fileLocation = join(__dirname, Key);
  const client = new S3({ region: "us-east-1", endpoint: "https://s3-fips.dualstack.us-east-1.amazonaws.com" });

  it("should allow custom endpoints to be modified by endpoint resolution options", async () => {
    {
      const client = new S3({
        region: "us-east-1",
        forcePathStyle: true,
        endpoint: "https://s3-fips.dualstack.us-east-1.amazonaws.com",
      });
      const { url } = await createPresignedPost(client, {
        Bucket,
        Key,
      });
      expect(url).toBe(`https://s3-fips.dualstack.us-east-1.amazonaws.com/${Bucket}`);
    }
    {
      const client = new S3({ region: "us-east-1", endpoint: "https://s3-fips.dualstack.us-east-1.amazonaws.com" });
      const { url } = await createPresignedPost(client, {
        Bucket,
        Key,
      });
      expect(url).toBe(`https://${Bucket}.s3-fips.dualstack.us-east-1.amazonaws.com/`);
    }
  });

  describe("test with real bucket", () => {
    beforeEach(async () => {
      await client.deleteObject({
        Bucket,
        Key,
      });
    });

    afterEach(async () => {
      await client.deleteObject({
        Bucket,
        Key,
      });
    });

    beforeAll(async () => {
      await client.createBucket({
        Bucket,
      });
      writeFileSync(fileLocation, contents, "utf-8");
    });

    afterAll(async () => {
      rmSync(fileLocation);
    });

    it("should put an object using a presigned post w/ custom endpoint", async () => {
      const { url, fields } = await createPresignedPost(client, {
        Bucket,
        Key,
      });

      expect(url).toBe(`https://${Bucket}.s3-fips.dualstack.us-east-1.amazonaws.com/`);

      const form = new FormData();
      Object.entries(fields).forEach(([field, value]) => {
        form.append(field, value);
      });
      form.append("file", createReadStream(fileLocation));

      const precheck = await client
        .getObject({
          Bucket,
          Key,
        })
        .catch((err) => err);
      expect(precheck).toBeInstanceOf(NoSuchKey);

      const submit: { statusCode: number } = await new Promise((resolve, reject) => {
        form.submit(url, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      });

      expect(submit.statusCode).toBe(204);

      const check = await client.getObject({
        Bucket,
        Key,
      });

      expect(await check.Body?.transformToString()).toEqual(contents);
    });
  });
});
