const { ElastiCache } = require("../../../clients/client-elasticache");
const { Before, Given, Then } = require("cucumber");

Before({ tags: "@elasticache" }, function (scenario, callback) {
  this.service = new ElastiCache({});
  callback();
});

Given("I create a cache parameter group with name prefix {string}", function (prefix, callback) {
  this.cacheGroupName = this.uniqueName(prefix);
  const params = {
    Description: "Description",
    CacheParameterGroupName: this.cacheGroupName,
    CacheParameterGroupFamily: "memcached1.4",
  };
  this.request(null, "createCacheParameterGroup", params, callback, false);
});

Given("the cache parameter group name is in the result", function (callback) {
  const name = this.data.CacheParameterGroup.CacheParameterGroupName;
  this.assert.equal(name, this.cacheGroupName);
  callback();
});

Given("I describe the cache parameter groups", function (callback) {
  const params = {
    CacheParameterGroupName: this.cacheGroupName,
  };
  this.request(null, "describeCacheParameterGroups", params, callback);
});

Then("the cache parameter group should be described", function (callback) {
  const item = this.data.CacheParameterGroups[0];
  this.assert.equal(item.CacheParameterGroupName, this.cacheGroupName);
  callback();
});

Then("I delete the cache parameter group", function (callback) {
  const params = {
    CacheParameterGroupName: this.cacheGroupName,
  };
  this.request(null, "deleteCacheParameterGroup", params, callback);
});
