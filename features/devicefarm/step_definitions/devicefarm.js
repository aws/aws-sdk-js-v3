const { Before } = require("cucumber");

Before({ tags: "@devicefarm" }, function (scenario, callback) {
  const { DeviceFarm } = require("../../../clients/client-devicefarm");
  this.service = new DeviceFarm({ region: "us-west-2" });
  callback();
});
