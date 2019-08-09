import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource already exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __ServiceException__<_EntityAlreadyExistsExceptionDetails> {
  name: "EntityAlreadyExistsException";
}

export interface _EntityAlreadyExistsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
