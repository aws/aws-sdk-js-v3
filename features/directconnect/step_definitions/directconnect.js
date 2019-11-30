<<<<<<< HEAD
var { DirectConnect } = require('../../../clients/node/client-direct-connect-node');

module.exports = function() {
  this.Before("@directconnect", function (callback) {
    this.service = new DirectConnect({});
=======
module.exports = function() {
  this.Before("@directconnect", function (callback) {
    this.service = new this.AWS.DirectConnect();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I create a Direct Connect connection with an invalid location$/, function(callback) {
    var params = {
      bandwidth: '1Gbps',
      location: 'INVALID_LOCATION',
      connectionName: this.uniqueName('aws-sdk-js')
    };
    this.request(null, 'createConnection', params, callback, false);
  });
};
