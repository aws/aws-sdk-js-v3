var { SQS } = require("../../../clients/client-sqs");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@sqs" }, function(scenario, callback) {
    this.service = new SQS({
      region: "us-east-1"
    });
    this.createdQueues = [];
    callback();
  });
});
