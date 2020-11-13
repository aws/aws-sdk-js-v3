import { DataBrewClient } from "./DataBrewClient";
import {
  BatchDeleteRecipeVersionCommand,
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "./commands/BatchDeleteRecipeVersionCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateProfileJobCommand,
  CreateProfileJobCommandInput,
  CreateProfileJobCommandOutput,
} from "./commands/CreateProfileJobCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateRecipeCommand,
  CreateRecipeCommandInput,
  CreateRecipeCommandOutput,
} from "./commands/CreateRecipeCommand";
import {
  CreateRecipeJobCommand,
  CreateRecipeJobCommandInput,
  CreateRecipeJobCommandOutput,
} from "./commands/CreateRecipeJobCommand";
import {
  CreateScheduleCommand,
  CreateScheduleCommandInput,
  CreateScheduleCommandOutput,
} from "./commands/CreateScheduleCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteRecipeVersionCommand,
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "./commands/DeleteRecipeVersionCommand";
import {
  DeleteScheduleCommand,
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput,
} from "./commands/DeleteScheduleCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DescribeRecipeCommand,
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
} from "./commands/DescribeRecipeCommand";
import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
} from "./commands/DescribeScheduleCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListRecipeVersionsCommand,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "./commands/ListRecipeVersionsCommand";
import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import {
  ListSchedulesCommand,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput,
} from "./commands/ListSchedulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PublishRecipeCommand,
  PublishRecipeCommandInput,
  PublishRecipeCommandOutput,
} from "./commands/PublishRecipeCommand";
import {
  SendProjectSessionActionCommand,
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
} from "./commands/SendProjectSessionActionCommand";
import { StartJobRunCommand, StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartProjectSessionCommand,
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
} from "./commands/StartProjectSessionCommand";
import { StopJobRunCommand, StopJobRunCommandInput, StopJobRunCommandOutput } from "./commands/StopJobRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatasetCommand,
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
} from "./commands/UpdateDatasetCommand";
import {
  UpdateProfileJobCommand,
  UpdateProfileJobCommandInput,
  UpdateProfileJobCommandOutput,
} from "./commands/UpdateProfileJobCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateRecipeCommand,
  UpdateRecipeCommandInput,
  UpdateRecipeCommandOutput,
} from "./commands/UpdateRecipeCommand";
import {
  UpdateRecipeJobCommand,
  UpdateRecipeJobCommandInput,
  UpdateRecipeJobCommandOutput,
} from "./commands/UpdateRecipeJobCommand";
import {
  UpdateScheduleCommand,
  UpdateScheduleCommandInput,
  UpdateScheduleCommandOutput,
} from "./commands/UpdateScheduleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export class DataBrew extends DataBrewClient {
  /**
   * <p>Deletes one or more versions of a recipe at a time.</p>
   */
  public batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteRecipeVersionCommandOutput>;
  public batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void
  ): void;
  public batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void
  ): void;
  public batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void
  ): Promise<BatchDeleteRecipeVersionCommandOutput> | void {
    const command = new BatchDeleteRecipeVersionCommand(args);
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
   * <p>Creates a new AWS Glue DataBrew dataset for this AWS account.</p>
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
   * <p>Creates a new job to profile an AWS Glue DataBrew dataset that exists in the current AWS
   *             account.</p>
   */
  public createProfileJob(
    args: CreateProfileJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileJobCommandOutput>;
  public createProfileJob(
    args: CreateProfileJobCommandInput,
    cb: (err: any, data?: CreateProfileJobCommandOutput) => void
  ): void;
  public createProfileJob(
    args: CreateProfileJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileJobCommandOutput) => void
  ): void;
  public createProfileJob(
    args: CreateProfileJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProfileJobCommandOutput) => void),
    cb?: (err: any, data?: CreateProfileJobCommandOutput) => void
  ): Promise<CreateProfileJobCommandOutput> | void {
    const command = new CreateProfileJobCommand(args);
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
   * <p>Creates a new AWS Glue DataBrew project in the current AWS account.</p>
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
   * <p>Creates a new AWS Glue DataBrew recipe for the current AWS account.</p>
   */
  public createRecipe(
    args: CreateRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecipeCommandOutput>;
  public createRecipe(args: CreateRecipeCommandInput, cb: (err: any, data?: CreateRecipeCommandOutput) => void): void;
  public createRecipe(
    args: CreateRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecipeCommandOutput) => void
  ): void;
  public createRecipe(
    args: CreateRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRecipeCommandOutput) => void),
    cb?: (err: any, data?: CreateRecipeCommandOutput) => void
  ): Promise<CreateRecipeCommandOutput> | void {
    const command = new CreateRecipeCommand(args);
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
   * <p>Creates a new job for an existing AWS Glue DataBrew recipe in the current AWS account.
   *             You can create a standalone job using either a project, or a combination of a recipe and
   *             a dataset.</p>
   */
  public createRecipeJob(
    args: CreateRecipeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecipeJobCommandOutput>;
  public createRecipeJob(
    args: CreateRecipeJobCommandInput,
    cb: (err: any, data?: CreateRecipeJobCommandOutput) => void
  ): void;
  public createRecipeJob(
    args: CreateRecipeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecipeJobCommandOutput) => void
  ): void;
  public createRecipeJob(
    args: CreateRecipeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRecipeJobCommandOutput) => void),
    cb?: (err: any, data?: CreateRecipeJobCommandOutput) => void
  ): Promise<CreateRecipeJobCommandOutput> | void {
    const command = new CreateRecipeJobCommand(args);
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
   * <p>Creates a new schedule for one or more AWS Glue DataBrew jobs. Jobs can be run at a
   *             specific date and time, or at regular intervals.</p>
   */
  public createSchedule(
    args: CreateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleCommandOutput>;
  public createSchedule(
    args: CreateScheduleCommandInput,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;
  public createSchedule(
    args: CreateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
  ): void;
  public createSchedule(
    args: CreateScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduleCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduleCommandOutput) => void
  ): Promise<CreateScheduleCommandOutput> | void {
    const command = new CreateScheduleCommand(args);
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
   * <p>Deletes a dataset from AWS Glue DataBrew.</p>
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
   * <p>Deletes the specified AWS Glue DataBrew job from the current AWS account. The job can
   *             be for a recipe or for a profile.</p>
   */
  public deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  public deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobCommandOutput) => void
  ): Promise<DeleteJobCommandOutput> | void {
    const command = new DeleteJobCommand(args);
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
   * <p>Deletes an existing AWS Glue DataBrew project from the current AWS account.</p>
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
   * <p>Deletes a single version of an AWS Glue DataBrew recipe.</p>
   */
  public deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecipeVersionCommandOutput>;
  public deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void
  ): void;
  public deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void
  ): void;
  public deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecipeVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecipeVersionCommandOutput) => void
  ): Promise<DeleteRecipeVersionCommandOutput> | void {
    const command = new DeleteRecipeVersionCommand(args);
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
   * <p>Deletes the specified AWS Glue DataBrew schedule from the current AWS account.</p>
   */
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;
  public deleteSchedule(
    args: DeleteScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): Promise<DeleteScheduleCommandOutput> | void {
    const command = new DeleteScheduleCommand(args);
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
   * <p>Returns the definition of a specific AWS Glue DataBrew dataset that is in the current
   *             AWS account.</p>
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
   * <p>Returns the definition of a specific AWS Glue DataBrew job that is in the current AWS
   *             account.</p>
   */
  public describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  public describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  public describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobCommandOutput) => void
  ): Promise<DescribeJobCommandOutput> | void {
    const command = new DescribeJobCommand(args);
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
   * <p>Returns the definition of a specific AWS Glue DataBrew project that is in the current
   *             AWS account.</p>
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
   * <p>Returns the definition of a specific AWS Glue DataBrew recipe that is in the current
   *             AWS account.</p>
   */
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecipeCommandOutput>;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;
  public describeRecipe(
    args: DescribeRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecipeCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): Promise<DescribeRecipeCommandOutput> | void {
    const command = new DescribeRecipeCommand(args);
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
   * <p>Returns the definition of a specific AWS Glue DataBrew schedule that is in the current
   *             AWS account.</p>
   */
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduleCommandOutput>;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  public describeSchedule(
    args: DescribeScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduleCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): Promise<DescribeScheduleCommandOutput> | void {
    const command = new DescribeScheduleCommand(args);
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
   * <p>Lists all of the AWS Glue DataBrew datasets for the current AWS account.</p>
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
   * <p>Lists all of the previous runs of a particular AWS Glue DataBrew job in the current
   *             AWS account.</p>
   */
  public listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  public listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobRunsCommandOutput) => void),
    cb?: (err: any, data?: ListJobRunsCommandOutput) => void
  ): Promise<ListJobRunsCommandOutput> | void {
    const command = new ListJobRunsCommand(args);
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
   * <p>Lists the AWS Glue DataBrew jobs in the current AWS account.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>Lists all of the DataBrew projects in the current AWS account.</p>
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
   * <p>Lists all of the AWS Glue DataBrew recipes in the current AWS account.</p>
   */
  public listRecipes(args: ListRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipesCommandOutput>;
  public listRecipes(args: ListRecipesCommandInput, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;
  public listRecipes(
    args: ListRecipesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecipesCommandOutput) => void),
    cb?: (err: any, data?: ListRecipesCommandOutput) => void
  ): Promise<ListRecipesCommandOutput> | void {
    const command = new ListRecipesCommand(args);
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
   * <p>Lists all of the versions of a particular AWS Glue DataBrew recipe in the current AWS
   *             account.</p>
   */
  public listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecipeVersionsCommandOutput>;
  public listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void
  ): void;
  public listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void
  ): void;
  public listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecipeVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListRecipeVersionsCommandOutput) => void
  ): Promise<ListRecipeVersionsCommandOutput> | void {
    const command = new ListRecipeVersionsCommand(args);
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
   * <p>Lists the AWS Glue DataBrew schedules in the current AWS account.</p>
   */
  public listSchedules(
    args: ListSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchedulesCommandOutput>;
  public listSchedules(
    args: ListSchedulesCommandInput,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;
  public listSchedules(
    args: ListSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
  ): void;
  public listSchedules(
    args: ListSchedulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchedulesCommandOutput) => void),
    cb?: (err: any, data?: ListSchedulesCommandOutput) => void
  ): Promise<ListSchedulesCommandOutput> | void {
    const command = new ListSchedulesCommand(args);
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
   * <p>Lists all the tags for an AWS Glue DataBrew resource. </p>
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
   * <p>Publishes a new major version of an AWS Glue DataBrew recipe that exists in the
   *             current AWS account.</p>
   */
  public publishRecipe(
    args: PublishRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishRecipeCommandOutput>;
  public publishRecipe(
    args: PublishRecipeCommandInput,
    cb: (err: any, data?: PublishRecipeCommandOutput) => void
  ): void;
  public publishRecipe(
    args: PublishRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishRecipeCommandOutput) => void
  ): void;
  public publishRecipe(
    args: PublishRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishRecipeCommandOutput) => void),
    cb?: (err: any, data?: PublishRecipeCommandOutput) => void
  ): Promise<PublishRecipeCommandOutput> | void {
    const command = new PublishRecipeCommand(args);
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
   * <p>Performs a recipe step within an interactive AWS Glue DataBrew session that's
   *             currently open.</p>
   */
  public sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendProjectSessionActionCommandOutput>;
  public sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void
  ): void;
  public sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void
  ): void;
  public sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendProjectSessionActionCommandOutput) => void),
    cb?: (err: any, data?: SendProjectSessionActionCommandOutput) => void
  ): Promise<SendProjectSessionActionCommandOutput> | void {
    const command = new SendProjectSessionActionCommand(args);
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
   * <p>Runs an AWS Glue DataBrew job that exists in the current AWS account.</p>
   */
  public startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  public startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobRunCommandOutput) => void),
    cb?: (err: any, data?: StartJobRunCommandOutput) => void
  ): Promise<StartJobRunCommandOutput> | void {
    const command = new StartJobRunCommand(args);
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
   * <p>Creates an interactive session, enabling you to manipulate an AWS Glue DataBrew
   *             project.</p>
   */
  public startProjectSession(
    args: StartProjectSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProjectSessionCommandOutput>;
  public startProjectSession(
    args: StartProjectSessionCommandInput,
    cb: (err: any, data?: StartProjectSessionCommandOutput) => void
  ): void;
  public startProjectSession(
    args: StartProjectSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProjectSessionCommandOutput) => void
  ): void;
  public startProjectSession(
    args: StartProjectSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartProjectSessionCommandOutput) => void),
    cb?: (err: any, data?: StartProjectSessionCommandOutput) => void
  ): Promise<StartProjectSessionCommandOutput> | void {
    const command = new StartProjectSessionCommand(args);
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
   * <p>Stops the specified job from running in the current AWS account.</p>
   */
  public stopJobRun(args: StopJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StopJobRunCommandOutput>;
  public stopJobRun(args: StopJobRunCommandInput, cb: (err: any, data?: StopJobRunCommandOutput) => void): void;
  public stopJobRun(
    args: StopJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobRunCommandOutput) => void
  ): void;
  public stopJobRun(
    args: StopJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopJobRunCommandOutput) => void),
    cb?: (err: any, data?: StopJobRunCommandOutput) => void
  ): Promise<StopJobRunCommandOutput> | void {
    const command = new StopJobRunCommand(args);
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
   * <p>Adds metadata tags to an AWS Glue DataBrew resource, such as a dataset, job, project,
   *             or recipe.</p>
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
   * <p>Removes metadata tags from an AWS Glue DataBrew resource.</p>
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
   * <p>Modifies the definition of an existing AWS Glue DataBrew dataset in the current AWS
   *             account.</p>
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
   * <p>Modifies the definition of an existing AWS Glue DataBrew job in the current AWS
   *             account.</p>
   */
  public updateProfileJob(
    args: UpdateProfileJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileJobCommandOutput>;
  public updateProfileJob(
    args: UpdateProfileJobCommandInput,
    cb: (err: any, data?: UpdateProfileJobCommandOutput) => void
  ): void;
  public updateProfileJob(
    args: UpdateProfileJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileJobCommandOutput) => void
  ): void;
  public updateProfileJob(
    args: UpdateProfileJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProfileJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfileJobCommandOutput) => void
  ): Promise<UpdateProfileJobCommandOutput> | void {
    const command = new UpdateProfileJobCommand(args);
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
   * <p>Modifies the definition of an existing AWS Glue DataBrew project in the current AWS
   *             account.</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
   * <p>Modifies the definition of the latest working version of an AWS Glue DataBrew recipe
   *             in the current AWS account.</p>
   */
  public updateRecipe(
    args: UpdateRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecipeCommandOutput>;
  public updateRecipe(args: UpdateRecipeCommandInput, cb: (err: any, data?: UpdateRecipeCommandOutput) => void): void;
  public updateRecipe(
    args: UpdateRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecipeCommandOutput) => void
  ): void;
  public updateRecipe(
    args: UpdateRecipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecipeCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecipeCommandOutput) => void
  ): Promise<UpdateRecipeCommandOutput> | void {
    const command = new UpdateRecipeCommand(args);
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
   * <p>Modifies the definition of an existing AWS Glue DataBrew recipe job in the current AWS
   *             account.</p>
   */
  public updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecipeJobCommandOutput>;
  public updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void
  ): void;
  public updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void
  ): void;
  public updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecipeJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecipeJobCommandOutput) => void
  ): Promise<UpdateRecipeJobCommandOutput> | void {
    const command = new UpdateRecipeJobCommand(args);
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
   * <p>Modifies the definition of an existing AWS Glue DataBrew schedule in the current AWS
   *             account.</p>
   */
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduleCommandOutput>;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
  public updateSchedule(
    args: UpdateScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): Promise<UpdateScheduleCommandOutput> | void {
    const command = new UpdateScheduleCommand(args);
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
