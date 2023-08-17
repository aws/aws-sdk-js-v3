const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@kinesis" }, function (scenario, callback) {
  const { Kinesis } = require("../../../clients/client-kinesis");
  this.service = new Kinesis({});
  callback();
});

Given("I try to describe a stream in Kinesis", function (callback) {
  this.request(null, "describeStream", { StreamName: "XXINVALIDXX" }, callback, false);
});
