var { SSM } = require("../../../clients/node/client-ssm-node");

module.exports = function() {
  this.Before("@ssm", function(callback) {
    this.service = new SSM({});
    callback();
  });

  // Add step definitions
};
