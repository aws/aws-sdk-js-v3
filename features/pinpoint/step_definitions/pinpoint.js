var { Pinpoint } = require("../../../clients/client-pinpoint");

module.exports = function() {
  this.Before("@pinpoint", function(callback) {
    this.service = new Pinpoint({});
    callback();
  });

  // Add step definitions
};
