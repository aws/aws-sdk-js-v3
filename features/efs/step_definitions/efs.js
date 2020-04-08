const { EFS } = require("../../../clients/client-efs");
const { Before } = require("cucumber");

Before({ tags: "@efs" }, function (scenario, callback) {
  this.service = new EFS({ region: "us-west-2" });
  callback();
});
