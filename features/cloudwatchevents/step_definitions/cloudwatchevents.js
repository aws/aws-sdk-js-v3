var { CloudWatchEvents } = require("../../../clients/client-cloudwatch-events");

module.exports = function() {
  this.Before({ tags: ["@cloudwatchevents"] }, function(scenario, callback) {
    this.service = new CloudWatchEvents({});
    callback();
  });

  // Add step definitions
};
