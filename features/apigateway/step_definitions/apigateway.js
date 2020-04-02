var { APIGateway } = require("../../../clients/client-api-gateway");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@apigateway"] }, function(scenario, callback) {
    this.service = new APIGateway({});
    callback();
  });

  // Add step definitions
});
