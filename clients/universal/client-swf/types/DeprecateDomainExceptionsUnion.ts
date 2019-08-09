import { UnknownResourceFault } from "./UnknownResourceFault";
import { DomainDeprecatedFault } from "./DomainDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type DeprecateDomainExceptionsUnion =
  | UnknownResourceFault
  | DomainDeprecatedFault
  | OperationNotPermittedFault;
