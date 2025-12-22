import { DatabaseMigrationService } from "@aws-sdk/client-database-migration-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DatabaseMigrationService.name, () => {
  let client: DatabaseMigrationService;

  beforeAll(async () => {
    client = new DatabaseMigrationService({ region: "us-west-2" });
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
