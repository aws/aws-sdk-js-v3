var { WorkSpaces } = require("../../../clients/client-workspaces");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@workspaces"] }, function(scenario, callback) {
    this.service = new WorkSpaces({});
    callback();
  });

  // Add step definitions
});
