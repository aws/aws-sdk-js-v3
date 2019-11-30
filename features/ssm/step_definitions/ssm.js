<<<<<<< HEAD
var { SSM } = require('../../../clients/node/client-ssm-node');

module.exports = function() {
  this.Before("@ssm", function (callback) {
    this.service = new SSM({});
=======
module.exports = function() {
  this.Before("@ssm", function (callback) {
    this.service = new this.AWS.SSM();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
