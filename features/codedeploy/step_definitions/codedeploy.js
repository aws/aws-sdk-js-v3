const { Before } = require("@cucumber/cucumber");

Before({ tags: "@codedeploy" }, function (scenario, callback) {
  const { CodeDeploy } = require("../../../clients/client-codedeploy");
  this.service = new CodeDeploy({});
  callback();
});
