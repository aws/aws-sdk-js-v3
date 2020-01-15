// var { SQS } = require("../../../clients/client-sqs");

module.exports = function() {
  this.Before("@sqs", function(callback) {
    this.service = new SQS({
      region: "us-east-1"
    });
    this.createdQueues = [];
    callback();
  });
};
