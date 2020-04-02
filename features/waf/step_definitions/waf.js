var { WAF } = require("../../../clients/client-waf");

module.exports = function() {
  this.Before({ tags: ["@waf"] }, function(scenario, callback) {
    this.service = new WAF({});
    callback();
  });

  // Add step definitions
};
