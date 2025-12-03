import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DirectConnect } from "@aws-sdk/client-direct-connect";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Direct Connect", () => {
  let client: DirectConnect;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DirectConnect({ region });
  });

  describe("describe connections", () => {
    it("should successfully describe connections", async () => {
      const result = await client.describeConnections({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.connections)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain client exception for invalid location", async () => {
      await expect(
        client.createConnection({
          location: "invalid-location",
          bandwidth: "1Gbps",
          connectionName: "test-connection",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "DirectConnectClientException",
        })
      );
    });
  });
});
