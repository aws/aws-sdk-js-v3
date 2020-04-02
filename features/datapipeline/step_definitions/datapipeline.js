var { DataPipeline } = require("../../../clients/client-data-pipeline");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@datapipeline" }, function(scenario, callback) {
    this.service = new DataPipeline({});
    callback();
  });

  Given(/^I create a Data Pipeline with name prefix "([^"]*)"$/, function(
    prefix,
    callback
  ) {
    var params = {
      name: this.uniqueName(prefix),
      uniqueId: this.uniqueName("aws-js-sdk")
    };
    this.request(null, "createPipeline", params, callback, false);
  });
});
