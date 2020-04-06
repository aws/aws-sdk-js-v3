const { KMS } = require("../../../clients/client-kms");
const { Before } = require("cucumber");

Before({ tags: "@kms" }, function (scenario, callback) {
  this.service = new KMS({});
  callback();
});
