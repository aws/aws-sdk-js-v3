const { Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@opsworks" }, function (scenario, callback) {
  const { IAM } = require("../../../clients/client-iam");
  this.iam = new IAM({ region: "us-west-2" });
  const { OpsWorks } = require("../../../clients/client-opsworks");
  this.service = new OpsWorks({ region: "us-west-2" });
  callback();
});

Given("I create an OpsWorks user profile with the IAM user ARN", function (callback) {
  const params = {
    IamUserArn: this.iamUserArn,
  };
  this.request(null, "createUserProfile", params, callback, false);
});

Given("the IAM user ARN is in the result", function (callback) {
  this.assert.equal(this.data.IamUserArn, this.iamUserArn);
  callback();
});

Given("I describe the OpsWorks user profiles", function (callback) {
  const params = {
    IamUserArns: [this.iamUserArn],
  };
  this.request(null, "describeUserProfiles", params, callback);
});

Then("the IAM user ARN should be in the result", function (callback) {
  this.assert.equal(this.data.UserProfiles[0].IamUserArn, this.iamUserArn);
  callback();
});

Then("the name should be equal to the IAM username", function (callback) {
  this.assert.equal(this.data.UserProfiles[0].Name, this.iamUser);
  callback();
});

Then("the SSH username should be equal to the IAM username", function (callback) {
  this.assert.equal(this.data.UserProfiles[0].SshUsername, this.iamUser);
  callback();
});

Then("I delete the OpsWorks user profile", function (callback) {
  const params = {
    IamUserArn: this.iamUserArn,
  };
  this.request(null, "deleteUserProfile", params, callback, false);
});
