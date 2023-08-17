const { Before } = require("@cucumber/cucumber");

Before({ tags: "@efs" }, function (scenario, callback) {
  const { EFS } = require("../../../clients/client-efs");
  this.service = new EFS({ region: "us-west-2" });
  callback();
});
