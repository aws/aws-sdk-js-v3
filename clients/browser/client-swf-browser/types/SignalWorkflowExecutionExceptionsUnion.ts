import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type SignalWorkflowExecutionExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
