import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the delete operation could not be completed.</p>
 */
export interface CannotDeleteException
  extends __ServiceException__<_CannotDeleteExceptionDetails> {
  name: "CannotDeleteException";
}

export interface _CannotDeleteExceptionDetails {
  /**
   * <p>Indicates that a resource could not be deleted because no resource with the specified name exists.</p>
   */
  Name?: string;
}
