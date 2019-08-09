import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends __ServiceException__<_InvalidDBParameterGroupStateFaultDetails> {
  name: "InvalidDBParameterGroupStateFault";
}

export interface _InvalidDBParameterGroupStateFaultDetails {}
