import { InvalidArn } from "./InvalidArn";
import { StateMachineDoesNotExist } from "./StateMachineDoesNotExist";
export type DescribeStateMachineExceptionsUnion =
  | InvalidArn
  | StateMachineDoesNotExist;
