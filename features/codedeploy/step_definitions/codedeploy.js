var { CodeDeploy } = require("../../../clients/client-codedeploy");

module.exports = function() {
  this.Before("@codedeploy", function(callback) {
    this.service = new CodeDeploy({});
    callback();
  });

  // Add step definitions
};
