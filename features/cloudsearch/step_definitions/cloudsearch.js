var { CloudSearch } = require('../../../clients/node/client-cloudsearch-node');

module.exports = function() {
  this.Before("@cloudsearch", function (callback) {
    this.service = new CloudSearch({});
    callback();
  });

  this.Given(/^I create a domain with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.domainName = this.uniqueName(prefix);
    this.request(null, 'createDomain', {DomainName: this.domainName}, callback, false);
  });
};
