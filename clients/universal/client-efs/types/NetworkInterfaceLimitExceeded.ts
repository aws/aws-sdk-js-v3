import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The calling account has reached the limit for elastic network interfaces for the specific AWS Region. The client should try to delete some elastic network interfaces or get the account limit raised. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Limits</a> in the <i>Amazon VPC User Guide </i> (see the Network interfaces per VPC entry in the table). </p>
 */
export interface NetworkInterfaceLimitExceeded
  extends __ServiceException__<_NetworkInterfaceLimitExceededDetails> {
  name: "NetworkInterfaceLimitExceeded";
}

export interface _NetworkInterfaceLimitExceededDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
