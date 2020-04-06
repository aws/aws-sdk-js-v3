const { SageMaker } = require("../../../clients/client-sagemaker");
const { Before } = require("cucumber");

Before({ tags: "@sagemaker" }, function (scenario, callback) {
  this.service = new SageMaker({});
  callback();
});
