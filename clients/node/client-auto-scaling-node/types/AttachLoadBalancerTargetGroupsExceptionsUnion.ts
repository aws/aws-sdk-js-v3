import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type AttachLoadBalancerTargetGroupsExceptionsUnion =
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
