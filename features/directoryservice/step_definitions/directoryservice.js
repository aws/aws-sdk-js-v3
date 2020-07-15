const { DirectoryService } = require("../../../clients/client-directory-service");
const { Before } = require("cucumber");

Before({ tags: "@directoryservice" }, function (scenario, callback) {
  this.service = new DirectoryService({});
  callback();
});
