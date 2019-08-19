import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the size of <code>SecurityGroups</code> specified in the request is greater than five.</p>
 */
export interface SecurityGroupLimitExceeded
  extends __ServiceException__<_SecurityGroupLimitExceededDetails> {
  name: "SecurityGroupLimitExceeded";
}

export interface _SecurityGroupLimitExceededDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
