var { S3 } = require("../../../clients/client-s3");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  this.Before({ tags: ["@s3"] }, function(scenario, callback) {
    this.service = this.s3 = new S3({
      maxRetries: 100
    });
    callback();
  });
});
