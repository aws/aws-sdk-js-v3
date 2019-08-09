import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RespondActivityTaskCanceledExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
