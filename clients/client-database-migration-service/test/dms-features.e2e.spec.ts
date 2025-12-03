import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DatabaseMigrationService } from "@aws-sdk/client-database-migration-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Database Migration Service Features", () => {
  let client: DatabaseMigrationService;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DatabaseMigrationService({ region });
  });

  describe("Making a request", () => {
    it("should successfully describe endpoints", async () => {
      const result = await client.describeEndpoints({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Endpoints)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid parameter error for fake ARN", async () => {
      await expect(
        client.startReplicationTask({
          ReplicationTaskArn: "fake-arn",
          StartReplicationTaskType: "start-replication",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidParameterValueException",
        })
      );
    });
  });
});
