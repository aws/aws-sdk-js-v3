var { ECS } = require("../../../clients/node/client-ecs-node");

module.exports = function() {
  this.Before("@ecs", function(callback) {
    this.service = new ECS({});
    callback();
  });

  // Add step definitions
};
