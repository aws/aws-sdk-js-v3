import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a resource could not be created because of a naming conflict.</p>
 */
export interface AlreadyExistsException
  extends __ServiceException__<_AlreadyExistsExceptionDetails> {
  name: "AlreadyExistsException";
}

export interface _AlreadyExistsExceptionDetails {
  /**
   * <p>Indicates that a resource could not be created because the resource name already exists.</p>
   */
  Name?: string;
}
