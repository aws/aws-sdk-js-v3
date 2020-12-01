const { IAM } = require("../../../clients/client-iam");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@iam" }, function (scenario, callback) {
  this.iam = new IAM({});
  callback();
});

Given("I have an IAM username {string}", function (name, callback) {
  this.iamUserArn = "";
  this.iamUser = this.uniqueName(name);
  callback();
});

Given("I create an IAM user with the username", function (callback) {
  const world = this;
  const next = function () {
    if (world.data) this.iamUserArn = world.data.User.Arn;
    else this.iamUserArn = null;
    callback();
  };
  next.fail = callback;
  this.request(
    "iam",
    "createUser",
    {
      UserName: this.iamUser,
    },
    next,
    false
  );
});

Given("I get the IAM user", function (callback) {
  this.request("iam", "getUser", { UserName: this.iamUser }, callback);
});

Then("the IAM user should exist", function (callback) {
  this.assert.equal(this.data.User.UserName, this.iamUser);
  callback();
});

Then("I delete the IAM user", function (callback) {
  this.request(
    "iam",
    "deleteUser",
    {
      UserName: this.iamUser,
    },
    callback
  );
});

Given("I create an IAM role with name prefix {string}", function (name, callback) {
  this.iamRoleName = this.uniqueName(name);

  const world = this;
  const assumeRolePolicyDocument =
    '{"Version":"2008-10-17","Statement":[' +
    '{"Effect":"Allow","Principal":{"Service":["ec2.amazonaws.com"]},' +
    '"Action":["sts:AssumeRole"]}]}';
  const params = {
    RoleName: this.iamRoleName,
    AssumeRolePolicyDocument: assumeRolePolicyDocument,
  };
  const next = function () {
    world.iamRoleArn = world.data.Role.Arn;
    callback();
  };
  next.fail = callback;

  this.request("iam", "createRole", params, next);
});

Then("the IAM role should exist", function (callback) {
  this.assert.compare(this.iamRoleArn.length, ">", 0);
  callback();
});

Then("I delete the IAM role", function (callback) {
  this.request(
    "iam",
    "deleteRole",
    {
      RoleName: this.iamRoleName,
    },
    callback
  );
});
