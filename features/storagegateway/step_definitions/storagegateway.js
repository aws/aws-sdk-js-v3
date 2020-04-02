var { StorageGateway } = require("../../../clients/client-storage-gateway");

module.exports = function() {
  this.Before("@storagegateway", function(callback) {
    this.service = new StorageGateway({ region: "us-east-1" });
    callback();
  });

  this.When(/^I try to activate a Storage Gateway$/, function(callback) {
    var params = {
      ActivationKey: "INVALIDKEY",
      GatewayName: this.uniqueName("aws-sdk-js"),
      GatewayTimezone: "GMT-5:00",
      GatewayRegion: "us-east-1"
    };
    this.request(null, "activateGateway", params, callback, false);
  });
};
