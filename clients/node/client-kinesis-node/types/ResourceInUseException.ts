import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is not available for this operation. For successful operation, the resource must be in the <code>ACTIVE</code> state.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
