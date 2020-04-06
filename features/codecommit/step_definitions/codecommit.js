const { CodeCommit } = require("../../../clients/client-codecommit");
const { Before } = require("cucumber");

Before({ tags: "@codecommit" }, function (scenario, callback) {
  this.service = new CodeCommit({ region: "us-east-1" });
  callback();
});
