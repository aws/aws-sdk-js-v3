var { KMS } = require("../../../clients/client-kms");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@kms" }, function(scenario, callback) {
    this.service = new KMS({});
    callback();
  });

  // Add step definitions
});
