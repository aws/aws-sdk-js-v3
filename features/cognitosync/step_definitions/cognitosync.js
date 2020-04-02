var { CognitoSync } = require("../../../clients/client-cognito-sync");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
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
      var params = { IdentityPoolId: idpid, IdentityId: idid };
      this.request(null, "listDatasets", params, callback, false);
    }
  );
});
