import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more network settings specified in the request are invalid. <code>InvalidVpcId</code> means that the ID passed for the virtual private cloud (VPC) is invalid. <code>InvalidSubnetIds</code> returns the list of IDs for subnets that are either invalid or not part of the VPC specified. <code>InvalidSecurityGroupIds</code> returns the list of IDs for security groups that are either invalid or not part of the VPC specified.</p>
 */
export interface InvalidNetworkSettings
  extends __ServiceException__<_InvalidNetworkSettingsDetails> {
  name: "InvalidNetworkSettings";
}

export interface _InvalidNetworkSettingsDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the <i>Amazon VPC User Guide.</i> </p>
   */
  InvalidSubnetId?: string;

  /**
   * <p>The ID of your Amazon EC2 security group. This ID is used to control network access to the endpoint that Amazon FSx creates on your behalf in each subnet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups for Linux Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   */
  InvalidSecurityGroupId?: string;
}
