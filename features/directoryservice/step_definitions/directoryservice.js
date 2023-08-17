const { Before } = require("@cucumber/cucumber");

Before({ tags: "@directoryservice" }, function (scenario, callback) {
  const { DirectoryService } = require("../../../clients/client-directory-service");
  this.service = new DirectoryService({});
  callback();
});
