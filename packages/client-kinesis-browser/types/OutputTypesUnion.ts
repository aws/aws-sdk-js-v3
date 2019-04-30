import { AddTagsToStreamOutput } from "./AddTagsToStreamOutput";
import { CreateStreamOutput } from "./CreateStreamOutput";
import { DecreaseStreamRetentionPeriodOutput } from "./DecreaseStreamRetentionPeriodOutput";
import { DeleteStreamOutput } from "./DeleteStreamOutput";
import { DeregisterStreamConsumerOutput } from "./DeregisterStreamConsumerOutput";
import { DescribeLimitsOutput } from "./DescribeLimitsOutput";
import { DescribeStreamOutput } from "./DescribeStreamOutput";
import { DescribeStreamConsumerOutput } from "./DescribeStreamConsumerOutput";
import { DescribeStreamSummaryOutput } from "./DescribeStreamSummaryOutput";
import { DisableEnhancedMonitoringOutput } from "./DisableEnhancedMonitoringOutput";
import { EnableEnhancedMonitoringOutput } from "./EnableEnhancedMonitoringOutput";
import { GetRecordsOutput } from "./GetRecordsOutput";
import { GetShardIteratorOutput } from "./GetShardIteratorOutput";
import { IncreaseStreamRetentionPeriodOutput } from "./IncreaseStreamRetentionPeriodOutput";
import { ListShardsOutput } from "./ListShardsOutput";
import { ListStreamConsumersOutput } from "./ListStreamConsumersOutput";
import { ListStreamsOutput } from "./ListStreamsOutput";
import { ListTagsForStreamOutput } from "./ListTagsForStreamOutput";
import { MergeShardsOutput } from "./MergeShardsOutput";
import { PutRecordOutput } from "./PutRecordOutput";
import { PutRecordsOutput } from "./PutRecordsOutput";
import { RegisterStreamConsumerOutput } from "./RegisterStreamConsumerOutput";
import { RemoveTagsFromStreamOutput } from "./RemoveTagsFromStreamOutput";
import { SplitShardOutput } from "./SplitShardOutput";
import { StartStreamEncryptionOutput } from "./StartStreamEncryptionOutput";
import { StopStreamEncryptionOutput } from "./StopStreamEncryptionOutput";
import { UpdateShardCountOutput } from "./UpdateShardCountOutput";
export type OutputTypesUnion =
  | AddTagsToStreamOutput
  | CreateStreamOutput
  | DecreaseStreamRetentionPeriodOutput
  | DeleteStreamOutput
  | DeregisterStreamConsumerOutput
  | DescribeLimitsOutput
  | DescribeStreamOutput
  | DescribeStreamConsumerOutput
  | DescribeStreamSummaryOutput
  | DisableEnhancedMonitoringOutput
  | EnableEnhancedMonitoringOutput
  | GetRecordsOutput
  | GetShardIteratorOutput
  | IncreaseStreamRetentionPeriodOutput
  | ListShardsOutput
  | ListStreamConsumersOutput
  | ListStreamsOutput
  | ListTagsForStreamOutput
  | MergeShardsOutput
  | PutRecordOutput
  | PutRecordsOutput
  | RegisterStreamConsumerOutput
  | RemoveTagsFromStreamOutput
  | SplitShardOutput
  | StartStreamEncryptionOutput
  | StopStreamEncryptionOutput
  | UpdateShardCountOutput;
