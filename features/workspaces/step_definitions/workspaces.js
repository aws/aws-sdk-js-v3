var { WorkSpaces } = require("../../../clients/client-workspaces");

module.exports = function() {
  this.Before("@workspaces", function(callback) {
    this.service = new WorkSpaces({});
    callback();
  });

  // Add step definitions
};
