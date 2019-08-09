import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resolver rule policy is invalid.</p>
 */
export interface InvalidPolicyDocument
  extends __ServiceException__<_InvalidPolicyDocumentDetails> {
  name: "InvalidPolicyDocument";
}

export interface _InvalidPolicyDocumentDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
