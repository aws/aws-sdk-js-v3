const { Before } = require("@cucumber/cucumber");

Before({ tags: "@codepipeline" }, function (scenario, callback) {
  const { CodePipeline } = require("../../../clients/client-codepipeline");
  this.service = new CodePipeline({ region: "us-east-1" });
  callback();
});
