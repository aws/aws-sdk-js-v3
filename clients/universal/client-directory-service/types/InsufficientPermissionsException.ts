import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export interface InsufficientPermissionsException
  extends __ServiceException__<_InsufficientPermissionsExceptionDetails> {
  name: "InsufficientPermissionsException";
}

export interface _InsufficientPermissionsExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
