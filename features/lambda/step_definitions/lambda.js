var { Lambda } = require("../../../clients/client-lambda");

module.exports = function() {
  this.Before("@lambda", function(callback) {
    this.service = new Lambda({});
    callback();
  });

  // Add step definitions
};
