import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type CreateAutoScalingGroupExceptionsUnion =
  | AlreadyExistsFault
  | LimitExceededFault
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
