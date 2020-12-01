const { Then, When } = require("cucumber");

When("I send the message {string}", function (message, callback) {
  this.request(null, "sendMessage", { QueueUrl: this.queueUrl, MessageBody: message }, callback);
});

Then("the result should include a message ID", function (callback) {
  this.assert.compare(this.data.MessageId.length, ">", 0);
  callback();
});

Then("the result should have an MD5 digest of {string}", function (digest, callback) {
  this.assert.equal(this.data.MD5OfMessageBody, digest);
  callback();
});

Then("I should eventually be able to receive {string} from the queue", function (message, callback) {
  this.eventually(callback, function (next) {
    next.condition = function () {
      return this.data.Messages[0].Body === message;
    };
    this.request(null, "receiveMessage", { QueueUrl: this.queueUrl }, next);
  });
});

When("I send the message {string} with a binary attribute", function (message, callback) {
  const params = {
    QueueUrl: this.queueUrl,
    MessageBody: message,
    MessageAttributes: {
      binary: { DataType: "Binary", BinaryValue: Buffer.from([1, 2, 3]) },
    },
  };
  this.request(null, "sendMessage", params, callback);
});

Then(
  "I should eventually be able to receive {string} from the queue with a binary attribute",
  function (message, callback) {
    this.eventually(callback, function (next) {
      next.condition = function () {
        return this.data.Messages[0].MessageAttributes.binary.BinaryValue.toString() === "1,2,3";
      };
      const params = {
        QueueUrl: this.queueUrl,
        MessageAttributeNames: ["binary"],
      };
      this.request(null, "receiveMessage", params, next);
    });
  }
);
