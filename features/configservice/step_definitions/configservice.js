const { Before } = require("@cucumber/cucumber");

Before({ tags: "@configservice" }, function (scenario, callback) {
  const { ConfigService } = require("../../../clients/client-config-service");
  this.service = new ConfigService({});
  callback();
});
