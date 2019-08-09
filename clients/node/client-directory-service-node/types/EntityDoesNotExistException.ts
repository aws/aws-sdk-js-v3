import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified entity could not be found.</p>
 */
export interface EntityDoesNotExistException
  extends __ServiceException__<_EntityDoesNotExistExceptionDetails> {
  name: "EntityDoesNotExistException";
}

export interface _EntityDoesNotExistExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
