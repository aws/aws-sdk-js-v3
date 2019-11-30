<<<<<<< HEAD
var { CloudTrail } = require('../../../clients/node/client-cloudtrail-node');

module.exports = function() {
  this.Before("@cloudtrail", function (callback) {
    this.service = new CloudTrail({});
=======
module.exports = function() {
  this.Before("@cloudtrail", function (callback) {
    this.service = new this.AWS.CloudTrail();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I describe trails$/, function(callback) {
    this.request(null, 'describeTrails', {}, callback);
  });

  this.Given(/^I create a trail with an invalid name$/, function(callback) {
    this.request(null, 'createTrail', {Name: '', S3BucketName: ''}, callback, false);
  });
};
