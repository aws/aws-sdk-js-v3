const { SQS } = require("../../../clients/client-sqs");
const { Before } = require("cucumber");

Before({ tags: "@sqs" }, function (scenario, callback) {
  this.service = new SQS({
    region: "us-east-1",
  });
  this.createdQueues = [];
  callback();
});
