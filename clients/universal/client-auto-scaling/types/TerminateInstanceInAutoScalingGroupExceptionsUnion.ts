import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type TerminateInstanceInAutoScalingGroupExceptionsUnion =
  | ScalingActivityInProgressFault
  | ResourceContentionFault;
