const { CloudWatch } = require("../../../clients/client-cloudwatch");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@cloudwatch" }, function (scenario, callback) {
  this.service = new CloudWatch({});
  callback();
});

Given("I create a CloudWatch alarm with prefix {string}", function (name, callback) {
  const timestamp = new Date().getTime();
  this.cloudWatchAlarm = {
    AlarmName: name,
    MetricName: "aws-sdk-js-metric-" + timestamp,
    Namespace: "aws-sdk-js-namespace" + timestamp,
    ComparisonOperator: "GreaterThanThreshold",
    EvaluationPeriods: 5,
    Period: 60,
    Statistic: "Average",
    Threshold: 50.0,
  };

  this.cloudWatchAlarm.AlarmName += "-" + timestamp;

  this.request(null, "putMetricAlarm", this.cloudWatchAlarm, callback, undefined);
});

Given("I create a CloudWatch alarm with name {string}", function (name, callback) {
  const timestamp = new Date().getTime();
  this.cloudWatchAlarm = {
    AlarmName: name,
    MetricName: "aws-sdk-js-metric-" + timestamp,
    Namespace: "aws-sdk-js-namespace" + timestamp,
    ComparisonOperator: "GreaterThanThreshold",
    EvaluationPeriods: 5,
    Period: 60,
    Statistic: "Average",
    Threshold: 50.0,
  };

  this.request(null, "putMetricAlarm", this.cloudWatchAlarm, callback, false);
});

Given("I list the CloudWatch alarms", function (callback) {
  const params = {
    MetricName: this.cloudWatchAlarm.MetricName,
    Namespace: this.cloudWatchAlarm.Namespace,
  };
  this.request(null, "describeAlarmsForMetric", params, callback);
});

Then("the list should contain the CloudWatch alarm", function (callback) {
  const name = this.cloudWatchAlarm.AlarmName;
  this.assert.contains(this.data.MetricAlarms, function (alarm) {
    return alarm.AlarmName === name;
  });
  callback();
});

Then("I delete the CloudWatch alarm", function (callback) {
  this.request(null, "deleteAlarms", { AlarmNames: [this.cloudWatchAlarm.AlarmName] }, callback);
});
