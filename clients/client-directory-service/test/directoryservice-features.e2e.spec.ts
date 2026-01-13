import { DirectoryService } from "@aws-sdk/client-directory-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DirectoryService.name, () => {
  let client: DirectoryService;

  beforeAll(async () => {
    client = new DirectoryService({ region: "us-west-2" });
  });

  describe("Listing directories", () => {
    it("should successfully describe directories", async () => {
      const result = await client.describeDirectories({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.DirectoryDescriptions)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid parameters", async () => {
      await expect(
        client.createDirectory({
          Name: "",
          Password: "",
          Size: "" as any,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
