import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type PutLifecycleHookExceptionsUnion =
  | LimitExceededFault
  | ResourceContentionFault;
