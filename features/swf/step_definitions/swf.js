const { Before, Given, Then, When } = require("@cucumber/cucumber");

Before({ tags: "@swf" }, function (scenario, callback) {
  const { SWF } = require("../../../clients/client-swf");
  this.service = new SWF({});
  callback();
});
