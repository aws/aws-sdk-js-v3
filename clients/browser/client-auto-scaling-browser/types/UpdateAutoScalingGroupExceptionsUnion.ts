import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { ServiceLinkedRoleFailure } from "./ServiceLinkedRoleFailure";
export type UpdateAutoScalingGroupExceptionsUnion =
  | ScalingActivityInProgressFault
  | ResourceContentionFault
  | ServiceLinkedRoleFailure;
