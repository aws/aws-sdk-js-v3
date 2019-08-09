import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it attempted to create a resource that already exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __ServiceException__<_EntityAlreadyExistsExceptionDetails> {
  name: "EntityAlreadyExistsException";
}

export interface _EntityAlreadyExistsExceptionDetails {
  /**
   * _entityAlreadyExistsMessage shape
   */
  message?: string;
}
