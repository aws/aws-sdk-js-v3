// see supplemental-docs/MD5_FALLBACK for more details
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
  }, 60_000);

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
  }, 60_000);

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

    const md5Middleware =
      (next: FinalizeHandler<ServiceInputTypes, ServiceOutputTypes>, context: HandlerExecutionContext) =>
      async (args: FinalizeHandlerArguments<ServiceInputTypes>): Promise<FinalizeHandlerOutput<ServiceOutputTypes>> => {
        const request = args.request as HttpRequest;
        const isDeleteObjects = context.commandName === "DeleteObjectsCommand";

        if (!isDeleteObjects) {
          return next(args);
        }

        const headers = request.headers;

        // Log headers *before* modification
        // console.log(`[${context.commandName}] Headers before MD5 middleware:`, JSON.stringify(headers, null, 2));

        // Remove checksum headers
        Object.keys(headers).forEach((header) => {
          const lowerHeader = header.toLowerCase();
          if (lowerHeader.startsWith("x-amz-checksum-") || lowerHeader.startsWith("x-amz-sdk-checksum-")) {
            // console.log(`[${context.commandName}] Removing header: ${header}`);
            delete headers[header];
            crc32Removed = true;
          }
        });

        // Add MD5
        if (request.body) {
          const bodyContent = Buffer.from(request.body);
          const md5Hash = createHash("md5").update(bodyContent).digest("base64");
          headers["Content-MD5"] = md5Hash;
          // console.log(`[${context.commandName}] Added Content-MD5: ${md5Hash}`);
          md5Added = true;
        }

        // Log headers *after* modification
        // console.log(`[${context.commandName}] Headers after MD5 middleware:`, JSON.stringify(headers, null, 2));

        return await next(args);
      };

    // Add the middleware relative to the flexible checksums middleware
    md5S3Client.middlewareStack.addRelativeTo(md5Middleware, {
      relation: "after",
      toMiddleware: "flexibleChecksumsMiddleware",
      name: "addMD5Checksum",
      tags: ["MD5_CHECKSUM"],
    });

    // Log the entire middleware stack for debugging if needed
    // console.log("Middleware Stack:", md5S3Client.middlewareStack.identify());

    const response = await md5S3Client.send(
      new DeleteObjectsCommand({
        Bucket,
        Delete: {
          Objects: [{ Key: testFiles[1] }],
        },
      })
    );

    expect(response.Deleted?.length).toBe(1);
    expect(md5Added).toBe(true);
    expect(crc32Removed).toBe(true);
  });
});
