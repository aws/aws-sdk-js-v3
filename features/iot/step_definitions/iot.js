var { IoT } = require("../../../clients/node/client-iot-node");

module.exports = function() {
  this.Before("@iot", function(callback) {
    this.service = new IoT({});
    callback();
  });

  // Add step definitions
};
