import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends __ServiceException__<_InvalidDBParameterGroupStateFaultDetails> {
  name: "InvalidDBParameterGroupStateFault";
}

export interface _InvalidDBParameterGroupStateFaultDetails {}
