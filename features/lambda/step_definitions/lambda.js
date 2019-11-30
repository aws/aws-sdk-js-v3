<<<<<<< HEAD
var { Lambda } = require('../../../clients/node/client-lambda-node');

module.exports = function() {
  this.Before("@lambda", function (callback) {
    this.service = new Lambda({});
=======
module.exports = function() {
  this.Before("@lambda", function (callback) {
    this.service = new this.AWS.Lambda();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
