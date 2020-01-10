var { CodeCommit } = require("../../../clients/node/client-codecommit-node");

module.exports = function() {
  this.Before("@codecommit", function(callback) {
    this.service = new CodeCommit({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
};
