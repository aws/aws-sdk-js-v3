// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AddTagsToStreamCommandInput,
  type AddTagsToStreamCommandOutput,
  AddTagsToStreamCommand,
} from "./commands/AddTagsToStreamCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateStreamCommandInput,
  type CreateStreamCommandOutput,
  CreateStreamCommand,
} from "./commands/CreateStreamCommand";
import {
  type DecreaseStreamRetentionPeriodCommandInput,
  type DecreaseStreamRetentionPeriodCommandOutput,
  DecreaseStreamRetentionPeriodCommand,
} from "./commands/DecreaseStreamRetentionPeriodCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteStreamCommandInput,
  type DeleteStreamCommandOutput,
  DeleteStreamCommand,
} from "./commands/DeleteStreamCommand";
import {
  type DeregisterStreamConsumerCommandInput,
  type DeregisterStreamConsumerCommandOutput,
  DeregisterStreamConsumerCommand,
} from "./commands/DeregisterStreamConsumerCommand";
import {
  type DescribeAccountSettingsCommandInput,
  type DescribeAccountSettingsCommandOutput,
  DescribeAccountSettingsCommand,
} from "./commands/DescribeAccountSettingsCommand";
import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "./commands/DescribeChannelCommand";
import {
  type DescribeLimitsCommandInput,
  type DescribeLimitsCommandOutput,
  DescribeLimitsCommand,
} from "./commands/DescribeLimitsCommand";
import {
  type DescribeStreamCommandInput,
  type DescribeStreamCommandOutput,
  DescribeStreamCommand,
} from "./commands/DescribeStreamCommand";
import {
  type DescribeStreamConsumerCommandInput,
  type DescribeStreamConsumerCommandOutput,
  DescribeStreamConsumerCommand,
} from "./commands/DescribeStreamConsumerCommand";
import {
  type DescribeStreamSummaryCommandInput,
  type DescribeStreamSummaryCommandOutput,
  DescribeStreamSummaryCommand,
} from "./commands/DescribeStreamSummaryCommand";
import {
  type DisableEnhancedMonitoringCommandInput,
  type DisableEnhancedMonitoringCommandOutput,
  DisableEnhancedMonitoringCommand,
} from "./commands/DisableEnhancedMonitoringCommand";
import {
  type EnableEnhancedMonitoringCommandInput,
  type EnableEnhancedMonitoringCommandOutput,
  EnableEnhancedMonitoringCommand,
} from "./commands/EnableEnhancedMonitoringCommand";
import {
  type GetRecordsCommandInput,
  type GetRecordsCommandOutput,
  GetRecordsCommand,
} from "./commands/GetRecordsCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetShardIteratorCommandInput,
  type GetShardIteratorCommandOutput,
  GetShardIteratorCommand,
} from "./commands/GetShardIteratorCommand";
import {
  type IncreaseStreamRetentionPeriodCommandInput,
  type IncreaseStreamRetentionPeriodCommandOutput,
  IncreaseStreamRetentionPeriodCommand,
} from "./commands/IncreaseStreamRetentionPeriodCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListShardsCommandInput,
  type ListShardsCommandOutput,
  ListShardsCommand,
} from "./commands/ListShardsCommand";
import {
  type ListStreamConsumersCommandInput,
  type ListStreamConsumersCommandOutput,
  ListStreamConsumersCommand,
} from "./commands/ListStreamConsumersCommand";
import {
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListStreamsCommand,
} from "./commands/ListStreamsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTagsForStreamCommandInput,
  type ListTagsForStreamCommandOutput,
  ListTagsForStreamCommand,
} from "./commands/ListTagsForStreamCommand";
import {
  type MergeShardsCommandInput,
  type MergeShardsCommandOutput,
  MergeShardsCommand,
} from "./commands/MergeShardsCommand";
import { type PutRecordCommandInput, type PutRecordCommandOutput, PutRecordCommand } from "./commands/PutRecordCommand";
import {
  type PutRecordsCommandInput,
  type PutRecordsCommandOutput,
  PutRecordsCommand,
} from "./commands/PutRecordsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RegisterStreamConsumerCommandInput,
  type RegisterStreamConsumerCommandOutput,
  RegisterStreamConsumerCommand,
} from "./commands/RegisterStreamConsumerCommand";
import {
  type RemoveTagsFromStreamCommandInput,
  type RemoveTagsFromStreamCommandOutput,
  RemoveTagsFromStreamCommand,
} from "./commands/RemoveTagsFromStreamCommand";
import {
  type SplitShardCommandInput,
  type SplitShardCommandOutput,
  SplitShardCommand,
} from "./commands/SplitShardCommand";
import {
  type StartStreamEncryptionCommandInput,
  type StartStreamEncryptionCommandOutput,
  StartStreamEncryptionCommand,
} from "./commands/StartStreamEncryptionCommand";
import {
  type StopStreamEncryptionCommandInput,
  type StopStreamEncryptionCommandOutput,
  StopStreamEncryptionCommand,
} from "./commands/StopStreamEncryptionCommand";
import {
  type SubscribeToShardCommandInput,
  type SubscribeToShardCommandOutput,
  SubscribeToShardCommand,
} from "./commands/SubscribeToShardCommand";
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
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateChannelCommand,
} from "./commands/UpdateChannelCommand";
import {
  type UpdateMaxRecordSizeCommandInput,
  type UpdateMaxRecordSizeCommandOutput,
  UpdateMaxRecordSizeCommand,
} from "./commands/UpdateMaxRecordSizeCommand";
import {
  type UpdateShardCountCommandInput,
  type UpdateShardCountCommandOutput,
  UpdateShardCountCommand,
} from "./commands/UpdateShardCountCommand";
import {
  type UpdateStreamModeCommandInput,
  type UpdateStreamModeCommandOutput,
  UpdateStreamModeCommand,
} from "./commands/UpdateStreamModeCommand";
import {
  type UpdateStreamRecordDistributionStrategyCommandInput,
  type UpdateStreamRecordDistributionStrategyCommandOutput,
  UpdateStreamRecordDistributionStrategyCommand,
} from "./commands/UpdateStreamRecordDistributionStrategyCommand";
import {
  type UpdateStreamWarmThroughputCommandInput,
  type UpdateStreamWarmThroughputCommandOutput,
  UpdateStreamWarmThroughputCommand,
} from "./commands/UpdateStreamWarmThroughputCommand";
import { KinesisClient } from "./KinesisClient";
import type { ResourceNotFoundException } from "./models/errors";
import type { KinesisServiceException } from "./models/KinesisServiceException";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListStreamConsumers } from "./pagination/ListStreamConsumersPaginator";
import { paginateListStreams } from "./pagination/ListStreamsPaginator";
import { waitUntilChannelActive } from "./waiters/waitForChannelActive";
import { waitUntilStreamExists } from "./waiters/waitForStreamExists";
import { waitUntilStreamNotExists } from "./waiters/waitForStreamNotExists";

const commands = {
  AddTagsToStreamCommand,
  CreateChannelCommand,
  CreateStreamCommand,
  DecreaseStreamRetentionPeriodCommand,
  DeleteChannelCommand,
  DeleteResourcePolicyCommand,
  DeleteStreamCommand,
  DeregisterStreamConsumerCommand,
  DescribeAccountSettingsCommand,
  DescribeChannelCommand,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  DisableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringCommand,
  GetRecordsCommand,
  GetResourcePolicyCommand,
  GetShardIteratorCommand,
  IncreaseStreamRetentionPeriodCommand,
  ListChannelsCommand,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTagsForStreamCommand,
  MergeShardsCommand,
  PutRecordCommand,
  PutRecordsCommand,
  PutResourcePolicyCommand,
  RegisterStreamConsumerCommand,
  RemoveTagsFromStreamCommand,
  SplitShardCommand,
  StartStreamEncryptionCommand,
  StopStreamEncryptionCommand,
  SubscribeToShardCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateChannelCommand,
  UpdateMaxRecordSizeCommand,
  UpdateShardCountCommand,
  UpdateStreamModeCommand,
  UpdateStreamRecordDistributionStrategyCommand,
  UpdateStreamWarmThroughputCommand,
};
const paginators = {
  paginateListChannels,
  paginateListStreamConsumers,
  paginateListStreams,
};
const waiters = {
  waitUntilChannelActive,
  waitUntilStreamExists,
  waitUntilStreamNotExists,
};

/**
 * @public
 */
export interface KinesisRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Kinesis {
  /**
   * @see {@link AddTagsToStreamCommand}
   */
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<AddTagsToStreamCommandOutput>;
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    cb: (err: any, data?: AddTagsToStreamCommandOutput) => void
  ): void;
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: AddTagsToStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: KinesisRequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(
    args: CreateStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<CreateStreamCommandOutput>;
  createStream(
    args: CreateStreamCommandInput,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  createStream(
    args: CreateStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DecreaseStreamRetentionPeriodCommand}
   */
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DecreaseStreamRetentionPeriodCommandOutput>;
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    cb: (err: any, data?: DecreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DecreaseStreamRetentionPeriodCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(): Promise<DeleteStreamCommandOutput>;
  deleteStream(
    args: DeleteStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DeleteStreamCommandOutput>;
  deleteStream(
    args: DeleteStreamCommandInput,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterStreamConsumerCommand}
   */
  deregisterStreamConsumer(): Promise<DeregisterStreamConsumerCommandOutput>;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DeregisterStreamConsumerCommandOutput>;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    cb: (err: any, data?: DeregisterStreamConsumerCommandOutput) => void
  ): void;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DeregisterStreamConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLimitsCommand}
   */
  describeLimits(): Promise<DescribeLimitsCommandOutput>;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeLimitsCommandOutput>;
  describeLimits(
    args: DescribeLimitsCommandInput,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamConsumerCommand}
   */
  describeStreamConsumer(): Promise<DescribeStreamConsumerCommandOutput>;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeStreamConsumerCommandOutput>;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    cb: (err: any, data?: DescribeStreamConsumerCommandOutput) => void
  ): void;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeStreamConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamSummaryCommand}
   */
  describeStreamSummary(): Promise<DescribeStreamSummaryCommandOutput>;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DescribeStreamSummaryCommandOutput>;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    cb: (err: any, data?: DescribeStreamSummaryCommandOutput) => void
  ): void;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DescribeStreamSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableEnhancedMonitoringCommand}
   */
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    options?: KinesisRequestOptions
  ): Promise<DisableEnhancedMonitoringCommandOutput>;
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    cb: (err: any, data?: DisableEnhancedMonitoringCommandOutput) => void
  ): void;
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: DisableEnhancedMonitoringCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableEnhancedMonitoringCommand}
   */
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    options?: KinesisRequestOptions
  ): Promise<EnableEnhancedMonitoringCommandOutput>;
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    cb: (err: any, data?: EnableEnhancedMonitoringCommandOutput) => void
  ): void;
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: EnableEnhancedMonitoringCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<GetRecordsCommandOutput>;
  getRecords(
    args: GetRecordsCommandInput,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: KinesisRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: KinesisRequestOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;

  /**
   * @see {@link IncreaseStreamRetentionPeriodCommand}
   */
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    options?: KinesisRequestOptions
  ): Promise<IncreaseStreamRetentionPeriodCommandOutput>;
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    cb: (err: any, data?: IncreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: IncreaseStreamRetentionPeriodCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListShardsCommand}
   */
  listShards(): Promise<ListShardsCommandOutput>;
  listShards(
    args: ListShardsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListShardsCommandOutput>;
  listShards(
    args: ListShardsCommandInput,
    cb: (err: any, data?: ListShardsCommandOutput) => void
  ): void;
  listShards(
    args: ListShardsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListShardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamConsumersCommand}
   */
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListStreamConsumersCommandOutput>;
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    cb: (err: any, data?: ListStreamConsumersCommandOutput) => void
  ): void;
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListStreamConsumersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForStreamCommand}
   */
  listTagsForStream(): Promise<ListTagsForStreamCommandOutput>;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<ListTagsForStreamCommandOutput>;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link MergeShardsCommand}
   */
  mergeShards(
    args: MergeShardsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<MergeShardsCommandOutput>;
  mergeShards(
    args: MergeShardsCommandInput,
    cb: (err: any, data?: MergeShardsCommandOutput) => void
  ): void;
  mergeShards(
    args: MergeShardsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: MergeShardsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(
    args: PutRecordCommandInput,
    options?: KinesisRequestOptions
  ): Promise<PutRecordCommandOutput>;
  putRecord(
    args: PutRecordCommandInput,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  putRecord(
    args: PutRecordCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordsCommand}
   */
  putRecords(
    args: PutRecordsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<PutRecordsCommandOutput>;
  putRecords(
    args: PutRecordsCommandInput,
    cb: (err: any, data?: PutRecordsCommandOutput) => void
  ): void;
  putRecords(
    args: PutRecordsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: PutRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: KinesisRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterStreamConsumerCommand}
   */
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    options?: KinesisRequestOptions
  ): Promise<RegisterStreamConsumerCommandOutput>;
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    cb: (err: any, data?: RegisterStreamConsumerCommandOutput) => void
  ): void;
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: RegisterStreamConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromStreamCommand}
   */
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    options?: KinesisRequestOptions
  ): Promise<RemoveTagsFromStreamCommandOutput>;
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    cb: (err: any, data?: RemoveTagsFromStreamCommandOutput) => void
  ): void;
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: RemoveTagsFromStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link SplitShardCommand}
   */
  splitShard(
    args: SplitShardCommandInput,
    options?: KinesisRequestOptions
  ): Promise<SplitShardCommandOutput>;
  splitShard(
    args: SplitShardCommandInput,
    cb: (err: any, data?: SplitShardCommandOutput) => void
  ): void;
  splitShard(
    args: SplitShardCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: SplitShardCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamEncryptionCommand}
   */
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    options?: KinesisRequestOptions
  ): Promise<StartStreamEncryptionCommandOutput>;
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    cb: (err: any, data?: StartStreamEncryptionCommandOutput) => void
  ): void;
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: StartStreamEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStreamEncryptionCommand}
   */
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    options?: KinesisRequestOptions
  ): Promise<StopStreamEncryptionCommandOutput>;
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    cb: (err: any, data?: StopStreamEncryptionCommandOutput) => void
  ): void;
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: StopStreamEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeToShardCommand}
   */
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    options?: KinesisRequestOptions
  ): Promise<SubscribeToShardCommandOutput>;
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    cb: (err: any, data?: SubscribeToShardCommandOutput) => void
  ): void;
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: SubscribeToShardCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: KinesisRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMaxRecordSizeCommand}
   */
  updateMaxRecordSize(
    args: UpdateMaxRecordSizeCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateMaxRecordSizeCommandOutput>;
  updateMaxRecordSize(
    args: UpdateMaxRecordSizeCommandInput,
    cb: (err: any, data?: UpdateMaxRecordSizeCommandOutput) => void
  ): void;
  updateMaxRecordSize(
    args: UpdateMaxRecordSizeCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateMaxRecordSizeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateShardCountCommand}
   */
  updateShardCount(
    args: UpdateShardCountCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateShardCountCommandOutput>;
  updateShardCount(
    args: UpdateShardCountCommandInput,
    cb: (err: any, data?: UpdateShardCountCommandOutput) => void
  ): void;
  updateShardCount(
    args: UpdateShardCountCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateShardCountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamModeCommand}
   */
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateStreamModeCommandOutput>;
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    cb: (err: any, data?: UpdateStreamModeCommandOutput) => void
  ): void;
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateStreamModeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamRecordDistributionStrategyCommand}
   */
  updateStreamRecordDistributionStrategy(
    args: UpdateStreamRecordDistributionStrategyCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateStreamRecordDistributionStrategyCommandOutput>;
  updateStreamRecordDistributionStrategy(
    args: UpdateStreamRecordDistributionStrategyCommandInput,
    cb: (err: any, data?: UpdateStreamRecordDistributionStrategyCommandOutput) => void
  ): void;
  updateStreamRecordDistributionStrategy(
    args: UpdateStreamRecordDistributionStrategyCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateStreamRecordDistributionStrategyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamWarmThroughputCommand}
   */
  updateStreamWarmThroughput(
    args: UpdateStreamWarmThroughputCommandInput,
    options?: KinesisRequestOptions
  ): Promise<UpdateStreamWarmThroughputCommandOutput>;
  updateStreamWarmThroughput(
    args: UpdateStreamWarmThroughputCommandInput,
    cb: (err: any, data?: UpdateStreamWarmThroughputCommandOutput) => void
  ): void;
  updateStreamWarmThroughput(
    args: UpdateStreamWarmThroughputCommandInput,
    options: KinesisRequestOptions,
    cb: (err: any, data?: UpdateStreamWarmThroughputCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args?: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListStreamConsumersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamConsumersCommandOutput}.
   */
  paginateListStreamConsumers(
    args: ListStreamConsumersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamConsumersCommandOutput>;

  /**
   * @see {@link ListStreamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamsCommandOutput}.
   */
  paginateListStreams(
    args?: ListStreamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamsCommandOutput>;

  /**
   * @see {@link DescribeChannelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilChannelActive(
    args: DescribeChannelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Kinesis>, "client">
  ): Promise<WaiterResult<DescribeChannelCommandOutput>>;

  /**
   * @see {@link DescribeStreamCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamExists(
    args: DescribeStreamCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Kinesis>, "client">
  ): Promise<WaiterResult<DescribeStreamCommandOutput>>;

  /**
   * @see {@link DescribeStreamCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamNotExists(
    args: DescribeStreamCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Kinesis>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;
}

/**
 * <fullname>Amazon Kinesis Data Streams Service API Reference</fullname>
 *          <p>Amazon Kinesis Data Streams is a managed service that scales elastically for real-time
 *             processing of streaming big data.</p>
 * @public
 */
export class Kinesis extends KinesisClient implements Kinesis {}
createAggregatedClient(commands, Kinesis, { paginators, waiters });
