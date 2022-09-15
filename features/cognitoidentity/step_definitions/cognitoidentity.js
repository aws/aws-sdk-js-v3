const { After, Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@cognitoidentity" }, function () {
  const { CognitoIdentity } = require("../../../clients/client-cognito-identity");
  this.service = new CognitoIdentity({});
});

After({ tags: "@cognitoidentity" }, async function () {
  if (this.identityPoolId) {
    this.service.deleteIdentityPool({ IdentityPoolId: this.identityPoolId });
    this.identityPoolId = undefined;
  }
});

Given("I create a Cognito identity pool with prefix {string}", async function (prefix) {
  try {
    this.data = await this.service.createIdentityPool({
      IdentityPoolName: this.uniqueName(prefix),
      AllowUnauthenticatedIdentities: true,
    });
    this.identityPoolId = this.data.IdentityPoolId;
  } catch (error) {
    this.error = error;
  }
});

Given("I describe the Cognito identity pool ID", async function () {
  this.data = await this.service.describeIdentityPool({ IdentityPoolId: this.identityPoolId });
});
