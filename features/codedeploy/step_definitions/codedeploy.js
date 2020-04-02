var { CodeDeploy } = require("../../../clients/client-codedeploy");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@codedeploy"] }, function(scenario, callback) {
    this.service = new CodeDeploy({});
    callback();
  });

  // Add step definitions
});
