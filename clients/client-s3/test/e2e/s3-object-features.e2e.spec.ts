import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { GetObjectCommand, PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";

describe("@aws-sdk/client-s3", () => {
  let client: S3;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

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

    describe("keys with special characters", () => {
      const keys = [
        `\r`,
        `\n`,
        `\x85`,
        `\u2028`,
        "\n \n",
        "a\r\n b\n c\r",
        "a\r\u0085 b\u0085",
        "a\r\u2028 b\u0085 c\u2028",
      ];

      beforeAll(async () => {
        await Promise.all(
          keys.map(async (Key) => {
            await client.putObject({
              Bucket,
              Key,
              Body: Key,
            });
          })
        );
      });

      afterAll(async () => {
        for (const key of keys) {
          await client
            .deleteObject({
              Bucket,
              Key: key,
            })
            .catch(() => {});
        }
      });

      it("can delete keys containing special characters", async () => {
        await client.deleteObjects({
          Bucket,
          Delete: {
            Objects: keys.map((Key) => ({
              Key,
            })),
          },
        });

        await Promise.all(
          keys.map(async (Key) => {
            return client
              .headObject({
                Bucket,
                Key,
              })
              .catch((e: any) => e)
              .then((r) => {
                expect((r ?? r.$response).$metadata.httpStatusCode).toEqual(404);
              });
          })
        );
      });
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

  describe("Checksums", () => {
    it("should have data integrity", async () => {
      const data = "SOME SAMPLE DATA";
      const checksum = crypto.createHash("sha256").update(data).digest("hex");

      await putObject(data, "checksummed_data");
      expect(await objectExists("checksummed_data")).toBe(true);

      const objectContents = await getObject("checksummed_data");
      expect(objectContents).toBe(data);
      expect(objectContents).toHaveLength(16);
      expect(
        crypto
          .createHash("sha256")
          .update(objectContents ?? "")
          .digest("hex")
      ).toBe(checksum);
    });
  });

  describe("Pre-signed URLs", () => {
    it("should handle pre-signed PUT/GET", async () => {
      const psu = await getSignedUrl(
        client,
        new PutObjectCommand({
          Bucket,
          Key: "presigned",
          Body: "",
        })
      );

      await fetch(psu, {
        method: "PUT",
        body: "PRESIGNED BODY CONTENTS",
      });

      expect(await getObject("presigned")).toEqual("PRESIGNED BODY CONTENTS");

      const getPsu = await getSignedUrl(
        client,
        new GetObjectCommand({
          Bucket,
          Key: "presigned",
        })
      );

      const response = await fetch(getPsu);
      expect(await response.text()).toEqual("PRESIGNED BODY CONTENTS");
    });
  });
}, 60_000);
