var { ACM } = require("../../../clients/node/client-acm-node");

module.exports = function() {
  this.Before("@acm", function(callback) {
    this.service = new ACM({});
    callback();
  });

  // Add step definitions
};
