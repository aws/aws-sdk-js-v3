var { APIGateway } = require("../../../clients/client-api-gateway");

module.exports = function() {
  this.Before("@apigateway", function(callback) {
    this.service = new APIGateway({});
    callback();
  });

  // Add step definitions
};
