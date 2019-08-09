import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type CountPendingActivityTasksExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
