var { SSM } = require("../../../clients/client-ssm");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@ssm"] }, function(scenario, callback) {
    this.service = new SSM({});
    callback();
  });

  // Add step definitions
});
