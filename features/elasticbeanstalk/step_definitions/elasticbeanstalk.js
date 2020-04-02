var { ElasticBeanstalk } = require("../../../clients/client-elastic-beanstalk");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@elasticbeanstalk"] }, function(scenario, callback) {
    this.service = new ElasticBeanstalk({});
    callback();
  });

  Given(
    /^I create an Elastic Beanstalk application with name prefix "([^"]*)"$/,
    function(prefix, callback) {
      this.appName = this.uniqueName(prefix);
      var params = { ApplicationName: this.appName };
      this.request(null, "createApplication", params, callback, false);
    }
  );

  Given(
    /^I create an Elastic Beanstalk application version with label "([^"]*)"$/,
    function(label, callback) {
      this.appVersion = label;
      var params = {
        ApplicationName: this.appName,
        VersionLabel: this.appVersion
      };
      this.request(null, "createApplicationVersion", params, callback);
    }
  );

  Given(/^I describe the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationNames: [this.appName] };
    this.request(null, "describeApplications", params, callback);
  });

  Then(
    /^the result should contain the Elastic Beanstalk application version$/,
    function(callback) {
      this.assert.deepEqual(this.data.Applications[0].Versions, [
        this.appVersion
      ]);
      callback();
    }
  );

  Then(
    /^the result should contain the Elastic Beanstalk application name$/,
    function(callback) {
      this.assert.equal(
        this.data.Applications[0].ApplicationName,
        this.appName
      );
      callback();
    }
  );

  Then(/^I delete the Elastic Beanstalk application$/, function(callback) {
    var params = { ApplicationName: this.appName };
    this.request(null, "deleteApplication", params, callback);
  });
});
