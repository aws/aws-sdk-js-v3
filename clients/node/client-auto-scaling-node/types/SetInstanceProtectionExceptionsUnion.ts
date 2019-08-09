import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type SetInstanceProtectionExceptionsUnion =
  | LimitExceededFault
  | ResourceContentionFault;
