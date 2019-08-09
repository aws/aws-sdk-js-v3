import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationNotFoundException } from "./OperationNotFoundException";
import { InvalidOperationException } from "./InvalidOperationException";
export type StopStackSetOperationExceptionsUnion =
  | StackSetNotFoundException
  | OperationNotFoundException
  | InvalidOperationException;
