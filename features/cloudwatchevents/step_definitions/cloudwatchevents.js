const { Before } = require("cucumber");

Before({ tags: "@cloudwatchevents" }, function (scenario, callback) {
  const { CloudWatchEvents } = require("../../../clients/client-cloudwatchevents");
  this.service = new CloudWatchEvents({});
  callback();
});
