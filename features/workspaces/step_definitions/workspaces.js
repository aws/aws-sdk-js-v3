<<<<<<< HEAD
var { WorkSpaces } = require('../../../clients/node/client-workspaces-node');

module.exports = function() {
  this.Before("@workspaces", function (callback) {
    this.service = new WorkSpaces({});
=======
module.exports = function() {
  this.Before("@workspaces", function (callback) {
    this.service = new this.AWS.WorkSpaces();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
