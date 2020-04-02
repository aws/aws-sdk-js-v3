var { CodePipeline } = require("../../../clients/client-codepipeline");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@codepipeline" }, function(scenario, callback) {
    this.service = new CodePipeline({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
});
