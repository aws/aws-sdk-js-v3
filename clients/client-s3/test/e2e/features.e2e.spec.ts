import fs from "node:fs";
import path from "node:path";

import { S3 } from "@aws-sdk/client-s3";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";

describe("@aws-sdk/client-s3", () => {
  let client: S3;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;

    client = new S3({ region });
  });

  async function putObject(Body: string, Key: string) {
    await client.putObject({
      Bucket,
      Key,
      Body,
    });
  }

  async function putBuffer(Body: Uint8Array, Key: string) {
    await client.putObject({
      Bucket,
      Key,
      Body,
    });
  }

  async function copyObject(from: string, to: string) {
    await client.copyObject({
      Bucket,
      Key: to,
      CopySource: `/${Bucket}/${from}`,
    });
  }

  async function getObject(Key: string) {
    return (
      await client.getObject({
        Bucket,
        Key,
      })
    ).Body?.transformToString();
  }

  async function objectExists(Key: string) {
    try {
      await client.headObject({
        Bucket,
        Key,
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async function deleteObject(Key: string) {
    await client.deleteObject({
      Bucket,
      Key,
    });
  }

  describe("CRUD operations", () => {
    it("should perform basic CRUD operations on objects", async () => {
      await putObject("world", "hello");
      expect(await objectExists("hello")).toBe(true);

      const obj = await getObject("hello");
      expect(obj).toBe("world");

      await putObject("new world", "hello");
      expect(await objectExists("hello")).toBe(true);

      const updatedObj = await getObject("hello");
      expect(updatedObj).toBe("new world");

      await deleteObject("hello");
      expect(await objectExists("hello")).toBe(false);
    });
  });

  describe("Content length", () => {
    it("should handle content length", async () => {
      await client.putObject({
        Bucket,
        Key: "contentlength",
        Body: "foo",
        ContentLength: 3,
      });
      expect(await objectExists("contentlength")).toBe(true);

      const obj = await getObject("contentlength");
      expect(obj).toBe("foo");
    });
  });

  describe("Multi-byte strings", () => {
    it("should handle multi-byte strings", async () => {
      await putObject("åß∂ƒ©", "multi");
      expect(await objectExists("multi")).toBe(true);

      const obj = await client.getObject({
        Bucket,
        Key: "multi",
      });

      const str = String(await obj.Body?.transformToString());

      expect(str).toBe("åß∂ƒ©");
      expect(str.length).toBe(5);
      expect(obj.ContentLength).toBe(11);
    });
  });

  describe("Object copying", () => {
    it("should copy objects", async () => {
      await putObject("world", "hello");
      await copyObject("hello", "byebye");

      expect(await objectExists("byebye")).toBe(true);

      const obj = await getObject("byebye");
      expect(obj).toBe("world");

      await deleteObject("byebye");
    });
  });

  describe("Empty objects", () => {
    it("should handle empty strings", async () => {
      await putObject("", "blank");
      expect(await objectExists("blank")).toBe(true);

      const obj = await getObject("blank");
      expect(obj).toBe("");
      expect(obj).toHaveLength(0);
    });
  });

  describe("Buffers", () => {
    it("should handle empty buffers", async () => {
      await putBuffer(Buffer.alloc(0), "emptybuffer");
      expect(await objectExists("emptybuffer")).toBe(true);

      const obj = await getObject("emptybuffer");
      expect(obj).toHaveLength(0);
    });

    it("should handle small buffers", async () => {
      await putBuffer(Buffer.alloc(1048576), "smallbuffer");
      expect(await objectExists("smallbuffer")).toBe(true);

      const obj = await getObject("smallbuffer");
      expect(obj).toHaveLength(1048576);
    });

    it("should handle large buffers", async () => {
      await putBuffer(Buffer.alloc(20971520), "largebuffer");
      expect(await objectExists("largebuffer")).toBe(true);

      const obj = await getObject("largebuffer");
      expect(obj).toHaveLength(20971520);
    });
  });

  describe("Files", () => {
    beforeAll(async () => {
      fs.writeFileSync(path.join(__dirname, "emptyfile"), "a".repeat(0));
      fs.writeFileSync(path.join(__dirname, "smallfile"), "a".repeat(1048576));
      fs.writeFileSync(path.join(__dirname, "largefile"), "a".repeat(20971520));
    });

    afterAll(async () => {
      fs.rmSync(path.join(__dirname, "emptyfile"));
      fs.rmSync(path.join(__dirname, "smallfile"));
      fs.rmSync(path.join(__dirname, "largefile"));
    });

    it("should handle empty files", async () => {
      await client.putObject({
        Bucket,
        Key: "emptyfile",
        Body: fs.createReadStream(path.join(__dirname, "emptyfile")),
      });
      expect(await objectExists("emptyfile")).toBe(true);

      const obj = await getObject("emptyfile");
      expect(obj).toHaveLength(0);
    });

    it("should handle small files", async () => {
      await client.putObject({
        Bucket,
        Key: "smallfile",
        Body: fs.createReadStream(path.join(__dirname, "smallfile")),
      });
      expect(await objectExists("smallfile")).toBe(true);

      const obj = await getObject("smallfile");
      expect(obj).toHaveLength(1048576);
    });

    it("should handle large files", async () => {
      await client.putObject({
        Bucket,
        Key: "largefile",
        Body: fs.createReadStream(path.join(__dirname, "largefile")),
      });
      expect(await objectExists("largefile")).toBe(true);

      const obj = await getObject("largefile");
      expect(obj).toHaveLength(20971520);
    });
  });

  // describe("Checksums", () => {
  // it("should verify data integrity", async () => {
  //   const data = "SOME SAMPLE DATA";
  //   const checksum = generateMD5(data);
  //
  //   await putObject(data, "checksummed_data");
  //   expect(await objectExists("checksummed_data")).toBe(true);
  //
  //   const obj = await getObject("checksummed_data");
  //   expect(obj).toBe(data);
  //   expect(obj).toHaveLength(16);
  //   expect(generateMD5(obj)).toBe(checksum);
  // });
  // });

  // describe("Pre-signed URLs", () => {
  //   it("should handle pre-signed PUT/GET", async () => {
  //     const putUrl = await getPresignedUrl("PUT", "presigned", "");
  //     await putWithPresignedUrl(putUrl, "PRESIGNED BODY CONTENTS");
  //
  //     const getUrl = await getPresignedUrl("GET", "presigned");
  //     const response = await getWithPresignedUrl(getUrl);
  //     expect(response).toBe("PRESIGNED BODY CONTENTS");
  //   });
  //
  //   it("should validate checksums", async () => {
  //     const putUrl = await getPresignedUrl("PUT", "hello", "CHECKSUMMED");
  //     const response = await putWithPresignedUrl(putUrl, "NOT CHECKSUMMED");
  //     expect(response).toContain("SignatureDoesNotMatch");
  //   });
  // });
  //
  // describe("Proxy support", () => {
  //   it("should work through proxy", async () => {
  //     await putObject("world", "proxy_object");
  //     expect(await objectExists("proxy_object")).toBe(true);
  //
  //     const obj = await getObject("proxy_object");
  //     expect(obj).toBe("world");
  //
  //     await deleteObject("proxy_object");
  //     expect(await objectExists("proxy_object")).toBe(false);
  //
  //     await teardownProxy();
  //   });
  // });
}, 60_000);
