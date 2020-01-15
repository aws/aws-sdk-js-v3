// var { EC2 } = require("../../../clients/client-ec2");

const waitForVolumeAvailable = (ec2, params, callback) => {
  // Iterate totalTries times
  const maxAttempts = 40;
  let currentAttempt = 0;
  const delay = 15000;

  const checkForVolumeAvailable = (params, callback) => {
    currentAttempt++;
    ec2.describeVolumes(params, (err, data) => {
      if (err) {
        if (currentAttempt > maxAttempts) {
          callback.fail(err);
        }
        setTimeout(function() {
          checkForVolumeAvailable(params, callback);
        }, delay);
      } else if (data) {
        if (data.Volumes) {
          // iterate through array and check for success and failure
          let isSuccess = true;
          for (let i = 0; i < data.Volumes.length; i++) {
            if (data.Volumes[i].State === "deleted") {
              isSuccess = false;
              callback(
                new Error(
                  `VolumeId ${data.Volumes[i].VolumeId} is in failure state`
                )
              );
              break;
            } else if (data.Volumes[i].State !== "available") {
              isSuccess = false;
              setTimeout(function() {
                checkForVolumeAvailable(params, callback);
              }, delay);
              break;
            }
          }
          if (isSuccess) {
            callback();
          }
        } else {
          setTimeout(function() {
            checkForVolumeAvailable(params, callback);
          }, delay);
        }
      } else {
        callback();
      }
    });
  };
  checkForVolumeAvailable(params, callback);
};

module.exports = function() {
  this.Before("@ec2", function(callback) {
    this.service = new EC2({});
    callback();
  });

  this.Given(/^I describe EC2 regions "([^"]*)"$/, function(regions, callback) {
    regions = regions.split(/\s*,\s*/);
    this.request(null, "describeRegions", { RegionNames: regions }, callback);
  });

  this.Then(/^the EC2 endpoint for "([^"]*)" should be "([^"]*)"$/, function(
    region,
    endpoint,
    callback
  ) {
    this.assert.contains(this.data.Regions, function(region) {
      return region.Endpoint === endpoint;
    });
    callback();
  });

  this.Given(/^I describe the EC2 instance "([^"]*)"$/, function(
    instanceId,
    callback
  ) {
    this.request(
      null,
      "describeInstances",
      { InstanceIds: [instanceId] },
      callback,
      false
    );
  });

  this.Given(
    /^I attempt to copy an encrypted snapshot across regions$/,
    function(callback) {
      var self = this;
      var volId, srcSnapId, dstSnapId, params;
      var sourceRegion = "us-west-2";
      var destRegion = "us-east-1";
      var srcEc2 = new EC2({ region: sourceRegion });
      var dstEc2 = new EC2({ region: destRegion });

      function teardown() {
        if (volId) srcEc2.deleteVolume({ VolumeId: volId }).send();
        if (srcSnapId) srcEc2.deleteSnapshot({ SnapshotId: srcSnapId }).send();
        if (dstSnapId) dstEc2.deleteSnapshot({ SnapshotId: dstSnapId }).send();
      }

      params = {
        AvailabilityZone: sourceRegion + "a",
        Size: 10,
        Encrypted: true
      };
      srcEc2.createVolume(params, function(err, data) {
        if (err) {
          teardown();
          return callback(err);
        }
        volId = data.VolumeId;

        waitForVolumeAvailable(srcEc2, { VolumeIds: [volId] }, function(err) {
          if (err) {
            teardown();
            return callback(err);
          }

          srcEc2.createSnapshot({ VolumeId: volId }, function(err, data) {
            if (err) {
              teardown();
              return callback(err);
            }
            srcSnapId = data.SnapshotId;

            setTimeout(function() {
              params = {
                SourceRegion: sourceRegion,
                SourceSnapshotId: srcSnapId
              };
              dstEc2.copySnapshot(params, function(err, data) {
                if (data) dstSnapId = data.SnapshotId;
                self.success = true;
                callback();
                teardown();
              });
            }, 5000);
          });
        });
      });
    }
  );

  this.Then(/^the copy snapshot attempt should be successful$/, function(
    callback
  ) {
    this.assert.equal(this.success, true);
    callback();
  });
};
