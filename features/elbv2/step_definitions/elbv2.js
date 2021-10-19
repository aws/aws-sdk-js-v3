const { ElasticLoadBalancingV2 } = require("../../../clients/client-elastic-load-balancing-v2");
const { Before } = require("cucumber");

Before({ tags: "@elasticloadbalancingv2" }, function (scenario, callback) {
  this.service = new ElasticLoadBalancingV2({});
  callback();
});
