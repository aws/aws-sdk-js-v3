import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters in a parameter group are in an invalid state.</p>
 */
export interface InvalidParameterGroupStateFault
  extends __ServiceException__<_InvalidParameterGroupStateFaultDetails> {
  name: "InvalidParameterGroupStateFault";
}

export interface _InvalidParameterGroupStateFaultDetails {}
