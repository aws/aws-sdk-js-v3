import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is associated with a directory.</p>
 */
export interface ResourceAssociatedException
  extends __ServiceException__<_ResourceAssociatedExceptionDetails> {
  name: "ResourceAssociatedException";
}

export interface _ResourceAssociatedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
