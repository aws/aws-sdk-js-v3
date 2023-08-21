// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FinspaceServiceException as __BaseException } from "./FinspaceServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
export const AutoScalingMetric = {
  CPU_UTILIZATION_PERCENTAGE: "CPU_UTILIZATION_PERCENTAGE",
} as const;

/**
 * @public
 */
export type AutoScalingMetric = (typeof AutoScalingMetric)[keyof typeof AutoScalingMetric];

/**
 * @public
 * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster. </p>
 */
export interface AutoScalingConfiguration {
  /**
   * @public
   * <p>The lowest number of nodes to scale. This value must be at least 1 and less than the <code>maxNodeCount</code>. If the nodes in a cluster belong to multiple availability zones, then <code>minNodeCount</code> must be at least 3.</p>
   */
  minNodeCount?: number;

  /**
   * @public
   * <p>The highest number of nodes to scale. This value cannot be greater than 5.</p>
   */
  maxNodeCount?: number;

  /**
   * @public
   * <p> The metric your cluster will track in order to scale in and out. For example, <code>CPU_UTILIZATION_PERCENTAGE</code> is the average CPU usage across all the nodes in a cluster.</p>
   */
  autoScalingMetric?: AutoScalingMetric | string;

  /**
   * @public
   * <p>The desired value of the chosen <code>autoScalingMetric</code>. When the metric drops below this value, the cluster will scale in. When the metric goes above this value, the cluster will scale out. You can set the target value between 1 and 100 percent.</p>
   */
  metricTarget?: number;

  /**
   * @public
   * <p>The duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event.</p>
   */
  scaleInCooldownSeconds?: number;

  /**
   * @public
   * <p>The duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event.</p>
   */
  scaleOutCooldownSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const FederationMode = {
  FEDERATED: "FEDERATED",
  LOCAL: "LOCAL",
} as const;

/**
 * @public
 */
export type FederationMode = (typeof FederationMode)[keyof typeof FederationMode];

/**
 * @public
 * <p>Configuration information when authentication mode is FEDERATED.</p>
 */
export interface FederationParameters {
  /**
   * @public
   * <p>SAML 2.0 Metadata document from identity provider (IdP).</p>
   */
  samlMetadataDocument?: string;

  /**
   * @public
   * <p>Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).</p>
   */
  samlMetadataURL?: string;

  /**
   * @public
   * <p>The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration
   *        (IdP).</p>
   */
  applicationCallBackURL?: string;

  /**
   * @public
   * <p>The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.</p>
   */
  federationURN?: string;

  /**
   * @public
   * <p>Name of the identity provider (IdP).</p>
   */
  federationProviderName?: string;

  /**
   * @public
   * <p>SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to
   *          the attribute definition in which user email is set. For example, name would be <code>Email</code> and
   *          value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>.
   *          Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.</p>
   */
  attributeMap?: Record<string, string>;
}

/**
 * @public
 * <p>Configuration information for the superuser.</p>
 */
export interface SuperuserParameters {
  /**
   * @public
   * <p>The email address of the superuser.</p>
   */
  emailAddress: string | undefined;

  /**
   * @public
   * <p>The first name of the superuser.</p>
   */
  firstName: string | undefined;

  /**
   * @public
   * <p>The last name of the superuser.</p>
   */
  lastName: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * @public
   * <p>The name of the FinSpace environment to be created.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the FinSpace environment to be created.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The KMS key id to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Add tags to your FinSpace environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
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
   */
  federationMode?: FederationMode | string;

  /**
   * @public
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;

  /**
   * @public
   * <p>Configuration information for the superuser.</p>
   */
  superuserParameters?: SuperuserParameters;

  /**
   * @public
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
   */
  dataBundles?: string[];
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * @public
   * <p>The unique identifier for FinSpace environment that you created.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the FinSpace environment that you created.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The sign-in URL for the web application of the FinSpace environment you created.</p>
   */
  environmentUrl?: string;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
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
 * @public
 * <p>A service limit or quota is exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p> You have exceeded your service quota. To perform the requested action,
 *          remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
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
 * @public
 * <p>There was a conflict with this action, and it could not be completed.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the conflict exception.</p>
   */
  reason?: string;

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
    this.reason = opts.reason;
  }
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * <p>A list of change request objects.</p>
 */
export interface ChangeRequest {
  /**
   * @public
   * <p>Defines the type of change request. A <code>changeType</code> can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>PUT – Adds or updates files in a database.</p>
   *             </li>
   *             <li>
   *                <p>DELETE – Deletes files in a database.</p>
   *             </li>
   *          </ul>
   */
  changeType: ChangeType | string | undefined;

  /**
   * @public
   * <p>Defines the S3 path of the source file that is required to add or update files in a database.</p>
   */
  s3Path?: string;

  /**
   * @public
   * <p>Defines the path within the database directory. </p>
   */
  dbPath: string | undefined;
}

/**
 * @public
 */
export interface CreateKxChangesetRequest {
  /**
   * @public
   * <p>A unique identifier of the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A list of change request objects that are run in order. A change request object consists of  changeType , s3Path, and  a dbPath.
   *       A changeType can has the following values: </p>
   *          <ul>
   *             <li>
   *                <p>PUT – Adds or updates files in a database.</p>
   *             </li>
   *             <li>
   *                <p>DELETE – Deletes files in a database.</p>
   *             </li>
   *          </ul>
   *          <p>All the change requests require a mandatory <i>dbPath</i> attribute that
   *          defines the path within the database directory. The <i>s3Path</i> attribute
   *          defines the s3 source file path and is required for a PUT change type.</p>
   *          <p>Here is an example
   *       of how you can use the change request object:</p>
   *          <p>
   *             <code>[
   *          \{ "changeType": "PUT", "s3Path":"s3://bucket/db/2020.01.02/", "dbPath":"/2020.01.02/"\},
   *          \{ "changeType": "PUT", "s3Path":"s3://bucket/db/sym", "dbPath":"/"\},
   *          \{ "changeType": "DELETE", "dbPath": "/2020.01.01/"\}
   *          ]</code>
   *          </p>
   *          <p>In this example, the first request with <i>PUT</i> change type allows you to
   *          add files in the given s3Path under the <i>2020.01.02</i> partition of the
   *          database. The second request with <i>PUT</i> change type allows you to add a
   *          single sym file at database root location. The last request with
   *             <i>DELETE</i> change type allows you to delete the files under the
   *             <i>2020.01.01</i> partition of the database. </p>
   */
  changeRequests: ChangeRequest[] | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const ErrorDetails = {
  ACCESS_DENIED: "Missing required permission to perform this request.",
  CANCELLED: "Cancelled",
  INTERNAL_SERVICE_EXCEPTION: "An internal error has occurred.",
  RESOURCE_NOT_FOUND: "One or more inputs to this request were not found.",
  SERVICE_QUOTA_EXCEEDED: "Service limits have been exceeded.",
  THROTTLING: "The system temporarily lacks sufficient resources to process the request.",
  USER_RECOVERABLE: "A user recoverable error has occurred",
  VALIDATION: "The inputs to this request are invalid.",
} as const;

/**
 * @public
 */
export type ErrorDetails = (typeof ErrorDetails)[keyof typeof ErrorDetails];

/**
 * @public
 * <p>Provides details in the event of a failed flow, including the error type and the related error message.</p>
 */
export interface ErrorInfo {
  /**
   * @public
   * <p>Specifies the error message that appears if a flow fails. </p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>Specifies the type of error.</p>
   */
  errorType?: ErrorDetails | string;
}

/**
 * @public
 * @enum
 */
export const ChangesetStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type ChangesetStatus = (typeof ChangesetStatus)[keyof typeof ChangesetStatus];

/**
 * @public
 */
export interface CreateKxChangesetResponse {
  /**
   * @public
   * <p>A unique identifier for the changeset.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A list of change requests.</p>
   */
  changeRequests?: ChangeRequest[];

  /**
   * @public
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
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
   */
  status?: ChangesetStatus | string;

  /**
   * @public
   * <p>The details of the error that you receive when creating a changeset. It consists of the type of error and the error message.</p>
   */
  errorInfo?: ErrorInfo;
}

/**
 * @public
 * <p>One or more resources can't be found.</p>
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
 * @public
 * @enum
 */
export const KxAzMode = {
  MULTI: "MULTI",
  SINGLE: "SINGLE",
} as const;

/**
 * @public
 */
export type KxAzMode = (typeof KxAzMode)[keyof typeof KxAzMode];

/**
 * @public
 * <p>The configuration for read only disk cache associated with a cluster.</p>
 */
export interface KxCacheStorageConfiguration {
  /**
   * @public
   * <p>The type of cache storage . The valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>CACHE_1000 – This type provides at least 1000 MB/s disk access throughput. </p>
   *             </li>
   *          </ul>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The size of cache in Gigabytes.</p>
   */
  size: number | undefined;
}

/**
 * @public
 * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
 */
export interface CapacityConfiguration {
  /**
   * @public
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
   */
  nodeType?: string;

  /**
   * @public
   * <p>The number of instances running in a cluster.</p>
   */
  nodeCount?: number;
}

/**
 * @public
 * @enum
 */
export const KxClusterType = {
  GATEWAY: "GATEWAY",
  HDB: "HDB",
  RDB: "RDB",
} as const;

/**
 * @public
 */
export type KxClusterType = (typeof KxClusterType)[keyof typeof KxClusterType];

/**
 * @public
 * <p>The structure of the customer code available within the running cluster.</p>
 */
export interface CodeConfiguration {
  /**
   * @public
   * <p>A unique name for the S3 bucket.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>The full S3 path (excluding bucket) to the .zip file. This file contains the code that is loaded onto the cluster when it's started.</p>
   */
  s3Key?: string;

  /**
   * @public
   * <p>The version of an S3 object.</p>
   */
  s3ObjectVersion?: string;
}

/**
 * @public
 * <p>Defines the key-value pairs to make them available inside the cluster.</p>
 */
export interface KxCommandLineArgument {
  /**
   * @public
   * <p>The name of the key.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The value of the key.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>The structure of database cache configuration that is used for mapping database paths to cache types in clusters.</p>
 */
export interface KxDatabaseCacheConfiguration {
  /**
   * @public
   * <p>The type of disk cache. This parameter is used to map the database path to cache storage. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>CACHE_1000 – This type provides at least 1000 MB/s disk access throughput. </p>
   *             </li>
   *          </ul>
   */
  cacheType: string | undefined;

  /**
   * @public
   * <p>Specifies the portions of database that will be loaded into the cache for access.</p>
   */
  dbPaths: string[] | undefined;
}

/**
 * @public
 * <p>The configuration of data that is available for querying from this database.</p>
 */
export interface KxDatabaseConfiguration {
  /**
   * @public
   * <p>The name of the kdb database. When this parameter is specified in the structure, S3 with the whole database is included by default.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>Configuration details for the disk cache used to increase performance reading from a kdb database mounted to the cluster.</p>
   */
  cacheConfigurations?: KxDatabaseCacheConfiguration[];

  /**
   * @public
   * <p>A unique identifier of the changeset that is associated with the cluster.</p>
   */
  changesetId?: string;
}

/**
 * @public
 * @enum
 */
export const KxSavedownStorageType = {
  SDS01: "SDS01",
} as const;

/**
 * @public
 */
export type KxSavedownStorageType = (typeof KxSavedownStorageType)[keyof typeof KxSavedownStorageType];

/**
 * @public
 * <p>The size and type of temporary storage that is used to hold data during the savedown process. All the data written to this storage space is lost when the cluster node is restarted.</p>
 */
export interface KxSavedownStorageConfiguration {
  /**
   * @public
   * <p>The type of writeable storage space for temporarily storing your savedown data. The valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>SDS01 – This type represents 3000 IOPS and io2 ebs volume type.</p>
   *             </li>
   *          </ul>
   */
  type: KxSavedownStorageType | string | undefined;

  /**
   * @public
   * <p>The size of temporary storage in gibibytes.</p>
   */
  size: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  IP_V4: "IP_V4",
} as const;

/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

/**
 * @public
 * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>The identifier of the VPC endpoint.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The  unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The identifier of the subnet that the Privatelink VPC endpoint uses to connect to the cluster.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The IP address type for cluster network configuration parameters. The following type is available:</p>
   *          <ul>
   *             <li>
   *                <p>IP_V4 – IP address version 4</p>
   *             </li>
   *          </ul>
   */
  ipAddressType?: IPAddressType | string;
}

/**
 * @public
 */
export interface CreateKxClusterRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A unique name for the cluster that you want to create.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
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
   *          </ul>
   */
  clusterType: KxClusterType | string | undefined;

  /**
   * @public
   * <p>A list of databases that will be available for querying.</p>
   */
  databases?: KxDatabaseConfiguration[];

  /**
   * @public
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[];

  /**
   * @public
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   */
  autoScalingConfiguration?: AutoScalingConfiguration;

  /**
   * @public
   * <p>A description of the cluster.</p>
   */
  clusterDescription?: string;

  /**
   * @public
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   */
  capacityConfiguration: CapacityConfiguration | undefined;

  /**
   * @public
   * <p>The version of FinSpace managed kdb to run.</p>
   */
  releaseLabel: string | undefined;

  /**
   * @public
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *             <i>.zip</i> file that contains the custom code, which will be loaded on
   *          the cluster. It must include the file name itself. For example,
   *          <code>somedir/init.q</code>.</p>
   */
  initializationScript?: string;

  /**
   * @public
   * <p>Defines the key-value pairs to make them available inside the cluster.</p>
   */
  commandLineArguments?: KxCommandLineArgument[];

  /**
   * @public
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   */
  code?: CodeConfiguration;

  /**
   * @public
   * <p>An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.</p>
   */
  executionRole?: string;

  /**
   * @public
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;

  /**
   * @public
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
   */
  azMode: KxAzMode | string | undefined;

  /**
   * @public
   * <p>The availability zone identifiers for the requested regions.</p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p>A list of key-value pairs to label the cluster. You can add up to 50 tags to a cluster.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const KxClusterStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type KxClusterStatus = (typeof KxClusterStatus)[keyof typeof KxClusterStatus];

/**
 * @public
 */
export interface CreateKxClusterResponse {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
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
   */
  status?: KxClusterStatus | string;

  /**
   * @public
   * <p>The error message when a failed state occurs. </p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>A unique name for the cluster.</p>
   */
  clusterName?: string;

  /**
   * @public
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
   *          </ul>
   */
  clusterType?: KxClusterType | string;

  /**
   * @public
   * <p>A list of databases that will be available for querying.</p>
   */
  databases?: KxDatabaseConfiguration[];

  /**
   * @public
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[];

  /**
   * @public
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   */
  autoScalingConfiguration?: AutoScalingConfiguration;

  /**
   * @public
   * <p>A description of the cluster.</p>
   */
  clusterDescription?: string;

  /**
   * @public
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   */
  capacityConfiguration?: CapacityConfiguration;

  /**
   * @public
   * <p>A version of the FinSpace managed kdb to run.</p>
   */
  releaseLabel?: string;

  /**
   * @public
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   */
  initializationScript?: string;

  /**
   * @public
   * <p>Defines the key-value pairs to make them available inside the cluster.</p>
   */
  commandLineArguments?: KxCommandLineArgument[];

  /**
   * @public
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   */
  code?: CodeConfiguration;

  /**
   * @public
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   */
  executionRole?: string;

  /**
   * @public
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;

  /**
   * @public
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
   */
  azMode?: KxAzMode | string;

  /**
   * @public
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateKxDatabaseRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of key-value pairs to label the kdb database. You can add up to 50 tags to your kdb database</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateKxDatabaseResponse {
  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>The ARN identifier of the database.</p>
   */
  databaseArn?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The last time that the database was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @public
 * <p>The specified resource group already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface CreateKxEnvironmentRequest {
  /**
   * @public
   * <p>The name of the kdb environment that you want to create.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the kdb environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs to label the kdb environment. You can add up to 50 tags to your kdb environment.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  CREATED: "CREATED",
  CREATE_REQUESTED: "CREATE_REQUESTED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_REQUESTED: "DELETE_REQUESTED",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATING_NETWORK: "FAILED_UPDATING_NETWORK",
  RETRY_DELETION: "RETRY_DELETION",
  SUSPENDED: "SUSPENDED",
  UPDATE_NETWORK_REQUESTED: "UPDATE_NETWORK_REQUESTED",
  UPDATING_NETWORK: "UPDATING_NETWORK",
} as const;

/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 */
export interface CreateKxEnvironmentResponse {
  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The status of the kdb environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A description for the kdb environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN identifier of the environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The timestamp at which the kdb environment was created in FinSpace.</p>
   */
  creationTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateKxUserRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment where you want to create a user.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName: string | undefined;

  /**
   * @public
   * <p>The IAM role ARN that will be associated with the user.</p>
   */
  iamRole: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs to label the user. You can add up to 50 tags to a user.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateKxUserResponse {
  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   */
  userArn?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The IAM role ARN that will be associated with the user.</p>
   */
  iamRole?: string;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * @public
   * <p>The identifier for the FinSpace environment.</p>
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
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the cluster that you want to delete.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteKxClusterResponse {}

/**
 * @public
 */
export interface DeleteKxDatabaseRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database that you want to delete.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteKxDatabaseResponse {}

/**
 * @public
 */
export interface DeleteKxEnvironmentRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxEnvironmentResponse {}

/**
 * @public
 */
export interface DeleteKxUserRequest {
  /**
   * @public
   * <p>A unique identifier for the user that you want to delete.</p>
   */
  userName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKxUserResponse {}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * @public
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 * <p>Represents an FinSpace environment.</p>
 */
export interface Environment {
  /**
   * @public
   * <p>The name of the FinSpace environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The ID of the AWS account in which the FinSpace environment is created.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The current status of creation of the FinSpace environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>The sign-in URL for the web application of your FinSpace environment.</p>
   */
  environmentUrl?: string;

  /**
   * @public
   * <p>The description of the FinSpace environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of your FinSpace environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The URL of the integrated FinSpace notebook environment in your web application.</p>
   */
  sageMakerStudioDomainUrl?: string;

  /**
   * @public
   * <p>The KMS key id used to encrypt in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The AWS account ID of the dedicated service account associated with your FinSpace
   *          environment.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * @public
   * <p>The authentication mode for the environment.</p>
   */
  federationMode?: FederationMode | string;

  /**
   * @public
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * @public
   * <p>The name of the FinSpace environment.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface GetKxChangesetRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A unique identifier of the changeset for which you want to retrieve data.</p>
   */
  changesetId: string | undefined;
}

/**
 * @public
 */
export interface GetKxChangesetResponse {
  /**
   * @public
   * <p>A unique identifier for the changeset.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A list of change request objects that are run in order.</p>
   */
  changeRequests?: ChangeRequest[];

  /**
   * @public
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>Beginning time from which the changeset is active. The value is determined as epoch time in
   *       milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   */
  activeFromTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
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
   */
  status?: ChangesetStatus | string;

  /**
   * @public
   * <p>Provides details in the event of a failed flow, including the error type and the related error message.</p>
   */
  errorInfo?: ErrorInfo;
}

/**
 * @public
 */
export interface GetKxClusterRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the cluster that you want to retrieve.</p>
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface GetKxClusterResponse {
  /**
   * @public
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
   */
  status?: KxClusterStatus | string;

  /**
   * @public
   * <p>The error message when a failed state occurs. </p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>A unique name for the cluster.</p>
   */
  clusterName?: string;

  /**
   * @public
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
   *          </ul>
   */
  clusterType?: KxClusterType | string;

  /**
   * @public
   * <p> A list of databases mounted on the cluster.</p>
   */
  databases?: KxDatabaseConfiguration[];

  /**
   * @public
   * <p>The configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. </p>
   */
  cacheStorageConfigurations?: KxCacheStorageConfiguration[];

  /**
   * @public
   * <p>The configuration based on which FinSpace will scale in or scale out nodes in your cluster.</p>
   */
  autoScalingConfiguration?: AutoScalingConfiguration;

  /**
   * @public
   * <p>A description of the cluster.</p>
   */
  clusterDescription?: string;

  /**
   * @public
   * <p>A structure for the metadata of a cluster. It includes information like the CPUs needed, memory of instances, and number of instances.</p>
   */
  capacityConfiguration?: CapacityConfiguration;

  /**
   * @public
   * <p>The version of FinSpace managed kdb to run.</p>
   */
  releaseLabel?: string;

  /**
   * @public
   * <p>Configuration details about the network where the Privatelink endpoint of the cluster resides.</p>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   */
  initializationScript?: string;

  /**
   * @public
   * <p>Defines key-value pairs to make them available inside the cluster.</p>
   */
  commandLineArguments?: KxCommandLineArgument[];

  /**
   * @public
   * <p>The details of the custom code that you want to use inside a cluster when analyzing a data. It consists of the S3 source bucket, location, S3 object version, and the relative path from where the custom code is loaded into the cluster. </p>
   */
  code?: CodeConfiguration;

  /**
   * @public
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   */
  executionRole?: string;

  /**
   * @public
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
   * <p>The size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose <code>clusterType</code> as RDB. All the data written to this storage space is lost when the cluster node is restarted.</p>
   */
  savedownStorageConfiguration?: KxSavedownStorageConfiguration;

  /**
   * @public
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
   */
  azMode?: KxAzMode | string;

  /**
   * @public
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;
}

/**
 * @public
 */
export interface GetKxConnectionStringRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A name of the kdb cluster.</p>
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface GetKxConnectionStringResponse {
  /**
   * @public
   * <p>The signed connection string that you can use to connect to clusters.</p>
   */
  signedConnectionString?: string;
}

/**
 * @public
 */
export interface GetKxDatabaseRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;
}

/**
 * @public
 */
export interface GetKxDatabaseResponse {
  /**
   * @public
   * <p>The name of the kdb database for which the information is retrieved.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>The ARN identifier of the database.</p>
   */
  databaseArn?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
   * <p>A unique identifier for the changeset.</p>
   */
  lastCompletedChangesetId?: string;

  /**
   * @public
   * <p>The total number of bytes in the database.</p>
   */
  numBytes?: number;

  /**
   * @public
   * <p>The total number of changesets in the database.</p>
   */
  numChangesets?: number;

  /**
   * @public
   * <p>The total number of files in the database.</p>
   */
  numFiles?: number;
}

/**
 * @public
 */
export interface GetKxEnvironmentRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 * <p>A list of DNS server name and server IP.  This is used to set up Route-53 outbound resolvers.</p>
 */
export interface CustomDNSServer {
  /**
   * @public
   * <p>The name of the DNS server.</p>
   */
  customDNSServerName: string | undefined;

  /**
   * @public
   * <p>The IP address of the DNS server.</p>
   */
  customDNSServerIP: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DnsStatus = {
  FAILED_UPDATE: "FAILED_UPDATE",
  NONE: "NONE",
  SUCCESSFULLY_UPDATED: "SUCCESSFULLY_UPDATED",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DnsStatus = (typeof DnsStatus)[keyof typeof DnsStatus];

/**
 * @public
 * @enum
 */
export const TgwStatus = {
  FAILED_UPDATE: "FAILED_UPDATE",
  NONE: "NONE",
  SUCCESSFULLY_UPDATED: "SUCCESSFULLY_UPDATED",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type TgwStatus = (typeof TgwStatus)[keyof typeof TgwStatus];

/**
 * @public
 * <p>
 *          Defines the ICMP protocol that consists of the ICMP type and code.
 *       </p>
 */
export interface IcmpTypeCode {
  /**
   * @public
   * <p>The ICMP type. A value of <i>-1</i> means all types.
   *       </p>
   */
  type: number | undefined;

  /**
   * @public
   * <p>
   *          The ICMP code. A value of <i>-1</i> means all codes for the specified ICMP type.
   *       </p>
   */
  code: number | undefined;
}

/**
 * @public
 * <p>
 *          The range of ports the rule applies to.
 *       </p>
 */
export interface PortRange {
  /**
   * @public
   * <p>
   *          The first port in the range.
   *       </p>
   */
  from: number | undefined;

  /**
   * @public
   * <p>
   *          The last port in the range.
   *       </p>
   */
  to: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleAction = {
  ALLOW: "allow",
  DENY: "deny",
} as const;

/**
 * @public
 */
export type RuleAction = (typeof RuleAction)[keyof typeof RuleAction];

/**
 * @public
 * <p>
 *        The network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. The entry is a set of numbered ingress and egress rules that determine whether a packet should be allowed in or out of a subnet associated with the ACL. We process the entries in the ACL according to the rule numbers, in ascending order.
 *       </p>
 */
export interface NetworkACLEntry {
  /**
   * @public
   * <p>
   *          The rule number for the entry. For example <i>100</i>. All the network ACL entries are processed in ascending order by rule number.
   *
   *       </p>
   */
  ruleNumber: number | undefined;

  /**
   * @public
   * <p>
   *          The protocol number. A value of <i>-1</i> means all the protocols.
   *       </p>
   */
  protocol: string | undefined;

  /**
   * @public
   * <p>
   *          Indicates whether to allow or deny the traffic that matches the rule.
   *       </p>
   */
  ruleAction: RuleAction | string | undefined;

  /**
   * @public
   * <p>
   *          The range of ports the rule applies to.
   *       </p>
   */
  portRange?: PortRange;

  /**
   * @public
   * <p>
   *          Defines the ICMP protocol that consists of the ICMP type and code.
   *       </p>
   */
  icmpTypeCode?: IcmpTypeCode;

  /**
   * @public
   * <p>
   *          The IPv4 network range to allow or deny, in CIDR notation. For example, <code>172.16.0.0/24</code>. We modify the specified CIDR block to its canonical form. For example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.
   *       </p>
   */
  cidrBlock: string | undefined;
}

/**
 * @public
 * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
 */
export interface TransitGatewayConfiguration {
  /**
   * @public
   * <p>The identifier of the transit gateway created by the customer to connect outbound traffics from kdb network to your internal network.</p>
   */
  transitGatewayID: string | undefined;

  /**
   * @public
   * <p>The routing CIDR on behalf of kdb environment. It could be any "/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer's transit gateway routing table so that the traffics could be routed to kdb network.</p>
   */
  routableCIDRSpace: string | undefined;

  /**
   * @public
   * <p>
   *          The rules that define how you manage the outbound traffic from kdb network to your internal network.
   *
   *       </p>
   */
  attachmentNetworkAclConfiguration?: NetworkACLEntry[];
}

/**
 * @public
 */
export interface GetKxEnvironmentResponse {
  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The status of the kdb environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>The status of the network configuration.</p>
   */
  tgwStatus?: TgwStatus | string;

  /**
   * @public
   * <p>The status of DNS configuration.</p>
   */
  dnsStatus?: DnsStatus | string;

  /**
   * @public
   * <p>Specifies the error message that appears if a flow fails.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>A description for the kdb environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN identifier of the environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * @public
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration;

  /**
   * @public
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   */
  customDNSConfiguration?: CustomDNSServer[];

  /**
   * @public
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the kdb environment was updated. </p>
   */
  updateTimestamp?: Date;

  /**
   * @public
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   */
  availabilityZoneIds?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate authority of the
   *          kdb environment.</p>
   */
  certificateAuthorityArn?: string;
}

/**
 * @public
 */
export interface GetKxUserRequest {
  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetKxUserResponse {
  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   */
  userArn?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The IAM role ARN that is associated with the user.</p>
   */
  iamRole?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * @public
   * <p>A token generated by FinSpace that specifies where to continue pagination if a previous
   *          request was truncated. To get the next set of pages, pass in the <code>nextToken</code>nextToken value from the
   *          response object of the previous page call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * @public
   * <p>A list of all of your FinSpace environments.</p>
   */
  environments?: Environment[];

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxChangesetsRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details of changeset.</p>
 */
export interface KxChangesetListEntry {
  /**
   * @public
   * <p>A unique identifier for the changeset.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>Beginning time from which the changeset is active. The value is determined as epoch time in
   *       milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   */
  activeFromTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the changeset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as
   *       1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
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
   */
  status?: ChangesetStatus | string;
}

/**
 * @public
 */
export interface ListKxChangesetsResponse {
  /**
   * @public
   * <p>A list of changesets for a database.</p>
   */
  kxChangesets?: KxChangesetListEntry[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxClusterNodesRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A unique name for the cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A structure that stores metadata for a kdb node.</p>
 */
export interface KxNode {
  /**
   * @public
   * <p>A unique identifier for the node.</p>
   */
  nodeId?: string;

  /**
   * @public
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p>The time when a particular node is started.  The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  launchTime?: Date;
}

/**
 * @public
 */
export interface ListKxClusterNodesResponse {
  /**
   * @public
   * <p>A list of nodes associated with the cluster.</p>
   */
  nodes?: KxNode[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxClustersRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
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
   *          </ul>
   */
  clusterType?: KxClusterType | string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The details of a kdb cluster.</p>
 */
export interface KxCluster {
  /**
   * @public
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
   */
  status?: KxClusterStatus | string;

  /**
   * @public
   * <p>The error message when a failed state occurs. </p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>A unique name for the cluster.</p>
   */
  clusterName?: string;

  /**
   * @public
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
   *          </ul>
   */
  clusterType?: KxClusterType | string;

  /**
   * @public
   * <p>A description of the cluster.</p>
   */
  clusterDescription?: string;

  /**
   * @public
   * <p>A version of the FinSpace managed kdb to run.</p>
   */
  releaseLabel?: string;

  /**
   * @public
   * <p>Specifies a Q program that will be run at launch of a cluster. It is a relative path within
   *       <i>.zip</i> file that contains the custom code, which will be loaded on
   *       the cluster. It must include the file name itself. For example,
   *       <code>somedir/init.q</code>.</p>
   */
  initializationScript?: string;

  /**
   * @public
   * <p>
   *             An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
   *          </p>
   */
  executionRole?: string;

  /**
   * @public
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
   */
  azMode?: KxAzMode | string;

  /**
   * @public
   * <p>
   *             The availability zone identifiers for the requested regions.
   *          </p>
   */
  availabilityZoneId?: string;

  /**
   * @public
   * <p>The last time that the cluster was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the cluster was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;
}

/**
 * @public
 */
export interface ListKxClustersResponse {
  /**
   * @public
   * <p>Lists the cluster details.</p>
   */
  kxClusterSummaries?: KxCluster[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxDatabasesRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Details about a FinSpace managed kdb database</p>
 */
export interface KxDatabaseListEntry {
  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>The timestamp at which the database was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListKxDatabasesResponse {
  /**
   * @public
   * <p>A list of databases in the kdb environment.</p>
   */
  kxDatabases?: KxDatabaseListEntry[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxEnvironmentsRequest {
  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The details of a kdb environment.</p>
 */
export interface KxEnvironment {
  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The unique identifier of the AWS account in which you create the kdb environment.</p>
   */
  awsAccountId?: string;

  /**
   * @public
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
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>The status of the network configuration.</p>
   */
  tgwStatus?: TgwStatus | string;

  /**
   * @public
   * <p>The status of DNS configuration.</p>
   */
  dnsStatus?: DnsStatus | string;

  /**
   * @public
   * <p>Specifies the error message that appears if a flow fails. </p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>A description of the kdb environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of your kdb environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The unique identifier of the KMS key.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * @public
   * <p>Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.</p>
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration;

  /**
   * @public
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   */
  customDNSConfiguration?: CustomDNSServer[];

  /**
   * @public
   * <p>The timestamp at which the kdb environment was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the kdb environment was modified in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  updateTimestamp?: Date;

  /**
   * @public
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   */
  availabilityZoneIds?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate authority:</p>
   */
  certificateAuthorityArn?: string;
}

/**
 * @public
 */
export interface ListKxEnvironmentsResponse {
  /**
   * @public
   * <p>A list of environments in an account.</p>
   */
  environments?: KxEnvironment[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKxUsersRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A structure that stores metadata for a kdb user.</p>
 */
export interface KxUser {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *          how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  userArn?: string;

  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName?: string;

  /**
   * @public
   * <p>The IAM role ARN that is associated with the user.</p>
   */
  iamRole?: string;

  /**
   * @public
   * <p>The timestamp at which the kdb user was created. </p>
   */
  createTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the kdb user was updated. </p>
   */
  updateTimestamp?: Date;
}

/**
 * @public
 */
export interface ListKxUsersResponse {
  /**
   * @public
   * <p>A list of users in a kdb environment.</p>
   */
  users?: KxUser[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The request is invalid. Something is wrong with the input to the request.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of all tags for a resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags to be assigned to the resource.</p>
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
   * @public
   * <p>A FinSpace resource from which you want to remove a tag or tags. The value for this
   *          parameter is an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys (names) of one or more tags to be removed.</p>
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
   * @public
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
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
   */
  federationMode?: FederationMode | string;

  /**
   * @public
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * @public
   * <p>Returns the FinSpace environment object.</p>
   */
  environment?: Environment;
}

/**
 * @public
 * @enum
 */
export const KxDeploymentStrategy = {
  NO_RESTART: "NO_RESTART",
  ROLLING: "ROLLING",
} as const;

/**
 * @public
 */
export type KxDeploymentStrategy = (typeof KxDeploymentStrategy)[keyof typeof KxDeploymentStrategy];

/**
 * @public
 * <p>
 *          The configuration that allows you to choose how you want to update the databases on a cluster. Depending on the option you choose, you can reduce the time it takes to update the database changesets on to a cluster.
 *       </p>
 */
export interface KxDeploymentConfiguration {
  /**
   * @public
   * <p>
   *         The type of deployment that you want on a cluster.
   *
   *       </p>
   *          <ul>
   *             <li>
   *                <p>ROLLING – This options loads the updated database by stopping the exiting q process and starting a new q process with updated configuration.</p>
   *             </li>
   *             <li>
   *                <p>NO_RESTART – This option loads the updated database on the running q process without stopping it. This option is quicker as it reduces the turn around time to update a kdb database changeset configuration on a cluster.</p>
   *             </li>
   *          </ul>
   */
  deploymentStrategy: KxDeploymentStrategy | string | undefined;
}

/**
 * @public
 */
export interface UpdateKxClusterDatabasesRequest {
  /**
   * @public
   * <p>The unique identifier of a kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A unique name for the cluster that you want to modify.</p>
   */
  clusterName: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p> The structure of databases mounted on the cluster.</p>
   */
  databases: KxDatabaseConfiguration[] | undefined;

  /**
   * @public
   * <p>
   *          The configuration that allows you to choose how you want to update the databases on a cluster.
   *       </p>
   */
  deploymentConfiguration?: KxDeploymentConfiguration;
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
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateKxDatabaseResponse {
  /**
   * @public
   * <p>The name of the kdb database.</p>
   */
  databaseName?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description of the kdb environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentResponse {
  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The status of the kdb environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>The status of the network configuration.</p>
   */
  tgwStatus?: TgwStatus | string;

  /**
   * @public
   * <p>The status of DNS configuration.</p>
   */
  dnsStatus?: DnsStatus | string;

  /**
   * @public
   * <p>Specifies the error message that appears if a flow fails.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN identifier of the environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * @public
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration;

  /**
   * @public
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   */
  customDNSConfiguration?: CustomDNSServer[];

  /**
   * @public
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the kdb environment was updated. </p>
   */
  updateTimestamp?: Date;

  /**
   * @public
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   */
  availabilityZoneIds?: string[];
}

/**
 * @public
 */
export interface UpdateKxEnvironmentNetworkRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.</p>
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration;

  /**
   * @public
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   */
  customDNSConfiguration?: CustomDNSServer[];

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateKxEnvironmentNetworkResponse {
  /**
   * @public
   * <p>The name of the kdb environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The unique identifier of the AWS account that is used to create the kdb environment.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The status of the kdb environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * @public
   * <p>The status of the network configuration.</p>
   */
  tgwStatus?: TgwStatus | string;

  /**
   * @public
   * <p>The status of DNS configuration.</p>
   */
  dnsStatus?: DnsStatus | string;

  /**
   * @public
   * <p>Specifies the error message that appears if a flow fails.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ARN identifier of the environment.</p>
   */
  environmentArn?: string;

  /**
   * @public
   * <p>The KMS key ID to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>A unique identifier for the AWS environment infrastructure account.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * @public
   * <p>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</p>
   */
  transitGatewayConfiguration?: TransitGatewayConfiguration;

  /**
   * @public
   * <p>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</p>
   */
  customDNSConfiguration?: CustomDNSServer[];

  /**
   * @public
   * <p>The timestamp at which the kdb environment was created in FinSpace. </p>
   */
  creationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp at which the kdb environment was updated. </p>
   */
  updateTimestamp?: Date;

  /**
   * @public
   * <p>The identifier of the availability zones where subnets for the environment are created.</p>
   */
  availabilityZoneIds?: string[];
}

/**
 * @public
 */
export interface UpdateKxUserRequest {
  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName: string | undefined;

  /**
   * @public
   * <p>The IAM role ARN that is associated with the user.</p>
   */
  iamRole: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateKxUserResponse {
  /**
   * @public
   * <p>A unique identifier for the user.</p>
   */
  userName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and
   *       how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the
   *       <i>IAM User Guide</i>. </p>
   */
  userArn?: string;

  /**
   * @public
   * <p>A unique identifier for the kdb environment.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The IAM role ARN that is associated with the user.</p>
   */
  iamRole?: string;
}

/**
 * @internal
 */
export const SuperuserParametersFilterSensitiveLog = (obj: SuperuserParameters): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentRequestFilterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
  ...obj,
  ...(obj.superuserParameters && {
    superuserParameters: SuperuserParametersFilterSensitiveLog(obj.superuserParameters),
  }),
});

/**
 * @internal
 */
export const GetKxConnectionStringResponseFilterSensitiveLog = (obj: GetKxConnectionStringResponse): any => ({
  ...obj,
  ...(obj.signedConnectionString && { signedConnectionString: SENSITIVE_STRING }),
});
