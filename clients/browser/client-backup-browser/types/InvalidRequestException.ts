import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
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
