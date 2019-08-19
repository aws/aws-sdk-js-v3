import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A requested resource does not exist on the network. It may have been deleted or referenced inaccurately.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
