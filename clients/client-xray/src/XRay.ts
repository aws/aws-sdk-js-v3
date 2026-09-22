// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchGetTracesCommandInput,
  type BatchGetTracesCommandOutput,
  BatchGetTracesCommand,
} from "./commands/BatchGetTracesCommand";
import {
  type CancelTraceRetrievalCommandInput,
  type CancelTraceRetrievalCommandOutput,
  CancelTraceRetrievalCommand,
} from "./commands/CancelTraceRetrievalCommand";
import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type CreateSamplingRuleCommandInput,
  type CreateSamplingRuleCommandOutput,
  CreateSamplingRuleCommand,
} from "./commands/CreateSamplingRuleCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSamplingRuleCommandInput,
  type DeleteSamplingRuleCommandOutput,
  DeleteSamplingRuleCommand,
} from "./commands/DeleteSamplingRuleCommand";
import {
  type GetEncryptionConfigCommandInput,
  type GetEncryptionConfigCommandOutput,
  GetEncryptionConfigCommand,
} from "./commands/GetEncryptionConfigCommand";
import { type GetGroupCommandInput, type GetGroupCommandOutput, GetGroupCommand } from "./commands/GetGroupCommand";
import { type GetGroupsCommandInput, type GetGroupsCommandOutput, GetGroupsCommand } from "./commands/GetGroupsCommand";
import {
  type GetIndexingRulesCommandInput,
  type GetIndexingRulesCommandOutput,
  GetIndexingRulesCommand,
} from "./commands/GetIndexingRulesCommand";
import {
  type GetInsightCommandInput,
  type GetInsightCommandOutput,
  GetInsightCommand,
} from "./commands/GetInsightCommand";
import {
  type GetInsightEventsCommandInput,
  type GetInsightEventsCommandOutput,
  GetInsightEventsCommand,
} from "./commands/GetInsightEventsCommand";
import {
  type GetInsightImpactGraphCommandInput,
  type GetInsightImpactGraphCommandOutput,
  GetInsightImpactGraphCommand,
} from "./commands/GetInsightImpactGraphCommand";
import {
  type GetInsightSummariesCommandInput,
  type GetInsightSummariesCommandOutput,
  GetInsightSummariesCommand,
} from "./commands/GetInsightSummariesCommand";
import {
  type GetRetrievedTracesGraphCommandInput,
  type GetRetrievedTracesGraphCommandOutput,
  GetRetrievedTracesGraphCommand,
} from "./commands/GetRetrievedTracesGraphCommand";
import {
  type GetSamplingRulesCommandInput,
  type GetSamplingRulesCommandOutput,
  GetSamplingRulesCommand,
} from "./commands/GetSamplingRulesCommand";
import {
  type GetSamplingStatisticSummariesCommandInput,
  type GetSamplingStatisticSummariesCommandOutput,
  GetSamplingStatisticSummariesCommand,
} from "./commands/GetSamplingStatisticSummariesCommand";
import {
  type GetSamplingTargetsCommandInput,
  type GetSamplingTargetsCommandOutput,
  GetSamplingTargetsCommand,
} from "./commands/GetSamplingTargetsCommand";
import {
  type GetServiceGraphCommandInput,
  type GetServiceGraphCommandOutput,
  GetServiceGraphCommand,
} from "./commands/GetServiceGraphCommand";
import {
  type GetTimeSeriesServiceStatisticsCommandInput,
  type GetTimeSeriesServiceStatisticsCommandOutput,
  GetTimeSeriesServiceStatisticsCommand,
} from "./commands/GetTimeSeriesServiceStatisticsCommand";
import {
  type GetTraceGraphCommandInput,
  type GetTraceGraphCommandOutput,
  GetTraceGraphCommand,
} from "./commands/GetTraceGraphCommand";
import {
  type GetTraceSegmentDestinationCommandInput,
  type GetTraceSegmentDestinationCommandOutput,
  GetTraceSegmentDestinationCommand,
} from "./commands/GetTraceSegmentDestinationCommand";
import {
  type GetTraceSummariesCommandInput,
  type GetTraceSummariesCommandOutput,
  GetTraceSummariesCommand,
} from "./commands/GetTraceSummariesCommand";
import {
  type ListResourcePoliciesCommandInput,
  type ListResourcePoliciesCommandOutput,
  ListResourcePoliciesCommand,
} from "./commands/ListResourcePoliciesCommand";
import {
  type ListRetrievedTracesCommandInput,
  type ListRetrievedTracesCommandOutput,
  ListRetrievedTracesCommand,
} from "./commands/ListRetrievedTracesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutEncryptionConfigCommandInput,
  type PutEncryptionConfigCommandOutput,
  PutEncryptionConfigCommand,
} from "./commands/PutEncryptionConfigCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type PutTelemetryRecordsCommandInput,
  type PutTelemetryRecordsCommandOutput,
  PutTelemetryRecordsCommand,
} from "./commands/PutTelemetryRecordsCommand";
import {
  type PutTraceSegmentsCommandInput,
  type PutTraceSegmentsCommandOutput,
  PutTraceSegmentsCommand,
} from "./commands/PutTraceSegmentsCommand";
import {
  type StartTraceRetrievalCommandInput,
  type StartTraceRetrievalCommandOutput,
  StartTraceRetrievalCommand,
} from "./commands/StartTraceRetrievalCommand";
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
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateIndexingRuleCommandInput,
  type UpdateIndexingRuleCommandOutput,
  UpdateIndexingRuleCommand,
} from "./commands/UpdateIndexingRuleCommand";
import {
  type UpdateSamplingRuleCommandInput,
  type UpdateSamplingRuleCommandOutput,
  UpdateSamplingRuleCommand,
} from "./commands/UpdateSamplingRuleCommand";
import {
  type UpdateTraceSegmentDestinationCommandInput,
  type UpdateTraceSegmentDestinationCommandOutput,
  UpdateTraceSegmentDestinationCommand,
} from "./commands/UpdateTraceSegmentDestinationCommand";
import { paginateBatchGetTraces } from "./pagination/BatchGetTracesPaginator";
import { paginateGetGroups } from "./pagination/GetGroupsPaginator";
import { paginateGetInsightEvents } from "./pagination/GetInsightEventsPaginator";
import { paginateGetInsightSummaries } from "./pagination/GetInsightSummariesPaginator";
import { paginateGetSamplingRules } from "./pagination/GetSamplingRulesPaginator";
import { paginateGetSamplingStatisticSummaries } from "./pagination/GetSamplingStatisticSummariesPaginator";
import { paginateGetServiceGraph } from "./pagination/GetServiceGraphPaginator";
import { paginateGetTimeSeriesServiceStatistics } from "./pagination/GetTimeSeriesServiceStatisticsPaginator";
import { paginateGetTraceGraph } from "./pagination/GetTraceGraphPaginator";
import { paginateGetTraceSummaries } from "./pagination/GetTraceSummariesPaginator";
import { paginateListResourcePolicies } from "./pagination/ListResourcePoliciesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { XRayClient } from "./XRayClient";

const commands = {
  BatchGetTracesCommand,
  CancelTraceRetrievalCommand,
  CreateGroupCommand,
  CreateSamplingRuleCommand,
  DeleteGroupCommand,
  DeleteResourcePolicyCommand,
  DeleteSamplingRuleCommand,
  GetEncryptionConfigCommand,
  GetGroupCommand,
  GetGroupsCommand,
  GetIndexingRulesCommand,
  GetInsightCommand,
  GetInsightEventsCommand,
  GetInsightImpactGraphCommand,
  GetInsightSummariesCommand,
  GetRetrievedTracesGraphCommand,
  GetSamplingRulesCommand,
  GetSamplingStatisticSummariesCommand,
  GetSamplingTargetsCommand,
  GetServiceGraphCommand,
  GetTimeSeriesServiceStatisticsCommand,
  GetTraceGraphCommand,
  GetTraceSegmentDestinationCommand,
  GetTraceSummariesCommand,
  ListResourcePoliciesCommand,
  ListRetrievedTracesCommand,
  ListTagsForResourceCommand,
  PutEncryptionConfigCommand,
  PutResourcePolicyCommand,
  PutTelemetryRecordsCommand,
  PutTraceSegmentsCommand,
  StartTraceRetrievalCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGroupCommand,
  UpdateIndexingRuleCommand,
  UpdateSamplingRuleCommand,
  UpdateTraceSegmentDestinationCommand,
};
const paginators = {
  paginateBatchGetTraces,
  paginateGetGroups,
  paginateGetInsightEvents,
  paginateGetInsightSummaries,
  paginateGetSamplingRules,
  paginateGetSamplingStatisticSummaries,
  paginateGetServiceGraph,
  paginateGetTimeSeriesServiceStatistics,
  paginateGetTraceGraph,
  paginateGetTraceSummaries,
  paginateListResourcePolicies,
  paginateListTagsForResource,
};

/**
 * @public
 */
export interface XRayRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface XRay {
  /**
   * @see {@link BatchGetTracesCommand}
   */
  batchGetTraces(
    args: BatchGetTracesCommandInput,
    options?: XRayRequestOptions
  ): Promise<BatchGetTracesCommandOutput>;
  batchGetTraces(
    args: BatchGetTracesCommandInput,
    cb: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): void;
  batchGetTraces(
    args: BatchGetTracesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTraceRetrievalCommand}
   */
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    options?: XRayRequestOptions
  ): Promise<CancelTraceRetrievalCommandOutput>;
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    cb: (err: any, data?: CancelTraceRetrievalCommandOutput) => void
  ): void;
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: CancelTraceRetrievalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: XRayRequestOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSamplingRuleCommand}
   */
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options?: XRayRequestOptions
  ): Promise<CreateSamplingRuleCommandOutput>;
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: XRayRequestOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: XRayRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSamplingRuleCommand}
   */
  deleteSamplingRule(): Promise<DeleteSamplingRuleCommandOutput>;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options?: XRayRequestOptions
  ): Promise<DeleteSamplingRuleCommandOutput>;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEncryptionConfigCommand}
   */
  getEncryptionConfig(): Promise<GetEncryptionConfigCommandOutput>;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetEncryptionConfigCommandOutput>;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupsCommand}
   */
  getGroups(): Promise<GetGroupsCommandOutput>;
  getGroups(
    args: GetGroupsCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetGroupsCommandOutput>;
  getGroups(
    args: GetGroupsCommandInput,
    cb: (err: any, data?: GetGroupsCommandOutput) => void
  ): void;
  getGroups(
    args: GetGroupsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexingRulesCommand}
   */
  getIndexingRules(): Promise<GetIndexingRulesCommandOutput>;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetIndexingRulesCommandOutput>;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    cb: (err: any, data?: GetIndexingRulesCommandOutput) => void
  ): void;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetIndexingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightCommand}
   */
  getInsight(
    args: GetInsightCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetInsightCommandOutput>;
  getInsight(
    args: GetInsightCommandInput,
    cb: (err: any, data?: GetInsightCommandOutput) => void
  ): void;
  getInsight(
    args: GetInsightCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightEventsCommand}
   */
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetInsightEventsCommandOutput>;
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    cb: (err: any, data?: GetInsightEventsCommandOutput) => void
  ): void;
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetInsightEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightImpactGraphCommand}
   */
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetInsightImpactGraphCommandOutput>;
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void
  ): void;
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightSummariesCommand}
   */
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetInsightSummariesCommandOutput>;
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    cb: (err: any, data?: GetInsightSummariesCommandOutput) => void
  ): void;
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetInsightSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetrievedTracesGraphCommand}
   */
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetRetrievedTracesGraphCommandOutput>;
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    cb: (err: any, data?: GetRetrievedTracesGraphCommandOutput) => void
  ): void;
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetRetrievedTracesGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingRulesCommand}
   */
  getSamplingRules(): Promise<GetSamplingRulesCommandOutput>;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetSamplingRulesCommandOutput>;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingStatisticSummariesCommand}
   */
  getSamplingStatisticSummaries(): Promise<GetSamplingStatisticSummariesCommandOutput>;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetSamplingStatisticSummariesCommandOutput>;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingTargetsCommand}
   */
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetSamplingTargetsCommandOutput>;
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceGraphCommand}
   */
  getServiceGraph(
    args: GetServiceGraphCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetServiceGraphCommandOutput>;
  getServiceGraph(
    args: GetServiceGraphCommandInput,
    cb: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): void;
  getServiceGraph(
    args: GetServiceGraphCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimeSeriesServiceStatisticsCommand}
   */
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput>;
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceGraphCommand}
   */
  getTraceGraph(
    args: GetTraceGraphCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetTraceGraphCommandOutput>;
  getTraceGraph(
    args: GetTraceGraphCommandInput,
    cb: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): void;
  getTraceGraph(
    args: GetTraceGraphCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceSegmentDestinationCommand}
   */
  getTraceSegmentDestination(): Promise<GetTraceSegmentDestinationCommandOutput>;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetTraceSegmentDestinationCommandOutput>;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    cb: (err: any, data?: GetTraceSegmentDestinationCommandOutput) => void
  ): void;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetTraceSegmentDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceSummariesCommand}
   */
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options?: XRayRequestOptions
  ): Promise<GetTraceSummariesCommandOutput>;
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePoliciesCommand}
   */
  listResourcePolicies(): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options?: XRayRequestOptions
  ): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetrievedTracesCommand}
   */
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    options?: XRayRequestOptions
  ): Promise<ListRetrievedTracesCommandOutput>;
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    cb: (err: any, data?: ListRetrievedTracesCommandOutput) => void
  ): void;
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: ListRetrievedTracesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: XRayRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEncryptionConfigCommand}
   */
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options?: XRayRequestOptions
  ): Promise<PutEncryptionConfigCommandOutput>;
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): void;
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: XRayRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTelemetryRecordsCommand}
   */
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options?: XRayRequestOptions
  ): Promise<PutTelemetryRecordsCommandOutput>;
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTraceSegmentsCommand}
   */
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options?: XRayRequestOptions
  ): Promise<PutTraceSegmentsCommandOutput>;
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTraceRetrievalCommand}
   */
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    options?: XRayRequestOptions
  ): Promise<StartTraceRetrievalCommandOutput>;
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    cb: (err: any, data?: StartTraceRetrievalCommandOutput) => void
  ): void;
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: StartTraceRetrievalCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: XRayRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: XRayRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: XRayRequestOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexingRuleCommand}
   */
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    options?: XRayRequestOptions
  ): Promise<UpdateIndexingRuleCommandOutput>;
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    cb: (err: any, data?: UpdateIndexingRuleCommandOutput) => void
  ): void;
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: UpdateIndexingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSamplingRuleCommand}
   */
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options?: XRayRequestOptions
  ): Promise<UpdateSamplingRuleCommandOutput>;
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTraceSegmentDestinationCommand}
   */
  updateTraceSegmentDestination(): Promise<UpdateTraceSegmentDestinationCommandOutput>;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    options?: XRayRequestOptions
  ): Promise<UpdateTraceSegmentDestinationCommandOutput>;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    cb: (err: any, data?: UpdateTraceSegmentDestinationCommandOutput) => void
  ): void;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    options: XRayRequestOptions,
    cb: (err: any, data?: UpdateTraceSegmentDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTracesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetTracesCommandOutput}.
   */
  paginateBatchGetTraces(
    args: BatchGetTracesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetTracesCommandOutput>;

  /**
   * @see {@link GetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetGroupsCommandOutput}.
   */
  paginateGetGroups(
    args?: GetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetGroupsCommandOutput>;

  /**
   * @see {@link GetInsightEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetInsightEventsCommandOutput}.
   */
  paginateGetInsightEvents(
    args: GetInsightEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetInsightEventsCommandOutput>;

  /**
   * @see {@link GetInsightSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetInsightSummariesCommandOutput}.
   */
  paginateGetInsightSummaries(
    args: GetInsightSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetInsightSummariesCommandOutput>;

  /**
   * @see {@link GetSamplingRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSamplingRulesCommandOutput}.
   */
  paginateGetSamplingRules(
    args?: GetSamplingRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSamplingRulesCommandOutput>;

  /**
   * @see {@link GetSamplingStatisticSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSamplingStatisticSummariesCommandOutput}.
   */
  paginateGetSamplingStatisticSummaries(
    args?: GetSamplingStatisticSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSamplingStatisticSummariesCommandOutput>;

  /**
   * @see {@link GetServiceGraphCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetServiceGraphCommandOutput}.
   */
  paginateGetServiceGraph(
    args: GetServiceGraphCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetServiceGraphCommandOutput>;

  /**
   * @see {@link GetTimeSeriesServiceStatisticsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTimeSeriesServiceStatisticsCommandOutput}.
   */
  paginateGetTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTimeSeriesServiceStatisticsCommandOutput>;

  /**
   * @see {@link GetTraceGraphCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTraceGraphCommandOutput}.
   */
  paginateGetTraceGraph(
    args: GetTraceGraphCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTraceGraphCommandOutput>;

  /**
   * @see {@link GetTraceSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTraceSummariesCommandOutput}.
   */
  paginateGetTraceSummaries(
    args: GetTraceSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTraceSummariesCommandOutput>;

  /**
   * @see {@link ListResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcePoliciesCommandOutput}.
   */
  paginateListResourcePolicies(
    args?: ListResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcePoliciesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;
}

/**
 * <p>Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 * @public
 */
export class XRay extends XRayClient implements XRay {}
createAggregatedClient(commands, XRay, { paginators });
