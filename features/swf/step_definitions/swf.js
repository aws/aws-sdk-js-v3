<<<<<<< HEAD
var { SWF } = require('../../../clients/node/client-swf-node');

module.exports = function() {
  this.Before('@swf', function (callback) {
    this.service = new SWF({});
=======
module.exports = function() {
  this.Before('@swf', function (callback) {
    this.service = new this.AWS.SWF();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });
};
