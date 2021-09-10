import { LookoutEquipmentClient } from "./LookoutEquipmentClient";
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
  ListInferenceExecutionsCommand,
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "./commands/ListInferenceExecutionsCommand";
import {
  ListInferenceSchedulersCommand,
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "./commands/ListInferenceSchedulersCommand";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
   * <p>Creates an ML model for data inference. </p>
   *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
   *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
   *          behavior that could be potential equipment failure (or maintenance events). The models are
   *          made by analyzing normal data and abnormalities in machine behavior that have already
   *          occurred.</p>
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
   * <p>Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from
   *          being used with an inference scheduler, even one that is already set up. </p>
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
   *          ARN, status, and so on. </p>
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
   * <p>Provides a JSON description of the data that is in each time series dataset, including names, column names, and data types.</p>
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
   * <p>Provides a JSON containing the overall information about a specific ML model, including model name and ARN,
   *          dataset, training and evaluation information, status, and so on. </p>
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
   * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. </p>
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
   *          can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your
   *          resources as well as helping you to search and filter by tag. Multiple tags can be added to
   *          a resource, either when you create it, or later. Up to 50 tags can be associated with each
   *          resource. </p>
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
}
