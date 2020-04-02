var { Kinesis } = require("../../../clients/client-kinesis");

module.exports = function() {
  this.Before({ tags: ["@kinesis"] }, function(scenario, callback) {
    this.service = new Kinesis({});
    callback();
  });

  this.Given(/^I try to describe a stream in Kinesis$/, function(callback) {
    this.request(
      null,
      "describeStream",
      { StreamName: "XXINVALIDXX" },
      callback,
      false
    );
  });
};
