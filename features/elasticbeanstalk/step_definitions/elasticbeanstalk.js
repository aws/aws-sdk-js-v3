const { ElasticBeanstalk } = require("../../../clients/client-elastic-beanstalk");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@elasticbeanstalk" }, function (scenario, callback) {
  this.service = new ElasticBeanstalk({});
  callback();
});

Given("I create an Elastic Beanstalk application with name prefix {string}", function (prefix, callback) {
  this.appName = this.uniqueName(prefix);
  const params = { ApplicationName: this.appName };
  this.request(null, "createApplication", params, callback, false);
});

Given("I create an Elastic Beanstalk application version with label {string}", function (label, callback) {
  this.appVersion = label;
  const params = {
    ApplicationName: this.appName,
    VersionLabel: this.appVersion,
  };
  this.request(null, "createApplicationVersion", params, callback);
});

Given("I describe the Elastic Beanstalk application", function (callback) {
  const params = { ApplicationNames: [this.appName] };
  this.request(null, "describeApplications", params, callback);
});

Then("the result should contain the Elastic Beanstalk application version", function (callback) {
  this.assert.deepEqual(this.data.Applications[0].Versions, [this.appVersion]);
  callback();
});

Then("the result should contain the Elastic Beanstalk application name", function (callback) {
  this.assert.equal(this.data.Applications[0].ApplicationName, this.appName);
  callback();
});

Then("I delete the Elastic Beanstalk application", function (callback) {
  const params = { ApplicationName: this.appName };
  this.request(null, "deleteApplication", params, callback);
});
