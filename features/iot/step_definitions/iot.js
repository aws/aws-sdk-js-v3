const { IoT } = require("../../../clients/client-iot");
const { Before } = require("cucumber");

Before({ tags: "@iot" }, function (scenario, callback) {
  this.service = new IoT({});
  callback();
});
