var { EMR } = require("../../../clients/client-emr");

module.exports = function() {
  this.Before("@emr", function(callback) {
    this.service = new EMR({});
    callback();
  });

  this.Given(/^I run an EMR job flow with invalid parameters$/, function(
    callback
  ) {
    this.service = new EMR({});
    var params = { Name: "", Instances: { MasterInstanceType: "invalid" } };
    this.request(null, "runJobFlow", params, callback, false);
  });
};
