import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RespondDecisionTaskCompletedExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
