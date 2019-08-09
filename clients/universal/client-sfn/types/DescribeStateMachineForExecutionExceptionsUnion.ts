import { ExecutionDoesNotExist } from "./ExecutionDoesNotExist";
import { InvalidArn } from "./InvalidArn";
export type DescribeStateMachineForExecutionExceptionsUnion =
  | ExecutionDoesNotExist
  | InvalidArn;
