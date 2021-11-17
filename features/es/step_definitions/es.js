const { Before } = require("cucumber");

Before({ tags: "@elasticsearchservice" }, function (scenario, callback) {
  const { ElasticsearchService } = require("../../../clients/client-elasticsearchservice");
  this.service = new ElasticsearchService({});
  callback();
});
