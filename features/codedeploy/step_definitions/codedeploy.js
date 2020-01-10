var { CodeDeploy } = require("../../../clients/node/client-codedeploy-node");

module.exports = function() {
  this.Before("@codedeploy", function(callback) {
    this.service = new CodeDeploy({});
    callback();
  });

  // Add step definitions
};
