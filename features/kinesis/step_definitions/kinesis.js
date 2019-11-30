<<<<<<< HEAD
var { Kinesis } = require('../../../clients/node/client-kinesis-node');

module.exports = function() {
  this.Before("@kinesis", function (callback) {
    this.service = new Kinesis({});
=======
module.exports = function() {
  this.Before("@kinesis", function (callback) {
    this.service = new this.AWS.Kinesis();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I try to describe a stream in Kinesis$/, function(callback) {
    this.request(null, 'describeStream', {StreamName: 'XXINVALIDXX'}, callback, false);
  });
};
