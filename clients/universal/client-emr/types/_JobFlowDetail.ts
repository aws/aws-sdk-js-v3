import {
  _JobFlowExecutionStatusDetail,
  _UnmarshalledJobFlowExecutionStatusDetail
} from "./_JobFlowExecutionStatusDetail";
import {
  _JobFlowInstancesDetail,
  _UnmarshalledJobFlowInstancesDetail
} from "./_JobFlowInstancesDetail";
import { _StepDetail, _UnmarshalledStepDetail } from "./_StepDetail";
import {
  _BootstrapActionDetail,
  _UnmarshalledBootstrapActionDetail
} from "./_BootstrapActionDetail";

/**
 * <p>A description of a cluster (job flow).</p>
 */
export interface _JobFlowDetail {
  /**
   * <p>The job flow identifier.</p>
   */
  JobFlowId: string;

  /**
   * <p>The name of the job flow.</p>
   */
  Name: string;

  /**
   * <p>The location in Amazon S3 where log files for the job are stored.</p>
   */
  LogUri?: string;

  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>Describes the execution status of the job flow.</p>
   */
  ExecutionStatusDetail: _JobFlowExecutionStatusDetail;

  /**
   * <p>Describes the Amazon EC2 instances of the job flow.</p>
   */
  Instances: _JobFlowInstancesDetail;

  /**
   * <p>A list of steps run by the job flow.</p>
   */
  Steps?: Array<_StepDetail> | Iterable<_StepDetail>;

  /**
   * <p>A list of the bootstrap actions run by the job flow.</p>
   */
  BootstrapActions?:
    | Array<_BootstrapActionDetail>
    | Iterable<_BootstrapActionDetail>;

  /**
   * <p>A list of strings set by third party software when the job flow is launched. If you are not using third party software to manage the job flow this value is empty.</p>
   */
  SupportedProducts?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether the cluster is visible to all IAM users of the AWS account associated with the cluster. If this value is set to <code>true</code>, all IAM users of that AWS account can view and (if they have the proper policy permissions set) manage the cluster. If it is set to <code>false</code>, only the IAM user that created the cluster can view and manage it. This value can be changed using the <a>SetVisibleToAllUsers</a> action.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>The IAM role that was specified when the job flow was launched. The EC2 instances of the job flow assume this role.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides a way for the automatic scaling feature to get the required permissions it needs to launch and terminate EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR blacklists and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?:
    | "TERMINATE_AT_INSTANCE_HOUR"
    | "TERMINATE_AT_TASK_COMPLETION"
    | string;
}

export interface _UnmarshalledJobFlowDetail extends _JobFlowDetail {
  /**
   * <p>Describes the execution status of the job flow.</p>
   */
  ExecutionStatusDetail: _UnmarshalledJobFlowExecutionStatusDetail;

  /**
   * <p>Describes the Amazon EC2 instances of the job flow.</p>
   */
  Instances: _UnmarshalledJobFlowInstancesDetail;

  /**
   * <p>A list of steps run by the job flow.</p>
   */
  Steps?: Array<_UnmarshalledStepDetail>;

  /**
   * <p>A list of the bootstrap actions run by the job flow.</p>
   */
  BootstrapActions?: Array<_UnmarshalledBootstrapActionDetail>;

  /**
   * <p>A list of strings set by third party software when the job flow is launched. If you are not using third party software to manage the job flow this value is empty.</p>
   */
  SupportedProducts?: Array<string>;
}
