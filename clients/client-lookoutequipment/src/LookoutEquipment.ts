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
  CreateRetrainingSchedulerCommand,
  CreateRetrainingSchedulerCommandInput,
  CreateRetrainingSchedulerCommandOutput,
} from "./commands/CreateRetrainingSchedulerCommand";
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
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRetrainingSchedulerCommand,
  DeleteRetrainingSchedulerCommandInput,
  DeleteRetrainingSchedulerCommandOutput,
} from "./commands/DeleteRetrainingSchedulerCommand";
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
  DescribeModelVersionCommand,
  DescribeModelVersionCommandInput,
  DescribeModelVersionCommandOutput,
} from "./commands/DescribeModelVersionCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeRetrainingSchedulerCommand,
  DescribeRetrainingSchedulerCommandInput,
  DescribeRetrainingSchedulerCommandOutput,
} from "./commands/DescribeRetrainingSchedulerCommand";
import {
  ImportDatasetCommand,
  ImportDatasetCommandInput,
  ImportDatasetCommandOutput,
} from "./commands/ImportDatasetCommand";
import {
  ImportModelVersionCommand,
  ImportModelVersionCommandInput,
  ImportModelVersionCommandOutput,
} from "./commands/ImportModelVersionCommand";
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
  ListModelVersionsCommand,
  ListModelVersionsCommandInput,
  ListModelVersionsCommandOutput,
} from "./commands/ListModelVersionsCommand";
import {
  ListRetrainingSchedulersCommand,
  ListRetrainingSchedulersCommandInput,
  ListRetrainingSchedulersCommandOutput,
} from "./commands/ListRetrainingSchedulersCommand";
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
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
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
  StartRetrainingSchedulerCommand,
  StartRetrainingSchedulerCommandInput,
  StartRetrainingSchedulerCommandOutput,
} from "./commands/StartRetrainingSchedulerCommand";
import {
  StopInferenceSchedulerCommand,
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "./commands/StopInferenceSchedulerCommand";
import {
  StopRetrainingSchedulerCommand,
  StopRetrainingSchedulerCommandInput,
  StopRetrainingSchedulerCommandOutput,
} from "./commands/StopRetrainingSchedulerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateActiveModelVersionCommand,
  UpdateActiveModelVersionCommandInput,
  UpdateActiveModelVersionCommandOutput,
} from "./commands/UpdateActiveModelVersionCommand";
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
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRetrainingSchedulerCommand,
  UpdateRetrainingSchedulerCommandInput,
  UpdateRetrainingSchedulerCommandOutput,
} from "./commands/UpdateRetrainingSchedulerCommand";
import { LookoutEquipmentClient, LookoutEquipmentClientConfig } from "./LookoutEquipmentClient";

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
  importDataset(args: ImportDatasetCommandInput, options?: __HttpHandlerOptions): Promise<ImportDatasetCommandOutput>;
  importDataset(args: ImportDatasetCommandInput, cb: (err: any, data?: ImportDatasetCommandOutput) => void): void;
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
  updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
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
}

/**
 * @public
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 */
export class LookoutEquipment extends LookoutEquipmentClient implements LookoutEquipment {}
createAggregatedClient(commands, LookoutEquipment);
