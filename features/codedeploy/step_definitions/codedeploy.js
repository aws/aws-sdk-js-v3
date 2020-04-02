var { CodeDeploy } = require("../../../clients/client-codedeploy");

module.exports = function() {
  this.Before({ tags: ["@codedeploy"] }, function(scenario, callback) {
    this.service = new CodeDeploy({});
    callback();
  });

  // Add step definitions
};
