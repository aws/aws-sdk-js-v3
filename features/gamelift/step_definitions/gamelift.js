var { GameLift } = require("../../../clients/client-gamelift");

module.exports = function() {
  this.Before({ tags: ["@gamelift"] }, function(scenario, callback) {
    this.service = new GameLift({});
    callback();
  });

  // Add step definitions
};
