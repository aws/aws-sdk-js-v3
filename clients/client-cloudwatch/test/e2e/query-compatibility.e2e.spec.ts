import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";

describe("CloudWatch Query Compatibility E2E", () => {
  let client: CloudWatchClient;
  let region: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudWatchClient({ region });
  });

  it("AmbiguousErrorResolution", async () => {
    const command = new GetDashboardCommand({
      DashboardName: "foo",
    });

    try {
      await client.send(command);
      fail("Expected ResourceNotFound error");
    } catch (error: any) {
      expect(error.name).toBe("ResourceNotFound");
    }
  });
});
