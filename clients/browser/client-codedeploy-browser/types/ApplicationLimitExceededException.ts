import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>More applications were attempted to be created than are allowed.</p>
 */
export interface ApplicationLimitExceededException
  extends __ServiceException__<_ApplicationLimitExceededExceptionDetails> {
  name: "ApplicationLimitExceededException";
}

export interface _ApplicationLimitExceededExceptionDetails {}
