const { Before } = require("cucumber");

Before({ tags: "@elasticloadbalancingv2" }, function (scenario, callback) {
  const { ElasticLoadBalancingV2 } = require("../../../clients/client-elasticloadbalancingv2");
  this.service = new ElasticLoadBalancingV2({});
  callback();
});
