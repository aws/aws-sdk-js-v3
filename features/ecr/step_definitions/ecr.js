const { Before } = require("@cucumber/cucumber");

Before({ tags: "@ecr" }, function (scenario, callback) {
  const { ECR } = require("../../../clients/client-ecr");
  this.service = new ECR({});
  callback();
});
