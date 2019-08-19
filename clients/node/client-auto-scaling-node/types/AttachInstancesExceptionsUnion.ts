import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type AttachInstancesExceptionsUnion =
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
