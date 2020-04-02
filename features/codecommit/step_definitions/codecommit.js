var { CodeCommit } = require("../../../clients/client-codecommit");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@codecommit"] }, function(scenario, callback) {
    this.service = new CodeCommit({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
});
