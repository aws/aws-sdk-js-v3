/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip">Prepare to Bring Your Address Range to Your AWS Account</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface _CidrAuthorizationContext {
  /**
   * <p>The plain-text authorization message for the prefix and account.</p>
   */
  Message: string;

  /**
   * <p>The signed authorization message for the prefix and account.</p>
   */
  Signature: string;
}

export type _UnmarshalledCidrAuthorizationContext = _CidrAuthorizationContext;
