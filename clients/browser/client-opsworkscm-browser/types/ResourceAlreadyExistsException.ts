import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource cannot be created because it already exists. </p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {
  /**
   * <p>Error or informational message in response to a CreateServer request that a resource cannot be created because it already exists. </p>
   */
  Message?: string;
}
