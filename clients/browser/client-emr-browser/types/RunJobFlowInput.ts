import { _JobFlowInstancesConfig } from "./_JobFlowInstancesConfig";
import { _StepConfig } from "./_StepConfig";
import { _BootstrapActionConfig } from "./_BootstrapActionConfig";
import { _SupportedProductConfig } from "./_SupportedProductConfig";
import { _Application } from "./_Application";
import { _Configuration } from "./_Configuration";
import { _Tag } from "./_Tag";
import { _KerberosAttributes } from "./_KerberosAttributes";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Input to the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowInput {
  /**
   * <p>The name of the job flow.</p>
   */
  Name: string;

  /**
   * <p>The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.</p>
   */
  LogUri?: string;

  /**
   * <p>A JSON string for selecting additional features.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version, for example, <code>emr-5.14.0</code>. For more information about Amazon EMR release versions and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR releases versions 4.x and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>A specification of the number and type of Amazon EC2 instances.</p>
   */
  Instances: _JobFlowInstancesConfig;

  /**
   * <p>A list of steps to run.</p>
   */
  Steps?: Array<_StepConfig> | Iterable<_StepConfig>;

  /**
   * <p>A list of bootstrap actions to run before Hadoop starts on the cluster nodes.</p>
   */
  BootstrapActions?:
    | Array<_BootstrapActionConfig>
    | Iterable<_BootstrapActionConfig>;

  /**
   * <note> <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p> </note> <p>A list of strings that indicates third-party software to use. For more information, see the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Currently supported values are:</p> <ul> <li> <p>"mapr-m3" - launch the job flow using MapR M3 Edition.</p> </li> <li> <p>"mapr-m5" - launch the job flow using MapR M5 Edition.</p> </li> </ul>
   */
  SupportedProducts?: Array<string> | Iterable<string>;

  /**
   * <note> <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.</p> </note> <p>A list of strings that indicates third-party software to use with the job flow that accepts a user argument list. EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action arguments. For more information, see "Launch a Job Flow on the MapR Distribution for Hadoop" in the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Supported values are:</p> <ul> <li> <p>"mapr-m3" - launch the cluster using MapR M3 Edition.</p> </li> <li> <p>"mapr-m5" - launch the cluster using MapR M5 Edition.</p> </li> <li> <p>"mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the job flow using MapR M3 or M5 Edition respectively.</p> </li> <li> <p>"mapr-m7" - launch the cluster using MapR M7 Edition.</p> </li> <li> <p>"hunk" - launch the cluster with the Hunk Big Data Analtics Platform.</p> </li> <li> <p>"hue"- launch the cluster with Hue installed.</p> </li> <li> <p>"spark" - launch the cluster with Apache Spark installed.</p> </li> <li> <p>"ganglia" - launch the cluster with the Ganglia Monitoring System installed.</p> </li> </ul>
   */
  NewSupportedProducts?:
    | Array<_SupportedProductConfig>
    | Iterable<_SupportedProductConfig>;

  /**
   * <p>Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">Amazon EMR Release Guide</a>.</p>
   */
  Applications?: Array<_Application> | Iterable<_Application>;

  /**
   * <p>For Amazon EMR releases 4.0 and later. The list of configurations supplied for the EMR cluster you are creating.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>Whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to <code>true</code>, all IAM users of that AWS account can view and (if they have the proper policy permissions set) manage the cluster. If it is set to <code>false</code>, only the IAM user that created the cluster can view and manage it.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is <code>EMR_EC2_DefaultRole</code>. In order to use the default role, you must have already created it using the CLI or console.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>A list of tags to associate with a cluster and propagate to Amazon EC2 instances.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The name of a security configuration to apply to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?:
    | "TERMINATE_AT_INSTANCE_HOUR"
    | "TERMINATE_AT_TASK_COMPLETION"
    | string;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster EC2 instances. For more information about custom AMIs in Amazon EMR, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html">Using a Custom AMI</a> in the <i>Amazon EMR Management Guide</i>. If omitted, the cluster uses the base Linux AMI for the <code>ReleaseLabel</code> specified. For Amazon EMR versions 2.x and 3.x, use <code>AmiVersion</code> instead.</p> <p>For information about creating a custom AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating an Amazon EBS-Backed Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For information about finding an AMI ID, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a>. </p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies which updates from the Amazon Linux AMI package repositories to apply automatically when the instance boots using the AMI. If omitted, the default is <code>SECURITY</code>, which indicates that only security updates are applied. If <code>NONE</code> is specified, no updates are applied, and all updates must be applied manually.</p>
   */
  RepoUpgradeOnBoot?: "SECURITY" | "NONE" | string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: _KerberosAttributes;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
