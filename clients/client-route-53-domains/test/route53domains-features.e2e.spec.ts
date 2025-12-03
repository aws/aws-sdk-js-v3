import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Route53Domains } from "@aws-sdk/client-route-53-domains";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Route 53 Domains Features", () => {
  let client: Route53Domains;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    // Requests for domain registration only available in us-east-1
    region = "us-east-1";

    client = new Route53Domains({ region });
  });

  describe("Feature", () => {
    it("should successfully list Route53 domains", async () => {
      const result = await client.listDomains({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Domains)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid input error for invalid domain registration parameters", async () => {
      await expect(
        client.registerDomain({
          DomainName: "", // Empty domain name should cause InvalidInput
          DurationInYears: 1,
          AdminContact: {
            FirstName: "",
            LastName: "",
          },
          RegistrantContact: {
            FirstName: "",
            LastName: "",
          },
          TechContact: {
            FirstName: "",
            LastName: "",
          },
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidInput",
        })
      );
    });
  });
});
