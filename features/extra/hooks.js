const util = require("util");
const jmespath = require("jmespath");

const isType = (obj, type) => {
  // handle cross-"frame" objects
  if (typeof type === "function") type = util.typeName(type);
  return Object.prototype.toString.call(obj) === "[object " + type + "]";
};

const { Before, Given, Then, When, setDefaultTimeout, setWorldConstructor } = require("cucumber");

setDefaultTimeout(300 * 1000);
setWorldConstructor(require("./world.js").World);

Before(function (scenario, callback) {
  this.params = {};
  callback();
});

/* Global S3 steps */
Given("I create a shared bucket", function (callback) {
  if (this.sharedBucket) return callback();

  const bucket = (this.sharedBucket = this.uniqueName("aws-sdk-js-shared-integration"));
  this.request("s3", "createBucket", { Bucket: this.sharedBucket }, function (err) {
    this.cacheBucketName(this.sharedBucket);
    if (err) {
      callback(err);
    } else {
      if (err) {
        return callback(err);
      }
      this.waitForBucketExists(this.s3, { Bucket: bucket }, callback);
    }
  });
});

Given("I create a bucket", function (callback) {
  const bucket = (this.bucket = this.uniqueName("aws-sdk-js-integration"));
  this.request("s3", "createBucket", { Bucket: this.bucket }, function (err, data) {
    if (err) {
      return callback(err);
    }
    this.waitForBucketExists(this.s3, { Bucket: bucket }, callback);
  });
});

When("I delete the bucket", function (callback) {
  this.request("s3", "deleteBucket", { Bucket: this.bucket }, callback);
});

Then("the bucket should exist", function (next) {
  this.waitForBucketExists(this.s3, { Bucket: this.bucket }, next);
});

Then("the bucket should not exist", function (callback) {
  this.waitForBucketNotExists(this.s3, { Bucket: this.bucket }, callback);
});

/* Global error code steps */

Given("I run the {string} operation", function (operation, callback) {
  this.request(null, operation, {}, callback, false);
});

Given("I run the {string} operation with params:", function (operation, params, callback) {
  this.request(null, operation, JSON.parse(params), callback, false);
});

Then("the request should be successful", function (callback) {
  this.assert.ok(!this.error, "Response was not successful");
  callback();
});

Then("the value at {string} should be a list", function (path, callback) {
  const value = jmespath.search(this.data, path);
  this.assert.ok(Array.isArray(value), "expected " + util.inspect(value) + " to be a list");
  callback();
});

Then("the value at {string} should be a number", function (path, callback) {
  const value = jmespath.search(this.data, path);
  this.assert.ok(typeof value === "number", "expected " + util.inspect(value) + " to be a number");
  callback();
});

Then("the value at {string} should be a string", function (path, callback) {
  const value = jmespath.search(this.data, path);
  this.assert.ok(typeof value === "string", "expected " + util.inspect(value) + " to be a string");
  callback();
});

Then("the error code should be {string}", function (code, callback) {
  this.assert.ok(this.error, "Response does not contain an error");
  this.assert.equal(this.error.name, code);
  callback();
});

Then("the error message should {word}:", function (matcher, message, callback) {
  if (matcher === "be") matcher = "equal";
  if (matcher === "contain") matcher = "match";
  this.assert.ok(this.error, "Response does not contain an error");
  this.assert[matcher](this.error.message, message);
  callback();
});

Then("the status code should be {int}", function (status, callback) {
  this.assert.equal(this.data.$metadata.httpStatusCode, parseInt(status));
  callback();
});

Then("the error status code should be {int}", function (status, callback) {
  this.assert.equal(this.error.$metadata.httpStatusCode, parseInt(status));
  callback();
});

Then("I should get the error:", function (table, callback) {
  const err = table.hashes()[0];
  this.assert.equal(this.error.name, err.name);
  this.assert.equal(this.error.message, err.message);
  callback();
});

Given("I have a {string} service in the {string} region", function (svc, region, callback) {
  this.service = new this.service.constructor({ region: region });
  callback();
});

Given(
  /^I paginate the "([^"]*)" operation(?: with limit (\d+))?(?: and max pages (\d+))?$/,
  function (operation, limit, maxPages, callback) {
    limit = parseInt(limit);
    if (maxPages) maxPages = parseInt(maxPages);

    const world = this;
    this.numPages = 0;
    this.numMarkers = 0;
    this.operation = operation;
    this.paginationConfig = this.service.paginationConfig(operation);
    this.params = this.params || {};

    const marker = this.paginationConfig.outputToken;
    if (this.paginationConfig.limitKey) {
      this.params[this.paginationConfig.limitKey] = limit;
    }
    this.service[operation](this.params).eachPage(function (err, data) {
      if (err) callback(err);
      else if (data === null) callback();
      else if (maxPages && world.numPages === maxPages) {
        callback();
        return false;
      } else {
        if (data[marker]) world.numMarkers++;
        world.numPages++;
        world.data = data;
      }
    });
  }
);

Then("I should get more than one page", function (callback) {
  this.assert.compare(this.numPages, ">", 1);
  callback();
});

Then("I should get at least one page", function (callback) {
  this.assert.compare(this.numPages, ">=", 1);
  callback();
});

Then("I should get {int} pages", function (numPages, callback) {
  this.assert.equal(this.numPages, parseInt(numPages));
  callback();
});

Then("I should get numPages - 1 markers", function (callback) {
  this.assert.equal(this.numMarkers, this.numPages - 1);
  callback();
});

Then("the last page should not contain a marker", function (callback) {
  const marker = this.paginationConfig.outputToken;
  this.assert.equal(this.data[marker], null);
  callback();
});

Then(
  "the result at {word} should contain a property {word} with a(n) {word}",
  function (wrapper, property, type, callback) {
    if (type === "Array" || type === "Date") {
      this.assert.equal(isType(this.data[wrapper][property], type), true);
    } else {
      this.assert.equal(typeof this.data[wrapper][property], type);
    }
    callback();
  }
);

Then("the result should contain a property {word} with a(n) {word}", function (property, type, callback) {
  if (type === "Array" || type === "Date") {
    this.assert.equal(isType(this.data[property], type), true);
  } else {
    this.assert.equal(typeof this.data[property], type);
  }
  callback();
});
