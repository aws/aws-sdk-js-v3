import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter type is not supported.</p>
 */
export interface UnsupportedParameterType
  extends __ServiceException__<_UnsupportedParameterTypeDetails> {
  name: "UnsupportedParameterType";
}

export interface _UnsupportedParameterTypeDetails {
  /**
   * _String shape
   */
  message?: string;
}
