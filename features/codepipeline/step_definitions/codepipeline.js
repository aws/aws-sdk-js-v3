const { CodePipeline } = require("../../../clients/client-codepipeline");
const { Before } = require("cucumber");

Before({ tags: "@codepipeline" }, function (scenario, callback) {
  this.service = new CodePipeline({ region: "us-east-1" });
  callback();
});
