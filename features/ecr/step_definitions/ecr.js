var { ECR } = require("../../../clients/client-ecr");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@ecr" }, function(scenario, callback) {
    this.service = new ECR({});
    callback();
  });

  // Add step definitions
});
