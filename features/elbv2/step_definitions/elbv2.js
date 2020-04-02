const {
  ElasticLoadBalancingv2
} = require("../../../clients/client-elastic-load-balancing-v2");
const { Before } = require("cucumber");

Before({ tags: "@elbv2" }, function(scenario, callback) {
  this.service = new ElasticLoadBalancingv2({});
  callback();
});
