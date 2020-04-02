var { Route53Domains } = require("../../../clients/client-route-53-domains");

module.exports = function() {
  this.Before("@route53domains", function(callback) {
    this.service = new Route53Domains({ region: "us-east-1" });
    callback();
  });

  this.Given(/^I list Route53 domains$/, function(callback) {
    this.request(null, "listDomains", {}, callback);
  });

  this.Given(
    /^I try to register a Route53 domain with invalid parameters$/,
    function(callback) {
      var params = {
        DomainName: "example.com",
        DurationInYears: 1,
        AdminContact: {},
        RegistrantContact: {},
        TechContact: {}
      };
      this.request(null, "registerDomain", params, callback, false);
    }
  );
};
