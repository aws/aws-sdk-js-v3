<<<<<<< HEAD
var { CloudWatchEvents } = require('../../../clients/node/client-cloudwatch-events-node');

module.exports = function() {
  this.Before("@cloudwatchevents", function (callback) {
    this.service = new CloudWatchEvents({});
=======
module.exports = function() {
  this.Before("@cloudwatchevents", function (callback) {
    this.service = new this.AWS.CloudWatchEvents();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
