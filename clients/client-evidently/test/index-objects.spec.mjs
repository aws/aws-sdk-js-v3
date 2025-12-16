import {
  AccessDeniedException,
  AccessDeniedException$,
  BatchEvaluateFeature$,
  BatchEvaluateFeatureCommand,
  BatchEvaluateFeatureRequest$,
  BatchEvaluateFeatureResponse$,
  ChangeDirectionEnum,
  CloudWatchLogsDestination$,
  CloudWatchLogsDestinationConfig$,
  ConflictException,
  ConflictException$,
  CreateExperiment$,
  CreateExperimentCommand,
  CreateExperimentRequest$,
  CreateExperimentResponse$,
  CreateFeature$,
  CreateFeatureCommand,
  CreateFeatureRequest$,
  CreateFeatureResponse$,
  CreateLaunch$,
  CreateLaunchCommand,
  CreateLaunchRequest$,
  CreateLaunchResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResponse$,
  CreateSegment$,
  CreateSegmentCommand,
  CreateSegmentRequest$,
  CreateSegmentResponse$,
  DeleteExperiment$,
  DeleteExperimentCommand,
  DeleteExperimentRequest$,
  DeleteExperimentResponse$,
  DeleteFeature$,
  DeleteFeatureCommand,
  DeleteFeatureRequest$,
  DeleteFeatureResponse$,
  DeleteLaunch$,
  DeleteLaunchCommand,
  DeleteLaunchRequest$,
  DeleteLaunchResponse$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectRequest$,
  DeleteProjectResponse$,
  DeleteSegment$,
  DeleteSegmentCommand,
  DeleteSegmentRequest$,
  DeleteSegmentResponse$,
  EvaluateFeature$,
  EvaluateFeatureCommand,
  EvaluateFeatureRequest$,
  EvaluateFeatureResponse$,
  EvaluationRequest$,
  EvaluationResult$,
  EvaluationRule$,
  Event$,
  EventType,
  Evidently,
  EvidentlyClient,
  EvidentlyServiceException,
  Experiment$,
  ExperimentBaseStat,
  ExperimentExecution$,
  ExperimentReport$,
  ExperimentReportName,
  ExperimentResultRequestType,
  ExperimentResultResponseType,
  ExperimentResultsData$,
  ExperimentSchedule$,
  ExperimentStatus,
  ExperimentStopDesiredState,
  ExperimentType,
  Feature$,
  FeatureEvaluationStrategy,
  FeatureStatus,
  FeatureSummary$,
  GetExperiment$,
  GetExperimentCommand,
  GetExperimentRequest$,
  GetExperimentResponse$,
  GetExperimentResults$,
  GetExperimentResultsCommand,
  GetExperimentResultsRequest$,
  GetExperimentResultsResponse$,
  GetFeature$,
  GetFeatureCommand,
  GetFeatureRequest$,
  GetFeatureResponse$,
  GetLaunch$,
  GetLaunchCommand,
  GetLaunchRequest$,
  GetLaunchResponse$,
  GetProject$,
  GetProjectCommand,
  GetProjectRequest$,
  GetProjectResponse$,
  GetSegment$,
  GetSegmentCommand,
  GetSegmentRequest$,
  GetSegmentResponse$,
  InternalServerException,
  InternalServerException$,
  Launch$,
  LaunchExecution$,
  LaunchGroup$,
  LaunchGroupConfig$,
  LaunchStatus,
  LaunchStopDesiredState,
  LaunchType,
  ListExperiments$,
  ListExperimentsCommand,
  ListExperimentsRequest$,
  ListExperimentsResponse$,
  ListFeatures$,
  ListFeaturesCommand,
  ListFeaturesRequest$,
  ListFeaturesResponse$,
  ListLaunches$,
  ListLaunchesCommand,
  ListLaunchesRequest$,
  ListLaunchesResponse$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsRequest$,
  ListProjectsResponse$,
  ListSegmentReferences$,
  ListSegmentReferencesCommand,
  ListSegmentReferencesRequest$,
  ListSegmentReferencesResponse$,
  ListSegments$,
  ListSegmentsCommand,
  ListSegmentsRequest$,
  ListSegmentsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricDefinition$,
  MetricDefinitionConfig$,
  MetricGoal$,
  MetricGoalConfig$,
  MetricMonitor$,
  MetricMonitorConfig$,
  OnlineAbConfig$,
  OnlineAbDefinition$,
  Project$,
  ProjectAppConfigResource$,
  ProjectAppConfigResourceConfig$,
  ProjectDataDelivery$,
  ProjectDataDeliveryConfig$,
  ProjectStatus,
  ProjectSummary$,
  PutProjectEvents$,
  PutProjectEventsCommand,
  PutProjectEventsRequest$,
  PutProjectEventsResponse$,
  PutProjectEventsResultEntry$,
  RefResource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Destination$,
  S3DestinationConfig$,
  ScheduledSplit$,
  ScheduledSplitConfig$,
  ScheduledSplitsLaunchConfig$,
  ScheduledSplitsLaunchDefinition$,
  Segment$,
  SegmentOverride$,
  SegmentReferenceResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartExperiment$,
  StartExperimentCommand,
  StartExperimentRequest$,
  StartExperimentResponse$,
  StartLaunch$,
  StartLaunchCommand,
  StartLaunchRequest$,
  StartLaunchResponse$,
  StopExperiment$,
  StopExperimentCommand,
  StopExperimentRequest$,
  StopExperimentResponse$,
  StopLaunch$,
  StopLaunchCommand,
  StopLaunchRequest$,
  StopLaunchResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestSegmentPattern$,
  TestSegmentPatternCommand,
  TestSegmentPatternRequest$,
  TestSegmentPatternResponse$,
  ThrottlingException,
  ThrottlingException$,
  Treatment$,
  TreatmentConfig$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateExperiment$,
  UpdateExperimentCommand,
  UpdateExperimentRequest$,
  UpdateExperimentResponse$,
  UpdateFeature$,
  UpdateFeatureCommand,
  UpdateFeatureRequest$,
  UpdateFeatureResponse$,
  UpdateLaunch$,
  UpdateLaunchCommand,
  UpdateLaunchRequest$,
  UpdateLaunchResponse$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectDataDelivery$,
  UpdateProjectDataDeliveryCommand,
  UpdateProjectDataDeliveryRequest$,
  UpdateProjectDataDeliveryResponse$,
  UpdateProjectRequest$,
  UpdateProjectResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VariableValue$,
  Variation$,
  VariationConfig$,
  VariationValueType,
  paginateListExperiments,
  paginateListFeatures,
  paginateListLaunches,
  paginateListProjects,
  paginateListSegmentReferences,
  paginateListSegments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EvidentlyClient === "function");
assert(typeof Evidently === "function");
// commands
assert(typeof BatchEvaluateFeatureCommand === "function");
assert(typeof BatchEvaluateFeature$ === "object");
assert(typeof CreateExperimentCommand === "function");
assert(typeof CreateExperiment$ === "object");
assert(typeof CreateFeatureCommand === "function");
assert(typeof CreateFeature$ === "object");
assert(typeof CreateLaunchCommand === "function");
assert(typeof CreateLaunch$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateSegmentCommand === "function");
assert(typeof CreateSegment$ === "object");
assert(typeof DeleteExperimentCommand === "function");
assert(typeof DeleteExperiment$ === "object");
assert(typeof DeleteFeatureCommand === "function");
assert(typeof DeleteFeature$ === "object");
assert(typeof DeleteLaunchCommand === "function");
assert(typeof DeleteLaunch$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteSegmentCommand === "function");
assert(typeof DeleteSegment$ === "object");
assert(typeof EvaluateFeatureCommand === "function");
assert(typeof EvaluateFeature$ === "object");
assert(typeof GetExperimentCommand === "function");
assert(typeof GetExperiment$ === "object");
assert(typeof GetExperimentResultsCommand === "function");
assert(typeof GetExperimentResults$ === "object");
assert(typeof GetFeatureCommand === "function");
assert(typeof GetFeature$ === "object");
assert(typeof GetLaunchCommand === "function");
assert(typeof GetLaunch$ === "object");
assert(typeof GetProjectCommand === "function");
assert(typeof GetProject$ === "object");
assert(typeof GetSegmentCommand === "function");
assert(typeof GetSegment$ === "object");
assert(typeof ListExperimentsCommand === "function");
assert(typeof ListExperiments$ === "object");
assert(typeof ListFeaturesCommand === "function");
assert(typeof ListFeatures$ === "object");
assert(typeof ListLaunchesCommand === "function");
assert(typeof ListLaunches$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListSegmentReferencesCommand === "function");
assert(typeof ListSegmentReferences$ === "object");
assert(typeof ListSegmentsCommand === "function");
assert(typeof ListSegments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutProjectEventsCommand === "function");
assert(typeof PutProjectEvents$ === "object");
assert(typeof StartExperimentCommand === "function");
assert(typeof StartExperiment$ === "object");
assert(typeof StartLaunchCommand === "function");
assert(typeof StartLaunch$ === "object");
assert(typeof StopExperimentCommand === "function");
assert(typeof StopExperiment$ === "object");
assert(typeof StopLaunchCommand === "function");
assert(typeof StopLaunch$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestSegmentPatternCommand === "function");
assert(typeof TestSegmentPattern$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateExperimentCommand === "function");
assert(typeof UpdateExperiment$ === "object");
assert(typeof UpdateFeatureCommand === "function");
assert(typeof UpdateFeature$ === "object");
assert(typeof UpdateLaunchCommand === "function");
assert(typeof UpdateLaunch$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateProjectDataDeliveryCommand === "function");
assert(typeof UpdateProjectDataDelivery$ === "object");
// structural schemas
assert(typeof BatchEvaluateFeatureRequest$ === "object");
assert(typeof BatchEvaluateFeatureResponse$ === "object");
assert(typeof CloudWatchLogsDestination$ === "object");
assert(typeof CloudWatchLogsDestinationConfig$ === "object");
assert(typeof CreateExperimentRequest$ === "object");
assert(typeof CreateExperimentResponse$ === "object");
assert(typeof CreateFeatureRequest$ === "object");
assert(typeof CreateFeatureResponse$ === "object");
assert(typeof CreateLaunchRequest$ === "object");
assert(typeof CreateLaunchResponse$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResponse$ === "object");
assert(typeof CreateSegmentRequest$ === "object");
assert(typeof CreateSegmentResponse$ === "object");
assert(typeof DeleteExperimentRequest$ === "object");
assert(typeof DeleteExperimentResponse$ === "object");
assert(typeof DeleteFeatureRequest$ === "object");
assert(typeof DeleteFeatureResponse$ === "object");
assert(typeof DeleteLaunchRequest$ === "object");
assert(typeof DeleteLaunchResponse$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResponse$ === "object");
assert(typeof DeleteSegmentRequest$ === "object");
assert(typeof DeleteSegmentResponse$ === "object");
assert(typeof EvaluateFeatureRequest$ === "object");
assert(typeof EvaluateFeatureResponse$ === "object");
assert(typeof EvaluationRequest$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof EvaluationRule$ === "object");
assert(typeof Event$ === "object");
assert(typeof Experiment$ === "object");
assert(typeof ExperimentExecution$ === "object");
assert(typeof ExperimentReport$ === "object");
assert(typeof ExperimentResultsData$ === "object");
assert(typeof ExperimentSchedule$ === "object");
assert(typeof Feature$ === "object");
assert(typeof FeatureSummary$ === "object");
assert(typeof GetExperimentRequest$ === "object");
assert(typeof GetExperimentResponse$ === "object");
assert(typeof GetExperimentResultsRequest$ === "object");
assert(typeof GetExperimentResultsResponse$ === "object");
assert(typeof GetFeatureRequest$ === "object");
assert(typeof GetFeatureResponse$ === "object");
assert(typeof GetLaunchRequest$ === "object");
assert(typeof GetLaunchResponse$ === "object");
assert(typeof GetProjectRequest$ === "object");
assert(typeof GetProjectResponse$ === "object");
assert(typeof GetSegmentRequest$ === "object");
assert(typeof GetSegmentResponse$ === "object");
assert(typeof Launch$ === "object");
assert(typeof LaunchExecution$ === "object");
assert(typeof LaunchGroup$ === "object");
assert(typeof LaunchGroupConfig$ === "object");
assert(typeof ListExperimentsRequest$ === "object");
assert(typeof ListExperimentsResponse$ === "object");
assert(typeof ListFeaturesRequest$ === "object");
assert(typeof ListFeaturesResponse$ === "object");
assert(typeof ListLaunchesRequest$ === "object");
assert(typeof ListLaunchesResponse$ === "object");
assert(typeof ListProjectsRequest$ === "object");
assert(typeof ListProjectsResponse$ === "object");
assert(typeof ListSegmentReferencesRequest$ === "object");
assert(typeof ListSegmentReferencesResponse$ === "object");
assert(typeof ListSegmentsRequest$ === "object");
assert(typeof ListSegmentsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricDefinition$ === "object");
assert(typeof MetricDefinitionConfig$ === "object");
assert(typeof MetricGoal$ === "object");
assert(typeof MetricGoalConfig$ === "object");
assert(typeof MetricMonitor$ === "object");
assert(typeof MetricMonitorConfig$ === "object");
assert(typeof OnlineAbConfig$ === "object");
assert(typeof OnlineAbDefinition$ === "object");
assert(typeof Project$ === "object");
assert(typeof ProjectAppConfigResource$ === "object");
assert(typeof ProjectAppConfigResourceConfig$ === "object");
assert(typeof ProjectDataDelivery$ === "object");
assert(typeof ProjectDataDeliveryConfig$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof PutProjectEventsRequest$ === "object");
assert(typeof PutProjectEventsResponse$ === "object");
assert(typeof PutProjectEventsResultEntry$ === "object");
assert(typeof RefResource$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3DestinationConfig$ === "object");
assert(typeof ScheduledSplit$ === "object");
assert(typeof ScheduledSplitConfig$ === "object");
assert(typeof ScheduledSplitsLaunchConfig$ === "object");
assert(typeof ScheduledSplitsLaunchDefinition$ === "object");
assert(typeof Segment$ === "object");
assert(typeof SegmentOverride$ === "object");
assert(typeof StartExperimentRequest$ === "object");
assert(typeof StartExperimentResponse$ === "object");
assert(typeof StartLaunchRequest$ === "object");
assert(typeof StartLaunchResponse$ === "object");
assert(typeof StopExperimentRequest$ === "object");
assert(typeof StopExperimentResponse$ === "object");
assert(typeof StopLaunchRequest$ === "object");
assert(typeof StopLaunchResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TestSegmentPatternRequest$ === "object");
assert(typeof TestSegmentPatternResponse$ === "object");
assert(typeof Treatment$ === "object");
assert(typeof TreatmentConfig$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateExperimentRequest$ === "object");
assert(typeof UpdateExperimentResponse$ === "object");
assert(typeof UpdateFeatureRequest$ === "object");
assert(typeof UpdateFeatureResponse$ === "object");
assert(typeof UpdateLaunchRequest$ === "object");
assert(typeof UpdateLaunchResponse$ === "object");
assert(typeof UpdateProjectDataDeliveryRequest$ === "object");
assert(typeof UpdateProjectDataDeliveryResponse$ === "object");
assert(typeof UpdateProjectRequest$ === "object");
assert(typeof UpdateProjectResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VariableValue$ === "object");
assert(typeof Variation$ === "object");
assert(typeof VariationConfig$ === "object");
// enums
assert(typeof ChangeDirectionEnum === "object");
assert(typeof EventType === "object");
assert(typeof ExperimentBaseStat === "object");
assert(typeof ExperimentReportName === "object");
assert(typeof ExperimentResultRequestType === "object");
assert(typeof ExperimentResultResponseType === "object");
assert(typeof ExperimentStatus === "object");
assert(typeof ExperimentStopDesiredState === "object");
assert(typeof ExperimentType === "object");
assert(typeof FeatureEvaluationStrategy === "object");
assert(typeof FeatureStatus === "object");
assert(typeof LaunchStatus === "object");
assert(typeof LaunchStopDesiredState === "object");
assert(typeof LaunchType === "object");
assert(typeof ProjectStatus === "object");
assert(typeof SegmentReferenceResourceType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VariationValueType === "object");
// errors
assert(AccessDeniedException.prototype instanceof EvidentlyServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof EvidentlyServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof EvidentlyServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EvidentlyServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof EvidentlyServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof EvidentlyServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof EvidentlyServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof EvidentlyServiceException);
assert(typeof ValidationException$ === "object");
assert(EvidentlyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListExperiments === "function");
assert(typeof paginateListFeatures === "function");
assert(typeof paginateListLaunches === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListSegmentReferences === "function");
assert(typeof paginateListSegments === "function");
console.log(`Evidently index test passed.`);
