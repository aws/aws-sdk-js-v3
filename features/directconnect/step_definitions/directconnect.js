const { Before, Given } = require("cucumber");

Before({ tags: "@directconnect" }, function (scenario, callback) {
  const { DirectConnect } = require("../../../clients/client-directconnect");
  this.service = new DirectConnect({});
  callback();
});

Given("I create a Direct Connect connection with an invalid location", function (callback) {
  const params = {
    bandwidth: "1Gbps",
    location: "INVALID_LOCATION",
    connectionName: this.uniqueName("aws-sdk-js"),
  };
  this.request(null, "createConnection", params, callback, false);
});
