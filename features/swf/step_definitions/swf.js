var { SWF } = require("../../../clients/node/client-swf-node");

module.exports = function() {
  this.Before("@swf", function(callback) {
    this.service = new SWF({});
    callback();
  });
};
