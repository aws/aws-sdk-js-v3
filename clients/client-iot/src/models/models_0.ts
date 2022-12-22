// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";

export enum AbortAction {
  CANCEL = "CANCEL",
}

export enum JobExecutionFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  REJECTED = "REJECTED",
  TIMED_OUT = "TIMED_OUT",
}

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

/**
 * <p>The criteria that determine when and how a job abort takes place.</p>
 */
export interface AbortConfig {
  /**
   * <p>The list of criteria that determine when and how to abort the job.</p>
   */
  criteriaList: AbortCriteria[] | undefined;
}

/**
 * <p>The input for the AcceptCertificateTransfer operation.</p>
 */
export interface AcceptCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
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

export enum DynamoKeyType {
  NUMBER = "NUMBER",
  STRING = "STRING",
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

/**
 * <p>The input for the DynamoActionVS action that specifies the DynamoDB table to which
 *          the message data will be written.</p>
 */
export interface PutItemInput {
  /**
   * <p>The table where the message data will be written.</p>
   */
  tableName: string | undefined;
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

/**
 * <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.</p>
 */
export interface SigV4Authorization {
  /**
   * <p>The signing region.</p>
   */
  signingRegion: string | undefined;

  /**
   * <p>The service name to use while signing with Sig V4.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The ARN of the signing role.</p>
   */
  roleArn: string | undefined;
}

/**
 * <p>The authorization method used to send messages.</p>
 */
export interface HttpAuthorization {
  /**
   * <p>Use Sig V4 authorization. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
   *             Version 4 Signing Process</a>.</p>
   */
  sigv4?: SigV4Authorization;
}

/**
 * <p>The HTTP action header.</p>
 */
export interface HttpActionHeader {
  /**
   * <p>The HTTP header key.</p>
   */
  key: string | undefined;

  /**
   * <p>The HTTP header value. Substitution templates are supported.</p>
   */
  value: string | undefined;
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

/**
 * <p>An asset property timestamp entry containing the following information.</p>
 */
export interface AssetPropertyTimestamp {
  /**
   * <p>A string that contains the time in seconds since epoch. Accepts substitution
   *       templates.</p>
   */
  timeInSeconds: string | undefined;

  /**
   * <p>Optional. A string that contains the nanosecond time offset. Accepts substitution
   *       templates.</p>
   */
  offsetInNanos?: string;
}

/**
 * <p>Contains an asset property value (of a single type).</p>
 */
export type AssetPropertyVariant =
  | AssetPropertyVariant.BooleanValueMember
  | AssetPropertyVariant.DoubleValueMember
  | AssetPropertyVariant.IntegerValueMember
  | AssetPropertyVariant.StringValueMember
  | AssetPropertyVariant.$UnknownMember;

export namespace AssetPropertyVariant {
  /**
   * <p>Optional. The string value of the value entry. Accepts substitution templates.</p>
   */
  export interface StringValueMember {
    stringValue: string;
    integerValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Optional. A string that contains the integer value of the value entry. Accepts
   *       substitution templates.</p>
   */
  export interface IntegerValueMember {
    stringValue?: never;
    integerValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Optional. A string that contains the double value of the value entry. Accepts substitution
   *       templates.</p>
   */
  export interface DoubleValueMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue: string;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Optional. A string that contains the boolean value (<code>true</code> or
   *         <code>false</code>) of the value entry. Accepts substitution templates.</p>
   */
  export interface BooleanValueMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue?: never;
    booleanValue: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    integerValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    integerValue: (value: string) => T;
    doubleValue: (value: string) => T;
    booleanValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssetPropertyVariant, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.integerValue !== undefined) return visitor.integerValue(value.integerValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface AssetPropertyValue {
  /**
   * <p>The value of the asset property.</p>
   */
  value: AssetPropertyVariant | undefined;

  /**
   * <p>The asset property value timestamp.</p>
   */
  timestamp: AssetPropertyTimestamp | undefined;

  /**
   * <p>Optional. A string that describes the quality of the value. Accepts substitution
   *       templates. Must be <code>GOOD</code>, <code>BAD</code>, or <code>UNCERTAIN</code>.</p>
   */
  quality?: string;
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface PutAssetPropertyValueEntry {
  /**
   * <p>Optional. A unique identifier for this entry that you can define to better track which
   *       message caused an error in case of failure. Accepts substitution templates. Defaults to a new
   *       UUID.</p>
   */
  entryId?: string;

  /**
   * <p>The ID of the IoT SiteWise asset. You must specify either a <code>propertyAlias</code>
   *       or both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset's property. You must specify either a <code>propertyAlias</code> or
   *       both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  propertyId?: string;

  /**
   * <p>The name of the property alias associated with your asset property. You must specify
   *       either a <code>propertyAlias</code> or both an <code>aliasId</code> and a
   *         <code>propertyId</code>. Accepts substitution templates.</p>
   */
  propertyAlias?: string;

  /**
   * <p>A list of property values to insert that each contain timestamp, quality, and value (TQV)
   *       information.</p>
   */
  propertyValues: AssetPropertyValue[] | undefined;
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

/**
 * <p>Describes an action to write data to an Amazon Kinesis stream.</p>
 */
export interface KinesisAction {
  /**
   * <p>The ARN of the IAM role that grants access to the Amazon Kinesis stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis stream.</p>
   */
  streamName: string | undefined;

  /**
   * <p>The partition key.</p>
   */
  partitionKey?: string;
}

/**
 * <p>Describes an action to invoke a Lambda function.</p>
 */
export interface LambdaAction {
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  functionArn: string | undefined;
}

/**
 * <p>Describes how to interpret an application-defined timestamp value from an MQTT message
 *          payload and the precision of that value.</p>
 */
export interface LocationTimestamp {
  /**
   * <p>An expression that returns a long epoch time value.</p>
   */
  value: string | undefined;

  /**
   * <p>The precision of the timestamp value that results from the expression
   *          described in <code>value</code>.</p>
   *          <p>Valid values:  <code>SECONDS</code> | <code>MILLISECONDS</code> |
   *          <code>MICROSECONDS</code> | <code>NANOSECONDS</code>. The default is
   *          <code>MILLISECONDS</code>.</p>
   */
  unit?: string;
}

/**
 * <p>The Amazon Location rule action sends device location updates from
 *          an MQTT message to an Amazon Location tracker resource.</p>
 */
export interface LocationAction {
  /**
   * <p>The IAM role that grants permission to write to the Amazon Location resource.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the tracker resource in Amazon Location in which the location is updated.</p>
   */
  trackerName: string | undefined;

  /**
   * <p>The unique ID of the device providing the location data.</p>
   */
  deviceId: string | undefined;

  /**
   * <p>The time that the location data was sampled. The default value is
   *       the time the MQTT message was processed.</p>
   */
  timestamp?: LocationTimestamp;

  /**
   * <p>A string that evaluates to a double value that represents the
   *          latitude of the device's location.</p>
   */
  latitude: string | undefined;

  /**
   * <p>A string that evaluates to a double value that represents the
   *          longitude of the device's location.</p>
   */
  longitude: string | undefined;
}

/**
 * <p>Describes an action that writes data to an Amazon OpenSearch Service
 *          domain.</p>
 */
export interface OpenSearchAction {
  /**
   * <p>The IAM role ARN that has access to OpenSearch.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The endpoint of your OpenSearch domain.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The OpenSearch index where you want to store your data.</p>
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

/**
 * <p>A key-value pair that you define in the header. Both the key and the value are either
 *          literal strings or valid <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
 *             templates</a>.</p>
 */
export interface UserProperty {
  /**
   * <p>A key to be specified in <code>UserProperty</code>.</p>
   */
  key: string | undefined;

  /**
   * <p>A value to be specified in <code>UserProperty</code>.</p>
   */
  value: string | undefined;
}

/**
 * <p>Specifies MQTT Version 5.0 headers information. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html"> MQTT</a> from
 *          Amazon Web Services IoT Core Developer Guide.</p>
 */
export interface MqttHeaders {
  /**
   * <p>An <code>Enum</code> string value that indicates whether the payload is formatted as
   *          UTF-8.</p>
   *          <p>Valid values are <code>UNSPECIFIED_BYTES</code> and <code>UTF8_DATA</code>.</p>
   *          <p>For more information, see <a href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901111">
   *          Payload Format Indicator</a> from the MQTT Version 5.0 specification.</p>
   *          <p>Supports <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
   *          templates</a>.</p>
   */
  payloadFormatIndicator?: string;

  /**
   * <p>A UTF-8 encoded string that describes the content of the publishing message.</p>
   *          <p>For more information, see <a href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901118">
   *          Content Type</a> from the MQTT Version 5.0 specification.</p>
   *          <p>Supports <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
   *          templates</a>.</p>
   */
  contentType?: string;

  /**
   * <p>A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe
   *          the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard
   *          characters.</p>
   *          <p>For more information, see <a href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901114">
   *          Response Topic</a> from the MQTT Version 5.0 specification.</p>
   *          <p>Supports <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
   *          templates</a>.</p>
   */
  responseTopic?: string;

  /**
   * <p>The base64-encoded binary data used by the sender of the request message to identify which request the response message is
   *          for when it's received.</p>
   *          <p>For more information, see <a href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901115">
   *          Correlation Data</a> from the MQTT Version 5.0 specification.</p>
   *          <note>
   *             <p>
   *          This binary data must be based64-encoded.
   *       </p>
   *          </note>
   *          <p>Supports <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
   *          templates</a>.</p>
   */
  correlationData?: string;

  /**
   * <p>A user-defined integer value that will persist a message at the message broker for a
   *          specified amount of time to ensure that the message will expire if it's no longer relevant to
   *          the subscriber. The value of <code>messageExpiry</code> represents the number of seconds
   *          before it expires. For more information about the limits of <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">Amazon Web Services IoT Core message broker and protocol
   *             limits and quotas </a> from the Amazon Web Services Reference Guide.</p>
   *          <p>Supports <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution
   *          templates</a>.</p>
   */
  messageExpiry?: string;

  /**
   * <p>An array of key-value pairs that you define in the MQTT5 header.</p>
   */
  userProperties?: UserProperty[];
}

/**
 * <p>Describes an action to republish to another topic.</p>
 */
export interface RepublishAction {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level to use when republishing messages. The default value
   *          is 0.</p>
   */
  qos?: number;

  /**
   * <p>MQTT Version 5.0 headers information. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">
   *          MQTT</a> from the Amazon Web Services IoT Core Developer Guide.</p>
   */
  headers?: MqttHeaders;
}

export enum CannedAccessControlList {
  AuthenticatedRead = "authenticated-read",
  AwsExecRead = "aws-exec-read",
  BucketOwnerFullControl = "bucket-owner-full-control",
  BucketOwnerRead = "bucket-owner-read",
  LogDeliveryWrite = "log-delivery-write",
  Private = "private",
  PublicRead = "public-read",
  PublicReadWrite = "public-read-write",
}

/**
 * <p>Describes an action to write data to an Amazon S3 bucket.</p>
 */
export interface S3Action {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The object key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html">Actions, resources, and condition keys for Amazon S3</a>.</p>
   */
  key: string | undefined;

  /**
   * <p>The Amazon S3 canned ACL that controls access to the object identified by the object
   *          key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">S3 canned ACLs</a>.</p>
   */
  cannedAcl?: CannedAccessControlList | string;
}

/**
 * <p>Describes an action to write a message to a Salesforce IoT Cloud Input
 *          Stream.</p>
 */
export interface SalesforceAction {
  /**
   * <p>The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The
   *          token is available from the Salesforce IoT Cloud platform after creation of the Input
   *          Stream.</p>
   */
  token: string | undefined;

  /**
   * <p>The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from
   *          the Salesforce IoT Cloud platform after creation of the Input Stream.</p>
   */
  url: string | undefined;
}

export enum MessageFormat {
  JSON = "JSON",
  RAW = "RAW",
}

/**
 * <p>Describes an action to publish to an Amazon SNS topic.</p>
 */
export interface SnsAction {
  /**
   * <p>The ARN of the SNS topic.</p>
   */
  targetArn: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>(Optional) The message format of the message to publish. Accepted values are "JSON"
   *          and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine
   *          if the payload should be parsed and relevant platform-specific bits of the payload should
   *          be extracted. To read more about SNS message formats, see <a href="https://docs.aws.amazon.com/sns/latest/dg/json-formats.html">https://docs.aws.amazon.com/sns/latest/dg/json-formats.html</a> refer to their official documentation.</p>
   */
  messageFormat?: MessageFormat | string;
}

/**
 * <p>Describes an action to publish data to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The URL of the Amazon SQS queue.</p>
   */
  queueUrl: string | undefined;

  /**
   * <p>Specifies whether to use Base64 encoding.</p>
   */
  useBase64?: boolean;
}

/**
 * <p>Starts execution of a Step Functions state machine.</p>
 */
export interface StepFunctionsAction {
  /**
   * <p>(Optional) A name will be given to the state machine execution consisting of this
   *       prefix followed by a UUID. Step Functions automatically creates a unique name for each state
   *       machine execution if one is not provided.</p>
   */
  executionNamePrefix?: string;

  /**
   * <p>The name of the Step Functions state machine whose execution will be started.</p>
   */
  stateMachineName: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT permission to start execution of a state machine
   *       ("Action":"states:StartExecution").</p>
   */
  roleArn: string | undefined;
}

/**
 * <p>Metadata attributes of the time series that are written in each measure record.</p>
 */
export interface TimestreamDimension {
  /**
   * <p>The metadata dimension name. This is the name of the column in the
   *          Amazon Timestream database table record.</p>
   *          <p>Dimensions cannot be named: <code>measure_name</code>,
   *          <code>measure_value</code>, or <code>time</code>.
   *          These  names are reserved. Dimension names cannot start
   *          with <code>ts_</code> or <code>measure_value</code> and
   *          they cannot contain the colon (<code>:</code>)
   *          character.</p>
   */
  name: string | undefined;

  /**
   * <p>The value to write in this column of the database record.</p>
   */
  value: string | undefined;
}

/**
 * <p>Describes how to interpret an application-defined timestamp value from an MQTT message
 *          payload and the precision of that value.</p>
 */
export interface TimestreamTimestamp {
  /**
   * <p>An expression that returns a long epoch time value.</p>
   */
  value: string | undefined;

  /**
   * <p>The precision of the timestamp value that results from the expression
   *          described in <code>value</code>.</p>
   *          <p>Valid values:  <code>SECONDS</code> | <code>MILLISECONDS</code> |
   *             <code>MICROSECONDS</code> | <code>NANOSECONDS</code>. The default is
   *             <code>MILLISECONDS</code>.</p>
   */
  unit: string | undefined;
}

/**
 * <p>The Timestream rule action writes attributes (measures) from an MQTT message
 *          into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a>
 *          topic rule action documentation.</p>
 */
export interface TimestreamAction {
  /**
   * <p>The ARN of the role that grants permission to write to the
   *          Amazon Timestream database table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of an Amazon Timestream database.</p>
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the database table into which to write the measure records.</p>
   */
  tableName: string | undefined;

  /**
   * <p>Metadata attributes of the time series that are written in each measure record.</p>
   */
  dimensions: TimestreamDimension[] | undefined;

  /**
   * <p>Specifies an application-defined value to replace the default value assigned to the
   *          Timestream record's timestamp in the <code>time</code> column.</p>
   *          <p>You can use this property to specify the value and the precision of the Timestream
   *          record's timestamp. You can specify a value from the message payload or a value computed by
   *          a substitution template.</p>
   *          <p>If omitted, the topic rule action assigns the timestamp, in milliseconds, at the time it
   *          processed the rule. </p>
   */
  timestamp?: TimestreamTimestamp;
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

  /**
   * <p>The Amazon Location Service rule action sends device location updates from
   *          an MQTT message to an Amazon Location tracker resource.</p>
   */
  location?: LocationAction;
}

export enum ActionType {
  CONNECT = "CONNECT",
  PUBLISH = "PUBLISH",
  RECEIVE = "RECEIVE",
  SUBSCRIBE = "SUBSCRIBE",
}

export enum ComparisonOperator {
  GREATER_THAN = "greater-than",
  GREATER_THAN_EQUALS = "greater-than-equals",
  IN_CIDR_SET = "in-cidr-set",
  IN_PORT_SET = "in-port-set",
  IN_SET = "in-set",
  LESS_THAN = "less-than",
  LESS_THAN_EQUALS = "less-than-equals",
  NOT_IN_CIDR_SET = "not-in-cidr-set",
  NOT_IN_PORT_SET = "not-in-port-set",
  NOT_IN_SET = "not-in-set",
}

export enum ConfidenceLevel {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>
 *             The configuration of an ML Detect Security Profile.
 *         </p>
 */
export interface MachineLearningDetectionConfig {
  /**
   * <p>
   *             The sensitivity of anomalous behavior evaluation. Can be <code>Low</code>, <code>Medium</code>, or <code>High</code>.
   *         </p>
   */
  confidenceLevel: ConfidenceLevel | string | undefined;
}

/**
 * <p>A statistical ranking (percentile) that
 *       indicates a threshold value by which a behavior is determined to be in compliance or in
 *       violation of the behavior.</p>
 */
export interface StatisticalThreshold {
  /**
   * <p>The percentile that
   *       resolves to a threshold value by which compliance with a behavior is determined. Metrics are
   *       collected over the specified period (<code>durationSeconds</code>) from all reporting devices
   *       in your account and statistical ranks are calculated. Then, the measurements from a device are
   *       collected over the same period. If the accumulated measurements from the device fall above or
   *       below (<code>comparisonOperator</code>) the value associated with the percentile specified,
   *       then the device is considered to be in compliance with the behavior, otherwise a violation
   *       occurs.</p>
   */
  statistic?: string;
}

/**
 * <p>The value to be compared with the <code>metric</code>.</p>
 */
export interface MetricValue {
  /**
   * <p>If the <code>comparisonOperator</code> calls for a numeric value, use this
   *           to specify that numeric value to be compared with the <code>metric</code>.</p>
   */
  count?: number;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  cidrs?: string[];

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of ports, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  ports?: number[];

  /**
   * <p>
   *             The numeral value of a metric.
   *         </p>
   */
  number?: number;

  /**
   * <p>
   *             The numeral values of a metric.
   *         </p>
   */
  numbers?: number[];

  /**
   * <p>
   *             The string values of a metric.
   *         </p>
   */
  strings?: string[];
}

/**
 * <p>The criteria by which the behavior is determined to be normal.</p>
 */
export interface BehaviorCriteria {
  /**
   * <p>The operator that relates the thing measured (<code>metric</code>) to the criteria
   *           (containing a <code>value</code> or <code>statisticalThreshold</code>). Valid operators include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string-list</code>: <code>in-set</code> and <code>not-in-set</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>number-list</code>: <code>in-set</code> and <code>not-in-set</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip-address-list</code>: <code>in-cidr-set</code> and <code>not-in-cidr-set</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>number</code>: <code>less-than</code>, <code>less-than-equals</code>, <code>greater-than</code>, and <code>greater-than-equals</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  comparisonOperator?: ComparisonOperator | string;

  /**
   * <p>The value to be compared with the <code>metric</code>.</p>
   */
  value?: MetricValue;

  /**
   * <p>Use this to specify the time duration over which the behavior is evaluated, for those criteria that
   *       have a time dimension (for example, <code>NUM_MESSAGES_SENT</code>). For a
   *         <code>statisticalThreshhold</code> metric comparison, measurements from all devices are
   *       accumulated over this time duration before being used to calculate percentiles, and later,
   *       measurements from an individual device are also accumulated over this time duration before
   *       being given a percentile rank. Cannot be used with list-based metric datatypes.</p>
   */
  durationSeconds?: number;

  /**
   * <p>If a device is in violation of the behavior for the specified number of consecutive
   *           datapoints, an alarm occurs. If not specified, the default is 1.</p>
   */
  consecutiveDatapointsToAlarm?: number;

  /**
   * <p>If an alarm has occurred and the offending device is no longer in violation of the behavior
   *           for the specified number of consecutive datapoints, the alarm is cleared. If not specified,
   *           the default is 1.</p>
   */
  consecutiveDatapointsToClear?: number;

  /**
   * <p>A statistical ranking (percentile)that
   *       indicates a threshold value by which a behavior is determined to be in compliance or in
   *       violation of the behavior.</p>
   */
  statisticalThreshold?: StatisticalThreshold;

  /**
   * <p>
   *             The configuration of an ML Detect
   *         </p>
   */
  mlDetectionConfig?: MachineLearningDetectionConfig;
}

export enum DimensionValueOperator {
  IN = "IN",
  NOT_IN = "NOT_IN",
}

/**
 * <p>The dimension of a metric.</p>
 */
export interface MetricDimension {
  /**
   * <p>A unique identifier for the dimension.</p>
   */
  dimensionName: string | undefined;

  /**
   * <p>Defines how the <code>dimensionValues</code> of a dimension are interpreted. For example, for dimension type TOPIC_FILTER, the <code>IN</code> operator, a message will be counted only if its topic matches one of the topic filters. With <code>NOT_IN</code> operator, a message will be counted only if it doesn't match any of the topic filters. The operator is optional: if it's not provided (is <code>null</code>), it will be interpreted as <code>IN</code>.</p>
   */
  operator?: DimensionValueOperator | string;
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

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>
 *             The details of a violation event.
 *         </p>
 */
export interface ViolationEventAdditionalInfo {
  /**
   * <p>
   *             The sensitivity of anomalous behavior evaluation. Can be <code>Low</code>, <code>Medium</code>, or <code>High</code>.
   *         </p>
   */
  confidenceLevel?: ConfidenceLevel | string;
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

/**
 * <p>Parameters used when defining a mitigation action that move a set of things to a thing group.</p>
 */
export interface AddThingsToThingGroupParams {
  /**
   * <p>The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you can't add a thing to more than one group in the same hierarchy.</p>
   */
  thingGroupNames: string[] | undefined;

  /**
   * <p>Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic thing groups.</p>
   */
  overrideDynamicGroups?: boolean;
}

export interface AddThingToBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * 		       <note>
   *             <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p>
   *          </note>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be added to the billing group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be added to the billing group.</p>
   */
  thingArn?: string;
}

export interface AddThingToBillingGroupResponse {}

export interface AddThingToThingGroupRequest {
  /**
   * <p>The name of the group to which you are adding a thing.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The ARN of the group to which you are adding a thing.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to add to a group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to add to a group.</p>
   */
  thingArn?: string;

  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;
}

export interface AddThingToThingGroupResponse {}

export enum AggregationTypeName {
  CARDINALITY = "Cardinality",
  PERCENTILES = "Percentiles",
  STATISTICS = "Statistics",
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

export enum AlertTargetType {
  SNS = "SNS",
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

/**
 * <p>Contains information that allowed the authorization.</p>
 */
export interface Allowed {
  /**
   * <p>A list of policies that allowed the authentication.</p>
   */
  policies?: Policy[];
}

export interface AssociateTargetsWithJobRequest {
  /**
   * <p>A list of thing group ARNs that define the targets of the job.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>An optional comment string describing why the job was associated with the targets.</p>
   */
  comment?: string;

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
}

export interface AssociateTargetsWithJobResponse {
  /**
   * <p>An ARN identifying the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;
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

export interface AttachPolicyRequest {
  /**
   * <p>The name of the policy to attach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html">identity</a> to which the policy is attached. For example, a thing group or a certificate.</p>
   */
  target: string | undefined;
}

/**
 * <p>The input for the AttachPrincipalPolicy operation.</p>
 */
export interface AttachPrincipalPolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal, which can be a certificate ARN (as returned from the CreateCertificate
   *          operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;
}

export interface AttachSecurityProfileRequest {
  /**
   * <p>The security profile that is attached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the target (thing group) to which the security profile is attached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export interface AttachSecurityProfileResponse {}

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
 * <p>The input for the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The principal, which can be a certificate ARN (as returned from the
   * 			CreateCertificate operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;
}

/**
 * <p>The output from the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalResponse {}

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

/**
 * <p>Which audit checks are enabled and disabled for this account.</p>
 */
export interface AuditCheckConfiguration {
  /**
   * <p>True if this audit check is enabled for this account.</p>
   */
  enabled?: boolean;
}

export enum AuditCheckRunStatus {
  CANCELED = "CANCELED",
  COMPLETED_COMPLIANT = "COMPLETED_COMPLIANT",
  COMPLETED_NON_COMPLIANT = "COMPLETED_NON_COMPLIANT",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_FOR_DATA_COLLECTION = "WAITING_FOR_DATA_COLLECTION",
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

/**
 * <p>The certificate issuer indentifier.</p>
 */
export interface IssuerCertificateIdentifier {
  /**
   * <p>The subject of the issuer certificate.</p>
   */
  issuerCertificateSubject?: string;

  /**
   * <p>The issuer ID.</p>
   */
  issuerId?: string;

  /**
   * <p>The issuer certificate serial number.</p>
   */
  issuerCertificateSerialNumber?: string;
}

/**
 * <p>Information about the version of the policy associated with the resource.</p>
 */
export interface PolicyVersionIdentifier {
  /**
   * <p>The name of the policy.</p>
   */
  policyName?: string;

  /**
   * <p>The ID of the version of the policy associated with the resource.</p>
   */
  policyVersionId?: string;
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

  /**
   * <p>The issuer certificate identifier.</p>
   */
  issuerCertificateIdentifier?: IssuerCertificateIdentifier;

  /**
   * <p>The ARN of the identified device certificate.</p>
   */
  deviceCertificateArn?: string;
}

export enum ResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CLIENT_ID = "CLIENT_ID",
  COGNITO_IDENTITY_POOL = "COGNITO_IDENTITY_POOL",
  DEVICE_CERTIFICATE = "DEVICE_CERTIFICATE",
  IAM_ROLE = "IAM_ROLE",
  IOT_POLICY = "IOT_POLICY",
  ISSUER_CERTIFICATE = "ISSUER_CERTIFICATE",
  ROLE_ALIAS = "ROLE_ALIAS",
}

/**
 * <p>Information about the resource that was noncompliant with the audit check.</p>
 */
export interface NonCompliantResource {
  /**
   * <p>The type of the noncompliant resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>Other information about the noncompliant resource.</p>
   */
  additionalInfo?: Record<string, string>;
}

/**
 * <p>Information about a related resource.</p>
 */
export interface RelatedResource {
  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>Information that identifies the resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>Other information about the resource.</p>
   */
  additionalInfo?: Record<string, string>;
}

export enum AuditFindingSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
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

export enum AuditFrequency {
  BIWEEKLY = "BIWEEKLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
}

export enum AuditMitigationActionsExecutionStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED",
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

export enum AuditMitigationActionsTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
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

export enum AuditNotificationType {
  SNS = "SNS",
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

export enum AuditTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum AuditTaskType {
  ON_DEMAND_AUDIT_TASK = "ON_DEMAND_AUDIT_TASK",
  SCHEDULED_AUDIT_TASK = "SCHEDULED_AUDIT_TASK",
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

export enum AuthDecision {
  ALLOWED = "ALLOWED",
  EXPLICIT_DENY = "EXPLICIT_DENY",
  IMPLICIT_DENY = "IMPLICIT_DENY",
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

export enum AuthorizerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
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

/**
 * <p>Information that explicitly denies authorization.</p>
 */
export interface ExplicitDeny {
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Policy[];
}

/**
 * <p>Information that implicitly denies authorization. When policy doesn't explicitly deny
 *          or allow an action on a resource it is considered an implicit deny.</p>
 */
export interface ImplicitDeny {
  /**
   * <p>Policies that don't contain a matching allow or deny statement for the specified
   *          action on the specified resource. </p>
   */
  policies?: Policy[];
}

/**
 * <p>Contains information that denied the authorization.</p>
 */
export interface Denied {
  /**
   * <p>Information that implicitly denies the authorization. When a policy doesn't
   *          explicitly deny or allow an action on a resource it is considered an implicit
   *          deny.</p>
   */
  implicitDeny?: ImplicitDeny;

  /**
   * <p>Information that explicitly denies the authorization. </p>
   */
  explicitDeny?: ExplicitDeny;
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

export enum AutoRegistrationStatus {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export interface CancelAuditMitigationActionsTaskRequest {
  /**
   * <p>The unique identifier for the task that you want to cancel. </p>
   */
  taskId: string | undefined;
}

export interface CancelAuditMitigationActionsTaskResponse {}

export interface CancelAuditTaskRequest {
  /**
   * <p>The ID of the audit you want to cancel. You can only cancel an
   *               audit that is "IN_PROGRESS".</p>
   */
  taskId: string | undefined;
}

export interface CancelAuditTaskResponse {}

/**
 * <p>The input for the CancelCertificateTransfer operation.</p>
 */
export interface CancelCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export interface CancelDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;
}

export interface CancelDetectMitigationActionsTaskResponse {}

export interface CancelJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional)A reason code string that explains why the job was canceled.</p>
   */
  reasonCode?: string;

  /**
   * <p>An optional comment string describing why the job was canceled.</p>
   */
  comment?: string;

  /**
   * <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED"
   *           are canceled, otherwise only job executions with status "QUEUED" are canceled. The default
   *           is <code>false</code>.</p>
   *         <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing
   *           the job to be unable to update the job execution status.  Use caution and ensure that each
   *           device executing a job which is canceled is able to recover to a valid state.</p>
   */
  force?: boolean;
}

export interface CancelJobResponse {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;
}

export interface CancelJobExecutionRequest {
  /**
   * <p>The ID of the job to be canceled.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose execution of the job will be canceled.</p>
   */
  thingName: string | undefined;

  /**
   * <p>(Optional) If <code>true</code> the job execution will be canceled if it has status
   *           IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status
   *           QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set
   *           <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code>
   *           will be thrown. The default is <code>false</code>.</p>
   *         <p>Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable
   *           to update the job execution status.  Use caution and ensure that the device is able to
   *           recover to a valid state.</p>
   */
  force?: boolean;

  /**
   * <p>(Optional) The expected current version of the job execution. Each time you update the job
   *           execution, its version is incremented. If the version of the job execution stored in Jobs does
   *           not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that
   *           contains the current job execution status data is returned. (This makes it unnecessary to
   *           perform a separate DescribeJobExecution request in order to obtain the job execution status
   *           data.)</p>
   */
  expectedVersion?: number;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If not
   *           specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.</p>
   */
  statusDetails?: Record<string, string>;
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

export interface ClearDefaultAuthorizerRequest {}

export interface ClearDefaultAuthorizerResponse {}

export interface ConfirmTopicRuleDestinationRequest {
  /**
   * <p>The token used to confirm ownership or access to the topic rule confirmation URL.</p>
   */
  confirmationToken: string | undefined;
}

export interface ConfirmTopicRuleDestinationResponse {}

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

export interface CreateAuditSuppressionRequest {
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
   *       The epoch timestamp in seconds at which this suppression expires.
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

  /**
   * <p>
   *       Each audit supression must have a unique client request token. If you try to create a new audit
   *       suppression with the same token as one that already exists, an exception occurs. If you omit this
   *       value, Amazon Web Services SDKs will automatically generate a unique client request.</p>
   */
  clientRequestToken?: string;
}

export interface CreateAuditSuppressionResponse {}

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

export interface CreateAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn: string | undefined;

  /**
   * <p>The name of the token key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the digital signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the create authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>Metadata which can be used to manage the custom authorizer.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for clients that use persistent HTTP connections. The results are cached for the time
   * 	  specified by the Lambda function in <code>refreshAfterInSeconds</code>. This value
   *      does not affect authorization of clients that use MQTT connections.</p>
   *          <p>The default value is <code>false</code>.</p>
   */
  enableCachingForHttp?: boolean;
}

export interface CreateAuthorizerResponse {
  /**
   * <p>The authorizer's name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
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

export interface CreateBillingGroupRequest {
  /**
   * <p>The name you wish to give to the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>Metadata which can be used to manage the billing group.</p>
   */
  tags?: Tag[];
}

export interface CreateBillingGroupResponse {
  /**
   * <p>The name you gave to the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;
}

/**
 * <p>The input for the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrRequest {
  /**
   * <p>The certificate signing request (CSR).</p>
   */
  certificateSigningRequest: string | undefined;

  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

/**
 * <p>The output from the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal
   *          for policy operations.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. Certificate management operations only take a
   *          certificateId.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;
}

export enum CustomMetricType {
  IP_ADDRESS_LIST = "ip-address-list",
  NUMBER = "number",
  NUMBER_LIST = "number-list",
  STRING_LIST = "string-list",
}

export interface CreateCustomMetricRequest {
  /**
   * <p> The name of the custom metric. This will be used in the metric report submitted from the
   *       device/thing. The name can't begin with <code>aws:</code>. You can't change the name after you
   *       define it.</p>
   */
  metricName: string | undefined;

  /**
   * <p> The friendly name in the console for the custom metric. This name doesn't have to be
   *       unique. Don't use this name as the metric identifier in the device metric report. You can
   *       update the friendly name after you define it.</p>
   */
  displayName?: string;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but when you
   *         submit the metrics value in the DeviceMetrics report, you must pass it as an array with a
   *         single value.</p>
   *          </important>
   */
  metricType: CustomMetricType | string | undefined;

  /**
   * <p>
   *       Metadata that can be used to manage the custom metric.
   *     </p>
   */
  tags?: Tag[];

  /**
   * <p>Each custom
   *       metric must have a unique client request token. If you try to create a new custom metric that
   *       already exists with a different token,
   *       an exception
   *       occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request. </p>
   */
  clientRequestToken?: string;
}

export interface CreateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric to be used in the metric report.
   *     </p>
   */
  metricName?: string;

  /**
   * <p> The Amazon Resource Number (ARN) of the custom metric. For example,
   *           <code>arn:<i>aws-partition</i>:iot:<i>region</i>:<i>accountId</i>:custommetric/<i>metricName</i>
   *             </code>
   *          </p>
   */
  metricArn?: string;
}

export enum DimensionType {
  TOPIC_FILTER = "TOPIC_FILTER",
}

export interface CreateDimensionRequest {
  /**
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
   *          </p>
   */
  type: DimensionType | string | undefined;

  /**
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   */
  stringValues: string[] | undefined;

  /**
   * <p>Metadata that can be used to manage the dimension.</p>
   */
  tags?: Tag[];

  /**
   * <p>Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs.
   *       If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.</p>
   */
  clientRequestToken?: string;
}

export interface CreateDimensionResponse {
  /**
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name
   *       (ARN)
   *       of
   *       the created dimension.</p>
   */
  arn?: string;
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

export enum ServiceType {
  CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER",
  DATA = "DATA",
  JOBS = "JOBS",
}

export interface CreateDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN.
   *       This value is not required for Amazon Web Services-managed domains.</p>
   */
  serverCertificateArns?: string[];

  /**
   * <p>The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority.
   *          This value is not required for Amazon Web Services-managed domains.</p>
   */
  validationCertificateArn?: string;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   *          <note>
   *             <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p>
   *          </note>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>Metadata which can be used to manage the domain configuration.</p>
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

export interface CreateDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;
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

export interface CreateDynamicThingGroupRequest {
  /**
   * <p>The dynamic thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>The dynamic thing group index name.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: <code>AWS_Things</code>.</p>
   * 		       </note>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   * 		       <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The dynamic thing group query version.</p>
   * 		       <note>
   * 			         <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   * 		       </note>
   */
  queryVersion?: string;

  /**
   * <p>Metadata which can be used to manage the dynamic thing group.</p>
   */
  tags?: Tag[];
}

export interface CreateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The dynamic thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The dynamic thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;
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

export enum FleetMetricUnit {
  Bits = "Bits",
  BitsSecond = "Bits/Second",
  Bytes = "Bytes",
  BytesSecond = "Bytes/Second",
  Count = "Count",
  CountSecond = "Count/Second",
  Gigabits = "Gigabits",
  GigabitsSecond = "Gigabits/Second",
  Gigabytes = "Gigabytes",
  GigabytesSecond = "Gigabytes/Second",
  Kilobits = "Kilobits",
  KilobitsSecond = "Kilobits/Second",
  Kilobytes = "Kilobytes",
  KilobytesSecond = "Kilobytes/Second",
  Megabits = "Megabits",
  MegabitsSecond = "Megabits/Second",
  Megabytes = "Megabytes",
  MegabytesSecond = "Megabytes/Second",
  Microseconds = "Microseconds",
  Milliseconds = "Milliseconds",
  None = "None",
  Percent = "Percent",
  Seconds = "Seconds",
  Terabits = "Terabits",
  TerabitsSecond = "Terabits/Second",
  Terabytes = "Terabytes",
  TerabytesSecond = "Terabytes/Second",
}

export interface CreateFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to create.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The type of the aggregation query.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period: number | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField: string | undefined;

  /**
   * <p>The fleet metric description.</p>
   */
  description?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>Metadata, which can be used to manage the fleet metric.</p>
   */
  tags?: Tag[];
}

export interface CreateFleetMetricResponse {
  /**
   * <p>The name of the fleet metric to create.</p>
   */
  metricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the new fleet metric.</p>
   */
  metricArn?: string;
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

export enum RetryableFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  TIMED_OUT = "TIMED_OUT",
}

/**
 * <p>The criteria that determines how many retries are allowed for each failure
 *             type for a job.</p>
 */
export interface RetryCriteria {
  /**
   * <p>The type of job execution failures that can initiate a job retry.</p>
   */
  failureType: RetryableFailureType | string | undefined;

  /**
   * <p>The number of retries allowed for a failure type for the job.</p>
   */
  numberOfRetries: number | undefined;
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

/**
 * <p>Allows you to define a criteria to initiate the increase in rate of rollout for a job.</p>
 */
export interface RateIncreaseCriteria {
  /**
   * <p>The threshold for number of notified things that will initiate the increase in rate of rollout.</p>
   */
  numberOfNotifiedThings?: number;

  /**
   * <p>The threshold for number of succeeded things that will initiate the increase in rate of rollout.</p>
   */
  numberOfSucceededThings?: number;
}

/**
 * <p>Allows you to create an exponential rate of rollout for a job.</p>
 */
export interface ExponentialRolloutRate {
  /**
   * <p>The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.
   *             This parameter allows you to define the initial rate of rollout.</p>
   */
  baseRatePerMinute: number | undefined;

  /**
   * <p>The exponential factor to increase the rate of rollout for a job.</p>
   *         <p>Amazon Web Services IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  incrementFactor: number | undefined;

  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p>
   */
  rateIncreaseCriteria: RateIncreaseCriteria | undefined;
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

/**
 * <p>Configuration for pre-signed S3 URLs.</p>
 */
export interface PresignedUrlConfig {
  /**
   * <p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job
   *             data/updates are stored. The role must also grant permission for IoT to download the files.</p>
   *         <important>
   *             <p>For information about addressing the confused deputy problem, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/cross-service-confused-deputy-prevention.html">cross-service
   *                 confused deputy prevention</a> in the <i>Amazon Web Services IoT Core developer guide</i>.</p>
   *         </important>
   */
  roleArn?: string;

  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600
   *             seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>
   */
  expiresInSec?: number;
}

export enum JobEndBehavior {
  CANCEL = "CANCEL",
  FORCE_CANCEL = "FORCE_CANCEL",
  STOP_ROLLOUT = "STOP_ROLLOUT",
}

/**
 * <p>Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.</p>
 */
export interface SchedulingConfig {
  /**
   * <p>The time a job will begin rollout of the job document to all devices in the target
   *             group for a job. The <code>startTime</code> can be scheduled up to a year in advance and
   *             must be scheduled a minimum of thirty minutes from the current time.</p>
   */
  startTime?: string;

  /**
   * <p>The time a job will stop rollout of the job document to all devices in the target
   *             group for a job. The <code>endTime</code> must take place no later than two years from
   *             the current time and be scheduled a minimum of thirty minutes from the current time. The
   *             minimum duration between <code>startTime</code> and <code>endTime</code> is thirty
   *             minutes. The maximum duration between <code>startTime</code> and <code>endTime</code> is
   *             two years. </p>
   */
  endTime?: string;

  /**
   * <p>Specifies the end behavior for all job executions after a job reaches the selected
   *                 <code>endTime</code>. If <code>endTime</code> is not selected when creating the job,
   *             then <code>endBehavior</code> does not apply.</p>
   */
  endBehavior?: JobEndBehavior | string;
}

export enum TargetSelection {
  CONTINUOUS = "CONTINUOUS",
  SNAPSHOT = "SNAPSHOT",
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

export interface CreateJobRequest {
  /**
   * <p>A job identifier which must be unique for your Amazon Web Services account. We recommend using a UUID. Alpha-numeric
   *             characters, "-" and "_" are valid for use here.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A list of things and thing groups to which the job should be sent.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>An S3 link to the job document. Required if you don't specify a value for <code>document</code>.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  documentSource?: string;

  /**
   * <p>The job document. Required if you don't specify a value for <code>documentSource</code>.</p>
   */
  document?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

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
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create the criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the time expires, it will be
   *            automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>Metadata which can be used to manage the job.</p>
   */
  tags?: Tag[];

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
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;

  /**
   * <p>Parameters of an Amazon Web Services managed template that you can specify to create the job document.</p>
   *         <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *         </note>
   */
  documentParameters?: Record<string, string>;

  /**
   * <p>The configuration that allows you to schedule a job for a future date and time in
   *             addition to specifying the end behavior for each job execution.</p>
   */
  schedulingConfig?: SchedulingConfig;
}

export interface CreateJobResponse {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job.</p>
   */
  jobId?: string;

  /**
   * <p>The job description.</p>
   */
  description?: string;
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

export interface CreateJobTemplateRequest {
  /**
   * <p>A unique identifier for the job template. We recommend using a UUID. Alpha-numeric
   *         characters, "-", and "_" are valid for use here.</p>
   */
  jobTemplateId: string | undefined;

  /**
   * <p>The ARN of the job to use as the basis for the job template.</p>
   */
  jobArn?: string;

  /**
   * <p>An S3 link to the job document to use in the template. Required if you don't specify a value for <code>document</code>.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  documentSource?: string;

  /**
   * <p>The job document. Required if you don't specify a value for <code>documentSource</code>.</p>
   */
  document?: string;

  /**
   * <p>A description of the job document.</p>
   */
  description: string | undefined;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>Metadata that can be used to manage the job template.</p>
   */
  tags?: Tag[];

  /**
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

export interface CreateJobTemplateResponse {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;
}

/**
 * <p>The input for the CreateKeysAndCertificate operation.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificateRequest</a> action.</p>
 */
export interface CreateKeysAndCertificateRequest {
  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
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

/**
 * <p>The output of the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateResponse {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. IoT issues a default subject name for the certificate
   *          (for example, IoT Certificate).</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The generated key pair.</p>
   */
  keyPair?: KeyPair;
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN",
}

/**
 * <p>Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.</p>
 */
export interface EnableIoTLoggingParams {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for logging.</p>
   */
  roleArnForLogging: string | undefined;

  /**
   * <p>Specifies the type of information to be logged.</p>
   */
  logLevel: LogLevel | string | undefined;
}

/**
 * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
 */
export interface PublishFindingToSnsParams {
  /**
   * <p>The ARN of the topic to which you want to publish the findings.</p>
   */
  topicArn: string | undefined;
}

export enum PolicyTemplateName {
  BLANK_POLICY = "BLANK_POLICY",
}

/**
 * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
 */
export interface ReplaceDefaultPolicyVersionParams {
  /**
   * <p>The name of the template to be applied. The only supported value is <code>BLANK_POLICY</code>.</p>
   */
  templateName: PolicyTemplateName | string | undefined;
}

export enum CACertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE",
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
 */
export interface UpdateCACertificateParams {
  /**
   * <p>The action that you want to apply to the CA certificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: CACertificateUpdateAction | string | undefined;
}

export enum DeviceCertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE",
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
 */
export interface UpdateDeviceCertificateParams {
  /**
   * <p>The action that you want to apply to the device certificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: DeviceCertificateUpdateAction | string | undefined;
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

export interface CreateMitigationActionRequest {
  /**
   * <p>A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).</p>
   */
  actionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams: MitigationActionParams | undefined;

  /**
   * <p>Metadata that can be used to manage the mitigation action.</p>
   */
  tags?: Tag[];
}

export interface CreateMitigationActionResponse {
  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the new mitigation action.</p>
   */
  actionId?: string;
}

export enum AwsJobAbortCriteriaAbortAction {
  CANCEL = "CANCEL",
}

export enum AwsJobAbortCriteriaFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  REJECTED = "REJECTED",
  TIMED_OUT = "TIMED_OUT",
}

/**
 * <p>The criteria that determine when and how a job abort takes place.</p>
 */
export interface AwsJobAbortCriteria {
  /**
   * <p>The type of job execution failures that can initiate a job abort.</p>
   */
  failureType: AwsJobAbortCriteriaFailureType | string | undefined;

  /**
   * <p>The type of job action to take to initiate the job abort.</p>
   */
  action: AwsJobAbortCriteriaAbortAction | string | undefined;

  /**
   * <p>The minimum percentage of job execution failures that must occur to initiate the job abort.</p>
   *          <p>Amazon Web Services IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).</p>
   */
  thresholdPercentage: number | undefined;

  /**
   * <p>The minimum number of things which must receive job execution notifications before the job
   *           can be aborted.</p>
   */
  minNumberOfExecutedThings: number | undefined;
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

/**
 * <p>The criteria to initiate the increase in rate of rollout for a job.</p>
 */
export interface AwsJobRateIncreaseCriteria {
  /**
   * <p>When this number of things have been notified, it will initiate an increase in the rollout
   *             rate.</p>
   */
  numberOfNotifiedThings?: number;

  /**
   * <p>When this number of things have succeeded in their job execution, it will initiate an
   *             increase in the rollout rate.</p>
   */
  numberOfSucceededThings?: number;
}

/**
 * <p>The rate of increase for a job rollout. This parameter allows you to define an exponential rate
 *             increase for a job rollout.</p>
 */
export interface AwsJobExponentialRolloutRate {
  /**
   * <p>The minimum number of things that will be notified of a pending job, per minute, at the start
   *             of the job rollout. This is the initial rate of the rollout.</p>
   */
  baseRatePerMinute: number | undefined;

  /**
   * <p>The rate of increase for a job rollout. The number of things notified is multiplied by this
   *             factor.</p>
   */
  incrementFactor: number | undefined;

  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p>
   *         <p>Amazon Web Services IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria | undefined;
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

/**
 * <p>Describes the certificate chain being used when code signing a file.</p>
 */
export interface CodeSigningCertificateChain {
  /**
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;

  /**
   * <p>A base64 encoded binary representation of the code signing certificate chain.</p>
   */
  inlineDocument?: string;
}

/**
 * <p>Describes the signature for a file.</p>
 */
export interface CodeSigningSignature {
  /**
   * <p>A base64 encoded binary representation of the code signing signature.</p>
   */
  inlineDocument?: Uint8Array;
}

/**
 * <p>Describes a custom method used to code sign a file.</p>
 */
export interface CustomCodeSigning {
  /**
   * <p>The signature for the file.</p>
   */
  signature?: CodeSigningSignature;

  /**
   * <p>The certificate chain.</p>
   */
  certificateChain?: CodeSigningCertificateChain;

  /**
   * <p>The hash algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses <code>SHA256</code> or <code>SHA1</code>, so you can pass either of them based on which was used for generating the signature.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses <code>ECDSA</code> or <code>RSA</code>, so you can pass either of them based on which was used for generating the signature.</p>
   */
  signatureAlgorithm?: string;
}

/**
 * <p>Describes the location of updated firmware in S3.</p>
 */
export interface S3Destination {
  /**
   * <p>The S3 bucket that contains the updated firmware.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 prefix.</p>
   */
  prefix?: string;
}

/**
 * <p>Describes the location of the updated firmware.</p>
 */
export interface Destination {
  /**
   * <p>Describes the location in S3 of the updated firmware.</p>
   */
  s3Destination?: S3Destination;
}

/**
 * <p>Describes the code-signing profile.</p>
 */
export interface SigningProfileParameter {
  /**
   * <p>Certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The hardware platform of your device.</p>
   */
  platform?: string;

  /**
   * <p>The location of the code-signing certificate on your device.</p>
   */
  certificatePathOnDevice?: string;
}

/**
 * <p>Information required to start a signing job.</p>
 */
export interface StartSigningJobParameter {
  /**
   * <p>Describes the code-signing profile.</p>
   */
  signingProfileParameter?: SigningProfileParameter;

  /**
   * <p>The code-signing profile name.</p>
   */
  signingProfileName?: string;

  /**
   * <p>The location to write the code-signed file.</p>
   */
  destination?: Destination;
}

/**
 * <p>Describes the method to use when code signing a file.</p>
 */
export interface CodeSigning {
  /**
   * <p>The ID of the <code>AWSSignerJob</code> which was created to sign the file.</p>
   */
  awsSignerJobId?: string;

  /**
   * <p>Describes the code-signing job.</p>
   */
  startSigningJobParameter?: StartSigningJobParameter;

  /**
   * <p>A custom method for code signing a file.</p>
   */
  customCodeSigning?: CustomCodeSigning;
}

/**
 * <p>The S3 location.</p>
 */
export interface S3Location {
  /**
   * <p>The S3 bucket.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 key.</p>
   */
  key?: string;

  /**
   * <p>The S3 bucket version.</p>
   */
  version?: string;
}

/**
 * <p>Describes a group of files that can be streamed.</p>
 */
export interface _Stream {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The ID of a file associated with a stream.</p>
   */
  fileId?: number;
}

/**
 * <p>The location of the OTA update.</p>
 */
export interface FileLocation {
  /**
   * <p>The stream that contains the OTA update.</p>
   */
  stream?: _Stream;

  /**
   * <p>The location of the updated firmware in S3.</p>
   */
  s3Location?: S3Location;
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

export enum Protocol {
  HTTP = "HTTP",
  MQTT = "MQTT",
}

export interface CreateOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to be created.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>The description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The devices targeted to receive OTA updates.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *            HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things
   *             specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a
   *             thing when a change is detected in a target. For example, an update will run on a thing when the thing is
   *             added to a target group, even after the update was completed by all things originally in the group. Valid
   *             values: CONTINUOUS | SNAPSHOT.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  awsJobAbortConfig?: AwsJobAbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer is
   *             started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution
   *             status is not set to another terminal state before the timer expires, it will be automatically
   *             set to <code>TIMED_OUT</code>.</p>
   */
  awsJobTimeoutConfig?: AwsJobTimeoutConfig;

  /**
   * <p>The files to be streamed by the OTA update.</p>
   */
  files: OTAUpdateFile[] | undefined;

  /**
   * <p>The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources
   *             to create an OTA update job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of additional OTA update parameters which are name-value pairs.</p>
   */
  additionalParameters?: Record<string, string>;

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Tag[];
}

export enum OTAUpdateStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING",
}

export interface CreateOTAUpdateResponse {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The OTA update status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

/**
 * <p>The input for the CreatePolicy operation.</p>
 */
export interface CreatePolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>Metadata which can be used to manage the policy.</p>
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

/**
 * <p>The output from the CreatePolicy operation.</p>
 */
export interface CreatePolicyResponse {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
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
 * <p>The input for the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The JSON document that describes the policy. Minimum length of 1. Maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>Specifies whether the policy version is set as the default. When this parameter is
   *          true, the new policy version becomes the operative version (that is, the version that is in
   *          effect for the certificates to which the policy is attached).</p>
   */
  setAsDefault?: boolean;
}

/**
 * <p>The output of the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;
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

export interface CreateProvisioningClaimRequest {
  /**
   * <p>The name of the provisioning template to use.</p>
   */
  templateName: string | undefined;
}

export interface CreateProvisioningClaimResponse {
  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The provisioning claim certificate.</p>
   */
  certificatePem?: string;

  /**
   * <p>The provisioning claim key pair.</p>
   */
  keyPair?: KeyPair;

  /**
   * <p>The provisioning claim expiration time.</p>
   */
  expiration?: Date;
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

export enum TemplateType {
  FLEET_PROVISIONING = "FLEET_PROVISIONING",
  JITP = "JITP",
}

export interface CreateProvisioningTemplateRequest {
  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The JSON formatted contents of the provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>True to enable the provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The role ARN for the role associated with the provisioning template. This IoT role
   *          grants permission to provision a device.</p>
   */
  provisioningRoleArn: string | undefined;

  /**
   * <p>Creates a pre-provisioning hook template. Only supports template of type
   *             <code>FLEET_PROVISIONING</code>. For more information about provisioning template types,
   *          see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type">type</a>.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Metadata which can be used to manage the provisioning template.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];

  /**
   * <p>The type you define in a provisioning template. You can create a template with only one type.
   *          You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>.
   *          For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
   *       </p>
   */
  type?: TemplateType | string;
}

export interface CreateProvisioningTemplateResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The default version of the provisioning template.</p>
   */
  defaultVersionId?: number;
}

export interface CreateProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The JSON formatted contents of the provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>Sets a fleet provision template version as the default version.</p>
   */
  setAsDefault?: boolean;
}

export interface CreateProvisioningTemplateVersionResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The version of the provisioning template.</p>
   */
  versionId?: number;

  /**
   * <p>True if the provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

export interface CreateRoleAliasRequest {
  /**
   * <p>The role alias that points to a role ARN. This allows you to change the role without
   *          having to update the device.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.</p>
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *       that the role alias references.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>Metadata which can be used to manage the role alias.</p>
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

export interface CreateRoleAliasResponse {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;
}

export enum DayOfWeek {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED",
}

export interface CreateScheduledAuditRequest {
  /**
   * <p>How often the scheduled audit takes
   *       place, either
   *       <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is
   *       determined by the system.</p>
   */
  frequency: AuditFrequency | string | undefined;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can be "1" through "31" or "LAST". This field is required if the "frequency"
   *       parameter is set to <code>MONTHLY</code>. If days
   *       29
   *       to 31 are specified, and the month
   *       doesn't
   *       have that many days, the audit takes place on the <code>LAST</code> day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes
   *       place,
   *       either
   *       <code>SUN</code>,
   *       <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code>
   *       parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames: string[] | undefined;

  /**
   * <p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the scheduled audit.</p>
   */
  tags?: Tag[];
}

export interface CreateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export interface CreateSecurityProfileRequest {
  /**
   * <p>The name you are giving to the security profile.</p>
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
   * <p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the
   *         console.) Alerts are generated when a device (thing) violates a behavior.</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i>
   *          </p>
   *          <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>Metadata that can be used to manage the security profile.</p>
   */
  tags?: Tag[];
}

export interface CreateSecurityProfileResponse {
  /**
   * <p>The name you gave to the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;
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

export interface CreateStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files: StreamFile[] | undefined;

  /**
   * <p>An IAM role that allows the IoT service principal to access your S3 files.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Tag[];
}

export interface CreateStreamResponse {
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
   * <p>The version of the stream.</p>
   */
  streamVersion?: number;
}

/**
 * <p>The input for the CreateThing operation.</p>
 */
export interface CreateThingRequest {
  /**
   * <p>The name of the thing to create.</p>
   * 		       <p>You can't change a thing's name after you create it. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type associated with the new thing.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The attribute payload, which consists of up to three name/value pairs in a JSON
   * 			document. For example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"string1\":\"string2\"}}</code>
   * 		       </p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The name of the billing group the thing will be added to.</p>
   */
  billingGroupName?: string;
}

/**
 * <p>The output of the CreateThing operation.</p>
 */
export interface CreateThingResponse {
  /**
   * <p>The name of the new thing.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the new thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;
}

export interface CreateThingGroupRequest {
  /**
   * <p>The thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The name of the parent thing group.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>Metadata which can be used to manage the thing group.</p>
   */
  tags?: Tag[];
}

export interface CreateThingGroupResponse {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;
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

/**
 * <p>The input for the CreateThingType operation.</p>
 */
export interface CreateThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;

  /**
   * <p>The ThingTypeProperties for the thing type to create. It contains information about
   * 			the new thing type including a description, and a list of searchable thing attribute
   * 			names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>Metadata which can be used to manage the thing type.</p>
   */
  tags?: Tag[];
}

/**
 * <p>The output of the CreateThingType operation.</p>
 */
export interface CreateThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the thing type.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;
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

/**
 * <p>The input for the CreateTopicRule operation.</p>
 */
export interface CreateTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;

  /**
   * <p>Metadata which can be used to manage the topic rule.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: --tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: string;
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
 * <p>HTTP URL destination configuration used by the topic rule's HTTP action.</p>
 */
export interface HttpUrlDestinationConfiguration {
  /**
   * <p>The URL IoT uses to confirm ownership of or access to the topic rule destination
   *          URL.</p>
   */
  confirmationUrl: string | undefined;
}

/**
 * <p>The configuration information for a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationConfiguration {
  /**
   * <p>The subnet IDs of the VPC destination.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The security groups of the VPC destination.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  vpcId: string | undefined;

  /**
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   */
  roleArn: string | undefined;
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

export interface CreateTopicRuleDestinationRequest {
  /**
   * <p>The topic rule destination configuration.</p>
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

/**
 * <p>HTTP URL destination properties.</p>
 */
export interface HttpUrlDestinationProperties {
  /**
   * <p>The URL used to confirm the HTTP topic rule destination URL.</p>
   */
  confirmationUrl?: string;
}

export enum TopicRuleDestinationStatus {
  DELETING = "DELETING",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>The properties of a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationProperties {
  /**
   * <p>The subnet IDs of the VPC destination.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The security groups of the VPC destination.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;

  /**
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   */
  roleArn?: string;
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

export interface CreateTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export interface DeleteAccountAuditConfigurationRequest {
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   */
  deleteScheduledAudits?: boolean;
}

export interface DeleteAccountAuditConfigurationResponse {}

export interface DeleteAuditSuppressionRequest {
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
}

export interface DeleteAuditSuppressionResponse {}

export interface DeleteAuthorizerRequest {
  /**
   * <p>The name of the authorizer to delete.</p>
   */
  authorizerName: string | undefined;
}

export interface DeleteAuthorizerResponse {}

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

export interface DeleteBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>DeleteBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

export interface DeleteBillingGroupResponse {}

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
 * <p>Input for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateRequest {
  /**
   * <p>The ID of the certificate to delete. (The last part of the certificate ARN contains
   *          the certificate ID.)</p>
   */
  certificateId: string | undefined;
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateResponse {}

/**
 * <p>The input for the DeleteCertificate operation.</p>
 */
export interface DeleteCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>Forces the deletion of a certificate if it is inactive and is not attached to an IoT
   *          thing.</p>
   */
  forceDelete?: boolean;
}

export interface DeleteCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName: string | undefined;
}

export interface DeleteCustomMetricResponse {}

export interface DeleteDimensionRequest {
  /**
   * <p>The unique identifier for the dimension that you want to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteDimensionResponse {}

export interface DeleteDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   */
  domainConfigurationName: string | undefined;
}

export interface DeleteDomainConfigurationResponse {}

export interface DeleteDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to delete.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the dynamic thing group to delete.</p>
   */
  expectedVersion?: number;
}

export interface DeleteDynamicThingGroupResponse {}

export interface DeleteFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to delete.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The expected version of the fleet metric to delete.</p>
   */
  expectedVersion?: number;
}

export interface DeleteJobRequest {
  /**
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new job.
   *         However, this is not recommended, and you must ensure that your devices are not using the
   *         jobId to refer to the deleted job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can
   *         only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception
   *         will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing
   *         the job to be unable to access job information or update the job execution status.
   *         Use caution and ensure that each device executing a job which is deleted is able to recover to
   *         a valid state.</p>
   *          </note>
   */
  force?: boolean;

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
}

export interface DeleteJobExecutionRequest {
  /**
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the
   *         execution of a particular job on a particular device.</p>
   *          <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused
   *         by IoT, so be sure you get and use the correct value here.</p>
   */
  executionNumber: number | undefined;

  /**
   * <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise,
   *         you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED",
   *         "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job execution which is "IN_PROGRESS", will cause the device
   *         to be unable to access job information or update the job execution status.
   *         Use caution and ensure that the device is able to recover to a valid state.</p>
   *          </note>
   */
  force?: boolean;

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
}

export interface DeleteJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template to delete.</p>
   */
  jobTemplateId: string | undefined;
}

export interface DeleteMitigationActionRequest {
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

export interface DeleteMitigationActionResponse {}

export interface DeleteOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to delete.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted.
   *             Ignored if the stream specified in the OTAUpdate is supplied by the user.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the
   *             job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.</p>
   */
  forceDeleteAWSJob?: boolean;
}

export interface DeleteOTAUpdateResponse {}

/**
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

/**
 * <p>The input for the DeletePolicyVersion operation.</p>
 */
export interface DeletePolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

/**
 * @internal
 */
export const AbortCriteriaFilterSensitiveLog = (obj: AbortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AbortConfigFilterSensitiveLog = (obj: AbortConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptCertificateTransferRequestFilterSensitiveLog = (obj: AcceptCertificateTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudwatchAlarmActionFilterSensitiveLog = (obj: CloudwatchAlarmAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudwatchLogsActionFilterSensitiveLog = (obj: CloudwatchLogsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudwatchMetricActionFilterSensitiveLog = (obj: CloudwatchMetricAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DynamoDBActionFilterSensitiveLog = (obj: DynamoDBAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutItemInputFilterSensitiveLog = (obj: PutItemInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DynamoDBv2ActionFilterSensitiveLog = (obj: DynamoDBv2Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElasticsearchActionFilterSensitiveLog = (obj: ElasticsearchAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirehoseActionFilterSensitiveLog = (obj: FirehoseAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SigV4AuthorizationFilterSensitiveLog = (obj: SigV4Authorization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpAuthorizationFilterSensitiveLog = (obj: HttpAuthorization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpActionHeaderFilterSensitiveLog = (obj: HttpActionHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpActionFilterSensitiveLog = (obj: HttpAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IotAnalyticsActionFilterSensitiveLog = (obj: IotAnalyticsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IotEventsActionFilterSensitiveLog = (obj: IotEventsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetPropertyTimestampFilterSensitiveLog = (obj: AssetPropertyTimestamp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetPropertyVariantFilterSensitiveLog = (obj: AssetPropertyVariant): any => {
  if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
  if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
  if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
  if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AssetPropertyValueFilterSensitiveLog = (obj: AssetPropertyValue): any => ({
  ...obj,
  ...(obj.value && { value: AssetPropertyVariantFilterSensitiveLog(obj.value) }),
});

/**
 * @internal
 */
export const PutAssetPropertyValueEntryFilterSensitiveLog = (obj: PutAssetPropertyValueEntry): any => ({
  ...obj,
  ...(obj.propertyValues && {
    propertyValues: obj.propertyValues.map((item) => AssetPropertyValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const IotSiteWiseActionFilterSensitiveLog = (obj: IotSiteWiseAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaActionFilterSensitiveLog = (obj: KafkaAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisActionFilterSensitiveLog = (obj: KinesisAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaActionFilterSensitiveLog = (obj: LambdaAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationTimestampFilterSensitiveLog = (obj: LocationTimestamp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationActionFilterSensitiveLog = (obj: LocationAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenSearchActionFilterSensitiveLog = (obj: OpenSearchAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPropertyFilterSensitiveLog = (obj: UserProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MqttHeadersFilterSensitiveLog = (obj: MqttHeaders): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepublishActionFilterSensitiveLog = (obj: RepublishAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ActionFilterSensitiveLog = (obj: S3Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SalesforceActionFilterSensitiveLog = (obj: SalesforceAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsActionFilterSensitiveLog = (obj: SnsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqsActionFilterSensitiveLog = (obj: SqsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepFunctionsActionFilterSensitiveLog = (obj: StepFunctionsAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamDimensionFilterSensitiveLog = (obj: TimestreamDimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamTimestampFilterSensitiveLog = (obj: TimestreamTimestamp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestreamActionFilterSensitiveLog = (obj: TimestreamAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MachineLearningDetectionConfigFilterSensitiveLog = (obj: MachineLearningDetectionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatisticalThresholdFilterSensitiveLog = (obj: StatisticalThreshold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricValueFilterSensitiveLog = (obj: MetricValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BehaviorCriteriaFilterSensitiveLog = (obj: BehaviorCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDimensionFilterSensitiveLog = (obj: MetricDimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BehaviorFilterSensitiveLog = (obj: Behavior): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViolationEventAdditionalInfoFilterSensitiveLog = (obj: ViolationEventAdditionalInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveViolationFilterSensitiveLog = (obj: ActiveViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricToRetainFilterSensitiveLog = (obj: MetricToRetain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddThingsToThingGroupParamsFilterSensitiveLog = (obj: AddThingsToThingGroupParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddThingToBillingGroupRequestFilterSensitiveLog = (obj: AddThingToBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddThingToBillingGroupResponseFilterSensitiveLog = (obj: AddThingToBillingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddThingToThingGroupRequestFilterSensitiveLog = (obj: AddThingToThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddThingToThingGroupResponseFilterSensitiveLog = (obj: AddThingToThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregationTypeFilterSensitiveLog = (obj: AggregationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlertTargetFilterSensitiveLog = (obj: AlertTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyFilterSensitiveLog = (obj: Policy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowedFilterSensitiveLog = (obj: Allowed): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTargetsWithJobRequestFilterSensitiveLog = (obj: AssociateTargetsWithJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTargetsWithJobResponseFilterSensitiveLog = (obj: AssociateTargetsWithJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachPolicyRequestFilterSensitiveLog = (obj: AttachPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachPrincipalPolicyRequestFilterSensitiveLog = (obj: AttachPrincipalPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachSecurityProfileRequestFilterSensitiveLog = (obj: AttachSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachSecurityProfileResponseFilterSensitiveLog = (obj: AttachSecurityProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachThingPrincipalRequestFilterSensitiveLog = (obj: AttachThingPrincipalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachThingPrincipalResponseFilterSensitiveLog = (obj: AttachThingPrincipalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributePayloadFilterSensitiveLog = (obj: AttributePayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditCheckConfigurationFilterSensitiveLog = (obj: AuditCheckConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditCheckDetailsFilterSensitiveLog = (obj: AuditCheckDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IssuerCertificateIdentifierFilterSensitiveLog = (obj: IssuerCertificateIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyVersionIdentifierFilterSensitiveLog = (obj: PolicyVersionIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceIdentifierFilterSensitiveLog = (obj: ResourceIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NonCompliantResourceFilterSensitiveLog = (obj: NonCompliantResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedResourceFilterSensitiveLog = (obj: RelatedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditFindingFilterSensitiveLog = (obj: AuditFinding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditMitigationActionExecutionMetadataFilterSensitiveLog = (
  obj: AuditMitigationActionExecutionMetadata
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditMitigationActionsTaskMetadataFilterSensitiveLog = (obj: AuditMitigationActionsTaskMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskStatisticsForAuditCheckFilterSensitiveLog = (obj: TaskStatisticsForAuditCheck): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditMitigationActionsTaskTargetFilterSensitiveLog = (obj: AuditMitigationActionsTaskTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditNotificationTargetFilterSensitiveLog = (obj: AuditNotificationTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditSuppressionFilterSensitiveLog = (obj: AuditSuppression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuditTaskMetadataFilterSensitiveLog = (obj: AuditTaskMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthInfoFilterSensitiveLog = (obj: AuthInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizerConfigFilterSensitiveLog = (obj: AuthorizerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizerDescriptionFilterSensitiveLog = (obj: AuthorizerDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizerSummaryFilterSensitiveLog = (obj: AuthorizerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExplicitDenyFilterSensitiveLog = (obj: ExplicitDeny): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImplicitDenyFilterSensitiveLog = (obj: ImplicitDeny): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeniedFilterSensitiveLog = (obj: Denied): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthResultFilterSensitiveLog = (obj: AuthResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAuditMitigationActionsTaskRequestFilterSensitiveLog = (
  obj: CancelAuditMitigationActionsTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAuditMitigationActionsTaskResponseFilterSensitiveLog = (
  obj: CancelAuditMitigationActionsTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAuditTaskRequestFilterSensitiveLog = (obj: CancelAuditTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelAuditTaskResponseFilterSensitiveLog = (obj: CancelAuditTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelCertificateTransferRequestFilterSensitiveLog = (obj: CancelCertificateTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDetectMitigationActionsTaskRequestFilterSensitiveLog = (
  obj: CancelDetectMitigationActionsTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDetectMitigationActionsTaskResponseFilterSensitiveLog = (
  obj: CancelDetectMitigationActionsTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRequestFilterSensitiveLog = (obj: CancelJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobResponseFilterSensitiveLog = (obj: CancelJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobExecutionRequestFilterSensitiveLog = (obj: CancelJobExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClearDefaultAuthorizerRequestFilterSensitiveLog = (obj: ClearDefaultAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClearDefaultAuthorizerResponseFilterSensitiveLog = (obj: ClearDefaultAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmTopicRuleDestinationRequestFilterSensitiveLog = (obj: ConfirmTopicRuleDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmTopicRuleDestinationResponseFilterSensitiveLog = (
  obj: ConfirmTopicRuleDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAuditSuppressionRequestFilterSensitiveLog = (obj: CreateAuditSuppressionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAuditSuppressionResponseFilterSensitiveLog = (obj: CreateAuditSuppressionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAuthorizerRequestFilterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAuthorizerResponseFilterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BillingGroupPropertiesFilterSensitiveLog = (obj: BillingGroupProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBillingGroupRequestFilterSensitiveLog = (obj: CreateBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBillingGroupResponseFilterSensitiveLog = (obj: CreateBillingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCertificateFromCsrRequestFilterSensitiveLog = (obj: CreateCertificateFromCsrRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCertificateFromCsrResponseFilterSensitiveLog = (obj: CreateCertificateFromCsrResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomMetricRequestFilterSensitiveLog = (obj: CreateCustomMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomMetricResponseFilterSensitiveLog = (obj: CreateCustomMetricResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDimensionRequestFilterSensitiveLog = (obj: CreateDimensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDimensionResponseFilterSensitiveLog = (obj: CreateDimensionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainConfigurationRequestFilterSensitiveLog = (obj: CreateDomainConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainConfigurationResponseFilterSensitiveLog = (obj: CreateDomainConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingGroupPropertiesFilterSensitiveLog = (obj: ThingGroupProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDynamicThingGroupRequestFilterSensitiveLog = (obj: CreateDynamicThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDynamicThingGroupResponseFilterSensitiveLog = (obj: CreateDynamicThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetMetricRequestFilterSensitiveLog = (obj: CreateFleetMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFleetMetricResponseFilterSensitiveLog = (obj: CreateFleetMetricResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryCriteriaFilterSensitiveLog = (obj: RetryCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobExecutionsRetryConfigFilterSensitiveLog = (obj: JobExecutionsRetryConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RateIncreaseCriteriaFilterSensitiveLog = (obj: RateIncreaseCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExponentialRolloutRateFilterSensitiveLog = (obj: ExponentialRolloutRate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobExecutionsRolloutConfigFilterSensitiveLog = (obj: JobExecutionsRolloutConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PresignedUrlConfigFilterSensitiveLog = (obj: PresignedUrlConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchedulingConfigFilterSensitiveLog = (obj: SchedulingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeoutConfigFilterSensitiveLog = (obj: TimeoutConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobResponseFilterSensitiveLog = (obj: CreateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobTemplateRequestFilterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobTemplateResponseFilterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeysAndCertificateRequestFilterSensitiveLog = (obj: CreateKeysAndCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyPairFilterSensitiveLog = (obj: KeyPair): any => ({
  ...obj,
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateKeysAndCertificateResponseFilterSensitiveLog = (obj: CreateKeysAndCertificateResponse): any => ({
  ...obj,
  ...(obj.keyPair && { keyPair: KeyPairFilterSensitiveLog(obj.keyPair) }),
});

/**
 * @internal
 */
export const EnableIoTLoggingParamsFilterSensitiveLog = (obj: EnableIoTLoggingParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishFindingToSnsParamsFilterSensitiveLog = (obj: PublishFindingToSnsParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceDefaultPolicyVersionParamsFilterSensitiveLog = (obj: ReplaceDefaultPolicyVersionParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCACertificateParamsFilterSensitiveLog = (obj: UpdateCACertificateParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDeviceCertificateParamsFilterSensitiveLog = (obj: UpdateDeviceCertificateParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MitigationActionParamsFilterSensitiveLog = (obj: MitigationActionParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMitigationActionRequestFilterSensitiveLog = (obj: CreateMitigationActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMitigationActionResponseFilterSensitiveLog = (obj: CreateMitigationActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobAbortCriteriaFilterSensitiveLog = (obj: AwsJobAbortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobAbortConfigFilterSensitiveLog = (obj: AwsJobAbortConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobRateIncreaseCriteriaFilterSensitiveLog = (obj: AwsJobRateIncreaseCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobExponentialRolloutRateFilterSensitiveLog = (obj: AwsJobExponentialRolloutRate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobExecutionsRolloutConfigFilterSensitiveLog = (obj: AwsJobExecutionsRolloutConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobPresignedUrlConfigFilterSensitiveLog = (obj: AwsJobPresignedUrlConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsJobTimeoutConfigFilterSensitiveLog = (obj: AwsJobTimeoutConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeSigningCertificateChainFilterSensitiveLog = (obj: CodeSigningCertificateChain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeSigningSignatureFilterSensitiveLog = (obj: CodeSigningSignature): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomCodeSigningFilterSensitiveLog = (obj: CustomCodeSigning): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationFilterSensitiveLog = (obj: S3Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFilterSensitiveLog = (obj: Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SigningProfileParameterFilterSensitiveLog = (obj: SigningProfileParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSigningJobParameterFilterSensitiveLog = (obj: StartSigningJobParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeSigningFilterSensitiveLog = (obj: CodeSigning): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _StreamFilterSensitiveLog = (obj: _Stream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileLocationFilterSensitiveLog = (obj: FileLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OTAUpdateFileFilterSensitiveLog = (obj: OTAUpdateFile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOTAUpdateRequestFilterSensitiveLog = (obj: CreateOTAUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOTAUpdateResponseFilterSensitiveLog = (obj: CreateOTAUpdateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePolicyRequestFilterSensitiveLog = (obj: CreatePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePolicyResponseFilterSensitiveLog = (obj: CreatePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePolicyVersionRequestFilterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePolicyVersionResponseFilterSensitiveLog = (obj: CreatePolicyVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningClaimRequestFilterSensitiveLog = (obj: CreateProvisioningClaimRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningClaimResponseFilterSensitiveLog = (obj: CreateProvisioningClaimResponse): any => ({
  ...obj,
  ...(obj.keyPair && { keyPair: KeyPairFilterSensitiveLog(obj.keyPair) }),
});

/**
 * @internal
 */
export const ProvisioningHookFilterSensitiveLog = (obj: ProvisioningHook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningTemplateRequestFilterSensitiveLog = (obj: CreateProvisioningTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningTemplateResponseFilterSensitiveLog = (obj: CreateProvisioningTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningTemplateVersionRequestFilterSensitiveLog = (
  obj: CreateProvisioningTemplateVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProvisioningTemplateVersionResponseFilterSensitiveLog = (
  obj: CreateProvisioningTemplateVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoleAliasRequestFilterSensitiveLog = (obj: CreateRoleAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoleAliasResponseFilterSensitiveLog = (obj: CreateRoleAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduledAuditRequestFilterSensitiveLog = (obj: CreateScheduledAuditRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduledAuditResponseFilterSensitiveLog = (obj: CreateScheduledAuditResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSecurityProfileRequestFilterSensitiveLog = (obj: CreateSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSecurityProfileResponseFilterSensitiveLog = (obj: CreateSecurityProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamFileFilterSensitiveLog = (obj: StreamFile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamRequestFilterSensitiveLog = (obj: CreateStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamResponseFilterSensitiveLog = (obj: CreateStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingRequestFilterSensitiveLog = (obj: CreateThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingResponseFilterSensitiveLog = (obj: CreateThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingGroupRequestFilterSensitiveLog = (obj: CreateThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingGroupResponseFilterSensitiveLog = (obj: CreateThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingTypePropertiesFilterSensitiveLog = (obj: ThingTypeProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingTypeRequestFilterSensitiveLog = (obj: CreateThingTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateThingTypeResponseFilterSensitiveLog = (obj: CreateThingTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicRulePayloadFilterSensitiveLog = (obj: TopicRulePayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRuleRequestFilterSensitiveLog = (obj: CreateTopicRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpUrlDestinationConfigurationFilterSensitiveLog = (obj: HttpUrlDestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcDestinationConfigurationFilterSensitiveLog = (obj: VpcDestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicRuleDestinationConfigurationFilterSensitiveLog = (obj: TopicRuleDestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRuleDestinationRequestFilterSensitiveLog = (obj: CreateTopicRuleDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpUrlDestinationPropertiesFilterSensitiveLog = (obj: HttpUrlDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcDestinationPropertiesFilterSensitiveLog = (obj: VpcDestinationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicRuleDestinationFilterSensitiveLog = (obj: TopicRuleDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTopicRuleDestinationResponseFilterSensitiveLog = (obj: CreateTopicRuleDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountAuditConfigurationRequestFilterSensitiveLog = (
  obj: DeleteAccountAuditConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountAuditConfigurationResponseFilterSensitiveLog = (
  obj: DeleteAccountAuditConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAuditSuppressionRequestFilterSensitiveLog = (obj: DeleteAuditSuppressionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAuditSuppressionResponseFilterSensitiveLog = (obj: DeleteAuditSuppressionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAuthorizerRequestFilterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAuthorizerResponseFilterSensitiveLog = (obj: DeleteAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBillingGroupRequestFilterSensitiveLog = (obj: DeleteBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBillingGroupResponseFilterSensitiveLog = (obj: DeleteBillingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCACertificateRequestFilterSensitiveLog = (obj: DeleteCACertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCACertificateResponseFilterSensitiveLog = (obj: DeleteCACertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCertificateRequestFilterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomMetricRequestFilterSensitiveLog = (obj: DeleteCustomMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomMetricResponseFilterSensitiveLog = (obj: DeleteCustomMetricResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDimensionRequestFilterSensitiveLog = (obj: DeleteDimensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDimensionResponseFilterSensitiveLog = (obj: DeleteDimensionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainConfigurationRequestFilterSensitiveLog = (obj: DeleteDomainConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainConfigurationResponseFilterSensitiveLog = (obj: DeleteDomainConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDynamicThingGroupRequestFilterSensitiveLog = (obj: DeleteDynamicThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDynamicThingGroupResponseFilterSensitiveLog = (obj: DeleteDynamicThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFleetMetricRequestFilterSensitiveLog = (obj: DeleteFleetMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobRequestFilterSensitiveLog = (obj: DeleteJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobExecutionRequestFilterSensitiveLog = (obj: DeleteJobExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobTemplateRequestFilterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMitigationActionRequestFilterSensitiveLog = (obj: DeleteMitigationActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMitigationActionResponseFilterSensitiveLog = (obj: DeleteMitigationActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOTAUpdateRequestFilterSensitiveLog = (obj: DeleteOTAUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOTAUpdateResponseFilterSensitiveLog = (obj: DeleteOTAUpdateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePolicyRequestFilterSensitiveLog = (obj: DeletePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePolicyVersionRequestFilterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
  ...obj,
});
