var { S3 } = require("../../clients/client-s3");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ AfterAll }) {
  /**
   * Cleanup fixtures and resources. The world does not exist when
   * this handler is executed. Only resource cleanup and shutdown
   * should happen here.
   */
  AfterAll(function() {
    var path = require("path");
    var fs = require("fs");

    try {
      var filePath = path.resolve("integ.buckets.json");
      if (!fs.existsSync(filePath)) return Promise.resolve();
      deleteFixtures();
      var cache = JSON.parse(fs.readFileSync(filePath));
      var buckets = cache.buckets;
      if (buckets.length) {
        eachSeries(buckets, cleanBucket, function(err) {
          fs.unlinkSync(filePath);
          return Promise.reject(err);
        });
      } else {
        return Promise.resolve();
      }
    } catch (fileErr) {
      return Promise.reject(fileErr);
    }
  });

  /**
   * Delete fixtures
   */
  var deleteFixtures = function() {
    var fs = require("fs");
    var path = require("path");
    var fixturePath = path.resolve("./features/extra/fixtures/tmp");
    if (fs.existsSync(fixturePath)) {
      fs.readdirSync(fixturePath).forEach(function(file) {
        fs.unlinkSync(path.join(fixturePath, file));
      });
      fs.rmdirSync(fixturePath);
    }
  };
  /**
   * Run bucket cleanup serially.
   *
   */
  var eachSeries = function(list, iter, callback) {
    var item = list.shift();
    iter(item, function(err) {
      if (err) return callback(err);
      else if (list.length) {
        eachSeries(list, iter, callback);
      } else {
        return callback();
      }
    });
  };

  /*
   * Delete objects and then bucket.
   */
  var cleanBucket = function(bucket, callback) {
    deleteObjects(bucket, function(err, data) {
      if (err) callback(err);
      deleteBucket(bucket, callback);
    });
  };

  /*
   * Delete bucket
   */
  var deleteBucket = function(bucket, callback) {
    var s3 = new S3({ maxRetries: 100 });
    s3.deleteBucket({ Bucket: bucket }, function(err, data) {
      callback(err);
    });
  };

  /**
   * Delete objects.
   */
  var deleteObjects = function(bucket, callback) {
    var s3 = new S3({ maxRetries: 100 });
    var params = {
      Bucket: bucket
    };

    s3.listObjects(params, function(err, data) {
      if (err) return callback(err);
      if (data.Contents && data.Contents.length > 0) {
        params.Delete = { Objects: [] };
        data.Contents.forEach(function(item) {
          params.Delete.Objects.push({ Key: item.Key });
        });
        s3.deleteObjects(params, callback);
      } else {
        callback();
      }
    });
  };
});
