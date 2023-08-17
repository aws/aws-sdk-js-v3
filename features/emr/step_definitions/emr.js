const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@emr" }, function (scenario, callback) {
  const { EMR } = require("../../../clients/client-emr");
  this.EMR = EMR;
  this.service = new EMR({});
  callback();
});

Given("I run an EMR job flow with invalid parameters", function (callback) {
  this.service = new this.EMR({});
  const params = { Name: "", Instances: { MasterInstanceType: "invalid" } };
  this.request(null, "runJobFlow", params, callback, false);
});
