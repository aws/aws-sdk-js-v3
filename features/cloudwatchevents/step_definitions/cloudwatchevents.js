var { CloudWatchEvents } = require("../../../clients/client-cloudwatch-events");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@cloudwatchevents"] }, function(scenario, callback) {
    this.service = new CloudWatchEvents({});
    callback();
  });

  // Add step definitions
});
