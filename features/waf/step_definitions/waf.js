var { WAF } = require("../../../clients/client-waf");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@waf"] }, function(scenario, callback) {
    this.service = new WAF({});
    callback();
  });

  // Add step definitions
});
