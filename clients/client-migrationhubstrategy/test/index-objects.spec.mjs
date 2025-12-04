import {
  AnalysisType,
  AntipatternReportStatus,
  AppType,
  AppUnitErrorCategory,
  ApplicationComponentCriteria,
  ApplicationMode,
  AssessmentDataSourceType,
  AssessmentStatus,
  AuthType,
  AwsManagedTargetDestination,
  BinaryAnalyzerName,
  CollectorHealth,
  Condition,
  DataSourceType,
  DatabaseManagementPreference,
  GetApplicationComponentDetailsCommand,
  GetApplicationComponentStrategiesCommand,
  GetAssessmentCommand,
  GetImportFileTaskCommand,
  GetLatestAssessmentIdCommand,
  GetPortfolioPreferencesCommand,
  GetPortfolioSummaryCommand,
  GetRecommendationReportDetailsCommand,
  GetServerDetailsCommand,
  GetServerStrategiesCommand,
  GroupName,
  HeterogeneousTargetDatabaseEngine,
  HomogeneousTargetDatabaseEngine,
  ImportFileTaskStatus,
  InclusionStatus,
  ListAnalyzableServersCommand,
  ListApplicationComponentsCommand,
  ListCollectorsCommand,
  ListImportFileTaskCommand,
  ListServersCommand,
  MigrationHubStrategy,
  MigrationHubStrategyClient,
  MigrationHubStrategyServiceException,
  NoPreferenceTargetDestination,
  OSType,
  OutputFormat,
  PipelineType,
  PutPortfolioPreferencesCommand,
  RecommendationReportStatus,
  ResourceSubType,
  RunTimeAnalyzerName,
  RunTimeAssessmentStatus,
  RuntimeAnalysisStatus,
  SelfManageTargetDestination,
  ServerCriteria,
  ServerErrorCategory,
  ServerOsType,
  Severity,
  SortOrder,
  SourceCodeAnalyzerName,
  SrcCodeOrDbAnalysisStatus,
  StartAssessmentCommand,
  StartImportFileTaskCommand,
  StartRecommendationReportGenerationCommand,
  StopAssessmentCommand,
  Strategy,
  StrategyRecommendation,
  TargetDatabaseEngine,
  TargetDestination,
  TransformationToolName,
  UpdateApplicationComponentConfigCommand,
  UpdateServerConfigCommand,
  VersionControl,
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
assert(typeof GetApplicationComponentStrategiesCommand === "function");
assert(typeof GetAssessmentCommand === "function");
assert(typeof GetImportFileTaskCommand === "function");
assert(typeof GetLatestAssessmentIdCommand === "function");
assert(typeof GetPortfolioPreferencesCommand === "function");
assert(typeof GetPortfolioSummaryCommand === "function");
assert(typeof GetRecommendationReportDetailsCommand === "function");
assert(typeof GetServerDetailsCommand === "function");
assert(typeof GetServerStrategiesCommand === "function");
assert(typeof ListAnalyzableServersCommand === "function");
assert(typeof ListApplicationComponentsCommand === "function");
assert(typeof ListCollectorsCommand === "function");
assert(typeof ListImportFileTaskCommand === "function");
assert(typeof ListServersCommand === "function");
assert(typeof PutPortfolioPreferencesCommand === "function");
assert(typeof StartAssessmentCommand === "function");
assert(typeof StartImportFileTaskCommand === "function");
assert(typeof StartRecommendationReportGenerationCommand === "function");
assert(typeof StopAssessmentCommand === "function");
assert(typeof UpdateApplicationComponentConfigCommand === "function");
assert(typeof UpdateServerConfigCommand === "function");
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
assert(MigrationHubStrategyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetServerDetails === "function");
assert(typeof paginateListAnalyzableServers === "function");
assert(typeof paginateListApplicationComponents === "function");
assert(typeof paginateListCollectors === "function");
assert(typeof paginateListImportFileTask === "function");
assert(typeof paginateListServers === "function");
console.log(`MigrationHubStrategy index test passed.`);
