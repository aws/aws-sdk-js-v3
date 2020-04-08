const { ECS } = require("../../../clients/client-ecs");
const { Before } = require("cucumber");

Before({ tags: "@ecs" }, function (scenario, callback) {
  this.service = new ECS({});
  callback();
});
