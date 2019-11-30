<<<<<<< HEAD
var { DataPipeline } = require('../../../clients/node/client-data-pipeline-node');

module.exports = function() {
  this.Before("@datapipeline", function (callback) {
    this.service = new DataPipeline({});
    callback();
  });

=======
module.exports = function() {
  this.Before("@datapipeline", function (callback) {
    this.service = new this.AWS.DataPipeline();
    callback();
  });

  var sortObjects = function sortObjects(objects) {
    this.AWS.util.arrayEach(objects, function(item) {
      item.fields.sort(function (field1, field2) {
        return field1.key < field2.key ? -1 : 1;
      });
    });
  };

>>>>>>> chore: copy v2 integ tests to v3 (#479)
  this.Given(/^I create a Data Pipeline with name prefix "([^"]*)"$/, function(prefix, callback) {
    var params = {
      name: this.uniqueName(prefix), uniqueId: this.uniqueName('aws-js-sdk')
    };
    this.request(null, 'createPipeline', params, callback, false);
  });
};
