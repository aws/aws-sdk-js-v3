/**
 * <p>Information about endpoints.</p>
 */
export interface _SecurityDetails {
  /**
   * <p>ARN to a role needed for connecting streams to your instances. </p>
   */
  roleArn: string;

  /**
   * <p>The security groups to attach to the elastic network interfaces.</p>
   */
  securityGroupIds: Array<string> | Iterable<string>;

  /**
   * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
   */
  subnetIds: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSecurityDetails extends _SecurityDetails {
  /**
   * <p>The security groups to attach to the elastic network interfaces.</p>
   */
  securityGroupIds: Array<string>;

  /**
   * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
   */
  subnetIds: Array<string>;
}
