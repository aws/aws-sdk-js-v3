const { CloudSearch } = require("../../../clients/client-cloudsearch");
const { Before, Given } = require("cucumber");

Before({ tags: "@cloudsearch" }, function (scenario, callback) {
  this.service = new CloudSearch({});
  callback();
});

Given("I create a domain with name prefix {string}", function (prefix, callback) {
  this.domainName = this.uniqueName(prefix);
  this.request(null, "createDomain", { DomainName: this.domainName }, callback, false);
});
