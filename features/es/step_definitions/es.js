const { ElasticsearchService } = require("../../../clients/client-elasticsearch-service");
const { Before } = require("cucumber");

Before({ tags: "@elasticsearchservice" }, function (scenario, callback) {
  this.service = new ElasticsearchService({});
  callback();
});
