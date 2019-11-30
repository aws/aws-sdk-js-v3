<<<<<<< HEAD
var { StorageGateway } = require('../../../clients/node/client-storage-gateway-node');

module.exports = function() {
  this.Before("@storagegateway", function (callback) {
    this.service = new StorageGateway({region: 'us-east-1'});
=======
module.exports = function() {
  this.Before("@storagegateway", function (callback) {
    this.service = new this.AWS.StorageGateway();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.When(/^I try to activate a Storage Gateway$/, function(callback) {
    var params = {
      ActivationKey: 'INVALIDKEY',
      GatewayName: this.uniqueName('aws-sdk-js'),
      GatewayTimezone: 'GMT-5:00',
      GatewayRegion: 'us-east-1'
    };
    this.request(null, 'activateGateway', params, callback, false);
  });
};
