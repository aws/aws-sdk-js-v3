import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a required parameter is missing.</p>
 */
export interface MissingParameterValueException
  extends __ServiceException__<_MissingParameterValueExceptionDetails> {
  name: "MissingParameterValueException";
}

export interface _MissingParameterValueExceptionDetails {
  /**
   * _string shape
   */
  Code?: string;

  /**
   * _string shape
   */
  Message?: string;

  /**
   * <p/>
   */
  Type?: string;

  /**
   * <p/>
   */
  Context?: string;
}
