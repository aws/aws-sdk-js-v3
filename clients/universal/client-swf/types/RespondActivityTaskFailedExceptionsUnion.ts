import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RespondActivityTaskFailedExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
