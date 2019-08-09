import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type BatchPutScheduledUpdateGroupActionExceptionsUnion =
  | AlreadyExistsFault
  | LimitExceededFault
  | ResourceContentionFault;
