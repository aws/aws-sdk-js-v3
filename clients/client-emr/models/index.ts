import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ActionOnFailure {
  CANCEL_AND_WAIT = "CANCEL_AND_WAIT",
  CONTINUE = "CONTINUE",
  TERMINATE_CLUSTER = "TERMINATE_CLUSTER",
  TERMINATE_JOB_FLOW = "TERMINATE_JOB_FLOW"
}

export interface AddInstanceFleetInput {
  __type?: "AddInstanceFleetInput";
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the configuration of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetConfig | undefined;
}

export namespace AddInstanceFleetInput {
  export function isa(o: any): o is AddInstanceFleetInput {
    return __isa(o, "AddInstanceFleetInput");
  }
}

export interface AddInstanceFleetOutput {
  __type?: "AddInstanceFleetOutput";
  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;
}

export namespace AddInstanceFleetOutput {
  export function isa(o: any): o is AddInstanceFleetOutput {
    return __isa(o, "AddInstanceFleetOutput");
  }
}

/**
 * <p>Input to an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsInput {
  __type?: "AddInstanceGroupsInput";
  /**
   * <p>Instance groups to add.</p>
   */
  InstanceGroups: Array<InstanceGroupConfig> | undefined;

  /**
   * <p>Job flow in which to add the instance groups.</p>
   */
  JobFlowId: string | undefined;
}

export namespace AddInstanceGroupsInput {
  export function isa(o: any): o is AddInstanceGroupsInput {
    return __isa(o, "AddInstanceGroupsInput");
  }
}

/**
 * <p>Output from an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsOutput {
  __type?: "AddInstanceGroupsOutput";
  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>Instance group IDs of the newly created instance groups.</p>
   */
  InstanceGroupIds?: Array<string>;

  /**
   * <p>The job flow ID in which the instance groups are added.</p>
   */
  JobFlowId?: string;
}

export namespace AddInstanceGroupsOutput {
  export function isa(o: any): o is AddInstanceGroupsOutput {
    return __isa(o, "AddInstanceGroupsOutput");
  }
}

/**
 * <p> The input argument to the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsInput {
  __type?: "AddJobFlowStepsInput";
  /**
   * <p>A string that uniquely identifies the job flow. This identifier is returned by
   *             <a>RunJobFlow</a> and can also be obtained from <a>ListClusters</a>. </p>
   */
  JobFlowId: string | undefined;

  /**
   * <p> A list of <a>StepConfig</a> to be executed by the job flow. </p>
   */
  Steps: Array<StepConfig> | undefined;
}

export namespace AddJobFlowStepsInput {
  export function isa(o: any): o is AddJobFlowStepsInput {
    return __isa(o, "AddJobFlowStepsInput");
  }
}

/**
 * <p> The output for the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsOutput {
  __type?: "AddJobFlowStepsOutput";
  /**
   * <p>The identifiers of the list of steps added to the job flow.</p>
   */
  StepIds?: Array<string>;
}

export namespace AddJobFlowStepsOutput {
  export function isa(o: any): o is AddJobFlowStepsOutput {
    return __isa(o, "AddJobFlowStepsOutput");
  }
}

/**
 * <p>This input identifies a cluster and a list of tags to attach.</p>
 */
export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The Amazon EMR resource identifier to which tags will be added. This value must be a cluster identifier.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tags to associate with a cluster and propagate to EC2 instances. Tags are user-defined key/value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace AddTagsInput {
  export function isa(o: any): o is AddTagsInput {
    return __isa(o, "AddTagsInput");
  }
}

/**
 * <p>This output indicates the result of adding tags to a resource.</p>
 */
export interface AddTagsOutput {
  __type?: "AddTagsOutput";
}

export namespace AddTagsOutput {
  export function isa(o: any): o is AddTagsOutput {
    return __isa(o, "AddTagsOutput");
  }
}

export enum AdjustmentType {
  CHANGE_IN_CAPACITY = "CHANGE_IN_CAPACITY",
  EXACT_CAPACITY = "EXACT_CAPACITY",
  PERCENT_CHANGE_IN_CAPACITY = "PERCENT_CHANGE_IN_CAPACITY"
}

/**
 * <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
 *          <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p>
 */
export interface Application {
  __type?: "Application";
  /**
   * <p>This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.</p>
   */
  AdditionalInfo?: { [key: string]: string };

  /**
   * <p>Arguments for Amazon EMR to pass to the application.</p>
   */
  Args?: Array<string>;

  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The version of the application.</p>
   */
  Version?: string;
}

export namespace Application {
  export function isa(o: any): o is Application {
    return __isa(o, "Application");
  }
}

/**
 * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicy {
  __type?: "AutoScalingPolicy";
  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.</p>
   */
  Constraints: ScalingConstraints | undefined;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules: Array<ScalingRule> | undefined;
}

export namespace AutoScalingPolicy {
  export function isa(o: any): o is AutoScalingPolicy {
    return __isa(o, "AutoScalingPolicy");
  }
}

/**
 * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicyDescription {
  __type?: "AutoScalingPolicyDescription";
  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.</p>
   */
  Constraints?: ScalingConstraints;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules?: Array<ScalingRule>;

  /**
   * <p>The status of an automatic scaling policy. </p>
   */
  Status?: AutoScalingPolicyStatus;
}

export namespace AutoScalingPolicyDescription {
  export function isa(o: any): o is AutoScalingPolicyDescription {
    return __isa(o, "AutoScalingPolicyDescription");
  }
}

export enum AutoScalingPolicyState {
  ATTACHED = "ATTACHED",
  ATTACHING = "ATTACHING",
  DETACHED = "DETACHED",
  DETACHING = "DETACHING",
  FAILED = "FAILED",
  PENDING = "PENDING"
}

/**
 * <p>The reason for an <a>AutoScalingPolicyStatus</a> change.</p>
 */
export interface AutoScalingPolicyStateChangeReason {
  __type?: "AutoScalingPolicyStateChangeReason";
  /**
   * <p>The code indicating the reason for the change in status.<code>USER_REQUEST</code> indicates that the scaling policy status was changed by a user. <code>PROVISION_FAILURE</code> indicates that the status change was because the policy failed to provision. <code>CLEANUP_FAILURE</code> indicates an error.</p>
   */
  Code?: AutoScalingPolicyStateChangeReasonCode | string;

  /**
   * <p>A friendly, more verbose message that accompanies an automatic scaling policy state change.</p>
   */
  Message?: string;
}

export namespace AutoScalingPolicyStateChangeReason {
  export function isa(o: any): o is AutoScalingPolicyStateChangeReason {
    return __isa(o, "AutoScalingPolicyStateChangeReason");
  }
}

export enum AutoScalingPolicyStateChangeReasonCode {
  CLEANUP_FAILURE = "CLEANUP_FAILURE",
  PROVISION_FAILURE = "PROVISION_FAILURE",
  USER_REQUEST = "USER_REQUEST"
}

/**
 * <p>The status of an automatic scaling policy. </p>
 */
export interface AutoScalingPolicyStatus {
  __type?: "AutoScalingPolicyStatus";
  /**
   * <p>Indicates the status of the automatic scaling policy.</p>
   */
  State?: AutoScalingPolicyState | string;

  /**
   * <p>The reason for a change in status.</p>
   */
  StateChangeReason?: AutoScalingPolicyStateChangeReason;
}

export namespace AutoScalingPolicyStatus {
  export function isa(o: any): o is AutoScalingPolicyStatus {
    return __isa(o, "AutoScalingPolicyStatus");
  }
}

/**
 * <p>A configuration for Amazon EMR block public access. When <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
 */
export interface BlockPublicAccessConfiguration {
  __type?: "BlockPublicAccessConfiguration";
  /**
   * <p>Indicates whether EMR block public access is enabled (<code>true</code>) or disabled (<code>false</code>). By default, the value is <code>false</code> for accounts that have created EMR clusters before July 2019. For accounts created after this, the default is <code>true</code>.</p>
   */
  BlockPublicSecurityGroupRules: boolean | undefined;

  /**
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>Specifies ports and port ranges that are permitted to have security group rules that allow inbound traffic from all public sources. For example, if Port 23 (Telnet) is specified for <code>PermittedPublicSecurityGroupRuleRanges</code>, Amazon EMR allows cluster creation if a security group associated with the cluster has a rule that allows inbound traffic on Port 23 from IPv4 0.0.0.0/0 or IPv6 port ::/0 as the source.</p>
   *          <p>By default, Port 22, which is used for SSH access to the cluster EC2 instances, is in the list of <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
   */
  PermittedPublicSecurityGroupRuleRanges?: Array<PortRange>;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace BlockPublicAccessConfiguration {
  export function isa(o: any): o is BlockPublicAccessConfiguration {
    return __isa(o, "BlockPublicAccessConfiguration");
  }
}

/**
 * <p>Properties that describe the AWS principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.</p>
 */
export interface BlockPublicAccessConfigurationMetadata {
  __type?: "BlockPublicAccessConfigurationMetadata";
  /**
   * <p>The Amazon Resource Name that created or last modified the configuration.</p>
   */
  CreatedByArn: string | undefined;

  /**
   * <p>The date and time that the configuration was created.</p>
   */
  CreationDateTime: Date | undefined;
}

export namespace BlockPublicAccessConfigurationMetadata {
  export function isa(o: any): o is BlockPublicAccessConfigurationMetadata {
    return __isa(o, "BlockPublicAccessConfigurationMetadata");
  }
}

/**
 * <p>Configuration of a bootstrap action.</p>
 */
export interface BootstrapActionConfig {
  __type?: "BootstrapActionConfig";
  /**
   * <p>The name of the bootstrap action.</p>
   */
  Name: string | undefined;

  /**
   * <p>The script run by the bootstrap action.</p>
   */
  ScriptBootstrapAction: ScriptBootstrapActionConfig | undefined;
}

export namespace BootstrapActionConfig {
  export function isa(o: any): o is BootstrapActionConfig {
    return __isa(o, "BootstrapActionConfig");
  }
}

/**
 * <p>Reports the configuration of a bootstrap action in a cluster (job flow).</p>
 */
export interface BootstrapActionDetail {
  __type?: "BootstrapActionDetail";
  /**
   * <p>A description of the bootstrap action.</p>
   */
  BootstrapActionConfig?: BootstrapActionConfig;
}

export namespace BootstrapActionDetail {
  export function isa(o: any): o is BootstrapActionDetail {
    return __isa(o, "BootstrapActionDetail");
  }
}

/**
 * <p>Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.</p>
 */
export interface CancelStepsInfo {
  __type?: "CancelStepsInfo";
  /**
   * <p>The reason for the failure if the CancelSteps request fails.</p>
   */
  Reason?: string;

  /**
   * <p>The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.</p>
   */
  Status?: CancelStepsRequestStatus | string;

  /**
   * <p>The encrypted StepId of a step.</p>
   */
  StepId?: string;
}

export namespace CancelStepsInfo {
  export function isa(o: any): o is CancelStepsInfo {
    return __isa(o, "CancelStepsInfo");
  }
}

/**
 * <p>The input argument to the <a>CancelSteps</a> operation.</p>
 */
export interface CancelStepsInput {
  __type?: "CancelStepsInput";
  /**
   * <p>The <code>ClusterID</code> for which specified steps will be canceled. Use <a>RunJobFlow</a> and <a>ListClusters</a> to get ClusterIDs. </p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The option to choose for cancelling <code>RUNNING</code> steps. By default, the value is <code>SEND_INTERRUPT</code>.</p>
   */
  StepCancellationOption?: StepCancellationOption | string;

  /**
   * <p>The list of <code>StepIDs</code> to cancel. Use <a>ListSteps</a> to get steps and their states for the specified cluster.</p>
   */
  StepIds: Array<string> | undefined;
}

export namespace CancelStepsInput {
  export function isa(o: any): o is CancelStepsInput {
    return __isa(o, "CancelStepsInput");
  }
}

/**
 * <p> The output for the <a>CancelSteps</a> operation. </p>
 */
export interface CancelStepsOutput {
  __type?: "CancelStepsOutput";
  /**
   * <p>A list of <a>CancelStepsInfo</a>, which shows the status of specified cancel requests for each <code>StepID</code> specified.</p>
   */
  CancelStepsInfoList?: Array<CancelStepsInfo>;
}

export namespace CancelStepsOutput {
  export function isa(o: any): o is CancelStepsOutput {
    return __isa(o, "CancelStepsOutput");
  }
}

export enum CancelStepsRequestStatus {
  FAILED = "FAILED",
  SUBMITTED = "SUBMITTED"
}

/**
 * <p>The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.</p>
 */
export interface CloudWatchAlarmDefinition {
  __type?: "CloudWatchAlarmDefinition";
  /**
   * <p>Determines how the metric specified by <code>MetricName</code> is compared to the value specified by <code>Threshold</code>.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>A CloudWatch metric dimension.</p>
   */
  Dimensions?: Array<MetricDimension>;

  /**
   * <p>The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is <code>1</code>.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The name of the CloudWatch metric that is watched to determine an alarm condition.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace for the CloudWatch metric. The default is <code>AWS/ElasticMapReduce</code>.</p>
   */
  Namespace?: string;

  /**
   * <p>The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify <code>300</code>.</p>
   */
  Period: number | undefined;

  /**
   * <p>The statistic to apply to the metric associated with the alarm. The default is <code>AVERAGE</code>.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>The unit of measure associated with the CloudWatch metric being watched. The value specified for <code>Unit</code> must correspond to the units specified in the CloudWatch metric.</p>
   */
  Unit?: Unit | string;
}

export namespace CloudWatchAlarmDefinition {
  export function isa(o: any): o is CloudWatchAlarmDefinition {
    return __isa(o, "CloudWatchAlarmDefinition");
  }
}

/**
 * <p>The detailed description of the cluster.</p>
 */
export interface Cluster {
  __type?: "Cluster";
  /**
   * <p>The applications installed on this cluster.</p>
   */
  Applications?: Array<Application>;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>Specifies whether the cluster should terminate after completing all steps.</p>
   */
  AutoTerminate?: boolean;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.</p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</p>
   */
  Ec2InstanceAttributes?: Ec2InstanceAttributes;

  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>The instance group configuration of the cluster. A value of <code>INSTANCE_GROUP</code> indicates a uniform instance group configuration. A value of <code>INSTANCE_FLEET</code> indicates an instance fleets configuration.</p>
   */
  InstanceCollectionType?: InstanceCollectionType | string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * <p>The path to the Amazon S3 location where logs for this cluster are stored.</p>
   */
  LogUri?: string;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.
   *       </p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies the type of updates that are applied from the Amazon Linux AMI package repositories when an instance boots using the AMI.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | string;

  /**
   * <p>The AMI version requested for this cluster.</p>
   */
  RequestedAmiVersion?: string;

  /**
   * <p>The AMI version running on this cluster.</p>
   */
  RunningAmiVersion?: string;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> is available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;

  /**
   * <p>The name of the security configuration applied to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The current status details about the cluster.</p>
   */
  Status?: ClusterStatus;

  /**
   * <p>Specifies the number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * <p>A list of tags associated with a cluster.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster. The default value, <code>true</code>, indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. If this value is <code>false</code>, only the IAM user that created the cluster can perform actions. This value can be changed on a running cluster by using the <a>SetVisibleToAllUsers</a> action. You can override the default value of <code>true</code> when you create a cluster by using the <code>VisibleToAllUsers</code> parameter of the <code>RunJobFlow</code> action.</p>
   */
  VisibleToAllUsers?: boolean;
}

export namespace Cluster {
  export function isa(o: any): o is Cluster {
    return __isa(o, "Cluster");
  }
}

export enum ClusterState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  TERMINATED = "TERMINATED",
  TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS",
  TERMINATING = "TERMINATING",
  WAITING = "WAITING"
}

/**
 * <p>The reason that the cluster changed to its current state.</p>
 */
export interface ClusterStateChangeReason {
  __type?: "ClusterStateChangeReason";
  /**
   * <p>The programmatic code for the state change reason.</p>
   */
  Code?: ClusterStateChangeReasonCode | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export namespace ClusterStateChangeReason {
  export function isa(o: any): o is ClusterStateChangeReason {
    return __isa(o, "ClusterStateChangeReason");
  }
}

export enum ClusterStateChangeReasonCode {
  ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED",
  BOOTSTRAP_FAILURE = "BOOTSTRAP_FAILURE",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INSTANCE_FLEET_TIMEOUT = "INSTANCE_FLEET_TIMEOUT",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STEP_FAILURE = "STEP_FAILURE",
  USER_REQUEST = "USER_REQUEST",
  VALIDATION_ERROR = "VALIDATION_ERROR"
}

/**
 * <p>The detailed status of the cluster.</p>
 */
export interface ClusterStatus {
  __type?: "ClusterStatus";
  /**
   * <p>The current state of the cluster.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The reason for the cluster status change.</p>
   */
  StateChangeReason?: ClusterStateChangeReason;

  /**
   * <p>A timeline that represents the status of a cluster over the lifetime of the cluster.</p>
   */
  Timeline?: ClusterTimeline;
}

export namespace ClusterStatus {
  export function isa(o: any): o is ClusterStatus {
    return __isa(o, "ClusterStatus");
  }
}

/**
 * <p>The summary description of the cluster.</p>
 */
export interface ClusterSummary {
  __type?: "ClusterSummary";
  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.
   *       </p>
   */
  OutpostArn?: string;

  /**
   * <p>The details about the current status of the cluster.</p>
   */
  Status?: ClusterStatus;
}

export namespace ClusterSummary {
  export function isa(o: any): o is ClusterSummary {
    return __isa(o, "ClusterSummary");
  }
}

/**
 * <p>Represents the timeline of the cluster's lifecycle.</p>
 */
export interface ClusterTimeline {
  __type?: "ClusterTimeline";
  /**
   * <p>The creation date and time of the cluster.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster was terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The date and time when the cluster was ready to execute steps.</p>
   */
  ReadyDateTime?: Date;
}

export namespace ClusterTimeline {
  export function isa(o: any): o is ClusterTimeline {
    return __isa(o, "ClusterTimeline");
  }
}

/**
 * <p>An entity describing an executable that runs on a cluster.</p>
 */
export interface Command {
  __type?: "Command";
  /**
   * <p>Arguments for Amazon EMR to pass to the command for execution.</p>
   */
  Args?: Array<string>;

  /**
   * <p>The name of the command.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon S3 location of the command script.</p>
   */
  ScriptPath?: string;
}

export namespace Command {
  export function isa(o: any): o is Command {
    return __isa(o, "Command");
  }
}

export enum ComparisonOperator {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
}

/**
 * <note>
 *             <p>Amazon EMR releases 4.x or later.</p>
 *          </note>
 *          <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
 */
export interface Configuration {
  __type?: "Configuration";
  /**
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace Configuration {
  export function isa(o: any): o is Configuration {
    return __isa(o, "Configuration");
  }
}

export interface CreateSecurityConfigurationInput {
  __type?: "CreateSecurityConfigurationInput";
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The security configuration details in JSON format. For JSON parameters and examples, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html">Use Security Configurations to Set Up Cluster Security</a> in the <i>Amazon EMR Management Guide</i>.</p>
   */
  SecurityConfiguration: string | undefined;
}

export namespace CreateSecurityConfigurationInput {
  export function isa(o: any): o is CreateSecurityConfigurationInput {
    return __isa(o, "CreateSecurityConfigurationInput");
  }
}

export interface CreateSecurityConfigurationOutput {
  __type?: "CreateSecurityConfigurationOutput";
  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

export namespace CreateSecurityConfigurationOutput {
  export function isa(o: any): o is CreateSecurityConfigurationOutput {
    return __isa(o, "CreateSecurityConfigurationOutput");
  }
}

export interface DeleteSecurityConfigurationInput {
  __type?: "DeleteSecurityConfigurationInput";
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationInput {
  export function isa(o: any): o is DeleteSecurityConfigurationInput {
    return __isa(o, "DeleteSecurityConfigurationInput");
  }
}

export interface DeleteSecurityConfigurationOutput {
  __type?: "DeleteSecurityConfigurationOutput";
}

export namespace DeleteSecurityConfigurationOutput {
  export function isa(o: any): o is DeleteSecurityConfigurationOutput {
    return __isa(o, "DeleteSecurityConfigurationOutput");
  }
}

/**
 * <p>This input determines which cluster to describe.</p>
 */
export interface DescribeClusterInput {
  __type?: "DescribeClusterInput";
  /**
   * <p>The identifier of the cluster to describe.</p>
   */
  ClusterId: string | undefined;
}

export namespace DescribeClusterInput {
  export function isa(o: any): o is DescribeClusterInput {
    return __isa(o, "DescribeClusterInput");
  }
}

/**
 * <p>This output contains the description of the cluster.</p>
 */
export interface DescribeClusterOutput {
  __type?: "DescribeClusterOutput";
  /**
   * <p>This output contains the details for the requested cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DescribeClusterOutput {
  export function isa(o: any): o is DescribeClusterOutput {
    return __isa(o, "DescribeClusterOutput");
  }
}

/**
 * <p> The input for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsInput {
  __type?: "DescribeJobFlowsInput";
  /**
   * <p>Return only job flows created after this date and time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Return only job flows created before this date and time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Return only job flows whose job flow ID is contained in this list.</p>
   */
  JobFlowIds?: Array<string>;

  /**
   * <p>Return only job flows whose state is contained in this list.</p>
   */
  JobFlowStates?: Array<JobFlowExecutionState | string>;
}

export namespace DescribeJobFlowsInput {
  export function isa(o: any): o is DescribeJobFlowsInput {
    return __isa(o, "DescribeJobFlowsInput");
  }
}

/**
 * <p> The output for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsOutput {
  __type?: "DescribeJobFlowsOutput";
  /**
   * <p>A list of job flows matching the parameters supplied.</p>
   */
  JobFlows?: Array<JobFlowDetail>;
}

export namespace DescribeJobFlowsOutput {
  export function isa(o: any): o is DescribeJobFlowsOutput {
    return __isa(o, "DescribeJobFlowsOutput");
  }
}

export interface DescribeSecurityConfigurationInput {
  __type?: "DescribeSecurityConfigurationInput";
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

export namespace DescribeSecurityConfigurationInput {
  export function isa(o: any): o is DescribeSecurityConfigurationInput {
    return __isa(o, "DescribeSecurityConfigurationInput");
  }
}

export interface DescribeSecurityConfigurationOutput {
  __type?: "DescribeSecurityConfigurationOutput";
  /**
   * <p>The date and time the security configuration was created</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The security configuration details in JSON format.</p>
   */
  SecurityConfiguration?: string;
}

export namespace DescribeSecurityConfigurationOutput {
  export function isa(o: any): o is DescribeSecurityConfigurationOutput {
    return __isa(o, "DescribeSecurityConfigurationOutput");
  }
}

/**
 * <p>This input determines which step to describe.</p>
 */
export interface DescribeStepInput {
  __type?: "DescribeStepInput";
  /**
   * <p>The identifier of the cluster with steps to describe.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The identifier of the step to describe.</p>
   */
  StepId: string | undefined;
}

export namespace DescribeStepInput {
  export function isa(o: any): o is DescribeStepInput {
    return __isa(o, "DescribeStepInput");
  }
}

/**
 * <p>This output contains the description of the cluster step.</p>
 */
export interface DescribeStepOutput {
  __type?: "DescribeStepOutput";
  /**
   * <p>The step details for the requested step identifier.</p>
   */
  Step?: Step;
}

export namespace DescribeStepOutput {
  export function isa(o: any): o is DescribeStepOutput {
    return __isa(o, "DescribeStepOutput");
  }
}

/**
 * <p>Configuration of requested EBS block device associated with the instance group.</p>
 */
export interface EbsBlockDevice {
  __type?: "EbsBlockDevice";
  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;

  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification?: VolumeSpecification;
}

export namespace EbsBlockDevice {
  export function isa(o: any): o is EbsBlockDevice {
    return __isa(o, "EbsBlockDevice");
  }
}

/**
 * <p>Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.</p>
 */
export interface EbsBlockDeviceConfig {
  __type?: "EbsBlockDeviceConfig";
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification: VolumeSpecification | undefined;

  /**
   * <p>Number of EBS volumes with a specific volume configuration that will be associated with every instance in the instance group</p>
   */
  VolumesPerInstance?: number;
}

export namespace EbsBlockDeviceConfig {
  export function isa(o: any): o is EbsBlockDeviceConfig {
    return __isa(o, "EbsBlockDeviceConfig");
  }
}

/**
 * <p>The Amazon EBS configuration of a cluster instance.</p>
 */
export interface EbsConfiguration {
  __type?: "EbsConfiguration";
  /**
   * <p>An array of Amazon EBS volume specifications attached to a cluster instance.</p>
   */
  EbsBlockDeviceConfigs?: Array<EbsBlockDeviceConfig>;

  /**
   * <p>Indicates whether an Amazon EBS volume is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

export namespace EbsConfiguration {
  export function isa(o: any): o is EbsConfiguration {
    return __isa(o, "EbsConfiguration");
  }
}

/**
 * <p>EBS block device that's attached to an EC2 instance.</p>
 */
export interface EbsVolume {
  __type?: "EbsVolume";
  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;

  /**
   * <p>The volume identifier of the EBS volume.</p>
   */
  VolumeId?: string;
}

export namespace EbsVolume {
  export function isa(o: any): o is EbsVolume {
    return __isa(o, "EbsVolume");
  }
}

/**
 * <p>Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</p>
 */
export interface Ec2InstanceAttributes {
  __type?: "Ec2InstanceAttributes";
  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string>;

  /**
   * <p>The Availability Zone in which the cluster will run. </p>
   */
  Ec2AvailabilityZone?: string;

  /**
   * <p>The name of the Amazon EC2 key pair to use when connecting with SSH into the master node as a user named "hadoop".</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>Set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, and your account supports EC2-Classic, the cluster launches in EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>The IAM role that was specified when the cluster was launched. The EC2 instances of the cluster assume this role.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of <code>RequestedEc2AvailabilityZones</code>, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2AvailabilityZones?: Array<string>;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit from among the list of <code>RequestedEc2SubnetIds</code>, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and Region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2SubnetIds?: Array<string>;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;
}

export namespace Ec2InstanceAttributes {
  export function isa(o: any): o is Ec2InstanceAttributes {
    return __isa(o, "Ec2InstanceAttributes");
  }
}

/**
 * <p>The details of the step failure. The service attempts to detect the root cause for many common failures.</p>
 */
export interface FailureDetails {
  __type?: "FailureDetails";
  /**
   * <p>The path to the log file where the step failure root cause was originally recorded.</p>
   */
  LogFile?: string;

  /**
   * <p>The descriptive message including the error the EMR service has identified as the cause of step failure. This is text from an error log that describes the root cause of the failure.</p>
   */
  Message?: string;

  /**
   * <p>The reason for the step failure. In the case where the service cannot successfully determine the root cause of the failure, it returns "Unknown Error" as a reason.</p>
   */
  Reason?: string;
}

export namespace FailureDetails {
  export function isa(o: any): o is FailureDetails {
    return __isa(o, "FailureDetails");
  }
}

export interface GetBlockPublicAccessConfigurationInput {
  __type?: "GetBlockPublicAccessConfigurationInput";
}

export namespace GetBlockPublicAccessConfigurationInput {
  export function isa(o: any): o is GetBlockPublicAccessConfigurationInput {
    return __isa(o, "GetBlockPublicAccessConfigurationInput");
  }
}

export interface GetBlockPublicAccessConfigurationOutput {
  __type?: "GetBlockPublicAccessConfigurationOutput";
  /**
   * <p>A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code> in the <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating the block public access configuration to remove the exception.</p>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;

  /**
   * <p>Properties that describe the AWS principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.</p>
   */
  BlockPublicAccessConfigurationMetadata:
    | BlockPublicAccessConfigurationMetadata
    | undefined;
}

export namespace GetBlockPublicAccessConfigurationOutput {
  export function isa(o: any): o is GetBlockPublicAccessConfigurationOutput {
    return __isa(o, "GetBlockPublicAccessConfigurationOutput");
  }
}

/**
 * <p>A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.</p>
 */
export interface HadoopJarStepConfig {
  __type?: "HadoopJarStepConfig";
  /**
   * <p>A list of command line arguments passed to the JAR file's main function when executed.</p>
   */
  Args?: Array<string>;

  /**
   * <p>A path to a JAR file run during the step.</p>
   */
  Jar: string | undefined;

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>A list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: Array<KeyValue>;
}

export namespace HadoopJarStepConfig {
  export function isa(o: any): o is HadoopJarStepConfig {
    return __isa(o, "HadoopJarStepConfig");
  }
}

/**
 * <p>A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.</p>
 */
export interface HadoopStepConfig {
  __type?: "HadoopStepConfig";
  /**
   * <p>The list of command line arguments to pass to the JAR file's main function for execution.</p>
   */
  Args?: Array<string>;

  /**
   * <p>The path to the JAR file that runs during the step.</p>
   */
  Jar?: string;

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file should specify a main class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>The list of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace HadoopStepConfig {
  export function isa(o: any): o is HadoopStepConfig {
    return __isa(o, "HadoopStepConfig");
  }
}

/**
 * <p>Represents an EC2 instance provisioned as part of cluster.</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>The list of EBS volumes that are attached to this instance.</p>
   */
  EbsVolumes?: Array<EbsVolume>;

  /**
   * <p>The unique identifier of the instance in Amazon EC2.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The unique identifier for the instance in Amazon EMR.</p>
   */
  Id?: string;

  /**
   * <p>The unique identifier of the instance fleet to which an EC2 instance belongs.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The identifier of the instance group to which this instance belongs.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The instance purchasing option. Valid values are <code>ON_DEMAND</code> or <code>SPOT</code>.
   *       </p>
   */
  Market?: MarketType | string;

  /**
   * <p>The private DNS name of the instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The public DNS name of the instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address of the instance.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The current status of the instance.</p>
   */
  Status?: InstanceStatus;
}

export namespace Instance {
  export function isa(o: any): o is Instance {
    return __isa(o, "Instance");
  }
}

export enum InstanceCollectionType {
  INSTANCE_FLEET = "INSTANCE_FLEET",
  INSTANCE_GROUP = "INSTANCE_GROUP"
}

/**
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot instances, which are provisioned to meet a defined target capacity.
 *       </p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleet {
  __type?: "InstanceFleet";
  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  Id?: string;

  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK.
   *       </p>
   */
  InstanceFleetType?: InstanceFleetType | string;

  /**
   * <p>The specification for the instance types that comprise an instance fleet. Up to five unique instance specifications may be defined for each instance fleet.
   *       </p>
   */
  InstanceTypeSpecifications?: Array<InstanceTypeSpecification>;

  /**
   * <p>Describes the launch specification for an instance fleet.
   *       </p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;

  /**
   * <p>A friendly name for the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The number of On-Demand units that have been provisioned for the instance fleet to fulfill <code>TargetOnDemandCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetOnDemandCapacity</code>.</p>
   */
  ProvisionedOnDemandCapacity?: number;

  /**
   * <p>The number of Spot units that have been provisioned for this instance fleet to fulfill <code>TargetSpotCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetSpotCapacity</code>.</p>
   */
  ProvisionedSpotCapacity?: number;

  /**
   * <p>The current status of the instance fleet.
   *       </p>
   */
  Status?: InstanceFleetStatus;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedOnDemandCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p>
   *          <note>
   *             <p>If not specified or set to 0, only Spot instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedSpotCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p>
   *          <note>
   *             <p>If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetSpotCapacity?: number;
}

export namespace InstanceFleet {
  export function isa(o: any): o is InstanceFleet {
    return __isa(o, "InstanceFleet");
  }
}

/**
 * <p>The configuration that defines an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetConfig {
  __type?: "InstanceFleetConfig";
  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER,CORE,and TASK.</p>
   */
  InstanceFleetType: InstanceFleetType | string | undefined;

  /**
   * <p>The instance type configurations that define the EC2 instances in the instance fleet.</p>
   */
  InstanceTypeConfigs?: Array<InstanceTypeConfig>;

  /**
   * <p>The launch specification for the instance fleet.</p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;

  /**
   * <p>The friendly name of the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p>
   *          <note>
   *             <p>If not specified or set to 0, only Spot instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p>
   *          <note>
   *             <p>If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetSpotCapacity?: number;
}

export namespace InstanceFleetConfig {
  export function isa(o: any): o is InstanceFleetConfig {
    return __isa(o, "InstanceFleetConfig");
  }
}

/**
 * <p>Configuration parameters for an instance fleet modification request.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetModifyConfig {
  __type?: "InstanceFleetModifyConfig";
  /**
   * <p>A unique identifier for the instance fleet.</p>
   */
  InstanceFleetId: string | undefined;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet. For more information see <a>InstanceFleetConfig$TargetOnDemandCapacity</a>.</p>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet. For more information, see <a>InstanceFleetConfig$TargetSpotCapacity</a>.</p>
   */
  TargetSpotCapacity?: number;
}

export namespace InstanceFleetModifyConfig {
  export function isa(o: any): o is InstanceFleetModifyConfig {
    return __isa(o, "InstanceFleetModifyConfig");
  }
}

/**
 * <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetProvisioningSpecifications {
  __type?: "InstanceFleetProvisioningSpecifications";
  /**
   * <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p>
   */
  SpotSpecification: SpotProvisioningSpecification | undefined;
}

export namespace InstanceFleetProvisioningSpecifications {
  export function isa(o: any): o is InstanceFleetProvisioningSpecifications {
    return __isa(o, "InstanceFleetProvisioningSpecifications");
  }
}

export enum InstanceFleetState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  PROVISIONING = "PROVISIONING",
  RESIZING = "RESIZING",
  RUNNING = "RUNNING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING"
}

/**
 * <p>Provides status change reason details for the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStateChangeReason {
  __type?: "InstanceFleetStateChangeReason";
  /**
   * <p>A code corresponding to the reason the state change occurred.</p>
   */
  Code?: InstanceFleetStateChangeReasonCode | string;

  /**
   * <p>An explanatory message.</p>
   */
  Message?: string;
}

export namespace InstanceFleetStateChangeReason {
  export function isa(o: any): o is InstanceFleetStateChangeReason {
    return __isa(o, "InstanceFleetStateChangeReason");
  }
}

export enum InstanceFleetStateChangeReasonCode {
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
}

/**
 * <p>The status of the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStatus {
  __type?: "InstanceFleetStatus";
  /**
   * <p>A code representing the instance fleet status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>—The instance fleet is provisioning EC2 resources and is not yet ready to run jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOOTSTRAPPING</code>—EC2 instances and other resources have been provisioned and the bootstrap actions specified for the instances are underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>—EC2 instances and other resources are running. They are either executing jobs or waiting to execute jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIZING</code>—A resize operation is underway. EC2 instances are either being added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code>—A resize operation could not complete. Existing EC2 instances are running, but instances can't be added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATING</code>—The instance fleet is terminating EC2 instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code>—The instance fleet is no longer active, and all EC2 instances have been terminated.</p>
   *             </li>
   *          </ul>
   */
  State?: InstanceFleetState | string;

  /**
   * <p>Provides status change reason details for the instance fleet.</p>
   */
  StateChangeReason?: InstanceFleetStateChangeReason;

  /**
   * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p>
   */
  Timeline?: InstanceFleetTimeline;
}

export namespace InstanceFleetStatus {
  export function isa(o: any): o is InstanceFleetStatus {
    return __isa(o, "InstanceFleetStatus");
  }
}

/**
 * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetTimeline {
  __type?: "InstanceFleetTimeline";
  /**
   * <p>The time and date the instance fleet was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The time and date the instance fleet terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The time and date the instance fleet was ready to run jobs.</p>
   */
  ReadyDateTime?: Date;
}

export namespace InstanceFleetTimeline {
  export function isa(o: any): o is InstanceFleetTimeline {
    return __isa(o, "InstanceFleetTimeline");
  }
}

export enum InstanceFleetType {
  CORE = "CORE",
  MASTER = "MASTER",
  TASK = "TASK"
}

/**
 * <p>This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.</p>
 */
export interface InstanceGroup {
  __type?: "InstanceGroup";
  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;

  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in
   *          USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *          <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>The version number of the requested configuration specification for this instance group.</p>
   */
  ConfigurationsVersion?: number;

  /**
   * <p>The EBS block devices that are mapped to this instance group.</p>
   */
  EbsBlockDevices?: Array<EbsBlockDevice>;

  /**
   * <p>If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The identifier of the instance group.</p>
   */
  Id?: string;

  /**
   * <p>The type of the instance group. Valid values are MASTER, CORE or TASK.</p>
   */
  InstanceGroupType?: InstanceGroupType | string;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType?: string;

  /**
   * <p>A list of configurations that were successfully applied for an instance group last time.</p>
   */
  LastSuccessfullyAppliedConfigurations?: Array<Configuration>;

  /**
   * <p>The version number of a configuration specification that was successfully applied for an instance group last time. </p>
   */
  LastSuccessfullyAppliedConfigurationsVersion?: number;

  /**
   * <p>The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>The name of the instance group.</p>
   */
  Name?: string;

  /**
   * <p>The target number of instances for the instance group.</p>
   */
  RequestedInstanceCount?: number;

  /**
   * <p>The number of instances currently running in this instance group.</p>
   */
  RunningInstanceCount?: number;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;

  /**
   * <p>The current status of the instance group.</p>
   */
  Status?: InstanceGroupStatus;
}

export namespace InstanceGroup {
  export function isa(o: any): o is InstanceGroup {
    return __isa(o, "InstanceGroup");
  }
}

/**
 * <p>Configuration defining a new instance group.</p>
 */
export interface InstanceGroupConfig {
  __type?: "InstanceGroupConfig";
  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicy;

  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>EBS configurations that will be attached to each EC2 instance in the instance group.</p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * <p>Target number of instances for the instance group.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The role of the instance group in the cluster.</p>
   */
  InstanceRole: InstanceRoleType | string | undefined;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>Friendly name given to the instance group.</p>
   */
  Name?: string;
}

export namespace InstanceGroupConfig {
  export function isa(o: any): o is InstanceGroupConfig {
    return __isa(o, "InstanceGroupConfig");
  }
}

/**
 * <p>Detailed information about an instance group.</p>
 */
export interface InstanceGroupDetail {
  __type?: "InstanceGroupDetail";
  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <p>The date/time the instance group was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The date/time the instance group was terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>Unique identifier for the instance group.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>Target number of instances to run in the instance group.</p>
   */
  InstanceRequestCount: number | undefined;

  /**
   * <p>Instance group role in the cluster</p>
   */
  InstanceRole: InstanceRoleType | string | undefined;

  /**
   * <p>Actual count of running instances.</p>
   */
  InstanceRunningCount: number | undefined;

  /**
   * <p>EC2 instance type.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>Details regarding the state of the instance group.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market: MarketType | string | undefined;

  /**
   * <p>Friendly name for the instance group.</p>
   */
  Name?: string;

  /**
   * <p>The date/time the instance group was available to the cluster.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date/time the instance group was started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>State of instance group. The following values are deprecated: STARTING, TERMINATED, and FAILED.</p>
   */
  State: InstanceGroupState | string | undefined;
}

export namespace InstanceGroupDetail {
  export function isa(o: any): o is InstanceGroupDetail {
    return __isa(o, "InstanceGroupDetail");
  }
}

/**
 * <p>Modify the size or configurations of an instance group.</p>
 */
export interface InstanceGroupModifyConfig {
  __type?: "InstanceGroupModifyConfig";
  /**
   * <p>A list of new or modified configurations to apply for an instance group.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.</p>
   */
  EC2InstanceIdsToTerminate?: Array<string>;

  /**
   * <p>Target size for the instance group.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Unique ID of the instance group to expand or shrink.</p>
   */
  InstanceGroupId: string | undefined;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;
}

export namespace InstanceGroupModifyConfig {
  export function isa(o: any): o is InstanceGroupModifyConfig {
    return __isa(o, "InstanceGroupModifyConfig");
  }
}

export enum InstanceGroupState {
  ARRESTED = "ARRESTED",
  BOOTSTRAPPING = "BOOTSTRAPPING",
  ENDED = "ENDED",
  PROVISIONING = "PROVISIONING",
  RECONFIGURING = "RECONFIGURING",
  RESIZING = "RESIZING",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING_DOWN",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING"
}

/**
 * <p>The status change reason details for the instance group.</p>
 */
export interface InstanceGroupStateChangeReason {
  __type?: "InstanceGroupStateChangeReason";
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceGroupStateChangeReasonCode | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export namespace InstanceGroupStateChangeReason {
  export function isa(o: any): o is InstanceGroupStateChangeReason {
    return __isa(o, "InstanceGroupStateChangeReason");
  }
}

export enum InstanceGroupStateChangeReasonCode {
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
}

/**
 * <p>The details of the instance group status.</p>
 */
export interface InstanceGroupStatus {
  __type?: "InstanceGroupStatus";
  /**
   * <p>The current state of the instance group.</p>
   */
  State?: InstanceGroupState | string;

  /**
   * <p>The status change reason details for the instance group.</p>
   */
  StateChangeReason?: InstanceGroupStateChangeReason;

  /**
   * <p>The timeline of the instance group status over time.</p>
   */
  Timeline?: InstanceGroupTimeline;
}

export namespace InstanceGroupStatus {
  export function isa(o: any): o is InstanceGroupStatus {
    return __isa(o, "InstanceGroupStatus");
  }
}

/**
 * <p>The timeline of the instance group lifecycle.</p>
 */
export interface InstanceGroupTimeline {
  __type?: "InstanceGroupTimeline";
  /**
   * <p>The creation date and time of the instance group.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance group terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The date and time when the instance group became ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;
}

export namespace InstanceGroupTimeline {
  export function isa(o: any): o is InstanceGroupTimeline {
    return __isa(o, "InstanceGroupTimeline");
  }
}

export enum InstanceGroupType {
  CORE = "CORE",
  MASTER = "MASTER",
  TASK = "TASK"
}

/**
 * <p>Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.</p>
 */
export interface InstanceResizePolicy {
  __type?: "InstanceResizePolicy";
  /**
   * <p>Decommissioning timeout override for the specific list of instances to be terminated.</p>
   */
  InstanceTerminationTimeout?: number;

  /**
   * <p>Specific list of instances to be protected when shrinking an instance group.</p>
   */
  InstancesToProtect?: Array<string>;

  /**
   * <p>Specific list of instances to be terminated when shrinking an instance group.</p>
   */
  InstancesToTerminate?: Array<string>;
}

export namespace InstanceResizePolicy {
  export function isa(o: any): o is InstanceResizePolicy {
    return __isa(o, "InstanceResizePolicy");
  }
}

export type InstanceRoleType = "CORE" | "MASTER" | "TASK";

export enum InstanceState {
  AWAITING_FULFILLMENT = "AWAITING_FULFILLMENT",
  BOOTSTRAPPING = "BOOTSTRAPPING",
  PROVISIONING = "PROVISIONING",
  RUNNING = "RUNNING",
  TERMINATED = "TERMINATED"
}

/**
 * <p>The details of the status change reason for the instance.</p>
 */
export interface InstanceStateChangeReason {
  __type?: "InstanceStateChangeReason";
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceStateChangeReasonCode | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export namespace InstanceStateChangeReason {
  export function isa(o: any): o is InstanceStateChangeReason {
    return __isa(o, "InstanceStateChangeReason");
  }
}

export enum InstanceStateChangeReasonCode {
  BOOTSTRAP_FAILURE = "BOOTSTRAP_FAILURE",
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR"
}

/**
 * <p>The instance status details.</p>
 */
export interface InstanceStatus {
  __type?: "InstanceStatus";
  /**
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState | string;

  /**
   * <p>The details of the status change reason for the instance.</p>
   */
  StateChangeReason?: InstanceStateChangeReason;

  /**
   * <p>The timeline of the instance status over time.</p>
   */
  Timeline?: InstanceTimeline;
}

export namespace InstanceStatus {
  export function isa(o: any): o is InstanceStatus {
    return __isa(o, "InstanceStatus");
  }
}

/**
 * <p>The timeline of the instance lifecycle.</p>
 */
export interface InstanceTimeline {
  __type?: "InstanceTimeline";
  /**
   * <p>The creation date and time of the instance.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance was terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The date and time when the instance was ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;
}

export namespace InstanceTimeline {
  export function isa(o: any): o is InstanceTimeline {
    return __isa(o, "InstanceTimeline");
  }
}

/**
 * <p>An instance type configuration for each instance type in an instance fleet, which determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. There can be a maximum of 5 instance type configurations in a fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeConfig {
  __type?: "InstanceTypeConfig";
  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.
   *       </p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%). If neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>.
   *       </p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * <p>An EC2 instance type, such as <code>m3.xlarge</code>.
   *       </p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.
   *       </p>
   */
  WeightedCapacity?: number;
}

export namespace InstanceTypeConfig {
  export function isa(o: any): o is InstanceTypeConfig {
    return __isa(o, "InstanceTypeConfig");
  }
}

/**
 * <p>The configuration specification for each instance type in an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeSpecification {
  __type?: "InstanceTypeSpecification";
  /**
   * <p>The bid price for each EC2 Spot instance type as defined by <code>InstanceType</code>. Expressed in USD.</p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%).</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (EBS) attached to each instance as defined by <code>InstanceType</code>.</p>
   */
  EbsBlockDevices?: Array<EbsBlockDevice>;

  /**
   * <p>Evaluates to <code>TRUE</code> when the specified <code>InstanceType</code> is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in <a>InstanceFleetConfig</a>. Capacity values represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the default value is 1.</p>
   */
  WeightedCapacity?: number;
}

export namespace InstanceTypeSpecification {
  export function isa(o: any): o is InstanceTypeSpecification {
    return __isa(o, "InstanceTypeSpecification");
  }
}

/**
 * <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return __isa(o, "InternalServerError");
  }
}

/**
 * <p>This exception occurs when there is an internal failure in the EMR service.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

/**
 * <p>This exception occurs when there is something wrong with user input.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The error code associated with the exception.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>A description of a cluster (job flow).</p>
 */
export interface JobFlowDetail {
  __type?: "JobFlowDetail";
  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides a way for the automatic scaling feature to get the required permissions it needs to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>A list of the bootstrap actions run by the job flow.</p>
   */
  BootstrapActions?: Array<BootstrapActionDetail>;

  /**
   * <p>Describes the execution status of the job flow.</p>
   */
  ExecutionStatusDetail: JobFlowExecutionStatusDetail | undefined;

  /**
   * <p>Describes the Amazon EC2 instances of the job flow.</p>
   */
  Instances: JobFlowInstancesDetail | undefined;

  /**
   * <p>The job flow identifier.</p>
   */
  JobFlowId: string | undefined;

  /**
   * <p>The IAM role that was specified when the job flow was launched. The EC2 instances of the job flow assume this role.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>The location in Amazon S3 where log files for the job are stored.</p>
   */
  LogUri?: string;

  /**
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>A list of steps run by the job flow.</p>
   */
  Steps?: Array<StepDetail>;

  /**
   * <p>A list of strings set by third party software when the job flow is launched. If you are not using third party software to manage the job flow this value is empty.</p>
   */
  SupportedProducts?: Array<string>;

  /**
   * <p>Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster. The default value, <code>true</code>, indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. If this value is <code>false</code>, only the IAM user that created the cluster can perform actions. This value can be changed on a running cluster by using the <a>SetVisibleToAllUsers</a> action. You can override the default value of <code>true</code> when you create a cluster by using the <code>VisibleToAllUsers</code> parameter of the <code>RunJobFlow</code> action.</p>
   */
  VisibleToAllUsers?: boolean;
}

export namespace JobFlowDetail {
  export function isa(o: any): o is JobFlowDetail {
    return __isa(o, "JobFlowDetail");
  }
}

export enum JobFlowExecutionState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING_DOWN",
  STARTING = "STARTING",
  TERMINATED = "TERMINATED",
  WAITING = "WAITING"
}

/**
 * <p>Describes the status of the cluster (job flow).</p>
 */
export interface JobFlowExecutionStatusDetail {
  __type?: "JobFlowExecutionStatusDetail";
  /**
   * <p>The creation date and time of the job flow.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The completion date and time of the job flow.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>Description of the job flow last changed state.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>The date and time when the job flow was ready to start running bootstrap actions.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The start date and time of the job flow.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The state of the job flow.</p>
   */
  State: JobFlowExecutionState | string | undefined;
}

export namespace JobFlowExecutionStatusDetail {
  export function isa(o: any): o is JobFlowExecutionStatusDetail {
    return __isa(o, "JobFlowExecutionStatusDetail");
  }
}

/**
 * <p>A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets, which is the recommended configuration. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.</p>
 */
export interface JobFlowInstancesConfig {
  __type?: "JobFlowInstancesConfig";
  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: Array<string>;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: Array<string>;

  /**
   * <p>The name of the EC2 key pair that can be used to ssh to the master node as the user called "hadoop."</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   */
  Ec2SubnetIds?: Array<string>;

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (deprecated), "0.20" (deprecated), "0.20.205" (deprecated), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the <code>AmiVersion</code> parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.</p>
   */
  HadoopVersion?: string;

  /**
   * <p>The number of EC2 instances in the cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>Describes the EC2 instances and instance configurations for clusters that use the instance fleet configuration.</p>
   */
  InstanceFleets?: Array<InstanceFleetConfig>;

  /**
   * <p>Configuration for the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<InstanceGroupConfig>;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>The EC2 instance type of the master node.</p>
   */
  MasterInstanceType?: string;

  /**
   * <p>The Availability Zone in which the cluster runs.</p>
   */
  Placement?: PlacementType;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * <p>The EC2 instance type of the core and task nodes.</p>
   */
  SlaveInstanceType?: string;

  /**
   * <p>Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;
}

export namespace JobFlowInstancesConfig {
  export function isa(o: any): o is JobFlowInstancesConfig {
    return __isa(o, "JobFlowInstancesConfig");
  }
}

/**
 * <p>Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.</p>
 */
export interface JobFlowInstancesDetail {
  __type?: "JobFlowInstancesDetail";
  /**
   * <p>The name of an Amazon EC2 key pair that can be used to ssh to the master node.</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the subnet where the cluster was launched.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>The Hadoop version for the cluster.</p>
   */
  HadoopVersion?: string;

  /**
   * <p>The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance serves as both the master and core and task node. If the value is greater than 1, one instance is the master node and all others are core and task nodes.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Details about the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<InstanceGroupDetail>;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>The Amazon EC2 instance identifier of the master node.</p>
   */
  MasterInstanceId?: string;

  /**
   * <p>The Amazon EC2 master node instance type.</p>
   */
  MasterInstanceType: string | undefined;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour that an m1.small runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The Amazon EC2 Availability Zone for the cluster.</p>
   */
  Placement?: PlacementType;

  /**
   * <p>The Amazon EC2 core and task node instance type.</p>
   */
  SlaveInstanceType: string | undefined;

  /**
   * <p>Specifies whether the Amazon EC2 instances in the cluster are protected from termination by API calls, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;
}

export namespace JobFlowInstancesDetail {
  export function isa(o: any): o is JobFlowInstancesDetail {
    return __isa(o, "JobFlowInstancesDetail");
  }
}

/**
 * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
 */
export interface KerberosAttributes {
  __type?: "KerberosAttributes";
  /**
   * <p>The Active Directory password for <code>ADDomainJoinUser</code>.</p>
   */
  ADDomainJoinPassword?: string;

  /**
   * <p>Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.</p>
   */
  ADDomainJoinUser?: string;

  /**
   * <p>Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.</p>
   */
  CrossRealmTrustPrincipalPassword?: string;

  /**
   * <p>The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.</p>
   */
  KdcAdminPassword: string | undefined;

  /**
   * <p>The name of the Kerberos realm to which all nodes in a cluster belong. For example, <code>EC2.INTERNAL</code>.
   *       </p>
   */
  Realm: string | undefined;
}

export namespace KerberosAttributes {
  export function isa(o: any): o is KerberosAttributes {
    return __isa(o, "KerberosAttributes");
  }
}

/**
 * <p>A key value pair.</p>
 */
export interface KeyValue {
  __type?: "KeyValue";
  /**
   * <p>The unique identifier of a key value pair.</p>
   */
  Key?: string;

  /**
   * <p>The value part of the identified key.</p>
   */
  Value?: string;
}

export namespace KeyValue {
  export function isa(o: any): o is KeyValue {
    return __isa(o, "KeyValue");
  }
}

/**
 * <p>This input determines which bootstrap actions to retrieve.</p>
 */
export interface ListBootstrapActionsInput {
  __type?: "ListBootstrapActionsInput";
  /**
   * <p>The cluster identifier for the bootstrap actions to list.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListBootstrapActionsInput {
  export function isa(o: any): o is ListBootstrapActionsInput {
    return __isa(o, "ListBootstrapActionsInput");
  }
}

/**
 * <p>This output contains the bootstrap actions detail.</p>
 */
export interface ListBootstrapActionsOutput {
  __type?: "ListBootstrapActionsOutput";
  /**
   * <p>The bootstrap actions associated with the cluster.</p>
   */
  BootstrapActions?: Array<Command>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListBootstrapActionsOutput {
  export function isa(o: any): o is ListBootstrapActionsOutput {
    return __isa(o, "ListBootstrapActionsOutput");
  }
}

/**
 * <p>This input determines how the ListClusters action filters the list of clusters that it returns.</p>
 */
export interface ListClustersInput {
  __type?: "ListClustersInput";
  /**
   * <p>The cluster state filters to apply when listing clusters.</p>
   */
  ClusterStates?: Array<ClusterState | string>;

  /**
   * <p>The creation date and time beginning value filter for listing clusters.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The creation date and time end value filter for listing clusters.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListClustersInput {
  export function isa(o: any): o is ListClustersInput {
    return __isa(o, "ListClustersInput");
  }
}

/**
 * <p>This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.</p>
 */
export interface ListClustersOutput {
  __type?: "ListClustersOutput";
  /**
   * <p>The list of clusters for the account based on the given filters.</p>
   */
  Clusters?: Array<ClusterSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListClustersOutput {
  export function isa(o: any): o is ListClustersOutput {
    return __isa(o, "ListClustersOutput");
  }
}

export interface ListInstanceFleetsInput {
  __type?: "ListInstanceFleetsInput";
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceFleetsInput {
  export function isa(o: any): o is ListInstanceFleetsInput {
    return __isa(o, "ListInstanceFleetsInput");
  }
}

export interface ListInstanceFleetsOutput {
  __type?: "ListInstanceFleetsOutput";
  /**
   * <p>The list of instance fleets for the cluster and given filters.</p>
   */
  InstanceFleets?: Array<InstanceFleet>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceFleetsOutput {
  export function isa(o: any): o is ListInstanceFleetsOutput {
    return __isa(o, "ListInstanceFleetsOutput");
  }
}

/**
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsInput {
  __type?: "ListInstanceGroupsInput";
  /**
   * <p>The identifier of the cluster for which to list the instance groups.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceGroupsInput {
  export function isa(o: any): o is ListInstanceGroupsInput {
    return __isa(o, "ListInstanceGroupsInput");
  }
}

/**
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsOutput {
  __type?: "ListInstanceGroupsOutput";
  /**
   * <p>The list of instance groups for the cluster and given filters.</p>
   */
  InstanceGroups?: Array<InstanceGroup>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceGroupsOutput {
  export function isa(o: any): o is ListInstanceGroupsOutput {
    return __isa(o, "ListInstanceGroupsOutput");
  }
}

/**
 * <p>This input determines which instances to list.</p>
 */
export interface ListInstancesInput {
  __type?: "ListInstancesInput";
  /**
   * <p>The identifier of the cluster for which to list the instances.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The node type of the instance fleet. For example MASTER, CORE, or TASK.</p>
   */
  InstanceFleetType?: InstanceFleetType | string;

  /**
   * <p>The identifier of the instance group for which to list the instances.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The type of instance group for which to list the instances.</p>
   */
  InstanceGroupTypes?: Array<InstanceGroupType | string>;

  /**
   * <p>A list of instance states that will filter the instances returned with this request.</p>
   */
  InstanceStates?: Array<InstanceState | string>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstancesInput {
  export function isa(o: any): o is ListInstancesInput {
    return __isa(o, "ListInstancesInput");
  }
}

/**
 * <p>This output contains the list of instances.</p>
 */
export interface ListInstancesOutput {
  __type?: "ListInstancesOutput";
  /**
   * <p>The list of instances for the cluster and given filters.</p>
   */
  Instances?: Array<Instance>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstancesOutput {
  export function isa(o: any): o is ListInstancesOutput {
    return __isa(o, "ListInstancesOutput");
  }
}

export interface ListSecurityConfigurationsInput {
  __type?: "ListSecurityConfigurationsInput";
  /**
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListSecurityConfigurationsInput {
  export function isa(o: any): o is ListSecurityConfigurationsInput {
    return __isa(o, "ListSecurityConfigurationsInput");
  }
}

export interface ListSecurityConfigurationsOutput {
  __type?: "ListSecurityConfigurationsOutput";
  /**
   * <p>A pagination token that indicates the next set of results to retrieve. Include the marker in the next ListSecurityConfiguration call to retrieve the next page of results, if required.</p>
   */
  Marker?: string;

  /**
   * <p>The creation date and time, and name, of each security configuration.</p>
   */
  SecurityConfigurations?: Array<SecurityConfigurationSummary>;
}

export namespace ListSecurityConfigurationsOutput {
  export function isa(o: any): o is ListSecurityConfigurationsOutput {
    return __isa(o, "ListSecurityConfigurationsOutput");
  }
}

/**
 * <p>This input determines which steps to list.</p>
 */
export interface ListStepsInput {
  __type?: "ListStepsInput";
  /**
   * <p>The identifier of the cluster for which to list the steps.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * <p>The filter to limit the step list based on the identifier of the steps. You can specify a maximum of ten Step IDs. The character constraint applies to the overall length of the array.</p>
   */
  StepIds?: Array<string>;

  /**
   * <p>The filter to limit the step list based on certain states.</p>
   */
  StepStates?: Array<StepState | string>;
}

export namespace ListStepsInput {
  export function isa(o: any): o is ListStepsInput {
    return __isa(o, "ListStepsInput");
  }
}

/**
 * <p>This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.</p>
 */
export interface ListStepsOutput {
  __type?: "ListStepsOutput";
  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * <p>The filtered list of steps for the cluster.</p>
   */
  Steps?: Array<StepSummary>;
}

export namespace ListStepsOutput {
  export function isa(o: any): o is ListStepsOutput {
    return __isa(o, "ListStepsOutput");
  }
}

export enum MarketType {
  ON_DEMAND = "ON_DEMAND",
  SPOT = "SPOT"
}

/**
 * <p>A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.</p>
 */
export interface MetricDimension {
  __type?: "MetricDimension";
  /**
   * <p>The dimension name.</p>
   */
  Key?: string;

  /**
   * <p>The dimension value.</p>
   */
  Value?: string;
}

export namespace MetricDimension {
  export function isa(o: any): o is MetricDimension {
    return __isa(o, "MetricDimension");
  }
}

export interface ModifyClusterInput {
  __type?: "ModifyClusterInput";
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. </p>
   */
  StepConcurrencyLevel?: number;
}

export namespace ModifyClusterInput {
  export function isa(o: any): o is ModifyClusterInput {
    return __isa(o, "ModifyClusterInput");
  }
}

export interface ModifyClusterOutput {
  __type?: "ModifyClusterOutput";
  /**
   * <p>The number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;
}

export namespace ModifyClusterOutput {
  export function isa(o: any): o is ModifyClusterOutput {
    return __isa(o, "ModifyClusterOutput");
  }
}

export interface ModifyInstanceFleetInput {
  __type?: "ModifyInstanceFleetInput";
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetModifyConfig | undefined;
}

export namespace ModifyInstanceFleetInput {
  export function isa(o: any): o is ModifyInstanceFleetInput {
    return __isa(o, "ModifyInstanceFleetInput");
  }
}

/**
 * <p>Change the size of some instance groups.</p>
 */
export interface ModifyInstanceGroupsInput {
  __type?: "ModifyInstanceGroupsInput";
  /**
   * <p>The ID of the cluster to which the instance group belongs.</p>
   */
  ClusterId?: string;

  /**
   * <p>Instance groups to change.</p>
   */
  InstanceGroups?: Array<InstanceGroupModifyConfig>;
}

export namespace ModifyInstanceGroupsInput {
  export function isa(o: any): o is ModifyInstanceGroupsInput {
    return __isa(o, "ModifyInstanceGroupsInput");
  }
}

/**
 * <p>The Amazon EC2 Availability Zone configuration of the cluster (job flow).</p>
 */
export interface PlacementType {
  __type?: "PlacementType";
  /**
   * <p>The Amazon EC2 Availability Zone for the cluster. <code>AvailabilityZone</code> is used for uniform instance groups, while <code>AvailabilityZones</code> (plural) is used for instance fleets.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used for instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform instance groups.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   */
  AvailabilityZones?: Array<string>;
}

export namespace PlacementType {
  export function isa(o: any): o is PlacementType {
    return __isa(o, "PlacementType");
  }
}

/**
 * <p>A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.</p>
 */
export interface PortRange {
  __type?: "PortRange";
  /**
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MaxRange?: number;

  /**
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MinRange: number | undefined;
}

export namespace PortRange {
  export function isa(o: any): o is PortRange {
    return __isa(o, "PortRange");
  }
}

export interface PutAutoScalingPolicyInput {
  __type?: "PutAutoScalingPolicyInput";
  /**
   * <p>Specifies the definition of the automatic scaling policy.</p>
   */
  AutoScalingPolicy: AutoScalingPolicy | undefined;

  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the ID of the instance group to which the automatic scaling policy is applied.</p>
   */
  InstanceGroupId: string | undefined;
}

export namespace PutAutoScalingPolicyInput {
  export function isa(o: any): o is PutAutoScalingPolicyInput {
    return __isa(o, "PutAutoScalingPolicyInput");
  }
}

export interface PutAutoScalingPolicyOutput {
  __type?: "PutAutoScalingPolicyOutput";
  /**
   * <p>The automatic scaling policy definition.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId?: string;
}

export namespace PutAutoScalingPolicyOutput {
  export function isa(o: any): o is PutAutoScalingPolicyOutput {
    return __isa(o, "PutAutoScalingPolicyOutput");
  }
}

export interface PutBlockPublicAccessConfigurationInput {
  __type?: "PutBlockPublicAccessConfigurationInput";
  /**
   * <p>A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using <code>PermittedPublicSecurityGroupRuleRanges</code> in the <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating <code>BlockPublicSecurityGroupRules</code> to remove the exception.</p>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;
}

export namespace PutBlockPublicAccessConfigurationInput {
  export function isa(o: any): o is PutBlockPublicAccessConfigurationInput {
    return __isa(o, "PutBlockPublicAccessConfigurationInput");
  }
}

export interface PutBlockPublicAccessConfigurationOutput {
  __type?: "PutBlockPublicAccessConfigurationOutput";
}

export namespace PutBlockPublicAccessConfigurationOutput {
  export function isa(o: any): o is PutBlockPublicAccessConfigurationOutput {
    return __isa(o, "PutBlockPublicAccessConfigurationOutput");
  }
}

export interface RemoveAutoScalingPolicyInput {
  __type?: "RemoveAutoScalingPolicyInput";
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId: string | undefined;
}

export namespace RemoveAutoScalingPolicyInput {
  export function isa(o: any): o is RemoveAutoScalingPolicyInput {
    return __isa(o, "RemoveAutoScalingPolicyInput");
  }
}

export interface RemoveAutoScalingPolicyOutput {
  __type?: "RemoveAutoScalingPolicyOutput";
}

export namespace RemoveAutoScalingPolicyOutput {
  export function isa(o: any): o is RemoveAutoScalingPolicyOutput {
    return __isa(o, "RemoveAutoScalingPolicyOutput");
  }
}

/**
 * <p>This input identifies a cluster and a list of tags to remove.</p>
 */
export interface RemoveTagsInput {
  __type?: "RemoveTagsInput";
  /**
   * <p>The Amazon EMR resource identifier from which tags will be removed. This value must be a cluster identifier.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tag keys to remove from a resource.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace RemoveTagsInput {
  export function isa(o: any): o is RemoveTagsInput {
    return __isa(o, "RemoveTagsInput");
  }
}

/**
 * <p>This output indicates the result of removing tags from a resource.</p>
 */
export interface RemoveTagsOutput {
  __type?: "RemoveTagsOutput";
}

export namespace RemoveTagsOutput {
  export function isa(o: any): o is RemoveTagsOutput {
    return __isa(o, "RemoveTagsOutput");
  }
}

export enum RepoUpgradeOnBoot {
  NONE = "NONE",
  SECURITY = "SECURITY"
}

/**
 * <p> Input to the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowInput {
  __type?: "RunJobFlowInput";
  /**
   * <p>A JSON string for selecting additional features.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">Amazon EMR Release Guide</a>.</p>
   */
  Applications?: Array<Application>;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>A list of bootstrap actions to run before Hadoop starts on the cluster nodes.</p>
   */
  BootstrapActions?: Array<BootstrapActionConfig>;

  /**
   * <p>For Amazon EMR releases 4.0 and later. The list of configurations supplied for the EMR cluster you are creating.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster EC2 instances. For more information about custom AMIs in Amazon EMR, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html">Using a Custom AMI</a> in the <i>Amazon EMR Management Guide</i>. If omitted, the cluster uses the base Linux AMI for the <code>ReleaseLabel</code> specified. For Amazon EMR versions 2.x and 3.x, use <code>AmiVersion</code> instead.</p>
   *          <p>For information about creating a custom AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating an Amazon EBS-Backed Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For information about finding an AMI ID, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a>. </p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>A specification of the number and type of Amazon EC2 instances.</p>
   */
  Instances: JobFlowInstancesConfig | undefined;

  /**
   * <p>Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is <code>EMR_EC2_DefaultRole</code>. In order to use the default role, you must have already created it using the CLI or console.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * <p>The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.</p>
   */
  LogUri?: string;

  /**
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use with the job flow that accepts a user argument list. EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action arguments. For more information, see "Launch a Job Flow on the MapR Distribution for Hadoop" in the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>"mapr-m3" - launch the cluster using MapR M3 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m5" - launch the cluster using MapR M5 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the job flow using MapR M3 or M5 Edition respectively.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m7" - launch the cluster using MapR M7 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"hunk" - launch the cluster with the Hunk Big Data Analtics Platform.</p>
   *             </li>
   *             <li>
   *                <p>"hue"- launch the cluster with Hue installed.</p>
   *             </li>
   *             <li>
   *                <p>"spark" - launch the cluster with Apache Spark installed.</p>
   *             </li>
   *             <li>
   *                <p>"ganglia" - launch the cluster with the Ganglia Monitoring System installed.</p>
   *             </li>
   *          </ul>
   */
  NewSupportedProducts?: Array<SupportedProductConfig>;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies which updates from the Amazon Linux AMI package repositories to apply automatically when the instance boots using the AMI. If omitted, the default is <code>SECURITY</code>, which indicates that only security updates are applied. If <code>NONE</code> is specified, no updates are applied, and all updates must be applied manually.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | string;

  /**
   * <p>Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;

  /**
   * <p>The name of a security configuration to apply to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Specifies the number of steps that can be executed concurrently. The default value is <code>1</code>. The maximum value is <code>256</code>.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * <p>A list of steps to run.</p>
   */
  Steps?: Array<StepConfig>;

  /**
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use. For more information, see the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Currently supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>"mapr-m3" - launch the job flow using MapR M3 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m5" - launch the job flow using MapR M5 Edition.</p>
   *             </li>
   *          </ul>
   */
  SupportedProducts?: Array<string>;

  /**
   * <p>A list of tags to associate with a cluster and propagate to Amazon EC2 instances.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A value of <code>true</code> indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. This is the default. A value of <code>false</code> indicates that only the IAM user who created the cluster can perform actions.</p>
   */
  VisibleToAllUsers?: boolean;
}

export namespace RunJobFlowInput {
  export function isa(o: any): o is RunJobFlowInput {
    return __isa(o, "RunJobFlowInput");
  }
}

/**
 * <p> The result of the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowOutput {
  __type?: "RunJobFlowOutput";
  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>An unique identifier for the job flow.</p>
   */
  JobFlowId?: string;
}

export namespace RunJobFlowOutput {
  export function isa(o: any): o is RunJobFlowOutput {
    return __isa(o, "RunJobFlowOutput");
  }
}

export enum ScaleDownBehavior {
  TERMINATE_AT_INSTANCE_HOUR = "TERMINATE_AT_INSTANCE_HOUR",
  TERMINATE_AT_TASK_COMPLETION = "TERMINATE_AT_TASK_COMPLETION"
}

/**
 * <p>The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.</p>
 */
export interface ScalingAction {
  __type?: "ScalingAction";
  /**
   * <p>Not available for instance groups. Instance groups use the market type specified for the group.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.</p>
   */
  SimpleScalingPolicyConfiguration:
    | SimpleScalingPolicyConfiguration
    | undefined;
}

export namespace ScalingAction {
  export function isa(o: any): o is ScalingAction {
    return __isa(o, "ScalingAction");
  }
}

/**
 * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.</p>
 */
export interface ScalingConstraints {
  __type?: "ScalingConstraints";
  /**
   * <p>The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.</p>
   */
  MaxCapacity: number | undefined;

  /**
   * <p>The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.</p>
   */
  MinCapacity: number | undefined;
}

export namespace ScalingConstraints {
  export function isa(o: any): o is ScalingConstraints {
    return __isa(o, "ScalingConstraints");
  }
}

/**
 * <p>A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.</p>
 */
export interface ScalingRule {
  __type?: "ScalingRule";
  /**
   * <p>The conditions that trigger an automatic scaling activity.</p>
   */
  Action: ScalingAction | undefined;

  /**
   * <p>A friendly, more verbose description of the automatic scaling rule.</p>
   */
  Description?: string;

  /**
   * <p>The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>The CloudWatch alarm definition that determines when automatic scaling activity is triggered.</p>
   */
  Trigger: ScalingTrigger | undefined;
}

export namespace ScalingRule {
  export function isa(o: any): o is ScalingRule {
    return __isa(o, "ScalingRule");
  }
}

/**
 * <p>The conditions that trigger an automatic scaling activity.</p>
 */
export interface ScalingTrigger {
  __type?: "ScalingTrigger";
  /**
   * <p>The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.</p>
   */
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition | undefined;
}

export namespace ScalingTrigger {
  export function isa(o: any): o is ScalingTrigger {
    return __isa(o, "ScalingTrigger");
  }
}

/**
 * <p>Configuration of the script to run during a bootstrap action.</p>
 */
export interface ScriptBootstrapActionConfig {
  __type?: "ScriptBootstrapActionConfig";
  /**
   * <p>A list of command line arguments to pass to the bootstrap action script.</p>
   */
  Args?: Array<string>;

  /**
   * <p>Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.</p>
   */
  Path: string | undefined;
}

export namespace ScriptBootstrapActionConfig {
  export function isa(o: any): o is ScriptBootstrapActionConfig {
    return __isa(o, "ScriptBootstrapActionConfig");
  }
}

/**
 * <p>The creation date and time, and name, of a security configuration.</p>
 */
export interface SecurityConfigurationSummary {
  __type?: "SecurityConfigurationSummary";
  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;
}

export namespace SecurityConfigurationSummary {
  export function isa(o: any): o is SecurityConfigurationSummary {
    return __isa(o, "SecurityConfigurationSummary");
  }
}

/**
 * <p> The input argument to the <a>TerminationProtection</a> operation. </p>
 */
export interface SetTerminationProtectionInput {
  __type?: "SetTerminationProtectionInput";
  /**
   * <p> A list of strings that uniquely identify the clusters to protect. This identifier is returned by
   *          <a>RunJobFlow</a> and can also be obtained from <a>DescribeJobFlows</a> . </p>
   */
  JobFlowIds: Array<string> | undefined;

  /**
   * <p>A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.</p>
   */
  TerminationProtected: boolean | undefined;
}

export namespace SetTerminationProtectionInput {
  export function isa(o: any): o is SetTerminationProtectionInput {
    return __isa(o, "SetTerminationProtectionInput");
  }
}

/**
 * <p>The input to the SetVisibleToAllUsers action.</p>
 */
export interface SetVisibleToAllUsersInput {
  __type?: "SetVisibleToAllUsersInput";
  /**
   * <p>The unique identifier of the job flow (cluster).</p>
   */
  JobFlowIds: Array<string> | undefined;

  /**
   * <p>A value of <code>true</code> indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. This is the default. A value of <code>false</code> indicates that only the IAM user who created the cluster can perform actions.</p>
   */
  VisibleToAllUsers: boolean | undefined;
}

export namespace SetVisibleToAllUsersInput {
  export function isa(o: any): o is SetVisibleToAllUsersInput {
    return __isa(o, "SetVisibleToAllUsersInput");
  }
}

/**
 * <p>Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.</p>
 */
export interface ShrinkPolicy {
  __type?: "ShrinkPolicy";
  /**
   * <p>The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.</p>
   */
  DecommissionTimeout?: number;

  /**
   * <p>Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.</p>
   */
  InstanceResizePolicy?: InstanceResizePolicy;
}

export namespace ShrinkPolicy {
  export function isa(o: any): o is ShrinkPolicy {
    return __isa(o, "ShrinkPolicy");
  }
}

/**
 * <p>An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.</p>
 */
export interface SimpleScalingPolicyConfiguration {
  __type?: "SimpleScalingPolicyConfiguration";
  /**
   * <p>The way in which EC2 instances are added (if <code>ScalingAdjustment</code> is a positive number) or terminated (if <code>ScalingAdjustment</code> is a negative number) each time the scaling activity is triggered. <code>CHANGE_IN_CAPACITY</code> is the default. <code>CHANGE_IN_CAPACITY</code> indicates that the EC2 instance count increments or decrements by <code>ScalingAdjustment</code>, which should be expressed as an integer. <code>PERCENT_CHANGE_IN_CAPACITY</code> indicates the instance count increments or decrements by the percentage specified by <code>ScalingAdjustment</code>, which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. <code>EXACT_CAPACITY</code> indicates the scaling activity results in an instance group with the number of EC2 instances specified by <code>ScalingAdjustment</code>, which should be expressed as a positive integer.</p>
   */
  AdjustmentType?: AdjustmentType | string;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.</p>
   */
  CoolDown?: number;

  /**
   * <p>The amount by which to scale in or scale out, based on the specified <code>AdjustmentType</code>. A positive value adds to the instance group's EC2 instance count while a negative number removes instances. If <code>AdjustmentType</code> is set to <code>EXACT_CAPACITY</code>, the number should only be a positive integer. If <code>AdjustmentType</code> is set to <code>PERCENT_CHANGE_IN_CAPACITY</code>, the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.</p>
   */
  ScalingAdjustment: number | undefined;
}

export namespace SimpleScalingPolicyConfiguration {
  export function isa(o: any): o is SimpleScalingPolicyConfiguration {
    return __isa(o, "SimpleScalingPolicyConfiguration");
  }
}

/**
 * <p>The launch specification for Spot instances in the instance fleet, which determines the defined duration and provisioning timeout behavior.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface SpotProvisioningSpecification {
  __type?: "SpotProvisioningSpecification";
  /**
   * <p>The defined duration for Spot instances (also known as Spot blocks) in minutes. When specified, the Spot instance does not terminate before the defined duration expires, and defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates.
   *       </p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The action to take when <code>TargetSpotCapacity</code> has not been fulfilled when the <code>TimeoutDurationMinutes</code> has expired; that is, when all Spot instances could not be provisioned within the Spot provisioning timeout. Valid values are <code>TERMINATE_CLUSTER</code> and <code>SWITCH_TO_ON_DEMAND</code>. SWITCH_TO_ON_DEMAND specifies that if no Spot instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.</p>
   */
  TimeoutAction: SpotProvisioningTimeoutAction | string | undefined;

  /**
   * <p>The spot provisioning timeout period in minutes. If Spot instances are not provisioned within this time period, the <code>TimeOutAction</code> is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.</p>
   */
  TimeoutDurationMinutes: number | undefined;
}

export namespace SpotProvisioningSpecification {
  export function isa(o: any): o is SpotProvisioningSpecification {
    return __isa(o, "SpotProvisioningSpecification");
  }
}

export type SpotProvisioningTimeoutAction =
  | "SWITCH_TO_ON_DEMAND"
  | "TERMINATE_CLUSTER";

export enum Statistic {
  AVERAGE = "AVERAGE",
  MAXIMUM = "MAXIMUM",
  MINIMUM = "MINIMUM",
  SAMPLE_COUNT = "SAMPLE_COUNT",
  SUM = "SUM"
}

/**
 * <p>This represents a step in a cluster.</p>
 */
export interface Step {
  __type?: "Step";
  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;
}

export namespace Step {
  export function isa(o: any): o is Step {
    return __isa(o, "Step");
  }
}

export type StepCancellationOption = "SEND_INTERRUPT" | "TERMINATE_PROCESS";

/**
 * <p>Specification of a cluster (job flow) step.</p>
 */
export interface StepConfig {
  __type?: "StepConfig";
  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The JAR file used for the step.</p>
   */
  HadoopJarStep: HadoopJarStepConfig | undefined;

  /**
   * <p>The name of the step.</p>
   */
  Name: string | undefined;
}

export namespace StepConfig {
  export function isa(o: any): o is StepConfig {
    return __isa(o, "StepConfig");
  }
}

/**
 * <p>Combines the execution state and configuration of a step.</p>
 */
export interface StepDetail {
  __type?: "StepDetail";
  /**
   * <p>The description of the step status.</p>
   */
  ExecutionStatusDetail: StepExecutionStatusDetail | undefined;

  /**
   * <p>The step configuration.</p>
   */
  StepConfig: StepConfig | undefined;
}

export namespace StepDetail {
  export function isa(o: any): o is StepDetail {
    return __isa(o, "StepDetail");
  }
}

export type StepExecutionState =
  | "CANCELLED"
  | "COMPLETED"
  | "CONTINUE"
  | "FAILED"
  | "INTERRUPTED"
  | "PENDING"
  | "RUNNING";

/**
 * <p>The execution state of a step.</p>
 */
export interface StepExecutionStatusDetail {
  __type?: "StepExecutionStatusDetail";
  /**
   * <p>The creation date and time of the step.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The completion date and time of the step.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>A description of the step's current state.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>The start date and time of the step.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The state of the step.</p>
   */
  State: StepExecutionState | string | undefined;
}

export namespace StepExecutionStatusDetail {
  export function isa(o: any): o is StepExecutionStatusDetail {
    return __isa(o, "StepExecutionStatusDetail");
  }
}

export enum StepState {
  CANCELLED = "CANCELLED",
  CANCEL_PENDING = "CANCEL_PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INTERRUPTED = "INTERRUPTED",
  PENDING = "PENDING",
  RUNNING = "RUNNING"
}

/**
 * <p>The details of the step state change reason.</p>
 */
export interface StepStateChangeReason {
  __type?: "StepStateChangeReason";
  /**
   * <p>The programmable code for the state change reason. Note: Currently, the service provides no code for the state change.</p>
   */
  Code?: StepStateChangeReasonCode | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export namespace StepStateChangeReason {
  export function isa(o: any): o is StepStateChangeReason {
    return __isa(o, "StepStateChangeReason");
  }
}

export type StepStateChangeReasonCode = "NONE";

/**
 * <p>The execution status details of the cluster step.</p>
 */
export interface StepStatus {
  __type?: "StepStatus";
  /**
   * <p>The details for the step failure including reason, message, and log file path where the root cause was identified.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>The execution state of the cluster step.</p>
   */
  State?: StepState | string;

  /**
   * <p>The reason for the step execution status change.</p>
   */
  StateChangeReason?: StepStateChangeReason;

  /**
   * <p>The timeline of the cluster step status over time.</p>
   */
  Timeline?: StepTimeline;
}

export namespace StepStatus {
  export function isa(o: any): o is StepStatus {
    return __isa(o, "StepStatus");
  }
}

/**
 * <p>The summary of the cluster step.</p>
 */
export interface StepSummary {
  __type?: "StepSummary";
  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility. We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;
}

export namespace StepSummary {
  export function isa(o: any): o is StepSummary {
    return __isa(o, "StepSummary");
  }
}

/**
 * <p>The timeline of the cluster step lifecycle.</p>
 */
export interface StepTimeline {
  __type?: "StepTimeline";
  /**
   * <p>The date and time when the cluster step was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution completed or failed.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution started.</p>
   */
  StartDateTime?: Date;
}

export namespace StepTimeline {
  export function isa(o: any): o is StepTimeline {
    return __isa(o, "StepTimeline");
  }
}

/**
 * <p>The list of supported product configurations which allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.</p>
 */
export interface SupportedProductConfig {
  __type?: "SupportedProductConfig";
  /**
   * <p>The list of user-supplied arguments.</p>
   */
  Args?: Array<string>;

  /**
   * <p>The name of the product configuration.</p>
   */
  Name?: string;
}

export namespace SupportedProductConfig {
  export function isa(o: any): o is SupportedProductConfig {
    return __isa(o, "SupportedProductConfig");
  }
}

/**
 * <p>A key/value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
 *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
 *       </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A user-defined key, which is the minimum required information for a valid tag.
   *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag </a>.
   *       </p>
   */
  Key?: string;

  /**
   * <p>A user-defined value, which is optional in a tag.
   *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
   *       </p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p> Input to the <a>TerminateJobFlows</a> operation. </p>
 */
export interface TerminateJobFlowsInput {
  __type?: "TerminateJobFlowsInput";
  /**
   * <p>A list of job flows to be shutdown.</p>
   */
  JobFlowIds: Array<string> | undefined;
}

export namespace TerminateJobFlowsInput {
  export function isa(o: any): o is TerminateJobFlowsInput {
    return __isa(o, "TerminateJobFlowsInput");
  }
}

export enum Unit {
  BITS = "BITS",
  BITS_PER_SECOND = "BITS_PER_SECOND",
  BYTES = "BYTES",
  BYTES_PER_SECOND = "BYTES_PER_SECOND",
  COUNT = "COUNT",
  COUNT_PER_SECOND = "COUNT_PER_SECOND",
  GIGA_BITS = "GIGA_BITS",
  GIGA_BITS_PER_SECOND = "GIGA_BITS_PER_SECOND",
  GIGA_BYTES = "GIGA_BYTES",
  GIGA_BYTES_PER_SECOND = "GIGA_BYTES_PER_SECOND",
  KILO_BITS = "KILO_BITS",
  KILO_BITS_PER_SECOND = "KILO_BITS_PER_SECOND",
  KILO_BYTES = "KILO_BYTES",
  KILO_BYTES_PER_SECOND = "KILO_BYTES_PER_SECOND",
  MEGA_BITS = "MEGA_BITS",
  MEGA_BITS_PER_SECOND = "MEGA_BITS_PER_SECOND",
  MEGA_BYTES = "MEGA_BYTES",
  MEGA_BYTES_PER_SECOND = "MEGA_BYTES_PER_SECOND",
  MICRO_SECONDS = "MICRO_SECONDS",
  MILLI_SECONDS = "MILLI_SECONDS",
  NONE = "NONE",
  PERCENT = "PERCENT",
  SECONDS = "SECONDS",
  TERA_BITS = "TERA_BITS",
  TERA_BITS_PER_SECOND = "TERA_BITS_PER_SECOND",
  TERA_BYTES = "TERA_BYTES",
  TERA_BYTES_PER_SECOND = "TERA_BYTES_PER_SECOND"
}

/**
 * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
 */
export interface VolumeSpecification {
  __type?: "VolumeSpecification";
  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports.</p>
   */
  Iops?: number;

  /**
   * <p>The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.</p>
   */
  SizeInGB: number | undefined;

  /**
   * <p>The volume type. Volume types supported are gp2, io1, standard.</p>
   */
  VolumeType: string | undefined;
}

export namespace VolumeSpecification {
  export function isa(o: any): o is VolumeSpecification {
    return __isa(o, "VolumeSpecification");
  }
}
