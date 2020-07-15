const { ElasticsearchService } = require("../../../clients/client-elasticsearch-service");
const { Before } = require("cucumber");

Before({ tags: "@es" }, function (scenario, callback) {
  this.service = new ElasticsearchService({});
  callback();
});
