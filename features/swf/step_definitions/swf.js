var { SWF } = require("../../../clients/client-swf");

module.exports = function() {
  this.Before("@swf", function(callback) {
    this.service = new SWF({});
    callback();
  });
};
