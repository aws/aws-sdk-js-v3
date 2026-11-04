// smithy-typescript generated code
import type {
  ActionStatus,
  AnomalyDetectorStatus,
  DataProtectionStatus,
  DeliveryDestinationType,
  DeliverySourceConfigurationSchemaValueType,
  DeliverySourceStatus,
  DeliverySourceStatusReason,
  Distribution,
  EntityRejectionErrorType,
  EvaluationFrequency,
  EventSource,
  ExecutionStatus,
  ExportTaskStatusCode,
  FlattenedElement,
  ImportStatus,
  IndexCategory,
  IndexSource,
  IndexType,
  InheritedProperty,
  IntegrationStatus,
  IntegrationType,
  ListAggregateLogGroupSummariesGroupBy,
  LogGroupClass,
  OCSFVersion,
  OpenSearchResourceStatusType,
  OrderBy,
  OutputFormat,
  PolicyScope,
  PolicyType,
  QueryLanguage,
  QueryStatus,
  S3TableIntegrationSourceStatus,
  ScheduledQueryDestinationType,
  ScheduledQueryState,
  ScheduleType,
  Scope,
  StandardUnit,
  State,
  StorageTier,
  SuppressionState,
  SyslogSourceType,
  Type,
} from "./enums";
import type { InternalStreamingException, SessionStreamingException, SessionTimeoutException } from "./errors";

/**
 * A structure that contains information about one CloudWatch Logs account policy.
 *
 * @public
 */
export interface AccountPolicy {
  /**
   * The name of the account policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The policy document for this account policy.
   *
   * The JSON specified in `policyDocument` can be up to 30,720 characters.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The date and time that this policy was most recently updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * The type of policy for this account policy.
   *
   * @public
   */
  policyType?: PolicyType | undefined;

  /**
   * The scope of the account policy.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The log group selection criteria that is used for this policy.
   *
   * @public
   */
  selectionCriteria?: string | undefined;

  /**
   * The Amazon Web Services account ID that the policy applies to.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * This object defines one key that will be added with the [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKey) processor.
 *
 * @public
 */
export interface AddKeyEntry {
  /**
   * The key of the new entry to be added to the log event
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the new entry to be added to the log event
   *
   * @public
   */
  value: string | undefined;

  /**
   * Specifies whether to overwrite the value if the key already exists in the log event. If you omit this, the default is `false`.
   *
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * This processor adds new key-value pairs to the log event.
 *
 * For more information about this processor including examples, see [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKeys) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface AddKeys {
  /**
   * An array of objects, where each object contains the information about one key to add to the log event.
   *
   * @public
   */
  entries: AddKeyEntry[] | undefined;
}

/**
 * A key-value pair that identifies how log groups are grouped in aggregate summaries.
 *
 * @public
 */
export interface GroupingIdentifier {
  /**
   * The key that identifies the grouping characteristic. The format of the key uses dot notation. Examples are, `dataSource.Name`, `dataSource.Type`, and `dataSource.Format`.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value associated with the grouping characteristic. Examples are `amazon_vpc`, `flow`, and `OCSF`.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains an aggregate summary of log groups grouped by data source characteristics, including the count of log groups and their grouping identifiers.
 *
 * @public
 */
export interface AggregateLogGroupSummary {
  /**
   * The number of log groups in this aggregate summary group.
   *
   * @public
   */
  logGroupCount?: number | undefined;

  /**
   * An array of key-value pairs that identify the data source characteristics used to group the log groups.
   *
   * The size and content of this array depends on the `groupBy` parameter specified in the request.
   *
   * @public
   */
  groupingIdentifiers?: GroupingIdentifier[] | undefined;
}

/**
 * A structure that represents a valid record field header and whether it is mandatory.
 *
 * @public
 */
export interface RecordField {
  /**
   * The name to use when specifying this record field in a [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) or [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html) operation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * If this is `true`, the record field must be present in the `recordFields` parameter provided to a [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) or [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html) operation.
   *
   * @public
   */
  mandatory?: boolean | undefined;
}

/**
 * This structure contains the information for one sample log event that is associated with an anomaly found by a log anomaly detector.
 *
 * @public
 */
export interface LogEvent {
  /**
   * The time stamp of the log event.
   *
   * @public
   */
  timestamp?: number | undefined;

  /**
   * The message content of the log event.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A structure that contains information about one pattern token related to an anomaly.
 *
 * For more information about patterns and tokens, see [CreateLogAnomalyDetector](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html).
 *
 * @public
 */
export interface PatternToken {
  /**
   * For a dynamic token, this indicates where in the pattern that this token appears, related to other dynamic tokens. The dynamic token that appears first has a value of `1`, the one that appears second is `2`, and so on.
   *
   * @public
   */
  dynamicTokenPosition?: number | undefined;

  /**
   * Specifies whether this is a dynamic token.
   *
   * @public
   */
  isDynamic?: boolean | undefined;

  /**
   * The string represented by this token. If this is a dynamic token, the value will be `<*>`
   *
   * @public
   */
  tokenString?: string | undefined;

  /**
   * Contains the values found for a dynamic token, and the number of times each value was found.
   *
   * @public
   */
  enumerations?: Record<string, number> | undefined;

  /**
   * A name that CloudWatch Logs assigned to this dynamic token to make the pattern more readable. The string part of the `inferredTokenName` gives you a clearer idea of the content of this token. The number part of the `inferredTokenName` shows where in the pattern this token appears, compared to other dynamic tokens. CloudWatch Logs assigns the string part of the name based on analyzing the content of the log events that contain it.
   *
   * For example, an inferred token name of `IPAddress-3` means that the token represents an IP address, and this token is the third dynamic token in the pattern.
   *
   * @public
   */
  inferredTokenName?: string | undefined;
}

/**
 * This structure represents one anomaly that has been found by a logs anomaly detector.
 *
 * For more information about patterns and anomalies, see [CreateLogAnomalyDetector](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogAnomalyDetector.html).
 *
 * @public
 */
export interface Anomaly {
  /**
   * The unique ID that CloudWatch Logs assigned to this anomaly.
   *
   * @public
   */
  anomalyId: string | undefined;

  /**
   * The ID of the pattern used to help identify this anomaly.
   *
   * @public
   */
  patternId: string | undefined;

  /**
   * The ARN of the anomaly detector that identified this anomaly.
   *
   * @public
   */
  anomalyDetectorArn: string | undefined;

  /**
   * The pattern used to help identify this anomaly, in string format.
   *
   * @public
   */
  patternString: string | undefined;

  /**
   * The pattern used to help identify this anomaly, in regular expression format.
   *
   * @public
   */
  patternRegex?: string | undefined;

  /**
   * The priority level of this anomaly, as determined by CloudWatch Logs. Priority is computed based on log severity labels such as `FATAL` and `ERROR` and the amount of deviation from the baseline. Possible values are `HIGH`, `MEDIUM`, and `LOW`.
   *
   * @public
   */
  priority?: string | undefined;

  /**
   * The date and time when the anomaly detector first saw this anomaly. It is specified as epoch time, which is the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  firstSeen: number | undefined;

  /**
   * The date and time when the anomaly detector most recently saw this anomaly. It is specified as epoch time, which is the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  lastSeen: number | undefined;

  /**
   * A human-readable description of the anomaly. This description is generated by CloudWatch Logs.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Specifies whether this anomaly is still ongoing.
   *
   * @public
   */
  active: boolean | undefined;

  /**
   * Indicates the current state of this anomaly. If it is still being treated as an anomaly, the value is `Active`. If you have suppressed this anomaly by using the [UpdateAnomaly](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html) operation, the value is `Suppressed`. If this behavior is now considered to be normal, the value is `Baseline`.
   *
   * @public
   */
  state: State | undefined;

  /**
   * A map showing times when the anomaly detector ran, and the number of occurrences of this anomaly that were detected at each of those runs. The times are specified in epoch time, which is the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  histogram: Record<string, number> | undefined;

  /**
   * An array of sample log event messages that are considered to be part of this anomaly.
   *
   * @public
   */
  logSamples: LogEvent[] | undefined;

  /**
   * An array of structures where each structure contains information about one token that makes up the pattern.
   *
   * @public
   */
  patternTokens: PatternToken[] | undefined;

  /**
   * An array of ARNS of the log groups that contained log events considered to be part of this anomaly.
   *
   * @public
   */
  logGroupArnList: string[] | undefined;

  /**
   * Indicates whether this anomaly is currently suppressed. To suppress an anomaly, use [UpdateAnomaly](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateAnomaly.html).
   *
   * @public
   */
  suppressed?: boolean | undefined;

  /**
   * If the anomaly is suppressed, this indicates when it was suppressed.
   *
   * @public
   */
  suppressedDate?: number | undefined;

  /**
   * If the anomaly is suppressed, this indicates when the suppression will end. If this value is `0`, the anomaly was suppressed with no expiration, with the `INFINITE` value.
   *
   * @public
   */
  suppressedUntil?: number | undefined;

  /**
   * If this anomaly is suppressed, this field is `true` if the suppression is because the pattern is suppressed. If `false`, then only this particular anomaly is suppressed.
   *
   * @public
   */
  isPatternLevelSuppression?: boolean | undefined;
}

/**
 * Contains information about one anomaly detector in the account.
 *
 * @public
 */
export interface AnomalyDetector {
  /**
   * The ARN of the anomaly detector.
   *
   * @public
   */
  anomalyDetectorArn?: string | undefined;

  /**
   * The name of the anomaly detector.
   *
   * @public
   */
  detectorName?: string | undefined;

  /**
   * A list of the ARNs of the log groups that this anomaly detector watches.
   *
   * @public
   */
  logGroupArnList?: string[] | undefined;

  /**
   * Specifies how often the anomaly detector runs and look for anomalies.
   *
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * Specifies the current status of the anomaly detector. To pause an anomaly detector, use the `enabled` parameter in the [UpdateLogAnomalyDetector](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html) operation.
   *
   * @public
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;

  /**
   * The ARN of the KMS key assigned to this anomaly detector, if any.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The date and time when this anomaly detector was created.
   *
   * @public
   */
  creationTimeStamp?: number | undefined;

  /**
   * The date and time when this anomaly detector was most recently modified.
   *
   * @public
   */
  lastModifiedTimeStamp?: number | undefined;

  /**
   * The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal.
   *
   * @public
   */
  anomalyVisibilityTime?: number | undefined;
}

/**
 * @public
 */
export interface AssociateKmsKeyRequest {
  /**
   * The name of the log group.
   *
   * In your `AssociateKmsKey` operation, you must specify either the `resourceIdentifier` parameter or the `logGroup` parameter, but you can't specify both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. This must be a symmetric KMS key. For more information, see [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms) and [Using Symmetric and Asymmetric Keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html).
   *
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * Specifies the target for this operation. You must specify one of the following:
   *
   * - Specify the following ARN to have future [GetQueryResults](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html) operations in this account encrypt the results with the specified KMS key. Replace *REGION* and *ACCOUNT_ID* with your Region and account ID.
   *
   *   `arn:aws:logs:REGION:ACCOUNT_ID:query-result:*`
   * - Specify the ARN of a log group to have CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. The log group ARN must be in the following format. Replace *REGION* and *ACCOUNT_ID* with your Region and account ID.
   *
   *   `arn:aws:logs:REGION:ACCOUNT_ID:log-group:LOG_GROUP_NAME`
   *
   * In your `AssociateKmsKey` operation, you must specify either the `resourceIdentifier` parameter or the `logGroup` parameter, but you can't specify both.
   *
   * @public
   */
  resourceIdentifier?: string | undefined;
}

/**
 * Represents a data source that categorizes logs by originating service and log type, providing service-based organization complementing traditional log groups.
 *
 * @public
 */
export interface DataSource {
  /**
   * The name of the data source.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the data source.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceToS3TableIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table Integration to associate the data source with.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The data source to associate with the S3 Table Integration. Contains the name and type of the data source.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 */
export interface AssociateSourceToS3TableIntegrationResponse {
  /**
   * The unique identifier for the association between the data source and S3 Table Integration.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskRequest {
  /**
   * The ID of the export task.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskRequest {
  /**
   * The ID of the import task to cancel.
   *
   * @public
   */
  importId: string | undefined;
}

/**
 * Statistics about the import progress
 *
 * @public
 */
export interface ImportStatistics {
  /**
   * The total number of bytes that have been imported to the managed log group.
   *
   * @public
   */
  bytesImported?: number | undefined;
}

/**
 * @public
 */
export interface CancelImportTaskResponse {
  /**
   * The ID of the cancelled import task.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * Statistics about the import progress at the time of cancellation.
   *
   * @public
   */
  importStatistics?: ImportStatistics | undefined;

  /**
   * The final status of the import task. This will be set to CANCELLED.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * The timestamp when the import task was created, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The timestamp when the import task was cancelled, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * This structure contains delivery configurations that apply only when the delivery destination resource is an S3 bucket.
 *
 * @public
 */
export interface S3DeliveryConfiguration {
  /**
   * This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path vary by log type. To find the values supported for the suffix path for each log type, use the [DescribeConfigurationTemplates](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeConfigurationTemplates.html) operation and check the `allowedSuffixPathFields` field in the response. For more information about how the destination prefix, suffix path, and Hive-compatible setting determine the Amazon S3 object key, see [Amazon S3 object key for V2 deliveries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-infrastructure-V2-S3.html#AWS-logs-infrastructure-V2-S3-object-key).
   *
   * @public
   */
  suffixPath?: string | undefined;

  /**
   * This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.
   *
   * @public
   */
  enableHiveCompatiblePath?: boolean | undefined;
}

/**
 * This structure contains the default values that are used for each configuration parameter when you use [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) to create a deliver under the current service type, resource type, and log type.
 *
 * @public
 */
export interface ConfigurationTemplateDeliveryConfigValues {
  /**
   * The default record fields that will be delivered when a list of record fields is not provided in a [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) operation.
   *
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * The default field delimiter that is used in a [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) operation when the field delimiter is not specified in that operation. The field delimiter is used only when the final output delivery is in `Plain`, `W3C`, or `Raw` format.
   *
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * The delivery parameters that are used when you create a delivery to a delivery destination that is an S3 Bucket.
   *
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;
}

/**
 * A structure that describes a single configuration for a log type, including its name, value type, default value, and the range of supported values.
 *
 * @public
 */
export interface DeliverySourceConfigurationSchema {
  /**
   * The name of the configuration.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The data type of the configuration value. Valid values are `string`, `boolean`, `int`, `double`, and `long`.
   *
   * @public
   */
  valueType: DeliverySourceConfigurationSchemaValueType | undefined;

  /**
   * The default value of the configuration that is used when a value is not specified in a [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html) request.
   *
   * @public
   */
  defaultValue: string | undefined;

  /**
   * The list of allowed values for the configuration. Empty for free-form configuration.
   *
   * @public
   */
  supportedValues?: string[] | undefined;

  /**
   * The minimum numeric value allowed for the configuration. This applies only when the `valueType` is a numeric type.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * The maximum numeric value allowed for the configuration. This applies only when the `valueType` is a numeric type.
   *
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * Contains information about the S3 Tables integration configuration for a configuration template.
 *
 * @public
 */
export interface S3TablesIntegration {
  /**
   * The name of the S3 Tables datasource.
   *
   * @public
   */
  datasourceName?: string | undefined;

  /**
   * The type of the S3 Tables datasource.
   *
   * @public
   */
  datasourceType?: string | undefined;
}

/**
 * A structure containing information about the deafult settings and available settings that you can use to configure a [delivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Delivery.html) or a [delivery destination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeliveryDestination.html).
 *
 * @public
 */
export interface ConfigurationTemplate {
  /**
   * A string specifying which service this configuration template applies to. For more information about supported services see [Enable logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html).
   *
   * @public
   */
  service?: string | undefined;

  /**
   * A string specifying which log type this configuration template applies to.
   *
   * @public
   */
  logType?: string | undefined;

  /**
   * A string specifying which resource type this configuration template applies to.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * A string specifying which destination type this configuration template applies to.
   *
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * A mapping that displays the default value of each property within a delivery's configuration, if it is not specified in the request.
   *
   * @public
   */
  defaultDeliveryConfigValues?: ConfigurationTemplateDeliveryConfigValues | undefined;

  /**
   * The allowed fields that a caller can use in the `recordFields` parameter of a [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) or [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html) operation.
   *
   * @public
   */
  allowedFields?: RecordField[] | undefined;

  /**
   * The list of delivery destination output formats that are supported by this log source.
   *
   * @public
   */
  allowedOutputFormats?: OutputFormat[] | undefined;

  /**
   * The action permissions that a caller needs to have to be able to successfully create a delivery source on the desired resource type when calling [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
   *
   * @public
   */
  allowedActionForAllowVendedLogsDeliveryForResource?: string | undefined;

  /**
   * The valid values that a caller can use as field delimiters when calling [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html) or [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html) on a delivery that delivers in `Plain`, `W3C`, or `Raw` format.
   *
   * @public
   */
  allowedFieldDelimiters?: string[] | undefined;

  /**
   * The list of variable fields that can be used in the suffix path of a delivery that delivers to an S3 bucket.
   *
   * @public
   */
  allowedSuffixPathFields?: string[] | undefined;

  /**
   * The schema of the delivery source configuration that is available for this log type. Each element describes a configuration that can be set when calling [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html), including the configuration name, type, and default value.
   *
   * @public
   */
  deliverySourceConfiguration?: DeliverySourceConfigurationSchema[] | undefined;

  /**
   * The S3 Tables integration configuration for this configuration template, including the datasource name and type.
   *
   * @public
   */
  s3TablesIntegration?: S3TablesIntegration | undefined;
}

/**
 * This object defines one value to be copied with the [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copoyValue) processor.
 *
 * @public
 */
export interface CopyValueEntry {
  /**
   * The key to copy.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The key of the field to copy the value to.
   *
   * @public
   */
  target: string | undefined;

  /**
   * Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
   *
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * This processor copies values within a log event. You can also use this processor to add metadata to log events by copying the values of the following metadata keys into the log events: `@logGroupName`, `@logGroupStream`, `@accountId`, `@regionName`.
 *
 * For more information about this processor including examples, see [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copyValue) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface CopyValue {
  /**
   * An array of `CopyValueEntry` objects, where each object contains the information about one field value to copy.
   *
   * @public
   */
  entries: CopyValueEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryRequest {
  /**
   * The name of the delivery source to use for this delivery.
   *
   * @public
   */
  deliverySourceName: string | undefined;

  /**
   * The ARN of the delivery destination to use for this delivery.
   *
   * @public
   */
  deliveryDestinationArn: string | undefined;

  /**
   * The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
   *
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * The field delimiter to use between record fields when the final output format of a delivery is in `Plain`, `W3C`, or `Raw` format.
   *
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * This structure contains parameters that are valid only when the delivery's delivery destination is an S3 bucket.
   *
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;

  /**
   * An optional list of key-value pairs to associate with the resource.
   *
   * For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * This structure contains information about one *delivery* in your account.
 *
 * A delivery is a connection between a logical *delivery source* and a logical *delivery destination*.
 *
 * For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * To update an existing delivery configuration, use [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html).
 *
 * @public
 */
export interface Delivery {
  /**
   * The unique ID that identifies this delivery in your account.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the delivery source that is associated with this delivery.
   *
   * @public
   */
  deliverySourceName?: string | undefined;

  /**
   * The ARN of the delivery destination that is associated with this delivery.
   *
   * @public
   */
  deliveryDestinationArn?: string | undefined;

  /**
   * Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, Firehose, or X-Ray.
   *
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The record fields used in this delivery.
   *
   * @public
   */
  recordFields?: string[] | undefined;

  /**
   * The field delimiter that is used between record fields when the final output format of a delivery is in `Plain`, `W3C`, or `Raw` format.
   *
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * This structure contains delivery configurations that apply only when the delivery destination resource is an S3 bucket.
   *
   * @public
   */
  s3DeliveryConfiguration?: S3DeliveryConfiguration | undefined;

  /**
   * The tags that have been assigned to this delivery.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryResponse {
  /**
   * A structure that contains information about the delivery that you just created.
   *
   * @public
   */
  delivery?: Delivery | undefined;
}

/**
 * @public
 */
export interface CreateExportTaskRequest {
  /**
   * The name of the export task.
   *
   * @public
   */
  taskName?: string | undefined;

  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * Export only log streams that match the provided prefix. If you don't specify a value, no prefix filter is applied.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * The start time of the range for the request, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp earlier than this time are not exported.
   *
   * @public
   */
  from: number | undefined;

  /**
   * The end time of the range for the request, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp later than this time are not exported.
   *
   * You must specify a time that is not earlier than when this log group was created.
   *
   * @public
   */
  to: number | undefined;

  /**
   * The name of S3 bucket for the exported log data. The bucket must be in the same Amazon Web Services Region.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The prefix used as the start of the key for every object exported. If you don't specify a value, the default is `exportedlogs`.
   *
   * The length of this parameter must comply with the S3 object key name length limits. The object key name is a sequence of Unicode characters with UTF-8 encoding, and can be up to 1,024 bytes.
   *
   * @public
   */
  destinationPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateExportTaskResponse {
  /**
   * The ID of the export task.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * The filter criteria used for import tasks
 *
 * @public
 */
export interface ImportFilter {
  /**
   * The start of the time range for events to import, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  startEventTime?: number | undefined;

  /**
   * The end of the time range for events to import, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  endEventTime?: number | undefined;
}

/**
 * @public
 */
export interface CreateImportTaskRequest {
  /**
   * The ARN of the source to import from.
   *
   * @public
   */
  importSourceArn: string | undefined;

  /**
   * The ARN of the IAM role that grants CloudWatch Logs permission to import from the CloudTrail Lake Event Data Store.
   *
   * @public
   */
  importRoleArn: string | undefined;

  /**
   * Optional filters to constrain the import by CloudTrail event time. Times are specified in Unix timestamp milliseconds. The range of data being imported must be within the specified source's retention period.
   *
   * @public
   */
  importFilter?: ImportFilter | undefined;
}

/**
 * @public
 */
export interface CreateImportTaskResponse {
  /**
   * A unique identifier for the import task.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs log group created as the destination for the imported events.
   *
   * @public
   */
  importDestinationArn?: string | undefined;

  /**
   * The timestamp when the import task was created, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;
}

/**
 * @public
 */
export interface CreateLogAnomalyDetectorRequest {
  /**
   * An array containing the ARN of the log group that this anomaly detector will watch. You can specify only one log group ARN.
   *
   * @public
   */
  logGroupArnList: string[] | undefined;

  /**
   * A name for this anomaly detector.
   *
   * @public
   */
  detectorName?: string | undefined;

  /**
   * Specifies how often the anomaly detector is to run and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then 15 minutes might be a good setting for `evaluationFrequency` .
   *
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * Optionally assigns a KMS key to secure this anomaly detector and its findings. If a key is assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have permissions for both this key and for the anomaly detector to retrieve information about the anomalies that it finds.
   *
   * Make sure the value provided is a valid KMS key ARN. For more information about using a KMS key and to see the required IAM policy, see [Use a KMS key with an anomaly detector](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection-KMS.html).
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The number of days to have visibility on an anomaly. After this time period has elapsed for an anomaly, it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an anomaly during the time period specified in `anomalyVisibilityTime`, it will be considered normal going forward and will not be detected as an anomaly.
   *
   * @public
   */
  anomalyVisibilityTime?: number | undefined;

  /**
   * An optional list of key-value pairs to associate with the resource.
   *
   * For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLogAnomalyDetectorResponse {
  /**
   * The ARN of the log anomaly detector that you just created.
   *
   * @public
   */
  anomalyDetectorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLogGroupRequest {
  /**
   * A name for the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. For more information, see [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms).
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The key-value pairs to use for the tags.
   *
   * You can grant users access to certain log groups while preventing them from accessing other log groups. To do so, tag your groups and use IAM policies that refer to those tags. To assign tags when you create a log group, you must have either the `logs:TagResource` or `logs:TagLogGroup` permission. For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For more information about using tags to control access, see [Controlling access to Amazon Web Services resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Use this parameter to specify the log group class for this log group. There are three classes:
   *
   * - The `Standard` log class supports all CloudWatch Logs features.
   * - The `Infrequent Access` log class supports a subset of CloudWatch Logs features and incurs lower costs.
   * - Use the `Delivery` log class only for delivering Lambda logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights queries.
   *
   * If you omit this parameter, the default of `STANDARD` is used.
   *
   * > **Important:** The value of `logGroupClass` can't be changed after a log group is created.
   *
   * For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * Use this parameter to enable deletion protection for the new log group. When enabled on a log group, deletion protection blocks all deletion operations until it is explicitly disabled. By default log groups are created without deletion protection enabled.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLogStreamRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName: string | undefined;
}

/**
 * @public
 */
export interface CreateLookupTableRequest {
  /**
   * The name of the lookup table. The name must be unique within your account and Region. The name can contain only alphanumeric characters and underscores, and can be up to 256 characters long.
   *
   * @public
   */
  lookupTableName: string | undefined;

  /**
   * A description of the lookup table. The description can be up to 1024 characters long.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The CSV content of the lookup table. The first row must be a header row with column names. The content must use UTF-8 encoding and not exceed 10 MB.
   *
   * You must specify either `tableBody` or `queryId`, but not both.
   *
   * @public
   */
  tableBody?: string | undefined;

  /**
   * The ID of a completed or cancelled CloudWatch Logs query whose results populate the lookup table. A cancelled query populates the table with the partial results that were available when the query was stopped.
   *
   * You must specify either `tableBody` or `queryId`, but not both.
   *
   * @public
   */
  queryId?: string | undefined;

  /**
   * The ARN of the KMS key to use to encrypt the lookup table data. If you don't specify a key, the data is encrypted with an Amazon Web Services-owned key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * A list of key-value pairs to associate with the lookup table. You can associate as many as 50 tags with a lookup table. Tags can help you organize and categorize your resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLookupTableResponse {
  /**
   * The ARN of the lookup table that was created.
   *
   * @public
   */
  lookupTableArn?: string | undefined;

  /**
   * The time when the lookup table was created, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  createdAt?: number | undefined;
}

/**
 * Configuration for a lookup table destination. Use it to automatically refresh a lookup table with query results on a schedule.
 *
 * @public
 */
export interface LookupTableConfiguration {
  /**
   * The name of the lookup table to create or update with query results. The name can contain only alphanumeric characters and underscores.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The ARN of the IAM role that grants permissions to create or update the lookup table with query results.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A description of the lookup table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the KMS key to use to encrypt the lookup table data. If you don't specify a key, the data is encrypted with an Amazon Web Services-owned key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Key-value pairs to associate with the lookup table for resource management and cost allocation. The service applies tags only during initial table creation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Configuration for Amazon S3 destination where scheduled query results are delivered.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The Amazon S3 URI where query results are delivered. Must be a valid S3 URI format.
   *
   * @public
   */
  destinationIdentifier: string | undefined;

  /**
   * The ARN of the IAM role that grants permissions to write query results to the specified Amazon S3 destination.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon Web Services accountId for the bucket owning account.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS encryption key. Must belong to the same Amazon Web Services Region as the destination Amazon S3 bucket.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Configuration for where to deliver scheduled query results. Specifies the destination type and associated settings for result delivery.
 *
 * @public
 */
export interface DestinationConfiguration {
  /**
   * Configuration for delivering query results to Amazon S3.
   *
   * @public
   */
  s3Configuration?: S3Configuration | undefined;

  /**
   * Configuration for delivering query results to a lookup table. The query results automatically populate or refresh the specified lookup table on each scheduled execution.
   *
   * @public
   */
  lookupTableConfiguration?: LookupTableConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryRequest {
  /**
   * The name of the scheduled query. The name must be unique within your account and region. Length must be between 1 and 300 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description for the scheduled query to help identify its purpose and functionality.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The query language to use for the scheduled query. Valid values are `CWLI`, `PPL`, and `SQL`.
   *
   * @public
   */
  queryLanguage: QueryLanguage | undefined;

  /**
   * The query string to execute. This is the same query syntax used in CloudWatch Logs Insights. Maximum length is 10,000 characters.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * An array of log group names or ARNs to query. You can specify between 1 and 50 log groups. Log groups can be identified by name or full ARN.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * A cron expression that defines when the scheduled query runs. The expression uses standard cron syntax and supports minute-level precision. Maximum length is 256 characters.
   *
   * @public
   */
  scheduleExpression: string | undefined;

  /**
   * The timezone for evaluating the schedule expression. This determines when the scheduled query executes relative to the specified timezone.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * The time offset in seconds that defines the lookback period for the query. This determines how far back in time the query searches from the execution time.
   *
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * The time offset in seconds that defines the end of the lookback period for the query. Together with `startTimeOffset`, this determines the time window relative to the execution time over which the query runs.
   *
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * Configuration for where to deliver query results. Supports Amazon S3 destinations for storing query output and lookup table destinations for automatically refreshing lookup tables with query results. You can configure one or both destination types.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The start time for the scheduled query in Unix epoch format. The query will not execute before this time.
   *
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * The end time for the scheduled query in Unix epoch format. The query will stop executing after this time.
   *
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * The ARN of the IAM role that grants permissions to execute the query and deliver results to the specified destination. The role must have permissions to read from the specified log groups and write to the destination.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The initial state of the scheduled query. Valid values are `ENABLED` and `DISABLED`. Default is `ENABLED`.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * Key-value pairs to associate with the scheduled query for resource management and cost allocation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScheduledQueryResponse {
  /**
   * The ARN of the created scheduled query.
   *
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * The current state of the scheduled query.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;
}

/**
 * The `CSV` processor parses comma-separated values (CSV) from the log events into columns.
 *
 * For more information about this processor including examples, see [csv](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-csv) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface CSV {
  /**
   * The character used used as a text qualifier for a single column of data. If you omit this, the double quotation mark `"` character is used.
   *
   * @public
   */
  quoteCharacter?: string | undefined;

  /**
   * The character used to separate each column in the original comma-separated value log event. If you omit this, the processor looks for the comma `,` character as the delimiter.
   *
   * @public
   */
  delimiter?: string | undefined;

  /**
   * An array of names to use for the columns in the transformed log event.
   *
   * If you omit this, default column names (`[column_1, column_2 ...]`) are used.
   *
   * @public
   */
  columns?: string[] | undefined;

  /**
   * The path to the field in the log event that has the comma separated values to be parsed. If you omit this value, the whole log message is processed.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The path to the parent field to put transformed key value pairs under. If you omit this value, the key value pairs will be placed under the root node.
   *
   * @public
   */
  destination?: string | undefined;
}

/**
 * Filter criteria for data sources, used to specify which data sources to include in operations based on name and type.
 *
 * @public
 */
export interface DataSourceFilter {
  /**
   * The name pattern to filter data sources by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type pattern to filter data sources by.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * This processor converts a datetime string into a format that you specify.
 *
 * For more information about this processor including examples, see [datetimeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-datetimeConverter) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface DateTimeConverter {
  /**
   * The key to apply the date conversion to.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The JSON field to store the result in.
   *
   * @public
   */
  target: string | undefined;

  /**
   * The datetime format to use for the converted data in the target field.
   *
   * If you omit this, the default of `yyyy-MM-dd'T'HH:mm:ss.SSS'Z` is used.
   *
   * @public
   */
  targetFormat?: string | undefined;

  /**
   * A list of patterns to match against the `source` field.
   *
   * @public
   */
  matchPatterns: string[] | undefined;

  /**
   * The time zone of the source field. If you omit this, the default used is the UTC zone.
   *
   * @public
   */
  sourceTimezone?: string | undefined;

  /**
   * The time zone of the target field. If you omit this, the default used is the UTC zone.
   *
   * @public
   */
  targetTimezone?: string | undefined;

  /**
   * The locale of the source field. If you omit this, the default of `locale.ROOT` is used.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountPolicyRequest {
  /**
   * The name of the policy to delete.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The type of policy to delete.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * Specifies whether to preview the impact of deleting the policy without deleting it. If you specify `true`, CloudWatch Logs does not delete the policy and returns the estimated impact in `dryRunResult`. The default is `false`.
   *
   * Specifying `dryRun` is valid only when you specify `RETENTION_POLICY` for `policyType`. Only one dry run can be in progress for an account at a time.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * Describes the estimated effect of an account-level retention policy change on one log group.
 *
 * @public
 */
export interface LogGroupImpact {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The current effective retention period of the log group, in days. A value of `NEVER_EXPIRE` indicates that log events in the log group never expire.
   *
   * @public
   */
  currentRetention?: string | undefined;

  /**
   * The effective retention period of the log group, in days, after the change. A value of `NEVER_EXPIRE` indicates that log events in the log group would never expire.
   *
   * @public
   */
  proposedRetention?: string | undefined;

  /**
   * The number of bytes stored in the log group.
   *
   * @public
   */
  storedBytes?: number | undefined;
}

/**
 * Contains the estimated impact of creating, updating, or deleting an account-level retention policy. The analysis compares the effective retention period of each log group, which accounts for all account-level retention policies that apply to it, before and after the change. Log groups in the Delivery class are not included.
 *
 * @public
 */
export interface DryRunResult {
  /**
   * The number of log groups in the scope of the policy that were analyzed. This value is the sum of `increasedRetentionLogGroupCount`, `decreasedRetentionLogGroupCount`, and `unchangedRetentionLogGroupCount`, and does not include log groups that could not be analyzed.
   *
   * @public
   */
  totalMatchedLogGroups?: number | undefined;

  /**
   * The number of log groups whose effective retention period would become longer.
   *
   * @public
   */
  increasedRetentionLogGroupCount?: number | undefined;

  /**
   * The number of log groups whose effective retention period would become shorter.
   *
   * @public
   */
  decreasedRetentionLogGroupCount?: number | undefined;

  /**
   * The number of log groups whose effective retention period would not change.
   *
   * @public
   */
  unchangedRetentionLogGroupCount?: number | undefined;

  /**
   * The number of log groups in the scope of the policy that could not be analyzed. These log groups are not included in `totalMatchedLogGroups`.
   *
   * @public
   */
  failedAnalysisCount?: number | undefined;

  /**
   * Up to 20 log groups in the scope of the policy, sorted by stored bytes in descending order. This list can include log groups whose effective retention period would not change.
   *
   * @public
   */
  topLogGroupsImpacted?: LogGroupImpact[] | undefined;
}

/**
 * @public
 */
export interface DeleteAccountPolicyResponse {
  /**
   * The estimated impact of deleting the policy. This field is returned only when the request specifies `dryRun` as `true`.
   *
   * @public
   */
  dryRunResult?: DryRunResult | undefined;
}

/**
 * @public
 */
export interface DeleteDataProtectionPolicyRequest {
  /**
   * The name or ARN of the log group that you want to delete the data protection policy for.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryRequest {
  /**
   * The unique ID of the delivery to delete. You can find the ID of a delivery with the [DescribeDeliveries](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html) operation.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationRequest {
  /**
   * The name of the delivery destination that you want to delete. You can find a list of delivery destination names by using the [DescribeDeliveryDestinations](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveryDestinations.html) operation.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryDestinationPolicyRequest {
  /**
   * The name of the delivery destination that you want to delete the policy for.
   *
   * @public
   */
  deliveryDestinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeliverySourceRequest {
  /**
   * The name of the delivery source that you want to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * The name of the destination.
   *
   * @public
   */
  destinationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexPolicyRequest {
  /**
   * The log group to delete the index policy for. You can specify either the name or the ARN of the log group.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIndexPolicyResponse {}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * The name of the integration to delete. To find the name of your integration, use [ListIntegrations](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html).
   *
   * @public
   */
  integrationName: string | undefined;

  /**
   * Specify `true` to force the deletion of the integration even if vended logs dashboards currently exist.
   *
   * The default is `false`.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponse {}

/**
 * This processor deletes entries from a log event. These entries are key-value pairs.
 *
 * For more information about this processor including examples, see [deleteKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-deleteKeys) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface DeleteKeys {
  /**
   * The list of keys to delete.
   *
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteLogAnomalyDetectorRequest {
  /**
   * The ARN of the anomaly detector to delete. You can find the ARNs of log anomaly detectors in your account by using the [ListLogAnomalyDetectors](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html) operation.
   *
   * @public
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogGroupRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogStreamRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLookupTableRequest {
  /**
   * The ARN of the lookup table to delete.
   *
   * @public
   */
  lookupTableArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMetricFilterRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The name of the metric filter.
   *
   * @public
   */
  filterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionRequest {
  /**
   * The ID of the query definition that you want to delete. You can use [DescribeQueryDefinitions](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html) to retrieve the IDs of your saved query definitions.
   *
   * @public
   */
  queryDefinitionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueryDefinitionResponse {
  /**
   * A value of TRUE indicates that the operation succeeded. FALSE indicates that the operation failed.
   *
   * @public
   */
  success?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The name of the policy to be revoked. This parameter is required.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs resource for which the resource policy needs to be deleted
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The expected revision ID of the resource policy. Required when deleting a resource-scoped policy to prevent concurrent modifications.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetentionPolicyRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledQueryRequest {
  /**
   * The ARN or name of the scheduled query to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledQueryResponse {}

/**
 * @public
 */
export interface DeleteSubscriptionFilterRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The name of the subscription filter.
   *
   * @public
   */
  filterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSyslogConfigurationRequest {
  /**
   * The name or ARN of the log group to remove the syslog configuration from.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * The ID of the VPC endpoint associated with the syslog configuration to delete.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTransformerRequest {
  /**
   * Specify either the name or ARN of the log group to delete the transformer for. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * A structure that contains information about one logs delivery destination.
 *
 * @public
 */
export interface DeliveryDestinationConfiguration {
  /**
   * The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
   *
   * @public
   */
  destinationResourceArn: string | undefined;
}

/**
 * This structure contains information about one *delivery destination* in your account. A delivery destination is an Amazon Web Services resource that represents an Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, Firehose, and X-Ray are supported as delivery destinations.
 *
 * To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 * - Create a *delivery destination*, which is a logical object that represents the actual delivery destination.
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * @public
 */
export interface DeliveryDestination {
  /**
   * The name of this delivery destination.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Firehose, or X-Ray.
   *
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The format of the logs that are sent to this delivery destination.
   *
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.
   *
   * @public
   */
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration | undefined;

  /**
   * The ARN of the IAM role that CloudWatch Logs assumes to deliver to this delivery destination. This field is present only for X-Ray trace delivery destinations that were created with a role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The tags that have been assigned to this delivery destination.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * This structure contains information about one *delivery source* in your account. A delivery source is an Amazon Web Services resource that sends logs to an Amazon Web Services destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These services are listed as **Supported [V2 Permissions]** in the table at [Enabling logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 * - Create a *delivery destination*, which is a logical object that represents the actual delivery destination. For more information, see [PutDeliveryDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html).
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * @public
 */
export interface DeliverySource {
  /**
   * The unique name of the delivery source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * This array contains the ARN of the Amazon Web Services resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The Amazon Web Services service that is sending logs.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The type of log that the source is sending. For valid values for this parameter, see the documentation for the source service.
   *
   * @public
   */
  logType?: string | undefined;

  /**
   * The tags that have been assigned to this delivery source.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The map of key-value pairs that configure the delivery source.
   *
   * @public
   */
  deliverySourceConfiguration?: Record<string, string> | undefined;

  /**
   * The status of the delivery source. A delivery source can have the status `ACTIVE` or `INACTIVE`. Note: This value is defined for selective log types.
   *
   * @public
   */
  status?: DeliverySourceStatus | undefined;

  /**
   * The reason for the status of the delivery source. A status reason of `RESOURCE_DELETED` indicates that the resource associated with the delivery source has been deleted. Note: This value is defined for selective log types.
   *
   * @public
   */
  statusReason?: DeliverySourceStatusReason | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPoliciesRequest {
  /**
   * Use this parameter to limit the returned policies to only the policies that match the policy type that you specify.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * Use this parameter to limit the returned policies to only the policy with the name that you specify.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * If you are using an account that is set up as a monitoring account for CloudWatch unified cross-account observability, you can use this to specify the account ID of a source account. If you do, the operation returns the account policy for the specified account. Currently, you can specify only one account ID in this parameter.
   *
   * If you omit this parameter, only the policy in the current account is returned.
   *
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountPoliciesResponse {
  /**
   * An array of structures that contain information about the CloudWatch Logs account policies that match the specified filters.
   *
   * @public
   */
  accountPolicies?: AccountPolicy[] | undefined;

  /**
   * The token to use when requesting the next set of items. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationTemplatesRequest {
  /**
   * Use this parameter to filter the response to include only the configuration templates that apply to the Amazon Web Services service that you specify here.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * Use this parameter to filter the response to include only the configuration templates that apply to the log types that you specify here.
   *
   * @public
   */
  logTypes?: string[] | undefined;

  /**
   * Use this parameter to filter the response to include only the configuration templates that apply to the resource types that you specify here.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * Use this parameter to filter the response to include only the configuration templates that apply to the delivery destination types that you specify here.
   *
   * @public
   */
  deliveryDestinationTypes?: DeliveryDestinationType[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Use this parameter to limit the number of configuration templates that are returned in the response.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationTemplatesResponse {
  /**
   * An array of objects, where each object describes one configuration template that matches the filters that you specified in the request.
   *
   * @public
   */
  configurationTemplates?: ConfigurationTemplate[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveriesRequest {
  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optionally specify the maximum number of deliveries to return in the response.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An array of delivery source names that filters the results to deliveries associated with any specified delivery source.
   *
   * @public
   */
  deliverySourceNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveriesResponse {
  /**
   * An array of structures. Each structure contains information about one delivery in the account.
   *
   * @public
   */
  deliveries?: Delivery[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsRequest {
  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optionally specify the maximum number of delivery destinations to return in the response.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An array of delivery destination names that filters the results to delivery destinations with any specified name.
   *
   * @public
   */
  names?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryDestinationsResponse {
  /**
   * An array of structures. Each structure contains information about one delivery destination in the account.
   *
   * @public
   */
  deliveryDestinations?: DeliveryDestination[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesRequest {
  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optionally specify the maximum number of delivery sources to return in the response.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) that filters the results to delivery sources associated with any specified ARN.
   *
   * @public
   */
  resourceArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDeliverySourcesResponse {
  /**
   * An array of structures. Each structure contains information about one delivery source in the account.
   *
   * @public
   */
  deliverySources?: DeliverySource[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDestinationsRequest {
  /**
   * The prefix to match. If you don't specify a value, no prefix filter is applied.
   *
   * @public
   */
  DestinationNamePrefix?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default maximum value of 50 items is used.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a cross-account destination that receives subscription log events.
 *
 * @public
 */
export interface Destination {
  /**
   * The name of the destination.
   *
   * @public
   */
  destinationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the physical target where the log events are delivered (for example, a Kinesis stream).
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * A role for impersonation, used when delivering log events to the target.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * An IAM policy document that governs which Amazon Web Services accounts can create subscription filters against this destination.
   *
   * @public
   */
  accessPolicy?: string | undefined;

  /**
   * The ARN of this destination.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDestinationsResponse {
  /**
   * The destinations.
   *
   * @public
   */
  destinations?: Destination[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksRequest {
  /**
   * The ID of the export task. Specifying a task ID filters the results to one or zero export tasks.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The status code of the export task. Specifying a status code filters the results to zero or more export tasks.
   *
   * @public
   */
  statusCode?: ExportTaskStatusCode | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents the status of an export task.
 *
 * @public
 */
export interface ExportTaskExecutionInfo {
  /**
   * The creation time of the export task, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The completion time of the export task, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  completionTime?: number | undefined;
}

/**
 * Represents the status of an export task.
 *
 * @public
 */
export interface ExportTaskStatus {
  /**
   * The status code of the export task.
   *
   * @public
   */
  code?: ExportTaskStatusCode | undefined;

  /**
   * The status message related to the status code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Represents an export task.
 *
 * @public
 */
export interface ExportTask {
  /**
   * The ID of the export task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The name of the export task.
   *
   * @public
   */
  taskName?: string | undefined;

  /**
   * The name of the log group from which logs data was exported.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The start time, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp before this time are not exported.
   *
   * @public
   */
  from?: number | undefined;

  /**
   * The end time, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp later than this time are not exported.
   *
   * @public
   */
  to?: number | undefined;

  /**
   * The name of the S3 bucket to which the log data was exported.
   *
   * @public
   */
  destination?: string | undefined;

  /**
   * The prefix that was used as the start of Amazon S3 key for every object exported.
   *
   * @public
   */
  destinationPrefix?: string | undefined;

  /**
   * The status of the export task.
   *
   * @public
   */
  status?: ExportTaskStatus | undefined;

  /**
   * Execution information about the export task.
   *
   * @public
   */
  executionInfo?: ExportTaskExecutionInfo | undefined;
}

/**
 * @public
 */
export interface DescribeExportTasksResponse {
  /**
   * The export tasks.
   *
   * @public
   */
  exportTasks?: ExportTask[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFieldIndexesRequest {
  /**
   * An array containing the names or ARNs of the log groups that you want to retrieve field indexes for.
   *
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * The index categories to return. The following values are supported:
   *
   * - `DEFAULT`: Fields that CloudWatch Logs indexes by default. Examples include `@logStream` and `@data_format`.
   * - `CUSTOM`: Fields that you added manually to the field index policy. CloudWatch Logs always indexes these fields. These fields count toward the quota of 20 fields for each log group.
   * - `AUTO`: Fields that CloudWatch Logs indexes automatically based on your query patterns and usage. These fields do not count toward the field index quota. CloudWatch Logs might update these fields based on changes in your query patterns. To keep a field indexed permanently, add it to an account-level or log-group level field index policy.
   * - `INACTIVE`: Fields that CloudWatch Logs indexed before but does not index now. This happens if you remove a field from the field index policy or if CloudWatch Logs automatically selects a different field based on your queries.
   *
   * If you omit this parameter, the response includes the `DEFAULT`, `CUSTOM`, and `INACTIVE` categories.
   *
   * For more information about automatically indexed fields and using the `AUTO` category, see [Automatically indexed fields](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing-Automatic.html).
   *
   * @public
   */
  indexCategories?: IndexCategory[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * This structure describes one log event field that is used as an index in at least one index policy in this account.
 *
 * @public
 */
export interface FieldIndex {
  /**
   * If this field index appears in an index policy that applies only to a single log group, the ARN of that log group is displayed here.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The string that this field index matches.
   *
   * @public
   */
  fieldIndexName?: string | undefined;

  /**
   * The most recent time that CloudWatch Logs scanned ingested log events to search for this field index to improve the speed of future CloudWatch Logs Insights queries that search for this field index.
   *
   * @public
   */
  lastScanTime?: number | undefined;

  /**
   * The time and date of the earliest log event that matches this field index, after the index policy that contains it was created.
   *
   * @public
   */
  firstEventTime?: number | undefined;

  /**
   * The time and date of the most recent log event that matches this field index.
   *
   * @public
   */
  lastEventTime?: number | undefined;

  /**
   * The type of index. Specify `FACET` for facet-based indexing or `FIELD_INDEX` for field-based indexing. This determines how the field is indexed and can be queried.
   *
   * @public
   */
  type?: IndexType | undefined;

  /**
   * The category of the field index:
   *
   * - `DEFAULT`: Fields that CloudWatch Logs indexes by default. Examples include `@logStream` and `@data_format`.
   * - `CUSTOM`: Fields that you added manually to the field index policy. CloudWatch Logs always indexes these fields. These fields count toward the quota of 20 fields for each log group.
   * - `AUTO`: Fields that CloudWatch Logs indexes automatically based on your query patterns and usage. These fields do not count toward the field index quota. CloudWatch Logs might update these fields based on changes in your query patterns. To keep a field indexed permanently, add it to an account-level or log-group level field index policy.
   * - `INACTIVE`: Fields that CloudWatch Logs indexed before but does not index now. This happens if you remove a field from the field index policy or if CloudWatch Logs automatically selects a different field based on your queries.
   *
   * For more information about automatically indexed fields, see [Automatically indexed fields](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing-Automatic.html).
   *
   * @public
   */
  indexCategory?: IndexCategory | undefined;
}

/**
 * @public
 */
export interface DescribeFieldIndexesResponse {
  /**
   * An array containing the field index information.
   *
   * @public
   */
  fieldIndexes?: FieldIndex[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTaskBatchesRequest {
  /**
   * The ID of the import task to get batch information for.
   *
   * @public
   */
  importId: string | undefined;

  /**
   * Optional filter to list import batches by their status. Accepts multiple status values: IN_PROGRESS, CANCELLED, COMPLETED and FAILED.
   *
   * @public
   */
  batchImportStatus?: ImportStatus[] | undefined;

  /**
   * The maximum number of import batches to return in the response. Default: 10
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The pagination token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A collection of events being imported to CloudWatch
 *
 * @public
 */
export interface ImportBatch {
  /**
   * The unique identifier of the import batch.
   *
   * @public
   */
  batchId: string | undefined;

  /**
   * The current status of the import batch. Valid values are IN_PROGRESS, CANCELLED, COMPLETED and FAILED.
   *
   * @public
   */
  status: ImportStatus | undefined;

  /**
   * The error message if the batch failed to import. Only present when status is FAILED.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTaskBatchesResponse {
  /**
   * The ARN of the source being imported from.
   *
   * @public
   */
  importSourceArn?: string | undefined;

  /**
   * The ID of the import task.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The list of import batches that match the request filters.
   *
   * @public
   */
  importBatches?: ImportBatch[] | undefined;

  /**
   * The token to use when requesting the next set of results. Not present if there are no additional results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksRequest {
  /**
   * Optional filter to describe a specific import task by its ID.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * Optional filter to list imports by their status. Valid values are IN_PROGRESS, CANCELLED, COMPLETED and FAILED.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * Optional filter to list imports from a specific source
   *
   * @public
   */
  importSourceArn?: string | undefined;

  /**
   * The maximum number of import tasks to return in the response. Default: 50
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The pagination token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An import job to move data from CloudTrail Event Data Store to CloudWatch.
 *
 * @public
 */
export interface Import {
  /**
   * The unique identifier of the import task.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The ARN of the CloudTrail Lake Event Data Store being imported from.
   *
   * @public
   */
  importSourceArn?: string | undefined;

  /**
   * The current status of the import task. Valid values are IN_PROGRESS, CANCELLED, COMPLETED and FAILED.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * The ARN of the managed CloudWatch Logs log group where the events are being imported to.
   *
   * @public
   */
  importDestinationArn?: string | undefined;

  /**
   * Statistics about the import progress
   *
   * @public
   */
  importStatistics?: ImportStatistics | undefined;

  /**
   * The filter criteria used for this import task.
   *
   * @public
   */
  importFilter?: ImportFilter | undefined;

  /**
   * The timestamp when the import task was created, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The timestamp when the import task was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * Error message related to any failed imports
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportTasksResponse {
  /**
   * The list of import tasks that match the request filters.
   *
   * @public
   */
  imports?: Import[] | undefined;

  /**
   * The token to use when requesting the next set of results. Not present if there are no additional results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIndexPoliciesRequest {
  /**
   * An array containing the name or ARN of the log group that you want to retrieve field index policies for.
   *
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * This structure contains information about one field index policy in this account.
 *
 * @public
 */
export interface IndexPolicy {
  /**
   * The ARN of the log group that this index policy applies to.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The date and time that this index policy was most recently updated.
   *
   * @public
   */
  lastUpdateTime?: number | undefined;

  /**
   * The policy document for this index policy, in JSON format.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The name of this policy. Responses about log group-level field index policies don't have this field, because those policies don't have names.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * This field indicates whether this is an account-level index policy or an index policy that applies only to a single log group.
   *
   * @public
   */
  source?: IndexSource | undefined;
}

/**
 * @public
 */
export interface DescribeIndexPoliciesResponse {
  /**
   * An array containing the field index policies.
   *
   * @public
   */
  indexPolicies?: IndexPolicy[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogGroupsRequest {
  /**
   * When `includeLinkedAccounts` is set to `true`, use this parameter to specify the list of accounts to search. You can specify as many as 20 account IDs in the array.
   *
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * The prefix to match.
   *
   * > **Note:** `logGroupNamePrefix` and `logGroupNamePattern` are mutually exclusive. Only one of these parameters can be passed.
   *
   * @public
   */
  logGroupNamePrefix?: string | undefined;

  /**
   * If you specify a string for this parameter, the operation returns only log groups that have names that match the string based on a case-sensitive substring search. For example, if you specify `DataLogs`, log groups named `DataLogs`, `aws/DataLogs`, and `GroupDataLogs` would match, but `datalogs`, `Data/log/s` and `Groupdata` would not match.
   *
   * If you specify `logGroupNamePattern` in your request, then only `arn`, `creationTime`, and `logGroupName` are included in the response.
   *
   * > **Note:** `logGroupNamePattern` and `logGroupNamePrefix` are mutually exclusive. Only one of these parameters can be passed.
   *
   * @public
   */
  logGroupNamePattern?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * If you are using a monitoring account, set this to `true` to have the operation return log groups in the accounts listed in `accountIdentifiers`.
   *
   * If this parameter is set to `true` and `accountIdentifiers` contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account.
   *
   * The default for this parameter is `false`.
   *
   * @public
   */
  includeLinkedAccounts?: boolean | undefined;

  /**
   * Use this parameter to limit the results to only those log groups in the specified log group class. If you omit this parameter, log groups of all classes can be returned.
   *
   * Specifies the log group class for this log group. There are three classes:
   *
   * - The `Standard` log class supports all CloudWatch Logs features.
   * - The `Infrequent Access` log class supports a subset of CloudWatch Logs features and incurs lower costs.
   * - Use the `Delivery` log class only for delivering Lambda logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights queries.
   *
   * For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * Use this array to filter the list of log groups returned. If you specify this parameter, the only other filter that you can choose to specify is `includeLinkedAccounts`.
   *
   * If you are using this operation in a monitoring account, you can specify the ARNs of log groups in source accounts and in the monitoring account itself. If you are using this operation in an account that is not a cross-account monitoring account, you can specify only log group names in the same account as the operation.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;
}

/**
 * Represents a log group.
 *
 * @public
 */
export interface LogGroup {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
   *
   * To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html).
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * The number of metric filters.
   *
   * @public
   */
  metricFilterCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log group. This version of the ARN includes a trailing `:*` after the log group name.
   *
   * Use this version to refer to the ARN in IAM policies when specifying permissions for most API actions. The exception is when specifying permissions for [TagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html), [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html), and [ListTagsForResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html). The permissions for those three actions require the ARN version that doesn't include a trailing `:*`.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of bytes stored.
   *
   * @public
   */
  storedBytes?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Displays whether this log group has a protection policy, or whether it had one in the past. For more information, see [PutDataProtectionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html).
   *
   * @public
   */
  dataProtectionStatus?: DataProtectionStatus | undefined;

  /**
   * Displays all the properties that this log group has inherited from account-level settings.
   *
   * @public
   */
  inheritedProperties?: InheritedProperty[] | undefined;

  /**
   * This specifies the log group class for this log group. There are three classes:
   *
   * - The `Standard` log class supports all CloudWatch Logs features.
   * - The `Infrequent Access` log class supports a subset of CloudWatch Logs features and incurs lower costs.
   * - Use the `Delivery` log class only for delivering Lambda logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights queries.
   *
   * For details about the features supported by the Standard and Infrequent Access classes, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log group. This version of the ARN doesn't include a trailing `:*` after the log group name.
   *
   * Use this version to refer to the ARN in the following situations:
   *
   * - In the `logGroupIdentifier` input field in many CloudWatch Logs APIs.
   * - In the `resourceArn` field in tagging APIs
   * - In IAM policies, when specifying permissions for [TagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html), [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html), and [ListTagsForResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html).
   *
   * @public
   */
  logGroupArn?: string | undefined;

  /**
   * Indicates whether deletion protection is enabled for this log group. When enabled, deletion protection blocks all deletion operations until it is explicitly disabled.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * Indicates whether bearer token authentication is enabled for this log group. When enabled, bearer token authentication is allowed on operations until it is explicitly disabled.
   *
   * @public
   */
  bearerTokenAuthenticationEnabled?: boolean | undefined;

  /**
   * The name of the account-level retention policy that determines the retention period of this log group. This field is returned only when an account-level retention policy applies to the log group. When it is returned, `retentionInDays` shows the retention period from that policy instead of the retention period set on the log group. If the policy specifies that log events never expire, `retentionInDays` is not returned.
   *
   * @public
   */
  retentionPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogGroupsResponse {
  /**
   * An array of structures, where each structure contains the information about one log group.
   *
   * @public
   */
  logGroups?: LogGroup[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLogStreamsRequest {
  /**
   * The name of the log group.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The prefix to match.
   *
   * If `orderBy` is `LastEventTime`, you cannot specify this parameter.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * If the value is `LogStreamName`, the results are ordered by log stream name. If the value is `LastEventTime`, the results are ordered by the event time. The default value is `LogStreamName`.
   *
   * If you order the results by event time, you cannot specify the `logStreamNamePrefix` parameter.
   *
   * `lastEventTimestamp` represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. `lastEventTimestamp` updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false.
   *
   * @public
   */
  descending?: boolean | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a log stream, which is a sequence of log events from a single emitter of logs.
 *
 * @public
 */
export interface LogStream {
  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The creation time of the stream, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The time of the first event, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  firstEventTimestamp?: number | undefined;

  /**
   * The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. The `lastEventTime` value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer.
   *
   * @public
   */
  lastEventTimestamp?: number | undefined;

  /**
   * The ingestion time, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC` The `lastIngestionTime` value updates on an eventual consistency basis. It typically updates in less than an hour after ingestion, but in rare situations might take longer.
   *
   * @public
   */
  lastIngestionTime?: number | undefined;

  /**
   * The sequence token.
   *
   * > **Important:** The sequence token is now ignored in `PutLogEvents` actions. `PutLogEvents` actions are always accepted regardless of receiving an invalid sequence token. You don't need to obtain `uploadSequenceToken` to use a `PutLogEvents` action.
   *
   * @public
   */
  uploadSequenceToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log stream.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of bytes stored.
   *
   * **Important:** As of June 17, 2019, this parameter is no longer supported for log streams, and is always reported as zero. This change applies only to log streams. The `storedBytes` parameter for log groups is not affected.
   *
   * @deprecated Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.
   * @public
   */
  storedBytes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLogStreamsResponse {
  /**
   * The log streams.
   *
   * @public
   */
  logStreams?: LogStream[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLookupTablesRequest {
  /**
   * A prefix to filter lookup tables by name. Only tables whose names start with this prefix are returned. If you don't specify a prefix, all tables in the account and Region are returned.
   *
   * @public
   */
  lookupTableNamePrefix?: string | undefined;

  /**
   * The maximum number of lookup tables to return in the response. The default value is 50 and the maximum value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains metadata about a lookup table returned by `DescribeLookupTables`.
 *
 * @public
 */
export interface LookupTable {
  /**
   * The ARN of the lookup table.
   *
   * @public
   */
  lookupTableArn?: string | undefined;

  /**
   * The name of the lookup table.
   *
   * @public
   */
  lookupTableName?: string | undefined;

  /**
   * The description of the lookup table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The column headers from the first row of the CSV file.
   *
   * @public
   */
  tableFields?: string[] | undefined;

  /**
   * The number of data rows in the lookup table, excluding the header row.
   *
   * @public
   */
  recordsCount?: number | undefined;

  /**
   * The size of the lookup table in bytes.
   *
   * @public
   */
  sizeBytes?: number | undefined;

  /**
   * The time when the lookup table was last updated, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * The ARN of the KMS key used to encrypt the lookup table data, if applicable.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLookupTablesResponse {
  /**
   * An array of structures, where each structure contains metadata about one lookup table.
   *
   * @public
   */
  lookupTables?: LookupTable[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricFiltersRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The prefix to match. CloudWatch Logs uses the value that you set here only if you also include the `logGroupName` parameter in your request.
   *
   * @public
   */
  filterNamePrefix?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the `metricNamespace` parameter.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the `metricName` parameter.
   *
   * @public
   */
  metricNamespace?: string | undefined;
}

/**
 * Indicates how to transform ingested log events to metric data in a CloudWatch metric.
 *
 * @public
 */
export interface MetricTransformation {
  /**
   * The name of the CloudWatch metric.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
   *
   * @public
   */
  metricNamespace: string | undefined;

  /**
   * The value to publish to the CloudWatch metric when a filter pattern matches a log event.
   *
   * @public
   */
  metricValue: string | undefined;

  /**
   * (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
   *
   * @public
   */
  defaultValue?: number | undefined;

  /**
   * The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
   *
   * > **Important:**
   * >
   * > Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
   * >
   * > CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
   * >
   * > You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
   *
   * @public
   */
  dimensions?: Record<string, string> | undefined;

  /**
   * The unit to assign to the metric. If you omit this, the unit is set as `None`.
   *
   * @public
   */
  unit?: StandardUnit | undefined;
}

/**
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
 *
 * @public
 */
export interface MetricFilter {
  /**
   * The name of the metric filter.
   *
   * @public
   */
  filterName?: string | undefined;

  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * The metric transformations.
   *
   * @public
   */
  metricTransformations?: MetricTransformation[] | undefined;

  /**
   * The creation time of the metric filter, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
   *
   * If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.
   *
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * The filter expression that specifies which log events are processed by this metric filter based on system fields. Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.
   *
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * The list of system fields that are emitted as additional dimensions in the generated metrics. Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.
   *
   * @public
   */
  emitSystemFieldDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetricFiltersResponse {
  /**
   * The metric filters.
   *
   * @public
   */
  metricFilters?: MetricFilter[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueriesRequest {
  /**
   * Limits the returned queries to only those for the specified log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Limits the returned queries to only those that have the specified status. Valid values are `Cancelled`, `Complete`, `Failed`, `Running`, and `Scheduled`.
   *
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * Limits the number of returned queries to the specified number.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Limits the returned queries to only the queries that use the specified query language.
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;
}

/**
 * Information about one CloudWatch Logs Insights query that matches the request in a `DescribeQueries` operation.
 *
 * @public
 */
export interface QueryInfo {
  /**
   * The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The unique ID number of this query.
   *
   * @public
   */
  queryId?: string | undefined;

  /**
   * The query string used in this query.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The status of this query. Possible values are `Cancelled`, `Complete`, `Failed`, `Running`, `Scheduled`, and `Unknown`.
   *
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * The date and time that this query was created.
   *
   * @public
   */
  createTime?: number | undefined;

  /**
   * The name of the log group scanned by this query.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The duration in milliseconds that the query took to execute.
   *
   * @public
   */
  queryDuration?: number | undefined;

  /**
   * The total number of bytes scanned by the query. This indicates the cost associated with the query.
   *
   * @public
   */
  bytesScanned?: number | undefined;

  /**
   * The ARN of the user who ran the query.
   *
   * @public
   */
  userIdentity?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueriesResponse {
  /**
   * The list of queries that match the request.
   *
   * @public
   */
  queries?: QueryInfo[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsRequest {
  /**
   * The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * Use this parameter to filter your results to only the query definitions that have names that start with the prefix you specify.
   *
   * @public
   */
  queryDefinitionNamePrefix?: string | undefined;

  /**
   * Limits the number of returned query definitions to the specified number.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * This structure defines a query parameter for a saved CloudWatch Logs Insights query definition. Query parameters are supported only for Logs Insights QL queries. They are placeholder variables that you can reference in a query string using the `\{\{parameterName\}\}` syntax. Each parameter can include a default value and a description.
 *
 * @public
 */
export interface QueryParameter {
  /**
   * The name of the query parameter. A query parameter name must start with a letter or underscore, and contain only letters, digits, and underscores.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The default value to use for this query parameter if no value is supplied at execution time.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * A description of the query parameter that explains its purpose or expected values.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * This structure contains details about a saved CloudWatch Logs Insights query definition.
 *
 * @public
 */
export interface QueryDefinition {
  /**
   * The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The unique ID of the query definition.
   *
   * @public
   */
  queryDefinitionId?: string | undefined;

  /**
   * The name of the query definition.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The query string to use for this definition. For more information, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The date that the query definition was most recently modified.
   *
   * @public
   */
  lastModified?: number | undefined;

  /**
   * If this query definition contains a list of log groups that it is limited to, that list appears here.
   *
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * If this query definition contains a list of query parameters that define placeholder variables for the query string, that list appears here.
   *
   * @public
   */
  parameters?: QueryParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeQueryDefinitionsResponse {
  /**
   * The list of query definitions that match your request.
   *
   * @public
   */
  queryDefinitions?: QueryDefinition[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePoliciesRequest {
  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of resource policies to be displayed with one call of this API.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The ARN of the CloudWatch Logs resource for which to query the resource policy.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * Specifies the scope of the resource policy. Valid values are `ACCOUNT` or `RESOURCE`. When not specified, defaults to `ACCOUNT`.
   *
   * @public
   */
  policyScope?: PolicyScope | undefined;
}

/**
 * A policy enabling one or more entities to put logs to a log group in this account.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The name of the resource policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The details of the policy.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * Timestamp showing when this policy was last updated, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * Specifies scope of the resource policy. Valid values are ACCOUNT or RESOURCE.
   *
   * @public
   */
  policyScope?: PolicyScope | undefined;

  /**
   * The ARN of the CloudWatch Logs resource to which the resource policy is attached. Only populated for resource-scoped policies.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The revision ID of the resource policy. Only populated for resource-scoped policies.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePoliciesResponse {
  /**
   * The resource policies that exist in this account.
   *
   * @public
   */
  resourcePolicies?: ResourcePolicy[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The prefix to match. If you don't specify a value, no prefix filter is applied.
   *
   * @public
   */
  filterNamePrefix?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items returned. If you don't specify a value, the default is up to 50 items.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Represents a subscription filter.
 *
 * @public
 */
export interface SubscriptionFilter {
  /**
   * The name of the subscription filter.
   *
   * @public
   */
  filterName?: string | undefined;

  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  destinationArn?: string | undefined;

  /**
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The method used to distribute log data to the destination, which can be either random or grouped by log stream.
   *
   * @public
   */
  distribution?: Distribution | undefined;

  /**
   * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
   *
   * If this value is `true`, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.
   *
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * The creation time of the subscription filter, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The filter expression that specifies which log events are processed by this subscription filter based on system fields. Returns the `fieldSelectionCriteria` value if it was specified when the subscription filter was created.
   *
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * The list of system fields that are included in the log events sent to the subscription destination. Returns the `emitSystemFields` value if it was specified when the subscription filter was created.
   *
   * @public
   */
  emitSystemFields?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriptionFiltersResponse {
  /**
   * The subscription filters.
   *
   * @public
   */
  subscriptionFilters?: SubscriptionFilter[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateKmsKeyRequest {
  /**
   * The name of the log group.
   *
   * In your `DisassociateKmsKey` operation, you must specify either the `resourceIdentifier` parameter or the `logGroup` parameter, but you can't specify both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Specifies the target for this operation. You must specify one of the following:
   *
   * - Specify the ARN of a log group to stop having CloudWatch Logs use the KMS key to encrypt log events that are ingested and stored by that log group. After you run this operation, CloudWatch Logs encrypts ingested log events with the default CloudWatch Logs method. The log group ARN must be in the following format. Replace *REGION* and *ACCOUNT_ID* with your Region and account ID.
   *
   *   `arn:aws:logs:REGION:ACCOUNT_ID:log-group:LOG_GROUP_NAME`
   * - Specify the following ARN to stop using this key to encrypt the results of future [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html) operations in this account. Replace *REGION* and *ACCOUNT_ID* with your Region and account ID.
   *
   *   `arn:aws:logs:REGION:ACCOUNT_ID:query-result:*`
   *
   * In your `DisssociateKmsKey` operation, you must specify either the `resourceIdentifier` parameter or the `logGroup` parameter, but you can't specify both.
   *
   * @public
   */
  resourceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceFromS3TableIntegrationRequest {
  /**
   * The unique identifier of the association to remove between the data source and S3 Table Integration.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceFromS3TableIntegrationResponse {
  /**
   * The unique identifier of the association that was removed.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * The entity associated with the log events in a `PutLogEvents` call.
 *
 * @public
 */
export interface Entity {
  /**
   * The attributes of the entity which identify the specific entity, as a list of key-value pairs. Entities with the same `keyAttributes` are considered to be the same entity.
   *
   * There are five allowed attributes (key names): `Type`, `ResourceType`, `Identifier` `Name`, and `Environment`.
   *
   * For details about how to use the key attributes, see [How to add related information to telemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  keyAttributes?: Record<string, string> | undefined;

  /**
   * Additional attributes of the entity that are not used to specify the identity of the entity. A list of key-value pairs.
   *
   * For details about how to use the attributes, see [How to add related information to telemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/adding-your-own-related-telemetry.html) in the *CloudWatch User Guide*.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * A structure containing the extracted fields from a log event. These fields are extracted based on the log format and can be used for structured querying and analysis.
 *
 * @public
 */
export interface FieldsData {
  /**
   * The actual log data content returned in the streaming response. This contains the fields and values of the log event in a structured format that can be parsed and processed by the client.
   *
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * Represents a matched event.
 *
 * @public
 */
export interface FilteredLogEvent {
  /**
   * The name of the log stream to which this event belongs.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The time the event occurred, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  timestamp?: number | undefined;

  /**
   * The data contained in the log event.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The time the event was ingested, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  ingestionTime?: number | undefined;

  /**
   * The ID of the event.
   *
   * @public
   */
  eventId?: string | undefined;
}

/**
 * @public
 */
export interface FilterLogEventsRequest {
  /**
   * The name of the log group to search.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Specify either the name or ARN of the log group to view log events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * Filters the results to only logs from the log streams in this list.
   *
   * If you specify a value for both `logStreamNames` and `logStreamNamePrefix`, the action returns an `InvalidParameterException` error.
   *
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * Filters the results to include only events from log streams that have names starting with this prefix.
   *
   * If you specify a value for both `logStreamNamePrefix` and `logStreamNames`, the action returns an `InvalidParameterException` error.
   *
   * @public
   */
  logStreamNamePrefix?: string | undefined;

  /**
   * The start of the time range, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp before this time are not returned.
   *
   * > **Note:** Set `startTime` explicitly to reduce the chances of empty pages in the response.
   *
   * @public
   */
  startTime?: number | undefined;

  /**
   * The end of the time range, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp later than this time are not returned.
   *
   * @public
   */
  endTime?: number | undefined;

  /**
   * The filter pattern to use. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
   *
   * If not provided, all the events are matched.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * The token for the next set of events to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of events to return. The default is 10,000 events.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is true.
   *
   * The `startFromHead` parameter sets the sort direction on the first request. On subsequent requests, the `nextToken` determines the sort direction. To continue paginating in the same direction, provide the returned `nextToken`. If you provide both `nextToken` and `startFromHead`, the direction of the `nextToken` is used.
   *
   * > **Note:** Setting `startFromHead` to `false` is supported only when `startTime` is on or after `Jan 1, 2024 00:00:00 UTC`. A request with `startFromHead` set to `false` and a `startTime` before this date returns an `InvalidParameterException`.
   *
   * @public
   */
  startFromHead?: boolean | undefined;

  /**
   * If the value is true, the operation attempts to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on.
   *
   * **Important** As of June 17, 2019, this parameter is ignored and the value is assumed to be true. The response from this operation always interleaves events from multiple log streams within a log group.
   *
   * @deprecated Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be true. The response from this operation will always interleave events from multiple log streams within a log group.
   * @public
   */
  interleaved?: boolean | undefined;

  /**
   * Specify `true` to display the log event fields with all sensitive data unmasked and visible. The default is `false`.
   *
   * To use this operation with this parameter, you must be signed into an account with the `logs:Unmask` permission.
   *
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * Represents the search status of a log stream.
 *
 * @public
 */
export interface SearchedLogStream {
  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * Indicates whether all the events in this log stream were searched.
   *
   * @public
   */
  searchedCompletely?: boolean | undefined;
}

/**
 * @public
 */
export interface FilterLogEventsResponse {
  /**
   * The matched events.
   *
   * @public
   */
  events?: FilteredLogEvent[] | undefined;

  /**
   * **Important** As of May 15, 2020, this parameter is no longer supported. This parameter returns an empty list.
   *
   * Indicates which log streams have been searched and whether each has been searched completely.
   *
   * @public
   */
  searchedLogStreams?: SearchedLogStream[] | undefined;

  /**
   * The token for the next set of items in the sorting direction specified by the `startFromHead` parameter in the first request. The token expires after 24 hours.
   *
   * If the results don't include a `nextToken`, then pagination is finished.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyRequest {
  /**
   * The name or ARN of the log group that contains the data protection policy that you want to see.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataProtectionPolicyResponse {
  /**
   * The log group name or ARN that you specified in your request.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The data protection policy document for this log group.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The date and time that this policy was most recently updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface GetDeliveryRequest {
  /**
   * The ID of the delivery that you want to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryResponse {
  /**
   * A structure that contains information about the delivery.
   *
   * @public
   */
  delivery?: Delivery | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationRequest {
  /**
   * The name of the delivery destination that you want to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationResponse {
  /**
   * A structure containing information about the delivery destination.
   *
   * @public
   */
  deliveryDestination?: DeliveryDestination | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyRequest {
  /**
   * The name of the delivery destination that you want to retrieve the policy of.
   *
   * @public
   */
  deliveryDestinationName: string | undefined;
}

/**
 * A structure that contains information about one delivery destination policy.
 *
 * @public
 */
export interface Policy {
  /**
   * The contents of the delivery destination policy.
   *
   * @public
   */
  deliveryDestinationPolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetDeliveryDestinationPolicyResponse {
  /**
   * The IAM policy for this delivery destination.
   *
   * @public
   */
  policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetDeliverySourceRequest {
  /**
   * The name of the delivery source that you want to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetDeliverySourceResponse {
  /**
   * A structure containing information about the delivery source.
   *
   * @public
   */
  deliverySource?: DeliverySource | undefined;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * The name of the integration that you want to find information about. To find the name of your integration, use [ListIntegrations](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html)
   *
   * @public
   */
  integrationName: string | undefined;
}

/**
 * This structure contains information about the status of an OpenSearch Service resource.
 *
 * @public
 */
export interface OpenSearchResourceStatus {
  /**
   * The current status of this resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatusType | undefined;

  /**
   * A message with additional information about the status of this resource.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * This structure contains information about the OpenSearch Service data access policy used for this integration. The access policy defines the access controls for the collection. This data access policy was automatically created as part of the integration setup. For more information about OpenSearch Service data access policies, see [Data access control for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html) in the OpenSearch Service Developer Guide.
 *
 * @public
 */
export interface OpenSearchDataAccessPolicy {
  /**
   * The name of the data access policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service application used for this integration. An OpenSearch Service application is the web application created by the integration with CloudWatch Logs. It hosts the vended logs dashboards.
 *
 * @public
 */
export interface OpenSearchApplication {
  /**
   * The endpoint of the application.
   *
   * @public
   */
  applicationEndpoint?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service collection used for this integration. An OpenSearch Service collection is a logical grouping of one or more indexes that represent an analytics workload. For more information, see [Creating and managing OpenSearch Service Serverless collections](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-collections.html).
 *
 * @public
 */
export interface OpenSearchCollection {
  /**
   * The endpoint of the collection.
   *
   * @public
   */
  collectionEndpoint?: string | undefined;

  /**
   * The ARN of the collection.
   *
   * @public
   */
  collectionArn?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service data source used for this integration. This data source was created as part of the integration setup. An OpenSearch Service data source defines the source and destination for OpenSearch Service queries. It includes the role required to execute queries and write to collections.
 *
 * For more information about OpenSearch Service data sources , see [Creating OpenSearch Service data source integrations with Amazon S3.](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-creating.html)
 *
 * @public
 */
export interface OpenSearchDataSource {
  /**
   * The name of the OpenSearch Service data source.
   *
   * @public
   */
  dataSourceName?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service encryption policy used for this integration. The encryption policy was created automatically when you created the integration. For more information, see [Encryption policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html#serverless-encryption-policies) in the OpenSearch Service Developer Guide.
 *
 * @public
 */
export interface OpenSearchEncryptionPolicy {
  /**
   * The name of the encryption policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service data lifecycle policy used for this integration. The lifecycle policy determines the lifespan of the data in the collection. It was automatically created as part of the integration setup.
 *
 * For more information, see [Using data lifecycle policies with OpenSearch Service Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html) in the OpenSearch Service Developer Guide.
 *
 * @public
 */
export interface OpenSearchLifecyclePolicy {
  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service network policy used for this integration. The network policy assigns network access settings to collections. For more information, see [Network policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html#serverless-network-policies) in the OpenSearch Service Developer Guide.
 *
 * @public
 */
export interface OpenSearchNetworkPolicy {
  /**
   * The name of the network policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * This structure contains information about the status of this OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains information about the OpenSearch Service workspace used for this integration. An OpenSearch Service workspace is the collection of dashboards along with other OpenSearch Service tools. This workspace was created automatically as part of the integration setup. For more information, see [Centralized OpenSearch user interface (Dashboards) with OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html).
 *
 * @public
 */
export interface OpenSearchWorkspace {
  /**
   * The ID of this workspace.
   *
   * @public
   */
  workspaceId?: string | undefined;

  /**
   * This structure contains information about the status of an OpenSearch Service resource.
   *
   * @public
   */
  status?: OpenSearchResourceStatus | undefined;
}

/**
 * This structure contains complete information about one CloudWatch Logs integration. This structure is returned by a [GetIntegration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetIntegration.html) operation.
 *
 * @public
 */
export interface OpenSearchIntegrationDetails {
  /**
   * This structure contains information about the OpenSearch Service data source used for this integration. This data source was created as part of the integration setup. An OpenSearch Service data source defines the source and destination for OpenSearch Service queries. It includes the role required to execute queries and write to collections.
   *
   * For more information about OpenSearch Service data sources , see [Creating OpenSearch Service data source integrations with Amazon S3.](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-creating.html)
   *
   * @public
   */
  dataSource?: OpenSearchDataSource | undefined;

  /**
   * This structure contains information about the OpenSearch Service application used for this integration. An OpenSearch Service application is the web application that was created by the integration with CloudWatch Logs. It hosts the vended logs dashboards.
   *
   * @public
   */
  application?: OpenSearchApplication | undefined;

  /**
   * This structure contains information about the OpenSearch Service collection used for this integration. This collection was created as part of the integration setup. An OpenSearch Service collection is a logical grouping of one or more indexes that represent an analytics workload. For more information, see [Creating and managing OpenSearch Service Serverless collections](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-collections.html).
   *
   * @public
   */
  collection?: OpenSearchCollection | undefined;

  /**
   * This structure contains information about the OpenSearch Service workspace used for this integration. An OpenSearch Service workspace is the collection of dashboards along with other OpenSearch Service tools. This workspace was created automatically as part of the integration setup. For more information, see [Centralized OpenSearch user interface (Dashboards) with OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html).
   *
   * @public
   */
  workspace?: OpenSearchWorkspace | undefined;

  /**
   * This structure contains information about the OpenSearch Service encryption policy used for this integration. The encryption policy was created automatically when you created the integration. For more information, see [Encryption policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html#serverless-encryption-policies) in the OpenSearch Service Developer Guide.
   *
   * @public
   */
  encryptionPolicy?: OpenSearchEncryptionPolicy | undefined;

  /**
   * This structure contains information about the OpenSearch Service network policy used for this integration. The network policy assigns network access settings to collections. For more information, see [Network policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html#serverless-network-policies) in the OpenSearch Service Developer Guide.
   *
   * @public
   */
  networkPolicy?: OpenSearchNetworkPolicy | undefined;

  /**
   * This structure contains information about the OpenSearch Service data access policy used for this integration. The access policy defines the access controls for the collection. This data access policy was automatically created as part of the integration setup. For more information about OpenSearch Service data access policies, see [Data access control for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html) in the OpenSearch Service Developer Guide.
   *
   * @public
   */
  accessPolicy?: OpenSearchDataAccessPolicy | undefined;

  /**
   * This structure contains information about the OpenSearch Service data lifecycle policy used for this integration. The lifecycle policy determines the lifespan of the data in the collection. It was automatically created as part of the integration setup.
   *
   * For more information, see [Using data lifecycle policies with OpenSearch Service Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html) in the OpenSearch Service Developer Guide.
   *
   * @public
   */
  lifecyclePolicy?: OpenSearchLifecyclePolicy | undefined;
}

/**
 * This structure contains information about the integration configuration. For an integration with OpenSearch Service, this includes information about OpenSearch Service resources such as the collection, the workspace, and policies.
 *
 * This structure is returned by a [GetIntegration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetIntegration.html) operation.
 *
 * @public
 */
export type IntegrationDetails =
  | IntegrationDetails.OpenSearchIntegrationDetailsMember
  | IntegrationDetails.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationDetails {
  /**
   * This structure contains complete information about one integration between CloudWatch Logs and OpenSearch Service.
   *
   * @public
   */
  export interface OpenSearchIntegrationDetailsMember {
    openSearchIntegrationDetails: OpenSearchIntegrationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openSearchIntegrationDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openSearchIntegrationDetails: (value: OpenSearchIntegrationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetIntegrationResponse {
  /**
   * The name of the integration.
   *
   * @public
   */
  integrationName?: string | undefined;

  /**
   * The type of integration. Integrations with OpenSearch Service have the type `OPENSEARCH`.
   *
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * The current status of this integration.
   *
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;

  /**
   * A structure that contains information about the integration configuration. For an integration with OpenSearch Service, this includes information about OpenSearch Service resources such as the collection, the workspace, and policies.
   *
   * @public
   */
  integrationDetails?: IntegrationDetails | undefined;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorRequest {
  /**
   * The ARN of the anomaly detector to retrieve information about. You can find the ARNs of log anomaly detectors in your account by using the [ListLogAnomalyDetectors](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListLogAnomalyDetectors.html) operation.
   *
   * @public
   */
  anomalyDetectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetLogAnomalyDetectorResponse {
  /**
   * The name of the log anomaly detector
   *
   * @public
   */
  detectorName?: string | undefined;

  /**
   * An array of structures, where each structure contains the ARN of a log group associated with this anomaly detector.
   *
   * @public
   */
  logGroupArnList?: string[] | undefined;

  /**
   * Specifies how often the anomaly detector runs and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then setting `evaluationFrequency` to `FIFTEEN_MIN` might be appropriate.
   *
   * @public
   */
  evaluationFrequency?: EvaluationFrequency | undefined;

  /**
   * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
   *
   * @public
   */
  filterPattern?: string | undefined;

  /**
   * Specifies whether the anomaly detector is currently active. To change its status, use the `enabled` parameter in the [UpdateLogAnomalyDetector](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateLogAnomalyDetector.html) operation.
   *
   * @public
   */
  anomalyDetectorStatus?: AnomalyDetectorStatus | undefined;

  /**
   * The ARN of the KMS key assigned to this anomaly detector, if any.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The date and time when this anomaly detector was created.
   *
   * @public
   */
  creationTimeStamp?: number | undefined;

  /**
   * The date and time when this anomaly detector was most recently modified.
   *
   * @public
   */
  lastModifiedTimeStamp?: number | undefined;

  /**
   * The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal.
   *
   * @public
   */
  anomalyVisibilityTime?: number | undefined;
}

/**
 * @public
 */
export interface GetLogEventsRequest {
  /**
   * The name of the log group.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * Specify either the name or ARN of the log group to view events from. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName: string | undefined;

  /**
   * The start of the time range, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included.
   *
   * > **Note:** Set `startTime` explicitly to reduce the chances of empty pages in the response.
   *
   * @public
   */
  startTime?: number | undefined;

  /**
   * The end of the time range, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`. Events with a timestamp equal to or later than this time are not included.
   *
   * @public
   */
  endTime?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of log events returned. If you don't specify a limit, the default is as many log events as can fit in a response size of 1 MB (up to 10,000 log events).
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false.
   *
   * If you are using a previous `nextForwardToken` value as the `nextToken` in this operation, you must specify `true` for `startFromHead`.
   *
   * @public
   */
  startFromHead?: boolean | undefined;

  /**
   * Specify `true` to display the log event fields with all sensitive data unmasked and visible. The default is `false`.
   *
   * To use this operation with this parameter, you must be signed into an account with the `logs:Unmask` permission.
   *
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * Represents a log event.
 *
 * @public
 */
export interface OutputLogEvent {
  /**
   * The time the event occurred, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  timestamp?: number | undefined;

  /**
   * The data contained in the log event.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The time the event was ingested, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  ingestionTime?: number | undefined;
}

/**
 * @public
 */
export interface GetLogEventsResponse {
  /**
   * The events.
   *
   * @public
   */
  events?: OutputLogEvent[] | undefined;

  /**
   * The token for the next set of items in the forward direction. The token expires after 24 hours. If you have reached the end of the stream, it returns the same token you passed in.
   *
   * @public
   */
  nextForwardToken?: string | undefined;

  /**
   * The token for the next set of items in the backward direction. The token expires after 24 hours. This token is not null. If you have reached the end of the stream, it returns the same token you passed in.
   *
   * @public
   */
  nextBackwardToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLogFieldsRequest {
  /**
   * The name of the data source to retrieve log fields for.
   *
   * @public
   */
  dataSourceName: string | undefined;

  /**
   * The type of the data source to retrieve log fields for.
   *
   * @public
   */
  dataSourceType: string | undefined;
}

/**
 * @public
 */
export interface GetLogGroupFieldsRequest {
  /**
   * The name of the log group to search.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The time to set as the center of the query. If you specify `time`, the 8 minutes before and 8 minutes after this time are searched. If you omit `time`, the most recent 15 minutes up to the current time are searched.
   *
   * The `time` value is specified as epoch time, which is the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  time?: number | undefined;

  /**
   * Specify either the name or ARN of the log group to view. If the log group is in a source account and you are using a monitoring account, you must specify the ARN.
   *
   * > **Note:** You must include either `logGroupIdentifier` or `logGroupName`, but not both.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;
}

/**
 * The fields contained in log events found by a `GetLogGroupFields` operation, along with the percentage of queried log events in which each field appears.
 *
 * @public
 */
export interface LogGroupField {
  /**
   * The name of a log field.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The percentage of log events queried that contained the field.
   *
   * @public
   */
  percent?: number | undefined;
}

/**
 * @public
 */
export interface GetLogGroupFieldsResponse {
  /**
   * The array of fields found in the query. Each object in the array contains the name of the field, along with the percentage of time it appeared in the log events that were queried.
   *
   * @public
   */
  logGroupFields?: LogGroupField[] | undefined;
}

/**
 * The parameters for the GetLogObject operation.
 *
 * @public
 */
export interface GetLogObjectRequest {
  /**
   * A boolean flag that indicates whether to unmask sensitive log data. When set to true, any masked or redacted data in the log object will be displayed in its original form. Default is false.
   *
   * @public
   */
  unmask?: boolean | undefined;

  /**
   * A pointer to the specific log object to retrieve. This is a required parameter that uniquely identifies the log object within CloudWatch Logs. The pointer is typically obtained from a previous query or filter operation.
   *
   * @public
   */
  logObjectPointer: string | undefined;
}

/**
 * A stream of structured log data returned by the GetLogObject operation. This stream contains log events with their associated metadata and extracted fields.
 *
 * @public
 */
export type GetLogObjectResponseStream =
  | GetLogObjectResponseStream.InternalStreamingExceptionMember
  | GetLogObjectResponseStream.FieldsMember
  | GetLogObjectResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace GetLogObjectResponseStream {
  /**
   * A structure containing the extracted fields from a log event. These fields are extracted based on the log format and can be used for structured querying and analysis.
   *
   * @public
   */
  export interface FieldsMember {
    fields: FieldsData;
    InternalStreamingException?: never;
    $unknown?: never;
  }

  /**
   * An internal error occurred during the streaming of log data. This exception is thrown when there's an issue with the internal streaming mechanism used by the GetLogObject operation.
   *
   * @public
   */
  export interface InternalStreamingExceptionMember {
    fields?: never;
    InternalStreamingException: InternalStreamingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fields?: never;
    InternalStreamingException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fields: (value: FieldsData) => T;
    InternalStreamingException: (value: InternalStreamingException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The response from the GetLogObject operation.
 *
 * @public
 */
export interface GetLogObjectResponse {
  /**
   * A stream of structured log data returned by the GetLogObject operation. This stream contains log events with their associated metadata and extracted fields.
   *
   * @public
   */
  fieldStream?: AsyncIterable<GetLogObjectResponseStream> | undefined;
}

/**
 * @public
 */
export interface GetLogRecordRequest {
  /**
   * The pointer corresponding to the log event record you want to retrieve. You get this from the response of a `GetQueryResults` operation. In that response, the value of the `@ptr` field for a log event is the value to use as `logRecordPointer` to retrieve that complete log event record.
   *
   * @public
   */
  logRecordPointer: string | undefined;

  /**
   * Specify `true` to display the log event fields with all sensitive data unmasked and visible. The default is `false`.
   *
   * To use this operation with this parameter, you must be signed into an account with the `logs:Unmask` permission.
   *
   * @public
   */
  unmask?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLogRecordResponse {
  /**
   * The requested log event, as a JSON string.
   *
   * @public
   */
  logRecord?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLookupTableRequest {
  /**
   * The ARN of the lookup table to retrieve.
   *
   * @public
   */
  lookupTableArn: string | undefined;
}

/**
 * @public
 */
export interface GetLookupTableResponse {
  /**
   * The ARN of the lookup table.
   *
   * @public
   */
  lookupTableArn?: string | undefined;

  /**
   * The name of the lookup table.
   *
   * @public
   */
  lookupTableName?: string | undefined;

  /**
   * The description of the lookup table.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The full CSV content of the lookup table.
   *
   * @public
   */
  tableBody?: string | undefined;

  /**
   * The size of the lookup table in bytes.
   *
   * @public
   */
  sizeBytes?: number | undefined;

  /**
   * The time when the lookup table was last updated, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;

  /**
   * The ARN of the KMS key used to encrypt the lookup table data, if applicable.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * The ID number of the query.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The token for the next set of items to return. The token expires after 1 hour.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of log events to return in the response. The maximum is 10,000 log events per request. You can retrieve up to 100,000 log event results from a query by paginating with the `nextToken`.
   *
   * @public
   */
  maxItems?: number | undefined;
}

/**
 * Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.
 *
 * For more information about the fields that are generated by CloudWatch logs, see [Supported Logs and Discovered Fields](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html).
 *
 * @public
 */
export interface ResultField {
  /**
   * The log event field.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * The value of this field.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
 *
 * If the query involved log groups that have field index policies, the estimated number of skipped log events and the total bytes of those skipped log events are included. Using field indexes to skip log events in queries reduces scan volume and improves performance. For more information, see [Create field indexes to improve query performance and reduce scan volume](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html).
 *
 * @public
 */
export interface QueryStatistics {
  /**
   * The number of log events that matched the query string.
   *
   * @public
   */
  recordsMatched?: number | undefined;

  /**
   * The total number of log events scanned during the query.
   *
   * @public
   */
  recordsScanned?: number | undefined;

  /**
   * An estimate of the number of log events that were skipped when processing this query, because the query contained an indexed field. Skipping these entries lowers query costs and improves the query performance time. For more information about field indexes, see [PutIndexPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html).
   *
   * @public
   */
  estimatedRecordsSkipped?: number | undefined;

  /**
   * The total number of bytes in the log events scanned during the query.
   *
   * @public
   */
  bytesScanned?: number | undefined;

  /**
   * An estimate of the number of bytes in the log events that were skipped when processing this query, because the query contained an indexed field. Skipping these entries lowers query costs and improves the query performance time. For more information about field indexes, see [PutIndexPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html).
   *
   * @public
   */
  estimatedBytesSkipped?: number | undefined;

  /**
   * The number of log groups that were scanned by this query.
   *
   * @public
   */
  logGroupsScanned?: number | undefined;

  /**
   * The number of rows in the final query result set. This value represents the total number of output rows across all pages. For queries that include post-aggregation filters (such as `stats count(*) by field | filter count > threshold`), this value might be less than `recordsMatched`. It reflects only the rows that survived all operations in the query.
   *
   * @public
   */
  resultCount?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The log events that matched the query criteria during the most recent time it ran.
   *
   * The `results` value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of `field`/`value` pairs.
   *
   * @public
   */
  results?: ResultField[][] | undefined;

  /**
   * Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the scanned log events. These values reflect the full raw results of the query.
   *
   * @public
   */
  statistics?: QueryStatistics | undefined;

  /**
   * The status of the most recent running of the query. Possible values are `Cancelled`, `Complete`, `Failed`, `Running`, `Scheduled`, `Timeout`, and `Unknown`.
   *
   * Queries time out after 60 minutes of runtime. To avoid having your queries time out, reduce the time range being searched or partition your query into a number of queries.
   *
   * @public
   */
  status?: QueryStatus | undefined;

  /**
   * If you associated an KMS key with the CloudWatch Logs Insights query results in this account, this field displays the ARN of the key that's used to encrypt the query results when [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html) stores them.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * If there are more log events remaining in the results, the response includes a `nextToken`. You can use this token in a subsequent `GetQueryResults` request to get the next set of results. You can retrieve up to 100,000 log event results from a query by paginating with this token. This is only supported for Logs Insights QL and is currently not supported for PPL and SQL query languages.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetScheduledQueryRequest {
  /**
   * The ARN or name of the scheduled query to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetScheduledQueryResponse {
  /**
   * The ARN of the scheduled query.
   *
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * The name of the scheduled query.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the scheduled query.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The query language used by the scheduled query.
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The query string executed by the scheduled query.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The log groups queried by the scheduled query.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * The cron expression that defines when the scheduled query runs.
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The timezone used for evaluating the schedule expression.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * The time offset in seconds that defines the lookback period for the query.
   *
   * @public
   */
  startTimeOffset?: number | undefined;

  /**
   * The time offset in seconds that defines the end of the lookback period for the query.
   *
   * @public
   */
  endTimeOffset?: number | undefined;

  /**
   * Configuration for where query results are delivered.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The current state of the scheduled query.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * The schedule type of the scheduled query. Valid values are `CUSTOMER_MANAGED` and `AWS_MANAGED`.
   *
   * @public
   */
  scheduleType?: ScheduleType | undefined;

  /**
   * The timestamp when the scheduled query was last executed.
   *
   * @public
   */
  lastTriggeredTime?: number | undefined;

  /**
   * The status of the most recent execution of the scheduled query.
   *
   * @public
   */
  lastExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The start time for the scheduled query in Unix epoch format.
   *
   * @public
   */
  scheduleStartTime?: number | undefined;

  /**
   * The end time for the scheduled query in Unix epoch format.
   *
   * @public
   */
  scheduleEndTime?: number | undefined;

  /**
   * The ARN of the IAM role used to execute the query and deliver results.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The timestamp when the scheduled query was created.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The timestamp when the scheduled query was last updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface GetScheduledQueryHistoryRequest {
  /**
   * The ARN or name of the scheduled query to retrieve history for.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The start time for the history query in Unix epoch format.
   *
   * @public
   */
  startTime: number | undefined;

  /**
   * The end time for the history query in Unix epoch format.
   *
   * @public
   */
  endTime: number | undefined;

  /**
   * An array of execution statuses to filter the history results. Only executions with the specified statuses are returned.
   *
   * @public
   */
  executionStatuses?: ExecutionStatus[] | undefined;

  /**
   * The maximum number of history records to return. Valid range is 1 to 1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a destination where scheduled query results are processed, including processing status and any error messages.
 *
 * @public
 */
export interface ScheduledQueryDestination {
  /**
   * The type of destination for query results.
   *
   * @public
   */
  destinationType?: ScheduledQueryDestinationType | undefined;

  /**
   * The identifier for the destination where results are delivered.
   *
   * @public
   */
  destinationIdentifier?: string | undefined;

  /**
   * The processing status of the destination delivery.
   *
   * @public
   */
  status?: ActionStatus | undefined;

  /**
   * The identifier of the processed result at the destination.
   *
   * @public
   */
  processedIdentifier?: string | undefined;

  /**
   * Error message if destination processing failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * A record of a scheduled query execution, including execution status, timestamp, and destination processing results.
 *
 * @public
 */
export interface TriggerHistoryRecord {
  /**
   * The unique identifier for this query execution.
   *
   * @public
   */
  queryId?: string | undefined;

  /**
   * The execution status of the scheduled query run.
   *
   * @public
   */
  executionStatus?: ExecutionStatus | undefined;

  /**
   * The timestamp when the scheduled query execution was triggered.
   *
   * @public
   */
  triggeredTimestamp?: number | undefined;

  /**
   * Error message if the query execution failed.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Information about destination processing for this query execution.
   *
   * @public
   */
  destinations?: ScheduledQueryDestination[] | undefined;
}

/**
 * @public
 */
export interface GetScheduledQueryHistoryResponse {
  /**
   * The name of the scheduled query.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the scheduled query.
   *
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * An array of execution history records for the scheduled query.
   *
   * @public
   */
  triggerHistory?: TriggerHistoryRecord[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageTierPolicyRequest {}

/**
 * @public
 */
export interface GetStorageTierPolicyResponse {
  /**
   * The current storage tier for the account.
   *
   * @public
   */
  storageTier?: StorageTier | undefined;

  /**
   * The time when the storage tier policy was last updated, expressed as the number of milliseconds after `January 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface GetTransformerRequest {
  /**
   * Specify either the name or ARN of the log group to return transformer information for. If the log group is in a source account and you are using a monitoring account, you must use the log group ARN.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;
}

/**
 * This processor uses pattern matching to parse and structure unstructured data. This processor can also extract fields from log messages.
 *
 * For more information about this processor including examples, see [grok](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Configurable.html#CloudWatch-Logs-Transformation-Grok) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface Grok {
  /**
   * The path to the field in the log event that you want to parse. If you omit this value, the whole log message is parsed.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The grok pattern to match against the log event. For a list of supported grok patterns, see [Supported grok patterns](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Configurable.html#CloudWatch-Logs-Transformation-Grok).
   *
   * @public
   */
  match: string | undefined;
}

/**
 * This processor takes a list of objects that contain key fields, and converts them into a map of target keys.
 *
 * For more information about this processor including examples, see [listToMap](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-listToMap) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface ListToMap {
  /**
   * The key in the log event that has a list of objects that will be converted to a map.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The key of the field to be extracted as keys in the generated map
   *
   * @public
   */
  key: string | undefined;

  /**
   * If this is specified, the values that you specify in this parameter will be extracted from the `source` objects and put into the values of the generated map. Otherwise, original objects in the source list will be put into the values of the generated map.
   *
   * @public
   */
  valueKey?: string | undefined;

  /**
   * The key of the field that will hold the generated map
   *
   * @public
   */
  target?: string | undefined;

  /**
   * A Boolean value to indicate whether the list will be flattened into single items. Specify `true` to flatten the list. The default is `false`
   *
   * @public
   */
  flatten?: boolean | undefined;

  /**
   * If you set `flatten` to `true`, use `flattenedElement` to specify which element, `first` or `last`, to keep.
   *
   * You must specify this parameter if `flatten` is `true`
   *
   * @public
   */
  flattenedElement?: FlattenedElement | undefined;
}

/**
 * This processor converts a string to lowercase.
 *
 * For more information about this processor including examples, see [lowerCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-lowerCaseString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface LowerCaseString {
  /**
   * The array caontaining the keys of the fields to convert to lowercase.
   *
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * This object defines one key that will be moved with the [moveKey](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKey) processor.
 *
 * @public
 */
export interface MoveKeyEntry {
  /**
   * The key to move.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The key to move to.
   *
   * @public
   */
  target: string | undefined;

  /**
   * Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
   *
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * This processor moves a key from one field to another. The original key is deleted.
 *
 * For more information about this processor including examples, see [moveKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKeys) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface MoveKeys {
  /**
   * An array of objects, where each object contains the information about one key to move.
   *
   * @public
   */
  entries: MoveKeyEntry[] | undefined;
}

/**
 * This processor parses CloudFront vended logs, extract fields, and convert them into JSON format. Encoded field values are decoded. Values that are integers and doubles are treated as such. For more information about this processor including examples, see [parseCloudfront](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseCloudfront)
 *
 * For more information about CloudFront log format, see [Configure and use standard logs (access logs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html).
 *
 * If you use this processor, it must be the first processor in your transformer.
 *
 * @public
 */
export interface ParseCloudfront {
  /**
   * Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * This processor parses log events that are in JSON format. It can extract JSON key-value pairs and place them under a destination that you specify.
 *
 * Additionally, because you must have at least one parse-type processor in a transformer, you can use `ParseJSON` as that processor for JSON-format logs, so that you can also apply other processors, such as mutate processors, to these logs.
 *
 * For more information about this processor including examples, see [parseJSON](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseJSON) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface ParseJSON {
  /**
   * Path to the field in the log event that will be parsed. Use dot notation to access child fields. For example, `store.book`
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The location to put the parsed key value pair into. If you omit this parameter, it is placed under the root node.
   *
   * @public
   */
  destination?: string | undefined;
}

/**
 * This processor parses a specified field in the original log event into key-value pairs.
 *
 * For more information about this processor including examples, see [parseKeyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseKeyValue) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface ParseKeyValue {
  /**
   * Path to the field in the log event that will be parsed. Use dot notation to access child fields. For example, `store.book`
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The destination field to put the extracted key-value pairs into
   *
   * @public
   */
  destination?: string | undefined;

  /**
   * The field delimiter string that is used between key-value pairs in the original log events. If you omit this, the ampersand `&` character is used.
   *
   * @public
   */
  fieldDelimiter?: string | undefined;

  /**
   * The delimiter string to use between the key and value in each pair in the transformed log event.
   *
   * If you omit this, the equal `=` character is used.
   *
   * @public
   */
  keyValueDelimiter?: string | undefined;

  /**
   * If you want to add a prefix to all transformed keys, specify it here.
   *
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * A value to insert into the value field in the result, when a key-value pair is not successfully split.
   *
   * @public
   */
  nonMatchValue?: string | undefined;

  /**
   * Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
   *
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * Use this processor to parse RDS for PostgreSQL vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parsePostGres](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres).
 *
 * For more information about RDS for PostgreSQL log format, see [RDS for PostgreSQL database log filesTCP flag sequence](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.Concepts.PostgreSQL.Log_Format.log-line-prefix).
 *
 * > **Important:** If you use this processor, it must be the first processor in your transformer.
 *
 * @public
 */
export interface ParsePostgres {
  /**
   * Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * Use this processor to parse Route 53 vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parseRoute53](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseRoute53).
 *
 * > **Important:** If you use this processor, it must be the first processor in your transformer.
 *
 * @public
 */
export interface ParseRoute53 {
  /**
   * Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * This processor converts logs into [Open Cybersecurity Schema Framework (OCSF)](https://ocsf.io) events.
 *
 * For more information about this processor including examples, see [parseToOCSF](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseToOCSF) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface ParseToOCSF {
  /**
   * The path to the field in the log event that you want to parse. If you omit this value, the whole log message is parsed.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * Specify the service or process that produces the log events that will be converted with this processor.
   *
   * @public
   */
  eventSource: EventSource | undefined;

  /**
   * Specify which version of the OCSF schema to use for the transformed log events.
   *
   * @public
   */
  ocsfVersion: OCSFVersion | undefined;

  /**
   * The version of the OCSF mapping to use for parsing log data.
   *
   * @public
   */
  mappingVersion?: string | undefined;
}

/**
 * Use this processor to parse Amazon VPC vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message.
 *
 * This processor doesn't support custom log formats, such as NAT gateway logs. For more information about custom log formats in Amazon VPC, see [parseVPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-tcp-flag) For more information about this processor including examples, see [parseVPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseVPC).
 *
 * > **Important:** If you use this processor, it must be the first processor in your transformer.
 *
 * @public
 */
export interface ParseVPC {
  /**
   * Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * Use this processor to parse WAF vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parseWAF](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres).
 *
 * For more information about WAF log format, see [Log examples for web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging-examples.html).
 *
 * > **Important:** If you use this processor, it must be the first processor in your transformer.
 *
 * @public
 */
export interface ParseWAF {
  /**
   * Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * This object defines one key that will be renamed with the [renameKey](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKey) processor.
 *
 * @public
 */
export interface RenameKeyEntry {
  /**
   * The key to rename
   *
   * @public
   */
  key: string | undefined;

  /**
   * The string to use for the new key name
   *
   * @public
   */
  renameTo: string | undefined;

  /**
   * Specifies whether to overwrite the existing value if the destination key already exists. The default is `false`
   *
   * @public
   */
  overwriteIfExists?: boolean | undefined;
}

/**
 * Use this processor to rename keys in a log event.
 *
 * For more information about this processor including examples, see [renameKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKeys) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface RenameKeys {
  /**
   * An array of `RenameKeyEntry` objects, where each object contains the information about a single key to rename.
   *
   * @public
   */
  entries: RenameKeyEntry[] | undefined;
}

/**
 * This object defines one log field that will be split with the [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString) processor.
 *
 * @public
 */
export interface SplitStringEntry {
  /**
   * The key of the field to split.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The separator characters to split the string entry on.
   *
   * @public
   */
  delimiter: string | undefined;
}

/**
 * Use this processor to split a field into an array of strings using a delimiting character.
 *
 * For more information about this processor including examples, see [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface SplitString {
  /**
   * An array of `SplitStringEntry` objects, where each object contains the information about one field to split.
   *
   * @public
   */
  entries: SplitStringEntry[] | undefined;
}

/**
 * This object defines one log field key that will be replaced using the [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString) processor.
 *
 * @public
 */
export interface SubstituteStringEntry {
  /**
   * The key to modify
   *
   * @public
   */
  source: string | undefined;

  /**
   * The regular expression string to be replaced. Special regex characters such as [ and ] must be escaped using \\ when using double quotes and with \ when using single quotes. For more information, see [Class Pattern](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Pattern.html) on the Oracle web site.
   *
   * @public
   */
  from: string | undefined;

  /**
   * The string to be substituted for each match of `from`
   *
   * @public
   */
  to: string | undefined;
}

/**
 * This processor matches a key’s value against a regular expression and replaces all matches with a replacement string.
 *
 * For more information about this processor including examples, see [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface SubstituteString {
  /**
   * An array of objects, where each object contains the information about one key to match and replace.
   *
   * @public
   */
  entries: SubstituteStringEntry[] | undefined;
}

/**
 * Use this processor to remove leading and trailing whitespace.
 *
 * For more information about this processor including examples, see [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface TrimString {
  /**
   * The array containing the keys of the fields to trim.
   *
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * This object defines one value type that will be converted using the [typeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-typeConverter) processor.
 *
 * @public
 */
export interface TypeConverterEntry {
  /**
   * The key with the value that is to be converted to a different type.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The type to convert the field value to. Valid values are `integer`, `double`, `string` and `boolean`.
   *
   * @public
   */
  type: Type | undefined;
}

/**
 * Use this processor to convert a value type associated with the specified key to the specified type. It's a casting processor that changes the types of the specified fields. Values can be converted into one of the following datatypes: `integer`, `double`, `string` and `boolean`.
 *
 * For more information about this processor including examples, see [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface TypeConverter {
  /**
   * An array of `TypeConverterEntry` objects, where each object contains the information about one field to change the type of.
   *
   * @public
   */
  entries: TypeConverterEntry[] | undefined;
}

/**
 * This processor converts a string field to uppercase.
 *
 * For more information about this processor including examples, see [upperCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-upperCaseString) in the *CloudWatch Logs User Guide*.
 *
 * @public
 */
export interface UpperCaseString {
  /**
   * The array of containing the keys of the field to convert to uppercase.
   *
   * @public
   */
  withKeys: string[] | undefined;
}

/**
 * This structure contains the information about one processor in a log transformer.
 *
 * @public
 */
export interface Processor {
  /**
   * Use this parameter to include the [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKeys) processor in your transformer.
   *
   * @public
   */
  addKeys?: AddKeys | undefined;

  /**
   * Use this parameter to include the [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-copyValue) processor in your transformer.
   *
   * @public
   */
  copyValue?: CopyValue | undefined;

  /**
   * Use this parameter to include the [CSV](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-CSV) processor in your transformer.
   *
   * @public
   */
  csv?: CSV | undefined;

  /**
   * Use this parameter to include the [datetimeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-datetimeConverter) processor in your transformer.
   *
   * @public
   */
  dateTimeConverter?: DateTimeConverter | undefined;

  /**
   * Use this parameter to include the [deleteKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-deleteKeys) processor in your transformer.
   *
   * @public
   */
  deleteKeys?: DeleteKeys | undefined;

  /**
   * Use this parameter to include the [grok](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-grok) processor in your transformer.
   *
   * @public
   */
  grok?: Grok | undefined;

  /**
   * Use this parameter to include the [listToMap](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-listToMap) processor in your transformer.
   *
   * @public
   */
  listToMap?: ListToMap | undefined;

  /**
   * Use this parameter to include the [lowerCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-lowerCaseString) processor in your transformer.
   *
   * @public
   */
  lowerCaseString?: LowerCaseString | undefined;

  /**
   * Use this parameter to include the [moveKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKeys) processor in your transformer.
   *
   * @public
   */
  moveKeys?: MoveKeys | undefined;

  /**
   * Use this parameter to include the [parseCloudfront](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseCloudfront) processor in your transformer.
   *
   * If you use this processor, it must be the first processor in your transformer.
   *
   * @public
   */
  parseCloudfront?: ParseCloudfront | undefined;

  /**
   * Use this parameter to include the [parseJSON](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseJSON) processor in your transformer.
   *
   * @public
   */
  parseJSON?: ParseJSON | undefined;

  /**
   * Use this parameter to include the [parseKeyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseKeyValue) processor in your transformer.
   *
   * @public
   */
  parseKeyValue?: ParseKeyValue | undefined;

  /**
   * Use this parameter to include the [parseRoute53](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseRoute53) processor in your transformer.
   *
   * If you use this processor, it must be the first processor in your transformer.
   *
   * @public
   */
  parseRoute53?: ParseRoute53 | undefined;

  /**
   * Use this parameter to convert logs into Open Cybersecurity Schema (OCSF) format.
   *
   * @public
   */
  parseToOCSF?: ParseToOCSF | undefined;

  /**
   * Use this parameter to include the [parsePostGres](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres) processor in your transformer.
   *
   * If you use this processor, it must be the first processor in your transformer.
   *
   * @public
   */
  parsePostgres?: ParsePostgres | undefined;

  /**
   * Use this parameter to include the [parseVPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseVPC) processor in your transformer.
   *
   * If you use this processor, it must be the first processor in your transformer.
   *
   * @public
   */
  parseVPC?: ParseVPC | undefined;

  /**
   * Use this parameter to include the [parseWAF](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseWAF) processor in your transformer.
   *
   * If you use this processor, it must be the first processor in your transformer.
   *
   * @public
   */
  parseWAF?: ParseWAF | undefined;

  /**
   * Use this parameter to include the [renameKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKeys) processor in your transformer.
   *
   * @public
   */
  renameKeys?: RenameKeys | undefined;

  /**
   * Use this parameter to include the [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-splitString) processor in your transformer.
   *
   * @public
   */
  splitString?: SplitString | undefined;

  /**
   * Use this parameter to include the [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-substituteString) processor in your transformer.
   *
   * @public
   */
  substituteString?: SubstituteString | undefined;

  /**
   * Use this parameter to include the [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-trimString) processor in your transformer.
   *
   * @public
   */
  trimString?: TrimString | undefined;

  /**
   * Use this parameter to include the [typeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-typeConverter) processor in your transformer.
   *
   * @public
   */
  typeConverter?: TypeConverter | undefined;

  /**
   * Use this parameter to include the [upperCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-upperCaseString) processor in your transformer.
   *
   * @public
   */
  upperCaseString?: UpperCaseString | undefined;
}

/**
 * @public
 */
export interface GetTransformerResponse {
  /**
   * The ARN of the log group that you specified in your request.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The creation time of the transformer, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The date and time when this transformer was most recently modified, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  lastModifiedTime?: number | undefined;

  /**
   * This sructure contains the configuration of the requested transformer.
   *
   * @public
   */
  transformerConfig?: Processor[] | undefined;
}

/**
 * Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
 *
 * @public
 */
export interface InputLogEvent {
  /**
   * The time the event occurred, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  timestamp: number | undefined;

  /**
   * The raw event message. Each log event can be no larger than 1 MB.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * This structure contains information about one CloudWatch Logs integration. This structure is returned by a [ListIntegrations](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListIntegrations.html) operation.
 *
 * @public
 */
export interface IntegrationSummary {
  /**
   * The name of this integration.
   *
   * @public
   */
  integrationName?: string | undefined;

  /**
   * The type of integration. Integrations with OpenSearch Service have the type `OPENSEARCH`.
   *
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * The current status of this integration.
   *
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListAggregateLogGroupSummariesRequest {
  /**
   * When `includeLinkedAccounts` is set to `true`, use this parameter to specify the list of accounts to search. You can specify as many as 20 account IDs in the array.
   *
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * If you are using a monitoring account, set this to `true` to have the operation return log groups in the accounts listed in `accountIdentifiers`.
   *
   * If this parameter is set to `true` and `accountIdentifiers` contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account.
   *
   * The default for this parameter is `false`.
   *
   * @public
   */
  includeLinkedAccounts?: boolean | undefined;

  /**
   * Filters the results by log group class to include only log groups of the specified class.
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * Use this parameter to limit the returned log groups to only those with names that match the pattern that you specify. This parameter is a regular expression that can match prefixes and substrings, and supports wildcard matching and matching multiple patterns, as in the following examples.
   *
   * - Use `^` to match log group names by prefix.
   * - For a substring match, specify the string to match. All matches are case sensitive
   * - To match multiple patterns, separate them with a `|` as in the example `^/aws/lambda|discovery`
   *
   * You can specify as many as five different regular expression patterns in this field, each of which must be between 3 and 24 characters. You can include the `^` symbol as many as five times, and include the `|` symbol as many as four times.
   *
   * @public
   */
  logGroupNamePattern?: string | undefined;

  /**
   * Filters the results by data source characteristics to include only log groups associated with the specified data sources.
   *
   * @public
   */
  dataSources?: DataSourceFilter[] | undefined;

  /**
   * Specifies how to group the log groups in the summary.
   *
   * @public
   */
  groupBy: ListAggregateLogGroupSummariesGroupBy | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of aggregated summaries to return. If you omit this parameter, the default is up to 50 aggregated summaries.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface ListAggregateLogGroupSummariesResponse {
  /**
   * The list of aggregate log group summaries grouped by the specified data source characteristics.
   *
   * @public
   */
  aggregateLogGroupSummaries?: AggregateLogGroupSummary[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesRequest {
  /**
   * Use this to optionally limit the results to only the anomalies found by a certain anomaly detector.
   *
   * @public
   */
  anomalyDetectorArn?: string | undefined;

  /**
   * You can specify this parameter if you want to the operation to return only anomalies that are currently either suppressed or unsuppressed.
   *
   * @public
   */
  suppressionState?: SuppressionState | undefined;

  /**
   * The maximum number of items to return. If you don't specify a value, the default maximum value of 50 items is used.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnomaliesResponse {
  /**
   * An array of structures, where each structure contains information about one anomaly that a log anomaly detector has found.
   *
   * @public
   */
  anomalies?: Anomaly[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsRequest {
  /**
   * To limit the results to integrations that start with a certain name prefix, specify that name prefix here.
   *
   * @public
   */
  integrationNamePrefix?: string | undefined;

  /**
   * To limit the results to integrations of a certain type, specify that type here.
   *
   * @public
   */
  integrationType?: IntegrationType | undefined;

  /**
   * To limit the results to integrations with a certain status, specify that status here.
   *
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsResponse {
  /**
   * An array, where each object in the array contains information about one CloudWatch Logs integration in this account.
   *
   * @public
   */
  integrationSummaries?: IntegrationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsRequest {
  /**
   * Use this to optionally filter the results to only include anomaly detectors that are associated with the specified log group.
   *
   * @public
   */
  filterLogGroupArn?: string | undefined;

  /**
   * The maximum number of items to return. If you don't specify a value, the default maximum value of 50 items is used.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogAnomalyDetectorsResponse {
  /**
   * An array of structures, where each structure in the array contains information about one anomaly detector.
   *
   * @public
   */
  anomalyDetectors?: AnomalyDetector[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A tag filter that specifies a tag key and optional tag values for filtering log groups by tags.
 *
 * @public
 */
export interface TagFilter {
  /**
   * The tag key to filter on.
   *
   * @public
   */
  key: string | undefined;

  /**
   * An optional list of tag values to filter on.
   *
   * - If you specify a filter that contains more than one value for a key, the response returns log groups that match any of the specified values for that key.
   * - If you don't specify values, the response returns all log groups that are tagged with that key, with any or no value.
   * - Use `*` for wildcard matching. For example, `prod*` matches values that start with `prod`.
   * - Use `!` as a prefix for negation. For example, `!prod` matches values that are not `prod`.
   * - Exact matching and negation are case-sensitive. Wildcard matching is case-insensitive.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsRequest {
  /**
   * Use this parameter to limit the returned log groups to only those with names that match the pattern that you specify. This parameter is a regular expression that can match prefixes and substrings, and supports wildcard matching and matching multiple patterns, as in the following examples.
   *
   * - Use `^` to match log group names by prefix.
   * - For a substring match, specify the string to match. All matches are case sensitive
   * - To match multiple patterns, separate them with a `|` as in the example `^/aws/lambda|discovery`
   *
   * You can specify as many as five different regular expression patterns in this field, each of which must be between 3 and 24 characters. You can include the `^` symbol as many as five times, and include the `|` symbol as many as four times.
   *
   * @public
   */
  logGroupNamePattern?: string | undefined;

  /**
   * Use this parameter to limit the results to only those log groups in the specified log group class. If you omit this parameter, log groups of all classes can be returned.
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;

  /**
   * If you are using a monitoring account, set this to `true` to have the operation return log groups in the accounts listed in `accountIdentifiers`.
   *
   * If this parameter is set to `true` and `accountIdentifiers` contains a null value, the operation returns all log groups in the monitoring account and all log groups in all source accounts that are linked to the monitoring account.
   *
   * The default for this parameter is `false`.
   *
   * @public
   */
  includeLinkedAccounts?: boolean | undefined;

  /**
   * When `includeLinkedAccounts` is set to `true`, use this parameter to specify the list of accounts to search. You can specify as many as 20 account IDs in the array.
   *
   * @public
   */
  accountIdentifiers?: string[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of log groups to return. If you omit this parameter, the default is up to 50 log groups.
   *
   * @public
   */
  limit?: number | undefined;

  /**
   * An array of data source filters to filter log groups by their associated data sources. You can filter by data source name, type, or both. Multiple filters within the same dimension are combined with OR logic, while filters across different dimensions are combined with AND logic.
   *
   * @public
   */
  dataSources?: DataSourceFilter[] | undefined;

  /**
   * An array of field index names to filter log groups that have specific field indexes. Only log groups containing all specified field indexes are returned. You can specify 1 to 20 field index names, each with 1 to 512 characters.
   *
   * @public
   */
  fieldIndexNames?: string[] | undefined;

  /**
   * An array of tag filters to return only log groups that have specific tags. Multiple filters are combined with AND logic.
   *
   * @public
   */
  logGroupTags?: TagFilter[] | undefined;
}

/**
 * This structure contains information about one log group in your account.
 *
 * @public
 */
export interface LogGroupSummary {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the log group.
   *
   * @public
   */
  logGroupArn?: string | undefined;

  /**
   * The log group class for this log group. For details about the features supported by each log group class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
   *
   * @public
   */
  logGroupClass?: LogGroupClass | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsResponse {
  /**
   * An array of structures, where each structure contains the information about one log group.
   *
   * @public
   */
  logGroups?: LogGroupSummary[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsForQueryRequest {
  /**
   * The ID of the query to use. This query ID is from the response to your [StartQuery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html) operation.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Limits the number of returned log groups to the specified number.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLogGroupsForQueryResponse {
  /**
   * An array of the names and ARNs of the log groups that were processed in the query.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledQueriesRequest {
  /**
   * The maximum number of scheduled queries to return. Valid range is 1 to 1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter scheduled queries by state. Valid values are `ENABLED` and `DISABLED`. If not specified, all scheduled queries are returned.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * Filter scheduled queries by schedule type. Valid values are `CUSTOMER_MANAGED` and `AWS_MANAGED`. If not specified, scheduled queries of all schedule types are returned.
   *
   * @public
   */
  scheduleType?: ScheduleType | undefined;
}

/**
 * Summary information about a scheduled query, including basic configuration and execution status.
 *
 * @public
 */
export interface ScheduledQuerySummary {
  /**
   * The ARN of the scheduled query.
   *
   * @public
   */
  scheduledQueryArn?: string | undefined;

  /**
   * The name of the scheduled query.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current state of the scheduled query.
   *
   * @public
   */
  state?: ScheduledQueryState | undefined;

  /**
   * The schedule type of the scheduled query. Valid values are `CUSTOMER_MANAGED` and `AWS_MANAGED`.
   *
   * @public
   */
  scheduleType?: ScheduleType | undefined;

  /**
   * The timestamp when the scheduled query was last executed.
   *
   * @public
   */
  lastTriggeredTime?: number | undefined;

  /**
   * The status of the most recent execution.
   *
   * @public
   */
  lastExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The cron expression that defines when the scheduled query runs.
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The timezone used for evaluating the schedule expression.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * Configuration for where query results are delivered.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The timestamp when the scheduled query was created.
   *
   * @public
   */
  creationTime?: number | undefined;

  /**
   * The timestamp when the scheduled query was last updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface ListScheduledQueriesResponse {
  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of scheduled query summary information.
   *
   * @public
   */
  scheduledQueries?: ScheduledQuerySummary[] | undefined;
}

/**
 * @public
 */
export interface ListSourcesForS3TableIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) of the S3 Table Integration to list associations for.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The maximum number of associations to return in a single call. Valid range is 1 to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a data source association with an S3 Table Integration, including its status and metadata.
 *
 * @public
 */
export interface S3TableIntegrationSource {
  /**
   * The unique identifier for this data source association.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The data source associated with the S3 Table Integration.
   *
   * @public
   */
  dataSource?: DataSource | undefined;

  /**
   * The current status of the data source association.
   *
   * @public
   */
  status?: S3TableIntegrationSourceStatus | undefined;

  /**
   * Additional information about the status of the data source association.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the data source association was created.
   *
   * @public
   */
  createdTimeStamp?: number | undefined;

  /**
   * The identifier of the parent data source for this association.
   *
   * @public
   */
  parentSourceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListSourcesForS3TableIntegrationResponse {
  /**
   * The list of data source associations for the specified S3 Table Integration.
   *
   * @public
   */
  sources?: S3TableIntegrationSource[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSyslogConfigurationsRequest {
  /**
   * The name or ARN of the log group to filter syslog configurations for.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The ID of the VPC endpoint to filter syslog configurations for.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The token for the next set of items to return. You received this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of syslog configurations to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about a syslog configuration associated with a log group.
 *
 * @public
 */
export interface SyslogConfiguration {
  /**
   * The ARN of the log group associated with this syslog configuration.
   *
   * @public
   */
  logGroupArn?: string | undefined;

  /**
   * The source type for the syslog configuration.
   *
   * @public
   */
  sourceType?: SyslogSourceType | undefined;

  /**
   * The ID of the VPC endpoint used for syslog ingestion.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The time when the syslog configuration was created, expressed as the number of milliseconds after `Jan 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  createdAt?: number | undefined;
}

/**
 * @public
 */
export interface ListSyslogConfigurationsResponse {
  /**
   * The list of syslog configurations.
   *
   * @public
   */
  syslogConfigurations?: SyslogConfiguration[] | undefined;

  /**
   * The token for the next set of items to return. The token expires after 24 hours.
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
   * The ARN of the resource that you want to view tags for.
   *
   * The ARN format of a log group is `arn:aws:logs:Region:account-id:log-group:log-group-name`
   *
   * The ARN format of a destination is `arn:aws:logs:Region:account-id:destination:destination-name`
   *
   * For more information about ARN format, see [CloudWatch Logs resources and operations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html).
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
   * The list of tags associated with the requested resource.>
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @deprecated Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse.
 * @public
 */
export interface ListTagsLogGroupRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * @deprecated Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse.
 * @public
 */
export interface ListTagsLogGroupResponse {
  /**
   * The tags for the log group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * This object contains the information for one log event returned in a Live Tail stream.
 *
 * @public
 */
export interface LiveTailSessionLogEvent {
  /**
   * The name of the log stream that ingested this log event.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The name or ARN of the log group that ingested this log event.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The log event message text.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The timestamp specifying when this log event was created.
   *
   * @public
   */
  timestamp?: number | undefined;

  /**
   * The timestamp specifying when this log event was ingested into the log group.
   *
   * @public
   */
  ingestionTime?: number | undefined;
}

/**
 * This object contains the metadata for one `LiveTailSessionUpdate` structure. It indicates whether that update includes only a sample of 500 log events out of a larger number of ingested log events, or if it contains all of the matching log events ingested during that second of time.
 *
 * @public
 */
export interface LiveTailSessionMetadata {
  /**
   * If this is `true`, then more than 500 log events matched the request for this update, and the `sessionResults` includes a sample of 500 of those events.
   *
   * If this is `false`, then 500 or fewer log events matched the request for this update, so no sampling was necessary. In this case, the `sessionResults` array includes all log events that matched your request during this time.
   *
   * @public
   */
  sampled?: boolean | undefined;
}

/**
 * This object contains information about this Live Tail session, including the log groups included and the log stream filters, if any.
 *
 * @public
 */
export interface LiveTailSessionStart {
  /**
   * The unique ID generated by CloudWatch Logs to identify this Live Tail session request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The unique ID generated by CloudWatch Logs to identify this Live Tail session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * An array of the names and ARNs of the log groups included in this Live Tail session.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * If your StartLiveTail operation request included a `logStreamNames` parameter that filtered the session to only include certain log streams, these streams are listed here.
   *
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * If your StartLiveTail operation request included a `logStreamNamePrefixes` parameter that filtered the session to only include log streams that have names that start with certain prefixes, these prefixes are listed here.
   *
   * @public
   */
  logStreamNamePrefixes?: string[] | undefined;

  /**
   * An optional pattern to filter the results to include only log events that match the pattern. For example, a filter pattern of `error 404` displays only log events that include both `error` and `404`.
   *
   * For more information about filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
   *
   * @public
   */
  logEventFilterPattern?: string | undefined;
}

/**
 * This object contains the log events and metadata for a Live Tail session.
 *
 * @public
 */
export interface LiveTailSessionUpdate {
  /**
   * This object contains the session metadata for a Live Tail session.
   *
   * @public
   */
  sessionMetadata?: LiveTailSessionMetadata | undefined;

  /**
   * An array, where each member of the array includes the information for one log event in the Live Tail session.
   *
   * A `sessionResults` array can include as many as 500 log events. If the number of log events matching the request exceeds 500 per second, the log events are sampled down to 500 log events to be included in each `sessionUpdate` structure.
   *
   * @public
   */
  sessionResults?: LiveTailSessionLogEvent[] | undefined;
}

/**
 * @public
 */
export interface PutAccountPolicyRequest {
  /**
   * A name for the policy. This must be unique within the account and cannot start with `aws/`.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * Specify the policy, in JSON.
   *
   * **Data protection policy**
   *
   * A data protection policy must include two JSON blocks:
   *
   * - The first block must include both a `DataIdentifer` array and an `Operation` property with an `Audit` action. The `DataIdentifer` array lists the types of sensitive data that you want to mask. For more information about the available options, see [Types of data that you can mask](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html).
   *
   *   The `Operation` property with an `Audit` action is required to find the sensitive data terms. This `Audit` action must contain a `FindingsDestination` object. You can optionally use that `FindingsDestination` object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Firehose streams, and S3 buckets, they must already exist.
   * - The second block must include both a `DataIdentifer` array and an `Operation` property with an `Deidentify` action. The `DataIdentifer` array must exactly match the `DataIdentifer` array in the first block of the policy.
   *
   *   The `Operation` property with the `Deidentify` action is what actually masks the data, and it must contain the `"MaskConfig": \{\}` object. The `"MaskConfig": \{\}` object must be empty.
   *
   * For an example data protection policy, see the **Examples** section on this page.
   *
   * > **Important:** The contents of the two `DataIdentifer` arrays must match exactly.
   *
   * In addition to the two JSON blocks, the `policyDocument` can also include `Name`, `Description`, and `Version` fields. The `Name` is different than the operation's `policyName` parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.
   *
   * The JSON specified in `policyDocument` can be up to 30,720 characters long.
   *
   * **Subscription filter policy**
   *
   * A subscription filter policy can include the following attributes in a JSON block:
   *
   * - **DestinationArn** The ARN of the destination to deliver log events to. Supported destinations are:
   *
   *   - An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.
   *   - An Firehose data stream in the same account as the subscription policy, for same-account delivery.
   *   - A Lambda function in the same account as the subscription policy, for same-account delivery.
   *   - A logical destination in a different account created with [PutDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html), for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.
   * - **RoleArn** The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
   * - **FilterPattern** A filter pattern for subscribing to a filtered stream of log events.
   * - **Distribution** The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to `Random` for a more even distribution. This property is only applicable when the destination is an Kinesis Data Streams data stream.
   *
   * **Transformer policy**
   *
   * A transformer policy must include one JSON block with the array of processors and their configurations. For more information about available processors, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors).
   *
   * **Field index policy**
   *
   * A field index filter policy can include the following attribute in a JSON block:
   *
   * - **Fields** The array of field indexes to create.
   * - **FieldsV2** The object of field indexes to create along with it's type.
   *
   * It must contain at least one field index.
   *
   * The following is an example of an index policy document that creates indexes with different types.
   *
   * `"policyDocument": "\{ \"Fields\": [ \"TransactionId\" ], \"FieldsV2\": \{\"RequestId\": \{\"type\": \"FIELD_INDEX\"\}, \"APIName\": \{\"type\": \"FACET\"\}, \"StatusCode\": \{\"type\": \"FACET\"\}\}\}"`
   *
   * You can use `FieldsV2` to specify the type for each field. Supported types are `FIELD_INDEX` and `FACET`. Field names within `Fields` and `FieldsV2` must be mutually exclusive.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * The type of policy that you're creating or updating.
   *
   * @public
   */
  policyType: PolicyType | undefined;

  /**
   * Currently the only valid value for this parameter is `ALL`, which specifies that the data protection policy applies to all log groups in the account. If you omit this parameter, the default of `ALL` is used.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * Use this parameter to apply the new policy to a subset of log groups in the account or a data source name and type combination.
   *
   * Specifying `selectionCriteria` is valid only when you specify `SUBSCRIPTION_FILTER_POLICY`, `FIELD_INDEX_POLICY` or `TRANSFORMER_POLICY`for `policyType`.
   *
   * - If `policyType` is `SUBSCRIPTION_FILTER_POLICY`, the only supported `selectionCriteria` filter is `LogGroupName NOT IN []`
   * - If `policyType` is `TRANSFORMER_POLICY`, the only supported `selectionCriteria` filter is `LogGroupNamePrefix`
   * - If `policyType` is `FIELD_INDEX_POLICY`, the supported `selectionCriteria` filters are:
   *
   *   - `LogGroupNamePrefix`
   *   - `DataSourceName` AND `DataSourceType`
   *
   *   When you specify `selectionCriteria` for a field index policy you can use either `LogGroupNamePrefix` by itself or `DataSourceName` and `DataSourceType` together.
   *
   * The `selectionCriteria` string can be up to 25KB in length. The length is determined by using its UTF-8 bytes.
   *
   * Using the `selectionCriteria` parameter with `SUBSCRIPTION_FILTER_POLICY` is useful to help prevent infinite loops. For more information, see [Log recursion prevention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions-recursion-prevention.html).
   *
   * @public
   */
  selectionCriteria?: string | undefined;

  /**
   * Specifies whether to preview the impact of the policy without creating or updating it. If you specify `true`, CloudWatch Logs validates the request, does not save the policy, and returns the estimated impact in `dryRunResult` instead of `accountPolicy`. The default is `false`.
   *
   * Specifying `dryRun` is valid only when you specify `RETENTION_POLICY` for `policyType`. Only one dry run can be in progress for an account at a time.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface PutAccountPolicyResponse {
  /**
   * The account policy that you created.
   *
   * @public
   */
  accountPolicy?: AccountPolicy | undefined;

  /**
   * The estimated impact of the policy on log groups in the account. This field is returned only when the request specifies `dryRun` as `true`.
   *
   * @public
   */
  dryRunResult?: DryRunResult | undefined;
}

/**
 * @public
 */
export interface PutBearerTokenAuthenticationRequest {
  /**
   * The name or ARN of the log group.
   *
   * Type: String
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512.
   *
   * Pattern: `[\.\-_/#A-Za-z0-9]+`
   *
   * Required: Yes
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * Whether to enable bearer token authentication.
   *
   * Type: Boolean
   *
   * Required: Yes
   *
   * @public
   */
  bearerTokenAuthenticationEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyRequest {
  /**
   * Specify either the log group name or log group ARN.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * Specify the data protection policy, in JSON.
   *
   * This policy must include two JSON blocks:
   *
   * - The first block must include both a `DataIdentifer` array and an `Operation` property with an `Audit` action. The `DataIdentifer` array lists the types of sensitive data that you want to mask. For more information about the available options, see [Types of data that you can mask](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-types.html).
   *
   *   The `Operation` property with an `Audit` action is required to find the sensitive data terms. This `Audit` action must contain a `FindingsDestination` object. You can optionally use that `FindingsDestination` object to list one or more destinations to send audit findings to. If you specify destinations such as log groups, Firehose streams, and S3 buckets, they must already exist.
   * - The second block must include both a `DataIdentifer` array and an `Operation` property with an `Deidentify` action. The `DataIdentifer` array must exactly match the `DataIdentifer` array in the first block of the policy.
   *
   *   The `Operation` property with the `Deidentify` action is what actually masks the data, and it must contain the `"MaskConfig": \{\}` object. The `"MaskConfig": \{\}` object must be empty.
   *
   * For an example data protection policy, see the **Examples** section on this page.
   *
   * > **Important:** The contents of the two `DataIdentifer` arrays must match exactly.
   *
   * In addition to the two JSON blocks, the `policyDocument` can also include `Name`, `Description`, and `Version` fields. The `Name` is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.
   *
   * The JSON specified in `policyDocument` can be up to 30,720 characters.
   *
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutDataProtectionPolicyResponse {
  /**
   * The log group name or ARN that you specified in your request.
   *
   * @public
   */
  logGroupIdentifier?: string | undefined;

  /**
   * The data protection policy used for this log group.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The date and time that this policy was most recently updated.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationRequest {
  /**
   * A name for this delivery destination. This name must be unique for all delivery destinations in your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The format for the logs that this delivery destination will receive.
   *
   * @public
   */
  outputFormat?: OutputFormat | undefined;

  /**
   * A structure that contains the ARN of the Amazon Web Services resource that will receive the logs.
   *
   * > **Note:** `deliveryDestinationConfiguration` is required for CloudWatch Logs, Amazon S3, Firehose log delivery destinations and not required for X-Ray trace delivery destinations. `deliveryDestinationType` is needed for X-Ray trace delivery destinations but not required for other logs delivery destinations.
   *
   * @public
   */
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration | undefined;

  /**
   * The type of delivery destination. This parameter specifies the target service where log data will be delivered. Valid values include:
   *
   * - `S3` - Amazon S3 for long-term storage and analytics
   * - `CWL` - CloudWatch Logs for centralized log management
   * - `FH` - Amazon Kinesis Data Firehose for real-time data streaming
   * - `XRAY` - Amazon Web Services X-Ray for distributed tracing and application monitoring
   *
   * The delivery destination type determines the format and configuration options available for log delivery.
   *
   * @public
   */
  deliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The ARN of an IAM role in your account that CloudWatch Logs assumes to deliver to this delivery destination. The trust policy of the role must allow CloudWatch Logs to assume it. This parameter is supported only for X-Ray trace delivery destinations.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * An optional list of key-value pairs to associate with the resource.
   *
   * For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationResponse {
  /**
   * A structure containing information about the delivery destination that you just created or updated.
   *
   * @public
   */
  deliveryDestination?: DeliveryDestination | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyRequest {
  /**
   * The name of the delivery destination to assign this policy to.
   *
   * @public
   */
  deliveryDestinationName: string | undefined;

  /**
   * The contents of the policy.
   *
   * @public
   */
  deliveryDestinationPolicy: string | undefined;
}

/**
 * @public
 */
export interface PutDeliveryDestinationPolicyResponse {
  /**
   * The contents of the policy that you just created.
   *
   * @public
   */
  policy?: Policy | undefined;
}

/**
 * @public
 */
export interface PutDeliverySourceRequest {
  /**
   * A name for this delivery source. This name must be unique for all delivery sources in your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the Amazon Web Services resource that is generating and sending logs. For example, `arn:aws:workmail:us-east-1:123456789012:organization/m-1234EXAMPLEabcd1234abcd1234abcd1234`
   *
   * For the `SECURITY_FINDING_LOGS` logType, use a wildcard ARN for the hub resource. For Amazon Web Services Security Hub CSPM, use `arn:aws:securityhub:us-east-1:111122223333:hub/*` and for Amazon Web Services Security Hub, use `arn:aws:securityhub:us-east-1:111122223333:hubv2/*`
   *
   * For the `INSIGHTS_QUERY_LOGS` log type, use a wildcard log group ARN, such as `arn:aws:logs:us-east-1:111122223333:log-group:*`. Amazon Web Services does not support a specific log group ARN for this log type.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Defines the type of log that the source is sending.
   *
   * - For Amazon Web Services Amplify, the valid values are `ACCESS_LOGS` and `WAF_LOGS`.
   * - For Application Load Balancer, the valid values are `ALB_ACCESS_LOGS`, `ALB_CONNECTION_LOGS`, and `ALB_HEALTH_CHECK_LOGS`.
   * - For Amazon Bedrock AgentCore Gateway, the valid values are `APPLICATION_LOGS` and `TRACES`.
   * - For Amazon Bedrock AgentCore Identity, the valid values are `APPLICATION_LOGS` and `TRACES`.
   * - For Amazon Bedrock AgentCore Memory, the valid values are `APPLICATION_LOGS` and `TRACES`.
   * - For Amazon Bedrock AgentCore Payments, the valid values are `APPLICATION_LOGS` and `TRACES`.
   * - For Amazon Bedrock AgentCore Runtime, the valid values are `APPLICATION_LOGS`, `USAGE_LOGS`, and `TRACES`.
   * - For Amazon Bedrock AgentCore Tools, the valid values are `APPLICATION_LOGS`, `USAGE_LOGS`, and `TRACES`.
   * - For Amazon Bedrock Agents, the valid values are `APPLICATION_LOGS` and `EVENT_LOGS`.
   * - For Amazon Bedrock Knowledge Bases, the valid values are `APPLICATION_LOGS` and `TRACES`.
   * - For CloudFront, the valid value is `ACCESS_LOGS`.
   * - For query execution logs from CloudWatch Logs Insights, the valid value is `INSIGHTS_QUERY_LOGS`.
   * - For Amazon CodeWhisperer, the valid value is `EVENT_LOGS`.
   * - For DevOps Agent, the valid value is `APPLICATION_LOGS`.
   * - For Amazon EKS Auto Mode, the valid values are `AUTO_MODE_BLOCK_STORAGE_LOGS`, `AUTO_MODE_COMPUTE_LOGS`, `AUTO_MODE_IPAM_LOGS`, and `AUTO_MODE_LOAD_BALANCING_LOGS`.
   * - For Amazon EKS Capability Logs, the valid values are `EKS_CAPABILITY_ACK_LOGS`, `EKS_CAPABILITY_ARGOCD_APPLICATION_LOGS`, `EKS_CAPABILITY_ARGOCD_APPLICATIONSET_LOGS`, `EKS_CAPABILITY_ARGOCD_COMMITSERVER_LOGS`, `EKS_CAPABILITY_ARGOCD_REPOSERVER_LOGS`, `EKS_CAPABILITY_ARGOCD_SERVER_LOGS`, and `EKS_CAPABILITY_KRO_LOGS`.
   * - For Amazon Web Services Elemental Inference, the valid value is `APPLICATION_LOGS`.
   * - For Elemental MediaPackage, the valid values are `EGRESS_ACCESS_LOGS` and `INGRESS_ACCESS_LOGS`.
   * - For Elemental MediaTailor, the valid values are `AD_DECISION_SERVER_LOGS`, `MANIFEST_SERVICE_LOGS`, and `TRANSCODE_LOGS`.
   * - For Amazon ECS, the valid value is `ACTION_LOGS`.
   * - For Entity Resolution, the valid value is `WORKFLOW_LOGS`.
   * - For Amazon EventBridge Event Bus (Custom), the valid values are `INFO_LOGS` and `ERROR_LOGS`.
   * - For IAM Identity Center, the valid value is `ERROR_LOGS`.
   * - For Network Firewall Proxy, the valid values are `ALERT_LOGS`, `ALLOW_LOGS`, and `DENY_LOGS`.
   * - For Network Load Balancer, the valid value is `NLB_ACCESS_LOGS`.
   * - For PCS, the valid values are `PCS_SCHEDULER_LOGS`, `PCS_JOBCOMP_LOGS`, `PCS_SCHEDULER_AUDIT_LOGS`, and `PCS_SCALING_LOGS`.
   * - For Amazon Q, the valid values are `EVENT_LOGS` and `SYNC_JOB_LOGS`.
   * - For Amazon Q in Connect AI agents, the valid value is `EVENT_LOGS`.
   * - For Quick, the valid values are `AGENT_HOURS_LOGS`, `AGENT_METADATA_LOGS`, `CHAT_LOGS`, `DLP_LOGS`, `FEEDBACK_LOGS`, `INDEX_USAGE_LOGS`, and `KB_FILE_SYNC_LOGS`.
   * - For Route 53 Global Resolver, the valid value is `GLOBAL_RESOLVER_LOGS`.
   * - For Amazon Web Services RTB Fabric, the valid value is `APPLICATION_LOGS`.
   * - For Amazon S3, the valid value is `S3_SERVER_ACCESS_LOGS`.
   * - For Amazon Web Services Security Hub, the valid value is `SECURITY_FINDING_LOGS`.
   * - For Amazon Web Services Security Hub CSPM, the valid value is `SECURITY_FINDING_LOGS`.
   * - For Amazon SES mail manager, the valid values are `APPLICATION_LOGS` and `TRAFFIC_POLICY_DEBUG_LOGS`.
   * - For Amazon Web Services Shield Advanced, the valid value is `FLOW_LOGS`.
   * - For Amazon VPC Route Server, the valid value is `EVENT_LOGS`.
   * - For Amazon WorkMail, the valid values are `ACCESS_CONTROL_LOGS`, `AUTHENTICATION_LOGS`, `WORKMAIL_AVAILABILITY_PROVIDER_LOGS`, `WORKMAIL_MAILBOX_ACCESS_LOGS`, and `WORKMAIL_PERSONAL_ACCESS_TOKEN_LOGS`.
   *
   * @public
   */
  logType: string | undefined;

  /**
   * An optional list of key-value pairs to associate with the resource.
   *
   * For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A map of key-value pairs to configure the delivery source. Both keys and values must be between 1 and 255 characters in length. For example, `\{"samplingRate": "50"\}`.
   *
   * @public
   */
  deliverySourceConfiguration?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDeliverySourceResponse {
  /**
   * A structure containing information about the delivery source that was just created or updated.
   *
   * @public
   */
  deliverySource?: DeliverySource | undefined;
}

/**
 * @public
 */
export interface PutDestinationRequest {
  /**
   * A name for the destination.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * The ARN of an Amazon Kinesis stream to which to deliver matching log events.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon Kinesis `PutRecord` operation on the destination stream.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * An optional list of key-value pairs to associate with the resource.
   *
   * For more information about tagging, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDestinationResponse {
  /**
   * The destination.
   *
   * @public
   */
  destination?: Destination | undefined;
}

/**
 * @public
 */
export interface PutDestinationPolicyRequest {
  /**
   * A name for an existing destination.
   *
   * @public
   */
  destinationName: string | undefined;

  /**
   * An IAM policy document that authorizes cross-account users to deliver their log events to the associated destination. This can be up to 5120 bytes.
   *
   * @public
   */
  accessPolicy: string | undefined;

  /**
   * Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual Amazon Web Services accounts. Before you update a destination policy this way, you must first update the subscription filters in the accounts that send logs to this destination. If you do not, the subscription filters might stop working. By specifying `true` for `forceUpdate`, you are affirming that you have already updated the subscription filters. For more information, see [Updating an existing cross-account subscription](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Cross-Account-Log_Subscription-Update.html)
   *
   * If you omit this parameter, the default of `false` is used.
   *
   * @public
   */
  forceUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface PutIndexPolicyRequest {
  /**
   * Specify either the log group name or log group ARN to apply this field index policy to. If you specify an ARN, use the format arn:aws:logs:*region*:*account-id*:log-group:*log_group_name* Don't include an * at the end.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * The index policy document, in JSON format. The following is an example of an index policy document that creates indexes with different types.
   *
   * `"policyDocument": "\{"Fields": [ "TransactionId" ], "FieldsV2": \{"RequestId": \{"type": "FIELD_INDEX"\}, "APIName": \{"type": "FACET"\}, "StatusCode": \{"type": "FACET"\}\}\}"`
   *
   * You can use `FieldsV2` to specify the type for each field. Supported types are `FIELD_INDEX` and `FACET`. Field names within `Fields` and `FieldsV2` must be mutually exclusive.
   *
   * The policy document must include at least one field index. For more information about the fields that can be included and other restrictions, see [Field index syntax and quotas](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing-Syntax.html).
   *
   * @public
   */
  policyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutIndexPolicyResponse {
  /**
   * The index policy that you just created or updated.
   *
   * @public
   */
  indexPolicy?: IndexPolicy | undefined;
}

/**
 * This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.
 *
 * @public
 */
export interface OpenSearchResourceConfig {
  /**
   * To have the vended dashboard data encrypted with KMS instead of the CloudWatch Logs default encryption method, specify the ARN of the KMS key that you want to use.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Specify the ARN of an IAM role that CloudWatch Logs will use to create the integration. This role must have the permissions necessary to access the OpenSearch Service collection to be able to create the dashboards. For more information about the permissions needed, see [Permissions that the integration needs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/OpenSearch-Dashboards-CreateRole.html) in the CloudWatch Logs User Guide.
   *
   * @public
   */
  dataSourceRoleArn: string | undefined;

  /**
   * Specify the ARNs of IAM roles and IAM users who you want to grant permission to for viewing the dashboards.
   *
   * > **Important:** In addition to specifying these users here, you must also grant them the **CloudWatchOpenSearchDashboardAccess** IAM policy. For more information, see [IAM policies for users](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/OpenSearch-Dashboards-UserRoles.html).
   *
   * @public
   */
  dashboardViewerPrincipals: string[] | undefined;

  /**
   * If you want to use an existing OpenSearch Service application for your integration with OpenSearch Service, specify it here. If you omit this, a new application will be created.
   *
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * Specify how many days that you want the data derived by OpenSearch Service to be retained in the index that the dashboard refers to. This also sets the maximum time period that you can choose when viewing data in the dashboard. Choosing a longer time frame will incur additional costs.
   *
   * @public
   */
  retentionDays: number | undefined;
}

/**
 * This structure contains configuration details about an integration between CloudWatch Logs and another entity.
 *
 * @public
 */
export type ResourceConfig =
  | ResourceConfig.OpenSearchResourceConfigMember
  | ResourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace ResourceConfig {
  /**
   * This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.
   *
   * @public
   */
  export interface OpenSearchResourceConfigMember {
    openSearchResourceConfig: OpenSearchResourceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openSearchResourceConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openSearchResourceConfig: (value: OpenSearchResourceConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * A name for the integration.
   *
   * @public
   */
  integrationName: string | undefined;

  /**
   * A structure that contains configuration information for the integration that you are creating.
   *
   * @public
   */
  resourceConfig: ResourceConfig | undefined;

  /**
   * The type of integration. Currently, the only supported type is `OPENSEARCH`.
   *
   * @public
   */
  integrationType: IntegrationType | undefined;
}

/**
 * @public
 */
export interface PutIntegrationResponse {
  /**
   * The name of the integration that you just created.
   *
   * @public
   */
  integrationName?: string | undefined;

  /**
   * The status of the integration that you just created.
   *
   * After you create an integration, it takes a few minutes to complete. During this time, you'll see the status as `PROVISIONING`.
   *
   * @public
   */
  integrationStatus?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface PutLogEventsRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The name of the log stream.
   *
   * @public
   */
  logStreamName: string | undefined;

  /**
   * The log events.
   *
   * @public
   */
  logEvents: InputLogEvent[] | undefined;

  /**
   * The sequence token obtained from the response of the previous `PutLogEvents` call.
   *
   * > **Important:** The `sequenceToken` parameter is now ignored in `PutLogEvents` actions. `PutLogEvents` actions are now accepted and never return `InvalidSequenceTokenException` or `DataAlreadyAcceptedException` even if the sequence token is not valid.
   *
   * @public
   */
  sequenceToken?: string | undefined;

  /**
   * The entity associated with the log events.
   *
   * @public
   */
  entity?: Entity | undefined;
}

/**
 * If an entity is rejected when a `PutLogEvents` request was made, this includes details about the reason for the rejection.
 *
 * @public
 */
export interface RejectedEntityInfo {
  /**
   * The type of error that caused the rejection of the entity when calling `PutLogEvents`.
   *
   * @public
   */
  errorType: EntityRejectionErrorType | undefined;
}

/**
 * Represents the rejected events.
 *
 * @public
 */
export interface RejectedLogEventsInfo {
  /**
   * The index of the first log event that is too new. This field is inclusive.
   *
   * @public
   */
  tooNewLogEventStartIndex?: number | undefined;

  /**
   * The index of the last log event that is too old. This field is exclusive.
   *
   * @public
   */
  tooOldLogEventEndIndex?: number | undefined;

  /**
   * The expired log events.
   *
   * @public
   */
  expiredLogEventEndIndex?: number | undefined;
}

/**
 * @public
 */
export interface PutLogEventsResponse {
  /**
   * The next sequence token.
   *
   * > **Important:**
   * >
   * > This field has been deprecated.
   * >
   * > The sequence token is now ignored in `PutLogEvents` actions. `PutLogEvents` actions are always accepted even if the sequence token is not valid. You can use parallel `PutLogEvents` actions on the same log stream and you do not need to wait for the response of a previous `PutLogEvents` action to obtain the `nextSequenceToken` value.
   *
   * @public
   */
  nextSequenceToken?: string | undefined;

  /**
   * The rejected events.
   *
   * @public
   */
  rejectedLogEventsInfo?: RejectedLogEventsInfo | undefined;

  /**
   * Information about why the entity is rejected when calling `PutLogEvents`. Only returned when the entity is rejected.
   *
   * > **Note:** When the entity is rejected, the events may still be accepted.
   *
   * @public
   */
  rejectedEntityInfo?: RejectedEntityInfo | undefined;
}

/**
 * @public
 */
export interface PutLogGroupDeletionProtectionRequest {
  /**
   * The name or ARN of the log group.
   *
   * Type: String
   *
   * Length Constraints: Minimum length of 1. Maximum length of 512.
   *
   * Pattern: `[\.\-_/#A-Za-z0-9]+`
   *
   * Required: Yes
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * Whether to enable deletion protection.
   *
   * Type: Boolean
   *
   * Required: Yes
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface PutMetricFilterRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * A name for the metric filter.
   *
   * @public
   */
  filterName: string | undefined;

  /**
   * A filter pattern for extracting metric data out of ingested log events.
   *
   * @public
   */
  filterPattern: string | undefined;

  /**
   * A collection of information that defines how metric data gets emitted.
   *
   * @public
   */
  metricTransformations: MetricTransformation[] | undefined;

  /**
   * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
   *
   * If the log group uses either a log-group level or account-level transformer, and you specify `true`, the metric filter will be applied on the transformed version of the log events instead of the original ingested log events.
   *
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * A filter expression that specifies which log events should be processed by this metric filter based on system fields such as source account and source region. Uses selection criteria syntax with operators like `=`, `!=`, `AND`, `OR`, `IN`, `NOT IN`. Example: `@aws.region = "us-east-1"` or `@aws.account IN ["123456789012", "987654321098"]`. Maximum length: 2000 characters.
   *
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * A list of system fields to emit as additional dimensions in the generated metrics. Valid values are `@aws.account` and `@aws.region`. These dimensions help identify the source of centralized log data and count toward the total dimension limit for metric filters.
   *
   * @public
   */
  emitSystemFieldDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface PutQueryDefinitionRequest {
  /**
   * Specify the query language to use for this query. The options are Logs Insights QL, OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * A name for the query definition. If you are saving numerous query definitions, we recommend that you name them. This way, you can find the ones you want by using the first part of the name as a filter in the `queryDefinitionNamePrefix` parameter of [DescribeQueryDefinitions](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html).
   *
   * @public
   */
  name: string | undefined;

  /**
   * If you are updating a query definition, use this parameter to specify the ID of the query definition that you want to update. You can use [DescribeQueryDefinitions](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html) to retrieve the IDs of your saved query definitions.
   *
   * If you are creating a query definition, do not specify this parameter. CloudWatch generates a unique ID for the new query definition and include it in the response to this operation.
   *
   * @public
   */
  queryDefinitionId?: string | undefined;

  /**
   * Use this parameter to include specific log groups as part of your query definition. If your query uses the OpenSearch Service query language, you specify the log group names inside the `querystring` instead of here.
   *
   * If you are updating an existing query definition for the Logs Insights QL or OpenSearch Service PPL and you omit this parameter, then the updated definition will contain no log groups.
   *
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * The query string to use for this definition. For more information, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * Used as an idempotency token, to avoid returning an exception if the service receives the same request twice because of a network error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Use this parameter to include specific query parameters as part of your query definition. Query parameters are supported only for Logs Insights QL queries. Query parameters allow you to use placeholder variables in your query string that are substituted with values at execution time. Use the `\{\{parameterName\}\}` syntax in your query string to reference a parameter.
   *
   * @public
   */
  parameters?: QueryParameter[] | undefined;
}

/**
 * @public
 */
export interface PutQueryDefinitionResponse {
  /**
   * The ID of the query definition.
   *
   * @public
   */
  queryDefinitionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * Name of the new policy. This parameter is required.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required.
   *
   * The following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace `"logArn"` with the ARN of your CloudWatch Logs resource, such as a log group or log stream.
   *
   * CloudWatch Logs also supports [aws:SourceArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn) and [aws:SourceAccount](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceaccount) condition context keys.
   *
   * In the example resource policy, you would replace the value of `SourceArn` with the resource making the call from Route 53 to CloudWatch Logs. You would also replace the value of `SourceAccount` with the Amazon Web Services account ID making that call.
   *
   * `\{ "Version": "2012-10-17", "Statement": [ \{ "Sid": "Route53LogsToCloudWatchLogs", "Effect": "Allow", "Principal": \{ "Service": [ "route53.amazonaws.com" ] \}, "Action": "logs:PutLogEvents", "Resource": "logArn", "Condition": \{ "ArnLike": \{ "aws:SourceArn": "myRoute53ResourceArn" \}, "StringEquals": \{ "aws:SourceAccount": "myAwsAccountId" \} \} \} ] \}`
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs resource to which the resource policy needs to be added or attached. Currently only supports LogGroup ARN.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The expected revision ID of the resource policy. Required when `resourceArn` is provided to prevent concurrent modifications. Use `null` when creating a resource policy for the first time.
   *
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The new policy.
   *
   * @public
   */
  resourcePolicy?: ResourcePolicy | undefined;

  /**
   * The revision ID of the created or updated resource policy. Only returned for resource-scoped policies.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutRetentionPolicyRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
   *
   * To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html).
   *
   * @public
   */
  retentionInDays: number | undefined;
}

/**
 * @public
 */
export interface PutStorageTierPolicyRequest {
  /**
   * The storage tier to set for the account. Use `INTELLIGENT_TIERING` to automatically optimize storage costs by moving log data to the appropriate tier based on access frequency.
   *
   * @public
   */
  storageTier: StorageTier | undefined;
}

/**
 * @public
 */
export interface PutStorageTierPolicyResponse {
  /**
   * The storage tier for the account.
   *
   * @public
   */
  storageTier?: StorageTier | undefined;

  /**
   * The time when the storage tier policy was last updated, expressed as the number of milliseconds after `January 1, 1970 00:00:00 UTC`.
   *
   * @public
   */
  lastUpdatedTime?: number | undefined;
}

/**
 * @public
 */
export interface PutSubscriptionFilterRequest {
  /**
   * The name of the log group.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * A name for the subscription filter. If you are updating an existing filter, you must specify the correct name in `filterName`. To find the name of the filter currently associated with a log group, use [DescribeSubscriptionFilters](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html).
   *
   * @public
   */
  filterName: string | undefined;

  /**
   * A filter pattern for subscribing to a filtered stream of log events.
   *
   * @public
   */
  filterPattern: string | undefined;

  /**
   * The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:
   *
   * - An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.
   * - A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery.
   *
   *   If you're setting up a cross-account subscription, the destination must have an IAM policy associated with it. The IAM policy must allow the sender to send logs to the destination. For more information, see [PutDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html).
   * - A Kinesis Data Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.
   * - A Lambda function belonging to the same account as the subscription filter, for same-account delivery.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis data stream.
   *
   * @public
   */
  distribution?: Distribution | undefined;

  /**
   * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
   *
   * If the log group uses either a log-group level or account-level transformer, and you specify `true`, the subscription filter will be applied on the transformed version of the log events instead of the original ingested log events.
   *
   * @public
   */
  applyOnTransformedLogs?: boolean | undefined;

  /**
   * A filter expression that specifies which log events should be processed by this subscription filter based on system fields such as source account and source region. Uses selection criteria syntax with operators like `=`, `!=`, `AND`, `OR`, `IN`, `NOT IN`. Example: `@aws.region NOT IN ["cn-north-1"]` or `@aws.account = "123456789012" AND @aws.region = "us-east-1"`. Maximum length: 2000 characters.
   *
   * @public
   */
  fieldSelectionCriteria?: string | undefined;

  /**
   * A list of system fields to include in the log events sent to the subscription destination. Valid values are `@aws.account`, `@aws.region`, and `@source.log`. These fields provide source information for centralized log data in the forwarded payload.
   *
   * @public
   */
  emitSystemFields?: string[] | undefined;
}

/**
 * @public
 */
export interface PutSyslogConfigurationRequest {
  /**
   * The name or ARN of the log group to associate with the syslog configuration.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * The ID of the VPC endpoint to use for syslog ingestion.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface PutTransformerRequest {
  /**
   * Specify either the name or ARN of the log group to create the transformer for.
   *
   * @public
   */
  logGroupIdentifier: string | undefined;

  /**
   * This structure contains the configuration of this log transformer. A log transformer is an array of processors, where each processor applies one type of transformation to the log events that are ingested.
   *
   * @public
   */
  transformerConfig: Processor[] | undefined;
}

/**
 * @public
 */
export interface StartLiveTailRequest {
  /**
   * An array where each item in the array is a log group to include in the Live Tail session.
   *
   * Specify each log group by its ARN.
   *
   * If you specify an ARN, the ARN can't end with an asterisk (*).
   *
   * > **Note:** You can include up to 10 log groups.
   *
   * @public
   */
  logGroupIdentifiers: string[] | undefined;

  /**
   * If you specify this parameter, then only log events in the log streams that you specify here are included in the Live Tail session.
   *
   * If you specify this field, you can't also specify the `logStreamNamePrefixes` field.
   *
   * > **Note:** You can specify this parameter only if you specify only one log group in `logGroupIdentifiers`.
   *
   * @public
   */
  logStreamNames?: string[] | undefined;

  /**
   * If you specify this parameter, then only log events in the log streams that have names that start with the prefixes that you specify here are included in the Live Tail session.
   *
   * If you specify this field, you can't also specify the `logStreamNames` field.
   *
   * > **Note:** You can specify this parameter only if you specify only one log group in `logGroupIdentifiers`.
   *
   * @public
   */
  logStreamNamePrefixes?: string[] | undefined;

  /**
   * An optional pattern to use to filter the results to include only log events that match the pattern. For example, a filter pattern of `error 404` causes only log events that include both `error` and `404` to be included in the Live Tail stream.
   *
   * Regular expression filter patterns are supported.
   *
   * For more information about filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
   *
   * @public
   */
  logEventFilterPattern?: string | undefined;
}

/**
 * This object includes the stream returned by your [StartLiveTail](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTail.html) request.
 *
 * @public
 */
export type StartLiveTailResponseStream =
  | StartLiveTailResponseStream.SessionStreamingExceptionMember
  | StartLiveTailResponseStream.SessionTimeoutExceptionMember
  | StartLiveTailResponseStream.SessionStartMember
  | StartLiveTailResponseStream.SessionUpdateMember
  | StartLiveTailResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace StartLiveTailResponseStream {
  /**
   * This object contains information about this Live Tail session, including the log groups included and the log stream filters, if any.
   *
   * @public
   */
  export interface SessionStartMember {
    sessionStart: LiveTailSessionStart;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * This object contains the log events and session metadata.
   *
   * @public
   */
  export interface SessionUpdateMember {
    sessionStart?: never;
    sessionUpdate: LiveTailSessionUpdate;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * This exception is returned in the stream when the Live Tail session times out. Live Tail sessions time out after three hours.
   *
   * @public
   */
  export interface SessionTimeoutExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException: SessionTimeoutException;
    SessionStreamingException?: never;
    $unknown?: never;
  }

  /**
   * This exception is returned if an unknown error occurs.
   *
   * @public
   */
  export interface SessionStreamingExceptionMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException: SessionStreamingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionStart?: never;
    sessionUpdate?: never;
    SessionTimeoutException?: never;
    SessionStreamingException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionStart: (value: LiveTailSessionStart) => T;
    sessionUpdate: (value: LiveTailSessionUpdate) => T;
    SessionTimeoutException: (value: SessionTimeoutException) => T;
    SessionStreamingException: (value: SessionStreamingException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartLiveTailResponse {
  /**
   * An object that includes the stream returned by your request. It can include both log events and exceptions.
   *
   * @public
   */
  responseStream?: AsyncIterable<StartLiveTailResponseStream> | undefined;
}

/**
 * Reserved.
 *
 * @public
 */
export interface QueryCompileErrorLocation {
  /**
   * Reserved.
   *
   * @public
   */
  startCharOffset?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  endCharOffset?: number | undefined;
}

/**
 * Reserved.
 *
 * @public
 */
export interface QueryCompileError {
  /**
   * Reserved.
   *
   * @public
   */
  location?: QueryCompileErrorLocation | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * Specify the query language to use for this query. The options are Logs Insights QL, OpenSearch PPL, and OpenSearch SQL. For more information about the query languages that CloudWatch Logs supports, see [Supported query languages](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_Languages.html).
   *
   * @public
   */
  queryLanguage?: QueryLanguage | undefined;

  /**
   * The log group on which to perform the query.
   *
   * > **Note:** A `StartQuery` operation must include exactly one of the following parameters: `logGroupName`, `logGroupNames`, or `logGroupIdentifiers`. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the `querystring` instead of here.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The list of log groups to be queried. You can include up to 50 log groups.
   *
   * > **Note:** A `StartQuery` operation must include exactly one of the following parameters: `logGroupName`, `logGroupNames`, or `logGroupIdentifiers`. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the `querystring` instead of here.
   *
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * The list of log groups to query. You can include up to 50 log groups.
   *
   * You can specify them by the log group name or ARN. If a log group that you're querying is in a source account and you're using a monitoring account, you must specify the ARN of the log group here. The query definition must also be defined in the monitoring account.
   *
   * If you specify an ARN, use the format arn:aws:logs:*region*:*account-id*:log-group:*log_group_name* Don't include an * at the end.
   *
   * A `StartQuery` operation must include exactly one of the following parameters: `logGroupName`, `logGroupNames`, or `logGroupIdentifiers`. The exception is queries using the OpenSearch Service SQL query language, where you specify the log group names inside the `querystring` instead of here.
   *
   * @public
   */
  logGroupIdentifiers?: string[] | undefined;

  /**
   * The beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  startTime: number | undefined;

  /**
   * The end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since `January 1, 1970, 00:00:00 UTC`.
   *
   * @public
   */
  endTime: number | undefined;

  /**
   * The query string to use. For more information, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The maximum number of log events to return from the query. The maximum limit is 100,000. The maximum events returned in a single GetQueryResults API call is 10,000 log events per request. You can retrieve up to 100,000 log event results from a query by paginating with the `nextToken`. 100,000 limit is only supported for Logs Insights QL and is currently not supported for PPL and SQL query languages.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * The unique ID of the query.
   *
   * @public
   */
  queryId?: string | undefined;
}

/**
 * @public
 */
export interface StopQueryRequest {
  /**
   * The ID number of the query to stop. To find this ID number, use `DescribeQueries`.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryResponse {
  /**
   * This is true if the query was stopped by the `StopQuery` operation.
   *
   * @public
   */
  success?: boolean | undefined;
}
