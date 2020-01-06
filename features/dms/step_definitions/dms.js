var { DatabaseMigrationService } = require('../../../clients/node/client-database-migration-service-node');

module.exports = function() {
  this.Before("@dms", function (callback) {
    this.service = new DatabaseMigrationService({});
    callback();
  });

  // Add step definitions
};
