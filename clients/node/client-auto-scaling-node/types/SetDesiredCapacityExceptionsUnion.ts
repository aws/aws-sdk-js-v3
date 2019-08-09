import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type SetDesiredCapacityExceptionsUnion =
  | ScalingActivityInProgressFault
  | ResourceContentionFault;
