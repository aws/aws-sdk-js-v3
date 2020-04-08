const { SSM } = require("../../../clients/client-ssm");
const { Before } = require("cucumber");

Before({ tags: "@ssm" }, function (scenario, callback) {
  this.service = new SSM({});
  callback();
});
