const { DataPipeline } = require("../../../clients/client-data-pipeline");
const { Before, Given } = require("cucumber");

Before({ tags: "@datapipeline" }, function (scenario, callback) {
  this.service = new DataPipeline({});
  callback();
});

Given("I create a Data Pipeline with name prefix {string}", function (prefix, callback) {
  const params = {
    name: this.uniqueName(prefix),
    uniqueId: this.uniqueName("aws-js-sdk"),
  };
  this.request(null, "createPipeline", params, callback, false);
});
