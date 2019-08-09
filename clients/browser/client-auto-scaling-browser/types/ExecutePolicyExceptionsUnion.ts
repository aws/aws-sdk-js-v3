import { ScalingActivityInProgressFault } from "./ScalingActivityInProgressFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type ExecutePolicyExceptionsUnion =
  | ScalingActivityInProgressFault
  | ResourceContentionFault;
