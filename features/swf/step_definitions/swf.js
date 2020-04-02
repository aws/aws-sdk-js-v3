var { SWF } = require("../../../clients/client-swf");

module.exports = function() {
  this.Before({ tags: ["@swf"] }, function(scenario, callback) {
    this.service = new SWF({});
    callback();
  });
};
