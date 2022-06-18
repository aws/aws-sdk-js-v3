// smithy-typescript generated code
import { Policy, ResourceIdentifier } from "./models_1";

export enum AbortAction {
  CANCEL = "CANCEL",
}

export enum JobExecutionFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  REJECTED = "REJECTED",
  TIMED_OUT = "TIMED_OUT",
}

export enum DynamoKeyType {
  NUMBER = "NUMBER",
  STRING = "STRING",
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

export namespace ViolationEventAdditionalInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViolationEventAdditionalInfo): any => ({
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

export enum AggregationTypeName {
  CARDINALITY = "Cardinality",
  PERCENTILES = "Percentiles",
  STATISTICS = "Statistics",
}

export enum AlertTargetType {
  SNS = "SNS",
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

export enum AuditCheckRunStatus {
  CANCELED = "CANCELED",
  COMPLETED_COMPLIANT = "COMPLETED_COMPLIANT",
  COMPLETED_NON_COMPLIANT = "COMPLETED_NON_COMPLIANT",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_FOR_DATA_COLLECTION = "WAITING_FOR_DATA_COLLECTION",
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
  additionalInfo?: Record<string, string>;
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
  additionalInfo?: Record<string, string>;
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

export enum AuditMitigationActionsTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum AuditNotificationType {
  SNS = "SNS",
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

export enum AuthDecision {
  ALLOWED = "ALLOWED",
  EXPLICIT_DENY = "EXPLICIT_DENY",
  IMPLICIT_DENY = "IMPLICIT_DENY",
}

export enum AuthorizerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
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

export enum AutoRegistrationStatus {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export enum CustomMetricType {
  IP_ADDRESS_LIST = "ip-address-list",
  NUMBER = "number",
  NUMBER_LIST = "number-list",
  STRING_LIST = "string-list",
}

export enum DimensionType {
  TOPIC_FILTER = "TOPIC_FILTER",
}

export enum ServiceType {
  CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER",
  DATA = "DATA",
  JOBS = "JOBS",
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

export namespace RetryCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryCriteria): any => ({
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

export enum TargetSelection {
  CONTINUOUS = "CONTINUOUS",
  SNAPSHOT = "SNAPSHOT",
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
   * <p>The hash algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses <code>SHA256</code> or <code>SHA1</code>, so you can pass either of them based on which was used for generating the signature.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature algorithm used to code sign the file. You can use a string as the algorithm name if the target over-the-air (OTA) update devices are able to verify the signature that was generated using the same signature algorithm. For example, FreeRTOS uses <code>ECDSA</code> or <code>RSA</code>, so you can pass either of them based on which was used for generating the signature.</p>
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

export enum OTAUpdateStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING",
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

export enum LogTargetType {
  CLIENT_ID = "CLIENT_ID",
  DEFAULT = "DEFAULT",
  PRINCIPAL_ID = "PRINCIPAL_ID",
  SOURCE_IP = "SOURCE_IP",
  THING_GROUP = "THING_GROUP",
}

export enum CACertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;
}

export namespace CertificateValidity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateValidity): any => ({
    ...obj,
  });
}

export enum CertificateMode {
  DEFAULT = "DEFAULT",
  SNI_ONLY = "SNI_ONLY",
}

export enum CertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  REGISTER_INACTIVE = "REGISTER_INACTIVE",
  REVOKED = "REVOKED",
}

/**
 * <p>Data used to transfer a certificate to an Amazon Web Services account.</p>
 */
export interface TransferData {
  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;
}

export namespace TransferData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferData): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The statistics of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskStatistics {
  /**
   * <p>
   *             The actions that were performed.
   *         </p>
   */
  actionsExecuted?: number;

  /**
   * <p>
   *             The actions that were skipped.
   *         </p>
   */
  actionsSkipped?: number;

  /**
   * <p>
   *             The actions that failed.
   *         </p>
   */
  actionsFailed?: number;
}

export namespace DetectMitigationActionsTaskStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectMitigationActionsTaskStatistics): any => ({
    ...obj,
  });
}

export enum DetectMitigationActionsTaskStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESSFUL = "SUCCESSFUL",
}

export enum DomainConfigurationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DomainType {
  AWS_MANAGED = "AWS_MANAGED",
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
  ENDPOINT = "ENDPOINT",
}

export enum ServerCertificateStatus {
  INVALID = "INVALID",
  VALID = "VALID",
}

export enum EventType {
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CERTIFICATE = "CERTIFICATE",
  JOB = "JOB",
  JOB_EXECUTION = "JOB_EXECUTION",
  POLICY = "POLICY",
  THING = "THING",
  THING_GROUP = "THING_GROUP",
  THING_GROUP_HIERARCHY = "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP = "THING_GROUP_MEMBERSHIP",
  THING_TYPE = "THING_TYPE",
  THING_TYPE_ASSOCIATION = "THING_TYPE_ASSOCIATION",
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING",
}

/**
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: string[];

  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
   *             have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;
}

export namespace JobProcessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobProcessDetails): any => ({
    ...obj,
  });
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum JobExecutionStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT",
}

/**
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: Record<string, string>;
}

export namespace JobExecutionStatusDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionStatusDetails): any => ({
    ...obj,
  });
}

export enum MitigationActionType {
  ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE",
}

export enum DynamicGroupStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING",
}

export enum Status {
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Completed = "Completed",
  Failed = "Failed",
  InProgress = "InProgress",
}

export enum ModelStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  PENDING_BUILD = "PENDING_BUILD",
}

/**
 * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
 */
export interface TermsAggregation {
  /**
   * <p>The number of buckets to return in the response. Default to 10.</p>
   */
  maxBuckets?: number;
}

export namespace TermsAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TermsAggregation): any => ({
    ...obj,
  });
}

export enum FieldType {
  BOOLEAN = "Boolean",
  NUMBER = "Number",
  STRING = "String",
}

/**
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The data type of the field.</p>
   */
  type?: FieldType | string;
}

export namespace Field {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Field): any => ({
    ...obj,
  });
}

export enum ThingGroupIndexingMode {
  OFF = "OFF",
  ON = "ON",
}

export enum DeviceDefenderIndexingMode {
  OFF = "OFF",
  VIOLATIONS = "VIOLATIONS",
}

export enum NamedShadowIndexingMode {
  OFF = "OFF",
  ON = "ON",
}

export enum ThingConnectivityIndexingMode {
  OFF = "OFF",
  STATUS = "STATUS",
}

export enum ThingIndexingMode {
  OFF = "OFF",
  REGISTRY = "REGISTRY",
  REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW",
}

/**
 * <p>Error information.</p>
 */
export interface ErrorInfo {
  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

export namespace ErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
}

export enum BehaviorCriteriaType {
  MACHINE_LEARNING = "MACHINE_LEARNING",
  STATIC = "STATIC",
  STATISTICAL = "STATISTICAL",
}

export enum DetectMitigationActionExecutionStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SKIPPED = "SKIPPED",
  SUCCESSFUL = "SUCCESSFUL",
}

/**
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
  /**
   * <p>The status of the job execution.</p>
   */
  status?: JobExecutionStatus | string;

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
   *             this particular device. It can be used later in commands which return or update job execution
   *             information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The number that indicates how many retry attempts have been completed for this
   *         job on this device.</p>
   */
  retryAttempt?: number;
}

export namespace JobExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobExecutionSummary): any => ({
    ...obj,
  });
}

export enum ReportType {
  ERRORS = "ERRORS",
  RESULTS = "RESULTS",
}

/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpUrlDestinationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationSummary {
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

export namespace VpcDestinationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcDestinationSummary): any => ({
    ...obj,
  });
}

export enum ViolationEventType {
  ALARM_CLEARED = "alarm-cleared",
  ALARM_INVALIDATED = "alarm-invalidated",
  IN_ALARM = "in-alarm",
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  /**
   * <p>True if the thing is connected to the Amazon Web Services IoT Core service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for approximately an hour, the time value might be missing.</p>
   */
  timestamp?: number;

  /**
   * <p>The reason why the client is disconnected. If the thing has been disconnected for approximately an hour, the <code>disconnectReason</code> value might be missing.</p>
   */
  disconnectReason?: string;
}

export namespace ThingConnectivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThingConnectivity): any => ({
    ...obj,
  });
}
