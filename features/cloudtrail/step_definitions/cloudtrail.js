var { CloudTrail } = require("../../../clients/client-cloudtrail");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@cloudtrail"] }, function(scenario, callback) {
    this.service = new CloudTrail({});
    callback();
  });

  Given(/^I describe trails$/, function(callback) {
    this.request(null, "describeTrails", {}, callback);
  });

  Given(/^I create a trail with an invalid name$/, function(callback) {
    this.request(
      null,
      "createTrail",
      { Name: "", S3BucketName: "" },
      callback,
      false
    );
  });
});
