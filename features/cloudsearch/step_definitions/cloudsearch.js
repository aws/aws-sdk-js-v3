var { CloudSearch } = require("../../../clients/client-cloudsearch");

module.exports = function() {
  this.Before({ tags: ["@cloudsearch"] }, function(scenario, callback) {
    this.service = new CloudSearch({});
    callback();
  });

  this.Given(/^I create a domain with name prefix "([^"]*)"$/, function(
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
};
