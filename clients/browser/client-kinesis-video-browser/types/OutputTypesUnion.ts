import { CreateStreamOutput } from "./CreateStreamOutput";
import { DeleteStreamOutput } from "./DeleteStreamOutput";
import { DescribeStreamOutput } from "./DescribeStreamOutput";
import { GetDataEndpointOutput } from "./GetDataEndpointOutput";
import { ListStreamsOutput } from "./ListStreamsOutput";
import { ListTagsForStreamOutput } from "./ListTagsForStreamOutput";
import { TagStreamOutput } from "./TagStreamOutput";
import { UntagStreamOutput } from "./UntagStreamOutput";
import { UpdateDataRetentionOutput } from "./UpdateDataRetentionOutput";
import { UpdateStreamOutput } from "./UpdateStreamOutput";
export type OutputTypesUnion =
  | CreateStreamOutput
  | DeleteStreamOutput
  | DescribeStreamOutput
  | GetDataEndpointOutput
  | ListStreamsOutput
  | ListTagsForStreamOutput
  | TagStreamOutput
  | UntagStreamOutput
  | UpdateDataRetentionOutput
  | UpdateStreamOutput;
