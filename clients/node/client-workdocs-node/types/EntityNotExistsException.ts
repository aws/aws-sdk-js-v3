import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource does not exist.</p>
 */
export interface EntityNotExistsException
  extends __ServiceException__<_EntityNotExistsExceptionDetails> {
  name: "EntityNotExistsException";
}

export interface _EntityNotExistsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;

  /**
   * _EntityIdList shape
   */
  EntityIds?: Array<string>;
}
