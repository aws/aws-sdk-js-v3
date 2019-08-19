import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of resources of that type already exist. Ensure the resources requested are within the boundaries of the service edition and your account limits.</p>
 */
export interface ResourceLimitExceededException
  extends __ServiceException__<_ResourceLimitExceededExceptionDetails> {
  name: "ResourceLimitExceededException";
}

export interface _ResourceLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
