import { UnknownResourceFault } from "./UnknownResourceFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type UntagResourceExceptionsUnion =
  | UnknownResourceFault
  | LimitExceededFault
  | OperationNotPermittedFault;
