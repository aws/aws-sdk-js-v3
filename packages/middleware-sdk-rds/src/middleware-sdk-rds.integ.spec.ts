import { RDS } from "@aws-sdk/client-rds";
import { describe, expect, test as it } from "vitest";

import { TestHttpHandler } from "../../../private/aws-util-test/src";

describe(RDS.name, () => {
  describe("middleware-sdk-rds", () => {
    it("copyDBClusterSnapshot without KMS key", async () => {
      const client = new RDS({
        region: "us-east-1",
      });

      new TestHttpHandler({
        method: "POST",
        hostname: /rds\.(.*?)\.amazonaws\.com/,
        protocol: "https:",
        query: {},
        headers: {},
        body: (body) => {
          const parse = new URLSearchParams(body);
          expect(parse.get("SourceDBClusterSnapshotIdentifier")).toEqual(
            "arn:aws:rds:us-west-2:1234567890:my-db-cluster-snapshot-id"
          );
          expect(parse.get("TargetDBClusterSnapshotIdentifier")).toEqual("my-target-db-cluster-snapshot-id");
          expect(parse.get("Action")).toEqual("CopyDBClusterSnapshot");
          expect(parse.get("Version")).toEqual("2014-10-31");

          const presignedUrl = decodeURI(parse.get("PreSignedUrl") as string);
          expect(presignedUrl).toMatch(/rds\.(.*?)\.amazonaws\.com/);
          expect(presignedUrl).toMatch(/Action=CopyDBClusterSnapshot/);
          expect(presignedUrl).not.toMatch(/KmsKeyId=/);
          expect(presignedUrl).toMatch(/Version=2014-10-31/);
          expect(presignedUrl).toMatch(/X-Amz-Algorithm=AWS4-HMAC-SHA256/);
          expect(presignedUrl).toMatch(/X-Amz-SignedHeaders=host/);
          expect(presignedUrl).toMatch(/X-Amz-Credential=/);
          expect(presignedUrl).toMatch(/X-Amz-Date=/);
          expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
          expect(presignedUrl).toMatch(/X-Amz-Signature=(.*?)/);
        },
      }).watch(client);

      await client.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: "arn:aws:rds:us-west-2:1234567890:my-db-cluster-snapshot-id",
        TargetDBClusterSnapshotIdentifier: "my-target-db-cluster-snapshot-id",
      });

      expect.hasAssertions();
    });

    it("copyDBSnapshot with KMS key", async () => {
      const client = new RDS({
        region: "us-east-1",
      });

      new TestHttpHandler({
        method: "POST",
        hostname: /rds\.(.*?)\.amazonaws\.com/,
        protocol: "https:",
        query: {},
        headers: {},
        body: (body) => {
          const parse = new URLSearchParams(body);
          expect(parse.get("SourceDBSnapshotIdentifier")).toEqual("arn:aws:rds:us-west-2:1234567890:my-db-snapshot-id");
          expect(parse.get("TargetDBSnapshotIdentifier")).toEqual("my-target-snapshot-id");
          expect(parse.get("Action")).toEqual("CopyDBSnapshot");
          expect(parse.get("Version")).toEqual("2014-10-31");
          expect(parse.get("KmsKeyId")).toEqual("my-kms-key");

          const presignedUrl = decodeURI(parse.get("PreSignedUrl") as string);
          expect(presignedUrl).toMatch(/rds\.(.*?)\.amazonaws\.com/);
          expect(presignedUrl).toMatch(/Action=CopyDBSnapshot/);
          expect(presignedUrl).toMatch(/KmsKeyId=my-kms-key/);
          expect(presignedUrl).toMatch(/Version=2014-10-31/);
          expect(presignedUrl).toMatch(/X-Amz-Algorithm=AWS4-HMAC-SHA256/);
          expect(presignedUrl).toMatch(/X-Amz-SignedHeaders=host/);
          expect(presignedUrl).toMatch(/X-Amz-Credential=/);
          expect(presignedUrl).toMatch(/X-Amz-Date=/);
          expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
          expect(presignedUrl).toMatch(/X-Amz-Signature=(.*?)/);
        },
      }).watch(client);

      await client.copyDBSnapshot({
        SourceDBSnapshotIdentifier: "arn:aws:rds:us-west-2:1234567890:my-db-snapshot-id",
        TargetDBSnapshotIdentifier: "my-target-snapshot-id",
        KmsKeyId: "my-kms-key",
      });

      expect.hasAssertions();
    });

    it("startDBInstanceAutomatedBackupsReplication with KMS key", async () => {
      const client = new RDS({
        region: "us-east-1",
      });

      new TestHttpHandler({
        method: "POST",
        hostname: /rds\.(.*?)\.amazonaws\.com/,
        protocol: "https:",
        query: {},
        headers: {},
        body: (body) => {
          const parse = new URLSearchParams(body);
          expect(parse.get("SourceDBInstanceArn")).toEqual("arn:aws:rds:us-west-2:1234567890:my-db-instance-id");
          expect(parse.get("Action")).toEqual("StartDBInstanceAutomatedBackupsReplication");
          expect(parse.get("Version")).toEqual("2014-10-31");
          expect(parse.get("KmsKeyId")).toEqual("my-kms-key");

          const presignedUrl = decodeURI(parse.get("PreSignedUrl") as string);
          expect(presignedUrl).toMatch(/rds\.(.*?)\.amazonaws\.com/);
          expect(presignedUrl).toMatch(/Action=StartDBInstanceAutomatedBackupsReplication/);
          expect(presignedUrl).toMatch(/KmsKeyId=my-kms-key/);
          expect(presignedUrl).toMatch(/Version=2014-10-31/);
          expect(presignedUrl).toMatch(/X-Amz-Algorithm=AWS4-HMAC-SHA256/);
          expect(presignedUrl).toMatch(/X-Amz-SignedHeaders=host/);
          expect(presignedUrl).toMatch(/X-Amz-Credential=/);
          expect(presignedUrl).toMatch(/X-Amz-Date=/);
          expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
          expect(presignedUrl).toMatch(/X-Amz-Signature=(.*?)/);
        },
      }).watch(client);

      await client.startDBInstanceAutomatedBackupsReplication({
        SourceDBInstanceArn: "arn:aws:rds:us-west-2:1234567890:my-db-instance-id",
        KmsKeyId: "my-kms-key",
      });

      expect.hasAssertions();
    });
  });
});
