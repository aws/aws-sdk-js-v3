var { Lambda } = require('../../../clients/node/client-lambda-node');

module.exports = function() {
  this.Before("@lambda", function (callback) {
    this.service = new Lambda({});
    callback();
  });

  // Add step definitions
};
