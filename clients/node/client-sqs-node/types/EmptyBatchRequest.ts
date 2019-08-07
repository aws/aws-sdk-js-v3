import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The batch request doesn't contain any entries.</p>
 */
export interface EmptyBatchRequest
  extends __ServiceException__<_EmptyBatchRequestDetails> {
  name: "EmptyBatchRequest";
}

export interface _EmptyBatchRequestDetails {}
