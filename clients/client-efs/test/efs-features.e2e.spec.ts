import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { EFS } from "@aws-sdk/client-efs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Elastic File System Features", () => {
  let client: EFS;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new EFS({ region });
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
