var { StorageGateway } = require("../../../clients/client-storage-gateway");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@storagegateway"] }, function(scenario, callback) {
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
});
