import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy document that you provided isn't valid.</p>
 */
export interface MalformedPolicyDocumentException
  extends __ServiceException__<_MalformedPolicyDocumentExceptionDetails> {
  name: "MalformedPolicyDocumentException";
}

export interface _MalformedPolicyDocumentExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
