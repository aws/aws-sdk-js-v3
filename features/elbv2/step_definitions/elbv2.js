<<<<<<< HEAD
var { ElasticLoadBalancingv2 } = require('../../../clients/node/client-elastic-load-balancing-v2-node');

module.exports = function() {
  this.Before("@elbv2", function (callback) {
    this.service = new ElasticLoadBalancingv2({});
=======
module.exports = function() {
  this.Before("@elbv2", function (callback) {
    this.service = new this.AWS.ELBv2();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
