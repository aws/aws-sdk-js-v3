import { GameLift } from "@aws-sdk/client-gamelift";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(GameLift.name, () => {
  let client: GameLift;

  beforeAll(async () => {
    client = new GameLift({ region: "us-west-2" });
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
