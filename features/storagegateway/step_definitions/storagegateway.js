const { Before, When } = require("@cucumber/cucumber");

Before({ tags: "@storagegateway" }, function (scenario, callback) {
  const { StorageGateway } = require("../../../clients/client-storage-gateway");
  this.service = new StorageGateway({ region: "us-east-1" });
  callback();
});

When("I try to activate a Storage Gateway", function (callback) {
  const params = {
    ActivationKey: "INVALIDKEY",
    GatewayName: this.uniqueName("aws-sdk-js"),
    GatewayTimezone: "GMT-5:00",
    GatewayRegion: "us-east-1",
  };
  this.request(null, "activateGateway", params, callback, false);
});
