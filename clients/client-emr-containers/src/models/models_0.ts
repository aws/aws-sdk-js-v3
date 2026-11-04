// smithy-typescript generated code
import type {
  AllowAWSToRetainLogs,
  CertificateProviderType,
  ContainerProviderType,
  EndpointState,
  FailureReason,
  JobRunState,
  PersistentAppUI,
  TemplateParameterDataType,
  VirtualClusterState,
} from "./enums";

/**
 * Contains the IAM settings for a security configuration, including the system role used for authentication.
 *
 * @public
 */
export interface IAMConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the system role used by the security configuration.
   *
   * @public
   */
  systemRole?: string | undefined;
}

/**
 * Contains the IAM Identity Center settings for a security configuration, including instance ARN, application assignment requirements, and application ARN.
 *
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * Specifies whether Identity Center is enabled for the security configuration.
   *
   * @public
   */
  enableIdentityCenter?: boolean | undefined;

  /**
   * Specifies whether user assignment is required for the Identity Center application.
   *
   * @public
   */
  identityCenterApplicationAssignmentRequired?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity Center instance.
   *
   * @public
   */
  identityCenterInstanceARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon EMR Identity Center application.
   *
   * @public
   */
  emrIdentityCenterApplicationARN?: string | undefined;
}

/**
 * Contains the authentication settings for a security configuration, including Identity Center and IAM configuration options.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * The IAM Identity Center configuration to use for authentication.
   *
   * @public
   */
  identityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * The IAM configuration to use for authentication.
   *
   * @public
   */
  iamConfiguration?: IAMConfiguration | undefined;
}

/**
 * Configurations related to the TLS certificate for the security configuration.
 *
 * @public
 */
export interface TLSCertificateConfiguration {
  /**
   * The TLS certificate type. Acceptable values: `PEM` or `Custom`.
   *
   * @public
   */
  certificateProviderType?: CertificateProviderType | undefined;

  /**
   * Secrets Manager ARN that contains the public TLS certificate contents, used for communication between the user job and the system job.
   *
   * @public
   */
  publicCertificateSecretArn?: string | undefined;

  /**
   * Secrets Manager ARN that contains the private TLS certificate contents, used for communication between the user job and the system job.
   *
   * @public
   */
  privateCertificateSecretArn?: string | undefined;
}

/**
 * Configurations related to in-transit encryption for the security configuration.
 *
 * @public
 */
export interface InTransitEncryptionConfiguration {
  /**
   * TLS certificate-related configuration input for the security configuration.
   *
   * @public
   */
  tlsCertificateConfiguration?: TLSCertificateConfiguration | undefined;
}

/**
 * Configurations related to encryption for the security configuration.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * In-transit encryption-related input for the security configuration.
   *
   * @public
   */
  inTransitEncryptionConfiguration?: InTransitEncryptionConfiguration | undefined;
}

/**
 * Namespace inputs for the system job.
 *
 * @public
 */
export interface SecureNamespaceInfo {
  /**
   * The ID of the Amazon EKS cluster where Amazon EMR on EKS jobs run.
   *
   * @public
   */
  clusterId?: string | undefined;

  /**
   * The namespace of the Amazon EKS cluster where the system jobs run.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * Lake Formation related configuration inputs for the security configuration.
 *
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * The session tag to authorize Amazon EMR on EKS for API calls to Lake Formation.
   *
   * @public
   */
  authorizedSessionTagValue?: string | undefined;

  /**
   * The namespace input of the system job.
   *
   * @public
   */
  secureNamespaceInfo?: SecureNamespaceInfo | undefined;

  /**
   * The query engine IAM role ARN that is tied to the secure Spark job. The `QueryEngine` role assumes the `JobExecutionRole` to execute all the Lake Formation calls.
   *
   * @public
   */
  queryEngineRoleArn?: string | undefined;
}

/**
 * Authorization-related configuration inputs for the security configuration.
 *
 * @public
 */
export interface AuthorizationConfiguration {
  /**
   * Lake Formation related configuration inputs for the security configuration.
   *
   * @public
   */
  lakeFormationConfiguration?: LakeFormationConfiguration | undefined;

  /**
   * Encryption-related configuration input for the security configuration.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CancelJobRunRequest {
  /**
   * The ID of the job run to cancel.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the virtual cluster for which the job run will be canceled.
   *
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRunResponse {
  /**
   * The output contains the ID of the cancelled job run.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The output contains the virtual cluster ID for which the job run is cancelled.
   *
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within.
 *
 * @public
 */
export interface ParametricCloudWatchMonitoringConfiguration {
  /**
   * The name of the log group for log publishing.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The specified name prefix for log streams.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;
}

/**
 * Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. This data type allows job template parameters to be specified within.
 *
 * @public
 */
export interface ParametricS3MonitoringConfiguration {
  /**
   * Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  logUri?: string | undefined;
}

/**
 * Configuration setting for monitoring. This data type allows job template parameters to be specified within.
 *
 * @public
 */
export interface ParametricMonitoringConfiguration {
  /**
   * Monitoring configurations for the persistent application UI.
   *
   * @public
   */
  persistentAppUI?: string | undefined;

  /**
   * Monitoring configurations for CloudWatch.
   *
   * @public
   */
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration | undefined;

  /**
   * Amazon S3 configuration for monitoring log publishing.
   *
   * @public
   */
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration | undefined;
}

/**
 * The job driver for job type.
 *
 * @public
 */
export interface SparkSqlJobDriver {
  /**
   * The SQL file to be executed.
   *
   * @public
   */
  entryPoint?: string | undefined;

  /**
   * The Spark parameters to be included in the Spark SQL command.
   *
   * @public
   */
  sparkSqlParameters?: string | undefined;
}

/**
 * The information about job driver for Spark submit.
 *
 * @public
 */
export interface SparkSubmitJobDriver {
  /**
   * The entry point of job application.
   *
   * @public
   */
  entryPoint: string | undefined;

  /**
   * The arguments for job application.
   *
   * @public
   */
  entryPointArguments?: string[] | undefined;

  /**
   * The Spark submit parameters that are used for job runs.
   *
   * @public
   */
  sparkSubmitParameters?: string | undefined;
}

/**
 * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
 *
 * @public
 */
export interface JobDriver {
  /**
   * The job driver parameters specified for spark submit.
   *
   * @public
   */
  sparkSubmitJobDriver?: SparkSubmitJobDriver | undefined;

  /**
   * The job driver for job type.
   *
   * @public
   */
  sparkSqlJobDriver?: SparkSqlJobDriver | undefined;
}

/**
 * The configuration of a job template parameter.
 *
 * @public
 */
export interface TemplateParameterConfiguration {
  /**
   * The type of the job template parameter. Allowed values are: ‘STRING’, ‘NUMBER’.
   *
   * @public
   */
  type?: TemplateParameterDataType | undefined;

  /**
   * The default value for the job template parameter.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * This output display the created job template ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * This output displays the name of the created job template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * This output display the ARN of the created job template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * This output displays the date and time when the job template was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchMonitoringConfiguration {
  /**
   * The name of the log group for log publishing.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The specified name prefix for log streams.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;
}

/**
 * The settings for container log rotation.
 *
 * @public
 */
export interface ContainerLogRotationConfiguration {
  /**
   * The file size at which to rotate logs. Minimum of 2KB, Maximum of 2GB.
   *
   * @public
   */
  rotationSize: string | undefined;

  /**
   * The number of files to keep in container after rotation.
   *
   * @public
   */
  maxFilesToKeep: number | undefined;
}

/**
 * The entity that provides configuration control over managed logs.
 *
 * @public
 */
export interface ManagedLogs {
  /**
   * Determines whether Amazon Web Services can retain logs.
   *
   * @public
   */
  allowAWSToRetainLogs?: AllowAWSToRetainLogs | undefined;

  /**
   * The Amazon resource name (ARN) of the encryption key for logs.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
 *
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  logUri: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the encryption key for logs.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * Configuration setting for monitoring.
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * The entity that controls configuration for managed logs.
   *
   * @public
   */
  managedLogs?: ManagedLogs | undefined;

  /**
   * Monitoring configurations for the persistent application UI.
   *
   * @public
   */
  persistentAppUI?: PersistentAppUI | undefined;

  /**
   * Monitoring configurations for CloudWatch.
   *
   * @public
   */
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration | undefined;

  /**
   * Amazon S3 configuration for monitoring log publishing.
   *
   * @public
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration | undefined;

  /**
   * Enable or disable container log rotation.
   *
   * @public
   */
  containerLogRotationConfiguration?: ContainerLogRotationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateManagedEndpointResponse {
  /**
   * The output contains the ID of the managed endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The output contains the name of the managed endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The output contains the ARN of the managed endpoint.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The output contains the ID of the virtual cluster.
   *
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * The information about the Amazon EKS cluster.
 *
 * @public
 */
export interface EksInfo {
  /**
   * The namespaces of the Amazon EKS cluster.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The nodeLabel of the nodes where the resources of this virtual cluster can get scheduled. It requires relevant scaling and policy engine addons.
   *
   * @public
   */
  nodeLabel?: string | undefined;
}

/**
 * The information about the container used for a job run or a managed endpoint.
 *
 * @public
 */
export type ContainerInfo =
  | ContainerInfo.EksInfoMember
  | ContainerInfo.$UnknownMember;

/**
 * @public
 */
export namespace ContainerInfo {
  /**
   * The information about the Amazon EKS cluster.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    eksInfo: (value: EksInfo) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The information about the container provider.
 *
 * @public
 */
export interface ContainerProvider {
  /**
   * The type of the container provider. Amazon EKS is the only supported type as of now.
   *
   * @public
   */
  type: ContainerProviderType | undefined;

  /**
   * The ID of the container cluster.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The information about the container cluster.
   *
   * @public
   */
  info?: ContainerInfo | undefined;
}

/**
 * Configurations related to the security configuration for the request.
 *
 * @public
 */
export interface SecurityConfigurationData {
  /**
   * Authorization-related configuration input for the security configuration.
   *
   * @public
   */
  authorizationConfiguration?: AuthorizationConfiguration | undefined;

  /**
   * Authentication-related configuration input for the security configuration.
   *
   * @public
   */
  authenticationConfiguration?: AuthenticationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * The client idempotency token to use when creating the security configuration.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the security configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The container provider associated with the security configuration.
   *
   * @public
   */
  containerProvider?: ContainerProvider | undefined;

  /**
   * Security configuration input for the request.
   *
   * @public
   */
  securityConfigurationData: SecurityConfigurationData | undefined;

  /**
   * The tags to add to the security configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * The ID of the security configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the security configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the security configuration.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * The scheduler configuration for a virtual cluster on Amazon EMR on EKS. It controls how many job runs can run concurrently and how many can wait in the queue. When not set, no concurrency or queue limits are applied.
 *
 * @public
 */
export interface SchedulerConfiguration {
  /**
   * The maximum number of job runs that can be in the `PENDING` or `SUBMITTED` state at any time for the virtual cluster. When the queue is full, the service rejects `StartJobRun` requests with a `ValidationException`. If you omit this field, the service applies no queue-depth limit.
   *
   * @public
   */
  maxInQueueJobRuns?: number | undefined;

  /**
   * The maximum number of job runs that can be in the `RUNNING` state at any time for the virtual cluster. As running slots free up, queued job runs start automatically. If you omit this field, the service applies no concurrency limit.
   *
   * @public
   */
  maxConcurrentJobRuns?: number | undefined;
}

/**
 * @public
 */
export interface CreateVirtualClusterRequest {
  /**
   * The specified name of the virtual cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The container provider of the virtual cluster.
   *
   * @public
   */
  containerProvider: ContainerProvider | undefined;

  /**
   * The client token of the virtual cluster.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags assigned to the virtual cluster.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the security configuration.
   *
   * @public
   */
  securityConfigurationId?: string | undefined;

  /**
   * Indicates whether the virtual cluster has session support enabled.
   *
   * @public
   */
  sessionEnabled?: boolean | undefined;

  /**
   * The scheduler configuration (concurrency and queue limits) to apply to the virtual cluster at creation time. When omitted, no limits are applied.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateVirtualClusterResponse {
  /**
   * This output contains the virtual cluster ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * This output contains the name of the virtual cluster.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * This output contains the ARN of virtual cluster.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * The ID of the job template that will be deleted.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateResponse {
  /**
   * This output contains the ID of the job template that was deleted.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedEndpointRequest {
  /**
   * The ID of the managed endpoint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the endpoint's virtual cluster.
   *
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedEndpointResponse {
  /**
   * The output displays the ID of the managed endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The output displays the ID of the endpoint's virtual cluster.
   *
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationRequest {
  /**
   * The ID of the security configuration to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationResponse {
  /**
   * The ID of the deleted security configuration.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualClusterRequest {
  /**
   * The ID of the virtual cluster that will be deleted.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualClusterResponse {
  /**
   * This output contains the ID of the virtual cluster that will be deleted.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunRequest {
  /**
   * The ID of the job run request.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the virtual cluster for which the job run is submitted.
   *
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * The configuration of the retry policy that the job runs on.
 *
 * @public
 */
export interface RetryPolicyConfiguration {
  /**
   * The maximum number of attempts on the job's driver.
   *
   * @public
   */
  maxAttempts: number | undefined;
}

/**
 * The current status of the retry policy executed on the job.
 *
 * @public
 */
export interface RetryPolicyExecution {
  /**
   * The current number of attempts made on the driver of the job.
   *
   * @public
   */
  currentAttemptCount: number | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateRequest {
  /**
   * The ID of the job template that will be described.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeManagedEndpointRequest {
  /**
   * This output displays ID of the managed endpoint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the endpoint's virtual cluster.
   *
   * @public
   */
  virtualClusterId: string | undefined;
}

/**
 * The entity representing certificate data generated for managed endpoint.
 *
 * @public
 */
export interface Certificate {
  /**
   * The ARN of the certificate generated for managed endpoint.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The base64 encoded PEM certificate data generated for managed endpoint.
   *
   * @public
   */
  certificateData?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationRequest {
  /**
   * The ID of the security configuration.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Inputs related to the security configuration. Security configurations in Amazon EMR on EKS are templates for different security setups. You can use security configurations to configure the Lake Formation integration setup. You can also create a security configuration to re-use a security setup each time you create a virtual cluster.
 *
 * @public
 */
export interface SecurityConfiguration {
  /**
   * The ID of the security configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the security configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the security configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time that the job run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Security configuration inputs for the request.
   *
   * @public
   */
  securityConfigurationData?: SecurityConfigurationData | undefined;

  /**
   * The tags to assign to the security configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationResponse {
  /**
   * Details of the security configuration.
   *
   * @public
   */
  securityConfiguration?: SecurityConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualClusterRequest {
  /**
   * The ID of the virtual cluster that will be described.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * The current job-run counts for a virtual cluster, reflecting how much of the configured scheduler capacity is in use.
 *
 * @public
 */
export interface SchedulerStatus {
  /**
   * The number of job runs currently waiting in the queue (`PENDING` or `SUBMITTED`) for the virtual cluster.
   *
   * @public
   */
  currentInQueueJobRuns?: number | undefined;

  /**
   * The number of job runs currently in the `RUNNING` state for the virtual cluster.
   *
   * @public
   */
  currentConcurrentJobRuns?: number | undefined;
}

/**
 * This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an Amazon EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.
 *
 * @public
 */
export interface VirtualCluster {
  /**
   * The ID of the virtual cluster.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the virtual cluster.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the virtual cluster.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The state of the virtual cluster.
   *
   * @public
   */
  state?: VirtualClusterState | undefined;

  /**
   * The container provider of the virtual cluster.
   *
   * @public
   */
  containerProvider?: ContainerProvider | undefined;

  /**
   * The date and time when the virtual cluster is created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The assigned tags of the virtual cluster.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the security configuration.
   *
   * @public
   */
  securityConfigurationId?: string | undefined;

  /**
   * Specifies whether the virtual cluster has session support enabled.
   *
   * @public
   */
  sessionEnabled?: boolean | undefined;

  /**
   * The scheduler configuration (concurrency and queue limits) applied to the virtual cluster. The service does not return this field when no scheduler limits are configured.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * The current in-queue and concurrent job-run counts for the virtual cluster.
   *
   * @public
   */
  schedulerStatus?: SchedulerStatus | undefined;
}

/**
 * @public
 */
export interface DescribeVirtualClusterResponse {
  /**
   * This output displays information about the specified virtual cluster.
   *
   * @public
   */
  virtualCluster?: VirtualCluster | undefined;
}

/**
 * @public
 */
export interface GetManagedEndpointSessionCredentialsRequest {
  /**
   * The ARN of the managed endpoint for which the request is submitted.
   *
   * @public
   */
  endpointIdentifier: string | undefined;

  /**
   * The ARN of the Virtual Cluster which the Managed Endpoint belongs to.
   *
   * @public
   */
  virtualClusterIdentifier: string | undefined;

  /**
   * The IAM Execution Role ARN that will be used by the job run.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * Type of the token requested. Currently supported and default value of this field is “TOKEN.”
   *
   * @public
   */
  credentialType: string | undefined;

  /**
   * Duration in seconds for which the session token is valid. The default duration is 15 minutes and the maximum is 12 hours.
   *
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * String identifier used to separate sections of the execution logs uploaded to S3.
   *
   * @public
   */
  logContext?: string | undefined;

  /**
   * The client idempotency token of the job run request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The structure containing the session token being returned.
 *
 * @public
 */
export type Credentials =
  | Credentials.TokenMember
  | Credentials.$UnknownMember;

/**
 * @public
 */
export namespace Credentials {
  /**
   * The actual session token being returned.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    token: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetManagedEndpointSessionCredentialsResponse {
  /**
   * The identifier of the session token returned.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The structure containing the session credentials.
   *
   * @public
   */
  credentials?: Credentials | undefined;

  /**
   * The session credentials that the operation returns.
   *
   * @public
   */
  endpointCredentials?: Credentials | undefined;

  /**
   * The date and time when the session token will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * The ID of the virtual cluster for which to list the job run.
   *
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * The date and time before which the job runs were submitted.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The date and time after which the job runs were submitted.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The name of the job run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The states of the job run.
   *
   * @public
   */
  states?: JobRunState[] | undefined;

  /**
   * The maximum number of job runs that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of job runs to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * The date and time after which the job templates were created.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The date and time before which the job templates were created.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The maximum number of job templates that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of job templates to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedEndpointsRequest {
  /**
   * The ID of the virtual cluster.
   *
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * The date and time before which the endpoints are created.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The date and time after which the endpoints are created.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The types of the managed endpoints.
   *
   * @public
   */
  types?: string[] | undefined;

  /**
   * The states of the managed endpoints.
   *
   * @public
   */
  states?: EndpointState[] | undefined;

  /**
   * The maximum number of managed endpoints that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of managed endpoints to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsRequest {
  /**
   * The date and time after which the security configuration was created.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The date and time before which the security configuration was created.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The maximum number of security configurations the operation can list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of security configurations to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsResponse {
  /**
   * The list of returned security configurations.
   *
   * @public
   */
  securityConfigurations?: SecurityConfiguration[] | undefined;

  /**
   * The token for the next set of security configurations to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of tagged resources.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags assigned to resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVirtualClustersRequest {
  /**
   * The container provider ID of the virtual cluster.
   *
   * @public
   */
  containerProviderId?: string | undefined;

  /**
   * The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.
   *
   * @public
   */
  containerProviderType?: ContainerProviderType | undefined;

  /**
   * The date and time after which the virtual clusters are created.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * The date and time before which the virtual clusters are created.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The states of the requested virtual clusters.
   *
   * @public
   */
  states?: VirtualClusterState[] | undefined;

  /**
   * The maximum number of virtual clusters that can be listed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of virtual clusters to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional Boolean that specifies whether the operation should return the virtual clusters that have the access entry integration enabled or disabled. If not specified, the operation returns all applicable virtual clusters.
   *
   * @public
   */
  eksAccessEntryIntegrated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListVirtualClustersResponse {
  /**
   * This output lists the specified virtual clusters.
   *
   * @public
   */
  virtualClusters?: VirtualCluster[] | undefined;

  /**
   * This output displays the token for the next set of virtual clusters.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * This output displays the started job run ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * This output displays the name of the started job run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * This output lists the ARN of job run.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * This output displays the virtual cluster ID for which the job run was submitted.
   *
   * @public
   */
  virtualClusterId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of resources.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags assigned to resources.
   *
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
   * The ARN of resources.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys of the resources.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Contains the parameters for a request to update a virtual cluster on Amazon EMR on EKS.
 *
 * @public
 */
export interface UpdateVirtualClusterRequest {
  /**
   * The ID of the virtual cluster to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The scheduler configuration to apply to the virtual cluster. The new configuration fully replaces the existing one. If you omit a field, the corresponding limit is removed.
   *
   * @public
   */
  schedulerConfiguration?: SchedulerConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains the virtual cluster returned after a successful update request.
 *
 * @public
 */
export interface UpdateVirtualClusterResponse {
  /**
   * The updated virtual cluster.
   *
   * @public
   */
  virtualCluster?: VirtualCluster | undefined;
}

/**
 * A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
 *
 * @public
 */
export interface Configuration {
  /**
   * The classification within a configuration.
   *
   * @public
   */
  classification: string | undefined;

  /**
   * A set of properties specified within a configuration classification.
   *
   * @public
   */
  properties?: Record<string, string> | undefined;

  /**
   * A list of additional configurations to apply within a configuration object.
   *
   * @public
   */
  configurations?: Configuration[] | undefined;
}

/**
 * A configuration specification to be used to override existing configurations.
 *
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * The configurations for the application running by the job run.
   *
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * The configurations for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration | undefined;
}

/**
 * A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within.
 *
 * @public
 */
export interface ParametricConfigurationOverrides {
  /**
   * The configurations for the application running by the job run.
   *
   * @public
   */
  applicationConfiguration?: Configuration[] | undefined;

  /**
   * The configurations for monitoring.
   *
   * @public
   */
  monitoringConfiguration?: ParametricMonitoringConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateManagedEndpointRequest {
  /**
   * The name of the managed endpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the virtual cluster for which a managed endpoint is created.
   *
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * The type of the managed endpoint.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The Amazon EMR release version.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The ARN of the execution role.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.
   *
   * @deprecated Customer provided certificate-arn is deprecated and would be removed in future.
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The configuration settings that will be used to override existing configurations.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * The client idempotency token for this create call.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags of the managed endpoint.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The number of idle minutes before the managed endpoint session times out.
   *
   * @public
   */
  sessionIdleTimeoutInMinutes?: number | undefined;
}

/**
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The ID of the endpoint.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the endpoint.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the endpoint's virtual cluster.
   *
   * @public
   */
  virtualClusterId?: string | undefined;

  /**
   * The type of the endpoint.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The state of the endpoint.
   *
   * @public
   */
  state?: EndpointState | undefined;

  /**
   * The EMR release version to be used for the endpoint.
   *
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * The execution role ARN of the endpoint.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The certificate ARN of the endpoint. This field is under deprecation and will be removed in future.
   *
   * @deprecated Customer provided certificate-arn is deprecated and would be removed in future.
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The certificate generated by emr control plane on customer behalf to secure the managed endpoint.
   *
   * @public
   */
  certificateAuthority?: Certificate | undefined;

  /**
   * The configuration settings that are used to override existing configurations for endpoints.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * The server URL of the endpoint.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * The authentication proxy URL of the endpoint.
   *
   * @public
   */
  authProxyUrl?: string | undefined;

  /**
   * The date and time when the endpoint was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The security group configuration of the endpoint.
   *
   * @public
   */
  securityGroup?: string | undefined;

  /**
   * The subnet IDs of the endpoint.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * Additional details of the endpoint state.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The reasons why the endpoint has failed.
   *
   * @public
   */
  failureReason?: FailureReason | undefined;

  /**
   * The tags of the endpoint.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
 *
 * @public
 */
export interface JobRun {
  /**
   * The ID of the job run.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the job run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the job run's virtual cluster.
   *
   * @public
   */
  virtualClusterId?: string | undefined;

  /**
   * The ARN of job run.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The state of the job run.
   *
   * @public
   */
  state?: JobRunState | undefined;

  /**
   * The client token used to start a job run.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The execution role ARN of the job run.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The release version of Amazon EMR.
   *
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * The configuration settings that are used to override default configuration.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * Parameters of job driver for the job run.
   *
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * The date and time when the job run was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the job run.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time when the job run has finished.
   *
   * @public
   */
  finishedAt?: Date | undefined;

  /**
   * Additional details of the job run state.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The reasons why the job run has failed.
   *
   * @public
   */
  failureReason?: FailureReason | undefined;

  /**
   * The assigned tags of the job run.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration of the retry policy that the job runs on.
   *
   * @public
   */
  retryPolicyConfiguration?: RetryPolicyConfiguration | undefined;

  /**
   * The current status of the retry policy executed on the job.
   *
   * @public
   */
  retryPolicyExecution?: RetryPolicyExecution | undefined;
}

/**
 * The values of StartJobRun API requests used in job runs started using the job template.
 *
 * @public
 */
export interface JobTemplateData {
  /**
   * The execution role ARN of the job run.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The release version of Amazon EMR.
   *
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * The configuration settings that are used to override defaults configuration.
   *
   * @public
   */
  configurationOverrides?: ParametricConfigurationOverrides | undefined;

  /**
   * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
   *
   * @public
   */
  jobDriver: JobDriver | undefined;

  /**
   * The configuration of parameters existing in the job template.
   *
   * @public
   */
  parameterConfiguration?: Record<string, TemplateParameterConfiguration> | undefined;

  /**
   * The tags assigned to jobs started using the job template.
   *
   * @public
   */
  jobTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * The name of the job run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The virtual cluster ID for which the job run request is submitted.
   *
   * @public
   */
  virtualClusterId: string | undefined;

  /**
   * The client idempotency token of the job run request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The execution role ARN for the job run.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The Amazon EMR release version to use for the job run.
   *
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * The job driver for the job run.
   *
   * @public
   */
  jobDriver?: JobDriver | undefined;

  /**
   * The configuration overrides for the job run.
   *
   * @public
   */
  configurationOverrides?: ConfigurationOverrides | undefined;

  /**
   * The tags assigned to job runs.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The job template ID to be used to start the job run.
   *
   * @public
   */
  jobTemplateId?: string | undefined;

  /**
   * The values of job template parameters to start a job run.
   *
   * @public
   */
  jobTemplateParameters?: Record<string, string> | undefined;

  /**
   * The retry policy configuration for the job run.
   *
   * @public
   */
  retryPolicyConfiguration?: RetryPolicyConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * The specified name of the job template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The client token of the job template.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The job template data which holds values of StartJobRun API request.
   *
   * @public
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * The tags that are associated with the job template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The KMS key ARN used to encrypt the job template.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunResponse {
  /**
   * The output displays information about a job run.
   *
   * @public
   */
  jobRun?: JobRun | undefined;
}

/**
 * @public
 */
export interface DescribeManagedEndpointResponse {
  /**
   * This output displays information about a managed endpoint.
   *
   * @public
   */
  endpoint?: Endpoint | undefined;
}

/**
 * This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
 *
 * @public
 */
export interface JobTemplate {
  /**
   * The name of the job template.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the job template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the job template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time when the job template was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The user who created the job template.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The tags assigned to the job template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The job template data which holds values of StartJobRun API request.
   *
   * @public
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * The KMS key ARN used to encrypt the job template.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The error message in case the decryption of job template fails.
   *
   * @public
   */
  decryptionError?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateResponse {
  /**
   * This output displays information about the specified job template.
   *
   * @public
   */
  jobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * This output lists information about the specified job runs.
   *
   * @public
   */
  jobRuns?: JobRun[] | undefined;

  /**
   * This output displays the token for the next set of job runs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedEndpointsResponse {
  /**
   * The managed endpoints to be listed.
   *
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * The token for the next set of endpoints to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * This output lists information about the specified job templates.
   *
   * @public
   */
  templates?: JobTemplate[] | undefined;

  /**
   * This output displays the token for the next set of job templates.
   *
   * @public
   */
  nextToken?: string | undefined;
}
