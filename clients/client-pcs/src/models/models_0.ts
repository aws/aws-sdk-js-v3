// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PCSServiceException as __BaseException } from "./PCSServiceException";

/**
 * <p>You don't have permission to perform the action.</p> <p> <u>Examples</u> </p> <ul> <li> <p>The launch template instance profile doesn't pass <code>iam:PassRole</code> verification.</p> </li> <li> <p>There is a mismatch between the account ID and cluster ID.</p> </li> <li> <p>The cluster ID doesn't exist.</p> </li> <li> <p>The EC2 instance isn't present.</p> </li> </ul>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AccountingMode = {
  NONE: "NONE",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type AccountingMode = (typeof AccountingMode)[keyof typeof AccountingMode];

/**
 * <p>The accounting configuration includes configurable settings for Slurm accounting. It's a property of the <b>ClusterSlurmConfiguration</b> object.</p>
 * @public
 */
export interface Accounting {
  /**
   * <p>The default value for <code>mode</code> is <code>STANDARD</code>. A value of <code>STANDARD</code> means Slurm accounting is enabled.</p>
   * @public
   */
  mode: AccountingMode | undefined;

  /**
   * <p>The default value for all purge settings for <code>slurmdbd.conf</code>. For more information, see the <a href="https://slurm.schedmd.com/slurmdbd.conf.html">slurmdbd.conf documentation at SchedMD</a>.</p> <p>The default value for <code>defaultPurgeTimeInDays</code> is <code>-1</code>.</p> <p>A value of <code>-1</code> means there is no purge time and records persist as long as the cluster exists.</p> <important> <p> <code>0</code> isn't a valid value.</p> </important>
   * @public
   */
  defaultPurgeTimeInDays?: number | undefined;
}

/**
 * <p>The accounting configuration includes configurable settings for Slurm accounting. It's a property of the <b>ClusterSlurmConfiguration</b> object.</p>
 * @public
 */
export interface AccountingRequest {
  /**
   * <p>The default value for <code>mode</code> is <code>STANDARD</code>. A value of <code>STANDARD</code> means Slurm accounting is enabled.</p>
   * @public
   */
  mode: AccountingMode | undefined;

  /**
   * <p>The default value for all purge settings for <code>slurmdbd.conf</code>. For more information, see the <a href="https://slurm.schedmd.com/slurmdbd.conf.html">slurmdbd.conf documentation at SchedMD</a>.</p> <p>The default value for <code>defaultPurgeTimeInDays</code> is <code>-1</code>.</p> <p>A value of <code>-1</code> means there is no purge time and records persist as long as the cluster exists.</p> <important> <p> <code>0</code> isn't a valid value.</p> </important>
   * @public
   */
  defaultPurgeTimeInDays?: number | undefined;
}

/**
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more than 1 operation on the same resource at the same time.</p> <p> <u>Examples</u> </p> <ul> <li> <p>A cluster with the same name already exists.</p> </li> <li> <p>A cluster isn't in <code>ACTIVE</code> status.</p> </li> <li> <p>A cluster to delete is in an unstable state. For example, because it still has <code>ACTIVE</code> node groups or queues.</p> </li> <li> <p>A queue already exists in a cluster.</p> </li> </ul>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p> The unique identifier of the resource that caused the conflict exception. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type or category of the resource that caused the conflict exception." </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>An Amazon EC2 launch template Amazon Web Services PCS uses to launch compute nodes.</p>
 * @public
 */
export interface CustomLaunchTemplate {
  /**
   * <p>The ID of the EC2 launch template to use to provision instances.</p> <p> Example: <code>lt-xxxx</code> </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the EC2 launch template to use to provision instances.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>An EC2 instance configuration Amazon Web Services PCS uses to launch compute nodes.</p>
 * @public
 */
export interface InstanceConfig {
  /**
   * <p>The EC2 instance type that Amazon Web Services PCS can provision in the compute node group.</p> <p> Example: <code>t2.xlarge</code> </p>
   * @public
   */
  instanceType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PurchaseOption = {
  ONDEMAND: "ONDEMAND",
  SPOT: "SPOT",
} as const;

/**
 * @public
 */
export type PurchaseOption = (typeof PurchaseOption)[keyof typeof PurchaseOption];

/**
 * <p>Specifies the boundaries of the compute node group auto scaling.</p>
 * @public
 */
export interface ScalingConfigurationRequest {
  /**
   * <p>The lower bound of the number of instances allowed in the compute fleet.</p>
   * @public
   */
  minInstanceCount: number | undefined;

  /**
   * <p>The upper bound of the number of instances allowed in the compute fleet.</p>
   * @public
   */
  maxInstanceCount: number | undefined;
}

/**
 * <p>Additional settings that directly map to Slurm settings.</p>
 * @public
 */
export interface SlurmCustomSetting {
  /**
   * <p>Amazon Web Services PCS supports configuration of the following Slurm parameters:</p> <ul> <li> <p>For <b>clusters</b> </p> <ul> <li> <p> <a href="https://slurm.schedmd.com/slurm.conf.html#OPT_Prolog_1"> <code>Prolog</code> </a> </p> </li> <li> <p> <a href="https://slurm.schedmd.com/slurm.conf.html#OPT_Epilog_1"> <code>Epilog</code> </a> </p> </li> <li> <p> <a href="https://slurm.schedmd.com/slurm.conf.html#OPT_SelectTypeParameters"> <code>SelectTypeParameters</code> </a> </p> </li> </ul> </li> <li> <p>For <b>compute node groups</b> </p> <ul> <li> <p> <a href="https://slurm.schedmd.com/slurm.conf.html#OPT_Weight"> <code>Weight</code> </a> </p> </li> <li> <p> <a href="https://slurm.schedmd.com/slurm.conf.html#OPT_Weight"> <code>RealMemory</code> </a> </p> </li> </ul> </li> </ul>
   * @public
   */
  parameterName: string | undefined;

  /**
   * <p>The values for the configured Slurm settings.</p>
   * @public
   */
  parameterValue: string | undefined;
}

/**
 * <p>Additional options related to the Slurm scheduler.</p>
 * @public
 */
export interface ComputeNodeGroupSlurmConfigurationRequest {
  /**
   * <p>Additional Slurm-specific configuration that directly maps to Slurm settings.</p>
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SpotAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;

/**
 * @public
 */
export type SpotAllocationStrategy = (typeof SpotAllocationStrategy)[keyof typeof SpotAllocationStrategy];

/**
 * <p>Additional configuration when you specify <code>SPOT</code> as the <code>purchaseOption</code> for the <code>CreateComputeNodeGroup</code> API action.</p>
 * @public
 */
export interface SpotOptions {
  /**
   * <p>The Amazon EC2 allocation strategy Amazon Web Services PCS uses to provision EC2 instances. Amazon Web Services PCS supports <b>lowest price</b>, <b>capacity optimized</b>, and <b>price capacity optimized</b>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html">Use allocation strategies to determine how EC2 Fleet or Spot Fleet fulfills Spot and On-Demand capacity</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. If you don't provide this option, it defaults to <b>price capacity optimized</b>.</p>
   * @public
   */
  allocationStrategy?: SpotAllocationStrategy | undefined;
}

/**
 * @public
 */
export interface CreateComputeNodeGroupRequest {
  /**
   * <p>The name or ID of the cluster to create a compute node group in.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>A name to identify the cluster. Example: <code>MyCluster</code> </p>
   * @public
   */
  computeNodeGroupName: string | undefined;

  /**
   * <p> The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch compute nodes (Amazon EC2 instances). If you don't provide this value, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The list of subnet IDs where the compute node group launches instances. Subnets must be in the same VPC as the cluster.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html">Instance purchasing options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. If you don't provide this option, it defaults to On-Demand.</p>
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * <p>An Amazon EC2 launch template Amazon Web Services PCS uses to launch compute nodes.</p>
   * @public
   */
  customLaunchTemplate: CustomLaunchTemplate | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the <code>pcs:RegisterComputeNodeGroupInstance</code> permission. The resource identifier of the ARN must start with <code>AWSPCS</code> or it must have <code>/aws-pcs/</code> in its path.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/AWSPCS-example-role-1</code> </p> </li> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/aws-pcs/example-role-2</code> </p> </li> </ul>
   * @public
   */
  iamInstanceProfileArn: string | undefined;

  /**
   * <p>Specifies the boundaries of the compute node group auto scaling.</p>
   * @public
   */
  scalingConfiguration: ScalingConfigurationRequest | undefined;

  /**
   * <p>A list of EC2 instance configurations that Amazon Web Services PCS can provision in the compute node group.</p>
   * @public
   */
  instanceConfigs: InstanceConfig[] | undefined;

  /**
   * <p>Additional configuration when you specify <code>SPOT</code> as the <code>purchaseOption</code> for the <code>CreateComputeNodeGroup</code> API action.</p>
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * <p>Additional options related to the Slurm scheduler.</p>
   * @public
   */
  slurmConfiguration?: ComputeNodeGroupSlurmConfigurationRequest | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An error that occurred during resource creation.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>The short-form error code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The detailed error information.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Specifies the boundaries of the compute node group auto scaling.</p>
 * @public
 */
export interface ScalingConfiguration {
  /**
   * <p>The lower bound of the number of instances allowed in the compute fleet.</p>
   * @public
   */
  minInstanceCount: number | undefined;

  /**
   * <p>The upper bound of the number of instances allowed in the compute fleet.</p>
   * @public
   */
  maxInstanceCount: number | undefined;
}

/**
 * <p>Additional options related to the Slurm scheduler.</p>
 * @public
 */
export interface ComputeNodeGroupSlurmConfiguration {
  /**
   * <p>Additional Slurm-specific configuration that directly maps to Slurm settings.</p>
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputeNodeGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ComputeNodeGroupStatus = (typeof ComputeNodeGroupStatus)[keyof typeof ComputeNodeGroupStatus];

/**
 * <p>A compute node group associated with a cluster.</p>
 * @public
 */
export interface ComputeNodeGroup {
  /**
   * <p>The name that identifies the compute node group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the compute node group.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the compute node group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the cluster of the compute node group.</p>
   * @public
   */
  clusterId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The provisioning status of the compute node group.</p> <note> <p>The provisioning status doesn't indicate the overall health of the compute node group.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: ComputeNodeGroupStatus | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch instances. If not provided, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html">Instance purchasing options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. If you don't provide this option, it defaults to On-Demand.</p>
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * <p>An Amazon EC2 launch template Amazon Web Services PCS uses to launch compute nodes.</p>
   * @public
   */
  customLaunchTemplate: CustomLaunchTemplate | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the <code>pcs:RegisterComputeNodeGroupInstance</code> permission. The resource identifier of the ARN must start with <code>AWSPCS</code> or it must have <code>/aws-pcs/</code> in its path.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/AWSPCS-example-role-1</code> </p> </li> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/aws-pcs/example-role-2</code> </p> </li> </ul>
   * @public
   */
  iamInstanceProfileArn: string | undefined;

  /**
   * <p>Specifies the boundaries of the compute node group auto scaling.</p>
   * @public
   */
  scalingConfiguration: ScalingConfiguration | undefined;

  /**
   * <p>A list of EC2 instance configurations that Amazon Web Services PCS can provision in the compute node group.</p>
   * @public
   */
  instanceConfigs: InstanceConfig[] | undefined;

  /**
   * <p>Additional configuration when you specify <code>SPOT</code> as the <code>purchaseOption</code> for the <code>CreateComputeNodeGroup</code> API action.</p>
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * <p>Additional options related to the Slurm scheduler.</p>
   * @public
   */
  slurmConfiguration?: ComputeNodeGroupSlurmConfiguration | undefined;

  /**
   * <p>The list of errors that occurred during compute node group provisioning.</p>
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateComputeNodeGroupResponse {
  /**
   * <p>A compute node group associated with a cluster.</p>
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * <p>Amazon Web Services PCS can't process your request right now. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The requested resource can't be found. The cluster, node group, or queue you're attempting to get, update, list, or delete doesn't exist.</p> <p> <u>Examples</u> </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p> The unique identifier of the resource that was not found. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type or category of the resource that was not found. </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account. To learn how to increase your service quota, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">Requesting a quota increase</a> in the <i>Service Quotas User Guide</i> </p> <p> <u>Examples</u> </p> <ul> <li> <p>The max number of clusters or queues has been reached for the account.</p> </li> <li> <p>The max number of compute node groups has been reached for the associated cluster.</p> </li> <li> <p>The total of <code>maxInstances</code> across all compute node groups has been reached for associated cluster.</p> </li> </ul>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p> The service code associated with the quota that was exceeded. </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p> The unique identifier of the resource that caused the quota to be exceeded. </p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p> The type or category of the resource that caused the quota to be exceeded. </p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p> The <b>quota code</b> of the service quota that was exceeded. </p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.serviceCode = opts.serviceCode;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>Your request exceeded a request rate quota. Check the resource's request rate quota and try again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p> The number of seconds to wait before retrying the request. </p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Stores information about a field in a request that caused an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message body of the exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The request isn't valid.</p> <p> <u>Examples</u> </p> <ul> <li> <p>Your request contains malformed JSON or unsupported characters.</p> </li> <li> <p>The scheduler version isn't supported.</p> </li> <li> <p>There are networking related errors, such as network validation failure.</p> </li> <li> <p>AMI type is <code>CUSTOM</code> and the launch template doesn't define the AMI ID, or the AMI type is AL2 and the launch template defines the AMI.</p> </li> </ul>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p> The specific reason or cause of the validation error. </p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p> A list of fields or properties that failed validation. </p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeleteComputeNodeGroupRequest {
  /**
   * <p>The name or ID of the cluster of the compute node group.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the compute node group to delete.</p>
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeNodeGroupResponse {}

/**
 * @public
 */
export interface GetComputeNodeGroupRequest {
  /**
   * <p>The name or ID of the cluster.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the compute node group.</p>
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetComputeNodeGroupResponse {
  /**
   * <p>A compute node group associated with a cluster.</p>
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * @public
 */
export interface ListComputeNodeGroupsRequest {
  /**
   * <p>The name or ID of the cluster to list compute node groups for.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The object returned by the <code>ListComputeNodeGroups</code> API action.</p>
 * @public
 */
export interface ComputeNodeGroupSummary {
  /**
   * <p>The name that identifies the compute node group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the compute node group.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the compute node group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the cluster of the compute node group.</p>
   * @public
   */
  clusterId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The provisioning status of the compute node group.</p> <note> <p>The provisioning status doesn't indicate the overall health of the compute node group.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: ComputeNodeGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListComputeNodeGroupsResponse {
  /**
   * <p>The list of compute node groups for the cluster.</p>
   * @public
   */
  computeNodeGroups: ComputeNodeGroupSummary[] | undefined;

  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Additional options related to the Slurm scheduler.</p>
 * @public
 */
export interface UpdateComputeNodeGroupSlurmConfigurationRequest {
  /**
   * <p>Additional Slurm-specific configuration that directly maps to Slurm settings.</p>
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;
}

/**
 * @public
 */
export interface UpdateComputeNodeGroupRequest {
  /**
   * <p>The name or ID of the cluster of the compute node group.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the compute node group.</p>
   * @public
   */
  computeNodeGroupIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that Amazon Web Services PCS uses to launch instances. If not provided, Amazon Web Services PCS uses the AMI ID specified in the custom launch template.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The list of subnet IDs where the compute node group provisions instances. The subnets must be in the same VPC as the cluster.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>An Amazon EC2 launch template Amazon Web Services PCS uses to launch compute nodes.</p>
   * @public
   */
  customLaunchTemplate?: CustomLaunchTemplate | undefined;

  /**
   * <p>Specifies how EC2 instances are purchased on your behalf. Amazon Web Services PCS supports On-Demand and Spot instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html">Instance purchasing options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. If you don't provide this option, it defaults to On-Demand.</p>
   * @public
   */
  purchaseOption?: PurchaseOption | undefined;

  /**
   * <p>Additional configuration when you specify <code>SPOT</code> as the <code>purchaseOption</code> for the <code>CreateComputeNodeGroup</code> API action.</p>
   * @public
   */
  spotOptions?: SpotOptions | undefined;

  /**
   * <p>Specifies the boundaries of the compute node group auto scaling.</p>
   * @public
   */
  scalingConfiguration?: ScalingConfigurationRequest | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the <code>pcs:RegisterComputeNodeGroupInstance</code> permission. The resource identifier of the ARN must start with <code>AWSPCS</code> or it must have <code>/aws-pcs/</code> in its path.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/AWSPCS-example-role-1</code> </p> </li> <li> <p> <code>arn:aws:iam::111122223333:instance-profile/aws-pcs/example-role-2</code> </p> </li> </ul>
   * @public
   */
  iamInstanceProfileArn?: string | undefined;

  /**
   * <p>Additional options related to the Slurm scheduler.</p>
   * @public
   */
  slurmConfiguration?: UpdateComputeNodeGroupSlurmConfigurationRequest | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputeNodeGroupResponse {
  /**
   * <p>A compute node group associated with a cluster.</p>
   * @public
   */
  computeNodeGroup?: ComputeNodeGroup | undefined;
}

/**
 * <p>The networking configuration for the cluster's control plane.</p>
 * @public
 */
export interface NetworkingRequest {
  /**
   * <p>The list of subnet IDs where Amazon Web Services PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and Amazon Web Services PCS resources. Subnet IDs have the form <code>subnet-0123456789abcdef0</code>.</p> <p>Subnets can't be in Outposts, Wavelength or an Amazon Web Services Local Zone.</p> <note> <p>Amazon Web Services PCS currently supports only 1 subnet in this list.</p> </note>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>A list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SchedulerType = {
  SLURM: "SLURM",
} as const;

/**
 * @public
 */
export type SchedulerType = (typeof SchedulerType)[keyof typeof SchedulerType];

/**
 * <p>The cluster management and job scheduling software associated with the cluster.</p>
 * @public
 */
export interface SchedulerRequest {
  /**
   * <p>The software Amazon Web Services PCS uses to manage cluster scaling and job scheduling.</p>
   * @public
   */
  type: SchedulerType | undefined;

  /**
   * <p>The version of the specified scheduling software that Amazon Web Services PCS uses to manage cluster scaling and job scheduling. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions.html">Slurm versions in Amazon Web Services PCS</a> in the <i>Amazon Web Services PCS User Guide</i>.</p> <p>Valid Values: <code>23.11 | 24.05 | 24.11</code> </p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Size = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;

/**
 * @public
 */
export type Size = (typeof Size)[keyof typeof Size];

/**
 * <p>Additional options related to the Slurm scheduler.</p>
 * @public
 */
export interface ClusterSlurmConfigurationRequest {
  /**
   * <p>The time (in seconds) before an idle node is scaled down.</p> <p>Default: <code>600</code> </p>
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * <p>Additional Slurm-specific configuration that directly maps to Slurm settings.</p>
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * <p>The accounting configuration includes configurable settings for Slurm accounting.</p>
   * @public
   */
  accounting?: AccountingRequest | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>A name to identify the cluster. Example: <code>MyCluster</code> </p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The cluster management and job scheduling software associated with the cluster.</p>
   * @public
   */
  scheduler: SchedulerRequest | undefined;

  /**
   * <p>A value that determines the maximum number of compute nodes in the cluster and the maximum number of jobs (active and queued).</p> <ul> <li> <p> <code>SMALL</code>: 32 compute nodes and 256 jobs</p> </li> <li> <p> <code>MEDIUM</code>: 512 compute nodes and 8192 jobs</p> </li> <li> <p> <code>LARGE</code>: 2048 compute nodes and 16,384 jobs</p> </li> </ul>
   * @public
   */
  size: Size | undefined;

  /**
   * <p>The networking configuration used to set up the cluster's control plane.</p>
   * @public
   */
  networking: NetworkingRequest | undefined;

  /**
   * <p>Additional options related to the Slurm scheduler.</p>
   * @public
   */
  slurmConfiguration?: ClusterSlurmConfigurationRequest | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  SLURMCTLD: "SLURMCTLD",
  SLURMDBD: "SLURMDBD",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * <p>An endpoint available for interaction with the scheduler.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>Indicates the type of endpoint running at the specific IP address.</p>
   * @public
   */
  type: EndpointType | undefined;

  /**
   * <p>The endpoint's private IP address.</p> <p>Example: <code>2.2.2.2</code> </p>
   * @public
   */
  privateIpAddress: string | undefined;

  /**
   * <p>The endpoint's public IP address.</p> <p>Example: <code>1.1.1.1</code> </p>
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * <p>The endpoint's connection port number.</p> <p> Example: <code>1234</code> </p>
   * @public
   */
  port: string | undefined;
}

/**
 * <p>The networking configuration for the cluster's control plane.</p>
 * @public
 */
export interface Networking {
  /**
   * <p>The ID of the subnet where Amazon Web Services PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and Amazon Web Services PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone.</p> <p> Example: <code>subnet-abcd1234</code> </p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.</p> <p>The following rules are required:</p> <ul> <li> <p>Inbound rule 1</p> <ul> <li> <p>Protocol: All</p> </li> <li> <p>Ports: All</p> </li> <li> <p>Source: Self</p> </li> </ul> </li> <li> <p>Outbound rule 1</p> <ul> <li> <p>Protocol: All</p> </li> <li> <p>Ports: All</p> </li> <li> <p>Destination: 0.0.0.0/0 (IPv4)</p> </li> </ul> </li> <li> <p>Outbound rule 2</p> <ul> <li> <p>Protocol: All</p> </li> <li> <p>Ports: All</p> </li> <li> <p>Destination: Self</p> </li> </ul> </li> </ul>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * <p>The cluster management and job scheduling software associated with the cluster.</p>
 * @public
 */
export interface Scheduler {
  /**
   * <p>The software Amazon Web Services PCS uses to manage cluster scaling and job scheduling.</p>
   * @public
   */
  type: SchedulerType | undefined;

  /**
   * <p>The version of the specified scheduling software that Amazon Web Services PCS uses to manage cluster scaling and job scheduling. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions.html">Slurm versions in Amazon Web Services PCS</a> in the <i>Amazon Web Services PCS User Guide</i>.</p> <p>Valid Values: <code>23.11 | 24.05 | 24.11</code> </p>
   * @public
   */
  version: string | undefined;
}

/**
 * <p>The shared Slurm key for authentication, also known as the <b>cluster secret</b>.</p>
 * @public
 */
export interface SlurmAuthKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the the shared Slurm key.</p>
   * @public
   */
  secretArn: string | undefined;

  /**
   * <p>The version of the shared Slurm key.</p>
   * @public
   */
  secretVersion: string | undefined;
}

/**
 * <p>Additional options related to the Slurm scheduler.</p>
 * @public
 */
export interface ClusterSlurmConfiguration {
  /**
   * <p>The time (in seconds) before an idle node is scaled down.</p> <p>Default: <code>600</code> </p>
   * @public
   */
  scaleDownIdleTimeInSeconds?: number | undefined;

  /**
   * <p>Additional Slurm-specific configuration that directly maps to Slurm settings.</p>
   * @public
   */
  slurmCustomSettings?: SlurmCustomSetting[] | undefined;

  /**
   * <p>The shared Slurm key for authentication, also known as the <b>cluster secret</b>.</p>
   * @public
   */
  authKey?: SlurmAuthKey | undefined;

  /**
   * <p>The accounting configuration includes configurable settings for Slurm accounting.</p>
   * @public
   */
  accounting?: Accounting | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * <p>The cluster resource and configuration.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The name that identifies the cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the cluster.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The provisioning status of the cluster.</p> <note> <p>The provisioning status doesn't indicate the overall health of the cluster.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The cluster management and job scheduling software associated with the cluster.</p>
   * @public
   */
  scheduler: Scheduler | undefined;

  /**
   * <p>The size of the cluster.</p> <ul> <li> <p> <code>SMALL</code>: 32 compute nodes and 256 jobs</p> </li> <li> <p> <code>MEDIUM</code>: 512 compute nodes and 8192 jobs</p> </li> <li> <p> <code>LARGE</code>: 2048 compute nodes and 16,384 jobs</p> </li> </ul>
   * @public
   */
  size: Size | undefined;

  /**
   * <p>Additional options related to the Slurm scheduler.</p>
   * @public
   */
  slurmConfiguration?: ClusterSlurmConfiguration | undefined;

  /**
   * <p>The networking configuration for the cluster's control plane.</p>
   * @public
   */
  networking: Networking | undefined;

  /**
   * <p>The list of endpoints available for interaction with the scheduler.</p>
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * <p>The list of errors that occurred during cluster provisioning.</p>
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The cluster resource.</p>
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The name or ID of the cluster to delete.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {}

/**
 * @public
 */
export interface GetClusterRequest {
  /**
   * <p>The name or ID of the cluster of the queue.</p>
   * @public
   */
  clusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetClusterResponse {
  /**
   * <p>The cluster resource.</p>
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The object returned by the <code>ListClusters</code> API action.</p>
 * @public
 */
export interface ClusterSummary {
  /**
   * <p>The name that identifies the cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the cluster.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The provisioning status of the cluster.</p> <note> <p>The provisioning status doesn't indicate the overall health of the cluster.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>The list of clusters.</p>
   * @public
   */
  clusters: ClusterSummary[] | undefined;

  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The compute node group configuration for a queue.</p>
 * @public
 */
export interface ComputeNodeGroupConfiguration {
  /**
   * <p>The compute node group ID for the compute node group configuration.</p>
   * @public
   */
  computeNodeGroupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * <p>The name or ID of the cluster for which to create a queue.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>A name to identify the queue.</p>
   * @public
   */
  queueName: string | undefined;

  /**
   * <p>The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.</p>
   * @public
   */
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * <p>A queue resource.</p>
 * @public
 */
export interface Queue {
  /**
   * <p>The name that identifies the queue.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the queue.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the cluster of the queue.</p>
   * @public
   */
  clusterId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The provisioning status of the queue.</p> <note> <p>The provisioning status doesn't indicate the overall health of the queue.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: QueueStatus | undefined;

  /**
   * <p>The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.</p>
   * @public
   */
  computeNodeGroupConfigurations: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * <p>The list of errors that occurred during queue provisioning.</p>
   * @public
   */
  errorInfo?: ErrorInfo[] | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * <p>A queue resource.</p>
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * <p>The name or ID of the cluster of the queue.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the queue to delete.</p>
   * @public
   */
  queueIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * <p>The name or ID of the cluster of the queue.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the queue.</p>
   * @public
   */
  queueIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * <p>A queue resource.</p>
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * <p>The name or ID of the cluster to list queues for.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results. The default is 10 results, and the maximum allowed page size is 100 results. A value of 0 uses the default.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The object returned by the <code>ListQueues</code> API action.</p>
 * @public
 */
export interface QueueSummary {
  /**
   * <p>The name that identifies the queue.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The generated unique ID of the queue.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the cluster of the queue.</p>
   * @public
   */
  clusterId: string | undefined;

  /**
   * <p>The date and time the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the resource was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The provisioning status of the queue.</p> <note> <p> The provisioning status doesn't indicate the overall health of the queue.</p> </note> <important> <p>The resource enters the <code>SUSPENDING</code> and <code>SUSPENDED</code> states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is <code>SUSPENDED</code>. For more information, see <a href="https://docs.aws.amazon.com/pcs/latest/userguide/slurm-versions_faq.html">Frequently asked questions about Slurm versions in PCS</a> in the <i>PCS User Guide</i>.</p> </important>
   * @public
   */
  status: QueueStatus | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * <p>The list of queues associated with the cluster.</p>
   * @public
   */
  queues: QueueSummary[] | undefined;

  /**
   * <p>The value of <code>nextToken</code> is a unique pagination token for each page of results returned. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token returns an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * <p>The name or ID of the cluster of the queue.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The name or ID of the queue.</p>
   * @public
   */
  queueIdentifier: string | undefined;

  /**
   * <p>The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.</p>
   * @public
   */
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueResponse {
  /**
   * <p>A queue resource.</p>
   * @public
   */
  queue?: Queue | undefined;
}

/**
 * @public
 */
export interface RegisterComputeNodeGroupInstanceRequest {
  /**
   * <p>The name or ID of the cluster to register the compute node group instance in.</p>
   * @public
   */
  clusterIdentifier: string | undefined;

  /**
   * <p>The client-generated token to allow for retries.</p>
   * @public
   */
  bootstrapId: string | undefined;
}

/**
 * @public
 */
export interface RegisterComputeNodeGroupInstanceResponse {
  /**
   * <p>The scheduler node ID for this instance.</p>
   * @public
   */
  nodeID: string | undefined;

  /**
   * <p>For the Slurm scheduler, this is the shared Munge key the scheduler uses to authenticate compute node group instances.</p>
   * @public
   */
  sharedSecret: string | undefined;

  /**
   * <p>The list of endpoints available for interaction with the scheduler.</p>
   * @public
   */
  endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>1 or more tag keys to remove from the resource. Specify only tag keys and not tag values.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const RegisterComputeNodeGroupInstanceResponseFilterSensitiveLog = (
  obj: RegisterComputeNodeGroupInstanceResponse
): any => ({
  ...obj,
  ...(obj.sharedSecret && { sharedSecret: SENSITIVE_STRING }),
});
