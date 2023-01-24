// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  CreateRulesetCommand,
  CreateRulesetCommandInput,
  CreateRulesetCommandOutput,
} from "./commands/CreateRulesetCommand";
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
  DeleteRulesetCommand,
  DeleteRulesetCommandInput,
  DeleteRulesetCommandOutput,
} from "./commands/DeleteRulesetCommand";
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
  DescribeJobRunCommand,
  DescribeJobRunCommandInput,
  DescribeJobRunCommandOutput,
} from "./commands/DescribeJobRunCommand";
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
  DescribeRulesetCommand,
  DescribeRulesetCommandInput,
  DescribeRulesetCommandOutput,
} from "./commands/DescribeRulesetCommand";
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
import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import {
  ListRecipeVersionsCommand,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "./commands/ListRecipeVersionsCommand";
import {
  ListRulesetsCommand,
  ListRulesetsCommandInput,
  ListRulesetsCommandOutput,
} from "./commands/ListRulesetsCommand";
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
  UpdateRulesetCommand,
  UpdateRulesetCommandInput,
  UpdateRulesetCommandOutput,
} from "./commands/UpdateRulesetCommand";
import {
  UpdateScheduleCommand,
  UpdateScheduleCommandInput,
  UpdateScheduleCommandOutput,
} from "./commands/UpdateScheduleCommand";
import { DataBrewClient } from "./DataBrewClient";

/**
 * <p>Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export class DataBrew extends DataBrewClient {
  /**
   * <p>Deletes one or more versions of a recipe at a time.</p>
   *          <p>The entire request will be rejected if:</p>
   *          <ul>
   *             <li>
   *                <p>The recipe does not exist.</p>
   *             </li>
   *             <li>
   *                <p>There is an invalid version identifier in the list of versions.</p>
   *             </li>
   *             <li>
   *                <p>The version list is empty.</p>
   *             </li>
   *             <li>
   *                <p>The version list size exceeds 50.</p>
   *             </li>
   *             <li>
   *                <p>The version list contains duplicate entries.</p>
   *             </li>
   *          </ul>
   *          <p>The request will complete successfully, but with partial failures, if:</p>
   *          <ul>
   *             <li>
   *                <p>A version does not exist.</p>
   *             </li>
   *             <li>
   *                <p>A version is being used by a job.</p>
   *             </li>
   *             <li>
   *                <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
   *                     project.</p>
   *             </li>
   *             <li>
   *                <p>The version fails to be deleted.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
   *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
   *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
   *             partial failure in the response.</p>
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
   * <p>Creates a new DataBrew dataset.</p>
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
   * <p>Creates a new job to analyze a dataset and create its data profile.</p>
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
   * <p>Creates a new DataBrew project.</p>
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
   * <p>Creates a new DataBrew recipe.</p>
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
   * <p>Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe</p>
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
   * <p>Creates a new ruleset that can be used in a profile job to validate
   *             the data quality of a dataset.</p>
   */
  public createRuleset(
    args: CreateRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRulesetCommandOutput>;
  public createRuleset(
    args: CreateRulesetCommandInput,
    cb: (err: any, data?: CreateRulesetCommandOutput) => void
  ): void;
  public createRuleset(
    args: CreateRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRulesetCommandOutput) => void
  ): void;
  public createRuleset(
    args: CreateRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRulesetCommandOutput) => void),
    cb?: (err: any, data?: CreateRulesetCommandOutput) => void
  ): Promise<CreateRulesetCommandOutput> | void {
    const command = new CreateRulesetCommand(args);
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
   * <p>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific
   *             date and time, or at regular intervals.</p>
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
   * <p>Deletes a dataset from DataBrew.</p>
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
   * <p>Deletes the specified DataBrew job.</p>
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
   * <p>Deletes an existing DataBrew project.</p>
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
   * <p>Deletes a single version of a DataBrew recipe.</p>
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
   * <p>Deletes a ruleset.</p>
   */
  public deleteRuleset(
    args: DeleteRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRulesetCommandOutput>;
  public deleteRuleset(
    args: DeleteRulesetCommandInput,
    cb: (err: any, data?: DeleteRulesetCommandOutput) => void
  ): void;
  public deleteRuleset(
    args: DeleteRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRulesetCommandOutput) => void
  ): void;
  public deleteRuleset(
    args: DeleteRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRulesetCommandOutput) => void),
    cb?: (err: any, data?: DeleteRulesetCommandOutput) => void
  ): Promise<DeleteRulesetCommandOutput> | void {
    const command = new DeleteRulesetCommand(args);
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
   * <p>Deletes the specified DataBrew schedule.</p>
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
   * <p>Returns the definition of a specific DataBrew dataset.</p>
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
   * <p>Returns the definition of a specific DataBrew job.</p>
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
   * <p>Represents one run of a DataBrew job.</p>
   */
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobRunCommandOutput>;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;
  public describeJobRun(
    args: DescribeJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobRunCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): Promise<DescribeJobRunCommandOutput> | void {
    const command = new DescribeJobRunCommand(args);
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
   * <p>Returns the definition of a specific DataBrew project.</p>
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
   * <p>Returns the definition of a specific DataBrew recipe corresponding to a particular
   *             version.</p>
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
   * <p>Retrieves detailed information about the ruleset.</p>
   */
  public describeRuleset(
    args: DescribeRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRulesetCommandOutput>;
  public describeRuleset(
    args: DescribeRulesetCommandInput,
    cb: (err: any, data?: DescribeRulesetCommandOutput) => void
  ): void;
  public describeRuleset(
    args: DescribeRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesetCommandOutput) => void
  ): void;
  public describeRuleset(
    args: DescribeRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRulesetCommandOutput) => void),
    cb?: (err: any, data?: DescribeRulesetCommandOutput) => void
  ): Promise<DescribeRulesetCommandOutput> | void {
    const command = new DescribeRulesetCommand(args);
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
   * <p>Returns the definition of a specific DataBrew schedule.</p>
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
   * <p>Lists all of the DataBrew datasets.</p>
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
   * <p>Lists all of the previous runs of a particular DataBrew job.</p>
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
   * <p>Lists all of the DataBrew jobs that are defined.</p>
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
   * <p>Lists all of the DataBrew projects that are defined.</p>
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
   * <p>Lists all of the DataBrew recipes that are defined.</p>
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
   * <p>Lists the versions of a particular DataBrew recipe, except for
   *                 <code>LATEST_WORKING</code>.</p>
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
   * <p>List all rulesets available in the current account or rulesets associated
   *             with a specific resource (dataset).</p>
   */
  public listRulesets(
    args: ListRulesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesetsCommandOutput>;
  public listRulesets(args: ListRulesetsCommandInput, cb: (err: any, data?: ListRulesetsCommandOutput) => void): void;
  public listRulesets(
    args: ListRulesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesetsCommandOutput) => void
  ): void;
  public listRulesets(
    args: ListRulesetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesetsCommandOutput) => void),
    cb?: (err: any, data?: ListRulesetsCommandOutput) => void
  ): Promise<ListRulesetsCommandOutput> | void {
    const command = new ListRulesetsCommand(args);
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
   * <p>Lists the DataBrew schedules that are defined.</p>
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
   * <p>Lists all the tags for a DataBrew resource. </p>
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
   * <p>Publishes a new version of a DataBrew recipe.</p>
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
   * <p>Performs a recipe step within an interactive DataBrew session that's currently
   *             open.</p>
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
   * <p>Runs a DataBrew job.</p>
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
   * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
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
   * <p>Stops a particular run of a job.</p>
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
   * <p>Adds metadata tags to a DataBrew resource, such as a dataset, project, recipe, job, or
   *             schedule.</p>
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
   * <p>Removes metadata tags from a DataBrew resource.</p>
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
   * <p>Modifies the definition of an existing DataBrew dataset.</p>
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
   * <p>Modifies the definition of an existing profile job.</p>
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
   * <p>Modifies the definition of an existing DataBrew project.</p>
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
   * <p>Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew
   *             recipe.</p>
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
   * <p>Modifies the definition of an existing DataBrew recipe job.</p>
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
   * <p>Updates specified ruleset.</p>
   */
  public updateRuleset(
    args: UpdateRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRulesetCommandOutput>;
  public updateRuleset(
    args: UpdateRulesetCommandInput,
    cb: (err: any, data?: UpdateRulesetCommandOutput) => void
  ): void;
  public updateRuleset(
    args: UpdateRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRulesetCommandOutput) => void
  ): void;
  public updateRuleset(
    args: UpdateRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRulesetCommandOutput) => void),
    cb?: (err: any, data?: UpdateRulesetCommandOutput) => void
  ): Promise<UpdateRulesetCommandOutput> | void {
    const command = new UpdateRulesetCommand(args);
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
   * <p>Modifies the definition of an existing DataBrew schedule.</p>
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
