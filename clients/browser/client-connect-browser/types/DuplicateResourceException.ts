import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource with that name already exists.</p>
 */
export interface DuplicateResourceException
  extends __ServiceException__<_DuplicateResourceExceptionDetails> {
  name: "DuplicateResourceException";
}

export interface _DuplicateResourceExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
