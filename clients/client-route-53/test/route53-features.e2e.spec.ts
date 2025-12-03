import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Route53 } from "@aws-sdk/client-route-53";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Route 53 Features", () => {
  let client: Route53;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new Route53({ region });
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
