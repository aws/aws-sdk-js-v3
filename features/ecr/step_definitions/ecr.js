<<<<<<< HEAD
var { ECR } = require('../../../clients/node/client-ecr-node');

module.exports = function() {
  this.Before("@ecr", function (callback) {
    this.service = new ECR({});
=======
module.exports = function() {
  this.Before("@ecr", function (callback) {
    this.service = new this.AWS.ECR();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
