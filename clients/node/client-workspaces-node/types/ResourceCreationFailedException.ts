import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource could not be created.</p>
 */
export interface ResourceCreationFailedException
  extends __ServiceException__<_ResourceCreationFailedExceptionDetails> {
  name: "ResourceCreationFailedException";
}

export interface _ResourceCreationFailedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
