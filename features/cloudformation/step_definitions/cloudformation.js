var { CloudFormation } = require("../../../clients/client-cloudformation");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@cloudformation"] }, function(scenario, callback) {
    this.service = new CloudFormation({});
    callback();
  });

  Given(
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
});
