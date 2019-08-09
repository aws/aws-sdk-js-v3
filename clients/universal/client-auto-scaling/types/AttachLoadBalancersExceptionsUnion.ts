import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type AttachLoadBalancersExceptionsUnion =
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
