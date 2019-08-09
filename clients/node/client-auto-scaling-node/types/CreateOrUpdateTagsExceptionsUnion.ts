import { LimitExceededFault } from "./LimitExceededFault";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ResourceInUseFault } from "./ResourceInUseFault";
export type CreateOrUpdateTagsExceptionsUnion =
  | LimitExceededFault
  | AlreadyExistsFault
  | ResourceContentionFault
  | ResourceInUseFault;
