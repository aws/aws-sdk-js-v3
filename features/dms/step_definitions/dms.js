<<<<<<< HEAD
var { DatabaseMigrationService } = require('../../../clients/node/client-database-migration-service-node');

module.exports = function() {
  this.Before("@dms", function (callback) {
    this.service = new DatabaseMigrationService({});
=======
module.exports = function() {
  this.Before("@dms", function (callback) {
    this.service = new this.AWS.DMS();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
