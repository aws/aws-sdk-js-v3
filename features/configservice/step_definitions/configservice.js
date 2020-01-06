var { ConfigService } = require('../../../clients/node/client-config-service-node');

module.exports = function() {
  this.Before("@configservice", function (callback) {
    this.service = new ConfigService({});
    callback();
  });

  // Add step definitions
};
