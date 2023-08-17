const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@sns" }, function () {
  const { SNS } = require("../../../clients/client-sns");
  this.service = new SNS({});
});

After({ tags: "@sns" }, async function () {
  if (this.topicArn) {
    await this.service.deleteTopic({ TopicArn: this.topicArn });
    this.topicArn = undefined;
  }
});

Given("I create an SNS topic with prefix {string}", async function (prefix) {
  const topicName = this.uniqueName(prefix);
  const { TopicArn } = await this.service.createTopic({ Name: topicName });
  this.topicArn = TopicArn;
});

Given("I list the SNS topics", async function () {
  this.data = await this.service.listTopics({});
});

Then("the list should contain the topic ARN", function () {
  const arn = this.topicArn;
  this.assert.contains(this.data.Topics, function (topic) {
    return topic.TopicArn === arn;
  });
});

Given("I get SNS topic attributes with an invalid ARN", async function () {
  try {
    await this.service.getTopicAttributes({ TopicArn: "INVALID" });
  } catch (error) {
    this.error = error;
  }
});
