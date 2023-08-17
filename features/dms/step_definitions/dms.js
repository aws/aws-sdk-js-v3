const { Before } = require("@cucumber/cucumber");

Before({ tags: "@databasemigrationservice" }, function (scenario, callback) {
  const { DatabaseMigrationService } = require("../../../clients/client-database-migration-service");
  this.service = new DatabaseMigrationService({});
  callback();
});
