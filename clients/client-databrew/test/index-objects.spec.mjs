import {
  AnalyticsMode,
  BatchDeleteRecipeVersionCommand,
  CompressionFormat,
  CreateDatasetCommand,
  CreateProfileJobCommand,
  CreateProjectCommand,
  CreateRecipeCommand,
  CreateRecipeJobCommand,
  CreateRulesetCommand,
  CreateScheduleCommand,
  DataBrew,
  DataBrewClient,
  DataBrewServiceException,
  DatabaseOutputMode,
  DeleteDatasetCommand,
  DeleteJobCommand,
  DeleteProjectCommand,
  DeleteRecipeVersionCommand,
  DeleteRulesetCommand,
  DeleteScheduleCommand,
  DescribeDatasetCommand,
  DescribeJobCommand,
  DescribeJobRunCommand,
  DescribeProjectCommand,
  DescribeRecipeCommand,
  DescribeRulesetCommand,
  DescribeScheduleCommand,
  EncryptionMode,
  InputFormat,
  JobRunState,
  JobType,
  ListDatasetsCommand,
  ListJobRunsCommand,
  ListJobsCommand,
  ListProjectsCommand,
  ListRecipeVersionsCommand,
  ListRecipesCommand,
  ListRulesetsCommand,
  ListSchedulesCommand,
  ListTagsForResourceCommand,
  LogSubscription,
  Order,
  OrderedBy,
  OutputFormat,
  ParameterType,
  PublishRecipeCommand,
  SampleMode,
  SampleType,
  SendProjectSessionActionCommand,
  SessionStatus,
  Source,
  StartJobRunCommand,
  StartProjectSessionCommand,
  StopJobRunCommand,
  TagResourceCommand,
  ThresholdType,
  ThresholdUnit,
  UntagResourceCommand,
  UpdateDatasetCommand,
  UpdateProfileJobCommand,
  UpdateProjectCommand,
  UpdateRecipeCommand,
  UpdateRecipeJobCommand,
  UpdateRulesetCommand,
  UpdateScheduleCommand,
  ValidationMode,
  paginateListDatasets,
  paginateListJobRuns,
  paginateListJobs,
  paginateListProjects,
  paginateListRecipeVersions,
  paginateListRecipes,
  paginateListRulesets,
  paginateListSchedules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataBrewClient === "function")
assert(typeof DataBrew === "function")
// commands
assert(typeof BatchDeleteRecipeVersionCommand === "function")
assert(typeof CreateDatasetCommand === "function")
assert(typeof CreateProfileJobCommand === "function")
assert(typeof CreateProjectCommand === "function")
assert(typeof CreateRecipeCommand === "function")
assert(typeof CreateRecipeJobCommand === "function")
assert(typeof CreateRulesetCommand === "function")
assert(typeof CreateScheduleCommand === "function")
assert(typeof DeleteDatasetCommand === "function")
assert(typeof DeleteJobCommand === "function")
assert(typeof DeleteProjectCommand === "function")
assert(typeof DeleteRecipeVersionCommand === "function")
assert(typeof DeleteRulesetCommand === "function")
assert(typeof DeleteScheduleCommand === "function")
assert(typeof DescribeDatasetCommand === "function")
assert(typeof DescribeJobCommand === "function")
assert(typeof DescribeJobRunCommand === "function")
assert(typeof DescribeProjectCommand === "function")
assert(typeof DescribeRecipeCommand === "function")
assert(typeof DescribeRulesetCommand === "function")
assert(typeof DescribeScheduleCommand === "function")
assert(typeof ListDatasetsCommand === "function")
assert(typeof ListJobRunsCommand === "function")
assert(typeof ListJobsCommand === "function")
assert(typeof ListProjectsCommand === "function")
assert(typeof ListRecipesCommand === "function")
assert(typeof ListRecipeVersionsCommand === "function")
assert(typeof ListRulesetsCommand === "function")
assert(typeof ListSchedulesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PublishRecipeCommand === "function")
assert(typeof SendProjectSessionActionCommand === "function")
assert(typeof StartJobRunCommand === "function")
assert(typeof StartProjectSessionCommand === "function")
assert(typeof StopJobRunCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDatasetCommand === "function")
assert(typeof UpdateProfileJobCommand === "function")
assert(typeof UpdateProjectCommand === "function")
assert(typeof UpdateRecipeCommand === "function")
assert(typeof UpdateRecipeJobCommand === "function")
assert(typeof UpdateRulesetCommand === "function")
assert(typeof UpdateScheduleCommand === "function")
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
assert(DataBrewServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDatasets === "function")
assert(typeof paginateListJobRuns === "function")
assert(typeof paginateListJobs === "function")
assert(typeof paginateListProjects === "function")
assert(typeof paginateListRecipeVersions === "function")
assert(typeof paginateListRecipes === "function")
assert(typeof paginateListRulesets === "function")
assert(typeof paginateListSchedules === "function")
console.log(`DataBrew index test passed.`);
