var {
  ElasticsearchService
} = require("../../../clients/client-elasticsearch-service");

module.exports = function() {
  this.Before({ tags: ["@es"] }, function(scenario, callback) {
    this.service = new ElasticsearchService({});
    callback();
  });

  // Add step definitions
};
