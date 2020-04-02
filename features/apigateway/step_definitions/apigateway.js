var { APIGateway } = require("../../../clients/client-api-gateway");

module.exports = function() {
  this.Before({ tags: ["@apigateway"] }, function(scenario, callback) {
    this.service = new APIGateway({});
    callback();
  });

  // Add step definitions
};
