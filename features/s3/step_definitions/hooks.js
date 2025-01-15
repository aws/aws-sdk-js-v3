const { Before } = require("@cucumber/cucumber");

Before({ tags: "@s3" }, function (scenario, callback) {
  const { S3 } = require("../../../clients/client-s3");
  this.service = this.s3 = new S3({
    maxRetries: 100,
    requestChecksumCalculation: "WHEN_REQUIRED",
    responseChecksumValidation: "WHEN_REQUIRED",
  });
  callback();
});
