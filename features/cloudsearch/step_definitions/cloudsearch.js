var { CloudSearch } = require("../../../clients/client-cloudsearch");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@cloudsearch" }, function(scenario, callback) {
    this.service = new CloudSearch({});
    callback();
  });

  Given(/^I create a domain with name prefix "([^"]*)"$/, function(
    prefix,
    callback
  ) {
    this.domainName = this.uniqueName(prefix);
    this.request(
      null,
      "createDomain",
      { DomainName: this.domainName },
      callback,
      false
    );
  });
});
