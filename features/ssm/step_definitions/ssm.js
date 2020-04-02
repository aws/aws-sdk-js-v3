var { SSM } = require("../../../clients/client-ssm");

module.exports = function() {
  this.Before({ tags: ["@ssm"] }, function(scenario, callback) {
    this.service = new SSM({});
    callback();
  });

  // Add step definitions
};
