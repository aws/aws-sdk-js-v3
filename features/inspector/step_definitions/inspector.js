var { Inspector } = require("../../../clients/client-inspector");

module.exports = function() {
  this.Before({ tags: ["@inspector"] }, function(scenario, callback) {
    this.service = new Inspector({ region: "us-west-2" });
    callback();
  });

  // Add step definitions
};
