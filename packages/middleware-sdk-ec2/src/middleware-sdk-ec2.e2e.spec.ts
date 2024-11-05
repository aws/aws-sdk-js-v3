import { EC2, EC2ServiceException, waitUntilSnapshotCompleted, waitUntilVolumeAvailable } from "@aws-sdk/client-ec2";
import { KMS } from "@aws-sdk/client-kms";
import { afterAll, beforeAll, describe, expect, onTestFailed, test as it } from "vitest";

const errors = [] as any[];
const logger = {
  trace() {},
  debug() {},
  info() {},
  warn() {},
  error(entry: any) {
    errors.push(entry);
  },
};

describe("EC2 feature test", () => {
  let ec2: EC2;

  let testFailed = false;
  const setTestFailed = () => {
    testFailed = true;
  };

  beforeAll(() => {
    ec2 = new EC2({
      region: "us-west-2",
      logger,
    });
  });

  afterAll(() => {
    if (testFailed) {
      console.info("Test failed, logging errors collecting during test.");
      for (const error of errors) {
        console.error(error);
      }
    }
  });

  describe("DescribeRegions", () => {
    it("should describe regions", async () => {
      onTestFailed(setTestFailed);
      const regions = await ec2.describeRegions({
        RegionNames: ["us-east-1", "us-west-1"],
      });
      expect(regions.Regions?.[0]?.Endpoint).toEqual("ec2.us-east-1.amazonaws.com");
      expect(regions.Regions?.[1]?.Endpoint).toEqual("ec2.us-west-1.amazonaws.com");
    });
  });

  describe("Error handling", () => {
    it("should have error MissingParameter:400 when describing non-existent instance", async () => {
      onTestFailed(setTestFailed);
      await ec2
        .describeInstances({
          InstanceIds: [""],
        })
        .catch((e: EC2ServiceException) => {
          expect(e.$metadata.httpStatusCode).toBe(400);
          expect(e.name).toEqual("MissingParameter");
        });
      expect.hasAssertions();
    });
  });

  describe("Encrypted-Unencrypted CopySnapshot", () => {
    it("copy an encrypted snapshot across regions without encrypting the copy", async () => {
      onTestFailed(setTestFailed);
      await copySnapshot({ encryptSource: true, encryptDestination: false });
    });
  });

  describe("Unencrypted-Encrypted CopySnapshot", () => {
    it("should copy and encrypt an unencrypted snapshot across regions", async () => {
      onTestFailed(setTestFailed);
      await copySnapshot({ encryptSource: false, encryptDestination: true });
    });
  });

  describe("Encrypted-Encrypted CopySnapshot", () => {
    it("should copy encrypted snapshot across regions", async () => {
      onTestFailed(setTestFailed);
      await copySnapshot({ encryptSource: true, encryptDestination: true });
    });
  });

  async function copySnapshot({
    encryptSource,
    encryptDestination,
  }: {
    encryptSource: boolean;
    encryptDestination: boolean;
  }) {
    let volumeId: string | undefined;
    let sourceSnapshotId: string | undefined;
    let destinationSnapshotId: string | undefined;
    let sourceKmsKey: string | undefined;
    let destinationKmsKey: string | undefined;

    const sourceRegion = "us-west-2";
    const destRegion = "us-east-1";
    const sourceEc2 = new EC2({ region: sourceRegion, logger });
    const destinationEc2 = new EC2({ region: destRegion, logger });

    const sourceKeyAlias = "js-sdk-e2e-test-key-1-source";
    const destinationKeyAlias = "js-sdk-e2e-test-key-2-destination";

    const sourceKms = new KMS({ region: sourceRegion, logger });
    const destinationKms = new KMS({ region: destRegion, logger });

    async function teardown() {
      if (volumeId) {
        await sourceEc2.deleteVolume({ VolumeId: volumeId });
      }
      if (sourceSnapshotId) {
        await sourceEc2.deleteSnapshot({ SnapshotId: sourceSnapshotId });
      }
      if (destinationSnapshotId) {
        await destinationEc2.deleteSnapshot({ SnapshotId: destinationSnapshotId });
      }
    }

    try {
      if (encryptSource) {
        sourceKmsKey = await getKey(sourceKms, sourceKeyAlias);
      }
      if (encryptDestination) {
        destinationKmsKey = await getKey(destinationKms, destinationKeyAlias);
      }

      const createVolume = await sourceEc2.createVolume({
        AvailabilityZone: sourceRegion + "a",
        TagSpecifications: [
          {
            Tags: [{ Key: "aws-sdk-js-integration", Value: "SAFE_TO_DELETE" }],
            ResourceType: "volume",
          },
        ],
        Size: 1,
        Encrypted: encryptSource ? true : undefined,
        KmsKeyId: encryptSource ? sourceKmsKey : undefined,
      });

      volumeId = createVolume.VolumeId;

      await waitUntilVolumeAvailable({ client: sourceEc2, maxWaitTime: 120 }, { VolumeIds: [volumeId!] });
      const createSnapshot = await sourceEc2.createSnapshot({
        VolumeId: volumeId,
        TagSpecifications: [
          {
            Tags: [{ Key: "aws-sdk-js-integration", Value: "SAFE_TO_DELETE" }],
            ResourceType: "snapshot",
          },
        ],
      });

      sourceSnapshotId = createSnapshot.SnapshotId;

      await waitUntilSnapshotCompleted(
        { client: sourceEc2, maxWaitTime: 300 },
        {
          SnapshotIds: [createSnapshot.SnapshotId!],
        }
      );

      const copySnapshot = await destinationEc2.copySnapshot({
        Description: "aws-sdk-js-integration safe-to-delete",
        SourceRegion: sourceRegion,
        SourceSnapshotId: sourceSnapshotId,
        KmsKeyId: encryptDestination ? destinationKmsKey : undefined,
        Encrypted: encryptDestination ? true : undefined,
        TagSpecifications: [
          {
            Tags: [{ Key: "aws-sdk-js-integration", Value: "SAFE_TO_DELETE" }],
            ResourceType: "snapshot",
          },
        ],
      });
      destinationSnapshotId = copySnapshot.SnapshotId;

      await waitUntilSnapshotCompleted(
        { client: destinationEc2, maxWaitTime: 300 },
        {
          SnapshotIds: [copySnapshot.SnapshotId!],
        }
      );

      const describeSnapshots = await destinationEc2.describeSnapshots({
        SnapshotIds: [copySnapshot.SnapshotId!],
      });

      if (encryptDestination) {
        if (!String(describeSnapshots.Snapshots?.[0].KmsKeyId).includes(destinationKmsKey!)) {
          throw new Error("The destination snapshot did not have the intended KMS key");
        }
      }

      await teardown();
    } catch (err) {
      await teardown();
      throw err;
    }
  }

  async function getKey(kmsClient: KMS, alias: string) {
    return kmsClient
      .describeKey({
        KeyId: "alias/" + alias,
      })
      .then((describeKey) => describeKey?.KeyMetadata?.KeyId)
      .catch(async () => {
        const createKey = await kmsClient.createKey({
          MultiRegion: true,
        });
        if (!createKey?.KeyMetadata?.KeyId) {
          throw new Error("unexpected missing KeyId");
        }
        await kmsClient.createAlias({
          AliasName: "alias/" + alias,
          TargetKeyId: createKey?.KeyMetadata?.KeyId,
        });
        return createKey?.KeyMetadata?.KeyId;
      });
  }
}, 300_000);
