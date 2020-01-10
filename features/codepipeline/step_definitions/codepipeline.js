var {
  CodePipeline
} = require("../../../clients/node/client-codepipeline-node");

module.exports = function() {
  this.Before("@codepipeline", function(callback) {
    this.service = new CodePipeline({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
};
