const { AutoScaling } = require("../../../clients/client-auto-scaling");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@autoscaling" }, function (scenario, callback) {
  this.service = new AutoScaling({ region: "us-east-1" });
  callback();
});

Given("I create a launch configuration with name {string}", function (name, callback) {
  const params = {
    ImageId: "ami-1624987f",
    InstanceType: "m1.small",
    LaunchConfigurationName: name,
  };
  this.request(null, "createLaunchConfiguration", params, callback, false);
});

Given("I describe launch configurations", function (callback) {
  this.request(null, "describeLaunchConfigurations", {}, callback);
});

Then("the list should contain the launch configuration {string}", function (name, callback) {
  this.assert.contains(this.data.LaunchConfigurations, function (configuration) {
    return configuration.LaunchConfigurationName === name;
  });
  callback();
});

Then("I delete the launch configuration {string}", function (name, callback) {
  const params = { LaunchConfigurationName: name };
  this.request(null, "deleteLaunchConfiguration", params, callback);
});
