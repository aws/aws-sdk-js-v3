import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeAlreadyExistsFault } from "./TypeAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type UndeprecateActivityTypeExceptionsUnion =
  | UnknownResourceFault
  | TypeAlreadyExistsFault
  | OperationNotPermittedFault;
