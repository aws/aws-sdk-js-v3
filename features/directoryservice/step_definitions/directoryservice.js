var {
  DirectoryService
} = require("../../../clients/node/client-directory-service-node");

module.exports = function() {
  this.Before("@directoryservice", function(callback) {
    this.service = new DirectoryService({});
    callback();
  });

  // Add step definitions
};
