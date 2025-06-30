import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("CloudWatch Query Compatibility E2E", () => {
  let client: CloudWatchClient;

  beforeAll(async () => {
    client = new CloudWatchClient({
      region: "us-west-2",
    });
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
