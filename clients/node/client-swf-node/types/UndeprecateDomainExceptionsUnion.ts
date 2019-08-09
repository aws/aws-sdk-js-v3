import { UnknownResourceFault } from "./UnknownResourceFault";
import { DomainAlreadyExistsFault } from "./DomainAlreadyExistsFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type UndeprecateDomainExceptionsUnion =
  | UnknownResourceFault
  | DomainAlreadyExistsFault
  | OperationNotPermittedFault;
