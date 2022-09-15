const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@opsworks" }, function () {
  const { IAM } = require("../../../clients/client-iam");
  const { OpsWorks } = require("../../../clients/client-opsworks");

  this.iam = new IAM({});
  this.service = new OpsWorks({});
});

After({ tags: "@opsworks" }, async function () {
  if (this.iamUser) {
    await this.iam.deleteUser({ UserName: this.iamUser });
    await this.service.deleteUserProfile({ IamUserArn: this.iamUserArn });
    this.iamUser = undefined;
  }
});

Given("I create an OpsWorks user profile with the IAM user ARN", async function () {
  try {
    const params = { IamUserArn: this.iamUserArn };
    this.data = await this.service.createUserProfile(params);
  } catch (error) {
    this.error = error;
  }
});

Given("the IAM user ARN is in the result", function () {
  this.assert.equal(this.data.IamUserArn, this.iamUserArn);
});

Given("I describe the OpsWorks user profiles", async function () {
  const params = { IamUserArns: [this.iamUserArn] };
  this.data = await this.service.describeUserProfiles(params);
});

Then("the IAM user ARN should be in the result", function () {
  this.assert.equal(this.data.UserProfiles[0].IamUserArn, this.iamUserArn);
});

Then("the name should be equal to the IAM username", function () {
  this.assert.equal(this.data.UserProfiles[0].Name, this.iamUser);
});

Then("the SSH username should be equal to the IAM username", function () {
  this.assert.equal(this.data.UserProfiles[0].SshUsername, this.iamUser);
});
