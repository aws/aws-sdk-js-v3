const { Inspector } = require("../../../clients/client-inspector");
const { Before } = require("cucumber");

Before({ tags: "@inspector" }, function (scenario, callback) {
  this.service = new Inspector({ region: "us-west-2" });
  callback();
});
