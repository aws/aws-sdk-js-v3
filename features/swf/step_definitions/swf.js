var { SWF } = require("../../../clients/client-swf");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@swf" }, function(scenario, callback) {
    this.service = new SWF({});
    callback();
  });
});
