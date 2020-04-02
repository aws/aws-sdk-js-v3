var {
  ElasticLoadBalancing
} = require("../../../clients/client-elastic-load-balancing");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@elb"] }, function(scenario, callback) {
    this.service = new ElasticLoadBalancing({});
    callback();
  });

  Given(/^I create a load balancer with name prefix "([^"]*)"$/, function(
    prefix,
    callback
  ) {
    this.loadBalancerName = prefix + "-" + new Date().getTime();

    var params = {
      LoadBalancerName: this.loadBalancerName,
      Listeners: [
        {
          Protocol: "TCP",
          LoadBalancerPort: 80,
          InstancePort: 80
        }
      ],
      AvailabilityZones: ["us-east-1a"]
    };
    this.request(null, "createLoadBalancer", params, callback, false);
  });

  Given(/^I describe load balancers with the load balancer name$/, function(
    callback
  ) {
    var params = {
      LoadBalancerNames: [this.loadBalancerName]
    };
    this.request(null, "describeLoadBalancers", params, callback);
  });

  Then(/^the load balancer should be in the list$/, function(callback) {
    var name = this.data.LoadBalancerDescriptions[0].LoadBalancerName;
    this.assert.equal(name, this.loadBalancerName);
    callback();
  });

  Then(/^I delete the load balancer$/, function(callback) {
    var params = {
      LoadBalancerName: this.loadBalancerName
    };
    this.request(null, "deleteLoadBalancer", params, callback);
  });

  Given(/^I try to create a load balancer with no name$/, function(callback) {
    this.request(null, "createLoadBalancer", {}, callback);
  });
});
