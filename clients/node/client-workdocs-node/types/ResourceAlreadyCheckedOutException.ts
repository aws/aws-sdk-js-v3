import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is already checked out.</p>
 */
export interface ResourceAlreadyCheckedOutException
  extends __ServiceException__<_ResourceAlreadyCheckedOutExceptionDetails> {
  name: "ResourceAlreadyCheckedOutException";
}

export interface _ResourceAlreadyCheckedOutExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
