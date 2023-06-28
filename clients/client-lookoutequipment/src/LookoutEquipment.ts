// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { LookoutEquipmentClient, LookoutEquipmentClientConfig } from "./LookoutEquipmentClient";

const commands = {
  CreateDatasetCommand,
  CreateInferenceSchedulerCommand,
  CreateLabelCommand,
  CreateLabelGroupCommand,
  CreateModelCommand,
  DeleteDatasetCommand,
  DeleteInferenceSchedulerCommand,
  DeleteLabelCommand,
  DeleteLabelGroupCommand,
  DeleteModelCommand,
  DescribeDataIngestionJobCommand,
  DescribeDatasetCommand,
  DescribeInferenceSchedulerCommand,
  DescribeLabelCommand,
  DescribeLabelGroupCommand,
  DescribeModelCommand,
  ListDataIngestionJobsCommand,
  ListDatasetsCommand,
  ListInferenceEventsCommand,
  ListInferenceExecutionsCommand,
  ListInferenceSchedulersCommand,
  ListLabelGroupsCommand,
  ListLabelsCommand,
  ListModelsCommand,
  ListSensorStatisticsCommand,
  ListTagsForResourceCommand,
  StartDataIngestionJobCommand,
  StartInferenceSchedulerCommand,
  StopInferenceSchedulerCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInferenceSchedulerCommand,
  UpdateLabelGroupCommand,
};

export interface LookoutEquipment {
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
   * @see {@link CreateInferenceSchedulerCommand}
   */
  createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInferenceSchedulerCommandOutput>;
  createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void
  ): void;
  createInferenceScheduler(
    args: CreateInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLabelCommand}
   */
  createLabel(args: CreateLabelCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelCommandOutput>;
  createLabel(args: CreateLabelCommandInput, cb: (err: any, data?: CreateLabelCommandOutput) => void): void;
  createLabel(
    args: CreateLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLabelGroupCommand}
   */
  createLabelGroup(
    args: CreateLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelGroupCommandOutput>;
  createLabelGroup(
    args: CreateLabelGroupCommandInput,
    cb: (err: any, data?: CreateLabelGroupCommandOutput) => void
  ): void;
  createLabelGroup(
    args: CreateLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelGroupCommandOutput) => void
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
   * @see {@link DeleteInferenceSchedulerCommand}
   */
  deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInferenceSchedulerCommandOutput>;
  deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void
  ): void;
  deleteInferenceScheduler(
    args: DeleteInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLabelCommand}
   */
  deleteLabel(args: DeleteLabelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelCommandOutput>;
  deleteLabel(args: DeleteLabelCommandInput, cb: (err: any, data?: DeleteLabelCommandOutput) => void): void;
  deleteLabel(
    args: DeleteLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLabelGroupCommand}
   */
  deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLabelGroupCommandOutput>;
  deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    cb: (err: any, data?: DeleteLabelGroupCommandOutput) => void
  ): void;
  deleteLabelGroup(
    args: DeleteLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLabelGroupCommandOutput) => void
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
   * @see {@link DescribeDataIngestionJobCommand}
   */
  describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataIngestionJobCommandOutput>;
  describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void
  ): void;
  describeDataIngestionJob(
    args: DescribeDataIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void
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
   * @see {@link DescribeInferenceSchedulerCommand}
   */
  describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInferenceSchedulerCommandOutput>;
  describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void
  ): void;
  describeInferenceScheduler(
    args: DescribeInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLabelCommand}
   */
  describeLabel(args: DescribeLabelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLabelCommandOutput>;
  describeLabel(args: DescribeLabelCommandInput, cb: (err: any, data?: DescribeLabelCommandOutput) => void): void;
  describeLabel(
    args: DescribeLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLabelGroupCommand}
   */
  describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelGroupCommandOutput>;
  describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    cb: (err: any, data?: DescribeLabelGroupCommandOutput) => void
  ): void;
  describeLabelGroup(
    args: DescribeLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelGroupCommandOutput) => void
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
   * @see {@link ListDataIngestionJobsCommand}
   */
  listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIngestionJobsCommandOutput>;
  listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void
  ): void;
  listDataIngestionJobs(
    args: ListDataIngestionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void
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
   * @see {@link ListInferenceEventsCommand}
   */
  listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceEventsCommandOutput>;
  listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    cb: (err: any, data?: ListInferenceEventsCommandOutput) => void
  ): void;
  listInferenceEvents(
    args: ListInferenceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceExecutionsCommand}
   */
  listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceExecutionsCommandOutput>;
  listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void
  ): void;
  listInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceSchedulersCommand}
   */
  listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceSchedulersCommandOutput>;
  listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void
  ): void;
  listInferenceSchedulers(
    args: ListInferenceSchedulersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLabelGroupsCommand}
   */
  listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelGroupsCommandOutput>;
  listLabelGroups(args: ListLabelGroupsCommandInput, cb: (err: any, data?: ListLabelGroupsCommandOutput) => void): void;
  listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLabelsCommand}
   */
  listLabels(args: ListLabelsCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelsCommandOutput>;
  listLabels(args: ListLabelsCommandInput, cb: (err: any, data?: ListLabelsCommandOutput) => void): void;
  listLabels(
    args: ListLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelsCommandOutput) => void
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
   * @see {@link ListSensorStatisticsCommand}
   */
  listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSensorStatisticsCommandOutput>;
  listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    cb: (err: any, data?: ListSensorStatisticsCommandOutput) => void
  ): void;
  listSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSensorStatisticsCommandOutput) => void
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
   * @see {@link StartDataIngestionJobCommand}
   */
  startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataIngestionJobCommandOutput>;
  startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void
  ): void;
  startDataIngestionJob(
    args: StartDataIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInferenceSchedulerCommand}
   */
  startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInferenceSchedulerCommandOutput>;
  startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void
  ): void;
  startInferenceScheduler(
    args: StartInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInferenceSchedulerCommand}
   */
  stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInferenceSchedulerCommandOutput>;
  stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void
  ): void;
  stopInferenceScheduler(
    args: StopInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void
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
   * @see {@link UpdateInferenceSchedulerCommand}
   */
  updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInferenceSchedulerCommandOutput>;
  updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void
  ): void;
  updateInferenceScheduler(
    args: UpdateInferenceSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLabelGroupCommand}
   */
  updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLabelGroupCommandOutput>;
  updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    cb: (err: any, data?: UpdateLabelGroupCommandOutput) => void
  ): void;
  updateLabelGroup(
    args: UpdateLabelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLabelGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 */
export class LookoutEquipment extends LookoutEquipmentClient implements LookoutEquipment {}
createAggregatedClient(commands, LookoutEquipment);
