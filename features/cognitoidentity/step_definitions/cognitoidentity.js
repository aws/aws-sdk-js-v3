var { CognitoIdentity } = require("../../../clients/client-cognito-identity");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@cognitoidentity" }, function(scenario, callback) {
  this.service = new CognitoIdentity({});
  callback();
});

Given(/^I create a Cognito identity pool with prefix "([^"]*)"$/, function(
  prefix,
  callback
) {
  var expectError = prefix === "" ? false : undefined;
  var params = {
    IdentityPoolName: this.uniqueName(prefix, ""),
    AllowUnauthenticatedIdentities: true
  };
  this.request(null, "createIdentityPool", params, callback, expectError);
});

Given(/^I describe the Cognito identity pool ID$/, function(callback) {
  this.identityPoolId = this.data.IdentityPoolId;
  this.request(
    null,
    "describeIdentityPool",
    { IdentityPoolId: this.data.IdentityPoolId },
    callback
  );
});

Then(/^I delete the Cognito identity pool$/, function(callback) {
  this.request(
    null,
    "deleteIdentityPool",
    { IdentityPoolId: this.identityPoolId },
    callback
  );
});
