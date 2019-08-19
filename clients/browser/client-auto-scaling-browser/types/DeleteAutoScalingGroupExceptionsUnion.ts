import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceInUseFault } from "./ResourceInUseFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type DeleteAutoScalingGroupExceptionsUnion =
  | ScalingActivityInProgressFault
  | ResourceInUseFault
  | ResourceContentionFault;
