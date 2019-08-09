import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is already in progress for the domain.</p>
 */
export interface DuplicateRequest
  extends __ServiceException__<_DuplicateRequestDetails> {
  name: "DuplicateRequest";
}

export interface _DuplicateRequestDetails {
  /**
   * <p>The request is already in progress for the domain.</p>
   */
  message?: string;
}
