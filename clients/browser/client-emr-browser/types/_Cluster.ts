import { _ClusterStatus, _UnmarshalledClusterStatus } from "./_ClusterStatus";
import {
  _Ec2InstanceAttributes,
  _UnmarshalledEc2InstanceAttributes
} from "./_Ec2InstanceAttributes";
import { _Application, _UnmarshalledApplication } from "./_Application";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";
import {
  _KerberosAttributes,
  _UnmarshalledKerberosAttributes
} from "./_KerberosAttributes";

/**
 * <p>The detailed description of the cluster.</p>
 */
export interface _Cluster {
  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The current status details about the cluster.</p>
   */
  Status?: _ClusterStatus;

  /**
   * <p>Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</p>
   */
  Ec2InstanceAttributes?: _Ec2InstanceAttributes;

  /**
   * <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note> <p>The instance group configuration of the cluster. A value of <code>INSTANCE_GROUP</code> indicates a uniform instance group configuration. A value of <code>INSTANCE_FLEET</code> indicates an instance fleets configuration.</p>
   */
  InstanceCollectionType?: "INSTANCE_FLEET" | "INSTANCE_GROUP" | string;

  /**
   * <p>The path to the Amazon S3 location where logs for this cluster are stored.</p>
   */
  LogUri?: string;

  /**
   * <p>The AMI version requested for this cluster.</p>
   */
  RequestedAmiVersion?: string;

  /**
   * <p>The AMI version running on this cluster.</p>
   */
  RunningAmiVersion?: string;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version, for example, <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases versions 4.x and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>Specifies whether the cluster should terminate after completing all steps.</p>
   */
  AutoTerminate?: boolean;

  /**
   * <p>Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to <code>true</code>, all IAM users of that AWS account can view and manage the cluster if they have the proper policy permissions set. If this value is <code>false</code>, only the IAM user that created the cluster can view and manage it. This value can be changed using the <a>SetVisibleToAllUsers</a> action.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>The applications installed on this cluster.</p>
   */
  Applications?: Array<_Application> | Iterable<_Application>;

  /**
   * <p>A list of tags associated with a cluster.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>The name of the security configuration applied to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> is available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?:
    | "TERMINATE_AT_INSTANCE_HOUR"
    | "TERMINATE_AT_TASK_COMPLETION"
    | string;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.</p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies the type of updates that are applied from the Amazon Linux AMI package repositories when an instance boots using the AMI.</p>
   */
  RepoUpgradeOnBoot?: "SECURITY" | "NONE" | string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: _KerberosAttributes;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>The current status details about the cluster.</p>
   */
  Status?: _UnmarshalledClusterStatus;

  /**
   * <p>Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</p>
   */
  Ec2InstanceAttributes?: _UnmarshalledEc2InstanceAttributes;

  /**
   * <p>The applications installed on this cluster.</p>
   */
  Applications?: Array<_UnmarshalledApplication>;

  /**
   * <p>A list of tags associated with a cluster.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: _UnmarshalledKerberosAttributes;
}
