import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 */
export interface InvalidAccountStatusException
  extends __ServiceException__<_InvalidAccountStatusExceptionDetails> {
  name: "InvalidAccountStatusException";
}

export interface _InvalidAccountStatusExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
