const { WorkSpaces } = require("../../../clients/client-workspaces");
const { Before } = require("cucumber");

Before({ tags: "@workspaces" }, function (scenario, callback) {
  this.service = new WorkSpaces({});
  callback();
});
