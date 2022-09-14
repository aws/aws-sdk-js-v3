const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@iam" }, function () {
  const { IAM } = require("../../../clients/client-iam");
  this.iam = new IAM({});
});

After({ tags: "@iam" }, async function () {
  if (this.iamUser) {
    await this.iam.deleteUser({ UserName: this.iamUser });
    this.iamUser = undefined;
  }
  if (this.iamRoleName) {
    await this.iam.deleteRole({ RoleName: this.iamRoleName });
    this.iamRoleName = undefined;
  }
});

Given("I have an IAM username {string}", function (name) {
  this.iamUser = this.uniqueName(name);
});

Given("I create an IAM user with the username", async function () {
  try {
    const { User } = await this.iam.createUser({ UserName: this.iamUser });
    this.iamUserArn = User.Arn;
  } catch (error) {
    this.error = error;
  }
});

Then("the IAM user should exist", async function () {
  const { User } = await this.iam.getUser({ UserName: this.iamUser });
  this.assert.equal(User.UserName, this.iamUser);
  this.assert.equal(User.Arn, this.iamUserArn);
});

Given("I create an IAM role with name prefix {string}", async function (name) {
  this.iamRoleName = this.uniqueName(name);

  const assumeRolePolicyDocument =
    '{"Version":"2008-10-17","Statement":[' +
    '{"Effect":"Allow","Principal":{"Service":["ec2.amazonaws.com"]},' +
    '"Action":["sts:AssumeRole"]}]}';
  const params = {
    RoleName: this.iamRoleName,
    AssumeRolePolicyDocument: assumeRolePolicyDocument,
  };

  this.data = await this.iam.createRole(params);
  this.iamRoleArn = this.data.Role.Arn;
});

Then("the IAM role should exist", async function () {
  const { Role } = await this.iam.getRole({ RoleName: this.iamRoleName });
  this.assert.equal(Role.RoleName, this.iamRoleName);
});
