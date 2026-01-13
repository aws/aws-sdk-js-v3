import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateMonitor$,
  CreateMonitorCommand,
  CreateMonitorInput$,
  CreateMonitorOutput$,
  CreateScope$,
  CreateScopeCommand,
  CreateScopeInput$,
  CreateScopeOutput$,
  DeleteMonitor$,
  DeleteMonitorCommand,
  DeleteMonitorInput$,
  DeleteMonitorOutput$,
  DeleteScope$,
  DeleteScopeCommand,
  DeleteScopeInput$,
  DeleteScopeOutput$,
  DestinationCategory,
  GetMonitor$,
  GetMonitorCommand,
  GetMonitorInput$,
  GetMonitorOutput$,
  GetQueryResultsMonitorTopContributors$,
  GetQueryResultsMonitorTopContributorsCommand,
  GetQueryResultsMonitorTopContributorsInput$,
  GetQueryResultsMonitorTopContributorsOutput$,
  GetQueryResultsWorkloadInsightsTopContributors$,
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsData$,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
  GetQueryResultsWorkloadInsightsTopContributorsDataInput$,
  GetQueryResultsWorkloadInsightsTopContributorsDataOutput$,
  GetQueryResultsWorkloadInsightsTopContributorsInput$,
  GetQueryResultsWorkloadInsightsTopContributorsOutput$,
  GetQueryStatusMonitorTopContributors$,
  GetQueryStatusMonitorTopContributorsCommand,
  GetQueryStatusMonitorTopContributorsInput$,
  GetQueryStatusMonitorTopContributorsOutput$,
  GetQueryStatusWorkloadInsightsTopContributors$,
  GetQueryStatusWorkloadInsightsTopContributorsCommand,
  GetQueryStatusWorkloadInsightsTopContributorsData$,
  GetQueryStatusWorkloadInsightsTopContributorsDataCommand,
  GetQueryStatusWorkloadInsightsTopContributorsDataInput$,
  GetQueryStatusWorkloadInsightsTopContributorsDataOutput$,
  GetQueryStatusWorkloadInsightsTopContributorsInput$,
  GetQueryStatusWorkloadInsightsTopContributorsOutput$,
  GetScope$,
  GetScopeCommand,
  GetScopeInput$,
  GetScopeOutput$,
  InternalServerException,
  InternalServerException$,
  KubernetesMetadata$,
  ListMonitors$,
  ListMonitorsCommand,
  ListMonitorsInput$,
  ListMonitorsOutput$,
  ListScopes$,
  ListScopesCommand,
  ListScopesInput$,
  ListScopesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MetricUnit,
  MonitorLocalResource$,
  MonitorLocalResourceType,
  MonitorMetric,
  MonitorRemoteResource$,
  MonitorRemoteResourceType,
  MonitorStatus,
  MonitorSummary$,
  MonitorTopContributorsRow$,
  NetworkFlowMonitor,
  NetworkFlowMonitorClient,
  NetworkFlowMonitorServiceException,
  paginateGetQueryResultsMonitorTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributors,
  paginateGetQueryResultsWorkloadInsightsTopContributorsData,
  paginateListMonitors,
  paginateListScopes,
  QueryStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScopeStatus,
  ScopeSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartQueryMonitorTopContributors$,
  StartQueryMonitorTopContributorsCommand,
  StartQueryMonitorTopContributorsInput$,
  StartQueryMonitorTopContributorsOutput$,
  StartQueryWorkloadInsightsTopContributors$,
  StartQueryWorkloadInsightsTopContributorsCommand,
  StartQueryWorkloadInsightsTopContributorsData$,
  StartQueryWorkloadInsightsTopContributorsDataCommand,
  StartQueryWorkloadInsightsTopContributorsDataInput$,
  StartQueryWorkloadInsightsTopContributorsDataOutput$,
  StartQueryWorkloadInsightsTopContributorsInput$,
  StartQueryWorkloadInsightsTopContributorsOutput$,
  StopQueryMonitorTopContributors$,
  StopQueryMonitorTopContributorsCommand,
  StopQueryMonitorTopContributorsInput$,
  StopQueryMonitorTopContributorsOutput$,
  StopQueryWorkloadInsightsTopContributors$,
  StopQueryWorkloadInsightsTopContributorsCommand,
  StopQueryWorkloadInsightsTopContributorsData$,
  StopQueryWorkloadInsightsTopContributorsDataCommand,
  StopQueryWorkloadInsightsTopContributorsDataInput$,
  StopQueryWorkloadInsightsTopContributorsDataOutput$,
  StopQueryWorkloadInsightsTopContributorsInput$,
  StopQueryWorkloadInsightsTopContributorsOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TargetId$,
  TargetIdentifier$,
  TargetResource$,
  TargetType,
  ThrottlingException,
  ThrottlingException$,
  TraversedComponent$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateMonitor$,
  UpdateMonitorCommand,
  UpdateMonitorInput$,
  UpdateMonitorOutput$,
  UpdateScope$,
  UpdateScopeCommand,
  UpdateScopeInput$,
  UpdateScopeOutput$,
  ValidationException,
  ValidationException$,
  WorkloadInsightsMetric,
  WorkloadInsightsTopContributorsDataPoint$,
  WorkloadInsightsTopContributorsRow$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkFlowMonitorClient === "function");
assert(typeof NetworkFlowMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateMonitor$ === "object");
assert(typeof CreateScopeCommand === "function");
assert(typeof CreateScope$ === "object");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteMonitor$ === "object");
assert(typeof DeleteScopeCommand === "function");
assert(typeof DeleteScope$ === "object");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetMonitor$ === "object");
assert(typeof GetQueryResultsMonitorTopContributorsCommand === "function");
assert(typeof GetQueryResultsMonitorTopContributors$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsCommand === "function");
assert(typeof GetQueryResultsWorkloadInsightsTopContributors$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsData$ === "object");
assert(typeof GetQueryStatusMonitorTopContributorsCommand === "function");
assert(typeof GetQueryStatusMonitorTopContributors$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsCommand === "function");
assert(typeof GetQueryStatusWorkloadInsightsTopContributors$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsData$ === "object");
assert(typeof GetScopeCommand === "function");
assert(typeof GetScope$ === "object");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListMonitors$ === "object");
assert(typeof ListScopesCommand === "function");
assert(typeof ListScopes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartQueryMonitorTopContributorsCommand === "function");
assert(typeof StartQueryMonitorTopContributors$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsCommand === "function");
assert(typeof StartQueryWorkloadInsightsTopContributors$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof StartQueryWorkloadInsightsTopContributorsData$ === "object");
assert(typeof StopQueryMonitorTopContributorsCommand === "function");
assert(typeof StopQueryMonitorTopContributors$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsCommand === "function");
assert(typeof StopQueryWorkloadInsightsTopContributors$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsDataCommand === "function");
assert(typeof StopQueryWorkloadInsightsTopContributorsData$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateMonitor$ === "object");
assert(typeof UpdateScopeCommand === "function");
assert(typeof UpdateScope$ === "object");
// structural schemas
assert(typeof CreateMonitorInput$ === "object");
assert(typeof CreateMonitorOutput$ === "object");
assert(typeof CreateScopeInput$ === "object");
assert(typeof CreateScopeOutput$ === "object");
assert(typeof DeleteMonitorInput$ === "object");
assert(typeof DeleteMonitorOutput$ === "object");
assert(typeof DeleteScopeInput$ === "object");
assert(typeof DeleteScopeOutput$ === "object");
assert(typeof GetMonitorInput$ === "object");
assert(typeof GetMonitorOutput$ === "object");
assert(typeof GetQueryResultsMonitorTopContributorsInput$ === "object");
assert(typeof GetQueryResultsMonitorTopContributorsOutput$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsDataInput$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsDataOutput$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsInput$ === "object");
assert(typeof GetQueryResultsWorkloadInsightsTopContributorsOutput$ === "object");
assert(typeof GetQueryStatusMonitorTopContributorsInput$ === "object");
assert(typeof GetQueryStatusMonitorTopContributorsOutput$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsDataInput$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsDataOutput$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsInput$ === "object");
assert(typeof GetQueryStatusWorkloadInsightsTopContributorsOutput$ === "object");
assert(typeof GetScopeInput$ === "object");
assert(typeof GetScopeOutput$ === "object");
assert(typeof KubernetesMetadata$ === "object");
assert(typeof ListMonitorsInput$ === "object");
assert(typeof ListMonitorsOutput$ === "object");
assert(typeof ListScopesInput$ === "object");
assert(typeof ListScopesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MonitorLocalResource$ === "object");
assert(typeof MonitorRemoteResource$ === "object");
assert(typeof MonitorSummary$ === "object");
assert(typeof MonitorTopContributorsRow$ === "object");
assert(typeof ScopeSummary$ === "object");
assert(typeof StartQueryMonitorTopContributorsInput$ === "object");
assert(typeof StartQueryMonitorTopContributorsOutput$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsDataInput$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsDataOutput$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsInput$ === "object");
assert(typeof StartQueryWorkloadInsightsTopContributorsOutput$ === "object");
assert(typeof StopQueryMonitorTopContributorsInput$ === "object");
assert(typeof StopQueryMonitorTopContributorsOutput$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsDataInput$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsDataOutput$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsInput$ === "object");
assert(typeof StopQueryWorkloadInsightsTopContributorsOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TargetId$ === "object");
assert(typeof TargetIdentifier$ === "object");
assert(typeof TargetResource$ === "object");
assert(typeof TraversedComponent$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateMonitorInput$ === "object");
assert(typeof UpdateMonitorOutput$ === "object");
assert(typeof UpdateScopeInput$ === "object");
assert(typeof UpdateScopeOutput$ === "object");
assert(typeof WorkloadInsightsTopContributorsDataPoint$ === "object");
assert(typeof WorkloadInsightsTopContributorsRow$ === "object");
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
assert(AccessDeniedException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NetworkFlowMonitorServiceException);
assert(typeof ValidationException$ === "object");
assert(NetworkFlowMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResultsMonitorTopContributors === "function");
assert(typeof paginateGetQueryResultsWorkloadInsightsTopContributors === "function");
assert(typeof paginateGetQueryResultsWorkloadInsightsTopContributorsData === "function");
assert(typeof paginateListMonitors === "function");
assert(typeof paginateListScopes === "function");
console.log(`NetworkFlowMonitor index test passed.`);
