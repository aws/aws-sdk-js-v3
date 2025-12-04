import {
  AddTagsToStreamCommand,
  ConsumerStatus,
  CreateStreamCommand,
  DecreaseStreamRetentionPeriodCommand,
  DeleteResourcePolicyCommand,
  DeleteStreamCommand,
  DeregisterStreamConsumerCommand,
  DescribeAccountSettingsCommand,
  DescribeLimitsCommand,
  DescribeStreamCommand,
  DescribeStreamConsumerCommand,
  DescribeStreamSummaryCommand,
  DisableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringCommand,
  EncryptionType,
  GetRecordsCommand,
  GetResourcePolicyCommand,
  GetShardIteratorCommand,
  IncreaseStreamRetentionPeriodCommand,
  InternalFailureException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  Kinesis,
  KinesisClient,
  KinesisServiceException,
  ListShardsCommand,
  ListStreamConsumersCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTagsForStreamCommand,
  MergeShardsCommand,
  MetricsName,
  MinimumThroughputBillingCommitmentInputStatus,
  MinimumThroughputBillingCommitmentOutputStatus,
  PutRecordCommand,
  PutRecordsCommand,
  PutResourcePolicyCommand,
  RegisterStreamConsumerCommand,
  RemoveTagsFromStreamCommand,
  ResourceInUseException,
  ResourceNotFoundException,
  ScalingType,
  ShardFilterType,
  ShardIteratorType,
  SplitShardCommand,
  StartStreamEncryptionCommand,
  StopStreamEncryptionCommand,
  StreamMode,
  StreamStatus,
  SubscribeToShardCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateMaxRecordSizeCommand,
  UpdateShardCountCommand,
  UpdateStreamModeCommand,
  UpdateStreamWarmThroughputCommand,
  paginateListStreamConsumers,
  paginateListStreams,
  waitForStreamExists,
  waitForStreamNotExists,
  waitUntilStreamExists,
  waitUntilStreamNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisClient === "function");
assert(typeof Kinesis === "function");
// commands
assert(typeof AddTagsToStreamCommand === "function");
assert(typeof CreateStreamCommand === "function");
assert(typeof DecreaseStreamRetentionPeriodCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeregisterStreamConsumerCommand === "function");
assert(typeof DescribeAccountSettingsCommand === "function");
assert(typeof DescribeLimitsCommand === "function");
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeStreamConsumerCommand === "function");
assert(typeof DescribeStreamSummaryCommand === "function");
assert(typeof DisableEnhancedMonitoringCommand === "function");
assert(typeof EnableEnhancedMonitoringCommand === "function");
assert(typeof GetRecordsCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof IncreaseStreamRetentionPeriodCommand === "function");
assert(typeof ListShardsCommand === "function");
assert(typeof ListStreamConsumersCommand === "function");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForStreamCommand === "function");
assert(typeof MergeShardsCommand === "function");
assert(typeof PutRecordCommand === "function");
assert(typeof PutRecordsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterStreamConsumerCommand === "function");
assert(typeof RemoveTagsFromStreamCommand === "function");
assert(typeof SplitShardCommand === "function");
assert(typeof StartStreamEncryptionCommand === "function");
assert(typeof StopStreamEncryptionCommand === "function");
assert(typeof SubscribeToShardCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateMaxRecordSizeCommand === "function");
assert(typeof UpdateShardCountCommand === "function");
assert(typeof UpdateStreamModeCommand === "function");
assert(typeof UpdateStreamWarmThroughputCommand === "function");
// enums
assert(typeof ConsumerStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof MetricsName === "object");
assert(typeof MinimumThroughputBillingCommitmentInputStatus === "object");
assert(typeof MinimumThroughputBillingCommitmentOutputStatus === "object");
assert(typeof ScalingType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamMode === "object");
assert(typeof StreamStatus === "object");
// errors
assert(InternalFailureException.prototype instanceof KinesisServiceException);
assert(KMSAccessDeniedException.prototype instanceof KinesisServiceException);
assert(KMSDisabledException.prototype instanceof KinesisServiceException);
assert(KMSInvalidStateException.prototype instanceof KinesisServiceException);
assert(KMSNotFoundException.prototype instanceof KinesisServiceException);
assert(KMSOptInRequired.prototype instanceof KinesisServiceException);
assert(KMSThrottlingException.prototype instanceof KinesisServiceException);
assert(ResourceInUseException.prototype instanceof KinesisServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisServiceException);
assert(KinesisServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForStreamExists === "function");
assert(typeof waitForStreamNotExists === "function");
assert(typeof waitUntilStreamExists === "function");
assert(typeof waitUntilStreamNotExists === "function");
// paginators
assert(typeof paginateListStreamConsumers === "function");
assert(typeof paginateListStreams === "function");
console.log(`Kinesis index test passed.`);
