const { Before } = require("cucumber");

Before({ tags: "@sqs" }, function (scenario, callback) {
  const { SQS } = require("../../../clients/client-sqs");
  this.service = new SQS({
    region: "us-east-1",
  });
  this.createdQueues = [];
  callback();
});
