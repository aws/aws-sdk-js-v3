const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@cloudsearch" }, function (scenario, callback) {
  const { CloudSearch } = require("../../../clients/client-cloudsearch");
  this.service = new CloudSearch({});
  callback();
});

Given("I create a domain with name prefix {string}", function (prefix, callback) {
  this.domainName = this.uniqueName(prefix);
  this.request(null, "createDomain", { DomainName: this.domainName }, callback, false);
});
