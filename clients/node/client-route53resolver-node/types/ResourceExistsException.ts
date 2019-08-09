import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource that you tried to create already exists.</p>
 */
export interface ResourceExistsException
  extends __ServiceException__<_ResourceExistsExceptionDetails> {
  name: "ResourceExistsException";
}

export interface _ResourceExistsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   */
  ResourceType?: string;
}
