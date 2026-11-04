// smithy-typescript generated code
import type {
  AbortAction,
  ActionType,
  AggregationTypeName,
  AlertTargetType,
  ApplicationProtocol,
  AuditCheckRunStatus,
  AuditFindingSeverity,
  AuditFrequency,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskStatus,
  AuditTaskStatus,
  AuditTaskType,
  AuthDecision,
  AuthenticationType,
  AuthorizerStatus,
  AwsJobAbortCriteriaAbortAction,
  AwsJobAbortCriteriaFailureType,
  CACertificateUpdateAction,
  CannedAccessControlList,
  CertificateProviderOperation,
  CommandNamespace,
  CommandParameterType,
  CommandParameterValueComparisonOperator,
  ComparisonOperator,
  ConfidenceLevel,
  ConfigName,
  CustomMetricType,
  DayOfWeek,
  DeviceCertificateUpdateAction,
  DimensionType,
  DimensionValueOperator,
  DynamoKeyType,
  FleetMetricUnit,
  InfluxDBSecretType,
  InfluxDBTimestampUnit,
  InfluxDBVersion,
  JobEndBehavior,
  JobExecutionFailureType,
  LogLevel,
  MessageFormat,
  OTAUpdateStatus,
  OutputFormat,
  PackageVersionStatus,
  PolicyTemplateName,
  Protocol,
  ResourceType,
  RetryableFailureType,
  SbomValidationStatus,
  ServiceType,
  TargetSelection,
  TemplateType,
  ThingPrincipalType,
  TopicRuleDestinationStatus,
  VerificationState,
} from "./enums";

/**
 * The criteria that determine when and how a job abort takes place.
 *
 * @public
 */
export interface AbortCriteria {
  /**
   * The type of job execution failures that can initiate a job abort.
   *
   * @public
   */
  failureType: JobExecutionFailureType | undefined;

  /**
   * The type of job action to take to initiate the job abort.
   *
   * @public
   */
  action: AbortAction | undefined;

  /**
   * The minimum percentage of job execution failures that must occur to initiate the job abort.
   *
   * Amazon Web Services IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).
   *
   * @public
   */
  thresholdPercentage: number | undefined;

  /**
   * The minimum number of things which must receive job execution notifications before the job can be aborted.
   *
   * @public
   */
  minNumberOfExecutedThings: number | undefined;
}

/**
 * The criteria that determine when and how a job abort takes place.
 *
 * @public
 */
export interface AbortConfig {
  /**
   * The list of criteria that determine when and how to abort the job.
   *
   * @public
   */
  criteriaList: AbortCriteria[] | undefined;
}

/**
 * The input for the AcceptCertificateTransfer operation.
 *
 * @public
 */
export interface AcceptCertificateTransferRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * Specifies whether the certificate is active.
   *
   * @public
   */
  setAsActive?: boolean | undefined;
}

/**
 * Describes an action that updates a CloudWatch alarm.
 *
 * @public
 */
export interface CloudwatchAlarmAction {
  /**
   * The IAM role that allows access to the CloudWatch alarm.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The CloudWatch alarm name.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The reason for the alarm change.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
   *
   * @public
   */
  stateValue: string | undefined;
}

/**
 * Describes an action that sends data to CloudWatch Logs.
 *
 * @public
 */
export interface CloudwatchLogsAction {
  /**
   * The IAM role that allows access to the CloudWatch log.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The CloudWatch log group to which the action sends data.
   *
   * @public
   */
  logGroupName: string | undefined;

  /**
   * Indicates whether batches of log records will be extracted and uploaded into CloudWatch. Values include `true` or `false` *(default)*.
   *
   * @public
   */
  batchMode?: boolean | undefined;
}

/**
 * Describes an action that captures a CloudWatch metric.
 *
 * @public
 */
export interface CloudwatchMetricAction {
  /**
   * The IAM role that allows access to the CloudWatch metric.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The CloudWatch metric namespace name.
   *
   * @public
   */
  metricNamespace: string | undefined;

  /**
   * The CloudWatch metric name.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The CloudWatch metric value.
   *
   * @public
   */
  metricValue: string | undefined;

  /**
   * The [metric unit](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit) supported by CloudWatch.
   *
   * @public
   */
  metricUnit: string | undefined;

  /**
   * An optional [Unix timestamp](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).
   *
   * @public
   */
  metricTimestamp?: string | undefined;
}

/**
 * Describes an action to write to a DynamoDB table.
 *
 * The `tableName`, `hashKeyField`, and `rangeKeyField` values must match the values used when you created the table.
 *
 * The `hashKeyValue` and `rangeKeyvalue` fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: $\{*sql-expression*\}.
 *
 * You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:
 *
 * `"hashKeyValue": "$\{topic(3)\}"`
 *
 * The following field uses the timestamp:
 *
 * `"rangeKeyValue": "$\{timestamp()\}"`
 *
 * @public
 */
export interface DynamoDBAction {
  /**
   * The name of the DynamoDB table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The ARN of the IAM role that grants access to the DynamoDB table.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The type of operation to be performed. This follows the substitution template, so it can be `$\{operation\}`, but the substitution must result in one of the following: `INSERT`, `UPDATE`, or `DELETE`.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The hash key name.
   *
   * @public
   */
  hashKeyField: string | undefined;

  /**
   * The hash key value.
   *
   * @public
   */
  hashKeyValue: string | undefined;

  /**
   * The hash key type. Valid values are "STRING" or "NUMBER"
   *
   * @public
   */
  hashKeyType?: DynamoKeyType | undefined;

  /**
   * The range key name.
   *
   * @public
   */
  rangeKeyField?: string | undefined;

  /**
   * The range key value.
   *
   * @public
   */
  rangeKeyValue?: string | undefined;

  /**
   * The range key type. Valid values are "STRING" or "NUMBER"
   *
   * @public
   */
  rangeKeyType?: DynamoKeyType | undefined;

  /**
   * The action payload. This name can be customized.
   *
   * @public
   */
  payloadField?: string | undefined;
}

/**
 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
 *
 * @public
 */
export interface PutItemInput {
  /**
   * The table where the message data will be written.
   *
   * @public
   */
  tableName: string | undefined;
}

/**
 * Describes an action to write to a DynamoDB table.
 *
 * This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.
 *
 * @public
 */
export interface DynamoDBv2Action {
  /**
   * The ARN of the IAM role that grants access to the DynamoDB table.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Specifies the DynamoDB table to which the message data will be written. For example:
   *
   * `\{ "dynamoDBv2": \{ "roleArn": "aws:iam:12341251:my-role" "putItem": \{ "tableName": "my-table" \} \} \}`
   *
   * Each attribute in the message payload will be written to a separate column in the DynamoDB database.
   *
   * @public
   */
  putItem: PutItemInput | undefined;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 *
 * > **Note:** The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html).
 *
 * @public
 */
export interface ElasticsearchAction {
  /**
   * The IAM role ARN that has access to OpenSearch.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The endpoint of your OpenSearch domain.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The index where you want to store your data.
   *
   * @public
   */
  index: string | undefined;

  /**
   * The type of document you are storing.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The unique identifier for the document you are storing.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
 *
 * @public
 */
export interface FirehoseAction {
  /**
   * The IAM role that grants access to the Amazon Kinesis Firehose stream.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The delivery stream name.
   *
   * @public
   */
  deliveryStreamName: string | undefined;

  /**
   * A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
   *
   * @public
   */
  separator?: string | undefined;

  /**
   * Whether to deliver the Kinesis Data Firehose stream as a batch by using [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html). The default value is `false`.
   *
   * When `batchMode` is `true` and the rule's SQL statement evaluates to an Array, each Array element forms one record in the [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) request. The resulting array can't have more than 500 records.
   *
   * @public
   */
  batchMode?: boolean | undefined;
}

/**
 * For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @public
 */
export interface SigV4Authorization {
  /**
   * The signing region.
   *
   * @public
   */
  signingRegion: string | undefined;

  /**
   * The service name to use while signing with Sig V4.
   *
   * @public
   */
  serviceName: string | undefined;

  /**
   * The ARN of the signing role.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * The authorization method used to send messages.
 *
 * @public
 */
export interface HttpAuthorization {
  /**
   * Use Sig V4 authorization. For more information, see [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * @public
   */
  sigv4?: SigV4Authorization | undefined;
}

/**
 * Configuration settings for batching.
 *
 * @public
 */
export interface BatchConfig {
  /**
   * The maximum amount of time (in milliseconds) that an outgoing call waits for other calls with which it batches messages of the same type. The higher the setting, the longer the latency of the batched HTTP Action will be.
   *
   * @public
   */
  maxBatchOpenMs?: number | undefined;

  /**
   * The maximum number of messages that are batched together in a single action execution.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * Maximum size of a message batch, in bytes.
   *
   * @public
   */
  maxBatchSizeBytes?: number | undefined;

  /**
   * Whether to allow batching messages from different MQTT topics into a single HTTP request. By default, only messages from the same topic are batched together. The default value is `false`.
   *
   * > **Note:** When `batchAcrossTopics` is enabled, the error payload format changes: the `topic` field moves from the top level to inside each entry in the `payloadsWithMetadata` array, since each message in the batch may originate from a different topic.
   *
   * > **Note:** Messages are always batched within the scope of the same account, rule name, target HTTP endpoint URL, and billing group. Messages that differ in any of these attributes are never combined into the same batch, regardless of the `batchAcrossTopics` setting.
   *
   * @public
   */
  batchAcrossTopics?: boolean | undefined;
}

/**
 * The HTTP action header.
 *
 * @public
 */
export interface HttpActionHeader {
  /**
   * The HTTP header key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The HTTP header value. Substitution templates are supported.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Send data to an HTTPS endpoint.
 *
 * @public
 */
export interface HttpAction {
  /**
   * The endpoint URL. If substitution templates are used in the URL, you must also specify a `confirmationUrl`. If this is a new destination, a new `TopicRuleDestination` is created if possible.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The URL to which IoT sends a confirmation message. The value of the confirmation URL must be a prefix of the endpoint URL. If you do not specify a confirmation URL IoT uses the endpoint URL as the confirmation URL. If you use substitution templates in the confirmationUrl, you must create and enable topic rule destinations that match each possible value of the substitution template before traffic is allowed to your endpoint URL.
   *
   * @public
   */
  confirmationUrl?: string | undefined;

  /**
   * The HTTP headers to send with the message data.
   *
   * @public
   */
  headers?: HttpActionHeader[] | undefined;

  /**
   * The authentication method to use when sending data to an HTTPS endpoint.
   *
   * @public
   */
  auth?: HttpAuthorization | undefined;

  /**
   * Whether to process the HTTP action messages into a single request. Value can be true or false.
   *
   * @public
   */
  enableBatching?: boolean | undefined;

  /**
   * The configuration settings for batching. For more information, see [Batching HTTP action messages](https://docs.aws.amazon.com/iot/latest/developerguide/http_batching.html).
   *
   * @public
   */
  batchConfig?: BatchConfig | undefined;
}

/**
 * The batching configuration of an InfluxDB rule action. IoT closes a batch and writes it to InfluxDB when the first of the configured limits is reached.
 *
 * @public
 */
export interface InfluxDBBatchConfig {
  /**
   * The maximum number of data points to collect in a batch.
   *
   * If you don't specify a value, this limit doesn't apply. IoT then closes each batch when another configured limit is reached.
   *
   * @public
   */
  maxBatchSize?: number | undefined;

  /**
   * The maximum length of time, in milliseconds, to keep a batch open before writing it to InfluxDB.
   *
   * If you don't specify a value, this limit doesn't apply. IoT then closes each batch when another configured limit is reached.
   *
   * @public
   */
  maxBatchOpenMs?: number | undefined;

  /**
   * The maximum size of a batch, in bytes, before IoT writes it to InfluxDB.
   *
   * If you don't specify a value, this limit doesn't apply. IoT then closes each batch when another configured limit is reached.
   *
   * @public
   */
  maxBatchSizeBytes?: number | undefined;

  /**
   * Specifies whether to collect data points from different topics into the same batch.
   *
   * If omitted or `false`, IoT batches data points for each topic separately.
   *
   * @public
   */
  batchAcrossTopics?: boolean | undefined;
}

/**
 * The InfluxDB rule action converts the message payload into InfluxDB line protocol. It writes the result to a table in an InfluxDB database. The database can be an Amazon Timestream for InfluxDB instance or a self-managed InfluxDB cluster.
 *
 * The action connects to InfluxDB through an InfluxDB topic rule destination, which must be in the `ENABLED` state before the action can write data.
 *
 * @public
 */
export interface InfluxDBAction {
  /**
   * The ARN of the InfluxDB topic rule destination that identifies the InfluxDB instance to write to.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * The ARN of the role that grants permission to retrieve the InfluxDB API token from Amazon Web Services Secrets Manager.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the InfluxDB database to write to. In InfluxDB 2, this is the name of the bucket.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The name of the table to write the data point to. This is the measurement name of the InfluxDB line protocol record.
   *
   * Accepts substitution templates.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The name of the InfluxDB organization that owns the database.
   *
   * A write to an InfluxDB 2 instance fails if this value isn't set. This value isn't used when the destination is an InfluxDB 3 instance.
   *
   * @public
   */
  organization?: string | undefined;

  /**
   * The set of tags to write with each data point. Tags are the indexed metadata of an InfluxDB data point.
   *
   * Tag names and tag values accept substitution templates. A tag name can't use the `@\{...\}` per-element form. A tag name must resolve to the same value for every element of an array payload.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The precision of the timestamp written with each data point. Valid values are `s` (seconds), `ms` (milliseconds), `us` (microseconds), and `ns` (nanoseconds).
   *
   * If omitted, the topic rule action uses `ms`.
   *
   * @public
   */
  timestampUnit?: InfluxDBTimestampUnit | undefined;

  /**
   * The batching configuration for the action. When present, IoT collects data points from multiple messages and writes them to InfluxDB in a single request.
   *
   * If omitted, each message is written to InfluxDB in its own request.
   *
   * @public
   */
  batchConfig?: InfluxDBBatchConfig | undefined;
}

/**
 * Sends message data to an IoT Analytics channel.
 *
 * @public
 */
export interface IotAnalyticsAction {
  /**
   * (deprecated) The ARN of the IoT Analytics channel to which message data will be sent.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * The name of the IoT Analytics channel to which message data will be sent.
   *
   * @public
   */
  channelName?: string | undefined;

  /**
   * Whether to process the action as a batch. The default value is `false`.
   *
   * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is delivered as a separate message when passed by [`BatchPutMessage`](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html) to the IoT Analytics channel. The resulting array can't have more than 100 messages.
   *
   * @public
   */
  batchMode?: boolean | undefined;

  /**
   * The ARN of the role which has a policy that grants IoT Analytics permission to send message data via IoT Analytics (iotanalytics:BatchPutMessage).
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * Sends an input to an IoT Events detector.
 *
 * @public
 */
export interface IotEventsAction {
  /**
   * The name of the IoT Events input.
   *
   * @public
   */
  inputName: string | undefined;

  /**
   * The ID of the message. The default `messageId` is a new UUID value.
   *
   * When `batchMode` is `true`, you can't specify a `messageId`--a new UUID value will be assigned.
   *
   * Assign a value to this property to ensure that only one input (message) with a given `messageId` will be processed by an IoT Events detector.
   *
   * @public
   */
  messageId?: string | undefined;

  /**
   * Whether to process the event actions as a batch. The default value is `false`.
   *
   * When `batchMode` is `true`, you can't specify a `messageId`.
   *
   * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is treated as a separate message when it's sent to IoT Events by calling [`BatchPutMessage`](https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html). The resulting array can't have more than 10 messages.
   *
   * @public
   */
  batchMode?: boolean | undefined;

  /**
   * The ARN of the role that grants IoT permission to send an input to an IoT Events detector. ("Action":"iotevents:BatchPutMessage").
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * An asset property timestamp entry containing the following information.
 *
 * @public
 */
export interface AssetPropertyTimestamp {
  /**
   * A string that contains the time in seconds since epoch. Accepts substitution templates.
   *
   * @public
   */
  timeInSeconds: string | undefined;

  /**
   * Optional. A string that contains the nanosecond time offset. Accepts substitution templates.
   *
   * @public
   */
  offsetInNanos?: string | undefined;
}

/**
 * Contains an asset property value (of a single type).
 *
 * @public
 */
export type AssetPropertyVariant =
  | AssetPropertyVariant.BooleanValueMember
  | AssetPropertyVariant.DoubleValueMember
  | AssetPropertyVariant.IntegerValueMember
  | AssetPropertyVariant.StringValueMember
  | AssetPropertyVariant.$UnknownMember;

/**
 * @public
 */
export namespace AssetPropertyVariant {
  /**
   * Optional. The string value of the value entry. Accepts substitution templates.
   *
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    integerValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * Optional. A string that contains the integer value of the value entry. Accepts substitution templates.
   *
   * @public
   */
  export interface IntegerValueMember {
    stringValue?: never;
    integerValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * Optional. A string that contains the double value of the value entry. Accepts substitution templates.
   *
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue: string;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * Optional. A string that contains the boolean value (`true` or `false`) of the value entry. Accepts substitution templates.
   *
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue?: never;
    booleanValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    integerValue: (value: string) => T;
    doubleValue: (value: string) => T;
    booleanValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An asset property value entry containing the following information.
 *
 * @public
 */
export interface AssetPropertyValue {
  /**
   * The value of the asset property.
   *
   * @public
   */
  value: AssetPropertyVariant | undefined;

  /**
   * The asset property value timestamp.
   *
   * @public
   */
  timestamp: AssetPropertyTimestamp | undefined;

  /**
   * Optional. A string that describes the quality of the value. Accepts substitution templates. Must be `GOOD`, `BAD`, or `UNCERTAIN`.
   *
   * @public
   */
  quality?: string | undefined;
}

/**
 * An asset property value entry containing the following information.
 *
 * @public
 */
export interface PutAssetPropertyValueEntry {
  /**
   * Optional. A unique identifier for this entry that you can define to better track which message caused an error in case of failure. Accepts substitution templates. Defaults to a new UUID.
   *
   * @public
   */
  entryId?: string | undefined;

  /**
   * The ID of the IoT SiteWise asset. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset's property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The name of the property alias associated with your asset property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * A list of property values to insert that each contain timestamp, quality, and value (TQV) information.
   *
   * @public
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

/**
 * Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
 *
 * @public
 */
export interface IotSiteWiseAction {
  /**
   * A list of asset property value entries.
   *
   * @public
   */
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[] | undefined;

  /**
   * The ARN of the role that grants IoT permission to send an asset property value to IoT SiteWise. (`"Action": "iotsitewise:BatchPutAssetPropertyValue"`). The trust policy can restrict access to specific asset hierarchy paths.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Specifies a Kafka header using key-value pairs when you create a Rule’s Kafka Action. You can use these headers to route data from IoT clients to downstream Kafka clusters without modifying your message payload.
 *
 * For more information about Rule's Kafka action, see [Apache Kafka](https://docs.aws.amazon.com/iot/latest/developerguide/apache-kafka-rule-action.html).
 *
 * @public
 */
export interface KafkaActionHeader {
  /**
   * The key of the Kafka header.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the Kafka header.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaAction {
  /**
   * The ARN of Kafka action's VPC `TopicRuleDestination`.
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * The Kafka topic for messages to be sent to the Kafka broker.
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The Kafka message key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The Kafka message partition.
   *
   * @public
   */
  partition?: string | undefined;

  /**
   * Properties of the Apache Kafka producer client.
   *
   * @public
   */
  clientProperties: Record<string, string> | undefined;

  /**
   * The list of Kafka headers that you specify.
   *
   * @public
   */
  headers?: KafkaActionHeader[] | undefined;
}

/**
 * Describes an action to write data to an Amazon Kinesis stream.
 *
 * @public
 */
export interface KinesisAction {
  /**
   * The ARN of the IAM role that grants access to the Amazon Kinesis stream.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the Amazon Kinesis stream.
   *
   * @public
   */
  streamName: string | undefined;

  /**
   * The partition key.
   *
   * @public
   */
  partitionKey?: string | undefined;
}

/**
 * Describes an action to invoke a Lambda function.
 *
 * @public
 */
export interface LambdaAction {
  /**
   * The ARN of the Lambda function.
   *
   * @public
   */
  functionArn: string | undefined;
}

/**
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
 *
 * @public
 */
export interface LocationTimestamp {
  /**
   * An expression that returns a long epoch time value.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The precision of the timestamp value that results from the expression described in `value`.
   *
   * Valid values: `SECONDS` | `MILLISECONDS` | `MICROSECONDS` | `NANOSECONDS`. The default is `MILLISECONDS`.
   *
   * @public
   */
  unit?: string | undefined;
}

/**
 * The Amazon Location rule action sends device location updates from an MQTT message to an Amazon Location tracker resource.
 *
 * @public
 */
export interface LocationAction {
  /**
   * The IAM role that grants permission to write to the Amazon Location resource.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the tracker resource in Amazon Location in which the location is updated.
   *
   * @public
   */
  trackerName: string | undefined;

  /**
   * The unique ID of the device providing the location data.
   *
   * @public
   */
  deviceId: string | undefined;

  /**
   * The time that the location data was sampled. The default value is the time the MQTT message was processed.
   *
   * @public
   */
  timestamp?: LocationTimestamp | undefined;

  /**
   * A string that evaluates to a double value that represents the latitude of the device's location.
   *
   * @public
   */
  latitude: string | undefined;

  /**
   * A string that evaluates to a double value that represents the longitude of the device's location.
   *
   * @public
   */
  longitude: string | undefined;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface OpenSearchAction {
  /**
   * The IAM role ARN that has access to OpenSearch.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The endpoint of your OpenSearch domain.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The OpenSearch index where you want to store your data.
   *
   * @public
   */
  index: string | undefined;

  /**
   * The type of document you are storing.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The unique identifier for the document you are storing.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * A key-value pair that you define in the header. Both the key and the value are either literal strings or valid [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
 *
 * @public
 */
export interface UserProperty {
  /**
   * A key to be specified in `UserProperty`.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A value to be specified in `UserProperty`.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Specifies MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) from Amazon Web Services IoT Core Developer Guide.
 *
 * @public
 */
export interface MqttHeaders {
  /**
   * An `Enum` string value that indicates whether the payload is formatted as UTF-8.
   *
   * Valid values are `UNSPECIFIED_BYTES` and `UTF8_DATA`.
   *
   * For more information, see [Payload Format Indicator](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901111) from the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * @public
   */
  payloadFormatIndicator?: string | undefined;

  /**
   * A UTF-8 encoded string that describes the content of the publishing message.
   *
   * For more information, see [Content Type](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901118) from the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.
   *
   * For more information, see [Response Topic](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901114) from the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * @public
   */
  responseTopic?: string | undefined;

  /**
   * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received.
   *
   * For more information, see [Correlation Data](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901115) from the MQTT Version 5.0 specification.
   *
   * > **Note:** This binary data must be based64-encoded.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * @public
   */
  correlationData?: string | undefined;

  /**
   * A user-defined integer value that will persist a message at the message broker for a specified amount of time to ensure that the message will expire if it's no longer relevant to the subscriber. The value of `messageExpiry` represents the number of seconds before it expires. For more information about the limits of `messageExpiry`, see [Amazon Web Services IoT Core message broker and protocol limits and quotas](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) from the Amazon Web Services Reference Guide.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * @public
   */
  messageExpiry?: string | undefined;

  /**
   * An array of key-value pairs that you define in the MQTT5 header.
   *
   * @public
   */
  userProperties?: UserProperty[] | undefined;
}

/**
 * Describes an action to republish to another topic.
 *
 * @public
 */
export interface RepublishAction {
  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the MQTT topic.
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The Quality of Service (QoS) level to use when republishing messages. The default value is 0.
   *
   * @public
   */
  qos?: number | undefined;

  /**
   * MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) from the Amazon Web Services IoT Core Developer Guide.
   *
   * @public
   */
  headers?: MqttHeaders | undefined;
}

/**
 * Describes an action to write data to an Amazon S3 bucket.
 *
 * @public
 */
export interface S3Action {
  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The Amazon S3 bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key. For more information, see [Actions, resources, and condition keys for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html).
   *
   * @public
   */
  key: string | undefined;

  /**
   * The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see [S3 canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl).
   *
   * @public
   */
  cannedAcl?: CannedAccessControlList | undefined;
}

/**
 * Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
 *
 * @public
 */
export interface SalesforceAction {
  /**
   * The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The token is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
   *
   * @public
   */
  url: string | undefined;
}

/**
 * Describes an action to publish to an Amazon SNS topic.
 *
 * @public
 */
export interface SnsAction {
  /**
   * The ARN of the SNS topic.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * (Optional) The message format of the message to publish. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. To read more about SNS message formats, see [https://docs.aws.amazon.com/sns/latest/dg/json-formats.html](https://docs.aws.amazon.com/sns/latest/dg/json-formats.html) refer to their official documentation.
   *
   * @public
   */
  messageFormat?: MessageFormat | undefined;
}

/**
 * Describes an action to publish data to an Amazon SQS queue.
 *
 * @public
 */
export interface SqsAction {
  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The URL of the Amazon SQS queue.
   *
   * @public
   */
  queueUrl: string | undefined;

  /**
   * Specifies whether to use Base64 encoding.
   *
   * @public
   */
  useBase64?: boolean | undefined;
}

/**
 * Starts execution of a Step Functions state machine.
 *
 * @public
 */
export interface StepFunctionsAction {
  /**
   * (Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID. Step Functions automatically creates a unique name for each state machine execution if one is not provided.
   *
   * @public
   */
  executionNamePrefix?: string | undefined;

  /**
   * The name of the Step Functions state machine whose execution will be started.
   *
   * @public
   */
  stateMachineName: string | undefined;

  /**
   * The ARN of the role that grants IoT permission to start execution of a state machine ("Action":"states:StartExecution").
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Metadata attributes of the time series that are written in each measure record.
 *
 * @public
 */
export interface TimestreamDimension {
  /**
   * The metadata dimension name. This is the name of the column in the Amazon Timestream database table record.
   *
   * Dimensions cannot be named: `measure_name`, `measure_value`, or `time`. These names are reserved. Dimension names cannot start with `ts_` or `measure_value` and they cannot contain the colon (`:`) character.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value to write in this column of the database record.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
 *
 * @public
 */
export interface TimestreamTimestamp {
  /**
   * An expression that returns a long epoch time value.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The precision of the timestamp value that results from the expression described in `value`.
   *
   * Valid values: `SECONDS` | `MILLISECONDS` | `MICROSECONDS` | `NANOSECONDS`. The default is `MILLISECONDS`.
   *
   * @public
   */
  unit: string | undefined;
}

/**
 * The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the [Timestream](https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html) topic rule action documentation.
 *
 * @public
 */
export interface TimestreamAction {
  /**
   * The ARN of the role that grants permission to write to the Amazon Timestream database table.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of an Amazon Timestream database.
   *
   * @public
   */
  databaseName: string | undefined;

  /**
   * The name of the database table into which to write the measure records.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * Metadata attributes of the time series that are written in each measure record.
   *
   * @public
   */
  dimensions: TimestreamDimension[] | undefined;

  /**
   * Specifies an application-defined value to replace the default value assigned to the Timestream record's timestamp in the `time` column.
   *
   * You can use this property to specify the value and the precision of the Timestream record's timestamp. You can specify a value from the message payload or a value computed by a substitution template.
   *
   * If omitted, the topic rule action assigns the timestamp, in milliseconds, at the time it processed the rule.
   *
   * @public
   */
  timestamp?: TimestreamTimestamp | undefined;
}

/**
 * Describes the actions associated with a rule.
 *
 * @public
 */
export interface Action {
  /**
   * Write to a DynamoDB table.
   *
   * @public
   */
  dynamoDB?: DynamoDBAction | undefined;

  /**
   * Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
   *
   * @public
   */
  dynamoDBv2?: DynamoDBv2Action | undefined;

  /**
   * Invoke a Lambda function.
   *
   * @public
   */
  lambda?: LambdaAction | undefined;

  /**
   * Publish to an Amazon SNS topic.
   *
   * @public
   */
  sns?: SnsAction | undefined;

  /**
   * Publish to an Amazon SQS queue.
   *
   * @public
   */
  sqs?: SqsAction | undefined;

  /**
   * Write data to an Amazon Kinesis stream.
   *
   * @public
   */
  kinesis?: KinesisAction | undefined;

  /**
   * Publish to another MQTT topic.
   *
   * @public
   */
  republish?: RepublishAction | undefined;

  /**
   * Write to an Amazon S3 bucket.
   *
   * @public
   */
  s3?: S3Action | undefined;

  /**
   * Write to an Amazon Kinesis Firehose stream.
   *
   * @public
   */
  firehose?: FirehoseAction | undefined;

  /**
   * Capture a CloudWatch metric.
   *
   * @public
   */
  cloudwatchMetric?: CloudwatchMetricAction | undefined;

  /**
   * Change the state of a CloudWatch alarm.
   *
   * @public
   */
  cloudwatchAlarm?: CloudwatchAlarmAction | undefined;

  /**
   * Send data to CloudWatch Logs.
   *
   * @public
   */
  cloudwatchLogs?: CloudwatchLogsAction | undefined;

  /**
   * Write data to an Amazon OpenSearch Service domain.
   *
   * > **Note:** The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html).
   *
   * @public
   */
  elasticsearch?: ElasticsearchAction | undefined;

  /**
   * Send a message to a Salesforce IoT Cloud Input Stream.
   *
   * @public
   */
  salesforce?: SalesforceAction | undefined;

  /**
   * Sends message data to an IoT Analytics channel.
   *
   * @public
   */
  iotAnalytics?: IotAnalyticsAction | undefined;

  /**
   * Sends an input to an IoT Events detector.
   *
   * @public
   */
  iotEvents?: IotEventsAction | undefined;

  /**
   * Sends data from the MQTT message that triggered the rule to IoT SiteWise asset properties.
   *
   * @public
   */
  iotSiteWise?: IotSiteWiseAction | undefined;

  /**
   * Starts execution of a Step Functions state machine.
   *
   * @public
   */
  stepFunctions?: StepFunctionsAction | undefined;

  /**
   * The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the [Timestream](https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html) topic rule action documentation.
   *
   * @public
   */
  timestream?: TimestreamAction | undefined;

  /**
   * Send data to an HTTPS endpoint.
   *
   * @public
   */
  http?: HttpAction | undefined;

  /**
   * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
   *
   * @public
   */
  kafka?: KafkaAction | undefined;

  /**
   * Write data to an Amazon OpenSearch Service domain.
   *
   * @public
   */
  openSearch?: OpenSearchAction | undefined;

  /**
   * The Amazon Location Service rule action sends device location updates from an MQTT message to an Amazon Location tracker resource.
   *
   * @public
   */
  location?: LocationAction | undefined;

  /**
   * Write data to an InfluxDB database.
   *
   * @public
   */
  influxDB?: InfluxDBAction | undefined;
}

/**
 * The configuration of an ML Detect Security Profile.
 *
 * @public
 */
export interface MachineLearningDetectionConfig {
  /**
   * The sensitivity of anomalous behavior evaluation. Can be `Low`, `Medium`, or `High`.
   *
   * @public
   */
  confidenceLevel: ConfidenceLevel | undefined;
}

/**
 * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
 *
 * @public
 */
export interface StatisticalThreshold {
  /**
   * The percentile that resolves to a threshold value by which compliance with a behavior is determined. Metrics are collected over the specified period (`durationSeconds`) from all reporting devices in your account and statistical ranks are calculated. Then, the measurements from a device are collected over the same period. If the accumulated measurements from the device fall above or below (`comparisonOperator`) the value associated with the percentile specified, then the device is considered to be in compliance with the behavior, otherwise a violation occurs.
   *
   * @public
   */
  statistic?: string | undefined;
}

/**
 * The value to be compared with the `metric`.
 *
 * @public
 */
export interface MetricValue {
  /**
   * If the `comparisonOperator` calls for a numeric value, use this to specify that numeric value to be compared with the `metric`.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * If the `comparisonOperator` calls for a set of CIDRs, use this to specify that set to be compared with the `metric`.
   *
   * @public
   */
  cidrs?: string[] | undefined;

  /**
   * If the `comparisonOperator` calls for a set of ports, use this to specify that set to be compared with the `metric`.
   *
   * @public
   */
  ports?: number[] | undefined;

  /**
   * The numeral value of a metric.
   *
   * @public
   */
  number?: number | undefined;

  /**
   * The numeral values of a metric.
   *
   * @public
   */
  numbers?: number[] | undefined;

  /**
   * The string values of a metric.
   *
   * @public
   */
  strings?: string[] | undefined;
}

/**
 * The criteria by which the behavior is determined to be normal.
 *
 * @public
 */
export interface BehaviorCriteria {
  /**
   * The operator that relates the thing measured (`metric`) to the criteria (containing a `value` or `statisticalThreshold`). Valid operators include:
   *
   * - `string-list`: `in-set` and `not-in-set`
   * - `number-list`: `in-set` and `not-in-set`
   * - `ip-address-list`: `in-cidr-set` and `not-in-cidr-set`
   * - `number`: `less-than`, `less-than-equals`, `greater-than`, and `greater-than-equals`
   *
   * @public
   */
  comparisonOperator?: ComparisonOperator | undefined;

  /**
   * The value to be compared with the `metric`.
   *
   * @public
   */
  value?: MetricValue | undefined;

  /**
   * Use this to specify the time duration over which the behavior is evaluated, for those criteria that have a time dimension (for example, `NUM_MESSAGES_SENT`). For a `statisticalThreshhold` metric comparison, measurements from all devices are accumulated over this time duration before being used to calculate percentiles, and later, measurements from an individual device are also accumulated over this time duration before being given a percentile rank. Cannot be used with list-based metric datatypes.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
   *
   * @public
   */
  consecutiveDatapointsToAlarm?: number | undefined;

  /**
   * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
   *
   * @public
   */
  consecutiveDatapointsToClear?: number | undefined;

  /**
   * A statistical ranking (percentile)that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
   *
   * @public
   */
  statisticalThreshold?: StatisticalThreshold | undefined;

  /**
   * The configuration of an ML Detect
   *
   * @public
   */
  mlDetectionConfig?: MachineLearningDetectionConfig | undefined;
}

/**
 * The dimension of a metric.
 *
 * @public
 */
export interface MetricDimension {
  /**
   * A unique identifier for the dimension.
   *
   * @public
   */
  dimensionName: string | undefined;

  /**
   * Defines how the `dimensionValues` of a dimension are interpreted. For example, for dimension type TOPIC_FILTER, the `IN` operator, a message will be counted only if its topic matches one of the topic filters. With `NOT_IN` operator, a message will be counted only if it doesn't match any of the topic filters. The operator is optional: if it's not provided (is `null`), it will be interpreted as `IN`.
   *
   * @public
   */
  operator?: DimensionValueOperator | undefined;
}

/**
 * A Device Defender security profile behavior.
 *
 * @public
 */
export interface Behavior {
  /**
   * The name you've given to the behavior.
   *
   * @public
   */
  name: string | undefined;

  /**
   * What is measured by the behavior.
   *
   * @public
   */
  metric?: string | undefined;

  /**
   * The dimension for a metric in your behavior. For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric to only MQTT topics where the name matches the pattern specified in the dimension. This can't be used with custom metrics.
   *
   * @public
   */
  metricDimension?: MetricDimension | undefined;

  /**
   * The criteria that determine if a device is behaving normally in regard to the `metric`.
   *
   * > **Note:** In the IoT console, you can choose to be sent an alert through Amazon SNS when IoT Device Defender detects that a device is behaving anomalously.
   *
   * @public
   */
  criteria?: BehaviorCriteria | undefined;

  /**
   * Suppresses alerts.
   *
   * @public
   */
  suppressAlerts?: boolean | undefined;

  /**
   * Value indicates exporting metrics related to the behavior when it is true.
   *
   * @public
   */
  exportMetric?: boolean | undefined;
}

/**
 * The details of a violation event.
 *
 * @public
 */
export interface ViolationEventAdditionalInfo {
  /**
   * The sensitivity of anomalous behavior evaluation. Can be `Low`, `Medium`, or `High`.
   *
   * @public
   */
  confidenceLevel?: ConfidenceLevel | undefined;
}

/**
 * Information about an active Device Defender security profile behavior violation.
 *
 * @public
 */
export interface ActiveViolation {
  /**
   * The ID of the active violation.
   *
   * @public
   */
  violationId?: string | undefined;

  /**
   * The name of the thing responsible for the active violation.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The security profile with the behavior is in violation.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The behavior that is being violated.
   *
   * @public
   */
  behavior?: Behavior | undefined;

  /**
   * The value of the metric (the measurement) that caused the most recent violation.
   *
   * @public
   */
  lastViolationValue?: MetricValue | undefined;

  /**
   * The details of a violation event.
   *
   * @public
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo | undefined;

  /**
   * The verification state of the violation (detect alarm).
   *
   * @public
   */
  verificationState?: VerificationState | undefined;

  /**
   * The description of the verification state of the violation.
   *
   * @public
   */
  verificationStateDescription?: string | undefined;

  /**
   * The time the most recent violation occurred.
   *
   * @public
   */
  lastViolationTime?: Date | undefined;

  /**
   * The time the violation started.
   *
   * @public
   */
  violationStartTime?: Date | undefined;
}

/**
 * The metric you want to retain. Dimensions are optional.
 *
 * @public
 */
export interface MetricToRetain {
  /**
   * What is measured by the behavior.
   *
   * @public
   */
  metric: string | undefined;

  /**
   * The dimension of a metric. This can't be used with custom metrics.
   *
   * @public
   */
  metricDimension?: MetricDimension | undefined;

  /**
   * The value indicates exporting metrics related to the `MetricToRetain` when it's true.
   *
   * @public
   */
  exportMetric?: boolean | undefined;
}

/**
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
 *
 * @public
 */
export interface AddThingsToThingGroupParams {
  /**
   * The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you can't add a thing to more than one group in the same hierarchy.
   *
   * @public
   */
  thingGroupNames: string[] | undefined;

  /**
   * Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic thing groups.
   *
   * @public
   */
  overrideDynamicGroups?: boolean | undefined;
}

/**
 * @public
 */
export interface AddThingToBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * > **Note:** This call is asynchronous. It might take several seconds for the detachment to propagate.
   *
   * @public
   */
  billingGroupName?: string | undefined;

  /**
   * The ARN of the billing group.
   *
   * @public
   */
  billingGroupArn?: string | undefined;

  /**
   * The name of the thing to be added to the billing group.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ARN of the thing to be added to the billing group.
   *
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface AddThingToBillingGroupResponse {}

/**
 * @public
 */
export interface AddThingToThingGroupRequest {
  /**
   * The name of the group to which you are adding a thing.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The ARN of the group to which you are adding a thing.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The name of the thing to add to a group.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ARN of the thing to add to a group.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
   *
   * @public
   */
  overrideDynamicGroups?: boolean | undefined;
}

/**
 * @public
 */
export interface AddThingToThingGroupResponse {}

/**
 * The type of aggregation queries.
 *
 * @public
 */
export interface AggregationType {
  /**
   * The name of the aggregation type.
   *
   * @public
   */
  name: AggregationTypeName | undefined;

  /**
   * A list of the values of aggregation types.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * A structure containing the alert target ARN and the role ARN.
 *
 * @public
 */
export interface AlertTarget {
  /**
   * The Amazon Resource Name (ARN) of the notification target to which alerts are sent.
   *
   * @public
   */
  alertTargetArn: string | undefined;

  /**
   * The ARN of the role that grants permission to send alerts to the notification target.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Describes an IoT policy.
 *
 * @public
 */
export interface Policy {
  /**
   * The policy name.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;
}

/**
 * Contains information that allowed the authorization.
 *
 * @public
 */
export interface Allowed {
  /**
   * A list of policies that allowed the authentication.
   *
   * @public
   */
  policies?: Policy[] | undefined;
}

/**
 * The S3 location.
 *
 * @public
 */
export interface S3Location {
  /**
   * The S3 bucket.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The S3 key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The S3 bucket version.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * A specific software bill of matrerials associated with a software package version.
 *
 * @public
 */
export interface Sbom {
  /**
   * The S3 location.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface AssociateSbomWithPackageVersionRequest {
  /**
   * The name of the new software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * A specific software bill of matrerials associated with a software package version.
   *
   * @public
   */
  sbom: Sbom | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSbomWithPackageVersionResponse {
  /**
   * The name of the new software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * A specific software bill of matrerials associated with a software package version.
   *
   * @public
   */
  sbom?: Sbom | undefined;

  /**
   * The status of the initial validation for the software bill of materials against the Software Package Data Exchange (SPDX) and CycloneDX industry standard formats.
   *
   * @public
   */
  sbomValidationStatus?: SbomValidationStatus | undefined;
}

/**
 * @public
 */
export interface AssociateTargetsWithJobRequest {
  /**
   * A list of thing group ARNs that define the targets of the job.
   *
   * @public
   */
  targets: string[] | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * An optional comment string describing why the job was associated with the targets.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateTargetsWithJobResponse {
  /**
   * An ARN identifying the job.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * A short text description of the job.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * The name of the policy to attach.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The [identity](https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html) to which the policy is attached. For example, a thing group or a certificate.
   *
   * @public
   */
  target: string | undefined;
}

/**
 * The input for the AttachPrincipalPolicy operation.
 *
 * @public
 */
export interface AttachPrincipalPolicyRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * @public
 */
export interface AttachSecurityProfileRequest {
  /**
   * The security profile that is attached.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * The ARN of the target (thing group) to which the security profile is attached.
   *
   * @public
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * @public
 */
export interface AttachSecurityProfileResponse {}

/**
 * The input for the AttachThingPrincipal operation.
 *
 * @public
 */
export interface AttachThingPrincipalRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * The type of the relation you want to specify when you attach a principal to a thing.
   *
   * - `EXCLUSIVE_THING` - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal.
   *
   * - `NON_EXCLUSIVE_THING` - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.
   *
   * @public
   */
  thingPrincipalType?: ThingPrincipalType | undefined;
}

/**
 * The output from the AttachThingPrincipal operation.
 *
 * @public
 */
export interface AttachThingPrincipalResponse {}

/**
 * The attribute payload.
 *
 * @public
 */
export interface AttributePayload {
  /**
   * A JSON string containing up to three key-value pair in JSON format. For example:
   *
   * `\{\"attributes\":\{\"string1\":\"string2\"\}\}`
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Specifies whether the list of attributes provided in the `AttributePayload` is merged with the attributes stored in the registry, instead of overwriting them.
   *
   * To remove an attribute, call `UpdateThing` with an empty attribute value.
   *
   * > **Note:** The `merge` attribute is only valid when calling `UpdateThing` or `UpdateThingGroup`.
   *
   * @public
   */
  merge?: boolean | undefined;
}

/**
 * Which audit checks are enabled and disabled for this account.
 *
 * @public
 */
export interface AuditCheckConfiguration {
  /**
   * True if this audit check is enabled for this account.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * A structure containing the configName and corresponding configValue for configuring audit checks.
   *
   * @public
   */
  configuration?: Partial<Record<ConfigName, string>> | undefined;
}

/**
 * Information about the audit check.
 *
 * @public
 */
export interface AuditCheckDetails {
  /**
   * The completion status of this check. One of "IN_PROGRESS", "WAITING_FOR_DATA_COLLECTION", "CANCELED", "COMPLETED_COMPLIANT", "COMPLETED_NON_COMPLIANT", or "FAILED".
   *
   * @public
   */
  checkRunStatus?: AuditCheckRunStatus | undefined;

  /**
   * True if the check is complete and found all resources compliant.
   *
   * @public
   */
  checkCompliant?: boolean | undefined;

  /**
   * The number of resources on which the check was performed.
   *
   * @public
   */
  totalResourcesCount?: number | undefined;

  /**
   * The number of resources that were found noncompliant during the check.
   *
   * @public
   */
  nonCompliantResourcesCount?: number | undefined;

  /**
   * Describes how many of the non-compliant resources created during the evaluation of an audit check were marked as suppressed.
   *
   * @public
   */
  suppressedNonCompliantResourcesCount?: number | undefined;

  /**
   * The code of any error encountered when this check is performed during this audit. One of "INSUFFICIENT_PERMISSIONS" or "AUDIT_CHECK_DISABLED".
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The message associated with any error encountered when this check is performed during this audit.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The certificate issuer indentifier.
 *
 * @public
 */
export interface IssuerCertificateIdentifier {
  /**
   * The subject of the issuer certificate.
   *
   * @public
   */
  issuerCertificateSubject?: string | undefined;

  /**
   * The issuer ID.
   *
   * @public
   */
  issuerId?: string | undefined;

  /**
   * The issuer certificate serial number.
   *
   * @public
   */
  issuerCertificateSerialNumber?: string | undefined;
}

/**
 * Information about the version of the policy associated with the resource.
 *
 * @public
 */
export interface PolicyVersionIdentifier {
  /**
   * The name of the policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The ID of the version of the policy associated with the resource.
   *
   * @public
   */
  policyVersionId?: string | undefined;
}

/**
 * Information that identifies the noncompliant resource.
 *
 * @public
 */
export interface ResourceIdentifier {
  /**
   * The ID of the certificate attached to the resource.
   *
   * @public
   */
  deviceCertificateId?: string | undefined;

  /**
   * The ID of the CA certificate used to authorize the certificate.
   *
   * @public
   */
  caCertificateId?: string | undefined;

  /**
   * The ID of the Amazon Cognito identity pool.
   *
   * @public
   */
  cognitoIdentityPoolId?: string | undefined;

  /**
   * The client ID.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The version of the policy associated with the resource.
   *
   * @public
   */
  policyVersionIdentifier?: PolicyVersionIdentifier | undefined;

  /**
   * The account with which the resource is associated.
   *
   * @public
   */
  account?: string | undefined;

  /**
   * The ARN of the IAM role that has overly permissive actions.
   *
   * @public
   */
  iamRoleArn?: string | undefined;

  /**
   * The ARN of the role alias that has overly permissive actions.
   *
   * @public
   */
  roleAliasArn?: string | undefined;

  /**
   * The issuer certificate identifier.
   *
   * @public
   */
  issuerCertificateIdentifier?: IssuerCertificateIdentifier | undefined;

  /**
   * The ARN of the identified device certificate.
   *
   * @public
   */
  deviceCertificateArn?: string | undefined;
}

/**
 * Information about the resource that was noncompliant with the audit check.
 *
 * @public
 */
export interface NonCompliantResource {
  /**
   * The type of the noncompliant resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * Other information about the noncompliant resource.
   *
   * @public
   */
  additionalInfo?: Record<string, string> | undefined;
}

/**
 * Information about a related resource.
 *
 * @public
 */
export interface RelatedResource {
  /**
   * The type of resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * Information that identifies the resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * Other information about the resource.
   *
   * @public
   */
  additionalInfo?: Record<string, string> | undefined;
}

/**
 * The findings (results) of the audit.
 *
 * @public
 */
export interface AuditFinding {
  /**
   * A unique identifier for this set of audit findings. This identifier is used to apply mitigation tasks to one or more sets of findings.
   *
   * @public
   */
  findingId?: string | undefined;

  /**
   * The ID of the audit that generated this result (finding).
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The audit check that generated this result.
   *
   * @public
   */
  checkName?: string | undefined;

  /**
   * The time the audit started.
   *
   * @public
   */
  taskStartTime?: Date | undefined;

  /**
   * The time the result (finding) was discovered.
   *
   * @public
   */
  findingTime?: Date | undefined;

  /**
   * The severity of the result (finding).
   *
   * @public
   */
  severity?: AuditFindingSeverity | undefined;

  /**
   * The resource that was found to be noncompliant with the audit check.
   *
   * @public
   */
  nonCompliantResource?: NonCompliantResource | undefined;

  /**
   * The list of related resources.
   *
   * @public
   */
  relatedResources?: RelatedResource[] | undefined;

  /**
   * The reason the resource was noncompliant.
   *
   * @public
   */
  reasonForNonCompliance?: string | undefined;

  /**
   * A code that indicates the reason that the resource was noncompliant.
   *
   * @public
   */
  reasonForNonComplianceCode?: string | undefined;

  /**
   * Indicates whether the audit finding was suppressed or not during reporting.
   *
   * @public
   */
  isSuppressed?: boolean | undefined;
}

/**
 * Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
 *
 * @public
 */
export interface AuditMitigationActionExecutionMetadata {
  /**
   * The unique identifier for the task that applies the mitigation action.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The unique identifier for the findings to which the task and associated mitigation action are applied.
   *
   * @public
   */
  findingId?: string | undefined;

  /**
   * The friendly name of the mitigation action being applied by the task.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * The unique identifier for the mitigation action being applied by the task.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * The current status of the task being executed.
   *
   * @public
   */
  status?: AuditMitigationActionsExecutionStatus | undefined;

  /**
   * The date and time when the task was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time when the task was completed or canceled. Blank if the task is still running.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * If an error occurred, the code that indicates which type of error occurred.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * If an error occurred, a message that describes the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about an audit mitigation actions task that is returned by `ListAuditMitigationActionsTasks`.
 *
 * @public
 */
export interface AuditMitigationActionsTaskMetadata {
  /**
   * The unique identifier for the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The time at which the audit mitigation actions task was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The current state of the audit mitigation actions task.
   *
   * @public
   */
  taskStatus?: AuditMitigationActionsTaskStatus | undefined;
}

/**
 * Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
 *
 * @public
 */
export interface TaskStatisticsForAuditCheck {
  /**
   * The total number of findings to which a task is being applied.
   *
   * @public
   */
  totalFindingsCount?: number | undefined;

  /**
   * The number of findings for which at least one of the actions failed when applied.
   *
   * @public
   */
  failedFindingsCount?: number | undefined;

  /**
   * The number of findings for which all mitigation actions succeeded when applied.
   *
   * @public
   */
  succeededFindingsCount?: number | undefined;

  /**
   * The number of findings skipped because of filter conditions provided in the parameters to the command.
   *
   * @public
   */
  skippedFindingsCount?: number | undefined;

  /**
   * The number of findings to which the mitigation action task was canceled when applied.
   *
   * @public
   */
  canceledFindingsCount?: number | undefined;
}

/**
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
 *
 * @public
 */
export interface AuditMitigationActionsTaskTarget {
  /**
   * If the task will apply a mitigation action to findings from a specific audit, this value uniquely identifies the audit.
   *
   * @public
   */
  auditTaskId?: string | undefined;

  /**
   * If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.
   *
   * @public
   */
  findingIds?: string[] | undefined;

  /**
   * Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.
   *
   * @public
   */
  auditCheckToReasonCodeFilter?: Record<string, string[]> | undefined;
}

/**
 * Information about the targets to which audit notifications are sent.
 *
 * @public
 */
export interface AuditNotificationTarget {
  /**
   * The ARN of the target (SNS topic) to which audit notifications are sent.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The ARN of the role that grants permission to send notifications to the target.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * True if notifications to the target are enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * Filters out specific findings of a Device Defender audit.
 *
 * @public
 */
export interface AuditSuppression {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * Indicates whether a suppression should exist indefinitely or not.
   *
   * @public
   */
  suppressIndefinitely?: boolean | undefined;

  /**
   * The description of the audit suppression.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The audits that were performed.
 *
 * @public
 */
export interface AuditTaskMetadata {
  /**
   * The ID of this audit.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The status of this audit. One of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
   *
   * @public
   */
  taskStatus?: AuditTaskStatus | undefined;

  /**
   * The type of this audit. One of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".
   *
   * @public
   */
  taskType?: AuditTaskType | undefined;
}

/**
 * A collection of authorization information.
 *
 * @public
 */
export interface AuthInfo {
  /**
   * The type of action for which the principal is being authorized.
   *
   * @public
   */
  actionType?: ActionType | undefined;

  /**
   * The resources for which the principal is being authorized to perform the specified action.
   *
   * @public
   */
  resources: string[] | undefined;
}

/**
 * An object that specifies the authorization service for a domain.
 *
 * @public
 */
export interface AuthorizerConfig {
  /**
   * The name of the authorization service for a domain configuration.
   *
   * @public
   */
  defaultAuthorizerName?: string | undefined;

  /**
   * A Boolean that specifies whether the domain configuration's authorization service can be overridden.
   *
   * @public
   */
  allowAuthorizerOverride?: boolean | undefined;
}

/**
 * The authorizer description.
 *
 * @public
 */
export interface AuthorizerDescription {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName?: string | undefined;

  /**
   * The authorizer ARN.
   *
   * @public
   */
  authorizerArn?: string | undefined;

  /**
   * The authorizer's Lambda function ARN.
   *
   * @public
   */
  authorizerFunctionArn?: string | undefined;

  /**
   * The key used to extract the token from the HTTP headers.
   *
   * @public
   */
  tokenKeyName?: string | undefined;

  /**
   * The public keys used to validate the token signature returned by your custom authentication service.
   *
   * @public
   */
  tokenSigningPublicKeys?: Record<string, string> | undefined;

  /**
   * The status of the authorizer.
   *
   * @public
   */
  status?: AuthorizerStatus | undefined;

  /**
   * The UNIX timestamp of when the authorizer was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The UNIX timestamp of when the authorizer was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * Specifies whether IoT validates the token signature in an authorization request.
   *
   * @public
   */
  signingDisabled?: boolean | undefined;

  /**
   * When `true`, the result from the authorizer’s Lambda function is cached for the time specified in `refreshAfterInSeconds`. The cached result is used while the device reuses the same HTTP connection.
   *
   * @public
   */
  enableCachingForHttp?: boolean | undefined;
}

/**
 * The authorizer summary.
 *
 * @public
 */
export interface AuthorizerSummary {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName?: string | undefined;

  /**
   * The authorizer ARN.
   *
   * @public
   */
  authorizerArn?: string | undefined;
}

/**
 * Information that explicitly denies authorization.
 *
 * @public
 */
export interface ExplicitDeny {
  /**
   * The policies that denied the authorization.
   *
   * @public
   */
  policies?: Policy[] | undefined;
}

/**
 * Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
 *
 * @public
 */
export interface ImplicitDeny {
  /**
   * Policies that don't contain a matching allow or deny statement for the specified action on the specified resource.
   *
   * @public
   */
  policies?: Policy[] | undefined;
}

/**
 * Contains information that denied the authorization.
 *
 * @public
 */
export interface Denied {
  /**
   * Information that implicitly denies the authorization. When a policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
   *
   * @public
   */
  implicitDeny?: ImplicitDeny | undefined;

  /**
   * Information that explicitly denies the authorization.
   *
   * @public
   */
  explicitDeny?: ExplicitDeny | undefined;
}

/**
 * The authorizer result.
 *
 * @public
 */
export interface AuthResult {
  /**
   * Authorization information.
   *
   * @public
   */
  authInfo?: AuthInfo | undefined;

  /**
   * The policies and statements that allowed the specified action.
   *
   * @public
   */
  allowed?: Allowed | undefined;

  /**
   * The policies and statements that denied the specified action.
   *
   * @public
   */
  denied?: Denied | undefined;

  /**
   * The final authorization decision of this scenario. Multiple statements are taken into account when determining the authorization decision. An explicit deny statement can override multiple allow statements.
   *
   * @public
   */
  authDecision?: AuthDecision | undefined;

  /**
   * Contains any missing context values found while evaluating policy.
   *
   * @public
   */
  missingContextValues?: string[] | undefined;
}

/**
 * @public
 */
export interface CancelAuditMitigationActionsTaskRequest {
  /**
   * The unique identifier for the task that you want to cancel.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelAuditMitigationActionsTaskResponse {}

/**
 * @public
 */
export interface CancelAuditTaskRequest {
  /**
   * The ID of the audit you want to cancel. You can only cancel an audit that is "IN_PROGRESS".
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelAuditTaskResponse {}

/**
 * The input for the CancelCertificateTransfer operation.
 *
 * @public
 */
export interface CancelCertificateTransferRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;
}

/**
 * @public
 */
export interface CancelDetectMitigationActionsTaskRequest {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelDetectMitigationActionsTaskResponse {}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * (Optional)A reason code string that explains why the job was canceled.
   *
   * @public
   */
  reasonCode?: string | undefined;

  /**
   * An optional comment string describing why the job was canceled.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * (Optional) If `true` job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is `false`.
   *
   * Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {
  /**
   * The job ARN.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * A short text description of the job.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CancelJobExecutionRequest {
  /**
   * The ID of the job to be canceled.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the thing whose execution of the job will be canceled.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * (Optional) If `true` the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set `force` to `true`, then an `InvalidStateTransitionException` will be thrown. The default is `false`.
   *
   * Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * (Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)
   *
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.
   *
   * @public
   */
  statusDetails?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ClearDefaultAuthorizerRequest {}

/**
 * @public
 */
export interface ClearDefaultAuthorizerResponse {}

/**
 * @public
 */
export interface ConfirmTopicRuleDestinationRequest {
  /**
   * The token used to confirm ownership or access to the topic rule confirmation URL.
   *
   * @public
   */
  confirmationToken: string | undefined;
}

/**
 * @public
 */
export interface ConfirmTopicRuleDestinationResponse {}

/**
 * @public
 */
export interface CreateAuditSuppressionRequest {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * The epoch timestamp in seconds at which this suppression expires.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * Indicates whether a suppression should exist indefinitely or not.
   *
   * @public
   */
  suppressIndefinitely?: boolean | undefined;

  /**
   * The description of the audit suppression.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Each audit supression must have a unique client request token. If you try to create a new audit suppression with the same token as one that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAuditSuppressionResponse {}

/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthorizerRequest {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName: string | undefined;

  /**
   * The ARN of the authorizer's Lambda function.
   *
   * @public
   */
  authorizerFunctionArn: string | undefined;

  /**
   * The name of the token key used to extract the token from the HTTP headers.
   *
   * @public
   */
  tokenKeyName?: string | undefined;

  /**
   * The public keys used to verify the digital signature returned by your custom authentication service.
   *
   * @public
   */
  tokenSigningPublicKeys?: Record<string, string> | undefined;

  /**
   * The status of the create authorizer request.
   *
   * @public
   */
  status?: AuthorizerStatus | undefined;

  /**
   * Metadata which can be used to manage the custom authorizer.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies whether IoT validates the token signature in an authorization request.
   *
   * @public
   */
  signingDisabled?: boolean | undefined;

  /**
   * When `true`, the result from the authorizer’s Lambda function is cached for clients that use persistent HTTP connections. The results are cached for the time specified by the Lambda function in `refreshAfterInSeconds`. This value does not affect authorization of clients that use MQTT connections.
   *
   * The default value is `false`.
   *
   * @public
   */
  enableCachingForHttp?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAuthorizerResponse {
  /**
   * The authorizer's name.
   *
   * @public
   */
  authorizerName?: string | undefined;

  /**
   * The authorizer ARN.
   *
   * @public
   */
  authorizerArn?: string | undefined;
}

/**
 * The properties of a billing group.
 *
 * @public
 */
export interface BillingGroupProperties {
  /**
   * The description of the billing group.
   *
   * @public
   */
  billingGroupDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupRequest {
  /**
   * The name you wish to give to the billing group.
   *
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * The properties of the billing group.
   *
   * @public
   */
  billingGroupProperties?: BillingGroupProperties | undefined;

  /**
   * Metadata which can be used to manage the billing group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBillingGroupResponse {
  /**
   * The name you gave to the billing group.
   *
   * @public
   */
  billingGroupName?: string | undefined;

  /**
   * The ARN of the billing group.
   *
   * @public
   */
  billingGroupArn?: string | undefined;

  /**
   * The ID of the billing group.
   *
   * @public
   */
  billingGroupId?: string | undefined;
}

/**
 * The input for the CreateCertificateFromCsr operation.
 *
 * @public
 */
export interface CreateCertificateFromCsrRequest {
  /**
   * The certificate signing request (CSR).
   *
   * @public
   */
  certificateSigningRequest: string | undefined;

  /**
   * Specifies whether the certificate is active.
   *
   * @public
   */
  setAsActive?: boolean | undefined;
}

/**
 * The output from the CreateCertificateFromCsr operation.
 *
 * @public
 */
export interface CreateCertificateFromCsrResponse {
  /**
   * The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal for policy operations.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the certificate. Certificate management operations only take a certificateId.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateProviderRequest {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName: string | undefined;

  /**
   * The ARN of the Lambda function that defines the authentication logic.
   *
   * @public
   */
  lambdaFunctionArn: string | undefined;

  /**
   * A list of the operations that the certificate provider will use to generate certificates. Valid value: `CreateCertificateFromCsr`.
   *
   * @public
   */
  accountDefaultForOperations: CertificateProviderOperation[] | undefined;

  /**
   * A string that you can optionally pass in the `CreateCertificateProvider` request to make sure the request is idempotent.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Metadata which can be used to manage the certificate provider.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCertificateProviderResponse {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * The ARN of the certificate provider.
   *
   * @public
   */
  certificateProviderArn?: string | undefined;
}

/**
 * The value of a command parameter used to create a command execution.
 *
 * > **Note:** The `commandParameterValue` can only have one of the below fields listed.
 *
 * @public
 */
export interface CommandParameterValue {
  /**
   * An attribute of type String. For example:
   *
   * `"S": "Hello"`
   *
   * @public
   */
  S?: string | undefined;

  /**
   * An attribute of type Boolean. For example:
   *
   * `"BOOL": true`
   *
   * @public
   */
  B?: boolean | undefined;

  /**
   * An attribute of type Integer (Thirty-Two Bits).
   *
   * @public
   */
  I?: number | undefined;

  /**
   * An attribute of type Long.
   *
   * @public
   */
  L?: number | undefined;

  /**
   * An attribute of type Double (Sixty-Four Bits).
   *
   * @public
   */
  D?: number | undefined;

  /**
   * An attribute of type Binary. For example:
   *
   * `"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"`
   *
   * @public
   */
  BIN?: Uint8Array | undefined;

  /**
   * An attribute of type unsigned long.
   *
   * @public
   */
  UL?: string | undefined;
}

/**
 * The numerical range value type to compare a command parameter value against.
 *
 * @public
 */
export interface CommandParameterValueNumberRange {
  /**
   * The minimum value of a numerical range of a command parameter value.
   *
   * @public
   */
  min: string | undefined;

  /**
   * The maximum value of a numerical range of a command parameter value.
   *
   * @public
   */
  max: string | undefined;
}

/**
 * The comparison operand used to compare the defined value against the value supplied in request.
 *
 * @public
 */
export interface CommandParameterValueComparisonOperand {
  /**
   * An operand of number value type, defined as a string.
   *
   * @public
   */
  number?: string | undefined;

  /**
   * A List of operands of numerical value type, defined as strings.
   *
   * @public
   */
  numbers?: string[] | undefined;

  /**
   * An operand of string value type.
   *
   * @public
   */
  string?: string | undefined;

  /**
   * A List of operands of string value type.
   *
   * @public
   */
  strings?: string[] | undefined;

  /**
   * An operand of numerical range value type.
   *
   * @public
   */
  numberRange?: CommandParameterValueNumberRange | undefined;
}

/**
 * A condition for the command parameter that must be evaluated to true for successful creation of a command execution.
 *
 * @public
 */
export interface CommandParameterValueCondition {
  /**
   * The comparison operator for the command parameter.
   *
   * > **Note:** IN_RANGE, and NOT_IN_RANGE operators include boundary values.
   *
   * @public
   */
  comparisonOperator: CommandParameterValueComparisonOperator | undefined;

  /**
   * The comparison operand for the command parameter.
   *
   * @public
   */
  operand: CommandParameterValueComparisonOperand | undefined;
}

/**
 * A map of key-value pairs that describe the command.
 *
 * @public
 */
export interface CommandParameter {
  /**
   * The name of a specific parameter used in a command and command execution.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the command parameter.
   *
   * @public
   */
  type?: CommandParameterType | undefined;

  /**
   * Parameter value that overrides the default value, if set.
   *
   * @public
   */
  value?: CommandParameterValue | undefined;

  /**
   * The default value used to describe the command. This is the value assumed by the parameter if no other value is assigned to it.
   *
   * @public
   */
  defaultValue?: CommandParameterValue | undefined;

  /**
   * The list of conditions that a command parameter value must satisfy to create a command execution.
   *
   * @public
   */
  valueConditions?: CommandParameterValueCondition[] | undefined;

  /**
   * The description of the command parameter.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The command payload object that contains the instructions for the device to process.
 *
 * @public
 */
export interface CommandPayload {
  /**
   * The static payload file for the command.
   *
   * @public
   */
  content?: Uint8Array | undefined;

  /**
   * The content type that specifies the format type of the payload file. This field must use a type/subtype format, such as `application/json`. For information about various content types, see [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types).
   *
   * @public
   */
  contentType?: string | undefined;
}

/**
 * Configures the command to treat the `payloadTemplate` as a JSON document for preprocessing. This preprocessor substitutes placeholders with parameter values to generate the command execution request payload.
 *
 * @public
 */
export interface AwsJsonSubstitutionCommandPreprocessorConfig {
  /**
   * Converts the command preprocessor result to the format defined by this parameter, before sending it to the device.
   *
   * @public
   */
  outputFormat: OutputFormat | undefined;
}

/**
 * Configuration that determines how the `payloadTemplate` is processed by the service to generate the final payload sent to devices at `StartCommandExecution` API invocation.
 *
 * @public
 */
export interface CommandPreprocessor {
  /**
   * Configuration for the JSON substitution preprocessor.
   *
   * @public
   */
  awsJsonSubstitution?: AwsJsonSubstitutionCommandPreprocessorConfig | undefined;
}

/**
 * @public
 */
export interface CreateCommandRequest {
  /**
   * A unique identifier for the command. We recommend using UUID. Alpha-numeric characters, hyphens, and underscores are valid for use here.
   *
   * @public
   */
  commandId: string | undefined;

  /**
   * The namespace of the command. The MQTT reserved topics and validations will be used for command executions according to the namespace setting.
   *
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * The user-friendly name in the console for the command. This name doesn't have to be unique. You can update the user-friendly name after you define it.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A short text decription of the command.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The payload object for the static command.
   *
   * You can upload a static payload file from your local storage that contains the instructions for the device to process. The payload file can use any format. To make sure that the device correctly interprets the payload, we recommend you to specify the payload content type.
   *
   * @public
   */
  payload?: CommandPayload | undefined;

  /**
   * The payload template for the dynamic command.
   *
   * > **Note:** This parameter is required for dynamic commands where the command execution placeholders are supplied either from `mandatoryParameters` or when `StartCommandExecution` is invoked.
   *
   * @public
   */
  payloadTemplate?: string | undefined;

  /**
   * Configuration that determines how `payloadTemplate` is processed to generate command execution payload.
   *
   * > **Note:** This parameter is required for dynamic commands, along with `payloadTemplate`, and `mandatoryParameters`.
   *
   * @public
   */
  preprocessor?: CommandPreprocessor | undefined;

  /**
   * A list of parameters that are used by `StartCommandExecution` API for execution payload generation.
   *
   * @public
   */
  mandatoryParameters?: CommandParameter[] | undefined;

  /**
   * The IAM role that you must provide when using the `AWS-IoT-FleetWise` namespace. The role grants IoT Device Management the permission to access IoT FleetWise resources for generating the payload for the command. This field is not supported when you use the `AWS-IoT` namespace.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Name-value pairs that are used as metadata to manage a command.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCommandResponse {
  /**
   * The unique identifier for the command.
   *
   * @public
   */
  commandId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the command. For example, `arn:aws:iot:<region>:<accountid>:command/<commandId>`
   *
   * @public
   */
  commandArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomMetricRequest {
  /**
   * The name of the custom metric. This will be used in the metric report submitted from the device/thing. The name can't begin with `aws:`. You can't change the name after you define it.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The friendly name in the console for the custom metric. This name doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. You can update the friendly name after you define it.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the custom metric.
   *
   * > **Important:** The type `number` only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.
   *
   * @public
   */
  metricType: CustomMetricType | undefined;

  /**
   * Metadata that can be used to manage the custom metric.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Each custom metric must have a unique client request token. If you try to create a new custom metric that already exists with a different token, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomMetricResponse {
  /**
   * The name of the custom metric to be used in the metric report.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the custom metric. For example, `arn:aws-partition:iot:region:accountId:custommetric/metricName`
   *
   * @public
   */
  metricArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDimensionRequest {
  /**
   * A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the type of dimension. Supported types: `TOPIC_FILTER.`
   *
   * @public
   */
  type: DimensionType | undefined;

  /**
   * Specifies the value or list of values for the dimension. For `TOPIC_FILTER` dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
   *
   * @public
   */
  stringValues: string[] | undefined;

  /**
   * Metadata that can be used to manage the dimension.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDimensionResponse {
  /**
   * A unique identifier for the dimension.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created dimension.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * An object that speciﬁes the client certificate conﬁguration for a domain.
 *
 * @public
 */
export interface ClientCertificateConfig {
  /**
   * The ARN of the Lambda function that IoT invokes after mutual TLS authentication during the connection.
   *
   * @public
   */
  clientCertificateCallbackArn?: string | undefined;
}

/**
 * The server certificate configuration.
 *
 * @public
 */
export interface ServerCertificateConfig {
  /**
   * A Boolean value that indicates whether Online Certificate Status Protocol (OCSP) server certificate check is enabled or not.
   *
   * For more information, see [Server certificate configuration for OCSP stapling](https://docs.aws.amazon.com/iot/latest/developerguide/iot-custom-endpoints-cert-config.html) from Amazon Web Services IoT Core Developer Guide.
   *
   * @public
   */
  enableOCSPCheck?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) for a Lambda function that acts as a Request for Comments (RFC) 6960-compliant Online Certificate Status Protocol (OCSP) responder, supporting basic OCSP responses. The Lambda function accepts a base64-encoding of the OCSP request in the Distinguished Encoding Rules (DER) format. The Lambda function's response is also a base64-encoded OCSP response in the DER format. The response size must not exceed 4 kilobytes (KiB). The Lambda function must be in the same Amazon Web Services account and region as the domain configuration. For more information, see [Configuring server certificate OCSP for private endpoints in Amazon Web Services IoT Core](https://docs.aws.amazon.com/iot/latest/developerguide/iot-custom-endpoints-cert-config.html#iot-custom-endpoints-cert-config-ocsp-private-endpoint.html) from the Amazon Web Services IoT Core developer guide.
   *
   * @public
   */
  ocspLambdaArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for an X.509 certificate stored in Amazon Web Services Certificate Manager (ACM). If provided, Amazon Web Services IoT Core will use this certificate to validate the signature of the received OCSP response. The OCSP responder must sign responses using either this authorized responder certificate or the issuing certificate, depending on whether the ARN is provided or not. The certificate must be in the same Amazon Web Services account and region as the domain configuration.
   *
   * @public
   */
  ocspAuthorizedResponderArn?: string | undefined;
}

/**
 * An object that specifies the TLS configuration for a domain.
 *
 * @public
 */
export interface TlsConfig {
  /**
   * The security policy for a domain configuration. For more information, see [Security policies](https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html#tls-policy-table) in the *Amazon Web Services IoT Core developer guide*.
   *
   * @public
   */
  securityPolicy?: string | undefined;
}

/**
 * @public
 */
export interface CreateDomainConfigurationRequest {
  /**
   * The name of the domain configuration. This value must be unique to a region.
   *
   * @public
   */
  domainConfigurationName: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains.
   *
   * @public
   */
  serverCertificateArns?: string[] | undefined;

  /**
   * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
   *
   * @public
   */
  validationCertificateArn?: string | undefined;

  /**
   * An object that specifies the authorization service for a domain.
   *
   * @public
   */
  authorizerConfig?: AuthorizerConfig | undefined;

  /**
   * The type of service delivered by the endpoint.
   *
   * > **Note:** Amazon Web Services IoT Core currently supports only the `DATA` service type.
   *
   * @public
   */
  serviceType?: ServiceType | undefined;

  /**
   * Metadata which can be used to manage the domain configuration.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An object that specifies the TLS configuration for a domain.
   *
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * The server certificate configuration.
   *
   * @public
   */
  serverCertificateConfig?: ServerCertificateConfig | undefined;

  /**
   * An enumerated string that speciﬁes the authentication type.
   *
   * - `CUSTOM_AUTH_X509` - Use custom authentication and authorization with additional details from the X.509 client certificate.
   *
   * - `CUSTOM_AUTH` - Use custom authentication and authorization. For more information, see [Custom authentication and authorization](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `AWS_X509` - Use X.509 client certificates without custom authentication and authorization. For more information, see [X.509 client certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html).
   *
   * - `AWS_SIGV4` - Use Amazon Web Services Signature Version 4. For more information, see [IAM users, groups, and roles](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify authentication type. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * An enumerated string that speciﬁes the application-layer protocol.
   *
   * - `SECURE_MQTT` - MQTT over TLS.
   *
   * - `MQTT_WSS` - MQTT over WebSocket.
   *
   * - `HTTPS` - HTTP over TLS.
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify application_layer protocol. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  applicationProtocol?: ApplicationProtocol | undefined;

  /**
   * An object that speciﬁes the client certificate conﬁguration for a domain.
   *
   * @public
   */
  clientCertificateConfig?: ClientCertificateConfig | undefined;
}

/**
 * @public
 */
export interface CreateDomainConfigurationResponse {
  /**
   * The name of the domain configuration.
   *
   * @public
   */
  domainConfigurationName?: string | undefined;

  /**
   * The ARN of the domain configuration.
   *
   * @public
   */
  domainConfigurationArn?: string | undefined;
}

/**
 * Thing group properties.
 *
 * @public
 */
export interface ThingGroupProperties {
  /**
   * The thing group description.
   *
   * @public
   */
  thingGroupDescription?: string | undefined;

  /**
   * The thing group attributes in JSON format.
   *
   * @public
   */
  attributePayload?: AttributePayload | undefined;
}

/**
 * @public
 */
export interface CreateDynamicThingGroupRequest {
  /**
   * The dynamic thing group name to create.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The dynamic thing group properties.
   *
   * @public
   */
  thingGroupProperties?: ThingGroupProperties | undefined;

  /**
   * The dynamic thing group index name.
   *
   * > **Note:** Currently one index is supported: `AWS_Things`.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The dynamic thing group search query string.
   *
   * See [Query Syntax](https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html) for information about query string syntax.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The dynamic thing group query version.
   *
   * > **Note:** Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * Metadata which can be used to manage the dynamic thing group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDynamicThingGroupResponse {
  /**
   * The dynamic thing group name.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The dynamic thing group ARN.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The dynamic thing group ID.
   *
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * The dynamic thing group index name.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The dynamic thing group search query string.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The dynamic thing group query version.
   *
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetMetricRequest {
  /**
   * The name of the fleet metric to create.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The type of the aggregation query.
   *
   * @public
   */
  aggregationType: AggregationType | undefined;

  /**
   * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The field to aggregate.
   *
   * @public
   */
  aggregationField: string | undefined;

  /**
   * The fleet metric description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The query version.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by [CW metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html). Default to null.
   *
   * @public
   */
  unit?: FleetMetricUnit | undefined;

  /**
   * Metadata, which can be used to manage the fleet metric.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetMetricResponse {
  /**
   * The name of the fleet metric to create.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new fleet metric.
   *
   * @public
   */
  metricArn?: string | undefined;
}

/**
 * The criteria that determines how many retries are allowed for each failure type for a job.
 *
 * @public
 */
export interface RetryCriteria {
  /**
   * The type of job execution failures that can initiate a job retry.
   *
   * @public
   */
  failureType: RetryableFailureType | undefined;

  /**
   * The number of retries allowed for a failure type for the job.
   *
   * @public
   */
  numberOfRetries: number | undefined;
}

/**
 * The configuration that determines how many retries are allowed for each failure type for a job.
 *
 * @public
 */
export interface JobExecutionsRetryConfig {
  /**
   * The list of criteria that determines how many retries are allowed for each failure type for a job.
   *
   * @public
   */
  criteriaList: RetryCriteria[] | undefined;
}

/**
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
 *
 * @public
 */
export interface RateIncreaseCriteria {
  /**
   * The threshold for number of notified things that will initiate the increase in rate of rollout.
   *
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * The threshold for number of succeeded things that will initiate the increase in rate of rollout.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * Allows you to create an exponential rate of rollout for a job.
 *
 * @public
 */
export interface ExponentialRolloutRate {
  /**
   * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
   *
   * @public
   */
  baseRatePerMinute: number | undefined;

  /**
   * The exponential factor to increase the rate of rollout for a job.
   *
   * Amazon Web Services IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).
   *
   * @public
   */
  incrementFactor: number | undefined;

  /**
   * The criteria to initiate the increase in rate of rollout for a job.
   *
   * @public
   */
  rateIncreaseCriteria: RateIncreaseCriteria | undefined;
}

/**
 * Allows you to create a staged rollout of a job.
 *
 * @public
 */
export interface JobExecutionsRolloutConfig {
  /**
   * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
   *
   * @public
   */
  maximumPerMinute?: number | undefined;

  /**
   * The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.
   *
   * @public
   */
  exponentialRate?: ExponentialRolloutRate | undefined;
}

/**
 * Configuration for pre-signed S3 URLs.
 *
 * @public
 */
export interface PresignedUrlConfig {
  /**
   * The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
   *
   * > **Important:** For information about addressing the confused deputy problem, see [cross-service confused deputy prevention](https://docs.aws.amazon.com/iot/latest/developerguide/cross-service-confused-deputy-prevention.html) in the *Amazon Web Services IoT Core developer guide*.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.
   *
   * @public
   */
  expiresInSec?: number | undefined;
}

/**
 * An optional configuration within the `SchedulingConfig` to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
 *
 * @public
 */
export interface MaintenanceWindow {
  /**
   * Displays the start time of the next maintenance window.
   *
   * @public
   */
  startTime: string | undefined;

  /**
   * Displays the duration of the next maintenance window.
   *
   * @public
   */
  durationInMinutes: number | undefined;
}

/**
 * Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.
 *
 * @public
 */
export interface SchedulingConfig {
  /**
   * The time a job will begin rollout of the job document to all devices in the target group for a job. The `startTime` can be scheduled up to a year in advance and must be scheduled a minimum of thirty minutes from the current time. The date and time format for the `startTime` is YYYY-MM-DD for the date and HH:MM for the time.
   *
   * For more information on the syntax for `startTime` when using an API command or the Command Line Interface, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp).
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The time a job will stop rollout of the job document to all devices in the target group for a job. The `endTime` must take place no later than two years from the current time and be scheduled a minimum of thirty minutes from the current time. The minimum duration between `startTime` and `endTime` is thirty minutes. The maximum duration between `startTime` and `endTime` is two years. The date and time format for the `endTime` is YYYY-MM-DD for the date and HH:MM for the time.
   *
   * For more information on the syntax for `endTime` when using an API command or the Command Line Interface, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp).
   *
   * @public
   */
  endTime?: string | undefined;

  /**
   * Specifies the end behavior for all job executions after a job reaches the selected `endTime`. If `endTime` is not selected when creating the job, then `endBehavior` does not apply.
   *
   * @public
   */
  endBehavior?: JobEndBehavior | undefined;

  /**
   * An optional configuration within the `SchedulingConfig` to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
   *
   * @public
   */
  maintenanceWindows?: MaintenanceWindow[] | undefined;
}

/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
 *
 * @public
 */
export interface TimeoutConfig {
  /**
   * Specifies the amount of time, in minutes, this device has to finish execution of this job. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress timer can't be updated and will apply to all job executions for the job. Whenever a job execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and switch to the terminal `TIMED_OUT` status.
   *
   * @public
   */
  inProgressTimeoutInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * A job identifier which must be unique for your account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A list of things and thing groups to which the job should be sent.
   *
   * @public
   */
  targets: string[] | undefined;

  /**
   * An S3 link, or S3 object URL, to the job document. The link is an Amazon S3 object URL and is required if you don't specify a value for `document`.
   *
   * For example, `--document-source https://s3.region-code.amazonaws.com/example-firmware/device-firmware.1.0`
   *
   * For more information, see [Methods for accessing a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html).
   *
   * @public
   */
  documentSource?: string | undefined;

  /**
   * The job document. Required if you don't specify a value for `documentSource`.
   *
   * @public
   */
  document?: string | undefined;

  /**
   * A short text description of the job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration information for pre-signed S3 URLs.
   *
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
   *
   * > **Note:** We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * Allows you to create a staged rollout of the job.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * Allows you to create the criteria to abort a job.
   *
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the time expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * Metadata which can be used to manage the job.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The ARN of the job template used to create the job.
   *
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * Allows you to create the criteria to retry a job.
   *
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * Parameters of an Amazon Web Services managed template that you can specify to create the job document.
   *
   * > **Note:** `documentParameters` can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.
   *
   * @public
   */
  documentParameters?: Record<string, string> | undefined;

  /**
   * The configuration that allows you to schedule a job for a future date and time in addition to specifying the end behavior for each job execution.
   *
   * @public
   */
  schedulingConfig?: SchedulingConfig | undefined;

  /**
   * The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. The package version must be in either the Published or Deprecated state when the job deploys. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * **Note:**The following Length Constraints relates to a single ARN. Up to 25 package version ARNs are allowed.
   *
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * The job ARN.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier you assigned to this job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The job description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * A unique identifier for the job template. We recommend using a UUID. Alpha-numeric characters, "-", and "_" are valid for use here.
   *
   * @public
   */
  jobTemplateId: string | undefined;

  /**
   * The ARN of the job to use as the basis for the job template.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * An S3 link, or S3 object URL, to the job document. The link is an Amazon S3 object URL and is required if you don't specify a value for `document`.
   *
   * For example, `--document-source https://s3.region-code.amazonaws.com/example-firmware/device-firmware.1.0`
   *
   * For more information, see [Methods for accessing a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html).
   *
   * @public
   */
  documentSource?: string | undefined;

  /**
   * The job document. Required if you don't specify a value for `documentSource`.
   *
   * @public
   */
  document?: string | undefined;

  /**
   * A description of the job document.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Configuration for pre-signed S3 URLs.
   *
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * Allows you to create a staged rollout of a job.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * The criteria that determine when and how a job abort takes place.
   *
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * Metadata that can be used to manage the job template.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Allows you to create the criteria to retry a job.
   *
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job.
   *
   * @public
   */
  maintenanceWindows?: MaintenanceWindow[] | undefined;

  /**
   * The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. The package version must be in either the Published or Deprecated state when the job deploys. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * **Note:**The following Length Constraints relates to a single ARN. Up to 25 package version ARNs are allowed.
   *
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * The ARN of the job template.
   *
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * The unique identifier of the job template.
   *
   * @public
   */
  jobTemplateId?: string | undefined;
}

/**
 * The input for the CreateKeysAndCertificate operation.
 *
 * Requires permission to access the [CreateKeysAndCertificateRequest](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @public
 */
export interface CreateKeysAndCertificateRequest {
  /**
   * Specifies whether the certificate is active.
   *
   * @public
   */
  setAsActive?: boolean | undefined;
}

/**
 * Describes a key pair.
 *
 * @public
 */
export interface KeyPair {
  /**
   * The public key.
   *
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * The private key.
   *
   * @public
   */
  PrivateKey?: string | undefined;
}

/**
 * The output of the CreateKeysAndCertificate operation.
 *
 * @public
 */
export interface CreateKeysAndCertificateResponse {
  /**
   * The ARN of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the certificate. IoT issues a default subject name for the certificate (for example, IoT Certificate).
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * The generated key pair.
   *
   * @public
   */
  keyPair?: KeyPair | undefined;
}

/**
 * Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
 *
 * @public
 */
export interface EnableIoTLoggingParams {
  /**
   * The Amazon Resource Name (ARN) of the IAM role used for logging.
   *
   * @public
   */
  roleArnForLogging: string | undefined;

  /**
   * Specifies the type of information to be logged.
   *
   * @public
   */
  logLevel: LogLevel | undefined;
}

/**
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
 *
 * @public
 */
export interface PublishFindingToSnsParams {
  /**
   * The ARN of the topic to which you want to publish the findings.
   *
   * @public
   */
  topicArn: string | undefined;
}

/**
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
 *
 * @public
 */
export interface ReplaceDefaultPolicyVersionParams {
  /**
   * The name of the template to be applied. The only supported value is `BLANK_POLICY`.
   *
   * @public
   */
  templateName: PolicyTemplateName | undefined;
}

/**
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
 *
 * @public
 */
export interface UpdateCACertificateParams {
  /**
   * The action that you want to apply to the CA certificate. The only supported value is `DEACTIVATE`.
   *
   * @public
   */
  action: CACertificateUpdateAction | undefined;
}

/**
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
 *
 * @public
 */
export interface UpdateDeviceCertificateParams {
  /**
   * The action that you want to apply to the device certificate. The only supported value is `DEACTIVATE`.
   *
   * @public
   */
  action: DeviceCertificateUpdateAction | undefined;
}

/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
 *
 * @public
 */
export interface MitigationActionParams {
  /**
   * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
   *
   * @public
   */
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams | undefined;

  /**
   * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
   *
   * @public
   */
  updateCACertificateParams?: UpdateCACertificateParams | undefined;

  /**
   * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
   *
   * @public
   */
  addThingsToThingGroupParams?: AddThingsToThingGroupParams | undefined;

  /**
   * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
   *
   * @public
   */
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams | undefined;

  /**
   * Parameters to define a mitigation action that enables Amazon Web Services IoT Core logging at a specified level of detail.
   *
   * @public
   */
  enableIoTLoggingParams?: EnableIoTLoggingParams | undefined;

  /**
   * Parameters to define a mitigation action that publishes findings to Amazon Simple Notification Service (Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
   *
   * @public
   */
  publishFindingToSnsParams?: PublishFindingToSnsParams | undefined;
}

/**
 * @public
 */
export interface CreateMitigationActionRequest {
  /**
   * A friendly name for the action. Choose a friendly name that accurately describes the action (for example, `EnableLoggingAction`).
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * The ARN of the IAM role that is used to apply the mitigation action.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Defines the type of action and the parameters for that action.
   *
   * @public
   */
  actionParams: MitigationActionParams | undefined;

  /**
   * Metadata that can be used to manage the mitigation action.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMitigationActionResponse {
  /**
   * The ARN for the new mitigation action.
   *
   * @public
   */
  actionArn?: string | undefined;

  /**
   * A unique identifier for the new mitigation action.
   *
   * @public
   */
  actionId?: string | undefined;
}

/**
 * The criteria that determine when and how a job abort takes place.
 *
 * @public
 */
export interface AwsJobAbortCriteria {
  /**
   * The type of job execution failures that can initiate a job abort.
   *
   * @public
   */
  failureType: AwsJobAbortCriteriaFailureType | undefined;

  /**
   * The type of job action to take to initiate the job abort.
   *
   * @public
   */
  action: AwsJobAbortCriteriaAbortAction | undefined;

  /**
   * The minimum percentage of job execution failures that must occur to initiate the job abort.
   *
   * Amazon Web Services IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).
   *
   * @public
   */
  thresholdPercentage: number | undefined;

  /**
   * The minimum number of things which must receive job execution notifications before the job can be aborted.
   *
   * @public
   */
  minNumberOfExecutedThings: number | undefined;
}

/**
 * The criteria that determine when and how a job abort takes place.
 *
 * @public
 */
export interface AwsJobAbortConfig {
  /**
   * The list of criteria that determine when and how to abort the job.
   *
   * @public
   */
  abortCriteriaList: AwsJobAbortCriteria[] | undefined;
}

/**
 * The criteria to initiate the increase in rate of rollout for a job.
 *
 * @public
 */
export interface AwsJobRateIncreaseCriteria {
  /**
   * When this number of things have been notified, it will initiate an increase in the rollout rate.
   *
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
 *
 * @public
 */
export interface AwsJobExponentialRolloutRate {
  /**
   * The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout. This is the initial rate of the rollout.
   *
   * @public
   */
  baseRatePerMinute: number | undefined;

  /**
   * The rate of increase for a job rollout. The number of things notified is multiplied by this factor.
   *
   * @public
   */
  incrementFactor: number | undefined;

  /**
   * The criteria to initiate the increase in rate of rollout for a job.
   *
   * Amazon Web Services IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).
   *
   * @public
   */
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria | undefined;
}

/**
 * Configuration for the rollout of OTA updates.
 *
 * @public
 */
export interface AwsJobExecutionsRolloutConfig {
  /**
   * The maximum number of OTA update job executions started per minute.
   *
   * @public
   */
  maximumPerMinute?: number | undefined;

  /**
   * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
   *
   * @public
   */
  exponentialRate?: AwsJobExponentialRolloutRate | undefined;
}

/**
 * Configuration information for pre-signed URLs. Valid when `protocols` contains HTTP.
 *
 * @public
 */
export interface AwsJobPresignedUrlConfig {
  /**
   * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 1800 seconds. Pre-signed URLs are generated when a request for the job document is received.
   *
   * @public
   */
  expiresInSec?: number | undefined;
}

/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
 *
 * @public
 */
export interface AwsJobTimeoutConfig {
  /**
   * Specifies the amount of time, in minutes, this device has to finish execution of this job. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress timer can't be updated and will apply to all job executions for the job. Whenever a job execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and switch to the terminal `TIMED_OUT` status.
   *
   * @public
   */
  inProgressTimeoutInMinutes?: number | undefined;
}

/**
 * Describes the certificate chain being used when code signing a file.
 *
 * @public
 */
export interface CodeSigningCertificateChain {
  /**
   * The name of the certificate.
   *
   * @public
   */
  certificateName?: string | undefined;

  /**
   * A base64 encoded binary representation of the code signing certificate chain.
   *
   * @public
   */
  inlineDocument?: string | undefined;
}

/**
 * Describes the signature for a file.
 *
 * @public
 */
export interface CodeSigningSignature {
  /**
   * A base64 encoded binary representation of the code signing signature.
   *
   * @public
   */
  inlineDocument?: Uint8Array | undefined;
}

/**
 * Describes a custom method used to code sign a file.
 *
 * @public
 */
export interface CustomCodeSigning {
  /**
   * The signature for the file.
   *
   * @public
   */
  signature?: CodeSigningSignature | undefined;

  /**
   * The certificate chain.
   *
   * @public
   */
  certificateChain?: CodeSigningCertificateChain | undefined;

  /**
   * The hash algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses `SHA256` or `SHA1`, so you can pass either of them based on which was used for generating the signature.
   *
   * @public
   */
  hashAlgorithm?: string | undefined;

  /**
   * The signature algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses `ECDSA` or `RSA`, so you can pass either of them based on which was used for generating the signature.
   *
   * @public
   */
  signatureAlgorithm?: string | undefined;
}

/**
 * Describes the location of updated firmware in S3.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The S3 bucket that contains the updated firmware.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The S3 prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Describes the location of the updated firmware.
 *
 * @public
 */
export interface Destination {
  /**
   * Describes the location in S3 of the updated firmware.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes the code-signing profile.
 *
 * @public
 */
export interface SigningProfileParameter {
  /**
   * Certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The hardware platform of your device.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The location of the code-signing certificate on your device.
   *
   * @public
   */
  certificatePathOnDevice?: string | undefined;
}

/**
 * Information required to start a signing job.
 *
 * @public
 */
export interface StartSigningJobParameter {
  /**
   * Describes the code-signing profile.
   *
   * @public
   */
  signingProfileParameter?: SigningProfileParameter | undefined;

  /**
   * The code-signing profile name.
   *
   * @public
   */
  signingProfileName?: string | undefined;

  /**
   * The location to write the code-signed file.
   *
   * @public
   */
  destination?: Destination | undefined;
}

/**
 * Describes the method to use when code signing a file.
 *
 * @public
 */
export interface CodeSigning {
  /**
   * The ID of the `AWSSignerJob` which was created to sign the file.
   *
   * @public
   */
  awsSignerJobId?: string | undefined;

  /**
   * Describes the code-signing job.
   *
   * @public
   */
  startSigningJobParameter?: StartSigningJobParameter | undefined;

  /**
   * A custom method for code signing a file.
   *
   * @public
   */
  customCodeSigning?: CustomCodeSigning | undefined;
}

/**
 * Describes a group of files that can be streamed.
 *
 * @public
 */
export interface _Stream {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The ID of a file associated with a stream.
   *
   * @public
   */
  fileId?: number | undefined;
}

/**
 * The location of the OTA update.
 *
 * @public
 */
export interface FileLocation {
  /**
   * The stream that contains the OTA update.
   *
   * @public
   */
  stream?: _Stream | undefined;

  /**
   * The location of the updated firmware in S3.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * Describes a file to be associated with an OTA update.
 *
 * @public
 */
export interface OTAUpdateFile {
  /**
   * The name of the file.
   *
   * @public
   */
  fileName?: string | undefined;

  /**
   * An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.
   *
   * @public
   */
  fileType?: number | undefined;

  /**
   * The file version.
   *
   * @public
   */
  fileVersion?: string | undefined;

  /**
   * The location of the updated firmware.
   *
   * @public
   */
  fileLocation?: FileLocation | undefined;

  /**
   * The code signing method of the file.
   *
   * @public
   */
  codeSigning?: CodeSigning | undefined;

  /**
   * A list of name-attribute pairs. They won't be sent to devices as a part of the Job document.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOTAUpdateRequest {
  /**
   * The ID of the OTA update to be created.
   *
   * @public
   */
  otaUpdateId: string | undefined;

  /**
   * The description of the OTA update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The devices targeted to receive OTA updates.
   *
   * @public
   */
  targets: string[] | undefined;

  /**
   * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
   *
   * @public
   */
  protocols?: Protocol[] | undefined;

  /**
   * Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * Configuration for the rollout of OTA updates.
   *
   * @public
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig | undefined;

  /**
   * Configuration information for pre-signed URLs.
   *
   * @public
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig | undefined;

  /**
   * The criteria that determine when and how a job abort takes place.
   *
   * @public
   */
  awsJobAbortConfig?: AwsJobAbortConfig | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  awsJobTimeoutConfig?: AwsJobTimeoutConfig | undefined;

  /**
   * The files to be streamed by the OTA update.
   *
   * @public
   */
  files: OTAUpdateFile[] | undefined;

  /**
   * The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources to create an OTA update job.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A list of additional OTA update parameters, which are name-value pairs. They won't be sent to devices as a part of the Job document.
   *
   * @public
   */
  additionalParameters?: Record<string, string> | undefined;

  /**
   * Metadata which can be used to manage updates.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOTAUpdateResponse {
  /**
   * The OTA update ID.
   *
   * @public
   */
  otaUpdateId?: string | undefined;

  /**
   * The IoT job ID associated with the OTA update.
   *
   * @public
   */
  awsIotJobId?: string | undefined;

  /**
   * The OTA update ARN.
   *
   * @public
   */
  otaUpdateArn?: string | undefined;

  /**
   * The IoT job ARN associated with the OTA update.
   *
   * @public
   */
  awsIotJobArn?: string | undefined;

  /**
   * The OTA update status.
   *
   * @public
   */
  otaUpdateStatus?: OTAUpdateStatus | undefined;
}

/**
 * @public
 */
export interface CreatePackageRequest {
  /**
   * The name of the new software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * A summary of the package being created. This can be used to outline the package's contents or purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Metadata that can be used to manage the package.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageResponse {
  /**
   * The name of the software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the package.
   *
   * @public
   */
  packageArn?: string | undefined;

  /**
   * The package description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * A specific package version artifact associated with a software package version.
 *
 * @public
 */
export interface PackageVersionArtifact {
  /**
   * The S3 location.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface CreatePackageVersionRequest {
  /**
   * The name of the associated software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * A summary of the package version being created. This can be used to outline the package's contents or purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Metadata that can be used to define a package version’s configuration. For example, the S3 file location, configuration options that are being sent to the device or fleet.
   *
   * The combined size of all the attributes on a package version is limited to 3KB.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The various build components created during the build process such as libraries and configuration files that make up a software package version.
   *
   * @public
   */
  artifact?: PackageVersionArtifact | undefined;

  /**
   * The inline job document associated with a software package version used for a quick job deployment.
   *
   * @public
   */
  recipe?: string | undefined;

  /**
   * Metadata that can be used to manage the package version.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePackageVersionResponse {
  /**
   * The Amazon Resource Name (ARN) for the package.
   *
   * @public
   */
  packageVersionArn?: string | undefined;

  /**
   * The name of the associated software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The package version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Metadata that were added to the package version that can be used to define a package version’s configuration.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The status of the package version. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * Error reason for a package version failure during creation or update.
   *
   * @public
   */
  errorReason?: string | undefined;
}

/**
 * The input for the CreatePolicy operation.
 *
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The JSON document that describes the policy. **policyDocument** must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * Metadata which can be used to manage the policy.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The output from the CreatePolicy operation.
 *
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * The policy name.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The JSON document that describes the policy.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId?: string | undefined;
}

/**
 * The input for the CreatePolicyVersion operation.
 *
 * @public
 */
export interface CreatePolicyVersionRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
   *
   * @public
   */
  setAsDefault?: boolean | undefined;
}

/**
 * The output of the CreatePolicyVersion operation.
 *
 * @public
 */
export interface CreatePolicyVersionResponse {
  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The JSON document that describes the policy.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId?: string | undefined;

  /**
   * Specifies whether the policy version is the default.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningClaimRequest {
  /**
   * The name of the provisioning template to use.
   *
   * @public
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningClaimResponse {
  /**
   * The ID of the certificate.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The provisioning claim certificate.
   *
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * The provisioning claim key pair.
   *
   * @public
   */
  keyPair?: KeyPair | undefined;

  /**
   * The provisioning claim expiration time.
   *
   * @public
   */
  expiration?: Date | undefined;
}

/**
 * Structure that contains `payloadVersion` and `targetArn`.
 *
 * @public
 */
export interface ProvisioningHook {
  /**
   * The payload that was sent to the target function.
   *
   * *Note:* Only Lambda functions are currently supported.
   *
   * @public
   */
  payloadVersion?: string | undefined;

  /**
   * The ARN of the target function.
   *
   * *Note:* Only Lambda functions are currently supported.
   *
   * @public
   */
  targetArn: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningTemplateRequest {
  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The description of the provisioning template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The JSON formatted contents of the provisioning template.
   *
   * @public
   */
  templateBody: string | undefined;

  /**
   * True to enable the provisioning template, otherwise false.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The role ARN for the role associated with the provisioning template. This IoT role grants permission to provision a device.
   *
   * @public
   */
  provisioningRoleArn: string | undefined;

  /**
   * Creates a pre-provisioning hook template. Only supports template of type `FLEET_PROVISIONING`. For more information about provisioning template types, see [type](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type).
   *
   * @public
   */
  preProvisioningHook?: ProvisioningHook | undefined;

  /**
   * Metadata which can be used to manage the provisioning template.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is `FLEET_PROVISIONING`. For more information about provisioning template, see: [Provisioning template](https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html).
   *
   * @public
   */
  type?: TemplateType | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningTemplateResponse {
  /**
   * The ARN that identifies the provisioning template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The default version of the provisioning template.
   *
   * @public
   */
  defaultVersionId?: number | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningTemplateVersionRequest {
  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The JSON formatted contents of the provisioning template.
   *
   * @public
   */
  templateBody: string | undefined;

  /**
   * Sets a fleet provision template version as the default version.
   *
   * @public
   */
  setAsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningTemplateVersionResponse {
  /**
   * The ARN that identifies the provisioning template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The version of the provisioning template.
   *
   * @public
   */
  versionId?: number | undefined;

  /**
   * True if the provisioning template version is the default version, otherwise false.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRoleAliasRequest {
  /**
   * The role alias that points to a role ARN. This allows you to change the role without having to update the device.
   *
   * @public
   */
  roleAlias: string | undefined;

  /**
   * The role ARN.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.
   *
   * This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.
   *
   * @public
   */
  credentialDurationSeconds?: number | undefined;

  /**
   * Metadata which can be used to manage the role alias.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRoleAliasResponse {
  /**
   * The role alias.
   *
   * @public
   */
  roleAlias?: string | undefined;

  /**
   * The role alias ARN.
   *
   * @public
   */
  roleAliasArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduledAuditRequest {
  /**
   * How often the scheduled audit takes place, either `DAILY`, `WEEKLY`, `BIWEEKLY` or `MONTHLY`. The start time of each audit is determined by the system.
   *
   * @public
   */
  frequency: AuditFrequency | undefined;

  /**
   * The day of the month on which the scheduled audit takes place. This can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to `MONTHLY`. If days 29 to 31 are specified, and the month doesn't have that many days, the audit takes place on the `LAST` day of the month.
   *
   * @public
   */
  dayOfMonth?: string | undefined;

  /**
   * The day of the week on which the scheduled audit takes place, either `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, or `SAT`. This field is required if the `frequency` parameter is set to `WEEKLY` or `BIWEEKLY`.
   *
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;

  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  targetCheckNames: string[] | undefined;

  /**
   * The name you want to give to the scheduled audit. (Max. 128 chars)
   *
   * @public
   */
  scheduledAuditName: string | undefined;

  /**
   * Metadata that can be used to manage the scheduled audit.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateScheduledAuditResponse {
  /**
   * The ARN of the scheduled audit.
   *
   * @public
   */
  scheduledAuditArn?: string | undefined;
}

/**
 * Set configurations for metrics export.
 *
 * @public
 */
export interface MetricsExportConfig {
  /**
   * The MQTT topic that Device Defender Detect should publish messages to for metrics export.
   *
   * @public
   */
  mqttTopic: string | undefined;

  /**
   * This role ARN has permission to publish MQTT messages, after which Device Defender Detect can assume the role and publish messages on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileRequest {
  /**
   * The name you are giving to the security profile.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * A description of the security profile.
   *
   * @public
   */
  securityProfileDescription?: string | undefined;

  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * @public
   */
  behaviors?: Behavior[] | undefined;

  /**
   * Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
   *
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>> | undefined;

  /**
   * *Please use CreateSecurityProfileRequest$additionalMetricsToRetainV2 instead.*
   *
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
   *
   * @deprecated Use additionalMetricsToRetainV2.
   * @public
   */
  additionalMetricsToRetain?: string[] | undefined;

  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
   *
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[] | undefined;

  /**
   * Metadata that can be used to manage the security profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies the MQTT topic and role ARN required for metric export.
   *
   * @public
   */
  metricsExportConfig?: MetricsExportConfig | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileResponse {
  /**
   * The name you gave to the security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The ARN of the security profile.
   *
   * @public
   */
  securityProfileArn?: string | undefined;
}

/**
 * Represents a file to stream.
 *
 * @public
 */
export interface StreamFile {
  /**
   * The file ID.
   *
   * @public
   */
  fileId?: number | undefined;

  /**
   * The location of the file in S3.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateStreamRequest {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId: string | undefined;

  /**
   * A description of the stream.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The files to stream.
   *
   * @public
   */
  files: StreamFile[] | undefined;

  /**
   * An IAM role that allows the IoT service principal to access your S3 files.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Metadata which can be used to manage streams.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateStreamResponse {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The stream ARN.
   *
   * @public
   */
  streamArn?: string | undefined;

  /**
   * A description of the stream.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the stream.
   *
   * @public
   */
  streamVersion?: number | undefined;
}

/**
 * The input for the CreateThing operation.
 *
 * @public
 */
export interface CreateThingRequest {
  /**
   * The name of the thing to create.
   *
   * You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the thing type associated with the new thing.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The attribute payload, which consists of up to three name/value pairs in a JSON document. For example:
   *
   * `\{\"attributes\":\{\"string1\":\"string2\"\}\}`
   *
   * @public
   */
  attributePayload?: AttributePayload | undefined;

  /**
   * The name of the billing group the thing will be added to.
   *
   * @public
   */
  billingGroupName?: string | undefined;
}

/**
 * The output of the CreateThing operation.
 *
 * @public
 */
export interface CreateThingResponse {
  /**
   * The name of the new thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ARN of the new thing.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * The thing ID.
   *
   * @public
   */
  thingId?: string | undefined;
}

/**
 * @public
 */
export interface CreateThingGroupRequest {
  /**
   * The thing group name to create.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The name of the parent thing group.
   *
   * @public
   */
  parentGroupName?: string | undefined;

  /**
   * The thing group properties.
   *
   * @public
   */
  thingGroupProperties?: ThingGroupProperties | undefined;

  /**
   * Metadata which can be used to manage the thing group.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateThingGroupResponse {
  /**
   * The thing group name.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The thing group ARN.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The thing group ID.
   *
   * @public
   */
  thingGroupId?: string | undefined;
}

/**
 * An object that represents the connection attribute, thing attribute, and the user property key.
 *
 * @public
 */
export interface PropagatingAttribute {
  /**
   * The key of the user property key-value pair.
   *
   * @public
   */
  userPropertyKey?: string | undefined;

  /**
   * The user-defined thing attribute that is propagating for MQTT 5 message enrichment.
   *
   * @public
   */
  thingAttribute?: string | undefined;

  /**
   * The attribute associated with the connection between a device and Amazon Web Services IoT Core.
   *
   * @public
   */
  connectionAttribute?: string | undefined;
}

/**
 * The configuration to add user-defined properties to enrich MQTT 5 messages.
 *
 * @public
 */
export interface Mqtt5Configuration {
  /**
   * An object that represents the propagating thing attributes and the connection attributes.
   *
   * @public
   */
  propagatingAttributes?: PropagatingAttribute[] | undefined;
}

/**
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
 *
 * @public
 */
export interface ThingTypeProperties {
  /**
   * The description of the thing type.
   *
   * @public
   */
  thingTypeDescription?: string | undefined;

  /**
   * A list of searchable thing attribute names.
   *
   * @public
   */
  searchableAttributes?: string[] | undefined;

  /**
   * The configuration to add user-defined properties to enrich MQTT 5 messages.
   *
   * @public
   */
  mqtt5Configuration?: Mqtt5Configuration | undefined;
}

/**
 * The input for the CreateThingType operation.
 *
 * @public
 */
export interface CreateThingTypeRequest {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName: string | undefined;

  /**
   * The ThingTypeProperties for the thing type to create. It contains information about the new thing type including a description, and a list of searchable thing attribute names.
   *
   * @public
   */
  thingTypeProperties?: ThingTypeProperties | undefined;

  /**
   * Metadata which can be used to manage the thing type.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * The output of the CreateThingType operation.
 *
 * @public
 */
export interface CreateThingTypeResponse {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the thing type.
   *
   * @public
   */
  thingTypeArn?: string | undefined;

  /**
   * The thing type ID.
   *
   * @public
   */
  thingTypeId?: string | undefined;
}

/**
 * Describes a rule.
 *
 * @public
 */
export interface TopicRulePayload {
  /**
   * The SQL statement used to query the topic. For more information, see [IoT SQL Reference](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html) in the *IoT Developer Guide*.
   *
   * @public
   */
  sql: string | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The actions associated with the rule.
   *
   * @public
   */
  actions: Action[] | undefined;

  /**
   * Specifies whether the rule is disabled.
   *
   * @public
   */
  ruleDisabled?: boolean | undefined;

  /**
   * The version of the SQL rules engine to use when evaluating the rule.
   *
   * @public
   */
  awsIotSqlVersion?: string | undefined;

  /**
   * The action to take when an error occurs.
   *
   * @public
   */
  errorAction?: Action | undefined;
}

/**
 * The input for the CreateTopicRule operation.
 *
 * @public
 */
export interface CreateTopicRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The rule payload.
   *
   * @public
   */
  topicRulePayload: TopicRulePayload | undefined;

  /**
   * Metadata which can be used to manage the topic rule.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: string | undefined;
}

/**
 * HTTP URL destination configuration used by the topic rule's HTTP action.
 *
 * @public
 */
export interface HttpUrlDestinationConfiguration {
  /**
   * The URL IoT uses to confirm ownership of or access to the topic rule destination URL.
   *
   * @public
   */
  confirmationUrl: string | undefined;
}

/**
 * The configuration of an InfluxDB topic rule destination.
 *
 * @public
 */
export interface InfluxDBDestinationConfiguration {
  /**
   * The URL of the InfluxDB instance to write to.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The major version of the InfluxDB instance. Valid values are `V2` and `V3`.
   *
   * @public
   */
  influxDBVersion: InfluxDBVersion | undefined;

  /**
   * The ARN or name of the Amazon Web Services Secrets Manager secret that contains the InfluxDB API token.
   *
   * @public
   */
  secretId: string | undefined;

  /**
   * The type of the secret that contains the InfluxDB API token. Valid values are `SecretString` and `SecretBinary`.
   *
   * If omitted, IoT reads the secret as a string.
   *
   * @public
   */
  secretType?: InfluxDBSecretType | undefined;

  /**
   * The key to read from the secret value when the secret contains a JSON object. If omitted, IoT uses the entire secret value as the InfluxDB API token.
   *
   * @public
   */
  secretKey?: string | undefined;
}

/**
 * The configuration information for a virtual private cloud (VPC) destination.
 *
 * @public
 */
export interface VpcDestinationConfiguration {
  /**
   * The subnet IDs of the VPC destination.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The security groups of the VPC destination.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Configuration of the topic rule destination.
 *
 * @public
 */
export interface TopicRuleDestinationConfiguration {
  /**
   * Configuration of the HTTP URL.
   *
   * @public
   */
  httpUrlConfiguration?: HttpUrlDestinationConfiguration | undefined;

  /**
   * Configuration of the virtual private cloud (VPC) connection.
   *
   * @public
   */
  vpcConfiguration?: VpcDestinationConfiguration | undefined;

  /**
   * The configuration of an InfluxDB topic rule destination, which you specify when you call `CreateTopicRuleDestination`.
   *
   * @public
   */
  influxDBConfiguration?: InfluxDBDestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateTopicRuleDestinationRequest {
  /**
   * The topic rule destination configuration.
   *
   * @public
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

/**
 * HTTP URL destination properties.
 *
 * @public
 */
export interface HttpUrlDestinationProperties {
  /**
   * The URL used to confirm the HTTP topic rule destination URL.
   *
   * @public
   */
  confirmationUrl?: string | undefined;
}

/**
 * The properties of an existing InfluxDB topic rule destination, as returned by `CreateTopicRuleDestination` and `GetTopicRuleDestination`.
 *
 * @public
 */
export interface InfluxDBDestinationProperties {
  /**
   * The URL of the InfluxDB instance that the destination writes to.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The major version of the InfluxDB instance. Valid values are `V2` and `V3`.
   *
   * @public
   */
  influxDBVersion?: InfluxDBVersion | undefined;

  /**
   * The ARN or name of the Amazon Web Services Secrets Manager secret that contains the InfluxDB API token.
   *
   * @public
   */
  secretId?: string | undefined;

  /**
   * The type of the secret that contains the InfluxDB API token. Valid values are `SecretString` and `SecretBinary`.
   *
   * @public
   */
  secretType?: InfluxDBSecretType | undefined;

  /**
   * The key that is read from the secret value when the secret contains a JSON object.
   *
   * @public
   */
  secretKey?: string | undefined;
}

/**
 * The properties of a virtual private cloud (VPC) destination.
 *
 * @public
 */
export interface VpcDestinationProperties {
  /**
   * The subnet IDs of the VPC destination.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security groups of the VPC destination.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * A topic rule destination.
 *
 * @public
 */
export interface TopicRuleDestination {
  /**
   * The topic rule destination URL.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the topic rule destination. Valid values are:
   *
   * - **IN_PROGRESS**
   *
   *   A topic rule destination was created but has not been confirmed. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * - **ENABLED**
   *
   *   Confirmation was completed, and traffic to this destination is allowed. You can set `status` to `DISABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **DISABLED**
   *
   *   Confirmation was completed, and traffic to this destination is not allowed. You can set `status` to `ENABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **ERROR**
   *
   *   Confirmation could not be completed, for example if the confirmation timed out. You can call `GetTopicRuleDestination` for details about the error. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * @public
   */
  status?: TopicRuleDestinationStatus | undefined;

  /**
   * The date and time when the topic rule destination was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the topic rule destination was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * Additional details or reason why the topic rule destination is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Properties of the HTTP URL.
   *
   * @public
   */
  httpUrlProperties?: HttpUrlDestinationProperties | undefined;

  /**
   * Properties of the virtual private cloud (VPC) connection.
   *
   * @public
   */
  vpcProperties?: VpcDestinationProperties | undefined;

  /**
   * The properties of an InfluxDB topic rule destination, as returned by `CreateTopicRuleDestination` and `GetTopicRuleDestination`.
   *
   * @public
   */
  influxDBProperties?: InfluxDBDestinationProperties | undefined;
}

/**
 * @public
 */
export interface CreateTopicRuleDestinationResponse {
  /**
   * The topic rule destination.
   *
   * @public
   */
  topicRuleDestination?: TopicRuleDestination | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAuditConfigurationRequest {
  /**
   * If true, all scheduled audits are deleted.
   *
   * @public
   */
  deleteScheduledAudits?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAuditConfigurationResponse {}

/**
 * @public
 */
export interface DeleteAuditSuppressionRequest {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteAuditSuppressionResponse {}

/**
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * The name of the authorizer to delete.
   *
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthorizerResponse {}

/**
 * @public
 */
export interface DeleteBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the `DeleteBillingGroup` request is rejected with a `VersionConflictException`.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupResponse {}

/**
 * Input for the DeleteCACertificate operation.
 *
 * @public
 */
export interface DeleteCACertificateRequest {
  /**
   * The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;
}

/**
 * The output for the DeleteCACertificate operation.
 *
 * @public
 */
export interface DeleteCACertificateResponse {}

/**
 * The input for the DeleteCertificate operation.
 *
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * Forces the deletion of a certificate if it is inactive and is not attached to an IoT thing.
   *
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateProviderRequest {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateProviderResponse {}

/**
 * @public
 */
export interface DeleteCommandRequest {
  /**
   * The unique identifier of the command to be deleted.
   *
   * @public
   */
  commandId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommandResponse {
  /**
   * The status code for the command deletion request. The status code is in the 200 range for a successful request.
   *
   * - If the command hasn't been deprecated, or has been deprecated for a duration that is shorter than the maximum time out duration of 12 hours, when calling the `DeleteCommand` request, the deletion will be scheduled and a 202 status code will be returned. While the command is being deleted, it will be in a `pendingDeletion` state. Once the time out duration has been reached, the command will be permanently removed from your account.
   * - If the command has been deprecated for a duration that is longer than the maximum time out duration of 12 hours, when calling the `DeleteCommand` request, the command will be deleted immediately and a 204 status code will be returned.
   *
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @public
 */
export interface DeleteCommandExecutionRequest {
  /**
   * The unique identifier of the command execution that you want to delete from your account.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the target device for which you want to delete command executions.
   *
   * @public
   */
  targetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommandExecutionResponse {}

/**
 * @public
 */
export interface DeleteCustomMetricRequest {
  /**
   * The name of the custom metric.
   *
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomMetricResponse {}

/**
 * @public
 */
export interface DeleteDimensionRequest {
  /**
   * The unique identifier for the dimension that you want to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDimensionResponse {}

/**
 * @public
 */
export interface DeleteDomainConfigurationRequest {
  /**
   * The name of the domain configuration to be deleted.
   *
   * @public
   */
  domainConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainConfigurationResponse {}

/**
 * @public
 */
export interface DeleteDynamicThingGroupRequest {
  /**
   * The name of the dynamic thing group to delete.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The expected version of the dynamic thing group to delete.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDynamicThingGroupResponse {}

/**
 * @public
 */
export interface DeleteFleetMetricRequest {
  /**
   * The name of the fleet metric to delete.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The expected version of the fleet metric to delete.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * The ID of the job to be deleted.
   *
   * After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * (Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception will occur. The default is false.
   *
   * > **Note:** Deleting a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobExecutionRequest {
  /**
   * The ID of the job whose execution on a particular device will be deleted.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the thing whose job execution will be deleted.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The ID of the job execution to be deleted. The `executionNumber` refers to the execution of a particular job on a particular device.
   *
   * Note that once a job execution is deleted, the `executionNumber` may be reused by IoT, so be sure you get and use the correct value here.
   *
   * @public
   */
  executionNumber: number | undefined;

  /**
   * (Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.
   *
   * > **Note:** Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * The unique identifier of the job template to delete.
   *
   * @public
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionRequest {
  /**
   * The name of the mitigation action that you want to delete.
   *
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionResponse {}

/**
 * @public
 */
export interface DeleteOTAUpdateRequest {
  /**
   * The ID of the OTA update to delete.
   *
   * @public
   */
  otaUpdateId: string | undefined;

  /**
   * When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted. Ignored if the stream specified in the OTAUpdate is supplied by the user.
   *
   * @public
   */
  deleteStream?: boolean | undefined;

  /**
   * When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.
   *
   * @public
   */
  forceDeleteAWSJob?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteOTAUpdateResponse {}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * The name of the target software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageResponse {}

/**
 * @public
 */
export interface DeletePackageVersionRequest {
  /**
   * The name of the associated software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the target package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionResponse {}

/**
 * The input for the DeletePolicy operation.
 *
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * The name of the policy to delete.
   *
   * @public
   */
  policyName: string | undefined;
}

/**
 * The input for the DeletePolicyVersion operation.
 *
 * @public
 */
export interface DeletePolicyVersionRequest {
  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateRequest {
  /**
   * The name of the fleet provision template to delete.
   *
   * @public
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateResponse {}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * The name of the provisioning template version to delete.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The provisioning template version ID to delete.
   *
   * @public
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionResponse {}

/**
 * The input for the DeleteRegistrationCode operation.
 *
 * @public
 */
export interface DeleteRegistrationCodeRequest {}

/**
 * The output for the DeleteRegistrationCode operation.
 *
 * @public
 */
export interface DeleteRegistrationCodeResponse {}

/**
 * @public
 */
export interface DeleteRoleAliasRequest {
  /**
   * The role alias to delete.
   *
   * @public
   */
  roleAlias: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleAliasResponse {}

/**
 * @public
 */
export interface DeleteScheduledAuditRequest {
  /**
   * The name of the scheduled audit you want to delete.
   *
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledAuditResponse {}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * The name of the security profile to be deleted.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a `VersionConflictException` is thrown.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileResponse {}

/**
 * @public
 */
export interface DeleteStreamRequest {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamResponse {}

/**
 * The input for the DeleteThing operation.
 *
 * @public
 */
export interface DeleteThingRequest {
  /**
   * The name of the thing to delete.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the `DeleteThing` request is rejected with a `VersionConflictException`.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * The output of the DeleteThing operation.
 *
 * @public
 */
export interface DeleteThingResponse {}

/**
 * @public
 */
export interface DeleteThingGroupRequest {
  /**
   * The name of the thing group to delete.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The expected version of the thing group to delete.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteThingGroupResponse {}

/**
 * The input for the DeleteThingType operation.
 *
 * @public
 */
export interface DeleteThingTypeRequest {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName: string | undefined;
}

/**
 * The output for the DeleteThingType operation.
 *
 * @public
 */
export interface DeleteThingTypeResponse {}

/**
 * The input for the DeleteTopicRule operation.
 *
 * @public
 */
export interface DeleteTopicRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRuleDestinationRequest {
  /**
   * The ARN of the topic rule destination to delete.
   *
   * @public
   */
  arn: string | undefined;
}
