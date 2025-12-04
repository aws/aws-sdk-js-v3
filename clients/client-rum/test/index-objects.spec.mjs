import {
  AppMonitorPlatform,
  BatchCreateRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommand,
  CreateAppMonitorCommand,
  CustomEventsStatus,
  DeleteAppMonitorCommand,
  DeleteResourcePolicyCommand,
  DeleteRumMetricsDestinationCommand,
  DeobfuscationStatus,
  GetAppMonitorCommand,
  GetAppMonitorDataCommand,
  GetResourcePolicyCommand,
  ListAppMonitorsCommand,
  ListRumMetricsDestinationsCommand,
  ListTagsForResourceCommand,
  MetricDestination,
  PutResourcePolicyCommand,
  PutRumEventsCommand,
  PutRumMetricsDestinationCommand,
  RUM,
  RUMClient,
  RUMServiceException,
  StateEnum,
  TagResourceCommand,
  Telemetry,
  UntagResourceCommand,
  UpdateAppMonitorCommand,
  UpdateRumMetricDefinitionCommand,
  paginateBatchGetRumMetricDefinitions,
  paginateGetAppMonitorData,
  paginateListAppMonitors,
  paginateListRumMetricsDestinations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RUMClient === "function");
assert(typeof RUM === "function");
// commands
assert(typeof BatchCreateRumMetricDefinitionsCommand === "function");
assert(typeof BatchDeleteRumMetricDefinitionsCommand === "function");
assert(typeof BatchGetRumMetricDefinitionsCommand === "function");
assert(typeof CreateAppMonitorCommand === "function");
assert(typeof DeleteAppMonitorCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteRumMetricsDestinationCommand === "function");
assert(typeof GetAppMonitorCommand === "function");
assert(typeof GetAppMonitorDataCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListAppMonitorsCommand === "function");
assert(typeof ListRumMetricsDestinationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutRumEventsCommand === "function");
assert(typeof PutRumMetricsDestinationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAppMonitorCommand === "function");
assert(typeof UpdateRumMetricDefinitionCommand === "function");
// enums
assert(typeof AppMonitorPlatform === "object");
assert(typeof CustomEventsStatus === "object");
assert(typeof DeobfuscationStatus === "object");
assert(typeof MetricDestination === "object");
assert(typeof StateEnum === "object");
assert(typeof Telemetry === "object");
// errors
assert(RUMServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetRumMetricDefinitions === "function");
assert(typeof paginateGetAppMonitorData === "function");
assert(typeof paginateListAppMonitors === "function");
assert(typeof paginateListRumMetricsDestinations === "function");
console.log(`RUM index test passed.`);
