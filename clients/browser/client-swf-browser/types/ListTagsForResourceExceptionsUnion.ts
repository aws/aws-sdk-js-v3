import { UnknownResourceFault } from "./UnknownResourceFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type ListTagsForResourceExceptionsUnion =
  | UnknownResourceFault
  | LimitExceededFault
  | OperationNotPermittedFault;
