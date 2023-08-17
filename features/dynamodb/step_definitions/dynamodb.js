const { AfterAll, Before, Given, Then, When } = require("@cucumber/cucumber");
const { DynamoDB } = require("../../../clients/client-dynamodb");
const jmespath = require("jmespath");

let tableName;

Before({ tags: "@dynamodb" }, function () {
  this.service = new DynamoDB({ maxRetries: 2 });
});

AfterAll({ tags: "@dynamodb" }, async function () {
  if (tableName) {
    const client = new DynamoDB({ maxRetries: 2 });
    await client.deleteTable({ TableName: tableName });
    tableName = undefined;
  }
});

Given("I have a table", async function () {
  await this.service.describeTable({ TableName: this.tableName });
});

When("I create a table", async function () {
  tableName = this.uniqueName("aws-sdk-js-integration");
  const params = {
    TableName: tableName,
    AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
    KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
    BillingMode: "PAY_PER_REQUEST",
  };
  this.tableName = tableName;
  await this.service.createTable(params);
});

When("I put the item:", async function (string) {
  const params = { TableName: this.tableName, Item: JSON.parse(string) };
  await this.service.putItem(params);
});

When("I put a recursive item", async function () {
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
  this.data = await this.service.putItem(params);
});

Then("the item with id {string} should exist", async function (key) {
  const params = { TableName: this.tableName, Key: { id: { S: key } } };
  this.data = await this.service.getItem(params);
});

Then("it should have attribute {string} containing {string}", async function (attr, value) {
  this.assert.equal(jmespath.search(this.data.Item, attr), value);
});

Then("the table should eventually exist", async function () {
  const { waitUntilTableExists } = require("../../../clients/client-dynamodb");
  await waitUntilTableExists({ client: this.service }, { TableName: this.tableName });
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

Given("I try to delete an item with key {string} from table {string}", async function (key, table) {
  const params = { TableName: table, Key: { id: { S: key } } };
  try {
    this.data = await this.service.deleteItem(params);
  } catch (error) {
    this.error = error;
  }
});

Given("I try to delete a table with an empty table parameter", async function () {
  try {
    this.data = await this.service.deleteTable({ TableName: "" });
  } catch (error) {
    this.error = error;
  }
});
