var { SageMaker } = require("../../../clients/client-sagemaker");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@sagemaker" }, function(scenario, callback) {
    this.service = new SageMaker({});
    callback();
  });

  // Add step definitions
});
