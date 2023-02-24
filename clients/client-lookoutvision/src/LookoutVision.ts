// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeModelCommand,
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
} from "./commands/DescribeModelCommand";
import {
  DescribeModelPackagingJobCommand,
  DescribeModelPackagingJobCommandInput,
  DescribeModelPackagingJobCommandOutput,
} from "./commands/DescribeModelPackagingJobCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DetectAnomaliesCommand,
  DetectAnomaliesCommandInput,
  DetectAnomaliesCommandOutput,
} from "./commands/DetectAnomaliesCommand";
import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "./commands/ListDatasetEntriesCommand";
import {
  ListModelPackagingJobsCommand,
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput,
} from "./commands/ListModelPackagingJobsCommand";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartModelCommand, StartModelCommandInput, StartModelCommandOutput } from "./commands/StartModelCommand";
import {
  StartModelPackagingJobCommand,
  StartModelPackagingJobCommandInput,
  StartModelPackagingJobCommandOutput,
} from "./commands/StartModelPackagingJobCommand";
import { StopModelCommand, StopModelCommandInput, StopModelCommandOutput } from "./commands/StopModelCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatasetEntriesCommand,
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand";
import { LookoutVisionClient } from "./LookoutVisionClient";

/**
 * <p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions,
 *       data types, common parameters, and common errors.</p>
 *          <p>Amazon Lookout for Vision enables you to find visual defects in industrial products,
 *          accurately and at scale. It uses computer vision to identify missing components in an industrial product,
 *          damage to vehicles or structures, irregularities in production lines, and even minuscule defects in
 *          silicon wafers — or any other physical item where quality is important such as a missing capacitor
 *          on printed circuit boards.</p>
 */
export class LookoutVision extends LookoutVisionClient {
  /**
   * <p>Creates a new dataset  in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a
   *       training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p>
   *          <p>If you want a single dataset project, specify <code>train</code> for the value of
   *          <code>DatasetType</code>.</p>
   *         <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice.
   *            On the first call, specify <code>train</code> for the value of
   *            <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of
   *            <code>DatasetType</code>. </p>
   *         <p>This operation requires permissions to perform the
   *            <code>lookoutvision:CreateDataset</code> operation.</p>
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
   * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
   *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
   *        and evaluates a new version of a model. </p>
   *          <p>To get the current status, check the <code>Status</code> field returned
   *       in the response from <a>DescribeModel</a>.</p>
   *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
   *        to create a training and a test dataset.
   *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
   *        the model. </p>
   *          <p>After training completes, the evaluation metrics are stored at the location specified in
   *         <code>OutputConfig</code>.  </p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
   *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
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
   * <p>Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling
   *          <a>CreateDataset</a>.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:CreateProject</code> operation.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p>
   *          <p>If your the project has a single
   *       dataset, you must create a new dataset before you can create a model.</p>
   *          <p>If you project has a training dataset and a test dataset consider the following. </p>
   *          <ul>
   *             <li>
   *                <p>If you delete the test dataset, your project reverts to a single dataset project. If you then
   *       train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p>
   *             </li>
   *             <li>
   *                <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p>
   *             </li>
   *          </ul>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DeleteDataset</code> operation.</p>
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
   * <p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model,
   *       use the <a>StopModel</a> operation.</p>
   *          <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call
   *          <a>ListModels</a> and check if the version of the model (<code>ModelVersion</code>) is in the
   *          <code>Models</code> array. </p>
   *          <p></p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DeleteModel</code> operation.</p>
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
   * <p>Deletes an Amazon Lookout for Vision project.</p>
   *          <p>To delete a project, you must first delete each version of the model associated with
   *          the project. To delete a model use the <a>DeleteModel</a> operation.</p>
   *          <p>You also have to delete the dataset(s) associated with the model. For more information, see
   *          <a>DeleteDataset</a>.  The images referenced by the training and test datasets aren't deleted.
   *       </p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DeleteProject</code> operation.</p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>Describe an Amazon Lookout for Vision dataset.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DescribeDataset</code> operation.</p>
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
   * <p>Describes a version of an Amazon Lookout for Vision model.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DescribeModel</code> operation.</p>
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
   * <p>Describes an Amazon Lookout for Vision model packaging job.
   * </p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p>
   *
   *          <p>For more information, see
   *          <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
   */
  public describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelPackagingJobCommandOutput>;
  public describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    cb: (err: any, data?: DescribeModelPackagingJobCommandOutput) => void
  ): void;
  public describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelPackagingJobCommandOutput) => void
  ): void;
  public describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeModelPackagingJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeModelPackagingJobCommandOutput) => void
  ): Promise<DescribeModelPackagingJobCommandOutput> | void {
    const command = new DescribeModelPackagingJobCommand(args);
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
   * <p>Describes an Amazon Lookout for Vision project.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DescribeProject</code> operation.</p>
   */
  public describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  public describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeProjectCommandOutput) => void
  ): Promise<DescribeProjectCommandOutput> | void {
    const command = new DescribeProjectCommand(args);
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
   * <p>Detects anomalies in an image that you supply. </p>
   *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
   *          that the image contains one or more anomalies and a confidence value for the prediction.
   *       If the model is an image segmentation model, the response also includes segmentation
   *       information for each type of anomaly found in the image.</p>
   *          <note>
   *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
   *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
   *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
   *          </note>
   *
   *          <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p>
   *
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
   */
  public detectAnomalies(
    args: DetectAnomaliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectAnomaliesCommandOutput>;
  public detectAnomalies(
    args: DetectAnomaliesCommandInput,
    cb: (err: any, data?: DetectAnomaliesCommandOutput) => void
  ): void;
  public detectAnomalies(
    args: DetectAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectAnomaliesCommandOutput) => void
  ): void;
  public detectAnomalies(
    args: DetectAnomaliesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectAnomaliesCommandOutput) => void),
    cb?: (err: any, data?: DetectAnomaliesCommandOutput) => void
  ): Promise<DetectAnomaliesCommandOutput> | void {
    const command = new DetectAnomaliesCommand(args);
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
   * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
   *       information for a single image, including the image location and the assigned label.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
   */
  public listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetEntriesCommandOutput>;
  public listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;
  public listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;
  public listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetEntriesCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): Promise<ListDatasetEntriesCommandOutput> | void {
    const command = new ListDatasetEntriesCommand(args);
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
   * Lists the model packaging jobs created for an Amazon Lookout for Vision project.
   * </p>
   *          <p>This operation requires permissions to perform the
   *     <code>lookoutvision:ListModelPackagingJobs</code> operation.
   * </p>
   *
   *          <p>For more information, see
   *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
   */
  public listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelPackagingJobsCommandOutput>;
  public listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    cb: (err: any, data?: ListModelPackagingJobsCommandOutput) => void
  ): void;
  public listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelPackagingJobsCommandOutput) => void
  ): void;
  public listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListModelPackagingJobsCommandOutput) => void),
    cb?: (err: any, data?: ListModelPackagingJobsCommandOutput) => void
  ): Promise<ListModelPackagingJobsCommandOutput> | void {
    const command = new ListModelPackagingJobsCommand(args);
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
   * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p>
   *          <p>The <code>ListModels</code> operation is eventually consistent.
   *          Recent calls to <code>CreateModel</code> might
   *          take a while to appear in the response from <code>ListProjects</code>.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:ListModels</code> operation.</p>
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
   * <p>Lists the Amazon Lookout for Vision projects in your AWS account that are in the AWS Region in
   *       which you call <code>ListProjects</code>.</p>
   *          <p>The <code>ListProjects</code> operation is eventually consistent.
   *          Recent calls to <code>CreateProject</code> and <code>DeleteProject</code> might
   *          take a while to appear in the response from <code>ListProjects</code>.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:ListProjects</code> operation.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>Returns a list of tags attached to the specified Amazon Lookout for Vision model.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:ListTagsForResource</code> operation.</p>
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
   * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
   *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
   *          <p>A model is ready to use when its status is <code>HOSTED</code>.</p>
   *          <p>Once the model is running, you can detect custom labels in new images by calling
   *          <a>DetectAnomalies</a>.</p>
   *          <note>
   *             <p>You are charged for the amount of time that the model is running. To stop a running
   *          model, call <a>StopModel</a>.</p>
   *          </note>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:StartModel</code> operation.</p>
   */
  public startModel(args: StartModelCommandInput, options?: __HttpHandlerOptions): Promise<StartModelCommandOutput>;
  public startModel(args: StartModelCommandInput, cb: (err: any, data?: StartModelCommandOutput) => void): void;
  public startModel(
    args: StartModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartModelCommandOutput) => void
  ): void;
  public startModel(
    args: StartModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartModelCommandOutput) => void),
    cb?: (err: any, data?: StartModelCommandOutput) => void
  ): Promise<StartModelCommandOutput> | void {
    const command = new StartModelCommand(args);
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
   * <p>Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for
   *    a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass.
   * </p>
   *
   *          <p>Use the <a>DescribeModelPackagingJob</a> API to determine the current status of the job.
   *
   *   The model packaging job is complete if the value of <code>Status</code> is <code>SUCCEEDED</code>.</p>
   *          <p>To deploy the component
   *       to the target device, use the component name and component version
   *       with the AWS IoT Greengrass <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html">CreateDeployment</a> API.</p>
   *
   *          <p>This operation requires the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lookoutvision:StartModelPackagingJob</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:PutObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketLocation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kms:GenerateDataKey</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>greengrass:CreateComponentVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>greengrass:DescribeComponent</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>(Optional) <code>greengrass:TagResource</code>. Only required if you want to tag the component.</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>For more information, see
   *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
   */
  public startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartModelPackagingJobCommandOutput>;
  public startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    cb: (err: any, data?: StartModelPackagingJobCommandOutput) => void
  ): void;
  public startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartModelPackagingJobCommandOutput) => void
  ): void;
  public startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartModelPackagingJobCommandOutput) => void),
    cb?: (err: any, data?: StartModelPackagingJobCommandOutput) => void
  ): Promise<StartModelPackagingJobCommandOutput> | void {
    const command = new StartModelPackagingJobCommand(args);
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
   * <p>Stops the hosting of a running model. The operation might take a while to complete. To
   *          check the current status, call <a>DescribeModel</a>. </p>
   *          <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:StopModel</code> operation.</p>
   */
  public stopModel(args: StopModelCommandInput, options?: __HttpHandlerOptions): Promise<StopModelCommandOutput>;
  public stopModel(args: StopModelCommandInput, cb: (err: any, data?: StopModelCommandOutput) => void): void;
  public stopModel(
    args: StopModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopModelCommandOutput) => void
  ): void;
  public stopModel(
    args: StopModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopModelCommandOutput) => void),
    cb?: (err: any, data?: StopModelCommandOutput) => void
  ): Promise<StopModelCommandOutput> | void {
    const command = new StopModelCommand(args);
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
   * <p>Adds one or more key-value tags to an Amazon Lookout for Vision model.
   *          For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:TagResource</code> operation.</p>
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
   * <p>Removes one or more tags from an Amazon Lookout for Vision model. For more information, see
   *          <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:UntagResource</code> operation.</p>
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
   * <p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image
   *          used for training or testing an Amazon Lookout for Vision model.</p>
   *          <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line
   *          that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset.
   *       </p>
   *
   *
   *          <p>For more information, see
   *          <i>Defining JSON lines for anomaly classification</i> in the  Amazon Lookout for Vision Developer Guide. </p>
   *
   *          <note>
   *             <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be
   *       in the same S3 bucket as the existing images in the dataset. </p>
   *          </note>
   *
   *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
   *          check the <code>Status</code> field in the response.</p>
   *          <p>This operation requires permissions to perform the
   *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
   */
  public updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetEntriesCommandOutput>;
  public updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
  public updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
  public updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatasetEntriesCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): Promise<UpdateDatasetEntriesCommandOutput> | void {
    const command = new UpdateDatasetEntriesCommand(args);
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
