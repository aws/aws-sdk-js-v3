// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateAnomalyDetectorCommand,
  ActivateAnomalyDetectorCommandInput,
  ActivateAnomalyDetectorCommandOutput,
} from "./commands/ActivateAnomalyDetectorCommand";
import {
  BackTestAnomalyDetectorCommand,
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
} from "./commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommand, CreateAlertCommandInput, CreateAlertCommandOutput } from "./commands/CreateAlertCommand";
import {
  CreateAnomalyDetectorCommand,
  CreateAnomalyDetectorCommandInput,
  CreateAnomalyDetectorCommandOutput,
} from "./commands/CreateAnomalyDetectorCommand";
import {
  CreateMetricSetCommand,
  CreateMetricSetCommandInput,
  CreateMetricSetCommandOutput,
} from "./commands/CreateMetricSetCommand";
import {
  DeactivateAnomalyDetectorCommand,
  DeactivateAnomalyDetectorCommandInput,
  DeactivateAnomalyDetectorCommandOutput,
} from "./commands/DeactivateAnomalyDetectorCommand";
import { DeleteAlertCommand, DeleteAlertCommandInput, DeleteAlertCommandOutput } from "./commands/DeleteAlertCommand";
import {
  DeleteAnomalyDetectorCommand,
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "./commands/DeleteAnomalyDetectorCommand";
import {
  DescribeAlertCommand,
  DescribeAlertCommandInput,
  DescribeAlertCommandOutput,
} from "./commands/DescribeAlertCommand";
import {
  DescribeAnomalyDetectionExecutionsCommand,
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
} from "./commands/DescribeAnomalyDetectionExecutionsCommand";
import {
  DescribeAnomalyDetectorCommand,
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
} from "./commands/DescribeAnomalyDetectorCommand";
import {
  DescribeMetricSetCommand,
  DescribeMetricSetCommandInput,
  DescribeMetricSetCommandOutput,
} from "./commands/DescribeMetricSetCommand";
import {
  DetectMetricSetConfigCommand,
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
} from "./commands/DetectMetricSetConfigCommand";
import {
  GetAnomalyGroupCommand,
  GetAnomalyGroupCommandInput,
  GetAnomalyGroupCommandOutput,
} from "./commands/GetAnomalyGroupCommand";
import {
  GetDataQualityMetricsCommand,
  GetDataQualityMetricsCommandInput,
  GetDataQualityMetricsCommandOutput,
} from "./commands/GetDataQualityMetricsCommand";
import { GetFeedbackCommand, GetFeedbackCommandInput, GetFeedbackCommandOutput } from "./commands/GetFeedbackCommand";
import {
  GetSampleDataCommand,
  GetSampleDataCommandInput,
  GetSampleDataCommandOutput,
} from "./commands/GetSampleDataCommand";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import {
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "./commands/ListAnomalyDetectorsCommand";
import {
  ListAnomalyGroupRelatedMetricsCommand,
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "./commands/ListAnomalyGroupRelatedMetricsCommand";
import {
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "./commands/ListAnomalyGroupSummariesCommand";
import {
  ListAnomalyGroupTimeSeriesCommand,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "./commands/ListAnomalyGroupTimeSeriesCommand";
import {
  ListMetricSetsCommand,
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput,
} from "./commands/ListMetricSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAlertCommand, UpdateAlertCommandInput, UpdateAlertCommandOutput } from "./commands/UpdateAlertCommand";
import {
  UpdateAnomalyDetectorCommand,
  UpdateAnomalyDetectorCommandInput,
  UpdateAnomalyDetectorCommandOutput,
} from "./commands/UpdateAnomalyDetectorCommand";
import {
  UpdateMetricSetCommand,
  UpdateMetricSetCommandInput,
  UpdateMetricSetCommandOutput,
} from "./commands/UpdateMetricSetCommand";
import { LookoutMetricsClient, LookoutMetricsClientConfig } from "./LookoutMetricsClient";

const commands = {
  ActivateAnomalyDetectorCommand,
  BackTestAnomalyDetectorCommand,
  CreateAlertCommand,
  CreateAnomalyDetectorCommand,
  CreateMetricSetCommand,
  DeactivateAnomalyDetectorCommand,
  DeleteAlertCommand,
  DeleteAnomalyDetectorCommand,
  DescribeAlertCommand,
  DescribeAnomalyDetectionExecutionsCommand,
  DescribeAnomalyDetectorCommand,
  DescribeMetricSetCommand,
  DetectMetricSetConfigCommand,
  GetAnomalyGroupCommand,
  GetDataQualityMetricsCommand,
  GetFeedbackCommand,
  GetSampleDataCommand,
  ListAlertsCommand,
  ListAnomalyDetectorsCommand,
  ListAnomalyGroupRelatedMetricsCommand,
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupTimeSeriesCommand,
  ListMetricSetsCommand,
  ListTagsForResourceCommand,
  PutFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAlertCommand,
  UpdateAnomalyDetectorCommand,
  UpdateMetricSetCommand,
};

export interface LookoutMetrics {
  /**
   * @see {@link ActivateAnomalyDetectorCommand}
   */
  activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateAnomalyDetectorCommandOutput>;
  activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void
  ): void;
  activateAnomalyDetector(
    args: ActivateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link BackTestAnomalyDetectorCommand}
   */
  backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BackTestAnomalyDetectorCommandOutput>;
  backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void
  ): void;
  backTestAnomalyDetector(
    args: BackTestAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAlertCommand}
   */
  createAlert(args: CreateAlertCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlertCommandOutput>;
  createAlert(args: CreateAlertCommandInput, cb: (err: any, data?: CreateAlertCommandOutput) => void): void;
  createAlert(
    args: CreateAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnomalyDetectorCommand}
   */
  createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalyDetectorCommandOutput>;
  createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void
  ): void;
  createAnomalyDetector(
    args: CreateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMetricSetCommand}
   */
  createMetricSet(
    args: CreateMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMetricSetCommandOutput>;
  createMetricSet(args: CreateMetricSetCommandInput, cb: (err: any, data?: CreateMetricSetCommandOutput) => void): void;
  createMetricSet(
    args: CreateMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMetricSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateAnomalyDetectorCommand}
   */
  deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateAnomalyDetectorCommandOutput>;
  deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void
  ): void;
  deactivateAnomalyDetector(
    args: DeactivateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlertCommand}
   */
  deleteAlert(args: DeleteAlertCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlertCommandOutput>;
  deleteAlert(args: DeleteAlertCommandInput, cb: (err: any, data?: DeleteAlertCommandOutput) => void): void;
  deleteAlert(
    args: DeleteAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnomalyDetectorCommand}
   */
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyDetectorCommandOutput>;
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;
  deleteAnomalyDetector(
    args: DeleteAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlertCommand}
   */
  describeAlert(args: DescribeAlertCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlertCommandOutput>;
  describeAlert(args: DescribeAlertCommandInput, cb: (err: any, data?: DescribeAlertCommandOutput) => void): void;
  describeAlert(
    args: DescribeAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnomalyDetectionExecutionsCommand}
   */
  describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectionExecutionsCommandOutput>;
  describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void
  ): void;
  describeAnomalyDetectionExecutions(
    args: DescribeAnomalyDetectionExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnomalyDetectorCommand}
   */
  describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyDetectorCommandOutput>;
  describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void
  ): void;
  describeAnomalyDetector(
    args: DescribeAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricSetCommand}
   */
  describeMetricSet(
    args: DescribeMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricSetCommandOutput>;
  describeMetricSet(
    args: DescribeMetricSetCommandInput,
    cb: (err: any, data?: DescribeMetricSetCommandOutput) => void
  ): void;
  describeMetricSet(
    args: DescribeMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectMetricSetConfigCommand}
   */
  detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectMetricSetConfigCommandOutput>;
  detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    cb: (err: any, data?: DetectMetricSetConfigCommandOutput) => void
  ): void;
  detectMetricSetConfig(
    args: DetectMetricSetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectMetricSetConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnomalyGroupCommand}
   */
  getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalyGroupCommandOutput>;
  getAnomalyGroup(args: GetAnomalyGroupCommandInput, cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void): void;
  getAnomalyGroup(
    args: GetAnomalyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityMetricsCommand}
   */
  getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityMetricsCommandOutput>;
  getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    cb: (err: any, data?: GetDataQualityMetricsCommandOutput) => void
  ): void;
  getDataQualityMetrics(
    args: GetDataQualityMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFeedbackCommand}
   */
  getFeedback(args: GetFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<GetFeedbackCommandOutput>;
  getFeedback(args: GetFeedbackCommandInput, cb: (err: any, data?: GetFeedbackCommandOutput) => void): void;
  getFeedback(
    args: GetFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSampleDataCommand}
   */
  getSampleData(args: GetSampleDataCommandInput, options?: __HttpHandlerOptions): Promise<GetSampleDataCommandOutput>;
  getSampleData(args: GetSampleDataCommandInput, cb: (err: any, data?: GetSampleDataCommandOutput) => void): void;
  getSampleData(
    args: GetSampleDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSampleDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlertsCommand}
   */
  listAlerts(args: ListAlertsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlertsCommandOutput>;
  listAlerts(args: ListAlertsCommandInput, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
  listAlerts(
    args: ListAlertsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomalyDetectorsCommand}
   */
  listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyDetectorsCommandOutput>;
  listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void
  ): void;
  listAnomalyDetectors(
    args: ListAnomalyDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomalyGroupRelatedMetricsCommand}
   */
  listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupRelatedMetricsCommandOutput>;
  listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    cb: (err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void
  ): void;
  listAnomalyGroupRelatedMetrics(
    args: ListAnomalyGroupRelatedMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupRelatedMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomalyGroupSummariesCommand}
   */
  listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupSummariesCommandOutput>;
  listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void
  ): void;
  listAnomalyGroupSummaries(
    args: ListAnomalyGroupSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomalyGroupTimeSeriesCommand}
   */
  listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalyGroupTimeSeriesCommandOutput>;
  listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void
  ): void;
  listAnomalyGroupTimeSeries(
    args: ListAnomalyGroupTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricSetsCommand}
   */
  listMetricSets(
    args: ListMetricSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricSetsCommandOutput>;
  listMetricSets(args: ListMetricSetsCommandInput, cb: (err: any, data?: ListMetricSetsCommandOutput) => void): void;
  listMetricSets(
    args: ListMetricSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricSetsCommandOutput) => void
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
   * @see {@link PutFeedbackCommand}
   */
  putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
  putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
  putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
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
   * @see {@link UpdateAlertCommand}
   */
  updateAlert(args: UpdateAlertCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAlertCommandOutput>;
  updateAlert(args: UpdateAlertCommandInput, cb: (err: any, data?: UpdateAlertCommandOutput) => void): void;
  updateAlert(
    args: UpdateAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnomalyDetectorCommand}
   */
  updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalyDetectorCommandOutput>;
  updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void
  ): void;
  updateAnomalyDetector(
    args: UpdateAnomalyDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMetricSetCommand}
   */
  updateMetricSet(
    args: UpdateMetricSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMetricSetCommandOutput>;
  updateMetricSet(args: UpdateMetricSetCommandInput, cb: (err: any, data?: UpdateMetricSetCommandOutput) => void): void;
  updateMetricSet(
    args: UpdateMetricSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMetricSetCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
 *       with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
 *         Lookout for Metrics Developer Guide</a>.</p>
 */
export class LookoutMetrics extends LookoutMetricsClient implements LookoutMetrics {}
createAggregatedClient(commands, LookoutMetrics);
