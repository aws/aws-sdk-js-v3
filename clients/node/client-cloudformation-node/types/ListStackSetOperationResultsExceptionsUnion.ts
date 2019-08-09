import { StackSetNotFoundException } from "./StackSetNotFoundException";
import { OperationNotFoundException } from "./OperationNotFoundException";
export type ListStackSetOperationResultsExceptionsUnion =
  | StackSetNotFoundException
  | OperationNotFoundException;
