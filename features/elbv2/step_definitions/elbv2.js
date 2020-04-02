var {
  ElasticLoadBalancingv2
} = require("../../../clients/client-elastic-load-balancing-v2");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@elbv2"] }, function(scenario, callback) {
    this.service = new ElasticLoadBalancingv2({});
    callback();
  });

  // Add step definitions
});
