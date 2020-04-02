var { WorkSpaces } = require("../../../clients/client-workspaces");

module.exports = function() {
  this.Before({ tags: ["@workspaces"] }, function(scenario, callback) {
    this.service = new WorkSpaces({});
    callback();
  });

  // Add step definitions
};
