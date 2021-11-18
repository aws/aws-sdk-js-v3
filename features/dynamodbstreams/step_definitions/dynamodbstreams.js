const { Before } = require("cucumber");

Before({ tags: "@dynamodbstreams" }, function (scenario, callback) {
  const { DynamoDBStreams } = require("../../../clients/client-dynamodbstreams");
  this.service = new DynamoDBStreams({});
  callback();
});
