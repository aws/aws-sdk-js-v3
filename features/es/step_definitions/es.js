var {
  ElasticsearchService
} = require("../../../clients/client-elasticsearch-service");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@es"] }, function(scenario, callback) {
    this.service = new ElasticsearchService({});
    callback();
  });

  // Add step definitions
});
