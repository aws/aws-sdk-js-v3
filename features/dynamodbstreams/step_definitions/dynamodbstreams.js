var {
  DynamoDBStreams
} = require("../../../clients/node/client-dynamodb-streams-node");

module.exports = function() {
  this.Before("@dynamodbstreams", function(callback) {
    this.service = new DynamoDBStreams({});
    callback();
  });

  // Add step definitions
};
