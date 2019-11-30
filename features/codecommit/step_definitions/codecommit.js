<<<<<<< HEAD
var { CodeCommit } = require('../../../clients/node/client-codecommit-node');

module.exports = function() {
  this.Before('@codecommit', function (callback) {
    this.service = new CodeCommit({region: 'us-east-1'});
=======
module.exports = function() {
  this.Before('@codecommit', function (callback) {
    this.service = new this.AWS.CodeCommit({region: 'us-east-1'});
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
