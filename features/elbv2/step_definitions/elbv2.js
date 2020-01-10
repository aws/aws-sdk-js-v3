var {
  ElasticLoadBalancingv2
} = require("../../../clients/node/client-elastic-load-balancing-v2-node");

module.exports = function() {
  this.Before("@elbv2", function(callback) {
    this.service = new ElasticLoadBalancingv2({});
    callback();
  });

  // Add step definitions
};
