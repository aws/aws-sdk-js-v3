// @vitest-environment happy-dom
import { type HttpRequest, HttpResponse } from "@smithy/core/protocols";
import type { StreamHasher } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

// @ts-expect-error The browser test bundle has no type declarations.
import { S3 } from "../browser-build/browser-s3-bundle.js";

describe("browser PutObject checksums", () => {
  const bytes = new TextEncoder().encode("123456789");

  async function putObject(body: Uint8Array | Blob, expectedChecksum: string, streamHasher?: StreamHasher<Blob>) {
    const client = new S3({
      region: "us-west-2",
      credentials: { accessKeyId: "INTEG", secretAccessKey: "INTEG" },
      streamHasher,
      requestHandler: {
        async handle(request: HttpRequest) {
          expect(request.headers["x-amz-checksum-crc32"]).toBe(expectedChecksum);
          expect(request.body).toBe(body);
          return { response: new HttpResponse({ statusCode: 200 }) };
        },
      },
    });

    await client.putObject({ Bucket: "bucket", Key: "key", Body: body });
    expect.hasAssertions();
  }

  it.each([
    { type: "Uint8Array", body: bytes },
    { type: "Blob", body: new Blob([bytes]) },
    { type: "File", body: new File([bytes], "upload.txt") },
  ])("sends the default CRC32 checksum for a $type body", async ({ body }) => {
    await putObject(body, "y/Q5Jg==");
  });

  it("uses the configured streamHasher for a File body", async () => {
    const file = new File([bytes], "upload.txt");
    await putObject(file, "AQIDBA==", async (_hashCtor, body) => {
      expect(body).toBe(file);
      return Uint8Array.of(1, 2, 3, 4);
    });
  });
});
