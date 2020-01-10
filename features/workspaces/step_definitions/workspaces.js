var { WorkSpaces } = require("../../../clients/node/client-workspaces-node");

module.exports = function() {
  this.Before("@workspaces", function(callback) {
    this.service = new WorkSpaces({});
    callback();
  });

  // Add step definitions
};
