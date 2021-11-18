const { Before } = require("cucumber");

Before({ tags: "@databasemigrationservice" }, function (scenario, callback) {
  const { DatabaseMigrationService } = require("../../../clients/client-databasemigrationservice");
  this.service = new DatabaseMigrationService({});
  callback();
});
