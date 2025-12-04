import {
  BCMDashboards,
  BCMDashboardsClient,
  BCMDashboardsServiceException,
  CreateDashboardCommand,
  DashboardType,
  DateTimeType,
  DeleteDashboardCommand,
  Dimension,
  GetDashboardCommand,
  GetResourcePolicyCommand,
  Granularity,
  GroupDefinitionType,
  ListDashboardsCommand,
  ListTagsForResourceCommand,
  MatchOption,
  MetricName,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDashboardCommand,
  VisualType,
  paginateListDashboards,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMDashboardsClient === "function");
assert(typeof BCMDashboards === "function");
// commands
assert(typeof CreateDashboardCommand === "function");
assert(typeof DeleteDashboardCommand === "function");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDashboardCommand === "function");
// enums
assert(typeof DashboardType === "object");
assert(typeof DateTimeType === "object");
assert(typeof Dimension === "object");
assert(typeof Granularity === "object");
assert(typeof GroupDefinitionType === "object");
assert(typeof MatchOption === "object");
assert(typeof MetricName === "object");
assert(typeof VisualType === "object");
// errors
assert(BCMDashboardsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDashboards === "function");
console.log(`BCMDashboards index test passed.`);
