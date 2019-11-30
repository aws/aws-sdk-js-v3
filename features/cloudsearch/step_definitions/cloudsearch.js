<<<<<<< HEAD
var { CloudSearch } = require('../../../clients/node/client-cloudsearch-node');

module.exports = function() {
  this.Before("@cloudsearch", function (callback) {
    this.service = new CloudSearch({});
=======
module.exports = function() {
  this.Before("@cloudsearch", function (callback) {
    this.service = new this.AWS.CloudSearch();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I create a domain with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.domainName = this.uniqueName(prefix);
    this.request(null, 'createDomain', {DomainName: this.domainName}, callback, false);
  });
};
