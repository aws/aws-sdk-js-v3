// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
} from "./commands/BatchGetTracesCommand";
import {
  CancelTraceRetrievalCommand,
  CancelTraceRetrievalCommandInput,
  CancelTraceRetrievalCommandOutput,
} from "./commands/CancelTraceRetrievalCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateSamplingRuleCommand,
  CreateSamplingRuleCommandInput,
  CreateSamplingRuleCommandOutput,
} from "./commands/CreateSamplingRuleCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSamplingRuleCommand,
  DeleteSamplingRuleCommandInput,
  DeleteSamplingRuleCommandOutput,
} from "./commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommand,
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
} from "./commands/GetEncryptionConfigCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupsCommand, GetGroupsCommandInput, GetGroupsCommandOutput } from "./commands/GetGroupsCommand";
import {
  GetIndexingRulesCommand,
  GetIndexingRulesCommandInput,
  GetIndexingRulesCommandOutput,
} from "./commands/GetIndexingRulesCommand";
import { GetInsightCommand, GetInsightCommandInput, GetInsightCommandOutput } from "./commands/GetInsightCommand";
import {
  GetInsightEventsCommand,
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput,
} from "./commands/GetInsightEventsCommand";
import {
  GetInsightImpactGraphCommand,
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
} from "./commands/GetInsightImpactGraphCommand";
import {
  GetInsightSummariesCommand,
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "./commands/GetInsightSummariesCommand";
import {
  GetRetrievedTracesGraphCommand,
  GetRetrievedTracesGraphCommandInput,
  GetRetrievedTracesGraphCommandOutput,
} from "./commands/GetRetrievedTracesGraphCommand";
import {
  GetSamplingRulesCommand,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
} from "./commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommand,
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "./commands/GetSamplingStatisticSummariesCommand";
import {
  GetSamplingTargetsCommand,
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput,
} from "./commands/GetSamplingTargetsCommand";
import {
  GetServiceGraphCommand,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
} from "./commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "./commands/GetTimeSeriesServiceStatisticsCommand";
import {
  GetTraceGraphCommand,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
} from "./commands/GetTraceGraphCommand";
import {
  GetTraceSegmentDestinationCommand,
  GetTraceSegmentDestinationCommandInput,
  GetTraceSegmentDestinationCommandOutput,
} from "./commands/GetTraceSegmentDestinationCommand";
import {
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
} from "./commands/GetTraceSummariesCommand";
import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "./commands/ListResourcePoliciesCommand";
import {
  ListRetrievedTracesCommand,
  ListRetrievedTracesCommandInput,
  ListRetrievedTracesCommandOutput,
} from "./commands/ListRetrievedTracesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutEncryptionConfigCommand,
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "./commands/PutEncryptionConfigCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutTelemetryRecordsCommand,
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
} from "./commands/PutTelemetryRecordsCommand";
import {
  PutTraceSegmentsCommand,
  PutTraceSegmentsCommandInput,
  PutTraceSegmentsCommandOutput,
} from "./commands/PutTraceSegmentsCommand";
import {
  StartTraceRetrievalCommand,
  StartTraceRetrievalCommandInput,
  StartTraceRetrievalCommandOutput,
} from "./commands/StartTraceRetrievalCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIndexingRuleCommand,
  UpdateIndexingRuleCommandInput,
  UpdateIndexingRuleCommandOutput,
} from "./commands/UpdateIndexingRuleCommand";
import {
  UpdateSamplingRuleCommand,
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput,
} from "./commands/UpdateSamplingRuleCommand";
import {
  UpdateTraceSegmentDestinationCommand,
  UpdateTraceSegmentDestinationCommandInput,
  UpdateTraceSegmentDestinationCommandOutput,
} from "./commands/UpdateTraceSegmentDestinationCommand";
import { XRayClient, XRayClientConfig } from "./XRayClient";

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

export interface XRay {
  /**
   * @see {@link BatchGetTracesCommand}
   */
  batchGetTraces(
    args: BatchGetTracesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTracesCommandOutput>;
  batchGetTraces(args: BatchGetTracesCommandInput, cb: (err: any, data?: BatchGetTracesCommandOutput) => void): void;
  batchGetTraces(
    args: BatchGetTracesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTracesCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTraceRetrievalCommand}
   */
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTraceRetrievalCommandOutput>;
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    cb: (err: any, data?: CancelTraceRetrievalCommandOutput) => void
  ): void;
  cancelTraceRetrieval(
    args: CancelTraceRetrievalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTraceRetrievalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSamplingRuleCommand}
   */
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSamplingRuleCommandOutput>;
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;
  createSamplingRule(
    args: CreateSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
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
   * @see {@link DeleteSamplingRuleCommand}
   */
  deleteSamplingRule(): Promise<DeleteSamplingRuleCommandOutput>;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSamplingRuleCommandOutput>;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;
  deleteSamplingRule(
    args: DeleteSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEncryptionConfigCommand}
   */
  getEncryptionConfig(): Promise<GetEncryptionConfigCommandOutput>;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEncryptionConfigCommandOutput>;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;
  getEncryptionConfig(
    args: GetEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupsCommand}
   */
  getGroups(): Promise<GetGroupsCommandOutput>;
  getGroups(args: GetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupsCommandOutput>;
  getGroups(args: GetGroupsCommandInput, cb: (err: any, data?: GetGroupsCommandOutput) => void): void;
  getGroups(
    args: GetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexingRulesCommand}
   */
  getIndexingRules(): Promise<GetIndexingRulesCommandOutput>;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexingRulesCommandOutput>;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    cb: (err: any, data?: GetIndexingRulesCommandOutput) => void
  ): void;
  getIndexingRules(
    args: GetIndexingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightCommand}
   */
  getInsight(args: GetInsightCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightCommandOutput>;
  getInsight(args: GetInsightCommandInput, cb: (err: any, data?: GetInsightCommandOutput) => void): void;
  getInsight(
    args: GetInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightEventsCommand}
   */
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightEventsCommandOutput>;
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    cb: (err: any, data?: GetInsightEventsCommandOutput) => void
  ): void;
  getInsightEvents(
    args: GetInsightEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightImpactGraphCommand}
   */
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightImpactGraphCommandOutput>;
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void
  ): void;
  getInsightImpactGraph(
    args: GetInsightImpactGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightSummariesCommand}
   */
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightSummariesCommandOutput>;
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    cb: (err: any, data?: GetInsightSummariesCommandOutput) => void
  ): void;
  getInsightSummaries(
    args: GetInsightSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetrievedTracesGraphCommand}
   */
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetrievedTracesGraphCommandOutput>;
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    cb: (err: any, data?: GetRetrievedTracesGraphCommandOutput) => void
  ): void;
  getRetrievedTracesGraph(
    args: GetRetrievedTracesGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetrievedTracesGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingRulesCommand}
   */
  getSamplingRules(): Promise<GetSamplingRulesCommandOutput>;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingRulesCommandOutput>;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;
  getSamplingRules(
    args: GetSamplingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingStatisticSummariesCommand}
   */
  getSamplingStatisticSummaries(): Promise<GetSamplingStatisticSummariesCommandOutput>;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingStatisticSummariesCommandOutput>;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;
  getSamplingStatisticSummaries(
    args: GetSamplingStatisticSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingTargetsCommand}
   */
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSamplingTargetsCommandOutput>;
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;
  getSamplingTargets(
    args: GetSamplingTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceGraphCommand}
   */
  getServiceGraph(
    args: GetServiceGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceGraphCommandOutput>;
  getServiceGraph(args: GetServiceGraphCommandInput, cb: (err: any, data?: GetServiceGraphCommandOutput) => void): void;
  getServiceGraph(
    args: GetServiceGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimeSeriesServiceStatisticsCommand}
   */
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput>;
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;
  getTimeSeriesServiceStatistics(
    args: GetTimeSeriesServiceStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceGraphCommand}
   */
  getTraceGraph(args: GetTraceGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetTraceGraphCommandOutput>;
  getTraceGraph(args: GetTraceGraphCommandInput, cb: (err: any, data?: GetTraceGraphCommandOutput) => void): void;
  getTraceGraph(
    args: GetTraceGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTraceGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceSegmentDestinationCommand}
   */
  getTraceSegmentDestination(): Promise<GetTraceSegmentDestinationCommandOutput>;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTraceSegmentDestinationCommandOutput>;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    cb: (err: any, data?: GetTraceSegmentDestinationCommandOutput) => void
  ): void;
  getTraceSegmentDestination(
    args: GetTraceSegmentDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTraceSegmentDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTraceSummariesCommand}
   */
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTraceSummariesCommandOutput>;
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;
  getTraceSummaries(
    args: GetTraceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTraceSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePoliciesCommand}
   */
  listResourcePolicies(): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetrievedTracesCommand}
   */
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetrievedTracesCommandOutput>;
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    cb: (err: any, data?: ListRetrievedTracesCommandOutput) => void
  ): void;
  listRetrievedTraces(
    args: ListRetrievedTracesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetrievedTracesCommandOutput) => void
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
   * @see {@link PutEncryptionConfigCommand}
   */
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEncryptionConfigCommandOutput>;
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
  ): void;
  putEncryptionConfig(
    args: PutEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void
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
   * @see {@link PutTelemetryRecordsCommand}
   */
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTelemetryRecordsCommandOutput>;
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;
  putTelemetryRecords(
    args: PutTelemetryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTraceSegmentsCommand}
   */
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTraceSegmentsCommandOutput>;
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;
  putTraceSegments(
    args: PutTraceSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTraceRetrievalCommand}
   */
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTraceRetrievalCommandOutput>;
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    cb: (err: any, data?: StartTraceRetrievalCommandOutput) => void
  ): void;
  startTraceRetrieval(
    args: StartTraceRetrievalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTraceRetrievalCommandOutput) => void
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
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexingRuleCommand}
   */
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexingRuleCommandOutput>;
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    cb: (err: any, data?: UpdateIndexingRuleCommandOutput) => void
  ): void;
  updateIndexingRule(
    args: UpdateIndexingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSamplingRuleCommand}
   */
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSamplingRuleCommandOutput>;
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;
  updateSamplingRule(
    args: UpdateSamplingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTraceSegmentDestinationCommand}
   */
  updateTraceSegmentDestination(): Promise<UpdateTraceSegmentDestinationCommandOutput>;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTraceSegmentDestinationCommandOutput>;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    cb: (err: any, data?: UpdateTraceSegmentDestinationCommandOutput) => void
  ): void;
  updateTraceSegmentDestination(
    args: UpdateTraceSegmentDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTraceSegmentDestinationCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 * @public
 */
export class XRay extends XRayClient implements XRay {}
createAggregatedClient(commands, XRay);
