var { KMS } = require("../../../clients/node/client-kms-node");

module.exports = function() {
  this.Before("@kms", function(callback) {
    this.service = new KMS({});
    callback();
  });

  // Add step definitions
};
