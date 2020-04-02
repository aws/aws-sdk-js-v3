var { ACM } = require("../../../clients/client-acm");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@acm" }, function(scenario, callback) {
    this.service = new ACM({});
    callback();
  });

  // Add step definitions
});
