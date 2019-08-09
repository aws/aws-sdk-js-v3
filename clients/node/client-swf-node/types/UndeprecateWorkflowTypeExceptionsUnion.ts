import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type UndeprecateWorkflowTypeExceptionsUnion =
  | UnknownResourceFault
  | TypeAlreadyExistsFault
  | OperationNotPermittedFault;
