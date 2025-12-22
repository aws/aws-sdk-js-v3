import { Route53 } from "@aws-sdk/client-route-53";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(Route53.name, () => {
  let client: Route53;

  beforeAll(async () => {
    client = new Route53({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully list hosted zones", async () => {
      const result = await client.listHostedZones({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.HostedZones)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain no such hosted zone error for fake zone ID", async () => {
      await expect(
        client.getHostedZone({
          Id: "fake-zone",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "NoSuchHostedZone",
        })
      );
    });
  });
});
