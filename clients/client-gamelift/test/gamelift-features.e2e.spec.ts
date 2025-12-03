import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { GameLift } from "@aws-sdk/client-gamelift";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon GameLift Features", () => {
  let client: GameLift;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new GameLift({ region });
  });

  describe("Making a request", () => {
    it("should successfully list builds", async () => {
      const result = await client.listBuilds({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Builds)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid request eexception for fake alias ID", async () => {
      await expect(
        client.describeAlias({
          AliasId: "fake_id",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidRequestException",
        })
      );
    });
  });
});
