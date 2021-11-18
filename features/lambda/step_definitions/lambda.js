const { Before } = require("cucumber");

Before({ tags: "@lambda" }, function (scenario, callback) {
  const { Lambda } = require("../../../clients/client-lambda");
  this.service = new Lambda({});
  callback();
});
