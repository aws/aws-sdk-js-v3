const { Route53 } = require("../../../clients/client-route-53");
const { Before, Then, When } = require("cucumber");

Before({ tags: "@route53" }, function (scenario, callback) {
  this.service = new Route53({});
  callback();
});

When("I create a Route53 hosted zone with name prefix {string}", function (prefix, callback) {
  this.zoneName = "zone1.example.com";
  const params = {
    Name: this.zoneName,
    CallerReference: this.uniqueName(prefix),
    HostedZoneConfig: {
      Comment: "A comment about the zone",
    },
  };
  this.request(null, "createHostedZone", params, callback, false);
});

Then("the result should contain the hosted zone ID", function (callback) {
  this.hostedZoneId = this.data.HostedZone.Id;
  callback();
});

Then("the result should contain the change ID", function (callback) {
  this.changeInfoId = this.data.ChangeInfo.Id;
  callback();
});

Then("the result should contain the hosted zone name", function (callback) {
  this.assert.equal(this.data.HostedZone.Name, this.zoneName + ".");
  callback();
});

When("I get information about the Route53 change ID", function (callback) {
  this.request(
    null,
    "getChange",
    {
      Id: this.changeInfoId,
    },
    callback
  );
});

Then("the change status should be PENDING or INSYNC", function (callback) {
  this.assert.match(this.data.ChangeInfo.Status, "(PENDING|INSYNC)");
  callback();
});

When("I get information about the Route53 hosted zone ID", function (callback) {
  this.request(
    null,
    "getHostedZone",
    {
      Id: this.hostedZoneId,
    },
    callback
  );
});

Then("the result should contain multiple nameservers", function (callback) {
  this.assert.compare(this.data.DelegationSet.NameServers.length, ">=", 0);
  this.assert.equal(typeof this.data.DelegationSet.NameServers[0], "string");
  callback();
});

Then("I delete the Route53 hosted zone", function (callback) {
  this.request(
    null,
    "deleteHostedZone",
    {
      Id: this.hostedZoneId,
    },
    callback
  );
});

When("I create a Route53 TCP health check with name prefix {string}", function (prefix, callback) {
  const params = {
    CallerReference: this.uniqueName(prefix),
    HealthCheckConfig: {
      IPAddress: "192.0.43.10", // example.com
      Port: 80,
      Type: "TCP",
    },
  };
  this.request(null, "createHealthCheck", params, callback);
});

Then("the result should contain health check information", function (callback) {
  this.healthCheckInfo = this.data.HealthCheck;
  callback();
});

Then("the result should contain the health check ID", function (callback) {
  this.healthCheckId = this.data.HealthCheck.Id;
  callback();
});

When("I get information about the health check ID", function (callback) {
  const params = {
    HealthCheckId: this.healthCheckId,
  };
  this.request(null, "getHealthCheck", params, callback);
});

Then("the result should contain the previous health check information", function (callback) {
  this.assert.deepEqual(this.data.HealthCheck, this.healthCheckInfo);
  callback();
});

Then("I delete the Route53 TCP health check", function (callback) {
  const params = {
    HealthCheckId: this.healthCheckId,
  };
  this.request(null, "deleteHealthCheck", params, callback);
});

When("I list Route53 hosted zones", function (callback) {
  this.request(null, "listHostedZones", {}, callback);
});
