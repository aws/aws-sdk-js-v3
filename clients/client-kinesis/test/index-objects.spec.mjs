import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  AcknowledgeDeadLetterQueueRecords$,
  AcknowledgeDeadLetterQueueRecordsCommand,
  AcknowledgeDeadLetterQueueRecordsErrorEntry$,
  AcknowledgeDeadLetterQueueRecordsInput$,
  AcknowledgeDeadLetterQueueRecordsOutput$,
  AcknowledgeDeadLetterQueueRecordsRequestEntry$,
  AcknowledgeDeadLetterQueueRecordsResultEntry$,
  AcknowledgeQueueRecords$,
  AcknowledgeQueueRecordsCommand,
  AcknowledgeQueueRecordsErrorEntry$,
  AcknowledgeQueueRecordsInput$,
  AcknowledgeQueueRecordsOutput$,
  AcknowledgeQueueRecordsRequestEntry$,
  AcknowledgeQueueRecordsResultEntry$,
  AddTagsToStream$,
  AddTagsToStreamCommand,
  AddTagsToStreamInput$,
  ChannelDescription$,
  ChannelDestinationType,
  ChannelEncryptionConfiguration$,
  ChannelEncryptionType,
  ChannelLoggingConfiguration$,
  ChannelLoggingUpdateInput$,
  ChannelStatus,
  ChannelStreamConfiguration$,
  ChannelStreamDescription$,
  ChannelStreamIdentifier$,
  ChannelSummary$,
  ChildShard$,
  CloudWatchLogs$,
  CloudWatchLogsUpdateInput$,
  Consumer$,
  ConsumerDescription$,
  ConsumerStatus,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelInput$,
  CreateChannelOutput$,
  CreateQueue$,
  CreateQueueCommand,
  CreateQueueInput$,
  CreateQueueOutput$,
  CreateStream$,
  CreateStreamCommand,
  CreateStreamInput$,
  DeadLetterConfiguration$,
  DeadLetterQueueS3Configuration$,
  DecreaseStreamRetentionPeriod$,
  DecreaseStreamRetentionPeriodCommand,
  DecreaseStreamRetentionPeriodInput$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelInput$,
  DeleteQueue$,
  DeleteQueueCommand,
  DeleteQueueInput$,
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
  DescribeChannel$,
  DescribeChannelCommand,
  DescribeChannelInput$,
  DescribeChannelOutput$,
  DescribeLimits$,
  DescribeLimitsCommand,
  DescribeLimitsInput$,
  DescribeLimitsOutput$,
  DescribeQueue$,
  DescribeQueueCommand,
  DescribeQueueInput$,
  DescribeQueueOutput$,
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
  DryRunOperationException,
  DryRunOperationException$,
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
  ListChannels$,
  ListChannelsCommand,
  ListChannelsInput$,
  ListChannelsOutput$,
  ListQueues$,
  ListQueuesCommand,
  ListQueuesInput$,
  ListQueuesOutput$,
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
  paginateListChannels,
  paginateListQueues,
  paginateListStreamConsumers,
  paginateListStreams,
  PartitionField$,
  PartitionSpec$,
  PartitionTransform,
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
  QueueAttributes$,
  QueueDescription$,
  QueueRecord$,
  QueueStartingPosition$,
  QueueStartingPositionType,
  QueueStatus,
  QueueStreamConfiguration$,
  QueueStreamFilter$,
  QueueStreamIdentifier$,
  QueueSummary$,
  ReceiveDeadLetterQueueRecords$,
  ReceiveDeadLetterQueueRecordsCommand,
  ReceiveDeadLetterQueueRecordsInput$,
  ReceiveDeadLetterQueueRecordsOutput$,
  ReceiveQueueRecords$,
  ReceiveQueueRecordsCommand,
  ReceiveQueueRecordsInput$,
  ReceiveQueueRecordsOutput$,
  RecordConfiguration$,
  RecordDistributionStrategy,
  RecordFormatType,
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
  RestoreDeadLetterQueueRecords$,
  RestoreDeadLetterQueueRecordsCommand,
  RestoreDeadLetterQueueRecordsErrorEntry$,
  RestoreDeadLetterQueueRecordsInput$,
  RestoreDeadLetterQueueRecordsOutput$,
  RestoreDeadLetterQueueRecordsRequestEntry$,
  RestoreDeadLetterQueueRecordsResultEntry$,
  S3CompressionType,
  S3DestinationConfiguration$,
  S3DestinationDescription$,
  S3DestinationUpdateInput$,
  S3StorageClass,
  S3StorageConfiguration$,
  S3TablesCompressionType,
  S3TablesConfiguration$,
  S3TablesDestinationConfiguration$,
  S3TablesDestinationDescription$,
  S3TablesDestinationUpdateInput$,
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
  StreamFilter$,
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
  TargetType,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsInput$,
  UpdateAccountSettingsOutput$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelInput$,
  UpdateChannelOutput$,
  UpdateDeadLetterQueueRecordsVisibility$,
  UpdateDeadLetterQueueRecordsVisibilityCommand,
  UpdateDeadLetterQueueRecordsVisibilityErrorEntry$,
  UpdateDeadLetterQueueRecordsVisibilityInput$,
  UpdateDeadLetterQueueRecordsVisibilityOutput$,
  UpdateDeadLetterQueueRecordsVisibilityRequestEntry$,
  UpdateDeadLetterQueueRecordsVisibilityResultEntry$,
  UpdateMaxRecordSize$,
  UpdateMaxRecordSizeCommand,
  UpdateMaxRecordSizeInput$,
  UpdateQueue$,
  UpdateQueueCommand,
  UpdateQueueInput$,
  UpdateQueueOutput$,
  UpdateQueueRecordsVisibility$,
  UpdateQueueRecordsVisibilityCommand,
  UpdateQueueRecordsVisibilityErrorEntry$,
  UpdateQueueRecordsVisibilityInput$,
  UpdateQueueRecordsVisibilityOutput$,
  UpdateQueueRecordsVisibilityRequestEntry$,
  UpdateQueueRecordsVisibilityResultEntry$,
  UpdateShardCount$,
  UpdateShardCountCommand,
  UpdateShardCountInput$,
  UpdateShardCountOutput$,
  UpdateStreamMode$,
  UpdateStreamModeCommand,
  UpdateStreamModeInput$,
  UpdateStreamRecordDistributionStrategy$,
  UpdateStreamRecordDistributionStrategyCommand,
  UpdateStreamRecordDistributionStrategyInput$,
  UpdateStreamWarmThroughput$,
  UpdateStreamWarmThroughputCommand,
  UpdateStreamWarmThroughputInput$,
  UpdateStreamWarmThroughputOutput$,
  ValidationException,
  ValidationException$,
  waitForChannelActive,
  waitForStreamExists,
  waitForStreamNotExists,
  waitUntilChannelActive,
  waitUntilStreamExists,
  waitUntilStreamNotExists,
  WarmThroughputObject$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisClient === "function");
assert(typeof Kinesis === "function");
// commands
assert(typeof AcknowledgeDeadLetterQueueRecordsCommand === "function");
assert(typeof AcknowledgeDeadLetterQueueRecords$ === "object");
assert(typeof AcknowledgeQueueRecordsCommand === "function");
assert(typeof AcknowledgeQueueRecords$ === "object");
assert(typeof AddTagsToStreamCommand === "function");
assert(typeof AddTagsToStream$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueue$ === "object");
assert(typeof CreateStreamCommand === "function");
assert(typeof CreateStream$ === "object");
assert(typeof DecreaseStreamRetentionPeriodCommand === "function");
assert(typeof DecreaseStreamRetentionPeriod$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueue$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeleteStream$ === "object");
assert(typeof DeregisterStreamConsumerCommand === "function");
assert(typeof DeregisterStreamConsumer$ === "object");
assert(typeof DescribeAccountSettingsCommand === "function");
assert(typeof DescribeAccountSettings$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeLimitsCommand === "function");
assert(typeof DescribeLimits$ === "object");
assert(typeof DescribeQueueCommand === "function");
assert(typeof DescribeQueue$ === "object");
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
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueues$ === "object");
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
assert(typeof ReceiveDeadLetterQueueRecordsCommand === "function");
assert(typeof ReceiveDeadLetterQueueRecords$ === "object");
assert(typeof ReceiveQueueRecordsCommand === "function");
assert(typeof ReceiveQueueRecords$ === "object");
assert(typeof RegisterStreamConsumerCommand === "function");
assert(typeof RegisterStreamConsumer$ === "object");
assert(typeof RemoveTagsFromStreamCommand === "function");
assert(typeof RemoveTagsFromStream$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsCommand === "function");
assert(typeof RestoreDeadLetterQueueRecords$ === "object");
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
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityCommand === "function");
assert(typeof UpdateDeadLetterQueueRecordsVisibility$ === "object");
assert(typeof UpdateMaxRecordSizeCommand === "function");
assert(typeof UpdateMaxRecordSize$ === "object");
assert(typeof UpdateQueueCommand === "function");
assert(typeof UpdateQueue$ === "object");
assert(typeof UpdateQueueRecordsVisibilityCommand === "function");
assert(typeof UpdateQueueRecordsVisibility$ === "object");
assert(typeof UpdateShardCountCommand === "function");
assert(typeof UpdateShardCount$ === "object");
assert(typeof UpdateStreamModeCommand === "function");
assert(typeof UpdateStreamMode$ === "object");
assert(typeof UpdateStreamRecordDistributionStrategyCommand === "function");
assert(typeof UpdateStreamRecordDistributionStrategy$ === "object");
assert(typeof UpdateStreamWarmThroughputCommand === "function");
assert(typeof UpdateStreamWarmThroughput$ === "object");
// structural schemas
assert(typeof AcknowledgeDeadLetterQueueRecordsErrorEntry$ === "object");
assert(typeof AcknowledgeDeadLetterQueueRecordsInput$ === "object");
assert(typeof AcknowledgeDeadLetterQueueRecordsOutput$ === "object");
assert(typeof AcknowledgeDeadLetterQueueRecordsRequestEntry$ === "object");
assert(typeof AcknowledgeDeadLetterQueueRecordsResultEntry$ === "object");
assert(typeof AcknowledgeQueueRecordsErrorEntry$ === "object");
assert(typeof AcknowledgeQueueRecordsInput$ === "object");
assert(typeof AcknowledgeQueueRecordsOutput$ === "object");
assert(typeof AcknowledgeQueueRecordsRequestEntry$ === "object");
assert(typeof AcknowledgeQueueRecordsResultEntry$ === "object");
assert(typeof AddTagsToStreamInput$ === "object");
assert(typeof ChannelDescription$ === "object");
assert(typeof ChannelEncryptionConfiguration$ === "object");
assert(typeof ChannelLoggingConfiguration$ === "object");
assert(typeof ChannelLoggingUpdateInput$ === "object");
assert(typeof ChannelStreamConfiguration$ === "object");
assert(typeof ChannelStreamDescription$ === "object");
assert(typeof ChannelStreamIdentifier$ === "object");
assert(typeof ChannelSummary$ === "object");
assert(typeof ChildShard$ === "object");
assert(typeof CloudWatchLogs$ === "object");
assert(typeof CloudWatchLogsUpdateInput$ === "object");
assert(typeof Consumer$ === "object");
assert(typeof ConsumerDescription$ === "object");
assert(typeof CreateChannelInput$ === "object");
assert(typeof CreateChannelOutput$ === "object");
assert(typeof CreateQueueInput$ === "object");
assert(typeof CreateQueueOutput$ === "object");
assert(typeof CreateStreamInput$ === "object");
assert(typeof DeadLetterConfiguration$ === "object");
assert(typeof DeadLetterQueueS3Configuration$ === "object");
assert(typeof DecreaseStreamRetentionPeriodInput$ === "object");
assert(typeof DeleteChannelInput$ === "object");
assert(typeof DeleteQueueInput$ === "object");
assert(typeof DeleteResourcePolicyInput$ === "object");
assert(typeof DeleteStreamInput$ === "object");
assert(typeof DeregisterStreamConsumerInput$ === "object");
assert(typeof DescribeAccountSettingsInput$ === "object");
assert(typeof DescribeAccountSettingsOutput$ === "object");
assert(typeof DescribeChannelInput$ === "object");
assert(typeof DescribeChannelOutput$ === "object");
assert(typeof DescribeLimitsInput$ === "object");
assert(typeof DescribeLimitsOutput$ === "object");
assert(typeof DescribeQueueInput$ === "object");
assert(typeof DescribeQueueOutput$ === "object");
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
assert(typeof ListChannelsInput$ === "object");
assert(typeof ListChannelsOutput$ === "object");
assert(typeof ListQueuesInput$ === "object");
assert(typeof ListQueuesOutput$ === "object");
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
assert(typeof PartitionField$ === "object");
assert(typeof PartitionSpec$ === "object");
assert(typeof PutRecordInput$ === "object");
assert(typeof PutRecordOutput$ === "object");
assert(typeof PutRecordsInput$ === "object");
assert(typeof PutRecordsOutput$ === "object");
assert(typeof PutRecordsRequestEntry$ === "object");
assert(typeof PutRecordsResultEntry$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof QueueAttributes$ === "object");
assert(typeof QueueDescription$ === "object");
assert(typeof QueueRecord$ === "object");
assert(typeof QueueStartingPosition$ === "object");
assert(typeof QueueStreamConfiguration$ === "object");
assert(typeof QueueStreamFilter$ === "object");
assert(typeof QueueStreamIdentifier$ === "object");
assert(typeof QueueSummary$ === "object");
assert(typeof ReceiveDeadLetterQueueRecordsInput$ === "object");
assert(typeof ReceiveDeadLetterQueueRecordsOutput$ === "object");
assert(typeof ReceiveQueueRecordsInput$ === "object");
assert(typeof ReceiveQueueRecordsOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RecordConfiguration$ === "object");
assert(typeof RegisterStreamConsumerInput$ === "object");
assert(typeof RegisterStreamConsumerOutput$ === "object");
assert(typeof RemoveTagsFromStreamInput$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsErrorEntry$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsInput$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsOutput$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsRequestEntry$ === "object");
assert(typeof RestoreDeadLetterQueueRecordsResultEntry$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof S3DestinationDescription$ === "object");
assert(typeof S3DestinationUpdateInput$ === "object");
assert(typeof S3StorageConfiguration$ === "object");
assert(typeof S3TablesConfiguration$ === "object");
assert(typeof S3TablesDestinationConfiguration$ === "object");
assert(typeof S3TablesDestinationDescription$ === "object");
assert(typeof S3TablesDestinationUpdateInput$ === "object");
assert(typeof SequenceNumberRange$ === "object");
assert(typeof Shard$ === "object");
assert(typeof ShardFilter$ === "object");
assert(typeof SplitShardInput$ === "object");
assert(typeof StartingPosition$ === "object");
assert(typeof StartStreamEncryptionInput$ === "object");
assert(typeof StopStreamEncryptionInput$ === "object");
assert(typeof StreamDescription$ === "object");
assert(typeof StreamDescriptionSummary$ === "object");
assert(typeof StreamFilter$ === "object");
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
assert(typeof UpdateChannelInput$ === "object");
assert(typeof UpdateChannelOutput$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityErrorEntry$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityInput$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityOutput$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityRequestEntry$ === "object");
assert(typeof UpdateDeadLetterQueueRecordsVisibilityResultEntry$ === "object");
assert(typeof UpdateMaxRecordSizeInput$ === "object");
assert(typeof UpdateQueueInput$ === "object");
assert(typeof UpdateQueueOutput$ === "object");
assert(typeof UpdateQueueRecordsVisibilityErrorEntry$ === "object");
assert(typeof UpdateQueueRecordsVisibilityInput$ === "object");
assert(typeof UpdateQueueRecordsVisibilityOutput$ === "object");
assert(typeof UpdateQueueRecordsVisibilityRequestEntry$ === "object");
assert(typeof UpdateQueueRecordsVisibilityResultEntry$ === "object");
assert(typeof UpdateShardCountInput$ === "object");
assert(typeof UpdateShardCountOutput$ === "object");
assert(typeof UpdateStreamModeInput$ === "object");
assert(typeof UpdateStreamRecordDistributionStrategyInput$ === "object");
assert(typeof UpdateStreamWarmThroughputInput$ === "object");
assert(typeof UpdateStreamWarmThroughputOutput$ === "object");
assert(typeof WarmThroughputObject$ === "object");
// enums
assert(typeof ChannelDestinationType === "object");
assert(typeof ChannelEncryptionType === "object");
assert(typeof ChannelStatus === "object");
assert(typeof ConsumerStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof MetricsName === "object");
assert(typeof MinimumThroughputBillingCommitmentInputStatus === "object");
assert(typeof MinimumThroughputBillingCommitmentOutputStatus === "object");
assert(typeof PartitionTransform === "object");
assert(typeof QueueStartingPositionType === "object");
assert(typeof QueueStatus === "object");
assert(typeof RecordDistributionStrategy === "object");
assert(typeof RecordFormatType === "object");
assert(typeof S3CompressionType === "object");
assert(typeof S3StorageClass === "object");
assert(typeof S3TablesCompressionType === "object");
assert(typeof ScalingType === "object");
assert(typeof ShardFilterType === "object");
assert(typeof ShardIteratorType === "object");
assert(typeof StreamMode === "object");
assert(typeof StreamStatus === "object");
assert(typeof TargetType === "object");
// errors
assert(AccessDeniedException.prototype instanceof KinesisServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(DryRunOperationException.prototype instanceof KinesisServiceException);
assert(typeof DryRunOperationException$ === "object");
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
assert(ThrottlingException.prototype instanceof KinesisServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof KinesisServiceException);
assert(typeof ValidationException$ === "object");
assert(KinesisServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForChannelActive === "function");
assert(typeof waitForStreamExists === "function");
assert(typeof waitForStreamNotExists === "function");
assert(typeof waitUntilChannelActive === "function");
assert(typeof waitUntilStreamExists === "function");
assert(typeof waitUntilStreamNotExists === "function");
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListQueues === "function");
assert(typeof paginateListStreamConsumers === "function");
assert(typeof paginateListStreams === "function");
console.log(`Kinesis index test passed.`);
