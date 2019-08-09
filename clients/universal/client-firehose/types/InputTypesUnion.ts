import { CreateDeliveryStreamInput } from "./CreateDeliveryStreamInput";
import { DeleteDeliveryStreamInput } from "./DeleteDeliveryStreamInput";
import { DescribeDeliveryStreamInput } from "./DescribeDeliveryStreamInput";
import { ListDeliveryStreamsInput } from "./ListDeliveryStreamsInput";
import { ListTagsForDeliveryStreamInput } from "./ListTagsForDeliveryStreamInput";
import { PutRecordInput } from "./PutRecordInput";
import { PutRecordBatchInput } from "./PutRecordBatchInput";
import { StartDeliveryStreamEncryptionInput } from "./StartDeliveryStreamEncryptionInput";
import { StopDeliveryStreamEncryptionInput } from "./StopDeliveryStreamEncryptionInput";
import { TagDeliveryStreamInput } from "./TagDeliveryStreamInput";
import { UntagDeliveryStreamInput } from "./UntagDeliveryStreamInput";
import { UpdateDestinationInput } from "./UpdateDestinationInput";
export type InputTypesUnion =
  | CreateDeliveryStreamInput
  | DeleteDeliveryStreamInput
  | DescribeDeliveryStreamInput
  | ListDeliveryStreamsInput
  | ListTagsForDeliveryStreamInput
  | PutRecordInput
  | PutRecordBatchInput
  | StartDeliveryStreamEncryptionInput
  | StopDeliveryStreamEncryptionInput
  | TagDeliveryStreamInput
  | UntagDeliveryStreamInput
  | UpdateDestinationInput;
