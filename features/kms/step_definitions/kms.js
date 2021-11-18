const { Before } = require("cucumber");

Before({ tags: "@kms" }, function (scenario, callback) {
  const { KMS } = require("../../../clients/client-kms");
  this.service = new KMS({});
  callback();
});
