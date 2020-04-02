var { Lambda } = require("../../../clients/client-lambda");

module.exports = function() {
  this.Before({ tags: ["@lambda"] }, function(scenario, callback) {
    this.service = new Lambda({});
    callback();
  });

  // Add step definitions
};
