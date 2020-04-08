const { DeviceFarm } = require("../../../clients/client-device-farm");
const { Before } = require("cucumber");

Before({ tags: "@devicefarm" }, function (scenario, callback) {
  this.service = new DeviceFarm({ region: "us-west-2" });
  callback();
});
