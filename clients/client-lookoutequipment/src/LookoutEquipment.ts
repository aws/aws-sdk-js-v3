// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateInferenceSchedulerCommandInput,
  type CreateInferenceSchedulerCommandOutput,
  CreateInferenceSchedulerCommand,
} from "./commands/CreateInferenceSchedulerCommand";
import {
  type CreateLabelCommandInput,
  type CreateLabelCommandOutput,
  CreateLabelCommand,
} from "./commands/CreateLabelCommand";
import {
  type CreateLabelGroupCommandInput,
  type CreateLabelGroupCommandOutput,
  CreateLabelGroupCommand,
} from "./commands/CreateLabelGroupCommand";
import {
  type CreateModelCommandInput,
  type CreateModelCommandOutput,
  CreateModelCommand,
} from "./commands/CreateModelCommand";
import {
  type CreateRetrainingSchedulerCommandInput,
  type CreateRetrainingSchedulerCommandOutput,
  CreateRetrainingSchedulerCommand,
} from "./commands/CreateRetrainingSchedulerCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteInferenceSchedulerCommandInput,
  type DeleteInferenceSchedulerCommandOutput,
  DeleteInferenceSchedulerCommand,
} from "./commands/DeleteInferenceSchedulerCommand";
import {
  type DeleteLabelCommandInput,
  type DeleteLabelCommandOutput,
  DeleteLabelCommand,
} from "./commands/DeleteLabelCommand";
import {
  type DeleteLabelGroupCommandInput,
  type DeleteLabelGroupCommandOutput,
  DeleteLabelGroupCommand,
} from "./commands/DeleteLabelGroupCommand";
import {
  type DeleteModelCommandInput,
  type DeleteModelCommandOutput,
  DeleteModelCommand,
} from "./commands/DeleteModelCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteRetrainingSchedulerCommandInput,
  type DeleteRetrainingSchedulerCommandOutput,
  DeleteRetrainingSchedulerCommand,
} from "./commands/DeleteRetrainingSchedulerCommand";
import {
  type DescribeDataIngestionJobCommandInput,
  type DescribeDataIngestionJobCommandOutput,
  DescribeDataIngestionJobCommand,
} from "./commands/DescribeDataIngestionJobCommand";
import {
  type DescribeDatasetCommandInput,
  type DescribeDatasetCommandOutput,
  DescribeDatasetCommand,
} from "./commands/DescribeDatasetCommand";
import {
  type DescribeInferenceSchedulerCommandInput,
  type DescribeInferenceSchedulerCommandOutput,
  DescribeInferenceSchedulerCommand,
} from "./commands/DescribeInferenceSchedulerCommand";
import {
  type DescribeLabelCommandInput,
  type DescribeLabelCommandOutput,
  DescribeLabelCommand,
} from "./commands/DescribeLabelCommand";
import {
  type DescribeLabelGroupCommandInput,
  type DescribeLabelGroupCommandOutput,
  DescribeLabelGroupCommand,
} from "./commands/DescribeLabelGroupCommand";
import {
  type DescribeModelCommandInput,
  type DescribeModelCommandOutput,
  DescribeModelCommand,
} from "./commands/DescribeModelCommand";
import {
  type DescribeModelVersionCommandInput,
  type DescribeModelVersionCommandOutput,
  DescribeModelVersionCommand,
} from "./commands/DescribeModelVersionCommand";
import {
  type DescribeResourcePolicyCommandInput,
  type DescribeResourcePolicyCommandOutput,
  DescribeResourcePolicyCommand,
} from "./commands/DescribeResourcePolicyCommand";
import {
  type DescribeRetrainingSchedulerCommandInput,
  type DescribeRetrainingSchedulerCommandOutput,
  DescribeRetrainingSchedulerCommand,
} from "./commands/DescribeRetrainingSchedulerCommand";
import {
  type ImportDatasetCommandInput,
  type ImportDatasetCommandOutput,
  ImportDatasetCommand,
} from "./commands/ImportDatasetCommand";
import {
  type ImportModelVersionCommandInput,
  type ImportModelVersionCommandOutput,
  ImportModelVersionCommand,
} from "./commands/ImportModelVersionCommand";
import {
  type ListDataIngestionJobsCommandInput,
  type ListDataIngestionJobsCommandOutput,
  ListDataIngestionJobsCommand,
} from "./commands/ListDataIngestionJobsCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListInferenceEventsCommandInput,
  type ListInferenceEventsCommandOutput,
  ListInferenceEventsCommand,
} from "./commands/ListInferenceEventsCommand";
import {
  type ListInferenceExecutionsCommandInput,
  type ListInferenceExecutionsCommandOutput,
  ListInferenceExecutionsCommand,
} from "./commands/ListInferenceExecutionsCommand";
import {
  type ListInferenceSchedulersCommandInput,
  type ListInferenceSchedulersCommandOutput,
  ListInferenceSchedulersCommand,
} from "./commands/ListInferenceSchedulersCommand";
import {
  type ListLabelGroupsCommandInput,
  type ListLabelGroupsCommandOutput,
  ListLabelGroupsCommand,
} from "./commands/ListLabelGroupsCommand";
import {
  type ListLabelsCommandInput,
  type ListLabelsCommandOutput,
  ListLabelsCommand,
} from "./commands/ListLabelsCommand";
import {
  type ListModelsCommandInput,
  type ListModelsCommandOutput,
  ListModelsCommand,
} from "./commands/ListModelsCommand";
import {
  type ListModelVersionsCommandInput,
  type ListModelVersionsCommandOutput,
  ListModelVersionsCommand,
} from "./commands/ListModelVersionsCommand";
import {
  type ListRetrainingSchedulersCommandInput,
  type ListRetrainingSchedulersCommandOutput,
  ListRetrainingSchedulersCommand,
} from "./commands/ListRetrainingSchedulersCommand";
import {
  type ListSensorStatisticsCommandInput,
  type ListSensorStatisticsCommandOutput,
  ListSensorStatisticsCommand,
} from "./commands/ListSensorStatisticsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type StartDataIngestionJobCommandInput,
  type StartDataIngestionJobCommandOutput,
  StartDataIngestionJobCommand,
} from "./commands/StartDataIngestionJobCommand";
import {
  type StartInferenceSchedulerCommandInput,
  type StartInferenceSchedulerCommandOutput,
  StartInferenceSchedulerCommand,
} from "./commands/StartInferenceSchedulerCommand";
import {
  type StartRetrainingSchedulerCommandInput,
  type StartRetrainingSchedulerCommandOutput,
  StartRetrainingSchedulerCommand,
} from "./commands/StartRetrainingSchedulerCommand";
import {
  type StopInferenceSchedulerCommandInput,
  type StopInferenceSchedulerCommandOutput,
  StopInferenceSchedulerCommand,
} from "./commands/StopInferenceSchedulerCommand";
import {
  type StopRetrainingSchedulerCommandInput,
  type StopRetrainingSchedulerCommandOutput,
  StopRetrainingSchedulerCommand,
} from "./commands/StopRetrainingSchedulerCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateActiveModelVersionCommandInput,
  type UpdateActiveModelVersionCommandOutput,
  UpdateActiveModelVersionCommand,
} from "./commands/UpdateActiveModelVersionCommand";
import {
  type UpdateInferenceSchedulerCommandInput,
  type UpdateInferenceSchedulerCommandOutput,
  UpdateInferenceSchedulerCommand,
} from "./commands/UpdateInferenceSchedulerCommand";
import {
  type UpdateLabelGroupCommandInput,
  type UpdateLabelGroupCommandOutput,
  UpdateLabelGroupCommand,
} from "./commands/UpdateLabelGroupCommand";
import {
  type UpdateModelCommandInput,
  type UpdateModelCommandOutput,
  UpdateModelCommand,
} from "./commands/UpdateModelCommand";
import {
  type UpdateRetrainingSchedulerCommandInput,
  type UpdateRetrainingSchedulerCommandOutput,
  UpdateRetrainingSchedulerCommand,
} from "./commands/UpdateRetrainingSchedulerCommand";
import { LookoutEquipmentClient } from "./LookoutEquipmentClient";
import { paginateListDataIngestionJobs } from "./pagination/ListDataIngestionJobsPaginator";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListInferenceEvents } from "./pagination/ListInferenceEventsPaginator";
import { paginateListInferenceExecutions } from "./pagination/ListInferenceExecutionsPaginator";
import { paginateListInferenceSchedulers } from "./pagination/ListInferenceSchedulersPaginator";
import { paginateListLabelGroups } from "./pagination/ListLabelGroupsPaginator";
import { paginateListLabels } from "./pagination/ListLabelsPaginator";
import { paginateListModels } from "./pagination/ListModelsPaginator";
import { paginateListModelVersions } from "./pagination/ListModelVersionsPaginator";
import { paginateListRetrainingSchedulers } from "./pagination/ListRetrainingSchedulersPaginator";
import { paginateListSensorStatistics } from "./pagination/ListSensorStatisticsPaginator";

const commands = {
  CreateDatasetCommand,
  CreateInferenceSchedulerCommand,
  CreateLabelCommand,
  CreateLabelGroupCommand,
  CreateModelCommand,
  CreateRetrainingSchedulerCommand,
  DeleteDatasetCommand,
  DeleteInferenceSchedulerCommand,
  DeleteLabelCommand,
  DeleteLabelGroupCommand,
  DeleteModelCommand,
  DeleteResourcePolicyCommand,
  DeleteRetrainingSchedulerCommand,
  DescribeDataIngestionJobCommand,
  DescribeDatasetCommand,
  DescribeInferenceSchedulerCommand,
  DescribeLabelCommand,
  DescribeLabelGroupCommand,
  DescribeModelCommand,
  DescribeModelVersionCommand,
  DescribeResourcePolicyCommand,
  DescribeRetrainingSchedulerCommand,
  ImportDatasetCommand,
  ImportModelVersionCommand,
  ListDataIngestionJobsCommand,
  ListDatasetsCommand,
  ListInferenceEventsCommand,
  ListInferenceExecutionsCommand,
  ListInferenceSchedulersCommand,
  ListLabelGroupsCommand,
  ListLabelsCommand,
  ListModelsCommand,
  ListModelVersionsCommand,
  ListRetrainingSchedulersCommand,
  ListSensorStatisticsCommand,
  ListTagsForResourceCommand,
  PutResourcePolicyCommand,
  StartDataIngestionJobCommand,
  StartInferenceSchedulerCommand,
  StartRetrainingSchedulerCommand,
  StopInferenceSchedulerCommand,
  StopRetrainingSchedulerCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateActiveModelVersionCommand,
  UpdateInferenceSchedulerCommand,
  UpdateLabelGroupCommand,
  UpdateModelCommand,
  UpdateRetrainingSchedulerCommand,
};
const paginators = {
  paginateListDataIngestionJobs,
  paginateListDatasets,
  paginateListInferenceEvents,
  paginateListInferenceExecutions,
  paginateListInferenceSchedulers,
  paginateListLabelGroups,
  paginateListLabels,
  paginateListModels,
  paginateListModelVersions,
  paginateListRetrainingSchedulers,
  paginateListSensorStatistics,
};

export interface LookoutEquipment {
  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
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
  createLabel(
    args: CreateLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelCommandOutput>;
  createLabel(
    args: CreateLabelCommandInput,
    cb: (err: any, data?: CreateLabelCommandOutput) => void
  ): void;
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
  createModel(
    args: CreateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCommandOutput>;
  createModel(
    args: CreateModelCommandInput,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRetrainingSchedulerCommand}
   */
  createRetrainingScheduler(
    args: CreateRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRetrainingSchedulerCommandOutput>;
  createRetrainingScheduler(
    args: CreateRetrainingSchedulerCommandInput,
    cb: (err: any, data?: CreateRetrainingSchedulerCommandOutput) => void
  ): void;
  createRetrainingScheduler(
    args: CreateRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRetrainingSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
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
  deleteLabel(
    args: DeleteLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLabelCommandOutput>;
  deleteLabel(
    args: DeleteLabelCommandInput,
    cb: (err: any, data?: DeleteLabelCommandOutput) => void
  ): void;
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
  deleteModel(
    args: DeleteModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelCommandOutput>;
  deleteModel(
    args: DeleteModelCommandInput,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetrainingSchedulerCommand}
   */
  deleteRetrainingScheduler(
    args: DeleteRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetrainingSchedulerCommandOutput>;
  deleteRetrainingScheduler(
    args: DeleteRetrainingSchedulerCommandInput,
    cb: (err: any, data?: DeleteRetrainingSchedulerCommandOutput) => void
  ): void;
  deleteRetrainingScheduler(
    args: DeleteRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetrainingSchedulerCommandOutput) => void
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
  describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
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
  describeLabel(
    args: DescribeLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelCommandOutput>;
  describeLabel(
    args: DescribeLabelCommandInput,
    cb: (err: any, data?: DescribeLabelCommandOutput) => void
  ): void;
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
  describeModel(
    args: DescribeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelCommandOutput>;
  describeModel(
    args: DescribeModelCommandInput,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;
  describeModel(
    args: DescribeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelVersionCommand}
   */
  describeModelVersion(
    args: DescribeModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelVersionCommandOutput>;
  describeModelVersion(
    args: DescribeModelVersionCommandInput,
    cb: (err: any, data?: DescribeModelVersionCommandOutput) => void
  ): void;
  describeModelVersion(
    args: DescribeModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRetrainingSchedulerCommand}
   */
  describeRetrainingScheduler(
    args: DescribeRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRetrainingSchedulerCommandOutput>;
  describeRetrainingScheduler(
    args: DescribeRetrainingSchedulerCommandInput,
    cb: (err: any, data?: DescribeRetrainingSchedulerCommandOutput) => void
  ): void;
  describeRetrainingScheduler(
    args: DescribeRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRetrainingSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportDatasetCommand}
   */
  importDataset(
    args: ImportDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDatasetCommandOutput>;
  importDataset(
    args: ImportDatasetCommandInput,
    cb: (err: any, data?: ImportDatasetCommandOutput) => void
  ): void;
  importDataset(
    args: ImportDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportModelVersionCommand}
   */
  importModelVersion(
    args: ImportModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportModelVersionCommandOutput>;
  importModelVersion(
    args: ImportModelVersionCommandInput,
    cb: (err: any, data?: ImportModelVersionCommandOutput) => void
  ): void;
  importModelVersion(
    args: ImportModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportModelVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataIngestionJobsCommand}
   */
  listDataIngestionJobs(): Promise<ListDataIngestionJobsCommandOutput>;
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
  listDatasets(): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
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
  listInferenceSchedulers(): Promise<ListInferenceSchedulersCommandOutput>;
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
  listLabelGroups(): Promise<ListLabelGroupsCommandOutput>;
  listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelGroupsCommandOutput>;
  listLabelGroups(
    args: ListLabelGroupsCommandInput,
    cb: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): void;
  listLabelGroups(
    args: ListLabelGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLabelsCommand}
   */
  listLabels(
    args: ListLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelsCommandOutput>;
  listLabels(
    args: ListLabelsCommandInput,
    cb: (err: any, data?: ListLabelsCommandOutput) => void
  ): void;
  listLabels(
    args: ListLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelsCommand}
   */
  listModels(): Promise<ListModelsCommandOutput>;
  listModels(
    args: ListModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelsCommandOutput>;
  listModels(
    args: ListModelsCommandInput,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;
  listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelVersionsCommand}
   */
  listModelVersions(
    args: ListModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelVersionsCommandOutput>;
  listModelVersions(
    args: ListModelVersionsCommandInput,
    cb: (err: any, data?: ListModelVersionsCommandOutput) => void
  ): void;
  listModelVersions(
    args: ListModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetrainingSchedulersCommand}
   */
  listRetrainingSchedulers(): Promise<ListRetrainingSchedulersCommandOutput>;
  listRetrainingSchedulers(
    args: ListRetrainingSchedulersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetrainingSchedulersCommandOutput>;
  listRetrainingSchedulers(
    args: ListRetrainingSchedulersCommandInput,
    cb: (err: any, data?: ListRetrainingSchedulersCommandOutput) => void
  ): void;
  listRetrainingSchedulers(
    args: ListRetrainingSchedulersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetrainingSchedulersCommandOutput) => void
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
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
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
   * @see {@link StartRetrainingSchedulerCommand}
   */
  startRetrainingScheduler(
    args: StartRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRetrainingSchedulerCommandOutput>;
  startRetrainingScheduler(
    args: StartRetrainingSchedulerCommandInput,
    cb: (err: any, data?: StartRetrainingSchedulerCommandOutput) => void
  ): void;
  startRetrainingScheduler(
    args: StartRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRetrainingSchedulerCommandOutput) => void
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
   * @see {@link StopRetrainingSchedulerCommand}
   */
  stopRetrainingScheduler(
    args: StopRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRetrainingSchedulerCommandOutput>;
  stopRetrainingScheduler(
    args: StopRetrainingSchedulerCommandInput,
    cb: (err: any, data?: StopRetrainingSchedulerCommandOutput) => void
  ): void;
  stopRetrainingScheduler(
    args: StopRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRetrainingSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActiveModelVersionCommand}
   */
  updateActiveModelVersion(
    args: UpdateActiveModelVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActiveModelVersionCommandOutput>;
  updateActiveModelVersion(
    args: UpdateActiveModelVersionCommandInput,
    cb: (err: any, data?: UpdateActiveModelVersionCommandOutput) => void
  ): void;
  updateActiveModelVersion(
    args: UpdateActiveModelVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActiveModelVersionCommandOutput) => void
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

  /**
   * @see {@link UpdateModelCommand}
   */
  updateModel(
    args: UpdateModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelCommandOutput>;
  updateModel(
    args: UpdateModelCommandInput,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRetrainingSchedulerCommand}
   */
  updateRetrainingScheduler(
    args: UpdateRetrainingSchedulerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRetrainingSchedulerCommandOutput>;
  updateRetrainingScheduler(
    args: UpdateRetrainingSchedulerCommandInput,
    cb: (err: any, data?: UpdateRetrainingSchedulerCommandOutput) => void
  ): void;
  updateRetrainingScheduler(
    args: UpdateRetrainingSchedulerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRetrainingSchedulerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataIngestionJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataIngestionJobsCommandOutput}.
   */
  paginateListDataIngestionJobs(
    args?: ListDataIngestionJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataIngestionJobsCommandOutput>;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args?: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListInferenceEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInferenceEventsCommandOutput}.
   */
  paginateListInferenceEvents(
    args: ListInferenceEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInferenceEventsCommandOutput>;

  /**
   * @see {@link ListInferenceExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInferenceExecutionsCommandOutput}.
   */
  paginateListInferenceExecutions(
    args: ListInferenceExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInferenceExecutionsCommandOutput>;

  /**
   * @see {@link ListInferenceSchedulersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInferenceSchedulersCommandOutput}.
   */
  paginateListInferenceSchedulers(
    args?: ListInferenceSchedulersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInferenceSchedulersCommandOutput>;

  /**
   * @see {@link ListLabelGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLabelGroupsCommandOutput}.
   */
  paginateListLabelGroups(
    args?: ListLabelGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLabelGroupsCommandOutput>;

  /**
   * @see {@link ListLabelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLabelsCommandOutput}.
   */
  paginateListLabels(
    args: ListLabelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLabelsCommandOutput>;

  /**
   * @see {@link ListModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListModelsCommandOutput}.
   */
  paginateListModels(
    args?: ListModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListModelsCommandOutput>;

  /**
   * @see {@link ListModelVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListModelVersionsCommandOutput}.
   */
  paginateListModelVersions(
    args: ListModelVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListModelVersionsCommandOutput>;

  /**
   * @see {@link ListRetrainingSchedulersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRetrainingSchedulersCommandOutput}.
   */
  paginateListRetrainingSchedulers(
    args?: ListRetrainingSchedulersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRetrainingSchedulersCommandOutput>;

  /**
   * @see {@link ListSensorStatisticsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSensorStatisticsCommandOutput}.
   */
  paginateListSensorStatistics(
    args: ListSensorStatisticsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSensorStatisticsCommandOutput>;
}

/**
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 * @public
 */
export class LookoutEquipment extends LookoutEquipmentClient implements LookoutEquipment {}
createAggregatedClient(commands, LookoutEquipment, { paginators });
