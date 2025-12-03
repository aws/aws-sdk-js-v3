import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SWF } from "@aws-sdk/client-swf";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Simple Workflow Service Features", () => {
  let client: SWF;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SWF({ region });
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
