const { EC2, waitForVolumeAvailable } = require("../../../clients/client-ec2");
const { Before, Given, Then } = require("cucumber");

const waitForVolumeAvailableCallback = (ec2, volumeId, callback) => {
  waitForVolumeAvailable({ client: ec2 }, { VolumeIds: [volumeId] }).then(
    function (data) {
      callback();
    },
    function (err) {
      callback(err);
    }
  );
};

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

Given("I attempt to copy an encrypted snapshot across regions", function (callback) {
  const self = this;
  let volId, srcSnapId, dstSnapId, params;
  const sourceRegion = "us-west-2";
  const destRegion = "us-east-1";
  const srcEc2 = new EC2({ region: sourceRegion });
  const dstEc2 = new EC2({ region: destRegion });

  function teardown() {
    if (volId) srcEc2.deleteVolume({ VolumeId: volId }).send();
    if (srcSnapId) srcEc2.deleteSnapshot({ SnapshotId: srcSnapId }).send();
    if (dstSnapId) dstEc2.deleteSnapshot({ SnapshotId: dstSnapId }).send();
  }

  params = {
    AvailabilityZone: sourceRegion + "a",
    Size: 10,
    Encrypted: true,
  };
  srcEc2.createVolume(params, function (err, data) {
    if (err) {
      teardown();
      return callback(err);
    }
    volId = data.VolumeId;

    waitForVolumeAvailableCallback(srcEc2, volId, function (err) {
      if (err) {
        teardown();
        return callback(err);
      }

      srcEc2.createSnapshot({ VolumeId: volId }, function (err, data) {
        if (err) {
          teardown();
          return callback(err);
        }
        srcSnapId = data.SnapshotId;

        setTimeout(function () {
          params = {
            SourceRegion: sourceRegion,
            SourceSnapshotId: srcSnapId,
          };
          dstEc2.copySnapshot(params, function (err, data) {
            if (data) dstSnapId = data.SnapshotId;
            self.success = true;
            callback();
            teardown();
          });
        }, 5000);
      });
    });
  });
});

Then("the copy snapshot attempt should be successful", function (callback) {
  this.assert.equal(this.success, true);
  callback();
});
