const { Before } = require("cucumber");

Before({ tags: "@configservice" }, function (scenario, callback) {
  const { ConfigService } = require("../../../clients/client-configservice");
  this.service = new ConfigService({});
  callback();
});
