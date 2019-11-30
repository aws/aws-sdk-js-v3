<<<<<<< HEAD
var { EFS } = require('../../../clients/node/client-efs-node');

module.exports = function() {
  this.Before('@efs', function (callback) {
    this.service = new EFS({region: 'us-west-2'});
=======
module.exports = function() {
  this.Before('@efs', function (callback) {
    this.service = new this.AWS.EFS({region: 'us-west-2'});
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });
};
