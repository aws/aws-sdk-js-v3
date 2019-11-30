<<<<<<< HEAD
var { EMR } = require('../../../clients/node/client-emr-node');

module.exports = function() {
  this.Before("@emr", function (callback) {
    this.service = new EMR({});
=======
module.exports = function() {
  this.Before("@emr", function (callback) {
    this.service = new this.AWS.EMR();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I run an EMR job flow with invalid parameters$/, function(callback) {
<<<<<<< HEAD
    this.service = new EMR({});
=======
    this.service = new this.AWS.EMR();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    var params = {Name: '', Instances: {MasterInstanceType: 'invalid'}};
    this.request(null, 'runJobFlow', params, callback, false);
  });
};
