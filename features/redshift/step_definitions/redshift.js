var { Redshift } = require("../../../clients/client-redshift");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: ["@redshift"] }, function(scenario, callback) {
    this.service = new Redshift({});
    callback();
  });

  Given(
    /^I create a Redshift cluster parameter group with prefix name "([^"]*)"$/,
    function(prefix, callback) {
      this.parameterGroupName = this.uniqueName(prefix);
      var params = {
        Description: "Description",
        ParameterGroupName: this.parameterGroupName,
        ParameterGroupFamily: "redshift-1.0"
      };
      this.request(
        null,
        "createClusterParameterGroup",
        params,
        callback,
        false
      );
    }
  );
});
