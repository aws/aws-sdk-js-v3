import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * _ErrorCode shape
   */
  Code?: string;

  /**
   * <p>The request omitted one or more required parameters.</p>
   */
  RequiredParameters?: Array<string>;

  /**
   * <p>The request included parameters that cannot be provided together.</p>
   */
  MutuallyExclusiveParameters?: Array<string>;
}
