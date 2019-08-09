import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user is not found. This error can happen in any operation that requires finding a user based on a provided user name, such as <code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 */
export interface QuickSightUserNotFoundException
  extends __ServiceException__<_QuickSightUserNotFoundExceptionDetails> {
  name: "QuickSightUserNotFoundException";
}

export interface _QuickSightUserNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
