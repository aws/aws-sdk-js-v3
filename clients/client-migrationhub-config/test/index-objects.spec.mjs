import {
  AccessDeniedException,
  CreateHomeRegionControlCommand,
  DeleteHomeRegionControlCommand,
  DescribeHomeRegionControlsCommand,
  DryRunOperation,
  GetHomeRegionCommand,
  InternalServerError,
  InvalidInputException,
  MigrationHubConfig,
  MigrationHubConfigClient,
  MigrationHubConfigServiceException,
  ServiceUnavailableException,
  TargetType,
  ThrottlingException,
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
assert(AccessDeniedException.prototype instanceof MigrationHubConfigServiceException);
assert(DryRunOperation.prototype instanceof MigrationHubConfigServiceException);
assert(InternalServerError.prototype instanceof MigrationHubConfigServiceException);
assert(InvalidInputException.prototype instanceof MigrationHubConfigServiceException);
assert(ServiceUnavailableException.prototype instanceof MigrationHubConfigServiceException);
assert(ThrottlingException.prototype instanceof MigrationHubConfigServiceException);
assert(MigrationHubConfigServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeHomeRegionControls === "function");
console.log(`MigrationHubConfig index test passed.`);
