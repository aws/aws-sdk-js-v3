import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type CountPendingDecisionTasksExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
