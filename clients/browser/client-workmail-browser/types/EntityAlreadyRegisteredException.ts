import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user, group, or resource that you're trying to register is already registered.</p>
 */
export interface EntityAlreadyRegisteredException
  extends __ServiceException__<_EntityAlreadyRegisteredExceptionDetails> {
  name: "EntityAlreadyRegisteredException";
}

export interface _EntityAlreadyRegisteredExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
