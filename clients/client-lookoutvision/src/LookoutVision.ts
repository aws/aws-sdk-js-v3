// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { LookoutVisionClient, LookoutVisionClientConfig } from "./LookoutVisionClient";

const commands = {
  CreateDatasetCommand,
  CreateModelCommand,
  CreateProjectCommand,
  DeleteDatasetCommand,
  DeleteModelCommand,
  DeleteProjectCommand,
  DescribeDatasetCommand,
  DescribeModelCommand,
  DescribeModelPackagingJobCommand,
  DescribeProjectCommand,
  DetectAnomaliesCommand,
  ListDatasetEntriesCommand,
  ListModelPackagingJobsCommand,
  ListModelsCommand,
  ListProjectsCommand,
  ListTagsForResourceCommand,
  StartModelCommand,
  StartModelPackagingJobCommand,
  StopModelCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasetEntriesCommand,
};

export interface LookoutVision {
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
   * @see {@link CreateModelCommand}
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
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
   * @see {@link DeleteModelCommand}
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
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
   * @see {@link DescribeModelCommand}
   */
  describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
  describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
  describeModel(
    args: DescribeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelPackagingJobCommand}
   */
  describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelPackagingJobCommandOutput>;
  describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    cb: (err: any, data?: DescribeModelPackagingJobCommandOutput) => void
  ): void;
  describeModelPackagingJob(
    args: DescribeModelPackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelPackagingJobCommandOutput) => void
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
   * @see {@link DetectAnomaliesCommand}
   */
  detectAnomalies(
    args: DetectAnomaliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectAnomaliesCommandOutput>;
  detectAnomalies(args: DetectAnomaliesCommandInput, cb: (err: any, data?: DetectAnomaliesCommandOutput) => void): void;
  detectAnomalies(
    args: DetectAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectAnomaliesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetEntriesCommand}
   */
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetEntriesCommandOutput>;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelPackagingJobsCommand}
   */
  listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelPackagingJobsCommandOutput>;
  listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    cb: (err: any, data?: ListModelPackagingJobsCommandOutput) => void
  ): void;
  listModelPackagingJobs(
    args: ListModelPackagingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelPackagingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelsCommand}
   */
  listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
  listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
  listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
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
   * @see {@link StartModelCommand}
   */
  startModel(args: StartModelCommandInput, options?: __HttpHandlerOptions): Promise<StartModelCommandOutput>;
  startModel(args: StartModelCommandInput, cb: (err: any, data?: StartModelCommandOutput) => void): void;
  startModel(
    args: StartModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartModelCommandOutput) => void
  ): void;

  /**
   * @see {@link StartModelPackagingJobCommand}
   */
  startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartModelPackagingJobCommandOutput>;
  startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    cb: (err: any, data?: StartModelPackagingJobCommandOutput) => void
  ): void;
  startModelPackagingJob(
    args: StartModelPackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartModelPackagingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopModelCommand}
   */
  stopModel(args: StopModelCommandInput, options?: __HttpHandlerOptions): Promise<StopModelCommandOutput>;
  stopModel(args: StopModelCommandInput, cb: (err: any, data?: StopModelCommandOutput) => void): void;
  stopModel(
    args: StopModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopModelCommandOutput) => void
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
   * @see {@link UpdateDatasetEntriesCommand}
   */
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetEntriesCommandOutput>;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions,
 *       data types, common parameters, and common errors.</p>
 *          <p>Amazon Lookout for Vision enables you to find visual defects in industrial products,
 *          accurately and at scale. It uses computer vision to identify missing components in an industrial product,
 *          damage to vehicles or structures, irregularities in production lines, and even minuscule defects in
 *          silicon wafers — or any other physical item where quality is important such as a missing capacitor
 *          on printed circuit boards.</p>
 */
export class LookoutVision extends LookoutVisionClient implements LookoutVision {}
createAggregatedClient(commands, LookoutVision);
