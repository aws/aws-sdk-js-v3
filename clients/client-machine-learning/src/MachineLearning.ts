// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  CreateBatchPredictionCommand,
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
} from "./commands/CreateBatchPredictionCommand";
import {
  CreateDataSourceFromRDSCommand,
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
} from "./commands/CreateDataSourceFromRDSCommand";
import {
  CreateDataSourceFromRedshiftCommand,
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
} from "./commands/CreateDataSourceFromRedshiftCommand";
import {
  CreateDataSourceFromS3Command,
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
} from "./commands/CreateDataSourceFromS3Command";
import {
  CreateEvaluationCommand,
  CreateEvaluationCommandInput,
  CreateEvaluationCommandOutput,
} from "./commands/CreateEvaluationCommand";
import {
  CreateMLModelCommand,
  CreateMLModelCommandInput,
  CreateMLModelCommandOutput,
} from "./commands/CreateMLModelCommand";
import {
  CreateRealtimeEndpointCommand,
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
} from "./commands/CreateRealtimeEndpointCommand";
import {
  DeleteBatchPredictionCommand,
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
} from "./commands/DeleteBatchPredictionCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteEvaluationCommand,
  DeleteEvaluationCommandInput,
  DeleteEvaluationCommandOutput,
} from "./commands/DeleteEvaluationCommand";
import {
  DeleteMLModelCommand,
  DeleteMLModelCommandInput,
  DeleteMLModelCommandOutput,
} from "./commands/DeleteMLModelCommand";
import {
  DeleteRealtimeEndpointCommand,
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
} from "./commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "./commands/DescribeBatchPredictionsCommand";
import {
  DescribeDataSourcesCommand,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "./commands/DescribeDataSourcesCommand";
import {
  DescribeEvaluationsCommand,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "./commands/DescribeEvaluationsCommand";
import {
  DescribeMLModelsCommand,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
} from "./commands/DescribeMLModelsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  GetBatchPredictionCommand,
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput,
} from "./commands/GetBatchPredictionCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetEvaluationCommand,
  GetEvaluationCommandInput,
  GetEvaluationCommandOutput,
} from "./commands/GetEvaluationCommand";
import { GetMLModelCommand, GetMLModelCommandInput, GetMLModelCommandOutput } from "./commands/GetMLModelCommand";
import { PredictCommand, PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand";
import {
  UpdateBatchPredictionCommand,
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
} from "./commands/UpdateBatchPredictionCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateEvaluationCommand,
  UpdateEvaluationCommandInput,
  UpdateEvaluationCommandOutput,
} from "./commands/UpdateEvaluationCommand";
import {
  UpdateMLModelCommand,
  UpdateMLModelCommandInput,
  UpdateMLModelCommandOutput,
} from "./commands/UpdateMLModelCommand";
import { MachineLearningClient, MachineLearningClientConfig } from "./MachineLearningClient";

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
 * @public
 * Definition of the public APIs
 * 		exposed by Amazon Machine Learning
 */
export class MachineLearning extends MachineLearningClient implements MachineLearning {}
createAggregatedClient(commands, MachineLearning);
