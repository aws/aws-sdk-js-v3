import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified task is not supported in this Region.</p>
 */
export interface UnsupportedFeatureException
  extends __ServiceException__<_UnsupportedFeatureExceptionDetails> {
  name: "UnsupportedFeatureException";
}

export interface _UnsupportedFeatureExceptionDetails {}
