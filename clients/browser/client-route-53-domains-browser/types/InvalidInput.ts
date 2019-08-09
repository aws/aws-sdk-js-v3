import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
 */
export interface InvalidInput
  extends __ServiceException__<_InvalidInputDetails> {
  name: "InvalidInput";
}

export interface _InvalidInputDetails {
  /**
   * <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   */
  message?: string;
}
