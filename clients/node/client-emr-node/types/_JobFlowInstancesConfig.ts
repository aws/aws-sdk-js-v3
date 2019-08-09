import {
  _InstanceGroupConfig,
  _UnmarshalledInstanceGroupConfig
} from "./_InstanceGroupConfig";
import {
  _InstanceFleetConfig,
  _UnmarshalledInstanceFleetConfig
} from "./_InstanceFleetConfig";
import { _PlacementType, _UnmarshalledPlacementType } from "./_PlacementType";

/**
 * <p>A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.</p>
 */
export interface _JobFlowInstancesConfig {
  /**
   * <p>The EC2 instance type of the master node.</p>
   */
  MasterInstanceType?: string;

  /**
   * <p>The EC2 instance type of the core and task nodes.</p>
   */
  SlaveInstanceType?: string;

  /**
   * <p>The number of EC2 instances in the cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Configuration for the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<_InstanceGroupConfig> | Iterable<_InstanceGroupConfig>;

  /**
   * <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> <p>Describes the EC2 instances and instance configurations for clusters that use the instance fleet configuration.</p>
   */
  InstanceFleets?: Array<_InstanceFleetConfig> | Iterable<_InstanceFleetConfig>;

  /**
   * <p>The name of the EC2 key pair that can be used to ssh to the master node as the user called "hadoop."</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>The Availability Zone in which the cluster runs.</p>
   */
  Placement?: _PlacementType;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (deprecated), "0.20" (deprecated), "0.20.205" (deprecated), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the <code>AmiVersion</code> parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.</p>
   */
  HadoopVersion?: string;

  /**
   * <p>Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, the cluster launches in the normal Amazon Web Services cloud, outside of an Amazon VPC, if the account launching the cluster supports EC2 Classic networks in the region where the cluster launches.</p> <p>Amazon VPC currently does not support cluster compute quadruple extra large (cc1.4xlarge) instances. Thus you cannot specify the cc1.4xlarge instance type for clusters launched in an Amazon VPC.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   */
  Ec2SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledJobFlowInstancesConfig
  extends _JobFlowInstancesConfig {
  /**
   * <p>Configuration for the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<_UnmarshalledInstanceGroupConfig>;

  /**
   * <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> <p>Describes the EC2 instances and instance configurations for clusters that use the instance fleet configuration.</p>
   */
  InstanceFleets?: Array<_UnmarshalledInstanceFleetConfig>;

  /**
   * <p>The Availability Zone in which the cluster runs.</p>
   */
  Placement?: _UnmarshalledPlacementType;

  /**
   * <p>Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   */
  Ec2SubnetIds?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string>;
}
