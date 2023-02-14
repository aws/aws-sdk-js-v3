// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SecurityLakeServiceException as __BaseException } from "./SecurityLakeServiceException";

/**
 * <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
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

export enum AccessType {
  LAKEFORMATION = "LAKEFORMATION",
  S3 = "S3",
}

/**
 * <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 */
export class AccountNotFoundException extends __BaseException {
  readonly name: "AccountNotFoundException" = "AccountNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotFoundException, __BaseException>) {
    super({
      name: "AccountNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotFoundException.prototype);
  }
}

export enum OcsfEventClass {
  ACCESS_ACTIVITY = "ACCESS_ACTIVITY",
  ACCOUNT_CHANGE = "ACCOUNT_CHANGE",
  AUTHENTICATION = "AUTHENTICATION",
  AUTHORIZATION = "AUTHORIZATION",
  CLOUD_API = "CLOUD_API",
  CLOUD_STORAGE = "CLOUD_STORAGE",
  CONFIG_STATE = "CONFIG_STATE",
  CONTAINER_LIFECYCLE = "CONTAINER_LIFECYCLE",
  DATABASE_LIFECYCLE = "DATABASE_LIFECYCLE",
  DHCP_ACTIVITY = "DHCP_ACTIVITY",
  DNS_ACTIVITY = "DNS_ACTIVITY",
  ENTITY_MANAGEMENT_AUDIT = "ENTITY_MANAGEMENT_AUDIT",
  FILE_ACTIVITY = "FILE_ACTIVITY",
  FTP_ACTIVITY = "FTP_ACTIVITY",
  HTTP_ACTIVITY = "HTTP_ACTIVITY",
  INVENTORY_INFO = "INVENTORY_INFO",
  KERNEL_ACTIVITY = "KERNEL_ACTIVITY",
  KERNEL_EXTENSION = "KERNEL_EXTENSION",
  MEMORY_ACTIVITY = "MEMORY_ACTIVITY",
  MODULE_ACTIVITY = "MODULE_ACTIVITY",
  NETWORK_ACTIVITY = "NETWORK_ACTIVITY",
  PROCESS_ACTIVITY = "PROCESS_ACTIVITY",
  RDP_ACTIVITY = "RDP_ACTIVITY",
  REGISTRY_KEY_ACTIVITY = "REGISTRY_KEY_ACTIVITY",
  REGISTRY_VALUE_ACTIVITY = "REGISTRY_VALUE_ACTIVITY",
  RESOURCE_ACTIVITY = "RESOURCE_ACTIVITY",
  RFB_ACTIVITY = "RFB_ACTIVITY",
  SCHEDULED_JOB_ACTIVITY = "SCHEDULED_JOB_ACTIVITY",
  SECURITY_FINDING = "SECURITY_FINDING",
  SMB_ACTIVITY = "SMB_ACTIVITY",
  SMTP_ACTIVITY = "SMTP_ACTIVITY",
  SSH_ACTIVITY = "SSH_ACTIVITY",
  VIRTUAL_MACHINE_ACTIVITY = "VIRTUAL_MACHINE_ACTIVITY",
}

export enum SourceStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
}

/**
 * <p>Retrieves the Logs status for the Amazon Security Lake account.</p>
 */
export interface LogsStatus {
  /**
   * <p>Defines path the stored logs are available which has information on your systems,
   *          applications, and services. </p>
   */
  pathToLogs: string | undefined;

  /**
   * <p>The health status of services, including error codes and patterns.</p>
   */
  healthStatus: SourceStatus | string | undefined;
}

/**
 * <p>Amazon Security Lake collects logs and events from supported Amazon Web Services and
 *          custom sources. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 */
export interface AccountSources {
  /**
   * <p>The ID of the Security Lake account for which logs are collected.</p>
   */
  account: string | undefined;

  /**
   * <p>The supported Amazon Web Services from which logs and events are collected.
   *          Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. </p>
   */
  sourceType: string | undefined;

  /**
   * <p>The log status for the Security Lake account.</p>
   */
  logsStatus?: LogsStatus[];

  /**
   * <p>Initializes a new instance of the Event class.</p>
   */
  eventClass?: OcsfEventClass | string;
}

export enum Region {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum AwsLogSourceType {
  CLOUD_TRAIL = "CLOUD_TRAIL",
  ROUTE53 = "ROUTE53",
  SH_FINDINGS = "SH_FINDINGS",
  VPC_FLOW = "VPC_FLOW",
}

/**
 * <p>Automatically enable new organization accounts as member accounts from an Amazon Security Lake
 *          administrator account.</p>
 */
export interface AutoEnableNewRegionConfiguration {
  /**
   * <p>The Amazon Web Services Regions where Security Lake is automatically enabled.</p>
   */
  region: Region | string | undefined;

  /**
   * <p>The Amazon Web Services sources that are automatically enabled in Security Lake.</p>
   */
  sources: (AwsLogSourceType | string)[] | undefined;
}

/**
 * <p>Amazon Security Lake  generally returns 404 errors if the requested object is missing from the
 *          bucket.</p>
 */
export class BucketNotFoundException extends __BaseException {
  readonly name: "BucketNotFoundException" = "BucketNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNotFoundException, __BaseException>) {
    super({
      name: "BucketNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNotFoundException.prototype);
  }
}

/**
 * <p>More than one process tried to modify a resource at the same time. </p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type. </p>
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
 * <p>There was a conflict when you attempted to modify a Security Lake source name. </p>
 */
export class ConflictSourceNamesException extends __BaseException {
  readonly name: "ConflictSourceNamesException" = "ConflictSourceNamesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictSourceNamesException, __BaseException>) {
    super({
      name: "ConflictSourceNamesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictSourceNamesException.prototype);
  }
}

/**
 * <p>A conflicting subscription exception operation is in progress. </p>
 */
export class ConflictSubscriptionException extends __BaseException {
  readonly name: "ConflictSubscriptionException" = "ConflictSubscriptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictSubscriptionException, __BaseException>) {
    super({
      name: "ConflictSubscriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictSubscriptionException.prototype);
  }
}

export enum Dimension {
  MEMBER = "MEMBER",
  REGION = "REGION",
  SOURCE_TYPE = "SOURCE_TYPE",
}

export interface CreateAwsLogSourceRequest {
  /**
   * <p>Specifies the input order to enable dimensions in Security Lake, namely Region, source type,
   *          and member account.</p>
   */
  inputOrder: (Dimension | string)[] | undefined;

  /**
   * <p>Enables data collection from specific Amazon Web Services sources in all specific
   *          accounts and specific Regions.</p>
   */
  enableAllDimensions?: Record<string, Record<string, string[]>>;

  /**
   * <p>Enables data collection from specific Amazon Web Services sources in specific accounts or
   *          Regions.</p>
   */
  enableTwoDimensions?: Record<string, string[]>;

  /**
   * <p>Enables data collection from all Amazon Web Services sources in specific accounts or
   *          Regions.</p>
   */
  enableSingleDimension?: string[];
}

export interface CreateAwsLogSourceResponse {
  /**
   * <p>Lists the accounts that are in the process of enabling a natively supported Amazon Web Service as a Security Lake source.</p>
   */
  processing?: string[];

  /**
   * <p>Lists all accounts in which enabling a natively supported Amazon Web Service as
   *          a Security Lake source failed. The failure occurred as these accounts are not part of an
   *          organization.</p>
   */
  failed?: string[];
}

/**
 * <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Retry the request after the specified time. </p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource for which the type of resource could not be found.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that could not be found.</p>
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
 * <p>Provides an extension of the AmazonServiceException for errors reported by Amazon S3 while processing a request. In particular, this class provides access to the
 *             Amazon S3 extended request ID. If Amazon S3 is incorrectly handling a
 *          request and you need to contact Amazon, this extended request ID may provide useful
 *          debugging information. </p>
 */
export class S3Exception extends __BaseException {
  readonly name: "S3Exception" = "S3Exception";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3Exception, __BaseException>) {
    super({
      name: "S3Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3Exception.prototype);
  }
}

/**
 * <p>The input fails to meet the constraints specified in Amazon Security Lake. </p>
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * <p>Describes the error encountered.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>Your signing certificate could not be validated. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation exception. </p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * <p>The list of parameters that failed to validate. </p>
   */
  fieldList?: ValidationExceptionField[];

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

export interface CreateCustomLogSourceRequest {
  /**
   * <p>The name for a third-party custom source. This must be a Regionally unique value.</p>
   */
  customSourceName: string | undefined;

  /**
   * <p>The Open Cybersecurity Schema Framework (OCSF) event class which describes the type of
   *          data that the custom source will send to Security Lake.</p>
   */
  eventClass: OcsfEventClass | string | undefined;

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
   */
  glueInvocationRoleArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the custom source that will write logs and events
   *          into the Amazon S3 Data Lake.</p>
   */
  logProviderAccountId: string | undefined;
}

export interface CreateCustomLogSourceResponse {
  /**
   * <p>The location of the partition in the Amazon S3 bucket for Security Lake.</p>
   */
  customDataLocation: string | undefined;

  /**
   * <p>The name of the Glue crawler.</p>
   */
  glueCrawlerName: string | undefined;

  /**
   * <p>The table name of the Glue crawler.</p>
   */
  glueTableName: string | undefined;

  /**
   * <p>The Glue database where results are written, such as:
   *             <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  glueDatabaseName: string | undefined;

  /**
   * <p>The ARN of the IAM role to be used by the entity putting logs into your
   *          custom source partition. Security Lake will apply the correct access policies to this role, but
   *          you must first manually create the trust policy for this role. The IAM role
   *          name must start with the text 'Security Lake'. The IAM role must trust the
   *             <code>logProviderAccountId</code> to assume the role.</p>
   */
  logProviderAccessRoleArn: string | undefined;
}

export enum StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  EXPIRE = "EXPIRE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>Retention settings for the destination Amazon S3 buckets in Amazon Security Lake. </p>
 */
export interface RetentionSetting {
  /**
   * <p>The range of storage classes that you can choose from based on the data access,
   *          resiliency, and cost requirements of your workloads.</p>
   */
  storageClass?: StorageClass | string;

  /**
   * <p>The retention period specifies a fixed period of time during which the Security Lake object
   *          remains locked. You can specify the retention period in days for one or more sources. </p>
   */
  retentionPeriod?: number;
}

/**
 * <p>Provides details of Amazon Security Lake configuration object.</p>
 */
export interface LakeConfigurationRequest {
  /**
   * <p>The type of encryption key used by Amazon Security Lake to encrypt the Security Lake configuration
   *          object.</p>
   */
  encryptionKey?: string;

  /**
   * <p>Retention settings for the destination Amazon S3 buckets. </p>
   */
  retentionSettings?: RetentionSetting[];

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an
   *          optional value, both of which you define.</p>
   */
  tagsMap?: Record<string, string>;

  /**
   * <p>Replication enables automatic, asynchronous copying of objects across Amazon S3
   *          buckets. Amazon S3 buckets that are configured for object replication can be owned
   *          by the same Amazon Web Services account or by different accounts. You can replicate objects
   *          to a single destination bucket or to multiple destination buckets. The destination buckets
   *          can be in different Amazon Web Services Regions or within the same Region as the source
   *          bucket.</p>
   *          <p>Set up one or more rollup Regions by providing the Region or Regions that should
   *          contribute to the central rollup Region. </p>
   */
  replicationDestinationRegions?: (Region | string)[];

  /**
   * <p>Replication settings for the Amazon S3 buckets. This parameter uses the Identity and Access Management (IAM) role you created that is managed by Security Lake, to
   *          ensure the replication setting is correct. </p>
   */
  replicationRoleArn?: string;
}

export interface CreateDatalakeRequest {
  /**
   * <p>Enable Security Lake in the specified Regions. To enable Security Lake in specific Amazon Web Services Regions, such as us-east-1 or ap-northeast-3, provide the Region codes. For a
   *          list of Region codes, see <a href="https://docs.aws.amazon.com/general/latest/gr/securitylake.html">Amazon Security Lake endpoints</a> in the
   *             Amazon Web Services General Reference.</p>
   */
  regions?: (Region | string)[];

  /**
   * <p>Specify the Region or Regions that will contribute data to the rollup region.</p>
   */
  configurations?: Record<string, LakeConfigurationRequest>;

  /**
   * <p>Enable Security Lake in all Regions.</p>
   */
  enableAll?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) used to create and update the Glue table.
   *          This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.</p>
   */
  metaStoreManagerRoleArn?: string;
}

export interface CreateDatalakeResponse {}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that exceeds the service quota.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that exceeds the service quota.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The code for the service in Service Quotas.</p>
   */
  serviceCode: string | undefined;

  /**
   * <p>That the rate of requests to Security Lake is exceeding the request quotas for your Amazon Web Services account.</p>
   */
  quotaCode: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded. </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the service in Service Quotas.</p>
   */
  serviceCode?: string;

  /**
   * <p>That the rate of requests to Security Lake is exceeding the request quotas for your Amazon Web Services account.</p>
   */
  quotaCode?: string;

  /**
   * <p>Retry the request after the specified time. </p>
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

export interface CreateDatalakeAutoEnableRequest {
  /**
   * <p>Enable Security Lake with the specified configuration settings to begin collecting security
   *          data for new accounts in your organization. </p>
   */
  configurationForNewAccounts: AutoEnableNewRegionConfiguration[] | undefined;
}

export interface CreateDatalakeAutoEnableResponse {}

export interface CreateDatalakeDelegatedAdminRequest {
  /**
   * <p>The Amazon Web Services account ID of the Security Lake delegated administrator.</p>
   */
  account: string | undefined;
}

export interface CreateDatalakeDelegatedAdminResponse {}

export enum SubscriptionProtocolType {
  APP = "APP",
  EMAIL = "EMAIL",
  EMAIL_JSON = "EMAIL_JSON",
  FIREHOSE = "FIREHOSE",
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  LAMBDA = "LAMBDA",
  SMS = "SMS",
  SQS = "SQS",
}

export interface CreateDatalakeExceptionsSubscriptionRequest {
  /**
   * <p>The subscription protocol to which exception notifications are posted. </p>
   */
  subscriptionProtocol: SubscriptionProtocolType | string | undefined;

  /**
   * <p>The Amazon Web Services account where you want to receive exception notifications.</p>
   */
  notificationEndpoint: string | undefined;
}

export interface CreateDatalakeExceptionsSubscriptionResponse {}

/**
 * <p>The supported source types from which logs and events are collected in Amazon Security Lake.
 *          For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
 */
export type SourceType = SourceType.AwsSourceTypeMember | SourceType.CustomSourceTypeMember | SourceType.$UnknownMember;

export namespace SourceType {
  /**
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. </p>
   */
  export interface AwsSourceTypeMember {
    awsSourceType: AwsLogSourceType | string;
    customSourceType?: never;
    $unknown?: never;
  }

  /**
   * <p>Amazon Security Lake supports custom source types. For a detailed list, see the Amazon Security Lake
   *          User Guide.</p>
   */
  export interface CustomSourceTypeMember {
    awsSourceType?: never;
    customSourceType: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    awsSourceType?: never;
    customSourceType?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsSourceType: (value: AwsLogSourceType | string) => T;
    customSourceType: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SourceType, visitor: Visitor<T>): T => {
    if (value.awsSourceType !== undefined) return visitor.awsSourceType(value.awsSourceType);
    if (value.customSourceType !== undefined) return visitor.customSourceType(value.customSourceType);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface CreateSubscriberRequest {
  /**
   * <p>The supported Amazon Web Services from which logs and events are collected.
   *          Security Lake supports log and event collection for natively supported Amazon Web Services.</p>
   */
  sourceTypes: SourceType[] | undefined;

  /**
   * <p>The Amazon Web Services account ID used to access your data.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The external ID of the subscriber. This lets the user that is assuming the role assert
   *          the circumstances in which they are operating. It also provides a way for the account owner
   *          to permit the role to be assumed only under specific circumstances.</p>
   */
  externalId: string | undefined;

  /**
   * <p>The Amazon S3 or Lake Formation access type.</p>
   */
  accessTypes?: (AccessType | string)[];

  /**
   * <p>The name of your Security Lake subscriber account.</p>
   */
  subscriberName: string | undefined;

  /**
   * <p>The description for your subscriber account in Security Lake. </p>
   */
  subscriberDescription?: string;
}

export interface CreateSubscriberResponse {
  /**
   * <p>The <code>subscriptionId</code> created by the <code>CreateSubscriber</code> API
   *          call.</p>
   */
  subscriptionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more
   *          information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM identifiers in
   *             the Identity and Access Management (IAM) User Guide</a>. .</p>
   */
  roleArn?: string;

  /**
   * <p>The ARN for the Amazon Simple Notification Service.</p>
   */
  snsArn?: string;

  /**
   * <p>The ARN for the Amazon S3 bucket. </p>
   */
  s3BucketArn?: string;
}

/**
 * <p>The request was rejected because a value that's not valid or is out of range was
 *          supplied for an input parameter. </p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

export enum HttpsMethod {
  POST = "POST",
  PUT = "PUT",
}

export interface CreateSubscriptionNotificationConfigurationRequest {
  /**
   * <p>The subscription ID for the notification subscription/</p>
   */
  subscriptionId: string | undefined;

  /**
   * <p>The subscription endpoint in Security Lake. If you prefer notification with an HTTPs
   *          endpoint, populate this field.</p>
   */
  subscriptionEndpoint?: string;

  /**
   * <p>The key name for the notification subscription.</p>
   */
  httpsApiKeyName?: string;

  /**
   * <p>The key value for the notification subscription.</p>
   */
  httpsApiKeyValue?: string;

  /**
   * <p>The HTTPS method used for the notification subscription. </p>
   */
  httpsMethod?: HttpsMethod | string;

  /**
   * <p>Create an Amazon Simple Queue Service queue.</p>
   */
  createSqs?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you
   *          created.</p>
   */
  roleArn?: string;
}

export interface CreateSubscriptionNotificationConfigurationResponse {
  /**
   * <p>Returns the Amazon Resource Name (ARN) of the queue.</p>
   */
  queueArn?: string;
}

export interface DeleteAwsLogSourceRequest {
  /**
   * <p>This is a mandatory input. Specify the input order to disable dimensions in Security Lake,
   *          namely Region (Amazon Web Services Region code, source type, and member (account ID of a
   *          specific Amazon Web Services account). </p>
   */
  inputOrder: (Dimension | string)[] | undefined;

  /**
   * <p>Removes the specific Amazon Web Services sources from specific accounts and specific
   *          Regions.</p>
   */
  disableAllDimensions?: Record<string, Record<string, string[]>>;

  /**
   * <p>Remove a specific Amazon Web Services source from specific accounts or Regions.</p>
   */
  disableTwoDimensions?: Record<string, string[]>;

  /**
   * <p>Removes all Amazon Web Services sources from specific accounts or Regions.</p>
   */
  disableSingleDimension?: string[];
}

export interface DeleteAwsLogSourceResponse {
  /**
   * <p>Deletion of the Amazon Web Services sources is in progress.</p>
   */
  processing?: string[];

  /**
   * <p>Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.</p>
   */
  failed?: string[];
}

export interface DeleteCustomLogSourceRequest {
  /**
   * <p>The custom source name for the custom log source.</p>
   */
  customSourceName: string | undefined;
}

export interface DeleteCustomLogSourceResponse {
  /**
   * <p>The location of the partition in the Amazon S3 bucket for Security Lake.</p>
   */
  customDataLocation: string | undefined;
}

export interface DeleteDatalakeRequest {}

export interface DeleteDatalakeResponse {}

export interface DeleteDatalakeAutoEnableRequest {
  /**
   * <p>Delete Amazon Security Lake with the specified configuration settings to stop ingesting
   *          security data for new accounts in Security Lake. </p>
   */
  removeFromConfigurationForNewAccounts: AutoEnableNewRegionConfiguration[] | undefined;
}

export interface DeleteDatalakeAutoEnableResponse {}

export interface DeleteDatalakeDelegatedAdminRequest {
  /**
   * <p>The account ID the Security Lake delegated administrator.</p>
   */
  account: string | undefined;
}

export interface DeleteDatalakeDelegatedAdminResponse {}

export interface DeleteDatalakeExceptionsSubscriptionRequest {}

export interface DeleteDatalakeExceptionsSubscriptionResponse {
  /**
   * <p>Retrieves the status of the delete Security Lake operation for an account. </p>
   */
  status: string | undefined;
}

export interface DeleteSubscriberRequest {
  /**
   * <p>A value created by Security Lake that uniquely identifies your <code>DeleteSubscriber</code> API request. </p>
   */
  id: string | undefined;
}

export interface DeleteSubscriberResponse {}

export interface DeleteSubscriptionNotificationConfigurationRequest {
  /**
   * <p>The ID of the Security Lake subscriber account.</p>
   */
  subscriptionId: string | undefined;
}

export interface DeleteSubscriptionNotificationConfigurationResponse {}

export enum EndpointProtocol {
  HTTPS = "HTTPS",
  SQS = "SQS",
}

/**
 * <p>Represents an error interacting with the Amazon EventBridge service.</p>
 */
export class EventBridgeException extends __BaseException {
  readonly name: "EventBridgeException" = "EventBridgeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventBridgeException, __BaseException>) {
    super({
      name: "EventBridgeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventBridgeException.prototype);
  }
}

/**
 * <p>List of all failures.</p>
 */
export interface Failures {
  /**
   * <p>List of all exception messages.</p>
   */
  exceptionMessage: string | undefined;

  /**
   * <p>List of all remediation steps for failures.</p>
   */
  remediation: string | undefined;

  /**
   * <p>This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.</p>
   */
  timestamp: Date | undefined;
}

/**
 * <p>Response element for actions that make changes, namely create, update, or delete
 *          actions. </p>
 */
export interface FailuresResponse {
  /**
   * <p>List of Amazon Web Services Regions where the failure occurred. </p>
   */
  region?: string;

  /**
   * <p>List of all failures. </p>
   */
  failures?: Failures[];
}

export interface GetDatalakeRequest {}

export enum SettingsStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  PENDING = "PENDING",
}

/**
 * <p>Provides details of Amazon Security Lake lake configuration object.</p>
 */
export interface LakeConfigurationResponse {
  /**
   * <p>The type of encryption key used by secure the Security Lake configuration object.</p>
   */
  encryptionKey?: string;

  /**
   * <p>Retention settings for the destination Amazon S3 buckets. </p>
   */
  retentionSettings?: RetentionSetting[];

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an
   *          optional value, both of which you define.</p>
   */
  tagsMap?: Record<string, string>;

  /**
   * <p>Replication enables automatic, asynchronous copying of objects across Amazon S3
   *          buckets. Amazon S3 buckets that are configured for object replication can be owned
   *          by the same Amazon Web Services account or by different accounts. You can replicate objects
   *          to a single destination bucket or to multiple destination buckets. The destination buckets
   *          can be in different Amazon Web Services Regions or within the same Region as the source
   *          bucket.</p>
   *          <p>Set up one or more rollup Regions by providing the Region or Regions that should
   *          contribute to the central rollup Region. </p>
   */
  replicationDestinationRegions?: (Region | string)[];

  /**
   * <p>Replication settings for the Amazon S3 buckets. This parameter uses the IAM role you created that is managed by Security Lake, to ensure the replication
   *          setting is correct. </p>
   */
  replicationRoleArn?: string;

  /**
   * <p>Amazon Resource Names (ARNs) uniquely identify Amazon Web Services resources. Security Lake
   *          requires an ARN when you need to specify a resource unambiguously across all of Amazon Web Services, such as in IAM policies, Amazon Relational Database Service (Amazon RDS) tags, and API calls. </p>
   */
  s3BucketArn?: string;

  /**
   * <p>Retrieves the status of the configuration operation for an account in Amazon Security Lake. </p>
   */
  status?: SettingsStatus | string;
}

export interface GetDatalakeResponse {
  /**
   * <p>Retrieves the Security Lake configuration object. </p>
   */
  configurations: Record<string, LakeConfigurationResponse> | undefined;
}

export interface GetDatalakeAutoEnableRequest {}

export interface GetDatalakeAutoEnableResponse {
  /**
   * <p>The configuration for new accounts.</p>
   */
  autoEnableNewAccounts: AutoEnableNewRegionConfiguration[] | undefined;
}

export interface GetDatalakeExceptionsExpiryRequest {}

export interface GetDatalakeExceptionsExpiryResponse {
  /**
   * <p>The expiration period and time-to-live (TTL).</p>
   */
  exceptionMessageExpiry: number | undefined;
}

export interface GetDatalakeExceptionsSubscriptionRequest {}

/**
 * <p>Protocol used in Amazon Security Lake that dictates how notifications are posted at the
 *          endpoint. </p>
 */
export interface ProtocolAndNotificationEndpoint {
  /**
   * <p>The protocol to which notification messages are posted. </p>
   */
  protocol?: string;

  /**
   * <p>The account that is subscribed to receive exception notifications. </p>
   */
  endpoint?: string;
}

export interface GetDatalakeExceptionsSubscriptionResponse {
  /**
   * <p>Retrieves the exception notification subscription information.</p>
   */
  protocolAndNotificationEndpoint: ProtocolAndNotificationEndpoint | undefined;
}

export interface GetDatalakeStatusRequest {
  /**
   * <p>The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.</p>
   */
  accountSet?: string[];

  /**
   * <p>The maximum limit of accounts for which the static snapshot of the current Region,
   *          including enabled accounts and log sources, is retrieved.</p>
   */
  maxAccountResults?: number;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged. </p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

export interface GetDatalakeStatusResponse {
  /**
   * <p>The list of enabled accounts and enabled sources.</p>
   */
  accountSourcesList: AccountSources[] | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged. </p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

export interface GetSubscriberRequest {
  /**
   * <p>A value created by Amazon Security Lake that uniquely identifies your
   *             <code>GetSubscriber</code> API request.</p>
   */
  id: string | undefined;
}

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
  READY = "READY",
}

/**
 * <p>Provides details about the Amazon Security Lake account subscription. Subscribers are notified
 *          of new objects for a source as the data is written to your Amazon S3 bucket for
 *          Security Lake. </p>
 */
export interface SubscriberResource {
  /**
   * <p>The subscription ID of the Amazon Security Lake subscriber account.</p>
   */
  subscriptionId: string | undefined;

  /**
   * <p>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services. For more information, see the Amazon Security Lake User Guide.</p>
   */
  sourceTypes: SourceType[] | undefined;

  /**
   * <p>The Amazon Web Services account ID you are using to create your Amazon Security Lake
   *          account.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The name of your Amazon Security Lake subscriber account.</p>
   */
  subscriberName?: string;

  /**
   * <p>The subscriber descriptions for a subscriber account. The description for a subscriber
   *          includes <code>subscriberName</code>, <code>accountID</code>, <code>externalID</code>, and
   *          <code>subscriptionId</code>.</p>
   */
  subscriberDescription?: string;

  /**
   * <p>The subscription status of the Amazon Security Lake subscriber account.</p>
   */
  subscriptionStatus?: SubscriptionStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) specifying the role of the subscriber.</p>
   */
  roleArn?: string;

  /**
   * <p>The ARN for the Amazon Simple Notification Service.</p>
   */
  snsArn?: string;

  /**
   * <p>The ARN for the Amazon S3 bucket. </p>
   */
  s3BucketArn?: string;

  /**
   * <p>You can choose to notify subscribers of new objects with an Amazon Simple Queue Service
   *             (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the
   *          subscriber. </p>
   *          <p> Subscribers can consume data by directly querying Lake Formation tables in your
   *             Amazon S3 bucket through services like Amazon Athena. This subscription
   *          type is defined as <code>LAKEFORMATION</code>. </p>
   */
  accessTypes?: (AccessType | string)[];

  /**
   * <p>The subscription endpoint to which exception messages are posted. </p>
   */
  subscriptionEndpoint?: string;

  /**
   * <p>The subscription protocol to which exception messages are posted. </p>
   */
  subscriptionProtocol?: EndpointProtocol | string;

  /**
   * <p>The external ID of the subscriber. The external ID lets the user that is assuming the
   *          role assert the circumstances in which they are operating. It also provides a way for the
   *          account owner to permit the role to be assumed only under specific circumstances.</p>
   */
  externalId?: string;

  /**
   * <p>The date and time when the subscription was created. </p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the subscription was created. </p>
   */
  updatedAt?: Date;
}

export interface GetSubscriberResponse {
  /**
   * <p>The subscription information for the specified subscription ID.</p>
   */
  subscriber?: SubscriberResource;
}

export interface ListDatalakeExceptionsRequest {
  /**
   * <p>List the Amazon Web Services Regions from which exceptions are retrieved.</p>
   */
  regionSet?: (Region | string)[];

  /**
   * <p>List the maximum number of failures in Security Lake.</p>
   */
  maxFailures?: number;

  /**
   * <p>List if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged. </p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

export interface ListDatalakeExceptionsResponse {
  /**
   * <p>Lists the failures that cannot be retried in the current Region.</p>
   */
  nonRetryableFailures: FailuresResponse[] | undefined;

  /**
   * <p>List if there are more results available. The value of nextToken is a unique pagination
   *          token for each page. Repeat the call using the returned token to retrieve the next page.
   *          Keep all other arguments unchanged. </p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will
   *          return an HTTP 400 InvalidToken error.</p>
   */
  nextToken?: string;
}

export interface ListLogSourcesRequest {
  /**
   * <p>Lists the log sources in input order, namely Region, source
   *          type, and member account.</p>
   */
  inputOrder?: (Dimension | string)[];

  /**
   * <p>List the view of log sources for enabled Amazon Security Lake accounts for specific Amazon Web Services sources from specific accounts and specific Regions.</p>
   */
  listAllDimensions?: Record<string, Record<string, string[]>>;

  /**
   * <p>Lists the view of log sources for enabled Security Lake accounts for specific Amazon Web Services sources from specific accounts or specific Regions.</p>
   */
  listTwoDimensions?: Record<string, string[]>;

  /**
   * <p>List the view of log sources for enabled Security Lake accounts for all Amazon Web Services
   *          sources from specific accounts or specific Regions.</p>
   */
  listSingleDimension?: string[];

  /**
   * <p>The maximum number of accounts for which the log sources are displayed.</p>
   */
  maxResults?: number;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export interface ListLogSourcesResponse {
  /**
   * <p>Lists the log sources by Regions for enabled Security Lake accounts.</p>
   */
  regionSourceTypesAccountsList: Record<string, Record<string, string[]>>[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *       using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export interface ListSubscribersRequest {
  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of accounts for which the configuration is displayed.</p>
   */
  maxResults?: number;
}

export interface ListSubscribersResponse {
  /**
   * <p>The subscribers available for the specified Security Lake account ID.</p>
   */
  subscribers: SubscriberResource[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. You can repeat the call
   *          using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export interface UpdateDatalakeRequest {
  /**
   * <p>Specify the Region or Regions that will contribute data to the rollup region.</p>
   */
  configurations: Record<string, LakeConfigurationRequest> | undefined;
}

export interface UpdateDatalakeResponse {}

export interface UpdateDatalakeExceptionsExpiryRequest {
  /**
   * <p>The time-to-live (TTL) for the exception message to remain.</p>
   */
  exceptionMessageExpiry: number | undefined;
}

export interface UpdateDatalakeExceptionsExpiryResponse {}

export interface UpdateDatalakeExceptionsSubscriptionRequest {
  /**
   * <p>The subscription protocol to which exception messages are posted. </p>
   */
  subscriptionProtocol: SubscriptionProtocolType | string | undefined;

  /**
   * <p>The account that is subscribed to receive exception notifications.</p>
   */
  notificationEndpoint: string | undefined;
}

export interface UpdateDatalakeExceptionsSubscriptionResponse {}

export interface UpdateSubscriberRequest {
  /**
   * <p>A value created by Security Lake that uniquely identifies your subscription. </p>
   */
  id: string | undefined;

  /**
   * <p>The supported Amazon Web Services from which logs and events are collected. For
   *          the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.</p>
   */
  sourceTypes: SourceType[] | undefined;

  /**
   * <p>The external ID of the Security Lake account.</p>
   */
  externalId?: string;

  /**
   * <p>The name of the Security Lake account subscriber. </p>
   */
  subscriberName?: string;

  /**
   * <p>The description of the Security Lake account subscriber.</p>
   */
  subscriberDescription?: string;
}

export interface UpdateSubscriberResponse {
  /**
   * <p>The account of the subscriber.</p>
   */
  subscriber?: SubscriberResource;
}

export interface UpdateSubscriptionNotificationConfigurationRequest {
  /**
   * <p>The subscription ID for which the subscription notification is specified. </p>
   */
  subscriptionId: string | undefined;

  /**
   * <p>The subscription endpoint in Security Lake.</p>
   */
  subscriptionEndpoint?: string;

  /**
   * <p>The key name for the subscription notification.</p>
   */
  httpsApiKeyName?: string;

  /**
   * <p>The key value for the subscription notification.</p>
   */
  httpsApiKeyValue?: string;

  /**
   * <p>The HTTPS method used for the subscription notification. </p>
   */
  httpsMethod?: HttpsMethod | string;

  /**
   * <p>Create a new subscription notification for the specified subscription ID in
   *          Amazon Security Lake.</p>
   */
  createSqs?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) specifying the role of the subscriber. </p>
   */
  roleArn?: string;
}

export interface UpdateSubscriptionNotificationConfigurationResponse {
  /**
   * <p>Returns the ARN of the queue.</p>
   */
  queueArn?: string;
}

/**
 * @internal
 */
export const LogsStatusFilterSensitiveLog = (obj: LogsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountSourcesFilterSensitiveLog = (obj: AccountSources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoEnableNewRegionConfigurationFilterSensitiveLog = (obj: AutoEnableNewRegionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAwsLogSourceRequestFilterSensitiveLog = (obj: CreateAwsLogSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAwsLogSourceResponseFilterSensitiveLog = (obj: CreateAwsLogSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomLogSourceRequestFilterSensitiveLog = (obj: CreateCustomLogSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomLogSourceResponseFilterSensitiveLog = (obj: CreateCustomLogSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionSettingFilterSensitiveLog = (obj: RetentionSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LakeConfigurationRequestFilterSensitiveLog = (obj: LakeConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeRequestFilterSensitiveLog = (obj: CreateDatalakeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeResponseFilterSensitiveLog = (obj: CreateDatalakeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeAutoEnableRequestFilterSensitiveLog = (obj: CreateDatalakeAutoEnableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeAutoEnableResponseFilterSensitiveLog = (obj: CreateDatalakeAutoEnableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeDelegatedAdminRequestFilterSensitiveLog = (
  obj: CreateDatalakeDelegatedAdminRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeDelegatedAdminResponseFilterSensitiveLog = (
  obj: CreateDatalakeDelegatedAdminResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog = (
  obj: CreateDatalakeExceptionsSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog = (
  obj: CreateDatalakeExceptionsSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceTypeFilterSensitiveLog = (obj: SourceType): any => {
  if (obj.awsSourceType !== undefined) return { awsSourceType: obj.awsSourceType };
  if (obj.customSourceType !== undefined) return { customSourceType: obj.customSourceType };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateSubscriberRequestFilterSensitiveLog = (obj: CreateSubscriberRequest): any => ({
  ...obj,
  ...(obj.sourceTypes && { sourceTypes: obj.sourceTypes.map((item) => SourceTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateSubscriberResponseFilterSensitiveLog = (obj: CreateSubscriberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionNotificationConfigurationRequestFilterSensitiveLog = (
  obj: CreateSubscriptionNotificationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubscriptionNotificationConfigurationResponseFilterSensitiveLog = (
  obj: CreateSubscriptionNotificationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAwsLogSourceRequestFilterSensitiveLog = (obj: DeleteAwsLogSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAwsLogSourceResponseFilterSensitiveLog = (obj: DeleteAwsLogSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomLogSourceRequestFilterSensitiveLog = (obj: DeleteCustomLogSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomLogSourceResponseFilterSensitiveLog = (obj: DeleteCustomLogSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeRequestFilterSensitiveLog = (obj: DeleteDatalakeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeResponseFilterSensitiveLog = (obj: DeleteDatalakeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeAutoEnableRequestFilterSensitiveLog = (obj: DeleteDatalakeAutoEnableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeAutoEnableResponseFilterSensitiveLog = (obj: DeleteDatalakeAutoEnableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeDelegatedAdminRequestFilterSensitiveLog = (
  obj: DeleteDatalakeDelegatedAdminRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeDelegatedAdminResponseFilterSensitiveLog = (
  obj: DeleteDatalakeDelegatedAdminResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeExceptionsSubscriptionRequestFilterSensitiveLog = (
  obj: DeleteDatalakeExceptionsSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatalakeExceptionsSubscriptionResponseFilterSensitiveLog = (
  obj: DeleteDatalakeExceptionsSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriberRequestFilterSensitiveLog = (obj: DeleteSubscriberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriberResponseFilterSensitiveLog = (obj: DeleteSubscriberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionNotificationConfigurationRequestFilterSensitiveLog = (
  obj: DeleteSubscriptionNotificationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubscriptionNotificationConfigurationResponseFilterSensitiveLog = (
  obj: DeleteSubscriptionNotificationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailuresFilterSensitiveLog = (obj: Failures): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailuresResponseFilterSensitiveLog = (obj: FailuresResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeRequestFilterSensitiveLog = (obj: GetDatalakeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LakeConfigurationResponseFilterSensitiveLog = (obj: LakeConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeResponseFilterSensitiveLog = (obj: GetDatalakeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeAutoEnableRequestFilterSensitiveLog = (obj: GetDatalakeAutoEnableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeAutoEnableResponseFilterSensitiveLog = (obj: GetDatalakeAutoEnableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeExceptionsExpiryRequestFilterSensitiveLog = (obj: GetDatalakeExceptionsExpiryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeExceptionsExpiryResponseFilterSensitiveLog = (
  obj: GetDatalakeExceptionsExpiryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeExceptionsSubscriptionRequestFilterSensitiveLog = (
  obj: GetDatalakeExceptionsSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtocolAndNotificationEndpointFilterSensitiveLog = (obj: ProtocolAndNotificationEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeExceptionsSubscriptionResponseFilterSensitiveLog = (
  obj: GetDatalakeExceptionsSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeStatusRequestFilterSensitiveLog = (obj: GetDatalakeStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatalakeStatusResponseFilterSensitiveLog = (obj: GetDatalakeStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSubscriberRequestFilterSensitiveLog = (obj: GetSubscriberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriberResourceFilterSensitiveLog = (obj: SubscriberResource): any => ({
  ...obj,
  ...(obj.sourceTypes && { sourceTypes: obj.sourceTypes.map((item) => SourceTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetSubscriberResponseFilterSensitiveLog = (obj: GetSubscriberResponse): any => ({
  ...obj,
  ...(obj.subscriber && { subscriber: SubscriberResourceFilterSensitiveLog(obj.subscriber) }),
});

/**
 * @internal
 */
export const ListDatalakeExceptionsRequestFilterSensitiveLog = (obj: ListDatalakeExceptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatalakeExceptionsResponseFilterSensitiveLog = (obj: ListDatalakeExceptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLogSourcesRequestFilterSensitiveLog = (obj: ListLogSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLogSourcesResponseFilterSensitiveLog = (obj: ListLogSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscribersRequestFilterSensitiveLog = (obj: ListSubscribersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubscribersResponseFilterSensitiveLog = (obj: ListSubscribersResponse): any => ({
  ...obj,
  ...(obj.subscribers && { subscribers: obj.subscribers.map((item) => SubscriberResourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateDatalakeRequestFilterSensitiveLog = (obj: UpdateDatalakeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatalakeResponseFilterSensitiveLog = (obj: UpdateDatalakeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatalakeExceptionsExpiryRequestFilterSensitiveLog = (
  obj: UpdateDatalakeExceptionsExpiryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatalakeExceptionsExpiryResponseFilterSensitiveLog = (
  obj: UpdateDatalakeExceptionsExpiryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog = (
  obj: UpdateDatalakeExceptionsSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog = (
  obj: UpdateDatalakeExceptionsSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriberRequestFilterSensitiveLog = (obj: UpdateSubscriberRequest): any => ({
  ...obj,
  ...(obj.sourceTypes && { sourceTypes: obj.sourceTypes.map((item) => SourceTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateSubscriberResponseFilterSensitiveLog = (obj: UpdateSubscriberResponse): any => ({
  ...obj,
  ...(obj.subscriber && { subscriber: SubscriberResourceFilterSensitiveLog(obj.subscriber) }),
});

/**
 * @internal
 */
export const UpdateSubscriptionNotificationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateSubscriptionNotificationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubscriptionNotificationConfigurationResponseFilterSensitiveLog = (
  obj: UpdateSubscriptionNotificationConfigurationResponse
): any => ({
  ...obj,
});
