var { Lambda } = require("../../../clients/client-lambda");

module.exports = function() {
  this.Before("@lambda", function(scenario, callback) {
    this.service = new Lambda({});
    callback();
  });

  // Add step definitions
};
