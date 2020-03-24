<<<<<<< HEAD
var { Redshift } = require('../../../clients/node/client-redshift-node');

module.exports = function() {
  this.Before("@redshift", function (callback) {
    this.service = new Redshift({});
=======
module.exports = function() {
  this.Before("@redshift", function (callback) {
    this.service = new this.AWS.Redshift();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I create a Redshift cluster parameter group with prefix name "([^"]*)"$/, function(prefix, callback) {
    this.parameterGroupName = this.uniqueName(prefix);
    var params = {
      Description: 'Description',
      ParameterGroupName: this.parameterGroupName,
      ParameterGroupFamily: 'redshift-1.0'
    };
    this.request(null, 'createClusterParameterGroup', params, callback, false);
  });
};
