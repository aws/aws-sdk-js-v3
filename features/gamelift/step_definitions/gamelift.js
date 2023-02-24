const { Before } = require("@cucumber/cucumber");

Before({ tags: "@gamelift" }, function (scenario, callback) {
  const { GameLift } = require("../../../clients/client-gamelift");
  this.service = new GameLift({});
  callback();
});
