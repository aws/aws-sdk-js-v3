import {
  Algorithm$,
  AlgorithmImage$,
  AutoMLConfig$,
  AutoMLResult$,
  AutoTrainingConfig$,
  BatchInferenceJob$,
  BatchInferenceJobConfig$,
  BatchInferenceJobInput$,
  BatchInferenceJobMode,
  BatchInferenceJobOutput$,
  BatchInferenceJobSummary$,
  BatchSegmentJob$,
  BatchSegmentJobInput$,
  BatchSegmentJobOutput$,
  BatchSegmentJobSummary$,
  Campaign$,
  CampaignConfig$,
  CampaignSummary$,
  CampaignUpdateSummary$,
  CategoricalHyperParameterRange$,
  ContinuousHyperParameterRange$,
  CreateBatchInferenceJob$,
  CreateBatchInferenceJobCommand,
  CreateBatchInferenceJobRequest$,
  CreateBatchInferenceJobResponse$,
  CreateBatchSegmentJob$,
  CreateBatchSegmentJobCommand,
  CreateBatchSegmentJobRequest$,
  CreateBatchSegmentJobResponse$,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  CreateDataDeletionJob$,
  CreateDataDeletionJobCommand,
  CreateDataDeletionJobRequest$,
  CreateDataDeletionJobResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetExportJob$,
  CreateDatasetExportJobCommand,
  CreateDatasetExportJobRequest$,
  CreateDatasetExportJobResponse$,
  CreateDatasetGroup$,
  CreateDatasetGroupCommand,
  CreateDatasetGroupRequest$,
  CreateDatasetGroupResponse$,
  CreateDatasetImportJob$,
  CreateDatasetImportJobCommand,
  CreateDatasetImportJobRequest$,
  CreateDatasetImportJobResponse$,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateEventTracker$,
  CreateEventTrackerCommand,
  CreateEventTrackerRequest$,
  CreateEventTrackerResponse$,
  CreateFilter$,
  CreateFilterCommand,
  CreateFilterRequest$,
  CreateFilterResponse$,
  CreateMetricAttribution$,
  CreateMetricAttributionCommand,
  CreateMetricAttributionRequest$,
  CreateMetricAttributionResponse$,
  CreateRecommender$,
  CreateRecommenderCommand,
  CreateRecommenderRequest$,
  CreateRecommenderResponse$,
  CreateSchema$,
  CreateSchemaCommand,
  CreateSchemaRequest$,
  CreateSchemaResponse$,
  CreateSolution$,
  CreateSolutionCommand,
  CreateSolutionRequest$,
  CreateSolutionResponse$,
  CreateSolutionVersion$,
  CreateSolutionVersionCommand,
  CreateSolutionVersionRequest$,
  CreateSolutionVersionResponse$,
  DataDeletionJob$,
  DataDeletionJobSummary$,
  DataSource$,
  Dataset$,
  DatasetExportJob$,
  DatasetExportJobOutput$,
  DatasetExportJobSummary$,
  DatasetGroup$,
  DatasetGroupSummary$,
  DatasetImportJob$,
  DatasetImportJobSummary$,
  DatasetSchema$,
  DatasetSchemaSummary$,
  DatasetSummary$,
  DatasetUpdateSummary$,
  DefaultCategoricalHyperParameterRange$,
  DefaultContinuousHyperParameterRange$,
  DefaultHyperParameterRanges$,
  DefaultIntegerHyperParameterRange$,
  DeleteCampaign$,
  DeleteCampaignCommand,
  DeleteCampaignRequest$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetGroup$,
  DeleteDatasetGroupCommand,
  DeleteDatasetGroupRequest$,
  DeleteDatasetRequest$,
  DeleteEventTracker$,
  DeleteEventTrackerCommand,
  DeleteEventTrackerRequest$,
  DeleteFilter$,
  DeleteFilterCommand,
  DeleteFilterRequest$,
  DeleteMetricAttribution$,
  DeleteMetricAttributionCommand,
  DeleteMetricAttributionRequest$,
  DeleteRecommender$,
  DeleteRecommenderCommand,
  DeleteRecommenderRequest$,
  DeleteSchema$,
  DeleteSchemaCommand,
  DeleteSchemaRequest$,
  DeleteSolution$,
  DeleteSolutionCommand,
  DeleteSolutionRequest$,
  DescribeAlgorithm$,
  DescribeAlgorithmCommand,
  DescribeAlgorithmRequest$,
  DescribeAlgorithmResponse$,
  DescribeBatchInferenceJob$,
  DescribeBatchInferenceJobCommand,
  DescribeBatchInferenceJobRequest$,
  DescribeBatchInferenceJobResponse$,
  DescribeBatchSegmentJob$,
  DescribeBatchSegmentJobCommand,
  DescribeBatchSegmentJobRequest$,
  DescribeBatchSegmentJobResponse$,
  DescribeCampaign$,
  DescribeCampaignCommand,
  DescribeCampaignRequest$,
  DescribeCampaignResponse$,
  DescribeDataDeletionJob$,
  DescribeDataDeletionJobCommand,
  DescribeDataDeletionJobRequest$,
  DescribeDataDeletionJobResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetExportJob$,
  DescribeDatasetExportJobCommand,
  DescribeDatasetExportJobRequest$,
  DescribeDatasetExportJobResponse$,
  DescribeDatasetGroup$,
  DescribeDatasetGroupCommand,
  DescribeDatasetGroupRequest$,
  DescribeDatasetGroupResponse$,
  DescribeDatasetImportJob$,
  DescribeDatasetImportJobCommand,
  DescribeDatasetImportJobRequest$,
  DescribeDatasetImportJobResponse$,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeEventTracker$,
  DescribeEventTrackerCommand,
  DescribeEventTrackerRequest$,
  DescribeEventTrackerResponse$,
  DescribeFeatureTransformation$,
  DescribeFeatureTransformationCommand,
  DescribeFeatureTransformationRequest$,
  DescribeFeatureTransformationResponse$,
  DescribeFilter$,
  DescribeFilterCommand,
  DescribeFilterRequest$,
  DescribeFilterResponse$,
  DescribeMetricAttribution$,
  DescribeMetricAttributionCommand,
  DescribeMetricAttributionRequest$,
  DescribeMetricAttributionResponse$,
  DescribeRecipe$,
  DescribeRecipeCommand,
  DescribeRecipeRequest$,
  DescribeRecipeResponse$,
  DescribeRecommender$,
  DescribeRecommenderCommand,
  DescribeRecommenderRequest$,
  DescribeRecommenderResponse$,
  DescribeSchema$,
  DescribeSchemaCommand,
  DescribeSchemaRequest$,
  DescribeSchemaResponse$,
  DescribeSolution$,
  DescribeSolutionCommand,
  DescribeSolutionRequest$,
  DescribeSolutionResponse$,
  DescribeSolutionVersion$,
  DescribeSolutionVersionCommand,
  DescribeSolutionVersionRequest$,
  DescribeSolutionVersionResponse$,
  Domain,
  EventParameters$,
  EventTracker$,
  EventTrackerSummary$,
  EventsConfig$,
  FeatureTransformation$,
  FieldsForThemeGeneration$,
  Filter$,
  FilterSummary$,
  GetSolutionMetrics$,
  GetSolutionMetricsCommand,
  GetSolutionMetricsRequest$,
  GetSolutionMetricsResponse$,
  HPOConfig$,
  HPOObjective$,
  HPOResourceConfig$,
  HyperParameterRanges$,
  ImportMode,
  IngestionMode,
  IntegerHyperParameterRange$,
  InvalidInputException,
  InvalidInputException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListBatchInferenceJobs$,
  ListBatchInferenceJobsCommand,
  ListBatchInferenceJobsRequest$,
  ListBatchInferenceJobsResponse$,
  ListBatchSegmentJobs$,
  ListBatchSegmentJobsCommand,
  ListBatchSegmentJobsRequest$,
  ListBatchSegmentJobsResponse$,
  ListCampaigns$,
  ListCampaignsCommand,
  ListCampaignsRequest$,
  ListCampaignsResponse$,
  ListDataDeletionJobs$,
  ListDataDeletionJobsCommand,
  ListDataDeletionJobsRequest$,
  ListDataDeletionJobsResponse$,
  ListDatasetExportJobs$,
  ListDatasetExportJobsCommand,
  ListDatasetExportJobsRequest$,
  ListDatasetExportJobsResponse$,
  ListDatasetGroups$,
  ListDatasetGroupsCommand,
  ListDatasetGroupsRequest$,
  ListDatasetGroupsResponse$,
  ListDatasetImportJobs$,
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsRequest$,
  ListDatasetImportJobsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListEventTrackers$,
  ListEventTrackersCommand,
  ListEventTrackersRequest$,
  ListEventTrackersResponse$,
  ListFilters$,
  ListFiltersCommand,
  ListFiltersRequest$,
  ListFiltersResponse$,
  ListMetricAttributionMetrics$,
  ListMetricAttributionMetricsCommand,
  ListMetricAttributionMetricsRequest$,
  ListMetricAttributionMetricsResponse$,
  ListMetricAttributions$,
  ListMetricAttributionsCommand,
  ListMetricAttributionsRequest$,
  ListMetricAttributionsResponse$,
  ListRecipes$,
  ListRecipesCommand,
  ListRecipesRequest$,
  ListRecipesResponse$,
  ListRecommenders$,
  ListRecommendersCommand,
  ListRecommendersRequest$,
  ListRecommendersResponse$,
  ListSchemas$,
  ListSchemasCommand,
  ListSchemasRequest$,
  ListSchemasResponse$,
  ListSolutionVersions$,
  ListSolutionVersionsCommand,
  ListSolutionVersionsRequest$,
  ListSolutionVersionsResponse$,
  ListSolutions$,
  ListSolutionsCommand,
  ListSolutionsRequest$,
  ListSolutionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricAttribute$,
  MetricAttribution$,
  MetricAttributionOutput$,
  MetricAttributionSummary$,
  ObjectiveSensitivity,
  OptimizationObjective$,
  Personalize,
  PersonalizeClient,
  PersonalizeServiceException,
  RankingInfluenceType,
  Recipe$,
  RecipeProvider,
  RecipeSummary$,
  Recommender$,
  RecommenderConfig$,
  RecommenderSummary$,
  RecommenderUpdateSummary$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3DataConfig$,
  Solution$,
  SolutionConfig$,
  SolutionSummary$,
  SolutionUpdateConfig$,
  SolutionUpdateSummary$,
  SolutionVersion$,
  SolutionVersionSummary$,
  StartRecommender$,
  StartRecommenderCommand,
  StartRecommenderRequest$,
  StartRecommenderResponse$,
  StopRecommender$,
  StopRecommenderCommand,
  StopRecommenderRequest$,
  StopRecommenderResponse$,
  StopSolutionVersionCreation$,
  StopSolutionVersionCreationCommand,
  StopSolutionVersionCreationRequest$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThemeGenerationConfig$,
  TooManyTagKeysException,
  TooManyTagKeysException$,
  TooManyTagsException,
  TooManyTagsException$,
  TrainingDataConfig$,
  TrainingMode,
  TrainingType,
  TunedHPOParams$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCampaign$,
  UpdateCampaignCommand,
  UpdateCampaignRequest$,
  UpdateCampaignResponse$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetRequest$,
  UpdateDatasetResponse$,
  UpdateMetricAttribution$,
  UpdateMetricAttributionCommand,
  UpdateMetricAttributionRequest$,
  UpdateMetricAttributionResponse$,
  UpdateRecommender$,
  UpdateRecommenderCommand,
  UpdateRecommenderRequest$,
  UpdateRecommenderResponse$,
  UpdateSolution$,
  UpdateSolutionCommand,
  UpdateSolutionRequest$,
  UpdateSolutionResponse$,
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
assert(typeof PersonalizeClient === "function");
assert(typeof Personalize === "function");
// commands
assert(typeof CreateBatchInferenceJobCommand === "function");
assert(typeof CreateBatchInferenceJob$ === "object");
assert(typeof CreateBatchSegmentJobCommand === "function");
assert(typeof CreateBatchSegmentJob$ === "object");
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof CreateDataDeletionJobCommand === "function");
assert(typeof CreateDataDeletionJob$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDatasetExportJobCommand === "function");
assert(typeof CreateDatasetExportJob$ === "object");
assert(typeof CreateDatasetGroupCommand === "function");
assert(typeof CreateDatasetGroup$ === "object");
assert(typeof CreateDatasetImportJobCommand === "function");
assert(typeof CreateDatasetImportJob$ === "object");
assert(typeof CreateEventTrackerCommand === "function");
assert(typeof CreateEventTracker$ === "object");
assert(typeof CreateFilterCommand === "function");
assert(typeof CreateFilter$ === "object");
assert(typeof CreateMetricAttributionCommand === "function");
assert(typeof CreateMetricAttribution$ === "object");
assert(typeof CreateRecommenderCommand === "function");
assert(typeof CreateRecommender$ === "object");
assert(typeof CreateSchemaCommand === "function");
assert(typeof CreateSchema$ === "object");
assert(typeof CreateSolutionCommand === "function");
assert(typeof CreateSolution$ === "object");
assert(typeof CreateSolutionVersionCommand === "function");
assert(typeof CreateSolutionVersion$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteDatasetGroupCommand === "function");
assert(typeof DeleteDatasetGroup$ === "object");
assert(typeof DeleteEventTrackerCommand === "function");
assert(typeof DeleteEventTracker$ === "object");
assert(typeof DeleteFilterCommand === "function");
assert(typeof DeleteFilter$ === "object");
assert(typeof DeleteMetricAttributionCommand === "function");
assert(typeof DeleteMetricAttribution$ === "object");
assert(typeof DeleteRecommenderCommand === "function");
assert(typeof DeleteRecommender$ === "object");
assert(typeof DeleteSchemaCommand === "function");
assert(typeof DeleteSchema$ === "object");
assert(typeof DeleteSolutionCommand === "function");
assert(typeof DeleteSolution$ === "object");
assert(typeof DescribeAlgorithmCommand === "function");
assert(typeof DescribeAlgorithm$ === "object");
assert(typeof DescribeBatchInferenceJobCommand === "function");
assert(typeof DescribeBatchInferenceJob$ === "object");
assert(typeof DescribeBatchSegmentJobCommand === "function");
assert(typeof DescribeBatchSegmentJob$ === "object");
assert(typeof DescribeCampaignCommand === "function");
assert(typeof DescribeCampaign$ === "object");
assert(typeof DescribeDataDeletionJobCommand === "function");
assert(typeof DescribeDataDeletionJob$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeDatasetExportJobCommand === "function");
assert(typeof DescribeDatasetExportJob$ === "object");
assert(typeof DescribeDatasetGroupCommand === "function");
assert(typeof DescribeDatasetGroup$ === "object");
assert(typeof DescribeDatasetImportJobCommand === "function");
assert(typeof DescribeDatasetImportJob$ === "object");
assert(typeof DescribeEventTrackerCommand === "function");
assert(typeof DescribeEventTracker$ === "object");
assert(typeof DescribeFeatureTransformationCommand === "function");
assert(typeof DescribeFeatureTransformation$ === "object");
assert(typeof DescribeFilterCommand === "function");
assert(typeof DescribeFilter$ === "object");
assert(typeof DescribeMetricAttributionCommand === "function");
assert(typeof DescribeMetricAttribution$ === "object");
assert(typeof DescribeRecipeCommand === "function");
assert(typeof DescribeRecipe$ === "object");
assert(typeof DescribeRecommenderCommand === "function");
assert(typeof DescribeRecommender$ === "object");
assert(typeof DescribeSchemaCommand === "function");
assert(typeof DescribeSchema$ === "object");
assert(typeof DescribeSolutionCommand === "function");
assert(typeof DescribeSolution$ === "object");
assert(typeof DescribeSolutionVersionCommand === "function");
assert(typeof DescribeSolutionVersion$ === "object");
assert(typeof GetSolutionMetricsCommand === "function");
assert(typeof GetSolutionMetrics$ === "object");
assert(typeof ListBatchInferenceJobsCommand === "function");
assert(typeof ListBatchInferenceJobs$ === "object");
assert(typeof ListBatchSegmentJobsCommand === "function");
assert(typeof ListBatchSegmentJobs$ === "object");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListCampaigns$ === "object");
assert(typeof ListDataDeletionJobsCommand === "function");
assert(typeof ListDataDeletionJobs$ === "object");
assert(typeof ListDatasetExportJobsCommand === "function");
assert(typeof ListDatasetExportJobs$ === "object");
assert(typeof ListDatasetGroupsCommand === "function");
assert(typeof ListDatasetGroups$ === "object");
assert(typeof ListDatasetImportJobsCommand === "function");
assert(typeof ListDatasetImportJobs$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListEventTrackersCommand === "function");
assert(typeof ListEventTrackers$ === "object");
assert(typeof ListFiltersCommand === "function");
assert(typeof ListFilters$ === "object");
assert(typeof ListMetricAttributionMetricsCommand === "function");
assert(typeof ListMetricAttributionMetrics$ === "object");
assert(typeof ListMetricAttributionsCommand === "function");
assert(typeof ListMetricAttributions$ === "object");
assert(typeof ListRecipesCommand === "function");
assert(typeof ListRecipes$ === "object");
assert(typeof ListRecommendersCommand === "function");
assert(typeof ListRecommenders$ === "object");
assert(typeof ListSchemasCommand === "function");
assert(typeof ListSchemas$ === "object");
assert(typeof ListSolutionsCommand === "function");
assert(typeof ListSolutions$ === "object");
assert(typeof ListSolutionVersionsCommand === "function");
assert(typeof ListSolutionVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartRecommenderCommand === "function");
assert(typeof StartRecommender$ === "object");
assert(typeof StopRecommenderCommand === "function");
assert(typeof StopRecommender$ === "object");
assert(typeof StopSolutionVersionCreationCommand === "function");
assert(typeof StopSolutionVersionCreation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCampaignCommand === "function");
assert(typeof UpdateCampaign$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdateMetricAttributionCommand === "function");
assert(typeof UpdateMetricAttribution$ === "object");
assert(typeof UpdateRecommenderCommand === "function");
assert(typeof UpdateRecommender$ === "object");
assert(typeof UpdateSolutionCommand === "function");
assert(typeof UpdateSolution$ === "object");
// structural schemas
assert(typeof Algorithm$ === "object");
assert(typeof AlgorithmImage$ === "object");
assert(typeof AutoMLConfig$ === "object");
assert(typeof AutoMLResult$ === "object");
assert(typeof AutoTrainingConfig$ === "object");
assert(typeof BatchInferenceJob$ === "object");
assert(typeof BatchInferenceJobConfig$ === "object");
assert(typeof BatchInferenceJobInput$ === "object");
assert(typeof BatchInferenceJobOutput$ === "object");
assert(typeof BatchInferenceJobSummary$ === "object");
assert(typeof BatchSegmentJob$ === "object");
assert(typeof BatchSegmentJobInput$ === "object");
assert(typeof BatchSegmentJobOutput$ === "object");
assert(typeof BatchSegmentJobSummary$ === "object");
assert(typeof Campaign$ === "object");
assert(typeof CampaignConfig$ === "object");
assert(typeof CampaignSummary$ === "object");
assert(typeof CampaignUpdateSummary$ === "object");
assert(typeof CategoricalHyperParameterRange$ === "object");
assert(typeof ContinuousHyperParameterRange$ === "object");
assert(typeof CreateBatchInferenceJobRequest$ === "object");
assert(typeof CreateBatchInferenceJobResponse$ === "object");
assert(typeof CreateBatchSegmentJobRequest$ === "object");
assert(typeof CreateBatchSegmentJobResponse$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof CreateDataDeletionJobRequest$ === "object");
assert(typeof CreateDataDeletionJobResponse$ === "object");
assert(typeof CreateDatasetExportJobRequest$ === "object");
assert(typeof CreateDatasetExportJobResponse$ === "object");
assert(typeof CreateDatasetGroupRequest$ === "object");
assert(typeof CreateDatasetGroupResponse$ === "object");
assert(typeof CreateDatasetImportJobRequest$ === "object");
assert(typeof CreateDatasetImportJobResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateEventTrackerRequest$ === "object");
assert(typeof CreateEventTrackerResponse$ === "object");
assert(typeof CreateFilterRequest$ === "object");
assert(typeof CreateFilterResponse$ === "object");
assert(typeof CreateMetricAttributionRequest$ === "object");
assert(typeof CreateMetricAttributionResponse$ === "object");
assert(typeof CreateRecommenderRequest$ === "object");
assert(typeof CreateRecommenderResponse$ === "object");
assert(typeof CreateSchemaRequest$ === "object");
assert(typeof CreateSchemaResponse$ === "object");
assert(typeof CreateSolutionRequest$ === "object");
assert(typeof CreateSolutionResponse$ === "object");
assert(typeof CreateSolutionVersionRequest$ === "object");
assert(typeof CreateSolutionVersionResponse$ === "object");
assert(typeof DataDeletionJob$ === "object");
assert(typeof DataDeletionJobSummary$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DatasetExportJob$ === "object");
assert(typeof DatasetExportJobOutput$ === "object");
assert(typeof DatasetExportJobSummary$ === "object");
assert(typeof DatasetGroup$ === "object");
assert(typeof DatasetGroupSummary$ === "object");
assert(typeof DatasetImportJob$ === "object");
assert(typeof DatasetImportJobSummary$ === "object");
assert(typeof DatasetSchema$ === "object");
assert(typeof DatasetSchemaSummary$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DatasetUpdateSummary$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DefaultCategoricalHyperParameterRange$ === "object");
assert(typeof DefaultContinuousHyperParameterRange$ === "object");
assert(typeof DefaultHyperParameterRanges$ === "object");
assert(typeof DefaultIntegerHyperParameterRange$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteDatasetGroupRequest$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteEventTrackerRequest$ === "object");
assert(typeof DeleteFilterRequest$ === "object");
assert(typeof DeleteMetricAttributionRequest$ === "object");
assert(typeof DeleteRecommenderRequest$ === "object");
assert(typeof DeleteSchemaRequest$ === "object");
assert(typeof DeleteSolutionRequest$ === "object");
assert(typeof DescribeAlgorithmRequest$ === "object");
assert(typeof DescribeAlgorithmResponse$ === "object");
assert(typeof DescribeBatchInferenceJobRequest$ === "object");
assert(typeof DescribeBatchInferenceJobResponse$ === "object");
assert(typeof DescribeBatchSegmentJobRequest$ === "object");
assert(typeof DescribeBatchSegmentJobResponse$ === "object");
assert(typeof DescribeCampaignRequest$ === "object");
assert(typeof DescribeCampaignResponse$ === "object");
assert(typeof DescribeDataDeletionJobRequest$ === "object");
assert(typeof DescribeDataDeletionJobResponse$ === "object");
assert(typeof DescribeDatasetExportJobRequest$ === "object");
assert(typeof DescribeDatasetExportJobResponse$ === "object");
assert(typeof DescribeDatasetGroupRequest$ === "object");
assert(typeof DescribeDatasetGroupResponse$ === "object");
assert(typeof DescribeDatasetImportJobRequest$ === "object");
assert(typeof DescribeDatasetImportJobResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeEventTrackerRequest$ === "object");
assert(typeof DescribeEventTrackerResponse$ === "object");
assert(typeof DescribeFeatureTransformationRequest$ === "object");
assert(typeof DescribeFeatureTransformationResponse$ === "object");
assert(typeof DescribeFilterRequest$ === "object");
assert(typeof DescribeFilterResponse$ === "object");
assert(typeof DescribeMetricAttributionRequest$ === "object");
assert(typeof DescribeMetricAttributionResponse$ === "object");
assert(typeof DescribeRecipeRequest$ === "object");
assert(typeof DescribeRecipeResponse$ === "object");
assert(typeof DescribeRecommenderRequest$ === "object");
assert(typeof DescribeRecommenderResponse$ === "object");
assert(typeof DescribeSchemaRequest$ === "object");
assert(typeof DescribeSchemaResponse$ === "object");
assert(typeof DescribeSolutionRequest$ === "object");
assert(typeof DescribeSolutionResponse$ === "object");
assert(typeof DescribeSolutionVersionRequest$ === "object");
assert(typeof DescribeSolutionVersionResponse$ === "object");
assert(typeof EventParameters$ === "object");
assert(typeof EventsConfig$ === "object");
assert(typeof EventTracker$ === "object");
assert(typeof EventTrackerSummary$ === "object");
assert(typeof FeatureTransformation$ === "object");
assert(typeof FieldsForThemeGeneration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterSummary$ === "object");
assert(typeof GetSolutionMetricsRequest$ === "object");
assert(typeof GetSolutionMetricsResponse$ === "object");
assert(typeof HPOConfig$ === "object");
assert(typeof HPOObjective$ === "object");
assert(typeof HPOResourceConfig$ === "object");
assert(typeof HyperParameterRanges$ === "object");
assert(typeof IntegerHyperParameterRange$ === "object");
assert(typeof ListBatchInferenceJobsRequest$ === "object");
assert(typeof ListBatchInferenceJobsResponse$ === "object");
assert(typeof ListBatchSegmentJobsRequest$ === "object");
assert(typeof ListBatchSegmentJobsResponse$ === "object");
assert(typeof ListCampaignsRequest$ === "object");
assert(typeof ListCampaignsResponse$ === "object");
assert(typeof ListDataDeletionJobsRequest$ === "object");
assert(typeof ListDataDeletionJobsResponse$ === "object");
assert(typeof ListDatasetExportJobsRequest$ === "object");
assert(typeof ListDatasetExportJobsResponse$ === "object");
assert(typeof ListDatasetGroupsRequest$ === "object");
assert(typeof ListDatasetGroupsResponse$ === "object");
assert(typeof ListDatasetImportJobsRequest$ === "object");
assert(typeof ListDatasetImportJobsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListEventTrackersRequest$ === "object");
assert(typeof ListEventTrackersResponse$ === "object");
assert(typeof ListFiltersRequest$ === "object");
assert(typeof ListFiltersResponse$ === "object");
assert(typeof ListMetricAttributionMetricsRequest$ === "object");
assert(typeof ListMetricAttributionMetricsResponse$ === "object");
assert(typeof ListMetricAttributionsRequest$ === "object");
assert(typeof ListMetricAttributionsResponse$ === "object");
assert(typeof ListRecipesRequest$ === "object");
assert(typeof ListRecipesResponse$ === "object");
assert(typeof ListRecommendersRequest$ === "object");
assert(typeof ListRecommendersResponse$ === "object");
assert(typeof ListSchemasRequest$ === "object");
assert(typeof ListSchemasResponse$ === "object");
assert(typeof ListSolutionsRequest$ === "object");
assert(typeof ListSolutionsResponse$ === "object");
assert(typeof ListSolutionVersionsRequest$ === "object");
assert(typeof ListSolutionVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricAttribute$ === "object");
assert(typeof MetricAttribution$ === "object");
assert(typeof MetricAttributionOutput$ === "object");
assert(typeof MetricAttributionSummary$ === "object");
assert(typeof OptimizationObjective$ === "object");
assert(typeof Recipe$ === "object");
assert(typeof RecipeSummary$ === "object");
assert(typeof Recommender$ === "object");
assert(typeof RecommenderConfig$ === "object");
assert(typeof RecommenderSummary$ === "object");
assert(typeof RecommenderUpdateSummary$ === "object");
assert(typeof S3DataConfig$ === "object");
assert(typeof Solution$ === "object");
assert(typeof SolutionConfig$ === "object");
assert(typeof SolutionSummary$ === "object");
assert(typeof SolutionUpdateConfig$ === "object");
assert(typeof SolutionUpdateSummary$ === "object");
assert(typeof SolutionVersion$ === "object");
assert(typeof SolutionVersionSummary$ === "object");
assert(typeof StartRecommenderRequest$ === "object");
assert(typeof StartRecommenderResponse$ === "object");
assert(typeof StopRecommenderRequest$ === "object");
assert(typeof StopRecommenderResponse$ === "object");
assert(typeof StopSolutionVersionCreationRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof ThemeGenerationConfig$ === "object");
assert(typeof TrainingDataConfig$ === "object");
assert(typeof TunedHPOParams$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCampaignRequest$ === "object");
assert(typeof UpdateCampaignResponse$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatasetResponse$ === "object");
assert(typeof UpdateMetricAttributionRequest$ === "object");
assert(typeof UpdateMetricAttributionResponse$ === "object");
assert(typeof UpdateRecommenderRequest$ === "object");
assert(typeof UpdateRecommenderResponse$ === "object");
assert(typeof UpdateSolutionRequest$ === "object");
assert(typeof UpdateSolutionResponse$ === "object");
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
assert(InvalidInputException.prototype instanceof PersonalizeServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidNextTokenException.prototype instanceof PersonalizeServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof PersonalizeServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof PersonalizeServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof PersonalizeServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PersonalizeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagKeysException.prototype instanceof PersonalizeServiceException);
assert(typeof TooManyTagKeysException$ === "object");
assert(TooManyTagsException.prototype instanceof PersonalizeServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(PersonalizeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBatchInferenceJobs === "function");
assert(typeof paginateListBatchSegmentJobs === "function");
assert(typeof paginateListCampaigns === "function");
assert(typeof paginateListDatasetExportJobs === "function");
assert(typeof paginateListDatasetGroups === "function");
assert(typeof paginateListDatasetImportJobs === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListEventTrackers === "function");
assert(typeof paginateListFilters === "function");
assert(typeof paginateListMetricAttributionMetrics === "function");
assert(typeof paginateListMetricAttributions === "function");
assert(typeof paginateListRecipes === "function");
assert(typeof paginateListRecommenders === "function");
assert(typeof paginateListSchemas === "function");
assert(typeof paginateListSolutionVersions === "function");
assert(typeof paginateListSolutions === "function");
console.log(`Personalize index test passed.`);
