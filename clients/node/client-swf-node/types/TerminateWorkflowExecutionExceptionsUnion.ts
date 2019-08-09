import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type TerminateWorkflowExecutionExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault;
