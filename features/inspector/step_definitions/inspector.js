var { Inspector } = require('../../../clients/node/client-inspector-node');

module.exports = function() {
  this.Before("@inspector", function (callback) {
    this.service = new Inspector({region: 'us-west-2'});
    callback();
  });

  // Add step definitions
};
