var { SSM } = require("../../../clients/client-ssm");

module.exports = function() {
  this.Before("@ssm", function(callback) {
    this.service = new SSM({});
    callback();
  });

  // Add step definitions
};
