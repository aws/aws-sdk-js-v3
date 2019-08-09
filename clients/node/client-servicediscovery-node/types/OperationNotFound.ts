import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No operation exists with the specified ID.</p>
 */
export interface OperationNotFound
  extends __ServiceException__<_OperationNotFoundDetails> {
  name: "OperationNotFound";
}

export interface _OperationNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
