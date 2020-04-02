var { DirectConnect } = require("../../../clients/client-direct-connect");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@directconnect" }, function(scenario, callback) {
    this.service = new DirectConnect({});
    callback();
  });

  Given(
    /^I create a Direct Connect connection with an invalid location$/,
    function(callback) {
      var params = {
        bandwidth: "1Gbps",
        location: "INVALID_LOCATION",
        connectionName: this.uniqueName("aws-sdk-js")
      };
      this.request(null, "createConnection", params, callback, false);
    }
  );
});
