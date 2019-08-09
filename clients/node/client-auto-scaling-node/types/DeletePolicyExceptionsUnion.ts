import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type DeletePolicyExceptionsUnion =
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
