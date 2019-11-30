<<<<<<< HEAD
var { KMS } = require('../../../clients/node/client-kms-node');

module.exports = function() {
  this.Before("@kms", function (callback) {
    this.service = new KMS({});
=======
module.exports = function() {
  this.Before("@kms", function (callback) {
    this.service = new this.AWS.KMS();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
