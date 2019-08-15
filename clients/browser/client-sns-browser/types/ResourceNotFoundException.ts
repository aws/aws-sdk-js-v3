import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Can't tag resource. Verify that the topic exists.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
