import { DescribeStreamOutput } from "./DescribeStreamOutput";
import { GetRecordsOutput } from "./GetRecordsOutput";
import { GetShardIteratorOutput } from "./GetShardIteratorOutput";
import { ListStreamsOutput } from "./ListStreamsOutput";
export type OutputTypesUnion =
  | DescribeStreamOutput
  | GetRecordsOutput
  | GetShardIteratorOutput
  | ListStreamsOutput;
