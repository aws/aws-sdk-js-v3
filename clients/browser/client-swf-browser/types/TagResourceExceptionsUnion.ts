import { UnknownResourceFault } from "./UnknownResourceFault";
import { TooManyTagsFault } from "./TooManyTagsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
export type TagResourceExceptionsUnion =
  | UnknownResourceFault
  | TooManyTagsFault
  | LimitExceededFault
  | OperationNotPermittedFault;
