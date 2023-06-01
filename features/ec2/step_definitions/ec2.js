const { Before, Given, Then } = require("@cucumber/cucumber");
const { EC2, waitUntilSnapshotCompleted, waitUntilVolumeAvailable } = require("../../../clients/client-ec2");
const { KMS } = require("../../../clients/client-kms");

Before({ tags: "@ec2" }, function (scenario, callback) {
  this.service = new EC2({});
  callback();
});

Given("I describe EC2 regions {string}", function (regions, callback) {
  regions = regions.split(/\s*,\s*/);
  this.request(null, "describeRegions", { RegionNames: regions }, callback);
});

Then("the EC2 endpoint for {string} should be {string}", function (region, endpoint, callback) {
  this.assert.contains(this.data.Regions, function (region) {
    return region.Endpoint === endpoint;
  });
  callback();
});

Given("I describe the EC2 instance {string}", function (instanceId, callback) {
  this.request(null, "describeInstances", { InstanceIds: [instanceId] }, callback, false);
});

Given(
  "I attempt to copy an encrypted snapshot across regions",
  copySnapshotIntegration({ encryptSource: true, encryptDestination: false })
);

Given(
  "I attempt to copy and encrypt an unencrypted snapshot across regions",
  copySnapshotIntegration({ encryptSource: false, encryptDestination: true })
);

Given(
  "I attempt to copy and encrypt an encrypted snapshot across regions",
  copySnapshotIntegration({ encryptSource: true, encryptDestination: true })
);

Then("the copy snapshot attempt should be successful", function (callback) {
  this.assert.equal(this.success, true);
  callback();
});

function copySnapshotIntegration({ encryptSource, encryptDestination } = {}) {
  return async function () {
    let volId, srcSnapId, dstSnapId, sourceKmsKey, destinationKmsKey;
    const sourceRegion = "us-west-2";
    const destRegion = "us-east-1";
    const srcEc2 = new EC2({ region: sourceRegion });
    const dstEc2 = new EC2({ region: destRegion });

    const sourceKeyAlias = "js-sdk-e2e-test-key-1-source";
    const destinationKeyAlias = "js-sdk-e2e-test-key-2-destination";

    const sourceKms = new KMS({ region: sourceRegion });
    const destinationKms = new KMS({ region: destRegion });

    function teardown() {
      if (volId) srcEc2.deleteVolume({ VolumeId: volId });
      if (srcSnapId) srcEc2.deleteSnapshot({ SnapshotId: srcSnapId });
      if (dstSnapId) dstEc2.deleteSnapshot({ SnapshotId: dstSnapId });
    }

    try {
      if (encryptSource) {
        sourceKmsKey = await getKey(sourceKms, sourceKeyAlias);
      }
      if (encryptDestination) {
        destinationKmsKey = await getKey(destinationKms, destinationKeyAlias);
      }

      const createVolume = await srcEc2.createVolume({
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

      volId = createVolume.VolumeId;

      await waitUntilVolumeAvailable({ client: srcEc2, maxWaitTime: 120 }, { VolumeIds: [volId] });
      const createSnapshot = await srcEc2.createSnapshot({
        VolumeId: volId,
        TagSpecifications: [
          {
            Tags: [{ Key: "aws-sdk-js-integration", Value: "SAFE_TO_DELETE" }],
            ResourceType: "snapshot",
          },
        ],
      });

      srcSnapId = createSnapshot.SnapshotId;

      await waitUntilSnapshotCompleted(
        { client: srcEc2, maxWaitTime: 120 },
        {
          SnapshotId: createSnapshot.SnapshotId,
        }
      );

      const copySnapshot = await dstEc2.copySnapshot({
        Description: "aws-sdk-js-integration safe-to-delete",
        SourceRegion: sourceRegion,
        SourceSnapshotId: srcSnapId,
        KmsKeyId: encryptDestination ? destinationKmsKey : undefined,
        Encrypted: encryptDestination ? true : undefined,
        TagSpecifications: [
          {
            Tags: [{ Key: "aws-sdk-js-integration", Value: "SAFE_TO_DELETE" }],
            ResourceType: "snapshot",
          },
        ],
      });
      dstSnapId = copySnapshot.SnapshotId;

      // this waiter is not doing what I think it does for copied snapshot in destination region.
      // await waitUntilSnapshotCompleted(
      //   { client: dstEc2, maxWaitTime: 20 },
      //   {
      //     SnapshotId: copySnapshot.SnapshotId,
      //   }
      // );
      // until corrected, use timeout waiter.
      await new Promise((r) => setTimeout(r, 5000));

      const describeSnapshots = await dstEc2.describeSnapshots({
        SnapshotIds: [copySnapshot.SnapshotId],
      });

      if (encryptDestination) {
        if (String(describeSnapshots.Snapshots[0].KmsKeyId).includes(destinationKmsKey)) {
          this.success = true;
        }
      } else {
        this.success = true;
      }

      teardown();
    } catch (err) {
      teardown();
      throw err;
    }
  };
}

/**
 * @param {KMS} kmsClient
 * @param {string} alias
 * @returns
 */
async function getKey(kmsClient, alias) {
  return kmsClient
    .describeKey({
      KeyId: "alias/" + alias,
    })
    .then((describeKey) => describeKey.KeyMetadata.KeyId)
    .catch(async () => {
      const createKey = await kmsClient.createKey({
        MultiRegion: true,
      });
      await kmsClient.createAlias({
        AliasName: "alias/" + alias,
        TargetKeyId: createKey.KeyMetadata.KeyId,
      });
      return createKey.KeyMetadata.KeyId;
    });
}
