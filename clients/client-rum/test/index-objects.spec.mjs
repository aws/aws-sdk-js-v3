import {
  AccessDeniedException,
  AppMonitorPlatform,
  BatchCreateRumMetricDefinitionsCommand,
  BatchDeleteRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommand,
  ConflictException,
  CreateAppMonitorCommand,
  CustomEventsStatus,
  DeleteAppMonitorCommand,
  DeleteResourcePolicyCommand,
  DeleteRumMetricsDestinationCommand,
  DeobfuscationStatus,
  GetAppMonitorCommand,
  GetAppMonitorDataCommand,
  GetResourcePolicyCommand,
  InternalServerException,
  InvalidPolicyRevisionIdException,
  ListAppMonitorsCommand,
  ListRumMetricsDestinationsCommand,
  ListTagsForResourceCommand,
  MalformedPolicyDocumentException,
  MetricDestination,
  PolicyNotFoundException,
  PolicySizeLimitExceededException,
  PutResourcePolicyCommand,
  PutRumEventsCommand,
  PutRumMetricsDestinationCommand,
  RUM,
  RUMClient,
  RUMServiceException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StateEnum,
  TagResourceCommand,
  Telemetry,
  ThrottlingException,
  UntagResourceCommand,
  UpdateAppMonitorCommand,
  UpdateRumMetricDefinitionCommand,
  ValidationException,
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
assert(AccessDeniedException.prototype instanceof RUMServiceException);
assert(ConflictException.prototype instanceof RUMServiceException);
assert(InternalServerException.prototype instanceof RUMServiceException);
assert(InvalidPolicyRevisionIdException.prototype instanceof RUMServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof RUMServiceException);
assert(PolicyNotFoundException.prototype instanceof RUMServiceException);
assert(PolicySizeLimitExceededException.prototype instanceof RUMServiceException);
assert(ResourceNotFoundException.prototype instanceof RUMServiceException);
assert(ServiceQuotaExceededException.prototype instanceof RUMServiceException);
assert(ThrottlingException.prototype instanceof RUMServiceException);
assert(ValidationException.prototype instanceof RUMServiceException);
assert(RUMServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetRumMetricDefinitions === "function");
assert(typeof paginateGetAppMonitorData === "function");
assert(typeof paginateListAppMonitors === "function");
assert(typeof paginateListRumMetricsDestinations === "function");
console.log(`RUM index test passed.`);
