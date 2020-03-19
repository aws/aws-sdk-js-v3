var { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");

module.exports = function() {
  this.Before("@dynamodbstreams", function(callback) {
    this.service = new DynamoDBStreams({});
    callback();
  });

  // Add step definitions
};
