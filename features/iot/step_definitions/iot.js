var { IoT } = require("../../../clients/client-iot");

module.exports = function() {
  this.Before("@iot", function(callback) {
    this.service = new IoT({});
    callback();
  });

  // Add step definitions
};
