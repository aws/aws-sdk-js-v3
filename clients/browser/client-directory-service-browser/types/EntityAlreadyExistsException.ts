import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified entity already exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __ServiceException__<_EntityAlreadyExistsExceptionDetails> {
  name: "EntityAlreadyExistsException";
}

export interface _EntityAlreadyExistsExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
