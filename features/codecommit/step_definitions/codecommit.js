var { CodeCommit } = require("../../../clients/client-codecommit");

module.exports = function() {
  this.Before({ tags: ["@codecommit"] }, function(scenario, callback) {
    this.service = new CodeCommit({ region: "us-east-1" });
    callback();
  });

  // Add step definitions
};
