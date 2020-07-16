const jmespath = require("jmespath");
const { RDS } = require("../../../clients/client-rds");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@rds" }, function (scenario, callback) {
  this.service = new RDS({});
  callback();
});

Given("I create a RDS security group with prefix name {string}", function (prefix, callback) {
  this.dbGroupName = this.uniqueName(prefix);
  const params = {
    DBSecurityGroupDescription: "Description",
    DBSecurityGroupName: this.dbGroupName,
  };
  this.request(null, "createDBSecurityGroup", params, callback, false);
});

Then("the value at {string} should contain {string} with {string}", function (path, key, value, callback) {
  const member = jmespath.search(this.data, path);
  let containDefault = false;
  member.forEach(function (config) {
    if (config[key] === value) {
      containDefault = true;
    }
  });
  this.assert.ok(containDefault === true, `No ${path} has member key ${key} of the value ${value}`);
  callback();
});

Given("I paginate the {string} operation asynchronously with limit {int}", function (operation, limit, callback) {
  const maxPages = 3;
  limit = parseInt(limit);

  const world = this;
  this.numPages = 0;
  this.numMarkers = 0;
  this.operation = operation;
  this.paginationConfig = this.service.paginationConfig(operation);
  this.params = this.params || {};
  this.finishedPagination = false;

  const marker = this.paginationConfig.outputToken;
  if (this.paginationConfig.limitKey) {
    this.params[this.paginationConfig.limitKey] = limit;
  }
  this.service[operation](this.params).eachPage(function (err, data, done) {
    process.nextTick(function () {
      if (err) callback(err);
      else if (data === null || world.numPages === maxPages) {
        world.finishedPagination = true;
        callback();
        return false;
      } else {
        if (data[marker]) world.numMarkers++;
        world.numPages++;
        world.data = data;
      }

      done(); // start getting next page
    });
  });
});

Then("I should be able to asynchronously paginate all pages", function (callback) {
  this.assert.equal(this.finishedPagination, true);
  callback();
});
