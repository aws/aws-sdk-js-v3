var { Kinesis } = require('../../../clients/node/client-kinesis-node');

module.exports = function() {
  this.Before("@kinesis", function (callback) {
    this.service = new Kinesis({});
    callback();
  });

  this.Given(/^I try to describe a stream in Kinesis$/, function(callback) {
    this.request(null, 'describeStream', {StreamName: 'XXINVALIDXX'}, callback, false);
  });
};
