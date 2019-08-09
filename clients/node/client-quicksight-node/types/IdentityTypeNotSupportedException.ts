import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The identity type specified is not supported. Supported identity types include IAM and QUICKSIGHT.</p>
 */
export interface IdentityTypeNotSupportedException
  extends __ServiceException__<_IdentityTypeNotSupportedExceptionDetails> {
  name: "IdentityTypeNotSupportedException";
}

export interface _IdentityTypeNotSupportedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
