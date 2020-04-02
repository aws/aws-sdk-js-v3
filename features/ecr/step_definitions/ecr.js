var { ECR } = require("../../../clients/client-ecr");

module.exports = function() {
  this.Before("@ecr", function(callback) {
    this.service = new ECR({});
    callback();
  });

  // Add step definitions
};
