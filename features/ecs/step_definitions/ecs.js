var { ECS } = require("../../../clients/client-ecs");

module.exports = function() {
  this.Before({ tags: ["@ecs"] }, function(scenario, callback) {
    this.service = new ECS({});
    callback();
  });

  // Add step definitions
};
