import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
