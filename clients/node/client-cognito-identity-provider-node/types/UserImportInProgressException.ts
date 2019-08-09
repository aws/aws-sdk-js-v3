import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when you are trying to modify a user pool while a user import job is in progress for that pool.</p>
 */
export interface UserImportInProgressException
  extends __ServiceException__<_UserImportInProgressExceptionDetails> {
  name: "UserImportInProgressException";
}

export interface _UserImportInProgressExceptionDetails {
  /**
   * <p>The message returned when the user pool has an import job running.</p>
   */
  message?: string;
}
