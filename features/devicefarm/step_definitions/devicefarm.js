var { DeviceFarm } = require("../../../clients/client-device-farm");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@devicefarm" }, function(scenario, callback) {
    this.service = new DeviceFarm({ region: "us-west-2" });
    callback();
  });

  // Add step definitions
});
