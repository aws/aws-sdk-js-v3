// packages/middleware-flexible-checksums/src/middleware-md5-fallback.e2e.spec.ts
import {
  CreateBucketCommand,
  DeleteBucketCommand,
  DeleteObjectsCommand,
  PutObjectCommand,
  S3,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-s3";
import type {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  HttpRequest,
} from "@smithy/types";
import { createHash } from "crypto";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("S3 MD5 Fallback for DeleteObjects", () => {
  let s3: S3;
  let Bucket: string;
  const testFiles = ["md5-test-1.txt", "md5-test-2.txt"];

  beforeAll(async () => {
    s3 = new S3({ region: "us-west-2" });
    Bucket = `md5-fallback-test-${Date.now()}`;

    try {
      await s3.send(new CreateBucketCommand({ Bucket }));
      await new Promise((resolve) => setTimeout(resolve, 2000));

      for (const Key of testFiles) {
        await s3.send(
          new PutObjectCommand({
            Bucket,
            Key,
            Body: "test content",
          })
        );
      }
    } catch (err) {
      console.error("Setup failed:", err);
      throw err;
    }
  });

  afterAll(async () => {
    try {
      await s3.send(
        new DeleteObjectsCommand({
          Bucket,
          Delete: {
            Objects: testFiles.map((Key) => ({ Key })),
          },
        })
      );
      await s3.send(new DeleteBucketCommand({ Bucket }));
    } catch (error) {
      console.error("Cleanup failed:", error);
    }
  });

  it("should use CRC32 checksum by default for DeleteObjects", async () => {
    const response = await s3.send(
      new DeleteObjectsCommand({
        Bucket,
        Delete: {
          Objects: [{ Key: testFiles[0] }],
        },
      })
    );

    // operation successfully deleted exactly one object (CRC32 being used)
    expect(response.Deleted?.length).toBe(1);
  });

  it("should use MD5 checksum for DeleteObjects with middleware", async () => {
    const md5S3Client = new S3({ region: "us-west-2" });
    let md5Added = false;
    let crc32Removed = false;

    md5S3Client.middlewareStack.add(
      (next: FinalizeHandler<ServiceInputTypes, ServiceOutputTypes>, context: HandlerExecutionContext) =>
        async (
          args: FinalizeHandlerArguments<ServiceInputTypes>
        ): Promise<FinalizeHandlerOutput<ServiceOutputTypes>> => {
          const request = args.request as HttpRequest;
          const isDeleteObjects = context.commandName === "DeleteObjectsCommand";

          if (!isDeleteObjects) {
            return next(args);
          }

          const result = await next(args);
          const headers = request.headers;

          // Remove checksum headers
          Object.keys(headers).forEach((header) => {
            if (
              header.toLowerCase().startsWith("x-amz-checksum-") ||
              header.toLowerCase().startsWith("x-amz-sdk-checksum-")
            ) {
              delete headers[header];
              crc32Removed = true;
            }
          });

          // Add MD5
          if (request.body) {
            const bodyContent = Buffer.from(request.body);
            const md5Hash = createHash("md5").update(bodyContent).digest("base64");
            headers["Content-MD5"] = md5Hash;
            md5Added = true;
          }

          return result;
        },
      {
        step: "finalizeRequest",
        name: "addMD5Checksum",
      }
    );

    const response = await md5S3Client.send(
      new DeleteObjectsCommand({
        Bucket,
        Delete: {
          Objects: [{ Key: testFiles[1] }],
        },
      })
    );

    // If MD5 wasn't properly set, this call will fail
    expect(response.Deleted?.length).toBe(1);
    expect(md5Added).toBe(true);
    expect(crc32Removed).toBe(true);
  });
});
