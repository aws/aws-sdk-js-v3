import {
  AccountTargeting,
  Action$,
  ActionParameter$,
  ActionsMode,
  ActionSummary$,
  ActionTarget$,
  ConflictException,
  ConflictException$,
  CreateExperimentTemplate$,
  CreateExperimentTemplateActionInput$,
  CreateExperimentTemplateCommand,
  CreateExperimentTemplateExperimentOptionsInput$,
  CreateExperimentTemplateLogConfigurationInput$,
  CreateExperimentTemplateReportConfigurationInput$,
  CreateExperimentTemplateRequest$,
  CreateExperimentTemplateResponse$,
  CreateExperimentTemplateStopConditionInput$,
  CreateExperimentTemplateTargetInput$,
  CreateTargetAccountConfiguration$,
  CreateTargetAccountConfigurationCommand,
  CreateTargetAccountConfigurationRequest$,
  CreateTargetAccountConfigurationResponse$,
  DeleteExperimentTemplate$,
  DeleteExperimentTemplateCommand,
  DeleteExperimentTemplateRequest$,
  DeleteExperimentTemplateResponse$,
  DeleteTargetAccountConfiguration$,
  DeleteTargetAccountConfigurationCommand,
  DeleteTargetAccountConfigurationRequest$,
  DeleteTargetAccountConfigurationResponse$,
  EmptyTargetResolutionMode,
  Experiment$,
  ExperimentAction$,
  ExperimentActionState$,
  ExperimentActionStatus,
  ExperimentCloudWatchLogsLogConfiguration$,
  ExperimentError$,
  ExperimentLogConfiguration$,
  ExperimentOptions$,
  ExperimentReport$,
  ExperimentReportConfiguration$,
  ExperimentReportConfigurationCloudWatchDashboard$,
  ExperimentReportConfigurationDataSources$,
  ExperimentReportConfigurationOutputs$,
  ExperimentReportConfigurationOutputsS3Configuration$,
  ExperimentReportError$,
  ExperimentReportS3Report$,
  ExperimentReportState$,
  ExperimentReportStatus,
  ExperimentS3LogConfiguration$,
  ExperimentState$,
  ExperimentStatus,
  ExperimentStopCondition$,
  ExperimentSummary$,
  ExperimentTarget$,
  ExperimentTargetAccountConfiguration$,
  ExperimentTargetAccountConfigurationSummary$,
  ExperimentTargetFilter$,
  ExperimentTemplate$,
  ExperimentTemplateAction$,
  ExperimentTemplateCloudWatchLogsLogConfiguration$,
  ExperimentTemplateCloudWatchLogsLogConfigurationInput$,
  ExperimentTemplateExperimentOptions$,
  ExperimentTemplateLogConfiguration$,
  ExperimentTemplateReportConfiguration$,
  ExperimentTemplateReportConfigurationCloudWatchDashboard$,
  ExperimentTemplateReportConfigurationDataSources$,
  ExperimentTemplateReportConfigurationDataSourcesInput$,
  ExperimentTemplateReportConfigurationOutputs$,
  ExperimentTemplateReportConfigurationOutputsInput$,
  ExperimentTemplateS3LogConfiguration$,
  ExperimentTemplateS3LogConfigurationInput$,
  ExperimentTemplateStopCondition$,
  ExperimentTemplateSummary$,
  ExperimentTemplateTarget$,
  ExperimentTemplateTargetFilter$,
  ExperimentTemplateTargetInputFilter$,
  Fis,
  FisClient,
  FisServiceException,
  GetAction$,
  GetActionCommand,
  GetActionRequest$,
  GetActionResponse$,
  GetExperiment$,
  GetExperimentCommand,
  GetExperimentRequest$,
  GetExperimentResponse$,
  GetExperimentTargetAccountConfiguration$,
  GetExperimentTargetAccountConfigurationCommand,
  GetExperimentTargetAccountConfigurationRequest$,
  GetExperimentTargetAccountConfigurationResponse$,
  GetExperimentTemplate$,
  GetExperimentTemplateCommand,
  GetExperimentTemplateRequest$,
  GetExperimentTemplateResponse$,
  GetSafetyLever$,
  GetSafetyLeverCommand,
  GetSafetyLeverRequest$,
  GetSafetyLeverResponse$,
  GetTargetAccountConfiguration$,
  GetTargetAccountConfigurationCommand,
  GetTargetAccountConfigurationRequest$,
  GetTargetAccountConfigurationResponse$,
  GetTargetResourceType$,
  GetTargetResourceTypeCommand,
  GetTargetResourceTypeRequest$,
  GetTargetResourceTypeResponse$,
  ListActions$,
  ListActionsCommand,
  ListActionsRequest$,
  ListActionsResponse$,
  ListExperimentResolvedTargets$,
  ListExperimentResolvedTargetsCommand,
  ListExperimentResolvedTargetsRequest$,
  ListExperimentResolvedTargetsResponse$,
  ListExperiments$,
  ListExperimentsCommand,
  ListExperimentsRequest$,
  ListExperimentsResponse$,
  ListExperimentTargetAccountConfigurations$,
  ListExperimentTargetAccountConfigurationsCommand,
  ListExperimentTargetAccountConfigurationsRequest$,
  ListExperimentTargetAccountConfigurationsResponse$,
  ListExperimentTemplates$,
  ListExperimentTemplatesCommand,
  ListExperimentTemplatesRequest$,
  ListExperimentTemplatesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetAccountConfigurations$,
  ListTargetAccountConfigurationsCommand,
  ListTargetAccountConfigurationsRequest$,
  ListTargetAccountConfigurationsResponse$,
  ListTargetResourceTypes$,
  ListTargetResourceTypesCommand,
  ListTargetResourceTypesRequest$,
  ListTargetResourceTypesResponse$,
  paginateListActions,
  paginateListExperimentResolvedTargets,
  paginateListExperiments,
  paginateListExperimentTemplates,
  paginateListTargetAccountConfigurations,
  paginateListTargetResourceTypes,
  ReportConfigurationCloudWatchDashboardInput$,
  ReportConfigurationS3Output$,
  ReportConfigurationS3OutputInput$,
  ResolvedTarget$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SafetyLever$,
  SafetyLeverState$,
  SafetyLeverStatus,
  SafetyLeverStatusInput,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartExperiment$,
  StartExperimentCommand,
  StartExperimentExperimentOptionsInput$,
  StartExperimentRequest$,
  StartExperimentResponse$,
  StopExperiment$,
  StopExperimentCommand,
  StopExperimentRequest$,
  StopExperimentResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetAccountConfiguration$,
  TargetAccountConfigurationSummary$,
  TargetResourceType$,
  TargetResourceTypeParameter$,
  TargetResourceTypeSummary$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateExperimentTemplate$,
  UpdateExperimentTemplateActionInputItem$,
  UpdateExperimentTemplateCommand,
  UpdateExperimentTemplateExperimentOptionsInput$,
  UpdateExperimentTemplateLogConfigurationInput$,
  UpdateExperimentTemplateReportConfigurationInput$,
  UpdateExperimentTemplateRequest$,
  UpdateExperimentTemplateResponse$,
  UpdateExperimentTemplateStopConditionInput$,
  UpdateExperimentTemplateTargetInput$,
  UpdateSafetyLeverState$,
  UpdateSafetyLeverStateCommand,
  UpdateSafetyLeverStateInput$,
  UpdateSafetyLeverStateRequest$,
  UpdateSafetyLeverStateResponse$,
  UpdateTargetAccountConfiguration$,
  UpdateTargetAccountConfigurationCommand,
  UpdateTargetAccountConfigurationRequest$,
  UpdateTargetAccountConfigurationResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FisClient === "function");
assert(typeof Fis === "function");
// commands
assert(typeof CreateExperimentTemplateCommand === "function");
assert(typeof CreateExperimentTemplate$ === "object");
assert(typeof CreateTargetAccountConfigurationCommand === "function");
assert(typeof CreateTargetAccountConfiguration$ === "object");
assert(typeof DeleteExperimentTemplateCommand === "function");
assert(typeof DeleteExperimentTemplate$ === "object");
assert(typeof DeleteTargetAccountConfigurationCommand === "function");
assert(typeof DeleteTargetAccountConfiguration$ === "object");
assert(typeof GetActionCommand === "function");
assert(typeof GetAction$ === "object");
assert(typeof GetExperimentCommand === "function");
assert(typeof GetExperiment$ === "object");
assert(typeof GetExperimentTargetAccountConfigurationCommand === "function");
assert(typeof GetExperimentTargetAccountConfiguration$ === "object");
assert(typeof GetExperimentTemplateCommand === "function");
assert(typeof GetExperimentTemplate$ === "object");
assert(typeof GetSafetyLeverCommand === "function");
assert(typeof GetSafetyLever$ === "object");
assert(typeof GetTargetAccountConfigurationCommand === "function");
assert(typeof GetTargetAccountConfiguration$ === "object");
assert(typeof GetTargetResourceTypeCommand === "function");
assert(typeof GetTargetResourceType$ === "object");
assert(typeof ListActionsCommand === "function");
assert(typeof ListActions$ === "object");
assert(typeof ListExperimentResolvedTargetsCommand === "function");
assert(typeof ListExperimentResolvedTargets$ === "object");
assert(typeof ListExperimentsCommand === "function");
assert(typeof ListExperiments$ === "object");
assert(typeof ListExperimentTargetAccountConfigurationsCommand === "function");
assert(typeof ListExperimentTargetAccountConfigurations$ === "object");
assert(typeof ListExperimentTemplatesCommand === "function");
assert(typeof ListExperimentTemplates$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetAccountConfigurationsCommand === "function");
assert(typeof ListTargetAccountConfigurations$ === "object");
assert(typeof ListTargetResourceTypesCommand === "function");
assert(typeof ListTargetResourceTypes$ === "object");
assert(typeof StartExperimentCommand === "function");
assert(typeof StartExperiment$ === "object");
assert(typeof StopExperimentCommand === "function");
assert(typeof StopExperiment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateExperimentTemplateCommand === "function");
assert(typeof UpdateExperimentTemplate$ === "object");
assert(typeof UpdateSafetyLeverStateCommand === "function");
assert(typeof UpdateSafetyLeverState$ === "object");
assert(typeof UpdateTargetAccountConfigurationCommand === "function");
assert(typeof UpdateTargetAccountConfiguration$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof ActionParameter$ === "object");
assert(typeof ActionSummary$ === "object");
assert(typeof ActionTarget$ === "object");
assert(typeof CreateExperimentTemplateActionInput$ === "object");
assert(typeof CreateExperimentTemplateExperimentOptionsInput$ === "object");
assert(typeof CreateExperimentTemplateLogConfigurationInput$ === "object");
assert(typeof CreateExperimentTemplateReportConfigurationInput$ === "object");
assert(typeof CreateExperimentTemplateRequest$ === "object");
assert(typeof CreateExperimentTemplateResponse$ === "object");
assert(typeof CreateExperimentTemplateStopConditionInput$ === "object");
assert(typeof CreateExperimentTemplateTargetInput$ === "object");
assert(typeof CreateTargetAccountConfigurationRequest$ === "object");
assert(typeof CreateTargetAccountConfigurationResponse$ === "object");
assert(typeof DeleteExperimentTemplateRequest$ === "object");
assert(typeof DeleteExperimentTemplateResponse$ === "object");
assert(typeof DeleteTargetAccountConfigurationRequest$ === "object");
assert(typeof DeleteTargetAccountConfigurationResponse$ === "object");
assert(typeof Experiment$ === "object");
assert(typeof ExperimentAction$ === "object");
assert(typeof ExperimentActionState$ === "object");
assert(typeof ExperimentCloudWatchLogsLogConfiguration$ === "object");
assert(typeof ExperimentError$ === "object");
assert(typeof ExperimentLogConfiguration$ === "object");
assert(typeof ExperimentOptions$ === "object");
assert(typeof ExperimentReport$ === "object");
assert(typeof ExperimentReportConfiguration$ === "object");
assert(typeof ExperimentReportConfigurationCloudWatchDashboard$ === "object");
assert(typeof ExperimentReportConfigurationDataSources$ === "object");
assert(typeof ExperimentReportConfigurationOutputs$ === "object");
assert(typeof ExperimentReportConfigurationOutputsS3Configuration$ === "object");
assert(typeof ExperimentReportError$ === "object");
assert(typeof ExperimentReportS3Report$ === "object");
assert(typeof ExperimentReportState$ === "object");
assert(typeof ExperimentS3LogConfiguration$ === "object");
assert(typeof ExperimentState$ === "object");
assert(typeof ExperimentStopCondition$ === "object");
assert(typeof ExperimentSummary$ === "object");
assert(typeof ExperimentTarget$ === "object");
assert(typeof ExperimentTargetAccountConfiguration$ === "object");
assert(typeof ExperimentTargetAccountConfigurationSummary$ === "object");
assert(typeof ExperimentTargetFilter$ === "object");
assert(typeof ExperimentTemplate$ === "object");
assert(typeof ExperimentTemplateAction$ === "object");
assert(typeof ExperimentTemplateCloudWatchLogsLogConfiguration$ === "object");
assert(typeof ExperimentTemplateCloudWatchLogsLogConfigurationInput$ === "object");
assert(typeof ExperimentTemplateExperimentOptions$ === "object");
assert(typeof ExperimentTemplateLogConfiguration$ === "object");
assert(typeof ExperimentTemplateReportConfiguration$ === "object");
assert(typeof ExperimentTemplateReportConfigurationCloudWatchDashboard$ === "object");
assert(typeof ExperimentTemplateReportConfigurationDataSources$ === "object");
assert(typeof ExperimentTemplateReportConfigurationDataSourcesInput$ === "object");
assert(typeof ExperimentTemplateReportConfigurationOutputs$ === "object");
assert(typeof ExperimentTemplateReportConfigurationOutputsInput$ === "object");
assert(typeof ExperimentTemplateS3LogConfiguration$ === "object");
assert(typeof ExperimentTemplateS3LogConfigurationInput$ === "object");
assert(typeof ExperimentTemplateStopCondition$ === "object");
assert(typeof ExperimentTemplateSummary$ === "object");
assert(typeof ExperimentTemplateTarget$ === "object");
assert(typeof ExperimentTemplateTargetFilter$ === "object");
assert(typeof ExperimentTemplateTargetInputFilter$ === "object");
assert(typeof GetActionRequest$ === "object");
assert(typeof GetActionResponse$ === "object");
assert(typeof GetExperimentRequest$ === "object");
assert(typeof GetExperimentResponse$ === "object");
assert(typeof GetExperimentTargetAccountConfigurationRequest$ === "object");
assert(typeof GetExperimentTargetAccountConfigurationResponse$ === "object");
assert(typeof GetExperimentTemplateRequest$ === "object");
assert(typeof GetExperimentTemplateResponse$ === "object");
assert(typeof GetSafetyLeverRequest$ === "object");
assert(typeof GetSafetyLeverResponse$ === "object");
assert(typeof GetTargetAccountConfigurationRequest$ === "object");
assert(typeof GetTargetAccountConfigurationResponse$ === "object");
assert(typeof GetTargetResourceTypeRequest$ === "object");
assert(typeof GetTargetResourceTypeResponse$ === "object");
assert(typeof ListActionsRequest$ === "object");
assert(typeof ListActionsResponse$ === "object");
assert(typeof ListExperimentResolvedTargetsRequest$ === "object");
assert(typeof ListExperimentResolvedTargetsResponse$ === "object");
assert(typeof ListExperimentsRequest$ === "object");
assert(typeof ListExperimentsResponse$ === "object");
assert(typeof ListExperimentTargetAccountConfigurationsRequest$ === "object");
assert(typeof ListExperimentTargetAccountConfigurationsResponse$ === "object");
assert(typeof ListExperimentTemplatesRequest$ === "object");
assert(typeof ListExperimentTemplatesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetAccountConfigurationsRequest$ === "object");
assert(typeof ListTargetAccountConfigurationsResponse$ === "object");
assert(typeof ListTargetResourceTypesRequest$ === "object");
assert(typeof ListTargetResourceTypesResponse$ === "object");
assert(typeof ReportConfigurationCloudWatchDashboardInput$ === "object");
assert(typeof ReportConfigurationS3Output$ === "object");
assert(typeof ReportConfigurationS3OutputInput$ === "object");
assert(typeof ResolvedTarget$ === "object");
assert(typeof SafetyLever$ === "object");
assert(typeof SafetyLeverState$ === "object");
assert(typeof StartExperimentExperimentOptionsInput$ === "object");
assert(typeof StartExperimentRequest$ === "object");
assert(typeof StartExperimentResponse$ === "object");
assert(typeof StopExperimentRequest$ === "object");
assert(typeof StopExperimentResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetAccountConfiguration$ === "object");
assert(typeof TargetAccountConfigurationSummary$ === "object");
assert(typeof TargetResourceType$ === "object");
assert(typeof TargetResourceTypeParameter$ === "object");
assert(typeof TargetResourceTypeSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateExperimentTemplateActionInputItem$ === "object");
assert(typeof UpdateExperimentTemplateExperimentOptionsInput$ === "object");
assert(typeof UpdateExperimentTemplateLogConfigurationInput$ === "object");
assert(typeof UpdateExperimentTemplateReportConfigurationInput$ === "object");
assert(typeof UpdateExperimentTemplateRequest$ === "object");
assert(typeof UpdateExperimentTemplateResponse$ === "object");
assert(typeof UpdateExperimentTemplateStopConditionInput$ === "object");
assert(typeof UpdateExperimentTemplateTargetInput$ === "object");
assert(typeof UpdateSafetyLeverStateInput$ === "object");
assert(typeof UpdateSafetyLeverStateRequest$ === "object");
assert(typeof UpdateSafetyLeverStateResponse$ === "object");
assert(typeof UpdateTargetAccountConfigurationRequest$ === "object");
assert(typeof UpdateTargetAccountConfigurationResponse$ === "object");
// enums
assert(typeof AccountTargeting === "object");
assert(typeof ActionsMode === "object");
assert(typeof EmptyTargetResolutionMode === "object");
assert(typeof ExperimentActionStatus === "object");
assert(typeof ExperimentReportStatus === "object");
assert(typeof ExperimentStatus === "object");
assert(typeof SafetyLeverStatus === "object");
assert(typeof SafetyLeverStatusInput === "object");
// errors
assert(ConflictException.prototype instanceof FisServiceException);
assert(typeof ConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FisServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof FisServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof FisServiceException);
assert(typeof ValidationException$ === "object");
assert(FisServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActions === "function");
assert(typeof paginateListExperimentResolvedTargets === "function");
assert(typeof paginateListExperimentTemplates === "function");
assert(typeof paginateListExperiments === "function");
assert(typeof paginateListTargetAccountConfigurations === "function");
assert(typeof paginateListTargetResourceTypes === "function");
console.log(`Fis index test passed.`);
