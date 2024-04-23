// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SecurityLakeServiceException as __BaseException } from "./SecurityLakeServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A coded string to provide more information about the access denied exception. You can use the error code to check the exception type.</p>
   */
  errorCode?: string;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * @public
 * @enum
 */
export const AccessType = {
  LAKEFORMATION: "LAKEFORMATION",
  S3: "S3",
} as const;

/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * <p>The AWS identity.</p>
 */
export interface AwsIdentity {
  /**
   * @public
   * <p>The AWS identity principal.</p>
   */
  principal: string | undefined;

  /**
   * @public
   * <p>The external ID used to estalish trust relationship with the AWS identity.</p>
   */
  externalId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AwsLogSourceName = {
  CLOUD_TRAIL_MGMT: "CLOUD_TRAIL_MGMT",
  LAMBDA_EXECUTION: "LAMBDA_EXECUTION",
  ROUTE53: "ROUTE53",
  S3_DATA: "S3_DATA",
  SH_FINDINGS: "SH_FINDINGS",
  VPC_FLOW: "VPC_FLOW",
} as const;

/**
 * @public
 */
export type AwsLogSourceName = (typeof AwsLogSourceName)[keyof typeof AwsLogSourceName];

/**
 * @public
 * <p>The Security Lake logs source configuration file describes the information needed to generate Security Lake logs. </p>
 */
export interface AwsLogSourceConfiguration {
  /**
   * @public
   * <p>Specify the Amazon Web Services account information where you want to enable Security Lake.</p>
   */
  accounts?: string[];

  /**
   * @public
   * <p>Specify the Regions where you want to enable Security Lake.</p>
   */
  regions: string[] | undefined;

  /**
   * @public
   * <p>The name for a Amazon Web Services source. This must be a Regionally unique value.</p>
   */
  sourceName: AwsLogSourceName | undefined;

  /**
   * @public
   * <p>The version for a Amazon Web Services source. This must be a Regionally unique value.</p>
   */
  sourceVersion?: string;
}

/**
 * @public
 * <p>Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services.</p>
 */
export interface AwsLogSourceResource {
  /**
   * @public
   * <p>The name for a Amazon Web Services source. This must be a Regionally unique value.</p>
   */
  sourceName?: AwsLogSourceName;

  /**
   * @public
   * <p>The version for a Amazon Web Services source. This must be a Regionally unique value.</p>
   */
  sourceVersion?: string;
}

/**
 * @public
 * <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 * <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType?: string;

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
    this.resourceName = opts.resourceName;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CreateAwsLogSourceRequest {
  /**
   * @public
   * <p>Specify the natively-supported Amazon Web Services service to add as a source in Security Lake.</p>
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAwsLogSourceResponse {
  /**
   * @public
   * <p>Lists all accounts in which enabling a natively supported Amazon Web Service as
   *          a Security Lake source failed. The failure occurred as these accounts are not part of an
   *          organization.</p>
   */
  failed?: string[];
}

/**
 * @public
 * <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
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
 * @public
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource that could not be found.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The type of the resource that could not be found.</p>
   */
  resourceType?: string;

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
    this.resourceName = opts.resourceName;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The code for the service in Service Quotas.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>That the rate of requests to Security Lake is exceeding the request quotas for your Amazon Web Services account.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>Retry the request after the specified time.</p>
   */
  retryAfterSeconds?: number;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The configuration for the Glue Crawler for the third-party custom source.</p>
 */
export interface CustomLogSourceCrawlerConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *          to be used by the Glue crawler. The recommended IAM policies
   *          are:</p>
   *          <ul>
   *             <li>
   *                <p>The managed policy <code>AWSGlueServiceRole</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>A custom policy granting access to your Amazon S3 Data Lake</p>
   *             </li>
   *          </ul>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>The configuration for the third-party custom source.</p>
 */
export interface CustomLogSourceConfiguration {
  /**
   * @public
   * <p>The configuration for the Glue Crawler for the third-party custom source.</p>
   */
  crawlerConfiguration: CustomLogSourceCrawlerConfiguration | undefined;

  /**
   * @public
   * <p>The identity of the log provider for the third-party custom source.</p>
   */
  providerIdentity: AwsIdentity | undefined;
}

/**
 * @public
 */
export interface CreateCustomLogSourceRequest {
  /**
   * @public
   * <p>Specify the name for a third-party custom source. This must be a Regionally unique
   *          value.</p>
   */
  sourceName: string | undefined;

  /**
   * @public
   * <p>Specify the source version for the third-party custom source, to limit log collection to
   *          a specific version of custom data source.</p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of
   *          data that the custom source will send to Security Lake. The supported event classes are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCESS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KERNEL_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KERNEL_EXTENSION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEMORY_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODULE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROCESS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRY_KEY_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRY_VALUE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED_JOB_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECURITY_FINDING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_CHANGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHENTICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHORIZATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENTITY_MANAGEMENT_AUDIT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DHCP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSH_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIG_STATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVENTORY_INFO</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>API_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOUD_API</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  eventClasses?: string[];

  /**
   * @public
   * <p>The configuration for the third-party custom source.</p>
   */
  configuration?: CustomLogSourceConfiguration;
}

/**
 * @public
 * <p>The attributes of a third-party custom source.</p>
 */
export interface CustomLogSourceAttributes {
  /**
   * @public
   * <p>The ARN of the Glue crawler.</p>
   */
  crawlerArn?: string;

  /**
   * @public
   * <p>The ARN of the Glue database where results are written, such as:
   *          <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  databaseArn?: string;

  /**
   * @public
   * <p>The ARN of the Glue table.</p>
   */
  tableArn?: string;
}

/**
 * @public
 * <p>The details of the log provider for a third-party custom source.</p>
 */
export interface CustomLogSourceProvider {
  /**
   * @public
   * <p>The ARN of the IAM role to be used by the entity putting logs into your
   *          custom source partition. Security Lake will apply the correct access policies to this role, but
   *          you must first manually create the trust policy for this role. The IAM role
   *          name must start with the text 'Security Lake'. The IAM role must trust the
   *          <code>logProviderAccountId</code> to assume the role.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The location of the partition in the Amazon S3 bucket for Security Lake.</p>
   */
  location?: string;
}

/**
 * @public
 * <p>Amazon Security Lake can collect logs and events from third-party custom sources.</p>
 */
export interface CustomLogSourceResource {
  /**
   * @public
   * <p>The name for a third-party custom source. This must be a Regionally unique value.</p>
   */
  sourceName?: string;

  /**
   * @public
   * <p>The version for a third-party custom source. This must be a Regionally unique value.</p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>The details of the log provider for a third-party custom source.</p>
   */
  provider?: CustomLogSourceProvider;

  /**
   * @public
   * <p>The attributes of a third-party custom source.</p>
   */
  attributes?: CustomLogSourceAttributes;
}

/**
 * @public
 */
export interface CreateCustomLogSourceResponse {
  /**
   * @public
   * <p>The created third-party custom source.</p>
   */
  source?: CustomLogSourceResource;
}

/**
 * @public
 * <p>Provides encryption details of Amazon Security Lake object.</p>
 */
export interface DataLakeEncryptionConfiguration {
  /**
   * @public
   * <p>The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake
   *          object.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>Provide expiration lifecycle details of Amazon Security Lake object.</p>
 */
export interface DataLakeLifecycleExpiration {
  /**
   * @public
   * <p>Number of days before data expires in the Amazon Security Lake object.</p>
   */
  days?: number;
}

/**
 * @public
 * <p>Provide transition lifecycle details of Amazon Security Lake object.</p>
 */
export interface DataLakeLifecycleTransition {
  /**
   * @public
   * <p>The range of storage classes that you can choose from based on the data access,
   *          resiliency, and cost requirements of your workloads.</p>
   */
  storageClass?: string;

  /**
   * @public
   * <p>Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.</p>
   */
  days?: number;
}

/**
 * @public
 * <p>Provides lifecycle details of Amazon Security Lake object.</p>
 */
export interface DataLakeLifecycleConfiguration {
  /**
   * @public
   * <p>Provides data expiration details of Amazon Security Lake object.</p>
   */
  expiration?: DataLakeLifecycleExpiration;

  /**
   * @public
   * <p>Provides data storage transition details of Amazon Security Lake object.</p>
   */
  transitions?: DataLakeLifecycleTransition[];
}

/**
 * @public
 * <p>Provides replication details of Amazon Security Lake object.</p>
 */
export interface DataLakeReplicationConfiguration {
  /**
   * @public
   * <p>Replication enables automatic, asynchronous copying of objects across Amazon S3
   *          buckets. Amazon S3 buckets that are configured for object replication can be owned
   *          by the same Amazon Web Services account or by different accounts. You can replicate objects
   *          to a single destination bucket or to multiple destination buckets. The destination buckets
   *          can be in different Amazon Web Services Regions or within the same Region as the source
   *          bucket.</p>
   *          <p>Set up one or more rollup Regions by providing the Region or Regions that should
   *          contribute to the central rollup Region.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>Replication settings for the Amazon S3 buckets. This parameter uses the Identity and Access Management (IAM) role you created that is managed by Security Lake, to
   *          ensure the replication setting is correct.</p>
   */
  roleArn?: string;
}

/**
 * @public
 * <p>Provides details of Amazon Security Lake object.</p>
 */
export interface DataLakeConfiguration {
  /**
   * @public
   * <p>The Amazon Web Services Regions where Security Lake is automatically enabled.</p>
   */
  region: string | undefined;

  /**
   * @public
   * <p>Provides encryption details of Amazon Security Lake object.</p>
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration;

  /**
   * @public
   * <p>Provides lifecycle details of Amazon Security Lake object.</p>
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration;

  /**
   * @public
   * <p>Provides replication details of Amazon Security Lake object.</p>
   */
  replicationConfiguration?: DataLakeReplicationConfiguration;
}

/**
 * @public
 * <p>A <i>tag</i> is a label that you can define and associate with Amazon Web Services resources, including certain types of Amazon Security Lake resources.
 *          Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with
 *          the following types of Security Lake resources: subscribers, and the data lake configuration for your Amazon Web Services account in individual Amazon Web Services Regions.</p>
 *          <p>A resource can have up to 50 tags. Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>. A
 *          <i>tag key</i> is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag
 *          value. A <i>tag value</i> acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces,
 *          or the following symbols: _ . : / = + @ -</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html">Tagging Amazon Security Lake resources</a> in
 *          the <i>Amazon Security Lake User Guide</i>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The  name of the tag. This is a general label that acts as a category for a more specific tag value (<code>value</code>).</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value that’s associated with the specified tag key (<code>key</code>). This value acts as a descriptor for the tag key. A tag value cannot be
   *          null, but it can be an empty string.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeRequest {
  /**
   * @public
   * <p>Specify the Region or Regions that will contribute data to the rollup region.</p>
   */
  configurations: DataLakeConfiguration[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used to create and update the Glue table.
   *          This table contains partitions generated by the ingestion and normalization of
   *           Amazon Web Services log sources and custom sources.</p>
   */
  metaStoreManagerRoleArn: string | undefined;

  /**
   * @public
   * <p>An array of objects, one for each tag to associate with the data lake configuration. For each tag, you must specify both a tag key and a tag value. A tag
   *          value cannot be null, but it can be an empty string.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const DataLakeStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type DataLakeStatus = (typeof DataLakeStatus)[keyof typeof DataLakeStatus];

/**
 * @public
 * <p>The details of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code>
 *          API request which failed.</p>
 */
export interface DataLakeUpdateException {
  /**
   * @public
   * <p>The reason for the exception of the last <code>UpdateDataLake</code>or
   *          <code>DeleteDataLake</code> API request.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>The reason code for the exception of the last <code>UpdateDataLake</code> or
   *          <code>DeleteDataLake</code> API request.</p>
   */
  code?: string;
}

/**
 * @public
 * <p>The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
 *          request. This is set to Completed after the configuration is updated, or removed if
 *          deletion of the data lake is successful.</p>
 */
export interface DataLakeUpdateStatus {
  /**
   * @public
   * <p>The unique ID for the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
   *          request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
   *          request that was requested.</p>
   */
  status?: DataLakeStatus;

  /**
   * @public
   * <p>The details of the last <code>UpdateDataLake</code>or <code>DeleteDataLake</code> API
   *          request which failed.</p>
   */
  exception?: DataLakeUpdateException;
}

/**
 * @public
 * <p>Provides details of Amazon Security Lake object.</p>
 */
export interface DataLakeResource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html">Amazon Security Lake User Guide</a>.</p>
   */
  dataLakeArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Regions where Security Lake is enabled.</p>
   */
  region: string | undefined;

  /**
   * @public
   * <p>The ARN for the Amazon Security Lake Amazon S3 bucket.</p>
   */
  s3BucketArn?: string;

  /**
   * @public
   * <p>Provides encryption details of Amazon Security Lake object.</p>
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration;

  /**
   * @public
   * <p>Provides lifecycle details of Amazon Security Lake object.</p>
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration;

  /**
   * @public
   * <p>Provides replication details of Amazon Security Lake object.</p>
   */
  replicationConfiguration?: DataLakeReplicationConfiguration;

  /**
   * @public
   * <p>Retrieves the status of the configuration operation for an account in Amazon Security Lake.</p>
   */
  createStatus?: DataLakeStatus;

  /**
   * @public
   * <p>The status of the last <code>UpdateDataLake </code>or <code>DeleteDataLake</code> API
   *          request.</p>
   */
  updateStatus?: DataLakeUpdateStatus;
}

/**
 * @public
 */
export interface CreateDataLakeResponse {
  /**
   * @public
   * <p>The created Security Lake configuration object.</p>
   */
  dataLakes?: DataLakeResource[];
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionRequest {
  /**
   * @public
   * <p>The subscription protocol to which exception notifications are posted.</p>
   */
  subscriptionProtocol: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account where you want to receive exception notifications.</p>
   */
  notificationEndpoint: string | undefined;

  /**
   * @public
   * <p>The expiration period and time-to-live (TTL).</p>
   */
  exceptionTimeToLive?: number;
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionResponse {}

/**
 * @public
 * <p>Automatically enable new organization accounts as member accounts from an Amazon Security Lake
 *          administrator account.</p>
 */
export interface DataLakeAutoEnableNewAccountConfiguration {
  /**
   * @public
   * <p>The Amazon Web Services Regions where Security Lake is automatically enabled.</p>
   */
  region: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services sources that are automatically enabled in Security Lake.</p>
   */
  sources: AwsLogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationRequest {
  /**
   * @public
   * <p>Enable Security Lake with the specified configuration settings, to begin collecting security
   *          data for new accounts in your organization.</p>
   */
  autoEnableNewAccount: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationResponse {}

/**
 * @public
 * <p>The supported source types from which logs and events are collected in Amazon Security Lake.
 *          For a list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 */
export type LogSourceResource =
  | LogSourceResource.AwsLogSourceMember
  | LogSourceResource.CustomLogSourceMember
  | LogSourceResource.$UnknownMember;

/**
 * @public
 */
export namespace LogSourceResource {
  /**
   * @public
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
   */
  export interface AwsLogSourceMember {
    awsLogSource: AwsLogSourceResource;
    customLogSource?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Amazon Security Lake supports custom source types. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/custom-sources.html">Amazon Security Lake User Guide</a>.</p>
   */
  export interface CustomLogSourceMember {
    awsLogSource?: never;
    customLogSource: CustomLogSourceResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsLogSource?: never;
    customLogSource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsLogSource: (value: AwsLogSourceResource) => T;
    customLogSource: (value: CustomLogSourceResource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LogSourceResource, visitor: Visitor<T>): T => {
    if (value.awsLogSource !== undefined) return visitor.awsLogSource(value.awsLogSource);
    if (value.customLogSource !== undefined) return visitor.customLogSource(value.customLogSource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * @public
   * <p>The AWS identity used to access your data.</p>
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * @public
   * <p>The name of your Security Lake subscriber account.</p>
   */
  subscriberName: string | undefined;

  /**
   * @public
   * <p>The description for your subscriber account in Security Lake.</p>
   */
  subscriberDescription?: string;

  /**
   * @public
   * <p>The supported Amazon Web Services from which logs and events are collected.
   *          Security Lake supports log and event collection for natively supported Amazon Web Services.</p>
   */
  sources: LogSourceResource[] | undefined;

  /**
   * @public
   * <p>The Amazon S3 or Lake Formation access type.</p>
   */
  accessTypes?: AccessType[];

  /**
   * @public
   * <p>An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag
   *          value cannot be null, but it can be an empty string.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const SubscriberStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVATED: "DEACTIVATED",
  PENDING: "PENDING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type SubscriberStatus = (typeof SubscriberStatus)[keyof typeof SubscriberStatus];

/**
 * @public
 * <p>Provides details about the Amazon Security Lake account subscription. Subscribers are notified
 *          of new objects for a source as the data is written to your Amazon S3 bucket for
 *          Security Lake.</p>
 */
export interface SubscriberResource {
  /**
   * @public
   * <p>The subscriber ID of the Amazon Security Lake subscriber account.</p>
   */
  subscriberId: string | undefined;

  /**
   * @public
   * <p>The subscriber ARN of the Amazon Security Lake subscriber account.</p>
   */
  subscriberArn: string | undefined;

  /**
   * @public
   * <p>The AWS identity used to access your data.</p>
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * @public
   * <p>The name of your Amazon Security Lake subscriber account.</p>
   */
  subscriberName: string | undefined;

  /**
   * @public
   * <p>The subscriber descriptions for a subscriber account. The description for a subscriber
   *          includes <code>subscriberName</code>, <code>accountID</code>, <code>externalID</code>, and
   *          <code>subscriberId</code>.</p>
   */
  subscriberDescription?: string;

  /**
   * @public
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/source-management.html">Amazon Security Lake User Guide</a>.</p>
   */
  sources: LogSourceResource[] | undefined;

  /**
   * @public
   * <p>You can choose to notify subscribers of new objects with an Amazon Simple Queue Service
   *             (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the
   *          subscriber.</p>
   *          <p> Subscribers can consume data by directly querying Lake Formation tables in your
   *             Amazon S3 bucket through services like Amazon Athena. This subscription
   *          type is defined as <code>LAKEFORMATION</code>.</p>
   */
  accessTypes?: AccessType[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) specifying the role of the subscriber.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The ARN for the Amazon S3 bucket.</p>
   */
  s3BucketArn?: string;

  /**
   * @public
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   */
  subscriberEndpoint?: string;

  /**
   * @public
   * <p>The subscriber status of the Amazon Security Lake subscriber account.</p>
   */
  subscriberStatus?: SubscriberStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) which uniquely defines the AWS RAM resource share. Before
   *          accepting the RAM resource share invitation, you can view details related to the RAM
   *          resource share.</p>
   *          <p>This field is available only for Lake Formation subscribers created after March 8, 2023.</p>
   */
  resourceShareArn?: string;

  /**
   * @public
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * @public
   * <p>The date and time when the subscriber was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time when the subscriber was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface CreateSubscriberResponse {
  /**
   * @public
   * <p>Retrieve information about the subscriber created using the
   *             <code>CreateSubscriber</code> API.</p>
   */
  subscriber?: SubscriberResource;
}

/**
 * @public
 * @enum
 */
export const HttpMethod = {
  POST: "POST",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * <p>The configurations for HTTPS subscriber notification.</p>
 */
export interface HttpsNotificationConfiguration {
  /**
   * @public
   * <p>The subscription endpoint in Security Lake. If you prefer notification with an HTTPs
   *          endpoint, populate this field.</p>
   */
  endpoint: string | undefined;

  /**
   * @public
   * <p>The key name for the notification subscription.</p>
   */
  authorizationApiKeyName?: string;

  /**
   * @public
   * <p>The key value for the notification subscription.</p>
   */
  authorizationApiKeyValue?: string;

  /**
   * @public
   * <p>The HTTPS method used for the notification subscription.</p>
   */
  httpMethod?: HttpMethod;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you
   *          created. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html">Managing data access</a> and <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html">Amazon Web Services
   *             Managed Policies</a> in the <i>Amazon Security Lake User Guide</i>.</p>
   */
  targetRoleArn: string | undefined;
}

/**
 * @public
 * <p>The configurations for SQS subscriber notification.</p>
 */
export interface SqsNotificationConfiguration {}

/**
 * @public
 * <p>Specify the configurations you want to use for subscriber notification to notify the
 *          subscriber when new data is written to the data lake for sources that the subscriber
 *          consumes in Security Lake. </p>
 */
export type NotificationConfiguration =
  | NotificationConfiguration.HttpsNotificationConfigurationMember
  | NotificationConfiguration.SqsNotificationConfigurationMember
  | NotificationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace NotificationConfiguration {
  /**
   * @public
   * <p>The configurations for SQS subscriber notification.</p>
   */
  export interface SqsNotificationConfigurationMember {
    sqsNotificationConfiguration: SqsNotificationConfiguration;
    httpsNotificationConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configurations for HTTPS subscriber notification.</p>
   */
  export interface HttpsNotificationConfigurationMember {
    sqsNotificationConfiguration?: never;
    httpsNotificationConfiguration: HttpsNotificationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sqsNotificationConfiguration?: never;
    httpsNotificationConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sqsNotificationConfiguration: (value: SqsNotificationConfiguration) => T;
    httpsNotificationConfiguration: (value: HttpsNotificationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NotificationConfiguration, visitor: Visitor<T>): T => {
    if (value.sqsNotificationConfiguration !== undefined)
      return visitor.sqsNotificationConfiguration(value.sqsNotificationConfiguration);
    if (value.httpsNotificationConfiguration !== undefined)
      return visitor.httpsNotificationConfiguration(value.httpsNotificationConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriberNotificationRequest {
  /**
   * @public
   * <p>The subscriber ID for the notification subscription.</p>
   */
  subscriberId: string | undefined;

  /**
   * @public
   * <p>Specify the configuration using which you want to create the subscriber
   *          notification.</p>
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberNotificationResponse {
  /**
   * @public
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   */
  subscriberEndpoint?: string;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceRequest {
  /**
   * @public
   * <p>Specify the natively-supported Amazon Web Services service to remove as a source in
   *          Security Lake.</p>
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceResponse {
  /**
   * @public
   * <p>Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.</p>
   */
  failed?: string[];
}

/**
 * @public
 */
export interface DeleteCustomLogSourceRequest {
  /**
   * @public
   * <p>The source name of custom log source that you want to delete.</p>
   */
  sourceName: string | undefined;

  /**
   * @public
   * <p>The source version for the third-party custom source. You can limit the custom source
   *          removal to the specified source version.</p>
   */
  sourceVersion?: string;
}

/**
 * @public
 */
export interface DeleteCustomLogSourceResponse {}

/**
 * @public
 */
export interface DeleteDataLakeRequest {
  /**
   * @public
   * <p>The list of Regions where Security Lake is enabled.</p>
   */
  regions: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteDataLakeResponse {}

/**
 * @public
 */
export interface DeleteDataLakeOrganizationConfigurationRequest {
  /**
   * @public
   * <p>Turns off automatic enablement of Security Lake for member accounts that are added to an organization.</p>
   */
  autoEnableNewAccount: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteDataLakeOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface GetDataLakeOrganizationConfigurationRequest {}

/**
 * @public
 */
export interface GetDataLakeOrganizationConfigurationResponse {
  /**
   * @public
   * <p>The configuration for new accounts.</p>
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[];
}

/**
 * @public
 */
export interface GetDataLakeSourcesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.</p>
   */
  accounts?: string[];

  /**
   * @public
   * <p>The maximum limit of accounts for which the static snapshot of the current Region,
   *          including enabled accounts and log sources, is retrieved.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SourceCollectionStatus = {
  COLLECTING: "COLLECTING",
  MISCONFIGURED: "MISCONFIGURED",
  NOT_COLLECTING: "NOT_COLLECTING",
} as const;

/**
 * @public
 */
export type SourceCollectionStatus = (typeof SourceCollectionStatus)[keyof typeof SourceCollectionStatus];

/**
 * @public
 * <p>Retrieves the Logs status for the Amazon Security Lake account.</p>
 */
export interface DataLakeSourceStatus {
  /**
   * @public
   * <p>Defines path the stored logs are available which has information on your systems,
   *          applications, and services.</p>
   */
  resource?: string;

  /**
   * @public
   * <p>The health status of services, including error codes and patterns.</p>
   */
  status?: SourceCollectionStatus;
}

/**
 * @public
 * <p>Amazon Security Lake collects logs and events from supported Amazon Web Services and
 *          custom sources. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 */
export interface DataLakeSource {
  /**
   * @public
   * <p>The ID of the Security Lake account for which logs are collected.</p>
   */
  account?: string;

  /**
   * @public
   * <p>The supported Amazon Web Services from which logs and events are collected.
   *          Amazon Security Lake supports log and event collection for natively supported Amazon Web Services.</p>
   */
  sourceName?: string;

  /**
   * @public
   * <p>The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of
   *          data that the custom source will send to Security Lake. The supported event classes are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCESS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KERNEL_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KERNEL_EXTENSION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEMORY_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODULE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROCESS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRY_KEY_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGISTRY_VALUE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED_JOB_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECURITY_FINDING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_CHANGE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHENTICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHORIZATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENTITY_MANAGEMENT_AUDIT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DHCP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FTP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RDP_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMB_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSH_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIG_STATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVENTORY_INFO</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>API_ACTIVITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLOUD_API</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  eventClasses?: string[];

  /**
   * @public
   * <p>The log status for the Security Lake account.</p>
   */
  sourceStatuses?: DataLakeSourceStatus[];
}

/**
 * @public
 */
export interface GetDataLakeSourcesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html">Amazon Security Lake User Guide</a>.</p>
   */
  dataLakeArn?: string;

  /**
   * @public
   * <p>The list of enabled accounts and enabled sources.</p>
   */
  dataLakeSources?: DataLakeSource[];

  /**
   * @public
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataLakesRequest {
  /**
   * @public
   * <p>The list of regions where Security Lake is enabled.</p>
   */
  regions?: string[];
}

/**
 * @public
 */
export interface ListDataLakesResponse {
  /**
   * @public
   * <p>Retrieves the Security Lake configuration object.</p>
   */
  dataLakes?: DataLakeResource[];
}

/**
 * @public
 */
export interface ListLogSourcesRequest {
  /**
   * @public
   * <p>The list of Amazon Web Services accounts for which log sources are displayed.</p>
   */
  accounts?: string[];

  /**
   * @public
   * <p>The list of regions for which log sources are displayed.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>The list of sources for which log sources are displayed.</p>
   */
  sources?: LogSourceResource[];

  /**
   * @public
   * <p>The maximum number of accounts for which the log sources are displayed.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services and custom sources. </p>
 */
export interface LogSource {
  /**
   * @public
   * <p>Specify the account from which you want to collect logs.</p>
   */
  account?: string;

  /**
   * @public
   * <p>Specify the Regions from which you want to collect logs.</p>
   */
  region?: string;

  /**
   * @public
   * <p>Specify the sources from which you want to collect logs.</p>
   */
  sources?: LogSourceResource[];
}

/**
 * @public
 */
export interface ListLogSourcesResponse {
  /**
   * @public
   * <p>The list of log sources in your organization that send data to the data lake.</p>
   */
  sources?: LogSource[];

  /**
   * @public
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *       using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataLakeRequest {
  /**
   * @public
   * <p>Specify the Region or Regions that will contribute data to the rollup region.</p>
   */
  configurations: DataLakeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeResponse {
  /**
   * @public
   * <p>The created Security Lake configuration object.</p>
   */
  dataLakes?: DataLakeResource[];
}

/**
 * @public
 * <p>The details for an Amazon Security Lake exception.</p>
 */
export interface DataLakeException {
  /**
   * @public
   * <p>The Amazon Web Services Regions where the exception occurred.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The underlying exception of a Security Lake exception.</p>
   */
  exception?: string;

  /**
   * @public
   * <p>List of all remediation steps for a Security Lake exception.</p>
   */
  remediation?: string;

  /**
   * @public
   * <p>This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.</p>
   */
  timestamp?: Date;
}

/**
 * @public
 */
export interface DeleteDataLakeExceptionSubscriptionRequest {}

/**
 * @public
 */
export interface DeleteDataLakeExceptionSubscriptionResponse {}

/**
 * @public
 */
export interface DeleteSubscriberRequest {
  /**
   * @public
   * <p>A value created by Security Lake that uniquely identifies your <code>DeleteSubscriber</code> API request.</p>
   */
  subscriberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriberResponse {}

/**
 * @public
 */
export interface DeleteSubscriberNotificationRequest {
  /**
   * @public
   * <p>The ID of the Security Lake subscriber account.</p>
   */
  subscriberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriberNotificationResponse {}

/**
 * @public
 */
export interface DeregisterDataLakeDelegatedAdministratorRequest {}

/**
 * @public
 */
export interface DeregisterDataLakeDelegatedAdministratorResponse {}

/**
 * @public
 */
export interface GetDataLakeExceptionSubscriptionRequest {}

/**
 * @public
 */
export interface GetDataLakeExceptionSubscriptionResponse {
  /**
   * @public
   * <p>The subscription protocol to which exception notifications are posted.</p>
   */
  subscriptionProtocol?: string;

  /**
   * @public
   * <p>The Amazon Web Services account where you receive exception notifications.</p>
   */
  notificationEndpoint?: string;

  /**
   * @public
   * <p>The expiration period and time-to-live (TTL).</p>
   */
  exceptionTimeToLive?: number;
}

/**
 * @public
 */
export interface GetSubscriberRequest {
  /**
   * @public
   * <p>A value created by Amazon Security Lake that uniquely identifies your
   *             <code>GetSubscriber</code> API request.</p>
   */
  subscriberId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriberResponse {
  /**
   * @public
   * <p>The subscriber information for the specified subscriber ID.</p>
   */
  subscriber?: SubscriberResource;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsRequest {
  /**
   * @public
   * <p>List the Amazon Web Services Regions from which exceptions are retrieved.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>List the maximum number of failures in Security Lake.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>List if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsResponse {
  /**
   * @public
   * <p>Lists the failures that cannot be retried in the current Region.</p>
   */
  exceptions?: DataLakeException[];

  /**
   * @public
   * <p>List if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSubscribersRequest {
  /**
   * @public
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of accounts for which the configuration is displayed.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSubscribersResponse {
  /**
   * @public
   * <p>The subscribers available for the specified Security Lake account ID.</p>
   */
  subscribers?: SubscriberResource[];

  /**
   * @public
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to retrieve the tags for.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array of objects, one for each tag (key and value) that’s associated with the Amazon Security Lake resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface RegisterDataLakeDelegatedAdministratorRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Security Lake delegated administrator.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface RegisterDataLakeDelegatedAdministratorResponse {}

/**
 * @public
 */
export interface UpdateSubscriberRequest {
  /**
   * @public
   * <p>A value created by Security Lake that uniquely identifies your subscription.</p>
   */
  subscriberId: string | undefined;

  /**
   * @public
   * <p>The AWS identity used to access your data.</p>
   */
  subscriberIdentity?: AwsIdentity;

  /**
   * @public
   * <p>The name of the Security Lake account subscriber.</p>
   */
  subscriberName?: string;

  /**
   * @public
   * <p>The description of the Security Lake account subscriber.</p>
   */
  subscriberDescription?: string;

  /**
   * @public
   * <p>The supported Amazon Web Services from which logs and events are collected. For
   *          the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
   */
  sources?: LogSourceResource[];
}

/**
 * @public
 */
export interface UpdateSubscriberResponse {
  /**
   * @public
   * <p>The updated subscriber information.</p>
   */
  subscriber?: SubscriberResource;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationRequest {
  /**
   * @public
   * <p>The subscription ID for which the subscription notification is specified.</p>
   */
  subscriberId: string | undefined;

  /**
   * @public
   * <p>The configuration for subscriber notification.</p>
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationResponse {
  /**
   * @public
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   */
  subscriberEndpoint?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to add or update the tags for.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>An array of objects, one for each tag (key and value) to associate with the Amazon Security Lake resource. For each tag, you must
   *          specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.</p>
   */
  tags: Tag[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to remove one or more tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of one or more tag keys. For each value in the list, specify the tag key for a tag to remove from the Amazon Security Lake resource.</p>
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
export interface UpdateDataLakeExceptionSubscriptionRequest {
  /**
   * @public
   * <p>The subscription protocol to which exception messages are posted.</p>
   */
  subscriptionProtocol: string | undefined;

  /**
   * @public
   * <p>The account that is subscribed to receive exception notifications.</p>
   */
  notificationEndpoint: string | undefined;

  /**
   * @public
   * <p>The time-to-live (TTL) for the exception message to remain.</p>
   */
  exceptionTimeToLive?: number;
}

/**
 * @public
 */
export interface UpdateDataLakeExceptionSubscriptionResponse {}
