var { CodePipeline } = require("../../../clients/client-codepipeline");

module.exports = function() {
  this.Before({ tags: ["@codepipeline"] }, function(scenario, callback) {
    this.service = new CodePipeline({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
};
