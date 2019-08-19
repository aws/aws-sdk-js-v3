import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided policy document doesn't meet the requirements of the specified policy type. For example, the syntax might be incorrect. For details about service control policy syntax, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control Policy Syntax</a> in the <i>AWS Organizations User Guide.</i> </p>
 */
export interface MalformedPolicyDocumentException
  extends __ServiceException__<_MalformedPolicyDocumentExceptionDetails> {
  name: "MalformedPolicyDocumentException";
}

export interface _MalformedPolicyDocumentExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
