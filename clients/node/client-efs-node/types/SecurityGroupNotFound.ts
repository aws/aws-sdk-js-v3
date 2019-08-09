import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if one of the specified security groups doesn't exist in the subnet's VPC.</p>
 */
export interface SecurityGroupNotFound
  extends __ServiceException__<_SecurityGroupNotFoundDetails> {
  name: "SecurityGroupNotFound";
}

export interface _SecurityGroupNotFoundDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
