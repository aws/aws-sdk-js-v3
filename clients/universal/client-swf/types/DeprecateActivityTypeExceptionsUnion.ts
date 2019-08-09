import { UnknownResourceFault } from "./UnknownResourceFault";
import { TypeDeprecatedFault } from "./TypeDeprecatedFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type DeprecateActivityTypeExceptionsUnion =
  | UnknownResourceFault
  | TypeDeprecatedFault
  | OperationNotPermittedFault;
