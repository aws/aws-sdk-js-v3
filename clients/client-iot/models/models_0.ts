import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace AcceptCertificateTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptCertificateTransferRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 */
export interface TransferAlreadyCompletedException extends __SmithyException, $MetadataBearer {
  name: "TransferAlreadyCompletedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferAlreadyCompletedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferAlreadyCompletedException): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
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

export namespace DynamoDBAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamoDBAction): any => ({
    ...obj,
  });
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

export namespace PutItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutItemInput): any => ({
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
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service
 *          domain.</p>
 *          <note>
 *             <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p>
 *          </note>
 */
export interface ElasticsearchAction {
  /**
   * <p>The IAM role ARN that has access to Elasticsearch.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The endpoint of your Elasticsearch domain.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The Elasticsearch index where you want to store your data.</p>
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

export namespace SigV4Authorization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SigV4Authorization): any => ({
    ...obj,
  });
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

export namespace HttpAuthorization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpAuthorization): any => ({
    ...obj,
  });
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

export namespace HttpActionHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpActionHeader): any => ({
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

export namespace AssetPropertyTimestamp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyTimestamp): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyVariant): any => {
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.integerValue !== undefined) return { integerValue: obj.integerValue };
    if (obj.doubleValue !== undefined) return { doubleValue: obj.doubleValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace AssetPropertyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
    ...obj,
    ...(obj.value && { value: AssetPropertyVariant.filterSensitiveLog(obj.value) }),
  });
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

export namespace PutAssetPropertyValueEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAssetPropertyValueEntry): any => ({
    ...obj,
    ...(obj.propertyValues && {
      propertyValues: obj.propertyValues.map((item) => AssetPropertyValue.filterSensitiveLog(item)),
    }),
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
  clientProperties: { [key: string]: string } | undefined;
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

export namespace KinesisAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisAction): any => ({
    ...obj,
  });
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

export namespace LambdaAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaAction): any => ({
    ...obj,
  });
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

export namespace OpenSearchAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenSearchAction): any => ({
    ...obj,
  });
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
}

export namespace RepublishAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepublishAction): any => ({
    ...obj,
  });
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

export namespace S3Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Action): any => ({
    ...obj,
  });
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

export namespace SalesforceAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SalesforceAction): any => ({
    ...obj,
  });
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

export namespace SnsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnsAction): any => ({
    ...obj,
  });
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

export namespace SqsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqsAction): any => ({
    ...obj,
  });
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

export namespace StepFunctionsAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StepFunctionsAction): any => ({
    ...obj,
  });
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

export namespace TimestreamDimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestreamDimension): any => ({
    ...obj,
  });
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

export namespace TimestreamTimestamp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestreamTimestamp): any => ({
    ...obj,
  });
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

export namespace TimestreamAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestreamAction): any => ({
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
   * <p>Write data to an Amazon Elasticsearch Service domain.</p>
   *          <note>
   *             <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p>
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

export namespace MachineLearningDetectionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MachineLearningDetectionConfig): any => ({
    ...obj,
  });
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

export namespace StatisticalThreshold {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatisticalThreshold): any => ({
    ...obj,
  });
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

export namespace MetricValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricValue): any => ({
    ...obj,
  });
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

export namespace BehaviorCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BehaviorCriteria): any => ({
    ...obj,
  });
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

export namespace MetricDimension {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricDimension): any => ({
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

export namespace ViolationEventAdditionalInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViolationEventAdditionalInfo): any => ({
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

export namespace AddThingsToThingGroupParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingsToThingGroupParams): any => ({
    ...obj,
  });
}

export interface AddThingToBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
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

export namespace AddThingToBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface AddThingToBillingGroupResponse {}

export namespace AddThingToBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToBillingGroupResponse): any => ({
    ...obj,
  });
}

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

export namespace AddThingToThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToThingGroupRequest): any => ({
    ...obj,
  });
}

export interface AddThingToThingGroupResponse {}

export namespace AddThingToThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToThingGroupResponse): any => ({
    ...obj,
  });
}

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

export namespace Policy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj,
  });
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

export namespace Allowed {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Allowed): any => ({
    ...obj,
  });
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

export namespace AssociateTargetsWithJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTargetsWithJobRequest): any => ({
    ...obj,
  });
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

export namespace AssociateTargetsWithJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTargetsWithJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A limit has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
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

export namespace AttachPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachPolicyRequest): any => ({
    ...obj,
  });
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

export namespace AttachPrincipalPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachPrincipalPolicyRequest): any => ({
    ...obj,
  });
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

export namespace AttachSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface AttachSecurityProfileResponse {}

export namespace AttachSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachSecurityProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 */
export interface VersionConflictException extends __SmithyException, $MetadataBearer {
  name: "VersionConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersionConflictException): any => ({
    ...obj,
  });
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

export namespace AttachThingPrincipalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachThingPrincipalRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalResponse {}

export namespace AttachThingPrincipalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachThingPrincipalResponse): any => ({
    ...obj,
  });
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
  attributes?: { [key: string]: string };

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

export namespace AuditCheckDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditCheckDetails): any => ({
    ...obj,
  });
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

export namespace PolicyVersionIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyVersionIdentifier): any => ({
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

export enum ResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CLIENT_ID = "CLIENT_ID",
  COGNITO_IDENTITY_POOL = "COGNITO_IDENTITY_POOL",
  DEVICE_CERTIFICATE = "DEVICE_CERTIFICATE",
  IAM_ROLE = "IAM_ROLE",
  IOT_POLICY = "IOT_POLICY",
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
  additionalInfo?: { [key: string]: string };
}

export namespace NonCompliantResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NonCompliantResource): any => ({
    ...obj,
  });
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
  additionalInfo?: { [key: string]: string };
}

export namespace RelatedResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedResource): any => ({
    ...obj,
  });
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

export namespace AuditFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditFinding): any => ({
    ...obj,
  });
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

export namespace AuditMitigationActionExecutionMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditMitigationActionExecutionMetadata): any => ({
    ...obj,
  });
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
  auditCheckToReasonCodeFilter?: { [key: string]: string[] };
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

export namespace AuditSuppression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditSuppression): any => ({
    ...obj,
  });
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

export namespace AuditTaskMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditTaskMetadata): any => ({
    ...obj,
  });
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
  tokenSigningPublicKeys?: { [key: string]: string };

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
 * <p>Information that explicitly denies authorization.</p>
 */
export interface ExplicitDeny {
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Policy[];
}

export namespace ExplicitDeny {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExplicitDeny): any => ({
    ...obj,
  });
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

export namespace ImplicitDeny {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImplicitDeny): any => ({
    ...obj,
  });
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

export namespace Denied {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Denied): any => ({
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

export namespace CancelAuditMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelAuditMitigationActionsTaskResponse {}

export namespace CancelAuditMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface CancelAuditTaskRequest {
  /**
   * <p>The ID of the audit you want to cancel. You can only cancel an
   *               audit that is "IN_PROGRESS".</p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelAuditTaskResponse {}

export namespace CancelAuditTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace CancelCertificateTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface CancelDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;
}

export namespace CancelDetectMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDetectMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelDetectMitigationActionsTaskResponse {}

export namespace CancelDetectMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDetectMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

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

export namespace CancelJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
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

export namespace CancelJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj,
  });
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
  statusDetails?: { [key: string]: string };
}

export namespace CancelJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobExecutionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidStateTransitionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidStateTransitionException): any => ({
    ...obj,
  });
}

export interface ClearDefaultAuthorizerRequest {}

export namespace ClearDefaultAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClearDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface ClearDefaultAuthorizerResponse {}

export namespace ClearDefaultAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClearDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface ConfirmTopicRuleDestinationRequest {
  /**
   * <p>The token used to confirm ownership or access to the topic rule confirmation URL.</p>
   */
  confirmationToken: string | undefined;
}

export namespace ConfirmTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface ConfirmTopicRuleDestinationResponse {}

export namespace ConfirmTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 */
export interface ConflictingResourceUpdateException extends __SmithyException, $MetadataBearer {
  name: "ConflictingResourceUpdateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ConflictingResourceUpdateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingResourceUpdateException): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
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
   *       The epoch timestamp in seconds at which this suppression expires.
   *     </p>
   */
  clientRequestToken?: string;
}

export namespace CreateAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface CreateAuditSuppressionResponse {}

export namespace CreateAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuditSuppressionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;

  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the resource that caused the exception.</p>
   */
  resourceArn?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
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
  tokenSigningPublicKeys?: { [key: string]: string };

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
}

export namespace CreateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj,
  });
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

export namespace CreateAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
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

export namespace CreateBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupRequest): any => ({
    ...obj,
  });
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

export namespace CreateBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupResponse): any => ({
    ...obj,
  });
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

export namespace CreateCertificateFromCsrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateFromCsrRequest): any => ({
    ...obj,
  });
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

export namespace CreateCertificateFromCsrResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateFromCsrResponse): any => ({
    ...obj,
  });
}

export enum CustomMetricType {
  IP_ADDRESS_LIST = "ip-address-list",
  NUMBER = "number",
  NUMBER_LIST = "number-list",
  STRING_LIST = "string-list",
}

export interface CreateCustomMetricRequest {
  /**
   * <p> The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with <code>aws:</code>.
   *       Cannot be updated
   *       once defined.</p>
   */
  metricName: string | undefined;

  /**
   * <p>
   *       Field
   *       represents a friendly name in the console for the custom metric;
   *       it
   *       doesn't have to be unique. Don't use this name as the metric identifier in
   *       the device metric report. Can be updated once defined.</p>
   */
  displayName?: string;

  /**
   * <p>
   *       The type of the custom metric. Types include <code>string-list</code>, <code>ip-address-list</code>, <code>number-list</code>, and <code>number</code>.
   *     </p>
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

export namespace CreateCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric to be used in the metric report.
   *     </p>
   */
  metricName?: string;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric, e.g. <code>arn:<i>aws-partition</i>:iot:<i>region</i>:<i>accountId</i>:custommetric/<i>metricName</i>
   *             </code>
   *          </p>
   */
  metricArn?: string;
}

export namespace CreateCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomMetricResponse): any => ({
    ...obj,
  });
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

export namespace CreateDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDimensionRequest): any => ({
    ...obj,
  });
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

export namespace CreateDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDimensionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException extends __SmithyException, $MetadataBearer {
  name: "CertificateValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace CertificateValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateValidationException): any => ({
    ...obj,
  });
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

export namespace CreateDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CreateDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace CreateDynamicThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDynamicThingGroupRequest): any => ({
    ...obj,
  });
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

export namespace CreateDynamicThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The query is invalid.</p>
 */
export interface InvalidQueryException extends __SmithyException, $MetadataBearer {
  name: "InvalidQueryException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidQueryException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidQueryException): any => ({
    ...obj,
  });
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

export namespace CreateFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetMetricRequest): any => ({
    ...obj,
  });
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

export namespace CreateFleetMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetMetricResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException extends __SmithyException, $MetadataBearer {
  name: "IndexNotReadyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace IndexNotReadyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IndexNotReadyException): any => ({
    ...obj,
  });
}

/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException extends __SmithyException, $MetadataBearer {
  name: "InvalidAggregationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAggregationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAggregationException): any => ({
    ...obj,
  });
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

export namespace RateIncreaseCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RateIncreaseCriteria): any => ({
    ...obj,
  });
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

export namespace ExponentialRolloutRate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExponentialRolloutRate): any => ({
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

export namespace TimeoutConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeoutConfig): any => ({
    ...obj,
  });
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
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
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
}

export namespace CreateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
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

export namespace CreateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the same name already exists.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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
}

export namespace CreateJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
    ...obj,
  });
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

export namespace CreateJobTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
    ...obj,
  });
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

export namespace CreateKeysAndCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeysAndCertificateRequest): any => ({
    ...obj,
  });
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

export namespace CreateKeysAndCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeysAndCertificateResponse): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
  });
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

export namespace EnableIoTLoggingParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableIoTLoggingParams): any => ({
    ...obj,
  });
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

export namespace PublishFindingToSnsParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishFindingToSnsParams): any => ({
    ...obj,
  });
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

export namespace ReplaceDefaultPolicyVersionParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplaceDefaultPolicyVersionParams): any => ({
    ...obj,
  });
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

export namespace UpdateCACertificateParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCACertificateParams): any => ({
    ...obj,
  });
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

export namespace UpdateDeviceCertificateParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceCertificateParams): any => ({
    ...obj,
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

export namespace CreateMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMitigationActionRequest): any => ({
    ...obj,
  });
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

export namespace CreateMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMitigationActionResponse): any => ({
    ...obj,
  });
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

export namespace AwsJobAbortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobAbortCriteria): any => ({
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

export namespace AwsJobRateIncreaseCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobRateIncreaseCriteria): any => ({
    ...obj,
  });
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

export namespace AwsJobExponentialRolloutRate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsJobExponentialRolloutRate): any => ({
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

export namespace CodeSigningCertificateChain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigningCertificateChain): any => ({
    ...obj,
  });
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

export namespace CodeSigningSignature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigningSignature): any => ({
    ...obj,
  });
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
   * <p>The hash algorithm used to code sign the file.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature algorithm used to code sign the file.</p>
   */
  signatureAlgorithm?: string;
}

export namespace CustomCodeSigning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomCodeSigning): any => ({
    ...obj,
  });
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

export namespace S3Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
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

export namespace Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
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

export namespace SigningProfileParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SigningProfileParameter): any => ({
    ...obj,
  });
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

export namespace StartSigningJobParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSigningJobParameter): any => ({
    ...obj,
  });
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

export namespace CodeSigning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigning): any => ({
    ...obj,
  });
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

export namespace S3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
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

export namespace _Stream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Stream): any => ({
    ...obj,
  });
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

export namespace FileLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileLocation): any => ({
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
  attributes?: { [key: string]: string };
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
  additionalParameters?: { [key: string]: string };

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Tag[];
}

export namespace CreateOTAUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOTAUpdateRequest): any => ({
    ...obj,
  });
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

export namespace CreateOTAUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOTAUpdateResponse): any => ({
    ...obj,
  });
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

export namespace CreatePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj,
  });
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

export namespace CreatePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The policy documentation is not valid.</p>
 */
export interface MalformedPolicyException extends __SmithyException, $MetadataBearer {
  name: "MalformedPolicyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MalformedPolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MalformedPolicyException): any => ({
    ...obj,
  });
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

export namespace CreatePolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
    ...obj,
  });
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

export namespace CreatePolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The number of policy versions exceeds the limit.</p>
 */
export interface VersionsLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "VersionsLimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionsLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersionsLimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateProvisioningClaimRequest {
  /**
   * <p>The name of the provisioning template to use.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningClaimRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningClaimRequest): any => ({
    ...obj,
  });
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

export namespace CreateProvisioningClaimResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningClaimResponse): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
  });
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

export interface CreateProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The role ARN for the role associated with the fleet provisioning template. This IoT role
   *          grants permission to provision a device.</p>
   */
  provisioningRoleArn: string | undefined;

  /**
   * <p>Creates a pre-provisioning hook template.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Metadata which can be used to manage the fleet provisioning template.</p>
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

export namespace CreateProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The default version of the fleet provisioning template.</p>
   */
  defaultVersionId?: number;
}

export namespace CreateProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>Sets a fleet provision template version as the default version.</p>
   */
  setAsDefault?: boolean;
}

export namespace CreateProvisioningTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateVersionResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The version of the fleet provisioning template.</p>
   */
  versionId?: number;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace CreateProvisioningTemplateVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
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

export namespace CreateRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoleAliasRequest): any => ({
    ...obj,
  });
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

export namespace CreateRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoleAliasResponse): any => ({
    ...obj,
  });
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

export namespace CreateScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface CreateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace CreateScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduledAuditResponse): any => ({
    ...obj,
  });
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
  alertTargets?: { [key: string]: AlertTarget };

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

export namespace CreateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileRequest): any => ({
    ...obj,
  });
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

export namespace CreateSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileResponse): any => ({
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
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Tag[];
}

export namespace CreateStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamRequest): any => ({
    ...obj,
  });
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

export namespace CreateStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamResponse): any => ({
    ...obj,
  });
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

export namespace CreateThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingRequest): any => ({
    ...obj,
  });
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

export namespace CreateThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingResponse): any => ({
    ...obj,
  });
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

export namespace CreateThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingGroupRequest): any => ({
    ...obj,
  });
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

export namespace CreateThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingGroupResponse): any => ({
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

export namespace CreateThingTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingTypeRequest): any => ({
    ...obj,
  });
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

export namespace CreateThingTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingTypeResponse): any => ({
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

export namespace CreateTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Rule-SQL expression can't be parsed correctly.</p>
 */
export interface SqlParseException extends __SmithyException, $MetadataBearer {
  name: "SqlParseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace SqlParseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqlParseException): any => ({
    ...obj,
  });
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

export namespace HttpUrlDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpUrlDestinationConfiguration): any => ({
    ...obj,
  });
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

export namespace VpcDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcDestinationConfiguration): any => ({
    ...obj,
  });
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

export interface CreateTopicRuleDestinationRequest {
  /**
   * <p>The topic rule destination configuration.</p>
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

export namespace CreateTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleDestinationRequest): any => ({
    ...obj,
  });
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

export namespace HttpUrlDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpUrlDestinationProperties): any => ({
    ...obj,
  });
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

export namespace VpcDestinationProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcDestinationProperties): any => ({
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

export interface CreateTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace CreateTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAccountAuditConfigurationRequest {
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   */
  deleteScheduledAudits?: boolean;
}

export namespace DeleteAccountAuditConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountAuditConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountAuditConfigurationResponse {}

export namespace DeleteAccountAuditConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountAuditConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface DeleteAuditSuppressionResponse {}

export namespace DeleteAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface DeleteAuthorizerRequest {
  /**
   * <p>The name of the authorizer to delete.</p>
   */
  authorizerName: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DeleteAuthorizerResponse {}

export namespace DeleteAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 */
export interface DeleteConflictException extends __SmithyException, $MetadataBearer {
  name: "DeleteConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace DeleteConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConflictException): any => ({
    ...obj,
  });
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

export namespace DeleteBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteBillingGroupResponse {}

export namespace DeleteBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate operation is not allowed.</p>
 */
export interface CertificateStateException extends __SmithyException, $MetadataBearer {
  name: "CertificateStateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateStateException): any => ({
    ...obj,
  });
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

export namespace DeleteCACertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateResponse {}

export namespace DeleteCACertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCACertificateResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName: string | undefined;
}

export namespace DeleteCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomMetricResponse {}

export namespace DeleteCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface DeleteDimensionRequest {
  /**
   * <p>The unique identifier for the dimension that you want to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDimensionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDimensionResponse {}

export namespace DeleteDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDimensionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DeleteDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainConfigurationResponse {}

export namespace DeleteDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteDynamicThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDynamicThingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteDynamicThingGroupResponse {}

export namespace DeleteDynamicThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetMetricRequest): any => ({
    ...obj,
  });
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

export namespace DeleteJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
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

export namespace DeleteJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobExecutionRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template to delete.</p>
   */
  jobTemplateId: string | undefined;
}

export namespace DeleteJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteMitigationActionRequest {
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

export namespace DeleteMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteMitigationActionResponse {}

export namespace DeleteMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMitigationActionResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteOTAUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOTAUpdateRequest): any => ({
    ...obj,
  });
}

export interface DeleteOTAUpdateResponse {}

export namespace DeleteOTAUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOTAUpdateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

export namespace DeletePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
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

export namespace DeletePolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provision template to delete.</p>
   */
  templateName: string | undefined;
}

export namespace DeleteProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateResponse {}

export namespace DeleteProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the fleet provisioning template version to delete.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The fleet provisioning template version ID to delete.</p>
   */
  versionId: number | undefined;
}

export namespace DeleteProvisioningTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateVersionResponse {}

export namespace DeleteProvisioningTemplateVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeRequest {}

export namespace DeleteRegistrationCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistrationCodeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeResponse {}

export namespace DeleteRegistrationCodeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistrationCodeResponse): any => ({
    ...obj,
  });
}

export interface DeleteRoleAliasRequest {
  /**
   * <p>The role alias to delete.</p>
   */
  roleAlias: string | undefined;
}

export namespace DeleteRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoleAliasResponse {}

export namespace DeleteRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DeleteScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface DeleteScheduledAuditResponse {}

export namespace DeleteScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface DeleteSecurityProfileRequest {
  /**
   * <p>The name of the security profile to be deleted.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityProfileResponse {}

export namespace DeleteSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityProfileResponse): any => ({
    ...obj,
  });
}
