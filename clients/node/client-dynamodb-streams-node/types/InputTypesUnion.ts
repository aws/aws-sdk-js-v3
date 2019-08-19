import { DescribeStreamInput } from "./DescribeStreamInput";
import { GetRecordsInput } from "./GetRecordsInput";
import { GetShardIteratorInput } from "./GetShardIteratorInput";
import { ListStreamsInput } from "./ListStreamsInput";
export type InputTypesUnion =
  | DescribeStreamInput
  | GetRecordsInput
  | GetShardIteratorInput
  | ListStreamsInput;
