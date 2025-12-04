import {
  CreateMonitorCommand,
  CreateScopeCommand,
  DeleteMonitorCommand,
  DeleteScopeCommand,
  DestinationCategory,
  GetMonitorCommand,
  GetQueryResultsMonitorTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
  GetQueryStatusMonitorTopContributorsCommand,
  GetQueryStatusWorkloadInsightsTopContributorsCommand,
  GetQueryStatusWorkloadInsightsTopContributorsDataCommand,
  GetScopeCommand,
  ListMonitorsCommand,
  ListScopesCommand,
  ListTagsForResourceCommand,
  MetricUnit,
  MonitorLocalResourceType,
  MonitorMetric,
  MonitorRemoteResourceType,
  MonitorStatus,
  NetworkFlowMonitor,
  NetworkFlowMonitorClient,
  NetworkFlowMonitorServiceException,
  QueryStatus,
  ScopeStatus,
  StartQueryMonitorTopContributorsCommand,
  StartQueryWorkloadInsightsTopContributorsCommand,
  StartQueryWorkloadInsightsTopContributorsDataCommand,
  StopQueryMonitorTopContributorsCommand,
  StopQueryWorkloadInsightsTopContributorsCommand,
  StopQueryWorkloadInsightsTopContributorsDataCommand,
  TagResourceCommand,
  TargetType,
  UntagResourceCommand,
  UpdateMonitorCommand,
  UpdateScopeCommand,
  WorkloadInsightsMetric,
  paginateGetQueryResultsMonitorTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributorsData,
  paginateListMonitors,
  paginateListScopes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkFlowMonitorClient === "function");
assert(typeof NetworkFlowMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateScopeCommand === "function");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteScopeCommand === "function");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetQueryResultsMonitorTopContributorsCommand === "function");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsCommand === "function");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof GetQueryStatusMonitorTopContributorsCommand === "function");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsCommand === "function");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof GetScopeCommand === "function");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListScopesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartQueryMonitorTopContributorsCommand === "function");
assert(typeof StartQueryWorkloadInsightsTopContributorsCommand === "function");
assert(typeof StartQueryWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof StopQueryMonitorTopContributorsCommand === "function");
assert(typeof StopQueryWorkloadInsightsTopContributorsCommand === "function");
assert(typeof StopQueryWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateScopeCommand === "function");
// enums
assert(typeof DestinationCategory === "object");
assert(typeof MetricUnit === "object");
assert(typeof MonitorLocalResourceType === "object");
assert(typeof MonitorMetric === "object");
assert(typeof MonitorRemoteResourceType === "object");
assert(typeof MonitorStatus === "object");
assert(typeof QueryStatus === "object");
assert(typeof ScopeStatus === "object");
assert(typeof TargetType === "object");
assert(typeof WorkloadInsightsMetric === "object");
// errors
assert(NetworkFlowMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResultsMonitorTopContributors === "function");
assert(typeof paginateGetQueryResultsWorkloadInsightsTopContributors === "function");
assert(typeof paginateGetQueryResultsWorkloadInsightsTopContributorsData === "function");
assert(typeof paginateListMonitors === "function");
assert(typeof paginateListScopes === "function");
console.log(`NetworkFlowMonitor index test passed.`);
