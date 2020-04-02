var { DirectoryService } = require("../../../clients/client-directory-service");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@directoryservice" }, function(scenario, callback) {
    this.service = new DirectoryService({});
    callback();
  });

  // Add step definitions
});
