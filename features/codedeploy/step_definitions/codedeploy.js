<<<<<<< HEAD
var { CodeDeploy } = require('../../../clients/node/client-codedeploy-node');

module.exports = function() {
  this.Before("@codedeploy", function (callback) {
    this.service = new CodeDeploy({});
=======
module.exports = function() {
  this.Before("@codedeploy", function (callback) {
    this.service = new this.AWS.CodeDeploy();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
