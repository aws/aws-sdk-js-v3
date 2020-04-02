var jmespath = require("jmespath");
var { DynamoDB } = require("../../../clients/client-dynamodb");

/**
 * Waits for the tableExists state by periodically calling the underlying
 * DynamoDB.describeTable() operation every 5 seconds (at most 25 times).
 */
function waitForTableExists(world, callback) {
  const params = {
    TableName: world.tableName
  };

  const maxAttempts = 25;
  const delay = 5000;
  let currentAttempt = 0;

  const checkForTableExists = () => {
    currentAttempt++;
    world.service.describeTable(params, function(err, data) {
      if (currentAttempt > maxAttempts) {
        callback.fail();
      } else if (data && data.Table && data.Table.TableStatus === "ACTIVE") {
        callback();
      } else {
        setTimeout(function() {
          checkForTableExists();
        }, delay);
      }
    });
  };
  checkForTableExists();
}

/**
 * Waits for the tableNotExists state by periodically calling the underlying
 * DynamoDB.describeTable() operation every 5 seconds (at most 25 times).
 */
function waitForTableNotExists(world, callback) {
  const params = {
    TableName: world.tableName
  };

  const maxAttempts = 25;
  const delay = 5000;
  let currentAttempt = 0;

  const checkForTableNotExists = () => {
    currentAttempt++;
    world.service.describeTable(params, function(err, data) {
      if (currentAttempt > maxAttempts) {
        callback.fail();
      } else if (err && err.name === "ResourceNotFoundException") {
        callback();
      } else {
        setTimeout(function() {
          checkForTableNotExists();
        }, delay);
      }
    });
  };
  checkForTableNotExists();
}

module.exports = function() {
  this.Before("@dynamodb", function(next) {
    this.service = new DynamoDB({
      maxRetries: 2
    });
    next();
  });

  function createTable(world, callback) {
    var params = {
      TableName: world.tableName,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 5
      }
    };

    world.service.createTable(params, function(err, data) {
      if (err) {
        callback.fail(err);
        return;
      }
      waitForTableExists(world, callback);
    });
  }

  this.Given(/^I have a table$/, function(callback) {
    var world = this;
    this.service.listTables({}, function(err, data) {
      for (var i = 0; i < data.TableNames.length; i++) {
        if (data.TableNames[i] == world.tableName) {
          callback();
          return;
        }
      }
      createTable(world, callback);
    });
  });

  this.When(/^I create a table$/, function(callback) {
    var world = this;
    this.tableName = this.uniqueName("aws-sdk-js-integration");
    this.service.listTables({}, function(err, data) {
      for (var i = 0; i < data.TableNames.length; i++) {
        if (data.TableNames[i] == world.tableName) {
          callback();
          return;
        }
      }
      createTable(world, callback);
    });
  });

  this.When(/^I put the item:$/, function(string, next) {
    var params = { TableName: this.tableName, Item: JSON.parse(string) };
    this.request(null, "putItem", params, next);
  });

  this.When(/^I put a recursive item$/, function(next) {
    var params = {
      TableName: this.tableName,
      Item: {
        id: { S: "fooRecursive" },
        data: {
          M: {
            attr1: {
              L: [{ S: "value1" }, { L: [{ M: { attr12: { S: "value2" } } }] }]
            },
            attr2: {
              L: [
                { B: new Uint8Array([0]) },
                { B: new Uint8Array([1]) },
                { NULL: true },
                { BOOL: true }
              ]
            }
          }
        }
      }
    };
    this.request(null, "putItem", params, next);
  });

  this.Then(/^the item with id "([^"]*)" should exist$/, function(key, next) {
    var params = { TableName: this.tableName, Key: { id: { S: key } } };
    this.request(null, "getItem", params, next);
  });

  this.Then(
    /^it should have attribute "([^"]*)" containing "([^"]*)"$/,
    function(attr, value, next) {
      this.assert.equal(jmespath.search(this.data.Item, attr), value);
      next();
    }
  );

  this.When(/^I delete the table$/, function(next) {
    var params = { TableName: this.tableName };
    this.request(null, "deleteTable", params, next);
  });

  this.Then(/^the table should eventually exist$/, function(callback) {
    waitForTableExists(this, callback);
  });

  this.Then(/^the table should eventually not exist$/, function(callback) {
    waitForTableNotExists(this, callback);
  });

  this.Given(
    /^my first request is corrupted with CRC checking (ON|OFF)$/,
    function(toggle, callback) {
      var world = this;
      this.service.config.dynamoDbCrc32 = toggle == "ON" ? true : false;
      var req = this.service.listTables();
      this.service.config.dynamoDbCrc32 = true;
      req.removeAllListeners("httpData");
      req.on("httpData", function(chunk, resp) {
        if (resp.retryCount == 0) {
          resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
        } else {
          world.AWS.EventListeners.Core.HTTP_DATA.call(this, chunk, resp);
        }
      });
      req.on("complete", function(resp) {
        world.error = resp.error;
        world.response = resp;
        if (resp.error) callback.fail(resp.error);
        else callback();
      });
      req.send();
    }
  );

  this.Then(/^the request should( not)? be retried$/, function(
    retry,
    callback
  ) {
    if (retry && this.response.retryCount > 0)
      callback.fail("Request was incorrectly retried");
    if (!retry && this.response.retryCount == 0)
      callback.fail("Request was incorrectly retried");
    callback();
  });

  this.Given(
    /^all of my requests are corrupted with CRC checking ON$/,
    function(callback) {
      var world = this;
      var req = this.service.listTables();
      req.removeAllListeners("httpData");
      req.on("httpData", function(chunk, resp) {
        resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
      });
      req.on("complete", function(resp) {
        world.error = resp.error;
        world.response = resp;
        callback();
      });
      req.send();
    }
  );

  this.When(/^the request is retried the maximum number of times$/, function(
    callback
  ) {
    if (this.response.retryCount != 2) callback.fail("Incorrect retry count");
    callback();
  });

  this.Then(
    /^the request should( not)? fail with a CRC checking error$/,
    function(failed, callback) {
      if (failed && this.error) callback.fail(this.error);
      if (!failed && !this.error)
        callback.fail("Did not fail when should have");
      callback();
    }
  );

  this.Given(
    /^I try to delete an item with key "([^"]*)" from table "([^"]*)"$/,
    function(key, table, callback) {
      var params = { TableName: table, Key: { id: { S: key } } };
      this.request(null, "deleteItem", params, callback, false);
    }
  );

  this.Given(
    /^I try to delete a table with an empty table parameter$/,
    function(callback) {
      this.request(null, "deleteTable", { TableName: "" }, callback, false);
    }
  );
};
