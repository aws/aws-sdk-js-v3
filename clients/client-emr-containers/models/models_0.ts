import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace CancelJobRunRequest {
  export const filterSensitiveLog = (obj: CancelJobRunRequest): any => ({
    ...obj,
  });
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

export namespace CancelJobRunResponse {
  export const filterSensitiveLog = (obj: CancelJobRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This is an internal server exception.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>There are invalid parameters in the client request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.</p>
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

export namespace CloudWatchMonitoringConfiguration {
  export const filterSensitiveLog = (obj: CloudWatchMonitoringConfiguration): any => ({
    ...obj,
  });
}

export enum PersistentAppUI {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p> Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.</p>
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>Amazon S3 destination URI for log publishing.</p>
   */
  logUri: string | undefined;
}

export namespace S3MonitoringConfiguration {
  export const filterSensitiveLog = (obj: S3MonitoringConfiguration): any => ({
    ...obj,
  });
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

export namespace MonitoringConfiguration {
  export const filterSensitiveLog = (obj: MonitoringConfiguration): any => ({
    ...obj,
  });
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

export namespace CreateManagedEndpointResponse {
  export const filterSensitiveLog = (obj: CreateManagedEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace EksInfo {
  export const filterSensitiveLog = (obj: EksInfo): any => ({
    ...obj,
  });
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

  export const filterSensitiveLog = (obj: ContainerInfo): any => {
    if (obj.eksInfo !== undefined) return { eksInfo: EksInfo.filterSensitiveLog(obj.eksInfo) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace ContainerProvider {
  export const filterSensitiveLog = (obj: ContainerProvider): any => ({
    ...obj,
    ...(obj.info && { info: ContainerInfo.filterSensitiveLog(obj.info) }),
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateVirtualClusterRequest {
  export const filterSensitiveLog = (obj: CreateVirtualClusterRequest): any => ({
    ...obj,
    ...(obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }),
  });
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

export namespace CreateVirtualClusterResponse {
  export const filterSensitiveLog = (obj: CreateVirtualClusterResponse): any => ({
    ...obj,
  });
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

export namespace DeleteManagedEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteManagedEndpointRequest): any => ({
    ...obj,
  });
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

export namespace DeleteManagedEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteManagedEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteVirtualClusterRequest {
  /**
   * <p>The ID of the virtual cluster that will be deleted.</p>
   */
  id: string | undefined;
}

export namespace DeleteVirtualClusterRequest {
  export const filterSensitiveLog = (obj: DeleteVirtualClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteVirtualClusterResponse {
  /**
   * <p>This output contains the ID of the virtual cluster that will be deleted. </p>
   */
  id?: string;
}

export namespace DeleteVirtualClusterResponse {
  export const filterSensitiveLog = (obj: DeleteVirtualClusterResponse): any => ({
    ...obj,
  });
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

export namespace DescribeJobRunRequest {
  export const filterSensitiveLog = (obj: DescribeJobRunRequest): any => ({
    ...obj,
  });
}

export enum FailureReason {
  CLUSTER_UNAVAILABLE = "CLUSTER_UNAVAILABLE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  USER_ERROR = "USER_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
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

export namespace SparkSubmitJobDriver {
  export const filterSensitiveLog = (obj: SparkSubmitJobDriver): any => ({
    ...obj,
    ...(obj.entryPoint && { entryPoint: SENSITIVE_STRING }),
    ...(obj.entryPointArguments && { entryPointArguments: SENSITIVE_STRING }),
    ...(obj.sparkSubmitParameters && { sparkSubmitParameters: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specify the driver that the job runs on.</p>
 */
export interface JobDriver {
  /**
   * <p>The job driver parameters specified for spark submit.</p>
   */
  sparkSubmitJobDriver?: SparkSubmitJobDriver;
}

export namespace JobDriver {
  export const filterSensitiveLog = (obj: JobDriver): any => ({
    ...obj,
    ...(obj.sparkSubmitJobDriver && {
      sparkSubmitJobDriver: SparkSubmitJobDriver.filterSensitiveLog(obj.sparkSubmitJobDriver),
    }),
  });
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

export namespace DescribeManagedEndpointRequest {
  export const filterSensitiveLog = (obj: DescribeManagedEndpointRequest): any => ({
    ...obj,
  });
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

export namespace DescribeVirtualClusterRequest {
  export const filterSensitiveLog = (obj: DescribeVirtualClusterRequest): any => ({
    ...obj,
  });
}

export enum VirtualClusterState {
  ARRESTED = "ARRESTED",
  RUNNING = "RUNNING",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

/**
 * <p>This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.</p>
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
  tags?: { [key: string]: string };
}

export namespace VirtualCluster {
  export const filterSensitiveLog = (obj: VirtualCluster): any => ({
    ...obj,
    ...(obj.containerProvider && { containerProvider: ContainerProvider.filterSensitiveLog(obj.containerProvider) }),
  });
}

export interface DescribeVirtualClusterResponse {
  /**
   * <p>This output displays information about the specified virtual cluster.</p>
   */
  virtualCluster?: VirtualCluster;
}

export namespace DescribeVirtualClusterResponse {
  export const filterSensitiveLog = (obj: DescribeVirtualClusterResponse): any => ({
    ...obj,
    ...(obj.virtualCluster && { virtualCluster: VirtualCluster.filterSensitiveLog(obj.virtualCluster) }),
  });
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

export namespace ListJobRunsRequest {
  export const filterSensitiveLog = (obj: ListJobRunsRequest): any => ({
    ...obj,
  });
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

export namespace ListManagedEndpointsRequest {
  export const filterSensitiveLog = (obj: ListManagedEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of tagged resources.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to resources.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListVirtualClustersRequest {
  /**
   * <p>The container provider ID of the virtual cluster.</p>
   */
  containerProviderId?: string;

  /**
   * <p>The container provider type of the virtual cluster. EKS is the only supported type as of now.</p>
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

export namespace ListVirtualClustersRequest {
  export const filterSensitiveLog = (obj: ListVirtualClustersRequest): any => ({
    ...obj,
  });
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

export namespace ListVirtualClustersResponse {
  export const filterSensitiveLog = (obj: ListVirtualClustersResponse): any => ({
    ...obj,
    ...(obj.virtualClusters && {
      virtualClusters: obj.virtualClusters.map((item) => VirtualCluster.filterSensitiveLog(item)),
    }),
  });
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

export namespace StartJobRunResponse {
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of resources.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags assigned to resources.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.</p>
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  properties?: { [key: string]: string };

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  configurations?: Configuration[];
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
    ...(obj.properties && { properties: SENSITIVE_STRING }),
    ...(obj.configurations && {
      configurations: obj.configurations.map((item) => Configuration.filterSensitiveLog(item)),
    }),
  });
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

export namespace ConfigurationOverrides {
  export const filterSensitiveLog = (obj: ConfigurationOverrides): any => ({
    ...obj,
    ...(obj.applicationConfiguration && {
      applicationConfiguration: obj.applicationConfiguration.map((item) => Configuration.filterSensitiveLog(item)),
    }),
  });
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
   * <p>The certificate ARN of the managed endpoint.</p>
   */
  certificateArn: string | undefined;

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
  tags?: { [key: string]: string };
}

export namespace CreateManagedEndpointRequest {
  export const filterSensitiveLog = (obj: CreateManagedEndpointRequest): any => ({
    ...obj,
    ...(obj.configurationOverrides && {
      configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }),
  });
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
   * <p>The certificate ARN of the endpoint.</p>
   */
  certificateArn?: string;

  /**
   * <p>The configuration settings that are used to override existing configurations for endpoints.</p>
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
   * <p>The security group configuration of the endpoint.
   *       </p>
   */
  securityGroup?: string;

  /**
   * <p>The subnet IDs of the endpoint.
   *       </p>
   */
  subnetIds?: string[];

  /**
   * <p>The tags of the endpoint.
   *       </p>
   */
  tags?: { [key: string]: string };
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
    ...(obj.configurationOverrides && {
      configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }),
  });
}

/**
 * <p>This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. </p>
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
  tags?: { [key: string]: string };
}

export namespace JobRun {
  export const filterSensitiveLog = (obj: JobRun): any => ({
    ...obj,
    ...(obj.configurationOverrides && {
      configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }),
    ...(obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) }),
  });
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
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon EMR release version to use for the job run.</p>
   */
  releaseLabel: string | undefined;

  /**
   * <p>The job driver for the job run.</p>
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The configuration overrides for the job run.</p>
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The tags assigned to job runs.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartJobRunRequest {
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj,
    ...(obj.jobDriver && { jobDriver: JobDriver.filterSensitiveLog(obj.jobDriver) }),
    ...(obj.configurationOverrides && {
      configurationOverrides: ConfigurationOverrides.filterSensitiveLog(obj.configurationOverrides),
    }),
  });
}

export interface DescribeJobRunResponse {
  /**
   * <p>The output displays information about a job run.</p>
   */
  jobRun?: JobRun;
}

export namespace DescribeJobRunResponse {
  export const filterSensitiveLog = (obj: DescribeJobRunResponse): any => ({
    ...obj,
    ...(obj.jobRun && { jobRun: JobRun.filterSensitiveLog(obj.jobRun) }),
  });
}

export interface DescribeManagedEndpointResponse {
  /**
   * <p>This output displays information about a managed endpoint.</p>
   */
  endpoint?: Endpoint;
}

export namespace DescribeManagedEndpointResponse {
  export const filterSensitiveLog = (obj: DescribeManagedEndpointResponse): any => ({
    ...obj,
    ...(obj.endpoint && { endpoint: Endpoint.filterSensitiveLog(obj.endpoint) }),
  });
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

export namespace ListJobRunsResponse {
  export const filterSensitiveLog = (obj: ListJobRunsResponse): any => ({
    ...obj,
    ...(obj.jobRuns && { jobRuns: obj.jobRuns.map((item) => JobRun.filterSensitiveLog(item)) }),
  });
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

export namespace ListManagedEndpointsResponse {
  export const filterSensitiveLog = (obj: ListManagedEndpointsResponse): any => ({
    ...obj,
  });
}
