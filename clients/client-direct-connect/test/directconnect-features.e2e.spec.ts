import { DirectConnect } from "@aws-sdk/client-direct-connect";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DirectConnect.name, () => {
  let client: DirectConnect;

  beforeAll(async () => {
    client = new DirectConnect({ region: "us-west-2" });
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
