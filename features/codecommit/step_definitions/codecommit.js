const { Before } = require("@cucumber/cucumber");

Before({ tags: "@codecommit" }, function (scenario, callback) {
  const { CodeCommit } = require("../../../clients/client-codecommit");
  this.service = new CodeCommit({ region: "us-east-1" });
  callback();
});
