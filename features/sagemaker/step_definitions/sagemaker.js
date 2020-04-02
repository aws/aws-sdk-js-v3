var { SageMaker } = require("../../../clients/client-sagemaker");

module.exports = function() {
  this.Before("@sagemaker", function(scenario, callback) {
    this.service = new SageMaker({});
    callback();
  });

  // Add step definitions
};
