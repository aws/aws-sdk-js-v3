import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
export type DescribeExecutionExceptionsUnion =
  | ExecutionDoesNotExist
  | InvalidArn;
