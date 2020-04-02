var { GameLift } = require("../../../clients/client-gamelift");

module.exports = function() {
  this.Before("@gamelift", function(scenario, callback) {
    this.service = new GameLift({});
    callback();
  });

  // Add step definitions
};
