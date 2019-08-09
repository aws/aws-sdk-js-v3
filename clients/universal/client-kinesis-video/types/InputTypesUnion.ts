import { CreateStreamInput } from "./CreateStreamInput";
import { DeleteStreamInput } from "./DeleteStreamInput";
import { DescribeStreamInput } from "./DescribeStreamInput";
import { GetDataEndpointInput } from "./GetDataEndpointInput";
import { ListStreamsInput } from "./ListStreamsInput";
import { ListTagsForStreamInput } from "./ListTagsForStreamInput";
import { TagStreamInput } from "./TagStreamInput";
import { UntagStreamInput } from "./UntagStreamInput";
import { UpdateDataRetentionInput } from "./UpdateDataRetentionInput";
import { UpdateStreamInput } from "./UpdateStreamInput";
export type InputTypesUnion =
  | CreateStreamInput
  | DeleteStreamInput
  | DescribeStreamInput
  | GetDataEndpointInput
  | ListStreamsInput
  | ListTagsForStreamInput
  | TagStreamInput
  | UntagStreamInput
  | UpdateDataRetentionInput
  | UpdateStreamInput;
