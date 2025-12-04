// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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

export interface MachineLearning {
  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBatchPredictionCommand}
   */
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchPredictionCommandOutput>;
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;
  createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromRDSCommand}
   */
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromRDSCommandOutput>;
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;
  createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromRedshiftCommand}
   */
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromRedshiftCommandOutput>;
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;
  createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceFromS3Command}
   */
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromS3CommandOutput>;
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;
  createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEvaluationCommand}
   */
  createEvaluation(
    args: CreateEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEvaluationCommandOutput>;
  createEvaluation(
    args: CreateEvaluationCommandInput,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;
  createEvaluation(
    args: CreateEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMLModelCommand}
   */
  createMLModel(args: CreateMLModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateMLModelCommandOutput>;
  createMLModel(args: CreateMLModelCommandInput, cb: (err: any, data?: CreateMLModelCommandOutput) => void): void;
  createMLModel(
    args: CreateMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRealtimeEndpointCommand}
   */
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRealtimeEndpointCommandOutput>;
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;
  createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchPredictionCommand}
   */
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchPredictionCommandOutput>;
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;
  deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEvaluationCommand}
   */
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluationCommandOutput>;
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;
  deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLModelCommand}
   */
  deleteMLModel(args: DeleteMLModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMLModelCommandOutput>;
  deleteMLModel(args: DeleteMLModelCommandInput, cb: (err: any, data?: DeleteMLModelCommandOutput) => void): void;
  deleteMLModel(
    args: DeleteMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRealtimeEndpointCommand}
   */
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRealtimeEndpointCommandOutput>;
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;
  deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBatchPredictionsCommand}
   */
  describeBatchPredictions(): Promise<DescribeBatchPredictionsCommandOutput>;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchPredictionsCommandOutput>;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;
  describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSourcesCommand}
   */
  describeDataSources(): Promise<DescribeDataSourcesCommandOutput>;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourcesCommandOutput>;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;
  describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEvaluationsCommand}
   */
  describeEvaluations(): Promise<DescribeEvaluationsCommandOutput>;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEvaluationsCommandOutput>;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;
  describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMLModelsCommand}
   */
  describeMLModels(): Promise<DescribeMLModelsCommandOutput>;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMLModelsCommandOutput>;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;
  describeMLModels(
    args: DescribeMLModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchPredictionCommand}
   */
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchPredictionCommandOutput>;
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;
  getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvaluationCommand}
   */
  getEvaluation(args: GetEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<GetEvaluationCommandOutput>;
  getEvaluation(args: GetEvaluationCommandInput, cb: (err: any, data?: GetEvaluationCommandOutput) => void): void;
  getEvaluation(
    args: GetEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLModelCommand}
   */
  getMLModel(args: GetMLModelCommandInput, options?: __HttpHandlerOptions): Promise<GetMLModelCommandOutput>;
  getMLModel(args: GetMLModelCommandInput, cb: (err: any, data?: GetMLModelCommandOutput) => void): void;
  getMLModel(
    args: GetMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLModelCommandOutput) => void
  ): void;

  /**
   * @see {@link PredictCommand}
   */
  predict(args: PredictCommandInput, options?: __HttpHandlerOptions): Promise<PredictCommandOutput>;
  predict(args: PredictCommandInput, cb: (err: any, data?: PredictCommandOutput) => void): void;
  predict(
    args: PredictCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBatchPredictionCommand}
   */
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBatchPredictionCommandOutput>;
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;
  updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEvaluationCommand}
   */
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEvaluationCommandOutput>;
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;
  updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMLModelCommand}
   */
  updateMLModel(args: UpdateMLModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMLModelCommandOutput>;
  updateMLModel(args: UpdateMLModelCommandInput, cb: (err: any, data?: UpdateMLModelCommandOutput) => void): void;
  updateMLModel(
    args: UpdateMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): void;
}

/**
 * Definition of the public APIs
 * 		exposed by Amazon Machine Learning
 * @public
 */
export class MachineLearning extends MachineLearningClient implements MachineLearning {}
createAggregatedClient(commands, MachineLearning);
