/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { expect } from "chai";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "../index";
import { Credentials } from "@aws-sdk/types";
// There will be default values for them in browser tests.
declare let defaultRegion: string | undefined;
declare let credentials: Credentials | undefined;
declare let isBrowser: boolean | undefined;
// Define the values for Node.js tests
defaultRegion = defaultRegion || undefined;
credentials = credentials || undefined;
isBrowser = isBrowser || false;

const Bucket = "aws-sdk-unit-test"; // this bucket requires enabling CORS
const Key = `${Date.now()}`;

describe("@aws-sdk/client-s3", () => {
  const client = new S3Client({
    region: defaultRegion,
    credentials
  });

  after(async () => {
    await client.send(
      new DeleteObjectCommand({
        Bucket,
        Key
      })
    );
  });

  if (isBrowser) {
    it("PutObject should succeed when given blob body", async () => {
      const result = await client.send(
        new PutObjectCommand({
          Bucket,
          Key,
          Body: new Blob(["abc"])
        })
      );
      expect(result.$metadata.httpStatusCode).to.eql(200);
    });
  }
});
