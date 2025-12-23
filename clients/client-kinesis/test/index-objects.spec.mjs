import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  AddTagsToStream$,
  AddTagsToStreamCommand,
  AddTagsToStreamInput$,
  ChildShard$,
  Consumer$,
  ConsumerDescription$,
  ConsumerStatus,
  CreateStream$,
  CreateStreamCommand,
  CreateStreamInput$,
  DecreaseStreamRetentionPeriod$,
  DecreaseStreamRetentionPeriodCommand,
  DecreaseStreamRetentionPeriodInput$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyInput$,
  DeleteStream$,
  DeleteStreamCommand,
  DeleteStreamInput$,
  DeregisterStreamConsumer$,
  DeregisterStreamConsumerCommand,
  DeregisterStreamConsumerInput$,
  DescribeAccountSettings$,
  DescribeAccountSettingsCommand,
  DescribeAccountSettingsInput$,
  DescribeAccountSettingsOutput$,
  DescribeLimits$,
  DescribeLimitsCommand,
  DescribeLimitsInput$,
  DescribeLimitsOutput$,
  DescribeStream$,
  DescribeStreamCommand,
  DescribeStreamConsumer$,
  DescribeStreamConsumerCommand,
  DescribeStreamConsumerInput$,
  DescribeStreamConsumerOutput$,
  DescribeStreamInput$,
  DescribeStreamOutput$,
  DescribeStreamSummary$,
  DescribeStreamSummaryCommand,
  DescribeStreamSummaryInput$,
  DescribeStreamSummaryOutput$,
  DisableEnhancedMonitoring$,
  DisableEnhancedMonitoringCommand,
  DisableEnhancedMonitoringInput$,
  EnableEnhancedMonitoring$,
  EnableEnhancedMonitoringCommand,
  EnableEnhancedMonitoringInput$,
  EncryptionType,
  EnhancedMetrics$,
  EnhancedMonitoringOutput$,
  ExpiredIteratorException,
  ExpiredIteratorException$,
  ExpiredNextTokenException,
  ExpiredNextTokenException$,
  GetRecords$,
  GetRecordsCommand,
  GetRecordsInput$,
  GetRecordsOutput$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  GetShardIterator$,
  GetShardIteratorCommand,
  GetShardIteratorInput$,
  GetShardIteratorOutput$,
  HashKeyRange$,
  IncreaseStreamRetentionPeriod$,
  IncreaseStreamRetentionPeriodCommand,
  IncreaseStreamRetentionPeriodInput$,
  InternalFailureException,
  InternalFailureException$,
  InvalidArgumentException,
  InvalidArgumentException$,
  Kinesis,
  KinesisClient,
  KinesisServiceException,
  KMSAccessDeniedException,
  KMSAccessDeniedException$,
  KMSDisabledException,
  KMSDisabledException$,
  KMSInvalidStateException,
  KMSInvalidStateException$,
  KMSNotFoundException,
  KMSNotFoundException$,
  KMSOptInRequired,
  KMSOptInRequired$,
  KMSThrottlingException,
  KMSThrottlingException$,
  LimitExceededException,
  LimitExceededException$,
  ListShards$,
  ListShardsCommand,
  ListShardsInput$,
  ListShardsOutput$,
  ListStreamConsumers$,
  ListStreamConsumersCommand,
  ListStreamConsumersInput$,
  ListStreamConsumersOutput$,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsInput$,
  ListStreamsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTagsForStream$,
  ListTagsForStreamCommand,
  ListTagsForStreamInput$,
  ListTagsForStreamOutput$,
  MergeShards$,
  MergeShardsCommand,
  MergeShardsInput$,
  MetricsName,
  MinimumThroughputBillingCommitmentInput$,
  MinimumThroughputBillingCommitmentInputStatus,
  MinimumThroughputBillingCommitmentOutput$,
  MinimumThroughputBillingCommitmentOutputStatus,
  paginateListStreamConsumers,
  paginateListStreams,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputExceededException$,
  PutRecord$,
  PutRecordCommand,
  PutRecordInput$,
  PutRecordOutput$,
  PutRecords$,
  PutRecordsCommand,
  PutRecordsInput$,
  PutRecordsOutput$,
  PutRecordsRequestEntry$,
  PutRecordsResultEntry$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyInput$,
  RegisterStreamConsumer$,
  RegisterStreamConsumerCommand,
  RegisterStreamConsumerInput$,
  RegisterStreamConsumerOutput$,
  RemoveTagsFromStream$,
  RemoveTagsFromStreamCommand,
  RemoveTagsFromStreamInput$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScalingType,
  SequenceNumberRange$,
  Shard$,
  ShardFilter$,
  ShardFilterType,
  ShardIteratorType,
  SplitShard$,
  SplitShardCommand,
  SplitShardInput$,
  StartingPosition$,
  StartStreamEncryption$,
  StartStreamEncryptionCommand,
  StartStreamEncryptionInput$,
  StopStreamEncryption$,
  StopStreamEncryptionCommand,
  StopStreamEncryptionInput$,
  StreamDescription$,
  StreamDescriptionSummary$,
  StreamMode,
  StreamModeDetails$,
  StreamStatus,
  StreamSummary$,
  SubscribeToShard$,
  SubscribeToShardCommand,
  SubscribeToShardEvent$,
  SubscribeToShardEventStream$,
  SubscribeToShardInput$,
  SubscribeToShardOutput$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsInput$,
  UpdateAccountSettingsOutput$,
  UpdateMaxRecordSize$,
  UpdateMaxRecordSizeCommand,
  UpdateMaxRecordSizeInput$,
  UpdateShardCount$,
  UpdateShardCountCommand,
  UpdateShardCountInput$,
  UpdateShardCountOutput$,
  UpdateStreamMode$,
  UpdateStreamModeCommand,
  UpdateStreamModeInput$,
  UpdateStreamWarmThroughput$,
  UpdateStreamWarmThroughputCommand,
  UpdateStreamWarmThroughputInput$,
  UpdateStreamWarmThroughputOutput$,
  ValidationException,
  ValidationException$,
  waitForStreamExists,
  waitForStreamNotExists,
  waitUntilStreamExists,
  waitUntilStreamNotExists,
  WarmThroughputObject$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisClient === "function");
assert(typeof Kinesis === "function");
// commands
assert(typeof AddTagsToStreamCommand === "function");
assert(typeof AddTagsToStream$ === "object");
assert(typeof CreateStreamCommand === "function");
assert(typeof CreateStream$ === "object");
assert(typeof DecreaseStreamRetentionPeriodCommand === "function");
assert(typeof DecreaseStreamRetentionPeriod$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeleteStream$ === "object");
assert(typeof DeregisterStreamConsumerCommand === "function");
assert(typeof DeregisterStreamConsumer$ === "object");
assert(typeof DescribeAccountSettingsCommand === "function");
assert(typeof DescribeAccountSettings$ === "object");
assert(typeof DescribeLimitsCommand === "function");
assert(typeof DescribeLimits$ === "object");
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeStream$ === "object");
assert(typeof DescribeStreamConsumerCommand === "function");
assert(typeof DescribeStreamConsumer$ === "object");
assert(typeof DescribeStreamSummaryCommand === "function");
assert(typeof DescribeStreamSummary$ === "object");
assert(typeof DisableEnhancedMonitoringCommand === "function");
assert(typeof DisableEnhancedMonitoring$ === "object");
assert(typeof EnableEnhancedMonitoringCommand === "function");
assert(typeof EnableEnhancedMonitoring$ === "object");
assert(typeof GetRecordsCommand === "function");
assert(typeof GetRecords$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetShardIteratorCommand === "function");
assert(typeof GetShardIterator$ === "object");
assert(typeof IncreaseStreamRetentionPeriodCommand === "function");
assert(typeof IncreaseStreamRetentionPeriod$ === "object");
assert(typeof ListShardsCommand === "function");
assert(typeof ListShards$ === "object");
assert(typeof ListStreamConsumersCommand === "function");
assert(typeof ListStreamConsumers$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTagsForStreamCommand === "function");
assert(typeof ListTagsForStream$ === "object");
assert(typeof MergeShardsCommand === "function");
assert(typeof MergeShards$ === "object");
assert(typeof PutRecordCommand === "function");
assert(typeof PutRecord$ === "object");
assert(typeof PutRecordsCommand === "function");
assert(typeof PutRecords$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterStreamConsumerCommand === "function");
assert(typeof RegisterStreamConsumer$ === "object");
assert(typeof RemoveTagsFromStreamCommand === "function");
assert(typeof RemoveTagsFromStream$ === "object");
assert(typeof SplitShardCommand === "function");
assert(typeof SplitShard$ === "object");
assert(typeof StartStreamEncryptionCommand === "function");
assert(typeof StartStreamEncryption$ === "object");
assert(typeof StopStreamEncryptionCommand === "function");
assert(typeof StopStreamEncryption$ === "object");
assert(typeof SubscribeToShardCommand === "function");
assert(typeof SubscribeToShard$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateMaxRecordSizeCommand === "function");
assert(typeof UpdateMaxRecordSize$ === "object");
assert(typeof UpdateShardCountCommand === "function");
assert(typeof UpdateShardCount$ === "object");
assert(typeof UpdateStreamModeCommand === "function");
assert(typeof UpdateStreamMode$ === "object");
assert(typeof UpdateStreamWarmThroughputCommand === "function");
assert(typeof UpdateStreamWarmThroughput$ === "object");
// structural schemas
assert(typeof AddTagsToStreamInput$ === "object");
assert(typeof ChildShard$ === "object");
assert(typeof Consumer$ === "object");
assert(typeof ConsumerDescription$ === "object");
assert(typeof CreateStreamInput$ === "object");
assert(typeof DecreaseStreamRetentionPeriodInput$ === "object");
assert(typeof DeleteResourcePolicyInput$ === "object");
assert(typeof DeleteStreamInput$ === "object");
assert(typeof DeregisterStreamConsumerInput$ === "object");
assert(typeof DescribeAccountSettingsInput$ === "object");
assert(typeof DescribeAccountSettingsOutput$ === "object");
assert(typeof DescribeLimitsInput$ === "object");
assert(typeof DescribeLimitsOutput$ === "object");
assert(typeof DescribeStreamConsumerInput$ === "object");
assert(typeof DescribeStreamConsumerOutput$ === "object");
assert(typeof DescribeStreamInput$ === "object");
assert(typeof DescribeStreamOutput$ === "object");
assert(typeof DescribeStreamSummaryInput$ === "object");
assert(typeof DescribeStreamSummaryOutput$ === "object");
assert(typeof DisableEnhancedMonitoringInput$ === "object");
assert(typeof EnableEnhancedMonitoringInput$ === "object");
assert(typeof EnhancedMetrics$ === "object");
assert(typeof EnhancedMonitoringOutput$ === "object");
assert(typeof GetRecordsInput$ === "object");
assert(typeof GetRecordsOutput$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof GetShardIteratorInput$ === "object");
assert(typeof GetShardIteratorOutput$ === "object");
assert(typeof HashKeyRange$ === "object");
assert(typeof IncreaseStreamRetentionPeriodInput$ === "object");
assert(typeof ListShardsInput$ === "object");
assert(typeof ListShardsOutput$ === "object");
assert(typeof ListStreamConsumersInput$ === "object");
assert(typeof ListStreamConsumersOutput$ === "object");
assert(typeof ListStreamsInput$ === "object");
assert(typeof ListStreamsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTagsForStreamInput$ === "object");
assert(typeof ListTagsForStreamOutput$ === "object");
assert(typeof MergeShardsInput$ === "object");
assert(typeof MinimumThroughputBillingCommitmentInput$ === "object");
assert(typeof MinimumThroughputBillingCommitmentOutput$ === "object");
assert(typeof PutRecordInput$ === "object");
assert(typeof PutRecordOutput$ === "object");
assert(typeof PutRecordsInput$ === "object");
assert(typeof PutRecordsOutput$ === "object");
assert(typeof PutRecordsRequestEntry$ === "object");
assert(typeof PutRecordsResultEntry$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RegisterStreamConsumerInput$ === "object");
assert(typeof RegisterStreamConsumerOutput$ === "object");
assert(typeof RemoveTagsFromStreamInput$ === "object");
assert(typeof SequenceNumberRange$ === "object");
assert(typeof Shard$ === "object");
assert(typeof ShardFilter$ === "object");
assert(typeof SplitShardInput$ === "object");
assert(typeof StartingPosition$ === "object");
assert(typeof StartStreamEncryptionInput$ === "object");
assert(typeof StopStreamEncryptionInput$ === "object");
assert(typeof StreamDescription$ === "object");
assert(typeof StreamDescriptionSummary$ === "object");
assert(typeof StreamModeDetails$ === "object");
assert(typeof StreamSummary$ === "object");
assert(typeof SubscribeToShardEvent$ === "object");
assert(typeof SubscribeToShardEventStream$ === "object");
assert(typeof SubscribeToShardInput$ === "object");
assert(typeof SubscribeToShardOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateAccountSettingsInput$ === "object");
assert(typeof UpdateAccountSettingsOutput$ === "object");
assert(typeof UpdateMaxRecordSizeInput$ === "object");
assert(typeof UpdateShardCountInput$ === "object");
assert(typeof UpdateShardCountOutput$ === "object");
assert(typeof UpdateStreamModeInput$ === "object");
assert(typeof UpdateStreamWarmThroughputInput$ === "object");
assert(typeof UpdateStreamWarmThroughputOutput$ === "object");
assert(typeof WarmThroughputObject$ === "object");
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
assert(AccessDeniedException.prototype instanceof KinesisServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ExpiredIteratorException.prototype instanceof KinesisServiceException);
assert(typeof ExpiredIteratorException$ === "object");
assert(ExpiredNextTokenException.prototype instanceof KinesisServiceException);
assert(typeof ExpiredNextTokenException$ === "object");
assert(InternalFailureException.prototype instanceof KinesisServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(KMSAccessDeniedException.prototype instanceof KinesisServiceException);
assert(typeof KMSAccessDeniedException$ === "object");
assert(KMSDisabledException.prototype instanceof KinesisServiceException);
assert(typeof KMSDisabledException$ === "object");
assert(KMSInvalidStateException.prototype instanceof KinesisServiceException);
assert(typeof KMSInvalidStateException$ === "object");
assert(KMSNotFoundException.prototype instanceof KinesisServiceException);
assert(typeof KMSNotFoundException$ === "object");
assert(KMSOptInRequired.prototype instanceof KinesisServiceException);
assert(typeof KMSOptInRequired$ === "object");
assert(KMSThrottlingException.prototype instanceof KinesisServiceException);
assert(typeof KMSThrottlingException$ === "object");
assert(LimitExceededException.prototype instanceof KinesisServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ProvisionedThroughputExceededException.prototype instanceof KinesisServiceException);
assert(typeof ProvisionedThroughputExceededException$ === "object");
assert(ResourceInUseException.prototype instanceof KinesisServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof KinesisServiceException);
assert(typeof ValidationException$ === "object");
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
