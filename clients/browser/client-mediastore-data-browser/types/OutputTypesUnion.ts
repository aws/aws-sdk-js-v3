import { DeleteObjectOutput } from "./DeleteObjectOutput";
import { DescribeObjectOutput } from "./DescribeObjectOutput";
import { GetObjectOutput } from "./GetObjectOutput";
import { ListItemsOutput } from "./ListItemsOutput";
import { PutObjectOutput } from "./PutObjectOutput";
export type OutputTypesUnion =
  | DeleteObjectOutput
  | DescribeObjectOutput
  | GetObjectOutput
  | ListItemsOutput
  | PutObjectOutput;
