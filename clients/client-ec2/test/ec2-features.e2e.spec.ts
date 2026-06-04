import { EC2, EC2ServiceException } from "@aws-sdk/client-ec2";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(EC2.name, () => {
  let client: EC2;

  beforeAll(async () => {
    client = new EC2({ region: "us-west-2", credentials: aws?.testCredentials });
  });

  describe("Describe regions", () => {
    it("should return a list of AWS regions", async () => {
      const result = await client.describeRegions({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Regions)).toBe(true);
      expect(result.Regions!.length).toBeGreaterThan(0);

      const regionNames = result.Regions!.map((r) => r.RegionName);
      expect(regionNames).toContain("us-west-2");
    });
  });

  describe("Describe instances", () => {
    it("should successfully describe instances", async () => {
      const result = await client.describeInstances({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Reservations)).toBe(true);
    });
  });

  describe("Error types", () => {
    it("should throw an error for non-existent VPC", async () => {
      try {
        await client.describeVpcs({ VpcIds: ["vpc-0123456789abcdef0"] });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(EC2ServiceException);
        expect(Object.getPrototypeOf(e)).toBe(EC2ServiceException.prototype);
        expect(e.name).toBe("InvalidVpcID.NotFound");
        expect(e.$metadata.httpStatusCode).toBe(400);
      }
    });

    it("should throw a base EC2ServiceException for malformed input", async () => {
      try {
        await client.describeInstances({ InstanceIds: ["not-valid"] });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(EC2ServiceException);
        expect(Object.getPrototypeOf(e)).toBe(EC2ServiceException.prototype);
        expect(e.name).toBe("InvalidInstanceID.Malformed");
        expect(e.$metadata.httpStatusCode).toBe(400);
      }
    });
  });
});
