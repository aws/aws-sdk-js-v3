var { Inspector } = require("../../../clients/client-inspector");

module.exports = function() {
  this.Before("@inspector", function(callback) {
    this.service = new Inspector({ region: "us-west-2" });
    callback();
  });

  // Add step definitions
};
