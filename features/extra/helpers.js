const {
  waitForBucketExists: bucketExists,
  waitForBucketNotExists: bucketNotExists,
} = require("../../clients/client-s3");

module.exports = {
  assert: require("./assertions").assert,

  uniqueName: function uniqueName(base, sep) {
    if (sep === undefined) sep = "-";
    if (base === "") return "";
    return base + sep + new Date().getTime();
  },

  /**
   * Call this function with a block that will be executed multiple times
   * to deal with eventually consistent conditions.
   *
   *   When("I something is eventually consistent", function(callback) {
   *     this.eventually(callback, function(next) {
   *       doSomething(function(response) {
   *         if (response != notWhatIExpect) {
   *           next.fail();
   *         } else {
   *           next();
   *         }
   *       });
   *     });
   *   });
   *
   * You can pass in a few options after the function:
   *
   *   delay: The number of milliseconds to delay before retrying.
   *   backoff: Add this number of milliseconds to the delay between each attempt.
   *   maxTime: Maximum duration of milliseconds to wait for success.
   */
  eventually: function eventually(callback, block, options) {
    if (!options) options = {};
    if (!options.delay) options.delay = 0;
    if (!options.backoff) options.backoff = 500;
    if (!options.maxTime) options.maxTime = 5;

    const delay = options.delay;
    //TODO: apply clock offset
    const started = new Date();

    const self = this;
    const retry = function () {
      callback();
    };
    retry.fail = function (err) {
      const now = self.AWS.util.date.getDate();
      if (now - started < options.maxTime * 1000) {
        setTimeout(function () {
          delay += options.backoff;
          block.call(self, retry);
        }, delay);
      } else {
        callback(err || new Error("Eventually block timed out"));
      }
    };

    block.call(this, retry);
  },

  /**
   * A short-cut for calling a service operation and waiting for it to
   * finish execution before moving onto the next step in the scenario.
   */
  request: function request(svc, operation, params, next, extra) {
    const world = this;

    if (!svc) svc = this.service;
    if (typeof svc === "string") svc = this[svc];

    svc[operation](params, function (err, data) {
      world.error = err;
      world.data = data;

      try {
        if (typeof next.condition === "function") {
          const condition = next.condition.call(world, world);
          if (!condition) {
            next.fail(new Error("Request success condition failed"));
            return;
          }
        }

        if (extra) {
          extra.call(world, world.data);
          next.call(world);
        } else if (extra !== false && err) {
          world.unexpectedError(svc.config.signingName, operation, world.error.name, world.error.message, next);
        } else {
          next.call(world);
        }
      } catch (err) {
        next.fail(err);
      }
    });
  },

  /**
   * Given a response that contains an error, this fails the current
   * step with a formatted error message that indicates which service and
   * operation failed.
   */
  unexpectedError: function unexpectedError(svc, op, name, msg, next) {
    next.fail(new Error(`Received unexpected error from ${svc}.${op}, ${name}: ${msg}`));
  },

  /**
   * Cache bucket names used for cleanup after all features have run.
   */
  cacheBucketName: function (bucket) {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.resolve("integ.buckets.json");
    let cache;
    if (fs.existsSync(filePath)) {
      try {
        cache = JSON.parse(fs.readFileSync(filePath));
        cache.buckets.push(bucket);
        fs.writeFileSync(filePath, JSON.stringify(cache));
      } catch (fileErr) {
        throw fileErr;
      }
    } else {
      cache = {};
      cache.buckets = [bucket];
      fs.writeFileSync(filePath, JSON.stringify(cache));
    }
  },

  /**
   * Creates a fixture file of given size and returns the path.
   */
  createFile: function (size, name) {
    const fs = require("fs");
    const path = require("path");
    name = this.uniqueName(name);
    // Cannot set this as a world property because the world
    // is cleaned up before the AfterFeatures hook is fired.
    const fixturePath = path.resolve("./features/extra/fixtures/tmp");
    if (!fs.existsSync(fixturePath)) fs.mkdirSync(fixturePath);
    const filename = path.join(fixturePath, name);
    let body;
    if (typeof size === "string") {
      switch (size) {
        case "empty":
          body = Buffer.alloc(0);
          break;
        case "small":
          body = Buffer.alloc(1024 * 1024);
          break;
        case "large":
          body = Buffer.alloc(1024 * 1024 * 20);
          break;
      }
    } else if (typeof size === "number") {
      body = Buffer.alloc(size);
    }

    fs.writeFileSync(filename, body);
    return filename;
  },

  /**
   * Creates and returns a buffer of given size
   */
  createBuffer: function (size) {
    let match;
    let buffer;
    if ((match = size.match(/(\d+)KB/))) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024);
    } else if ((match = size.match(/(\d+)MB/))) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024 * 1024);
    } else {
      switch (size) {
        case "empty":
          buffer = Buffer.alloc(0);
          break;
        case "small":
          buffer = Buffer.alloc(1024 * 1024);
          break;
        case "large":
          buffer = Buffer.alloc(1024 * 1024 * 20);
          break;
        default:
          return Buffer.alloc(1024 * 1024);
      }
    }
    buffer.fill("x");
    return buffer;
  },

  waitForBucketExists: function (s3client, params, callback) {
    bucketExists({ client: s3client }, params).then(
      function (data) {
        callback();
      },
      function (err) {
        callback(err);
      }
    );
  },

  waitForBucketNotExists: function (s3client, params, callback) {
    bucketNotExists({ client: s3client }, params).then(
      function (data) {
        callback();
      },
      function (err) {
        callback(err);
      }
    );
  },
};
