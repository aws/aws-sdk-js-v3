const { CloudWatchEvents } = require("../../../clients/client-cloudwatch-events");
const { Before } = require("cucumber");

Before({ tags: "@cloudwatchevents" }, function (scenario, callback) {
  this.service = new CloudWatchEvents({});
  callback();
});
