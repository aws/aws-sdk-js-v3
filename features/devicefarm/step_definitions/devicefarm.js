<<<<<<< HEAD
var { DeviceFarm } = require('../../../clients/node/client-device-farm-node');

module.exports = function() {
  this.Before('@devicefarm', function (callback) {
    this.service = new DeviceFarm({region: 'us-west-2'});
=======
module.exports = function() {
  this.Before('@devicefarm', function (callback) {
    this.service = new this.AWS.DeviceFarm({region: 'us-west-2'});
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
