var { EFS } = require("../../../clients/client-efs");

module.exports = function() {
  this.Before({ tags: ["@efs"] }, function(scenario, callback) {
    this.service = new EFS({ region: "us-west-2" });
    callback();
  });
};
