import {
  AccessDeniedException,
  AccessDeniedException$,
  AnalysisStatusUnion$,
  AnalysisType,
  AnalyzableServerSummary$,
  AnalyzerNameUnion$,
  AntipatternReportResult$,
  AntipatternReportStatus,
  AntipatternSeveritySummary$,
  AppType,
  AppUnitError$,
  AppUnitErrorCategory,
  ApplicationComponentCriteria,
  ApplicationComponentDetail$,
  ApplicationComponentStatusSummary$,
  ApplicationComponentStrategy$,
  ApplicationComponentSummary$,
  ApplicationMode,
  ApplicationPreferences$,
  AssessmentDataSourceType,
  AssessmentStatus,
  AssessmentSummary$,
  AssessmentTarget$,
  AssociatedApplication$,
  AuthType,
  AwsManagedResources$,
  AwsManagedTargetDestination,
  BinaryAnalyzerName,
  BusinessGoals$,
  Collector$,
  CollectorHealth,
  Condition,
  ConfigurationSummary$,
  ConflictException,
  ConflictException$,
  DataCollectionDetails$,
  DataSourceType,
  DatabaseConfigDetail$,
  DatabaseManagementPreference,
  DatabaseMigrationPreference$,
  DatabasePreferences$,
  DependencyException,
  DependencyException$,
  GetApplicationComponentDetails$,
  GetApplicationComponentDetailsCommand,
  GetApplicationComponentDetailsRequest$,
  GetApplicationComponentDetailsResponse$,
  GetApplicationComponentStrategies$,
  GetApplicationComponentStrategiesCommand,
  GetApplicationComponentStrategiesRequest$,
  GetApplicationComponentStrategiesResponse$,
  GetAssessment$,
  GetAssessmentCommand,
  GetAssessmentRequest$,
  GetAssessmentResponse$,
  GetImportFileTask$,
  GetImportFileTaskCommand,
  GetImportFileTaskRequest$,
  GetImportFileTaskResponse$,
  GetLatestAssessmentId$,
  GetLatestAssessmentIdCommand,
  GetLatestAssessmentIdRequest$,
  GetLatestAssessmentIdResponse$,
  GetPortfolioPreferences$,
  GetPortfolioPreferencesCommand,
  GetPortfolioPreferencesRequest$,
  GetPortfolioPreferencesResponse$,
  GetPortfolioSummary$,
  GetPortfolioSummaryCommand,
  GetPortfolioSummaryRequest$,
  GetPortfolioSummaryResponse$,
  GetRecommendationReportDetails$,
  GetRecommendationReportDetailsCommand,
  GetRecommendationReportDetailsRequest$,
  GetRecommendationReportDetailsResponse$,
  GetServerDetails$,
  GetServerDetailsCommand,
  GetServerDetailsRequest$,
  GetServerDetailsResponse$,
  GetServerStrategies$,
  GetServerStrategiesCommand,
  GetServerStrategiesRequest$,
  GetServerStrategiesResponse$,
  Group$,
  GroupName,
  Heterogeneous$,
  HeterogeneousTargetDatabaseEngine,
  Homogeneous$,
  HomogeneousTargetDatabaseEngine,
  IPAddressBasedRemoteInfo$,
  ImportFileTaskInformation$,
  ImportFileTaskStatus,
  InclusionStatus,
  InternalServerException,
  InternalServerException$,
  ListAnalyzableServers$,
  ListAnalyzableServersCommand,
  ListAnalyzableServersRequest$,
  ListAnalyzableServersResponse$,
  ListApplicationComponents$,
  ListApplicationComponentsCommand,
  ListApplicationComponentsRequest$,
  ListApplicationComponentsResponse$,
  ListCollectors$,
  ListCollectorsCommand,
  ListCollectorsRequest$,
  ListCollectorsResponse$,
  ListImportFileTask$,
  ListImportFileTaskCommand,
  ListImportFileTaskRequest$,
  ListImportFileTaskResponse$,
  ListServers$,
  ListServersCommand,
  ListServersRequest$,
  ListServersResponse$,
  ManagementPreference$,
  MigrationHubStrategy,
  MigrationHubStrategyClient,
  MigrationHubStrategyServiceException,
  NetworkInfo$,
  NoDatabaseMigrationPreference$,
  NoManagementPreference$,
  NoPreferenceTargetDestination,
  OSInfo$,
  OSType,
  OutputFormat,
  PipelineInfo$,
  PipelineType,
  PrioritizeBusinessGoals$,
  PutPortfolioPreferences$,
  PutPortfolioPreferencesCommand,
  PutPortfolioPreferencesRequest$,
  PutPortfolioPreferencesResponse$,
  RecommendationReportDetails$,
  RecommendationReportStatus,
  RecommendationSet$,
  RemoteSourceCodeAnalysisServerInfo$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSubType,
  Result$,
  RunTimeAnalyzerName,
  RunTimeAssessmentStatus,
  RuntimeAnalysisStatus,
  S3Object$,
  SelfManageResources$,
  SelfManageTargetDestination,
  ServerCriteria,
  ServerDetail$,
  ServerError$,
  ServerErrorCategory,
  ServerOsType,
  ServerStatusSummary$,
  ServerStrategy$,
  ServerSummary$,
  ServiceLinkedRoleLockClientException,
  ServiceLinkedRoleLockClientException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Severity,
  SortOrder,
  SourceCode$,
  SourceCodeAnalyzerName,
  SourceCodeRepository$,
  SrcCodeOrDbAnalysisStatus,
  StartAssessment$,
  StartAssessmentCommand,
  StartAssessmentRequest$,
  StartAssessmentResponse$,
  StartImportFileTask$,
  StartImportFileTaskCommand,
  StartImportFileTaskRequest$,
  StartImportFileTaskResponse$,
  StartRecommendationReportGeneration$,
  StartRecommendationReportGenerationCommand,
  StartRecommendationReportGenerationRequest$,
  StartRecommendationReportGenerationResponse$,
  StopAssessment$,
  StopAssessmentCommand,
  StopAssessmentRequest$,
  StopAssessmentResponse$,
  Strategy,
  StrategyOption$,
  StrategyRecommendation,
  StrategySummary$,
  SystemInfo$,
  TargetDatabaseEngine,
  TargetDestination,
  ThrottlingException,
  ThrottlingException$,
  TransformationTool$,
  TransformationToolName,
  UpdateApplicationComponentConfig$,
  UpdateApplicationComponentConfigCommand,
  UpdateApplicationComponentConfigRequest$,
  UpdateApplicationComponentConfigResponse$,
  UpdateServerConfig$,
  UpdateServerConfigCommand,
  UpdateServerConfigRequest$,
  UpdateServerConfigResponse$,
  ValidationException,
  ValidationException$,
  VcenterBasedRemoteInfo$,
  VersionControl,
  VersionControlInfo$,
  VersionControlType,
  paginateGetServerDetails,
  paginateListAnalyzableServers,
  paginateListApplicationComponents,
  paginateListCollectors,
  paginateListImportFileTask,
  paginateListServers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubStrategyClient === "function");
assert(typeof MigrationHubStrategy === "function");
// commands
assert(typeof GetApplicationComponentDetailsCommand === "function");
assert(typeof GetApplicationComponentDetails$ === "object");
assert(typeof GetApplicationComponentStrategiesCommand === "function");
assert(typeof GetApplicationComponentStrategies$ === "object");
assert(typeof GetAssessmentCommand === "function");
assert(typeof GetAssessment$ === "object");
assert(typeof GetImportFileTaskCommand === "function");
assert(typeof GetImportFileTask$ === "object");
assert(typeof GetLatestAssessmentIdCommand === "function");
assert(typeof GetLatestAssessmentId$ === "object");
assert(typeof GetPortfolioPreferencesCommand === "function");
assert(typeof GetPortfolioPreferences$ === "object");
assert(typeof GetPortfolioSummaryCommand === "function");
assert(typeof GetPortfolioSummary$ === "object");
assert(typeof GetRecommendationReportDetailsCommand === "function");
assert(typeof GetRecommendationReportDetails$ === "object");
assert(typeof GetServerDetailsCommand === "function");
assert(typeof GetServerDetails$ === "object");
assert(typeof GetServerStrategiesCommand === "function");
assert(typeof GetServerStrategies$ === "object");
assert(typeof ListAnalyzableServersCommand === "function");
assert(typeof ListAnalyzableServers$ === "object");
assert(typeof ListApplicationComponentsCommand === "function");
assert(typeof ListApplicationComponents$ === "object");
assert(typeof ListCollectorsCommand === "function");
assert(typeof ListCollectors$ === "object");
assert(typeof ListImportFileTaskCommand === "function");
assert(typeof ListImportFileTask$ === "object");
assert(typeof ListServersCommand === "function");
assert(typeof ListServers$ === "object");
assert(typeof PutPortfolioPreferencesCommand === "function");
assert(typeof PutPortfolioPreferences$ === "object");
assert(typeof StartAssessmentCommand === "function");
assert(typeof StartAssessment$ === "object");
assert(typeof StartImportFileTaskCommand === "function");
assert(typeof StartImportFileTask$ === "object");
assert(typeof StartRecommendationReportGenerationCommand === "function");
assert(typeof StartRecommendationReportGeneration$ === "object");
assert(typeof StopAssessmentCommand === "function");
assert(typeof StopAssessment$ === "object");
assert(typeof UpdateApplicationComponentConfigCommand === "function");
assert(typeof UpdateApplicationComponentConfig$ === "object");
assert(typeof UpdateServerConfigCommand === "function");
assert(typeof UpdateServerConfig$ === "object");
// structural schemas
assert(typeof AnalysisStatusUnion$ === "object");
assert(typeof AnalyzableServerSummary$ === "object");
assert(typeof AnalyzerNameUnion$ === "object");
assert(typeof AntipatternReportResult$ === "object");
assert(typeof AntipatternSeveritySummary$ === "object");
assert(typeof ApplicationComponentDetail$ === "object");
assert(typeof ApplicationComponentStatusSummary$ === "object");
assert(typeof ApplicationComponentStrategy$ === "object");
assert(typeof ApplicationComponentSummary$ === "object");
assert(typeof ApplicationPreferences$ === "object");
assert(typeof AppUnitError$ === "object");
assert(typeof AssessmentSummary$ === "object");
assert(typeof AssessmentTarget$ === "object");
assert(typeof AssociatedApplication$ === "object");
assert(typeof AwsManagedResources$ === "object");
assert(typeof BusinessGoals$ === "object");
assert(typeof Collector$ === "object");
assert(typeof ConfigurationSummary$ === "object");
assert(typeof DatabaseConfigDetail$ === "object");
assert(typeof DatabaseMigrationPreference$ === "object");
assert(typeof DatabasePreferences$ === "object");
assert(typeof DataCollectionDetails$ === "object");
assert(typeof GetApplicationComponentDetailsRequest$ === "object");
assert(typeof GetApplicationComponentDetailsResponse$ === "object");
assert(typeof GetApplicationComponentStrategiesRequest$ === "object");
assert(typeof GetApplicationComponentStrategiesResponse$ === "object");
assert(typeof GetAssessmentRequest$ === "object");
assert(typeof GetAssessmentResponse$ === "object");
assert(typeof GetImportFileTaskRequest$ === "object");
assert(typeof GetImportFileTaskResponse$ === "object");
assert(typeof GetLatestAssessmentIdRequest$ === "object");
assert(typeof GetLatestAssessmentIdResponse$ === "object");
assert(typeof GetPortfolioPreferencesRequest$ === "object");
assert(typeof GetPortfolioPreferencesResponse$ === "object");
assert(typeof GetPortfolioSummaryRequest$ === "object");
assert(typeof GetPortfolioSummaryResponse$ === "object");
assert(typeof GetRecommendationReportDetailsRequest$ === "object");
assert(typeof GetRecommendationReportDetailsResponse$ === "object");
assert(typeof GetServerDetailsRequest$ === "object");
assert(typeof GetServerDetailsResponse$ === "object");
assert(typeof GetServerStrategiesRequest$ === "object");
assert(typeof GetServerStrategiesResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof Heterogeneous$ === "object");
assert(typeof Homogeneous$ === "object");
assert(typeof ImportFileTaskInformation$ === "object");
assert(typeof IPAddressBasedRemoteInfo$ === "object");
assert(typeof ListAnalyzableServersRequest$ === "object");
assert(typeof ListAnalyzableServersResponse$ === "object");
assert(typeof ListApplicationComponentsRequest$ === "object");
assert(typeof ListApplicationComponentsResponse$ === "object");
assert(typeof ListCollectorsRequest$ === "object");
assert(typeof ListCollectorsResponse$ === "object");
assert(typeof ListImportFileTaskRequest$ === "object");
assert(typeof ListImportFileTaskResponse$ === "object");
assert(typeof ListServersRequest$ === "object");
assert(typeof ListServersResponse$ === "object");
assert(typeof ManagementPreference$ === "object");
assert(typeof NetworkInfo$ === "object");
assert(typeof NoDatabaseMigrationPreference$ === "object");
assert(typeof NoManagementPreference$ === "object");
assert(typeof OSInfo$ === "object");
assert(typeof PipelineInfo$ === "object");
assert(typeof PrioritizeBusinessGoals$ === "object");
assert(typeof PutPortfolioPreferencesRequest$ === "object");
assert(typeof PutPortfolioPreferencesResponse$ === "object");
assert(typeof RecommendationReportDetails$ === "object");
assert(typeof RecommendationSet$ === "object");
assert(typeof RemoteSourceCodeAnalysisServerInfo$ === "object");
assert(typeof Result$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof SelfManageResources$ === "object");
assert(typeof ServerDetail$ === "object");
assert(typeof ServerError$ === "object");
assert(typeof ServerStatusSummary$ === "object");
assert(typeof ServerStrategy$ === "object");
assert(typeof ServerSummary$ === "object");
assert(typeof SourceCode$ === "object");
assert(typeof SourceCodeRepository$ === "object");
assert(typeof StartAssessmentRequest$ === "object");
assert(typeof StartAssessmentResponse$ === "object");
assert(typeof StartImportFileTaskRequest$ === "object");
assert(typeof StartImportFileTaskResponse$ === "object");
assert(typeof StartRecommendationReportGenerationRequest$ === "object");
assert(typeof StartRecommendationReportGenerationResponse$ === "object");
assert(typeof StopAssessmentRequest$ === "object");
assert(typeof StopAssessmentResponse$ === "object");
assert(typeof StrategyOption$ === "object");
assert(typeof StrategySummary$ === "object");
assert(typeof SystemInfo$ === "object");
assert(typeof TransformationTool$ === "object");
assert(typeof UpdateApplicationComponentConfigRequest$ === "object");
assert(typeof UpdateApplicationComponentConfigResponse$ === "object");
assert(typeof UpdateServerConfigRequest$ === "object");
assert(typeof UpdateServerConfigResponse$ === "object");
assert(typeof VcenterBasedRemoteInfo$ === "object");
assert(typeof VersionControlInfo$ === "object");
// enums
assert(typeof AnalysisType === "object");
assert(typeof AntipatternReportStatus === "object");
assert(typeof ApplicationComponentCriteria === "object");
assert(typeof ApplicationMode === "object");
assert(typeof AppType === "object");
assert(typeof AppUnitErrorCategory === "object");
assert(typeof AssessmentDataSourceType === "object");
assert(typeof AssessmentStatus === "object");
assert(typeof AuthType === "object");
assert(typeof AwsManagedTargetDestination === "object");
assert(typeof BinaryAnalyzerName === "object");
assert(typeof CollectorHealth === "object");
assert(typeof Condition === "object");
assert(typeof DatabaseManagementPreference === "object");
assert(typeof DataSourceType === "object");
assert(typeof GroupName === "object");
assert(typeof HeterogeneousTargetDatabaseEngine === "object");
assert(typeof HomogeneousTargetDatabaseEngine === "object");
assert(typeof ImportFileTaskStatus === "object");
assert(typeof InclusionStatus === "object");
assert(typeof NoPreferenceTargetDestination === "object");
assert(typeof OSType === "object");
assert(typeof OutputFormat === "object");
assert(typeof PipelineType === "object");
assert(typeof RecommendationReportStatus === "object");
assert(typeof ResourceSubType === "object");
assert(typeof RuntimeAnalysisStatus === "object");
assert(typeof RunTimeAnalyzerName === "object");
assert(typeof RunTimeAssessmentStatus === "object");
assert(typeof SelfManageTargetDestination === "object");
assert(typeof ServerCriteria === "object");
assert(typeof ServerErrorCategory === "object");
assert(typeof ServerOsType === "object");
assert(typeof Severity === "object");
assert(typeof SortOrder === "object");
assert(typeof SourceCodeAnalyzerName === "object");
assert(typeof SrcCodeOrDbAnalysisStatus === "object");
assert(typeof Strategy === "object");
assert(typeof StrategyRecommendation === "object");
assert(typeof TargetDatabaseEngine === "object");
assert(typeof TargetDestination === "object");
assert(typeof TransformationToolName === "object");
assert(typeof VersionControl === "object");
assert(typeof VersionControlType === "object");
// errors
assert(AccessDeniedException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof DependencyException$ === "object");
assert(InternalServerException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceLinkedRoleLockClientException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ServiceLinkedRoleLockClientException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MigrationHubStrategyServiceException);
assert(typeof ValidationException$ === "object");
assert(MigrationHubStrategyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetServerDetails === "function");
assert(typeof paginateListAnalyzableServers === "function");
assert(typeof paginateListApplicationComponents === "function");
assert(typeof paginateListCollectors === "function");
assert(typeof paginateListImportFileTask === "function");
assert(typeof paginateListServers === "function");
console.log(`MigrationHubStrategy index test passed.`);
