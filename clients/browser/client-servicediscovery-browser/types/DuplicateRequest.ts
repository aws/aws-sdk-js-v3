import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation is already in progress.</p>
 */
export interface DuplicateRequest
  extends __ServiceException__<_DuplicateRequestDetails> {
  name: "DuplicateRequest";
}

export interface _DuplicateRequestDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * <p>The ID of the operation that is already in progress.</p>
   */
  DuplicateOperationId?: string;
}
