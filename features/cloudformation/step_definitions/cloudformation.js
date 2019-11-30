<<<<<<< HEAD
var { CloudFormation } = require('../../../clients/node/client-cloudformation-node');

module.exports = function() {
  this.Before("@cloudformation", function (callback) {
    this.service = new CloudFormation({});
=======
module.exports = function() {
  this.Before("@cloudformation", function (callback) {
    this.service = new this.AWS.CloudFormation();
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    callback();
  });

  this.Given(/^I create a CloudFormation stack with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.stackName = this.uniqueName(prefix);
    this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
    var params = { TemplateBody: this.templateBody, StackName: this.stackName };
    this.request(null, 'createStack', params, callback, false);
  });
};
