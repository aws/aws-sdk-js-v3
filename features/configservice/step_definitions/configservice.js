var { ConfigService } = require("../../../clients/client-config-service");

module.exports = function() {
  this.Before("@configservice", function(scenario, callback) {
    this.service = new ConfigService({});
    callback();
  });

  // Add step definitions
};
