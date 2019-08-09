import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { StackInstanceNotFoundException } from "./StackInstanceNotFoundException";
export type DescribeStackInstanceExceptionsUnion =
  | StackSetNotFoundException
  | StackInstanceNotFoundException;
