<<<<<<< HEAD
var { Route53Domains } = require('../../../clients/node/client-route-53-domains-node');

module.exports = function() {
  this.Before("@route53domains", function (callback) {
    this.service = new Route53Domains({region: 'us-east-1'});
=======
module.exports = function() {
  this.Before("@route53domains", function (callback) {
    this.service = new this.AWS.Route53Domains();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I list Route53 domains$/, function (callback) {
    this.request(null, 'listDomains', {}, callback);
  });

  this.Given(/^I try to register a Route53 domain with invalid parameters$/, function (callback) {
    var params = {
      DomainName: 'example.com',
      DurationInYears: 1,
      AdminContact: {}, RegistrantContact: {}, TechContact: {}
    };
    this.request(null, 'registerDomain', params, callback, false);
  });
};
