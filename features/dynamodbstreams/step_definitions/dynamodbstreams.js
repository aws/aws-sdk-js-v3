<<<<<<< HEAD
var { DynamoDBStreams } = require('../../../clients/node/client-dynamodb-streams-node');

module.exports = function() {
  this.Before("@dynamodbstreams", function (callback) {
    this.service = new DynamoDBStreams({});
=======
module.exports = function() {
  this.Before("@dynamodbstreams", function (callback) {
    this.service = new this.AWS.DynamoDBStreams();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  // Add step definitions
};
