import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { LimitExceededFault } from "./LimitExceededFault";
export type PollForDecisionTaskExceptionsUnion =
  | UnknownResourceFault
  | OperationNotPermittedFault
  | LimitExceededFault;
