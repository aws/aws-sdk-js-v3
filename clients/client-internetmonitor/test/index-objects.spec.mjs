import {
  AccessDeniedException,
  AccessDeniedException$,
  AvailabilityMeasurement$,
  BadRequestException,
  BadRequestException$,
  ClientLocation$,
  ConflictException,
  ConflictException$,
  CreateMonitor$,
  CreateMonitorCommand,
  CreateMonitorInput$,
  CreateMonitorOutput$,
  DeleteMonitor$,
  DeleteMonitorCommand,
  DeleteMonitorInput$,
  DeleteMonitorOutput$,
  FilterParameter$,
  GetHealthEvent$,
  GetHealthEventCommand,
  GetHealthEventInput$,
  GetHealthEventOutput$,
  GetInternetEvent$,
  GetInternetEventCommand,
  GetInternetEventInput$,
  GetInternetEventOutput$,
  GetMonitor$,
  GetMonitorCommand,
  GetMonitorInput$,
  GetMonitorOutput$,
  GetQueryResults$,
  GetQueryResultsCommand,
  GetQueryResultsInput$,
  GetQueryResultsOutput$,
  GetQueryStatus$,
  GetQueryStatusCommand,
  GetQueryStatusInput$,
  GetQueryStatusOutput$,
  HealthEvent$,
  HealthEventImpactType,
  HealthEventsConfig$,
  HealthEventStatus,
  ImpactedLocation$,
  InternalServerErrorException,
  InternalServerErrorException$,
  InternalServerException,
  InternalServerException$,
  InternetEventStatus,
  InternetEventSummary$,
  InternetEventType,
  InternetHealth$,
  InternetMeasurementsLogDelivery$,
  InternetMonitor,
  InternetMonitorClient,
  InternetMonitorServiceException,
  LimitExceededException,
  LimitExceededException$,
  ListHealthEvents$,
  ListHealthEventsCommand,
  ListHealthEventsInput$,
  ListHealthEventsOutput$,
  ListInternetEvents$,
  ListInternetEventsCommand,
  ListInternetEventsInput$,
  ListInternetEventsOutput$,
  ListMonitors$,
  ListMonitorsCommand,
  ListMonitorsInput$,
  ListMonitorsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LocalHealthEventsConfig$,
  LocalHealthEventsConfigStatus,
  LogDeliveryStatus,
  Monitor$,
  MonitorConfigState,
  MonitorProcessingStatusCode,
  Network$,
  NetworkImpairment$,
  NotFoundException,
  NotFoundException$,
  Operator,
  paginateGetQueryResults,
  paginateListHealthEvents,
  paginateListInternetEvents,
  paginateListMonitors,
  PerformanceMeasurement$,
  QueryField$,
  QueryStatus,
  QueryType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoundTripTime$,
  S3Config$,
  StartQuery$,
  StartQueryCommand,
  StartQueryInput$,
  StartQueryOutput$,
  StopQuery$,
  StopQueryCommand,
  StopQueryInput$,
  StopQueryOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TriangulationEventType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateMonitor$,
  UpdateMonitorCommand,
  UpdateMonitorInput$,
  UpdateMonitorOutput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InternetMonitorClient === "function");
assert(typeof InternetMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateMonitor$ === "object");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteMonitor$ === "object");
assert(typeof GetHealthEventCommand === "function");
assert(typeof GetHealthEvent$ === "object");
assert(typeof GetInternetEventCommand === "function");
assert(typeof GetInternetEvent$ === "object");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetMonitor$ === "object");
assert(typeof GetQueryResultsCommand === "function");
assert(typeof GetQueryResults$ === "object");
assert(typeof GetQueryStatusCommand === "function");
assert(typeof GetQueryStatus$ === "object");
assert(typeof ListHealthEventsCommand === "function");
assert(typeof ListHealthEvents$ === "object");
assert(typeof ListInternetEventsCommand === "function");
assert(typeof ListInternetEvents$ === "object");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListMonitors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartQueryCommand === "function");
assert(typeof StartQuery$ === "object");
assert(typeof StopQueryCommand === "function");
assert(typeof StopQuery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateMonitor$ === "object");
// structural schemas
assert(typeof AvailabilityMeasurement$ === "object");
assert(typeof ClientLocation$ === "object");
assert(typeof CreateMonitorInput$ === "object");
assert(typeof CreateMonitorOutput$ === "object");
assert(typeof DeleteMonitorInput$ === "object");
assert(typeof DeleteMonitorOutput$ === "object");
assert(typeof FilterParameter$ === "object");
assert(typeof GetHealthEventInput$ === "object");
assert(typeof GetHealthEventOutput$ === "object");
assert(typeof GetInternetEventInput$ === "object");
assert(typeof GetInternetEventOutput$ === "object");
assert(typeof GetMonitorInput$ === "object");
assert(typeof GetMonitorOutput$ === "object");
assert(typeof GetQueryResultsInput$ === "object");
assert(typeof GetQueryResultsOutput$ === "object");
assert(typeof GetQueryStatusInput$ === "object");
assert(typeof GetQueryStatusOutput$ === "object");
assert(typeof HealthEvent$ === "object");
assert(typeof HealthEventsConfig$ === "object");
assert(typeof ImpactedLocation$ === "object");
assert(typeof InternetEventSummary$ === "object");
assert(typeof InternetHealth$ === "object");
assert(typeof InternetMeasurementsLogDelivery$ === "object");
assert(typeof ListHealthEventsInput$ === "object");
assert(typeof ListHealthEventsOutput$ === "object");
assert(typeof ListInternetEventsInput$ === "object");
assert(typeof ListInternetEventsOutput$ === "object");
assert(typeof ListMonitorsInput$ === "object");
assert(typeof ListMonitorsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LocalHealthEventsConfig$ === "object");
assert(typeof Monitor$ === "object");
assert(typeof Network$ === "object");
assert(typeof NetworkImpairment$ === "object");
assert(typeof PerformanceMeasurement$ === "object");
assert(typeof QueryField$ === "object");
assert(typeof RoundTripTime$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof StartQueryInput$ === "object");
assert(typeof StartQueryOutput$ === "object");
assert(typeof StopQueryInput$ === "object");
assert(typeof StopQueryOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateMonitorInput$ === "object");
assert(typeof UpdateMonitorOutput$ === "object");
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
assert(AccessDeniedException.prototype instanceof InternetMonitorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof InternetMonitorServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof InternetMonitorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerErrorException.prototype instanceof InternetMonitorServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(InternalServerException.prototype instanceof InternetMonitorServiceException);
assert(typeof InternalServerException$ === "object");
assert(LimitExceededException.prototype instanceof InternetMonitorServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof InternetMonitorServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof InternetMonitorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof InternetMonitorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyRequestsException.prototype instanceof InternetMonitorServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof InternetMonitorServiceException);
assert(typeof ValidationException$ === "object");
assert(InternetMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetQueryResults === "function");
assert(typeof paginateListHealthEvents === "function");
assert(typeof paginateListInternetEvents === "function");
assert(typeof paginateListMonitors === "function");
console.log(`InternetMonitor index test passed.`);
