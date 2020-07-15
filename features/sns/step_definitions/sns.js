const { SNS } = require("../../../clients/client-sns");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@sns" }, function (scenario, callback) {
  this.service = new SNS({});
  callback();
});

Given("I create an SNS topic with name {string}", function (name, callback) {
  const world = this;
  this.request(
    null,
    "createTopic",
    {
      Name: name,
    },
    callback,
    function (data) {
      world.topicArn = data.TopicArn;
    }
  );
});

Given("I list the SNS topics", function (callback) {
  this.request(null, "listTopics", {}, callback);
});

Then("the list should contain the topic ARN", function (callback) {
  const arn = this.topicArn;
  this.assert.contains(this.data.Topics, function (topic) {
    return topic.TopicArn === arn;
  });
  callback();
});

Then("I delete the SNS topic", function (callback) {
  this.request(
    null,
    "deleteTopic",
    {
      TopicArn: this.topicArn,
    },
    callback
  );
});

Given("I get SNS topic attributes with an invalid ARN", function (callback) {
  this.request(
    null,
    "getTopicAttributes",
    {
      TopicArn: "INVALID",
    },
    callback,
    false
  );
});
