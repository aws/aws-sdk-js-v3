const { CodeDeploy } = require("../../../clients/client-codedeploy");
const { Before } = require("cucumber");

Before({ tags: "@codedeploy" }, function (scenario, callback) {
  this.service = new CodeDeploy({});
  callback();
});
