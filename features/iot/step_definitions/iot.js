<<<<<<< HEAD
var { IoT } = require('../../../clients/node/client-iot-node');

module.exports = function() {
  this.Before("@iot", function (callback) {
    this.service = new IoT({});
=======
module.exports = function() {
  this.Before("@iot", function (callback) {
    this.service = new this.AWS.Iot();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
