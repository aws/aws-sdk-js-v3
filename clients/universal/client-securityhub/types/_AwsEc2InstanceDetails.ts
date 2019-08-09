/**
 * <p>The details of an Amazon EC2 instance.</p>
 */
export interface _AwsEc2InstanceDetails {
  /**
   * <p>The instance type of the instance. </p>
   */
  Type?: string;

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  IpV4Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  IpV6Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>The key name associated with the instance.</p>
   */
  KeyName?: string;

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  IamInstanceProfileArn?: string;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  VpcId?: string;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  SubnetId?: string;

  /**
   * <p>The date/time the instance was launched.</p>
   */
  LaunchedAt?: string;
}

export interface _UnmarshalledAwsEc2InstanceDetails
  extends _AwsEc2InstanceDetails {
  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  IpV4Addresses?: Array<string>;

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  IpV6Addresses?: Array<string>;
}
