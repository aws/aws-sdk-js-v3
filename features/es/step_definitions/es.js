<<<<<<< HEAD
var { ElasticsearchService } = require('../../../clients/node/client-elasticsearch-service-node');

module.exports = function() {
  this.Before("@es", function (callback) {
    this.service = new ElasticsearchService({});
=======
module.exports = function() {
  this.Before("@es", function (callback) {
    this.service = new this.AWS.ES();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
