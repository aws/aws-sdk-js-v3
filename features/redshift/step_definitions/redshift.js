const { Before, Given } = require("@cucumber/cucumber");

Before({ tags: "@redshift" }, function (scenario, callback) {
  const { Redshift } = require("../../../clients/client-redshift");
  this.service = new Redshift({});
  callback();
});

Given("I create a Redshift cluster parameter group with prefix name {string}", function (prefix, callback) {
  this.parameterGroupName = this.uniqueName(prefix);
  const params = {
    Description: "Description",
    ParameterGroupName: this.parameterGroupName,
    ParameterGroupFamily: "redshift-1.0",
  };
  this.request(null, "createClusterParameterGroup", params, callback, false);
});
