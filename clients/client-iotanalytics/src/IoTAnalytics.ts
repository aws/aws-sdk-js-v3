// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IoTAnalyticsClient } from "./IoTAnalyticsClient";

/**
 * <p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *         You can then query the data and run sophisticated analytics on it.  IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export class IoTAnalytics extends IoTAnalyticsClient {
  /**
   * <p>Sends messages to a channel.</p>
   */
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMessageCommandOutput>;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutMessageCommandOutput) => void),
    cb?: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): Promise<BatchPutMessageCommandOutput> | void {
    const command = new BatchPutMessageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the reprocessing of data through the pipeline.</p>
   */
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPipelineReprocessingCommandOutput>;
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void
  ): void;
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void
  ): void;
  public cancelPipelineReprocessing(
    args: CancelPipelineReprocessingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelPipelineReprocessingCommandOutput) => void),
    cb?: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void
  ): Promise<CancelPipelineReprocessingCommandOutput> | void {
    const command = new CancelPipelineReprocessingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to create a channel. A channel collects data from an MQTT topic and archives the raw,
   *       unprocessed messages before publishing the data to a pipeline.</p>
   */
  public createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  public createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  public createChannel(
    args: CreateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChannelCommandOutput) => void),
    cb?: (err: any, data?: CreateChannelCommandOutput) => void
  ): Promise<CreateChannelCommandOutput> | void {
    const command = new CreateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to create a dataset. A dataset stores data retrieved from a data store by applying a
   *         <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a
   *       containerized application). This operation creates the skeleton of a dataset. The dataset can
   *       be populated manually by calling <code>CreateDatasetContent</code> or automatically according
   *       to a trigger you specify.</p>
   */
  public createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  public createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetCommandOutput) => void
  ): Promise<CreateDatasetCommandOutput> | void {
    const command = new CreateDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a
   *         <code>containerAction</code> (executing a containerized application).</p>
   */
  public createDatasetContent(
    args: CreateDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetContentCommandOutput>;
  public createDatasetContent(
    args: CreateDatasetContentCommandInput,
    cb: (err: any, data?: CreateDatasetContentCommandOutput) => void
  ): void;
  public createDatasetContent(
    args: CreateDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetContentCommandOutput) => void
  ): void;
  public createDatasetContent(
    args: CreateDatasetContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetContentCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetContentCommandOutput) => void
  ): Promise<CreateDatasetContentCommandOutput> | void {
    const command = new CreateDatasetContentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a data store, which is a repository for messages.</p>
   */
  public createDatastore(
    args: CreateDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatastoreCommandOutput>;
  public createDatastore(
    args: CreateDatastoreCommandInput,
    cb: (err: any, data?: CreateDatastoreCommandOutput) => void
  ): void;
  public createDatastore(
    args: CreateDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatastoreCommandOutput) => void
  ): void;
  public createDatastore(
    args: CreateDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatastoreCommandOutput) => void),
    cb?: (err: any, data?: CreateDatastoreCommandOutput) => void
  ): Promise<CreateDatastoreCommandOutput> | void {
    const command = new CreateDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
   *       the messages before storing them in a data store. You must specify both a <code>channel</code>
   *       and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in
   *       the <code>pipelineActivities</code> array.</p>
   */
  public createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  public createPipeline(
    args: CreatePipelineCommandInput,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreatePipelineCommandOutput) => void
  ): Promise<CreatePipelineCommandOutput> | void {
    const command = new CreatePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified channel.</p>
   */
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  public deleteChannel(
    args: DeleteChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteChannelCommandOutput) => void
  ): Promise<DeleteChannelCommandOutput> | void {
    const command = new DeleteChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified dataset.</p>
   *          <p>You do not have to delete the content of the dataset before you perform this
   *       operation.</p>
   */
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the content of the specified dataset.</p>
   */
  public deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetContentCommandOutput>;
  public deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void
  ): void;
  public deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void
  ): void;
  public deleteDatasetContent(
    args: DeleteDatasetContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetContentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetContentCommandOutput) => void
  ): Promise<DeleteDatasetContentCommandOutput> | void {
    const command = new DeleteDatasetContentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified data store.</p>
   */
  public deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatastoreCommandOutput>;
  public deleteDatastore(
    args: DeleteDatastoreCommandInput,
    cb: (err: any, data?: DeleteDatastoreCommandOutput) => void
  ): void;
  public deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatastoreCommandOutput) => void
  ): void;
  public deleteDatastore(
    args: DeleteDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatastoreCommandOutput) => void
  ): Promise<DeleteDatastoreCommandOutput> | void {
    const command = new DeleteDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified pipeline.</p>
   */
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeletePipelineCommandOutput) => void
  ): Promise<DeletePipelineCommandOutput> | void {
    const command = new DeletePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a channel.</p>
   */
  public describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  public describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  public describeChannel(
    args: DescribeChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChannelCommandOutput) => void),
    cb?: (err: any, data?: DescribeChannelCommandOutput) => void
  ): Promise<DescribeChannelCommandOutput> | void {
    const command = new DescribeChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a dataset.</p>
   */
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): Promise<DescribeDatasetCommandOutput> | void {
    const command = new DescribeDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a data store.</p>
   */
  public describeDatastore(
    args: DescribeDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatastoreCommandOutput>;
  public describeDatastore(
    args: DescribeDatastoreCommandInput,
    cb: (err: any, data?: DescribeDatastoreCommandOutput) => void
  ): void;
  public describeDatastore(
    args: DescribeDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatastoreCommandOutput) => void
  ): void;
  public describeDatastore(
    args: DescribeDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatastoreCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatastoreCommandOutput) => void
  ): Promise<DescribeDatastoreCommandOutput> | void {
    const command = new DescribeDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current settings of the IoT Analytics logging options.</p>
   */
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): Promise<DescribeLoggingOptionsCommandOutput> | void {
    const command = new DescribeLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a pipeline.</p>
   */
  public describePipeline(
    args: DescribePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelineCommandOutput>;
  public describePipeline(
    args: DescribePipelineCommandInput,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;
  public describePipeline(
    args: DescribePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;
  public describePipeline(
    args: DescribePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePipelineCommandOutput) => void),
    cb?: (err: any, data?: DescribePipelineCommandOutput) => void
  ): Promise<DescribePipelineCommandOutput> | void {
    const command = new DescribePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the contents of a dataset as presigned URIs.</p>
   */
  public getDatasetContent(
    args: GetDatasetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatasetContentCommandOutput>;
  public getDatasetContent(
    args: GetDatasetContentCommandInput,
    cb: (err: any, data?: GetDatasetContentCommandOutput) => void
  ): void;
  public getDatasetContent(
    args: GetDatasetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatasetContentCommandOutput) => void
  ): void;
  public getDatasetContent(
    args: GetDatasetContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatasetContentCommandOutput) => void),
    cb?: (err: any, data?: GetDatasetContentCommandOutput) => void
  ): Promise<GetDatasetContentCommandOutput> | void {
    const command = new GetDatasetContentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of channels.</p>
   */
  public listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  public listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  public listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  public listChannels(
    args: ListChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListChannelsCommandOutput) => void
  ): Promise<ListChannelsCommandOutput> | void {
    const command = new ListChannelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists information about dataset contents that have been created.</p>
   */
  public listDatasetContents(
    args: ListDatasetContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetContentsCommandOutput>;
  public listDatasetContents(
    args: ListDatasetContentsCommandInput,
    cb: (err: any, data?: ListDatasetContentsCommandOutput) => void
  ): void;
  public listDatasetContents(
    args: ListDatasetContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetContentsCommandOutput) => void
  ): void;
  public listDatasetContents(
    args: ListDatasetContentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetContentsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetContentsCommandOutput) => void
  ): Promise<ListDatasetContentsCommandOutput> | void {
    const command = new ListDatasetContentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about datasets.</p>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of data stores.</p>
   */
  public listDatastores(
    args: ListDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatastoresCommandOutput>;
  public listDatastores(
    args: ListDatastoresCommandInput,
    cb: (err: any, data?: ListDatastoresCommandOutput) => void
  ): void;
  public listDatastores(
    args: ListDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatastoresCommandOutput) => void
  ): void;
  public listDatastores(
    args: ListDatastoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatastoresCommandOutput) => void),
    cb?: (err: any, data?: ListDatastoresCommandOutput) => void
  ): Promise<ListDatastoresCommandOutput> | void {
    const command = new ListDatastoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of pipelines.</p>
   */
  public listPipelines(
    args: ListPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelinesCommandOutput>;
  public listPipelines(
    args: ListPipelinesCommandInput,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListPipelinesCommandOutput) => void
  ): Promise<ListPipelinesCommandOutput> | void {
    const command = new ListPipelinesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags (metadata) that you have assigned to the resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets or updates the IoT Analytics logging options.</p>
   *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
   *       minute for the change to take effect. Also, if you change the policy attached to the role you
   *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
   *       takes up to five minutes for that change to take effect. </p>
   */
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): Promise<PutLoggingOptionsCommandOutput> | void {
    const command = new PutLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Simulates the results of running a pipeline activity on a message payload.</p>
   */
  public runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunPipelineActivityCommandOutput>;
  public runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    cb: (err: any, data?: RunPipelineActivityCommandOutput) => void
  ): void;
  public runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunPipelineActivityCommandOutput) => void
  ): void;
  public runPipelineActivity(
    args: RunPipelineActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunPipelineActivityCommandOutput) => void),
    cb?: (err: any, data?: RunPipelineActivityCommandOutput) => void
  ): Promise<RunPipelineActivityCommandOutput> | void {
    const command = new RunPipelineActivityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a sample of messages from the specified channel ingested during the specified
   *       timeframe. Up to 10 messages can be retrieved.</p>
   */
  public sampleChannelData(
    args: SampleChannelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SampleChannelDataCommandOutput>;
  public sampleChannelData(
    args: SampleChannelDataCommandInput,
    cb: (err: any, data?: SampleChannelDataCommandOutput) => void
  ): void;
  public sampleChannelData(
    args: SampleChannelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SampleChannelDataCommandOutput) => void
  ): void;
  public sampleChannelData(
    args: SampleChannelDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SampleChannelDataCommandOutput) => void),
    cb?: (err: any, data?: SampleChannelDataCommandOutput) => void
  ): Promise<SampleChannelDataCommandOutput> | void {
    const command = new SampleChannelDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the reprocessing of raw message data through the pipeline.</p>
   */
  public startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipelineReprocessingCommandOutput>;
  public startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void
  ): void;
  public startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void
  ): void;
  public startPipelineReprocessing(
    args: StartPipelineReprocessingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartPipelineReprocessingCommandOutput) => void),
    cb?: (err: any, data?: StartPipelineReprocessingCommandOutput) => void
  ): Promise<StartPipelineReprocessingCommandOutput> | void {
    const command = new StartPipelineReprocessingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
   *       manage a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the given tags (metadata) from the resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to update the settings of a channel.</p>
   */
  public updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  public updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  public updateChannel(
    args: UpdateChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateChannelCommandOutput) => void),
    cb?: (err: any, data?: UpdateChannelCommandOutput) => void
  ): Promise<UpdateChannelCommandOutput> | void {
    const command = new UpdateChannelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings of a dataset.</p>
   */
  public updateDataset(
    args: UpdateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetCommandOutput>;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  public updateDataset(
    args: UpdateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatasetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): Promise<UpdateDatasetCommandOutput> | void {
    const command = new UpdateDatasetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to update the settings of a data store.</p>
   */
  public updateDatastore(
    args: UpdateDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatastoreCommandOutput>;
  public updateDatastore(
    args: UpdateDatastoreCommandInput,
    cb: (err: any, data?: UpdateDatastoreCommandOutput) => void
  ): void;
  public updateDatastore(
    args: UpdateDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatastoreCommandOutput) => void
  ): void;
  public updateDatastore(
    args: UpdateDatastoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatastoreCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatastoreCommandOutput) => void
  ): Promise<UpdateDatastoreCommandOutput> | void {
    const command = new UpdateDatastoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a
   *         <code>datastore</code> activity and, optionally, as many as 23 additional activities in the
   *         <code>pipelineActivities</code> array.</p>
   */
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipelineCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): Promise<UpdatePipelineCommandOutput> | void {
    const command = new UpdatePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
