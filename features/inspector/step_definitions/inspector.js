<<<<<<< HEAD
var { Inspector } = require('../../../clients/node/client-inspector-node');

module.exports = function() {
  this.Before("@inspector", function (callback) {
    this.service = new Inspector({region: 'us-west-2'});
=======
module.exports = function() {
  this.Before("@inspector", function (callback) {
    this.service = new this.AWS.Inspector({region: 'us-west-2'});
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
