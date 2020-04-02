const { CognitoSync } = require("../../../clients/client-cognito-sync");
const { Before, Given } = require("cucumber");

Before({ tags: "@cognitosync" }, function(scenario, callback) {
  this.service = new CognitoSync({});
  callback();
});

Given(/^I list Cognito identity pool usage$/, function(callback) {
  this.request(null, "listIdentityPoolUsage", {}, callback);
});

Given(
  /^I list Cognito data sets with identity pool id "([^"]*)" and identity id "([^"]*)"$/,
  function(idpid, idid, callback) {
    const params = { IdentityPoolId: idpid, IdentityId: idid };
    this.request(null, "listDatasets", params, callback, false);
  }
);
