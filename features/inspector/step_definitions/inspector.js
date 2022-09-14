const { Before } = require("@cucumber/cucumber");

Before({ tags: "@inspector" }, function (scenario, callback) {
  const { Inspector } = require("../../../clients/client-inspector");
  this.service = new Inspector({ region: "us-west-2" });
  callback();
});
