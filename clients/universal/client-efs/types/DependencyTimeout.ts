import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service timed out trying to fulfill the request, and the client should try the call again.</p>
 */
export interface DependencyTimeout
  extends __ServiceException__<_DependencyTimeoutDetails> {
  name: "DependencyTimeout";
}

export interface _DependencyTimeoutDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
