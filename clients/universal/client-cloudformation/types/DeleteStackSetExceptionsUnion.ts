import { StackSetNotEmptyException } from "./StackSetNotEmptyException";
import { OperationInProgressException } from "./OperationInProgressException";
export type DeleteStackSetExceptionsUnion =
  | StackSetNotEmptyException
  | OperationInProgressException;
