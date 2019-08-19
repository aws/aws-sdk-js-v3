import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
 */
export interface EntityTemporarilyUnmodifiableException
  extends __ServiceException__<_EntityTemporarilyUnmodifiableExceptionDetails> {
  name: "EntityTemporarilyUnmodifiableException";
}

export interface _EntityTemporarilyUnmodifiableExceptionDetails {
  /**
   * _entityTemporarilyUnmodifiableMessage shape
   */
  message?: string;
}
