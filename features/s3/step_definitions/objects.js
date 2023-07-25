const { Before, Given, Then, When } = require("@cucumber/cucumber");

function getSignedUrl(client, command, params, callback) {
  const { S3RequestPresigner } = require("../../../packages/s3-request-presigner");
  const { createRequest } = require("../../../packages/util-create-request");
  const { formatUrl } = require("../../../packages/util-format-url");
  const signer = new S3RequestPresigner({ ...client.config });
  createRequest(client, new command(params))
    .then((request) => {
      const expiration = new Date(Date.now() + 1 * 60 * 60 * 1000);
      signer
        .presign(request, expiration)
        .then((data) => {
          callback(null, formatUrl(data));
        })
        .catch((err) => {
          callback(err);
        });
    })
    .catch((err) => {
      callback(err);
    });
}

Before({ tags: "@objects" }, function (scenario, callback) {
  const { S3, GetObjectCommand, PutObjectCommand } = require("../../../clients/client-s3");
  const { streamCollector } = require("@smithy/node-http-handler");
  const { toUtf8 } = require("@smithy/util-utf8");
  const { Md5 } = require("@smithy/md5-js");
  this.S3 = S3;
  this.GetObjectCommand = GetObjectCommand;
  this.PutObjectCommand = PutObjectCommand;
  this.streamCollector = streamCollector;
  this.toUtf8 = toUtf8;
  this.Md5 = Md5;
  callback();
});

When("I put {string} to the key {string}", function (data, key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: data,
  };
  this.request("s3", "putObject", params, next, false);
});

When("I get the object {string}", function (key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  this.request("s3", "getObject", params, next, false);
});

When(/^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)"$/, function (size, key, next) {
  const body = this.createBuffer(size);
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: body,
  };
  this.request("s3", "putObject", params, next);
});

When(/^I put (?:a |an )(empty|small|large) file to the key "([^"]*)"$/, function (size, key, next) {
  const fs = require("fs");
  const filename = this.createFile(size, key);
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: fs.createReadStream(filename),
  };
  this.request("s3", "putObject", params, next);
});

When("I put {string} to the key {string} with ContentLength {int}", function (contents, key, contentLength, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: contents,
    ContentLength: parseInt(contentLength),
  };
  this.s3nochecksums = new this.S3({
    computeChecksums: false,
  });
  this.request("s3nochecksums", "putObject", params, next);
});

Then("the object {string} should contain {string}", function (key, contents, next) {
  this.streamCollector(this.data.Body).then((body) => {
    this.assert.equal(this.toUtf8(body), contents);
    next();
  });
});

Then("the HTTP response should have a content length of {int}", function (contentLength, next) {
  this.assert.equal(this.data.Body.headers["content-length"], contentLength);
  next();
});

When("I copy the object {string} to {string}", function (key1, key2, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key2,
    CopySource: "/" + this.sharedBucket + "/" + key1,
  };
  this.request("s3", "copyObject", params, next);
});

When("I delete the object {string}", function (key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  this.request("s3", "deleteObject", params, next);
});

Then(/^the object "([^"]*)" should (not )?exist$/, function (key, shouldNotExist, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  this.eventually(next, function (retry) {
    retry.condition = function () {
      if (shouldNotExist) {
        return this.error && this.error.name === "NotFound";
      } else {
        return !this.error;
      }
    };
    this.request("s3", "headObject", params, retry, false);
  });
});

When("I stream key {string}", function (key, callback) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  const world = this;
  this.result = "";
  const s = this.service.getObject(params);

  setTimeout(function () {
    s.on("end", function () {
      callback();
    });
    s.on("data", function (d) {
      world.result += d.toString();
    });
  }, 2000); // delay streaming to ensure it is buffered
});

When("I stream2 key {string}", function (key, callback) {
  if (!require("stream").Readable) return callback();
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  const world = this;
  this.result = "";
  const stream = this.service.getObject(params).createReadStream();
  setTimeout(function () {
    stream.on("end", function () {
      callback();
    });
    stream.on("readable", function () {
      const v = stream.read();
      if (v) world.result += v;
    });
  }, 2000); // delay streaming to ensure it is buffered
});

Then("the streamed data should contain {string}", function (data, callback) {
  this.assert.equal(this.result.replace("\n", ""), data);
  callback();
});

Then("the streamed data content length should equal {int}", function (length, callback) {
  this.assert.equal(this.result.length, length);
  callback();
});

When("I get a pre-signed URL to GET the key {string}", function (key, callback) {
  const world = this;
  getSignedUrl(
    this.s3,
    this.GetObjectCommand,
    {
      Bucket: this.sharedBucket,
      Key: key,
    },
    function (err, url) {
      world.signedUrl = url;
      callback();
    }
  );
});

When("I access the URL via HTTP GET", function (callback) {
  const world = this;
  this.data = "";
  require("https")
    .get(this.signedUrl, function (res) {
      res
        .on("data", function (chunk) {
          world.data += chunk.toString();
        })
        .on("end", callback);
    })
    .on("error", callback);
});

Given("I get a pre-signed URL to PUT the key {string} with data {string}", function (key, body, callback) {
  const world = this;
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  if (body) params.Body = body;
  getSignedUrl(this.s3, this.PutObjectCommand, params, function (err, url) {
    world.signedUrl = url;
    callback();
  });
});

Given("I access the URL via HTTP PUT with data {string}", function (body, callback) {
  const world = this;
  this.data = "";

  const data = body;
  const options = require("url").parse(this.signedUrl);
  options.method = "PUT";
  options.headers = {
    "Content-Length": data.length,
  };

  require("https")
    .request(options, function (res) {
      res
        .on("data", function (chunk) {
          world.data += chunk.toString();
        })
        .on("end", callback);
    })
    .on("error", callback)
    .end(data);
});

Given("I create a presigned form to POST the key {string} with the data {string}", function (key, data, callback) {
  const world = this;
  const boundary = (this.postBoundary = "----WebKitFormBoundaryLL0mBKIuuLUKr7be");
  const conditions = [["content-length-range", data.length - 1, data.length + 1]],
    params = {
      Bucket: this.sharedBucket,
      Fields: {
        key: key,
      },
      Conditions: conditions,
    };
  this.s3.createPresignedPost(params, function (err, postData) {
    const body = Object.keys(postData.fields).reduce(function (body, fieldName) {
      body += "--" + boundary + "\r\n";
      body += 'Content-Disposition: form-data; name="' + fieldName + '"\r\n\r\n';
      return body + postData.fields[fieldName] + "\r\n";
    }, "");
    body += "--" + world.postBoundary + "\r\n";
    body += 'Content-Disposition: form-data; name="file"; filename="' + key + '"\r\n';
    body += "Content-Type: text/plain\r\n\r\n";
    body += data + "\r\n";
    body += "--" + world.postBoundary + "\r\n";
    body += 'Content-Disposition: form-data; name="submit"\r\n';
    body += "Content-Type: text/plain\r\n\r\n";
    body += "submit\r\n";
    body += "--" + world.postBoundary + "--\r\n";
    world.postBody = body;
    world.postAction = postData.url;
    callback();
  });
});

Given("I POST the form", function (callback) {
  const world = this;
  const options = require("url").parse(this.postAction);
  options.method = "POST";
  options.headers = {
    "Content-Type": "multipart/form-data; boundary=" + this.postBoundary,
    "Content-Length": this.postBody.length,
  };
  require("https")
    .request(options, function (res) {
      res
        .on("data", function (chunk) {
          world.data += chunk.toString();
        })
        .on("end", callback);
    })
    .on("error", callback)
    .end(this.postBody);
});

Then("the HTTP response should equal {string}", function (data, callback) {
  this.assert.equal(this.data, data);
  callback();
});

Then("the HTTP response should contain {string}", function (data, callback) {
  this.assert.match(this.data, data);
  callback();
});

Given("I setup the listObjects request for the bucket", function (callback) {
  this.params = {
    Bucket: this.sharedBucket,
  };
  callback();
});

// progress events

When(
  /^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)" with progress events$/,
  function (size, key, callback) {
    const self = this;
    const body = self.createBuffer(size);
    this.progress = [];
    const req = this.s3.putObject({
      Bucket: this.sharedBucket,
      Key: key,
      Body: body,
    });
    req.on("httpUploadProgress", function (p) {
      self.progress.push(p);
    });
    req.send(callback);
  }
);

Then("more than {int} {string} event should fire", function (numEvents, eventName, callback) {
  this.assert.compare(this.progress.length, ">", numEvents);
  callback();
});

Then("the {string} value of the progress event should equal {int}MB", function (prop, mb, callback) {
  this.assert.equal(this.progress[0][prop], mb * 1024 * 1024);
  callback();
});

Then(
  "the {string} value of the first progress event should be greater than {int} bytes",
  function (prop, bytes, callback) {
    this.assert.compare(this.progress[0][prop], ">", bytes);
    callback();
  }
);

When("I read the key {string} with progress events", function (key, callback) {
  const self = this;
  this.progress = [];
  const req = this.s3.getObject({
    Bucket: this.sharedBucket,
    Key: key,
  });
  req.on("httpDownloadProgress", function (p) {
    self.progress.push(p);
  });
  req.send(callback);
});

When("I put {string} to the (public|private) key {string}", function (data, access, key, next) {
  let acl;
  if (access === "public") acl = "public-read";
  else if (access === "private") acl = access;
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: data,
    ACL: acl,
  };
  this.request("s3", "putObject", params, next);
});

When("I put {string} to the key {string} with an AES key", function (data, key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    Body: data,
    SSECustomerAlgorithm: "AES256",
    SSECustomerKey: "aaaabbbbccccddddaaaabbbbccccdddd",
  };
  this.request("s3", "putObject", params, next);
});

When("I read the object {string} with the AES key", function (key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
    SSECustomerAlgorithm: "AES256",
    SSECustomerKey: "aaaabbbbccccddddaaaabbbbccccdddd",
  };
  this.request("s3", "getObject", params, next);
});

Then("I make an unauthenticated request to read object {string}", function (key, next) {
  const params = {
    Bucket: this.sharedBucket,
    Key: key,
  };
  this.s3.makeUnauthenticatedRequest(
    "getObject",
    params,
    function (err, data) {
      if (err) return next(err);
      this.data = data;
      next();
    }.bind(this)
  );
});

Given("I generate the MD5 checksum of {string}", function (data, next) {
  const hash = new this.Md5();
  hash.update(data);
  this.sentContentMD5 = hash.digest().toString();
  next();
});

Then("the MD5 checksum of the response data should equal the generated checksum", function (next) {
  const hash = new this.Md5();
  this.streamCollector(this.data.Body).then((body) => {
    hash.update(body);
    this.assert.equal(hash.digest(), this.sentContentMD5);
    next();
  });
});

Given("an empty bucket", function (next) {
  const self = this;
  const params = {
    Bucket: this.sharedBucket,
  };
  self.s3.listObjects(params, function (err, data) {
    if (err) return next(err);
    if (data.Contents.length > 0) {
      params.Delete = {
        Objects: [],
      };
      data.Contents.forEach(function (item) {
        params.Delete.Objects.push({
          Key: item.Key,
        });
      });
      self.request("s3", "deleteObjects", params, next);
    } else {
      next();
    }
  });
});
