// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchPutMessageCommand,
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput,
} from "./commands/BatchPutMessageCommand";
import {
  CancelPipelineReprocessingCommand,
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput,
} from "./commands/CancelPipelineReprocessingCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateDatasetContentCommand,
  CreateDatasetContentCommandInput,
  CreateDatasetContentCommandOutput,
} from "./commands/CreateDatasetContentCommand";
import {
  CreateDatastoreCommand,
  CreateDatastoreCommandInput,
  CreateDatastoreCommandOutput,
} from "./commands/CreateDatastoreCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetContentCommand,
  DeleteDatasetContentCommandInput,
  DeleteDatasetContentCommandOutput,
} from "./commands/DeleteDatasetContentCommand";
import {
  DeleteDatastoreCommand,
  DeleteDatastoreCommandInput,
  DeleteDatastoreCommandOutput,
} from "./commands/DeleteDatastoreCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDatastoreCommand,
  DescribeDatastoreCommandInput,
  DescribeDatastoreCommandOutput,
} from "./commands/DescribeDatastoreCommand";
import {
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  DescribePipelineCommand,
  DescribePipelineCommandInput,
  DescribePipelineCommandOutput,
} from "./commands/DescribePipelineCommand";
import {
  GetDatasetContentCommand,
  GetDatasetContentCommandInput,
  GetDatasetContentCommandOutput,
} from "./commands/GetDatasetContentCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListDatasetContentsCommand,
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "./commands/ListDatasetContentsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "./commands/ListDatastoresCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  RunPipelineActivityCommand,
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
} from "./commands/RunPipelineActivityCommand";
import {
  SampleChannelDataCommand,
  SampleChannelDataCommandInput,
  SampleChannelDataCommandOutput,
} from "./commands/SampleChannelDataCommand";
import {
  StartPipelineReprocessingCommand,
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput,
} from "./commands/StartPipelineReprocessingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateDatasetCommand,
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
} from "./commands/UpdateDatasetCommand";
import {
  UpdateDatastoreCommand,
  UpdateDatastoreCommandInput,
  UpdateDatastoreCommandOutput,
} from "./commands/UpdateDatastoreCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";
import { IoTAnalyticsClient, IoTAnalyticsClientConfig } from "./IoTAnalyticsClient";

const commands = {
  BatchPutMessageCommand,
  CancelPipelineReprocessingCommand,
  CreateChannelCommand,
  CreateDatasetCommand,
  CreateDatasetContentCommand,
  CreateDatastoreCommand,
  CreatePipelineCommand,
  DeleteChannelCommand,
  DeleteDatasetCommand,
  DeleteDatasetContentCommand,
  DeleteDatastoreCommand,
  DeletePipelineCommand,
  DescribeChannelCommand,
  DescribeDatasetCommand,
  DescribeDatastoreCommand,
  DescribeLoggingOptionsCommand,
  DescribePipelineCommand,
  GetDatasetContentCommand,
  ListChannelsCommand,
  ListDatasetContentsCommand,
  ListDatasetsCommand,
  ListDatastoresCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  PutLoggingOptionsCommand,
  RunPipelineActivityCommand,
  SampleChannelDataCommand,
  StartPipelineReprocessingCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateDatasetCommand,
  UpdateDatastoreCommand,
  UpdatePipelineCommand,
};

export interface IoTAnalytics {
  /**
   * @see {@link BatchPutMessageCommand}
   */
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMessageCommandOutput>;
  batchPutMessage(args: BatchPutMessageCommandInput, cb: (err: any, data?: BatchPutMessageCommandOutput) => void): void;
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelPipelineReprocessingCommand}
   */
  cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPipelineReprocessingCommandOutput>;
  cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void
  ): void;
  cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
  createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetContentCommand}
   */
  createDatasetContent(
    args: CreateDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetContentCommandOutput>;
  createDatasetContent(
    args: CreateDatasetContentCommandInput,
    cb: (err: any, data?: CreateDatasetContentCommandOutput) => void
  ): void;
  createDatasetContent(
    args: CreateDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatastoreCommand}
   */
  createDatastore(
    args: CreateDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatastoreCommandOutput>;
  createDatastore(args: CreateDatastoreCommandInput, cb: (err: any, data?: CreateDatastoreCommandOutput) => void): void;
  createDatastore(
    args: CreateDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
  createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetContentCommand}
   */
  deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetContentCommandOutput>;
  deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void
  ): void;
  deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatastoreCommand}
   */
  deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatastoreCommandOutput>;
  deleteDatastore(args: DeleteDatastoreCommandInput, cb: (err: any, data?: DeleteDatastoreCommandOutput) => void): void;
  deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
  deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatastoreCommand}
   */
  describeDatastore(
    args: DescribeDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatastoreCommandOutput>;
  describeDatastore(
    args: DescribeDatastoreCommandInput,
    cb: (err: any, data?: DescribeDatastoreCommandOutput) => void
  ): void;
  describeDatastore(
    args: DescribeDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingOptionsCommand}
   */
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipelineCommand}
   */
  describePipeline(
    args: DescribePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelineCommandOutput>;
  describePipeline(
    args: DescribePipelineCommandInput,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;
  describePipeline(
    args: DescribePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatasetContentCommand}
   */
  getDatasetContent(
    args: GetDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatasetContentCommandOutput>;
  getDatasetContent(
    args: GetDatasetContentCommandInput,
    cb: (err: any, data?: GetDatasetContentCommandOutput) => void
  ): void;
  getDatasetContent(
    args: GetDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatasetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetContentsCommand}
   */
  listDatasetContents(
    args: ListDatasetContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetContentsCommandOutput>;
  listDatasetContents(
    args: ListDatasetContentsCommandInput,
    cb: (err: any, data?: ListDatasetContentsCommandOutput) => void
  ): void;
  listDatasetContents(
    args: ListDatasetContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatastoresCommand}
   */
  listDatastores(
    args: ListDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatastoresCommandOutput>;
  listDatastores(args: ListDatastoresCommandInput, cb: (err: any, data?: ListDatastoresCommandOutput) => void): void;
  listDatastores(
    args: ListDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatastoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
  listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
  listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLoggingOptionsCommand}
   */
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RunPipelineActivityCommand}
   */
  runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunPipelineActivityCommandOutput>;
  runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    cb: (err: any, data?: RunPipelineActivityCommandOutput) => void
  ): void;
  runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunPipelineActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link SampleChannelDataCommand}
   */
  sampleChannelData(
    args: SampleChannelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SampleChannelDataCommandOutput>;
  sampleChannelData(
    args: SampleChannelDataCommandInput,
    cb: (err: any, data?: SampleChannelDataCommandOutput) => void
  ): void;
  sampleChannelData(
    args: SampleChannelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SampleChannelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPipelineReprocessingCommand}
   */
  startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipelineReprocessingCommandOutput>;
  startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void
  ): void;
  startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(args: UpdateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetCommandOutput>;
  updateDataset(args: UpdateDatasetCommandInput, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatastoreCommand}
   */
  updateDatastore(
    args: UpdateDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatastoreCommandOutput>;
  updateDatastore(args: UpdateDatastoreCommandInput, cb: (err: any, data?: UpdateDatastoreCommandOutput) => void): void;
  updateDatastore(
    args: UpdateDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineCommand}
   */
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *         You can then query the data and run sophisticated analytics on it.  IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *          <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export class IoTAnalytics extends IoTAnalyticsClient implements IoTAnalytics {}
createAggregatedClient(commands, IoTAnalytics);
