import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of policy versions exceeds the limit.</p>
 */
export interface VersionsLimitExceededException
  extends __ServiceException__<_VersionsLimitExceededExceptionDetails> {
  name: "VersionsLimitExceededException";
}

export interface _VersionsLimitExceededExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
