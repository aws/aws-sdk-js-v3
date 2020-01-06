var { ElasticsearchService } = require('../../../clients/node/client-elasticsearch-service-node');

module.exports = function() {
  this.Before("@es", function (callback) {
    this.service = new ElasticsearchService({});
    callback();
  });

  // Add step definitions
};
