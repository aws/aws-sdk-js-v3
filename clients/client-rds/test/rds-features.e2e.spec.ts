import { paginateDescribeReservedDBInstancesOfferings, RDS } from "@aws-sdk/client-rds";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(RDS.name, () => {
  let client: RDS;
  let dbSecurityGroupName: string;
  const createdSecurityGroups: string[] = [];

  beforeAll(async () => {
    client = new RDS({ region: "us-west-2" });
  });

  afterAll(async () => {
    // Cleanup all created security groups
    for (const groupName of createdSecurityGroups) {
      try {
        await client.deleteDBSecurityGroup({
          DBSecurityGroupName: groupName,
        });
      } catch (error) {
        console.warn(`Failed to delete security group ${groupName}:`, error);
      }
    }
  });

  describe("Describe DB security group", () => {
    it("should create security group, describe it, and verify structure", async () => {
      dbSecurityGroupName = `aws-sdk-js-rds-e2e-${Date.now()}`;

      const expectedDescription = "Test security group for e2e tests";

      // Create RDS security group
      const createResult = await client.createDBSecurityGroup({
        DBSecurityGroupName: dbSecurityGroupName,
        DBSecurityGroupDescription: expectedDescription,
      });
      createdSecurityGroups.push(dbSecurityGroupName);

      expect(createResult.$metadata?.httpStatusCode).toBe(200);
      expect(createResult.DBSecurityGroup?.DBSecurityGroupName).toBe(dbSecurityGroupName);

      // Describe DB security groups
      const describeResult = await client.describeDBSecurityGroups({});

      expect(describeResult.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(describeResult.DBSecurityGroups)).toBe(true);

      // Verify the security group contains the DBSecurityGroupDescription
      const foundGroup = describeResult.DBSecurityGroups?.find(
        (group) => group.DBSecurityGroupName === dbSecurityGroupName
      );

      expect(foundGroup?.DBSecurityGroupDescription).toBe(expectedDescription);
    });
  });

  describe("Error handling", () => {
    it("should get InvalidParameterValue with 400 status for empty security group name", async () => {
      try {
        await client.createDBSecurityGroup({
          DBSecurityGroupName: "", // Empty name should cause InvalidParameterValue
          DBSecurityGroupDescription: "Test security group",
        });
      } catch (error: any) {
        expect(error.name).toBe("InvalidParameterValue");
        expect(error.$metadata?.httpStatusCode).toBe(400);
      }
    });
  });

  describe("Paginating responses", () => {
    it("should paginate describeReservedDBInstancesOfferings with more than one page", async () => {
      const maxPages = 3;
      const limit = 100;
      let numPages = 0;
      let numMarkers = 0;

      const paginator = paginateDescribeReservedDBInstancesOfferings(
        {
          client,
          pageSize: limit,
        },
        {}
      );

      for await (const page of paginator) {
        numPages++;
        if (page.Marker) {
          numMarkers++;
        }

        // Stop after maxPages to avoid long test execution
        if (numPages >= maxPages) {
          break;
        }
      }

      // Should get more than one page
      expect(numPages).toBeGreaterThan(1);
      expect(numMarkers).toBeGreaterThan(0);
    });
  });
});
