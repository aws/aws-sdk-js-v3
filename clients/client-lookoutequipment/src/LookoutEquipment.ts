// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateInferenceSchedulerCommand,
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
} from "./commands/CreateInferenceSchedulerCommand";
import { CreateLabelCommand, CreateLabelCommandInput, CreateLabelCommandOutput } from "./commands/CreateLabelCommand";
import {
  CreateLabelGroupCommand,
  CreateLabelGroupCommandInput,
  CreateLabelGroupCommandOutput,
} from "./commands/CreateLabelGroupCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeleteInferenceSchedulerCommand,
  DeleteInferenceSchedulerCommandInput,
  DeleteInferenceSchedulerCommandOutput,
} from "./commands/DeleteInferenceSchedulerCommand";
import { DeleteLabelCommand, DeleteLabelCommandInput, DeleteLabelCommandOutput } from "./commands/DeleteLabelCommand";
import {
  DeleteLabelGroupCommand,
  DeleteLabelGroupCommandInput,
  DeleteLabelGroupCommandOutput,
} from "./commands/DeleteLabelGroupCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DescribeDataIngestionJobCommand,
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
} from "./commands/DescribeDataIngestionJobCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeInferenceSchedulerCommand,
  DescribeInferenceSchedulerCommandInput,
  DescribeInferenceSchedulerCommandOutput,
} from "./commands/DescribeInferenceSchedulerCommand";
import {
  DescribeLabelCommand,
  DescribeLabelCommandInput,
  DescribeLabelCommandOutput,
} from "./commands/DescribeLabelCommand";
import {
  DescribeLabelGroupCommand,
  DescribeLabelGroupCommandInput,
  DescribeLabelGroupCommandOutput,
} from "./commands/DescribeLabelGroupCommand";
import {
  DescribeModelCommand,
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
} from "./commands/DescribeModelCommand";
import {
  ListDataIngestionJobsCommand,
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "./commands/ListDataIngestionJobsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListInferenceEventsCommand,
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
} from "./commands/ListInferenceEventsCommand";
import {
  ListInferenceExecutionsCommand,
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "./commands/ListInferenceExecutionsCommand";
import {
  ListInferenceSchedulersCommand,
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "./commands/ListInferenceSchedulersCommand";
import {
  ListLabelGroupsCommand,
  ListLabelGroupsCommandInput,
  ListLabelGroupsCommandOutput,
} from "./commands/ListLabelGroupsCommand";
import { ListLabelsCommand, ListLabelsCommandInput, ListLabelsCommandOutput } from "./commands/ListLabelsCommand";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListSensorStatisticsCommand,
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
} from "./commands/ListSensorStatisticsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartDataIngestionJobCommand,
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
} from "./commands/StartDataIngestionJobCommand";
import {
  StartInferenceSchedulerCommand,
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
} from "./commands/StartInferenceSchedulerCommand";
import {
  StopInferenceSchedulerCommand,
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "./commands/StopInferenceSchedulerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateInferenceSchedulerCommand,
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
} from "./commands/UpdateInferenceSchedulerCommand";
import {
  UpdateLabelGroupCommand,
  UpdateLabelGroupCommandInput,
  UpdateLabelGroupCommandOutput,
} from "./commands/UpdateLabelGroupCommand";
import { LookoutEquipmentClient } from "./LookoutEquipmentClient";

/**
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 */
export class LookoutEquipment extends LookoutEquipmentClient {
  /**
   * <p>Creates a container for a collection of data being ingested for analysis. The dataset
   *          contains the metadata describing where the data is and what the data actually looks like.
   *          In other words, it contains the location of the data source, the data schema, and other
   *          information. A dataset also contains any tags associated with the ingested data. </p>
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
   * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
   *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
   *          provide an S3 bucket location for the input data, assign it a delimiter between separate
   *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
   *          You must also provide an S3 bucket location for the output data. </p>
   */
  public createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInferenceSchedulerCommandOutput>;
  public createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void
  ): void;
  public createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void
  ): void;
  public createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void
  ): Promise<CreateInferenceSchedulerCommandOutput> | void {
    const command = new CreateInferenceSchedulerCommand(args);
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
   * <p>
   * Creates a label for an event.
   * </p>
   */
  public createLabel(args: CreateLabelCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelCommandOutput>;
  public createLabel(args: CreateLabelCommandInput, cb: (err: any, data?: CreateLabelCommandOutput) => void): void;
  public createLabel(
    args: CreateLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelCommandOutput) => void
  ): void;
  public createLabel(
    args: CreateLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLabelCommandOutput) => void),
    cb?: (err: any, data?: CreateLabelCommandOutput) => void
  ): Promise<CreateLabelCommandOutput> | void {
    const command = new CreateLabelCommand(args);
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
   * <p>
   * Creates a group of labels.
   * </p>
   */
  public createLabelGroup(
    args: CreateLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelGroupCommandOutput>;
  public createLabelGroup(
    args: CreateLabelGroupCommandInput,
    cb: (err: any, data?: CreateLabelGroupCommandOutput) => void
  ): void;
  public createLabelGroup(
    args: CreateLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelGroupCommandOutput) => void
  ): void;
  public createLabelGroup(
    args: CreateLabelGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLabelGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateLabelGroupCommandOutput) => void
  ): Promise<CreateLabelGroupCommandOutput> | void {
    const command = new CreateLabelGroupCommand(args);
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
   * <p>Creates an ML model for data inference. </p>
   *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
   *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and
   *          detects abnormal behavior that could be potential equipment failure (or maintenance
   *          events). The models are made by analyzing normal data and abnormalities in machine behavior
   *          that have already occurred.</p>
   *          <p>Your model is trained using a portion of the data from your dataset and uses that data
   *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
   *          Another portion of the data is used to evaluate the model's accuracy. </p>
   */
  public createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  public createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  public createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  public createModel(
    args: CreateModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateModelCommandOutput) => void),
    cb?: (err: any, data?: CreateModelCommandOutput) => void
  ): Promise<CreateModelCommandOutput> | void {
    const command = new CreateModelCommand(args);
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
   * <p> Deletes a dataset and associated artifacts. The operation will check to see if any
   *          inference scheduler or data ingestion job is currently using the dataset, and if there
   *          isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted.
   *          This does not affect any models that used this dataset for training and evaluation, but
   *          does prevent it from being used in the future. </p>
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
   * <p>Deletes an inference scheduler that has been set up. Already processed output results
   *          are not affected. </p>
   */
  public deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInferenceSchedulerCommandOutput>;
  public deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void
  ): void;
  public deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void
  ): void;
  public deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void
  ): Promise<DeleteInferenceSchedulerCommandOutput> | void {
    const command = new DeleteInferenceSchedulerCommand(args);
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
   * <p>
   * Deletes a label.
   * </p>
   */
  public deleteLabel(args: DeleteLabelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelCommandOutput>;
  public deleteLabel(args: DeleteLabelCommandInput, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
  public deleteLabel(
    args: DeleteLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;
  public deleteLabel(
    args: DeleteLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLabelCommandOutput) => void),
    cb?: (err: any, data?: DeleteLabelCommandOutput) => void
  ): Promise<DeleteLabelCommandOutput> | void {
    const command = new DeleteLabelCommand(args);
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
   * <p>
   * Deletes a group of labels.
   * </p>
   */
  public deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLabelGroupCommandOutput>;
  public deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    cb: (err: any, data?: DeleteLabelGroupCommandOutput) => void
  ): void;
  public deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelGroupCommandOutput) => void
  ): void;
  public deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLabelGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteLabelGroupCommandOutput) => void
  ): Promise<DeleteLabelGroupCommandOutput> | void {
    const command = new DeleteLabelGroupCommand(args);
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
   * <p>Deletes an ML model currently available for Amazon Lookout for Equipment. This will
   *          prevent it from being used with an inference scheduler, even one that is already set up.
   *       </p>
   */
  public deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  public deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelCommandOutput) => void
  ): Promise<DeleteModelCommandOutput> | void {
    const command = new DeleteModelCommand(args);
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
   * <p>Provides information on a specific data ingestion job such as creation time, dataset
   *          ARN, and status.</p>
   */
  public describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataIngestionJobCommandOutput>;
  public describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void
  ): void;
  public describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void
  ): void;
  public describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataIngestionJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void
  ): Promise<DescribeDataIngestionJobCommandOutput> | void {
    const command = new DescribeDataIngestionJobCommand(args);
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
   * <p>Provides a JSON description of the data in each time series dataset, including names,
   *          column names, and data types.</p>
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
   * <p> Specifies information about the inference scheduler being used, including name, model,
   *          status, and associated metadata </p>
   */
  public describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInferenceSchedulerCommandOutput>;
  public describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void
  ): void;
  public describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void
  ): void;
  public describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void
  ): Promise<DescribeInferenceSchedulerCommandOutput> | void {
    const command = new DescribeInferenceSchedulerCommand(args);
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
   * <p>
   * Returns the name of the label.
   * </p>
   */
  public describeLabel(
    args: DescribeLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelCommandOutput>;
  public describeLabel(
    args: DescribeLabelCommandInput,
    cb: (err: any, data?: DescribeLabelCommandOutput) => void
  ): void;
  public describeLabel(
    args: DescribeLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelCommandOutput) => void
  ): void;
  public describeLabel(
    args: DescribeLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLabelCommandOutput) => void),
    cb?: (err: any, data?: DescribeLabelCommandOutput) => void
  ): Promise<DescribeLabelCommandOutput> | void {
    const command = new DescribeLabelCommand(args);
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
   * <p>
   * Returns information about the label group.
   * </p>
   */
  public describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelGroupCommandOutput>;
  public describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    cb: (err: any, data?: DescribeLabelGroupCommandOutput) => void
  ): void;
  public describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelGroupCommandOutput) => void
  ): void;
  public describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLabelGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeLabelGroupCommandOutput) => void
  ): Promise<DescribeLabelGroupCommandOutput> | void {
    const command = new DescribeLabelGroupCommand(args);
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
   * <p>Provides a JSON containing the overall information about a specific ML model, including
   *          model name and ARN, dataset, training and evaluation information, status, and so on.
   *       </p>
   */
  public describeModel(
    args: DescribeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelCommandOutput>;
  public describeModel(
    args: DescribeModelCommandInput,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;
  public describeModel(
    args: DescribeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;
  public describeModel(
    args: DescribeModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelCommandOutput) => void
  ): Promise<DescribeModelCommandOutput> | void {
    const command = new DescribeModelCommand(args);
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
   * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
   *          of the input data, status, and so on. </p>
   */
  public listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIngestionJobsCommandOutput>;
  public listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void
  ): void;
  public listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void
  ): void;
  public listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataIngestionJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDataIngestionJobsCommandOutput) => void
  ): Promise<ListDataIngestionJobsCommandOutput> | void {
    const command = new ListDataIngestionJobsCommand(args);
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
   * <p>Lists all datasets currently available in your account, filtering on the dataset name.
   *       </p>
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
   * <p> Lists all inference events that have been found for the specified inference scheduler.
   *       </p>
   */
  public listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceEventsCommandOutput>;
  public listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    cb: (err: any, data?: ListInferenceEventsCommandOutput) => void
  ): void;
  public listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceEventsCommandOutput) => void
  ): void;
  public listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInferenceEventsCommandOutput) => void),
    cb?: (err: any, data?: ListInferenceEventsCommandOutput) => void
  ): Promise<ListInferenceEventsCommandOutput> | void {
    const command = new ListInferenceEventsCommand(args);
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
   * <p> Lists all inference executions that have been performed by the specified inference
   *          scheduler. </p>
   */
  public listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceExecutionsCommandOutput>;
  public listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void
  ): void;
  public listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void
  ): void;
  public listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInferenceExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListInferenceExecutionsCommandOutput) => void
  ): Promise<ListInferenceExecutionsCommandOutput> | void {
    const command = new ListInferenceExecutionsCommand(args);
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
   * <p>Retrieves a list of all inference schedulers currently available for your account.
   *       </p>
   */
  public listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceSchedulersCommandOutput>;
  public listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void
  ): void;
  public listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void
  ): void;
  public listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInferenceSchedulersCommandOutput) => void),
    cb?: (err: any, data?: ListInferenceSchedulersCommandOutput) => void
  ): Promise<ListInferenceSchedulersCommandOutput> | void {
    const command = new ListInferenceSchedulersCommand(args);
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
   * <p>
   * Returns a list of the label groups.
   * </p>
   */
  public listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelGroupsCommandOutput>;
  public listLabelGroups(
    args: ListLabelGroupsCommandInput,
    cb: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): void;
  public listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): void;
  public listLabelGroups(
    args: ListLabelGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLabelGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): Promise<ListLabelGroupsCommandOutput> | void {
    const command = new ListLabelGroupsCommand(args);
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
   * <p>
   * Provides a list of labels.
   * </p>
   */
  public listLabels(args: ListLabelsCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelsCommandOutput>;
  public listLabels(args: ListLabelsCommandInput, cb: (err: any, data?: ListLabelsCommandOutput) => void): void;
  public listLabels(
    args: ListLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelsCommandOutput) => void
  ): void;
  public listLabels(
    args: ListLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLabelsCommandOutput) => void),
    cb?: (err: any, data?: ListLabelsCommandOutput) => void
  ): Promise<ListLabelsCommandOutput> | void {
    const command = new ListLabelsCommand(args);
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
   * <p>Generates a list of all models in the account, including model name and ARN, dataset,
   *          and status. </p>
   */
  public listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
  public listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
  public listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;
  public listModels(
    args: ListModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListModelsCommandOutput) => void),
    cb?: (err: any, data?: ListModelsCommandOutput) => void
  ): Promise<ListModelsCommandOutput> | void {
    const command = new ListModelsCommand(args);
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
   * <p> Lists statistics about the data collected for each of the sensors that have been
   *          successfully ingested in the particular dataset. Can also be used to retreive Sensor
   *          Statistics for a previous ingestion job. </p>
   */
  public listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSensorStatisticsCommandOutput>;
  public listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    cb: (err: any, data?: ListSensorStatisticsCommandOutput) => void
  ): void;
  public listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSensorStatisticsCommandOutput) => void
  ): void;
  public listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSensorStatisticsCommandOutput) => void),
    cb?: (err: any, data?: ListSensorStatisticsCommandOutput) => void
  ): Promise<ListSensorStatisticsCommandOutput> | void {
    const command = new ListSensorStatisticsCommand(args);
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
   * <p>Lists all the tags for a specified resource, including key and value. </p>
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
   * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
   *       </p>
   */
  public startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataIngestionJobCommandOutput>;
  public startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void
  ): void;
  public startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void
  ): void;
  public startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDataIngestionJobCommandOutput) => void),
    cb?: (err: any, data?: StartDataIngestionJobCommandOutput) => void
  ): Promise<StartDataIngestionJobCommandOutput> | void {
    const command = new StartDataIngestionJobCommand(args);
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
   * <p>Starts an inference scheduler. </p>
   */
  public startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInferenceSchedulerCommandOutput>;
  public startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void
  ): void;
  public startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void
  ): void;
  public startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: StartInferenceSchedulerCommandOutput) => void
  ): Promise<StartInferenceSchedulerCommandOutput> | void {
    const command = new StartInferenceSchedulerCommand(args);
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
   * <p>Stops an inference scheduler. </p>
   */
  public stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInferenceSchedulerCommandOutput>;
  public stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void
  ): void;
  public stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void
  ): void;
  public stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: StopInferenceSchedulerCommandOutput) => void
  ): Promise<StopInferenceSchedulerCommandOutput> | void {
    const command = new StopInferenceSchedulerCommand(args);
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
   * <p>Associates a given tag to a resource in your account. A tag is a key-value pair which
   *          can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for
   *          organizing your resources as well as helping you to search and filter by tag. Multiple tags
   *          can be added to a resource, either when you create it, or later. Up to 50 tags can be
   *          associated with each resource. </p>
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
   * <p>Removes a specific tag from a given resource. The tag is specified by its key. </p>
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
   * <p>Updates an inference scheduler. </p>
   */
  public updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInferenceSchedulerCommandOutput>;
  public updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void
  ): void;
  public updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void
  ): void;
  public updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInferenceSchedulerCommandOutput) => void),
    cb?: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void
  ): Promise<UpdateInferenceSchedulerCommandOutput> | void {
    const command = new UpdateInferenceSchedulerCommand(args);
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
   * <p>
   * Updates the label group.
   * </p>
   */
  public updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLabelGroupCommandOutput>;
  public updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    cb: (err: any, data?: UpdateLabelGroupCommandOutput) => void
  ): void;
  public updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLabelGroupCommandOutput) => void
  ): void;
  public updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLabelGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateLabelGroupCommandOutput) => void
  ): Promise<UpdateLabelGroupCommandOutput> | void {
    const command = new UpdateLabelGroupCommand(args);
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
