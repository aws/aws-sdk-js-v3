import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The client is not authorized to access the requested resource.
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
