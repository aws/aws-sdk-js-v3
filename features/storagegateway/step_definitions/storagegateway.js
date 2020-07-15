const { StorageGateway } = require("../../../clients/client-storage-gateway");
const { Before, When } = require("cucumber");

Before({ tags: "@storagegateway" }, function (scenario, callback) {
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
