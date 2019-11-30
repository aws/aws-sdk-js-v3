<<<<<<< HEAD
var { GameLift } = require('../../../clients/node/client-gamelift-node');

module.exports = function() {
  this.Before("@gamelift", function (callback) {
    this.service = new GameLift({});
=======
module.exports = function() {
  this.Before("@gamelift", function (callback) {
    this.service = new this.AWS.GameLift();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
