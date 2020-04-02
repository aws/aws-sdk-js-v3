var { Lambda } = require("../../../clients/client-lambda");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@lambda" }, function(scenario, callback) {
    this.service = new Lambda({});
    callback();
  });

  // Add step definitions
});
