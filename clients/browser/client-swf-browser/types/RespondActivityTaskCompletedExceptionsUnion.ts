import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RespondActivityTaskCompletedExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
