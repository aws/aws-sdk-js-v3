var { WAF } = require("../../../clients/client-waf");

module.exports = function() {
  this.Before("@waf", function(callback) {
    this.service = new WAF({});
    callback();
  });

  // Add step definitions
};
