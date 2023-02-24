const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@route53domains" }, function (scenario, callback) {
  const { Route53Domains } = require("../../../clients/client-route-53-domains");
  this.service = new Route53Domains({ region: "us-east-1" });
  callback();
});

Given("I list Route53 domains", function (callback) {
  this.request(null, "listDomains", {}, callback);
});

Given("I try to register a Route53 domain with invalid parameters", function (callback) {
  const params = {
    DomainName: "example.com",
    DurationInYears: 1,
    AdminContact: {},
    RegistrantContact: {},
    TechContact: {},
  };
  this.request(null, "registerDomain", params, callback, false);
});
