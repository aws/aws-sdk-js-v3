import {
  _LaunchTemplateSpecification,
  _UnmarshalledLaunchTemplateSpecification
} from "./_LaunchTemplateSpecification";

/**
 * <p>An object representing an AWS Batch compute resource.</p>
 */
export interface _ComputeResource {
  /**
   * <p>The type of compute environment: EC2 or SPOT.</p>
   */
  type: "EC2" | "SPOT" | string;

  /**
   * <p>The minimum number of EC2 vCPUs that an environment should maintain (even if the compute environment is <code>DISABLED</code>). </p>
   */
  minvCpus: number;

  /**
   * <p>The maximum number of EC2 vCPUs that an environment can reach. </p>
   */
  maxvCpus: number;

  /**
   * <p>The desired number of EC2 vCPUS in the compute environment. </p>
   */
  desiredvCpus?: number;

  /**
   * <p>The instances types that may be launched. You can specify instance families to launch any instance type within those families (for example, <code>c4</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c4.8xlarge</code>). You can also choose <code>optimal</code> to pick instance types (from the C, M, and R instance families) on the fly that match the demand of your job queues.</p>
   */
  instanceTypes: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.</p>
   */
  imageId?: string;

  /**
   * <p>The VPC subnets into which the compute resources are launched. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  subnets: Array<string> | Iterable<string>;

  /**
   * <p>The EC2 security group that is associated with instances launched in the compute environment. </p>
   */
  securityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The EC2 key pair that is used for instances launched in the compute environment.</p>
   */
  ec2KeyPair?: string;

  /**
   * <p>The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, <code> <i>ecsInstanceRole</i> </code> or <code>arn:aws:iam::<i>&lt;aws_account_id&gt;</i>:instance-profile/<i>ecsInstanceRole</i> </code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html">Amazon ECS Instance Role</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  instanceRole: string;

  /**
   * <p>Key-value pair tags to be applied to resources that are launched in the compute environment. For AWS Batch, these take the form of "String1": "String2", where String1 is the tag key and String2 is the tag value—for example, { "Name": "AWS Batch Instance - C4OnDemand" }.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  placementGroup?: string;

  /**
   * <p>The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand price.</p>
   */
  bidPercentage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a <code>SPOT</code> compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html">Amazon EC2 Spot Fleet Role</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  spotIamFleetRole?: string;

  /**
   * <p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch Template Support</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  launchTemplate?: _LaunchTemplateSpecification;
}

export interface _UnmarshalledComputeResource extends _ComputeResource {
  /**
   * <p>The instances types that may be launched. You can specify instance families to launch any instance type within those families (for example, <code>c4</code> or <code>p3</code>), or you can specify specific sizes within a family (such as <code>c4.8xlarge</code>). You can also choose <code>optimal</code> to pick instance types (from the C, M, and R instance families) on the fly that match the demand of your job queues.</p>
   */
  instanceTypes: Array<string>;

  /**
   * <p>The VPC subnets into which the compute resources are launched. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and Subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  subnets: Array<string>;

  /**
   * <p>The EC2 security group that is associated with instances launched in the compute environment. </p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p>Key-value pair tags to be applied to resources that are launched in the compute environment. For AWS Batch, these take the form of "String1": "String2", where String1 is the tag key and String2 is the tag value—for example, { "Name": "AWS Batch Instance - C4OnDemand" }.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The launch template to use for your compute resources. Any other compute resource parameters that you specify in a <a>CreateComputeEnvironment</a> API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Launch Template Support</a> in the <i>AWS Batch User Guide</i>.</p>
   */
  launchTemplate?: _UnmarshalledLaunchTemplateSpecification;
}
