// smithy-typescript generated code
import type {
  AccessType,
  AwsLogSourceName,
  DataLakeStatus,
  HttpMethod,
  SourceCollectionStatus,
  SubscriberStatus,
} from "./enums";

/**
 * The Amazon Web Services identity.
 *
 * @public
 */
export interface AwsIdentity {
  /**
   * The Amazon Web Services identity principal.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * The external ID used to establish trust relationship with the Amazon Web Services identity.
   *
   * @public
   */
  externalId: string | undefined;
}

/**
 * To add a natively-supported Amazon Web Services service as a log source, use these parameters to specify the configuration settings for the log source.
 *
 * @public
 */
export interface AwsLogSourceConfiguration {
  /**
   * Specify the Amazon Web Services account information where you want to enable Security Lake.
   *
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * Specify the Regions where you want to enable Security Lake.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The name for a Amazon Web Services source.
   *
   * @public
   */
  sourceName: AwsLogSourceName | undefined;

  /**
   * The version for a Amazon Web Services source.
   *
   * @public
   */
  sourceVersion?: string | undefined;
}

/**
 * Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services.
 *
 * @public
 */
export interface AwsLogSourceResource {
  /**
   * The name for a Amazon Web Services source. This must be a Regionally unique value.
   *
   * @public
   */
  sourceName?: AwsLogSourceName | undefined;

  /**
   * The version for a Amazon Web Services source. This must be a Regionally unique value.
   *
   * @public
   */
  sourceVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateAwsLogSourceRequest {
  /**
   * Specify the natively-supported Amazon Web Services service to add as a source in Security Lake.
   *
   * @public
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAwsLogSourceResponse {
  /**
   * Lists all accounts in which enabling a natively supported Amazon Web Services service as a Security Lake source failed. The failure occurred as these accounts are not part of an organization.
   *
   * @public
   */
  failed?: string[] | undefined;
}

/**
 * The configuration used for the Glue Crawler for a third-party custom source.
 *
 * @public
 */
export interface CustomLogSourceCrawlerConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be used by the Glue crawler. The recommended IAM policies are:
   *
   * - The managed policy `AWSGlueServiceRole`
   * - A custom policy granting access to your Amazon S3 Data Lake
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * The configuration used for the third-party custom source.
 *
 * @public
 */
export interface CustomLogSourceConfiguration {
  /**
   * The configuration used for the Glue Crawler for a third-party custom source.
   *
   * @public
   */
  crawlerConfiguration: CustomLogSourceCrawlerConfiguration | undefined;

  /**
   * The identity of the log provider for the third-party custom source.
   *
   * @public
   */
  providerIdentity: AwsIdentity | undefined;
}

/**
 * @public
 */
export interface CreateCustomLogSourceRequest {
  /**
   * Specify the name for a third-party custom source. This must be a Regionally unique value. The `sourceName` you enter here, is used in the `LogProviderRole` name which follows the convention `AmazonSecurityLake-Provider-\{name of the custom source\}-\{region\}`. You must use a `CustomLogSource` name that is shorter than or equal to 20 characters. This ensures that the `LogProviderRole` name is below the 64 character limit.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake. For the list of supported event classes, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/adding-custom-sources.html#ocsf-eventclass).
   *
   * @public
   */
  eventClasses?: string[] | undefined;

  /**
   * The configuration used for the third-party custom source.
   *
   * @public
   */
  configuration: CustomLogSourceConfiguration | undefined;
}

/**
 * The attributes of a third-party custom source.
 *
 * @public
 */
export interface CustomLogSourceAttributes {
  /**
   * The ARN of the Glue crawler.
   *
   * @public
   */
  crawlerArn?: string | undefined;

  /**
   * The ARN of the Glue database where results are written, such as: `arn:aws:daylight:us-east-1::database/sometable/*`.
   *
   * @public
   */
  databaseArn?: string | undefined;

  /**
   * The ARN of the Glue table.
   *
   * @public
   */
  tableArn?: string | undefined;
}

/**
 * The details of the log provider for a third-party custom source.
 *
 * @public
 */
export interface CustomLogSourceProvider {
  /**
   * The ARN of the IAM role to be used by the entity putting logs into your custom source partition. Security Lake will apply the correct access policies to this role, but you must first manually create the trust policy for this role. The IAM role name must start with the text 'Security Lake'. The IAM role must trust the `logProviderAccountId` to assume the role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The location of the partition in the Amazon S3 bucket for Security Lake.
   *
   * @public
   */
  location?: string | undefined;
}

/**
 * Amazon Security Lake can collect logs and events from third-party custom sources.
 *
 * @public
 */
export interface CustomLogSourceResource {
  /**
   * The name for a third-party custom source. This must be a Regionally unique value.
   *
   * @public
   */
  sourceName?: string | undefined;

  /**
   * The version for a third-party custom source. This must be a Regionally unique value.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * The details of the log provider for a third-party custom source.
   *
   * @public
   */
  provider?: CustomLogSourceProvider | undefined;

  /**
   * The attributes of a third-party custom source.
   *
   * @public
   */
  attributes?: CustomLogSourceAttributes | undefined;
}

/**
 * @public
 */
export interface CreateCustomLogSourceResponse {
  /**
   * The third-party custom source that was created.
   *
   * @public
   */
  source?: CustomLogSourceResource | undefined;
}

/**
 * Provides encryption details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeEncryptionConfiguration {
  /**
   * The identifier of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Provide expiration lifecycle details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeLifecycleExpiration {
  /**
   * Number of days before data expires in the Amazon Security Lake object.
   *
   * @public
   */
  days?: number | undefined;
}

/**
 * Provide transition lifecycle details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeLifecycleTransition {
  /**
   * The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.
   *
   * @public
   */
  storageClass?: string | undefined;

  /**
   * Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.
   *
   * @public
   */
  days?: number | undefined;
}

/**
 * Provides lifecycle details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeLifecycleConfiguration {
  /**
   * Provides data expiration details of Amazon Security Lake object.
   *
   * @public
   */
  expiration?: DataLakeLifecycleExpiration | undefined;

  /**
   * Provides data storage transition details of Amazon Security Lake object.
   *
   * @public
   */
  transitions?: DataLakeLifecycleTransition[] | undefined;
}

/**
 * Provides replication details for objects stored in the Amazon Security Lake data lake.
 *
 * @public
 */
export interface DataLakeReplicationConfiguration {
  /**
   * Specifies one or more centralized rollup Regions. The Amazon Web Services Region specified in the `region` parameter of the [`CreateDataLake`](https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLake.html) or [`UpdateDataLake`](https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLake.html) operations contributes data to the rollup Region or Regions specified in this parameter.
   *
   * Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. S3 buckets that are configured for object replication can be owned by the same Amazon Web Services account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Regions or within the same Region as the source bucket.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * Replication settings for the Amazon S3 buckets. This parameter uses the Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * Provides details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeConfiguration {
  /**
   * The Amazon Web Services Regions where Security Lake is automatically enabled.
   *
   * @public
   */
  region: string | undefined;

  /**
   * Provides encryption details of Amazon Security Lake object.
   *
   * @public
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration | undefined;

  /**
   * Provides lifecycle details of Amazon Security Lake object.
   *
   * @public
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration | undefined;

  /**
   * Provides replication details of Amazon Security Lake object.
   *
   * @public
   */
  replicationConfiguration?: DataLakeReplicationConfiguration | undefined;
}

/**
 * A *tag* is a label that you can define and associate with Amazon Web Services resources, including certain types of Amazon Security Lake resources. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with the following types of Security Lake resources: subscribers, and the data lake configuration for your Amazon Web Services account in individual Amazon Web Services Regions.
 *
 * A resource can have up to 50 tags. Each tag consists of a required *tag key* and an associated *tag value*. A *tag key* is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A *tag value* acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: _ . : / = + @ -
 *
 * For more information, see [Tagging Amazon Security Lake resources](https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html) in the *Amazon Security Lake User Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The name of the tag. This is a general label that acts as a category for a more specific tag value (`value`).
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value that’s associated with the specified tag key (`key`). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeRequest {
  /**
   * Specify the Region or Regions that will contribute data to the rollup region.
   *
   * @public
   */
  configurations: DataLakeConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) used to create and update the Glue table. This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.
   *
   * @public
   */
  metaStoreManagerRoleArn: string | undefined;

  /**
   * An array of objects, one for each tag to associate with the data lake configuration. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The details of the last `UpdateDataLake` or `DeleteDataLake` API request which failed.
 *
 * @public
 */
export interface DataLakeUpdateException {
  /**
   * The reason for the exception of the last `UpdateDataLake`or `DeleteDataLake` API request.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The reason code for the exception of the last `UpdateDataLake` or `DeleteDataLake` API request.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * The status of the last `UpdateDataLake` or `DeleteDataLake` API request. This is set to Completed after the configuration is updated, or removed if deletion of the data lake is successful.
 *
 * @public
 */
export interface DataLakeUpdateStatus {
  /**
   * The unique ID for the last `UpdateDataLake` or `DeleteDataLake` API request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The status of the last `UpdateDataLake` or `DeleteDataLake` API request that was requested.
   *
   * @public
   */
  status?: DataLakeStatus | undefined;

  /**
   * The details of the last `UpdateDataLake`or `DeleteDataLake` API request which failed.
   *
   * @public
   */
  exception?: DataLakeUpdateException | undefined;
}

/**
 * Provides details of Amazon Security Lake object.
 *
 * @public
 */
export interface DataLakeResource {
  /**
   * The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html).
   *
   * @public
   */
  dataLakeArn: string | undefined;

  /**
   * The Amazon Web Services Regions where Security Lake is enabled.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The ARN for the Amazon Security Lake Amazon S3 bucket.
   *
   * @public
   */
  s3BucketArn?: string | undefined;

  /**
   * Provides encryption details of Amazon Security Lake object.
   *
   * @public
   */
  encryptionConfiguration?: DataLakeEncryptionConfiguration | undefined;

  /**
   * Provides lifecycle details of Amazon Security Lake object.
   *
   * @public
   */
  lifecycleConfiguration?: DataLakeLifecycleConfiguration | undefined;

  /**
   * Provides replication details of Amazon Security Lake object.
   *
   * @public
   */
  replicationConfiguration?: DataLakeReplicationConfiguration | undefined;

  /**
   * Retrieves the status of the `CreateDatalake` API call for an account in Amazon Security Lake.
   *
   * @public
   */
  createStatus?: DataLakeStatus | undefined;

  /**
   * The status of the last `UpdateDataLake`or `DeleteDataLake` API request.
   *
   * @public
   */
  updateStatus?: DataLakeUpdateStatus | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeResponse {
  /**
   * The created Security Lake configuration object.
   *
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionRequest {
  /**
   * The subscription protocol to which exception notifications are posted.
   *
   * @public
   */
  subscriptionProtocol: string | undefined;

  /**
   * The Amazon Web Services account where you want to receive exception notifications.
   *
   * @public
   */
  notificationEndpoint: string | undefined;

  /**
   * The expiration period and time-to-live (TTL). It is the duration of time until which the exception message remains.
   *
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeExceptionSubscriptionResponse {}

/**
 * Automatically enable new organization accounts as member accounts from an Amazon Security Lake administrator account.
 *
 * @public
 */
export interface DataLakeAutoEnableNewAccountConfiguration {
  /**
   * The Amazon Web Services Regions where Security Lake is automatically enabled.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The Amazon Web Services sources that are automatically enabled in Security Lake.
   *
   * @public
   */
  sources: AwsLogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationRequest {
  /**
   * Enable Security Lake with the specified configuration settings, to begin collecting security data for new accounts in your organization.
   *
   * @public
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDataLakeOrganizationConfigurationResponse {}

/**
 * The supported source types from which logs and events are collected in Amazon Security Lake. For a list of supported Amazon Web Services services, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html).
 *
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
   * Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html).
   *
   * @public
   */
  export interface AwsLogSourceMember {
    awsLogSource: AwsLogSourceResource;
    customLogSource?: never;
    $unknown?: never;
  }

  /**
   * Amazon Security Lake supports custom source types. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/custom-sources.html).
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsLogSource: (value: AwsLogSourceResource) => T;
    customLogSource: (value: CustomLogSourceResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * The Amazon Web Services identity used to access your data.
   *
   * @public
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * The name of your Security Lake subscriber account.
   *
   * @public
   */
  subscriberName: string | undefined;

  /**
   * The description for your subscriber account in Security Lake.
   *
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * The supported Amazon Web Services services from which logs and events are collected. Security Lake supports log and event collection for natively supported Amazon Web Services services.
   *
   * @public
   */
  sources: LogSourceResource[] | undefined;

  /**
   * The Amazon S3 or Lake Formation access type.
   *
   * @public
   */
  accessTypes?: AccessType[] | undefined;

  /**
   * An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Provides details about the Amazon Security Lake account subscription. Subscribers are notified of new objects for a source as the data is written to your Amazon S3 bucket for Security Lake.
 *
 * @public
 */
export interface SubscriberResource {
  /**
   * The subscriber ID of the Amazon Security Lake subscriber account.
   *
   * @public
   */
  subscriberId: string | undefined;

  /**
   * The subscriber ARN of the Amazon Security Lake subscriber account.
   *
   * @public
   */
  subscriberArn: string | undefined;

  /**
   * The Amazon Web Services identity used to access your data.
   *
   * @public
   */
  subscriberIdentity: AwsIdentity | undefined;

  /**
   * The name of your Amazon Security Lake subscriber account.
   *
   * @public
   */
  subscriberName: string | undefined;

  /**
   * The subscriber descriptions for a subscriber account. The description for a subscriber includes `subscriberName`, `accountID`, `externalID`, and `subscriberId`.
   *
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/source-management.html).
   *
   * @public
   */
  sources: LogSourceResource[] | undefined;

  /**
   * You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber.
   *
   * Subscribers can consume data by directly querying Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as `LAKEFORMATION`.
   *
   * @public
   */
  accessTypes?: AccessType[] | undefined;

  /**
   * The Amazon Resource Name (ARN) specifying the role of the subscriber.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The ARN for the Amazon S3 bucket.
   *
   * @public
   */
  s3BucketArn?: string | undefined;

  /**
   * The subscriber endpoint to which exception messages are posted.
   *
   * @public
   */
  subscriberEndpoint?: string | undefined;

  /**
   * The subscriber status of the Amazon Security Lake subscriber account.
   *
   * @public
   */
  subscriberStatus?: SubscriberStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) which uniquely defines the Amazon Web Services RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share.
   *
   * This field is available only for Lake Formation subscribers created after March 8, 2023.
   *
   * @public
   */
  resourceShareArn?: string | undefined;

  /**
   * The name of the resource share.
   *
   * @public
   */
  resourceShareName?: string | undefined;

  /**
   * The date and time when the subscriber was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the subscriber was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberResponse {
  /**
   * Retrieve information about the subscriber created using the `CreateSubscriber` API.
   *
   * @public
   */
  subscriber?: SubscriberResource | undefined;
}

/**
 * The configurations used for HTTPS subscriber notification.
 *
 * @public
 */
export interface HttpsNotificationConfiguration {
  /**
   * The subscription endpoint in Security Lake. If you prefer notification with an HTTPs endpoint, populate this field.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The key name for the notification subscription.
   *
   * @public
   */
  authorizationApiKeyName?: string | undefined;

  /**
   * The key value for the notification subscription.
   *
   * @public
   */
  authorizationApiKeyValue?: string | undefined;

  /**
   * The HTTPS method used for the notification subscription.
   *
   * @public
   */
  httpMethod?: HttpMethod | undefined;

  /**
   * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. For more information about ARNs and how to use them in policies, see [Managing data access](https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html) and [Amazon Web Services Managed Policies](https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html) in the *Amazon Security Lake User Guide*.
   *
   * @public
   */
  targetRoleArn: string | undefined;
}

/**
 * The configurations used for EventBridge subscriber notification.
 *
 * @public
 */
export interface SqsNotificationConfiguration {}

/**
 * Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
 *
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
   * The configurations for SQS subscriber notification.
   *
   * @public
   */
  export interface SqsNotificationConfigurationMember {
    sqsNotificationConfiguration: SqsNotificationConfiguration;
    httpsNotificationConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configurations used for HTTPS subscriber notification.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sqsNotificationConfiguration: (value: SqsNotificationConfiguration) => T;
    httpsNotificationConfiguration: (value: HttpsNotificationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateSubscriberNotificationRequest {
  /**
   * The subscriber ID for the notification subscription.
   *
   * @public
   */
  subscriberId: string | undefined;

  /**
   * Specify the configuration using which you want to create the subscriber notification.
   *
   * @public
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberNotificationResponse {
  /**
   * The subscriber endpoint to which exception messages are posted.
   *
   * @public
   */
  subscriberEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceRequest {
  /**
   * Specify the natively-supported Amazon Web Services service to remove as a source in Security Lake.
   *
   * @public
   */
  sources: AwsLogSourceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteAwsLogSourceResponse {
  /**
   * Deletion of the Amazon Web Services sources failed as the account is not a part of the organization.
   *
   * @public
   */
  failed?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteCustomLogSourceRequest {
  /**
   * The source name of custom log source that you want to delete.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * The source version for the third-party custom source. You can limit the custom source removal to the specified source version.
   *
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
   * The list of Regions where Security Lake is enabled.
   *
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
   * Turns off automatic enablement of Security Lake for member accounts that are added to an organization.
   *
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
   * The configuration used for new accounts in Security Lake.
   *
   * @public
   */
  autoEnableNewAccount?: DataLakeAutoEnableNewAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSourcesRequest {
  /**
   * The Amazon Web Services account ID for which a static snapshot of the current Amazon Web Services Region, including enabled accounts and log sources, is retrieved.
   *
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * The maximum limit of accounts for which the static snapshot of the current Region, including enabled accounts and log sources, is retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Retrieves the Logs status for the Amazon Security Lake account.
 *
 * @public
 */
export interface DataLakeSourceStatus {
  /**
   * Defines path the stored logs are available which has information on your systems, applications, and services.
   *
   * @public
   */
  resource?: string | undefined;

  /**
   * The health status of services, including error codes and patterns.
   *
   * @public
   */
  status?: SourceCollectionStatus | undefined;
}

/**
 * Amazon Security Lake collects logs and events from supported Amazon Web Services services and custom sources. For the list of supported Amazon Web Services services, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html).
 *
 * @public
 */
export interface DataLakeSource {
  /**
   * The ID of the Security Lake account for which logs are collected.
   *
   * @public
   */
  account?: string | undefined;

  /**
   * The supported Amazon Web Services services from which logs and events are collected. Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services.
   *
   * @public
   */
  sourceName?: string | undefined;

  /**
   * The Open Cybersecurity Schema Framework (OCSF) event classes describes the type of data that the custom source will send to Security Lake. For the list of supported event classes, see [Supported OCSF Event classes](https://docs.aws.amazon.com/security-lake/latest/userguide/adding-custom-sources.html#ocsf-eventclass.html) in the Amazon Security Lake User Guide.
   *
   * @public
   */
  eventClasses?: string[] | undefined;

  /**
   * The log status for the Security Lake account.
   *
   * @public
   */
  sourceStatuses?: DataLakeSourceStatus[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSourcesResponse {
  /**
   * The Amazon Resource Name (ARN) created by you to provide to the subscriber. For more information about ARNs and how to use them in policies, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html).
   *
   * @public
   */
  dataLakeArn?: string | undefined;

  /**
   * The list of enabled accounts and enabled sources.
   *
   * @public
   */
  dataLakeSources?: DataLakeSource[] | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataLakesRequest {
  /**
   * The list of Regions where Security Lake is enabled.
   *
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDataLakesResponse {
  /**
   * Retrieves the Security Lake configuration object.
   *
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * @public
 */
export interface ListLogSourcesRequest {
  /**
   * The list of Amazon Web Services accounts for which log sources are displayed.
   *
   * @public
   */
  accounts?: string[] | undefined;

  /**
   * The list of Regions for which log sources are displayed.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The list of sources for which log sources are displayed.
   *
   * @public
   */
  sources?: LogSourceResource[] | undefined;

  /**
   * The maximum number of accounts for which the log sources are displayed.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Amazon Security Lake can collect logs and events from natively-supported Amazon Web Services services and custom sources.
 *
 * @public
 */
export interface LogSource {
  /**
   * Specify the account from which you want to collect logs.
   *
   * @public
   */
  account?: string | undefined;

  /**
   * Specify the Regions from which you want to collect logs.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Specify the sources from which you want to collect logs.
   *
   * @public
   */
  sources?: LogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface ListLogSourcesResponse {
  /**
   * The list of log sources in your organization that send data to the data lake.
   *
   * @public
   */
  sources?: LogSource[] | undefined;

  /**
   * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeRequest {
  /**
   * Specifies the Region or Regions that will contribute data to the rollup region.
   *
   * @public
   */
  configurations: DataLakeConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) used to create and update the Glue table. This table contains partitions generated by the ingestion and normalization of Amazon Web Services log sources and custom sources.
   *
   * @public
   */
  metaStoreManagerRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeResponse {
  /**
   * The created Security Lake configuration object.
   *
   * @public
   */
  dataLakes?: DataLakeResource[] | undefined;
}

/**
 * The details for an Amazon Security Lake exception.
 *
 * @public
 */
export interface DataLakeException {
  /**
   * The Amazon Web Services Regions where the exception occurred.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The underlying exception of a Security Lake exception.
   *
   * @public
   */
  exception?: string | undefined;

  /**
   * List of all remediation steps for a Security Lake exception.
   *
   * @public
   */
  remediation?: string | undefined;

  /**
   * This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.
   *
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
   * A value created by Security Lake that uniquely identifies your `DeleteSubscriber` API request.
   *
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
   * The ID of the Security Lake subscriber account.
   *
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
   * The subscription protocol to which exception notifications are posted.
   *
   * @public
   */
  subscriptionProtocol?: string | undefined;

  /**
   * The Amazon Web Services account where you receive exception notifications.
   *
   * @public
   */
  notificationEndpoint?: string | undefined;

  /**
   * The expiration period and time-to-live (TTL). It is the duration of time until which the exception message remains.
   *
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface GetSubscriberRequest {
  /**
   * A value created by Amazon Security Lake that uniquely identifies your `GetSubscriber` API request.
   *
   * @public
   */
  subscriberId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriberResponse {
  /**
   * The subscriber information for the specified subscriber ID.
   *
   * @public
   */
  subscriber?: SubscriberResource | undefined;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsRequest {
  /**
   * The Amazon Web Services Regions from which exceptions are retrieved.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * Lists the maximum number of failures in Security Lake.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataLakeExceptionsResponse {
  /**
   * Lists the failures that cannot be retried.
   *
   * @public
   */
  exceptions?: DataLakeException[] | undefined;

  /**
   * Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersRequest {
  /**
   * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of accounts for which the configuration is displayed.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSubscribersResponse {
  /**
   * The subscribers available for the specified Security Lake account ID.
   *
   * @public
   */
  subscribers?: SubscriberResource[] | undefined;

  /**
   * If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.
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
   * The Amazon Resource Name (ARN) of the Amazon Security Lake resource for which you want to retrieve the tags.
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
   * An array of objects, one for each tag (key and value) that’s associated with the Amazon Security Lake resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RegisterDataLakeDelegatedAdministratorRequest {
  /**
   * The Amazon Web Services account ID of the Security Lake delegated administrator.
   *
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
   * A value created by Security Lake that uniquely identifies your subscription.
   *
   * @public
   */
  subscriberId: string | undefined;

  /**
   * The Amazon Web Services identity used to access your data.
   *
   * @public
   */
  subscriberIdentity?: AwsIdentity | undefined;

  /**
   * The name of the Security Lake account subscriber.
   *
   * @public
   */
  subscriberName?: string | undefined;

  /**
   * The description of the Security Lake account subscriber.
   *
   * @public
   */
  subscriberDescription?: string | undefined;

  /**
   * The supported Amazon Web Services services from which logs and events are collected. For the list of supported Amazon Web Services services, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html).
   *
   * @public
   */
  sources?: LogSourceResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberResponse {
  /**
   * The updated subscriber information.
   *
   * @public
   */
  subscriber?: SubscriberResource | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationRequest {
  /**
   * The subscription ID for which the subscription notification is specified.
   *
   * @public
   */
  subscriberId: string | undefined;

  /**
   * The configuration for subscriber notification.
   *
   * @public
   */
  configuration: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberNotificationResponse {
  /**
   * The subscriber endpoint to which exception messages are posted.
   *
   * @public
   */
  subscriberEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Security Lake resource to add or update the tags for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of objects, one for each tag (key and value) to associate with the Amazon Security Lake resource. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
   *
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
   * The Amazon Resource Name (ARN) of the Amazon Security Lake resource to remove one or more tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of one or more tag keys. For each value in the list, specify the tag key for a tag to remove from the Amazon Security Lake resource.
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
 * @public
 */
export interface UpdateDataLakeExceptionSubscriptionRequest {
  /**
   * The subscription protocol to which exception messages are posted.
   *
   * @public
   */
  subscriptionProtocol: string | undefined;

  /**
   * The account that is subscribed to receive exception notifications.
   *
   * @public
   */
  notificationEndpoint: string | undefined;

  /**
   * The time-to-live (TTL) for the exception message to remain. It is the duration of time until which the exception message remains.
   *
   * @public
   */
  exceptionTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface UpdateDataLakeExceptionSubscriptionResponse {}
