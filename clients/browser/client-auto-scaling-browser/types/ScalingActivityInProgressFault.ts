import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation can't be performed because there are scaling activities in progress.</p>
 */
export interface ScalingActivityInProgressFault
  extends __ServiceException__<_ScalingActivityInProgressFaultDetails> {
  name: "ScalingActivityInProgressFault";
}

export interface _ScalingActivityInProgressFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
