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

Given("I list the IAM users", function (callback) {
  this.request("iam", "listUsers", {}, callback);
});

Then("the list should contain the user", function (callback) {
  const name = this.iamUser;
  this.assert.contains(this.data.Users, function (user) {
    return user.UserName === name;
  });
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
