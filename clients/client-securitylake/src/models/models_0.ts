// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SecurityLakeServiceException as __BaseException } from "./SecurityLakeServiceException";

/**
 * <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A coded string to provide more information about the access denied exception. You can use the error code to check the exception type.</p>
   * @public
   */
  errorCode?: string | undefined;

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
 * <p>The Amazon Web Services identity.</p>
 * @public
 */
export interface AwsIdentity {
  /**
   * <p>The Amazon Web Services identity principal.</p>
   * @public
   */
  principal: string | undefined;

  /**
   * <p>The external ID used to establish trust relationship with the Amazon Web Services identity.</p>
   * @public
   */
  externalId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AwsLogSourceName = {
  CLOUD_TRAIL_MGMT: "CLOUD_TRAIL_MGMT",
  EKS_AUDIT: "EKS_AUDIT",
  LAMBDA_EXECUTION: "LAMBDA_EXECUTION",
  ROUTE53: "ROUTE53",
  S3_DATA: "S3_DATA",
  SH_FINDINGS: "SH_FINDINGS",
  VPC_FLOW: "VPC_FLOW",
  WAF: "WAF",
} as const;

/**
 * @public
 */
export type AwsLogSourceName = (typeof AwsLogSourceName)[keyof typeof AwsLogSourceName];

/**
 * <p>To add a natively-supported Amazon Web Services service as a log source, use these
 *          parameters to specify the configuration settings for the log source. </p>
 * @public
 */
export interface AwsLogSourceConfiguration {
  /**
   * <p>Specify the Amazon Web Services account information where you want to enable Security Lake.</p>
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * <p>Specify the Regions where you want to enable Security Lake.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The name for a Amazon Web Services source. </p>
   * @public
   */
  sourceName: AwsLogSourceName | undefined;

  /**
   * <p>The version for a Amazon Web Services source. </p>
   * @public
   */
  sourceVersion?: string | undefined;
}

/**
 * <p>Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services
 *          services.</p>
 * @public
 */
export interface AwsLogSourceResource {
  /**
   * <p>The name for a Amazon Web Services source. This must be a Regionally unique value.</p>
   * @public
   */
  sourceName?: AwsLogSourceName | undefined;

  /**
   * <p>The version for a Amazon Web Services source. This must be a Regionally unique value.</p>
   * @public
   */
  sourceVersion?: string | undefined;
}

/**
 * <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 * @public
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
 * <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: string | undefined;

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
   * <p>Specify the natively-supported Amazon Web Services service to add as a source in Security Lake.</p>
   * @public
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAwsLogSourceResponse {
  /**
   * <p>Lists all accounts in which enabling a natively supported Amazon Web Services service as
   *          a Security Lake source failed. The failure occurred as these accounts are not part of an
   *          organization.</p>
   * @public
   */
  failed?: string[] | undefined;
}

/**
 * <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
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
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource that could not be found.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>The type of the resource that could not be found.</p>
   * @public
   */
  resourceType?: string | undefined;

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
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the service in Service Quotas.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>That the rate of requests to Security Lake is exceeding the request quotas for your Amazon Web Services account.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Retry the request after the specified time.</p>
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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The configuration used for the Glue Crawler for a third-party custom source.</p>
 * @public
 */
export interface CustomLogSourceCrawlerConfiguration {
  /**
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
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>The configuration used for the third-party custom source.</p>
 * @public
 */
export interface CustomLogSourceConfiguration {
  /**
   * <p>The configuration used for the Glue Crawler for a third-party custom source.</p>
   * @public
   */
  crawlerConfiguration: CustomLogSourceCrawlerConfiguration | undefined;

  /**
   * <p>The identity of the log provider for the third-party custom source.</p>
   * @public
   */
  providerIdentity: AwsIdentity | undefined;
}

/**
 * @public
 */
export interface CreateCustomLogSourceRequest {
  /**
   * <p>Specify the name for a third-party custom source. This must be a Regionally unique
   *          value. The <code>sourceName</code> you enter here, is used in the
   *             <code>LogProviderRole</code> name which follows the convention
   *             <code>AmazonSecurityLake-Provider-\{name of the custom source\}-\{region\}</code>. You must
   *          use a <code>CustomLogSource</code> name that is shorter than or equal to 20 characters.
   *          This ensures that the <code>LogProviderRole</code> name is below the 64 character
   *          limit.</p>
   * @public
   */
  sourceName: string | undefined;

  /**
   * <p>Specify the source version for the third-party custom source, to limit log collection to
   *          a specific version of custom data source.</p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
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
   * @public
   */
  eventClasses?: string[] | undefined;

  /**
   * <p>The configuration used for the third-party custom source.</p>
   * @public
   */
  configuration: CustomLogSourceConfiguration | undefined;
}

/**
 * <p>The attributes of a third-party custom source.</p>
 * @public
 */
export interface CustomLogSourceAttributes {
  /**
   * <p>The ARN of the Glue crawler.</p>
   * @public
   */
  crawlerArn?: string | undefined;

  /**
   * <p>The ARN of the Glue database where results are written, such as:
   *          <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   * @public
   */
  databaseArn?: string | undefined;

  /**
   * <p>The ARN of the Glue table.</p>
   * @public
   */
  tableArn?: string | undefined;
}

/**
 * <p>The details of the log provider for a third-party custom source.</p>
 * @public
 */
export interface CustomLogSourceProvider {
  /**
   * <p>The ARN of the IAM role to be used by the entity putting logs into your
   *          custom source partition. Security Lake will apply the correct access policies to this role, but
   *          you must first manually create the trust policy for this role. The IAM role
   *          name must start with the text 'Security Lake'. The IAM role must trust the
   *          <code>logProviderAccountId</code> to assume the role.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The location of the partition in the Amazon S3 bucket for Security Lake.</p>
   * @public
   */
  location?: string | undefined;
}

/**
 * <p>Amazon Security Lake can collect logs and events from third-party custom sources.</p>
 * @public
 */
export interface CustomLogSourceResource {
  /**
   * <p>The name for a third-party custom source. This must be a Regionally unique value.</p>
   * @public
   */
  sourceName?: string | undefined;

  /**
   * <p>The version for a third-party custom source. This must be a Regionally unique value.</p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>The details of the log provider for a third-party custom source.</p>
   * @public
   */
  provider?: CustomLogSourceProvider | undefined;

  /**
   * <p>The attributes of a third-party custom source.</p>
   * @public
   */
  attributes?: CustomLogSourceAttributes | undefined;
}

/**
 * @public
 */
export interface CreateCustomLogSourceResponse {
  /**
   * <p>The third-party custom source that was created.</p>
   * @public
   */
  source?: CustomLogSourceResource | undefined;
}

/**
 * <p>Provides encryption details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeEncryptionConfiguration {
  /**
   * <p>The identifier of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake
   *          object.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>Provide expiration lifecycle details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeLifecycleExpiration {
  /**
   * <p>Number of days before data expires in the Amazon Security Lake object.</p>
   * @public
   */
  days?: number | undefined;
}

/**
 * <p>Provide transition lifecycle details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeLifecycleTransition {
  /**
   * <p>The range of storage classes that you can choose from based on the data access,
   *          resiliency, and cost requirements of your workloads.</p>
   * @public
   */
  storageClass?: string | undefined;

  /**
   * <p>Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.</p>
   * @public
   */
  days?: number | undefined;
}

/**
 * <p>Provides lifecycle details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeLifecycleConfiguration {
  /**
   * <p>Provides data expiration details of Amazon Security Lake object.</p>
   * @public
   */
  expiration?: DataLakeLifecycleExpiration | undefined;

  /**
   * <p>Provides data storage transition details of Amazon Security Lake object.</p>
   * @public
   */
  transitions?: DataLakeLifecycleTransition[] | undefined;
}

/**
 * <p>Provides replication details for objects stored in the Amazon Security Lake data lake.</p>
 * @public
 */
export interface DataLakeReplicationConfiguration {
  /**
   * <p>Specifies one or more centralized rollup Regions. The Amazon Web Services Region specified in the <code>region</code>
   *           parameter of the <a href="https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLake.html">
   *                <code>CreateDataLake</code>
   *             </a>
   *           or <a href="https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLake.html">
   *                <code>UpdateDataLake</code>
   *             </a> operations contributes data to the rollup Region or
   *         Regions specified in this parameter.</p>
   *          <p>Replication enables automatic, asynchronous copying of objects across Amazon S3
   *            buckets. S3 buckets that are configured for object replication can be owned
   *            by the same Amazon Web Services account or by different accounts. You can replicate objects
   *            to a single destination bucket or to multiple destination buckets. The destination buckets
   *            can be in different Regions or within the same Region as the source bucket.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>Replication settings for the Amazon S3 buckets. This parameter uses the Identity and Access Management (IAM) role you created that is managed by Security Lake, to
   *          ensure the replication setting is correct.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>Provides details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeConfiguration {
  /**
   * <p>The Amazon Web Services Regions where Security Lake is automatically enabled.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>Provides encryption details of Amazon Security Lake object.</p>
   * @public
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration | undefined;

  /**
   * <p>Provides lifecycle details of Amazon Security Lake object.</p>
   * @public
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration | undefined;

  /**
   * <p>Provides replication details of Amazon Security Lake object.</p>
   * @public
   */
  replicationConfiguration?: DataLakeReplicationConfiguration | undefined;
}

/**
 * <p>A <i>tag</i> is a label that you can define and associate with Amazon Web Services resources, including certain types of Amazon Security Lake resources.
 *          Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with
 *          the following types of Security Lake resources: subscribers, and the data lake configuration for your Amazon Web Services account in individual Amazon Web Services Regions.</p>
 *          <p>A resource can have up to 50 tags. Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>. A
 *          <i>tag key</i> is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag
 *          value. A <i>tag value</i> acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces,
 *          or the following symbols: _ . : / = + @ -</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html">Tagging Amazon Security Lake resources</a> in
 *          the <i>Amazon Security Lake User Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The  name of the tag. This is a general label that acts as a category for a more specific tag value (<code>value</code>).</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value that’s associated with the specified tag key (<code>key</code>). This value acts as a descriptor for the tag key. A tag value cannot be
   *          null, but it can be an empty string.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeRequest {
  /**
   * <p>Specify the Region or Regions that will contribute data to the rollup region.</p>
   * @public
   */
  configurations: DataLakeConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used to create and update the Glue table.
   *          This table contains partitions generated by the ingestion and normalization of
   *           Amazon Web Services log sources and custom sources.</p>
   * @public
   */
  metaStoreManagerRoleArn: string | undefined;

  /**
   * <p>An array of objects, one for each tag to associate with the data lake configuration. For each tag, you must specify both a tag key and a tag value. A tag
   *          value cannot be null, but it can be an empty string.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
 * <p>The details of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code>
 *          API request which failed.</p>
 * @public
 */
export interface DataLakeUpdateException {
  /**
   * <p>The reason for the exception of the last <code>UpdateDataLake</code>or
   *          <code>DeleteDataLake</code> API request.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The reason code for the exception of the last <code>UpdateDataLake</code> or
   *          <code>DeleteDataLake</code> API request.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * <p>The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
 *          request. This is set to Completed after the configuration is updated, or removed if
 *          deletion of the data lake is successful.</p>
 * @public
 */
export interface DataLakeUpdateStatus {
  /**
   * <p>The unique ID for the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
   *          request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The status of the last <code>UpdateDataLake</code> or <code>DeleteDataLake</code> API
   *          request that was requested.</p>
   * @public
   */
  status?: DataLakeStatus | undefined;

  /**
   * <p>The details of the last <code>UpdateDataLake</code>or <code>DeleteDataLake</code> API
   *          request which failed.</p>
   * @public
   */
  exception?: DataLakeUpdateException | undefined;
}

/**
 * <p>Provides details of Amazon Security Lake object.</p>
 * @public
 */
export interface DataLakeResource {
  /**
   * <p>The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html">Amazon Security Lake User Guide</a>.</p>
   * @public
   */
  dataLakeArn: string | undefined;

  /**
   * <p>The Amazon Web Services Regions where Security Lake is enabled.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The ARN for the Amazon Security Lake Amazon S3 bucket.</p>
   * @public
   */
  s3BucketArn?: string | undefined;

  /**
   * <p>Provides encryption details of Amazon Security Lake object.</p>
   * @public
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration | undefined;

  /**
   * <p>Provides lifecycle details of Amazon Security Lake object.</p>
   * @public
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration | undefined;

  /**
   * <p>Provides replication details of Amazon Security Lake object.</p>
   * @public
   */
  replicationConfiguration?: DataLakeReplicationConfiguration | undefined;

  /**
   * <p>Retrieves the status of the <code>CreateDatalake</code> API call for an account in Amazon Security Lake.</p>
   * @public
   */
  createStatus?: DataLakeStatus | undefined;

  /**
   * <p>The status of the last <code>UpdateDataLake </code>or <code>DeleteDataLake</code> API
   *          request.</p>
   * @public
   */
  updateStatus?: DataLakeUpdateStatus | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeResponse {
  /**
   * <p>The created Security Lake configuration object.</p>
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionRequest {
  /**
   * <p>The subscription protocol to which exception notifications are posted.</p>
   * @public
   */
  subscriptionProtocol: string | undefined;

  /**
   * <p>The Amazon Web Services account where you want to receive exception notifications.</p>
   * @public
   */
  notificationEndpoint: string | undefined;

  /**
   * <p>The expiration period and time-to-live (TTL). It is the duration of time until which the exception message remains.</p>
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionResponse {}

/**
 * <p>Automatically enable new organization accounts as member accounts from an Amazon Security Lake
 *          administrator account.</p>
 * @public
 */
export interface DataLakeAutoEnableNewAccountConfiguration {
  /**
   * <p>The Amazon Web Services Regions where Security Lake is automatically enabled.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The Amazon Web Services sources that are automatically enabled in Security Lake.</p>
   * @public
   */
  sources: AwsLogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationRequest {
  /**
   * <p>Enable Security Lake with the specified configuration settings, to begin collecting security
   *          data for new accounts in your organization.</p>
   * @public
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationResponse {}

/**
 * <p>The supported source types from which logs and events are collected in Amazon Security Lake.
 *          For a list of supported Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 * @public
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
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
   * @public
   */
  export interface AwsLogSourceMember {
    awsLogSource: AwsLogSourceResource;
    customLogSource?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Security Lake supports custom source types. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/custom-sources.html">Amazon Security Lake User Guide</a>.</p>
   * @public
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
   * <p>The Amazon Web Services identity used to access your data.</p>
   * @public
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * <p>The name of your Security Lake subscriber account.</p>
   * @public
   */
  subscriberName: string | undefined;

  /**
   * <p>The description for your subscriber account in Security Lake.</p>
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * <p>The supported Amazon Web Services services from which logs and events are collected.
   *          Security Lake supports log and event collection for natively supported Amazon Web Services services.</p>
   * @public
   */
  sources: LogSourceResource[] | undefined;

  /**
   * <p>The Amazon S3 or Lake Formation access type.</p>
   * @public
   */
  accessTypes?: AccessType[] | undefined;

  /**
   * <p>An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag
   *          value cannot be null, but it can be an empty string.</p>
   * @public
   */
  tags?: Tag[] | undefined;
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
 * <p>Provides details about the Amazon Security Lake account subscription. Subscribers are notified
 *          of new objects for a source as the data is written to your Amazon S3 bucket for
 *          Security Lake.</p>
 * @public
 */
export interface SubscriberResource {
  /**
   * <p>The subscriber ID of the Amazon Security Lake subscriber account.</p>
   * @public
   */
  subscriberId: string | undefined;

  /**
   * <p>The subscriber ARN of the Amazon Security Lake subscriber account.</p>
   * @public
   */
  subscriberArn: string | undefined;

  /**
   * <p>The Amazon Web Services identity used to access your data.</p>
   * @public
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * <p>The name of your Amazon Security Lake subscriber account.</p>
   * @public
   */
  subscriberName: string | undefined;

  /**
   * <p>The subscriber descriptions for a subscriber account. The description for a subscriber
   *          includes <code>subscriberName</code>, <code>accountID</code>, <code>externalID</code>, and
   *          <code>subscriberId</code>.</p>
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/source-management.html">Amazon Security Lake User Guide</a>.</p>
   * @public
   */
  sources: LogSourceResource[] | undefined;

  /**
   * <p>You can choose to notify subscribers of new objects with an Amazon Simple Queue Service
   *             (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the
   *          subscriber.</p>
   *          <p> Subscribers can consume data by directly querying Lake Formation tables in your
   *             Amazon S3 bucket through services like Amazon Athena. This subscription
   *          type is defined as <code>LAKEFORMATION</code>.</p>
   * @public
   */
  accessTypes?: AccessType[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) specifying the role of the subscriber.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The ARN for the Amazon S3 bucket.</p>
   * @public
   */
  s3BucketArn?: string | undefined;

  /**
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   * @public
   */
  subscriberEndpoint?: string | undefined;

  /**
   * <p>The subscriber status of the Amazon Security Lake subscriber account.</p>
   * @public
   */
  subscriberStatus?: SubscriberStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) which uniquely defines the Amazon Web Services RAM resource share. Before
   *          accepting the RAM resource share invitation, you can view details related to the RAM
   *          resource share.</p>
   *          <p>This field is available only for Lake Formation subscribers created after March 8, 2023.</p>
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * <p>The name of the resource share.</p>
   * @public
   */
  resourceShareName?: string | undefined;

  /**
   * <p>The date and time when the subscriber was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the subscriber was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberResponse {
  /**
   * <p>Retrieve information about the subscriber created using the
   *             <code>CreateSubscriber</code> API.</p>
   * @public
   */
  subscriber?: SubscriberResource | undefined;
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
 * <p>The configurations used for HTTPS subscriber notification.</p>
 * @public
 */
export interface HttpsNotificationConfiguration {
  /**
   * <p>The subscription endpoint in Security Lake. If you prefer notification with an HTTPs
   *          endpoint, populate this field.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The key name for the notification subscription.</p>
   * @public
   */
  authorizationApiKeyName?: string | undefined;

  /**
   * <p>The key value for the notification subscription.</p>
   * @public
   */
  authorizationApiKeyValue?: string | undefined;

  /**
   * <p>The HTTPS method used for the notification subscription.</p>
   * @public
   */
  httpMethod?: HttpMethod | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you
   *          created. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html">Managing data access</a> and <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html">Amazon Web Services
   *             Managed Policies</a> in the <i>Amazon Security Lake User Guide</i>.</p>
   * @public
   */
  targetRoleArn: string | undefined;
}

/**
 * <p>The configurations used for EventBridge subscriber notification.</p>
 * @public
 */
export interface SqsNotificationConfiguration {}

/**
 * <p>Specify the configurations you want to use for subscriber notification to notify the
 *          subscriber when new data is written to the data lake for sources that the subscriber
 *          consumes in Security Lake. </p>
 * @public
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
   * <p>The configurations for SQS subscriber notification.</p>
   * @public
   */
  export interface SqsNotificationConfigurationMember {
    sqsNotificationConfiguration: SqsNotificationConfiguration;
    httpsNotificationConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configurations used for HTTPS subscriber notification.</p>
   * @public
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
   * <p>The subscriber ID for the notification subscription.</p>
   * @public
   */
  subscriberId: string | undefined;

  /**
   * <p>Specify the configuration using which you want to create the subscriber
   *          notification.</p>
   * @public
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberNotificationResponse {
  /**
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   * @public
   */
  subscriberEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceRequest {
  /**
   * <p>Specify the natively-supported Amazon Web Services service to remove as a source in
   *          Security Lake.</p>
   * @public
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceResponse {
  /**
   * <p>Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.</p>
   * @public
   */
  failed?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLogSourceRequest {
  /**
   * <p>The source name of custom log source that you want to delete.</p>
   * @public
   */
  sourceName: string | undefined;

  /**
   * <p>The source version for the third-party custom source. You can limit the custom source
   *          removal to the specified source version.</p>
   * @public
   */
  sourceVersion?: string | undefined;
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
   * <p>The list of Regions where Security Lake is enabled.</p>
   * @public
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
   * <p>Turns off automatic enablement of Security Lake for member accounts that are added to an organization.</p>
   * @public
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
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
   * <p>The configuration used for new accounts in Security Lake.</p>
   * @public
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.</p>
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * <p>The maximum limit of accounts for which the static snapshot of the current Region,
   *          including enabled accounts and log sources, is retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>Retrieves the Logs status for the Amazon Security Lake account.</p>
 * @public
 */
export interface DataLakeSourceStatus {
  /**
   * <p>Defines path the stored logs are available which has information on your systems,
   *          applications, and services.</p>
   * @public
   */
  resource?: string | undefined;

  /**
   * <p>The health status of services, including error codes and patterns.</p>
   * @public
   */
  status?: SourceCollectionStatus | undefined;
}

/**
 * <p>Amazon Security Lake collects logs and events from supported Amazon Web Services services and
 *          custom sources. For the list of supported Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 * @public
 */
export interface DataLakeSource {
  /**
   * <p>The ID of the Security Lake account for which logs are collected.</p>
   * @public
   */
  account?: string | undefined;

  /**
   * <p>The supported Amazon Web Services services from which logs and events are collected.
   *          Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services.</p>
   * @public
   */
  sourceName?: string | undefined;

  /**
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
   * @public
   */
  eventClasses?: string[] | undefined;

  /**
   * <p>The log status for the Security Lake account.</p>
   * @public
   */
  sourceStatuses?: DataLakeSourceStatus[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSourcesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html">Amazon Security Lake User Guide</a>.</p>
   * @public
   */
  dataLakeArn?: string | undefined;

  /**
   * <p>The list of enabled accounts and enabled sources.</p>
   * @public
   */
  dataLakeSources?: DataLakeSource[] | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataLakesRequest {
  /**
   * <p>The list of Regions where Security Lake is enabled.</p>
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDataLakesResponse {
  /**
   * <p>Retrieves the Security Lake configuration object.</p>
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * @public
 */
export interface ListLogSourcesRequest {
  /**
   * <p>The list of Amazon Web Services accounts for which log sources are displayed.</p>
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * <p>The list of Regions for which log sources are displayed.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The list of sources for which log sources are displayed.</p>
   * @public
   */
  sources?: LogSourceResource[] | undefined;

  /**
   * <p>The maximum number of accounts for which the log sources are displayed.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services and custom sources. </p>
 * @public
 */
export interface LogSource {
  /**
   * <p>Specify the account from which you want to collect logs.</p>
   * @public
   */
  account?: string | undefined;

  /**
   * <p>Specify the Regions from which you want to collect logs.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Specify the sources from which you want to collect logs.</p>
   * @public
   */
  sources?: LogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface ListLogSourcesResponse {
  /**
   * <p>The list of log sources in your organization that send data to the data lake.</p>
   * @public
   */
  sources?: LogSource[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *       using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeRequest {
  /**
   * <p>Specifies the Region or Regions that will contribute data to the rollup region.</p>
   * @public
   */
  configurations: DataLakeConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used to create and update the Glue table.
   *          This table contains partitions generated by the ingestion and normalization of
   *          Amazon Web Services log sources and custom sources.</p>
   * @public
   */
  metaStoreManagerRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeResponse {
  /**
   * <p>The created Security Lake configuration object.</p>
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * <p>The details for an Amazon Security Lake exception.</p>
 * @public
 */
export interface DataLakeException {
  /**
   * <p>The Amazon Web Services Regions where the exception occurred.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The underlying exception of a Security Lake exception.</p>
   * @public
   */
  exception?: string | undefined;

  /**
   * <p>List of all remediation steps for a Security Lake exception.</p>
   * @public
   */
  remediation?: string | undefined;

  /**
   * <p>This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.</p>
   * @public
   */
  timestamp?: Date | undefined;
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
   * <p>A value created by Security Lake that uniquely identifies your <code>DeleteSubscriber</code> API request.</p>
   * @public
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
   * <p>The ID of the Security Lake subscriber account.</p>
   * @public
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
   * <p>The subscription protocol to which exception notifications are posted.</p>
   * @public
   */
  subscriptionProtocol?: string | undefined;

  /**
   * <p>The Amazon Web Services account where you receive exception notifications.</p>
   * @public
   */
  notificationEndpoint?: string | undefined;

  /**
   * <p>The expiration period and time-to-live (TTL). It is the duration of time until which the exception message remains.</p>
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface GetSubscriberRequest {
  /**
   * <p>A value created by Amazon Security Lake that uniquely identifies your
   *             <code>GetSubscriber</code> API request.</p>
   * @public
   */
  subscriberId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriberResponse {
  /**
   * <p>The subscriber information for the specified subscriber ID.</p>
   * @public
   */
  subscriber?: SubscriberResource | undefined;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsRequest {
  /**
   * <p>The Amazon Web Services Regions from which exceptions are retrieved.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>Lists the maximum number of failures in Security Lake.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsResponse {
  /**
   * <p>Lists the failures that cannot be retried.</p>
   * @public
   */
  exceptions?: DataLakeException[] | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersRequest {
  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of accounts for which the configuration is displayed.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSubscribersResponse {
  /**
   * <p>The subscribers available for the specified Security Lake account ID.</p>
   * @public
   */
  subscribers?: SubscriberResource[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource for which you want to retrieve the tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of objects, one for each tag (key and value) that’s associated with the Amazon Security Lake resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RegisterDataLakeDelegatedAdministratorRequest {
  /**
   * <p>The Amazon Web Services account ID of the Security Lake delegated administrator.</p>
   * @public
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
   * <p>A value created by Security Lake that uniquely identifies your subscription.</p>
   * @public
   */
  subscriberId: string | undefined;

  /**
   * <p>The Amazon Web Services identity used to access your data.</p>
   * @public
   */
  subscriberIdentity?: AwsIdentity | undefined;

  /**
   * <p>The name of the Security Lake account subscriber.</p>
   * @public
   */
  subscriberName?: string | undefined;

  /**
   * <p>The description of the Security Lake account subscriber.</p>
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * <p>The supported Amazon Web Services services from which logs and events are collected. For
   *          the list of supported Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
   * @public
   */
  sources?: LogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberResponse {
  /**
   * <p>The updated subscriber information.</p>
   * @public
   */
  subscriber?: SubscriberResource | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationRequest {
  /**
   * <p>The subscription ID for which the subscription notification is specified.</p>
   * @public
   */
  subscriberId: string | undefined;

  /**
   * <p>The configuration for subscriber notification.</p>
   * @public
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationResponse {
  /**
   * <p>The subscriber endpoint to which exception messages are posted.</p>
   * @public
   */
  subscriberEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to add or update the tags for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of objects, one for each tag (key and value) to associate with the Amazon Security Lake resource. For each tag, you must
   *          specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Security Lake resource to remove one or more tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of one or more tag keys. For each value in the list, specify the tag key for a tag to remove from the Amazon Security Lake resource.</p>
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
export interface UpdateDataLakeExceptionSubscriptionRequest {
  /**
   * <p>The subscription protocol to which exception messages are posted.</p>
   * @public
   */
  subscriptionProtocol: string | undefined;

  /**
   * <p>The account that is subscribed to receive exception notifications.</p>
   * @public
   */
  notificationEndpoint: string | undefined;

  /**
   * <p>The time-to-live (TTL) for the exception message to remain. It is the duration of time until which the exception message remains. </p>
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeExceptionSubscriptionResponse {}
