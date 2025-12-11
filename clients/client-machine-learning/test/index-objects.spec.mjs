import {
  AddTagsCommand,
  Algorithm,
  BatchPredictionFilterVariable,
  CreateBatchPredictionCommand,
  CreateDataSourceFromRDSCommand,
  CreateDataSourceFromRedshiftCommand,
  CreateDataSourceFromS3Command,
  CreateEvaluationCommand,
  CreateMLModelCommand,
  CreateRealtimeEndpointCommand,
  DataSourceFilterVariable,
  DeleteBatchPredictionCommand,
  DeleteDataSourceCommand,
  DeleteEvaluationCommand,
  DeleteMLModelCommand,
  DeleteRealtimeEndpointCommand,
  DeleteTagsCommand,
  DescribeBatchPredictionsCommand,
  DescribeDataSourcesCommand,
  DescribeEvaluationsCommand,
  DescribeMLModelsCommand,
  DescribeTagsCommand,
  DetailsAttributes,
  EntityStatus,
  EvaluationFilterVariable,
  GetBatchPredictionCommand,
  GetDataSourceCommand,
  GetEvaluationCommand,
  GetMLModelCommand,
  IdempotentParameterMismatchException,
  InternalServerException,
  InvalidInputException,
  InvalidTagException,
  LimitExceededException,
  MLModelFilterVariable,
  MLModelType,
  MachineLearning,
  MachineLearningClient,
  MachineLearningServiceException,
  PredictCommand,
  PredictorNotMountedException,
  RealtimeEndpointStatus,
  ResourceNotFoundException,
  SortOrder,
  TagLimitExceededException,
  TaggableResourceType,
  UpdateBatchPredictionCommand,
  UpdateDataSourceCommand,
  UpdateEvaluationCommand,
  UpdateMLModelCommand,
  paginateDescribeBatchPredictions,
  paginateDescribeDataSources,
  paginateDescribeEvaluations,
  paginateDescribeMLModels,
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
assert(typeof CreateBatchPredictionCommand === "function");
assert(typeof CreateDataSourceFromRDSCommand === "function");
assert(typeof CreateDataSourceFromRedshiftCommand === "function");
assert(typeof CreateDataSourceFromS3Command === "function");
assert(typeof CreateEvaluationCommand === "function");
assert(typeof CreateMLModelCommand === "function");
assert(typeof CreateRealtimeEndpointCommand === "function");
assert(typeof DeleteBatchPredictionCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteEvaluationCommand === "function");
assert(typeof DeleteMLModelCommand === "function");
assert(typeof DeleteRealtimeEndpointCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DescribeBatchPredictionsCommand === "function");
assert(typeof DescribeDataSourcesCommand === "function");
assert(typeof DescribeEvaluationsCommand === "function");
assert(typeof DescribeMLModelsCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof GetBatchPredictionCommand === "function");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetEvaluationCommand === "function");
assert(typeof GetMLModelCommand === "function");
assert(typeof PredictCommand === "function");
assert(typeof UpdateBatchPredictionCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateEvaluationCommand === "function");
assert(typeof UpdateMLModelCommand === "function");
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
assert(InternalServerException.prototype instanceof MachineLearningServiceException);
assert(InvalidInputException.prototype instanceof MachineLearningServiceException);
assert(InvalidTagException.prototype instanceof MachineLearningServiceException);
assert(LimitExceededException.prototype instanceof MachineLearningServiceException);
assert(PredictorNotMountedException.prototype instanceof MachineLearningServiceException);
assert(ResourceNotFoundException.prototype instanceof MachineLearningServiceException);
assert(TagLimitExceededException.prototype instanceof MachineLearningServiceException);
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
