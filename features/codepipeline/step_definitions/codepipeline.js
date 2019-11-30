<<<<<<< HEAD
var { CodePipeline } = require('../../../clients/node/client-codepipeline-node');

module.exports = function() {
  this.Before('@codepipeline', function (callback) {
    this.service = new CodePipeline({region: 'us-east-1'});
=======
module.exports = function() {
  this.Before('@codepipeline', function (callback) {
    this.service = new this.AWS.CodePipeline({region: 'us-east-1'});
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
