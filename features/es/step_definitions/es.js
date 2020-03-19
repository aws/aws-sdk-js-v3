var {
  ElasticsearchService
} = require("../../../clients/client-elasticsearch-service");

module.exports = function() {
  this.Before("@es", function(callback) {
    this.service = new ElasticsearchService({});
    callback();
  });

  // Add step definitions
};
