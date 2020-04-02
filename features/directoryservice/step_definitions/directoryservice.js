var { DirectoryService } = require("../../../clients/client-directory-service");

module.exports = function() {
  this.Before("@directoryservice", function(scenario, callback) {
    this.service = new DirectoryService({});
    callback();
  });

  // Add step definitions
};
