import {
  AccessDeniedException,
  AccessDeniedException$,
  AllowedStatistics$,
  AnalyticsMode,
  BatchDeleteRecipeVersion$,
  BatchDeleteRecipeVersionCommand,
  BatchDeleteRecipeVersionRequest$,
  BatchDeleteRecipeVersionResponse$,
  ColumnSelector$,
  ColumnStatisticsConfiguration$,
  CompressionFormat,
  ConditionExpression$,
  ConflictException,
  ConflictException$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateProfileJob$,
  CreateProfileJobCommand,
  CreateProfileJobRequest$,
  CreateProfileJobResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResponse$,
  CreateRecipe$,
  CreateRecipeCommand,
  CreateRecipeJob$,
  CreateRecipeJobCommand,
  CreateRecipeJobRequest$,
  CreateRecipeJobResponse$,
  CreateRecipeRequest$,
  CreateRecipeResponse$,
  CreateRuleset$,
  CreateRulesetCommand,
  CreateRulesetRequest$,
  CreateRulesetResponse$,
  CreateSchedule$,
  CreateScheduleCommand,
  CreateScheduleRequest$,
  CreateScheduleResponse$,
  CsvOptions$,
  CsvOutputOptions$,
  DatabaseInputDefinition$,
  DatabaseOutput$,
  DatabaseOutputMode,
  DatabaseTableOutputOptions$,
  DataBrew,
  DataBrewClient,
  DataBrewServiceException,
  DataCatalogInputDefinition$,
  DataCatalogOutput$,
  Dataset$,
  DatasetParameter$,
  DatetimeOptions$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobRequest$,
  DeleteJobResponse$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectRequest$,
  DeleteProjectResponse$,
  DeleteRecipeVersion$,
  DeleteRecipeVersionCommand,
  DeleteRecipeVersionRequest$,
  DeleteRecipeVersionResponse$,
  DeleteRuleset$,
  DeleteRulesetCommand,
  DeleteRulesetRequest$,
  DeleteRulesetResponse$,
  DeleteSchedule$,
  DeleteScheduleCommand,
  DeleteScheduleRequest$,
  DeleteScheduleResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeJob$,
  DescribeJobCommand,
  DescribeJobRequest$,
  DescribeJobResponse$,
  DescribeJobRun$,
  DescribeJobRunCommand,
  DescribeJobRunRequest$,
  DescribeJobRunResponse$,
  DescribeProject$,
  DescribeProjectCommand,
  DescribeProjectRequest$,
  DescribeProjectResponse$,
  DescribeRecipe$,
  DescribeRecipeCommand,
  DescribeRecipeRequest$,
  DescribeRecipeResponse$,
  DescribeRuleset$,
  DescribeRulesetCommand,
  DescribeRulesetRequest$,
  DescribeRulesetResponse$,
  DescribeSchedule$,
  DescribeScheduleCommand,
  DescribeScheduleRequest$,
  DescribeScheduleResponse$,
  EncryptionMode,
  EntityDetectorConfiguration$,
  ExcelOptions$,
  FilesLimit$,
  FilterExpression$,
  FormatOptions$,
  Input$,
  InputFormat,
  InternalServerException,
  InternalServerException$,
  Job$,
  JobRun$,
  JobRunState,
  JobSample$,
  JobType,
  JsonOptions$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListJobRuns$,
  ListJobRunsCommand,
  ListJobRunsRequest$,
  ListJobRunsResponse$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsRequest$,
  ListProjectsResponse$,
  ListRecipes$,
  ListRecipesCommand,
  ListRecipesRequest$,
  ListRecipesResponse$,
  ListRecipeVersions$,
  ListRecipeVersionsCommand,
  ListRecipeVersionsRequest$,
  ListRecipeVersionsResponse$,
  ListRulesets$,
  ListRulesetsCommand,
  ListRulesetsRequest$,
  ListRulesetsResponse$,
  ListSchedules$,
  ListSchedulesCommand,
  ListSchedulesRequest$,
  ListSchedulesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogSubscription,
  Metadata$,
  Order,
  OrderedBy,
  Output$,
  OutputFormat,
  OutputFormatOptions$,
  paginateListDatasets,
  paginateListJobRuns,
  paginateListJobs,
  paginateListProjects,
  paginateListRecipes,
  paginateListRecipeVersions,
  paginateListRulesets,
  paginateListSchedules,
  ParameterType,
  PathOptions$,
  ProfileConfiguration$,
  Project$,
  PublishRecipe$,
  PublishRecipeCommand,
  PublishRecipeRequest$,
  PublishRecipeResponse$,
  Recipe$,
  RecipeAction$,
  RecipeReference$,
  RecipeStep$,
  RecipeVersionErrorDetail$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Rule$,
  RulesetItem$,
  S3Location$,
  S3TableOutputOptions$,
  Sample$,
  SampleMode,
  SampleType,
  Schedule$,
  SendProjectSessionAction$,
  SendProjectSessionActionCommand,
  SendProjectSessionActionRequest$,
  SendProjectSessionActionResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionStatus,
  Source,
  StartJobRun$,
  StartJobRunCommand,
  StartJobRunRequest$,
  StartJobRunResponse$,
  StartProjectSession$,
  StartProjectSessionCommand,
  StartProjectSessionRequest$,
  StartProjectSessionResponse$,
  StatisticOverride$,
  StatisticsConfiguration$,
  StopJobRun$,
  StopJobRunCommand,
  StopJobRunRequest$,
  StopJobRunResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Threshold$,
  ThresholdType,
  ThresholdUnit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetRequest$,
  UpdateDatasetResponse$,
  UpdateProfileJob$,
  UpdateProfileJobCommand,
  UpdateProfileJobRequest$,
  UpdateProfileJobResponse$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectRequest$,
  UpdateProjectResponse$,
  UpdateRecipe$,
  UpdateRecipeCommand,
  UpdateRecipeJob$,
  UpdateRecipeJobCommand,
  UpdateRecipeJobRequest$,
  UpdateRecipeJobResponse$,
  UpdateRecipeRequest$,
  UpdateRecipeResponse$,
  UpdateRuleset$,
  UpdateRulesetCommand,
  UpdateRulesetRequest$,
  UpdateRulesetResponse$,
  UpdateSchedule$,
  UpdateScheduleCommand,
  UpdateScheduleRequest$,
  UpdateScheduleResponse$,
  ValidationConfiguration$,
  ValidationException,
  ValidationException$,
  ValidationMode,
  ViewFrame$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataBrewClient === "function");
assert(typeof DataBrew === "function");
// commands
assert(typeof BatchDeleteRecipeVersionCommand === "function");
assert(typeof BatchDeleteRecipeVersion$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateProfileJobCommand === "function");
assert(typeof CreateProfileJob$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateRecipeCommand === "function");
assert(typeof CreateRecipe$ === "object");
assert(typeof CreateRecipeJobCommand === "function");
assert(typeof CreateRecipeJob$ === "object");
assert(typeof CreateRulesetCommand === "function");
assert(typeof CreateRuleset$ === "object");
assert(typeof CreateScheduleCommand === "function");
assert(typeof CreateSchedule$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteRecipeVersionCommand === "function");
assert(typeof DeleteRecipeVersion$ === "object");
assert(typeof DeleteRulesetCommand === "function");
assert(typeof DeleteRuleset$ === "object");
assert(typeof DeleteScheduleCommand === "function");
assert(typeof DeleteSchedule$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJob$ === "object");
assert(typeof DescribeJobRunCommand === "function");
assert(typeof DescribeJobRun$ === "object");
assert(typeof DescribeProjectCommand === "function");
assert(typeof DescribeProject$ === "object");
assert(typeof DescribeRecipeCommand === "function");
assert(typeof DescribeRecipe$ === "object");
assert(typeof DescribeRulesetCommand === "function");
assert(typeof DescribeRuleset$ === "object");
assert(typeof DescribeScheduleCommand === "function");
assert(typeof DescribeSchedule$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListJobRuns$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListRecipesCommand === "function");
assert(typeof ListRecipes$ === "object");
assert(typeof ListRecipeVersionsCommand === "function");
assert(typeof ListRecipeVersions$ === "object");
assert(typeof ListRulesetsCommand === "function");
assert(typeof ListRulesets$ === "object");
assert(typeof ListSchedulesCommand === "function");
assert(typeof ListSchedules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PublishRecipeCommand === "function");
assert(typeof PublishRecipe$ === "object");
assert(typeof SendProjectSessionActionCommand === "function");
assert(typeof SendProjectSessionAction$ === "object");
assert(typeof StartJobRunCommand === "function");
assert(typeof StartJobRun$ === "object");
assert(typeof StartProjectSessionCommand === "function");
assert(typeof StartProjectSession$ === "object");
assert(typeof StopJobRunCommand === "function");
assert(typeof StopJobRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdateProfileJobCommand === "function");
assert(typeof UpdateProfileJob$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateRecipeCommand === "function");
assert(typeof UpdateRecipe$ === "object");
assert(typeof UpdateRecipeJobCommand === "function");
assert(typeof UpdateRecipeJob$ === "object");
assert(typeof UpdateRulesetCommand === "function");
assert(typeof UpdateRuleset$ === "object");
assert(typeof UpdateScheduleCommand === "function");
assert(typeof UpdateSchedule$ === "object");
// structural schemas
assert(typeof AllowedStatistics$ === "object");
assert(typeof BatchDeleteRecipeVersionRequest$ === "object");
assert(typeof BatchDeleteRecipeVersionResponse$ === "object");
assert(typeof ColumnSelector$ === "object");
assert(typeof ColumnStatisticsConfiguration$ === "object");
assert(typeof ConditionExpression$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateProfileJobRequest$ === "object");
assert(typeof CreateProfileJobResponse$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResponse$ === "object");
assert(typeof CreateRecipeJobRequest$ === "object");
assert(typeof CreateRecipeJobResponse$ === "object");
assert(typeof CreateRecipeRequest$ === "object");
assert(typeof CreateRecipeResponse$ === "object");
assert(typeof CreateRulesetRequest$ === "object");
assert(typeof CreateRulesetResponse$ === "object");
assert(typeof CreateScheduleRequest$ === "object");
assert(typeof CreateScheduleResponse$ === "object");
assert(typeof CsvOptions$ === "object");
assert(typeof CsvOutputOptions$ === "object");
assert(typeof DatabaseInputDefinition$ === "object");
assert(typeof DatabaseOutput$ === "object");
assert(typeof DatabaseTableOutputOptions$ === "object");
assert(typeof DataCatalogInputDefinition$ === "object");
assert(typeof DataCatalogOutput$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DatasetParameter$ === "object");
assert(typeof DatetimeOptions$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobResponse$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResponse$ === "object");
assert(typeof DeleteRecipeVersionRequest$ === "object");
assert(typeof DeleteRecipeVersionResponse$ === "object");
assert(typeof DeleteRulesetRequest$ === "object");
assert(typeof DeleteRulesetResponse$ === "object");
assert(typeof DeleteScheduleRequest$ === "object");
assert(typeof DeleteScheduleResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeJobRequest$ === "object");
assert(typeof DescribeJobResponse$ === "object");
assert(typeof DescribeJobRunRequest$ === "object");
assert(typeof DescribeJobRunResponse$ === "object");
assert(typeof DescribeProjectRequest$ === "object");
assert(typeof DescribeProjectResponse$ === "object");
assert(typeof DescribeRecipeRequest$ === "object");
assert(typeof DescribeRecipeResponse$ === "object");
assert(typeof DescribeRulesetRequest$ === "object");
assert(typeof DescribeRulesetResponse$ === "object");
assert(typeof DescribeScheduleRequest$ === "object");
assert(typeof DescribeScheduleResponse$ === "object");
assert(typeof EntityDetectorConfiguration$ === "object");
assert(typeof ExcelOptions$ === "object");
assert(typeof FilesLimit$ === "object");
assert(typeof FilterExpression$ === "object");
assert(typeof FormatOptions$ === "object");
assert(typeof Input$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobRun$ === "object");
assert(typeof JobSample$ === "object");
assert(typeof JsonOptions$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListJobRunsRequest$ === "object");
assert(typeof ListJobRunsResponse$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListProjectsRequest$ === "object");
assert(typeof ListProjectsResponse$ === "object");
assert(typeof ListRecipesRequest$ === "object");
assert(typeof ListRecipesResponse$ === "object");
assert(typeof ListRecipeVersionsRequest$ === "object");
assert(typeof ListRecipeVersionsResponse$ === "object");
assert(typeof ListRulesetsRequest$ === "object");
assert(typeof ListRulesetsResponse$ === "object");
assert(typeof ListSchedulesRequest$ === "object");
assert(typeof ListSchedulesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Metadata$ === "object");
assert(typeof Output$ === "object");
assert(typeof OutputFormatOptions$ === "object");
assert(typeof PathOptions$ === "object");
assert(typeof ProfileConfiguration$ === "object");
assert(typeof Project$ === "object");
assert(typeof PublishRecipeRequest$ === "object");
assert(typeof PublishRecipeResponse$ === "object");
assert(typeof Recipe$ === "object");
assert(typeof RecipeAction$ === "object");
assert(typeof RecipeReference$ === "object");
assert(typeof RecipeStep$ === "object");
assert(typeof RecipeVersionErrorDetail$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RulesetItem$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3TableOutputOptions$ === "object");
assert(typeof Sample$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SendProjectSessionActionRequest$ === "object");
assert(typeof SendProjectSessionActionResponse$ === "object");
assert(typeof StartJobRunRequest$ === "object");
assert(typeof StartJobRunResponse$ === "object");
assert(typeof StartProjectSessionRequest$ === "object");
assert(typeof StartProjectSessionResponse$ === "object");
assert(typeof StatisticOverride$ === "object");
assert(typeof StatisticsConfiguration$ === "object");
assert(typeof StopJobRunRequest$ === "object");
assert(typeof StopJobRunResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Threshold$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatasetResponse$ === "object");
assert(typeof UpdateProfileJobRequest$ === "object");
assert(typeof UpdateProfileJobResponse$ === "object");
assert(typeof UpdateProjectRequest$ === "object");
assert(typeof UpdateProjectResponse$ === "object");
assert(typeof UpdateRecipeJobRequest$ === "object");
assert(typeof UpdateRecipeJobResponse$ === "object");
assert(typeof UpdateRecipeRequest$ === "object");
assert(typeof UpdateRecipeResponse$ === "object");
assert(typeof UpdateRulesetRequest$ === "object");
assert(typeof UpdateRulesetResponse$ === "object");
assert(typeof UpdateScheduleRequest$ === "object");
assert(typeof UpdateScheduleResponse$ === "object");
assert(typeof ValidationConfiguration$ === "object");
assert(typeof ViewFrame$ === "object");
// enums
assert(typeof AnalyticsMode === "object");
assert(typeof CompressionFormat === "object");
assert(typeof DatabaseOutputMode === "object");
assert(typeof EncryptionMode === "object");
assert(typeof InputFormat === "object");
assert(typeof JobRunState === "object");
assert(typeof JobType === "object");
assert(typeof LogSubscription === "object");
assert(typeof Order === "object");
assert(typeof OrderedBy === "object");
assert(typeof OutputFormat === "object");
assert(typeof ParameterType === "object");
assert(typeof SampleMode === "object");
assert(typeof SampleType === "object");
assert(typeof SessionStatus === "object");
assert(typeof Source === "object");
assert(typeof ThresholdType === "object");
assert(typeof ThresholdUnit === "object");
assert(typeof ValidationMode === "object");
// errors
assert(AccessDeniedException.prototype instanceof DataBrewServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DataBrewServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DataBrewServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DataBrewServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DataBrewServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof DataBrewServiceException);
assert(typeof ValidationException$ === "object");
assert(DataBrewServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListJobRuns === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListRecipeVersions === "function");
assert(typeof paginateListRecipes === "function");
assert(typeof paginateListRulesets === "function");
assert(typeof paginateListSchedules === "function");
console.log(`DataBrew index test passed.`);
