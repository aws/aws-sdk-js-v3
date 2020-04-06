const { ConfigService } = require("../../../clients/client-config-service");
const { Before } = require("cucumber");

Before({ tags: "@configservice" }, function (scenario, callback) {
  this.service = new ConfigService({});
  callback();
});
