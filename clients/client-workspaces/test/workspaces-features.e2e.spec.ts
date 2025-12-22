import { WorkSpaces } from "@aws-sdk/client-workspaces";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(WorkSpaces.name, () => {
  let client: WorkSpaces;

  beforeAll(async () => {
    client = new WorkSpaces({ region: "us-west-2" });
  });

  describe("Describing workspaces", () => {
    it("should successfully describe workspaces", async () => {
      const result = await client.describeWorkspaces({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Workspaces)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for empty rebuild requests", async () => {
      await expect(
        client.rebuildWorkspaces({
          RebuildWorkspaceRequests: [],
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
