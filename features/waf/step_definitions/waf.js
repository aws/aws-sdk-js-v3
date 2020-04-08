const { WAF } = require("../../../clients/client-waf");
const { Before } = require("cucumber");

Before({ tags: "@waf" }, function (scenario, callback) {
  this.service = new WAF({});
  callback();
});
