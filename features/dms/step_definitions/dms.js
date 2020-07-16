const { DatabaseMigrationService } = require("../../../clients/client-database-migration-service");
const { Before } = require("cucumber");

Before({ tags: "@dms" }, function (scenario, callback) {
  this.service = new DatabaseMigrationService({});
  callback();
});
