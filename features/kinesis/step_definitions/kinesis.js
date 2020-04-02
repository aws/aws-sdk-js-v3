var { Kinesis } = require("../../../clients/client-kinesis");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@kinesis" }, function(scenario, callback) {
    this.service = new Kinesis({});
    callback();
  });

  Given(/^I try to describe a stream in Kinesis$/, function(callback) {
    this.request(
      null,
      "describeStream",
      { StreamName: "XXINVALIDXX" },
      callback,
      false
    );
  });
});
