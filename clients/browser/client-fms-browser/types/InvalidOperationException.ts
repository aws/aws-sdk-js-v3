import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
