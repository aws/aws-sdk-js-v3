import {
  AccessDeniedException,
  AccessDeniedException$,
  CreateHomeRegionControl$,
  CreateHomeRegionControlCommand,
  CreateHomeRegionControlRequest$,
  CreateHomeRegionControlResult$,
  DeleteHomeRegionControl$,
  DeleteHomeRegionControlCommand,
  DeleteHomeRegionControlRequest$,
  DeleteHomeRegionControlResult$,
  DescribeHomeRegionControls$,
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsRequest$,
  DescribeHomeRegionControlsResult$,
  DryRunOperation,
  DryRunOperation$,
  GetHomeRegion$,
  GetHomeRegionCommand,
  GetHomeRegionRequest$,
  GetHomeRegionResult$,
  HomeRegionControl$,
  InternalServerError,
  InternalServerError$,
  InvalidInputException,
  InvalidInputException$,
  MigrationHubConfig,
  MigrationHubConfigClient,
  MigrationHubConfigServiceException,
  paginateDescribeHomeRegionControls,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  Target$,
  TargetType,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubConfigClient === "function");
assert(typeof MigrationHubConfig === "function");
// commands
assert(typeof CreateHomeRegionControlCommand === "function");
assert(typeof CreateHomeRegionControl$ === "object");
assert(typeof DeleteHomeRegionControlCommand === "function");
assert(typeof DeleteHomeRegionControl$ === "object");
assert(typeof DescribeHomeRegionControlsCommand === "function");
assert(typeof DescribeHomeRegionControls$ === "object");
assert(typeof GetHomeRegionCommand === "function");
assert(typeof GetHomeRegion$ === "object");
// structural schemas
assert(typeof CreateHomeRegionControlRequest$ === "object");
assert(typeof CreateHomeRegionControlResult$ === "object");
assert(typeof DeleteHomeRegionControlRequest$ === "object");
assert(typeof DeleteHomeRegionControlResult$ === "object");
assert(typeof DescribeHomeRegionControlsRequest$ === "object");
assert(typeof DescribeHomeRegionControlsResult$ === "object");
assert(typeof GetHomeRegionRequest$ === "object");
assert(typeof GetHomeRegionResult$ === "object");
assert(typeof HomeRegionControl$ === "object");
assert(typeof Target$ === "object");
// enums
assert(typeof TargetType === "object");
// errors
assert(AccessDeniedException.prototype instanceof MigrationHubConfigServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(DryRunOperation.prototype instanceof MigrationHubConfigServiceException);
assert(typeof DryRunOperation$ === "object");
assert(InternalServerError.prototype instanceof MigrationHubConfigServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidInputException.prototype instanceof MigrationHubConfigServiceException);
assert(typeof InvalidInputException$ === "object");
assert(ServiceUnavailableException.prototype instanceof MigrationHubConfigServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof MigrationHubConfigServiceException);
assert(typeof ThrottlingException$ === "object");
assert(MigrationHubConfigServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeHomeRegionControls === "function");
console.log(`MigrationHubConfig index test passed.`);
