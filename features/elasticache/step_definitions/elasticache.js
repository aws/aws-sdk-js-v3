const { After, Before, Given, Then } = require("@cucumber/cucumber");

Before({ tags: "@elasticache" }, function () {
  const { ElastiCache } = require("../../../clients/client-elasticache");
  this.service = new ElastiCache({});
});

After({ tags: "@elasticache" }, async function () {
  if (this.cacheGroupName) {
    await this.service.deleteCacheParameterGroup({ CacheParameterGroupName: this.cacheGroupName });
    this.cacheGroupName = undefined;
  }
});

Given("I create a cache parameter group with name prefix {string}", async function (prefix) {
  this.cacheGroupName = this.uniqueName(prefix);
  const params = {
    Description: "Description",
    CacheParameterGroupName: this.cacheGroupName,
    CacheParameterGroupFamily: "memcached1.4",
  };
  try {
    this.data = await this.service.createCacheParameterGroup(params);
  } catch (error) {
    this.error = error;
  }
});

Given("the cache parameter group name is in the result", async function () {
  const name = this.data.CacheParameterGroup.CacheParameterGroupName;
  this.assert.equal(name, this.cacheGroupName);
});

Given("I describe the cache parameter groups", async function () {
  const params = { CacheParameterGroupName: this.cacheGroupName };
  try {
    this.data = await this.service.describeCacheParameterGroups(params);
  } catch (error) {
    this.error = error;
  }
});

Then("the cache parameter group should be described", function () {
  const item = this.data.CacheParameterGroups[0];
  this.assert.equal(item.CacheParameterGroupName, this.cacheGroupName);
});
