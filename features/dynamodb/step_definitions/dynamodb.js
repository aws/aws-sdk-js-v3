var jmespath = require('jmespath');
<<<<<<< HEAD
<<<<<<< HEAD
var { DynamoDB } = require('../../../clients/node/client-dynamodb-node');

function waitForTableExists(tableName, callback) {
  const db = new DynamoDB({});
  const params = {
    TableName: tableName
  };

  // Iterate totalTries times
  const totalTries = 25;
  let currentTry = 0;

  const checkForTableExists = (params, callback) => {
    currentTry++;
    db.describeTable(params, function(err, data) {
      if (err) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        setTimeout(function() {
          checkForTableExists(params, callback);
        }, 20000);
      } else if (data) {
        if (data.Table && data.Table.TableStatus === "ACTIVE") {
          callback();
        } else {
          if (currentTry > totalTries) {
            callback.fail(err);
          }
          setTimeout(function() {
            checkForTableExists(params, callback);
          }, 20000);
        }
      }
    });
  }
  checkForTableExists(params, callback);
};

function waitForTableNotExists(tableName, callback) {
  const db = new DynamoDB({});
  const params = {
    TableName: tableName
  };

  // Iterate totalTries times
  const totalTries = 25;
  let currentTry = 0;

  const checkForTableNotExists = (params, callback) => {
    currentTry++;
    db.describeTable(params, function(err, data) {
      if (err) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        if (e.name === "ResourceNotFoundException") {
          callback();
        }
        setTimeout(function() {
          checkForTableNotExists(params, callback);
        }, 20000);
      } else if (data) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        setTimeout(function() {
          checkForTableNotExists(params, callback);
        }, 20000);
      }
    });
    checkForTableNotExists(params, callback);
  }
  checkForTableNotExists(params, callback);
};

module.exports = function() {
  this.Before("@dynamodb", function (next) {
    this.service = new DynamoDB({
=======
=======
var { DynamoDB } = require('../../../clients/node/client-dynamodb-node');
>>>>>>> feat: integ tests for dynamodb from v2 (#480)

function waitForTableExists(tableName, callback) {
  const db = new DynamoDB({});
  const params = {
    TableName: tableName
  };

  // Iterate totalTries times
  const totalTries = 25;
  let currentTry = 0;

  const checkForTableExists = (params, callback) => {
    currentTry++;
    db.describeTable(params, function(err, data) {
      if (err) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        setTimeout(function() {
          checkForTableExists(params, callback);
        }, 20000);
      } else if (data) {
        if (data.Table && data.Table.TableStatus === "ACTIVE") {
          callback();
        } else {
          if (currentTry > totalTries) {
            callback.fail(err);
          }
          setTimeout(function() {
            checkForTableExists(params, callback);
          }, 20000);
        }
      }
    });
  }
  checkForTableExists(params, callback);
};

function waitForTableNotExists(tableName, callback) {
  const db = new DynamoDB({});
  const params = {
    TableName: tableName
  };

  // Iterate totalTries times
  const totalTries = 25;
  let currentTry = 0;

<<<<<<< HEAD
  this.Before("@dynamodb-2012-08-10", function (next) {
    this.service = new this.AWS.DynamoDB({
      apiVersion: '2012-08-10',
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
  const checkForTableNotExists = (params, callback) => {
    currentTry++;
    db.describeTable(params, function(err, data) {
      if (err) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        if (e.name === "ResourceNotFoundException") {
          callback();
        }
        setTimeout(function() {
          checkForTableNotExists(params, callback);
        }, 20000);
      } else if (data) {
        if (currentTry > totalTries) {
          callback.fail(err);
        }
        setTimeout(function() {
          checkForTableNotExists(params, callback);
        }, 20000);
      }
    });
    checkForTableNotExists(params, callback);
  }
  checkForTableNotExists(params, callback);
};

module.exports = function() {
  this.Before("@dynamodb", function (next) {
    this.service = new DynamoDB({
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
      maxRetries: 2
    });
    next();
  });

  function createTable(world, callback) {
<<<<<<< HEAD
<<<<<<< HEAD
    var db = new DynamoDB({});

    var params = {
      TableName: world.tableName,
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' }
      ],
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }
      ],
=======
    var db = new world.AWS.DynamoDB({
      apiVersion: '2011-12-05',
    });

    var params = {
      TableName: world.tableName,
      KeySchema: {
        HashKeyElement: { AttributeName: 'id', AttributeType: 'S' }
      },
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
    var db = new DynamoDB({});

    var params = {
      TableName: world.tableName,
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' }
      ],
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }
      ],
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 5,
      }
    };

    db.createTable(params, function(err, data) {
      if (err) {
        callback.fail(err);
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD
      waitForTableExists(world.tableName, callback);
=======
      params = { TableName: world.tableName };
      db.waitFor('tableExists', params, callback);
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
      waitForTableExists(world.tableName, callback);
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
    });
  }

  this.Given(/^I have a table$/, function(callback) {
    var world = this;
    this.tableName = 'aws-sdk-js-integration-test';
<<<<<<< HEAD
<<<<<<< HEAD
    this.service.listTables({}, function(err, data) {
=======
    this.service.listTables(function(err, data) {
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
    this.service.listTables({}, function(err, data) {
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
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
    var params = {TableName: this.tableName, Item: JSON.parse(string)};
    this.request(null, 'putItem', params, next);
  });

  this.Then(/^the item with id "([^"]*)" should exist$/, function(key, next) {
<<<<<<< HEAD
<<<<<<< HEAD
    var params = {TableName: this.tableName, Key: {id: {S: key}}};
=======
    var world = this;
    var params;
    if (this.service.config.apiVersion === '2011-12-05') {
      params = {TableName: this.tableName, Key: {HashKeyElement: {S: key}}};
    } else if (this.service.config.apiVersion === '2012-08-10') {
      params = {TableName: this.tableName, Key: {id: {S: key}}};
    }
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
    var params = {TableName: this.tableName, Key: {id: {S: key}}};
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
    this.request(null, 'getItem', params, next);
  });

  this.Then(/^it should have attribute "([^"]*)" containing "([^"]*)"$/, function(attr, value, next) {
    this.assert.equal(jmespath.search(this.data.Item, attr), value);
    next();
  });

  this.When(/^I delete the table$/, function(next) {
    var params = {TableName: this.tableName};
    this.request(null, 'deleteTable', params, next);
  });

  this.Then(/^the table should eventually not exist$/, function(callback) {
<<<<<<< HEAD
<<<<<<< HEAD
    waitForTableNotExists(this.tableName, calback);
=======
    var params = {TableName: this.tableName};
    this.service.waitFor('tableNotExists', params, callback);
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
    waitForTableNotExists(this.tableName, calback);
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
  });

  this.Given(/^my first request is corrupted with CRC checking (ON|OFF)$/, function(toggle, callback) {
    var world = this;
    this.service.config.dynamoDbCrc32 = toggle == 'ON' ? true : false;
    var req = this.service.listTables();
    this.service.config.dynamoDbCrc32 = true;
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      if (resp.retryCount == 0) {
        resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
      } else {
        world.AWS.EventListeners.Core.HTTP_DATA.call(this, chunk, resp);
      }
    });
    req.on('complete', function(resp) {
      world.error = resp.error;
      world.response = resp;
      if (resp.error) callback.fail(resp.error);
      else callback();
    });
    req.send();
  });

  this.Then(/^the request should( not)? be retried$/, function(retry, callback) {
    if (retry && this.response.retryCount > 0) callback.fail('Request was incorrectly retried');
    if (!retry && this.response.retryCount == 0) callback.fail('Request was incorrectly retried');
    callback();
  });

  this.Given(/^all of my requests are corrupted with CRC checking ON$/, function(callback) {
    var world = this;
    var req = this.service.listTables();
    req.removeAllListeners('httpData');
    req.on('httpData', function(chunk, resp) {
      resp.httpResponse.body = Buffer.from('{"invalid":"response"}');
    });
    req.on('complete', function(resp) {
      world.error = resp.error;
      world.response = resp;
      callback();
    });
    req.send();
  });

  this.When(/^the request is retried the maximum number of times$/, function(callback) {
    if (this.response.retryCount != 2) callback.fail('Incorrect retry count');
    callback();
  });

  this.Then(/^the request should( not)? fail with a CRC checking error$/, function(failed, callback) {
    if (failed && this.error) callback.fail(this.error);
    if (!failed && !this.error) callback.fail('Did not fail when should have');
    callback();
  });

  this.Given(/^I try to delete an item with key "([^"]*)" from table "([^"]*)"$/, function(key, table, callback) {
<<<<<<< HEAD
<<<<<<< HEAD
    var params = {TableName: table, Key: {id: {S: key}}};
=======
    var params = {TableName: table, Key: {HashKeyElement: {S: key}}};
>>>>>>> chore: copy v2 integ tests to v3 (#479)
=======
    var params = {TableName: table, Key: {id: {S: key}}};
>>>>>>> feat: integ tests for dynamodb from v2 (#480)
    this.request(null, 'deleteItem', params, callback, false);
  });

  this.Given(/^I try to delete a table with an empty table parameter$/, function(callback) {
    this.request(null, 'deleteTable', {TableName: ''}, callback, false);
  });
};
