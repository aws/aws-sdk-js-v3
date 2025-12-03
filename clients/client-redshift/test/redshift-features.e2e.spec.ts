import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Redshift } from "@aws-sdk/client-redshift";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Redshift Features", () => {
  let client: Redshift;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new Redshift({ region });
  });

  describe("Describe cluster parameter groups", () => {
    it("should successfully describe cluster parameter groups", async () => {
      const result = await client.describeClusterParameterGroups({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.ParameterGroups)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid parameter error for empty parameter group name", async () => {
      try {
        await client.createClusterParameterGroup({
          ParameterGroupName: "", // Empty name should cause InvalidParameterValue
          ParameterGroupFamily: "redshift-1.0",
          Description: "Test parameter group",
        });
      } catch (error: any) {
        expect(error.name).toBe("InvalidParameterValue");
        expect(error.message).toContain("The parameter DBParameterGroupName must be provided and must not be blank");
      }
    });
  });
});
