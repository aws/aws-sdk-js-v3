var { Glacier } = require("../../../clients/client-glacier");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Before, Given, Then, When }) {
  Before({ tags: "@glacier" }, function(scenario, callback) {
    this.service = new Glacier({});
    callback();
  });

  Given(/^I have a Glacier vault$/, function(callback) {
    this.vaultName = "aws-sdk-js-integration";
    var params = {
      vaultName: this.vaultName
    };
    this.request(null, "createVault", params, callback, false);
  });

  Given(
    /^I upload a (\d+(?:\.\d+)?)MB Glacier archive to the vault( with (?:invalid|incorrect) checksum)?$/,
    function(size, invalid, callback) {
      var data = Buffer.alloc(parseFloat(size) * 1024 * 1024);
      data.fill("0");
      var params = {
        vaultName: this.vaultName,
        body: data
      };
      if (invalid) {
        if (invalid.match("invalid")) params.checksum = "000";
        else params.checksum = "00000000000000000000000000000000";
      }
      this.request(null, "uploadArchive", params, callback, false);
    }
  );

  Then(/^the result should contain the Glacier archive ID$/, function(
    callback
  ) {
    this.archiveId = this.data.archiveId;
    callback();
  });

  Then(/^the result should contain the same tree hash checksum$/, function(
    callback
  ) {
    var hash = this.data.$metadata.httpHeaders["x-amz-sha256-tree-hash"];
    this.assert.equal(this.data.checksum, hash);
    callback();
  });

  When(/^I describe the Glacier vault$/, function(callback) {
    var params = {
      vaultName: this.vaultName
    };
    this.request(null, "describeVault", params, callback);
  });

  Then(/^I delete the Glacier archive$/, function(callback) {
    var params = {
      vaultName: this.vaultName,
      archiveId: this.archiveId
    };
    this.request(null, "deleteArchive", params, callback);
  });

  Then(/^I delete the Glacier vault$/, function(callback) {
    var params = {
      vaultName: this.vaultName
    };
    this.eventually(callback, function(next) {
      this.request(null, "deleteVault", params, next);
    });
  });

  When(
    /^I initiate a Glacier multi-part upload on a (\d+(?:\.\d+)?)MB archive in (\d+)MB chunks$/,
    function(totalSize, partSize, callback) {
      // setup multi-part upload
      this.uploadData = Buffer.alloc(totalSize * 1024 * 1024);
      this.uploadData.fill("0");
      // Computed by running bodyChecksumGenerator from body-checksum-node
      this.treeHash =
        "86118ad0c187fd240db59a37360e0e7f8a3a0c608eed740b4cd7b4271ab45171";
      this.partCounter = 0;
      this.partSize = partSize * 1024 * 1024;

      var params = {
        vaultName: this.vaultName,
        partSize: this.partSize.toString()
      };
      this.request(null, "initiateMultipartUpload", params, callback);
    }
  );

  Then(/^the result should contain the Glacier multi-part upload ID$/, function(
    callback
  ) {
    this.uploadId = this.data.uploadId;
    callback();
  });

  Then(/^I send the next part$/, function(callback) {
    var start = this.partCounter;
    var end = Math.min(start + this.partSize, this.uploadData.length);
    var buf = this.uploadData.slice(start, end);
    var range = "bytes " + start + "-" + (end - 1) + "/*";
    var params = {
      vaultName: this.vaultName,
      uploadId: this.uploadId,
      range: range,
      body: buf
    };
    this.request(null, "uploadMultipartPart", params, callback);
    this.partCounter += this.partSize;
  });

  Then(/^I send the Glacier archive data in chunks$/, function(callback) {
    var numPartsLeft = Math.ceil(this.uploadData.length / this.partSize);
    for (var i = 0; i < this.uploadData.length; i += this.partSize) {
      var end = Math.min(i + this.partSize, this.uploadData.length);
      var buf = this.uploadData.slice(i, end);
      var range = "bytes " + i + "-" + (end - 1) + "/*";
      var params = {
        vaultName: this.vaultName,
        uploadId: this.uploadId,
        range: range,
        body: buf
      };
      this.service.uploadMultipartPart(params, function() {
        if (--numPartsLeft === 0) callback();
      });
    }
  });

  Then(/^I complete the Glacier multi-part upload$/, function(callback) {
    var params = {
      vaultName: this.vaultName,
      uploadId: this.uploadId,
      archiveSize: this.uploadData.length.toString(),
      checksum: this.treeHash
    };
    this.request(null, "completeMultipartUpload", params, callback);
  });
});
