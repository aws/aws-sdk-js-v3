import { CreateDeliveryStreamOutput } from "./CreateDeliveryStreamOutput";
import { DeleteDeliveryStreamOutput } from "./DeleteDeliveryStreamOutput";
import { DescribeDeliveryStreamOutput } from "./DescribeDeliveryStreamOutput";
import { ListDeliveryStreamsOutput } from "./ListDeliveryStreamsOutput";
import { ListTagsForDeliveryStreamOutput } from "./ListTagsForDeliveryStreamOutput";
import { PutRecordOutput } from "./PutRecordOutput";
import { PutRecordBatchOutput } from "./PutRecordBatchOutput";
import { StartDeliveryStreamEncryptionOutput } from "./StartDeliveryStreamEncryptionOutput";
import { StopDeliveryStreamEncryptionOutput } from "./StopDeliveryStreamEncryptionOutput";
import { TagDeliveryStreamOutput } from "./TagDeliveryStreamOutput";
import { UntagDeliveryStreamOutput } from "./UntagDeliveryStreamOutput";
import { UpdateDestinationOutput } from "./UpdateDestinationOutput";
export type OutputTypesUnion =
  | CreateDeliveryStreamOutput
  | DeleteDeliveryStreamOutput
  | DescribeDeliveryStreamOutput
  | ListDeliveryStreamsOutput
  | ListTagsForDeliveryStreamOutput
  | PutRecordOutput
  | PutRecordBatchOutput
  | StartDeliveryStreamEncryptionOutput
  | StopDeliveryStreamEncryptionOutput
  | TagDeliveryStreamOutput
  | UntagDeliveryStreamOutput
  | UpdateDestinationOutput;
