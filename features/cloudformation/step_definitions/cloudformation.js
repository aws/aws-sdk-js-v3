var { CloudFormation } = require("../../../clients/client-cloudformation");

module.exports = function() {
  this.Before({ tags: ["@cloudformation"] }, function(scenario, callback) {
    this.service = new CloudFormation({});
    callback();
  });

  this.Given(
    /^I create a CloudFormation stack with name prefix "([^"]*)"$/,
    function(prefix, callback) {
      this.stackName = this.uniqueName(prefix);
      this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
      var params = {
        TemplateBody: this.templateBody,
        StackName: this.stackName
      };
      this.request(null, "createStack", params, callback, false);
    }
  );
};
