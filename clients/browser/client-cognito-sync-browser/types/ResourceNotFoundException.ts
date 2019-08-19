import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown if the resource doesn't exist.
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * Message returned by a ResourceNotFoundException.
   */
  message: string;
}
