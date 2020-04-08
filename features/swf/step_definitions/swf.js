const { SWF } = require("../../../clients/client-swf");
const { Before, Given, Then, When } = require("cucumber");

Before({ tags: "@swf" }, function (scenario, callback) {
  this.service = new SWF({});
  callback();
});
