var { ACM } = require("../../../clients/client-acm");

module.exports = function() {
  this.Before("@acm", function(scenario, callback) {
    this.service = new ACM({});
    callback();
  });

  // Add step definitions
};
