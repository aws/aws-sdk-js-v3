import {
  CreateMonitorCommand,
  DeleteMonitorCommand,
  GetHealthEventCommand,
  GetInternetEventCommand,
  GetMonitorCommand,
  GetQueryResultsCommand,
  GetQueryStatusCommand,
  HealthEventImpactType,
  HealthEventStatus,
  InternetEventStatus,
  InternetEventType,
  InternetMonitor,
  InternetMonitorClient,
  InternetMonitorServiceException,
  ListHealthEventsCommand,
  ListInternetEventsCommand,
  ListMonitorsCommand,
  ListTagsForResourceCommand,
  LocalHealthEventsConfigStatus,
  LogDeliveryStatus,
  MonitorConfigState,
  MonitorProcessingStatusCode,
  Operator,
  QueryStatus,
  QueryType,
  StartQueryCommand,
  StopQueryCommand,
  TagResourceCommand,
  TriangulationEventType,
  UntagResourceCommand,
  UpdateMonitorCommand,
  paginateGetQueryResults,
  paginateListHealthEvents,
  paginateListInternetEvents,
  paginateListMonitors,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InternetMonitorClient === "function");
assert(typeof InternetMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof GetHealthEventCommand === "function");
assert(typeof GetInternetEventCommand === "function");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryStatusCommand === "function");
assert(typeof ListHealthEventsCommand === "function");
assert(typeof ListInternetEventsCommand === "function");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartQueryCommand === "function");
assert(typeof StopQueryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMonitorCommand === "function");
// enums
assert(typeof HealthEventImpactType === "object");
assert(typeof HealthEventStatus === "object");
assert(typeof InternetEventStatus === "object");
assert(typeof InternetEventType === "object");
assert(typeof LocalHealthEventsConfigStatus === "object");
assert(typeof LogDeliveryStatus === "object");
assert(typeof MonitorConfigState === "object");
assert(typeof MonitorProcessingStatusCode === "object");
assert(typeof Operator === "object");
assert(typeof QueryStatus === "object");
assert(typeof QueryType === "object");
assert(typeof TriangulationEventType === "object");
// errors
assert(InternetMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResults === "function");
assert(typeof paginateListHealthEvents === "function");
assert(typeof paginateListInternetEvents === "function");
assert(typeof paginateListMonitors === "function");
console.log(`InternetMonitor index test passed.`);
