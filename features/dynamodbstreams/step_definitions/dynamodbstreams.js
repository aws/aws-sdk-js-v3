var { DynamoDBStreams } = require("../../../clients/client-dynamodb-streams");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@dynamodbstreams"] }, function(scenario, callback) {
    this.service = new DynamoDBStreams({});
    callback();
  });

  // Add step definitions
});
