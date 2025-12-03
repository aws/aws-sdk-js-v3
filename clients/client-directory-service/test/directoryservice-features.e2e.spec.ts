import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DirectoryService } from "@aws-sdk/client-directory-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Directory Service Features", () => {
  let client: DirectoryService;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DirectoryService({ region });
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
