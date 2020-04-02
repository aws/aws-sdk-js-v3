var {
  ElasticLoadBalancingv2
} = require("../../../clients/client-elastic-load-balancing-v2");

module.exports = function() {
  this.Before({ tags: ["@elbv2"] }, function(scenario, callback) {
    this.service = new ElasticLoadBalancingv2({});
    callback();
  });

  // Add step definitions
};
