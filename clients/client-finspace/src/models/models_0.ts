// smithy-typescript generated code
import {
  AutoScalingMetric,
  ChangesetStatus,
  ChangeType,
  DnsStatus,
  EnvironmentStatus,
  ErrorDetails,
  FederationMode,
  IPAddressType,
  KxAzMode,
  KxClusterCodeDeploymentStrategy,
  KxClusterStatus,
  KxClusterType,
  KxDataviewStatus,
  KxDeploymentStrategy,
  KxNAS1Type,
  KxNodeStatus,
  KxSavedownStorageType,
  KxScalingGroupStatus,
  KxVolumeStatus,
  KxVolumeType,
  RuleAction,
  TgwStatus,
  VolumeType,
} from "./enums";

/**
 * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster. </p>
 * @public
 */
export interface AutoScalingConfiguration {
  /**
   * <p>The lowest number of nodes to scale. This value must be at least 1 and less than the <code>maxNodeCount</code>. If the nodes in a cluster belong to multiple availability zones, then <code>minNodeCount</code> must be at least 3.</p>
   * @public
   */
  minNodeCount?: number | undefined;

  /**
   * <p>The highest number of nodes to scale. This value cannot be greater than 5.</p>
   * @public
   */
  maxNodeCount?: number | undefined;

  /**
   * <p> The metric your cluster will track in order to scale in and out. For example, <code>CPU_UTILIZATION_PERCENTAGE</code> is the average CPU usage across all the nodes in a cluster.</p>
   * @public
   */
  autoScalingMetric?: AutoScalingMetric | undefined;

  /**
   * <p>The desired value of the chosen <code>autoScalingMetric</code>. When the metric drops below this value, the cluster will scale in. When the metric goes above this value, the cluster will scale out. You can set the target value between 1 and 100 percent.</p>
   * @public
   */
  metricTarget?: number | undefined;

  /**
   * <p>The duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event.</p>
   * @public
   */
  scaleInCooldownSeconds?: number | undefined;

  /**
   * <p>The duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event.</p>
   * @public
   */
  scaleOutCooldownSeconds?: number | undefined;
}

/**
 * <p>Configuration information when authentication mode is FEDERATED.</p>
 * @public
 */
export interface FederationParameters {
  /**
   * <p>SAML 2.0 Metadata document from identity provider (IdP).</p>
   * @public
   */
  samlMetadataDocument?: string | undefined;

  /**
   * <p>Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).</p>
   * @public
   */
  samlMetadataURL?: string | undefined;

  /**
   * <p>The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration
   *        (IdP).</p>
   * @public
   */
  applicationCallBackURL?: string | undefined;

  /**
   * <p>The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.</p>
   * @public
   */
  federationURN?: string | undefined;

  /**
   * <p>Name of the identity provider (IdP).</p>
   * @public
   */
  federationProviderName?: string | undefined;

  /**
   * <p>SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to
   *          the attribute definition in which user email is set. For example, name would be <code>Email</code> and
   *          value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>.
   *          Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.</p>
   * @public
   */
  attributeMap?: Record<string, string> | undefined;
}

/**
 * <p>Configuration information for the superuser.</p>
 * @public
 */
export interface SuperuserParameters {
  /**
   * <p>The email address of the superuser.</p>
   * @public
   */
  emailAddress: string | undefined;

  /**
   * <p>The first name of the superuser.</p>
   * @public
   */
  firstName: string | undefined;

  /**
   * <p>The last name of the superuser.</p>
   * @public
   */
  lastName: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The name of the FinSpace environment to be created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the FinSpace environment to be created.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The KMS key id to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Add tags to your FinSpace environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Authentication mode for the environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  federationMode?: FederationMode | undefined;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   * @public
   */
  federationParameters?: FederationParameters | undefined;

  /**
   * <p>Configuration information for the superuser.</p>
   * @public
   */
  superuserParameters?: SuperuserParameters | undefined;

  /**
   * <p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:finspace:$\{Region\}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:finspace:$\{Region\}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  dataBundles?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>The unique identifier for FinSpace environment that you created.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the FinSpace environment that you created.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The sign-in URL for the web application of the FinSpace environment you created.</p>
   * @public
   */
  environmentUrl?: string | undefined;
}

/**
 * <p>A list of change request objects.</p>
 * @public
 */
export interface ChangeRequest {
  /**
   * <p>Defines the type of change request. A <code>changeType</code> can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PUT – Adds or updates files in a database.</p>
   *             </li>
   *             <li>
   *                <p>DELETE – Deletes files in a database.</p>
   *             </li>
   *          </ul>
   * @public
   */
  changeType: ChangeType | undefined;

  /**
   * <p>Defines the S3 path of the source file that is required to add or update files in a database.</p>
   * @public
   */
  s3Path?: string | undefined;

  /**
   * <p>Defines the path within the database directory. </p>
   * @public
   */
  dbPath: string | undefined;
}

/**
 * @public
 */
export interface CreateKxChangesetRequest {
  /**
   * <p>A unique identifier of the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A list of change request objects that are run in order. A change request object consists of <code>changeType</code> , <code>s3Path</code>, and <code>dbPath</code>.
   *       A changeType can have the following values: </p>
   *          <ul>
   *             <li>
   *                <p>PUT – Adds or updates files in a database.</p>
   *             </li>
   *             <li>
   *                <p>DELETE – Deletes files in a database.</p>
   *             </li>
   *          </ul>
   *          <p>All the change requests require a mandatory <code>dbPath</code> attribute that defines the
   *          path within the database directory. All database paths must start with a leading / and end
   *          with a trailing /. The <code>s3Path</code> attribute defines the s3 source file path and is
   *          required for a PUT change type. The <code>s3path</code> must end with a trailing / if it is
   *          a directory and must end without a trailing / if it is a file. </p>
   *          <p>Here are few examples of how you can use the change request object:</p>
   *          <ol>
   *             <li>
   *                <p>This request adds a single sym file at database root location.   </p>
   *                <p>
   *                   <code>\{ "changeType": "PUT", "s3Path":"s3://bucket/db/sym",
   *                "dbPath":"/"\}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>This request adds files in the given <code>s3Path</code> under the 2020.01.02
   *                partition of the database.</p>
   *                <p>
   *                   <code>\{ "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/",
   *                "dbPath":"/2020.01.02/"\}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>This request adds files in the given <code>s3Path</code> under the
   *                   <i>taq</i> table partition of the database.</p>
   *                <p>
   *                   <code>[ \{ "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/taq/",
   *                   "dbPath":"/2020.01.02/taq/"\}]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>This request deletes the 2020.01.02 partition of the database.</p>
   *                <p>
   *                   <code>[\{ "changeType": "DELETE", "dbPath": "/2020.01.02/"\} ]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The <i>DELETE</i> request allows you to delete the existing files under the
   *                2020.01.02 partition of the database, and the <i>PUT</i> request adds a
   *                new taq table under it.</p>
   *                <p>
   *                   <code>[ \{"changeType": "DELETE", "dbPath":"/2020.01.02/"\}, \{"changeType": "PUT",
   *                   "s3Path":"s3://bucket/db/2020.01.02/taq/",
   *                "dbPath":"/2020.01.02/taq/"\}]</code>
   *                </p>
   *             </li>
   *          </ol>
   * @public
   */
  changeRequests: ChangeRequest[] | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Provides details in the event of a failed flow, including the error type and the related error message.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>Specifies the error message that appears if a flow fails. </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Specifies the type of error.</p>
   * @public
   */
  errorType?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateKxChangesetResponse {
  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A list of change requests.</p>
   * @public
   */
  changeRequests?: ChangeRequest[] | undefined;

  /**
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>Status of the changeset creation process.</p>
   *          <ul>
   *             <li>
   *                <p>Pending – Changeset creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>Processing – Changeset creation is running.</p>
   *             </li>
   *             <li>
   *                <p>Failed – Changeset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>Complete – Changeset creation has succeeded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ChangesetStatus | undefined;

  /**
   * <p>The details of the error that you receive when creating a changeset. It consists of the type of error and the error message.</p>
   * @public
   */
  errorInfo?: ErrorInfo | undefined;
}

/**
 * <p>The configuration for read only disk cache associated with a cluster.</p>
 * @public
 */
export interface KxCacheStorageConfiguration {
  /**
   * <p>The type of cache storage. The valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>CACHE_1000 – This type provides at least 1000 MB/s disk access throughput. </p>
   *             </li>
   *             <li>
   *                <p>CACHE_250 – This type provides at least 250 MB/s disk access throughput. </p>
   *             </li>
   *             <li>
   *                <p>CACHE_12 – This type provides at least 12 MB/s disk access throughput. </p>
   *             </li>
   *          </ul>
   *          <p>For cache type <code>CACHE_1000</code> and <code>CACHE_250</code> you can select cache size as 1200 GB or increments of 2400 GB. For cache type <code>CACHE_12</code> you can select the cache size in increments of 6000 GB.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The size of cache in Gigabytes.</p>
   * @public
   */
  size: number | undefined;
}

/**
 * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
 * @public
 */
export interface CapacityConfiguration {
  /**
   * <p>The type that determines the hardware of the host computer used for your cluster instance. Each node type offers different memory and storage capabilities. Choose a node type based on the requirements of the application or software that you plan to run on your instance.</p>
   *          <p>You can only specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>kx.s.large</code> – The node type with a configuration of 12 GiB memory and 2 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.xlarge</code> – The node type with a configuration of 27 GiB memory and 4 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.2xlarge</code> – The node type with a configuration of 54 GiB memory and 8 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.4xlarge</code> – The node type with a configuration of 108 GiB memory and 16 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.8xlarge</code> – The node type with a configuration of 216 GiB memory and 32 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.16xlarge</code> – The node type with a configuration of 432 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.s.32xlarge</code> – The node type with a configuration of 864 GiB memory and 128 vCPUs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  nodeType?: string | undefined;

  /**
   * <p>The number of instances running in a cluster.</p>
   * @public
   */
  nodeCount?: number | undefined;
}

/**
 * <p>The structure of the customer code available within the running cluster.</p>
 * @public
 */
export interface CodeConfiguration {
  /**
   * <p>A unique name for the S3 bucket.</p>
   * @public
   */
  s3Bucket?: string | undefined;

  /**
   * <p>The full S3 path (excluding bucket) to the .zip file. This file contains the code that is loaded onto the cluster when it's started.</p>
   * @public
   */
  s3Key?: string | undefined;

  /**
   * <p>The version of an S3 object.</p>
   * @public
   */
  s3ObjectVersion?: string | undefined;
}

/**
 * <p>Defines the key-value pairs to make them available inside the cluster.</p>
 * @public
 */
export interface KxCommandLineArgument {
  /**
   * <p>The name of the key.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The value of the key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The structure of database cache configuration that is used for mapping database paths to cache types in clusters.</p>
 * @public
 */
export interface KxDatabaseCacheConfiguration {
  /**
   * <p>The type of disk cache. This parameter is used to map the database path to cache storage. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>CACHE_1000 – This type provides at least 1000 MB/s disk access throughput. </p>
   *             </li>
   *          </ul>
   * @public
   */
  cacheType: string | undefined;

  /**
   * <p>Specifies the portions of database that will be loaded into the cache for access.</p>
   * @public
   */
  dbPaths: string[] | undefined;

  /**
   * <p>
   *    The name of the dataview to be used for caching historical data on disk.
   *
   * </p>
   * @public
   */
  dataviewName?: string | undefined;
}

/**
 * <p>
 *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
 * @public
 */
export interface KxDataviewSegmentConfiguration {
  /**
   * <p>
   * The database path of the data that you want to place on each selected volume for the segment. Each segment must have a unique database path for each volume.</p>
   * @public
   */
  dbPaths: string[] | undefined;

  /**
   * <p>
   * The name of the volume where you want to add data. </p>
   * @public
   */
  volumeName: string | undefined;

  /**
   * <p>Enables on-demand caching on the selected database path when a particular file or a
   *          column of the database is accessed. When on demand caching is <b>True</b>, dataviews perform minimal loading of files on the filesystem as
   *          needed. When it is set to <b>False</b>, everything is cached. The
   *          default value is <b>False</b>. </p>
   * @public
   */
  onDemand?: boolean | undefined;
}

/**
 * <p>
 * The structure that stores the configuration details of a dataview.</p>
 * @public
 */
export interface KxDataviewConfiguration {
  /**
   * <p>
   * The unique identifier of the dataview.</p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>
   *    The version of the dataview corresponding to a given changeset.
   *
   * </p>
   * @public
   */
  dataviewVersionId?: string | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   * The db path and volume configuration for the segmented database.</p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;
}

/**
 * <p>The configuration of data that is available for querying from this database.</p>
 * @public
 */
export interface KxDatabaseConfiguration {
  /**
   * <p>The name of the kdb database. When this parameter is specified in the structure, S3 with the whole database is included by default.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>Configuration details for the disk cache used to increase performance reading from a kdb database mounted to the cluster.</p>
   * @public
   */
  cacheConfigurations?: KxDatabaseCacheConfiguration[] | undefined;

  /**
   * <p>A unique identifier of the changeset that is associated with the cluster.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *    The name of the dataview to be used for caching historical data on disk.
   *
   * </p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>
   *    The configuration of the dataview to be used with specified cluster.
   *
   * </p>
   * @public
   */
  dataviewConfiguration?: KxDataviewConfiguration | undefined;
}

/**
 * <p>The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted.</p>
 * @public
 */
export interface KxSavedownStorageConfiguration {
  /**
   * <p>The type of writeable storage space for temporarily storing your savedown data. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>SDS01 – This type represents 3000 IOPS and io2 ebs volume type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: KxSavedownStorageType | undefined;

  /**
   * <p>The size of temporary storage in gibibytes.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>
   *    The name of the kdb volume that you want to use as writeable save-down storage for clusters.
   *
   * </p>
   * @public
   */
  volumeName?: string | undefined;
}

/**
 * <p>The structure that stores the capacity configuration details of a scaling group.</p>
 * @public
 */
export interface KxScalingGroupConfiguration {
  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName: string | undefined;

  /**
   * <p>
   *    An optional hard limit on the amount of memory a kdb cluster can use.
   *
   * </p>
   * @public
   */
  memoryLimit?: number | undefined;

  /**
   * <p>
   *    A reservation of the minimum amount of memory that should be available on the scaling group for a kdb cluster to be successfully placed in a scaling group.
   *
   * </p>
   * @public
   */
  memoryReservation: number | undefined;

  /**
   * <p>
   *    The number of kdb cluster nodes.
   *
   * </p>
   * @public
   */
  nodeCount: number | undefined;

  /**
   * <p>
   *    The number of vCPUs that you want to reserve for each node of this kdb cluster on the scaling group host.
   *
   * </p>
   * @public
   */
  cpu?: number | undefined;
}

/**
 * <p>
 * A configuration to store the Tickerplant logs. It consists of
 * a list of volumes that will be mounted to your cluster. For the cluster type <code>Tickerplant</code>, the location of the TP volume on the cluster will be available by using the global variable <code>.aws.tp_log_path</code>.
 * </p>
 * @public
 */
export interface TickerplantLogConfiguration {
  /**
   * <p>
   * The name of the volumes for tickerplant logs.
   * </p>
   * @public
   */
  tickerplantLogVolumes?: string[] | undefined;
}

/**
 * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The identifier of the VPC endpoint.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The  unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The identifier of the subnet that the Privatelink VPC endpoint uses to connect to the cluster.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The IP address type for cluster network configuration parameters. The following type is available:</p>
   *          <ul>
   *             <li>
   *                <p>IP_V4 – IP address version 4</p>
   *             </li>
   *          </ul>
   * @public
   */
  ipAddressType?: IPAddressType | undefined;
}

/**
 * @public
 */
export interface CreateKxClusterRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique name for the cluster that you want to create.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>Specifies the type of KDB database that is being created. The following types are available: </p>
   *          <ul>
   *             <li>
   *                <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p>
   *             </li>
   *             <li>
   *                <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.</p>
   *             </li>
   *             <li>
   *                <p>GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only <code>SINGLE</code> AZ mode.</p>
   *             </li>
   *             <li>
   *                <p>Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterType: KxClusterType | undefined;

  /**
   * <p>
   * A configuration to store Tickerplant logs. It consists of
   * a list of volumes that will be mounted to your cluster. For the cluster type <code>Tickerplant</code>, the location of the TP volume on the cluster will be available by using the global variable <code>.aws.tp_log_path</code>.
   * </p>
   * @public
   */
  tickerplantLogConfiguration?: TickerplantLogConfiguration | undefined;

  /**
   * <p>A list of databases that will be available for querying.</p>
   * @public
   */
  databases?: KxDatabaseConfiguration[] | undefined;

  /**
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   * @public
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[] | undefined;

  /**
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   * @public
   */
  autoScalingConfiguration?: AutoScalingConfiguration | undefined;

  /**
   * <p>A description of the cluster.</p>
   * @public
   */
  clusterDescription?: string | undefined;

  /**
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   * @public
   */
  capacityConfiguration?: CapacityConfiguration | undefined;

  /**
   * <p>The version of FinSpace managed kdb to run.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   * @public
   */
  vpcConfiguration: VpcConfiguration | undefined;

  /**
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *             <i>.zip</i> file that contains the custom code, which will be loaded on
   *          the cluster. It must include the file name itself. For example,
   *          <code>somedir/init.q</code>.</p>
   * @public
   */
  initializationScript?: string | undefined;

  /**
   * <p>Defines the key-value pairs to make them available inside the cluster.</p>
   * @public
   */
  commandLineArguments?: KxCommandLineArgument[] | undefined;

  /**
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   * @public
   */
  code?: CodeConfiguration | undefined;

  /**
   * <p>An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   * @public
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration | undefined;

  /**
   * <p>The number of availability zones you want to assign per cluster. This can be one of the following </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> – Assigns one availability zone per cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI</code> – Assigns all the availability zones per cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  azMode: KxAzMode | undefined;

  /**
   * <p>The availability zone identifiers for the requested regions.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The structure that stores the configuration details of a scaling group.</p>
   * @public
   */
  scalingGroupConfiguration?: KxScalingGroupConfiguration | undefined;
}

/**
 * <p>
 * The structure that consists of name and type of volume.</p>
 * @public
 */
export interface Volume {
  /**
   * <p>A unique identifier for the volume.</p>
   * @public
   */
  volumeName?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: VolumeType | undefined;
}

/**
 * @public
 */
export interface CreateKxClusterResponse {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The status of cluster creation.</p>
   *          <ul>
   *             <li>
   *                <p>PENDING – The cluster is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>CREATING – The cluster creation process is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The cluster creation process has failed.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING – The cluster creation process is running.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The cluster is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The cluster is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The cluster has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The cluster failed to delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxClusterStatus | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>A unique name for the cluster.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>Specifies the type of KDB database that is being created. The following types are available: </p>
   *          <ul>
   *             <li>
   *                <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p>
   *             </li>
   *             <li>
   *                <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.</p>
   *             </li>
   *             <li>
   *                <p>GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only <code>SINGLE</code> AZ mode.</p>
   *             </li>
   *             <li>
   *                <p>Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterType?: KxClusterType | undefined;

  /**
   * <p>
   * A configuration to store the Tickerplant logs. It consists of
   * a list of volumes that will be mounted to your cluster. For the cluster type <code>Tickerplant</code>, the location of the TP volume on the cluster will be available by using the global variable <code>.aws.tp_log_path</code>.
   * </p>
   * @public
   */
  tickerplantLogConfiguration?: TickerplantLogConfiguration | undefined;

  /**
   * <p>
   * A list of volumes mounted on the cluster.
   * </p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>A list of databases that will be available for querying.</p>
   * @public
   */
  databases?: KxDatabaseConfiguration[] | undefined;

  /**
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   * @public
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[] | undefined;

  /**
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   * @public
   */
  autoScalingConfiguration?: AutoScalingConfiguration | undefined;

  /**
   * <p>A description of the cluster.</p>
   * @public
   */
  clusterDescription?: string | undefined;

  /**
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   * @public
   */
  capacityConfiguration?: CapacityConfiguration | undefined;

  /**
   * <p>A version of the FinSpace managed kdb to run.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   * @public
   */
  initializationScript?: string | undefined;

  /**
   * <p>Defines the key-value pairs to make them available inside the cluster.</p>
   * @public
   */
  commandLineArguments?: KxCommandLineArgument[] | undefined;

  /**
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   * @public
   */
  code?: CodeConfiguration | undefined;

  /**
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   * @public
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration | undefined;

  /**
   * <p>The number of availability zones you want to assign per cluster. This can be one of the following </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> – Assigns one availability zone per cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI</code> – Assigns all the availability zones per cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The structure that stores the configuration details of a scaling group.</p>
   * @public
   */
  scalingGroupConfiguration?: KxScalingGroupConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateKxDatabaseRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateKxDatabaseResponse {
  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The ARN identifier of the database.</p>
   * @public
   */
  databaseArn?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The last time that the database was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateKxDataviewRequest {
  /**
   * <p>A unique identifier for the kdb environment, where you want to create the dataview. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * The name of the database where you want to create a dataview.
   * </p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A unique identifier for the dataview.</p>
   * @public
   */
  dataviewName: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode: KxAzMode | undefined;

  /**
   * <p>
   *          The identifier of the availability zones.
   *       </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>
   * A unique identifier of the changeset that you want to use to ingest data. </p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *    The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false.</p>
   * @public
   */
  autoUpdate?: boolean | undefined;

  /**
   * <p>
   *          The option to specify whether you want to make the dataview writable to perform database maintenance. The following are some considerations related to writable dataviews.  </p>
   *          <ul>
   *             <li>
   *                <p>You cannot create partial writable dataviews. When you create writeable dataviews you must
   *                provide the entire database path.</p>
   *             </li>
   *             <li>
   *                <p>You cannot perform updates on a writeable dataview. Hence, <code>autoUpdate</code> must be set
   *             as <b>False</b> if <code>readWrite</code> is <b>True</b> for a dataview.</p>
   *             </li>
   *             <li>
   *                <p>You must also use a unique volume for creating a writeable dataview. So, if you choose a
   *                volume that is already in use by another dataview, the dataview creation
   *                fails.</p>
   *             </li>
   *             <li>
   *                <p>Once you create a dataview as writeable, you cannot change it to read-only. So, you cannot
   *                update the <code>readWrite</code> parameter later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  readWrite?: boolean | undefined;

  /**
   * <p>A description of the dataview.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   * A list of key-value pairs to label the dataview. You can add up to 50 tags to a dataview.
   * </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateKxDataviewResponse {
  /**
   * <p>A unique identifier for the dataview.</p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>The name of the database where you want to create a dataview.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment, where you want to create the dataview. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *          The identifier of the availability zones.
   *       </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>A description of the dataview.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The option to select whether you want to apply all the future additions and corrections automatically to the dataview when you ingest new changesets. The default value is false.</p>
   * @public
   */
  autoUpdate?: boolean | undefined;

  /**
   * <p>Returns True if the dataview is created as writeable and False otherwise. </p>
   * @public
   */
  readWrite?: boolean | undefined;

  /**
   * <p>
   * The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>
   * The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   * The status of dataview creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The dataview creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> – The dataview is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The dataview is active.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxDataviewStatus | undefined;
}

/**
 * @public
 */
export interface CreateKxEnvironmentRequest {
  /**
   * <p>The name of the kdb environment that you want to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the kdb environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * <p>A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateKxEnvironmentResponse {
  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the kdb environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A description for the kdb environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN identifier of the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The timestamp at which the kdb environment was created in FinSpace.</p>
   * @public
   */
  creationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateKxScalingGroupRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment, where you want to create the scaling group. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName: string | undefined;

  /**
   * <p>
   *    The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.</p>
   *          <p>You can add one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>kx.sg.large</code> – The host type with a configuration of 16 GiB
   *             memory and 2 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.xlarge</code> – The host type with a configuration of 32 GiB
   *                memory and 4 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.2xlarge</code> – The host type with a configuration of 64 GiB
   *                memory and 8 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.4xlarge</code> – The host type with a configuration of 108 GiB memory and 16 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.8xlarge</code> – The host type with a configuration of 216 GiB memory and 32 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.16xlarge</code> – The host type with a configuration of 432 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.32xlarge</code> – The host type with a configuration of 864 GiB memory and 128 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.16xlarge</code> – The host type with a configuration of 1949 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.24xlarge</code> – The host type with a configuration of 2948 GiB memory and 96 vCPUs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  hostType: string | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneId: string | undefined;

  /**
   * <p>
   * A list of key-value pairs to label the scaling group. You can add up to 50 tags to a scaling group.
   * </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateKxScalingGroupResponse {
  /**
   * <p>A unique identifier for the kdb environment, where you create the scaling group. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName?: string | undefined;

  /**
   * <p>
   *    The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.
   *
   * </p>
   * @public
   */
  hostType?: string | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The status of scaling group.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The scaling group creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The scaling group creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The scaling group is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The scaling group is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The scaling group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the scaling group.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The scaling group is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxScalingGroupStatus | undefined;

  /**
   * <p>
   * The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000. </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateKxUserRequest {
  /**
   * <p>A unique identifier for the kdb environment where you want to create a user.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName: string | undefined;

  /**
   * <p>The IAM role ARN that will be associated with the user.</p>
   * @public
   */
  iamRole: string | undefined;

  /**
   * <p>A list of key-value pairs to label the user. You can add up to 50 tags to a user.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateKxUserResponse {
  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The IAM role ARN that will be associated with the user.</p>
   * @public
   */
  iamRole?: string | undefined;
}

/**
 * <p>
 *    The structure containing the size and type of the network attached storage (NAS_1) file system volume.
 * </p>
 * @public
 */
export interface KxNAS1Configuration {
  /**
   * <p>
   * The type of the network attached storage.
   * </p>
   * @public
   */
  type?: KxNAS1Type | undefined;

  /**
   * <p>
   *    The size of the network attached storage. For storage type
   *    <code>SSD_1000</code> and <code>SSD_250</code> you can select the
   *    minimum size as 1200 GB or increments of 2400 GB. For storage type
   *    <code>HDD_12</code> you can select the minimum size as 6000 GB or increments
   *    of 6000 GB.</p>
   * @public
   */
  size?: number | undefined;
}

/**
 * @public
 */
export interface CreateKxVolumeRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   *    The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type. When you select <code>NAS_1</code> volume type, you must also provide <code>nas1Configuration</code>.
   * </p>
   * @public
   */
  volumeType: KxVolumeType | undefined;

  /**
   * <p>A unique identifier for the volume.</p>
   * @public
   */
  volumeName: string | undefined;

  /**
   * <p>
   * A description of the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> Specifies the configuration for the Network attached storage (NAS_1) file system volume. This
   *          parameter is required when you choose <code>volumeType</code> as
   *          <i>NAS_1</i>.</p>
   * @public
   */
  nas1Configuration?: KxNAS1Configuration | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode: KxAzMode | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneIds: string[] | undefined;

  /**
   * <p>
   * A list of key-value pairs to label the volume. You can add up to 50 tags to a volume.
   * </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateKxVolumeResponse {
  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A unique identifier for the volume.</p>
   * @public
   */
  volumeName?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: KxVolumeType | undefined;

  /**
   * <p>
   * The ARN identifier of the volume.
   * </p>
   * @public
   */
  volumeArn?: string | undefined;

  /**
   * <p> Specifies the configuration for the Network attached storage (NAS_1) file system volume.</p>
   * @public
   */
  nas1Configuration?: KxNAS1Configuration | undefined;

  /**
   * <p>The status of volume creation.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The volume creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The volume creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The volume is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The volume is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATED – The volume is successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The volume is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the volume.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The volume is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxVolumeStatus | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   * A description of the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The identifier for the FinSpace environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {}

/**
 * @public
 */
export interface DeleteKxClusterRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the cluster that you want to delete.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxClusterResponse {}

/**
 * @public
 */
export interface DeleteKxClusterNodeRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the cluster, for which you want to delete the nodes.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>A unique identifier for the node that you want to delete.</p>
   * @public
   */
  nodeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxClusterNodeResponse {}

/**
 * @public
 */
export interface DeleteKxDatabaseRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database that you want to delete.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxDatabaseResponse {}

/**
 * @public
 */
export interface DeleteKxDataviewRequest {
  /**
   * <p>A unique identifier for the kdb environment, from where you want to delete the dataview. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the database whose dataview you want to delete.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the dataview that you want to delete.</p>
   * @public
   */
  dataviewName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxDataviewResponse {}

/**
 * @public
 */
export interface DeleteKxEnvironmentRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxEnvironmentResponse {}

/**
 * @public
 */
export interface DeleteKxScalingGroupRequest {
  /**
   * <p>A unique identifier for the kdb environment, from where you want to delete the dataview. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxScalingGroupResponse {}

/**
 * @public
 */
export interface DeleteKxUserRequest {
  /**
   * <p>A unique identifier for the user that you want to delete.</p>
   * @public
   */
  userName: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxUserResponse {}

/**
 * @public
 */
export interface DeleteKxVolumeRequest {
  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * The name of the volume that you want to delete.
   * </p>
   * @public
   */
  volumeName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxVolumeResponse {}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The identifier of the FinSpace environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>Represents an FinSpace environment.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The name of the FinSpace environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The identifier of the FinSpace environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The ID of the AWS account in which the FinSpace environment is created.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The current status of creation of the FinSpace environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The sign-in URL for the web application of your FinSpace environment.</p>
   * @public
   */
  environmentUrl?: string | undefined;

  /**
   * <p>The description of the FinSpace environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your FinSpace environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The URL of the integrated FinSpace notebook environment in your web application.</p>
   * @public
   */
  sageMakerStudioDomainUrl?: string | undefined;

  /**
   * <p>The KMS key id used to encrypt in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The AWS account ID of the dedicated service account associated with your FinSpace
   *          environment.</p>
   * @public
   */
  dedicatedServiceAccountId?: string | undefined;

  /**
   * <p>The authentication mode for the environment.</p>
   * @public
   */
  federationMode?: FederationMode | undefined;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   * @public
   */
  federationParameters?: FederationParameters | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>The name of the FinSpace environment.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface GetKxChangesetRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A unique identifier of the changeset for which you want to retrieve data.</p>
   * @public
   */
  changesetId: string | undefined;
}

/**
 * @public
 */
export interface GetKxChangesetResponse {
  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A list of change request objects that are run in order.</p>
   * @public
   */
  changeRequests?: ChangeRequest[] | undefined;

  /**
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>Beginning time from which the changeset is active. The value is determined as epoch time in
   *       milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   * @public
   */
  activeFromTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>Status of the changeset creation process.</p>
   *          <ul>
   *             <li>
   *                <p>Pending – Changeset creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>Processing – Changeset creation is running.</p>
   *             </li>
   *             <li>
   *                <p>Failed – Changeset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>Complete – Changeset creation has succeeded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ChangesetStatus | undefined;

  /**
   * <p>Provides details in the event of a failed flow, including the error type and the related error message.</p>
   * @public
   */
  errorInfo?: ErrorInfo | undefined;
}

/**
 * @public
 */
export interface GetKxClusterRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the cluster that you want to retrieve.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface GetKxClusterResponse {
  /**
   * <p>The status of cluster creation.</p>
   *          <ul>
   *             <li>
   *                <p>PENDING – The cluster is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>CREATING – The cluster creation process is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The cluster creation process has failed.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING – The cluster creation process is running.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The cluster is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The cluster is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The cluster has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The cluster failed to delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxClusterStatus | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>A unique name for the cluster.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>Specifies the type of KDB database that is being created. The following types are available: </p>
   *          <ul>
   *             <li>
   *                <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p>
   *             </li>
   *             <li>
   *                <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.</p>
   *             </li>
   *             <li>
   *                <p>GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only <code>SINGLE</code> AZ mode.</p>
   *             </li>
   *             <li>
   *                <p>Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterType?: KxClusterType | undefined;

  /**
   * <p>
   * A configuration to store the Tickerplant logs. It consists of
   * a list of volumes that will be mounted to your cluster. For the cluster type <code>Tickerplant</code>, the location of the TP volume on the cluster will be available by using the global variable <code>.aws.tp_log_path</code>.
   * </p>
   * @public
   */
  tickerplantLogConfiguration?: TickerplantLogConfiguration | undefined;

  /**
   * <p>
   * A list of volumes attached to the cluster.
   * </p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p> A list of databases mounted on the cluster.</p>
   * @public
   */
  databases?: KxDatabaseConfiguration[] | undefined;

  /**
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   * @public
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[] | undefined;

  /**
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   * @public
   */
  autoScalingConfiguration?: AutoScalingConfiguration | undefined;

  /**
   * <p>A description of the cluster.</p>
   * @public
   */
  clusterDescription?: string | undefined;

  /**
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   * @public
   */
  capacityConfiguration?: CapacityConfiguration | undefined;

  /**
   * <p>The version of FinSpace managed kdb to run.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   * @public
   */
  initializationScript?: string | undefined;

  /**
   * <p>Defines key-value pairs to make them available inside the cluster.</p>
   * @public
   */
  commandLineArguments?: KxCommandLineArgument[] | undefined;

  /**
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   * @public
   */
  code?: CodeConfiguration | undefined;

  /**
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   * @public
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration | undefined;

  /**
   * <p>The number of availability zones you want to assign per cluster. This can be one of the following </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> – Assigns one availability zone per cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI</code> – Assigns all the availability zones per cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The structure that stores the capacity configuration details of a scaling group.</p>
   * @public
   */
  scalingGroupConfiguration?: KxScalingGroupConfiguration | undefined;
}

/**
 * @public
 */
export interface GetKxConnectionStringRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   * @public
   */
  userArn: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A name of the kdb cluster.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface GetKxConnectionStringResponse {
  /**
   * <p>The signed connection string that you can use to connect to clusters.</p>
   * @public
   */
  signedConnectionString?: string | undefined;
}

/**
 * @public
 */
export interface GetKxDatabaseRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * @public
 */
export interface GetKxDatabaseResponse {
  /**
   * <p>The name of the kdb database for which the information is retrieved.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The ARN identifier of the database.</p>
   * @public
   */
  databaseArn?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  lastCompletedChangesetId?: string | undefined;

  /**
   * <p>The total number of bytes in the database.</p>
   * @public
   */
  numBytes?: number | undefined;

  /**
   * <p>The total number of changesets in the database.</p>
   * @public
   */
  numChangesets?: number | undefined;

  /**
   * <p>The total number of files in the database.</p>
   * @public
   */
  numFiles?: number | undefined;
}

/**
 * @public
 */
export interface GetKxDataviewRequest {
  /**
   * <p>A unique identifier for the kdb environment, from where you want to retrieve the dataview details.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * The name of the database where you created the dataview.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A unique identifier for the dataview.</p>
   * @public
   */
  dataviewName: string | undefined;
}

/**
 * <p>
 *    The active version of the dataview that is currently in use by this cluster.
 *
 * </p>
 * @public
 */
export interface KxDataviewActiveVersion {
  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>
   *    The list of clusters that are currently using this dataview.
   *
   * </p>
   * @public
   */
  attachedClusters?: string[] | undefined;

  /**
   * <p>
   * The timestamp at which the dataview version was active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>
   * A unique identifier of the active version.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * @public
 */
export interface GetKxDataviewResponse {
  /**
   * <p>
   * The name of the database where you created the dataview.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>A unique identifier for the dataview.</p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *          The identifier of the availability zones.
   *       </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>
   * A unique identifier of the changeset that you want to use to ingest data. </p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>
   *    The current active changeset versions of the database on the given dataview.
   *
   * </p>
   * @public
   */
  activeVersions?: KxDataviewActiveVersion[] | undefined;

  /**
   * <p>A description of the dataview.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when new changesets are ingested. The default value is false.</p>
   * @public
   */
  autoUpdate?: boolean | undefined;

  /**
   * <p>Returns True if the dataview is created as writeable and False otherwise. </p>
   * @public
   */
  readWrite?: boolean | undefined;

  /**
   * <p>A unique identifier for the kdb environment, from where you want to retrieve the dataview details.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>
   *    The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   *       The status of dataview creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The dataview creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> – The dataview is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The dataview is active.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxDataviewStatus | undefined;

  /**
   * <p>
   * The error message when a failed state occurs.
   * </p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface GetKxEnvironmentRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * <p>A list of DNS server name and server IP.  This is used to set up Route-53 outbound resolvers.</p>
 * @public
 */
export interface CustomDNSServer {
  /**
   * <p>The name of the DNS server.</p>
   * @public
   */
  customDNSServerName: string | undefined;

  /**
   * <p>The IP address of the DNS server.</p>
   * @public
   */
  customDNSServerIP: string | undefined;
}

/**
 * <p>
 *          Defines the ICMP protocol that consists of the ICMP type and code.
 *       </p>
 * @public
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP type. A value of <i>-1</i> means all types.
   *       </p>
   * @public
   */
  type: number | undefined;

  /**
   * <p>
   *          The ICMP code. A value of <i>-1</i> means all codes for the specified ICMP type.
   *       </p>
   * @public
   */
  code: number | undefined;
}

/**
 * <p>
 *          The range of ports the rule applies to.
 *       </p>
 * @public
 */
export interface PortRange {
  /**
   * <p>
   *          The first port in the range.
   *       </p>
   * @public
   */
  from: number | undefined;

  /**
   * <p>
   *          The last port in the range.
   *       </p>
   * @public
   */
  to: number | undefined;
}

/**
 * <p>
 *        The network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. The entry is a set of numbered ingress and egress rules that determine whether a packet should be allowed in or out of a subnet associated with the ACL. We process the entries in the ACL according to the rule numbers, in ascending order.
 *       </p>
 * @public
 */
export interface NetworkACLEntry {
  /**
   * <p>
   *          The rule number for the entry. For example <i>100</i>. All the network ACL entries are processed in ascending order by rule number.
   *
   *       </p>
   * @public
   */
  ruleNumber: number | undefined;

  /**
   * <p>
   *          The protocol number. A value of <i>-1</i> means all the protocols.
   *       </p>
   * @public
   */
  protocol: string | undefined;

  /**
   * <p>
   *          Indicates whether to allow or deny the traffic that matches the rule.
   *       </p>
   * @public
   */
  ruleAction: RuleAction | undefined;

  /**
   * <p>
   *          The range of ports the rule applies to.
   *       </p>
   * @public
   */
  portRange?: PortRange | undefined;

  /**
   * <p>
   *          Defines the ICMP protocol that consists of the ICMP type and code.
   *       </p>
   * @public
   */
  icmpTypeCode?: IcmpTypeCode | undefined;

  /**
   * <p>
   *          The IPv4 network range to allow or deny, in CIDR notation. For example, <code>172.16.0.0/24</code>. We modify the specified CIDR block to its canonical form. For example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.
   *       </p>
   * @public
   */
  cidrBlock: string | undefined;
}

/**
 * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
 * @public
 */
export interface TransitGatewayConfiguration {
  /**
   * <p>The identifier of the transit gateway created by the customer to connect outbound traffics from kdb network to your internal network.</p>
   * @public
   */
  transitGatewayID: string | undefined;

  /**
   * <p>The routing CIDR on behalf of kdb environment. It could be any "/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer's transit gateway routing table so that the traffics could be routed to kdb network.</p>
   * @public
   */
  routableCIDRSpace: string | undefined;

  /**
   * <p>
   *          The rules that define how you manage the outbound traffic from kdb network to your internal network.
   *
   *       </p>
   * @public
   */
  attachmentNetworkAclConfiguration?: NetworkACLEntry[] | undefined;
}

/**
 * @public
 */
export interface GetKxEnvironmentResponse {
  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The status of the kdb environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The status of the network configuration.</p>
   * @public
   */
  tgwStatus?: TgwStatus | undefined;

  /**
   * <p>The status of DNS configuration.</p>
   * @public
   */
  dnsStatus?: DnsStatus | undefined;

  /**
   * <p>Specifies the error message that appears if a flow fails.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>A description for the kdb environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN identifier of the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   * @public
   */
  dedicatedServiceAccountId?: string | undefined;

  /**
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   * @public
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration | undefined;

  /**
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   * @public
   */
  customDNSConfiguration?: CustomDNSServer[] | undefined;

  /**
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the kdb environment was updated. </p>
   * @public
   */
  updateTimestamp?: Date | undefined;

  /**
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate authority of the
   *          kdb environment.</p>
   * @public
   */
  certificateAuthorityArn?: string | undefined;
}

/**
 * @public
 */
export interface GetKxScalingGroupRequest {
  /**
   * <p>A unique identifier for the kdb environment. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetKxScalingGroupResponse {
  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName?: string | undefined;

  /**
   * <p>
   *         The ARN identifier for the scaling group.
   *       </p>
   * @public
   */
  scalingGroupArn?: string | undefined;

  /**
   * <p>
   *       The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.</p>
   *          <p>It can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>kx.sg.large</code> – The host type with a configuration of 16 GiB
   *             memory and 2 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.xlarge</code> – The host type with a configuration of 32 GiB
   *                memory and 4 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.2xlarge</code> – The host type with a configuration of 64 GiB
   *                memory and 8 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.4xlarge</code> – The host type with a configuration of 108 GiB memory and 16 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.8xlarge</code> – The host type with a configuration of 216 GiB memory and 32 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.16xlarge</code> – The host type with a configuration of 432 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.32xlarge</code> – The host type with a configuration of 864 GiB memory and 128 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.16xlarge</code> – The host type with a configuration of 1949 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.24xlarge</code> – The host type with a configuration of 2948 GiB memory and 96 vCPUs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  hostType?: string | undefined;

  /**
   * <p>
   *    The list of Managed kdb clusters that are currently active in the given scaling group.
   *
   * </p>
   * @public
   */
  clusters?: string[] | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The status of scaling group.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The scaling group creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The scaling group creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The scaling group is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The scaling group is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The scaling group is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the scaling group.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The scaling group is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxScalingGroupStatus | undefined;

  /**
   * <p>
   * The error message when a failed state occurs.
   * </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>
   *    The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetKxUserRequest {
  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetKxUserResponse {
  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The IAM role ARN that is associated with the user.</p>
   * @public
   */
  iamRole?: string | undefined;
}

/**
 * @public
 */
export interface GetKxVolumeRequest {
  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the volume.</p>
   * @public
   */
  volumeName: string | undefined;
}

/**
 * <p>The structure containing the metadata of the attached clusters.</p>
 * @public
 */
export interface KxAttachedCluster {
  /**
   * <p>A unique name for the attached cluster.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>Specifies the type of cluster. The volume for TP and RDB cluster types will be used for TP logs.</p>
   * @public
   */
  clusterType?: KxClusterType | undefined;

  /**
   * <p>The status of the attached cluster.</p>
   *          <ul>
   *             <li>
   *                <p>PENDING – The cluster is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>CREATING – The cluster creation process is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The cluster creation process has failed.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING – The cluster creation process is running.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The cluster is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The cluster is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The cluster has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The cluster failed to delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterStatus?: KxClusterStatus | undefined;
}

/**
 * @public
 */
export interface GetKxVolumeResponse {
  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>
   * A unique identifier for the volume.</p>
   * @public
   */
  volumeName?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: KxVolumeType | undefined;

  /**
   * <p>
   * The ARN identifier of the volume.
   * </p>
   * @public
   */
  volumeArn?: string | undefined;

  /**
   * <p> Specifies the configuration for the Network attached storage (NAS_1) file system volume.</p>
   * @public
   */
  nas1Configuration?: KxNAS1Configuration | undefined;

  /**
   * <p>The status of volume creation.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The volume creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The volume creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The volume is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The volume is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATED – The volume is successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The volume is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the volume.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The volume is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxVolumeStatus | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>
   * The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>
   * A description of the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   * A list of cluster identifiers that a volume is attached to.
   * </p>
   * @public
   */
  attachedClusters?: KxAttachedCluster[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>A token generated by FinSpace that specifies where to continue pagination if a previous
   *          request was truncated. To get the next set of pages, pass in the <code>nextToken</code>nextToken value from the
   *          response object of the previous page call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>A list of all of your FinSpace environments.</p>
   * @public
   */
  environments?: Environment[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxChangesetsRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details of changeset.</p>
 * @public
 */
export interface KxChangesetListEntry {
  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>Beginning time from which the changeset is active. The value is determined as epoch time in
   *       milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   * @public
   */
  activeFromTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the changeset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p> Status of the changeset.</p>
   *          <ul>
   *             <li>
   *                <p>Pending – Changeset creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>Processing – Changeset creation is running.</p>
   *             </li>
   *             <li>
   *                <p>Failed – Changeset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>Complete – Changeset creation has succeeded.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ChangesetStatus | undefined;
}

/**
 * @public
 */
export interface ListKxChangesetsResponse {
  /**
   * <p>A list of changesets for a database.</p>
   * @public
   */
  kxChangesets?: KxChangesetListEntry[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxClusterNodesRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique name for the cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A structure that stores metadata for a kdb node.</p>
 * @public
 */
export interface KxNode {
  /**
   * <p>A unique identifier for the node.</p>
   * @public
   */
  nodeId?: string | undefined;

  /**
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The time when a particular node is started.  The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  launchTime?: Date | undefined;

  /**
   * <p>
   *          Specifies the status of the cluster nodes.   </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – The node is actively serving.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code> – The node is being prepared.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxNodeStatus | undefined;
}

/**
 * @public
 */
export interface ListKxClusterNodesResponse {
  /**
   * <p>A list of nodes associated with the cluster.</p>
   * @public
   */
  nodes?: KxNode[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxClustersRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>Specifies the type of KDB database that is being created. The following types are available: </p>
   *          <ul>
   *             <li>
   *                <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p>
   *             </li>
   *             <li>
   *                <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.</p>
   *             </li>
   *             <li>
   *                <p>GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only <code>SINGLE</code> AZ mode.</p>
   *             </li>
   *             <li>
   *                <p>Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterType?: KxClusterType | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The details of a kdb cluster.</p>
 * @public
 */
export interface KxCluster {
  /**
   * <p>The status of a cluster.</p>
   *          <ul>
   *             <li>
   *                <p>PENDING – The cluster is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>CREATING –The cluster creation process is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED– The cluster creation process has failed.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING – The cluster creation process is running.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The cluster is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p> DELETING – The cluster is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The cluster has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The cluster failed to delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxClusterStatus | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>A unique name for the cluster.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>Specifies the type of KDB database that is being created. The following types are available: </p>
   *          <ul>
   *             <li>
   *                <p>HDB – A Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed kdb databases mounted to the cluster.</p>
   *             </li>
   *             <li>
   *                <p>RDB – A Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the <code>savedownStorageConfiguration</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>GATEWAY – A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.</p>
   *             </li>
   *             <li>
   *                <p>GP – A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only <code>SINGLE</code> AZ mode.</p>
   *             </li>
   *             <li>
   *                <p>Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clusterType?: KxClusterType | undefined;

  /**
   * <p>A description of the cluster.</p>
   * @public
   */
  clusterDescription?: string | undefined;

  /**
   * <p>A version of the FinSpace managed kdb to run.</p>
   * @public
   */
  releaseLabel?: string | undefined;

  /**
   * <p>
   * A list of volumes attached to the cluster.
   * </p>
   * @public
   */
  volumes?: Volume[] | undefined;

  /**
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   * @public
   */
  initializationScript?: string | undefined;

  /**
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The number of availability zones assigned per cluster. This can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE</code> – Assigns one availability zone per cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI</code> – Assigns all the availability zones per cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListKxClustersResponse {
  /**
   * <p>Lists the cluster details.</p>
   * @public
   */
  kxClusterSummaries?: KxCluster[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxDatabasesRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Details about a FinSpace managed kdb database</p>
 * @public
 */
export interface KxDatabaseListEntry {
  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>The timestamp at which the database was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListKxDatabasesResponse {
  /**
   * <p>A list of databases in the kdb environment.</p>
   * @public
   */
  kxDatabases?: KxDatabaseListEntry[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxDataviewsRequest {
  /**
   * <p>A unique identifier for the kdb environment, for which you want to retrieve a list of dataviews.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * The name of the database where the dataviews were created.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>
   * A token that indicates where a results page should begin.
   * </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *    A collection of kdb dataview entries.
 *
 * </p>
 * @public
 */
export interface KxDataviewListEntry {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>
   * A unique identifier of the database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>
   * A unique identifier of the dataview.</p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *          The identifier of the availability zones.
   *       </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>
   *    The active changeset versions for the given dataview entry.
   *
   * </p>
   * @public
   */
  activeVersions?: KxDataviewActiveVersion[] | undefined;

  /**
   * <p>
   *    The status of a given dataview entry.
   *
   * </p>
   * @public
   */
  status?: KxDataviewStatus | undefined;

  /**
   * <p>
   * A description for the dataview list entry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *    The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when you ingest new changesets. The default value is false.
   * </p>
   * @public
   */
  autoUpdate?: boolean | undefined;

  /**
   * <p> Returns True if the dataview is created as writeable and False otherwise.  </p>
   * @public
   */
  readWrite?: boolean | undefined;

  /**
   * <p>
   * The timestamp at which the dataview list entry was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The last time that the dataview list was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   * The error message when a failed state occurs.
   * </p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListKxDataviewsResponse {
  /**
   * <p>
   *    The list of kdb dataviews that are currently active for the given database.
   * </p>
   * @public
   */
  kxDataviews?: KxDataviewListEntry[] | undefined;

  /**
   * <p>
   * A token that indicates where a results page should begin. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxEnvironmentsRequest {
  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The details of a kdb environment.</p>
 * @public
 */
export interface KxEnvironment {
  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The unique identifier of the AWS account in which you create the kdb environment.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The status of the environment creation. </p>
   *          <ul>
   *             <li>
   *                <p>CREATE_REQUESTED – Environment creation has been requested.</p>
   *             </li>
   *             <li>
   *                <p>CREATING – Environment is in the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>FAILED_CREATION – Environment creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>CREATED – Environment is successfully created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>DELETE REQUESTED – Environment deletion has been requested.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – Environment is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>RETRY_DELETION – Initial environment deletion failed, system is reattempting delete.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – Environment has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>FAILED_DELETION – Environment deletion has failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The status of the network configuration.</p>
   * @public
   */
  tgwStatus?: TgwStatus | undefined;

  /**
   * <p>The status of DNS configuration.</p>
   * @public
   */
  dnsStatus?: DnsStatus | undefined;

  /**
   * <p>Specifies the error message that appears if a flow fails. </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>A description of the kdb environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your kdb environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The unique identifier of the KMS key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   * @public
   */
  dedicatedServiceAccountId?: string | undefined;

  /**
   * <p>Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.</p>
   * @public
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration | undefined;

  /**
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   * @public
   */
  customDNSConfiguration?: CustomDNSServer[] | undefined;

  /**
   * <p>The timestamp at which the kdb environment was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the kdb environment was modified in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  updateTimestamp?: Date | undefined;

  /**
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate authority:</p>
   * @public
   */
  certificateAuthorityArn?: string | undefined;
}

/**
 * @public
 */
export interface ListKxEnvironmentsResponse {
  /**
   * <p>A list of environments in an account.</p>
   * @public
   */
  environments?: KxEnvironment[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxScalingGroupsRequest {
  /**
   * <p>A unique identifier for the kdb environment, for which you want to retrieve a list of scaling groups.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   * A token that indicates where a results page should begin. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 * A structure for storing metadata of scaling group.</p>
 * @public
 */
export interface KxScalingGroup {
  /**
   * <p>A unique identifier for the kdb scaling group. </p>
   * @public
   */
  scalingGroupName?: string | undefined;

  /**
   * <p>
   *    The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.</p>
   *          <p>You can add one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>kx.sg.large</code> – The host type with a configuration of 16 GiB
   *             memory and 2 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.xlarge</code> – The host type with a configuration of 32 GiB
   *                memory and 4 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.2xlarge</code> – The host type with a configuration of 64 GiB
   *                memory and 8 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.4xlarge</code> – The host type with a configuration of 108 GiB memory and 16 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.8xlarge</code> – The host type with a configuration of 216 GiB memory and 32 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.16xlarge</code> – The host type with a configuration of 432 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg.32xlarge</code> – The host type with a configuration of 864 GiB memory and 128 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.16xlarge</code> – The host type with a configuration of 1949 GiB memory and 64 vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>kx.sg1.24xlarge</code> – The host type with a configuration of 2948 GiB memory and 96 vCPUs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  hostType?: string | undefined;

  /**
   * <p>
   *    The list of clusters currently active in a given scaling group.
   *
   * </p>
   * @public
   */
  clusters?: string[] | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>
   * The status of scaling groups.
   * </p>
   * @public
   */
  status?: KxScalingGroupStatus | undefined;

  /**
   * <p>
   * The error message when a failed state occurs.
   * </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>
   *    The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListKxScalingGroupsResponse {
  /**
   * <p>
   * A list of scaling groups available in a kdb environment.</p>
   * @public
   */
  scalingGroups?: KxScalingGroup[] | undefined;

  /**
   * <p>
   * A token that indicates where a results page should begin. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxUsersRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A structure that stores metadata for a kdb user.</p>
 * @public
 */
export interface KxUser {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *          how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The IAM role ARN that is associated with the user.</p>
   * @public
   */
  iamRole?: string | undefined;

  /**
   * <p>The timestamp at which the kdb user was created. </p>
   * @public
   */
  createTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the kdb user was updated. </p>
   * @public
   */
  updateTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListKxUsersResponse {
  /**
   * <p>A list of users in a kdb environment.</p>
   * @public
   */
  users?: KxUser[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKxVolumesRequest {
  /**
   * <p>A unique identifier for the kdb environment, whose clusters can attach to the volume. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: KxVolumeType | undefined;
}

/**
 * <p>
 * The structure that contains the metadata of the volume.
 * </p>
 * @public
 */
export interface KxVolume {
  /**
   * <p>A unique identifier for the volume.</p>
   * @public
   */
  volumeName?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: KxVolumeType | undefined;

  /**
   * <p>The status of volume.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The volume creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The volume creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The volume is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The volume is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATED – The volume is successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The volume is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the volume.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The volume is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxVolumeStatus | undefined;

  /**
   * <p>
   * A description of the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>
   * The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListKxVolumesResponse {
  /**
   * <p>
   * A summary of volumes.
   * </p>
   * @public
   */
  kxVolumeSummaries?: KxVolume[] | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of all tags for a resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
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
   * <p>A FinSpace resource from which you want to remove a tag or tags. The value for this
   *          parameter is an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys (names) of one or more tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * <p>The identifier of the FinSpace environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Authentication mode for the environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  federationMode?: FederationMode | undefined;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   * @public
   */
  federationParameters?: FederationParameters | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * <p>Returns the FinSpace environment object.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * <p>
 *          The configuration that allows you to choose how you want to update code on a cluster. Depending on the option you choose, you can reduce the time it takes to update the cluster.
 *       </p>
 * @public
 */
export interface KxClusterCodeDeploymentConfiguration {
  /**
   * <p>
   *         The type of deployment that you want on a cluster.
   *
   *       </p>
   *          <ul>
   *             <li>
   *                <p>ROLLING – This options updates the cluster by stopping the exiting q process and starting a new q process with updated configuration.</p>
   *             </li>
   *             <li>
   *                <p>NO_RESTART – This option updates the cluster without stopping the running q process. It is only available for <code>GP</code> type cluster. This option is quicker as it reduces the turn around time to update configuration on a cluster. </p>
   *                <p>With this deployment mode, you cannot update the <code>initializationScript</code> and <code>commandLineArguments</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>FORCE – This option updates the cluster by immediately stopping all the running processes before starting up new ones with the updated configuration. </p>
   *             </li>
   *          </ul>
   * @public
   */
  deploymentStrategy: KxClusterCodeDeploymentStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateKxClusterCodeConfigurationRequest {
  /**
   * <p>
   *          A unique identifier of the kdb environment.
   *       </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The structure of the customer code available within the running cluster.</p>
   * @public
   */
  code: CodeConfiguration | undefined;

  /**
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *          <i>.zip</i> file that contains the custom code, which will be loaded on
   *          the cluster. It must include the file name itself. For example,
   *          <code>somedir/init.q</code>.</p>
   *          <p>You cannot update this parameter for a <code>NO_RESTART</code> deployment.</p>
   * @public
   */
  initializationScript?: string | undefined;

  /**
   * <p>Specifies the key-value pairs to make them available inside the cluster.</p>
   *          <p>You cannot update this parameter for a <code>NO_RESTART</code> deployment.</p>
   * @public
   */
  commandLineArguments?: KxCommandLineArgument[] | undefined;

  /**
   * <p>
   *          The configuration that allows you to choose how you want to update the code on a cluster.
   *       </p>
   * @public
   */
  deploymentConfiguration?: KxClusterCodeDeploymentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKxClusterCodeConfigurationResponse {}

/**
 * <p>
 *          The configuration that allows you to choose how you want to update the databases on a cluster. Depending on the option you choose, you can reduce the time it takes to update the cluster.
 *       </p>
 * @public
 */
export interface KxDeploymentConfiguration {
  /**
   * <p>
   *          The type of deployment that you want on a cluster.
   *
   *       </p>
   *          <ul>
   *             <li>
   *                <p>ROLLING – This options updates the cluster by stopping the exiting q process and starting a new q process with updated configuration.</p>
   *             </li>
   *             <li>
   *                <p>NO_RESTART – This option updates the cluster without stopping the running q process. It is only available for <code>HDB</code> type cluster. This option is quicker as it reduces the turn around time to update configuration on a cluster. </p>
   *                <p>With this deployment mode, you cannot update the <code>initializationScript</code> and <code>commandLineArguments</code> parameters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  deploymentStrategy: KxDeploymentStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateKxClusterDatabasesRequest {
  /**
   * <p>The unique identifier of a kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique name for the cluster that you want to modify.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The structure of databases mounted on the cluster.</p>
   * @public
   */
  databases: KxDatabaseConfiguration[] | undefined;

  /**
   * <p>
   *          The configuration that allows you to choose how you want to update the databases on a cluster.
   *       </p>
   * @public
   */
  deploymentConfiguration?: KxDeploymentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKxClusterDatabasesResponse {}

/**
 * @public
 */
export interface UpdateKxDatabaseRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxDatabaseResponse {
  /**
   * <p>The name of the kdb database.</p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A description of the database.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateKxDataviewRequest {
  /**
   * <p>A unique identifier for the kdb environment, where you want to update the dataview.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * The name of the database.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the dataview that you want to update.</p>
   * @public
   */
  dataviewName: string | undefined;

  /**
   * <p>
   *        The description for a dataview.
   *       </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxDataviewResponse {
  /**
   * <p>A unique identifier for the kdb environment, where you want to update the dataview.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>
   * The name of the database.
   * </p>
   * @public
   */
  databaseName?: string | undefined;

  /**
   * <p>
   *    The name of the database under which the dataview was created.
   *
   * </p>
   * @public
   */
  dataviewName?: string | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>
   *          The identifier of the availability zones.
   *       </p>
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * <p>A unique identifier for the changeset.</p>
   * @public
   */
  changesetId?: string | undefined;

  /**
   * <p>
   *       The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. </p>
   * @public
   */
  segmentConfigurations?: KxDataviewSegmentConfiguration[] | undefined;

  /**
   * <p>
   *    The current active changeset versions of the database on the given dataview.
   *
   * </p>
   * @public
   */
  activeVersions?: KxDataviewActiveVersion[] | undefined;

  /**
   * <p>
   *       The status of dataview creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The dataview creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> – The dataview is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The dataview is active.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxDataviewStatus | undefined;

  /**
   * <p>The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when new changesets are ingested. The default value is false.</p>
   * @public
   */
  autoUpdate?: boolean | undefined;

  /**
   * <p>Returns True if the dataview is created as writeable and False otherwise. </p>
   * @public
   */
  readWrite?: boolean | undefined;

  /**
   * <p>A description of the dataview.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *    The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>
   *    The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
   * </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the kdb environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentResponse {
  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The status of the kdb environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The status of the network configuration.</p>
   * @public
   */
  tgwStatus?: TgwStatus | undefined;

  /**
   * <p>The status of DNS configuration.</p>
   * @public
   */
  dnsStatus?: DnsStatus | undefined;

  /**
   * <p>Specifies the error message that appears if a flow fails.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN identifier of the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   * @public
   */
  dedicatedServiceAccountId?: string | undefined;

  /**
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   * @public
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration | undefined;

  /**
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   * @public
   */
  customDNSConfiguration?: CustomDNSServer[] | undefined;

  /**
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the kdb environment was updated. </p>
   * @public
   */
  updateTimestamp?: Date | undefined;

  /**
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentNetworkRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.</p>
   * @public
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration | undefined;

  /**
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   * @public
   */
  customDNSConfiguration?: CustomDNSServer[] | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentNetworkResponse {
  /**
   * <p>The name of the kdb environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The status of the kdb environment.</p>
   * @public
   */
  status?: EnvironmentStatus | undefined;

  /**
   * <p>The status of the network configuration.</p>
   * @public
   */
  tgwStatus?: TgwStatus | undefined;

  /**
   * <p>The status of DNS configuration.</p>
   * @public
   */
  dnsStatus?: DnsStatus | undefined;

  /**
   * <p>Specifies the error message that appears if a flow fails.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN identifier of the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   * @public
   */
  dedicatedServiceAccountId?: string | undefined;

  /**
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   * @public
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration | undefined;

  /**
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   * @public
   */
  customDNSConfiguration?: CustomDNSServer[] | undefined;

  /**
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp at which the kdb environment was updated. </p>
   * @public
   */
  updateTimestamp?: Date | undefined;

  /**
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateKxUserRequest {
  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName: string | undefined;

  /**
   * <p>The IAM role ARN that is associated with the user.</p>
   * @public
   */
  iamRole: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxUserResponse {
  /**
   * <p>A unique identifier for the user.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>A unique identifier for the kdb environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The IAM role ARN that is associated with the user.</p>
   * @public
   */
  iamRole?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKxVolumeRequest {
  /**
   * <p>A unique identifier for the kdb environment where you created the storage volume. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>
   * A unique identifier for the volume.</p>
   * @public
   */
  volumeName: string | undefined;

  /**
   * <p>
   * A description of the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> Specifies the configuration for the Network attached storage (NAS_1) file system volume.</p>
   * @public
   */
  nas1Configuration?: KxNAS1Configuration | undefined;
}

/**
 * @public
 */
export interface UpdateKxVolumeResponse {
  /**
   * <p>A unique identifier for the kdb environment where you want to update the volume. </p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>A unique identifier for the volume that you want to update.</p>
   * @public
   */
  volumeName?: string | undefined;

  /**
   * <p>
   *       The type of file system volume. Currently, FinSpace only supports <code>NAS_1</code> volume type.
   *    </p>
   * @public
   */
  volumeType?: KxVolumeType | undefined;

  /**
   * <p>
   * The ARN identifier of the volume.
   * </p>
   * @public
   */
  volumeArn?: string | undefined;

  /**
   * <p> Specifies the configuration for the Network attached storage (NAS_1) file system volume.</p>
   * @public
   */
  nas1Configuration?: KxNAS1Configuration | undefined;

  /**
   * <p>The status of the volume.</p>
   *          <ul>
   *             <li>
   *                <p>CREATING – The volume creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED – The volume creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE – The volume is active.</p>
   *             </li>
   *             <li>
   *                <p>UPDATING – The volume is in the process of being updated.</p>
   *             </li>
   *             <li>
   *                <p>UPDATE_FAILED – The update action failed.</p>
   *             </li>
   *             <li>
   *                <p>UPDATED – The volume is successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>DELETING – The volume is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED – The system failed to delete the volume.</p>
   *             </li>
   *             <li>
   *                <p>DELETED – The volume is successfully deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: KxVolumeStatus | undefined;

  /**
   * <p>
   * The description for the volume.
   * </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The error message when a failed state occurs. </p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>
   * The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;

  /**
   * <p>The number of availability zones you want to assign per volume. Currently, FinSpace only supports <code>SINGLE</code> for volumes. This places dataview in a single AZ.</p>
   * @public
   */
  azMode?: KxAzMode | undefined;

  /**
   * <p>The identifier of the availability zones.</p>
   * @public
   */
  availabilityZoneIds?: string[] | undefined;

  /**
   * <p>The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   * Specifies the clusters that a volume is attached to.
   * </p>
   * @public
   */
  attachedClusters?: KxAttachedCluster[] | undefined;
}
