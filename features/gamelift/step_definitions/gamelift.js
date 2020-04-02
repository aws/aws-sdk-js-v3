var { GameLift } = require("../../../clients/client-gamelift");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@gamelift" }, function(scenario, callback) {
    this.service = new GameLift({});
    callback();
  });

  // Add step definitions
});
