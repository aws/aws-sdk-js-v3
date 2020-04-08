const { ACM } = require("../../../clients/client-acm");
const { Before } = require("cucumber");

Before({ tags: "@acm" }, function (scenario, callback) {
  this.service = new ACM({});
  callback();
});
