const { SES } = require("../../../clients/client-ses");
const { Before, Then, When } = require("cucumber");

Before({ tags: "@ses" }, function (scenario, callback) {
  this.service = new SES({});
  callback();
});

When("I check quota", function (next) {
  this.request(null, "getSendQuota", {}, next);
});

Then("the result should include {word} {string}", function (type, attr, next) {
  if (this.data[attr] === undefined) next.fail("Missing " + attr);
  if (typeof this.data[attr] !== type) next.fail("Incorrect type " + attr);
  next();
});

When("I ask to verify the email address {string}", function (email, next) {
  this.request(
    null,
    "verifyEmailAddress",
    {
      EmailAddress: email,
    },
    next,
    function () {
      // do nothing
    }
  );
});
