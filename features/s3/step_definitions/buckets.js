const { S3 } = require("../../../clients/client-s3");
const { Given, Then, When } = require("cucumber");

Given("I am using the S3 {string} region", function (region, callback) {
  this.s3 = new S3({
    region: region,
  });
  callback();
});

Given(
  "I am using the S3 {string} region with signatureVersion {string}",
  function (region, signatureVersion, callback) {
    this.s3 = new S3({
      region: region,
      signatureVersion: signatureVersion,
    });
    callback();
  }
);

When("I create a bucket with the location constraint {string}", function (location, callback) {
  const bucket = (this.bucket = this.uniqueName("aws-sdk-js-integration"));
  const params = {
    Bucket: this.bucket,
    CreateBucketConfiguration: {
      LocationConstraint: location,
    },
  };
  this.request("s3", "createBucket", params, function (err, data) {
    if (err) {
      return callback(err);
    }
    callback();
  });
});

Then("the bucket should exist in region {string}", function (location, next) {
  // Bug: https://github.com/aws/aws-sdk-js-v3/issues/1799
  this.waitForBucketExists(new S3({ region: location }), { Bucket: this.bucket }, next);
});

Then("the bucket should have a location constraint of {string}", function (loc, callback) {
  const self = this;
  self.s3.getBucketLocation(
    {
      Bucket: self.bucket,
    },
    function (err, data) {
      if (err) callback(err);
      self.assert.equal(data.LocationConstraint, loc);
      callback();
    }
  );
});

When("I delete the bucket in region {string}", function (location, callback) {
  // Bug: https://github.com/aws/aws-sdk-js-v3/issues/1799
  this.request(new S3({ region: location }), "deleteBucket", { Bucket: this.bucket }, callback);
});

When("I put a transition lifecycle configuration on the bucket with prefix {string}", function (prefix, callback) {
  const params = {
    Bucket: this.bucket,
    LifecycleConfiguration: {
      Rules: [
        {
          Filter: {
            Prefix: prefix,
          },
          Status: "Enabled",
          Transitions: [
            {
              Days: 0,
              StorageClass: "GLACIER",
            },
          ],
        },
      ],
    },
  };
  this.request("s3", "putBucketLifecycleConfiguration", params, callback);
});

When("I get the transition lifecycle configuration on the bucket", function (callback) {
  this.eventually(callback, function (next) {
    this.request(
      "s3",
      "getBucketLifecycleConfiguration",
      {
        Bucket: this.bucket,
      },
      next
    );
  });
});

Then("the lifecycle configuration should have transition days of {int}", function (days, callback) {
  this.assert.equal(this.data.Rules[0].Transitions[0].Days, 0);
  callback();
});

Then("the lifecycle configuration should have transition storage class of {string}", function (value, callback) {
  this.assert.equal(this.data.Rules[0].Transitions[0].StorageClass, value);
  callback();
});

When("I put a bucket CORS configuration", function (callback) {
  const params = {
    Bucket: this.bucket,
    CORSConfiguration: {
      CORSRules: [
        {
          AllowedMethods: ["DELETE", "POST", "PUT"],
          AllowedOrigins: ["http://example.com"],
          AllowedHeaders: ["*"],
          ExposeHeaders: ["x-amz-server-side-encryption"],
          MaxAgeSeconds: 5000,
        },
      ],
    },
  };
  this.request("s3", "putBucketCors", params, callback);
});

When("I get the bucket CORS configuration", function (callback) {
  this.request(
    "s3",
    "getBucketCors",
    {
      Bucket: this.bucket,
    },
    callback
  );
});

Then("the AllowedMethods list should inclue {string}", function (value, callback) {
  this.assert.equal(this.data.CORSRules[0].AllowedMethods.sort().join(" "), "DELETE POST PUT");
  callback();
});

Then("the AllowedOrigin value should equal {string}", function (value, callback) {
  this.assert.equal(this.data.CORSRules[0].AllowedOrigins[0], value);
  callback();
});

Then("the AllowedHeader value should equal {string}", function (value, callback) {
  this.assert.equal(this.data.CORSRules[0].AllowedHeaders[0], value);
  callback();
});

Then("the ExposeHeader value should equal {string}", function (value, callback) {
  this.assert.equal(this.data.CORSRules[0].ExposeHeaders[0], value);
  callback();
});

Then("the MaxAgeSeconds value should equal {int}", function (value, callback) {
  this.assert.equal(this.data.CORSRules[0].MaxAgeSeconds, parseInt(value));
  callback();
});

When("I put a bucket tag with key {string} and value {string}", function (key, value, callback) {
  const params = {
    Bucket: this.bucket,
    Tagging: {
      TagSet: [
        {
          Key: key,
          Value: value,
        },
      ],
    },
  };

  this.request("s3", "putBucketTagging", params, callback);
});

When("I get the bucket tagging", function (callback) {
  this.request(
    "s3",
    "getBucketTagging",
    {
      Bucket: this.bucket,
    },
    callback
  );
});

Then("the first tag in the tag set should have key and value {string}, {string}", function (key, value, callback) {
  this.assert.equal(this.data.TagSet[0].Key, key);
  this.assert.equal(this.data.TagSet[0].Value, value);
  callback();
});

When("I create a bucket with a DNS compatible name that contains a dot", function (callback) {
  const bucket = (this.bucket = this.uniqueName("aws-sdk-js.integration"));
  this.request(
    "s3",
    "createBucket",
    {
      Bucket: this.bucket,
    },
    function (err, data) {
      if (err) {
        return callback(err);
      }
      this.waitForBucketExists(
        this.s3,
        {
          Bucket: bucket,
        },
        callback
      );
    }
  );
});

Given("I force path style requests", function (callback) {
  this.s3 = new S3({
    forcePathStyle: true,
  });
  callback();
});

Then("the bucket name should be in the request path", function (callback) {
  const path = this.data.Body.req.path.split("/");
  this.assert.equal(path[1], this.bucket);
  callback();
});

Then("the bucket name should not be in the request host", function (callback) {
  const host = this.data.Body.client.servername;
  this.assert.compare(host.indexOf(this.bucket), "<", 0);
  callback();
});

When("I put {string} to the key {string} in the bucket", function (data, key, next) {
  const params = {
    Bucket: this.bucket,
    Key: key,
    Body: data,
  };
  this.request("s3", "putObject", params, next, false);
});

When("I get the key {string} in the bucket", function (key, next) {
  const params = {
    Bucket: this.bucket,
    Key: key,
  };
  this.request("s3", "getObject", params, next, false);
});

Then("I delete the object {string} from the bucket", function (key, next) {
  const params = {
    Bucket: this.bucket,
    Key: key,
  };
  this.request("s3", "deleteObject", params, next);
});

When(/^I put a (small|large) buffer to the key "([^"]*)" in the bucket$/, function (size, key, next) {
  const body = this.createBuffer(size);
  const params = {
    Bucket: this.bucket,
    Key: key,
    Body: body,
  };
  this.request("s3", "putObject", params, next);
});

Then(/^the object "([^"]*)" should (not )?exist in the bucket$/, function (key, shouldNotExist, next) {
  const params = {
    Bucket: this.bucket,
    Key: key,
  };
  this.eventually(next, function (retry) {
    retry.condition = function () {
      if (shouldNotExist) {
        return this.error && this.error.code === "NotFound";
      } else {
        return !this.error;
      }
    };
    this.request("s3", "headObject", params, retry, false);
  });
});
