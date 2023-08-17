const { Before } = require("@cucumber/cucumber");

Before({ tags: "@elasticloadbalancingv2" }, function (scenario, callback) {
  const { ElasticLoadBalancingV2 } = require("../../../clients/client-elastic-load-balancing-v2");
  this.service = new ElasticLoadBalancingV2({});
  callback();
});
