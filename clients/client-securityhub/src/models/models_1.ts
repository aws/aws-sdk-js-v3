// smithy-typescript generated code
import {
  AssociatedStandard,
  AvailabilityZone,
  AwsEcsContainerDetails,
  RelatedFinding,
  SeverityLabel,
} from "./models_0";

/**
 * @public
 * <p>Provides details on a container instance bind mount host volume.
 *       </p>
 */
export interface AwsEcsTaskVolumeHostDetails {
  /**
   * @public
   * <p>When the <code>host</code> parameter is used, specify a <code>sourcePath</code> to declare the path
   * on the host container instance that's presented to the container.
   *       </p>
   */
  SourcePath?: string;
}

/**
 * @public
 * <p>Provides information about a data volume that's used in a task definition.
 *       </p>
 */
export interface AwsEcsTaskVolumeDetails {
  /**
   * @public
   * <p>The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and
   * hyphens are allowed. This name is referenced in the <code>sourceVolume</code> parameter of container definition <code>mountPoints</code>.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>This parameter is specified when you use bind mount host volumes. The contents of the <code>host</code> parameter
   * determine whether your bind mount host volume persists on the host container instance and where it's stored.
   *       </p>
   */
  Host?: AwsEcsTaskVolumeHostDetails;
}

/**
 * @public
 * <p>Provides details about a task in a cluster.
 *       </p>
 */
export interface AwsEcsTaskDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the task.
   *       </p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The ARN of the task definition that creates the task.
   *       </p>
   */
  TaskDefinitionArn?: string;

  /**
   * @public
   * <p>The version counter for the task.
   *       </p>
   */
  Version?: string;

  /**
   * @public
   * <p>The Unix timestamp for the time when the task was created. More specifically, it's for the time when
   * the task entered the <code>PENDING</code> state.
   *       </p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The Unix timestamp for the time when the task started. More specifically, it's for the time when the
   *          task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state.
   *    </p>
   */
  StartedAt?: string;

  /**
   * @public
   * <p>The tag specified when a task is started. If an Amazon ECS service started the task, the
   *          <code>startedBy</code> parameter contains the deployment ID of that service.
   *       </p>
   */
  StartedBy?: string;

  /**
   * @public
   * <p>The name of the task group that's associated with the task.
   *       </p>
   */
  Group?: string;

  /**
   * @public
   * <p>Details about the data volume that is used in a task definition.
   *       </p>
   */
  Volumes?: AwsEcsTaskVolumeDetails[];

  /**
   * @public
   * <p>The containers that are associated with the task.
   *       </p>
   */
  Containers?: AwsEcsContainerDetails[];
}

/**
 * @public
 * <p>Provides details for all file system operations using this Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointPosixUserDetails {
  /**
   * @public
   * <p>The POSIX group ID used for all file system operations using this access point.
   *       </p>
   */
  Gid?: string;

  /**
   * @public
   * <p>Secondary POSIX group IDs used for all file system operations using this access point.
   *       </p>
   */
  SecondaryGids?: string[];

  /**
   * @public
   * <p>The POSIX user ID used for all file system operations using this access point.
   *       </p>
   */
  Uid?: string;
}

/**
 * @public
 * <p>Provides information about the settings that Amazon EFS uses to create the root directory
 * when a client connects to an access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  /**
   * @public
   * <p>Specifies the POSIX group ID to apply to the root directory.
   *       </p>
   */
  OwnerGid?: string;

  /**
   * @public
   * <p>Specifies the POSIX user ID to apply to the root directory.
   *       </p>
   */
  OwnerUid?: string;

  /**
   * @public
   * <p>Specifies the POSIX permissions to apply to the root directory, in the format of an octal number
   * representing the file's mode bits.
   *       </p>
   */
  Permissions?: string;
}

/**
 * @public
 * <p>Provides information about the directory on the Amazon EFS file system that the access point exposes
 * as the root directory to NFS clients using the access point.
 *       </p>
 */
export interface AwsEfsAccessPointRootDirectoryDetails {
  /**
   * @public
   * <p>Specifies the POSIX IDs and permissions to apply to the access point's root directory.
   *       </p>
   */
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;

  /**
   * @public
   * <p>Specifies the path on the Amazon EFS file system to expose as the root directory to NFS clients
   * using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified
   * path does not exist, you are required to provide <code>CreationInfo</code>.
   *       </p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon EFS access point.
 *       </p>
 */
export interface AwsEfsAccessPointDetails {
  /**
   * @public
   * <p>The ID of the Amazon EFS access point.
   *       </p>
   */
  AccessPointId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The opaque string specified in the request to ensure idempotent creation.
   *       </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The ID of the Amazon EFS file system that the access point applies to.
   *       </p>
   */
  FileSystemId?: string;

  /**
   * @public
   * <p>The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point,
   * that is used for all file operations by NFS clients using the access point.
   *       </p>
   */
  PosixUser?: AwsEfsAccessPointPosixUserDetails;

  /**
   * @public
   * <p>The directory on the Amazon EFS file system that the access point exposes as the root
   * directory to NFS clients using the access point.
   *       </p>
   */
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}

/**
 * @public
 * <p>Details for a cluster logging configuration.</p>
 */
export interface AwsEksClusterLoggingClusterLoggingDetails {
  /**
   * @public
   * <p>Whether the logging types that are listed in <code>Types</code> are enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>A list of logging types. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>api</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audit</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>authenticator</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>controllerManager</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduler</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];
}

/**
 * @public
 * <p>The logging configuration for an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterLoggingDetails {
  /**
   * @public
   * <p>Cluster logging configurations.</p>
   */
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}

/**
 * @public
 * <p>Information about the VPC configuration used by the cluster control plane.</p>
 */
export interface AwsEksClusterResourcesVpcConfigDetails {
  /**
   * @public
   * <p>The security groups that are associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Amazon EKS control plane.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The subnets that are associated with the cluster.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>
   *          Indicates whether the Amazon EKS public API server endpoint is turned on. If the Amazon EKS public API
   *          server endpoint is turned off, your cluster's Kubernetes API server can only receive requests that originate from within
   *          the cluster VPC.
   *       </p>
   */
  EndpointPublicAccess?: boolean;
}

/**
 * @public
 * <p>Provides details about an Amazon EKS cluster.</p>
 */
export interface AwsEksClusterDetails {
  /**
   * @public
   * <p>The ARN of the cluster.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The certificate authority data for the cluster.</p>
   */
  CertificateAuthorityData?: string;

  /**
   * @public
   * <p>The status of the cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ClusterStatus?: string;

  /**
   * @public
   * <p>The endpoint for the Amazon EKS API server.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The VPC configuration used by the cluster control plane.</p>
   */
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;

  /**
   * @public
   * <p>The ARN of the IAM role that provides permissions for the Amazon EKS control plane to make calls to Amazon Web Services API operations on your behalf.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The Amazon EKS server version for the cluster.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The logging configuration for the cluster.</p>
   */
  Logging?: AwsEksClusterLoggingDetails;
}

/**
 * @public
 * <p>Contains information about a link to another environment that is in the same group.</p>
 */
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  /**
   * @public
   * <p>The name of the linked environment.</p>
   */
  EnvironmentName?: string;

  /**
   * @public
   * <p>The name of the environment link.</p>
   */
  LinkName?: string;
}

/**
 * @public
 * <p>A configuration option setting for the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  /**
   * @public
   * <p>The type of resource that the configuration option is associated with.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * @public
   * <p>The value of the configuration setting.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains information about the tier of the environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentTier {
  /**
   * @public
   * <p>The name of the environment tier. Valid values are <code>WebServer</code> or <code>Worker</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of environment tier. Valid values are <code>Standard</code> or <code>SQS/HTTP</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The version of the environment tier.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Contains details about an Elastic Beanstalk environment.</p>
 */
export interface AwsElasticBeanstalkEnvironmentDetails {
  /**
   * @public
   * <p>The name of the application that is associated with the environment.</p>
   */
  ApplicationName?: string;

  /**
   * @public
   * <p>The URL to the CNAME for this environment.</p>
   */
  Cname?: string;

  /**
   * @public
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: string;

  /**
   * @public
   * <p>The date when this environment was last modified.</p>
   */
  DateUpdated?: string;

  /**
   * @public
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.</p>
   */
  EndpointUrl?: string;

  /**
   * @public
   * <p>The ARN of the environment.</p>
   */
  EnvironmentArn?: string;

  /**
   * @public
   * <p>The identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * @public
   * <p>Links to other environments in the same group.</p>
   */
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

  /**
   * @public
   * <p>The configuration setting for the environment.</p>
   */
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];

  /**
   * @public
   * <p>The ARN of the platform version for the environment.</p>
   */
  PlatformArn?: string;

  /**
   * @public
   * <p>The name of the solution stack that is deployed with the environment.</p>
   */
  SolutionStackName?: string;

  /**
   * @public
   * <p>The current operational status of the environment. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Aborting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Launching</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LinkingFrom</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LinkingTo</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Ready</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>The tier of the environment.</p>
   */
  Tier?: AwsElasticBeanstalkEnvironmentTier;

  /**
   * @public
   * <p>The application version of the environment.</p>
   */
  VersionLabel?: string;
}

/**
 * @public
 * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
 *          traffic.</p>
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  /**
   * @public
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * @public
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch
   *          domain.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-0-2019-07</code>, which supports TLSv1.0 and higher</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-2-2019-07</code>, which only supports TLSv1.2</p>
   *             </li>
   *          </ul>
   */
  TLSSecurityPolicy?: string;
}

/**
 * @public
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  /**
   * @public
   * <p>he number of Availability Zones that the domain uses. Valid values are 2 and 3. The default is 2.</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * @public
 * <p>details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  /**
   * @public
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * @public
   * <p>Whether to use a dedicated master node for the Elasticsearch domain. A dedicated master node performs cluster management tasks, but doesn't hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * @public
   * <p>The hardware configuration of the computer that hosts the dedicated master node. A sample value is <code>m3.medium.elasticsearch</code>. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   */
  DedicatedMasterType?: string;

  /**
   * @public
   * <p>The number of data nodes to use in the Elasticsearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The instance type for your data nodes. For example, <code>m3.medium.elasticsearch</code>.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  /**
   * @public
   * <p>Whether to enable zone awareness for the Elasticsearch domain. When zone awareness is enabled, OpenSearch allocates the cluster's nodes and replica index shards across Availability Zones in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;
}

/**
 * @public
 * <p>Details about the configuration for encryption at rest.</p>
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  /**
   * @public
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>The log configuration.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  /**
   * @public
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>configures the CloudWatch Logs to publish for the
 *          Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainLogPublishingOptions {
  /**
   * @public
   * <p>Configures the OpenSearch index logs
   *          publishing.</p>
   */
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * @public
   * <p>Configures the OpenSearch search slow log
   *          publishing.</p>
   */
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;

  /**
   * @public
   * <p>The log configuration.</p>
   */
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}

/**
 * @public
 * <p>Details about the configuration for node-to-node encryption.</p>
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * @public
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  /**
   * @public
   * <p>The epoch time when the deployment window closes for required updates. After this time,
   *          Amazon OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * @public
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * @public
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * @public
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * @public
   * <p>The status of the service software update. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_UPDATE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UpdateStatus?: string;
}

/**
 * @public
 * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
 *          domain.</p>
 */
export interface AwsElasticsearchDomainVPCOptions {
  /**
   * @public
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>ID for the VPC.</p>
   */
  VPCId?: string;
}

/**
 * @public
 * <p>Information about an Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainDetails {
  /**
   * @public
   * <p>IAM policy document specifying the access policies for the new Elasticsearch domain.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * @public
   * <p>Unique identifier for an Elasticsearch domain.</p>
   */
  DomainId?: string;

  /**
   * @public
   * <p>Name of an Elasticsearch domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an Amazon Web Services
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Elasticsearch domain.</p>
   *          <p>The endpoint is a service URL. </p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The key-value pair that exists if the Elasticsearch domain uses VPC endpoints.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * @public
   * <p>OpenSearch version.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * @public
   * <p>Information about an OpenSearch cluster configuration.</p>
   */
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;

  /**
   * @public
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * @public
   * <p>Configures the CloudWatch Logs to publish for the Elasticsearch domain.</p>
   */
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;

  /**
   * @public
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * @public
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;

  /**
   * @public
   * <p>Information that OpenSearch derives based on <code>VPCOptions</code> for the
   *          domain.</p>
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}

/**
 * @public
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateAppCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbAppCookieStickinessPolicy {
  /**
   * @public
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;

  /**
   * @public
   * <p>The mnemonic name for the policy being created. The name must be unique within the set
   *          of policies for the load balancer.</p>
   */
  PolicyName?: string;
}

/**
 * @public
 * <p>Contains information about a stickiness policy that was created using
 *             <code>CreateLBCookieStickinessPolicy</code>.</p>
 */
export interface AwsElbLbCookieStickinessPolicy {
  /**
   * @public
   * <p>The amount of time, in seconds, after which the cookie is considered stale. If an
   *          expiration period is not specified, the stickiness session lasts for the duration of the
   *          browser session.</p>
   */
  CookieExpirationPeriod?: number;

  /**
   * @public
   * <p>The name of the policy. The name must be unique within the set of policies for the load
   *          balancer.</p>
   */
  PolicyName?: string;
}

/**
 * @public
 * <p>Contains information about the access log configuration for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAccessLog {
  /**
   * @public
   * <p>The interval in minutes for publishing the access logs.</p>
   *          <p>You can publish access logs either every 5 minutes or every 60 minutes.</p>
   */
  EmitInterval?: number;

  /**
   * @public
   * <p>Indicates whether access logs are enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The name of the S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The logical hierarchy that was created for the S3 bucket.</p>
   *          <p>If a prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

/**
 * @public
 * <p>Provides information about additional attributes for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAdditionalAttribute {
  /**
   * @public
   * <p>The name of the attribute.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains information about the connection draining configuration for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionDraining {
  /**
   * @public
   * <p>Indicates whether connection draining is enabled for the load balancer.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering
   *          the instances.</p>
   */
  Timeout?: number;
}

/**
 * @public
 * <p>Contains connection settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerConnectionSettings {
  /**
   * @public
   * <p>The time, in seconds, that the connection can be idle (no data is sent over the
   *          connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout?: number;
}

/**
 * @public
 * <p>Contains cross-zone load balancing settings for the load balancer.</p>
 */
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  /**
   * @public
   * <p>Indicates whether cross-zone load balancing is enabled for the load balancer.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Contains attributes for the load balancer.</p>
 */
export interface AwsElbLoadBalancerAttributes {
  /**
   * @public
   * <p>Information about the access log configuration for the load balancer.</p>
   *          <p>If the access log is enabled, the load balancer captures detailed information about all
   *          requests. It delivers the information to a specified S3 bucket.</p>
   */
  AccessLog?: AwsElbLoadBalancerAccessLog;

  /**
   * @public
   * <p>Information about the connection draining configuration for the load balancer.</p>
   *          <p>If connection draining is enabled, the load balancer allows existing requests to
   *          complete before it shifts traffic away from a deregistered or unhealthy instance.</p>
   */
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;

  /**
   * @public
   * <p>Connection settings for the load balancer.</p>
   *          <p>If an idle timeout is configured, the load balancer allows connections to remain idle
   *          for the specified duration. When a connection is idle, no data is sent over the
   *          connection.</p>
   */
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;

  /**
   * @public
   * <p>Cross-zone load balancing settings for the load balancer.</p>
   *          <p>If cross-zone load balancing is enabled, the load balancer routes the request traffic
   *          evenly across all instances regardless of the Availability Zones.</p>
   */
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;

  /**
   * @public
   * <p>Any additional attributes for a load balancer.</p>
   */
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[];
}

/**
 * @public
 * <p>Provides information about the configuration of an EC2 instance for the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerBackendServerDescription {
  /**
   * @public
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * @public
   * <p>The names of the policies that are enabled for the EC2 instance.</p>
   */
  PolicyNames?: string[];
}

/**
 * @public
 * <p>Contains information about the health checks that are conducted on the load
 *          balancer.</p>
 */
export interface AwsElbLoadBalancerHealthCheck {
  /**
   * @public
   * <p>The number of consecutive health check successes required before the instance is moved
   *          to the Healthy state.</p>
   */
  HealthyThreshold?: number;

  /**
   * @public
   * <p>The approximate interval, in seconds, between health checks of an individual
   *          instance.</p>
   */
  Interval?: number;

  /**
   * @public
   * <p>The instance that is being checked. The target specifies the protocol and port. The
   *          available protocols are TCP, SSL, HTTP, and HTTPS. The range of valid ports is 1 through
   *          65535.</p>
   *          <p>For the HTTP and HTTPS protocols, the target also specifies the ping path.</p>
   *          <p>For the TCP protocol, the target is specified as <code>TCP:
   *                <i><port></i>
   *             </code>.</p>
   *          <p>For the SSL protocol, the target is specified as
   *                <code>SSL.<i><port></i>
   *             </code>.</p>
   *          <p>For the HTTP and HTTPS protocols, the target is specified as
   *                <code>
   *                <i><protocol></i>:<i><port></i>/<i><path
   *                to ping></i>
   *             </code>.</p>
   */
  Target?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, during which no response means a failed health
   *          check.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The number of consecutive health check failures that must occur before the instance is
   *          moved to the Unhealthy state.</p>
   */
  UnhealthyThreshold?: number;
}

/**
 * @public
 * <p>Provides information about an EC2 instance for a load balancer.</p>
 */
export interface AwsElbLoadBalancerInstance {
  /**
   * @public
   * <p>The instance identifier.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Information about a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListener {
  /**
   * @public
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * @public
   * <p>The protocol to use to route traffic to instances.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  InstanceProtocol?: string;

  /**
   * @public
   * <p>The port on which the load balancer is listening.</p>
   *          <p>On EC2-VPC, you can specify any port from the range 1-65535.</p>
   *          <p>On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587,
   *          1024-65535.</p>
   */
  LoadBalancerPort?: number;

  /**
   * @public
   * <p>The load balancer transport protocol to use for routing.</p>
   *          <p>Valid values: <code>HTTP</code> | <code>HTTPS</code> | <code>TCP</code> |
   *             <code>SSL</code>
   *          </p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The ARN of the server certificate.</p>
   */
  SslCertificateId?: string;
}

/**
 * @public
 * <p>Lists the policies that are enabled for a load balancer listener.</p>
 */
export interface AwsElbLoadBalancerListenerDescription {
  /**
   * @public
   * <p>Information about the listener.</p>
   */
  Listener?: AwsElbLoadBalancerListener;

  /**
   * @public
   * <p>The policies enabled for the listener.</p>
   */
  PolicyNames?: string[];
}

/**
 * @public
 * <p>Contains information about the policies for a load balancer.</p>
 */
export interface AwsElbLoadBalancerPolicies {
  /**
   * @public
   * <p>The stickiness policies that are created using
   *             <code>CreateAppCookieStickinessPolicy</code>.</p>
   */
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  /**
   * @public
   * <p>The stickiness policies that are created using
   *             <code>CreateLBCookieStickinessPolicy</code>.</p>
   */
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  /**
   * @public
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: string[];
}

/**
 * @public
 * <p>Contains information about the security group for the load balancer.</p>
 */
export interface AwsElbLoadBalancerSourceSecurityGroup {
  /**
   * @public
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The owner of the security group.</p>
   */
  OwnerAlias?: string;
}

/**
 * @public
 * <p>Contains details about a Classic Load Balancer.</p>
 */
export interface AwsElbLoadBalancerDetails {
  /**
   * @public
   * <p>The list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Information about the configuration of the EC2 instances.</p>
   */
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  /**
   * @public
   * <p>The name of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneName?: string;

  /**
   * @public
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneNameID?: string;

  /**
   * @public
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The DNS name of the load balancer.</p>
   */
  DnsName?: string;

  /**
   * @public
   * <p>Information about the health checks that are conducted on the load balancer.</p>
   */
  HealthCheck?: AwsElbLoadBalancerHealthCheck;

  /**
   * @public
   * <p>List of EC2 instances for the load balancer.</p>
   */
  Instances?: AwsElbLoadBalancerInstance[];

  /**
   * @public
   * <p>The policies that are enabled for the load balancer listeners.</p>
   */
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  /**
   * @public
   * <p>The attributes for a load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  /**
   * @public
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * @public
   * <p>The policies for a load balancer.</p>
   */
  Policies?: AwsElbLoadBalancerPolicies;

  /**
   * @public
   * <p>The type of load balancer. Only provided if the load balancer is in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public
   *          DNS name that resolves to a public IP address.</p>
   *          <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name
   *          that resolves to a private IP address.</p>
   */
  Scheme?: string;

  /**
   * @public
   * <p>The security groups for the load balancer. Only provided if the load balancer is in a
   *          VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Information about the security group for the load balancer. This is the security group
   *          that is used for inbound rules.</p>
   */
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  /**
   * @public
   * <p>The list of subnet identifiers for the load balancer.</p>
   */
  Subnets?: string[];

  /**
   * @public
   * <p>The identifier of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>A load balancer attribute.</p>
 */
export interface AwsElbv2LoadBalancerAttribute {
  /**
   * @public
   * <p>The name of the load balancer attribute.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the load balancer attribute.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  /**
   * @public
   * <p>The state code. The initial state of the load balancer is provisioning.</p>
   *          <p>After the load balancer is fully set up and ready to route traffic, its state is
   *          active.</p>
   *          <p>If the load balancer could not be set up, its state is failed. </p>
   */
  Code?: string;

  /**
   * @public
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

/**
 * @public
 * <p>Information about a load balancer.</p>
 */
export interface AwsElbv2LoadBalancerDetails {
  /**
   * @public
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * @public
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * @public
   * <p>Indicates when the load balancer was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * @public
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *          are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *          addresses).</p>
   */
  IpAddressType?: string;

  /**
   * @public
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   */
  Scheme?: string;

  /**
   * @public
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * @public
   * <p>The type of load balancer.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Attributes of the load balancer.</p>
   */
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
}

/**
 * @public
 * <p>
 *             A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for
 *             schemas. They collect and organize schemas so that your schemas are in logical groups.
 *         </p>
 */
export interface AwsEventSchemasRegistryDetails {
  /**
   * @public
   * <p>
   *             A description of the registry to be created.
   *         </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the registry.
   *         </p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>
   *             The name of the schema registry.
   *         </p>
   */
  RegistryName?: string;
}

/**
 * @public
 * <p>
 *             Provides details about the Amazon EventBridge event buses that the endpoint is associated with.</p>
 */
export interface AwsEventsEndpointEventBusesDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the event bus that the endpoint is associated with.</p>
   */
  EventBusArn?: string;
}

/**
 * @public
 * <p>
 *             Indicates whether replication is enabled or disabled for the endpoint. If enabled, the endpoint can replicate all
 *             events to a secondary Amazon Web Services Region.</p>
 */
export interface AwsEventsEndpointReplicationConfigDetails {
  /**
   * @public
   * <p>
   *             The state of event replication.</p>
   */
  State?: string;
}

/**
 * @public
 * <p>
 *             Provides details about the primary Amazon Web Services Region of the endpoint.</p>
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the health check used by the endpoint to determine whether failover is triggered.</p>
   */
  HealthCheck?: string;
}

/**
 * @public
 * <p>
 *             The Amazon Web Services Region that events are routed to when failover is triggered or event replication is enabled.</p>
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  /**
   * @public
   * <p>
   *             Defines the secondary Region.</p>
   */
  Route?: string;
}

/**
 * @public
 * <p>
 *             The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
 */
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  /**
   * @public
   * <p>
   *             The main Region of the endpoint.</p>
   */
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails;

  /**
   * @public
   * <p>
   *             The Region that events are routed to when failover is triggered or event replication is enabled.</p>
   */
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails;
}

/**
 * @public
 * <p>
 *             Provides details about the routing configuration of the endpoint.</p>
 */
export interface AwsEventsEndpointRoutingConfigDetails {
  /**
   * @public
   * <p>
   *             The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
   */
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails;
}

/**
 * @public
 * <p>
 *             Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s
 *             availability by making it Regional-fault tolerant.
 *         </p>
 */
export interface AwsEventsEndpointDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the endpoint.
   *         </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *             A description of the endpoint.
   *         </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *             The URL subdomain of the endpoint. For example, if <code>EndpointUrl</code> is
   *             <code>https://abcde.veo.endpoints.event.amazonaws.com</code>, then the <code>EndpointId</code> is <code>abcde.veo</code>.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>
   *             The URL of the endpoint.</p>
   */
  EndpointUrl?: string;

  /**
   * @public
   * <p>
   *             The event buses being used by the endpoint.</p>
   */
  EventBuses?: AwsEventsEndpointEventBusesDetails[];

  /**
   * @public
   * <p>
   *             The name of the endpoint.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             Whether event replication was enabled or disabled for this endpoint. The default state is <code>ENABLED</code>, which
   *             means you must supply a <code>RoleArn</code>. If you don't have a <code>RoleArn</code> or you don't want event
   *             replication enabled, set the state to <code>DISABLED</code>.</p>
   */
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails;

  /**
   * @public
   * <p>
   *             The ARN of the role used by event replication for the endpoint.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>
   *             The routing configuration of the endpoint.</p>
   */
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails;

  /**
   * @public
   * <p>
   *             The current state of the endpoint.</p>
   */
  State?: string;

  /**
   * @public
   * <p>
   *             The reason the endpoint is in its current state.</p>
   */
  StateReason?: string;
}

/**
 * @public
 * <p>
 *             Provides details about Amazon EventBridge event bus. An event bus is a router that receives events and delivers
 *             them to zero or more destinations, or targets. This can be a custom event bus which you can use to receive events
 *             from your custom applications and services, or it can be a partner event bus which can be matched to a partner event
 *             source.</p>
 */
export interface AwsEventsEventbusDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>
   *             The name of the event bus.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             The policy that enables the external account to send events to your account.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of CloudTrail as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  /**
   * @public
   * <p>
   *             Specifies whether CloudTrail is activated as a data source for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of DNS logs as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  /**
   * @public
   * <p>
   *             Describes whether DNS logs is enabled as a data source for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of VPC Flow Logs as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  /**
   * @public
   * <p>
   *             Describes whether VPC Flow Logs are activated as a data source for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of Kubernetes audit logs as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  /**
   * @public
   * <p>
   *             Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of Kubernetes data sources for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  /**
   * @public
   * <p>
   *             Describes whether Kubernetes audit logs are activated as a data source for the detector.
   *         </p>
   */
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails;
}

/**
 * @public
 * <p>
 *             Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  /**
   * @public
   * <p>
   *             Specifies the reason why scanning EBS volumes (Malware Protection) isn’t activated as a data source.
   *         </p>
   */
  Reason?: string;

  /**
   * @public
   * <p>
   *             Describes whether scanning EBS volumes is activated as a data source for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             Describes the configuration of Malware Protection for EC2 instances with findings.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  /**
   * @public
   * <p>
   *             Describes the configuration of scanning EBS volumes (Malware Protection) as a data source.
   *         </p>
   */
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of Malware Protection as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  /**
   * @public
   * <p>
   *             Describes the configuration of Malware Protection for EC2 instances with findings.
   *         </p>
   */
  ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails;

  /**
   * @public
   * <p>
   *             The GuardDuty Malware Protection service role.
   *         </p>
   */
  ServiceRole?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information on the status of S3 data event logs as a data source for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  /**
   * @public
   * <p>
   *             A value that describes whether S3 data event logs are automatically enabled for new members of an organization.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             Describes which data sources are activated for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorDataSourcesDetails {
  /**
   * @public
   * <p>
   *             An object that contains information on the status of CloudTrail as a data source for the detector.
   *         </p>
   */
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails;

  /**
   * @public
   * <p>
   *             An object that contains information on the status of DNS logs as a data source for the detector.
   *         </p>
   */
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails;

  /**
   * @public
   * <p>
   *             An object that contains information on the status of VPC Flow Logs as a data source for the detector.
   *         </p>
   */
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails;

  /**
   * @public
   * <p>
   *             An object that contains information on the status of Kubernetes data sources for the detector.
   *         </p>
   */
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails;

  /**
   * @public
   * <p>
   *             An object that contains information on the status of Malware Protection as a data source for the detector.
   *         </p>
   */
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails;

  /**
   * @public
   * <p>
   *             An object that contains information on the status of S3 Data event logs as a data source for the detector.
   *         </p>
   */
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails;
}

/**
 * @public
 * <p>
 *             Describes which features are activated for the detector.
 *         </p>
 */
export interface AwsGuardDutyDetectorFeaturesDetails {
  /**
   * @public
   * <p>
   *             Indicates the name of the feature that is activated for the detector.
   *         </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             Indicates the status of the feature that is activated for the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>
 *             Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
 *         </p>
 */
export interface AwsGuardDutyDetectorDetails {
  /**
   * @public
   * <p>
   *             Describes which data sources are activated for the detector.
   *         </p>
   */
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails;

  /**
   * @public
   * <p>
   *             Describes which features are activated for the detector.
   *         </p>
   */
  Features?: AwsGuardDutyDetectorFeaturesDetails[];

  /**
   * @public
   * <p>
   *             The publishing frequency of the finding.
   *         </p>
   */
  FindingPublishingFrequency?: string;

  /**
   * @public
   * <p>
   *             The GuardDuty service role.
   *         </p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>
   *             The activation status of the detector.
   *         </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Attributes of the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContextAttributes {
  /**
   * @public
   * <p>Indicates whether the session used multi-factor authentication (MFA).</p>
   */
  MfaAuthenticated?: boolean;

  /**
   * @public
   * <p>Indicates when the session was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: string;
}

/**
 * @public
 * <p>Information about the entity that created the session.</p>
 */
export interface AwsIamAccessKeySessionContextSessionIssuer {
  /**
   * @public
   * <p>The type of principal (user, role, or group) that created the session.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The principal ID of the principal (user, role, or group) that created the
   *          session.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The ARN of the session.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services account that created the session.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The name of the principal that created the session.</p>
   */
  UserName?: string;
}

/**
 * @public
 * <p>Provides information about the session that the key was used for.</p>
 */
export interface AwsIamAccessKeySessionContext {
  /**
   * @public
   * <p>Attributes of the session that the key was used for.</p>
   */
  Attributes?: AwsIamAccessKeySessionContextAttributes;

  /**
   * @public
   * <p>Information about the entity that created the session.</p>
   */
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}

/**
 * @public
 * @enum
 */
export const AwsIamAccessKeyStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type AwsIamAccessKeyStatus = (typeof AwsIamAccessKeyStatus)[keyof typeof AwsIamAccessKeyStatus];

/**
 * @public
 * <p>IAM access key details related to a finding.</p>
 */
export interface AwsIamAccessKeyDetails {
  /**
   * @public
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the
   *             <code>PrincipalName</code> parameter because access keys can also be assigned to
   *          principals that are not IAM users.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: AwsIamAccessKeyStatus;

  /**
   * @public
   * <p>Indicates when the IAM access key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The ID of the principal associated with an access key.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The type of principal associated with an access key.</p>
   */
  PrincipalType?: string;

  /**
   * @public
   * <p>The name of the principal.</p>
   */
  PrincipalName?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account for the key.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The identifier of the access key.</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>Information about the session that the key was used for.</p>
   */
  SessionContext?: AwsIamAccessKeySessionContext;
}

/**
 * @public
 * <p>A managed policy that is attached to an IAM principal.</p>
 */
export interface AwsIamAttachedManagedPolicy {
  /**
   * @public
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * @public
   * <p>The ARN of the policy.</p>
   */
  PolicyArn?: string;
}

/**
 * @public
 * <p>A managed policy that is attached to the IAM group.</p>
 */
export interface AwsIamGroupPolicy {
  /**
   * @public
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

/**
 * @public
 * <p>Contains details about an IAM group.</p>
 */
export interface AwsIamGroupDetails {
  /**
   * @public
   * <p>A list of the managed policies that are attached to the IAM group.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @public
   * <p>Indicates when the IAM group was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>The identifier of the IAM group.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The name of the IAM group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The list of inline policies that are embedded in the group.</p>
   */
  GroupPolicyList?: AwsIamGroupPolicy[];

  /**
   * @public
   * <p>The path to the group.</p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Information about a role associated with an instance profile.</p>
 */
export interface AwsIamInstanceProfileRole {
  /**
   * @public
   * <p>The ARN of the role.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * @public
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The identifier of the role.</p>
   */
  RoleId?: string;

  /**
   * @public
   * <p>The name of the role.</p>
   */
  RoleName?: string;
}

/**
 * @public
 * <p>Information about an instance profile.</p>
 */
export interface AwsIamInstanceProfile {
  /**
   * @public
   * <p>The ARN of the instance profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Indicates when the instance profile was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>The identifier of the instance profile.</p>
   */
  InstanceProfileId?: string;

  /**
   * @public
   * <p>The name of the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>The path to the instance profile.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The roles associated with the instance profile.</p>
   */
  Roles?: AwsIamInstanceProfileRole[];
}

/**
 * @public
 * <p>Information about the policy used to set the permissions boundary for an IAM
 *          principal.</p>
 */
export interface AwsIamPermissionsBoundary {
  /**
   * @public
   * <p>The ARN of the policy used to set the permissions boundary.</p>
   */
  PermissionsBoundaryArn?: string;

  /**
   * @public
   * <p>The usage type for the permissions boundary.</p>
   */
  PermissionsBoundaryType?: string;
}

/**
 * @public
 * <p>A version of an IAM policy.</p>
 */
export interface AwsIamPolicyVersion {
  /**
   * @public
   * <p>The identifier of the policy version.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Whether the version is the default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * @public
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;
}

/**
 * @public
 * <p>Represents an IAM permissions policy.</p>
 */
export interface AwsIamPolicyDetails {
  /**
   * @public
   * <p>The number of users, groups, and roles that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * @public
   * <p>When the policy was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>The identifier of the default version of the policy.</p>
   */
  DefaultVersionId?: string;

  /**
   * @public
   * <p>A description of the policy.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Whether the policy can be attached to a user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * @public
   * <p>The path to the policy.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The number of users and roles that use the policy to set the permissions
   *          boundary.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * @public
   * <p>The unique identifier of the policy.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * @public
   * <p>List of versions of the policy.</p>
   */
  PolicyVersionList?: AwsIamPolicyVersion[];

  /**
   * @public
   * <p>When the policy was most recently updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdateDate?: string;
}

/**
 * @public
 * <p>An inline policy that is embedded in the role.</p>
 */
export interface AwsIamRolePolicy {
  /**
   * @public
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

/**
 * @public
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 */
export interface AwsIamRoleDetails {
  /**
   * @public
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * @public
   * <p>The list of the managed policies that are attached to the role.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @public
   * <p>Indicates when the role was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>The list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: AwsIamInstanceProfile[];

  /**
   * @public
   * <p>Information about the policy used to set the permissions boundary for an IAM
   *          principal.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * @public
   * <p>The stable and unique string identifying the role.</p>
   */
  RoleId?: string;

  /**
   * @public
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The list of inline policies that are embedded in the role.</p>
   */
  RolePolicyList?: AwsIamRolePolicy[];

  /**
   * @public
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

  /**
   * @public
   * <p>The path to the role.</p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Information about an inline policy that is embedded in the user.</p>
 */
export interface AwsIamUserPolicy {
  /**
   * @public
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;
}

/**
 * @public
 * <p>Information about an IAM user.</p>
 */
export interface AwsIamUserDetails {
  /**
   * @public
   * <p>A list of the managed policies that are attached to the user.</p>
   */
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  /**
   * @public
   * <p>Indicates when the user was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreateDate?: string;

  /**
   * @public
   * <p>A list of IAM groups that the user belongs to.</p>
   */
  GroupList?: string[];

  /**
   * @public
   * <p>The path to the user.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The permissions boundary for the user.</p>
   */
  PermissionsBoundary?: AwsIamPermissionsBoundary;

  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The list of inline policies that are embedded in the user.</p>
   */
  UserPolicyList?: AwsIamUserPolicy[];
}

/**
 * @public
 * <p>Provides information about stream encryption.
 *       </p>
 */
export interface AwsKinesisStreamStreamEncryptionDetails {
  /**
   * @public
   * <p>The encryption type to use.
   *       </p>
   */
  EncryptionType?: string;

  /**
   * @public
   * <p>The globally unique identifier for the customer-managed KMS key to use for encryption. </p>
   */
  KeyId?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon Kinesis data stream.
 *       </p>
 */
export interface AwsKinesisStreamDetails {
  /**
   * @public
   * <p>The name of the Kinesis stream. If you don't specify a name, CloudFront generates a unique
   * physical ID and uses that ID for the stream name.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.
   *       </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>When specified, enables or updates server-side encryption using an KMS key for a specified stream.
   * Removing this property from your stack template and updating your stack disables encryption.
   *       </p>
   */
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;

  /**
   * @public
   * <p>The number of shards that the stream uses.
   *       </p>
   */
  ShardCount?: number;

  /**
   * @public
   * <p>The number of hours for the data records that are stored in shards to remain accessible.
   *       </p>
   */
  RetentionPeriodHours?: number;
}

/**
 * @public
 * <p>Contains metadata about an KMS key.</p>
 */
export interface AwsKmsKeyDetails {
  /**
   * @public
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   */
  AWSAccountId?: string;

  /**
   * @public
   * <p>Indicates when the KMS key was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreationDate?: number;

  /**
   * @public
   * <p>The globally unique identifier for the KMS key.</p>
   */
  KeyId?: string;

  /**
   * @public
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed.</p>
   */
  KeyManager?: string;

  /**
   * @public
   * <p>The state of the KMS key. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Disabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingDeletion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingImport</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KeyState?: string;

  /**
   * @public
   * <p>The source of the KMS key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the KMS key lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * @public
   * <p>A description of the KMS key.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Whether the key has key rotation enabled.</p>
   */
  KeyRotationStatus?: boolean;
}

/**
 * @public
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface AwsLambdaFunctionCode {
  /**
   * @public
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   */
  S3Bucket?: string;

  /**
   * @public
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * @public
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * @public
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;
}

/**
 * @public
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  /**
   * @public
   * <p>The ARN of an SQS queue or SNS topic.</p>
   */
  TargetArn?: string;
}

/**
 * @public
 * <p>Error messages for environment variables that could not be applied.</p>
 */
export interface AwsLambdaFunctionEnvironmentError {
  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  /**
   * @public
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: Record<string, string>;

  /**
   * @public
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;
}

/**
 * @public
 * <p>An Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  /**
   * @public
   * <p>The ARN of the function layer.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

/**
 * @public
 * <p>The function's X-Ray tracing configuration.</p>
 */
export interface AwsLambdaFunctionTracingConfig {
  /**
   * @public
   * <p>The tracing mode.</p>
   */
  Mode?: string;
}

/**
 * @public
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface AwsLambdaFunctionVpcConfig {
  /**
   * @public
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Details about an Lambda function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  /**
   * @public
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * @public
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * @public
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * @public
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * @public
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * @public
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * @public
   * <p>The KMS key that is used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed customer managed key.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>Indicates when the function was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * @public
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * @public
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * @public
   * <p>The memory that is allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * @public
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * @public
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * @public
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The function's X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * @public
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * @public
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The instruction set architecture that the function uses. Valid values are <code>x86_64</code> or
   * <code>arm64</code>.</p>
   */
  Architectures?: string[];

  /**
   * @public
   * <p>The type of deployment package that's used to deploy the function code to Lambda. Set to <code>Image</code> for a container image and <code>Zip</code>  for a .zip file archive.
   *       </p>
   */
  PackageType?: string;
}

/**
 * @public
 * <p>Details about a Lambda layer version.</p>
 */
export interface AwsLambdaLayerVersionDetails {
  /**
   * @public
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The layer's compatible runtimes. Maximum number of five items.</p>
   *          <p>Valid values: <code>nodejs10.x</code> | <code>nodejs12.x</code> | <code>java8</code> |
   *             <code>java11</code> | <code>python2.7</code> | <code>python3.6</code> |
   *             <code>python3.7</code> | <code>python3.8</code> | <code>dotnetcore1.0</code> |
   *             <code>dotnetcore2.1</code> | <code>go1.x</code> | <code>ruby2.5</code> |
   *             <code>provided</code>
   *          </p>
   */
  CompatibleRuntimes?: string[];

  /**
   * @public
   * <p>Indicates when the version was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedDate?: string;
}

/**
 * @public
 * <p>
 *             Details for SASL/IAM client authentication.</p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  /**
   * @public
   * <p>
   *             Indicates whether SASL/IAM authentication is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *             Details for SASL/SCRAM client authentication.</p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  /**
   * @public
   * <p>
   *             Indicates whether SASL/SCRAM authentication is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *             Provides details for client authentication using SASL.</p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  /**
   * @public
   * <p>
   *             Provides details for SASL client authentication using IAM. </p>
   */
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails;

  /**
   * @public
   * <p>
   *             Details for SASL client authentication using SCRAM.</p>
   */
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails;
}

/**
 * @public
 * <p>
 *             Provides details for client authentication using TLS.</p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  /**
   * @public
   * <p>
   *             List of Amazon Web Services Private CA Amazon Resource Names (ARNs). Amazon Web Services Private CA enables creation of
   * private certificate authority (CA) hierarchies, including root and subordinate CAs, without the investment and maintenance costs
   * of operating an on-premises CA.</p>
   */
  CertificateAuthorityArnList?: string[];

  /**
   * @public
   * <p>
   *             Indicates whether TLS authentication is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *             Provides details for allowing no client authentication.
 *         </p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  /**
   * @public
   * <p>
   *             Indicates whether unauthenticated is allowed or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *             Provides details about different modes of client authentication.</p>
 */
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  /**
   * @public
   * <p>
   *             Provides details for client authentication using SASL.</p>
   */
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails;

  /**
   * @public
   * <p>
   *             Provides details for allowing no client authentication.</p>
   */
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails;

  /**
   * @public
   * <p>
   *             Provides details for client authentication using TLS.</p>
   */
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails;
}

/**
 * @public
 * <p>
 *             The data-volume encryption details. You can't update encryption at rest settings for existing clusters.</p>
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the KMS key for encrypting data at rest. If you don't specify a
   * KMS key, MSK creates one for you and uses it.</p>
   */
  DataVolumeKMSKeyId?: string;
}

/**
 * @public
 * <p>
 *             The settings for encrypting data in transit.</p>
 */
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  /**
   * @public
   * <p>
   *             When set to <code>true</code>, it indicates that data communication among the broker nodes of the cluster is
   *             encrypted. When set to <code>false</code>, the communication happens in plain text. The default value is
   *             <code>true</code>.</p>
   */
  InCluster?: boolean;

  /**
   * @public
   * <p>
   *             Indicates the encryption setting for data in transit between clients and brokers.</p>
   */
  ClientBroker?: string;
}

/**
 * @public
 * <p>
 *             Includes encryption-related information, such as the KMS key used for encrypting data at rest and
 * whether you want MSK to encrypt your data in transit.</p>
 */
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  /**
   * @public
   * <p>
   *             The settings for encrypting data in transit.</p>
   */
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails;

  /**
   * @public
   * <p>
   *             The data-volume encryption details. You can't update encryption at rest settings for existing clusters.</p>
   */
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails;
}

/**
 * @public
 * <p>
 *             Provide details about an Amazon MSK cluster.</p>
 */
export interface AwsMskClusterClusterInfoDetails {
  /**
   * @public
   * <p>
   *             Includes encryption-related information, such as the KMS key used for encrypting data at rest and
   * whether you want Amazon MSK to encrypt your data in transit.</p>
   */
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails;

  /**
   * @public
   * <p>
   *             The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>
   *             The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * @public
   * <p>
   *             The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>
   *             Provides information for different modes of client authentication.</p>
   */
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails;
}

/**
 * @public
 * <p>
 *             Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.
 *         </p>
 */
export interface AwsMskClusterDetails {
  /**
   * @public
   * <p>
   *             Provides information about a cluster.</p>
   */
  ClusterInfo?: AwsMskClusterClusterInfoDetails;
}

/**
 * @public
 * <p>A public subnet that Network Firewall uses for the firewall.</p>
 */
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  /**
   * @public
   * <p>The identifier of the subnet</p>
   */
  SubnetId?: string;
}

/**
 * @public
 * <p>Details about an Network Firewall firewall.</p>
 */
export interface AwsNetworkFirewallFirewallDetails {
  /**
   * @public
   * <p>Whether the firewall is protected from deletion. If set to <code>true</code>, then the firewall cannot be deleted.</p>
   */
  DeleteProtection?: boolean;

  /**
   * @public
   * <p>A description of the firewall.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the firewall.</p>
   */
  FirewallArn?: string;

  /**
   * @public
   * <p>The identifier of the firewall.</p>
   */
  FirewallId?: string;

  /**
   * @public
   * <p>A descriptive name of the firewall.</p>
   */
  FirewallName?: string;

  /**
   * @public
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * @public
   * <p>Whether the firewall is protected from a change to the firewall policy. If set to <code>true</code>, you cannot associate a different policy with the firewall.</p>
   */
  FirewallPolicyChangeProtection?: boolean;

  /**
   * @public
   * <p>Whether the firewall is protected from a change to the subnet associations. If set to <code>true</code>, you cannot map different subnets to the firewall.</p>
   */
  SubnetChangeProtection?: boolean;

  /**
   * @public
   * <p>The public subnets that Network Firewall uses for the firewall. Each subnet must belong to a different Availability Zone.</p>
   */
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];

  /**
   * @public
   * <p>The identifier of the VPC where the firewall is used.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>A stateful rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  /**
   * @public
   * <p>The ARN of the stateful rule group.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 * <p>Defines a CloudWatch dimension value to publish.</p>
 */
export interface StatelessCustomPublishMetricActionDimension {
  /**
   * @public
   * <p>The value to use for the custom metric dimension.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about metrics to publish to CloudWatch.</p>
 */
export interface StatelessCustomPublishMetricAction {
  /**
   * @public
   * <p>Defines CloudWatch dimension values to publish.</p>
   */
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}

/**
 * @public
 * <p>The definition of a custom action that can be used for stateless packet handling.</p>
 */
export interface StatelessCustomActionDefinition {
  /**
   * @public
   * <p>Information about metrics to publish to CloudWatch.</p>
   */
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}

/**
 * @public
 * <p>A custom action that can be used for stateless packet handling.</p>
 */
export interface FirewallPolicyStatelessCustomActionsDetails {
  /**
   * @public
   * <p>The definition of the custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * @public
   * <p>The name of the custom action.</p>
   */
  ActionName?: string;
}

/**
 * @public
 * <p>A stateless rule group that is used by the firewall policy.</p>
 */
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  /**
   * @public
   * <p>The order in which to run the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The ARN of the stateless rule group.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 * <p>Defines the behavior of the firewall.</p>
 */
export interface FirewallPolicyDetails {
  /**
   * @public
   * <p>The stateful rule groups that are used in the firewall policy.</p>
   */
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];

  /**
   * @public
   * <p>The custom action definitions that are available to use in the firewall policy's <code>StatelessDefaultActions</code> setting.</p>
   */
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];

  /**
   * @public
   * <p>The actions to take on a packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * @public
   * <p>The actions to take on a fragmented UDP packet if it doesn't match any of the stateless rules in the policy.</p>
   *          <p>You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, <code>aws:forward_to_sfe</code>), and can optionally include a custom action from <code>StatelessCustomActions</code>.
   *       </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * @public
   * <p>The stateless rule groups that are used in the firewall policy.</p>
   */
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}

/**
 * @public
 * <p>Details about a firewall policy. A firewall policy defines the behavior of a network firewall.</p>
 */
export interface AwsNetworkFirewallFirewallPolicyDetails {
  /**
   * @public
   * <p>The firewall policy configuration.</p>
   */
  FirewallPolicy?: FirewallPolicyDetails;

  /**
   * @public
   * <p>The ARN of the firewall policy.</p>
   */
  FirewallPolicyArn?: string;

  /**
   * @public
   * <p>The identifier of the firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * @public
   * <p>The name of the firewall policy.</p>
   */
  FirewallPolicyName?: string;

  /**
   * @public
   * <p>A description of the firewall policy.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Stateful inspection criteria for a domain list rule group.</p>
 */
export interface RuleGroupSourceListDetails {
  /**
   * @public
   * <p>Indicates whether to allow or deny access to the domains listed in <code>Targets</code>.</p>
   */
  GeneratedRulesType?: string;

  /**
   * @public
   * <p>The protocols that you want to inspect. Specify <code>LS_SNI</code> for HTTPS. Specify <code>HTTP_HOST</code> for HTTP. You can specify either or both.</p>
   */
  TargetTypes?: string[];

  /**
   * @public
   * <p>The domains that you want to inspect for in your traffic flows. You can provide full domain names, or use the '.' prefix as a wildcard. For example, <code>.example.com</code> matches all domains that end with <code>example.com</code>.</p>
   */
  Targets?: string[];
}

/**
 * @public
 * <p>The inspection criteria for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  /**
   * @public
   * <p>The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The destination port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  DestinationPort?: string;

  /**
   * @public
   * <p>The direction of traffic flow to inspect. If set to <code>ANY</code>, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to <code>FORWARD</code>, the inspection only matches traffic going from the source to the destination.</p>
   */
  Direction?: string;

  /**
   * @public
   * <p>The protocol to inspect for. To inspector for all protocols, use <code>IP</code>.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify <code>ANY</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The source port to inspect for. You can specify an individual port, such as <code>1994</code>. You also can specify a port range, such as <code>1990:1994</code>. To match with any port, specify <code>ANY</code>.</p>
   */
  SourcePort?: string;
}

/**
 * @public
 * <p>A rule option for a stateful rule.</p>
 */
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  /**
   * @public
   * <p>A keyword to look for.</p>
   */
  Keyword?: string;

  /**
   * @public
   * <p>A list of settings.</p>
   */
  Settings?: string[];
}

/**
 * @public
 * <p>A Suricata rule specification.</p>
 */
export interface RuleGroupSourceStatefulRulesDetails {
  /**
   * @public
   * <p>Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The stateful inspection criteria for the rule.</p>
   */
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;

  /**
   * @public
   * <p>Additional options for the rule.</p>
   */
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}

/**
 * @public
 * <p>A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.</p>
 */
export interface RuleGroupSourceCustomActionsDetails {
  /**
   * @public
   * <p>The definition of a custom action.</p>
   */
  ActionDefinition?: StatelessCustomActionDefinition;

  /**
   * @public
   * <p>A descriptive name of the custom action.</p>
   */
  ActionName?: string;
}

/**
 * @public
 * <p>A port range to specify the destination ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  /**
   * @public
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * <p>A destination IP address or range.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  /**
   * @public
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

/**
 * @public
 * <p>A port range to specify the source ports to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  /**
   * @public
   * <p>The starting port value for the port range.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The ending port value for the port range.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * <p>A source IP addresses and address range to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  /**
   * @public
   * <p>An IP address or a block of IP addresses.</p>
   */
  AddressDefinition?: string;
}

/**
 * @public
 * <p>A set of TCP flags and masks to inspect for.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  /**
   * @public
   * <p>Defines the flags from the <code>Masks</code> setting that must be set in order for the packet to match. Flags that are listed must be set. Flags that are not listed must not be set.</p>
   */
  Flags?: string[];

  /**
   * @public
   * <p>The set of flags to consider in the inspection. If not specified, then all flags are inspected.</p>
   */
  Masks?: string[];
}

/**
 * @public
 * <p>Criteria for the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  /**
   * @public
   * <p>A list of port ranges to specify the destination ports to inspect for.</p>
   */
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];

  /**
   * @public
   * <p>The destination IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];

  /**
   * @public
   * <p>The protocols to inspect for.</p>
   */
  Protocols?: number[];

  /**
   * @public
   * <p>A list of port ranges to specify the source ports to inspect for.</p>
   */
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];

  /**
   * @public
   * <p>The source IP addresses and address ranges to inspect for, in CIDR notation.</p>
   */
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];

  /**
   * @public
   * <p>The TCP flags and masks to inspect for.</p>
   */
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}

/**
 * @public
 * <p>The definition of the stateless rule.</p>
 */
export interface RuleGroupSourceStatelessRuleDefinition {
  /**
   * @public
   * <p>The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action (<code>aws:pass</code>, <code>aws:drop</code>, or <code>aws:forward_to_sfe</code>). You can then add custom actions.</p>
   */
  Actions?: string[];

  /**
   * @public
   * <p>The criteria for Network Firewall to use to inspect an individual packet in a stateless rule inspection.</p>
   */
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}

/**
 * @public
 * <p>A stateless rule in the rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesDetails {
  /**
   * @public
   * <p>Indicates the order in which to run this rule relative to all of the rules in the stateless rule group.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>Provides the definition of the stateless rule.</p>
   */
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}

/**
 * @public
 * <p>Stateless rules and custom actions for a stateless rule group.</p>
 */
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  /**
   * @public
   * <p>Custom actions for the rule group.</p>
   */
  CustomActions?: RuleGroupSourceCustomActionsDetails[];

  /**
   * @public
   * <p>Stateless rules for the rule group.</p>
   */
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}

/**
 * @public
 * <p>The rules and actions for the rule group.</p>
 */
export interface RuleGroupSource {
  /**
   * @public
   * <p>Stateful inspection criteria for a domain list rule group. A domain list rule group determines access by specific protocols to specific domains.</p>
   */
  RulesSourceList?: RuleGroupSourceListDetails;

  /**
   * @public
   * <p>Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules.</p>
   */
  RulesString?: string;

  /**
   * @public
   * <p>Suricata rule specifications.</p>
   */
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];

  /**
   * @public
   * <p>The stateless rules and custom actions used by a stateless rule group.</p>
   */
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}

/**
 * @public
 * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
 */
export interface RuleGroupVariablesIpSetsDetails {
  /**
   * @public
   * <p>The list of IP addresses and ranges.</p>
   */
  Definition?: string[];
}

/**
 * @public
 * <p>A list of port ranges.</p>
 */
export interface RuleGroupVariablesPortSetsDetails {
  /**
   * @public
   * <p>The list of port ranges.</p>
   */
  Definition?: string[];
}

/**
 * @public
 * <p>Additional settings to use in the specified rules.</p>
 */
export interface RuleGroupVariables {
  /**
   * @public
   * <p>A list of IP addresses and address ranges, in CIDR notation.</p>
   */
  IpSets?: RuleGroupVariablesIpSetsDetails;

  /**
   * @public
   * <p>A list of port ranges.</p>
   */
  PortSets?: RuleGroupVariablesPortSetsDetails;
}

/**
 * @public
 * <p>Details about the rule group.</p>
 */
export interface RuleGroupDetails {
  /**
   * @public
   * <p>Additional settings to use in the specified rules.</p>
   */
  RuleVariables?: RuleGroupVariables;

  /**
   * @public
   * <p>The rules and actions for the rule group.</p>
   *          <p>For stateful rule groups, can contain <code>RulesString</code>, <code>RulesSourceList</code>, or <code>StatefulRules</code>.</p>
   *          <p>For stateless rule groups, contains <code>StatelessRulesAndCustomActions</code>.</p>
   */
  RulesSource?: RuleGroupSource;
}

/**
 * @public
 * <p>Details about an Network Firewall rule group. Rule groups are used to inspect and control network traffic. Stateless rule groups apply to individual packets. Stateful rule groups apply to packets in the context of their traffic flow.</p>
 *          <p>Rule groups are referenced in firewall policies.
 *       </p>
 */
export interface AwsNetworkFirewallRuleGroupDetails {
  /**
   * @public
   * <p>The maximum number of operating resources that this rule group can use.</p>
   */
  Capacity?: number;

  /**
   * @public
   * <p>A description of the rule group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Details about the rule group.</p>
   */
  RuleGroup?: RuleGroupDetails;

  /**
   * @public
   * <p>The ARN of the rule group.</p>
   */
  RuleGroupArn?: string;

  /**
   * @public
   * <p>The identifier of the rule group.</p>
   */
  RuleGroupId?: string;

  /**
   * @public
   * <p>The descriptive name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * @public
   * <p>The type of rule group. A rule group can be stateful or stateless.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Specifies information about the master user of the domain.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the master user.
   *       </p>
   */
  MasterUserArn?: string;

  /**
   * @public
   * <p>The username for the master user.
   *       </p>
   */
  MasterUserName?: string;

  /**
   * @public
   * <p>The password for the master user.
   *       </p>
   */
  MasterUserPassword?: string;
}

/**
 * @public
 * <p>Provides information about domain access control options.
 *       </p>
 */
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  /**
   * @public
   * <p>Enables fine-grained access control.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Enables the internal user database.
   *       </p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * @public
   * <p>Specifies information about the master user of the domain.
   *       </p>
   */
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}

/**
 * @public
 * <p>Configuration options for zone awareness.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  /**
   * @public
   * <p>The number of Availability Zones that the domain uses. Valid values are <code>2</code> or <code>3</code>. The default is <code>2</code>.</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * @public
 * <p>Details about the configuration of an OpenSearch cluster.</p>
 */
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  /**
   * @public
   * <p>The number of data nodes to use in the OpenSearch domain.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>Whether UltraWarm is enabled.</p>
   */
  WarmEnabled?: boolean;

  /**
   * @public
   * <p>The number of UltraWarm instances.</p>
   */
  WarmCount?: number;

  /**
   * @public
   * <p>Whether to use a dedicated master node for the OpenSearch domain. A dedicated master node performs cluster management tasks, but does not hold data or respond to data upload requests.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * @public
   * <p>Configuration options for zone awareness. Provided if <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;

  /**
   * @public
   * <p>The number of instances to use for the master node. If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * @public
   * <p>The instance type for your data nodes.</p>
   *          <p>For a list of valid values, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html">Supported instance types in Amazon OpenSearch Service</a> in the <i>Amazon OpenSearch Service Developer Guide</i>.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The type of UltraWarm instance.</p>
   */
  WarmType?: string;

  /**
   * @public
   * <p>Whether to enable zone awareness for the OpenSearch domain. When zone awareness is enabled, OpenSearch Service allocates the cluster's nodes and replica index shards across Availability Zones (AZs) in the same Region. This prevents data loss and minimizes downtime if a node or data center fails.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * @public
   * <p>The hardware configuration of the computer that hosts the dedicated master node.</p>
   *          <p>If this attribute is specified, then <code>DedicatedMasterEnabled</code> must be <code>true</code>.
   *       </p>
   */
  DedicatedMasterType?: string;
}

/**
 * @public
 * <p>Information about additional options for the domain endpoint.</p>
 */
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  /**
   * @public
   * <p>The ARN for the security certificate. The certificate is managed in ACM.</p>
   */
  CustomEndpointCertificateArn?: string;

  /**
   * @public
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * @public
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * @public
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * @public
   * <p>The TLS security policy to apply to the HTTPS endpoint of the OpenSearch domain.</p>
   */
  TLSSecurityPolicy?: string;
}

/**
 * @public
 * <p>Details about the configuration for encryption at rest for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  /**
   * @public
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The KMS key ID.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Configuration details for a log publishing option.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  /**
   * @public
   * <p>The ARN of the CloudWatch Logs group to publish the logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Whether the log publishing is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
 */
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  /**
   * @public
   * <p>Configures the OpenSearch index logs publishing.</p>
   */
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * @public
   * <p>Configures the OpenSearch search slow log publishing.</p>
   */
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;

  /**
   * @public
   * <p>Configures the OpenSearch audit logs publishing.</p>
   */
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}

/**
 * @public
 * <p>Provides details about the configuration for node-to-node encryption.</p>
 */
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  /**
   * @public
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Provides information about the state of the domain relative to the latest service software.</p>
 */
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  /**
   * @public
   * <p>The epoch time when the deployment window closes for required updates. After this time, OpenSearch Service schedules the software upgrade automatically.</p>
   */
  AutomatedUpdateDate?: string;

  /**
   * @public
   * <p>Whether a request to update the domain can be canceled.</p>
   */
  Cancellable?: boolean;

  /**
   * @public
   * <p>The version of the service software that is currently installed on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>A more detailed description of the service software status.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The most recent version of the service software.</p>
   */
  NewVersion?: string;

  /**
   * @public
   * <p>Whether a service software update is available for the domain.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * @public
   * <p>The status of the service software update. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_ELIGIBLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_UPDATE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UpdateStatus?: string;

  /**
   * @public
   * <p>Whether the service software update is optional.</p>
   */
  OptionalDeployment?: boolean;
}

/**
 * @public
 * <p>Contains information that OpenSearch Service derives based on the <code>VPCOptions</code> for the domain.</p>
 */
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  /**
   * @public
   * <p>The list of security group IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of subnet IDs that are associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];
}

/**
 * @public
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AwsOpenSearchServiceDomainDetails {
  /**
   * @public
   * <p>The ARN of the OpenSearch Service domain.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>IAM policy document that specifies the access policies for the OpenSearch Service domain.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The identifier of the domain.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The domain endpoint.</p>
   */
  DomainEndpoint?: string;

  /**
   * @public
   * <p>The version of the domain engine.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;

  /**
   * @public
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;

  /**
   * @public
   * <p>Information about the status of a domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;

  /**
   * @public
   * <p>Details about the configuration of an OpenSearch cluster.</p>
   */
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;

  /**
   * @public
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;

  /**
   * @public
   * <p>Information that OpenSearch Service derives based on <code>VPCOptions</code> for the domain.</p>
   */
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;

  /**
   * @public
   * <p>Configures the CloudWatch Logs to publish for the OpenSearch domain.</p>
   */
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;

  /**
   * @public
   * <p>The domain endpoints. Used if the OpenSearch domain resides in a VPC.</p>
   *          <p>This is a map of key-value pairs. The key is always <code>vpc</code>. The value is the endpoint.</p>
   */
  DomainEndpoints?: Record<string, string>;

  /**
   * @public
   * <p>Specifies options for fine-grained access control.
   *       </p>
   */
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}

/**
 * @public
 * <p>An IAM role that is associated with the Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterAssociatedRole {
  /**
   * @public
   * <p>The ARN of the IAM role.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The status of the association between the IAM role and the DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

/**
 * @public
 * <p>Information about an instance in the DB cluster.</p>
 */
export interface AwsRdsDbClusterMember {
  /**
   * @public
   * <p>Whether the cluster member is the primary instance for the DB cluster.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * @public
   * <p>Specifies the order in which an Aurora replica is promoted to the primary instance when
   *          the existing primary instance fails.</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>The instance identifier for this member of the DB cluster.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * @public
   * <p>The status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DbClusterParameterGroupStatus?: string;
}

/**
 * @public
 * <p>Information about an option group membership for a DB cluster.</p>
 */
export interface AwsRdsDbClusterOptionGroupMembership {
  /**
   * @public
   * <p>The name of the DB cluster option group.</p>
   */
  DbClusterOptionGroupName?: string;

  /**
   * @public
   * <p>The status of the DB cluster option group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Information about an Active Directory domain membership record associated with the DB
 *          instance.</p>
 */
export interface AwsRdsDbDomainMembership {
  /**
   * @public
   * <p>The identifier of the Active Directory domain.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The status of the Active Directory Domain membership for the DB instance.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The fully qualified domain name of the Active Directory domain.</p>
   */
  Fqdn?: string;

  /**
   * @public
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  IamRoleName?: string;
}

/**
 * @public
 * <p>A VPC security groups that the DB instance belongs to.</p>
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  /**
   * @public
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * @public
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Information about an Amazon RDS DB cluster.</p>
 */
export interface AwsRdsDbClusterDetails {
  /**
   * @public
   * <p>For all database engines except Aurora, specifies the allocated storage size in
   *          gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be
   *          created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The current status of this DB cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The reader endpoint for the DB cluster.</p>
   */
  ReaderEndpoint?: string;

  /**
   * @public
   * <p>A list of custom endpoints for the DB cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * @public
   * <p>Whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAz?: boolean;

  /**
   * @public
   * <p>The name of the database engine to use for this DB cluster. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * @public
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The identifiers of the read replicas that are associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * @public
   * <p>A list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @public
   * <p>Specifies the identifier that Amazon Route 53 assigns when you create a hosted
   *          zone.</p>
   */
  HostedZoneId?: string;

  /**
   * @public
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The identifier of the DB cluster. The identifier must be unique within each Amazon Web Services Region
   *          and is immutable.</p>
   */
  DbClusterResourceId?: string;

  /**
   * @public
   * <p>A list of the IAM roles that are associated with the DB cluster.</p>
   */
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];

  /**
   * @public
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * @public
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch
   *          Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * @public
   * <p>The database engine mode of the DB cluster.Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>global</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multimaster</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parallelquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>provisioned</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>serverless</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineMode?: string;

  /**
   * @public
   * <p>Whether the DB cluster has deletion protection enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * @public
   * <p>The status of the database activity stream. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>started</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>starting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopped</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopping</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ActivityStreamStatus?: string;

  /**
   * @public
   * <p>Whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>Whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services
   *          account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * @public
   * <p>The Active Directory domain membership records that are associated with the DB
   *          cluster.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * @public
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   */
  DbClusterParameterGroup?: string;

  /**
   * @public
   * <p>The subnet group that is associated with the DB cluster, including the name,
   *          description, and subnets in the subnet group.</p>
   */
  DbSubnetGroup?: string;

  /**
   * @public
   * <p>The list of option group memberships for this DB cluster.</p>
   */
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  /**
   * @public
   * <p>The DB cluster identifier that the user assigned to the cluster. This identifier is the
   *          unique key that identifies a DB cluster.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * @public
   * <p>The list of instances that make up the DB cluster.</p>
   */
  DbClusterMembers?: AwsRdsDbClusterMember[];

  /**
   * @public
   * <p>Whether the mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>
   *             Indicates if minor version upgrades are automatically applied to the cluster.</p>
   */
  AutoMinorVersionUpgrade?: boolean;
}

/**
 * @public
 * <p>
 *             Contains the name and values of a manual Amazon Relational Database Service (RDS) DB cluster snapshot attribute.
 *         </p>
 */
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  /**
   * @public
   * <p>
   *             The name of the manual DB cluster snapshot attribute. The attribute named <code>restore</code> refers to the list of
   *             Amazon Web Services accounts that have permission to copy or restore the manual DB cluster snapshot.
   *         </p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>
   *             The value(s) for the manual DB cluster snapshot attribute. If the <code>AttributeName</code> field is set to
   *             <code>restore</code>, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized
   *             to copy or restore the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual
   *             DB cluster snapshot is public and available for any Amazon Web Services account to copy or restore.
   *         </p>
   */
  AttributeValues?: string[];
}

/**
 * @public
 * <p>Information about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbClusterSnapshotDetails {
  /**
   * @public
   * <p>A list of Availability Zones where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Indicates when the snapshot was taken.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SnapshotCreateTime?: string;

  /**
   * @public
   * <p>The name of the database engine that you want to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The port number on which the DB instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The VPC ID that is associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Indicates when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * @public
   * <p>The name of the master user for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The version of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The type of DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * @public
   * <p>Whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>The ARN of the KMS master key that is used to encrypt the database instances in the
   *          DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The DB cluster identifier.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * @public
   * <p>The identifier of the DB cluster snapshot.</p>
   */
  DbClusterSnapshotIdentifier?: string;

  /**
   * @public
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>
   *             Contains the name and values of a manual DB cluster snapshot attribute.
   *         </p>
   */
  DbClusterSnapshotAttributes?: AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[];
}

/**
 * @public
 * <p>An IAM role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  /**
   * @public
   * <p>The ARN of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The name of the feature associated with the IAM role.</p>
   */
  FeatureName?: string;

  /**
   * @public
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other Amazon Web Services
   *                services on your behalf. </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

/**
 * @public
 * <p>Provides information about a parameter group for a DB instance.</p>
 */
export interface AwsRdsDbParameterGroup {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  DbParameterGroupName?: string;

  /**
   * @public
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

/**
 * @public
 * <p>An Availability Zone for a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  /**
   * @public
   * <p>The name of the Availability Zone for a subnet in the subnet group.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Information about a subnet in a subnet group.</p>
 */
export interface AwsRdsDbSubnetGroupSubnet {
  /**
   * @public
   * <p>The identifier of a subnet in the subnet group.</p>
   */
  SubnetIdentifier?: string;

  /**
   * @public
   * <p>Information about the Availability Zone for a subnet in the subnet group.</p>
   */
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;

  /**
   * @public
   * <p>The status of a subnet in the subnet group.</p>
   */
  SubnetStatus?: string;
}

/**
 * @public
 * <p>Information about the subnet group for the database instance.</p>
 */
export interface AwsRdsDbSubnetGroup {
  /**
   * @public
   * <p>The name of the subnet group.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * @public
   * <p>The description of the subnet group.</p>
   */
  DbSubnetGroupDescription?: string;

  /**
   * @public
   * <p>The VPC ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * @public
   * <p>A list of subnets in the subnet group.</p>
   */
  Subnets?: AwsRdsDbSubnetGroupSubnet[];

  /**
   * @public
   * <p>The ARN of the subnet group.</p>
   */
  DbSubnetGroupArn?: string;
}

/**
 * @public
 * <p>Specifies the connection endpoint.</p>
 */
export interface AwsRdsDbInstanceEndpoint {
  /**
   * @public
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

/**
 * @public
 * <p>An option group membership.</p>
 */
export interface AwsRdsDbOptionGroupMembership {
  /**
   * @public
   * <p>The name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>The status of the option group membership.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Identifies the log types to enable and disable.</p>
 */
export interface AwsRdsPendingCloudWatchLogsExports {
  /**
   * @public
   * <p>A list of log types that are being enabled.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * @public
   * <p>A list of log types that are being disabled.</p>
   */
  LogTypesToDisable?: string[];
}

/**
 * @public
 * <p>A processor feature.</p>
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * @public
   * <p>The name of the processor feature. Valid values are <code>coreCount</code> or <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the processor feature.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Changes to a DB instance that are currently pending.</p>
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * @public
   * <p>The new DB instance class for the DB instance.</p>
   */
  DbInstanceClass?: string;

  /**
   * @public
   * <p>The new value of the allocated storage for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The new master user password for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>The new port for the DB instance.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The new backup retention period for the DB instance.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The new engine version for the DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The new license model value for the DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The new provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The new DB instance identifier for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * @public
   * <p>The new storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The new CA certificate identifier for the DB instance.</p>
   */
  CaCertificateIdentifier?: string;

  /**
   * @public
   * <p>The name of the new subnet group for the DB instance.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * @public
   * <p>A list of log types that are being enabled or disabled.</p>
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * @public
   * <p>Processor features that are being updated.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}

/**
 * @public
 * <p>Information about the status of a read replica.</p>
 */
export interface AwsRdsDbStatusInfo {
  /**
   * @public
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   */
  StatusType?: string;

  /**
   * @public
   * <p>Whether the read replica instance is operating normally.</p>
   */
  Normal?: boolean;

  /**
   * @public
   * <p>The status of the read replica instance.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * @public
   * <p>The IAM roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * @public
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * @public
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in CloudTrail log entries whenever the KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

  /**
   * @public
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * @public
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * @public
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>True if mapping of IAM accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>Indicates when the DB instance was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InstanceCreateTime?: string;

  /**
   * @public
   * <p>If <code>StorageEncrypted</code> is true, the KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * @public
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * @public
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   */
  MultiAz?: boolean;

  /**
   * @public
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * @public
   * <p>The current status of the DB instance.</p>
   */
  DbInstanceStatus?: string;

  /**
   * @public
   * <p>The master user name of the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The number of days for which to retain automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   */
  DbSecurityGroups?: string[];

  /**
   * @public
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * @public
   * <p>The Availability Zone where the DB instance will be created.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Changes to the DB instance that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * @public
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LatestRestorableTime?: string;

  /**
   * @public
   * <p>Indicates whether minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * @public
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * @public
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * @public
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * @public
   * <p>The name of the character set that this DB instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * @public
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   */
  StatusInfos?: AwsRdsDbStatusInfo[];

  /**
   * @public
   * <p>The storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * @public
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * @public
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * @public
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * @public
   * <p>The identifier of the KMS key used to encrypt the Performance Insights data.</p>
   */
  PerformanceInsightsKmsKeyId?: string;

  /**
   * @public
   * <p>The number of days to retain Performance Insights data.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * @public
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * @public
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * @public
   * <p>Specifies the connection endpoint.</p>
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * @public
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;
}

/**
 * @public
 * <p>EC2 security group information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  /**
   * @public
   * <p>Specifies the ID for the EC2 security group.</p>
   */
  Ec2SecurityGroupId?: string;

  /**
   * @public
   * <p>Specifies the name of the EC2 security group.</p>
   */
  Ec2SecurityGroupName?: string;

  /**
   * @public
   * <p>Provides the Amazon Web Services ID of the owner of the EC2 security group.</p>
   */
  Ec2SecurityGroupOwnerId?: string;

  /**
   * @public
   * <p>Provides the status of the EC2 security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>IP range information for an RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupIpRange {
  /**
   * @public
   * <p>Specifies the IP range.</p>
   */
  CidrIp?: string;

  /**
   * @public
   * <p>Specifies the status of the IP range.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon RDS DB security group.</p>
 */
export interface AwsRdsDbSecurityGroupDetails {
  /**
   * @public
   * <p>The ARN for the DB security group.</p>
   */
  DbSecurityGroupArn?: string;

  /**
   * @public
   * <p>Provides the description of the DB security group.</p>
   */
  DbSecurityGroupDescription?: string;

  /**
   * @public
   * <p>Specifies the name of the DB security group.</p>
   */
  DbSecurityGroupName?: string;

  /**
   * @public
   * <p>Contains a list of EC2 security groups.</p>
   */
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];

  /**
   * @public
   * <p>Contains a list of IP ranges.</p>
   */
  IpRanges?: AwsRdsDbSecurityGroupIpRange[];

  /**
   * @public
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Provides VPC ID associated with the DB security group.
   *       </p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * @public
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   */
  DbSnapshotIdentifier?: string;

  /**
   * @public
   * <p>A name for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * @public
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   */
  SnapshotCreateTime?: string;

  /**
   * @public
   * <p>The name of the database engine to use for this DB instance. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>c</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * @public
   * <p>The master user name for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * @public
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * @public
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   */
  SourceDbSnapshotIdentifier?: string;

  /**
   * @public
   * <p>The storage type associated with the DB snapshot. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * @public
   * <p>Whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>If <code>Encrypted</code> is <code>true</code>, the KMS key identifier for the encrypted DB snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The time zone of the DB snapshot.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * @public
   * <p>The identifier for the source DB instance.</p>
   */
  DbiResourceId?: string;
}

/**
 * @public
 * <p>Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.</p>
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * @public
   * <p>The identifier of the account that is associated with the event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * @public
   * <p>The identifier of the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * @public
   * <p>Whether the event notification subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * @public
   * <p>The ARN of the event notification subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * @public
   * <p>The ARN of the SNS topic to post the event notifications to.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>A list of source identifiers for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * @public
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>The status of the event notification subscription.</p>
   *          <p>Valid values: <code>creating</code> | <code>modifying</code> | <code>deleting</code> | <code>active</code> | <code>no-permission</code> | <code>topic-not-exist</code>
   *          </p>
   */
  Status?: string;

  /**
   * @public
   * <p>The datetime when the event notification subscription was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SubscriptionCreationTime?: string;
}

/**
 * @public
 * <p>A node in an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * @public
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * @public
   * <p>The private IP address of the node.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The public IP address of the node.</p>
   */
  PublicIpAddress?: string;
}

/**
 * @public
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * @public
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   */
  ParameterApplyStatus?: string;

  /**
   * @public
   * <p>The error that prevented the parameter from being applied to the database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

/**
 * @public
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * @public
   * <p>The list of parameter statuses.</p>
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * @public
   * <p>The status of updates to the parameters.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;
}

/**
 * @public
 * <p>A security group that is associated with the cluster.</p>
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * @public
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * @public
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter
 *          provides information about a cross-Region snapshot copy.</p>
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @public
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * @public
   * <p>The number of days that manual snapshots are retained in the destination Region after
   *          they are copied from a source Region.</p>
   *          <p>If the value is <code>-1</code>,
   *          then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either <code>-1</code>
   *          or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * @public
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

/**
 * @public
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @public
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceEndTime?: string;

  /**
   * @public
   * <p>The identifier of the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * @public
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceStartTime?: string;
}

/**
 * @public
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * @public
   * <p>The elastic IP address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * @public
   * <p>The status of the elastic IP address.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * @public
   * <p>The DNS address of the cluster.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The port that the database engine listens on.</p>
   */
  Port?: number;
}

/**
 * @public
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * @public
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * @public
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * @public
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>An IAM role that the cluster can use to access other Amazon Web Services services.</p>
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * @public
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   */
  ApplyStatus?: string;

  /**
   * @public
   * <p>The ARN of the IAM role.</p>
   */
  IamRoleArn?: string;
}

/**
 * @public
 * <p>Provides information about the logging status of the cluster.</p>
 */
export interface AwsRedshiftClusterLoggingStatus {
  /**
   * @public
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>The message indicating that the logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * @public
   * <p>The last time when logs failed to be delivered.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastFailureTime?: string;

  /**
   * @public
   * <p>The last time that logs were delivered successfully.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastSuccessfulDeliveryTime?: string;

  /**
   * @public
   * <p>Indicates whether logging is enabled.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * @public
   * <p>Provides the prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;
}

/**
 * @public
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * @public
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * @public
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * @public
   * <p>The pending or in-progress change to the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * @public
   * <p>The pending or in-progress change to the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * @public
   * <p>The encryption type for a cluster.</p>
   */
  EncryptionType?: string;

  /**
   * @public
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * @public
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * @public
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>The pending or in-progress change to the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * @public
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   */
  PubliclyAccessible?: boolean;
}

/**
 * @public
 * <p>Information about the resize operation for the cluster.</p>
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * @public
   * <p>Indicates whether the resize operation can be canceled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * @public
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   */
  ResizeType?: string;
}

/**
 * @public
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * @public
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * @public
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * @public
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * @public
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * @public
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * @public
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   */
  Status?: string;
}

/**
 * @public
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * @public
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

/**
 * @public
 * <p>Details about an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterDetails {
  /**
   * @public
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * @public
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The availability status of the cluster for queries. Possible values are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code> - The cluster is available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code> - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maintenance</code> - The cluster is intermittently available for queries due
   *                to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modifying</code> -The cluster is intermittently available for queries due to
   *                changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * @public
   * <p>Indicates when the cluster was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * @public
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * @public
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * @public
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * @public
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * @public
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * @public
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * @public
   * <p>The current status of the cluster.</p>
   *          <p>Valid values: <code>available</code> | <code>available, prep-for-resize</code> |
   *             <code>available, resize-cleanup</code> |<code> cancelling-resize</code> |
   *             <code>creating</code> | <code>deleting</code> | <code>final-snapshot</code> |
   *             <code>hardware-failure</code> | <code>incompatible-hsm</code> |<code>
   *             incompatible-network</code> | <code>incompatible-parameters</code> |
   *             <code>incompatible-restore</code> | <code>modifying</code> | <code>paused</code> |
   *             <code>rebooting</code> | <code>renaming</code> | <code>resizing</code> |
   *             <code>rotating-keys</code> | <code>storage-full</code> |
   *          <code>updating-hsm</code>
   *          </p>
   */
  ClusterStatus?: string;

  /**
   * @public
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * @public
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * @public
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   */
  DBName?: string;

  /**
   * @public
   * <p>List of time windows during which maintenance was deferred.</p>
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * @public
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * @public
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * @public
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The connection endpoint.</p>
   */
  Endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * @public
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * @public
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpectedNextSnapshotScheduleTime?: string;

  /**
   * @public
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * @public
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * @public
   * <p>A list of IAM roles that the cluster can use to access other Amazon Web Services services.</p>
   */
  IamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * @public
   * <p>The identifier of the KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * @public
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is <code>-1</code>, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either <code>-1</code> or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * @public
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NextMaintenanceWindowStartTime?: string;

  /**
   * @public
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * @public
   * <p>A list of cluster operations that are waiting to start.</p>
   */
  PendingActions?: string[];

  /**
   * @public
   * <p>A list of changes to the cluster that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  /**
   * @public
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *          maintenance can occur.</p>
   *          <p>Format:
   *             <code>
   *                <i><day></i>:HH:MM-<i><day></i>:HH:MM</code>
   *          </p>
   *          <p>For the day values, use <code>mon</code> | <code>tue</code> | <code>wed</code> |
   *             <code>thu</code> | <code>fri</code> | <code>sat</code> | <code>sun</code>
   *          </p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>
   *          </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Whether the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>Information about the resize operation for the cluster.</p>
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * @public
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * @public
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * @public
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   */
  SnapshotScheduleState?: string;

  /**
   * @public
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];

  /**
   * @public
   * <p>Information about the logging status of the cluster.</p>
   */
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}

/**
 * @public
 * <p>
 *             An object that contains an optional comment about your Amazon Route 53 hosted zone.</p>
 */
export interface AwsRoute53HostedZoneConfigDetails {
  /**
   * @public
   * <p> Any comments that you include about the hosted zone.
   *         </p>
   */
  Comment?: string;
}

/**
 * @public
 * <p>
 *             An object that contains information about an Amazon Route 53 hosted zone. </p>
 */
export interface AwsRoute53HostedZoneObjectDetails {
  /**
   * @public
   * <p>
   *             The ID that Route 53 assigns to the hosted zone when you create it. </p>
   */
  Id?: string;

  /**
   * @public
   * <p>
   *             The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             An object that includes the <code>Comment</code> element.</p>
   */
  Config?: AwsRoute53HostedZoneConfigDetails;
}

/**
 * @public
 * <p>
 *             The Amazon Resource Name (ARN) and other details of the Amazon CloudWatch Logs log group that Amazon Route 53 is
 * publishing logs to.</p>
 */
export interface CloudWatchLogsLogGroupArnConfigDetails {
  /**
   * @public
   * <p>
   *             The ARN of the CloudWatch Logs log group that Route 53 is publishing logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>
   *             The ID of the hosted zone that CloudWatch Logs is logging queries for. </p>
   */
  HostedZoneId?: string;

  /**
   * @public
   * <p>
   *             The ID for a DNS query logging configuration.
   *         </p>
   */
  Id?: string;
}

/**
 * @public
 * <p>
 *             Provides details about a specified Amazon Route 53 configuration for DNS query logging.</p>
 */
export interface AwsRoute53QueryLoggingConfigDetails {
  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group that Route 53 is publishing logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails;
}

/**
 * @public
 * <p>
 *             For private hosted zones, this is a complex type that contains information about an Amazon VPC.</p>
 */
export interface AwsRoute53HostedZoneVpcDetails {
  /**
   * @public
   * <p>
   *             The identifier of an Amazon VPC.
   *         </p>
   */
  Id?: string;

  /**
   * @public
   * <p>
   *             The Amazon Web Services Region that an Amazon VPC was created in.</p>
   */
  Region?: string;
}

/**
 * @public
 * <p>
 *             Provides details about a specified Amazon Route 53 hosted zone, including the four name servers assigned to
 * the hosted zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent
 * domain name.</p>
 */
export interface AwsRoute53HostedZoneDetails {
  /**
   * @public
   * <p>
   *             An object that contains information about the specified hosted zone.</p>
   */
  HostedZone?: AwsRoute53HostedZoneObjectDetails;

  /**
   * @public
   * <p>
   *             An object that contains information about the Amazon Virtual Private Clouds (Amazon VPCs) that are associated with
   * the specified hosted zone.</p>
   */
  Vpcs?: AwsRoute53HostedZoneVpcDetails[];

  /**
   * @public
   * <p>
   *             An object that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</p>
   */
  NameServers?: string[];

  /**
   * @public
   * <p>
   *             An array that contains one <code>QueryLoggingConfig</code> element for each DNS query logging configuration that is
   * associated with the current Amazon Web Services account.</p>
   */
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails;
}

/**
 * @public
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * @public
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * @public
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * @public
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * @public
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.</p>
   */
  RestrictPublicBuckets?: boolean;
}

/**
 * @public
 * <p>Information about what Amazon S3
 *          does when a multipart upload is incomplete.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * @public
   * <p>The number of days after which Amazon S3 cancels an incomplete multipart upload.</p>
   */
  DaysAfterInitiation?: number;
}

/**
 * @public
 * <p>A tag that is assigned to matching objects.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * @public
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag value.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A value to use for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * @public
   * <p>Prefix text for matching objects.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A tag that is assigned to matching objects.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  /**
   * @public
   * <p>The type of filter value.
   * Valid values are <code>LifecyclePrefixPredicate</code> or <code>LifecycleTagPredicate</code>.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>A tag filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * @public
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag value</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The configuration for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * @public
   * <p>The values to use for the filter.</p>
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  /**
   * @public
   * <p>A prefix filter.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A tag filter.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  /**
   * @public
   * <p>Whether to use <code>AND</code> or <code>OR</code> to join the operands.
   * Valid values are <code>LifecycleAndOperator</code> or <code>LifecycleOrOperator</code>.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Identifies the objects that a rule applies to.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * @public
   * <p>The configuration for the filter.</p>
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}

/**
 * @public
 * <p>A transition rule that describes when noncurrent objects transition to a specified storage class.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * @public
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>The class of storage to change the object to after the object is noncurrent for the specified number of days.</p>
   */
  StorageClass?: string;
}

/**
 * @public
 * <p>A rule for when objects transition to specific storage classes.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * @public
   * <p>A date on which to transition objects to the specified storage class. If you provide <code>Date</code>, you cannot provide <code>Days</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  Date?: string;

  /**
   * @public
   * <p>The number of days after which to transition the object to the specified storage class. If you provide <code>Days</code>, you cannot provide <code>Date</code>.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>The storage class to transition the object to. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEEP_ARCHIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GLACIER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTELLIGENT_TIERING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONEZONE_IA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD_IA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StorageClass?: string;
}

/**
 * @public
 * <p>Configuration for a lifecycle rule.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * @public
   * <p>How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number
   *          of days before Amazon S3 cancels the entire upload.</p>
   */
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  /**
   * @public
   * <p>The date when objects are moved or deleted.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpirationDate?: string;

  /**
   * @public
   * <p>The length in days of the lifetime for objects that are subject to the rule.</p>
   */
  ExpirationInDays?: number;

  /**
   * @public
   * <p>Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to
   *          <code>true</code>, the delete marker is expired. If set to <code>false</code>, the policy
   *          takes no action.</p>
   *          <p>If you provide <code>ExpiredObjectDeleteMarker</code>, you cannot provide
   *          <code>ExpirationInDays</code> or <code>ExpirationDate</code>.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;

  /**
   * @public
   * <p>Identifies the objects that a rule applies to.</p>
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  /**
   * @public
   * <p>The unique identifier of the rule.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  NoncurrentVersionExpirationInDays?: number;

  /**
   * @public
   * <p>Transition rules that describe when noncurrent objects transition to a specified storage class.</p>
   */
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  /**
   * @public
   * <p>A prefix that identifies one or more objects that the rule applies to.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The current status of the rule. Indicates whether the rule is currently being applied.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Transition rules that indicate when objects transition to a specified storage class.</p>
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}

/**
 * @public
 * <p>The lifecycle configuration for the objects in the S3 bucket.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * @public
   * <p>The lifecycle rules.</p>
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}

/**
 * @public
 * <p>Describes the versioning state of an S3 bucket.</p>
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * @public
   * <p>Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.</p>
   */
  IsMfaDeleteEnabled?: boolean;

  /**
   * @public
   * <p>The versioning status of the S3 bucket. Valid values are <code>Enabled</code> or <code>Suspended</code>.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Information about logging for
 *          the S3 bucket</p>
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * @public
   * <p>The name of the S3 bucket where log files for the S3 bucket are stored.</p>
   */
  DestinationBucketName?: string;

  /**
   * @public
   * <p>The prefix added to log files for the S3 bucket.</p>
   */
  LogFilePrefix?: string;
}

/**
 * @public
 * @enum
 */
export const AwsS3BucketNotificationConfigurationS3KeyFilterRuleName = {
  PREFIX: "Prefix",
  SUFFIX: "Suffix",
} as const;

/**
 * @public
 */
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName =
  (typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName)[keyof typeof AwsS3BucketNotificationConfigurationS3KeyFilterRuleName];

/**
 * @public
 * <p>Details for a filter rule.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * @public
   * <p>Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.</p>
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName;

  /**
   * @public
   * <p>The filter value.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Details for an Amazon S3 filter.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * @public
   * <p>The filter rules for the filter.</p>
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}

/**
 * @public
 * <p>Filtering information for the notifications. The
 *          filtering is based on Amazon S3 key names.</p>
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * @public
   * <p>Details for an Amazon S3 filter.</p>
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}

/**
 * @public
 * <p>Details for an S3 bucket notification configuration.</p>
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * @public
   * <p>The list of events that trigger a notification.</p>
   */
  Events?: string[];

  /**
   * @public
   * <p>The filters that determine which S3 buckets generate notifications.</p>
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter;

  /**
   * @public
   * <p>The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the
   *          notification.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>Indicates the type of notification. Notifications can be generated using Lambda functions,
   *          Amazon SQS queues, or Amazon SNS topics, with corresponding valid values as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LambdaConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QueueConfiguration</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TopicConfiguration</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * @public
 * <p>The notification
 *          configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * @public
   * <p>Configurations for S3 bucket notifications.</p>
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}

/**
 * @public
 * <p>The redirect behavior for requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * @public
   * <p>The name of the host to redirect requests to.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The protocol to use when redirecting requests. By default, this field uses the same protocol as the
   *          original request. Valid values are <code>http</code> or <code>https</code>.</p>
   */
  Protocol?: string;
}

/**
 * @public
 * <p>The condition that must be met in order to apply the routing rule.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * @public
   * <p>Indicates to redirect the request if the HTTP error code matches this value.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * @public
   * <p>Indicates to redirect the request if the key prefix matches this value.</p>
   */
  KeyPrefixEquals?: string;
}

/**
 * @public
 * <p>The rules to redirect the request if the condition in <code>Condition</code> is
 *          met.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * @public
   * <p>The host name to use in the redirect request.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The HTTP redirect code to use in the response.</p>
   */
  HttpRedirectCode?: string;

  /**
   * @public
   * <p>The protocol to use to redirect the request. By default, uses the protocol from the
   *          original request.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The object key prefix to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyWith</code> is present.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * @public
   * <p>The specific object key to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyPrefixWith</code> is present.</p>
   */
  ReplaceKeyWith?: string;
}

/**
 * @public
 * <p>A rule for redirecting requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * @public
   * <p>Provides the condition that must be met in order to apply the routing rule.</p>
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  /**
   * @public
   * <p>Provides the rules to redirect the request if the condition in <code>Condition</code> is
   *          met.</p>
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}

/**
 * @public
 * <p>Website parameters for the S3
 *          bucket.</p>
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * @public
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: string;

  /**
   * @public
   * <p>The name of the index document for the website.</p>
   */
  IndexDocumentSuffix?: string;

  /**
   * @public
   * <p>The redirect behavior for requests to the website.</p>
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  /**
   * @public
   * <p>The rules for applying redirects for requests to the website.</p>
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}

/**
 * @public
 * <p>
 *          The default S3 Object Lock retention mode and period that you want to apply to new objects placed in the specified Amazon S3 bucket.
 *       </p>
 */
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  /**
   * @public
   * <p>
   *          The number of days that you want to specify for the default retention period.
   *       </p>
   */
  Days?: number;

  /**
   * @public
   * <p>
   *          The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
   *       </p>
   */
  Mode?: string;

  /**
   * @public
   * <p>
   *          The number of years that you want to specify for the default retention period.
   *       </p>
   */
  Years?: number;
}

/**
 * @public
 * <p>
 *          Specifies the S3 Object Lock rule for the specified object. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *       </p>
 */
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  /**
   * @public
   * <p>
   *          The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket.
   *       </p>
   */
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
}

/**
 * @public
 * <p>
 *          The container element for S3 Object Lock configuration parameters. In Amazon S3, Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
 *       </p>
 */
export interface AwsS3BucketObjectLockConfiguration {
  /**
   * @public
   * <p>
   *          Indicates whether the bucket has an Object Lock configuration enabled.
   *       </p>
   */
  ObjectLockEnabled?: string;

  /**
   * @public
   * <p>
   *          Specifies the Object Lock rule for the specified object.
   *       </p>
   */
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
}

/**
 * @public
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * @public
   * <p>Server-side encryption algorithm to use for the default encryption. Valid values are
   * <code>aws: kms</code> or <code>AES256</code>.</p>
   */
  SSEAlgorithm?: string;

  /**
   * @public
   * <p>KMS key ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

/**
 * @public
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * @public
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

/**
 * @public
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

/**
 * @public
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  /**
   * @public
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * @public
   * <p>The Amazon Web Services account identifier of the account that owns the S3 bucket.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The lifecycle configuration for objects in the S3 bucket.</p>
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  /**
   * @public
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * @public
   * <p>The access control list for the S3 bucket.</p>
   */
  AccessControlList?: string;

  /**
   * @public
   * <p>The logging configuration for the S3 bucket.</p>
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  /**
   * @public
   * <p>The website configuration parameters for the S3 bucket.</p>
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  /**
   * @public
   * <p>The notification configuration for the S3 bucket.</p>
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  /**
   * @public
   * <p>The versioning state of an S3 bucket.</p>
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;

  /**
   * @public
   * <p>
   *          Specifies which rule Amazon S3 applies by default to every new object placed in the specified bucket.
   *       </p>
   */
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration;
}

/**
 * @public
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  /**
   * @public
   * <p>Indicates when the object was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * @public
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * @public
   * <p>The identifier of the KMS symmetric customer managed key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;
}

/**
 * @public
 * <p>
 *          Information on the instance metadata service (IMDS) configuration of the notebook instance.
 *       </p>
 */
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  /**
   * @public
   * <p>
   *          Indicates the minimum IMDS version that the notebook instance supports.
   *       </p>
   */
  MinimumInstanceMetadataServiceVersion?: string;
}

/**
 * @public
 * <p>
 *          Provides details about an Amazon SageMaker notebook instance.
 *       </p>
 */
export interface AwsSageMakerNotebookInstanceDetails {
  /**
   * @public
   * <p>
   *          A list of Amazon Elastic Inference instance types to associate with the notebook instance. Currently, only one instance type can be associated with a notebook instance.
   *       </p>
   */
  AcceleratorTypes?: string[];

  /**
   * @public
   * <p>
   *          An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit</a> or in any other Git repository.
   *          These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker notebook instances</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *       </p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * @public
   * <p>
   *          The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit</a> or in any other Git repository.
   *          When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git repositories with SageMaker notebook instances</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *       </p>
   */
  DefaultCodeRepository?: string;

  /**
   * @public
   * <p>
   *          Sets whether SageMaker provides internet access to the notebook instance. If you set this to <code>Disabled</code>, this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker training and endpoint services unless you configure a Network Address Translation (NAT) Gateway in your VPC.
   *       </p>
   */
  DirectInternetAccess?: string;

  /**
   * @public
   * <p>
   *          If status of the instance is <code>Failed</code>, the reason it failed.
   *       </p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>
   *          Information on the IMDS configuration of the notebook instance.
   *       </p>
   */
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;

  /**
   * @public
   * <p>
   *          The type of machine learning (ML) compute instance to launch for the notebook instance.
   *       </p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of an Key Management Service (KMS) key that SageMaker uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see
   *          <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and disabling keys</a> in the <i>Key Management Service Developer Guide</i>.
   *       </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>
   *          The network interface ID that SageMaker created when the instance was created.
   *       </p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the notebook instance.
   *       </p>
   */
  NotebookInstanceArn?: string;

  /**
   * @public
   * <p>
   *          The name of a notebook instance lifecycle configuration.
   *       </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * @public
   * <p>
   *          The name of the new notebook instance.
   *       </p>
   */
  NotebookInstanceName?: string;

  /**
   * @public
   * <p>
   *          The status of the notebook instance.
   *       </p>
   */
  NotebookInstanceStatus?: string;

  /**
   * @public
   * <p>
   *          The platform identifier of the notebook instance runtime environment.
   *       </p>
   */
  PlatformIdentifier?: string;

  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *       </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>
   *          Whether root access is enabled or disabled for users of the notebook instance.
   *       </p>
   */
  RootAccess?: string;

  /**
   * @public
   * <p>
   *          The VPC security group IDs.
   *       </p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>
   *          The ID of the VPC subnet to which you have a connectivity from your ML compute instance.
   *       </p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>
   *          The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
   *       </p>
   */
  Url?: string;

  /**
   * @public
   * <p>
   *          The size, in GB, of the ML storage volume to attach to the notebook instance.
   *       </p>
   */
  VolumeSizeInGB?: number;
}

/**
 * @public
 * <p>Defines the rotation schedule for the secret.</p>
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * @public
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   */
  AutomaticallyAfterDays?: number;
}

/**
 * @public
 * <p>Details about an Secrets Manager secret.</p>
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * @public
   * <p>Defines the rotation schedule for the secret.</p>
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * @public
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   */
  RotationOccurredWithinFrequency?: boolean;

  /**
   * @public
   * <p>The ARN, Key ID, or alias of the KMS key used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Whether rotation is enabled.</p>
   */
  RotationEnabled?: boolean;

  /**
   * @public
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   */
  RotationLambdaArn?: string;

  /**
   * @public
   * <p>Whether the secret is deleted.</p>
   */
  Deleted?: boolean;

  /**
   * @public
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;
}

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  FAILED: "FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PASSED: "PASSED",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * @public
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  /**
   * @public
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * @public
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  /**
   * @public
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the Config evaluation result was
   *                      <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus;

  /**
   * @public
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * @public
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];

  /**
   * @public
   * <p>
   *          The unique identifier of a control across standards. Values for this field typically consist of an
   *          Amazon Web Service and a number, such as APIGateway.5.
   *       </p>
   */
  SecurityControlId?: string;

  /**
   * @public
   * <p>The enabled security standards in which a security control is currently enabled.
   *       </p>
   */
  AssociatedStandards?: AssociatedStandard[];
}

/**
 * @public
 * <p>The severity assigned to the finding by the finding provider.</p>
 */
export interface FindingProviderSeverity {
  /**
   * @public
   * <p>The severity label assigned to the finding by the finding provider.</p>
   */
  Label?: SeverityLabel;

  /**
   * @public
   * <p>The finding provider's original value for the severity.</p>
   */
  Original?: string;
}

/**
 * @public
 * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.</p>
 */
export interface FindingProviderFields {
  /**
   * @public
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * @public
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * @public
   * <p>A list of findings that are related to the current finding.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * @public
   * <p>The severity of a finding.</p>
   */
  Severity?: FindingProviderSeverity;

  /**
   * @public
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];
}

/**
 * @public
 * <p>
 *                 Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to
 *                 findings that relate to Lambda functions. Amazon Inspector identifies policy violations and
 *                 vulnerabilities in Lambda function code based on internal detectors developed
 *                 in collaboration with Amazon CodeGuru. Security Hub receives those findings.
 *         </p>
 */
export interface GeneratorDetails {
  /**
   * @public
   * <p>
   *             The name of the detector used to identify the code vulnerability.
   *         </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             The description of the detector used to identify the code vulnerability.
   *         </p>
   */
  Description?: string;

  /**
   * @public
   * <p>
   *             An array of tags used to identify the detector associated with the finding.
   *         </p>
   */
  Labels?: string[];
}

/**
 * @public
 * @enum
 */
export const MalwareState = {
  OBSERVED: "OBSERVED",
  REMOVAL_FAILED: "REMOVAL_FAILED",
  REMOVED: "REMOVED",
} as const;

/**
 * @public
 */
export type MalwareState = (typeof MalwareState)[keyof typeof MalwareState];

/**
 * @public
 * @enum
 */
export const MalwareType = {
  ADWARE: "ADWARE",
  BLENDED_THREAT: "BLENDED_THREAT",
  BOTNET_AGENT: "BOTNET_AGENT",
  COIN_MINER: "COIN_MINER",
  EXPLOIT_KIT: "EXPLOIT_KIT",
  KEYLOGGER: "KEYLOGGER",
  MACRO: "MACRO",
  POTENTIALLY_UNWANTED: "POTENTIALLY_UNWANTED",
  RANSOMWARE: "RANSOMWARE",
  REMOTE_ACCESS: "REMOTE_ACCESS",
  ROOTKIT: "ROOTKIT",
  SPYWARE: "SPYWARE",
  TROJAN: "TROJAN",
  VIRUS: "VIRUS",
  WORM: "WORM",
} as const;

/**
 * @public
 */
export type MalwareType = (typeof MalwareType)[keyof typeof MalwareType];

/**
 * @public
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  /**
   * @public
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType;

  /**
   * @public
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState;
}

/**
 * @public
 * @enum
 */
export const NetworkDirection = {
  IN: "IN",
  OUT: "OUT",
} as const;

/**
 * @public
 */
export type NetworkDirection = (typeof NetworkDirection)[keyof typeof NetworkDirection];

/**
 * @public
 * <p>A range of ports.</p>
 */
export interface PortRange {
  /**
   * @public
   * <p>The first port in the port range.</p>
   */
  Begin?: number;

  /**
   * @public
   * <p>The last port in the port range.</p>
   */
  End?: number;
}

/**
 * @public
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * @public
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection;

  /**
   * @public
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * @public
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * @public
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * @public
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * @public
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * @public
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * @public
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * @public
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * @public
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * @public
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

/**
 * @public
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * @public
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * @public
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

/**
 * @public
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * @public
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * @public
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

/**
 * @public
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * @public
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * @public
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * @public
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

/**
 * @public
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * @public
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * @public
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

/**
 * @public
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * @public
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * @public
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * @public
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * @public
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * @public
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * @public
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * @public
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * @public
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * @public
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * @public
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

/**
 * @public
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * @public
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * @public
   * <p>The parent process ID. This field accepts positive integers between <code>O</code> and <code>2147483647</code>.</p>
   */
  ParentPid?: number;

  /**
   * @public
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * @public
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces, and date and time should be separated by <code>T</code>. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

/**
 * @public
 * @enum
 */
export const RecordState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type RecordState = (typeof RecordState)[keyof typeof RecordState];

/**
 * @public
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * @public
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

/**
 * @public
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * @public
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * @public
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * @public
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * @public
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

/**
 * @public
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * @public
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * @public
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * @public
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

/**
 * @public
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * @public
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * @public
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * @public
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

/**
 * @public
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * @public
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * @public
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

/**
 * @public
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * @public
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * @public
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * @public
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * @public
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * @public
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

/**
 * @public
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * @public
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

/**
 * @public
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * @public
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * @public
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * @public
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

/**
 * @public
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * @public
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * @public
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * @public
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * @public
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

/**
 * @public
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * @public
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * @public
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * @public
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * @public
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * @public
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * @public
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

/**
 * @public
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * @public
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * @public
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

/**
 * @public
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * @public
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

/**
 * @public
 * <p>Provides information about an Amazon SNS topic to which notifications can be published.</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * @public
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * @public
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * @public
   * <p>The name of the Amazon SNS topic.</p>
   */
  TopicName?: string;

  /**
   * @public
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsSuccessFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   */
  SqsFailureFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *       </p>
   */
  ApplicationSuccessFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseSuccessFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   */
  FirehoseFailureFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *       </p>
   */
  HttpSuccessFeedbackRoleArn?: string;

  /**
   * @public
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p>
   */
  HttpFailureFeedbackRoleArn?: string;
}

/**
 * @public
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * @public
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * @public
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * @public
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * @public
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

/**
 * @public
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * @public
   * <p>The current patch compliance status. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * @public
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * @public
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * @public
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * @public
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * @public
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * @public
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * @public
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * @public
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * @public
   * <p>The highest severity for the patches. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  OverallSeverity?: string;

  /**
   * @public
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * @public
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * @public
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

/**
 * @public
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * @public
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

/**
 * @public
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * @public
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

/**
 * @public
 * <p>
 *             An object describing a CloudWatch log group. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">
 *                 Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.
 *         </p>
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  /**
   * @public
   * <p>The ARN (ends with <code>:*</code>) of the CloudWatch Logs log group to which you want your logs emitted.</p>
   */
  LogGroupArn?: string;
}

/**
 * @public
 * <p>
 *             An array of objects that describes where your execution history events will be logged.
 *         </p>
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  /**
   * @public
   * <p>
   *             An object describing a CloudWatch Logs log group. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">
   *                 Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.
   *         </p>
   */
  CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails;
}

/**
 * @public
 * <p>
 *             The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
 *         </p>
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  /**
   * @public
   * <p>
   *             An array of objects that describes where your execution history events will be logged.
   *         </p>
   */
  Destinations?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[];

  /**
   * @public
   * <p>
   *             Determines whether execution data is included in your log. When set to false, data is excluded.
   *         </p>
   */
  IncludeExecutionData?: boolean;

  /**
   * @public
   * <p>
   *             Defines which category of execution history events are logged.
   *         </p>
   */
  Level?: string;
}

/**
 * @public
 * <p>
 *             Specifies whether X-Ray tracing is enabled.
 *         </p>
 */
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  /**
   * @public
   * <p>
   *             When set to true, X-Ray tracing is enabled.
   *         </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>
 *             Provides details about an Step Functions state machine, which is a workflow consisting of a series of event-
 *             driven steps.
 *         </p>
 */
export interface AwsStepFunctionStateMachineDetails {
  /**
   * @public
   * <p>
   *             A user-defined or an auto-generated string that identifies a <code>Map</code> state. This parameter is present only if
   *             the <code>stateMachineArn</code> specified in input is a qualified state machine ARN.
   *         </p>
   */
  Label?: string;

  /**
   * @public
   * <p>
   *             Used to set CloudWatch Logs options.
   *         </p>
   */
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails;

  /**
   * @public
   * <p>
   *             The name of the state machine.
   *         </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             The Amazon Resource Name (ARN) of the IAM role used when creating this state machine.
   *         </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>
   *             The ARN that identifies the state machine.
   *         </p>
   */
  StateMachineArn?: string;

  /**
   * @public
   * <p>
   *             The current status of the state machine.
   *         </p>
   */
  Status?: string;

  /**
   * @public
   * <p>
   *             Specifies whether X-Ray tracing is enabled.
   *         </p>
   */
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails;

  /**
   * @public
   * <p>
   *             The type of the state machine (STANDARD or EXPRESS).
   *         </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * @public
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.
   *       </p>
   */
  Negated?: boolean;

  /**
   * @public
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * @public
 * <p>Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * @public
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * @public
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * @public
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}

/**
 * @public
 * <p>Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * @public
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.</p>
   */
  Negated?: boolean;

  /**
   * @public
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

/**
 * @public
 * <p>contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * @public
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * @public
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * @public
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}

/**
 * @public
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRegionalRulePredicateListDetails {
  /**
   * @public
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * @public
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * @public
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count. </p>
 */
export interface AwsWafRegionalRuleDetails {
  /**
   * @public
   * <p>A name for the metrics for the rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>,
   *             <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   *             <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to
   *          add to a rule and, for each object, indicates whether you want to negate the settings. </p>
   */
  PredicateList?: AwsWafRegionalRulePredicateListDetails[];

  /**
   * @public
   * <p>The ID of the rule.
   *       </p>
   */
  RuleId?: string;
}

/**
 * @public
 * <p>Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * @public
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   * <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about the rules attached to a rule group
 *       </p>
 */
export interface AwsWafRegionalRuleGroupRulesDetails {
  /**
   * @public
   * <p>The action that WAF should take on a web request when it matches the criteria defined in the rule. </p>
   */
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;

  /**
   * @public
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in
   *          order based on the value of <code>Priority</code>. </p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The type of rule in the rule group.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web
 *          requests. </p>
 */
export interface AwsWafRegionalRuleGroupDetails {
  /**
   * @public
   * <p>A name for the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The descriptive name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * @public
   * <p>Provides information about the rule statements used to identify the web requests that you want to allow, block, or
   * count.
   *       </p>
   */
  Rules?: AwsWafRegionalRuleGroupRulesDetails[];
}

/**
 * @public
 * <p>The action that WAF takes when a web request matches all conditions in the
 *          rule, such as allow, block, or count the request. </p>
 */
export interface AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * @public
   * <p>For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides details about the action to use in the place of the action that results from the rule group
 * evaluation.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * @public
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code>
 * objects that identify the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRegionalWebAclRulesListDetails {
  /**
   * @public
   * <p>The action that WAF takes when a web request matches all conditions in the rule, such as allow,
   *          block, or count the request.
   *       </p>
   */
  Action?: AwsWafRegionalWebAclRulesListActionDetails;

  /**
   * @public
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   */
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;

  /**
   * @public
   * <p>The order in which WAF evaluates the rules in a web ACL.
   *       </p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The ID of an WAF Regional rule to associate with a web ACL. </p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>For actions that are associated with a rule, the action that WAF takes when a web
   * request matches all conditions in a rule.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you
 *          want to allow, block, or count. </p>
 */
export interface AwsWafRegionalWebAclDetails {
  /**
   * @public
   * <p>The action to perform if none of the rules contained in the web ACL match.
   *       </p>
   */
  DefaultAction?: string;

  /**
   * @public
   * <p>A name for the metrics for this web ACL.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>A descriptive name for the web ACL.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of
   * the rule.
   *       </p>
   */
  RulesList?: AwsWafRegionalWebAclRulesListDetails[];

  /**
   * @public
   * <p>The ID of the web ACL.
   *       </p>
   */
  WebAclId?: string;
}

/**
 * @public
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
 * for each object, indicates whether you want to negate the settings.
 *       </p>
 */
export interface AwsWafRulePredicateListDetails {
  /**
   * @public
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   */
  DataId?: string;

  /**
   * @public
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   */
  Negated?: boolean;

  /**
   * @public
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleDetails {
  /**
   * @public
   * <p>The name of the metrics for this rule.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>A descriptive name for the rule.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
   *          for each object, indicates whether you want to negate the settings.
   *       </p>
   */
  PredicateList?: AwsWafRulePredicateListDetails[];

  /**
   * @public
   * <p>The ID of the WAF rule.
   *       </p>
   */
  RuleId?: string;
}

/**
 * @public
 * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 */
export interface AwsWafRuleGroupRulesActionDetails {
  /**
   * @public
   * <p>The action that WAF should take on a web request when it matches the rule's
   *          statement.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
 *          allow, block, or count.
 *       </p>
 */
export interface AwsWafRuleGroupRulesDetails {
  /**
   * @public
   * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
   *       </p>
   */
  Action?: AwsWafRuleGroupRulesActionDetails;

  /**
   * @public
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order
   *          based on the value of <code>Priority</code>.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The rule ID for a rule.
   *       </p>
   */
  RuleId?: string;

  /**
   * @public
   * <p>The type of rule.
   *       </p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 *       </p>
 */
export interface AwsWafRuleGroupDetails {
  /**
   * @public
   * <p>The name of the metrics for this rule group.
   *       </p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The name of the rule group.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the rule group.
   *       </p>
   */
  RuleGroupId?: string;

  /**
   * @public
   * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
   * allow, block, or count.
   *       </p>
   */
  Rules?: AwsWafRuleGroupRulesDetails[];
}

/**
 * @public
 * <p>
 *          A custom header for custom request and response handling.
 *       </p>
 */
export interface AwsWafv2CustomHttpHeader {
  /**
   * @public
   * <p>
   *          The name of the custom header.
   *       </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *          The value of the custom header.
   *       </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>
 *          Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.
 *       </p>
 */
export interface AwsWafv2CustomRequestHandlingDetails {
  /**
   * @public
   * <p>
   *          The HTTP headers to insert into the request.
   *       </p>
   */
  InsertHeaders?: AwsWafv2CustomHttpHeader[];
}

/**
 * @public
 * <p>
 *          Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 *       </p>
 */
export interface AwsWafv2ActionAllowDetails {
  /**
   * @public
   * <p>
   *          Defines custom handling for the web request. For information about customizing web requests and responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * @public
 * <p>
 *          A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.
 *       </p>
 */
export interface AwsWafv2CustomResponseDetails {
  /**
   * @public
   * <p>
   *          References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block.
   *       </p>
   */
  CustomResponseBodyKey?: string;

  /**
   * @public
   * <p>
   *          The HTTP status code to return to the client. For a list of status codes that you can use in your custom responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a> in the <i>WAF Developer Guide.</i>
   *          </p>
   */
  ResponseCode?: number;

  /**
   * @public
   * <p>
   *          The HTTP headers to use in the response.
   *       </p>
   */
  ResponseHeaders?: AwsWafv2CustomHttpHeader[];
}

/**
 * @public
 * <p>
 *          Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *       </p>
 */
export interface AwsWafv2ActionBlockDetails {
  /**
   * @public
   * <p>
   *          Defines a custom response for the web request. For information, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomResponse?: AwsWafv2CustomResponseDetails;
}

/**
 * @public
 * <p>
 *          Specifies that WAF should run a CAPTCHA check against the request.
 *       </p>
 */
export interface AwsWafv2RulesActionCaptchaDetails {
  /**
   * @public
   * <p>
   *          Defines custom handling for the web request, used when the CAPTCHA inspection determines that the request's token is valid and unexpired. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * @public
 * <p>
 *          Specifies that WAF should count the request.
 *       </p>
 */
export interface AwsWafv2RulesActionCountDetails {
  /**
   * @public
   * <p>
   *          Defines custom handling for the web request. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}

/**
 * @public
 * <p>
 *          The action that WAF should take on a web request when it matches a rule's statement.
 *          Settings at the web ACL level can override the rule action setting.
 *       </p>
 */
export interface AwsWafv2RulesActionDetails {
  /**
   * @public
   * <p>
   *          Instructs WAF to allow the web request.
   *       </p>
   */
  Allow?: AwsWafv2ActionAllowDetails;

  /**
   * @public
   * <p>
   *          Instructs WAF to block the web request.
   *       </p>
   */
  Block?: AwsWafv2ActionBlockDetails;

  /**
   * @public
   * <p>
   *          Instructs WAF to run a CAPTCHA check against the web request.
   *       </p>
   */
  Captcha?: AwsWafv2RulesActionCaptchaDetails;

  /**
   * @public
   * <p>
   *          Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *       </p>
   */
  Count?: AwsWafv2RulesActionCountDetails;
}
