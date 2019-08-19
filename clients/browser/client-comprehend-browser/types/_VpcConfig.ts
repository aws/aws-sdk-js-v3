/**
 * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
 */
export interface _VpcConfig {
  /**
   * <p>The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for your VPC</a>. </p>
   */
  SecurityGroupIds: Array<string> | Iterable<string>;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a>. </p>
   */
  Subnets: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcConfig extends _VpcConfig {
  /**
   * <p>The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for your VPC</a>. </p>
   */
  SecurityGroupIds: Array<string>;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a>. </p>
   */
  Subnets: Array<string>;
}
