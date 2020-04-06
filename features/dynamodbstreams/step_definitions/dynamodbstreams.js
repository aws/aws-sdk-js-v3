const { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");
const { Before } = require("cucumber");

Before({ tags: "@dynamodbstreams" }, function (scenario, callback) {
  this.service = new DynamoDBStreams({});
  callback();
});
