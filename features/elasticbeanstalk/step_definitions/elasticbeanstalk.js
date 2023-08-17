const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@elasticbeanstalk" }, function () {
  const { ElasticBeanstalk } = require("../../../clients/client-elastic-beanstalk");
  this.service = new ElasticBeanstalk({});
});

After({ tags: "@elasticbeanstalk" }, async function () {
  if (this.appName) {
    await this.service.deleteApplication({ ApplicationName: this.appName });
    this.appName = undefined;
  }
});

Given("I create an Elastic Beanstalk application with name prefix {string}", async function (prefix) {
  this.appName = this.uniqueName(prefix);
  try {
    this.data = await this.service.createApplication({ ApplicationName: this.appName });
  } catch (error) {
    this.error = error;
  }
});

Given("I create an Elastic Beanstalk application version with label {string}", async function (label) {
  this.appVersion = label;
  const params = {
    ApplicationName: this.appName,
    VersionLabel: this.appVersion,
  };
  await this.service.createApplicationVersion(params);
});

Given("I describe the Elastic Beanstalk application", async function () {
  const params = { ApplicationNames: [this.appName] };
  this.data = await this.service.describeApplications(params);
});

Then("the result should contain the Elastic Beanstalk application version", function () {
  this.assert.deepEqual(this.data.Applications[0].Versions, [this.appVersion]);
});

Then("the result should contain the Elastic Beanstalk application name", function () {
  this.assert.equal(this.data.Applications[0].ApplicationName, this.appName);
});
