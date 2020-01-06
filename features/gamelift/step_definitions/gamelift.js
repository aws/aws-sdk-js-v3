var { GameLift } = require('../../../clients/node/client-gamelift-node');

module.exports = function() {
  this.Before("@gamelift", function (callback) {
    this.service = new GameLift({});
    callback();
  });

  // Add step definitions
};
