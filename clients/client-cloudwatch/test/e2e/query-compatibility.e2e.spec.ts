import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("CloudWatch Query Compatibility E2E", () => {
  let client: CloudWatchClient;

  beforeAll(() => {
    client = new CloudWatchClient({
      region: "us-west-2",
    });
  });

  afterAll(() => {
    client.destroy();
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
