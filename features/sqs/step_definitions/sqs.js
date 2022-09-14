const { Before, After } = require("@cucumber/cucumber");

Before({ tags: "@sqs" }, function () {
  const { SQS } = require("../../../clients/client-sqs");
  this.service = new SQS({});
  this.createdQueues = [];
});

After({ tags: "@sqs" }, async function () {
  for (const queueUrl of this.createdQueues) {
    await this.service.deleteQueue({ QueueUrl: queueUrl });
  }
});
