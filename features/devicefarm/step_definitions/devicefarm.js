const { Before } = require("@cucumber/cucumber");

Before({ tags: "@devicefarm" }, function (scenario, callback) {
  const { DeviceFarm } = require("../../../clients/client-device-farm");
  this.service = new DeviceFarm({ region: "us-west-2" });
  callback();
});
