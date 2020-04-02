var { ECR } = require("../../../clients/client-ecr");

module.exports = function() {
  this.Before({ tags: ["@ecr"] }, function(scenario, callback) {
    this.service = new ECR({});
    callback();
  });

  // Add step definitions
};
