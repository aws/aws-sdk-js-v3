/**
 * <p>Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. </p>
 */
export interface _VpcConfig {
  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or model. </p> <note> <p>Amazon EC2 P3 accelerated computing instances are not available in the c/d/e availability zones of region us-east-1. If you want to create endpoints with P3 instances in VPC mode in region us-east-1, create subnets in a/b/f availability zones instead.</p> </note>
   */
  Subnets: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcConfig extends _VpcConfig {
  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: Array<string>;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or model. </p> <note> <p>Amazon EC2 P3 accelerated computing instances are not available in the c/d/e availability zones of region us-east-1. If you want to create endpoints with P3 instances in VPC mode in region us-east-1, create subnets in a/b/f availability zones instead.</p> </note>
   */
  Subnets: Array<string>;
}
