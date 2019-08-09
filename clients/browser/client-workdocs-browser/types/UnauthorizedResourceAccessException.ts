import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller does not have access to perform the action on the resource.</p>
 */
export interface UnauthorizedResourceAccessException
  extends __ServiceException__<_UnauthorizedResourceAccessExceptionDetails> {
  name: "UnauthorizedResourceAccessException";
}

export interface _UnauthorizedResourceAccessExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
