const { Before, Given, Then, After } = require("@cucumber/cucumber");

Before({ tags: "@cloudwatchlogs" }, function () {
  const { CloudWatchLogs } = require("../../../clients/client-cloudwatch-logs");
  this.service = new CloudWatchLogs({});
});

After({ tags: "@cloudwatchlogs" }, async function () {
  if (this.logGroupName) {
    await this.service.deleteLogGroup({ logGroupName: this.logGroupName });
  }
});

Given("I create a CloudWatch logGroup with prefix {string}", function (prefix, callback) {
  const expectErr = prefix === "" ? false : undefined;
  this.logGroupName = this.uniqueName(prefix);
  this.request(null, "createLogGroup", { logGroupName: this.logGroupName }, callback, expectErr);
});

Given("I list the CloudWatch logGroups", function (callback) {
  this.request(null, "describeLogGroups", { logGroupNamePrefix: this.logGroupName }, callback);
});

Then("the list should contain the CloudWatch logGroup", function (callback) {
  const name = this.logGroupName;
  this.assert.contains(this.data.logGroups, function (alarm) {
    return alarm.logGroupName === name;
  });
  callback();
});
