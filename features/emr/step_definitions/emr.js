const { EMR } = require("../../../clients/client-emr");
const { Before, Given } = require("cucumber");

Before({ tags: "@emr" }, function (scenario, callback) {
  this.service = new EMR({});
  callback();
});

Given("I run an EMR job flow with invalid parameters", function (callback) {
  this.service = new EMR({});
  const params = { Name: "", Instances: { MasterInstanceType: "invalid" } };
  this.request(null, "runJobFlow", params, callback, false);
});
