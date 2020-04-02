var {
  DatabaseMigrationService
} = require("../../../clients/client-database-migration-service");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@dms" }, function(scenario, callback) {
    this.service = new DatabaseMigrationService({});
    callback();
  });

  // Add step definitions
});
