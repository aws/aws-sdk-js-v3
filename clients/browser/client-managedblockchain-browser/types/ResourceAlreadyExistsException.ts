import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource request is issued for a resource that already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
