<<<<<<< HEAD
var { ConfigService } = require('../../../clients/node/client-config-service-node');

module.exports = function() {
  this.Before("@configservice", function (callback) {
    this.service = new ConfigService({});
=======
module.exports = function() {
  this.Before("@configservice", function (callback) {
    this.service = new this.AWS.ConfigService();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
