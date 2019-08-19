import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This error indicates that you are calling an operation on an Amazon QuickSight subscription where the edition doesn't include support for that operation. Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.</p>
 */
export interface UnsupportedUserEditionException
  extends __ServiceException__<_UnsupportedUserEditionExceptionDetails> {
  name: "UnsupportedUserEditionException";
}

export interface _UnsupportedUserEditionExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
