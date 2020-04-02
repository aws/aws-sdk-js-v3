var { ECS } = require("../../../clients/client-ecs");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@ecs"] }, function(scenario, callback) {
    this.service = new ECS({});
    callback();
  });

  // Add step definitions
});
