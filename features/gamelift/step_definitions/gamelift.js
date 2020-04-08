const { GameLift } = require("../../../clients/client-gamelift");
const { Before } = require("cucumber");

Before({ tags: "@gamelift" }, function (scenario, callback) {
  this.service = new GameLift({});
  callback();
});
