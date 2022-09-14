const { Before, After } = require("@cucumber/cucumber");

Before({ tags: "@sqs" }, function (scenario, callback) {
  const { SQS } = require("../../../clients/client-sqs");
  this.service = new SQS({
    region: "us-east-1",
  });
  this.createdQueues = [];
  callback();
});

After({ tags: "@sqs" }, function (scenario, callback) {
  this.createdQueues.forEach((url) => {
    this.request(null, "deleteQueue", { QueueUrl: url });
  });
  callback();
});
