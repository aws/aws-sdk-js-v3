var { EFS } = require("../../../clients/client-efs");

module.exports = function() {
  this.Before("@efs", function(callback) {
    this.service = new EFS({ region: "us-west-2" });
    callback();
  });
};
