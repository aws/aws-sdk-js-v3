var { CloudTrail } = require("../../../clients/client-cloudtrail");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@cloudtrail"] }, function(scenario, callback) {
    this.service = new CloudTrail({});
    callback();
  });

  this.Given(/^I describe trails$/, function(callback) {
    this.request(null, "describeTrails", {}, callback);
  });

  this.Given(/^I create a trail with an invalid name$/, function(callback) {
    this.request(
      null,
      "createTrail",
      { Name: "", S3BucketName: "" },
      callback,
      false
    );
  });
});
