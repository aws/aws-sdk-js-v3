import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified parameter group does not exist.</p>
 */
export interface ParameterGroupNotFoundFault
  extends __ServiceException__<_ParameterGroupNotFoundFaultDetails> {
  name: "ParameterGroupNotFoundFault";
}

export interface _ParameterGroupNotFoundFaultDetails {}
