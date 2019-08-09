import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another resource is associated with the resource in the request.</p>
 */
export interface ResourceAssociatedException
  extends __ServiceException__<_ResourceAssociatedExceptionDetails> {
  name: "ResourceAssociatedException";
}

export interface _ResourceAssociatedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
