import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception thrown when the version of an entity specified with the <code>expectedVersion</code> parameter does not match the latest version in the system.</p>
 */
export interface VersionConflictException
  extends __ServiceException__<_VersionConflictExceptionDetails> {
  name: "VersionConflictException";
}

export interface _VersionConflictExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
