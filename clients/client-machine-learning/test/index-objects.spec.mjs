import {
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  Algorithm,
  BatchPrediction$,
  BatchPredictionFilterVariable,
  CreateBatchPrediction$,
  CreateBatchPredictionCommand,
  CreateBatchPredictionInput$,
  CreateBatchPredictionOutput$,
  CreateDataSourceFromRDS$,
  CreateDataSourceFromRDSCommand,
  CreateDataSourceFromRDSInput$,
  CreateDataSourceFromRDSOutput$,
  CreateDataSourceFromRedshift$,
  CreateDataSourceFromRedshiftCommand,
  CreateDataSourceFromRedshiftInput$,
  CreateDataSourceFromRedshiftOutput$,
  CreateDataSourceFromS3$,
  CreateDataSourceFromS3Command,
  CreateDataSourceFromS3Input$,
  CreateDataSourceFromS3Output$,
  CreateEvaluation$,
  CreateEvaluationCommand,
  CreateEvaluationInput$,
  CreateEvaluationOutput$,
  CreateMLModel$,
  CreateMLModelCommand,
  CreateMLModelInput$,
  CreateMLModelOutput$,
  CreateRealtimeEndpoint$,
  CreateRealtimeEndpointCommand,
  CreateRealtimeEndpointInput$,
  CreateRealtimeEndpointOutput$,
  DataSource$,
  DataSourceFilterVariable,
  DeleteBatchPrediction$,
  DeleteBatchPredictionCommand,
  DeleteBatchPredictionInput$,
  DeleteBatchPredictionOutput$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceInput$,
  DeleteDataSourceOutput$,
  DeleteEvaluation$,
  DeleteEvaluationCommand,
  DeleteEvaluationInput$,
  DeleteEvaluationOutput$,
  DeleteMLModel$,
  DeleteMLModelCommand,
  DeleteMLModelInput$,
  DeleteMLModelOutput$,
  DeleteRealtimeEndpoint$,
  DeleteRealtimeEndpointCommand,
  DeleteRealtimeEndpointInput$,
  DeleteRealtimeEndpointOutput$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsInput$,
  DeleteTagsOutput$,
  DescribeBatchPredictions$,
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsInput$,
  DescribeBatchPredictionsOutput$,
  DescribeDataSources$,
  DescribeDataSourcesCommand,
  DescribeDataSourcesInput$,
  DescribeDataSourcesOutput$,
  DescribeEvaluations$,
  DescribeEvaluationsCommand,
  DescribeEvaluationsInput$,
  DescribeEvaluationsOutput$,
  DescribeMLModels$,
  DescribeMLModelsCommand,
  DescribeMLModelsInput$,
  DescribeMLModelsOutput$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsInput$,
  DescribeTagsOutput$,
  DetailsAttributes,
  EntityStatus,
  Evaluation$,
  EvaluationFilterVariable,
  GetBatchPrediction$,
  GetBatchPredictionCommand,
  GetBatchPredictionInput$,
  GetBatchPredictionOutput$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceInput$,
  GetDataSourceOutput$,
  GetEvaluation$,
  GetEvaluationCommand,
  GetEvaluationInput$,
  GetEvaluationOutput$,
  GetMLModel$,
  GetMLModelCommand,
  GetMLModelInput$,
  GetMLModelOutput$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  InternalServerException,
  InternalServerException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidTagException,
  InvalidTagException$,
  LimitExceededException,
  LimitExceededException$,
  MachineLearning,
  MachineLearningClient,
  MachineLearningServiceException,
  MLModel$,
  MLModelFilterVariable,
  MLModelType,
  paginateDescribeBatchPredictions,
  paginateDescribeDataSources,
  paginateDescribeEvaluations,
  paginateDescribeMLModels,
  PerformanceMetrics$,
  Predict$,
  PredictCommand,
  PredictInput$,
  Prediction$,
  PredictorNotMountedException,
  PredictorNotMountedException$,
  PredictOutput$,
  RDSDatabase$,
  RDSDatabaseCredentials$,
  RDSDataSpec$,
  RDSMetadata$,
  RealtimeEndpointInfo$,
  RealtimeEndpointStatus,
  RedshiftDatabase$,
  RedshiftDatabaseCredentials$,
  RedshiftDataSpec$,
  RedshiftMetadata$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3DataSpec$,
  SortOrder,
  Tag$,
  TaggableResourceType,
  TagLimitExceededException,
  TagLimitExceededException$,
  UpdateBatchPrediction$,
  UpdateBatchPredictionCommand,
  UpdateBatchPredictionInput$,
  UpdateBatchPredictionOutput$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceInput$,
  UpdateDataSourceOutput$,
  UpdateEvaluation$,
  UpdateEvaluationCommand,
  UpdateEvaluationInput$,
  UpdateEvaluationOutput$,
  UpdateMLModel$,
  UpdateMLModelCommand,
  UpdateMLModelInput$,
  UpdateMLModelOutput$,
  waitForBatchPredictionAvailable,
  waitForDataSourceAvailable,
  waitForEvaluationAvailable,
  waitForMLModelAvailable,
  waitUntilBatchPredictionAvailable,
  waitUntilDataSourceAvailable,
  waitUntilEvaluationAvailable,
  waitUntilMLModelAvailable,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MachineLearningClient === "function");
assert(typeof MachineLearning === "function");
// commands
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof CreateBatchPredictionCommand === "function");
assert(typeof CreateBatchPrediction$ === "object");
assert(typeof CreateDataSourceFromRDSCommand === "function");
assert(typeof CreateDataSourceFromRDS$ === "object");
assert(typeof CreateDataSourceFromRedshiftCommand === "function");
assert(typeof CreateDataSourceFromRedshift$ === "object");
assert(typeof CreateDataSourceFromS3Command === "function");
assert(typeof CreateDataSourceFromS3$ === "object");
assert(typeof CreateEvaluationCommand === "function");
assert(typeof CreateEvaluation$ === "object");
assert(typeof CreateMLModelCommand === "function");
assert(typeof CreateMLModel$ === "object");
assert(typeof CreateRealtimeEndpointCommand === "function");
assert(typeof CreateRealtimeEndpoint$ === "object");
assert(typeof DeleteBatchPredictionCommand === "function");
assert(typeof DeleteBatchPrediction$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteEvaluationCommand === "function");
assert(typeof DeleteEvaluation$ === "object");
assert(typeof DeleteMLModelCommand === "function");
assert(typeof DeleteMLModel$ === "object");
assert(typeof DeleteRealtimeEndpointCommand === "function");
assert(typeof DeleteRealtimeEndpoint$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DescribeBatchPredictionsCommand === "function");
assert(typeof DescribeBatchPredictions$ === "object");
assert(typeof DescribeDataSourcesCommand === "function");
assert(typeof DescribeDataSources$ === "object");
assert(typeof DescribeEvaluationsCommand === "function");
assert(typeof DescribeEvaluations$ === "object");
assert(typeof DescribeMLModelsCommand === "function");
assert(typeof DescribeMLModels$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof GetBatchPredictionCommand === "function");
assert(typeof GetBatchPrediction$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetEvaluationCommand === "function");
assert(typeof GetEvaluation$ === "object");
assert(typeof GetMLModelCommand === "function");
assert(typeof GetMLModel$ === "object");
assert(typeof PredictCommand === "function");
assert(typeof Predict$ === "object");
assert(typeof UpdateBatchPredictionCommand === "function");
assert(typeof UpdateBatchPrediction$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateEvaluationCommand === "function");
assert(typeof UpdateEvaluation$ === "object");
assert(typeof UpdateMLModelCommand === "function");
assert(typeof UpdateMLModel$ === "object");
// structural schemas
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof BatchPrediction$ === "object");
assert(typeof CreateBatchPredictionInput$ === "object");
assert(typeof CreateBatchPredictionOutput$ === "object");
assert(typeof CreateDataSourceFromRDSInput$ === "object");
assert(typeof CreateDataSourceFromRDSOutput$ === "object");
assert(typeof CreateDataSourceFromRedshiftInput$ === "object");
assert(typeof CreateDataSourceFromRedshiftOutput$ === "object");
assert(typeof CreateDataSourceFromS3Input$ === "object");
assert(typeof CreateDataSourceFromS3Output$ === "object");
assert(typeof CreateEvaluationInput$ === "object");
assert(typeof CreateEvaluationOutput$ === "object");
assert(typeof CreateMLModelInput$ === "object");
assert(typeof CreateMLModelOutput$ === "object");
assert(typeof CreateRealtimeEndpointInput$ === "object");
assert(typeof CreateRealtimeEndpointOutput$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DeleteBatchPredictionInput$ === "object");
assert(typeof DeleteBatchPredictionOutput$ === "object");
assert(typeof DeleteDataSourceInput$ === "object");
assert(typeof DeleteDataSourceOutput$ === "object");
assert(typeof DeleteEvaluationInput$ === "object");
assert(typeof DeleteEvaluationOutput$ === "object");
assert(typeof DeleteMLModelInput$ === "object");
assert(typeof DeleteMLModelOutput$ === "object");
assert(typeof DeleteRealtimeEndpointInput$ === "object");
assert(typeof DeleteRealtimeEndpointOutput$ === "object");
assert(typeof DeleteTagsInput$ === "object");
assert(typeof DeleteTagsOutput$ === "object");
assert(typeof DescribeBatchPredictionsInput$ === "object");
assert(typeof DescribeBatchPredictionsOutput$ === "object");
assert(typeof DescribeDataSourcesInput$ === "object");
assert(typeof DescribeDataSourcesOutput$ === "object");
assert(typeof DescribeEvaluationsInput$ === "object");
assert(typeof DescribeEvaluationsOutput$ === "object");
assert(typeof DescribeMLModelsInput$ === "object");
assert(typeof DescribeMLModelsOutput$ === "object");
assert(typeof DescribeTagsInput$ === "object");
assert(typeof DescribeTagsOutput$ === "object");
assert(typeof Evaluation$ === "object");
assert(typeof GetBatchPredictionInput$ === "object");
assert(typeof GetBatchPredictionOutput$ === "object");
assert(typeof GetDataSourceInput$ === "object");
assert(typeof GetDataSourceOutput$ === "object");
assert(typeof GetEvaluationInput$ === "object");
assert(typeof GetEvaluationOutput$ === "object");
assert(typeof GetMLModelInput$ === "object");
assert(typeof GetMLModelOutput$ === "object");
assert(typeof MLModel$ === "object");
assert(typeof PerformanceMetrics$ === "object");
assert(typeof PredictInput$ === "object");
assert(typeof Prediction$ === "object");
assert(typeof PredictOutput$ === "object");
assert(typeof RDSDatabase$ === "object");
assert(typeof RDSDatabaseCredentials$ === "object");
assert(typeof RDSDataSpec$ === "object");
assert(typeof RDSMetadata$ === "object");
assert(typeof RealtimeEndpointInfo$ === "object");
assert(typeof RedshiftDatabase$ === "object");
assert(typeof RedshiftDatabaseCredentials$ === "object");
assert(typeof RedshiftDataSpec$ === "object");
assert(typeof RedshiftMetadata$ === "object");
assert(typeof S3DataSpec$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UpdateBatchPredictionInput$ === "object");
assert(typeof UpdateBatchPredictionOutput$ === "object");
assert(typeof UpdateDataSourceInput$ === "object");
assert(typeof UpdateDataSourceOutput$ === "object");
assert(typeof UpdateEvaluationInput$ === "object");
assert(typeof UpdateEvaluationOutput$ === "object");
assert(typeof UpdateMLModelInput$ === "object");
assert(typeof UpdateMLModelOutput$ === "object");
// enums
assert(typeof Algorithm === "object");
assert(typeof BatchPredictionFilterVariable === "object");
assert(typeof DataSourceFilterVariable === "object");
assert(typeof DetailsAttributes === "object");
assert(typeof EntityStatus === "object");
assert(typeof EvaluationFilterVariable === "object");
assert(typeof MLModelFilterVariable === "object");
assert(typeof MLModelType === "object");
assert(typeof RealtimeEndpointStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof TaggableResourceType === "object");
// errors
assert(IdempotentParameterMismatchException.prototype instanceof MachineLearningServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InternalServerException.prototype instanceof MachineLearningServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidInputException.prototype instanceof MachineLearningServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidTagException.prototype instanceof MachineLearningServiceException);
assert(typeof InvalidTagException$ === "object");
assert(LimitExceededException.prototype instanceof MachineLearningServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PredictorNotMountedException.prototype instanceof MachineLearningServiceException);
assert(typeof PredictorNotMountedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MachineLearningServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TagLimitExceededException.prototype instanceof MachineLearningServiceException);
assert(typeof TagLimitExceededException$ === "object");
assert(MachineLearningServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForBatchPredictionAvailable === "function");
assert(typeof waitForDataSourceAvailable === "function");
assert(typeof waitForEvaluationAvailable === "function");
assert(typeof waitForMLModelAvailable === "function");
assert(typeof waitUntilBatchPredictionAvailable === "function");
assert(typeof waitUntilDataSourceAvailable === "function");
assert(typeof waitUntilEvaluationAvailable === "function");
assert(typeof waitUntilMLModelAvailable === "function");
// paginators
assert(typeof paginateDescribeBatchPredictions === "function");
assert(typeof paginateDescribeDataSources === "function");
assert(typeof paginateDescribeEvaluations === "function");
assert(typeof paginateDescribeMLModels === "function");
console.log(`MachineLearning index test passed.`);
