<<<<<<< HEAD
var { DirectoryService } = require('../../../clients/node/client-directory-service-node');

module.exports = function() {
  this.Before("@directoryservice", function (callback) {
    this.service = new DirectoryService({});
=======
module.exports = function() {
  this.Before("@directoryservice", function (callback) {
    this.service = new this.AWS.DirectoryService();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
