<<<<<<< HEAD
var { ACM } = require('../../../clients/node/client-acm-node');

module.exports = function() {
  this.Before("@acm", function (callback) {
    this.service = new ACM({});
=======
module.exports = function() {
  this.Before("@acm", function (callback) {
    this.service = new this.AWS.ACM();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
