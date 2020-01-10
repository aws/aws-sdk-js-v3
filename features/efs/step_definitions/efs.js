var { EFS } = require("../../../clients/node/client-efs-node");

module.exports = function() {
  this.Before("@efs", function(callback) {
    this.service = new EFS({ region: "us-west-2" });
    callback();
  });
};
