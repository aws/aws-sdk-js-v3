var { IoT } = require("../../../clients/client-iot");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@iot"] }, function(scenario, callback) {
    this.service = new IoT({});
    callback();
  });

  // Add step definitions
});
