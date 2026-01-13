import { EFS } from "@aws-sdk/client-efs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(EFS.name, () => {
  let client: EFS;

  beforeAll(async () => {
    client = new EFS({ region: "us-west-2" });
  });

  describe("Listing file systems", () => {
    it("should successfully describe file systems", async () => {
      const result = await client.describeFileSystems({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.FileSystems)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for fake file system ID", async () => {
      await expect(
        client.deleteFileSystem({
          FileSystemId: "fake-id",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
