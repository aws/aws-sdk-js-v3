import {
  CreateHomeRegionControlCommand,
  DeleteHomeRegionControlCommand,
  DescribeHomeRegionControlsCommand,
  GetHomeRegionCommand,
  MigrationHubConfig,
  MigrationHubConfigClient,
  MigrationHubConfigServiceException,
  TargetType,
  paginateDescribeHomeRegionControls,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubConfigClient === "function");
assert(typeof MigrationHubConfig === "function");
// commands
assert(typeof CreateHomeRegionControlCommand === "function");
assert(typeof DeleteHomeRegionControlCommand === "function");
assert(typeof DescribeHomeRegionControlsCommand === "function");
assert(typeof GetHomeRegionCommand === "function");
// enums
assert(typeof TargetType === "object");
// errors
assert(MigrationHubConfigServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeHomeRegionControls === "function");
console.log(`MigrationHubConfig index test passed.`);
