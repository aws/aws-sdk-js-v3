import { BatchPutMessageOutput } from "./BatchPutMessageOutput";
import { BatchUpdateDetectorOutput } from "./BatchUpdateDetectorOutput";
import { DescribeDetectorOutput } from "./DescribeDetectorOutput";
import { ListDetectorsOutput } from "./ListDetectorsOutput";
export type OutputTypesUnion =
  | BatchPutMessageOutput
  | BatchUpdateDetectorOutput
  | DescribeDetectorOutput
  | ListDetectorsOutput;
