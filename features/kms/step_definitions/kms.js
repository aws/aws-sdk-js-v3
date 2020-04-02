var { KMS } = require("../../../clients/client-kms");

module.exports = function() {
  this.Before({ tags: ["@kms"] }, function(scenario, callback) {
    this.service = new KMS({});
    callback();
  });

  // Add step definitions
};
