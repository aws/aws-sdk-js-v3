var { EFS } = require("../../../clients/client-efs");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@efs"] }, function(scenario, callback) {
    this.service = new EFS({ region: "us-west-2" });
    callback();
  });
});
