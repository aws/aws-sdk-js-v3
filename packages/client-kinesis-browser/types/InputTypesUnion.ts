import { AddTagsToStreamInput } from "./AddTagsToStreamInput";
import { CreateStreamInput } from "./CreateStreamInput";
import { DecreaseStreamRetentionPeriodInput } from "./DecreaseStreamRetentionPeriodInput";
import { DeleteStreamInput } from "./DeleteStreamInput";
import { DeregisterStreamConsumerInput } from "./DeregisterStreamConsumerInput";
import { DescribeLimitsInput } from "./DescribeLimitsInput";
import { DescribeStreamInput } from "./DescribeStreamInput";
import { DescribeStreamConsumerInput } from "./DescribeStreamConsumerInput";
import { DescribeStreamSummaryInput } from "./DescribeStreamSummaryInput";
import { DisableEnhancedMonitoringInput } from "./DisableEnhancedMonitoringInput";
import { EnableEnhancedMonitoringInput } from "./EnableEnhancedMonitoringInput";
import { GetRecordsInput } from "./GetRecordsInput";
import { GetShardIteratorInput } from "./GetShardIteratorInput";
import { IncreaseStreamRetentionPeriodInput } from "./IncreaseStreamRetentionPeriodInput";
import { ListShardsInput } from "./ListShardsInput";
import { ListStreamConsumersInput } from "./ListStreamConsumersInput";
import { ListStreamsInput } from "./ListStreamsInput";
import { ListTagsForStreamInput } from "./ListTagsForStreamInput";
import { MergeShardsInput } from "./MergeShardsInput";
import { PutRecordInput } from "./PutRecordInput";
import { PutRecordsInput } from "./PutRecordsInput";
import { RegisterStreamConsumerInput } from "./RegisterStreamConsumerInput";
import { RemoveTagsFromStreamInput } from "./RemoveTagsFromStreamInput";
import { SplitShardInput } from "./SplitShardInput";
import { StartStreamEncryptionInput } from "./StartStreamEncryptionInput";
import { StopStreamEncryptionInput } from "./StopStreamEncryptionInput";
import { UpdateShardCountInput } from "./UpdateShardCountInput";
export type InputTypesUnion =
  | AddTagsToStreamInput
  | CreateStreamInput
  | DecreaseStreamRetentionPeriodInput
  | DeleteStreamInput
  | DeregisterStreamConsumerInput
  | DescribeLimitsInput
  | DescribeStreamInput
  | DescribeStreamConsumerInput
  | DescribeStreamSummaryInput
  | DisableEnhancedMonitoringInput
  | EnableEnhancedMonitoringInput
  | GetRecordsInput
  | GetShardIteratorInput
  | IncreaseStreamRetentionPeriodInput
  | ListShardsInput
  | ListStreamConsumersInput
  | ListStreamsInput
  | ListTagsForStreamInput
  | MergeShardsInput
  | PutRecordInput
  | PutRecordsInput
  | RegisterStreamConsumerInput
  | RemoveTagsFromStreamInput
  | SplitShardInput
  | StartStreamEncryptionInput
  | StopStreamEncryptionInput
  | UpdateShardCountInput;
