var { EMR } = require("../../../clients/client-emr");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@emr"] }, function(scenario, callback) {
    this.service = new EMR({});
    callback();
  });

  Given(/^I run an EMR job flow with invalid parameters$/, function(callback) {
    this.service = new EMR({});
    var params = { Name: "", Instances: { MasterInstanceType: "invalid" } };
    this.request(null, "runJobFlow", params, callback, false);
  });
});
