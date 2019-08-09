import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource with the ID you requested already exists.</p>
 */
export interface ResourceExistsException
  extends __ServiceException__<_ResourceExistsExceptionDetails> {
  name: "ResourceExistsException";
}

export interface _ResourceExistsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
