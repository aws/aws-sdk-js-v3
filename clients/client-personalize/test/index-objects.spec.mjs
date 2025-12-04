import {
  BatchInferenceJobMode,
  CreateBatchInferenceJobCommand,
  CreateBatchSegmentJobCommand,
  CreateCampaignCommand,
  CreateDataDeletionJobCommand,
  CreateDatasetCommand,
  CreateDatasetExportJobCommand,
  CreateDatasetGroupCommand,
  CreateDatasetImportJobCommand,
  CreateEventTrackerCommand,
  CreateFilterCommand,
  CreateMetricAttributionCommand,
  CreateRecommenderCommand,
  CreateSchemaCommand,
  CreateSolutionCommand,
  CreateSolutionVersionCommand,
  DeleteCampaignCommand,
  DeleteDatasetCommand,
  DeleteDatasetGroupCommand,
  DeleteEventTrackerCommand,
  DeleteFilterCommand,
  DeleteMetricAttributionCommand,
  DeleteRecommenderCommand,
  DeleteSchemaCommand,
  DeleteSolutionCommand,
  DescribeAlgorithmCommand,
  DescribeBatchInferenceJobCommand,
  DescribeBatchSegmentJobCommand,
  DescribeCampaignCommand,
  DescribeDataDeletionJobCommand,
  DescribeDatasetCommand,
  DescribeDatasetExportJobCommand,
  DescribeDatasetGroupCommand,
  DescribeDatasetImportJobCommand,
  DescribeEventTrackerCommand,
  DescribeFeatureTransformationCommand,
  DescribeFilterCommand,
  DescribeMetricAttributionCommand,
  DescribeRecipeCommand,
  DescribeRecommenderCommand,
  DescribeSchemaCommand,
  DescribeSolutionCommand,
  DescribeSolutionVersionCommand,
  Domain,
  GetSolutionMetricsCommand,
  ImportMode,
  IngestionMode,
  ListBatchInferenceJobsCommand,
  ListBatchSegmentJobsCommand,
  ListCampaignsCommand,
  ListDataDeletionJobsCommand,
  ListDatasetExportJobsCommand,
  ListDatasetGroupsCommand,
  ListDatasetImportJobsCommand,
  ListDatasetsCommand,
  ListEventTrackersCommand,
  ListFiltersCommand,
  ListMetricAttributionMetricsCommand,
  ListMetricAttributionsCommand,
  ListRecipesCommand,
  ListRecommendersCommand,
  ListSchemasCommand,
  ListSolutionVersionsCommand,
  ListSolutionsCommand,
  ListTagsForResourceCommand,
  ObjectiveSensitivity,
  Personalize,
  PersonalizeClient,
  PersonalizeServiceException,
  RankingInfluenceType,
  RecipeProvider,
  StartRecommenderCommand,
  StopRecommenderCommand,
  StopSolutionVersionCreationCommand,
  TagResourceCommand,
  TrainingMode,
  TrainingType,
  UntagResourceCommand,
  UpdateCampaignCommand,
  UpdateDatasetCommand,
  UpdateMetricAttributionCommand,
  UpdateRecommenderCommand,
  UpdateSolutionCommand,
  paginateListBatchInferenceJobs,
  paginateListBatchSegmentJobs,
  paginateListCampaigns,
  paginateListDatasetExportJobs,
  paginateListDatasetGroups,
  paginateListDatasetImportJobs,
  paginateListDatasets,
  paginateListEventTrackers,
  paginateListFilters,
  paginateListMetricAttributionMetrics,
  paginateListMetricAttributions,
  paginateListRecipes,
  paginateListRecommenders,
  paginateListSchemas,
  paginateListSolutionVersions,
  paginateListSolutions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PersonalizeClient === "function")
assert(typeof Personalize === "function")
// commands
assert(typeof CreateBatchInferenceJobCommand === "function")
assert(typeof CreateBatchSegmentJobCommand === "function")
assert(typeof CreateCampaignCommand === "function")
assert(typeof CreateDataDeletionJobCommand === "function")
assert(typeof CreateDatasetCommand === "function")
assert(typeof CreateDatasetExportJobCommand === "function")
assert(typeof CreateDatasetGroupCommand === "function")
assert(typeof CreateDatasetImportJobCommand === "function")
assert(typeof CreateEventTrackerCommand === "function")
assert(typeof CreateFilterCommand === "function")
assert(typeof CreateMetricAttributionCommand === "function")
assert(typeof CreateRecommenderCommand === "function")
assert(typeof CreateSchemaCommand === "function")
assert(typeof CreateSolutionCommand === "function")
assert(typeof CreateSolutionVersionCommand === "function")
assert(typeof DeleteCampaignCommand === "function")
assert(typeof DeleteDatasetCommand === "function")
assert(typeof DeleteDatasetGroupCommand === "function")
assert(typeof DeleteEventTrackerCommand === "function")
assert(typeof DeleteFilterCommand === "function")
assert(typeof DeleteMetricAttributionCommand === "function")
assert(typeof DeleteRecommenderCommand === "function")
assert(typeof DeleteSchemaCommand === "function")
assert(typeof DeleteSolutionCommand === "function")
assert(typeof DescribeAlgorithmCommand === "function")
assert(typeof DescribeBatchInferenceJobCommand === "function")
assert(typeof DescribeBatchSegmentJobCommand === "function")
assert(typeof DescribeCampaignCommand === "function")
assert(typeof DescribeDataDeletionJobCommand === "function")
assert(typeof DescribeDatasetCommand === "function")
assert(typeof DescribeDatasetExportJobCommand === "function")
assert(typeof DescribeDatasetGroupCommand === "function")
assert(typeof DescribeDatasetImportJobCommand === "function")
assert(typeof DescribeEventTrackerCommand === "function")
assert(typeof DescribeFeatureTransformationCommand === "function")
assert(typeof DescribeFilterCommand === "function")
assert(typeof DescribeMetricAttributionCommand === "function")
assert(typeof DescribeRecipeCommand === "function")
assert(typeof DescribeRecommenderCommand === "function")
assert(typeof DescribeSchemaCommand === "function")
assert(typeof DescribeSolutionCommand === "function")
assert(typeof DescribeSolutionVersionCommand === "function")
assert(typeof GetSolutionMetricsCommand === "function")
assert(typeof ListBatchInferenceJobsCommand === "function")
assert(typeof ListBatchSegmentJobsCommand === "function")
assert(typeof ListCampaignsCommand === "function")
assert(typeof ListDataDeletionJobsCommand === "function")
assert(typeof ListDatasetExportJobsCommand === "function")
assert(typeof ListDatasetGroupsCommand === "function")
assert(typeof ListDatasetImportJobsCommand === "function")
assert(typeof ListDatasetsCommand === "function")
assert(typeof ListEventTrackersCommand === "function")
assert(typeof ListFiltersCommand === "function")
assert(typeof ListMetricAttributionMetricsCommand === "function")
assert(typeof ListMetricAttributionsCommand === "function")
assert(typeof ListRecipesCommand === "function")
assert(typeof ListRecommendersCommand === "function")
assert(typeof ListSchemasCommand === "function")
assert(typeof ListSolutionsCommand === "function")
assert(typeof ListSolutionVersionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartRecommenderCommand === "function")
assert(typeof StopRecommenderCommand === "function")
assert(typeof StopSolutionVersionCreationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCampaignCommand === "function")
assert(typeof UpdateDatasetCommand === "function")
assert(typeof UpdateMetricAttributionCommand === "function")
assert(typeof UpdateRecommenderCommand === "function")
assert(typeof UpdateSolutionCommand === "function")
// enums
assert(typeof BatchInferenceJobMode === "object");
assert(typeof Domain === "object");
assert(typeof ImportMode === "object");
assert(typeof IngestionMode === "object");
assert(typeof ObjectiveSensitivity === "object");
assert(typeof RankingInfluenceType === "object");
assert(typeof RecipeProvider === "object");
assert(typeof TrainingMode === "object");
assert(typeof TrainingType === "object");
// errors
assert(PersonalizeServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBatchInferenceJobs === "function")
assert(typeof paginateListBatchSegmentJobs === "function")
assert(typeof paginateListCampaigns === "function")
assert(typeof paginateListDatasetExportJobs === "function")
assert(typeof paginateListDatasetGroups === "function")
assert(typeof paginateListDatasetImportJobs === "function")
assert(typeof paginateListDatasets === "function")
assert(typeof paginateListEventTrackers === "function")
assert(typeof paginateListFilters === "function")
assert(typeof paginateListMetricAttributionMetrics === "function")
assert(typeof paginateListMetricAttributions === "function")
assert(typeof paginateListRecipes === "function")
assert(typeof paginateListRecommenders === "function")
assert(typeof paginateListSchemas === "function")
assert(typeof paginateListSolutionVersions === "function")
assert(typeof paginateListSolutions === "function")
console.log(`Personalize index test passed.`);
