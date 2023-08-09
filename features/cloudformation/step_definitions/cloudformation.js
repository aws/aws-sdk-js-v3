const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@cloudformation" }, function (scenario, callback) {
  const { CloudFormation } = require("../../../clients/client-cloudformation");
  this.service = new CloudFormation({});
  callback();
});

Given("I create a CloudFormation stack with name prefix {string}", function (prefix, callback) {
  this.stackName = this.uniqueName(prefix);
  this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
  const params = {
    TemplateBody: this.templateBody,
    StackName: this.stackName,
    EnableTerminationProtection: true,
  };
  this.request(null, "createStack", params, callback, false);
});
