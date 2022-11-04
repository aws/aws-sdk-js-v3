// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { EMRContainersServiceException as __BaseException } from "./EMRContainersServiceException";

export interface CancelJobRunRequest {
  /**
   * <p>The ID of the job run to cancel.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which the job run will be canceled.</p>
   */
  virtualClusterId: string | undefined;
}

export interface CancelJobRunResponse {
  /**
   * <p>The output contains the ID of the cancelled job run.</p>
   */
  id?: string;

  /**
   * <p>The output contains the virtual cluster ID for which the job run is cancelled.</p>
   */
  virtualClusterId?: string;
}

/**
 * <p>This is an internal server exception.</p>
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
 */
export interface ParametricCloudWatchMonitoringConfiguration {
  /**
   * <p> The name of the log group for log publishing.</p>
   */
  logGroupName?: string;

  /**
   * <p> The specified name prefix for log streams.</p>
   */
  logStreamNamePrefix?: string;
}

/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to
 *          send log information to Amazon S3. This data type allows job template parameters to be
 *          specified within.</p>
 */
export interface ParametricS3MonitoringConfiguration {
  /**
   * <p>Amazon S3 destination URI for log publishing.</p>
   */
  logUri?: string;
}

/**
 * <p> Configuration setting for monitoring. This data type allows job template parameters to
 *          be specified within.</p>
 */
export interface ParametricMonitoringConfiguration {
  /**
   * <p> Monitoring configurations for the persistent application UI.</p>
   */
  persistentAppUI?: string;

  /**
   * <p> Monitoring configurations for CloudWatch.</p>
   */
  cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;

  /**
   * <p> Amazon S3 configuration for monitoring log publishing.</p>
   */
  s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
}

/**
 * <p>The job driver for job type.</p>
 */
export interface SparkSqlJobDriver {
  /**
   * <p>The SQL file to be executed.</p>
   */
  entryPoint?: string;

  /**
   * <p>The Spark parameters to be included in the Spark SQL command.</p>
   */
  sparkSqlParameters?: string;
}

/**
 * <p>The information about job driver for Spark submit.</p>
 */
export interface SparkSubmitJobDriver {
  /**
   * <p>The entry point of job application.</p>
   */
  entryPoint: string | undefined;

  /**
   * <p>The arguments for job application.</p>
   */
  entryPointArguments?: string[];

  /**
   * <p>The Spark submit parameters that are used for job runs.</p>
   */
  sparkSubmitParameters?: string;
}

/**
 * <p>Specify the driver that the job runs on. Exactly one of the two available job drivers is
 *          required, either sparkSqlJobDriver or sparkSubmitJobDriver.</p>
 */
export interface JobDriver {
  /**
   * <p>The job driver parameters specified for spark submit.</p>
   */
  sparkSubmitJobDriver?: SparkSubmitJobDriver;

  /**
   * <p>The job driver for job type.</p>
   */
  sparkSqlJobDriver?: SparkSqlJobDriver;
}

export enum TemplateParameterDataType {
  NUMBER = "NUMBER",
  STRING = "STRING",
}

/**
 * <p>The configuration of a job template parameter.</p>
 */
export interface TemplateParameterConfiguration {
  /**
   * <p>The type of the job template parameter. Allowed values are: ‘String’, ‘Number’.</p>
   */
  type?: TemplateParameterDataType | string;

  /**
   * <p>The default value for the job template parameter.</p>
   */
  defaultValue?: string;
}

export interface CreateJobTemplateResponse {
  /**
   * <p>This output display the created job template ID.</p>
   */
  id?: string;

  /**
   * <p>This output displays the name of the created job template.</p>
   */
  name?: string;

  /**
   * <p>This output display the ARN of the created job template.</p>
   */
  arn?: string;

  /**
   * <p>This output displays the date and time when the job template was created.</p>
   */
  createdAt?: Date;
}

/**
 * <p>The specified resource was not found.</p>
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
 */
export interface CloudWatchMonitoringConfiguration {
  /**
   * <p>The name of the log group for log publishing.</p>
   */
  logGroupName: string | undefined;

  /**
   * <p>The specified name prefix for log streams.</p>
   */
  logStreamNamePrefix?: string;
}

export enum PersistentAppUI {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to
 *          send log information to Amazon S3.</p>
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>Amazon S3 destination URI for log publishing.</p>
   */
  logUri: string | undefined;
}

/**
 * <p>Configuration setting for monitoring.</p>
 */
export interface MonitoringConfiguration {
  /**
   * <p>Monitoring configurations for the persistent application UI. </p>
   */
  persistentAppUI?: PersistentAppUI | string;

  /**
   * <p>Monitoring configurations for CloudWatch.</p>
   */
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;

  /**
   * <p>Amazon S3 configuration for monitoring log publishing.</p>
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
}

export interface CreateManagedEndpointResponse {
  /**
   * <p>The output contains the ID of the managed endpoint.</p>
   */
  id?: string;

  /**
   * <p>The output contains the name of the managed endpoint.</p>
   */
  name?: string;

  /**
   * <p>The output contains the ARN of the managed endpoint.</p>
   */
  arn?: string;

  /**
   * <p>The output contains the ID of the virtual cluster.</p>
   */
  virtualClusterId?: string;
}

/**
 * <p>The information about the EKS cluster.</p>
 */
export interface EksInfo {
  /**
   * <p>The namespaces of the EKS cluster.</p>
   */
  namespace?: string;
}

/**
 * <p>The information about the container used for a job run or a managed endpoint.</p>
 */
export type ContainerInfo = ContainerInfo.EksInfoMember | ContainerInfo.$UnknownMember;

export namespace ContainerInfo {
  /**
   * <p>The information about the EKS cluster.</p>
   */
  export interface EksInfoMember {
    eksInfo: EksInfo;
    $unknown?: never;
  }

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

export enum ContainerProviderType {
  EKS = "EKS",
}

/**
 * <p>The information about the container provider.</p>
 */
export interface ContainerProvider {
  /**
   * <p>The type of the container provider. EKS is the only supported type as of now.</p>
   */
  type: ContainerProviderType | string | undefined;

  /**
   * <p>The ID of the container cluster.</p>
   */
  id: string | undefined;

  /**
   * <p>The information about the container cluster.</p>
   */
  info?: ContainerInfo;
}

export interface CreateVirtualClusterRequest {
  /**
   * <p>The specified name of the virtual cluster.</p>
   */
  name: string | undefined;

  /**
   * <p>The container provider of the virtual cluster.</p>
   */
  containerProvider: ContainerProvider | undefined;

  /**
   * <p>The client token of the virtual cluster.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags assigned to the virtual cluster.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateVirtualClusterResponse {
  /**
   * <p>This output contains the virtual cluster ID.</p>
   */
  id?: string;

  /**
   * <p>This output contains the name of the virtual cluster.</p>
   */
  name?: string;

  /**
   * <p>This output contains the ARN of virtual cluster.</p>
   */
  arn?: string;
}

export interface DeleteJobTemplateRequest {
  /**
   * <p>The ID of the job template that will be deleted.</p>
   */
  id: string | undefined;
}

export interface DeleteJobTemplateResponse {
  /**
   * <p>This output contains the ID of the job template that was deleted.</p>
   */
  id?: string;
}

export interface DeleteManagedEndpointRequest {
  /**
   * <p>The ID of the managed endpoint.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   */
  virtualClusterId: string | undefined;
}

export interface DeleteManagedEndpointResponse {
  /**
   * <p>The output displays the ID of the managed endpoint.</p>
   */
  id?: string;

  /**
   * <p>The output displays the ID of the endpoint's virtual cluster.</p>
   */
  virtualClusterId?: string;
}

export interface DeleteVirtualClusterRequest {
  /**
   * <p>The ID of the virtual cluster that will be deleted.</p>
   */
  id: string | undefined;
}

export interface DeleteVirtualClusterResponse {
  /**
   * <p>This output contains the ID of the virtual cluster that will be deleted. </p>
   */
  id?: string;
}

export interface DescribeJobRunRequest {
  /**
   * <p>The ID of the job run request. </p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which the job run is submitted.</p>
   */
  virtualClusterId: string | undefined;
}

export enum FailureReason {
  CLUSTER_UNAVAILABLE = "CLUSTER_UNAVAILABLE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  USER_ERROR = "USER_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

export enum JobRunState {
  CANCELLED = "CANCELLED",
  CANCEL_PENDING = "CANCEL_PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SUBMITTED = "SUBMITTED",
}

export interface DescribeJobTemplateRequest {
  /**
   * <p>The ID of the job template that will be described.</p>
   */
  id: string | undefined;
}

export interface DescribeManagedEndpointRequest {
  /**
   * <p>This output displays ID of the managed endpoint.</p>
   */
  id: string | undefined;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   */
  virtualClusterId: string | undefined;
}

/**
 * <p>The entity representing certificate data generated for managed endpoint.</p>
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate generated for managed endpoint.</p>
   */
  certificateArn?: string;

  /**
   * <p>The base64 encoded PEM certificate data generated for managed endpoint.</p>
   */
  certificateData?: string;
}

export enum EndpointState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  TERMINATED = "TERMINATED",
  TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS",
  TERMINATING = "TERMINATING",
}

export interface DescribeVirtualClusterRequest {
  /**
   * <p>The ID of the virtual cluster that will be described.</p>
   */
  id: string | undefined;
}

export enum VirtualClusterState {
  ARRESTED = "ARRESTED",
  RUNNING = "RUNNING",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

/**
 * <p>This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace
 *          that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host
 *          endpoints. Multiple virtual clusters can be backed by the same physical cluster. However,
 *          each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not
 *          create any active resources that contribute to your bill or that require lifecycle
 *          management outside the service.</p>
 */
export interface VirtualCluster {
  /**
   * <p>The ID of the virtual cluster.</p>
   */
  id?: string;

  /**
   * <p>The name of the virtual cluster.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the virtual cluster.</p>
   */
  arn?: string;

  /**
   * <p>The state of the virtual cluster.</p>
   */
  state?: VirtualClusterState | string;

  /**
   * <p>The container provider of the virtual cluster.</p>
   */
  containerProvider?: ContainerProvider;

  /**
   * <p>The date and time when the virtual cluster is created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The assigned tags of the virtual cluster.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeVirtualClusterResponse {
  /**
   * <p>This output displays information about the specified virtual cluster.</p>
   */
  virtualCluster?: VirtualCluster;
}

export interface ListJobRunsRequest {
  /**
   * <p>The ID of the virtual cluster for which to list the job run. </p>
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The date and time before which the job runs were submitted.</p>
   */
  createdBefore?: Date;

  /**
   * <p>The date and time after which the job runs were submitted.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The name of the job run.</p>
   */
  name?: string;

  /**
   * <p>The states of the job run.</p>
   */
  states?: (JobRunState | string)[];

  /**
   * <p>The maximum number of job runs that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of job runs to return.</p>
   */
  nextToken?: string;
}

export interface ListJobTemplatesRequest {
  /**
   * <p>The date and time after which the job templates were created.</p>
   */
  createdAfter?: Date;

  /**
   * <p> The date and time before which the job templates were created.</p>
   */
  createdBefore?: Date;

  /**
   * <p> The maximum number of job templates that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p> The token for the next set of job templates to return.</p>
   */
  nextToken?: string;
}

export interface ListManagedEndpointsRequest {
  /**
   * <p>The ID of the virtual cluster.</p>
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The date and time before which the endpoints are created.</p>
   */
  createdBefore?: Date;

  /**
   * <p> The date and time after which the endpoints are created.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The types of the managed endpoints.</p>
   */
  types?: string[];

  /**
   * <p>The states of the managed endpoints.</p>
   */
  states?: (EndpointState | string)[];

  /**
   * <p>The maximum number of managed endpoints that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p> The token for the next set of managed endpoints to return. </p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of tagged resources.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to resources.</p>
   */
  tags?: Record<string, string>;
}

export interface ListVirtualClustersRequest {
  /**
   * <p>The container provider ID of the virtual cluster.</p>
   */
  containerProviderId?: string;

  /**
   * <p>The container provider type of the virtual cluster. EKS is the only supported type as of
   *          now.</p>
   */
  containerProviderType?: ContainerProviderType | string;

  /**
   * <p>The date and time after which the virtual clusters are created.</p>
   */
  createdAfter?: Date;

  /**
   * <p>The date and time before which the virtual clusters are created.</p>
   */
  createdBefore?: Date;

  /**
   * <p>The states of the requested virtual clusters.</p>
   */
  states?: (VirtualClusterState | string)[];

  /**
   * <p>The maximum number of virtual clusters that can be listed.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of virtual clusters to return. </p>
   */
  nextToken?: string;
}

export interface ListVirtualClustersResponse {
  /**
   * <p>This output lists the specified virtual clusters.</p>
   */
  virtualClusters?: VirtualCluster[];

  /**
   * <p>This output displays the token for the next set of virtual clusters.</p>
   */
  nextToken?: string;
}

export interface StartJobRunResponse {
  /**
   * <p>This output displays the started job run ID.</p>
   */
  id?: string;

  /**
   * <p>This output displays the name of the started job run.</p>
   */
  name?: string;

  /**
   * <p>This output lists the ARN of job run.</p>
   */
  arn?: string;

  /**
   * <p>This output displays the virtual cluster ID for which the job run was submitted.</p>
   */
  virtualClusterId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of resources.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags assigned to resources.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of resources.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the resources.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>A configuration specification to be used when provisioning virtual clusters, which can
 *          include configurations for applications and software bundled with Amazon EMR on EKS. A
 *          configuration consists of a classification, properties, and optional nested configurations.
 *          A classification refers to an application-specific configuration file. Properties are the
 *          settings you want to change in that file.</p>
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  properties?: Record<string, string>;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  configurations?: Configuration[];
}

/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 */
export interface ConfigurationOverrides {
  /**
   * <p>The configurations for the application running by the job run. </p>
   */
  applicationConfiguration?: Configuration[];

  /**
   * <p>The configurations for monitoring.</p>
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * <p> A configuration specification to be used to override existing configurations. This data
 *          type allows job template parameters to be specified within.</p>
 */
export interface ParametricConfigurationOverrides {
  /**
   * <p> The configurations for the application running by the job run.</p>
   */
  applicationConfiguration?: Configuration[];

  /**
   * <p> The configurations for monitoring. </p>
   */
  monitoringConfiguration?: ParametricMonitoringConfiguration;
}

export interface CreateManagedEndpointRequest {
  /**
   * <p>The name of the managed endpoint.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the virtual cluster for which a managed endpoint is created.</p>
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The type of the managed endpoint.</p>
   */
  type: string | undefined;

  /**
   * <p>The Amazon EMR release version.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The ARN of the execution role.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * @deprecated
   *
   * <p>The certificate ARN provided by users for the managed endpoint. This field
   *          is under deprecation and will be removed in future releases.</p>
   */
  certificateArn?: string;

  /**
   * <p>The configuration settings that will be used to override existing configurations.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The client idempotency token for this create call.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags of the managed endpoint.
   *       </p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This entity represents the endpoint that is managed by Amazon EMR on EKS.</p>
 */
export interface Endpoint {
  /**
   * <p>The ID of the endpoint.</p>
   */
  id?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the endpoint.</p>
   */
  arn?: string;

  /**
   * <p>The ID of the endpoint's virtual cluster.</p>
   */
  virtualClusterId?: string;

  /**
   * <p>The type of the endpoint.</p>
   */
  type?: string;

  /**
   * <p>The state of the endpoint.</p>
   */
  state?: EndpointState | string;

  /**
   * <p>The EMR release version to be used for the endpoint.</p>
   */
  releaseLabel?: string;

  /**
   * <p>The execution role ARN of the endpoint.</p>
   */
  executionRoleArn?: string;

  /**
   * @deprecated
   *
   * <p>The certificate ARN of the endpoint. This field is under deprecation and will be removed
   *          in future.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate generated by emr control plane on customer behalf to secure the managed
   *          endpoint.</p>
   */
  certificateAuthority?: Certificate;

  /**
   * <p>The configuration settings that are used to override existing configurations for
   *          endpoints.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The server URL of the endpoint.</p>
   */
  serverUrl?: string;

  /**
   * <p>The date and time when the endpoint was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The security group configuration of the endpoint. </p>
   */
  securityGroup?: string;

  /**
   * <p>The subnet IDs of the endpoint. </p>
   */
  subnetIds?: string[];

  /**
   * <p> Additional details of the endpoint state. </p>
   */
  stateDetails?: string;

  /**
   * <p> The reasons why the endpoint has failed. </p>
   */
  failureReason?: FailureReason | string;

  /**
   * <p>The tags of the endpoint. </p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>This entity describes a job run. A job run is a unit of work, such as a Spark jar,
 *          PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. </p>
 */
export interface JobRun {
  /**
   * <p>The ID of the job run.</p>
   */
  id?: string;

  /**
   * <p>The name of the job run.</p>
   */
  name?: string;

  /**
   * <p>The ID of the job run's virtual cluster.</p>
   */
  virtualClusterId?: string;

  /**
   * <p>The ARN of job run.</p>
   */
  arn?: string;

  /**
   * <p>The state of the job run. </p>
   */
  state?: JobRunState | string;

  /**
   * <p>The client token used to start a job run.</p>
   */
  clientToken?: string;

  /**
   * <p>The execution role ARN of the job run.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The release version of Amazon EMR.</p>
   */
  releaseLabel?: string;

  /**
   * <p>The configuration settings that are used to override default configuration.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>Parameters of job driver for the job run.</p>
   */
  jobDriver?: JobDriver;

  /**
   * <p>The date and time when the job run was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user who created the job run.</p>
   */
  createdBy?: string;

  /**
   * <p>The date and time when the job run has finished.</p>
   */
  finishedAt?: Date;

  /**
   * <p>Additional details of the job run state.</p>
   */
  stateDetails?: string;

  /**
   * <p>The reasons why the job run has failed.</p>
   */
  failureReason?: FailureReason | string;

  /**
   * <p>The assigned tags of the job run.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The values of StartJobRun API requests used in job runs started using the job
 *          template.</p>
 */
export interface JobTemplateData {
  /**
   * <p>The execution role ARN of the job run.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * <p> The release version of Amazon EMR.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p> The configuration settings that are used to override defaults configuration.</p>
   */
  configurationOverrides?: ParametricConfigurationOverrides;

  /**
   * <p>Specify the driver that the job runs on. Exactly one of the two available job drivers is
   *          required, either sparkSqlJobDriver or sparkSubmitJobDriver.</p>
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The configuration of parameters existing in the job template.</p>
   */
  parameterConfiguration?: Record<string, TemplateParameterConfiguration>;

  /**
   * <p>The tags assigned to jobs started using the job template.</p>
   */
  jobTags?: Record<string, string>;
}

export interface StartJobRunRequest {
  /**
   * <p>The name of the job run.</p>
   */
  name?: string;

  /**
   * <p>The virtual cluster ID for which the job run request is submitted.</p>
   */
  virtualClusterId: string | undefined;

  /**
   * <p>The client idempotency token of the job run request. </p>
   */
  clientToken?: string;

  /**
   * <p>The execution role ARN for the job run.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The Amazon EMR release version to use for the job run.</p>
   */
  releaseLabel?: string;

  /**
   * <p>The job driver for the job run.</p>
   */
  jobDriver?: JobDriver;

  /**
   * <p>The configuration overrides for the job run.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The tags assigned to job runs.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The job template ID to be used to start the job run.</p>
   */
  jobTemplateId?: string;

  /**
   * <p>The values of job template parameters to start a job run.</p>
   */
  jobTemplateParameters?: Record<string, string>;
}

export interface CreateJobTemplateRequest {
  /**
   * <p>The specified name of the job template.</p>
   */
  name: string | undefined;

  /**
   * <p>The client token of the job template.</p>
   */
  clientToken?: string;

  /**
   * <p>The job template data which holds values of StartJobRun API request.</p>
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * <p>The tags that are associated with the job template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The KMS key ARN used to encrypt the job template.</p>
   */
  kmsKeyArn?: string;
}

export interface DescribeJobRunResponse {
  /**
   * <p>The output displays information about a job run.</p>
   */
  jobRun?: JobRun;
}

export interface DescribeManagedEndpointResponse {
  /**
   * <p>This output displays information about a managed endpoint.</p>
   */
  endpoint?: Endpoint;
}

/**
 * <p>This entity describes a job template. Job template stores values of StartJobRun API
 *          request in a template and can be used to start a job run. Job template allows two use
 *          cases: avoid repeating recurring StartJobRun API request values, enforcing certain values
 *          in StartJobRun API request.</p>
 */
export interface JobTemplate {
  /**
   * <p>The name of the job template.</p>
   */
  name?: string;

  /**
   * <p>The ID of the job template.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the job template.</p>
   */
  arn?: string;

  /**
   * <p> The date and time when the job template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p> The user who created the job template.</p>
   */
  createdBy?: string;

  /**
   * <p>The tags assigned to the job template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The job template data which holds values of StartJobRun API request.</p>
   */
  jobTemplateData: JobTemplateData | undefined;

  /**
   * <p> The KMS key ARN used to encrypt the job template.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The error message in case the decryption of job template fails.</p>
   */
  decryptionError?: string;
}

export interface DescribeJobTemplateResponse {
  /**
   * <p>This output displays information about the specified job template.</p>
   */
  jobTemplate?: JobTemplate;
}

export interface ListJobRunsResponse {
  /**
   * <p>This output lists information about the specified job runs.</p>
   */
  jobRuns?: JobRun[];

  /**
   * <p>This output displays the token for the next set of job runs.</p>
   */
  nextToken?: string;
}

export interface ListManagedEndpointsResponse {
  /**
   * <p>The managed endpoints to be listed.</p>
   */
  endpoints?: Endpoint[];

  /**
   * <p> The token for the next set of endpoints to return. </p>
   */
  nextToken?: string;
}

export interface ListJobTemplatesResponse {
  /**
   * <p>This output lists information about the specified job templates.</p>
   */
  templates?: JobTemplate[];

  /**
   * <p> This output displays the token for the next set of job templates.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const CancelJobRunRequestFilterSensitiveLog = (obj: CancelJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRunResponseFilterSensitiveLog = (obj: CancelJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParametricCloudWatchMonitoringConfigurationFilterSensitiveLog = (
  obj: ParametricCloudWatchMonitoringConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParametricS3MonitoringConfigurationFilterSensitiveLog = (
  obj: ParametricS3MonitoringConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParametricMonitoringConfigurationFilterSensitiveLog = (obj: ParametricMonitoringConfiguration): any => ({
  ...obj,
});

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
export const TemplateParameterConfigurationFilterSensitiveLog = (obj: TemplateParameterConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobTemplateResponseFilterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchMonitoringConfigurationFilterSensitiveLog = (obj: CloudWatchMonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3MonitoringConfigurationFilterSensitiveLog = (obj: S3MonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConfigurationFilterSensitiveLog = (obj: MonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateManagedEndpointResponseFilterSensitiveLog = (obj: CreateManagedEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EksInfoFilterSensitiveLog = (obj: EksInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerInfoFilterSensitiveLog = (obj: ContainerInfo): any => {
  if (obj.eksInfo !== undefined) return { eksInfo: EksInfoFilterSensitiveLog(obj.eksInfo) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContainerProviderFilterSensitiveLog = (obj: ContainerProvider): any => ({
  ...obj,
  ...(obj.info && { info: ContainerInfoFilterSensitiveLog(obj.info) }),
});

/**
 * @internal
 */
export const CreateVirtualClusterRequestFilterSensitiveLog = (obj: CreateVirtualClusterRequest): any => ({
  ...obj,
  ...(obj.containerProvider && { containerProvider: ContainerProviderFilterSensitiveLog(obj.containerProvider) }),
});

/**
 * @internal
 */
export const CreateVirtualClusterResponseFilterSensitiveLog = (obj: CreateVirtualClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobTemplateRequestFilterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobTemplateResponseFilterSensitiveLog = (obj: DeleteJobTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteManagedEndpointRequestFilterSensitiveLog = (obj: DeleteManagedEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteManagedEndpointResponseFilterSensitiveLog = (obj: DeleteManagedEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVirtualClusterRequestFilterSensitiveLog = (obj: DeleteVirtualClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVirtualClusterResponseFilterSensitiveLog = (obj: DeleteVirtualClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobRunRequestFilterSensitiveLog = (obj: DescribeJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobTemplateRequestFilterSensitiveLog = (obj: DescribeJobTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeManagedEndpointRequestFilterSensitiveLog = (obj: DescribeManagedEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateFilterSensitiveLog = (obj: Certificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVirtualClusterRequestFilterSensitiveLog = (obj: DescribeVirtualClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VirtualClusterFilterSensitiveLog = (obj: VirtualCluster): any => ({
  ...obj,
  ...(obj.containerProvider && { containerProvider: ContainerProviderFilterSensitiveLog(obj.containerProvider) }),
});

/**
 * @internal
 */
export const DescribeVirtualClusterResponseFilterSensitiveLog = (obj: DescribeVirtualClusterResponse): any => ({
  ...obj,
  ...(obj.virtualCluster && { virtualCluster: VirtualClusterFilterSensitiveLog(obj.virtualCluster) }),
});

/**
 * @internal
 */
export const ListJobRunsRequestFilterSensitiveLog = (obj: ListJobRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobTemplatesRequestFilterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedEndpointsRequestFilterSensitiveLog = (obj: ListManagedEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVirtualClustersRequestFilterSensitiveLog = (obj: ListVirtualClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVirtualClustersResponseFilterSensitiveLog = (obj: ListVirtualClustersResponse): any => ({
  ...obj,
  ...(obj.virtualClusters && {
    virtualClusters: obj.virtualClusters.map((item) => VirtualClusterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartJobRunResponseFilterSensitiveLog = (obj: StartJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
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
