import { LookoutVisionClient } from "./LookoutVisionClient";
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
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import { StartModelCommand, StartModelCommandInput, StartModelCommandOutput } from "./commands/StartModelCommand";
import { StopModelCommand, StopModelCommandInput, StopModelCommandOutput } from "./commands/StopModelCommand";
import {
  UpdateDatasetEntriesCommand,
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
   *            <code>DatasetType</code>.
   *
   *          of dataset with </p>
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
   *          <p>It might take a while to delete the dataset. To check the current status, check the <code>Status</code> field
   *       in the response from a call to <a>DescribeDataset</a>. </p>
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
   *          <p>The training and test datasets are deleted automatically for you.
   *          The images referenced by the training and test datasets aren't deleted. </p>
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
   * <p>Describes an Amazon Lookout for Vision project.</p>
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
   *          that the image contains one or more anomalies and a confidence value for the prediction.</p>
   *          <note>
   *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
   *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
   *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
   *          </note>
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
   * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p>
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
   * <p>Lists the Amazon Lookout for Vision projects in your AWS account.</p>
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
   * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
   *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
   *          <p>Once the model is running, you can detect custom labels in new images by calling
   *          <a>DetectAnomalies</a>.</p>
   *          <note>
   *             <p>You are charged for the amount of time that the model is running. To stop a running
   *          model, call <a>StopModel</a>.</p>
   *          </note>
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
   * <p>Stops a running model. The operation might take a while to complete. To
   *          check the current status, call <a>DescribeModel</a>. </p>
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
   * <p>Adds one or more JSON Line entries to a dataset. A JSON Line includes information about an image
   *          used for training or testing an Amazon Lookout for Vision model. The following is an example JSON Line.</p>
   *
   *
   *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
   *          check the <code>Status</code> field in the response.</p>
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
