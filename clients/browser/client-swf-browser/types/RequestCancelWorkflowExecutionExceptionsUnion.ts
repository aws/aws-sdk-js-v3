import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RequestCancelWorkflowExecutionExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
