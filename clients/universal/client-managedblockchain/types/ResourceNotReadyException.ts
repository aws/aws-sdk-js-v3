import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource exists but is not in a status that can complete the operation.</p>
 */
export interface ResourceNotReadyException
  extends __ServiceException__<_ResourceNotReadyExceptionDetails> {
  name: "ResourceNotReadyException";
}

export interface _ResourceNotReadyExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
