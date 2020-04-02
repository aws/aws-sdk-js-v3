var { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");

module.exports = function() {
  this.Before({ tags: ["@dynamodbstreams"] }, function(scenario, callback) {
    this.service = new DynamoDBStreams({});
    callback();
  });

  // Add step definitions
};
