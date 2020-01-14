var {
  ElasticLoadBalancingv2
} = require("../../../clients/client-elastic-load-balancing-v2");

module.exports = function() {
  this.Before("@elbv2", function(callback) {
    this.service = new ElasticLoadBalancingv2({});
    callback();
  });

  // Add step definitions
};
