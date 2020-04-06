const { Lambda } = require("../../../clients/client-lambda");
const { Before } = require("cucumber");

Before({ tags: "@lambda" }, function (scenario, callback) {
  this.service = new Lambda({});
  callback();
});
