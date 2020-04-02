var { SES } = require("../../../clients/client-ses");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@ses" }, function(scenario, callback) {
    this.service = new SES({});
    callback();
  });

  When(/^I check quota$/, function(next) {
    this.request(null, "getSendQuota", {}, next);
  });

  Then(/^the result should include (\S+) "([^"]*)"$/, function(
    type,
    attr,
    next
  ) {
    if (this.data[attr] === undefined) next.fail("Missing " + attr);
    if (typeof this.data[attr] !== type) next.fail("Incorrect type " + attr);
    next();
  });

  When(/^I ask to verify the email address "([^"]*)"$/, function(email, next) {
    this.request(
      null,
      "verifyEmailAddress",
      {
        EmailAddress: email
      },
      next,
      function() {
        // do nothing
      }
    );
  });
});
