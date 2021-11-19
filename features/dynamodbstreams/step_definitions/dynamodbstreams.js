const { Before } = require("cucumber");

Before({ tags: "@dynamodbstreams" }, function (scenario, callback) {
  const { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");
  this.service = new DynamoDBStreams({});
  callback();
});
