const { Before } = require("@cucumber/cucumber");

Before({ tags: "@iot" }, function (scenario, callback) {
  const { IoT } = require("../../../clients/client-iot");
  this.service = new IoT({});
  callback();
});
