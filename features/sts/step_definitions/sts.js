var { STS } = require("../../../clients/client-sts");

module.exports = function() {
  this.Before({ tags: ["@sts"] }, function(scenario, callback) {
    this.service = new STS({});
    callback();
  });

  this.Given(
    /^I get an STS session token with a duration of (\d+) seconds$/,
    function(duration, callback) {
      this.request(
        null,
        "getSessionToken",
        {
          DurationSeconds: parseInt(duration)
        },
        callback,
        false
      );
    }
  );

  this.Given(/^I try to assume role with web identity$/, function(callback) {
    var params = {
      RoleArn: "arn:aws:iam::123456789:role/WebIdentity",
      RoleSessionName: "name",
      WebIdentityToken: "token"
    };
    this.request(null, "assumeRoleWithWebIdentity", params, callback, false);
  });

  this.Given(/^I try to assume role with SAML$/, function(callback) {
    var arn = "arn:aws:iam::123456789:role/Role";
    var token = "TOKENVALUETOKENVALUETOKENVALUETOKENVALUE";
    var params = {
      RoleArn: arn,
      PrincipalArn: arn,
      SAMLAssertion: token
    };
    this.request(null, "assumeRoleWithSAML", params, callback, false);
  });
};
