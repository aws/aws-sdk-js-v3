var { MachineLearning } = require("../../../clients/client-machine-learning");

module.exports = function() {
  this.Before("@machinelearning", function(callback) {
    this.service = new MachineLearning({});
    callback();
  });

  // Add step definitions
};
