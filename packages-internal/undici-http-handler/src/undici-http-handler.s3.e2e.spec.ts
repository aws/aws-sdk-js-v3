import { S3 } from "@aws-sdk/client-s3";
import { randomBytes, randomUUID } from "node:crypto";
import { Readable } from "node:stream";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { UndiciHttpHandler } from "./index";

describe("S3", () => {
  const bucketName = `test-undici-http-handler-${randomUUID()}`;
  const client = new S3({ requestHandler: new UndiciHttpHandler() });

  beforeAll(async () => {
    await client.createBucket({ Bucket: bucketName });
    await client.waitUntilBucketExists({ Bucket: bucketName }, { maxWaitTime: 60 });
  });

  afterAll(async () => {
    // Empty the bucket in case of test failure
    const { Contents } = await client.listObjectsV2({ Bucket: bucketName });
    if (Contents) {
      for (const { Key } of Contents) {
        await client.deleteObject({ Bucket: bucketName, Key });
      }
    }

    // Delete the bucket
    await client.deleteBucket({ Bucket: bucketName });

    client.destroy();
  });

  const data = randomBytes(16 * 1024); // 16 KB of random data

  it.each([
    {
      type: "string",
      body: data.toString("base64"),
      expected: Buffer.from(data.toString("base64")),
    },
    { type: "Uint8Array", body: new Uint8Array(data), expected: data },
    { type: "Buffer", body: data, expected: data },
    { type: "Readable", body: Readable.from(data), expected: data },
  ])("put/get/delete with body as $type", async ({ body, expected }) => {
    const key = `test-object-${randomUUID()}`;

    // headObject should fail before put
    await expect(client.headObject({ Bucket: bucketName, Key: key })).rejects.toThrow();

    // Put the object
    const putResponse = await client.putObject({
      Bucket: bucketName,
      Key: key,
      Body: body,
      // ContentLength is required for streaming bodies (Readable) because handler cannot
      // determine the content length of a stream on its own, unlike string or Buffer bodies.
      ...(body instanceof Readable && { ContentLength: expected.length }),
    });
    expect(putResponse.$metadata.httpStatusCode).toBe(200);

    // Get the object
    const getResponse = await client.getObject({
      Bucket: bucketName,
      Key: key,
    });
    expect(getResponse.$metadata.httpStatusCode).toBe(200);

    const receivedBody = await getResponse.Body!.transformToByteArray();
    expect(Buffer.from(receivedBody)).toEqual(expected);

    // Delete the object
    const deleteResponse = await client.deleteObject({
      Bucket: bucketName,
      Key: key,
    });
    expect(deleteResponse.$metadata.httpStatusCode).toBe(204);

    // headObject should fail after delete
    await expect(client.headObject({ Bucket: bucketName, Key: key })).rejects.toThrow();
  });
});
