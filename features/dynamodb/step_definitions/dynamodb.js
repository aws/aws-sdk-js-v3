const jmespath = require("jmespath");
const { DynamoDB, waitForTableExists, waitForTableNotExists } = require("../../../clients/client-dynamodb");

function waitForTableExistsCallback(world, callback) {
  waitForTableExists({ client: world.service }, { TableName: world.tableName }).then(
    function (data) {
      callback();
    },
    function (err) {
      callback(err);
    }
  );
}

function waitForTableNotExistsWithCallback(world, callback) {
  waitForTableNotExists({ client: world.service }, { TableName: world.tableName }).then(
    function (data) {
      callback();
    },
    function (err) {
      callback(err);
    }
  );
}

const { Before, Given, Then, When } = require("cucumber");

Before({ tags: "@dynamodb" }, function (scenario, next) {
  this.service = new DynamoDB({
    maxRetries: 2,
  });
  next();
});

function createTable(world, callback) {
  const params = {
    TableName: world.tableName,
    AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
    KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    BillingMode: "PAY_PER_REQUEST",
  };

  world.service.createTable(params, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    waitForTableExistsCallback(world, callback);
  });
}

Given("I have a table", function (callback) {
  const world = this;
  this.service.listTables({}, function (err, data) {
    for (let i = 0; i < data.TableNames.length; i++) {
      if (data.TableNames[i] == world.tableName) {
        callback();
        return;
      }
    }
    createTable(world, callback);
  });
});

When("I create a table", function (callback) {
  const world = this;
  this.tableName = this.uniqueName("aws-sdk-js-integration");
  this.service.listTables({}, function (err, data) {
    for (let i = 0; i < data.TableNames.length; i++) {
      if (data.TableNames[i] == world.tableName) {
        callback();
        return;
      }
    }
    createTable(world, callback);
  });
});

When("I put the item:", function (string, next) {
  const params = { TableName: this.tableName, Item: JSON.parse(string) };
  this.request(null, "putItem", params, next);
});

When("I put a recursive item", function (next) {
  const params = {
    TableName: this.tableName,
    Item: {
      id: { S: "fooRecursive" },
      data: {
        M: {
          attr1: {
            L: [{ S: "value1" }, { L: [{ M: { attr12: { S: "value2" } } }] }],
          },
          attr2: {
            L: [{ B: new Uint8Array([0]) }, { B: new Uint8Array([1]) }, { NULL: true }, { BOOL: true }],
          },
        },
      },
    },
  };
  this.request(null, "putItem", params, next);
});

Then("the item with id {string} should exist", function (key, next) {
  const params = { TableName: this.tableName, Key: { id: { S: key } } };
  this.request(null, "getItem", params, next);
});

Then("it should have attribute {string} containing {string}", function (attr, value, next) {
  this.assert.equal(jmespath.search(this.data.Item, attr), value);
  next();
});

When("I delete the table", function (next) {
  const params = { TableName: this.tableName };
  this.request(null, "deleteTable", params, next);
});

Then("the table should eventually exist", function (callback) {
  waitForTableExistsCallback(this, callback);
});

Then("the table should eventually not exist", function (callback) {
  waitForTableNotExistsWithCallback(this, callback);
});

Given("my first request is corrupted with CRC checking (ON|OFF)", function (toggle, callback) {
  const world = this;
  this.service.config.dynamoDbCrc32 = toggle == "ON" ? true : false;
  const req = this.service.listTables();
  this.service.config.dynamoDbCrc32 = true;
  req.removeAllListeners("httpData");
  req.on("httpData", function (chunk, resp) {
    if (resp.retryCount == 0) {
      resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
    } else {
      world.AWS.EventListeners.Core.HTTP_DATA.call(this, chunk, resp);
    }
  });
  req.on("complete", function (resp) {
    world.error = resp.error;
    world.response = resp;
    if (resp.error) callback(resp.error);
    else callback();
  });
  req.send();
});

Then("the request should( not)? be retried", function (retry, callback) {
  if (retry && this.data.$metadata.retries > 0) callback(new Error("Request was incorrectly retried"));
  if (!retry && this.data.$metadata.retries == 0) callback(new Error("Request was incorrectly retried"));
  callback();
});

Given("all of my requests are corrupted with CRC checking ON", function (callback) {
  const world = this;
  const req = this.service.listTables();
  req.removeAllListeners("httpData");
  req.on("httpData", function (chunk, resp) {
    resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
  });
  req.on("complete", function (resp) {
    world.error = resp.error;
    world.response = resp;
    callback();
  });
  req.send();
});

When("the request is retried the maximum number of times", function (callback) {
  if (this.data.$metadata.retries != 2) callback(new Error("Incorrect retry count"));
  callback();
});

Then("the request should( not)? fail with a CRC checking error", function (failed, callback) {
  if (failed && this.error) callback(this.error);
  if (!failed && !this.error) callback(new Error("Did not fail when should have"));
  callback();
});

Given("I try to delete an item with key {string} from table {string}", function (key, table, callback) {
  const params = { TableName: table, Key: { id: { S: key } } };
  this.request(null, "deleteItem", params, callback, false);
});

Given("I try to delete a table with an empty table parameter", function (callback) {
  this.request(null, "deleteTable", { TableName: "" }, callback, false);
});
