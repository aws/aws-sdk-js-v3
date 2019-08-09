import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _string shape
   */
  Code?: string;

  /**
   * _string shape
   */
  Message?: string;

  /**
   * <p/>
   */
  Type?: string;

  /**
   * <p/>
   */
  Context?: string;
}
