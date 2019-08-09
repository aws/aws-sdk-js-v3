import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeTagsExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidTagFault;
