import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { WorkSpaces } from "@aws-sdk/client-workspaces";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon WorkSpaces Features", () => {
  let client: WorkSpaces;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new WorkSpaces({ region });
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
