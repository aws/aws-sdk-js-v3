// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type CreateBatchPredictionCommandInput,
  type CreateBatchPredictionCommandOutput,
  CreateBatchPredictionCommand,
} from "./commands/CreateBatchPredictionCommand";
import {
  type CreateDataSourceFromRDSCommandInput,
  type CreateDataSourceFromRDSCommandOutput,
  CreateDataSourceFromRDSCommand,
} from "./commands/CreateDataSourceFromRDSCommand";
import {
  type CreateDataSourceFromRedshiftCommandInput,
  type CreateDataSourceFromRedshiftCommandOutput,
  CreateDataSourceFromRedshiftCommand,
} from "./commands/CreateDataSourceFromRedshiftCommand";
import {
  type CreateDataSourceFromS3CommandInput,
  type CreateDataSourceFromS3CommandOutput,
  CreateDataSourceFromS3Command,
} from "./commands/CreateDataSourceFromS3Command";
import {
  type CreateEvaluationCommandInput,
  type CreateEvaluationCommandOutput,
  CreateEvaluationCommand,
} from "./commands/CreateEvaluationCommand";
import {
  type CreateMLModelCommandInput,
  type CreateMLModelCommandOutput,
  CreateMLModelCommand,
} from "./commands/CreateMLModelCommand";
import {
  type CreateRealtimeEndpointCommandInput,
  type CreateRealtimeEndpointCommandOutput,
  CreateRealtimeEndpointCommand,
} from "./commands/CreateRealtimeEndpointCommand";
import {
  type DeleteBatchPredictionCommandInput,
  type DeleteBatchPredictionCommandOutput,
  DeleteBatchPredictionCommand,
} from "./commands/DeleteBatchPredictionCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteEvaluationCommandInput,
  type DeleteEvaluationCommandOutput,
  DeleteEvaluationCommand,
} from "./commands/DeleteEvaluationCommand";
import {
  type DeleteMLModelCommandInput,
  type DeleteMLModelCommandOutput,
  DeleteMLModelCommand,
} from "./commands/DeleteMLModelCommand";
import {
  type DeleteRealtimeEndpointCommandInput,
  type DeleteRealtimeEndpointCommandOutput,
  DeleteRealtimeEndpointCommand,
} from "./commands/DeleteRealtimeEndpointCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DescribeBatchPredictionsCommandInput,
  type DescribeBatchPredictionsCommandOutput,
  DescribeBatchPredictionsCommand,
} from "./commands/DescribeBatchPredictionsCommand";
import {
  type DescribeDataSourcesCommandInput,
  type DescribeDataSourcesCommandOutput,
  DescribeDataSourcesCommand,
} from "./commands/DescribeDataSourcesCommand";
import {
  type DescribeEvaluationsCommandInput,
  type DescribeEvaluationsCommandOutput,
  DescribeEvaluationsCommand,
} from "./commands/DescribeEvaluationsCommand";
import {
  type DescribeMLModelsCommandInput,
  type DescribeMLModelsCommandOutput,
  DescribeMLModelsCommand,
} from "./commands/DescribeMLModelsCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type GetBatchPredictionCommandInput,
  type GetBatchPredictionCommandOutput,
  GetBatchPredictionCommand,
} from "./commands/GetBatchPredictionCommand";
import {
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDataSourceCommand,
} from "./commands/GetDataSourceCommand";
import {
  type GetEvaluationCommandInput,
  type GetEvaluationCommandOutput,
  GetEvaluationCommand,
} from "./commands/GetEvaluationCommand";
import {
  type GetMLModelCommandInput,
  type GetMLModelCommandOutput,
  GetMLModelCommand,
} from "./commands/GetMLModelCommand";
import { type PredictCommandInput, type PredictCommandOutput, PredictCommand } from "./commands/PredictCommand";
import {
  type UpdateBatchPredictionCommandInput,
  type UpdateBatchPredictionCommandOutput,
  UpdateBatchPredictionCommand,
} from "./commands/UpdateBatchPredictionCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateEvaluationCommandInput,
  type UpdateEvaluationCommandOutput,
  UpdateEvaluationCommand,
} from "./commands/UpdateEvaluationCommand";
import {
  type UpdateMLModelCommandInput,
  type UpdateMLModelCommandOutput,
  UpdateMLModelCommand,
} from "./commands/UpdateMLModelCommand";
import { MachineLearningClient } from "./MachineLearningClient";
import type { MachineLearningServiceException } from "./models/MachineLearningServiceException";
import { paginateDescribeBatchPredictions } from "./pagination/DescribeBatchPredictionsPaginator";
import { paginateDescribeDataSources } from "./pagination/DescribeDataSourcesPaginator";
import { paginateDescribeEvaluations } from "./pagination/DescribeEvaluationsPaginator";
import { paginateDescribeMLModels } from "./pagination/DescribeMLModelsPaginator";
import { waitUntilBatchPredictionAvailable } from "./waiters/waitForBatchPredictionAvailable";
import { waitUntilDataSourceAvailable } from "./waiters/waitForDataSourceAvailable";
import { waitUntilEvaluationAvailable } from "./waiters/waitForEvaluationAvailable";
import { waitUntilMLModelAvailable } from "./waiters/waitForMLModelAvailable";

const commands = {
  AddTagsCommand,
  CreateBatchPredictionCommand,
  CreateDataSourceFromRDSCommand,
  CreateDataSourceFromRedshiftCommand,
  CreateDataSourceFromS3Command,
  CreateEvaluationCommand,
  CreateMLModelCommand,
  CreateRealtimeEndpointCommand,
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
  GetBatchPredictionCommand,
  GetDataSourceCommand,
  GetEvaluationCommand,
  GetMLModelCommand,
  PredictCommand,
  UpdateBatchPredictionCommand,
  UpdateDataSourceCommand,
  UpdateEvaluationCommand,
  UpdateMLModelCommand,
};
const paginators = {
  paginateDescribeBatchPredictions,
  paginateDescribeDataSources,
  paginateDescribeEvaluations,
  paginateDescribeMLModels,
};
const waiters = {
  waitUntilBatchPredictionAvailable,
  waitUntilDataSourceAvailable,
  waitUntilEvaluationAvailable,
  waitUntilMLModelAvailable,
};

/**
 * @public
 */
export interface MachineLearningRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MachineLearning {
  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchPredictionCommand}
   */
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateBatchPredictionCommandOutput>;
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromRDSCommand}
   */
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateDataSourceFromRDSCommandOutput>;
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromRedshiftCommand}
   */
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateDataSourceFromRedshiftCommandOutput>;
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromS3Command}
   */
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateDataSourceFromS3CommandOutput>;
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEvaluationCommand}
   */
  createEvaluation(
    args: CreateEvaluationCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateEvaluationCommandOutput>;
  createEvaluation(
    args: CreateEvaluationCommandInput,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;
  createEvaluation(
    args: CreateEvaluationCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMLModelCommand}
   */
  createMLModel(
    args: CreateMLModelCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateMLModelCommandOutput>;
  createMLModel(
    args: CreateMLModelCommandInput,
    cb: (err: any, data?: CreateMLModelCommandOutput) => void
  ): void;
  createMLModel(
    args: CreateMLModelCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRealtimeEndpointCommand}
   */
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<CreateRealtimeEndpointCommandOutput>;
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchPredictionCommand}
   */
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteBatchPredictionCommandOutput>;
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEvaluationCommand}
   */
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteEvaluationCommandOutput>;
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLModelCommand}
   */
  deleteMLModel(
    args: DeleteMLModelCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteMLModelCommandOutput>;
  deleteMLModel(
    args: DeleteMLModelCommandInput,
    cb: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): void;
  deleteMLModel(
    args: DeleteMLModelCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRealtimeEndpointCommand}
   */
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteRealtimeEndpointCommandOutput>;
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBatchPredictionsCommand}
   */
  describeBatchPredictions(): Promise<DescribeBatchPredictionsCommandOutput>;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DescribeBatchPredictionsCommandOutput>;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourcesCommand}
   */
  describeDataSources(): Promise<DescribeDataSourcesCommandOutput>;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DescribeDataSourcesCommandOutput>;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEvaluationsCommand}
   */
  describeEvaluations(): Promise<DescribeEvaluationsCommandOutput>;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DescribeEvaluationsCommandOutput>;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMLModelsCommand}
   */
  describeMLModels(): Promise<DescribeMLModelsCommandOutput>;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DescribeMLModelsCommandOutput>;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchPredictionCommand}
   */
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<GetBatchPredictionCommandOutput>;
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<GetDataSourceCommandOutput>;
  getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvaluationCommand}
   */
  getEvaluation(
    args: GetEvaluationCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<GetEvaluationCommandOutput>;
  getEvaluation(
    args: GetEvaluationCommandInput,
    cb: (err: any, data?: GetEvaluationCommandOutput) => void
  ): void;
  getEvaluation(
    args: GetEvaluationCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: GetEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLModelCommand}
   */
  getMLModel(
    args: GetMLModelCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<GetMLModelCommandOutput>;
  getMLModel(
    args: GetMLModelCommandInput,
    cb: (err: any, data?: GetMLModelCommandOutput) => void
  ): void;
  getMLModel(
    args: GetMLModelCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: GetMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link PredictCommand}
   */
  predict(
    args: PredictCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<PredictCommandOutput>;
  predict(
    args: PredictCommandInput,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
  predict(
    args: PredictCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBatchPredictionCommand}
   */
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<UpdateBatchPredictionCommandOutput>;
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEvaluationCommand}
   */
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<UpdateEvaluationCommandOutput>;
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMLModelCommand}
   */
  updateMLModel(
    args: UpdateMLModelCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<UpdateMLModelCommandOutput>;
  updateMLModel(
    args: UpdateMLModelCommandInput,
    cb: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): void;
  updateMLModel(
    args: UpdateMLModelCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBatchPredictionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBatchPredictionsCommandOutput}.
   */
  paginateDescribeBatchPredictions(
    args?: DescribeBatchPredictionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBatchPredictionsCommandOutput>;

  /**
   * @see {@link DescribeDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataSourcesCommandOutput}.
   */
  paginateDescribeDataSources(
    args?: DescribeDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataSourcesCommandOutput>;

  /**
   * @see {@link DescribeEvaluationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEvaluationsCommandOutput}.
   */
  paginateDescribeEvaluations(
    args?: DescribeEvaluationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEvaluationsCommandOutput>;

  /**
   * @see {@link DescribeMLModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMLModelsCommandOutput}.
   */
  paginateDescribeMLModels(
    args?: DescribeMLModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMLModelsCommandOutput>;

  /**
   * @see {@link DescribeBatchPredictionsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBatchPredictionAvailable(
    args: DescribeBatchPredictionsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MachineLearning>, "client">
  ): Promise<WaiterResult<DescribeBatchPredictionsCommandOutput>>;

  /**
   * @see {@link DescribeDataSourcesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDataSourceAvailable(
    args: DescribeDataSourcesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MachineLearning>, "client">
  ): Promise<WaiterResult<DescribeDataSourcesCommandOutput>>;

  /**
   * @see {@link DescribeEvaluationsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEvaluationAvailable(
    args: DescribeEvaluationsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MachineLearning>, "client">
  ): Promise<WaiterResult<DescribeEvaluationsCommandOutput>>;

  /**
   * @see {@link DescribeMLModelsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMLModelAvailable(
    args: DescribeMLModelsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MachineLearning>, "client">
  ): Promise<WaiterResult<DescribeMLModelsCommandOutput>>;
}

/**
 * Definition of the public APIs
 * 		exposed by Amazon Machine Learning
 * @public
 */
export class MachineLearning extends MachineLearningClient implements MachineLearning {}
createAggregatedClient(commands, MachineLearning, { paginators, waiters });
