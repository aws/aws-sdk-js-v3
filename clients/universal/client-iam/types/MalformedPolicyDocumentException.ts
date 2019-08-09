import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
 */
export interface MalformedPolicyDocumentException
  extends __ServiceException__<_MalformedPolicyDocumentExceptionDetails> {
  name: "MalformedPolicyDocumentException";
}

export interface _MalformedPolicyDocumentExceptionDetails {
  /**
   * _malformedPolicyDocumentMessage shape
   */
  message?: string;
}
