import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource does not exist, or access was denied. </p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * <p>Error or informational message that can contain more detail about problems locating or accessing a resource. </p>
   */
  Message?: string;
}
