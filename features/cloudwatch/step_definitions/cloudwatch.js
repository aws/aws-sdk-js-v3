const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@cloudwatch" }, function () {
  const { CloudWatch } = require("../../../clients/client-cloudwatch");
  this.service = new CloudWatch({});
});

After({ tags: "@cloudwatch" }, async function () {
  if (this.alarmName) {
    await this.service.deleteAlarms({ AlarmNames: [this.alarmName] });
    this.alarmName = undefined;
  }
});

Given("I create a CloudWatch alarm with prefix {string}", async function (prefix) {
  const alarmName = this.uniqueName(prefix);
  try {
    this.data = await this.service.putMetricAlarm({
      AlarmName: alarmName,
      ComparisonOperator: "GreaterThanThreshold",
      EvaluationPeriods: 5,
      MetricName: "CPUUtilization",
      Namespace: "AWS/EC2",
      Period: 60,
      Statistic: "Average",
      Threshold: 50.0,
    });
    this.alarmName = alarmName;
  } catch (error) {
    this.error = error;
  }
});

Given("I list the CloudWatch alarms", async function () {
  this.data = await this.service.describeAlarms({ AlarmNames: [this.alarmName] });
});

Then("the list should contain the CloudWatch alarm", function () {
  const name = this.alarmName;
  this.assert.contains(this.data.MetricAlarms, function (alarm) {
    return alarm.AlarmName === name;
  });
});
