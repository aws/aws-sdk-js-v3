var { DeviceFarm } = require("../../../clients/client-device-farm");

module.exports = function() {
  this.Before("@devicefarm", function(callback) {
    this.service = new DeviceFarm({ region: "us-west-2" });
    callback();
  });

  // Add step definitions
};
