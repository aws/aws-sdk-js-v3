// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";
import {
  AbortAction,
  ActionType,
  AddThingsToThingGroupParams,
  AggregationTypeName,
  Allowed,
  AuditCheckRunStatus,
  AuditFindingSeverity,
  AuditFrequency,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskStatus,
  AuditTaskStatus,
  AuditTaskType,
  AuthDecision,
  AuthorizerStatus,
  AutoRegistrationStatus,
  AwsJobAbortCriteria,
  AwsJobExponentialRolloutRate,
  BehaviorCriteria,
  BehaviorCriteriaType,
  CACertificateStatus,
  CertificateMode,
  CertificateStatus,
  CertificateValidity,
  CodeSigning,
  CustomMetricType,
  DayOfWeek,
  Denied,
  DetectMitigationActionExecutionStatus,
  DetectMitigationActionsTaskStatistics,
  DetectMitigationActionsTaskStatus,
  DeviceDefenderIndexingMode,
  DimensionType,
  DomainConfigurationStatus,
  DynamoKeyType,
  EnableIoTLoggingParams,
  ErrorInfo,
  ExponentialRolloutRate,
  Field,
  FileLocation,
  FleetMetricUnit,
  HttpActionHeader,
  HttpAuthorization,
  HttpUrlDestinationConfiguration,
  HttpUrlDestinationProperties,
  HttpUrlDestinationSummary,
  JobExecutionFailureType,
  JobExecutionStatus,
  JobExecutionStatusDetails,
  JobExecutionSummary,
  JobProcessDetails,
  JobStatus,
  KinesisAction,
  LambdaAction,
  LogLevel,
  LogTargetType,
  MetricDimension,
  MetricValue,
  ModelStatus,
  NamedShadowIndexingMode,
  NonCompliantResource,
  OpenSearchAction,
  OTAUpdateStatus,
  PolicyVersionIdentifier,
  PublishFindingToSnsParams,
  PutAssetPropertyValueEntry,
  PutItemInput,
  RelatedResource,
  ReplaceDefaultPolicyVersionParams,
  ReportType,
  RepublishAction,
  RetryCriteria,
  S3Action,
  S3Location,
  SalesforceAction,
  ServerCertificateStatus,
  ServiceType,
  SnsAction,
  SqsAction,
  Status,
  StepFunctionsAction,
  TargetSelection,
  TermsAggregation,
  ThingConnectivity,
  ThingConnectivityIndexingMode,
  ThingGroupIndexingMode,
  ThingIndexingMode,
  TimestreamAction,
  TopicRuleDestinationStatus,
  TransferData,
  UpdateCACertificateParams,
  UpdateDeviceCertificateParams,
  VerificationState,
  ViolationEventAdditionalInfo,
  ViolationEventType,
  VpcDestinationConfiguration,
  VpcDestinationProperties,
  VpcDestinationSummary,
} from "./models_2";

/**
 * <p>The criteria that determine when and how a job abort takes place.</p>
 */
export interface AbortCriteria {
  /**
   * <p>The type of job execution failures that can initiate a job abort.</p>
   */
  failureType: JobExecutionFailureType | string | undefined;

  /**
   * <p>The type of job action to take to initiate the job abort.</p>
   */
  action: AbortAction | string | undefined;

  /**
   * <p>The minimum percentage of job execution failures that must occur to initiate the job abort.</p>
   *         <p>Amazon Web Services IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).</p>
   */
  thresholdPercentage: number | undefined;

  /**
   * <p>The minimum number of things which must receive job execution notifications before the job
   *             can be aborted.</p>
   */
  minNumberOfExecutedThings: number | undefined;
}

export namespace AbortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbortCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria that determine when and how a job abort takes place.</p>
 */
export interface AbortConfig {
  /**
   * <p>The list of criteria that determine when and how to abort the job.</p>
   */
  criteriaList: AbortCriteria[] | undefined;
}

export namespace AbortConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AbortConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request is not valid.</p>
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
 * <p>The specified resource does not exist.</p>
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
 * <p>The service is temporarily unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The rate exceeds the limit.</p>
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
 * <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 */
export class TransferAlreadyCompletedException extends __BaseException {
  readonly name: "TransferAlreadyCompletedException" = "TransferAlreadyCompletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferAlreadyCompletedException, __BaseException>) {
    super({
      name: "TransferAlreadyCompletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferAlreadyCompletedException.prototype);
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>Describes an action that updates a CloudWatch alarm.</p>
 */
export interface CloudwatchAlarmAction {
  /**
   * <p>The IAM role that allows access to the CloudWatch alarm.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The CloudWatch alarm name.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The reason for the alarm change.</p>
   */
  stateReason: string | undefined;

  /**
   * <p>The value of the alarm state. Acceptable values are: OK, ALARM,
   *          INSUFFICIENT_DATA.</p>
   */
  stateValue: string | undefined;
}

export namespace CloudwatchAlarmAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudwatchAlarmAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action that sends data to CloudWatch Logs.</p>
 */
export interface CloudwatchLogsAction {
  /**
   * <p>The IAM role that allows access to the CloudWatch log.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The CloudWatch log group to which the action sends data.</p>
   */
  logGroupName: string | undefined;
}

export namespace CloudwatchLogsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudwatchLogsAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action that captures a CloudWatch metric.</p>
 */
export interface CloudwatchMetricAction {
  /**
   * <p>The IAM role that allows access to the CloudWatch metric.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The CloudWatch metric namespace name.</p>
   */
  metricNamespace: string | undefined;

  /**
   * <p>The CloudWatch metric name.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The CloudWatch metric value.</p>
   */
  metricValue: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit">metric
   *             unit</a> supported by CloudWatch.</p>
   */
  metricUnit: string | undefined;

  /**
   * <p>An optional <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp">Unix timestamp</a>.</p>
   */
  metricTimestamp?: string;
}

export namespace CloudwatchMetricAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudwatchMetricAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action to write to a DynamoDB table.</p>
 *          <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code>
 *          values must match the values used when you created the table.</p>
 *          <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a
 *          substitution template syntax. These templates provide data at runtime. The syntax is as
 *          follows: ${<i>sql-expression</i>}.</p>
 *          <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON
 *          properties, comparisons, calculations, and functions. For example, the following field uses
 *          the third level of the topic:</p>
 *          <p>
 *             <code>"hashKeyValue": "${topic(3)}"</code>
 *          </p>
 *          <p>The following field uses the timestamp:</p>
 *          <p>
 *             <code>"rangeKeyValue": "${timestamp()}"</code>
 *          </p>
 */
export interface DynamoDBAction {
  /**
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The type of operation to be performed. This follows the substitution template, so it
   *          can be <code>${operation}</code>, but the substitution must result in one of the following:
   *             <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</p>
   */
  operation?: string;

  /**
   * <p>The hash key name.</p>
   */
  hashKeyField: string | undefined;

  /**
   * <p>The hash key value.</p>
   */
  hashKeyValue: string | undefined;

  /**
   * <p>The hash key type. Valid values are "STRING" or "NUMBER"</p>
   */
  hashKeyType?: DynamoKeyType | string;

  /**
   * <p>The range key name.</p>
   */
  rangeKeyField?: string;

  /**
   * <p>The range key value.</p>
   */
  rangeKeyValue?: string;

  /**
   * <p>The range key type. Valid values are "STRING" or "NUMBER"</p>
   */
  rangeKeyType?: DynamoKeyType | string;

  /**
   * <p>The action payload. This name can be customized.</p>
   */
  payloadField?: string;
}

export namespace DynamoDBAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action to write to a DynamoDB table.</p>
 *          <p>This DynamoDB action writes each attribute in the message payload into it's own
 *          column in the DynamoDB table.</p>
 */
export interface DynamoDBv2Action {
  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies the DynamoDB table to which the message data will be written. For
   *          example:</p>
   *          <p>
   *             <code>{ "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName":
   *             "my-table" } } }</code>
   *          </p>
   *          <p>Each attribute in the message payload will be written to a separate column in the
   *          DynamoDB database.</p>
   */
  putItem: PutItemInput | undefined;
}

export namespace DynamoDBv2Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBv2Action): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action that writes data to an Amazon OpenSearch Service
 *          domain.</p>
 *          <note>
 *             <p>The <code>Elasticsearch</code> action can only be used by existing rule actions. To create a
 *          new rule action or to update an existing rule action, use the
 *          <code>OpenSearch</code> rule action instead. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearchAction</a>.</p>
 *          </note>
 */
export interface ElasticsearchAction {
  /**
   * <p>The IAM role ARN that has access to OpenSearch.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The endpoint of your OpenSearch domain.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The index where you want to store your data.</p>
   */
  index: string | undefined;

  /**
   * <p>The type of document you are storing.</p>
   */
  type: string | undefined;

  /**
   * <p>The unique identifier for the document you are storing.</p>
   */
  id: string | undefined;
}

export namespace ElasticsearchAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action that writes data to an Amazon Kinesis Firehose stream.</p>
 */
export interface FirehoseAction {
  /**
   * <p>The IAM role that grants access to the Amazon Kinesis Firehose stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The delivery stream name.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>A character separator that will be used to separate records written to the Firehose
   *          stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ','
   *          (comma).</p>
   */
  separator?: string;

  /**
   * <p>Whether to deliver the Kinesis Data Firehose stream as a batch by using <a href="https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html">
   *                <code>PutRecordBatch</code>
   *             </a>.  The default value is
   *          <code>false</code>.</p>
   *          <p>When <code>batchMode</code> is <code>true</code> and the rule's SQL statement
   *          evaluates to an Array, each Array element forms one record in the <a href="https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html">
   *                <code>PutRecordBatch</code>
   *             </a> request. The resulting array can't have more
   *          than 500 records.</p>
   */
  batchMode?: boolean;
}

export namespace FirehoseAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirehoseAction): any => ({
    ...obj,
  });
}

/**
 * <p>Send data to an HTTPS endpoint.</p>
 */
export interface HttpAction {
  /**
   * <p>The endpoint URL. If substitution templates are used in the URL, you must also specify a
   *             <code>confirmationUrl</code>. If this is a new destination, a new
   *             <code>TopicRuleDestination</code> is created if possible.</p>
   */
  url: string | undefined;

  /**
   * <p>The URL to which IoT sends a confirmation message. The value of the confirmation URL
   *          must be a prefix of the endpoint URL. If you do not specify a confirmation URL IoT uses
   *          the endpoint URL as the confirmation URL. If you use substitution templates in the
   *          confirmationUrl, you must create and enable topic rule destinations that match each
   *          possible value of the substitution template before traffic is allowed to your endpoint
   *          URL.</p>
   */
  confirmationUrl?: string;

  /**
   * <p>The HTTP headers to send with the message data.</p>
   */
  headers?: HttpActionHeader[];

  /**
   * <p>The authentication method to use when sending data to an HTTPS endpoint.</p>
   */
  auth?: HttpAuthorization;
}

export namespace HttpAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpAction): any => ({
    ...obj,
  });
}

/**
 * <p>Sends message data to an IoT Analytics channel.</p>
 */
export interface IotAnalyticsAction {
  /**
   * <p>(deprecated) The ARN of the IoT Analytics channel to which message data will be
   *          sent.</p>
   */
  channelArn?: string;

  /**
   * <p>The name of the IoT Analytics channel to which message data will be sent.</p>
   */
  channelName?: string;

  /**
   * <p>Whether to process the action as a batch. The default value is
   *          <code>false</code>.</p>
   *          <p>When <code>batchMode</code> is <code>true</code> and the rule SQL statement evaluates
   *          to an Array, each Array element is delivered as a separate message when passed by <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html">
   *                <code>BatchPutMessage</code>
   *             </a> to the IoT Analytics channel. The resulting array can't have more
   *          than 100 messages.</p>
   */
  batchMode?: boolean;

  /**
   * <p>The ARN of the role which has a policy that grants IoT Analytics permission to send
   *          message data via IoT Analytics (iotanalytics:BatchPutMessage).</p>
   */
  roleArn?: string;
}

export namespace IotAnalyticsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotAnalyticsAction): any => ({
    ...obj,
  });
}

/**
 * <p>Sends an input to an IoT Events detector.</p>
 */
export interface IotEventsAction {
  /**
   * <p>The name of the IoT Events input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The ID of the message. The default <code>messageId</code> is a new UUID value.</p>
   *          <p>When <code>batchMode</code> is <code>true</code>, you can't specify a
   *         <code>messageId</code>--a new UUID value will be assigned.</p>
   *          <p>Assign a value to this property to ensure that only one input (message) with a given
   *             <code>messageId</code> will be processed by an IoT Events detector.</p>
   */
  messageId?: string;

  /**
   * <p>Whether to process the event actions as a batch. The default value is
   *             <code>false</code>.</p>
   *          <p>When <code>batchMode</code> is <code>true</code>, you can't specify a
   *             <code>messageId</code>. </p>
   *          <p>When <code>batchMode</code> is <code>true</code> and the rule SQL statement evaluates
   *          to an Array, each Array element is treated as a separate message when it's sent to IoT
   *          Events by calling <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html">
   *                <code>BatchPutMessage</code>
   *             </a>.  The resulting array can't have more
   *          than 10 messages.</p>
   */
  batchMode?: boolean;

  /**
   * <p>The ARN of the role that grants IoT permission to send an input to an IoT
   *       Events detector. ("Action":"iotevents:BatchPutMessage").</p>
   */
  roleArn: string | undefined;
}

export namespace IotEventsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotEventsAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action to send data from an MQTT message that triggered the rule to IoT
 *       SiteWise asset properties.</p>
 */
export interface IotSiteWiseAction {
  /**
   * <p>A list of asset property value entries.</p>
   */
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[] | undefined;

  /**
   * <p>The ARN of the role that grants IoT permission to send an asset property value to IoT SiteWise. (<code>"Action": "iotsitewise:BatchPutAssetPropertyValue"</code>). The trust
   *       policy can restrict access to specific asset hierarchy paths.</p>
   */
  roleArn: string | undefined;
}

export namespace IotSiteWiseAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseAction): any => ({
    ...obj,
  });
}

/**
 * <p>Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.</p>
 */
export interface KafkaAction {
  /**
   * <p>The ARN of Kafka action's VPC <code>TopicRuleDestination</code>.</p>
   */
  destinationArn: string | undefined;

  /**
   * <p>The Kafka topic for messages to be sent to the Kafka broker.</p>
   */
  topic: string | undefined;

  /**
   * <p>The Kafka message key.</p>
   */
  key?: string;

  /**
   * <p>The Kafka message partition.</p>
   */
  partition?: string;

  /**
   * <p>Properties of the Apache Kafka producer client.</p>
   */
  clientProperties: Record<string, string> | undefined;
}

export namespace KafkaAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the actions associated with a rule.</p>
 */
export interface Action {
  /**
   * <p>Write to a DynamoDB table.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * <p>Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows
   *          you to write each attribute in an MQTT message payload into a separate DynamoDB
   *          column.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * <p>Invoke a Lambda function.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Publish to an Amazon SNS topic.</p>
   */
  sns?: SnsAction;

  /**
   * <p>Publish to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Write data to an Amazon Kinesis stream.</p>
   */
  kinesis?: KinesisAction;

  /**
   * <p>Publish to another MQTT topic.</p>
   */
  republish?: RepublishAction;

  /**
   * <p>Write to an Amazon S3 bucket.</p>
   */
  s3?: S3Action;

  /**
   * <p>Write to an Amazon Kinesis Firehose stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Capture a CloudWatch metric.</p>
   */
  cloudwatchMetric?: CloudwatchMetricAction;

  /**
   * <p>Change the state of a CloudWatch alarm.</p>
   */
  cloudwatchAlarm?: CloudwatchAlarmAction;

  /**
   * <p>Send data to CloudWatch Logs.</p>
   */
  cloudwatchLogs?: CloudwatchLogsAction;

  /**
   * <p>Write data to an Amazon OpenSearch Service domain.</p>
   *          <note>
   *             <p>The <code>Elasticsearch</code> action can only be used by existing rule actions.
   *             To create a new rule action or to update an existing rule action, use the
   *             <code>OpenSearch</code> rule action instead. For more information, see
   *             <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearchAction</a>.</p>
   *          </note>
   */
  elasticsearch?: ElasticsearchAction;

  /**
   * <p>Send a message to a Salesforce IoT Cloud Input Stream.</p>
   */
  salesforce?: SalesforceAction;

  /**
   * <p>Sends message data to an IoT Analytics channel.</p>
   */
  iotAnalytics?: IotAnalyticsAction;

  /**
   * <p>Sends an input to an IoT Events detector.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Sends data from the MQTT message that triggered the rule to IoT SiteWise asset
   *       properties.</p>
   */
  iotSiteWise?: IotSiteWiseAction;

  /**
   * <p>Starts execution of a Step Functions state machine.</p>
   */
  stepFunctions?: StepFunctionsAction;

  /**
   * <p>The Timestream rule action writes attributes (measures) from an MQTT message
   *          into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a>
   *             topic rule action documentation.</p>
   */
  timestream?: TimestreamAction;

  /**
   * <p>Send data to an HTTPS endpoint.</p>
   */
  http?: HttpAction;

  /**
   * <p>Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.</p>
   */
  kafka?: KafkaAction;

  /**
   * <p>Write data to an Amazon OpenSearch Service domain.</p>
   */
  openSearch?: OpenSearchAction;
}

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>A Device Defender security profile behavior.</p>
 */
export interface Behavior {
  /**
   * <p>The name
   *       you've given to the behavior.</p>
   */
  name: string | undefined;

  /**
   * <p>What is measured by the behavior.</p>
   */
  metric?: string;

  /**
   * <p>The dimension for a metric in your behavior. For example, using a
   *                 <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric to only MQTT topics where the name matches the pattern specified in the dimension. This can't be used with custom metrics.</p>
   */
  metricDimension?: MetricDimension;

  /**
   * <p>The criteria that determine if a device is behaving normally in regard to
   *           the <code>metric</code>.</p>
   */
  criteria?: BehaviorCriteria;

  /**
   * <p>
   *             Suppresses alerts.
   *         </p>
   */
  suppressAlerts?: boolean;
}

export namespace Behavior {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Behavior): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an active Device Defender security profile behavior violation.</p>
 */
export interface ActiveViolation {
  /**
   * <p>The ID of the active violation.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the active violation.</p>
   */
  thingName?: string;

  /**
   * <p>The security profile with the behavior is in violation.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior that is being violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement) that caused the most recent violation.</p>
   */
  lastViolationValue?: MetricValue;

  /**
   * <p>
   *             The details of a violation event.
   *         </p>
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The description of the verification state of the violation.</p>
   */
  verificationStateDescription?: string;

  /**
   * <p>The time the most recent violation occurred.</p>
   */
  lastViolationTime?: Date;

  /**
   * <p>The time the violation started.</p>
   */
  violationStartTime?: Date;
}

export namespace ActiveViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveViolation): any => ({
    ...obj,
  });
}

/**
 * <p>The metric you want to retain. Dimensions are optional.</p>
 */
export interface MetricToRetain {
  /**
   * <p>What is measured by the behavior.</p>
   */
  metric: string | undefined;

  /**
   * <p>The dimension of a metric. This can't be used with custom metrics.</p>
   */
  metricDimension?: MetricDimension;
}

export namespace MetricToRetain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricToRetain): any => ({
    ...obj,
  });
}

/**
 * <p>The type of aggregation queries.</p>
 */
export interface AggregationType {
  /**
   * <p>The name of the aggregation type.</p>
   */
  name: AggregationTypeName | string | undefined;

  /**
   * <p>A list of the values of aggregation types.</p>
   */
  values?: string[];
}

export namespace AggregationType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregationType): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the alert target ARN and the role ARN.</p>
 */
export interface AlertTarget {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification target to which alerts are sent.</p>
   */
  alertTargetArn: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to send alerts to the
   *         notification target.</p>
   */
  roleArn: string | undefined;
}

export namespace AlertTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlertTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IoT policy.</p>
 */
export interface Policy {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;
}

export namespace Policy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj,
  });
}

/**
 * <p>A limit has been exceeded.</p>
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
 * <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 */
export class VersionConflictException extends __BaseException {
  readonly name: "VersionConflictException" = "VersionConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionConflictException, __BaseException>) {
    super({
      name: "VersionConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionConflictException.prototype);
  }
}

/**
 * <p>The attribute payload.</p>
 */
export interface AttributePayload {
  /**
   * <p>A JSON string containing up to three key-value pair in JSON format. For example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"string1\":\"string2\"}}</code>
   * 		       </p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Specifies whether the list of attributes provided in the <code>AttributePayload</code> is merged with
   * 			the attributes stored in the registry, instead of overwriting them.</p>
   * 		       <p>To remove an attribute, call <code>UpdateThing</code> with an empty attribute value.</p>
   * 		       <note>
   * 			         <p>The <code>merge</code> attribute is only valid when calling <code>UpdateThing</code> or <code>UpdateThingGroup</code>.</p>
   * 		       </note>
   */
  merge?: boolean;
}

export namespace AttributePayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributePayload): any => ({
    ...obj,
  });
}

/**
 * <p>Which audit checks are enabled and disabled for this account.</p>
 */
export interface AuditCheckConfiguration {
  /**
   * <p>True if this audit check is enabled for this account.</p>
   */
  enabled?: boolean;
}

export namespace AuditCheckConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditCheckConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the audit check.</p>
 */
export interface AuditCheckDetails {
  /**
   * <p>The completion status of this check. One of "IN_PROGRESS", "WAITING_FOR_DATA_COLLECTION",
   *         "CANCELED", "COMPLETED_COMPLIANT", "COMPLETED_NON_COMPLIANT", or "FAILED".</p>
   */
  checkRunStatus?: AuditCheckRunStatus | string;

  /**
   * <p>True if the check is complete and found all resources compliant.</p>
   */
  checkCompliant?: boolean;

  /**
   * <p>The number of resources on which the check was performed.</p>
   */
  totalResourcesCount?: number;

  /**
   * <p>The number of resources that were found noncompliant during the check.</p>
   */
  nonCompliantResourcesCount?: number;

  /**
   * <p>
   *             Describes how many of the non-compliant resources created during the evaluation of an audit check were marked as suppressed.
   *         </p>
   */
  suppressedNonCompliantResourcesCount?: number;

  /**
   * <p>The code of any error encountered when this check is performed during this audit.
   *           One of "INSUFFICIENT_PERMISSIONS" or "AUDIT_CHECK_DISABLED".</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with any error encountered when this check is performed during this audit.</p>
   */
  message?: string;
}

export namespace AuditCheckDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditCheckDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information that identifies the noncompliant resource.</p>
 */
export interface ResourceIdentifier {
  /**
   * <p>The ID of the certificate attached to the resource.</p>
   */
  deviceCertificateId?: string;

  /**
   * <p>The ID of the CA certificate used to authorize the certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The client ID.</p>
   */
  clientId?: string;

  /**
   * <p>The version of the policy associated with the resource.</p>
   */
  policyVersionIdentifier?: PolicyVersionIdentifier;

  /**
   * <p>The account with which the resource is associated.</p>
   */
  account?: string;

  /**
   * <p>The ARN of the IAM role that has overly permissive actions.</p>
   */
  iamRoleArn?: string;

  /**
   * <p>The ARN of the role alias that has overly permissive actions.</p>
   */
  roleAliasArn?: string;
}

export namespace ResourceIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The findings (results) of the audit.</p>
 */
export interface AuditFinding {
  /**
   * <p>A unique identifier for this set of audit findings. This identifier is used to apply
   *       mitigation tasks to one or more sets of findings.</p>
   */
  findingId?: string;

  /**
   * <p>The ID of the audit that generated this result (finding).</p>
   */
  taskId?: string;

  /**
   * <p>The audit check that generated this result.</p>
   */
  checkName?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>The time the result (finding) was discovered.</p>
   */
  findingTime?: Date;

  /**
   * <p>The severity of the result (finding).</p>
   */
  severity?: AuditFindingSeverity | string;

  /**
   * <p>The resource that was found to be noncompliant with the
   *         audit check.</p>
   */
  nonCompliantResource?: NonCompliantResource;

  /**
   * <p>The list of related resources.</p>
   */
  relatedResources?: RelatedResource[];

  /**
   * <p>The reason the resource was noncompliant.</p>
   */
  reasonForNonCompliance?: string;

  /**
   * <p>A code that indicates the reason that the resource was noncompliant.</p>
   */
  reasonForNonComplianceCode?: string;

  /**
   * <p>
   *             Indicates whether the audit finding was suppressed or not during reporting.
   *         </p>
   */
  isSuppressed?: boolean;
}

export namespace AuditFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditFinding): any => ({
    ...obj,
  });
}

/**
 * <p>Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.</p>
 */
export interface AuditMitigationActionExecutionMetadata {
  /**
   * <p>The unique identifier for the task that applies the mitigation action.</p>
   */
  taskId?: string;

  /**
   * <p>The unique identifier for the findings to which the task and associated mitigation action are applied.</p>
   */
  findingId?: string;

  /**
   * <p>The friendly name of the mitigation action being applied by the task.</p>
   */
  actionName?: string;

  /**
   * <p>The unique identifier for the mitigation action being applied by the task.</p>
   */
  actionId?: string;

  /**
   * <p>The current status of the task being executed.</p>
   */
  status?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time when the task was completed or canceled. Blank if the task is still running.</p>
   */
  endTime?: Date;

  /**
   * <p>If an error occurred, the code that indicates which type of error occurred.</p>
   */
  errorCode?: string;

  /**
   * <p>If an error occurred, a message that describes the error.</p>
   */
  message?: string;
}

export namespace AuditMitigationActionExecutionMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditMitigationActionExecutionMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.</p>
 */
export interface AuditMitigationActionsTaskMetadata {
  /**
   * <p>The unique identifier for the task.</p>
   */
  taskId?: string;

  /**
   * <p>The time at which the audit mitigation actions task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The current state of the audit mitigation actions task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace AuditMitigationActionsTaskMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditMitigationActionsTaskMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.</p>
 */
export interface TaskStatisticsForAuditCheck {
  /**
   * <p>The total number of findings to which a task is being applied.</p>
   */
  totalFindingsCount?: number;

  /**
   * <p>The number of findings for which at least one of the actions failed when applied.</p>
   */
  failedFindingsCount?: number;

  /**
   * <p>The number of findings for which all mitigation actions succeeded when applied.</p>
   */
  succeededFindingsCount?: number;

  /**
   * <p>The number of findings skipped because of filter conditions provided in the parameters to the command.</p>
   */
  skippedFindingsCount?: number;

  /**
   * <p>The number of findings to which the mitigation action task was canceled when applied.</p>
   */
  canceledFindingsCount?: number;
}

export namespace TaskStatisticsForAuditCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskStatisticsForAuditCheck): any => ({
    ...obj,
  });
}

/**
 * <p>Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.</p>
 */
export interface AuditMitigationActionsTaskTarget {
  /**
   * <p>If the task will apply a mitigation action to findings from a specific audit, this value uniquely identifies the audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.</p>
   */
  findingIds?: string[];

  /**
   * <p>Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.</p>
   */
  auditCheckToReasonCodeFilter?: Record<string, string[]>;
}

export namespace AuditMitigationActionsTaskTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditMitigationActionsTaskTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the targets to which audit notifications are sent.</p>
 */
export interface AuditNotificationTarget {
  /**
   * <p>The ARN of the target (SNS topic) to which audit notifications are sent.</p>
   */
  targetArn?: string;

  /**
   * <p>The ARN of the role that grants permission to send notifications to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>True if notifications to the target are enabled.</p>
   */
  enabled?: boolean;
}

export namespace AuditNotificationTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditNotificationTarget): any => ({
    ...obj,
  });
}

/**
 * <p> Filters out specific findings of a Device Defender audit. </p>
 */
export interface AuditSuppression {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * <p>
   *             The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *         </p>
   */
  expirationDate?: Date;

  /**
   * <p>
   *             Indicates whether a suppression should exist indefinitely or not.
   *         </p>
   */
  suppressIndefinitely?: boolean;

  /**
   * <p>
   *             The description of the audit suppression.
   *         </p>
   */
  description?: string;
}

export namespace AuditSuppression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditSuppression): any => ({
    ...obj,
  });
}

/**
 * <p>The audits that were performed.</p>
 */
export interface AuditTaskMetadata {
  /**
   * <p>The ID of this audit.</p>
   */
  taskId?: string;

  /**
   * <p>The status of this audit. One of "IN_PROGRESS", "COMPLETED",
   *         "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of this audit. One of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace AuditTaskMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditTaskMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of authorization information.</p>
 */
export interface AuthInfo {
  /**
   * <p>The type of action for which the principal is being authorized.</p>
   */
  actionType?: ActionType | string;

  /**
   * <p>The resources for which the principal is being authorized to perform the specified
   *          action.</p>
   */
  resources: string[] | undefined;
}

export namespace AuthInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthInfo): any => ({
    ...obj,
  });
}

/**
 * <p>An object that specifies the authorization service for a domain.</p>
 */
export interface AuthorizerConfig {
  /**
   * <p>The name of the authorization service for a domain configuration.</p>
   */
  defaultAuthorizerName?: string;

  /**
   * <p>A Boolean that specifies whether the domain configuration's authorization service can be overridden.</p>
   */
  allowAuthorizerOverride?: boolean;
}

export namespace AuthorizerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizerConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The authorizer description.</p>
 */
export interface AuthorizerDescription {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's Lambda function ARN.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to validate the token signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the authorizer.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The UNIX timestamp of when the authorizer was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the authorizer was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>Specifies whether IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for the time specified in <code>refreshAfterInSeconds</code>. The cached
   * 	  result is used while the device reuses the same HTTP connection.</p>
   */
  enableCachingForHttp?: boolean;
}

export namespace AuthorizerDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizerDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The authorizer summary.</p>
 */
export interface AuthorizerSummary {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace AuthorizerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The authorizer result.</p>
 */
export interface AuthResult {
  /**
   * <p>Authorization information.</p>
   */
  authInfo?: AuthInfo;

  /**
   * <p>The policies and statements that allowed the specified action.</p>
   */
  allowed?: Allowed;

  /**
   * <p>The policies and statements that denied the specified action.</p>
   */
  denied?: Denied;

  /**
   * <p>The final authorization decision of this scenario. Multiple statements are taken into
   *          account when determining the authorization decision. An explicit deny statement can
   *          override multiple allow statements.</p>
   */
  authDecision?: AuthDecision | string;

  /**
   * <p>Contains any missing context values found while evaluating policy.</p>
   */
  missingContextValues?: string[];
}

export namespace AuthResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthResult): any => ({
    ...obj,
  });
}

/**
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name: "InvalidStateTransitionException" = "InvalidStateTransitionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
  }
}

/**
 * <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 */
export class ConflictingResourceUpdateException extends __BaseException {
  readonly name: "ConflictingResourceUpdateException" = "ConflictingResourceUpdateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingResourceUpdateException, __BaseException>) {
    super({
      name: "ConflictingResourceUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingResourceUpdateException.prototype);
  }
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * <p>The resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the resource that caused the exception.</p>
   */
  resourceArn?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of a billing group.</p>
 */
export interface BillingGroupProperties {
  /**
   * <p>The description of the billing group.</p>
   */
  billingGroupDescription?: string;
}

export namespace BillingGroupProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BillingGroupProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate is invalid.</p>
 */
export class CertificateValidationException extends __BaseException {
  readonly name: "CertificateValidationException" = "CertificateValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateValidationException, __BaseException>) {
    super({
      name: "CertificateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateValidationException.prototype);
  }
}

/**
 * <p>Thing group properties.</p>
 */
export interface ThingGroupProperties {
  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes in JSON format.</p>
   */
  attributePayload?: AttributePayload;
}

export namespace ThingGroupProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingGroupProperties): any => ({
    ...obj,
  });
}

/**
 * <p>The query is invalid.</p>
 */
export class InvalidQueryException extends __BaseException {
  readonly name: "InvalidQueryException" = "InvalidQueryException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryException, __BaseException>) {
    super({
      name: "InvalidQueryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryException.prototype);
  }
}

/**
 * <p>The index is not ready.</p>
 */
export class IndexNotReadyException extends __BaseException {
  readonly name: "IndexNotReadyException" = "IndexNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IndexNotReadyException, __BaseException>) {
    super({
      name: "IndexNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IndexNotReadyException.prototype);
  }
}

/**
 * <p>The aggregation is invalid.</p>
 */
export class InvalidAggregationException extends __BaseException {
  readonly name: "InvalidAggregationException" = "InvalidAggregationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAggregationException, __BaseException>) {
    super({
      name: "InvalidAggregationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAggregationException.prototype);
  }
}

/**
 * <p>The configuration that determines how many retries are allowed for each failure
 *             type for a job.</p>
 */
export interface JobExecutionsRetryConfig {
  /**
   * <p>The list of criteria that determines how many retries are allowed for each failure
   *             type for a job.</p>
   */
  criteriaList: RetryCriteria[] | undefined;
}

export namespace JobExecutionsRetryConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionsRetryConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Allows you to create a staged rollout of a job.</p>
 */
export interface JobExecutionsRolloutConfig {
  /**
   * <p>The maximum number of things that will be notified of a pending job, per minute.
   *         This parameter allows you to create a staged rollout.</p>
   */
  maximumPerMinute?: number;

  /**
   * <p>The rate of increase for a job rollout.
   *             This parameter allows you to define an exponential rate for a job rollout.</p>
   */
  exponentialRate?: ExponentialRolloutRate;
}

export namespace JobExecutionsRolloutConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionsRolloutConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for pre-signed S3 URLs.</p>
 */
export interface PresignedUrlConfig {
  /**
   * <p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job
   *             data/updates are stored. The role must also grant permission for IoT to download the files.</p>
   */
  roleArn?: string;

  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600
   *             seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>
   */
  expiresInSec?: number;
}

export namespace PresignedUrlConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PresignedUrlConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
 *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
 *            execution status is not set to another terminal state before the timer expires, it will
 *            be automatically set to <code>TIMED_OUT</code>.</p>
 */
export interface TimeoutConfig {
  /**
   * <p>Specifies the amount of time, in minutes, this device has to finish execution of this job.
   *            The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The
   *            in progress timer can't be updated and will apply to all job executions for the job. Whenever a job
   *            execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail
   *            and switch to the terminal <code>TIMED_OUT</code> status.</p>
   */
  inProgressTimeoutInMinutes?: number;
}

export namespace TimeoutConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeoutConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the same name already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * <p>The public key.</p>
   */
  PublicKey?: string;

  /**
   * <p>The private key.</p>
   */
  PrivateKey?: string;
}

export namespace KeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).</p>
 */
export interface MitigationActionParams {
  /**
   * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
   */
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
   */
  updateCACertificateParams?: UpdateCACertificateParams;

  /**
   * <p>Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.</p>
   */
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  /**
   * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
   */
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  /**
   * <p>Parameters to define a mitigation action that enables Amazon Web Services IoT Core logging at a specified level of detail.</p>
   */
  enableIoTLoggingParams?: EnableIoTLoggingParams;

  /**
   * <p>Parameters to define a mitigation action that publishes findings to Amazon Simple Notification Service (Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
   */
  publishFindingToSnsParams?: PublishFindingToSnsParams;
}

export namespace MitigationActionParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MitigationActionParams): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria that determine when and how a job abort takes place.</p>
 */
export interface AwsJobAbortConfig {
  /**
   * <p>The list of criteria that determine when and how to abort the job.</p>
   */
  abortCriteriaList: AwsJobAbortCriteria[] | undefined;
}

export namespace AwsJobAbortConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobAbortConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for the rollout of OTA updates.</p>
 */
export interface AwsJobExecutionsRolloutConfig {
  /**
   * <p>The maximum number of OTA update job executions started per minute.</p>
   */
  maximumPerMinute?: number;

  /**
   * <p>The rate of increase for a job rollout. This parameter allows you to define an exponential rate
   *             increase for a job rollout.</p>
   */
  exponentialRate?: AwsJobExponentialRolloutRate;
}

export namespace AwsJobExecutionsRolloutConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobExecutionsRolloutConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
 *            contains HTTP.</p>
 */
export interface AwsJobPresignedUrlConfig {
  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 1800
   *             seconds. Pre-signed URLs are generated when a request for the job document is received.</p>
   */
  expiresInSec?: number;
}

export namespace AwsJobPresignedUrlConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobPresignedUrlConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer is
 *             started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution
 *             status is not set to another terminal state before the timer expires, it will be automatically
 *             set to <code>TIMED_OUT</code>.</p>
 */
export interface AwsJobTimeoutConfig {
  /**
   * <p>Specifies the amount of time, in minutes, this device has to finish execution of this job. The
   *             timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress
   *             timer can't be updated and will apply to all job executions for the job. Whenever a job execution
   *             remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and
   *             switch to the terminal <code>TIMED_OUT</code> status.</p>
   */
  inProgressTimeoutInMinutes?: number;
}

export namespace AwsJobTimeoutConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobTimeoutConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a file to be associated with an OTA update.</p>
 */
export interface OTAUpdateFile {
  /**
   * <p>The name of the file.</p>
   */
  fileName?: string;

  /**
   * <p>An integer value you can include in the job document to allow your devices to identify the type of file received
   *             from the cloud.</p>
   */
  fileType?: number;

  /**
   * <p>The file version.</p>
   */
  fileVersion?: string;

  /**
   * <p>The location of the updated firmware.</p>
   */
  fileLocation?: FileLocation;

  /**
   * <p>The code signing method of the file.</p>
   */
  codeSigning?: CodeSigning;

  /**
   * <p>A list of name/attribute pairs.</p>
   */
  attributes?: Record<string, string>;
}

export namespace OTAUpdateFile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OTAUpdateFile): any => ({
    ...obj,
  });
}

export enum Protocol {
  HTTP = "HTTP",
  MQTT = "MQTT",
}

/**
 * <p>The policy documentation is not valid.</p>
 */
export class MalformedPolicyException extends __BaseException {
  readonly name: "MalformedPolicyException" = "MalformedPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyException, __BaseException>) {
    super({
      name: "MalformedPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyException.prototype);
  }
}

/**
 * <p>The number of policy versions exceeds the limit.</p>
 */
export class VersionsLimitExceededException extends __BaseException {
  readonly name: "VersionsLimitExceededException" = "VersionsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionsLimitExceededException, __BaseException>) {
    super({
      name: "VersionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionsLimitExceededException.prototype);
  }
}

/**
 * <p>Structure that contains <code>payloadVersion</code> and
 *          <code>targetArn</code>.</p>
 */
export interface ProvisioningHook {
  /**
   * <p>The payload that was sent to the target function.</p>
   *          <p>
   *             <i>Note:</i> Only Lambda functions are currently supported.</p>
   */
  payloadVersion?: string;

  /**
   * <p>The ARN of the target function.</p>
   *          <p>
   *             <i>Note:</i> Only Lambda functions are currently supported.</p>
   */
  targetArn: string | undefined;
}

export namespace ProvisioningHook {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisioningHook): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a file to stream.</p>
 */
export interface StreamFile {
  /**
   * <p>The file ID.</p>
   */
  fileId?: number;

  /**
   * <p>The location of the file in S3.</p>
   */
  s3Location?: S3Location;
}

export namespace StreamFile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamFile): any => ({
    ...obj,
  });
}

/**
 * <p>The ThingTypeProperties contains information about the thing type including: a thing type description,
 * 			and a list of searchable thing attribute names.</p>
 */
export interface ThingTypeProperties {
  /**
   * <p>The description of the thing type.</p>
   */
  thingTypeDescription?: string;

  /**
   * <p>A list of searchable thing attribute names.</p>
   */
  searchableAttributes?: string[];
}

export namespace ThingTypeProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingTypeProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRulePayload {
  /**
   * <p>The SQL statement used to query the topic. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html">IoT SQL
   *             Reference</a> in the <i>IoT Developer Guide</i>.</p>
   */
  sql: string | undefined;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions: Action[] | undefined;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to take when an error occurs.</p>
   */
  errorAction?: Action;
}

export namespace TopicRulePayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRulePayload): any => ({
    ...obj,
  });
}

/**
 * <p>The Rule-SQL expression can't be parsed correctly.</p>
 */
export class SqlParseException extends __BaseException {
  readonly name: "SqlParseException" = "SqlParseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SqlParseException, __BaseException>) {
    super({
      name: "SqlParseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SqlParseException.prototype);
  }
}

/**
 * <p>Configuration of the topic rule destination.</p>
 */
export interface TopicRuleDestinationConfiguration {
  /**
   * <p>Configuration of the HTTP URL.</p>
   */
  httpUrlConfiguration?: HttpUrlDestinationConfiguration;

  /**
   * <p>Configuration of the virtual private cloud (VPC) connection.</p>
   */
  vpcConfiguration?: VpcDestinationConfiguration;
}

export namespace TopicRuleDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRuleDestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A topic rule destination.</p>
 */
export interface TopicRuleDestination {
  /**
   * <p>The topic rule destination URL.</p>
   */
  arn?: string;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   */
  status?: TopicRuleDestinationStatus | string;

  /**
   * <p>The date and time when the topic rule destination was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the topic rule destination was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Additional details or reason why the topic rule destination is in the current
   *          status.</p>
   */
  statusReason?: string;

  /**
   * <p>Properties of the HTTP URL.</p>
   */
  httpUrlProperties?: HttpUrlDestinationProperties;

  /**
   * <p>Properties of the virtual private cloud (VPC) connection.</p>
   */
  vpcProperties?: VpcDestinationProperties;
}

export namespace TopicRuleDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRuleDestination): any => ({
    ...obj,
  });
}

/**
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 */
export class DeleteConflictException extends __BaseException {
  readonly name: "DeleteConflictException" = "DeleteConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteConflictException, __BaseException>) {
    super({
      name: "DeleteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteConflictException.prototype);
  }
}

/**
 * <p>The certificate operation is not allowed.</p>
 */
export class CertificateStateException extends __BaseException {
  readonly name: "CertificateStateException" = "CertificateStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateStateException, __BaseException>) {
    super({
      name: "CertificateStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateStateException.prototype);
  }
}

/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface MitigationAction {
  /**
   * <p>A user-friendly name for the mitigation action.</p>
   */
  name?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  id?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: MitigationActionParams;
}

export namespace MitigationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MitigationAction): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface TaskStatistics {
  /**
   * <p>The number of checks in this audit.</p>
   */
  totalChecks?: number;

  /**
   * <p>The number of checks in progress.</p>
   */
  inProgressChecks?: number;

  /**
   * <p>The number of checks waiting for data collection.</p>
   */
  waitingForDataCollectionChecks?: number;

  /**
   * <p>The number of checks that found compliant resources.</p>
   */
  compliantChecks?: number;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   */
  nonCompliantChecks?: number;

  /**
   * <p>The number of checks.</p>
   */
  failedChecks?: number;

  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   */
  canceledChecks?: number;
}

export namespace TaskStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}

export namespace BillingGroupMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BillingGroupMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CACertificateDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CACertificateDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
  /**
   * <p>The template body.</p>
   */
  templateBody?: string;

  /**
   * <p>The ARN of the role.</p>
   */
  roleArn?: string;
}

export namespace RegistrationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistrationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the Amazon Web Services account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: TransferData;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: CertificateValidity;

  /**
   * <p>The mode of the certificate.</p>
   */
  certificateMode?: CertificateMode | string;
}

export namespace CertificateDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateDescription): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The target of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskTarget {
  /**
   * <p>
   *             The unique identifiers of the violations.
   *         </p>
   */
  violationIds?: string[];

  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   */
  behaviorName?: string;
}

export namespace DetectMitigationActionsTaskTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMitigationActionsTaskTarget): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Specifies the time period of which violation events occurred between.
 *         </p>
 */
export interface ViolationEventOccurrenceRange {
  /**
   * <p>
   *             The start date and time of a time period in which violation events occurred.
   *         </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The end date and time of a time period in which violation events occurred.
   *         </p>
   */
  endTime: Date | undefined;
}

export namespace ViolationEventOccurrenceRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViolationEventOccurrenceRange): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The summary of the mitigation action tasks.
 *         </p>
 */
export interface DetectMitigationActionsTaskSummary {
  /**
   * <p>
   *             The unique identifier of the task.
   *         </p>
   */
  taskId?: string;

  /**
   * <p>
   *             The status of the task.
   *         </p>
   */
  taskStatus?: DetectMitigationActionsTaskStatus | string;

  /**
   * <p>
   *             The date the task started.
   *         </p>
   */
  taskStartTime?: Date;

  /**
   * <p>
   *             The date the task ended.
   *         </p>
   */
  taskEndTime?: Date;

  /**
   * <p>
   *             Specifies the ML Detect findings to which the mitigation actions are applied.
   *         </p>
   */
  target?: DetectMitigationActionsTaskTarget;

  /**
   * <p>
   *             Specifies the time period of which violation events occurred between.
   *         </p>
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * <p>
   *             Includes only active violations.
   *         </p>
   */
  onlyActiveViolationsIncluded?: boolean;

  /**
   * <p>
   *             Includes suppressed alerts.
   *         </p>
   */
  suppressedAlertsIncluded?: boolean;

  /**
   * <p>
   *             The definition of the actions.
   *         </p>
   */
  actionsDefinition?: MitigationAction[];

  /**
   * <p>
   *             The statistics of a mitigation action task.
   *         </p>
   */
  taskStatistics?: DetectMitigationActionsTaskStatistics;
}

export namespace DetectMitigationActionsTaskSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMitigationActionsTaskSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
  /**
   * <p>The ARN of the server certificate.</p>
   */
  serverCertificateArn?: string;

  /**
   * <p>The status of the server certificate.</p>
   */
  serverCertificateStatus?: ServerCertificateStatus | string;

  /**
   * <p>Details that explain the status of the server certificate.</p>
   */
  serverCertificateStatusDetail?: string;
}

export namespace ServerCertificateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerCertificateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration.</p>
 */
export interface Configuration {
  /**
   * <p>True to enable the configuration.</p>
   */
  Enabled?: boolean;
}

export namespace Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a device when the thing representing
   *             the device is added to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   *         <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *         </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?: JobStatus | string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
   *           <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: string[];

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: JobProcessDetails;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The ARN of the job template used to create the job.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The configuration for the criteria to retry the job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;

  /**
   * <p>A key-value map that pairs the patterns that need to be replaced in a managed
   *             template job document schema. You can use the description of each key as a guidance
   *             to specify the inputs during runtime when creating a job.</p>
   *         <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *         </note>
   */
  documentParameters?: Record<string, string>;

  isConcurrent?: boolean;
}

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
   *           parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used in commands which return or update job execution information.
   *         </p>
   */
  executionNumber?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated
   *       by a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
   *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *        This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;
}

export namespace JobExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecution): any => ({
    ...obj,
  });
}

/**
 * <p>A map of key-value pairs containing the patterns that need to be replaced in a managed
 *             template job document schema. You can use the description of each key as a guidance to specify
 *             the inputs during runtime when creating a job.</p>
 *         <note>
 *             <p>
 *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
 *                 managed templates. This parameter can't be used with custom job templates or to
 *                 create jobs from them.</p>
 *         </note>
 */
export interface DocumentParameter {
  /**
   * <p>Key of the map field containing the patterns that need to be replaced in a managed
   *             template job document schema.</p>
   */
  key?: string;

  /**
   * <p>Description of the map field containing the patterns that need to be replaced in a
   *             managed template job document schema.</p>
   */
  description?: string;

  /**
   * <p>A regular expression of the patterns that need to be replaced in a managed template
   *             job document schema.</p>
   */
  regex?: string;

  /**
   * <p>An example illustrating a pattern that need to be replaced in a managed template
   *             job document schema.</p>
   */
  example?: string;

  /**
   * <p>Specifies whether a pattern that needs to be replaced in a managed template job document
   *             schema is optional or required.</p>
   */
  optional?: boolean;
}

export namespace DocumentParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The ARN of the role alias.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace RoleAliasDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoleAliasDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>An IAM role IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

export namespace StreamInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
  /**
   * <p>The group name.</p>
   */
  groupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  groupArn?: string;
}

export namespace GroupNameAndArn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupNameAndArn): any => ({
    ...obj,
  });
}

/**
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: GroupNameAndArn[];

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;
}

export namespace ThingGroupMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingGroupMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;
}

export namespace ThingTypeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingTypeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The summary of an ML Detect behavior model.
 *         </p>
 */
export interface BehaviorModelTrainingSummary {
  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   */
  behaviorName?: string;

  /**
   * <p>
   *             The date a training model started collecting data.
   *         </p>
   */
  trainingDataCollectionStartDate?: Date;

  /**
   * <p>
   *             The status of the behavior model.
   *         </p>
   */
  modelStatus?: ModelStatus | string;

  /**
   * <p>
   *             The percentage of datapoints collected.
   *         </p>
   */
  datapointsCollectionPercentage?: number;

  /**
   * <p>
   *             The date the model was last refreshed.
   *         </p>
   */
  lastModelRefreshDate?: Date;
}

export namespace BehaviorModelTrainingSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BehaviorModelTrainingSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The type of bucketed aggregation performed.</p>
 */
export interface BucketsAggregationType {
  /**
   * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
   */
  termsAggregation?: TermsAggregation;
}

export namespace BucketsAggregationType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketsAggregationType): any => ({
    ...obj,
  });
}

/**
 * <p>A count of documents that meets a specific aggregation criteria.</p>
 */
export interface Bucket {
  /**
   * <p>The value counted for the particular bucket.</p>
   */
  keyValue?: string;

  /**
   * <p>The number of documents that have the value counted for the particular bucket.</p>
   */
  count?: number;
}

export namespace Bucket {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj,
  });
}

/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;
}

export namespace EffectivePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EffectivePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * <p>Thing group indexing mode.</p>
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];
}

export namespace ThingGroupIndexingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingGroupIndexingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
  /**
   * <p>Thing indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains registry data only.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingIndexingMode: ThingIndexingMode | string | undefined;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, <i>thingIndexMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;

  /**
   * <p>Device Defender indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>VIOLATIONS – Your thing index contains Device Defender violations. To enable Device
   *           Defender indexing, <i>deviceDefenderIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Device Defender indexing is disabled.</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Device Defender violations, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html">Device Defender Detect.</a>
   *          </p>
   */
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode | string;

  /**
   * <p>Named shadow indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ON – Your thing index contains named shadow. To enable thing
   *           named shadow indexing, <i>namedShadowIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Named shadow indexing is disabled.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   */
  namedShadowIndexingMode?: NamedShadowIndexingMode | string;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];
}

export namespace ThingIndexingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingIndexingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: string[];

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
   *              contains HTTP.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   *             things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   *             be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   *             the thing is added to a target group, even after the OTA update was completed by all things originally in
   *             the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: OTAUpdateFile[];

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;

  /**
   * <p>The IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: Record<string, string>;
}

export namespace OTAUpdateInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OTAUpdateInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
  /**
   * <p>The percentile.</p>
   */
  percent?: number;

  /**
   * <p>The value of the percentile.</p>
   */
  value?: number;
}

export namespace PercentPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PercentPair): any => ({
    ...obj,
  });
}

/**
 * <p>A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API,
 *       consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html">
 *         Fleet indexing troubleshooting guide</a>.</p>
 */
export interface Statistics {
  /**
   * <p>The count of things that match the query string criteria and contain a valid aggregation field value.</p>
   */
  count?: number;

  /**
   * <p>The average of the aggregated field values.</p>
   */
  average?: number;

  /**
   * <p>The sum of the aggregated field values.</p>
   */
  sum?: number;

  /**
   * <p>The minimum aggregated field value.</p>
   */
  minimum?: number;

  /**
   * <p>The maximum aggregated field value.</p>
   */
  maximum?: number;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The variance of the aggregated field values.</p>
   */
  variance?: number;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   */
  stdDeviation?: number;
}

export namespace Statistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   */
  sql?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Action[];

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: Action;
}

export namespace TopicRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRule): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is not configured.</p>
 */
export class NotConfiguredException extends __BaseException {
  readonly name: "NotConfiguredException" = "NotConfiguredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotConfiguredException, __BaseException>) {
    super({
      name: "NotConfiguredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotConfiguredException.prototype);
  }
}

/**
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;
}

export namespace CACertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CACertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The mode of the certificate.</p>
   */
  certificateMode?: CertificateMode | string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;
}

export namespace Certificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes which mitigation actions should be executed.
 *         </p>
 */
export interface DetectMitigationActionExecution {
  /**
   * <p>
   *             The unique identifier of the task.
   *         </p>
   */
  taskId?: string;

  /**
   * <p>
   *             The unique identifier of the violation.
   *         </p>
   */
  violationId?: string;

  /**
   * <p>
   *             The friendly name that uniquely identifies the mitigation action.
   *         </p>
   */
  actionName?: string;

  /**
   * <p>
   *             The name of the thing.
   *         </p>
   */
  thingName?: string;

  /**
   * <p>
   *             The date a mitigation action was started.
   *         </p>
   */
  executionStartDate?: Date;

  /**
   * <p>
   *             The date a mitigation action ended.
   *         </p>
   */
  executionEndDate?: Date;

  /**
   * <p>
   *             The status of a mitigation action.
   *         </p>
   */
  status?: DetectMitigationActionExecutionStatus | string;

  /**
   * <p>
   *             The error code of a mitigation action.
   *         </p>
   */
  errorCode?: string;

  /**
   * <p>
   *             The message of a mitigation action.
   *         </p>
   */
  message?: string;
}

export namespace DetectMitigationActionExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMitigationActionExecution): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an Amazon Web Services-managed domain
 *          (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p>
 *          <ul>
 *             <li>
 *                <p>Data</p>
 *             </li>
 *             <li>
 *                <p>Jobs</p>
 *             </li>
 *             <li>
 *                <p>CredentialProvider</p>
 *             </li>
 *          </ul>
 */
export interface DomainConfigurationSummary {
  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DomainConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainConfigurationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The name and ARN of a fleet metric.</p>
 */
export interface FleetMetricNameAndArn {
  /**
   * <p>The fleet metric name.</p>
   */
  metricName?: string;

  /**
   * <p>The fleet metric ARN.</p>
   */
  metricArn?: string;
}

export namespace FleetMetricNameAndArn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetMetricNameAndArn): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

export namespace JobExecutionSummaryForJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionSummaryForJob): any => ({
    ...obj,
  });
}

/**
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

export namespace JobExecutionSummaryForThing {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionSummaryForThing): any => ({
    ...obj,
  });
}

/**
 * <p>The job summary.</p>
 */
export interface JobSummary {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   *         <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *         </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The job summary status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;

  isConcurrent?: boolean;
}

export namespace JobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains information about the job template.</p>
 */
export interface JobTemplateSummary {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;

  /**
   * <p>A description of the job template.</p>
   */
  description?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job template was created.</p>
   */
  createdAt?: Date;
}

export namespace JobTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobTemplateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains information about the managed template.</p>
 */
export interface ManagedJobTemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for a managed template.</p>
   */
  templateArn?: string;

  /**
   * <p>The unique Name for a managed template.</p>
   */
  templateName?: string;

  /**
   * <p>The description for a managed template.</p>
   */
  description?: string;

  /**
   * <p>A list of environments that are supported with the managed job template.</p>
   */
  environments?: string[];

  /**
   * <p>The version for a managed template.</p>
   */
  templateVersion?: string;
}

export namespace ManagedJobTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedJobTemplateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A metric.</p>
 */
export interface MetricDatum {
  /**
   * <p>The time the metric value was reported.</p>
   */
  timestamp?: Date;

  /**
   * <p>The value reported for the metric.</p>
   */
  value?: MetricValue;
}

export namespace MetricDatum {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDatum): any => ({
    ...obj,
  });
}

/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}

export namespace MitigationActionIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MitigationActionIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;
}

export namespace OTAUpdateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OTAUpdateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The Amazon Web Services account to which the transfer was made.</p>
   */
  transferredTo?: string;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;
}

export namespace OutgoingCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutgoingCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
  /**
   * <p>The descriptions of the policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPolicyPrincipalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyPrincipalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * <p>The descriptions of the principals.</p>
   */
  principals?: string[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPolicyPrincipalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyPrincipalsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;
}

export namespace PolicyVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>The policy versions.</p>
   */
  policyVersions?: PolicyVersion[];
}

export namespace ListPolicyVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPrincipalPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListPrincipalPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalPoliciesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalThingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalThingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
  /**
   * <p>The things.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListPrincipalThingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPrincipalThingsResponse): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisioningTemplatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a fleet provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The date when the fleet provisioning template summary was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet provisioning template summary was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   */
  enabled?: boolean;
}

export namespace ProvisioningTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisioningTemplateSummary): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplatesResponse {
  /**
   * <p>A list of fleet provisioning templates</p>
   */
  templates?: ProvisioningTemplateSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisioningTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplateVersionsRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplateVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisioningTemplateVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * <p>The ID of the fleet privisioning template version.</p>
   */
  versionId?: number;

  /**
   * <p>The date when the fleet provisioning template version was created</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace ProvisioningTemplateVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisioningTemplateVersionSummary): any => ({
    ...obj,
  });
}

export interface ListProvisioningTemplateVersionsResponse {
  /**
   * <p>The list of fleet provisioning template versions.</p>
   */
  versions?: ProvisioningTemplateVersionSummary[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplateVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisioningTemplateVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListRoleAliasesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListRoleAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoleAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListRoleAliasesResponse {
  /**
   * <p>The role aliases.</p>
   */
  roleAliases?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListRoleAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoleAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListScheduledAuditsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

export namespace ListScheduledAuditsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScheduledAuditsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit is run (if the
   *           <code>frequency</code> is "MONTHLY").
   *         If days 29-31 are specified, and the month does not have that many
   *         days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit is run (if the
   *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   */
  dayOfWeek?: DayOfWeek | string;
}

export namespace ScheduledAuditMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledAuditMetadata): any => ({
    ...obj,
  });
}

export interface ListScheduledAuditsResponse {
  /**
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: ScheduledAuditMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListScheduledAuditsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScheduledAuditsResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter to limit results to the security profiles that use the defined dimension.
   *       Cannot be used with <code>metricName</code>
   *          </p>
   */
  dimensionName?: string;

  /**
   * <p> The name of the custom metric.
   *       Cannot be used with <code>dimensionName</code>. </p>
   */
  metricName?: string;
}

export namespace ListSecurityProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
  /**
   * <p>The name you've given to the security profile.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityProfileIdentifier): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesResponse {
  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesForTargetRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>If true, return child groups too.</p>
   */
  recursive?: boolean;

  /**
   * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace ListSecurityProfilesForTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesForTargetRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityProfileTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
  /**
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: SecurityProfileTarget;
}

export namespace SecurityProfileTargetMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityProfileTargetMapping): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesForTargetResponse {
  /**
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesForTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesForTargetResponse): any => ({
    ...obj,
  });
}

export interface ListStreamsRequest {
  /**
   * <p>The maximum number of results to return at a time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Set to true to return the list of streams in ascending order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListStreamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;
}

export namespace StreamSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
    ...obj,
  });
}

export interface ListStreamsResponse {
  /**
   * <p>A list of streams.</p>
   */
  streams?: StreamSummary[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTargetsForPolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

export namespace ListTargetsForPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetsForPolicyRequest): any => ({
    ...obj,
  });
}

export interface ListTargetsForPolicyResponse {
  /**
   * <p>The policy targets.</p>
   */
  targets?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListTargetsForPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetsForPolicyResponse): any => ({
    ...obj,
  });
}

export interface ListTargetsForSecurityProfileRequest {
  /**
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListTargetsForSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetsForSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface ListTargetsForSecurityProfileResponse {
  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: SecurityProfileTarget[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTargetsForSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetsForSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface ListThingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

export namespace ListThingGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListThingGroupsResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListThingGroupsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListThingGroupsForThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingGroupsForThingRequest): any => ({
    ...obj,
  });
}

export interface ListThingGroupsForThingResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingGroupsForThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingGroupsForThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingPrincipalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingPrincipalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingPrincipalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingPrincipalsResponse): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTaskReportsRequest {
  /**
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The type of task report.</p>
   */
  reportType: ReportType | string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 		the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

export namespace ListThingRegistrationTaskReportsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingRegistrationTaskReportsRequest): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTaskReportsResponse {
  /**
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: string[];

  /**
   * <p>The type of task report.</p>
   */
  reportType?: ReportType | string;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingRegistrationTaskReportsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingRegistrationTaskReportsResponse): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;
}

export namespace ListThingRegistrationTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingRegistrationTasksRequest): any => ({
    ...obj,
  });
}

export interface ListThingRegistrationTasksResponse {
  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingRegistrationTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingRegistrationTasksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;

  /**
   * <p>When <code>true</code>, the action returns the thing resources with attribute values
   *                      that start with the <code>attributeValue</code> provided.</p>
   *             <p>When <code>false</code>, or not present, the action returns only the thing
   * 			resources with attribute values that match the entire <code>attributeValue</code>
   * 			provided. </p>
   */
  usePrefixAttributeValue?: boolean;
}

export namespace ListThingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

export namespace ThingAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  /**
   * <p>The things.</p>
   */
  things?: ThingAttribute[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsResponse): any => ({
    ...obj,
  });
}

export interface ListThingsInBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

export namespace ListThingsInBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsInBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface ListThingsInBillingGroupResponse {
  /**
   * <p>A list of things in the billing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsInBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface ListThingsInThingGroupRequest {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListThingsInThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsInThingGroupRequest): any => ({
    ...obj,
  });
}

export interface ListThingsInThingGroupResponse {
  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingsInThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

export namespace ThingTypeDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingTypeDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  /**
   * <p>The thing types.</p>
   */
  thingTypes?: ThingTypeDefinition[];

  /**
   * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export namespace ListThingTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListThingTypesResponse): any => ({
    ...obj,
  });
}

export interface ListTopicRuleDestinationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicRuleDestinationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  /**
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   */
  status?: TopicRuleDestinationStatus | string;

  /**
   * <p>The date and time when the topic rule destination was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the topic rule destination was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

  /**
   * <p>Information about the virtual private cloud (VPC) connection.</p>
   */
  vpcDestinationSummary?: VpcDestinationSummary;
}

export namespace TopicRuleDestinationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRuleDestinationSummary): any => ({
    ...obj,
  });
}

export interface ListTopicRuleDestinationsResponse {
  /**
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicRuleDestinationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  /**
   * <p>The topic.</p>
   */
  topic?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

export namespace ListTopicRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

export namespace TopicRuleListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TopicRuleListItem): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  /**
   * <p>The rules.</p>
   */
  rules?: TopicRuleListItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTopicRulesResponse): any => ({
    ...obj,
  });
}

export interface ListV2LoggingLevelsRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType | string;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListV2LoggingLevelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListV2LoggingLevelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A log target.</p>
 */
export interface LogTarget {
  /**
   * <p>The target type.</p>
   */
  targetType: LogTargetType | string | undefined;

  /**
   * <p>The target name.</p>
   */
  targetName?: string;
}

export namespace LogTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  /**
   * <p>A log target</p>
   */
  logTarget?: LogTarget;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace LogTargetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogTargetConfiguration): any => ({
    ...obj,
  });
}

export interface ListV2LoggingLevelsResponse {
  /**
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListV2LoggingLevelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListV2LoggingLevelsResponse): any => ({
    ...obj,
  });
}

export interface ListViolationEventsRequest {
  /**
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the alerts to be listed.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The criteria for a behavior.
   *     </p>
   */
  behaviorCriteriaType?: BehaviorCriteriaType | string;

  /**
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   */
  listSuppressedAlerts?: boolean;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListViolationEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListViolationEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior that was violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * <p>
   *             The details of a violation event.
   *         </p>
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType | string;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The description of the verification state of the violation.</p>
   */
  verificationStateDescription?: string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;
}

export namespace ViolationEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViolationEvent): any => ({
    ...obj,
  });
}

export interface ListViolationEventsResponse {
  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: ViolationEvent[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export namespace ListViolationEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListViolationEventsResponse): any => ({
    ...obj,
  });
}

export interface PutVerificationStateOnViolationRequest {
  /**
   * <p>The violation ID.</p>
   */
  violationId: string | undefined;

  /**
   * <p>The verification state of the violation.</p>
   */
  verificationState: VerificationState | string | undefined;

  /**
   * <p>The description of the verification state of the violation (detect alarm).</p>
   */
  verificationStateDescription?: string;
}

export namespace PutVerificationStateOnViolationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVerificationStateOnViolationRequest): any => ({
    ...obj,
  });
}

export interface PutVerificationStateOnViolationResponse {}

export namespace PutVerificationStateOnViolationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVerificationStateOnViolationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  /**
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * <p>The private key verification certificate.</p>
   */
  verificationCertificate: string | undefined;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>Metadata which can be used to manage the CA certificate.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace RegisterCACertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCACertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCACertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The registration code is invalid.</p>
 */
export class RegistrationCodeValidationException extends __BaseException {
  readonly name: "RegistrationCodeValidationException" = "RegistrationCodeValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistrationCodeValidationException, __BaseException>) {
    super({
      name: "RegistrationCodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistrationCodeValidationException.prototype);
  }
}

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 */
export class CertificateConflictException extends __BaseException {
  readonly name: "CertificateConflictException" = "CertificateConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateConflictException, __BaseException>) {
    super({
      name: "CertificateConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateConflictException.prototype);
  }
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * @deprecated
   *
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request. Valid values that you can use include
   *          <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateResponse): any => ({
    ...obj,
  });
}

export interface RegisterCertificateWithoutCARequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateWithoutCARequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateWithoutCARequest): any => ({
    ...obj,
  });
}

export interface RegisterCertificateWithoutCAResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registered certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the registered certificate. (The last part of the certificate ARN contains the
   *          certificate ID.</p>
   */
  certificateId?: string;
}

export namespace RegisterCertificateWithoutCAResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateWithoutCAResponse): any => ({
    ...obj,
  });
}

export interface RegisterThingRequest {
  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.</p>
   */
  parameters?: Record<string, string>;
}

export namespace RegisterThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterThingRequest): any => ({
    ...obj,
  });
}

export interface RegisterThingResponse {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: Record<string, string>;
}

export namespace RegisterThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource registration failed.</p>
 */
export class ResourceRegistrationFailureException extends __BaseException {
  readonly name: "ResourceRegistrationFailureException" = "ResourceRegistrationFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceRegistrationFailureException, __BaseException>) {
    super({
      name: "ResourceRegistrationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceRegistrationFailureException.prototype);
  }
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The reason the certificate transfer was rejected.</p>
   */
  rejectReason?: string;
}

export namespace RejectCertificateTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupResponse {}

export namespace RemoveThingFromBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupRequest {
  /**
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupResponse {}

export namespace RemoveThingFromThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

export namespace ReplaceTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplaceTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface SearchIndexRequest {
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace SearchIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchIndexRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];
}

export namespace ThingGroupDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingGroupDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: string[];

  /**
   * <p>The attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The unnamed shadow and named shadow.</p>
   *          <p>For more information about shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   */
  shadow?: string;

  /**
   * <p>Contains Device Defender data.</p>
   *          <p>For more information about Device Defender, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html">Device Defender</a>. </p>
   */
  deviceDefender?: string;

  /**
   * <p>Indicates whether the thing is connected to the Amazon Web Services IoT Core service.</p>
   */
  connectivity?: ThingConnectivity;
}

export namespace ThingDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingDocument): any => ({
    ...obj,
  });
}

export interface SearchIndexResponse {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things that match the search query.</p>
   */
  things?: ThingDocument[];

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: ThingGroupDocument[];
}

export namespace SearchIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchIndexResponse): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

export namespace SetDefaultAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace SetDefaultAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace LoggingOptionsPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingOptionsPayload): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

export namespace SetLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingLevelRequest {
  /**
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel: LogLevel | string | undefined;
}

export namespace SetV2LoggingLevelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetV2LoggingLevelRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingOptionsRequest {
  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;
}

export namespace SetV2LoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetV2LoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskRequest {
  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply
   *       them to a type of audit check, to all findings from an audit, or to a
   *       specific set of
   *       findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.</p>
   */
  auditCheckToActionsMapping: Record<string, string[]> | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;
}

export namespace StartAuditMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskResponse {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

export namespace StartAuditMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 */
export class TaskAlreadyExistsException extends __BaseException {
  readonly name: "TaskAlreadyExistsException" = "TaskAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskAlreadyExistsException, __BaseException>) {
    super({
      name: "TaskAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskAlreadyExistsException.prototype);
  }
}

export interface StartDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;

  /**
   * <p>
   *       Specifies the ML Detect findings to which the mitigation actions are applied.
   *     </p>
   */
  target: DetectMitigationActionsTaskTarget | undefined;

  /**
   * <p>
   *       The actions to be performed when a device has unexpected behavior.
   *     </p>
   */
  actions: string[] | undefined;

  /**
   * <p>
   *       Specifies the time period of which violation events occurred between.
   *     </p>
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * <p>
   *       Specifies to list only active violations.
   *     </p>
   */
  includeOnlyActiveViolations?: boolean;

  /**
   * <p>
   *       Specifies to include suppressed alerts.
   *     </p>
   */
  includeSuppressedAlerts?: boolean;

  /**
   * <p>
   *       Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *     </p>
   */
  clientRequestToken?: string;
}

export namespace StartDetectMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDetectMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface StartDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;
}

export namespace StartDetectMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDetectMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskRequest {
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: string[] | undefined;
}

export namespace StartOnDemandAuditTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskResponse {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

export namespace StartOnDemandAuditTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskResponse): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskRequest {
  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket: string | undefined;

  /**
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited
   * 			JSON file. Each line contains the parameter values to provision one device
   * 			(thing).</p>
   */
  inputFileKey: string | undefined;

  /**
   * <p>The IAM role ARN that grants permission the input file.</p>
   */
  roleArn: string | undefined;
}

export namespace StartThingRegistrationTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskResponse {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export namespace StartThingRegistrationTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskRequest {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export namespace StopThingRegistrationTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskResponse {}

export namespace StopThingRegistrationTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface TestAuthorizationRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: string[];

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: string[];
}

export namespace TestAuthorizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface TestAuthorizationResponse {
  /**
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

export namespace TestAuthorizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response is invalid.</p>
 */
export class InvalidResponseException extends __BaseException {
  readonly name: "InvalidResponseException" = "InvalidResponseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseException, __BaseException>) {
    super({
      name: "InvalidResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseException.prototype);
  }
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: Record<string, string>;

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
}

export namespace HttpContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpContext): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;
}

export namespace MqttContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MqttContext): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
}

export namespace TlsContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TlsContext): any => ({
    ...obj,
  });
}

export interface TestInvokeAuthorizerRequest {
  /**
   * <p>The custom authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The token returned by your custom authentication service.</p>
   */
  token?: string;

  /**
   * <p>The signature made with the token and your custom authentication service's private
   *          key. This value must be Base-64-encoded.</p>
   */
  tokenSignature?: string;

  /**
   * <p>Specifies a test HTTP authorization request.</p>
   */
  httpContext?: HttpContext;

  /**
   * <p>Specifies a test MQTT authorization request.</p>
   */
  mqttContext?: MqttContext;

  /**
   * <p>Specifies a test TLS authorization request.</p>
   */
  tlsContext?: TlsContext;
}

export namespace TestInvokeAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface TestInvokeAuthorizerResponse {
  /**
   * <p>True if the token is authenticated, otherwise false.</p>
   */
  isAuthenticated?: boolean;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * <p>IAM policy documents.</p>
   */
  policyDocuments?: string[];

  /**
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   */
  refreshAfterInSeconds?: number;

  /**
   * <p>The number of seconds after which the connection is terminated.</p>
   */
  disconnectAfterInSeconds?: number;
}

export namespace TestInvokeAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the TransferCertificate operation.</p>
 */
export interface TransferCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The Amazon Web Services account.</p>
   */
  targetAwsAccount: string | undefined;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

export namespace TransferCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateResponse {
  /**
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;
}

export namespace TransferCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 */
export class TransferConflictException extends __BaseException {
  readonly name: "TransferConflictException" = "TransferConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferConflictException, __BaseException>) {
    super({
      name: "TransferConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferConflictException.prototype);
  }
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountAuditConfigurationRequest {
  /**
   * <p>The Amazon
   *       Resource Name
   *       (ARN)
   *       of the role that grants permission
   *       to
   *       IoT to access information about your devices, policies,
   *       certificates,
   *       and other items as required when performing an audit.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: Record<string, AuditNotificationTarget>;

  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *           <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *           <p>You
   *       cannot
   *       disable a check if
   *       it's
   *       used by any scheduled audit. You must first delete the check from the scheduled audit or
   *       delete the scheduled audit itself.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

export namespace UpdateAccountAuditConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountAuditConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountAuditConfigurationResponse {}

export namespace UpdateAccountAuditConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountAuditConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * <p>
   *       The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *     </p>
   */
  expirationDate?: Date;

  /**
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   */
  suppressIndefinitely?: boolean;

  /**
   * <p>
   *       The description of the audit suppression.
   *     </p>
   */
  description?: string;
}

export namespace UpdateAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuditSuppressionResponse {}

export namespace UpdateAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface UpdateAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The key used to extract the token from the HTTP headers. </p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the token signature.</p>
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for the time specified in <code>refreshAfterInSeconds</code>. The cached
   * 	  result is used while the device reuses the same HTTP connection.</p>
   */
  enableCachingForHttp?: boolean;
}

export namespace UpdateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace UpdateAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface UpdateBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties: BillingGroupProperties | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>UpdateBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateBillingGroupResponse {
  /**
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
}

export namespace UpdateBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus?: CACertificateStatus | string;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>If true, removes auto registration.</p>
   */
  removeAutoRegistration?: boolean;
}

export namespace UpdateCACertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER  or PENDING_ACTIVATION will result
   *          in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They
   *          are not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | string | undefined;
}

export namespace UpdateCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomMetricRequest {
  /**
   * <p> The name of the custom metric.
   *       Cannot be updated. </p>
   */
  metricName: string | undefined;

  /**
   * <p>
   *       Field
   *       represents a friendly name in the console for the custom metric,
   *       it
   *       doesn't have to be unique. Don't use this name as the metric identifier in
   *       the device metric report.
   *       Can
   *       be updated. </p>
   */
  displayName: string | undefined;
}

export namespace UpdateCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName?: string;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   */
  metricArn?: string;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   */
  metricType?: CustomMetricType | string;

  /**
   * <p>
   *       A friendly name in the console for the custom metric
   *     </p>
   */
  displayName?: string;

  /**
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   */
  creationDate?: Date;

  /**
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface UpdateDimensionRequest {
  /**
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   */
  stringValues: string[] | undefined;
}

export namespace UpdateDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDimensionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDimensionResponse {
  /**
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource
   *       Name (ARN)of
   *       the created dimension.</p>
   */
  arn?: string;

  /**
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType | string;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was initially created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was most recently updated.</p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDimensionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be updated.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The status to which the domain configuration should be updated.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>Removes the authorization configuration from a domain.</p>
   */
  removeAuthorizerConfig?: boolean;
}

export namespace UpdateDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration that was updated.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration that was updated.</p>
   */
  domainConfigurationArn?: string;
}

export namespace UpdateDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties to update.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the dynamic thing group to update.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The dynamic thing group index to update.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: <code>AWS_Things</code>.</p>
   * 		       </note>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string to update.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version to update.</p>
   * 		       <note>
   * 			         <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   * 		       </note>
   */
  queryVersion?: string;
}

export namespace UpdateDynamicThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDynamicThingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

export namespace UpdateDynamicThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationsRequest {
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: Record<string, Configuration>;
}

export namespace UpdateEventConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationsResponse {}

export namespace UpdateEventConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface UpdateFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to update.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The type of the aggregation query.</p>
   */
  aggregationType?: AggregationType;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period?: number;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The description of the fleet metric.</p>
   */
  description?: string;

  /**
   * <p>The version of the query.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName: string | undefined;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>The expected version of the fleet metric record in the registry.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFleetMetricRequest): any => ({
    ...obj,
  });
}

export interface UpdateIndexingConfigurationRequest {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>Thing group indexing configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

export namespace UpdateIndexingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIndexingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateIndexingConfigurationResponse {}

export namespace UpdateIndexingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIndexingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobRequest {
  /**
   * <p>The ID of the job to be updated.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

export namespace UpdateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionRequest {
  /**
   * <p>The friendly name for the mitigation action. You cannot change the name by using
   *         <code>UpdateMitigationAction</code>. Instead, you must delete and
   *       recreate the
   *       mitigation action with the new name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;
}

export namespace UpdateMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionResponse {
  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  actionId?: string;
}

export namespace UpdateMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>Updates the pre-provisioning hook template.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Removes pre-provisioning hook template.</p>
   */
  removePreProvisioningHook?: boolean;
}

export namespace UpdateProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningTemplateResponse {}

export namespace UpdateProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateRoleAliasRequest {
  /**
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The number of seconds the credential will be valid.</p>
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *          that the role alias references.</p>
   */
  credentialDurationSeconds?: number;
}

export namespace UpdateRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleAliasResponse {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;
}

export namespace UpdateRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateScheduledAuditRequest {
  /**
   * <p>How often the scheduled audit takes
   *       place,
   *       either <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can
   *       be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to
   *             <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit
   *       takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place.
   *       This
   *       can
   *       be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the
   *             "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace UpdateScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface UpdateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace UpdateScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileRequest {
  /**
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *      whose data is retained (stored). By default, data is retained for any metric
   *       used in the profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileResponse {
  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileResponse$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *       whose data is retained (stored). By default, data is retained for any metric
   *       used in the security profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The updated version of the security profile.</p>
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files associated with the stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

export namespace UpdateStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamRequest): any => ({
    ...obj,
  });
}

export interface UpdateStreamResponse {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace UpdateStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the UpdateThing operation.</p>
 */
export interface UpdateThingRequest {
  /**
   * <p>The name of the thing to update.</p>
   * 		       <p>You can't change a thing's name. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>A list of thing attributes, a JSON string containing name-value pairs. For
   * 			example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"name1\":\"value2\"}}</code>
   * 		       </p>
   * 		       <p>This data is used to add new attributes or update existing attributes.</p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>UpdateThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * <p>Remove a thing type association. If <b>true</b>, the
   * 			association is removed.</p>
   */
  removeThingType?: boolean;
}

export namespace UpdateThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {}

export namespace UpdateThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingResponse): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupRequest {
  /**
   * <p>The thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupResponse {
  /**
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
}

export namespace UpdateThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupsForThingRequest {
  /**
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;

  /**
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: string[];

  /**
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: string[];

  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;
}

export namespace UpdateThingGroupsForThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingGroupsForThingRequest): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupsForThingResponse {}

export namespace UpdateThingGroupsForThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateThingGroupsForThingResponse): any => ({
    ...obj,
  });
}

export interface UpdateTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   */
  status: TopicRuleDestinationStatus | string | undefined;
}

export namespace UpdateTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface UpdateTopicRuleDestinationResponse {}

export namespace UpdateTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Behavior[] | undefined;
}

export namespace ValidateSecurityProfileBehaviorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateSecurityProfileBehaviorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an error found in a behavior specification.</p>
 */
export interface ValidationError {
  /**
   * <p>The description of an error found in the behaviors.</p>
   */
  errorMessage?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * <p>True if the behaviors were valid.</p>
   */
  valid?: boolean;

  /**
   * <p>The list of any errors found in the behaviors.</p>
   */
  validationErrors?: ValidationError[];
}

export namespace ValidateSecurityProfileBehaviorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateSecurityProfileBehaviorsResponse): any => ({
    ...obj,
  });
}
