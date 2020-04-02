var { SWF } = require("../../../clients/client-swf");

module.exports = function() {
  this.Before("@swf", function(scenario, callback) {
    this.service = new SWF({});
    callback();
  });
};
