var { DataPipeline } = require("../../../clients/client-data-pipeline");

module.exports = function() {
  this.Before("@datapipeline", function(callback) {
    this.service = new DataPipeline({});
    callback();
  });

  this.Given(/^I create a Data Pipeline with name prefix "([^"]*)"$/, function(
    prefix,
    callback
  ) {
    var params = {
      name: this.uniqueName(prefix),
      uniqueId: this.uniqueName("aws-js-sdk")
    };
    this.request(null, "createPipeline", params, callback, false);
  });
};
