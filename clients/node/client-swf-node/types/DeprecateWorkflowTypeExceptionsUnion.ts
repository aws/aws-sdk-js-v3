import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type DeprecateWorkflowTypeExceptionsUnion =
  | UnknownResourceFault
  | TypeDeprecatedFault
  | OperationNotPermittedFault;
