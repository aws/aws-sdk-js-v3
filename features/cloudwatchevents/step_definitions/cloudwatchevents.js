var { CloudWatchEvents } = require("../../../clients/client-cloudwatch-events");

module.exports = function() {
  this.Before("@cloudwatchevents", function(callback) {
    this.service = new CloudWatchEvents({});
    callback();
  });

  // Add step definitions
};
