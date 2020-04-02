var { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");

module.exports = function() {
  this.Before("@dynamodbstreams", function(scenario, callback) {
    this.service = new DynamoDBStreams({});
    callback();
  });

  // Add step definitions
};
