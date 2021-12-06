const { Before } = require("cucumber");

Before({ tags: "@acm" }, function (scenario, callback) {
  const { ACM } = require("../../../clients/client-acm");
  this.service = new ACM({});
  callback();
});
