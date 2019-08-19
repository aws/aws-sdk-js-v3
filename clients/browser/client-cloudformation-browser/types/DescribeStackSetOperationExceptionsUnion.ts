import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationNotFoundException } from "./OperationNotFoundException";
export type DescribeStackSetOperationExceptionsUnion =
  | StackSetNotFoundException
  | OperationNotFoundException;
