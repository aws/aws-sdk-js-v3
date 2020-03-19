var { KMS } = require("../../../clients/client-kms");

module.exports = function() {
  this.Before("@kms", function(callback) {
    this.service = new KMS({});
    callback();
  });

  // Add step definitions
};
