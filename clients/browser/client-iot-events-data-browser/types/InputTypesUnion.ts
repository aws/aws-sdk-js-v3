import { BatchPutMessageInput } from "./BatchPutMessageInput";
import { BatchUpdateDetectorInput } from "./BatchUpdateDetectorInput";
import { DescribeDetectorInput } from "./DescribeDetectorInput";
import { ListDetectorsInput } from "./ListDetectorsInput";
export type InputTypesUnion =
  | BatchPutMessageInput
  | BatchUpdateDetectorInput
  | DescribeDetectorInput
  | ListDetectorsInput;
