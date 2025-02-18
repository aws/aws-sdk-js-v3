// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EMRContainersServiceException as __BaseException } from "./EMRContainersServiceException";

/**
 * @public
 * @enum
 */
export const AllowAWSToRetainLogs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AllowAWSToRetainLogs = (typeof AllowAWSToRetainLogs)[keyof typeof AllowAWSToRetainLogs];

/**
 * @public
 * @enum
 */
export const CertificateProviderType = {
  PEM: "PEM",
} as const;

/**
 * @public
 */
export type CertificateProviderType = (typeof CertificateProviderType)[keyof typeof CertificateProviderType];

/**
 * <p>Configurations related to the TLS certificate for the security configuration.</p>
 * @public
 */
export interface TLSCertificateConfiguration {
  /**
   * <p>The TLS certificate type. Acceptable values: <code>PEM</code> or
   *          <code>Custom</code>.</p>
   * @public
   */
  certificateProviderType?: CertificateProviderType | undefined;

  /**
   * <p>Secrets Manager ARN that contains the public TLS certificate contents, used for
   *          communication between the user job and the system job.</p>
   * @public
   */
  publicCertificateSecretArn?: string | undefined;

  /**
   * <p>Secrets Manager ARN that contains the private TLS certificate contents, used for
   *          communication between the user job and the system job.</p>
   * @public
   */
  privateCertificateSecretArn?: string | undefined;
}

/**
 * <p>Configurations related to in-transit encryption for the security configuration.</p>
 * @public
 */
export interface InTransitEncryptionConfiguration {
  /**
   * <p>TLS certificate-related configuration input for the security configuration.</p>
   * @public
   */
  tlsCertificateConfiguration?: TLSCertificateConfiguration | undefined;
}

/**
 * <p>Configurations related to encryption for the security configuration.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>In-transit encryption-related input for the security configuration.</p>
   * @public
   */
  inTransitEncryptionConfiguration?: InTransitEncryptionConfiguration | undefined;
}

/**
 * <p>Namespace inputs for the system job.</p>
 * @public
 */
export interface SecureNamespaceInfo {
  /**
   * <p>The ID of the Amazon EKS cluster where Amazon EMR on EKS jobs run.</p>
   * @public
   */
  clusterId?: string | undefined;

  /**
   * <p>The namespace of the Amazon EKS cluster where the system jobs run.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>Lake Formation related configuration inputs for the security
 *          configuration.</p>
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * <p>The session tag to authorize Amazon EMR on EKS for API calls to Lake Formation.</p>
   * @public
   */
  authorizedSessionTagValue?: string | undefined;

  /**
   * <p>The namespace input of the system job.</p>
   * @public
   */
  secureNamespaceInfo?: SecureNamespaceInfo | undefined;

  /**
   * <p>The query engine IAM role ARN that is tied to the secure Spark job. The
   *          <code>QueryEngine</code> role assumes the <code>JobExecutionRole</code> to execute all
   *          the Lake Formation calls.</p>
   * @public
   */
  queryEngineRoleArn?: string | undefined;
}

/**
 * <p>Authorization-related configuration inputs for the security configuration.</p>
 * @public
 */
export interface AuthorizationConfiguration {
  /**
   * <p>Lake Formation related configuration inputs for the security
   *          configuration.</p>
   * @public
   */
  lakeFormationConfiguration?: LakeFormationConfiguration | undefined;

  /**
   * <p>Encryption-related configuration input for the security configuration.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CancelJobRunRequest {
  /**
   * <p>The ID of the job run to cancel.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which the job run will be canceled.</p>
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRunResponse {
  /**
   * <p>The output contains the ID of the cancelled job run.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The output contains the virtual cluster ID for which the job run is cancelled.</p>
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * <p>This is an internal server exception.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
 * <p>There are invalid parameters in the client request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p> A configuration for CloudWatch monitoring. You can configure your jobs to send log
 *          information to CloudWatch Logs. This data type allows job template parameters to be
 *          specified within.</p>
 * @public
 */
export interface ParametricCloudWatchMonitoringConfiguration {
  /**
   * <p> The name of the log group for log publishing.</p>
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * <p> The specified name prefix for log streams.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;
}

/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to
 *          send log information to Amazon S3. This data type allows job template parameters to be
 *          specified within.</p>
 * @public
 */
export interface ParametricS3MonitoringConfiguration {
  /**
   * <p>Amazon S3 destination URI for log publishing.</p>
   * @public
   */
  logUri?: string | undefined;
}

/**
 * <p> Configuration setting for monitoring. This data type allows job template parameters to
 *          be specified within.</p>
 * @public
 */
export interface ParametricMonitoringConfiguration {
  /**
   * <p> Monitoring configurations for the persistent application UI.</p>
   * @public
   */
  persistentAppUI?: string | undefined;

  /**
   * <p> Monitoring configurations for CloudWatch.</p>
   * @public
   */
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration | undefined;

  /**
   * <p> Amazon S3 configuration for monitoring log publishing.</p>
   * @public
   */
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration | undefined;
}

/**
 * <p>The job driver for job type.</p>
 * @public
 */
export interface SparkSqlJobDriver {
  /**
   * <p>The SQL file to be executed.</p>
   * @public
   */
  entryPoint?: string | undefined;

  /**
   * <p>The Spark parameters to be included in the Spark SQL command.</p>
   * @public
   */
  sparkSqlParameters?: string | undefined;
}

/**
 * <p>The information about job driver for Spark submit.</p>
 * @public
 */
export interface SparkSubmitJobDriver {
  /**
   * <p>The entry point of job application.</p>
   * @public
   */
  entryPoint: string | undefined;

  /**
   * <p>The arguments for job application.</p>
   * @public
   */
  entryPointArguments?: string[] | undefined;

  /**
   * <p>The Spark submit parameters that are used for job runs.</p>
   * @public
   */
  sparkSubmitParameters?: string | undefined;
}

/**
 * <p>Specify the driver that the job runs on. Exactly one of the two available job drivers is
 *          required, either sparkSqlJobDriver or sparkSubmitJobDriver.</p>
 * @public
 */
export interface JobDriver {
  /**
   * <p>The job driver parameters specified for spark submit.</p>
   * @public
   */
  sparkSubmitJobDriver?: SparkSubmitJobDriver | undefined;

  /**
   * <p>The job driver for job type.</p>
   * @public
   */
  sparkSqlJobDriver?: SparkSqlJobDriver | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateParameterDataType = {
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type TemplateParameterDataType = (typeof TemplateParameterDataType)[keyof typeof TemplateParameterDataType];

/**
 * <p>The configuration of a job template parameter.</p>
 * @public
 */
export interface TemplateParameterConfiguration {
  /**
   * <p>The type of the job template parameter. Allowed values are: ‘STRING’, ‘NUMBER’.</p>
   * @public
   */
  type?: TemplateParameterDataType | undefined;

  /**
   * <p>The default value for the job template parameter.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * <p>This output display the created job template ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>This output displays the name of the created job template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This output display the ARN of the created job template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>This output displays the date and time when the job template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A configuration for CloudWatch monitoring. You can configure your jobs to send log
 *          information to CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchMonitoringConfiguration {
  /**
   * <p>The name of the log group for log publishing.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The specified name prefix for log streams.</p>
   * @public
   */
  logStreamNamePrefix?: string | undefined;
}

/**
 * <p>The settings for container log rotation.</p>
 * @public
 */
export interface ContainerLogRotationConfiguration {
  /**
   * <p>The file size at which to rotate logs. Minimum of 2KB, Maximum of 2GB.</p>
   * @public
   */
  rotationSize: string | undefined;

  /**
   * <p>The number of files to keep in container after rotation.</p>
   * @public
   */
  maxFilesToKeep: number | undefined;
}

/**
 * <p>The entity that provides configuration control over managed logs.</p>
 * @public
 */
export interface ManagedLogs {
  /**
   * <p>Determines whether Amazon Web Services can retain logs.</p>
   * @public
   */
  allowAWSToRetainLogs?: AllowAWSToRetainLogs | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the encryption key for logs.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PersistentAppUI = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PersistentAppUI = (typeof PersistentAppUI)[keyof typeof PersistentAppUI];

/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to
 *          send log information to Amazon S3.</p>
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>Amazon S3 destination URI for log publishing.</p>
   * @public
   */
  logUri: string | undefined;
}

/**
 * <p>Configuration setting for monitoring.</p>
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * <p>The entity that controls configuration for managed logs.</p>
   * @public
   */
  managedLogs?: ManagedLogs | undefined;

  /**
   * <p>Monitoring configurations for the persistent application UI. </p>
   * @public
   */
  persistentAppUI?: PersistentAppUI | undefined;

  /**
   * <p>Monitoring configurations for CloudWatch.</p>
   * @public
   */
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration | undefined;

  /**
   * <p>Amazon S3 configuration for monitoring log publishing.</p>
   * @public
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration | undefined;

  /**
   * <p>Enable or disable container log rotation.</p>
   * @public
   */
  containerLogRotationConfiguration?: ContainerLogRotationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateManagedEndpointResponse {
  /**
   * <p>The output contains the ID of the managed endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The output contains the name of the managed endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The output contains the ARN of the managed endpoint.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The output contains the ID of the virtual cluster.</p>
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * <p>Configurations related to the security configuration for the request.</p>
 * @public
 */
export interface SecurityConfigurationData {
  /**
   * <p>Authorization-related configuration input for the security configuration.</p>
   * @public
   */
  authorizationConfiguration?: AuthorizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * <p>The client idempotency token to use when creating the security configuration.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Security configuration input for the request.</p>
   * @public
   */
  securityConfigurationData: SecurityConfigurationData | undefined;

  /**
   * <p>The tags to add to the security configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * <p>The ID of the security configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the security configuration.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>The information about the Amazon EKS cluster.</p>
 * @public
 */
export interface EksInfo {
  /**
   * <p>The namespaces of the Amazon EKS cluster.</p>
   * @public
   */
  namespace?: string | undefined;
}

/**
 * <p>The information about the container used for a job run or a managed endpoint.</p>
 * @public
 */
export type ContainerInfo = ContainerInfo.EksInfoMember | ContainerInfo.$UnknownMember;

/**
 * @public
 */
export namespace ContainerInfo {
  /**
   * <p>The information about the Amazon EKS cluster.</p>
   * @public
   */
  export interface EksInfoMember {
    eksInfo: EksInfo;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    eksInfo?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    eksInfo: (value: EksInfo) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContainerInfo, visitor: Visitor<T>): T => {
    if (value.eksInfo !== undefined) return visitor.eksInfo(value.eksInfo);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ContainerProviderType = {
  EKS: "EKS",
} as const;

/**
 * @public
 */
export type ContainerProviderType = (typeof ContainerProviderType)[keyof typeof ContainerProviderType];

/**
 * <p>The information about the container provider.</p>
 * @public
 */
export interface ContainerProvider {
  /**
   * <p>The type of the container provider. Amazon EKS is the only supported type as of
   *          now.</p>
   * @public
   */
  type: ContainerProviderType | undefined;

  /**
   * <p>The ID of the container cluster.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The information about the container cluster.</p>
   * @public
   */
  info?: ContainerInfo | undefined;
}

/**
 * @public
 */
export interface CreateVirtualClusterRequest {
  /**
   * <p>The specified name of the virtual cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The container provider of the virtual cluster.</p>
   * @public
   */
  containerProvider: ContainerProvider | undefined;

  /**
   * <p>The client token of the virtual cluster.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags assigned to the virtual cluster.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the security configuration.</p>
   * @public
   */
  securityConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVirtualClusterResponse {
  /**
   * <p>This output contains the virtual cluster ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>This output contains the name of the virtual cluster.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This output contains the ARN of virtual cluster.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>The request exceeded the Amazon EKS API operation limits.</p>
 * @public
 */
export class EKSRequestThrottledException extends __BaseException {
  readonly name: "EKSRequestThrottledException" = "EKSRequestThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EKSRequestThrottledException, __BaseException>) {
    super({
      name: "EKSRequestThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EKSRequestThrottledException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * <p>The ID of the job template that will be deleted.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateResponse {
  /**
   * <p>This output contains the ID of the job template that was deleted.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedEndpointRequest {
  /**
   * <p>The ID of the managed endpoint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedEndpointResponse {
  /**
   * <p>The output displays the ID of the managed endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The output displays the ID of the endpoint's virtual cluster.</p>
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualClusterRequest {
  /**
   * <p>The ID of the virtual cluster that will be deleted.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualClusterResponse {
  /**
   * <p>This output contains the ID of the virtual cluster that will be deleted. </p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunRequest {
  /**
   * <p>The ID of the job run request. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which the job run is submitted.</p>
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureReason = {
  CLUSTER_UNAVAILABLE: "CLUSTER_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  USER_ERROR: "USER_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * <p>The configuration of the retry policy that the job runs on.</p>
 * @public
 */
export interface RetryPolicyConfiguration {
  /**
   * <p>The maximum number of attempts on the job's driver.</p>
   * @public
   */
  maxAttempts: number | undefined;
}

/**
 * <p>The current status of the retry policy executed on the job.</p>
 * @public
 */
export interface RetryPolicyExecution {
  /**
   * <p>The current number of attempts made on the driver of the job.</p>
   * @public
   */
  currentAttemptCount: number | undefined;
}

/**
 * @public
 * @enum
 */
export const JobRunState = {
  CANCELLED: "CANCELLED",
  CANCEL_PENDING: "CANCEL_PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
 */
export interface DescribeJobTemplateRequest {
  /**
   * <p>The ID of the job template that will be described.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeManagedEndpointRequest {
  /**
   * <p>This output displays ID of the managed endpoint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * <p>The entity representing certificate data generated for managed endpoint.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate generated for managed endpoint.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The base64 encoded PEM certificate data generated for managed endpoint.</p>
   * @public
   */
  certificateData?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  TERMINATED: "TERMINATED",
  TERMINATED_WITH_ERRORS: "TERMINATED_WITH_ERRORS",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type EndpointState = (typeof EndpointState)[keyof typeof EndpointState];

/**
 * @public
 */
export interface DescribeSecurityConfigurationRequest {
  /**
   * <p>The ID of the security configuration.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Inputs related to the security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security
 *          configurations to configure the Lake Formation integration setup. You can also
 *          create a security configuration to re-use a security setup each time you create a virtual
 *          cluster.</p>
 * @public
 */
export interface SecurityConfiguration {
  /**
   * <p>The ID of the security configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the security configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time that the job run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>Security configuration inputs for the request.</p>
   * @public
   */
  securityConfigurationData?: SecurityConfigurationData | undefined;

  /**
   * <p>The tags to assign to the security configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationResponse {
  /**
   * <p>Details of the security configuration.</p>
   * @public
   */
  securityConfiguration?: SecurityConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualClusterRequest {
  /**
   * <p>The ID of the virtual cluster that will be described.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VirtualClusterState = {
  ARRESTED: "ARRESTED",
  RUNNING: "RUNNING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type VirtualClusterState = (typeof VirtualClusterState)[keyof typeof VirtualClusterState];

/**
 * <p>This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace
 *          that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run
 *          jobs and host endpoints. Multiple virtual clusters can be backed by the same physical
 *          cluster. However, each virtual cluster maps to one namespace on an Amazon EKS
 *          cluster. Virtual clusters do not create any active resources that contribute to your bill
 *          or that require lifecycle management outside the service.</p>
 * @public
 */
export interface VirtualCluster {
  /**
   * <p>The ID of the virtual cluster.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the virtual cluster.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the virtual cluster.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The state of the virtual cluster.</p>
   * @public
   */
  state?: VirtualClusterState | undefined;

  /**
   * <p>The container provider of the virtual cluster.</p>
   * @public
   */
  containerProvider?: ContainerProvider | undefined;

  /**
   * <p>The date and time when the virtual cluster is created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The assigned tags of the virtual cluster.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the security configuration.</p>
   * @public
   */
  securityConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualClusterResponse {
  /**
   * <p>This output displays information about the specified virtual cluster.</p>
   * @public
   */
  virtualCluster?: VirtualCluster | undefined;
}

/**
 * @public
 */
export interface GetManagedEndpointSessionCredentialsRequest {
  /**
   * <p>The ARN of the managed endpoint for which the request is submitted. </p>
   * @public
   */
  endpointIdentifier: string | undefined;

  /**
   * <p>The ARN of the Virtual Cluster which the Managed Endpoint belongs to. </p>
   * @public
   */
  virtualClusterIdentifier: string | undefined;

  /**
   * <p>The IAM Execution Role ARN that will be used by the job run. </p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>Type of the token requested. Currently supported and default value of this field is
   *          “TOKEN.”</p>
   * @public
   */
  credentialType: string | undefined;

  /**
   * <p>Duration in seconds for which the session token is valid. The default duration is 15
   *          minutes and the maximum is 12 hours.</p>
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * <p>String identifier used to separate sections of the execution logs uploaded to S3.</p>
   * @public
   */
  logContext?: string | undefined;

  /**
   * <p>The client idempotency token of the job run request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The structure containing the session token being returned.</p>
 * @public
 */
export type Credentials = Credentials.TokenMember | Credentials.$UnknownMember;

/**
 * @public
 */
export namespace Credentials {
  /**
   * <p>The actual session token being returned.</p>
   * @public
   */
  export interface TokenMember {
    token: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    token?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    token: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Credentials, visitor: Visitor<T>): T => {
    if (value.token !== undefined) return visitor.token(value.token);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetManagedEndpointSessionCredentialsResponse {
  /**
   * <p>The identifier of the session token returned.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The structure containing the session credentials.</p>
   * @public
   */
  credentials?: Credentials | undefined;

  /**
   * <p>The date and time when the session token will expire.</p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * <p>The request throttled.</p>
 * @public
 */
export class RequestThrottledException extends __BaseException {
  readonly name: "RequestThrottledException" = "RequestThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestThrottledException, __BaseException>) {
    super({
      name: "RequestThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestThrottledException.prototype);
  }
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * <p>The ID of the virtual cluster for which to list the job run. </p>
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The date and time before which the job runs were submitted.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>The date and time after which the job runs were submitted.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The name of the job run.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The states of the job run.</p>
   * @public
   */
  states?: JobRunState[] | undefined;

  /**
   * <p>The maximum number of job runs that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of job runs to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * <p>The date and time after which the job templates were created.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p> The date and time before which the job templates were created.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p> The maximum number of job templates that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The token for the next set of job templates to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedEndpointsRequest {
  /**
   * <p>The ID of the virtual cluster.</p>
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The date and time before which the endpoints are created.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p> The date and time after which the endpoints are created.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The types of the managed endpoints.</p>
   * @public
   */
  types?: string[] | undefined;

  /**
   * <p>The states of the managed endpoints.</p>
   * @public
   */
  states?: EndpointState[] | undefined;

  /**
   * <p>The maximum number of managed endpoints that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The token for the next set of managed endpoints to return. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsRequest {
  /**
   * <p>The date and time after which the security configuration was created.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The date and time before which the security configuration was created.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>The maximum number of security configurations the operation can list.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of security configurations to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsResponse {
  /**
   * <p>The list of returned security configurations.</p>
   * @public
   */
  securityConfigurations?: SecurityConfiguration[] | undefined;

  /**
   * <p>The token for the next set of security configurations to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of tagged resources.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVirtualClustersRequest {
  /**
   * <p>The container provider ID of the virtual cluster.</p>
   * @public
   */
  containerProviderId?: string | undefined;

  /**
   * <p>The container provider type of the virtual cluster. Amazon EKS is the only
   *          supported type as of now.</p>
   * @public
   */
  containerProviderType?: ContainerProviderType | undefined;

  /**
   * <p>The date and time after which the virtual clusters are created.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>The date and time before which the virtual clusters are created.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>The states of the requested virtual clusters.</p>
   * @public
   */
  states?: VirtualClusterState[] | undefined;

  /**
   * <p>The maximum number of virtual clusters that can be listed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of virtual clusters to return. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional Boolean that specifies whether the operation should return the
   *          virtual clusters that have the access entry integration enabled or disabled. If not specified,
   *       the operation returns all applicable virtual clusters.</p>
   * @public
   */
  eksAccessEntryIntegrated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListVirtualClustersResponse {
  /**
   * <p>This output lists the specified virtual clusters.</p>
   * @public
   */
  virtualClusters?: VirtualCluster[] | undefined;

  /**
   * <p>This output displays the token for the next set of virtual clusters.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>This output displays the started job run ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>This output displays the name of the started job run.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>This output lists the ARN of job run.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>This output displays the virtual cluster ID for which the job run was submitted.</p>
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of resources.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags assigned to resources.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of resources.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the resources.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A configuration specification to be used when provisioning virtual clusters, which can
 *          include configurations for applications and software bundled with Amazon EMR on EKS. A
 *          configuration consists of a classification, properties, and optional nested configurations.
 *          A classification refers to an application-specific configuration file. Properties are the
 *          settings you want to change in that file.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   * @public
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   * @public
   */
  configurations?: Configuration[] | undefined;
}

/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * <p>The configurations for the application running by the job run. </p>
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * <p>The configurations for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;
}

/**
 * <p> A configuration specification to be used to override existing configurations. This data
 *          type allows job template parameters to be specified within.</p>
 * @public
 */
export interface ParametricConfigurationOverrides {
  /**
   * <p> The configurations for the application running by the job run.</p>
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * <p> The configurations for monitoring. </p>
   * @public
   */
  monitoringConfiguration?: ParametricMonitoringConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateManagedEndpointRequest {
  /**
   * <p>The name of the managed endpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which a managed endpoint is created.</p>
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The type of the managed endpoint.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon EMR release version.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The ARN of the execution role.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The certificate ARN provided by users for the managed endpoint. This field is under
   *          deprecation and will be removed in future releases.</p>
   *
   * @deprecated
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The configuration settings that will be used to override existing configurations.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>The client idempotency token for this create call.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags of the managed endpoint. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This entity represents the endpoint that is managed by Amazon EMR on EKS.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the endpoint.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   * @public
   */
  virtualClusterId?: string | undefined;

  /**
   * <p>The type of the endpoint.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The state of the endpoint.</p>
   * @public
   */
  state?: EndpointState | undefined;

  /**
   * <p>The EMR release version to be used for the endpoint.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>The execution role ARN of the endpoint.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The certificate ARN of the endpoint. This field is under deprecation and will be removed
   *          in future.</p>
   *
   * @deprecated
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The certificate generated by emr control plane on customer behalf to secure the managed
   *          endpoint.</p>
   * @public
   */
  certificateAuthority?: Certificate | undefined;

  /**
   * <p>The configuration settings that are used to override existing configurations for
   *          endpoints.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>The server URL of the endpoint.</p>
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * <p>The date and time when the endpoint was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The security group configuration of the endpoint. </p>
   * @public
   */
  securityGroup?: string | undefined;

  /**
   * <p>The subnet IDs of the endpoint. </p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p> Additional details of the endpoint state. </p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p> The reasons why the endpoint has failed. </p>
   * @public
   */
  failureReason?: FailureReason | undefined;

  /**
   * <p>The tags of the endpoint. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>This entity describes a job run. A job run is a unit of work, such as a Spark jar,
 *          PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. </p>
 * @public
 */
export interface JobRun {
  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the job run.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the job run's virtual cluster.</p>
   * @public
   */
  virtualClusterId?: string | undefined;

  /**
   * <p>The ARN of job run.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The state of the job run. </p>
   * @public
   */
  state?: JobRunState | undefined;

  /**
   * <p>The client token used to start a job run.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The release version of Amazon EMR.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>The configuration settings that are used to override default configuration.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>Parameters of job driver for the job run.</p>
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time when the job run has finished.</p>
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * <p>Additional details of the job run state.</p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p>The reasons why the job run has failed.</p>
   * @public
   */
  failureReason?: FailureReason | undefined;

  /**
   * <p>The assigned tags of the job run.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration of the retry policy that the job runs on.</p>
   * @public
   */
  retryPolicyConfiguration?: RetryPolicyConfiguration | undefined;

  /**
   * <p>The current status of the retry policy executed on the job.</p>
   * @public
   */
  retryPolicyExecution?: RetryPolicyExecution | undefined;
}

/**
 * <p>The values of StartJobRun API requests used in job runs started using the job
 *          template.</p>
 * @public
 */
export interface JobTemplateData {
  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p> The release version of Amazon EMR.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p> The configuration settings that are used to override defaults configuration.</p>
   * @public
   */
  configurationOverrides?: ParametricConfigurationOverrides | undefined;

  /**
   * <p>Specify the driver that the job runs on. Exactly one of the two available job drivers is
   *          required, either sparkSqlJobDriver or sparkSubmitJobDriver.</p>
   * @public
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The configuration of parameters existing in the job template.</p>
   * @public
   */
  parameterConfiguration?: Record<string, TemplateParameterConfiguration> | undefined;

  /**
   * <p>The tags assigned to jobs started using the job template.</p>
   * @public
   */
  jobTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The name of the job run.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The virtual cluster ID for which the job run request is submitted.</p>
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The client idempotency token of the job run request. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The execution role ARN for the job run.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The Amazon EMR release version to use for the job run.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>The job driver for the job run.</p>
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * <p>The configuration overrides for the job run.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * <p>The tags assigned to job runs.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The job template ID to be used to start the job run.</p>
   * @public
   */
  jobTemplateId?: string | undefined;

  /**
   * <p>The values of job template parameters to start a job run.</p>
   * @public
   */
  jobTemplateParameters?: Record<string, string> | undefined;

  /**
   * <p>The retry policy configuration for the job run.</p>
   * @public
   */
  retryPolicyConfiguration?: RetryPolicyConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * <p>The specified name of the job template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The client token of the job template.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The job template data which holds values of StartJobRun API request.</p>
   * @public
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * <p>The tags that are associated with the job template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The KMS key ARN used to encrypt the job template.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunResponse {
  /**
   * <p>The output displays information about a job run.</p>
   * @public
   */
  jobRun?: JobRun | undefined;
}

/**
 * @public
 */
export interface DescribeManagedEndpointResponse {
  /**
   * <p>This output displays information about a managed endpoint.</p>
   * @public
   */
  endpoint?: Endpoint | undefined;
}

/**
 * <p>This entity describes a job template. Job template stores values of StartJobRun API
 *          request in a template and can be used to start a job run. Job template allows two use
 *          cases: avoid repeating recurring StartJobRun API request values, enforcing certain values
 *          in StartJobRun API request.</p>
 * @public
 */
export interface JobTemplate {
  /**
   * <p>The name of the job template.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the job template.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the job template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The date and time when the job template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The user who created the job template.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The tags assigned to the job template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The job template data which holds values of StartJobRun API request.</p>
   * @public
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * <p> The KMS key ARN used to encrypt the job template.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The error message in case the decryption of job template fails.</p>
   * @public
   */
  decryptionError?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateResponse {
  /**
   * <p>This output displays information about the specified job template.</p>
   * @public
   */
  jobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * <p>This output lists information about the specified job runs.</p>
   * @public
   */
  jobRuns?: JobRun[] | undefined;

  /**
   * <p>This output displays the token for the next set of job runs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedEndpointsResponse {
  /**
   * <p>The managed endpoints to be listed.</p>
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * <p> The token for the next set of endpoints to return. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * <p>This output lists information about the specified job templates.</p>
   * @public
   */
  templates?: JobTemplate[] | undefined;

  /**
   * <p> This output displays the token for the next set of job templates.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const SparkSqlJobDriverFilterSensitiveLog = (obj: SparkSqlJobDriver): any => ({
  ...obj,
  ...(obj.entryPoint && { entryPoint: SENSITIVE_STRING }),
  ...(obj.sparkSqlParameters && { sparkSqlParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SparkSubmitJobDriverFilterSensitiveLog = (obj: SparkSubmitJobDriver): any => ({
  ...obj,
  ...(obj.entryPoint && { entryPoint: SENSITIVE_STRING }),
  ...(obj.entryPointArguments && { entryPointArguments: SENSITIVE_STRING }),
  ...(obj.sparkSubmitParameters && { sparkSubmitParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobDriverFilterSensitiveLog = (obj: JobDriver): any => ({
  ...obj,
  ...(obj.sparkSubmitJobDriver && {
    sparkSubmitJobDriver: SparkSubmitJobDriverFilterSensitiveLog(obj.sparkSubmitJobDriver),
  }),
  ...(obj.sparkSqlJobDriver && { sparkSqlJobDriver: SparkSqlJobDriverFilterSensitiveLog(obj.sparkSqlJobDriver) }),
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => {
  if (obj.token !== undefined) return { token: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetManagedEndpointSessionCredentialsResponseFilterSensitiveLog = (
  obj: GetManagedEndpointSessionCredentialsResponse
): any => ({
  ...obj,
  ...(obj.credentials && { credentials: CredentialsFilterSensitiveLog(obj.credentials) }),
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
  ...(obj.configurations && {
    configurations: obj.configurations.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ConfigurationOverridesFilterSensitiveLog = (obj: ConfigurationOverrides): any => ({
  ...obj,
  ...(obj.applicationConfiguration && {
    applicationConfiguration: obj.applicationConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ParametricConfigurationOverridesFilterSensitiveLog = (obj: ParametricConfigurationOverrides): any => ({
  ...obj,
  ...(obj.applicationConfiguration && {
    applicationConfiguration: obj.applicationConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateManagedEndpointRequestFilterSensitiveLog = (obj: CreateManagedEndpointRequest): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
});

/**
 * @internal
 */
export const JobRunFilterSensitiveLog = (obj: JobRun): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
});

/**
 * @internal
 */
export const JobTemplateDataFilterSensitiveLog = (obj: JobTemplateData): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ParametricConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
});

/**
 * @internal
 */
export const StartJobRunRequestFilterSensitiveLog = (obj: StartJobRunRequest): any => ({
  ...obj,
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
});

/**
 * @internal
 */
export const CreateJobTemplateRequestFilterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
  ...obj,
  ...(obj.jobTemplateData && { jobTemplateData: JobTemplateDataFilterSensitiveLog(obj.jobTemplateData) }),
});

/**
 * @internal
 */
export const DescribeJobRunResponseFilterSensitiveLog = (obj: DescribeJobRunResponse): any => ({
  ...obj,
  ...(obj.jobRun && { jobRun: JobRunFilterSensitiveLog(obj.jobRun) }),
});

/**
 * @internal
 */
export const DescribeManagedEndpointResponseFilterSensitiveLog = (obj: DescribeManagedEndpointResponse): any => ({
  ...obj,
  ...(obj.endpoint && { endpoint: EndpointFilterSensitiveLog(obj.endpoint) }),
});

/**
 * @internal
 */
export const JobTemplateFilterSensitiveLog = (obj: JobTemplate): any => ({
  ...obj,
  ...(obj.jobTemplateData && { jobTemplateData: JobTemplateDataFilterSensitiveLog(obj.jobTemplateData) }),
});

/**
 * @internal
 */
export const DescribeJobTemplateResponseFilterSensitiveLog = (obj: DescribeJobTemplateResponse): any => ({
  ...obj,
  ...(obj.jobTemplate && { jobTemplate: JobTemplateFilterSensitiveLog(obj.jobTemplate) }),
});

/**
 * @internal
 */
export const ListJobRunsResponseFilterSensitiveLog = (obj: ListJobRunsResponse): any => ({
  ...obj,
  ...(obj.jobRuns && { jobRuns: obj.jobRuns.map((item) => JobRunFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListManagedEndpointsResponseFilterSensitiveLog = (obj: ListManagedEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobTemplatesResponseFilterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
  ...obj,
  ...(obj.templates && { templates: obj.templates.map((item) => JobTemplateFilterSensitiveLog(item)) }),
});
