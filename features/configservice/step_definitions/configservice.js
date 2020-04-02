var { ConfigService } = require("../../../clients/client-config-service");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@configservice"] }, function(scenario, callback) {
    this.service = new ConfigService({});
    callback();
  });

  // Add step definitions
});
