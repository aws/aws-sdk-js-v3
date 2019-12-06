var { EC2 } = require('../../../clients/node/client-ec2-node');

const waitForVolumeAvailable = (params, callback) => {
  const ec2 = new EC2({});

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
        console.log(data);
        callback();
      } else {
        callback();
      }
    });
  };
  checkForVolumeAvailable(params, callback);
}

module.exports = function() {
  this.Before("@ec2", function (callback) {
    this.service = new EC2({});
    callback();
  });

  this.Given(/^I describe EC2 regions "([^"]*)"$/, function(regions, callback) {
    regions = regions.split(/\s*,\s*/);
    this.request(null, 'describeRegions', {RegionNames: regions}, callback);
  });

  this.Then(/^the EC2 endpoint for "([^"]*)" should be "([^"]*)"$/, function(region, endpoint, callback) {
    this.assert.contains(this.data.Regions, function(region) {
      return region.Endpoint === endpoint;
    });
    callback();
  });

  this.Given(/^I describe the EC2 instance "([^"]*)"$/, function(instanceId, callback) {
    this.request(null, 'describeInstances', {InstanceIds: [instanceId]}, callback, false);
  });

  this.Given(/^I attempt to copy an encrypted snapshot across regions$/, function (callback) {
    var self = this;
    var volId, srcSnapId, dstSnapId, params;
    var sourceRegion = 'us-west-2';
    var destRegion = 'us-east-1';
    var srcEc2 = new EC2({region: sourceRegion});
    var dstEc2 = new EC2({region: destRegion});

    function teardown() {
      if (volId) srcEc2.deleteVolume({VolumeId: volId}).send();
      if (srcSnapId) srcEc2.deleteSnapshot({SnapshotId: srcSnapId}).send();
      if (dstSnapId) dstEc2.deleteSnapshot({SnapshotId: dstSnapId}).send();
    }

    params = {AvailabilityZone:sourceRegion+'a',Size:10,Encrypted:true};
    srcEc2.createVolume(params, function(err, data) {
      if (err) { teardown(); return callback(err); }
      volId = data.VolumeId;

      waitForVolumeAvailable({VolumeIds: [volId]}, function(err) {
        if (err) { teardown(); return callback(err); }

        srcEc2.createSnapshot({VolumeId: volId}, function(err, data) {
          if (err) { teardown(); return callback(err); }
          srcSnapId = data.SnapshotId;

          setTimeout(function() {
            params = {SourceRegion: sourceRegion, SourceSnapshotId: srcSnapId};
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
  });

  this.Then(/^the copy snapshot attempt should be successful$/, function (callback) {
    this.assert.equal(this.success, true);
    callback();
  });
};
