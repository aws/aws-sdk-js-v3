var { CloudWatchLogs } = require("../../../clients/client-cloudwatch-logs");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@cloudwatchlogs" }, function(scenario, callback) {
    this.service = new CloudWatchLogs({});
    callback();
  });

  Given(/^I create a CloudWatch logGroup with prefix "([^"]*)"$/, function(
    prefix,
    callback
  ) {
    var expectErr = prefix === "" ? false : undefined;
    this.logGroupName = this.uniqueName(prefix);
    this.request(
      null,
      "createLogGroup",
      { logGroupName: this.logGroupName },
      callback,
      expectErr
    );
  });

  Given(/^I list the CloudWatch logGroups$/, function(callback) {
    this.request(null, "describeLogGroups", {}, callback);
  });

  Then(/^the list should contain the CloudWatch logGroup$/, function(callback) {
    var name = this.logGroupName;
    this.assert.contains(this.data.logGroups, function(alarm) {
      return alarm.logGroupName === name;
    });
    callback();
  });

  Then(/^I delete the CloudWatch logGroup$/, function(callback) {
    this.request(
      null,
      "deleteLogGroup",
      { logGroupName: this.logGroupName },
      callback
    );
  });
});
