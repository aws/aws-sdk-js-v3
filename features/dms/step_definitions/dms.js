var {
  DatabaseMigrationService
} = require("../../../clients/client-database-migration-service");

module.exports = function() {
  this.Before("@dms", function(scenario, callback) {
    this.service = new DatabaseMigrationService({});
    callback();
  });

  // Add step definitions
};
