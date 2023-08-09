// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { DataBrewClient, DataBrewClientConfig } from "./DataBrewClient";

const commands = {
  BatchDeleteRecipeVersionCommand,
  CreateDatasetCommand,
  CreateProfileJobCommand,
  CreateProjectCommand,
  CreateRecipeCommand,
  CreateRecipeJobCommand,
  CreateRulesetCommand,
  CreateScheduleCommand,
  DeleteDatasetCommand,
  DeleteJobCommand,
  DeleteProjectCommand,
  DeleteRecipeVersionCommand,
  DeleteRulesetCommand,
  DeleteScheduleCommand,
  DescribeDatasetCommand,
  DescribeJobCommand,
  DescribeJobRunCommand,
  DescribeProjectCommand,
  DescribeRecipeCommand,
  DescribeRulesetCommand,
  DescribeScheduleCommand,
  ListDatasetsCommand,
  ListJobRunsCommand,
  ListJobsCommand,
  ListProjectsCommand,
  ListRecipesCommand,
  ListRecipeVersionsCommand,
  ListRulesetsCommand,
  ListSchedulesCommand,
  ListTagsForResourceCommand,
  PublishRecipeCommand,
  SendProjectSessionActionCommand,
  StartJobRunCommand,
  StartProjectSessionCommand,
  StopJobRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasetCommand,
  UpdateProfileJobCommand,
  UpdateProjectCommand,
  UpdateRecipeCommand,
  UpdateRecipeJobCommand,
  UpdateRulesetCommand,
  UpdateScheduleCommand,
};

export interface DataBrew {
  /**
   * @see {@link BatchDeleteRecipeVersionCommand}
   */
  batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteRecipeVersionCommandOutput>;
  batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void
  ): void;
  batchDeleteRecipeVersion(
    args: BatchDeleteRecipeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void
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
   * @see {@link CreateProfileJobCommand}
   */
  createProfileJob(
    args: CreateProfileJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileJobCommandOutput>;
  createProfileJob(
    args: CreateProfileJobCommandInput,
    cb: (err: any, data?: CreateProfileJobCommandOutput) => void
  ): void;
  createProfileJob(
    args: CreateProfileJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecipeCommand}
   */
  createRecipe(args: CreateRecipeCommandInput, options?: __HttpHandlerOptions): Promise<CreateRecipeCommandOutput>;
  createRecipe(args: CreateRecipeCommandInput, cb: (err: any, data?: CreateRecipeCommandOutput) => void): void;
  createRecipe(
    args: CreateRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecipeJobCommand}
   */
  createRecipeJob(
    args: CreateRecipeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecipeJobCommandOutput>;
  createRecipeJob(args: CreateRecipeJobCommandInput, cb: (err: any, data?: CreateRecipeJobCommandOutput) => void): void;
  createRecipeJob(
    args: CreateRecipeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecipeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRulesetCommand}
   */
  createRuleset(args: CreateRulesetCommandInput, options?: __HttpHandlerOptions): Promise<CreateRulesetCommandOutput>;
  createRuleset(args: CreateRulesetCommandInput, cb: (err: any, data?: CreateRulesetCommandOutput) => void): void;
  createRuleset(
    args: CreateRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduleCommand}
   */
  createSchedule(
    args: CreateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduleCommandOutput>;
  createSchedule(args: CreateScheduleCommandInput, cb: (err: any, data?: CreateScheduleCommandOutput) => void): void;
  createSchedule(
    args: CreateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduleCommandOutput) => void
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
   * @see {@link DeleteJobCommand}
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecipeVersionCommand}
   */
  deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecipeVersionCommandOutput>;
  deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void
  ): void;
  deleteRecipeVersion(
    args: DeleteRecipeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRulesetCommand}
   */
  deleteRuleset(args: DeleteRulesetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRulesetCommandOutput>;
  deleteRuleset(args: DeleteRulesetCommandInput, cb: (err: any, data?: DeleteRulesetCommandOutput) => void): void;
  deleteRuleset(
    args: DeleteRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  deleteSchedule(args: DeleteScheduleCommandInput, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
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
   * @see {@link DescribeJobCommand}
   */
  describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobRunCommand}
   */
  describeJobRun(
    args: DescribeJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobRunCommandOutput>;
  describeJobRun(args: DescribeJobRunCommandInput, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
  describeJobRun(
    args: DescribeJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecipeCommand}
   */
  describeRecipe(
    args: DescribeRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecipeCommandOutput>;
  describeRecipe(args: DescribeRecipeCommandInput, cb: (err: any, data?: DescribeRecipeCommandOutput) => void): void;
  describeRecipe(
    args: DescribeRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRulesetCommand}
   */
  describeRuleset(
    args: DescribeRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRulesetCommandOutput>;
  describeRuleset(args: DescribeRulesetCommandInput, cb: (err: any, data?: DescribeRulesetCommandOutput) => void): void;
  describeRuleset(
    args: DescribeRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduleCommand}
   */
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduleCommandOutput>;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
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
   * @see {@link ListJobRunsCommand}
   */
  listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecipesCommand}
   */
  listRecipes(args: ListRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipesCommandOutput>;
  listRecipes(args: ListRecipesCommandInput, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
  listRecipes(
    args: ListRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecipeVersionsCommand}
   */
  listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecipeVersionsCommandOutput>;
  listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void
  ): void;
  listRecipeVersions(
    args: ListRecipeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesetsCommand}
   */
  listRulesets(args: ListRulesetsCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesetsCommandOutput>;
  listRulesets(args: ListRulesetsCommandInput, cb: (err: any, data?: ListRulesetsCommandOutput) => void): void;
  listRulesets(
    args: ListRulesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchedulesCommand}
   */
  listSchedules(args: ListSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSchedulesCommandOutput>;
  listSchedules(args: ListSchedulesCommandInput, cb: (err: any, data?: ListSchedulesCommandOutput) => void): void;
  listSchedules(
    args: ListSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchedulesCommandOutput) => void
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
   * @see {@link PublishRecipeCommand}
   */
  publishRecipe(args: PublishRecipeCommandInput, options?: __HttpHandlerOptions): Promise<PublishRecipeCommandOutput>;
  publishRecipe(args: PublishRecipeCommandInput, cb: (err: any, data?: PublishRecipeCommandOutput) => void): void;
  publishRecipe(
    args: PublishRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link SendProjectSessionActionCommand}
   */
  sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendProjectSessionActionCommandOutput>;
  sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void
  ): void;
  sendProjectSessionAction(
    args: SendProjectSessionActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobRunCommand}
   */
  startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProjectSessionCommand}
   */
  startProjectSession(
    args: StartProjectSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProjectSessionCommandOutput>;
  startProjectSession(
    args: StartProjectSessionCommandInput,
    cb: (err: any, data?: StartProjectSessionCommandOutput) => void
  ): void;
  startProjectSession(
    args: StartProjectSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProjectSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopJobRunCommand}
   */
  stopJobRun(args: StopJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StopJobRunCommandOutput>;
  stopJobRun(args: StopJobRunCommandInput, cb: (err: any, data?: StopJobRunCommandOutput) => void): void;
  stopJobRun(
    args: StopJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobRunCommandOutput) => void
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
   * @see {@link UpdateProfileJobCommand}
   */
  updateProfileJob(
    args: UpdateProfileJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileJobCommandOutput>;
  updateProfileJob(
    args: UpdateProfileJobCommandInput,
    cb: (err: any, data?: UpdateProfileJobCommandOutput) => void
  ): void;
  updateProfileJob(
    args: UpdateProfileJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecipeCommand}
   */
  updateRecipe(args: UpdateRecipeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRecipeCommandOutput>;
  updateRecipe(args: UpdateRecipeCommandInput, cb: (err: any, data?: UpdateRecipeCommandOutput) => void): void;
  updateRecipe(
    args: UpdateRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecipeJobCommand}
   */
  updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecipeJobCommandOutput>;
  updateRecipeJob(args: UpdateRecipeJobCommandInput, cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void): void;
  updateRecipeJob(
    args: UpdateRecipeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRulesetCommand}
   */
  updateRuleset(args: UpdateRulesetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRulesetCommandOutput>;
  updateRuleset(args: UpdateRulesetCommandInput, cb: (err: any, data?: UpdateRulesetCommandOutput) => void): void;
  updateRuleset(
    args: UpdateRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduleCommand}
   */
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduleCommandOutput>;
  updateSchedule(args: UpdateScheduleCommandInput, cb: (err: any, data?: UpdateScheduleCommandOutput) => void): void;
  updateSchedule(
    args: UpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export class DataBrew extends DataBrewClient implements DataBrew {}
createAggregatedClient(commands, DataBrew);
