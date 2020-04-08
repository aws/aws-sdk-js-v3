const { APIGateway } = require("../../../clients/client-api-gateway");
const { Before } = require("cucumber");

Before({ tags: "@apigateway" }, function (scenario, callback) {
  this.service = new APIGateway({});
  callback();
});
