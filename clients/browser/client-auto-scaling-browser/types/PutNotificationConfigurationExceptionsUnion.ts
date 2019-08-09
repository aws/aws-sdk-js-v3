import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type PutNotificationConfigurationExceptionsUnion =
  | LimitExceededFault
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
