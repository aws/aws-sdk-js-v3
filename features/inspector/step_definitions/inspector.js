var { Inspector } = require("../../../clients/client-inspector");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@inspector"] }, function(scenario, callback) {
    this.service = new Inspector({ region: "us-west-2" });
    callback();
  });

  // Add step definitions
});
