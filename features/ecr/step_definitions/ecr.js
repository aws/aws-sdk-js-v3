const { ECR } = require("../../../clients/client-ecr");
const { Before } = require("cucumber");

Before({ tags: "@ecr" }, function (scenario, callback) {
  this.service = new ECR({});
  callback();
});
