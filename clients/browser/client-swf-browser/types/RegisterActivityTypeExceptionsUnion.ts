import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type RegisterActivityTypeExceptionsUnion =
  | TypeAlreadyExistsFault
  | LimitExceededFault
  | UnknownResourceFault
  | OperationNotPermittedFault;
