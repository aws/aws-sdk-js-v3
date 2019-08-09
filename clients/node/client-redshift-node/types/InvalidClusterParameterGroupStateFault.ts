import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.</p>
 */
export interface InvalidClusterParameterGroupStateFault
  extends __ServiceException__<_InvalidClusterParameterGroupStateFaultDetails> {
  name: "InvalidClusterParameterGroupStateFault";
}

export interface _InvalidClusterParameterGroupStateFaultDetails {}
