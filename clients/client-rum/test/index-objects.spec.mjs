import {
  AccessDeniedException,
  AccessDeniedException$,
  AppMonitor$,
  AppMonitorConfiguration$,
  AppMonitorDetails$,
  AppMonitorPlatform,
  AppMonitorSummary$,
  BatchCreateRumMetricDefinitions$,
  BatchCreateRumMetricDefinitionsCommand,
  BatchCreateRumMetricDefinitionsError$,
  BatchCreateRumMetricDefinitionsRequest$,
  BatchCreateRumMetricDefinitionsResponse$,
  BatchDeleteRumMetricDefinitions$,
  BatchDeleteRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsError$,
  BatchDeleteRumMetricDefinitionsRequest$,
  BatchDeleteRumMetricDefinitionsResponse$,
  BatchGetRumMetricDefinitions$,
  BatchGetRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsRequest$,
  BatchGetRumMetricDefinitionsResponse$,
  ConflictException,
  ConflictException$,
  CreateAppMonitor$,
  CreateAppMonitorCommand,
  CreateAppMonitorRequest$,
  CreateAppMonitorResponse$,
  CustomEvents$,
  CustomEventsStatus,
  CwLog$,
  DataStorage$,
  DeleteAppMonitor$,
  DeleteAppMonitorCommand,
  DeleteAppMonitorRequest$,
  DeleteAppMonitorResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteRumMetricsDestination$,
  DeleteRumMetricsDestinationCommand,
  DeleteRumMetricsDestinationRequest$,
  DeleteRumMetricsDestinationResponse$,
  DeobfuscationConfiguration$,
  DeobfuscationStatus,
  GetAppMonitor$,
  GetAppMonitorCommand,
  GetAppMonitorData$,
  GetAppMonitorDataCommand,
  GetAppMonitorDataRequest$,
  GetAppMonitorDataResponse$,
  GetAppMonitorRequest$,
  GetAppMonitorResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  InternalServerException,
  InternalServerException$,
  InvalidPolicyRevisionIdException,
  InvalidPolicyRevisionIdException$,
  JavaScriptSourceMaps$,
  ListAppMonitors$,
  ListAppMonitorsCommand,
  ListAppMonitorsRequest$,
  ListAppMonitorsResponse$,
  ListRumMetricsDestinations$,
  ListRumMetricsDestinationsCommand,
  ListRumMetricsDestinationsRequest$,
  ListRumMetricsDestinationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  MetricDefinition$,
  MetricDefinitionRequest$,
  MetricDestination,
  MetricDestinationSummary$,
  PolicyNotFoundException,
  PolicyNotFoundException$,
  PolicySizeLimitExceededException,
  PolicySizeLimitExceededException$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  PutRumEvents$,
  PutRumEventsCommand,
  PutRumEventsRequest$,
  PutRumEventsResponse$,
  PutRumMetricsDestination$,
  PutRumMetricsDestinationCommand,
  PutRumMetricsDestinationRequest$,
  PutRumMetricsDestinationResponse$,
  QueryFilter$,
  RUM,
  RUMClient,
  RUMServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RumEvent$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StateEnum,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Telemetry,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAppMonitor$,
  UpdateAppMonitorCommand,
  UpdateAppMonitorRequest$,
  UpdateAppMonitorResponse$,
  UpdateRumMetricDefinition$,
  UpdateRumMetricDefinitionCommand,
  UpdateRumMetricDefinitionRequest$,
  UpdateRumMetricDefinitionResponse$,
  UserDetails$,
  ValidationException,
  ValidationException$,
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
assert(typeof BatchCreateRumMetricDefinitions$ === "object");
assert(typeof BatchDeleteRumMetricDefinitionsCommand === "function");
assert(typeof BatchDeleteRumMetricDefinitions$ === "object");
assert(typeof BatchGetRumMetricDefinitionsCommand === "function");
assert(typeof BatchGetRumMetricDefinitions$ === "object");
assert(typeof CreateAppMonitorCommand === "function");
assert(typeof CreateAppMonitor$ === "object");
assert(typeof DeleteAppMonitorCommand === "function");
assert(typeof DeleteAppMonitor$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRumMetricsDestinationCommand === "function");
assert(typeof DeleteRumMetricsDestination$ === "object");
assert(typeof GetAppMonitorCommand === "function");
assert(typeof GetAppMonitor$ === "object");
assert(typeof GetAppMonitorDataCommand === "function");
assert(typeof GetAppMonitorData$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListAppMonitorsCommand === "function");
assert(typeof ListAppMonitors$ === "object");
assert(typeof ListRumMetricsDestinationsCommand === "function");
assert(typeof ListRumMetricsDestinations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutRumEventsCommand === "function");
assert(typeof PutRumEvents$ === "object");
assert(typeof PutRumMetricsDestinationCommand === "function");
assert(typeof PutRumMetricsDestination$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppMonitorCommand === "function");
assert(typeof UpdateAppMonitor$ === "object");
assert(typeof UpdateRumMetricDefinitionCommand === "function");
assert(typeof UpdateRumMetricDefinition$ === "object");
// structural schemas
assert(typeof AppMonitor$ === "object");
assert(typeof AppMonitorConfiguration$ === "object");
assert(typeof AppMonitorDetails$ === "object");
assert(typeof AppMonitorSummary$ === "object");
assert(typeof BatchCreateRumMetricDefinitionsError$ === "object");
assert(typeof BatchCreateRumMetricDefinitionsRequest$ === "object");
assert(typeof BatchCreateRumMetricDefinitionsResponse$ === "object");
assert(typeof BatchDeleteRumMetricDefinitionsError$ === "object");
assert(typeof BatchDeleteRumMetricDefinitionsRequest$ === "object");
assert(typeof BatchDeleteRumMetricDefinitionsResponse$ === "object");
assert(typeof BatchGetRumMetricDefinitionsRequest$ === "object");
assert(typeof BatchGetRumMetricDefinitionsResponse$ === "object");
assert(typeof CreateAppMonitorRequest$ === "object");
assert(typeof CreateAppMonitorResponse$ === "object");
assert(typeof CustomEvents$ === "object");
assert(typeof CwLog$ === "object");
assert(typeof DataStorage$ === "object");
assert(typeof DeleteAppMonitorRequest$ === "object");
assert(typeof DeleteAppMonitorResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteRumMetricsDestinationRequest$ === "object");
assert(typeof DeleteRumMetricsDestinationResponse$ === "object");
assert(typeof DeobfuscationConfiguration$ === "object");
assert(typeof GetAppMonitorDataRequest$ === "object");
assert(typeof GetAppMonitorDataResponse$ === "object");
assert(typeof GetAppMonitorRequest$ === "object");
assert(typeof GetAppMonitorResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof JavaScriptSourceMaps$ === "object");
assert(typeof ListAppMonitorsRequest$ === "object");
assert(typeof ListAppMonitorsResponse$ === "object");
assert(typeof ListRumMetricsDestinationsRequest$ === "object");
assert(typeof ListRumMetricsDestinationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricDefinition$ === "object");
assert(typeof MetricDefinitionRequest$ === "object");
assert(typeof MetricDestinationSummary$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof PutRumEventsRequest$ === "object");
assert(typeof PutRumEventsResponse$ === "object");
assert(typeof PutRumMetricsDestinationRequest$ === "object");
assert(typeof PutRumMetricsDestinationResponse$ === "object");
assert(typeof QueryFilter$ === "object");
assert(typeof RumEvent$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAppMonitorRequest$ === "object");
assert(typeof UpdateAppMonitorResponse$ === "object");
assert(typeof UpdateRumMetricDefinitionRequest$ === "object");
assert(typeof UpdateRumMetricDefinitionResponse$ === "object");
assert(typeof UserDetails$ === "object");
// enums
assert(typeof AppMonitorPlatform === "object");
assert(typeof CustomEventsStatus === "object");
assert(typeof DeobfuscationStatus === "object");
assert(typeof MetricDestination === "object");
assert(typeof StateEnum === "object");
assert(typeof Telemetry === "object");
// errors
assert(AccessDeniedException.prototype instanceof RUMServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof RUMServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof RUMServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidPolicyRevisionIdException.prototype instanceof RUMServiceException);
assert(typeof InvalidPolicyRevisionIdException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof RUMServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(PolicyNotFoundException.prototype instanceof RUMServiceException);
assert(typeof PolicyNotFoundException$ === "object");
assert(PolicySizeLimitExceededException.prototype instanceof RUMServiceException);
assert(typeof PolicySizeLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RUMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RUMServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof RUMServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof RUMServiceException);
assert(typeof ValidationException$ === "object");
assert(RUMServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetRumMetricDefinitions === "function");
assert(typeof paginateGetAppMonitorData === "function");
assert(typeof paginateListAppMonitors === "function");
assert(typeof paginateListRumMetricsDestinations === "function");
console.log(`RUM index test passed.`);
