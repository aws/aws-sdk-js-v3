var { CloudWatchEvents } = require('../../../clients/node/client-cloudwatch-events-node');

module.exports = function() {
  this.Before("@cloudwatchevents", function (callback) {
    this.service = new CloudWatchEvents({});
    callback();
  });

  // Add step definitions
};
