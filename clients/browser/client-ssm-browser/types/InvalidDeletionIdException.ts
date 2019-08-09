import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The ID specified for the delete operation does not exist or is not valid. Verify the ID and try again.</p>
 */
export interface InvalidDeletionIdException
  extends __ServiceException__<_InvalidDeletionIdExceptionDetails> {
  name: "InvalidDeletionIdException";
}

export interface _InvalidDeletionIdExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
