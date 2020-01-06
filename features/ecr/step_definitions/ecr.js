var { ECR } = require('../../../clients/node/client-ecr-node');

module.exports = function() {
  this.Before("@ecr", function (callback) {
    this.service = new ECR({});
    callback();
  });

  // Add step definitions
};
