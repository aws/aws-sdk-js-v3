import { SWF } from "@aws-sdk/client-swf";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(SWF.name, () => {
  let client: SWF;

  beforeAll(async () => {
    client = new SWF({ region: "us-west-2" });
  });

  describe("Listing domains", () => {
    it("should successfully list registered domains", async () => {
      const result = await client.listDomains({
        registrationStatus: "REGISTERED",
      });

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.domainInfos)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain unknown resource fault for fake domain", async () => {
      await expect(
        client.describeDomain({
          name: "fake-domain",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "UnknownResourceFault",
        })
      );
    });
  });
});
