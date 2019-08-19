import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The object could not be deleted because links still exist. Remove the links and then try the operation again.</p>
 */
export interface StillContainsLinksException
  extends __ServiceException__<_StillContainsLinksExceptionDetails> {
  name: "StillContainsLinksException";
}

export interface _StillContainsLinksExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
