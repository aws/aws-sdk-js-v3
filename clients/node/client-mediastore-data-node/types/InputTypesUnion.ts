import { DeleteObjectInput } from "./DeleteObjectInput";
import { DescribeObjectInput } from "./DescribeObjectInput";
import { GetObjectInput } from "./GetObjectInput";
import { ListItemsInput } from "./ListItemsInput";
import { PutObjectInput } from "./PutObjectInput";
export type InputTypesUnion =
  | DeleteObjectInput
  | DescribeObjectInput
  | GetObjectInput
  | ListItemsInput
  | PutObjectInput;
