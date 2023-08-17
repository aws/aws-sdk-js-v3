import { crossRegionPresignedUrlMiddleware } from "./";
import { credentials, endpoint, MockSha256, region } from "./fixture";

const nextHandler = jest.fn();
const arn = "arn:aws:rds:src-region:000000000000:src-snapshot:dist-snapshot";
const arnSameRegion = "arn:aws:rds:mock-region:000000000000:src-snapshot:dist-snapshot";
const sourceIdentifier = "src-snapshot";

const handler = crossRegionPresignedUrlMiddleware({
  region,
  credentials,
  endpoint,
  sha256: MockSha256,
  signingEscapePath: true,
})(nextHandler, {} as any);

describe("middleware-sdk-rds", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should build CopyDBSnapshot cross origin presigned url correctly ", async () => {
    const params = {
      SourceDBSnapshotIdentifier: arn,
      TargetDBSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBSnapshotIdentifier).toEqual(params.SourceDBSnapshotIdentifier);
    expect(middlewareOutput.input.TargetDBSnapshotIdentifier).toEqual(params.TargetDBSnapshotIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    const presignedUrl = middlewareOutput.input.PreSignedUrl;
    expect(presignedUrl).toMatch(/https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=CopyDBSnapshot/);
    expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
  });

  it("should build CreateDBInstanceReadReplica cross origin presigned url correctly ", async () => {
    const params = {
      SourceDBInstanceIdentifier: arn,
      DBInstanceIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBInstanceIdentifier).toEqual(params.SourceDBInstanceIdentifier);
    expect(middlewareOutput.input.DBInstanceIdentifier).toEqual(params.DBInstanceIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    const presignedUrl = middlewareOutput.input.PreSignedUrl;
    expect(presignedUrl).toMatch(/https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=CreateDBInstanceReadReplica/);
    expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
  });

  it("should build CreateDBCluster cross origin presigned url correctly ", async () => {
    const params = {
      ReplicationSourceIdentifier: arn,
      DBClusterIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.ReplicationSourceIdentifier).toEqual(params.ReplicationSourceIdentifier);
    expect(middlewareOutput.input.DBClusterIdentifier).toEqual(params.DBClusterIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    const presignedUrl = middlewareOutput.input.PreSignedUrl;
    expect(presignedUrl).toMatch(/https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=CreateDBCluster/);
    expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
  });

  it("should build CopyDBClusterSnapshot cross origin presigned url correctly ", async () => {
    const params = {
      SourceDBClusterSnapshotIdentifier: arn,
      TargetDBClusterSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    const presignedUrl = middlewareOutput.input.PreSignedUrl;
    expect(presignedUrl).toMatch(/https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=CopyDBClusterSnapshot/);
    expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
  });

  it("should build StartDBInstanceAutomatedBackupsReplication cross origin presigned url correctly ", async () => {
    const params = {
      SourceDBInstanceArn: arn,
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBInstanceArn).toEqual(params.SourceDBInstanceArn);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    const presignedUrl = middlewareOutput.input.PreSignedUrl;
    expect(presignedUrl).toMatch(/https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=StartDBInstanceAutomatedBackupsReplication/);
    expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
  });

  it("should not generate PreSignedUrl if source identifier is not ARN", async () => {
    const params = {
      SourceDBClusterSnapshotIdentifier: sourceIdentifier,
      TargetDBClusterSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    expect(middlewareOutput.input.PreSignedUrl).not.toBeDefined();
  });

  it("should not generate PreSignedUrl if source identifier is from the same region", async () => {
    const params = {
      SourceDBClusterSnapshotIdentifier: arnSameRegion,
      TargetDBClusterSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
    expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
    expect(middlewareOutput.input.PreSignedUrl).not.toBeDefined();
  });

  it("should leave input shape unchanged", async () => {
    const params = {
      SourceDBClusterSnapshotIdentifier: arn,
      TargetDBClusterSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    };
    await handler({ input: params });
    expect(params).toEqual({
      SourceDBClusterSnapshotIdentifier: arn,
      TargetDBClusterSnapshotIdentifier: "target-id",
      KmsKeyId: "000-111",
    });
  });
});
