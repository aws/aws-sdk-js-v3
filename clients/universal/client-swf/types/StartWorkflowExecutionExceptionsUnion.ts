import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { WorkflowExecutionAlreadyStartedFault } from "./WorkflowExecutionAlreadyStartedFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { DefaultUndefinedFault } from "./DefaultUndefinedFault";
export type StartWorkflowExecutionExceptionsUnion =
  | UnknownResourceFault
  | TypeDeprecatedFault
  | WorkflowExecutionAlreadyStartedFault
  | LimitExceededFault
  | OperationNotPermittedFault
  | DefaultUndefinedFault;
