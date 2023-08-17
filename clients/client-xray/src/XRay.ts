// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
} from "./commands/BatchGetTracesCommand";
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
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateSamplingRuleCommand,
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput,
} from "./commands/UpdateSamplingRuleCommand";
import { XRayClient, XRayClientConfig } from "./XRayClient";

const commands = {
  BatchGetTracesCommand,
  CreateGroupCommand,
  CreateSamplingRuleCommand,
  DeleteGroupCommand,
  DeleteResourcePolicyCommand,
  DeleteSamplingRuleCommand,
  GetEncryptionConfigCommand,
  GetGroupCommand,
  GetGroupsCommand,
  GetInsightCommand,
  GetInsightEventsCommand,
  GetInsightImpactGraphCommand,
  GetInsightSummariesCommand,
  GetSamplingRulesCommand,
  GetSamplingStatisticSummariesCommand,
  GetSamplingTargetsCommand,
  GetServiceGraphCommand,
  GetTimeSeriesServiceStatisticsCommand,
  GetTraceGraphCommand,
  GetTraceSummariesCommand,
  ListResourcePoliciesCommand,
  ListTagsForResourceCommand,
  PutEncryptionConfigCommand,
  PutResourcePolicyCommand,
  PutTelemetryRecordsCommand,
  PutTraceSegmentsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGroupCommand,
  UpdateSamplingRuleCommand,
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
  getGroups(args: GetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupsCommandOutput>;
  getGroups(args: GetGroupsCommandInput, cb: (err: any, data?: GetGroupsCommandOutput) => void): void;
  getGroups(
    args: GetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupsCommandOutput) => void
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
   * @see {@link GetSamplingRulesCommand}
   */
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
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export class XRay extends XRayClient implements XRay {}
createAggregatedClient(commands, XRay);
