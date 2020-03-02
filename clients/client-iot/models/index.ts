import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 */
export interface CertificateConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateConflictException {
  export function isa(o: any): o is CertificateConflictException {
    return __isa(o, "CertificateConflictException");
  }
}

/**
 * <p>The certificate operation is not allowed.</p>
 */
export interface CertificateStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateStateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateStateException {
  export function isa(o: any): o is CertificateStateException {
    return __isa(o, "CertificateStateException");
  }
}

/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace CertificateValidationException {
  export function isa(o: any): o is CertificateValidationException {
    return __isa(o, "CertificateValidationException");
  }
}

/**
 * <p>Configuration.</p>
 */
export interface Configuration {
  __type?: "Configuration";
  /**
   * <p>True to enable the configuration.</p>
   */
  Enabled?: boolean;
}

export namespace Configuration {
  export function isa(o: any): o is Configuration {
    return __isa(o, "Configuration");
  }
}

/**
 * <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 */
export interface ConflictingResourceUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConflictingResourceUpdateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ConflictingResourceUpdateException {
  export function isa(o: any): o is ConflictingResourceUpdateException {
    return __isa(o, "ConflictingResourceUpdateException");
  }
}

/**
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 */
export interface DeleteConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "DeleteConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace DeleteConflictException {
  export function isa(o: any): o is DeleteConflictException {
    return __isa(o, "DeleteConflictException");
  }
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
  THING_TYPE_ASSOCIATION = "THING_TYPE_ASSOCIATION"
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
  export function isa(o: any): o is InternalException {
    return __isa(o, "InternalException");
  }
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAggregationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAggregationException {
  export function isa(o: any): o is InvalidAggregationException {
    return __isa(o, "InvalidAggregationException");
  }
}

/**
 * <p>The query is invalid.</p>
 */
export interface InvalidQueryException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidQueryException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidQueryException {
  export function isa(o: any): o is InvalidQueryException {
    return __isa(o, "InvalidQueryException");
  }
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>The response is invalid.</p>
 */
export interface InvalidResponseException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResponseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidResponseException {
  export function isa(o: any): o is InvalidResponseException {
    return __isa(o, "InvalidResponseException");
  }
}

/**
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 */
export interface InvalidStateTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidStateTransitionException {
  export function isa(o: any): o is InvalidStateTransitionException {
    return __isa(o, "InvalidStateTransitionException");
  }
}

/**
 * <p>A limit has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN"
}

/**
 * <p>The policy documentation is not valid.</p>
 */
export interface MalformedPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedPolicyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MalformedPolicyException {
  export function isa(o: any): o is MalformedPolicyException {
    return __isa(o, "MalformedPolicyException");
  }
}

/**
 * <p>The resource is not configured.</p>
 */
export interface NotConfiguredException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotConfiguredException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace NotConfiguredException {
  export function isa(o: any): o is NotConfiguredException {
    return __isa(o, "NotConfiguredException");
  }
}

export enum Protocol {
  HTTP = "HTTP",
  MQTT = "MQTT"
}

/**
 * <p>The registration code is invalid.</p>
 */
export interface RegistrationCodeValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "RegistrationCodeValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace RegistrationCodeValidationException {
  export function isa(o: any): o is RegistrationCodeValidationException {
    return __isa(o, "RegistrationCodeValidationException");
  }
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;

  /**
   * <p>The ARN of the resource that caused the exception.</p>
   */
  resourceArn?: string;

  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The resource registration failed.</p>
 */
export interface ResourceRegistrationFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceRegistrationFailureException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceRegistrationFailureException {
  export function isa(o: any): o is ResourceRegistrationFailureException {
    return __isa(o, "ResourceRegistrationFailureException");
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
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
  export function isa(o: any): o is SqlParseException {
    return __isa(o, "SqlParseException");
  }
}

/**
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's key.</p>
   */
  Key?: string;

  /**
   * <p>The tag's value.</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 */
export interface TransferAlreadyCompletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransferAlreadyCompletedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferAlreadyCompletedException {
  export function isa(o: any): o is TransferAlreadyCompletedException {
    return __isa(o, "TransferAlreadyCompletedException");
  }
}

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 */
export interface TransferConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransferConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferConflictException {
  export function isa(o: any): o is TransferConflictException {
    return __isa(o, "TransferConflictException");
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

/**
 * <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 */
export interface VersionConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "VersionConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionConflictException {
  export function isa(o: any): o is VersionConflictException {
    return __isa(o, "VersionConflictException");
  }
}

/**
 * <p>The number of policy versions exceeds the limit.</p>
 */
export interface VersionsLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "VersionsLimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionsLimitExceededException {
  export function isa(o: any): o is VersionsLimitExceededException {
    return __isa(o, "VersionsLimitExceededException");
  }
}

/**
 * <p>Describes the actions associated with a rule.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>Change the state of a CloudWatch alarm.</p>
   */
  cloudwatchAlarm?: CloudwatchAlarmAction;

  /**
   * <p>Capture a CloudWatch metric.</p>
   */
  cloudwatchMetric?: CloudwatchMetricAction;

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
   * <p>Write data to an Amazon Elasticsearch Service domain.</p>
   */
  elasticsearch?: ElasticsearchAction;

  /**
   * <p>Write to an Amazon Kinesis Firehose stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Send data to an HTTPS endpoint.</p>
   */
  http?: HttpAction;

  /**
   * <p>Sends message data to an AWS IoT Analytics channel.</p>
   */
  iotAnalytics?: IotAnalyticsAction;

  /**
   * <p>Sends an input to an AWS IoT Events detector.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset
   *       properties.</p>
   */
  iotSiteWise?: IotSiteWiseAction;

  /**
   * <p>Write data to an Amazon Kinesis stream.</p>
   */
  kinesis?: KinesisAction;

  /**
   * <p>Invoke a Lambda function.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Publish to another MQTT topic.</p>
   */
  republish?: RepublishAction;

  /**
   * <p>Write to an Amazon S3 bucket.</p>
   */
  s3?: S3Action;

  /**
   * <p>Send a message to a Salesforce IoT Cloud Input Stream.</p>
   */
  salesforce?: SalesforceAction;

  /**
   * <p>Publish to an Amazon SNS topic.</p>
   */
  sns?: SnsAction;

  /**
   * <p>Publish to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Starts execution of a Step Functions state machine.</p>
   */
  stepFunctions?: StepFunctionsAction;
}

export namespace Action {
  export function isa(o: any): o is Action {
    return __isa(o, "Action");
  }
}

/**
 * <p>An asset property timestamp entry containing the following information.</p>
 */
export interface AssetPropertyTimestamp {
  __type?: "AssetPropertyTimestamp";
  /**
   * <p>Optional. A string that contains the nanosecond time offset. Accepts substitution
   *       templates.</p>
   */
  offsetInNanos?: string;

  /**
   * <p>A string that contains the time in seconds since epoch. Accepts substitution
   *       templates.</p>
   */
  timeInSeconds: string | undefined;
}

export namespace AssetPropertyTimestamp {
  export function isa(o: any): o is AssetPropertyTimestamp {
    return __isa(o, "AssetPropertyTimestamp");
  }
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface AssetPropertyValue {
  __type?: "AssetPropertyValue";
  /**
   * <p>Optional. A string that describes the quality of the value. Accepts substitution
   *       templates. Must be <code>GOOD</code>, <code>BAD</code>, or <code>UNCERTAIN</code>.</p>
   */
  quality?: string;

  /**
   * <p>The asset property value timestamp.</p>
   */
  timestamp: AssetPropertyTimestamp | undefined;

  /**
   * <p>The value of the asset property.</p>
   */
  value: AssetPropertyVariant | undefined;
}

export namespace AssetPropertyValue {
  export function isa(o: any): o is AssetPropertyValue {
    return __isa(o, "AssetPropertyValue");
  }
}

/**
 * <p>Contains an asset property value (of a single type).</p>
 */
export interface AssetPropertyVariant {
  __type?: "AssetPropertyVariant";
  /**
   * <p>Optional. A string that contains the boolean value (<code>true</code> or
   *         <code>false</code>) of the value entry. Accepts substitution templates.</p>
   */
  booleanValue?: string;

  /**
   * <p>Optional. A string that contains the double value of the value entry. Accepts substitution
   *       templates.</p>
   */
  doubleValue?: string;

  /**
   * <p>Optional. A string that contains the integer value of the value entry. Accepts
   *       substitution templates.</p>
   */
  integerValue?: string;

  /**
   * <p>Optional. The string value of the value entry. Accepts substitution templates.</p>
   */
  stringValue?: string;
}

export namespace AssetPropertyVariant {
  export function isa(o: any): o is AssetPropertyVariant {
    return __isa(o, "AssetPropertyVariant");
  }
}

export enum CannedAccessControlList {
  AuthenticatedRead = "authenticated-read",
  AwsExecRead = "aws-exec-read",
  BucketOwnerFullControl = "bucket-owner-full-control",
  BucketOwnerRead = "bucket-owner-read",
  LogDeliveryWrite = "log-delivery-write",
  Private = "private",
  PublicRead = "public-read",
  PublicReadWrite = "public-read-write"
}

/**
 * <p>Describes an action that updates a CloudWatch alarm.</p>
 */
export interface CloudwatchAlarmAction {
  __type?: "CloudwatchAlarmAction";
  /**
   * <p>The CloudWatch alarm name.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The IAM role that allows access to the CloudWatch alarm.</p>
   */
  roleArn: string | undefined;

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
  export function isa(o: any): o is CloudwatchAlarmAction {
    return __isa(o, "CloudwatchAlarmAction");
  }
}

/**
 * <p>Describes an action that captures a CloudWatch metric.</p>
 */
export interface CloudwatchMetricAction {
  __type?: "CloudwatchMetricAction";
  /**
   * <p>The CloudWatch metric name.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The CloudWatch metric namespace name.</p>
   */
  metricNamespace: string | undefined;

  /**
   * <p>An optional <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp">Unix timestamp</a>.</p>
   */
  metricTimestamp?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit">metric
   *             unit</a> supported by CloudWatch.</p>
   */
  metricUnit: string | undefined;

  /**
   * <p>The CloudWatch metric value.</p>
   */
  metricValue: string | undefined;

  /**
   * <p>The IAM role that allows access to the CloudWatch metric.</p>
   */
  roleArn: string | undefined;
}

export namespace CloudwatchMetricAction {
  export function isa(o: any): o is CloudwatchMetricAction {
    return __isa(o, "CloudwatchMetricAction");
  }
}

export interface ConfirmTopicRuleDestinationRequest {
  __type?: "ConfirmTopicRuleDestinationRequest";
  /**
   * <p>The token used to confirm ownership or access to the topic rule confirmation URL.</p>
   */
  confirmationToken: string | undefined;
}

export namespace ConfirmTopicRuleDestinationRequest {
  export function isa(o: any): o is ConfirmTopicRuleDestinationRequest {
    return __isa(o, "ConfirmTopicRuleDestinationRequest");
  }
}

export interface ConfirmTopicRuleDestinationResponse {
  __type?: "ConfirmTopicRuleDestinationResponse";
}

export namespace ConfirmTopicRuleDestinationResponse {
  export function isa(o: any): o is ConfirmTopicRuleDestinationResponse {
    return __isa(o, "ConfirmTopicRuleDestinationResponse");
  }
}

export interface CreateTopicRuleDestinationRequest {
  __type?: "CreateTopicRuleDestinationRequest";
  /**
   * <p>The topic rule destination configuration.</p>
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

export namespace CreateTopicRuleDestinationRequest {
  export function isa(o: any): o is CreateTopicRuleDestinationRequest {
    return __isa(o, "CreateTopicRuleDestinationRequest");
  }
}

export interface CreateTopicRuleDestinationResponse {
  __type?: "CreateTopicRuleDestinationResponse";
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace CreateTopicRuleDestinationResponse {
  export function isa(o: any): o is CreateTopicRuleDestinationResponse {
    return __isa(o, "CreateTopicRuleDestinationResponse");
  }
}

/**
 * <p>The input for the CreateTopicRule operation.</p>
 */
export interface CreateTopicRuleRequest {
  __type?: "CreateTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

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

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

export namespace CreateTopicRuleRequest {
  export function isa(o: any): o is CreateTopicRuleRequest {
    return __isa(o, "CreateTopicRuleRequest");
  }
}

export interface DeleteTopicRuleDestinationRequest {
  __type?: "DeleteTopicRuleDestinationRequest";
  /**
   * <p>The ARN of the topic rule destination to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteTopicRuleDestinationRequest {
  export function isa(o: any): o is DeleteTopicRuleDestinationRequest {
    return __isa(o, "DeleteTopicRuleDestinationRequest");
  }
}

export interface DeleteTopicRuleDestinationResponse {
  __type?: "DeleteTopicRuleDestinationResponse";
}

export namespace DeleteTopicRuleDestinationResponse {
  export function isa(o: any): o is DeleteTopicRuleDestinationResponse {
    return __isa(o, "DeleteTopicRuleDestinationResponse");
  }
}

/**
 * <p>The input for the DeleteTopicRule operation.</p>
 */
export interface DeleteTopicRuleRequest {
  __type?: "DeleteTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace DeleteTopicRuleRequest {
  export function isa(o: any): o is DeleteTopicRuleRequest {
    return __isa(o, "DeleteTopicRuleRequest");
  }
}

export interface DeleteV2LoggingLevelRequest {
  __type?: "DeleteV2LoggingLevelRequest";
  /**
   * <p>The name of the resource for which you are configuring logging.</p>
   */
  targetName: string | undefined;

  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType: LogTargetType | string | undefined;
}

export namespace DeleteV2LoggingLevelRequest {
  export function isa(o: any): o is DeleteV2LoggingLevelRequest {
    return __isa(o, "DeleteV2LoggingLevelRequest");
  }
}

/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
  __type?: "DisableTopicRuleRequest";
  /**
   * <p>The name of the rule to disable.</p>
   */
  ruleName: string | undefined;
}

export namespace DisableTopicRuleRequest {
  export function isa(o: any): o is DisableTopicRuleRequest {
    return __isa(o, "DisableTopicRuleRequest");
  }
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
  __type?: "DynamoDBAction";
  /**
   * <p>The hash key name.</p>
   */
  hashKeyField: string | undefined;

  /**
   * <p>The hash key type. Valid values are "STRING" or "NUMBER"</p>
   */
  hashKeyType?: DynamoKeyType | string;

  /**
   * <p>The hash key value.</p>
   */
  hashKeyValue: string | undefined;

  /**
   * <p>The type of operation to be performed. This follows the substitution template, so it
   *          can be <code>${operation}</code>, but the substitution must result in one of the following:
   *             <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</p>
   */
  operation?: string;

  /**
   * <p>The action payload. This name can be customized.</p>
   */
  payloadField?: string;

  /**
   * <p>The range key name.</p>
   */
  rangeKeyField?: string;

  /**
   * <p>The range key type. Valid values are "STRING" or "NUMBER"</p>
   */
  rangeKeyType?: DynamoKeyType | string;

  /**
   * <p>The range key value.</p>
   */
  rangeKeyValue?: string;

  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;
}

export namespace DynamoDBAction {
  export function isa(o: any): o is DynamoDBAction {
    return __isa(o, "DynamoDBAction");
  }
}

/**
 * <p>Describes an action to write to a DynamoDB table.</p>
 *          <p>This DynamoDB action writes each attribute in the message payload into it's own
 *          column in the DynamoDB table.</p>
 */
export interface DynamoDBv2Action {
  __type?: "DynamoDBv2Action";
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

  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;
}

export namespace DynamoDBv2Action {
  export function isa(o: any): o is DynamoDBv2Action {
    return __isa(o, "DynamoDBv2Action");
  }
}

export enum DynamoKeyType {
  NUMBER = "NUMBER",
  STRING = "STRING"
}

/**
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service
 *          domain.</p>
 */
export interface ElasticsearchAction {
  __type?: "ElasticsearchAction";
  /**
   * <p>The endpoint of your Elasticsearch domain.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The unique identifier for the document you are storing.</p>
   */
  id: string | undefined;

  /**
   * <p>The Elasticsearch index where you want to store your data.</p>
   */
  index: string | undefined;

  /**
   * <p>The IAM role ARN that has access to Elasticsearch.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The type of document you are storing.</p>
   */
  type: string | undefined;
}

export namespace ElasticsearchAction {
  export function isa(o: any): o is ElasticsearchAction {
    return __isa(o, "ElasticsearchAction");
  }
}

/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
  __type?: "EnableTopicRuleRequest";
  /**
   * <p>The name of the topic rule to enable.</p>
   */
  ruleName: string | undefined;
}

export namespace EnableTopicRuleRequest {
  export function isa(o: any): o is EnableTopicRuleRequest {
    return __isa(o, "EnableTopicRuleRequest");
  }
}

/**
 * <p>Describes an action that writes data to an Amazon Kinesis Firehose stream.</p>
 */
export interface FirehoseAction {
  __type?: "FirehoseAction";
  /**
   * <p>The delivery stream name.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>The IAM role that grants access to the Amazon Kinesis Firehose stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A character separator that will be used to separate records written to the Firehose
   *          stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ','
   *          (comma).</p>
   */
  separator?: string;
}

export namespace FirehoseAction {
  export function isa(o: any): o is FirehoseAction {
    return __isa(o, "FirehoseAction");
  }
}

/**
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {
  __type?: "GetLoggingOptionsRequest";
}

export namespace GetLoggingOptionsRequest {
  export function isa(o: any): o is GetLoggingOptionsRequest {
    return __isa(o, "GetLoggingOptionsRequest");
  }
}

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
  __type?: "GetLoggingOptionsResponse";
  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;
}

export namespace GetLoggingOptionsResponse {
  export function isa(o: any): o is GetLoggingOptionsResponse {
    return __isa(o, "GetLoggingOptionsResponse");
  }
}

export interface GetTopicRuleDestinationRequest {
  __type?: "GetTopicRuleDestinationRequest";
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;
}

export namespace GetTopicRuleDestinationRequest {
  export function isa(o: any): o is GetTopicRuleDestinationRequest {
    return __isa(o, "GetTopicRuleDestinationRequest");
  }
}

export interface GetTopicRuleDestinationResponse {
  __type?: "GetTopicRuleDestinationResponse";
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace GetTopicRuleDestinationResponse {
  export function isa(o: any): o is GetTopicRuleDestinationResponse {
    return __isa(o, "GetTopicRuleDestinationResponse");
  }
}

/**
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
  __type?: "GetTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace GetTopicRuleRequest {
  export function isa(o: any): o is GetTopicRuleRequest {
    return __isa(o, "GetTopicRuleRequest");
  }
}

/**
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
  __type?: "GetTopicRuleResponse";
  /**
   * <p>The rule.</p>
   */
  rule?: TopicRule;

  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;
}

export namespace GetTopicRuleResponse {
  export function isa(o: any): o is GetTopicRuleResponse {
    return __isa(o, "GetTopicRuleResponse");
  }
}

export interface GetV2LoggingOptionsRequest {
  __type?: "GetV2LoggingOptionsRequest";
}

export namespace GetV2LoggingOptionsRequest {
  export function isa(o: any): o is GetV2LoggingOptionsRequest {
    return __isa(o, "GetV2LoggingOptionsRequest");
  }
}

export interface GetV2LoggingOptionsResponse {
  __type?: "GetV2LoggingOptionsResponse";
  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;

  /**
   * <p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;
}

export namespace GetV2LoggingOptionsResponse {
  export function isa(o: any): o is GetV2LoggingOptionsResponse {
    return __isa(o, "GetV2LoggingOptionsResponse");
  }
}

/**
 * <p>Send data to an HTTPS endpoint.</p>
 */
export interface HttpAction {
  __type?: "HttpAction";
  /**
   * <p>The authentication method to use when sending data to an HTTPS endpoint.</p>
   */
  auth?: HttpAuthorization;

  /**
   * <p>The URL to which AWS IoT sends a confirmation message. The value of the confirmation URL
   *          must be a prefix of the endpoint URL. If you do not specify a confirmation URL AWS IoT uses
   *          the endpoint URL as the confirmation URL. If you use substitution templates in the
   *          confirmationUrl, you must create and enable topic rule destinations that match each
   *          possible value of the substituion template before traffic is allowed to your endpoint
   *          URL.</p>
   */
  confirmationUrl?: string;

  /**
   * <p>The HTTP headers to send with the message data.</p>
   */
  headers?: Array<HttpActionHeader>;

  /**
   * <p>The endpoint URL. If substitution templates are used in the URL, you must also specify a
   *             <code>confirmationUrl</code>. If this is a new destination, a new
   *             <code>TopicRuleDestination</code> is created if possible.</p>
   */
  url: string | undefined;
}

export namespace HttpAction {
  export function isa(o: any): o is HttpAction {
    return __isa(o, "HttpAction");
  }
}

/**
 * <p>The HTTP action header.</p>
 */
export interface HttpActionHeader {
  __type?: "HttpActionHeader";
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
  export function isa(o: any): o is HttpActionHeader {
    return __isa(o, "HttpActionHeader");
  }
}

/**
 * <p>The authorization method used to send messages.</p>
 */
export interface HttpAuthorization {
  __type?: "HttpAuthorization";
  /**
   * <p>Use Sig V4 authorization. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
   *             Version 4 Signing Process</a>.</p>
   */
  sigv4?: SigV4Authorization;
}

export namespace HttpAuthorization {
  export function isa(o: any): o is HttpAuthorization {
    return __isa(o, "HttpAuthorization");
  }
}

/**
 * <p>HTTP URL destination configuration used by the topic rule's HTTP action.</p>
 */
export interface HttpUrlDestinationConfiguration {
  __type?: "HttpUrlDestinationConfiguration";
  /**
   * <p>The URL AWS IoT uses to confirm ownership of or access to the topic rule destination
   *          URL.</p>
   */
  confirmationUrl: string | undefined;
}

export namespace HttpUrlDestinationConfiguration {
  export function isa(o: any): o is HttpUrlDestinationConfiguration {
    return __isa(o, "HttpUrlDestinationConfiguration");
  }
}

/**
 * <p>HTTP URL destination properties.</p>
 */
export interface HttpUrlDestinationProperties {
  __type?: "HttpUrlDestinationProperties";
  /**
   * <p>The URL used to confirm the HTTP topic rule destination URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationProperties {
  export function isa(o: any): o is HttpUrlDestinationProperties {
    return __isa(o, "HttpUrlDestinationProperties");
  }
}

/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  __type?: "HttpUrlDestinationSummary";
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationSummary {
  export function isa(o: any): o is HttpUrlDestinationSummary {
    return __isa(o, "HttpUrlDestinationSummary");
  }
}

/**
 * <p>Sends message data to an AWS IoT Analytics channel.</p>
 */
export interface IotAnalyticsAction {
  __type?: "IotAnalyticsAction";
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
   * <p>The ARN of the role which has a policy that grants IoT Analytics permission to send
   *          message data via IoT Analytics (iotanalytics:BatchPutMessage).</p>
   */
  roleArn?: string;
}

export namespace IotAnalyticsAction {
  export function isa(o: any): o is IotAnalyticsAction {
    return __isa(o, "IotAnalyticsAction");
  }
}

/**
 * <p>Sends an input to an AWS IoT Events detector.</p>
 */
export interface IotEventsAction {
  __type?: "IotEventsAction";
  /**
   * <p>The name of the AWS IoT Events input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>[Optional] Use this to ensure that only one input (message) with a given messageId will
   *       be processed by an AWS IoT Events detector.</p>
   */
  messageId?: string;

  /**
   * <p>The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT
   *       Events detector. ("Action":"iotevents:BatchPutMessage").</p>
   */
  roleArn: string | undefined;
}

export namespace IotEventsAction {
  export function isa(o: any): o is IotEventsAction {
    return __isa(o, "IotEventsAction");
  }
}

/**
 * <p>Describes an action to send data from an MQTT message that triggered the rule to AWS IoT
 *       SiteWise asset properties.</p>
 */
export interface IotSiteWiseAction {
  __type?: "IotSiteWiseAction";
  /**
   * <p>A list of asset property value entries.</p>
   */
  putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry> | undefined;

  /**
   * <p>The ARN of the role that grants AWS IoT permission to send an asset property value to AWS
   *       IoTSiteWise. (<code>"Action": "iotsitewise:BatchPutAssetPropertyValue"</code>). The trust
   *       policy can restrict access to specific asset hierarchy paths.</p>
   */
  roleArn: string | undefined;
}

export namespace IotSiteWiseAction {
  export function isa(o: any): o is IotSiteWiseAction {
    return __isa(o, "IotSiteWiseAction");
  }
}

/**
 * <p>Describes an action to write data to an Amazon Kinesis stream.</p>
 */
export interface KinesisAction {
  __type?: "KinesisAction";
  /**
   * <p>The partition key.</p>
   */
  partitionKey?: string;

  /**
   * <p>The ARN of the IAM role that grants access to the Amazon Kinesis stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis stream.</p>
   */
  streamName: string | undefined;
}

export namespace KinesisAction {
  export function isa(o: any): o is KinesisAction {
    return __isa(o, "KinesisAction");
  }
}

/**
 * <p>Describes an action to invoke a Lambda function.</p>
 */
export interface LambdaAction {
  __type?: "LambdaAction";
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  functionArn: string | undefined;
}

export namespace LambdaAction {
  export function isa(o: any): o is LambdaAction {
    return __isa(o, "LambdaAction");
  }
}

export interface ListTopicRuleDestinationsRequest {
  __type?: "ListTopicRuleDestinationsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsRequest {
  export function isa(o: any): o is ListTopicRuleDestinationsRequest {
    return __isa(o, "ListTopicRuleDestinationsRequest");
  }
}

export interface ListTopicRuleDestinationsResponse {
  __type?: "ListTopicRuleDestinationsResponse";
  /**
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: Array<TopicRuleDestinationSummary>;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsResponse {
  export function isa(o: any): o is ListTopicRuleDestinationsResponse {
    return __isa(o, "ListTopicRuleDestinationsResponse");
  }
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  __type?: "ListTopicRulesRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next value.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The topic.</p>
   */
  topic?: string;
}

export namespace ListTopicRulesRequest {
  export function isa(o: any): o is ListTopicRulesRequest {
    return __isa(o, "ListTopicRulesRequest");
  }
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  __type?: "ListTopicRulesResponse";
  /**
   * <p>A token used to retrieve the next value.</p>
   */
  nextToken?: string;

  /**
   * <p>The rules.</p>
   */
  rules?: Array<TopicRuleListItem>;
}

export namespace ListTopicRulesResponse {
  export function isa(o: any): o is ListTopicRulesResponse {
    return __isa(o, "ListTopicRulesResponse");
  }
}

export interface ListV2LoggingLevelsRequest {
  __type?: "ListV2LoggingLevelsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType | string;
}

export namespace ListV2LoggingLevelsRequest {
  export function isa(o: any): o is ListV2LoggingLevelsRequest {
    return __isa(o, "ListV2LoggingLevelsRequest");
  }
}

export interface ListV2LoggingLevelsResponse {
  __type?: "ListV2LoggingLevelsResponse";
  /**
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: Array<LogTargetConfiguration>;

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListV2LoggingLevelsResponse {
  export function isa(o: any): o is ListV2LoggingLevelsResponse {
    return __isa(o, "ListV2LoggingLevelsResponse");
  }
}

/**
 * <p>A log target.</p>
 */
export interface LogTarget {
  __type?: "LogTarget";
  /**
   * <p>The target name.</p>
   */
  targetName?: string;

  /**
   * <p>The target type.</p>
   */
  targetType: LogTargetType | string | undefined;
}

export namespace LogTarget {
  export function isa(o: any): o is LogTarget {
    return __isa(o, "LogTarget");
  }
}

/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  __type?: "LogTargetConfiguration";
  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>A log target</p>
   */
  logTarget?: LogTarget;
}

export namespace LogTargetConfiguration {
  export function isa(o: any): o is LogTargetConfiguration {
    return __isa(o, "LogTargetConfiguration");
  }
}

export enum LogTargetType {
  DEFAULT = "DEFAULT",
  THING_GROUP = "THING_GROUP"
}

/**
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  __type?: "LoggingOptionsPayload";
  /**
   * <p>The log level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;
}

export namespace LoggingOptionsPayload {
  export function isa(o: any): o is LoggingOptionsPayload {
    return __isa(o, "LoggingOptionsPayload");
  }
}

export enum MessageFormat {
  JSON = "JSON",
  RAW = "RAW"
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface PutAssetPropertyValueEntry {
  __type?: "PutAssetPropertyValueEntry";
  /**
   * <p>The ID of the AWS IoT SiteWise asset. You must specify either a <code>propertyAlias</code>
   *       or both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  assetId?: string;

  /**
   * <p>Optional. A unique identifier for this entry that you can define to better track which
   *       message caused an error in case of failure. Accepts substitution templates. Defaults to a new
   *       UUID.</p>
   */
  entryId?: string;

  /**
   * <p>The name of the property alias associated with your asset property. You must specify
   *       either a <code>propertyAlias</code> or both an <code>aliasId</code> and a
   *         <code>propertyId</code>. Accepts substitution templates.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset's property. You must specify either a <code>propertyAlias</code> or
   *       both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  propertyId?: string;

  /**
   * <p>A list of property values to insert that each contain timestamp, quality, and value (TQV)
   *       information.</p>
   */
  propertyValues: Array<AssetPropertyValue> | undefined;
}

export namespace PutAssetPropertyValueEntry {
  export function isa(o: any): o is PutAssetPropertyValueEntry {
    return __isa(o, "PutAssetPropertyValueEntry");
  }
}

/**
 * <p>The input for the DynamoActionVS action that specifies the DynamoDB table to which
 *          the message data will be written.</p>
 */
export interface PutItemInput {
  __type?: "PutItemInput";
  /**
   * <p>The table where the message data will be written.</p>
   */
  tableName: string | undefined;
}

export namespace PutItemInput {
  export function isa(o: any): o is PutItemInput {
    return __isa(o, "PutItemInput");
  }
}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  __type?: "ReplaceTopicRuleRequest";
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
  export function isa(o: any): o is ReplaceTopicRuleRequest {
    return __isa(o, "ReplaceTopicRuleRequest");
  }
}

/**
 * <p>Describes an action to republish to another topic.</p>
 */
export interface RepublishAction {
  __type?: "RepublishAction";
  /**
   * <p>The Quality of Service (QoS) level to use when republishing messages. The default value
   *          is 0.</p>
   */
  qos?: number;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;
}

export namespace RepublishAction {
  export function isa(o: any): o is RepublishAction {
    return __isa(o, "RepublishAction");
  }
}

/**
 * <p>Describes an action to write data to an Amazon S3 bucket.</p>
 */
export interface S3Action {
  __type?: "S3Action";
  /**
   * <p>The Amazon S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The Amazon S3 canned ACL that controls access to the object identified by the object
   *          key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">S3 canned ACLs</a>.</p>
   */
  cannedAcl?: CannedAccessControlList | string;

  /**
   * <p>The object key.</p>
   */
  key: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;
}

export namespace S3Action {
  export function isa(o: any): o is S3Action {
    return __isa(o, "S3Action");
  }
}

/**
 * <p>Describes an action to write a message to a Salesforce IoT Cloud Input
 *          Stream.</p>
 */
export interface SalesforceAction {
  __type?: "SalesforceAction";
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
  export function isa(o: any): o is SalesforceAction {
    return __isa(o, "SalesforceAction");
  }
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  __type?: "SetLoggingOptionsRequest";
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

export namespace SetLoggingOptionsRequest {
  export function isa(o: any): o is SetLoggingOptionsRequest {
    return __isa(o, "SetLoggingOptionsRequest");
  }
}

export interface SetV2LoggingLevelRequest {
  __type?: "SetV2LoggingLevelRequest";
  /**
   * <p>The log level.</p>
   */
  logLevel: LogLevel | string | undefined;

  /**
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;
}

export namespace SetV2LoggingLevelRequest {
  export function isa(o: any): o is SetV2LoggingLevelRequest {
    return __isa(o, "SetV2LoggingLevelRequest");
  }
}

export interface SetV2LoggingOptionsRequest {
  __type?: "SetV2LoggingOptionsRequest";
  /**
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;

  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;
}

export namespace SetV2LoggingOptionsRequest {
  export function isa(o: any): o is SetV2LoggingOptionsRequest {
    return __isa(o, "SetV2LoggingOptionsRequest");
  }
}

/**
 * <p>Use Sig V4 authorization.</p>
 */
export interface SigV4Authorization {
  __type?: "SigV4Authorization";
  /**
   * <p>The ARN of the signing role.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The service name to use while signing with Sig V4.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The signing region.</p>
   */
  signingRegion: string | undefined;
}

export namespace SigV4Authorization {
  export function isa(o: any): o is SigV4Authorization {
    return __isa(o, "SigV4Authorization");
  }
}

/**
 * <p>Describes an action to publish to an Amazon SNS topic.</p>
 */
export interface SnsAction {
  __type?: "SnsAction";
  /**
   * <p>(Optional) The message format of the message to publish. Accepted values are "JSON"
   *          and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine
   *          if the payload should be parsed and relevant platform-specific bits of the payload should
   *          be extracted. To read more about SNS message formats, see <a href="https://docs.aws.amazon.com/sns/latest/dg/json-formats.html">https://docs.aws.amazon.com/sns/latest/dg/json-formats.html</a> refer to their official documentation.</p>
   */
  messageFormat?: MessageFormat | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The ARN of the SNS topic.</p>
   */
  targetArn: string | undefined;
}

export namespace SnsAction {
  export function isa(o: any): o is SnsAction {
    return __isa(o, "SnsAction");
  }
}

/**
 * <p>Describes an action to publish data to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  __type?: "SqsAction";
  /**
   * <p>The URL of the Amazon SQS queue.</p>
   */
  queueUrl: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies whether to use Base64 encoding.</p>
   */
  useBase64?: boolean;
}

export namespace SqsAction {
  export function isa(o: any): o is SqsAction {
    return __isa(o, "SqsAction");
  }
}

/**
 * <p>Starts execution of a Step Functions state machine.</p>
 */
export interface StepFunctionsAction {
  __type?: "StepFunctionsAction";
  /**
   * <p>(Optional) A name will be given to the state machine execution consisting of this
   *       prefix followed by a UUID. Step Functions automatically creates a unique name for each state
   *       machine execution if one is not provided.</p>
   */
  executionNamePrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT permission to start execution of a state machine
   *       ("Action":"states:StartExecution").</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Step Functions state machine whose execution will be started.</p>
   */
  stateMachineName: string | undefined;
}

export namespace StepFunctionsAction {
  export function isa(o: any): o is StepFunctionsAction {
    return __isa(o, "StepFunctionsAction");
  }
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
  __type?: "TopicRule";
  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Array<Action>;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: Action;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   */
  sql?: string;
}

export namespace TopicRule {
  export function isa(o: any): o is TopicRule {
    return __isa(o, "TopicRule");
  }
}

/**
 * <p>A topic rule destination.</p>
 */
export interface TopicRuleDestination {
  __type?: "TopicRuleDestination";
  /**
   * <p>The topic rule destination URL.</p>
   */
  arn?: string;

  /**
   * <p>Properties of the HTTP URL.</p>
   */
  httpUrlProperties?: HttpUrlDestinationProperties;

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
   * <p>Additional details or reason why the topic rule destination is in the current
   *          status.</p>
   */
  statusReason?: string;
}

export namespace TopicRuleDestination {
  export function isa(o: any): o is TopicRuleDestination {
    return __isa(o, "TopicRuleDestination");
  }
}

/**
 * <p>Configuration of the topic rule destination.</p>
 */
export interface TopicRuleDestinationConfiguration {
  __type?: "TopicRuleDestinationConfiguration";
  /**
   * <p>Configuration of the HTTP URL.</p>
   */
  httpUrlConfiguration?: HttpUrlDestinationConfiguration;
}

export namespace TopicRuleDestinationConfiguration {
  export function isa(o: any): o is TopicRuleDestinationConfiguration {
    return __isa(o, "TopicRuleDestinationConfiguration");
  }
}

export enum TopicRuleDestinationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  __type?: "TopicRuleDestinationSummary";
  /**
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

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
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;
}

export namespace TopicRuleDestinationSummary {
  export function isa(o: any): o is TopicRuleDestinationSummary {
    return __isa(o, "TopicRuleDestinationSummary");
  }
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  __type?: "TopicRuleListItem";
  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;
}

export namespace TopicRuleListItem {
  export function isa(o: any): o is TopicRuleListItem {
    return __isa(o, "TopicRuleListItem");
  }
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRulePayload {
  __type?: "TopicRulePayload";
  /**
   * <p>The actions associated with the rule.</p>
   */
  actions: Array<Action> | undefined;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The action to take when an error occurs.</p>
   */
  errorAction?: Action;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The SQL statement used to query the topic. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference">AWS IoT SQL
   *             Reference</a> in the <i>AWS IoT Developer Guide</i>.</p>
   */
  sql: string | undefined;
}

export namespace TopicRulePayload {
  export function isa(o: any): o is TopicRulePayload {
    return __isa(o, "TopicRulePayload");
  }
}

export interface UpdateTopicRuleDestinationRequest {
  __type?: "UpdateTopicRuleDestinationRequest";
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
  export function isa(o: any): o is UpdateTopicRuleDestinationRequest {
    return __isa(o, "UpdateTopicRuleDestinationRequest");
  }
}

export interface UpdateTopicRuleDestinationResponse {
  __type?: "UpdateTopicRuleDestinationResponse";
}

export namespace UpdateTopicRuleDestinationResponse {
  export function isa(o: any): o is UpdateTopicRuleDestinationResponse {
    return __isa(o, "UpdateTopicRuleDestinationResponse");
  }
}

/**
 * <p>The input for the AcceptCertificateTransfer operation.</p>
 */
export interface AcceptCertificateTransferRequest {
  __type?: "AcceptCertificateTransferRequest";
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
  export function isa(o: any): o is AcceptCertificateTransferRequest {
    return __isa(o, "AcceptCertificateTransferRequest");
  }
}

export enum ActionType {
  CONNECT = "CONNECT",
  PUBLISH = "PUBLISH",
  RECEIVE = "RECEIVE",
  SUBSCRIBE = "SUBSCRIBE"
}

/**
 * <p>Contains information that allowed the authorization.</p>
 */
export interface Allowed {
  __type?: "Allowed";
  /**
   * <p>A list of policies that allowed the authentication.</p>
   */
  policies?: Array<Policy>;
}

export namespace Allowed {
  export function isa(o: any): o is Allowed {
    return __isa(o, "Allowed");
  }
}

export interface AttachPolicyRequest {
  __type?: "AttachPolicyRequest";
  /**
   * <p>The name of the policy to attach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached.</p>
   */
  target: string | undefined;
}

export namespace AttachPolicyRequest {
  export function isa(o: any): o is AttachPolicyRequest {
    return __isa(o, "AttachPolicyRequest");
  }
}

/**
 * <p>The input for the AttachPrincipalPolicy operation.</p>
 */
export interface AttachPrincipalPolicyRequest {
  __type?: "AttachPrincipalPolicyRequest";
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
  export function isa(o: any): o is AttachPrincipalPolicyRequest {
    return __isa(o, "AttachPrincipalPolicyRequest");
  }
}

export enum AuthDecision {
  ALLOWED = "ALLOWED",
  EXPLICIT_DENY = "EXPLICIT_DENY",
  IMPLICIT_DENY = "IMPLICIT_DENY"
}

/**
 * <p>A collection of authorization information.</p>
 */
export interface AuthInfo {
  __type?: "AuthInfo";
  /**
   * <p>The type of action for which the principal is being authorized.</p>
   */
  actionType?: ActionType | string;

  /**
   * <p>The resources for which the principal is being authorized to perform the specified
   *          action.</p>
   */
  resources?: Array<string>;
}

export namespace AuthInfo {
  export function isa(o: any): o is AuthInfo {
    return __isa(o, "AuthInfo");
  }
}

/**
 * <p>The authorizer result.</p>
 */
export interface AuthResult {
  __type?: "AuthResult";
  /**
   * <p>The policies and statements that allowed the specified action.</p>
   */
  allowed?: Allowed;

  /**
   * <p>The final authorization decision of this scenario. Multiple statements are taken into
   *          account when determining the authorization decision. An explicit deny statement can
   *          override multiple allow statements.</p>
   */
  authDecision?: AuthDecision | string;

  /**
   * <p>Authorization information.</p>
   */
  authInfo?: AuthInfo;

  /**
   * <p>The policies and statements that denied the specified action.</p>
   */
  denied?: Denied;

  /**
   * <p>Contains any missing context values found while evaluating policy.</p>
   */
  missingContextValues?: Array<string>;
}

export namespace AuthResult {
  export function isa(o: any): o is AuthResult {
    return __isa(o, "AuthResult");
  }
}

/**
 * <p>An object that specifies the authorization service for a domain.</p>
 */
export interface AuthorizerConfig {
  __type?: "AuthorizerConfig";
  /**
   * <p>A Boolean that specifies whether the domain configuration's authorization service can be overridden.</p>
   */
  allowAuthorizerOverride?: boolean;

  /**
   * <p>The name of the authorization service for a domain configuration.</p>
   */
  defaultAuthorizerName?: string;
}

export namespace AuthorizerConfig {
  export function isa(o: any): o is AuthorizerConfig {
    return __isa(o, "AuthorizerConfig");
  }
}

/**
 * <p>The authorizer description.</p>
 */
export interface AuthorizerDescription {
  __type?: "AuthorizerDescription";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's Lambda function ARN.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The UNIX timestamp of when the authorizer was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the authorizer was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>Specifies whether AWS IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>The status of the authorizer.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to validate the token signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace AuthorizerDescription {
  export function isa(o: any): o is AuthorizerDescription {
    return __isa(o, "AuthorizerDescription");
  }
}

export enum AuthorizerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

/**
 * <p>The authorizer summary.</p>
 */
export interface AuthorizerSummary {
  __type?: "AuthorizerSummary";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace AuthorizerSummary {
  export function isa(o: any): o is AuthorizerSummary {
    return __isa(o, "AuthorizerSummary");
  }
}

export enum AutoRegistrationStatus {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE"
}

/**
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
  __type?: "CACertificate";
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CACertificateStatus | string;
}

export namespace CACertificate {
  export function isa(o: any): o is CACertificate {
    return __isa(o, "CACertificate");
  }
}

/**
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
  __type?: "CACertificateDescription";
  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CACertificateDescription {
  export function isa(o: any): o is CACertificateDescription {
    return __isa(o, "CACertificateDescription");
  }
}

export enum CACertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

/**
 * <p>The input for the CancelCertificateTransfer operation.</p>
 */
export interface CancelCertificateTransferRequest {
  __type?: "CancelCertificateTransferRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace CancelCertificateTransferRequest {
  export function isa(o: any): o is CancelCertificateTransferRequest {
    return __isa(o, "CancelCertificateTransferRequest");
  }
}

/**
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
  __type?: "Certificate";
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
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CertificateStatus | string;
}

export namespace Certificate {
  export function isa(o: any): o is Certificate {
    return __isa(o, "Certificate");
  }
}

/**
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
  __type?: "CertificateDescription";
  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ID of the AWS account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the AWS account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: TransferData;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CertificateDescription {
  export function isa(o: any): o is CertificateDescription {
    return __isa(o, "CertificateDescription");
  }
}

export enum CertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  REGISTER_INACTIVE = "REGISTER_INACTIVE",
  REVOKED = "REVOKED"
}

/**
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
  __type?: "CertificateValidity";
  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;

  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;
}

export namespace CertificateValidity {
  export function isa(o: any): o is CertificateValidity {
    return __isa(o, "CertificateValidity");
  }
}

export interface ClearDefaultAuthorizerRequest {
  __type?: "ClearDefaultAuthorizerRequest";
}

export namespace ClearDefaultAuthorizerRequest {
  export function isa(o: any): o is ClearDefaultAuthorizerRequest {
    return __isa(o, "ClearDefaultAuthorizerRequest");
  }
}

export interface ClearDefaultAuthorizerResponse {
  __type?: "ClearDefaultAuthorizerResponse";
}

export namespace ClearDefaultAuthorizerResponse {
  export function isa(o: any): o is ClearDefaultAuthorizerResponse {
    return __isa(o, "ClearDefaultAuthorizerResponse");
  }
}

export interface CreateAuthorizerRequest {
  __type?: "CreateAuthorizerRequest";
  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn: string | undefined;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>Specifies whether AWS IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>The status of the create authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The name of the token key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the digital signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace CreateAuthorizerRequest {
  export function isa(o: any): o is CreateAuthorizerRequest {
    return __isa(o, "CreateAuthorizerRequest");
  }
}

export interface CreateAuthorizerResponse {
  __type?: "CreateAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's name.</p>
   */
  authorizerName?: string;
}

export namespace CreateAuthorizerResponse {
  export function isa(o: any): o is CreateAuthorizerResponse {
    return __isa(o, "CreateAuthorizerResponse");
  }
}

/**
 * <p>The input for the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrRequest {
  __type?: "CreateCertificateFromCsrRequest";
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
  export function isa(o: any): o is CreateCertificateFromCsrRequest {
    return __isa(o, "CreateCertificateFromCsrRequest");
  }
}

/**
 * <p>The output from the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrResponse {
  __type?: "CreateCertificateFromCsrResponse";
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
  export function isa(o: any): o is CreateCertificateFromCsrResponse {
    return __isa(o, "CreateCertificateFromCsrResponse");
  }
}

export interface CreateDomainConfigurationRequest {
  __type?: "CreateDomainConfigurationRequest";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN.
   *       This value is not required for AWS-managed domains.</p>
   */
  serverCertificateArns?: Array<string>;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority.
   *          This value is not required for AWS-managed domains.</p>
   */
  validationCertificateArn?: string;
}

export namespace CreateDomainConfigurationRequest {
  export function isa(o: any): o is CreateDomainConfigurationRequest {
    return __isa(o, "CreateDomainConfigurationRequest");
  }
}

export interface CreateDomainConfigurationResponse {
  __type?: "CreateDomainConfigurationResponse";
  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;
}

export namespace CreateDomainConfigurationResponse {
  export function isa(o: any): o is CreateDomainConfigurationResponse {
    return __isa(o, "CreateDomainConfigurationResponse");
  }
}

/**
 * <p>The input for the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateRequest {
  __type?: "CreateKeysAndCertificateRequest";
  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

export namespace CreateKeysAndCertificateRequest {
  export function isa(o: any): o is CreateKeysAndCertificateRequest {
    return __isa(o, "CreateKeysAndCertificateRequest");
  }
}

/**
 * <p>The output of the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateResponse {
  __type?: "CreateKeysAndCertificateResponse";
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. AWS IoT issues a default subject name for the certificate
   *          (for example, AWS IoT Certificate).</p>
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
  export function isa(o: any): o is CreateKeysAndCertificateResponse {
    return __isa(o, "CreateKeysAndCertificateResponse");
  }
}

/**
 * <p>The input for the CreatePolicy operation.</p>
 */
export interface CreatePolicyRequest {
  __type?: "CreatePolicyRequest";
  /**
   * <p>The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace CreatePolicyRequest {
  export function isa(o: any): o is CreatePolicyRequest {
    return __isa(o, "CreatePolicyRequest");
  }
}

/**
 * <p>The output from the CreatePolicy operation.</p>
 */
export interface CreatePolicyResponse {
  __type?: "CreatePolicyResponse";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
}

export namespace CreatePolicyResponse {
  export function isa(o: any): o is CreatePolicyResponse {
    return __isa(o, "CreatePolicyResponse");
  }
}

/**
 * <p>The input for the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionRequest {
  __type?: "CreatePolicyVersionRequest";
  /**
   * <p>The JSON document that describes the policy. Minimum length of 1. Maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>Specifies whether the policy version is set as the default. When this parameter is
   *          true, the new policy version becomes the operative version (that is, the version that is in
   *          effect for the certificates to which the policy is attached).</p>
   */
  setAsDefault?: boolean;
}

export namespace CreatePolicyVersionRequest {
  export function isa(o: any): o is CreatePolicyVersionRequest {
    return __isa(o, "CreatePolicyVersionRequest");
  }
}

/**
 * <p>The output of the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionResponse {
  __type?: "CreatePolicyVersionResponse";
  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

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

export namespace CreatePolicyVersionResponse {
  export function isa(o: any): o is CreatePolicyVersionResponse {
    return __isa(o, "CreatePolicyVersionResponse");
  }
}

export interface CreateProvisioningClaimRequest {
  __type?: "CreateProvisioningClaimRequest";
  /**
   * <p>The name of the provisioning template to use.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningClaimRequest {
  export function isa(o: any): o is CreateProvisioningClaimRequest {
    return __isa(o, "CreateProvisioningClaimRequest");
  }
}

export interface CreateProvisioningClaimResponse {
  __type?: "CreateProvisioningClaimResponse";
  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The provisioning claim certificate.</p>
   */
  certificatePem?: string;

  /**
   * <p>The provisioning claim expiration time.</p>
   */
  expiration?: Date;

  /**
   * <p>The provisioning claim key pair.</p>
   */
  keyPair?: KeyPair;
}

export namespace CreateProvisioningClaimResponse {
  export function isa(o: any): o is CreateProvisioningClaimResponse {
    return __isa(o, "CreateProvisioningClaimResponse");
  }
}

export interface CreateProvisioningTemplateRequest {
  __type?: "CreateProvisioningTemplateRequest";
  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

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
   * <p>Metadata which can be used to manage the fleet provisioning template.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Array<Tag>;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningTemplateRequest {
  export function isa(o: any): o is CreateProvisioningTemplateRequest {
    return __isa(o, "CreateProvisioningTemplateRequest");
  }
}

export interface CreateProvisioningTemplateResponse {
  __type?: "CreateProvisioningTemplateResponse";
  /**
   * <p>The default version of the fleet provisioning template.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace CreateProvisioningTemplateResponse {
  export function isa(o: any): o is CreateProvisioningTemplateResponse {
    return __isa(o, "CreateProvisioningTemplateResponse");
  }
}

export interface CreateProvisioningTemplateVersionRequest {
  __type?: "CreateProvisioningTemplateVersionRequest";
  /**
   * <p>Sets a fleet provision template version as the default version.</p>
   */
  setAsDefault?: boolean;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningTemplateVersionRequest {
  export function isa(o: any): o is CreateProvisioningTemplateVersionRequest {
    return __isa(o, "CreateProvisioningTemplateVersionRequest");
  }
}

export interface CreateProvisioningTemplateVersionResponse {
  __type?: "CreateProvisioningTemplateVersionResponse";
  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;

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
}

export namespace CreateProvisioningTemplateVersionResponse {
  export function isa(o: any): o is CreateProvisioningTemplateVersionResponse {
    return __isa(o, "CreateProvisioningTemplateVersionResponse");
  }
}

export interface CreateRoleAliasRequest {
  __type?: "CreateRoleAliasRequest";
  /**
   * <p>How long (in seconds) the credentials will be valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The role alias that points to a role ARN. This allows you to change the role without
   *          having to update the device.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn: string | undefined;
}

export namespace CreateRoleAliasRequest {
  export function isa(o: any): o is CreateRoleAliasRequest {
    return __isa(o, "CreateRoleAliasRequest");
  }
}

export interface CreateRoleAliasResponse {
  __type?: "CreateRoleAliasResponse";
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
  export function isa(o: any): o is CreateRoleAliasResponse {
    return __isa(o, "CreateRoleAliasResponse");
  }
}

export interface DeleteAuthorizerRequest {
  __type?: "DeleteAuthorizerRequest";
  /**
   * <p>The name of the authorizer to delete.</p>
   */
  authorizerName: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  export function isa(o: any): o is DeleteAuthorizerRequest {
    return __isa(o, "DeleteAuthorizerRequest");
  }
}

export interface DeleteAuthorizerResponse {
  __type?: "DeleteAuthorizerResponse";
}

export namespace DeleteAuthorizerResponse {
  export function isa(o: any): o is DeleteAuthorizerResponse {
    return __isa(o, "DeleteAuthorizerResponse");
  }
}

/**
 * <p>Input for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateRequest {
  __type?: "DeleteCACertificateRequest";
  /**
   * <p>The ID of the certificate to delete. (The last part of the certificate ARN contains
   *          the certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DeleteCACertificateRequest {
  export function isa(o: any): o is DeleteCACertificateRequest {
    return __isa(o, "DeleteCACertificateRequest");
  }
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateResponse {
  __type?: "DeleteCACertificateResponse";
}

export namespace DeleteCACertificateResponse {
  export function isa(o: any): o is DeleteCACertificateResponse {
    return __isa(o, "DeleteCACertificateResponse");
  }
}

/**
 * <p>The input for the DeleteCertificate operation.</p>
 */
export interface DeleteCertificateRequest {
  __type?: "DeleteCertificateRequest";
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
  export function isa(o: any): o is DeleteCertificateRequest {
    return __isa(o, "DeleteCertificateRequest");
  }
}

export interface DeleteDomainConfigurationRequest {
  __type?: "DeleteDomainConfigurationRequest";
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DeleteDomainConfigurationRequest {
  export function isa(o: any): o is DeleteDomainConfigurationRequest {
    return __isa(o, "DeleteDomainConfigurationRequest");
  }
}

export interface DeleteDomainConfigurationResponse {
  __type?: "DeleteDomainConfigurationResponse";
}

export namespace DeleteDomainConfigurationResponse {
  export function isa(o: any): o is DeleteDomainConfigurationResponse {
    return __isa(o, "DeleteDomainConfigurationResponse");
  }
}

/**
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  __type?: "DeletePolicyRequest";
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

export namespace DeletePolicyRequest {
  export function isa(o: any): o is DeletePolicyRequest {
    return __isa(o, "DeletePolicyRequest");
  }
}

/**
 * <p>The input for the DeletePolicyVersion operation.</p>
 */
export interface DeletePolicyVersionRequest {
  __type?: "DeletePolicyVersionRequest";
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
  export function isa(o: any): o is DeletePolicyVersionRequest {
    return __isa(o, "DeletePolicyVersionRequest");
  }
}

export interface DeleteProvisioningTemplateRequest {
  __type?: "DeleteProvisioningTemplateRequest";
  /**
   * <p>The name of the fleet provision template to delete.</p>
   */
  templateName: string | undefined;
}

export namespace DeleteProvisioningTemplateRequest {
  export function isa(o: any): o is DeleteProvisioningTemplateRequest {
    return __isa(o, "DeleteProvisioningTemplateRequest");
  }
}

export interface DeleteProvisioningTemplateResponse {
  __type?: "DeleteProvisioningTemplateResponse";
}

export namespace DeleteProvisioningTemplateResponse {
  export function isa(o: any): o is DeleteProvisioningTemplateResponse {
    return __isa(o, "DeleteProvisioningTemplateResponse");
  }
}

export interface DeleteProvisioningTemplateVersionRequest {
  __type?: "DeleteProvisioningTemplateVersionRequest";
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
  export function isa(o: any): o is DeleteProvisioningTemplateVersionRequest {
    return __isa(o, "DeleteProvisioningTemplateVersionRequest");
  }
}

export interface DeleteProvisioningTemplateVersionResponse {
  __type?: "DeleteProvisioningTemplateVersionResponse";
}

export namespace DeleteProvisioningTemplateVersionResponse {
  export function isa(o: any): o is DeleteProvisioningTemplateVersionResponse {
    return __isa(o, "DeleteProvisioningTemplateVersionResponse");
  }
}

/**
 * <p>The input for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeRequest {
  __type?: "DeleteRegistrationCodeRequest";
}

export namespace DeleteRegistrationCodeRequest {
  export function isa(o: any): o is DeleteRegistrationCodeRequest {
    return __isa(o, "DeleteRegistrationCodeRequest");
  }
}

/**
 * <p>The output for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeResponse {
  __type?: "DeleteRegistrationCodeResponse";
}

export namespace DeleteRegistrationCodeResponse {
  export function isa(o: any): o is DeleteRegistrationCodeResponse {
    return __isa(o, "DeleteRegistrationCodeResponse");
  }
}

export interface DeleteRoleAliasRequest {
  __type?: "DeleteRoleAliasRequest";
  /**
   * <p>The role alias to delete.</p>
   */
  roleAlias: string | undefined;
}

export namespace DeleteRoleAliasRequest {
  export function isa(o: any): o is DeleteRoleAliasRequest {
    return __isa(o, "DeleteRoleAliasRequest");
  }
}

export interface DeleteRoleAliasResponse {
  __type?: "DeleteRoleAliasResponse";
}

export namespace DeleteRoleAliasResponse {
  export function isa(o: any): o is DeleteRoleAliasResponse {
    return __isa(o, "DeleteRoleAliasResponse");
  }
}

/**
 * <p>Contains information that denied the authorization.</p>
 */
export interface Denied {
  __type?: "Denied";
  /**
   * <p>Information that explicitly denies the authorization. </p>
   */
  explicitDeny?: ExplicitDeny;

  /**
   * <p>Information that implicitly denies the authorization. When a policy doesn't
   *          explicitly deny or allow an action on a resource it is considered an implicit
   *          deny.</p>
   */
  implicitDeny?: ImplicitDeny;
}

export namespace Denied {
  export function isa(o: any): o is Denied {
    return __isa(o, "Denied");
  }
}

export interface DescribeAuthorizerRequest {
  __type?: "DescribeAuthorizerRequest";
  /**
   * <p>The name of the authorizer to describe.</p>
   */
  authorizerName: string | undefined;
}

export namespace DescribeAuthorizerRequest {
  export function isa(o: any): o is DescribeAuthorizerRequest {
    return __isa(o, "DescribeAuthorizerRequest");
  }
}

export interface DescribeAuthorizerResponse {
  __type?: "DescribeAuthorizerResponse";
  /**
   * <p>The authorizer description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeAuthorizerResponse {
  export function isa(o: any): o is DescribeAuthorizerResponse {
    return __isa(o, "DescribeAuthorizerResponse");
  }
}

/**
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
  __type?: "DescribeCACertificateRequest";
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCACertificateRequest {
  export function isa(o: any): o is DescribeCACertificateRequest {
    return __isa(o, "DescribeCACertificateRequest");
  }
}

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
  __type?: "DescribeCACertificateResponse";
  /**
   * <p>The CA certificate description.</p>
   */
  certificateDescription?: CACertificateDescription;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;
}

export namespace DescribeCACertificateResponse {
  export function isa(o: any): o is DescribeCACertificateResponse {
    return __isa(o, "DescribeCACertificateResponse");
  }
}

/**
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
  __type?: "DescribeCertificateRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCertificateRequest {
  export function isa(o: any): o is DescribeCertificateRequest {
    return __isa(o, "DescribeCertificateRequest");
  }
}

/**
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
  __type?: "DescribeCertificateResponse";
  /**
   * <p>The description of the certificate.</p>
   */
  certificateDescription?: CertificateDescription;
}

export namespace DescribeCertificateResponse {
  export function isa(o: any): o is DescribeCertificateResponse {
    return __isa(o, "DescribeCertificateResponse");
  }
}

export interface DescribeDefaultAuthorizerRequest {
  __type?: "DescribeDefaultAuthorizerRequest";
}

export namespace DescribeDefaultAuthorizerRequest {
  export function isa(o: any): o is DescribeDefaultAuthorizerRequest {
    return __isa(o, "DescribeDefaultAuthorizerRequest");
  }
}

export interface DescribeDefaultAuthorizerResponse {
  __type?: "DescribeDefaultAuthorizerResponse";
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeDefaultAuthorizerResponse {
  export function isa(o: any): o is DescribeDefaultAuthorizerResponse {
    return __isa(o, "DescribeDefaultAuthorizerResponse");
  }
}

export interface DescribeDomainConfigurationRequest {
  __type?: "DescribeDomainConfigurationRequest";
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DescribeDomainConfigurationRequest {
  export function isa(o: any): o is DescribeDomainConfigurationRequest {
    return __isa(o, "DescribeDomainConfigurationRequest");
  }
}

export interface DescribeDomainConfigurationResponse {
  __type?: "DescribeDomainConfigurationResponse";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The type of the domain.</p>
   */
  domainType?: DomainType | string;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   */
  serverCertificates?: Array<ServerCertificateSummary>;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DescribeDomainConfigurationResponse {
  export function isa(o: any): o is DescribeDomainConfigurationResponse {
    return __isa(o, "DescribeDomainConfigurationResponse");
  }
}

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
  __type?: "DescribeEndpointRequest";
  /**
   * <p>The endpoint type. Valid endpoint types include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   */
  endpointType?: string;
}

export namespace DescribeEndpointRequest {
  export function isa(o: any): o is DescribeEndpointRequest {
    return __isa(o, "DescribeEndpointRequest");
  }
}

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
  __type?: "DescribeEndpointResponse";
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;
}

export namespace DescribeEndpointResponse {
  export function isa(o: any): o is DescribeEndpointResponse {
    return __isa(o, "DescribeEndpointResponse");
  }
}

export interface DescribeProvisioningTemplateRequest {
  __type?: "DescribeProvisioningTemplateRequest";
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace DescribeProvisioningTemplateRequest {
  export function isa(o: any): o is DescribeProvisioningTemplateRequest {
    return __isa(o, "DescribeProvisioningTemplateRequest");
  }
}

export interface DescribeProvisioningTemplateResponse {
  __type?: "DescribeProvisioningTemplateResponse";
  /**
   * <p>The date when the fleet provisioning template was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The default fleet template version ID.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True if the fleet provisioning template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The date when the fleet provisioning template was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace DescribeProvisioningTemplateResponse {
  export function isa(o: any): o is DescribeProvisioningTemplateResponse {
    return __isa(o, "DescribeProvisioningTemplateResponse");
  }
}

export interface DescribeProvisioningTemplateVersionRequest {
  __type?: "DescribeProvisioningTemplateVersionRequest";
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId: number | undefined;
}

export namespace DescribeProvisioningTemplateVersionRequest {
  export function isa(o: any): o is DescribeProvisioningTemplateVersionRequest {
    return __isa(o, "DescribeProvisioningTemplateVersionRequest");
  }
}

export interface DescribeProvisioningTemplateVersionResponse {
  __type?: "DescribeProvisioningTemplateVersionResponse";
  /**
   * <p>The date when the fleet provisioning template version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template version.</p>
   */
  templateBody?: string;

  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId?: number;
}

export namespace DescribeProvisioningTemplateVersionResponse {
  export function isa(
    o: any
  ): o is DescribeProvisioningTemplateVersionResponse {
    return __isa(o, "DescribeProvisioningTemplateVersionResponse");
  }
}

export interface DescribeRoleAliasRequest {
  __type?: "DescribeRoleAliasRequest";
  /**
   * <p>The role alias to describe.</p>
   */
  roleAlias: string | undefined;
}

export namespace DescribeRoleAliasRequest {
  export function isa(o: any): o is DescribeRoleAliasRequest {
    return __isa(o, "DescribeRoleAliasRequest");
  }
}

export interface DescribeRoleAliasResponse {
  __type?: "DescribeRoleAliasResponse";
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: RoleAliasDescription;
}

export namespace DescribeRoleAliasResponse {
  export function isa(o: any): o is DescribeRoleAliasResponse {
    return __isa(o, "DescribeRoleAliasResponse");
  }
}

export interface DetachPolicyRequest {
  __type?: "DetachPolicyRequest";
  /**
   * <p>The policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The target from which the policy will be detached.</p>
   */
  target: string | undefined;
}

export namespace DetachPolicyRequest {
  export function isa(o: any): o is DetachPolicyRequest {
    return __isa(o, "DetachPolicyRequest");
  }
}

/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
  __type?: "DetachPrincipalPolicyRequest";
  /**
   * <p>The name of the policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>If the principal is a certificate, specify the certificate ARN. If the principal is
   *          an Amazon Cognito identity, specify the identity ID.</p>
   */
  principal: string | undefined;
}

export namespace DetachPrincipalPolicyRequest {
  export function isa(o: any): o is DetachPrincipalPolicyRequest {
    return __isa(o, "DetachPrincipalPolicyRequest");
  }
}

export enum DomainConfigurationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an AWS-managed domain
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
 *          <note>
 *             <p>The domain configuration feature is in public preview and is subject to change.</p>
 *          </note>
 */
export interface DomainConfigurationSummary {
  __type?: "DomainConfigurationSummary";
  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DomainConfigurationSummary {
  export function isa(o: any): o is DomainConfigurationSummary {
    return __isa(o, "DomainConfigurationSummary");
  }
}

export enum DomainType {
  AWS_MANAGED = "AWS_MANAGED",
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
  ENDPOINT = "ENDPOINT"
}

/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
  __type?: "EffectivePolicy";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace EffectivePolicy {
  export function isa(o: any): o is EffectivePolicy {
    return __isa(o, "EffectivePolicy");
  }
}

/**
 * <p>Information that explicitly denies authorization.</p>
 */
export interface ExplicitDeny {
  __type?: "ExplicitDeny";
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Array<Policy>;
}

export namespace ExplicitDeny {
  export function isa(o: any): o is ExplicitDeny {
    return __isa(o, "ExplicitDeny");
  }
}

export interface GetEffectivePoliciesRequest {
  __type?: "GetEffectivePoliciesRequest";
  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;
}

export namespace GetEffectivePoliciesRequest {
  export function isa(o: any): o is GetEffectivePoliciesRequest {
    return __isa(o, "GetEffectivePoliciesRequest");
  }
}

export interface GetEffectivePoliciesResponse {
  __type?: "GetEffectivePoliciesResponse";
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: Array<EffectivePolicy>;
}

export namespace GetEffectivePoliciesResponse {
  export function isa(o: any): o is GetEffectivePoliciesResponse {
    return __isa(o, "GetEffectivePoliciesResponse");
  }
}

/**
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
  __type?: "GetPolicyRequest";
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;
}

export namespace GetPolicyRequest {
  export function isa(o: any): o is GetPolicyRequest {
    return __isa(o, "GetPolicyRequest");
  }
}

/**
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
  __type?: "GetPolicyResponse";
  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The default policy version ID.</p>
   */
  defaultVersionId?: string;

  /**
   * <p>The generation ID of the policy.</p>
   */
  generationId?: string;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace GetPolicyResponse {
  export function isa(o: any): o is GetPolicyResponse {
    return __isa(o, "GetPolicyResponse");
  }
}

/**
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
  __type?: "GetPolicyVersionRequest";
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace GetPolicyVersionRequest {
  export function isa(o: any): o is GetPolicyVersionRequest {
    return __isa(o, "GetPolicyVersionRequest");
  }
}

/**
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
  __type?: "GetPolicyVersionResponse";
  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The generation ID of the policy version.</p>
   */
  generationId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
}

export namespace GetPolicyVersionResponse {
  export function isa(o: any): o is GetPolicyVersionResponse {
    return __isa(o, "GetPolicyVersionResponse");
  }
}

/**
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {
  __type?: "GetRegistrationCodeRequest";
}

export namespace GetRegistrationCodeRequest {
  export function isa(o: any): o is GetRegistrationCodeRequest {
    return __isa(o, "GetRegistrationCodeRequest");
  }
}

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
  __type?: "GetRegistrationCodeResponse";
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;
}

export namespace GetRegistrationCodeResponse {
  export function isa(o: any): o is GetRegistrationCodeResponse {
    return __isa(o, "GetRegistrationCodeResponse");
  }
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  __type?: "HttpContext";
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
}

export namespace HttpContext {
  export function isa(o: any): o is HttpContext {
    return __isa(o, "HttpContext");
  }
}

/**
 * <p>Information that implicitly denies authorization. When policy doesn't explicitly deny
 *          or allow an action on a resource it is considered an implicit deny.</p>
 */
export interface ImplicitDeny {
  __type?: "ImplicitDeny";
  /**
   * <p>Policies that don't contain a matching allow or deny statement for the specified
   *          action on the specified resource. </p>
   */
  policies?: Array<Policy>;
}

export namespace ImplicitDeny {
  export function isa(o: any): o is ImplicitDeny {
    return __isa(o, "ImplicitDeny");
  }
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  __type?: "KeyPair";
  /**
   * <p>The private key.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The public key.</p>
   */
  PublicKey?: string;
}

export namespace KeyPair {
  export function isa(o: any): o is KeyPair {
    return __isa(o, "KeyPair");
  }
}

export interface ListAttachedPoliciesRequest {
  __type?: "ListAttachedPoliciesRequest";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The group or principal for which the policies will be listed.</p>
   */
  target: string | undefined;
}

export namespace ListAttachedPoliciesRequest {
  export function isa(o: any): o is ListAttachedPoliciesRequest {
    return __isa(o, "ListAttachedPoliciesRequest");
  }
}

export interface ListAttachedPoliciesResponse {
  __type?: "ListAttachedPoliciesResponse";
  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policies.</p>
   */
  policies?: Array<Policy>;
}

export namespace ListAttachedPoliciesResponse {
  export function isa(o: any): o is ListAttachedPoliciesResponse {
    return __isa(o, "ListAttachedPoliciesResponse");
  }
}

export interface ListAuthorizersRequest {
  __type?: "ListAuthorizersRequest";
  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>The status of the list authorizers request.</p>
   */
  status?: AuthorizerStatus | string;
}

export namespace ListAuthorizersRequest {
  export function isa(o: any): o is ListAuthorizersRequest {
    return __isa(o, "ListAuthorizersRequest");
  }
}

export interface ListAuthorizersResponse {
  __type?: "ListAuthorizersResponse";
  /**
   * <p>The authorizers.</p>
   */
  authorizers?: Array<AuthorizerSummary>;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListAuthorizersResponse {
  export function isa(o: any): o is ListAuthorizersResponse {
    return __isa(o, "ListAuthorizersResponse");
  }
}

/**
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
  __type?: "ListCACertificatesRequest";
  /**
   * <p>Determines the order of the results.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCACertificatesRequest {
  export function isa(o: any): o is ListCACertificatesRequest {
    return __isa(o, "ListCACertificatesRequest");
  }
}

/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
  __type?: "ListCACertificatesResponse";
  /**
   * <p>The CA certificates registered in your AWS account.</p>
   */
  certificates?: Array<CACertificate>;

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;
}

export namespace ListCACertificatesResponse {
  export function isa(o: any): o is ListCACertificatesResponse {
    return __isa(o, "ListCACertificatesResponse");
  }
}

/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
  __type?: "ListCertificatesByCARequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   */
  caCertificateId: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCertificatesByCARequest {
  export function isa(o: any): o is ListCertificatesByCARequest {
    return __isa(o, "ListCertificatesByCARequest");
  }
}

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
  __type?: "ListCertificatesByCAResponse";
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   */
  certificates?: Array<Certificate>;

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesByCAResponse {
  export function isa(o: any): o is ListCertificatesByCAResponse {
    return __isa(o, "ListCertificatesByCAResponse");
  }
}

/**
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
  __type?: "ListCertificatesRequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCertificatesRequest {
  export function isa(o: any): o is ListCertificatesRequest {
    return __isa(o, "ListCertificatesRequest");
  }
}

/**
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
  __type?: "ListCertificatesResponse";
  /**
   * <p>The descriptions of the certificates.</p>
   */
  certificates?: Array<Certificate>;

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesResponse {
  export function isa(o: any): o is ListCertificatesResponse {
    return __isa(o, "ListCertificatesResponse");
  }
}

export interface ListDomainConfigurationsRequest {
  __type?: "ListDomainConfigurationsRequest";
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace ListDomainConfigurationsRequest {
  export function isa(o: any): o is ListDomainConfigurationsRequest {
    return __isa(o, "ListDomainConfigurationsRequest");
  }
}

export interface ListDomainConfigurationsResponse {
  __type?: "ListDomainConfigurationsResponse";
  /**
   * <p>A list of objects that contain summary information about the user's domain configurations.</p>
   */
  domainConfigurations?: Array<DomainConfigurationSummary>;

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListDomainConfigurationsResponse {
  export function isa(o: any): o is ListDomainConfigurationsResponse {
    return __isa(o, "ListDomainConfigurationsResponse");
  }
}

/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
  __type?: "ListOutgoingCertificatesRequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListOutgoingCertificatesRequest {
  export function isa(o: any): o is ListOutgoingCertificatesRequest {
    return __isa(o, "ListOutgoingCertificatesRequest");
  }
}

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
  __type?: "ListOutgoingCertificatesResponse";
  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: Array<OutgoingCertificate>;
}

export namespace ListOutgoingCertificatesResponse {
  export function isa(o: any): o is ListOutgoingCertificatesResponse {
    return __isa(o, "ListOutgoingCertificatesResponse");
  }
}

/**
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
  __type?: "ListPoliciesRequest";
  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListPoliciesRequest {
  export function isa(o: any): o is ListPoliciesRequest {
    return __isa(o, "ListPoliciesRequest");
  }
}

/**
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
  __type?: "ListPoliciesResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The descriptions of the policies.</p>
   */
  policies?: Array<Policy>;
}

export namespace ListPoliciesResponse {
  export function isa(o: any): o is ListPoliciesResponse {
    return __isa(o, "ListPoliciesResponse");
  }
}

/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
  __type?: "ListPolicyPrincipalsRequest";
  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyPrincipalsRequest {
  export function isa(o: any): o is ListPolicyPrincipalsRequest {
    return __isa(o, "ListPolicyPrincipalsRequest");
  }
}

/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
  __type?: "ListPolicyPrincipalsResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The descriptions of the principals.</p>
   */
  principals?: Array<string>;
}

export namespace ListPolicyPrincipalsResponse {
  export function isa(o: any): o is ListPolicyPrincipalsResponse {
    return __isa(o, "ListPolicyPrincipalsResponse");
  }
}

/**
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
  __type?: "ListPolicyVersionsRequest";
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyVersionsRequest {
  export function isa(o: any): o is ListPolicyVersionsRequest {
    return __isa(o, "ListPolicyVersionsRequest");
  }
}

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
  __type?: "ListPolicyVersionsResponse";
  /**
   * <p>The policy versions.</p>
   */
  policyVersions?: Array<PolicyVersion>;
}

export namespace ListPolicyVersionsResponse {
  export function isa(o: any): o is ListPolicyVersionsResponse {
    return __isa(o, "ListPolicyVersionsResponse");
  }
}

/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
  __type?: "ListPrincipalPoliciesRequest";
  /**
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalPoliciesRequest {
  export function isa(o: any): o is ListPrincipalPoliciesRequest {
    return __isa(o, "ListPrincipalPoliciesRequest");
  }
}

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
  __type?: "ListPrincipalPoliciesResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policies.</p>
   */
  policies?: Array<Policy>;
}

export namespace ListPrincipalPoliciesResponse {
  export function isa(o: any): o is ListPrincipalPoliciesResponse {
    return __isa(o, "ListPrincipalPoliciesResponse");
  }
}

export interface ListProvisioningTemplateVersionsRequest {
  __type?: "ListProvisioningTemplateVersionsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace ListProvisioningTemplateVersionsRequest {
  export function isa(o: any): o is ListProvisioningTemplateVersionsRequest {
    return __isa(o, "ListProvisioningTemplateVersionsRequest");
  }
}

export interface ListProvisioningTemplateVersionsResponse {
  __type?: "ListProvisioningTemplateVersionsResponse";
  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of fleet provisioning template versions.</p>
   */
  versions?: Array<ProvisioningTemplateVersionSummary>;
}

export namespace ListProvisioningTemplateVersionsResponse {
  export function isa(o: any): o is ListProvisioningTemplateVersionsResponse {
    return __isa(o, "ListProvisioningTemplateVersionsResponse");
  }
}

export interface ListProvisioningTemplatesRequest {
  __type?: "ListProvisioningTemplatesRequest";
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
  export function isa(o: any): o is ListProvisioningTemplatesRequest {
    return __isa(o, "ListProvisioningTemplatesRequest");
  }
}

export interface ListProvisioningTemplatesResponse {
  __type?: "ListProvisioningTemplatesResponse";
  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of fleet provisioning templates</p>
   */
  templates?: Array<ProvisioningTemplateSummary>;
}

export namespace ListProvisioningTemplatesResponse {
  export function isa(o: any): o is ListProvisioningTemplatesResponse {
    return __isa(o, "ListProvisioningTemplatesResponse");
  }
}

export interface ListRoleAliasesRequest {
  __type?: "ListRoleAliasesRequest";
  /**
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

export namespace ListRoleAliasesRequest {
  export function isa(o: any): o is ListRoleAliasesRequest {
    return __isa(o, "ListRoleAliasesRequest");
  }
}

export interface ListRoleAliasesResponse {
  __type?: "ListRoleAliasesResponse";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The role aliases.</p>
   */
  roleAliases?: Array<string>;
}

export namespace ListRoleAliasesResponse {
  export function isa(o: any): o is ListRoleAliasesResponse {
    return __isa(o, "ListRoleAliasesResponse");
  }
}

export interface ListTargetsForPolicyRequest {
  __type?: "ListTargetsForPolicyRequest";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListTargetsForPolicyRequest {
  export function isa(o: any): o is ListTargetsForPolicyRequest {
    return __isa(o, "ListTargetsForPolicyRequest");
  }
}

export interface ListTargetsForPolicyResponse {
  __type?: "ListTargetsForPolicyResponse";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policy targets.</p>
   */
  targets?: Array<string>;
}

export namespace ListTargetsForPolicyResponse {
  export function isa(o: any): o is ListTargetsForPolicyResponse {
    return __isa(o, "ListTargetsForPolicyResponse");
  }
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  __type?: "MqttContext";
  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;
}

export namespace MqttContext {
  export function isa(o: any): o is MqttContext {
    return __isa(o, "MqttContext");
  }
}

/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
  __type?: "OutgoingCertificate";
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The AWS account to which the transfer was made.</p>
   */
  transferredTo?: string;
}

export namespace OutgoingCertificate {
  export function isa(o: any): o is OutgoingCertificate {
    return __isa(o, "OutgoingCertificate");
  }
}

/**
 * <p>Describes an AWS IoT policy.</p>
 */
export interface Policy {
  __type?: "Policy";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace Policy {
  export function isa(o: any): o is Policy {
    return __isa(o, "Policy");
  }
}

/**
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  __type?: "PolicyVersion";
  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;
}

export namespace PolicyVersion {
  export function isa(o: any): o is PolicyVersion {
    return __isa(o, "PolicyVersion");
  }
}

/**
 * <p>A summary of information about a fleet provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
  __type?: "ProvisioningTemplateSummary";
  /**
   * <p>The date when the fleet provisioning template summary was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The date when the fleet provisioning template summary was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace ProvisioningTemplateSummary {
  export function isa(o: any): o is ProvisioningTemplateSummary {
    return __isa(o, "ProvisioningTemplateSummary");
  }
}

/**
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
  __type?: "ProvisioningTemplateVersionSummary";
  /**
   * <p>The date when the fleet provisioning template version was created</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The ID of the fleet privisioning template version.</p>
   */
  versionId?: number;
}

export namespace ProvisioningTemplateVersionSummary {
  export function isa(o: any): o is ProvisioningTemplateVersionSummary {
    return __isa(o, "ProvisioningTemplateVersionSummary");
  }
}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  __type?: "RegisterCACertificateRequest";
  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The private key verification certificate.</p>
   */
  verificationCertificate: string | undefined;
}

export namespace RegisterCACertificateRequest {
  export function isa(o: any): o is RegisterCACertificateRequest {
    return __isa(o, "RegisterCACertificateRequest");
  }
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  __type?: "RegisterCACertificateResponse";
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
  export function isa(o: any): o is RegisterCACertificateResponse {
    return __isa(o, "RegisterCACertificateResponse");
  }
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  __type?: "RegisterCertificateRequest";
  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateRequest {
  export function isa(o: any): o is RegisterCertificateRequest {
    return __isa(o, "RegisterCertificateRequest");
  }
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  __type?: "RegisterCertificateResponse";
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
  export function isa(o: any): o is RegisterCertificateResponse {
    return __isa(o, "RegisterCertificateResponse");
  }
}

export interface RegisterThingRequest {
  __type?: "RegisterThingRequest";
  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html">Programmatic
   *             Provisioning</a> for more information.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html">Programmatic
   *             Provisioning</a> for more information.</p>
   */
  templateBody: string | undefined;
}

export namespace RegisterThingRequest {
  export function isa(o: any): o is RegisterThingRequest {
    return __isa(o, "RegisterThingRequest");
  }
}

export interface RegisterThingResponse {
  __type?: "RegisterThingResponse";
  /**
   * <p>.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: { [key: string]: string };
}

export namespace RegisterThingResponse {
  export function isa(o: any): o is RegisterThingResponse {
    return __isa(o, "RegisterThingResponse");
  }
}

/**
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
  __type?: "RegistrationConfig";
  /**
   * <p>The ARN of the role.</p>
   */
  roleArn?: string;

  /**
   * <p>The template body.</p>
   */
  templateBody?: string;
}

export namespace RegistrationConfig {
  export function isa(o: any): o is RegistrationConfig {
    return __isa(o, "RegistrationConfig");
  }
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  __type?: "RejectCertificateTransferRequest";
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
  export function isa(o: any): o is RejectCertificateTransferRequest {
    return __isa(o, "RejectCertificateTransferRequest");
  }
}

/**
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
  __type?: "RoleAliasDescription";
  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

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
}

export namespace RoleAliasDescription {
  export function isa(o: any): o is RoleAliasDescription {
    return __isa(o, "RoleAliasDescription");
  }
}

export enum ServerCertificateStatus {
  INVALID = "INVALID",
  VALID = "VALID"
}

/**
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
  __type?: "ServerCertificateSummary";
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
  export function isa(o: any): o is ServerCertificateSummary {
    return __isa(o, "ServerCertificateSummary");
  }
}

export enum ServiceType {
  CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER",
  DATA = "DATA",
  JOBS = "JOBS"
}

export interface SetDefaultAuthorizerRequest {
  __type?: "SetDefaultAuthorizerRequest";
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

export namespace SetDefaultAuthorizerRequest {
  export function isa(o: any): o is SetDefaultAuthorizerRequest {
    return __isa(o, "SetDefaultAuthorizerRequest");
  }
}

export interface SetDefaultAuthorizerResponse {
  __type?: "SetDefaultAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace SetDefaultAuthorizerResponse {
  export function isa(o: any): o is SetDefaultAuthorizerResponse {
    return __isa(o, "SetDefaultAuthorizerResponse");
  }
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  __type?: "SetDefaultPolicyVersionRequest";
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
  export function isa(o: any): o is SetDefaultPolicyVersionRequest {
    return __isa(o, "SetDefaultPolicyVersionRequest");
  }
}

export interface TestAuthorizationRequest {
  __type?: "TestAuthorizationRequest";
  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: Array<AuthInfo> | undefined;

  /**
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: Array<string>;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: Array<string>;

  /**
   * <p>The principal.</p>
   */
  principal?: string;
}

export namespace TestAuthorizationRequest {
  export function isa(o: any): o is TestAuthorizationRequest {
    return __isa(o, "TestAuthorizationRequest");
  }
}

export interface TestAuthorizationResponse {
  __type?: "TestAuthorizationResponse";
  /**
   * <p>The authentication results.</p>
   */
  authResults?: Array<AuthResult>;
}

export namespace TestAuthorizationResponse {
  export function isa(o: any): o is TestAuthorizationResponse {
    return __isa(o, "TestAuthorizationResponse");
  }
}

export interface TestInvokeAuthorizerRequest {
  __type?: "TestInvokeAuthorizerRequest";
  /**
   * <p>The custom authorizer name.</p>
   */
  authorizerName: string | undefined;

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

  /**
   * <p>The token returned by your custom authentication service.</p>
   */
  token?: string;

  /**
   * <p>The signature made with the token and your custom authentication service's private
   *          key.</p>
   */
  tokenSignature?: string;
}

export namespace TestInvokeAuthorizerRequest {
  export function isa(o: any): o is TestInvokeAuthorizerRequest {
    return __isa(o, "TestInvokeAuthorizerRequest");
  }
}

export interface TestInvokeAuthorizerResponse {
  __type?: "TestInvokeAuthorizerResponse";
  /**
   * <p>The number of seconds after which the connection is terminated.</p>
   */
  disconnectAfterInSeconds?: number;

  /**
   * <p>True if the token is authenticated, otherwise false.</p>
   */
  isAuthenticated?: boolean;

  /**
   * <p>IAM policy documents.</p>
   */
  policyDocuments?: Array<string>;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   */
  refreshAfterInSeconds?: number;
}

export namespace TestInvokeAuthorizerResponse {
  export function isa(o: any): o is TestInvokeAuthorizerResponse {
    return __isa(o, "TestInvokeAuthorizerResponse");
  }
}

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  __type?: "TlsContext";
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
}

export namespace TlsContext {
  export function isa(o: any): o is TlsContext {
    return __isa(o, "TlsContext");
  }
}

/**
 * <p>The input for the TransferCertificate operation.</p>
 */
export interface TransferCertificateRequest {
  __type?: "TransferCertificateRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The AWS account.</p>
   */
  targetAwsAccount: string | undefined;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

export namespace TransferCertificateRequest {
  export function isa(o: any): o is TransferCertificateRequest {
    return __isa(o, "TransferCertificateRequest");
  }
}

/**
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateResponse {
  __type?: "TransferCertificateResponse";
  /**
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;
}

export namespace TransferCertificateResponse {
  export function isa(o: any): o is TransferCertificateResponse {
    return __isa(o, "TransferCertificateResponse");
  }
}

/**
 * <p>Data used to transfer a certificate to an AWS account.</p>
 */
export interface TransferData {
  __type?: "TransferData";
  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

export namespace TransferData {
  export function isa(o: any): o is TransferData {
    return __isa(o, "TransferData");
  }
}

export interface UpdateAuthorizerRequest {
  __type?: "UpdateAuthorizerRequest";
  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The key used to extract the token from the HTTP headers. </p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the token signature.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace UpdateAuthorizerRequest {
  export function isa(o: any): o is UpdateAuthorizerRequest {
    return __isa(o, "UpdateAuthorizerRequest");
  }
}

export interface UpdateAuthorizerResponse {
  __type?: "UpdateAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace UpdateAuthorizerResponse {
  export function isa(o: any): o is UpdateAuthorizerResponse {
    return __isa(o, "UpdateAuthorizerResponse");
  }
}

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateRequest {
  __type?: "UpdateCACertificateRequest";
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus?: CACertificateStatus | string;

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
  export function isa(o: any): o is UpdateCACertificateRequest {
    return __isa(o, "UpdateCACertificateRequest");
  }
}

/**
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateRequest {
  __type?: "UpdateCertificateRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER will result
   *          in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It
   *          is not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | string | undefined;
}

export namespace UpdateCertificateRequest {
  export function isa(o: any): o is UpdateCertificateRequest {
    return __isa(o, "UpdateCertificateRequest");
  }
}

export interface UpdateDomainConfigurationRequest {
  __type?: "UpdateDomainConfigurationRequest";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The name of the domain configuration to be updated.</p>
   */
  domainConfigurationName: string | undefined;

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
  export function isa(o: any): o is UpdateDomainConfigurationRequest {
    return __isa(o, "UpdateDomainConfigurationRequest");
  }
}

export interface UpdateDomainConfigurationResponse {
  __type?: "UpdateDomainConfigurationResponse";
  /**
   * <p>The ARN of the domain configuration that was updated.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration that was updated.</p>
   */
  domainConfigurationName?: string;
}

export namespace UpdateDomainConfigurationResponse {
  export function isa(o: any): o is UpdateDomainConfigurationResponse {
    return __isa(o, "UpdateDomainConfigurationResponse");
  }
}

export interface UpdateProvisioningTemplateRequest {
  __type?: "UpdateProvisioningTemplateRequest";
  /**
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace UpdateProvisioningTemplateRequest {
  export function isa(o: any): o is UpdateProvisioningTemplateRequest {
    return __isa(o, "UpdateProvisioningTemplateRequest");
  }
}

export interface UpdateProvisioningTemplateResponse {
  __type?: "UpdateProvisioningTemplateResponse";
}

export namespace UpdateProvisioningTemplateResponse {
  export function isa(o: any): o is UpdateProvisioningTemplateResponse {
    return __isa(o, "UpdateProvisioningTemplateResponse");
  }
}

export interface UpdateRoleAliasRequest {
  __type?: "UpdateRoleAliasRequest";
  /**
   * <p>The number of seconds the credential will be valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;
}

export namespace UpdateRoleAliasRequest {
  export function isa(o: any): o is UpdateRoleAliasRequest {
    return __isa(o, "UpdateRoleAliasRequest");
  }
}

export interface UpdateRoleAliasResponse {
  __type?: "UpdateRoleAliasResponse";
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
  export function isa(o: any): o is UpdateRoleAliasResponse {
    return __isa(o, "UpdateRoleAliasResponse");
  }
}

export interface DescribeIndexRequest {
  __type?: "DescribeIndexRequest";
  /**
   * <p>The index name.</p>
   */
  indexName: string | undefined;
}

export namespace DescribeIndexRequest {
  export function isa(o: any): o is DescribeIndexRequest {
    return __isa(o, "DescribeIndexRequest");
  }
}

export interface DescribeIndexResponse {
  __type?: "DescribeIndexResponse";
  /**
   * <p>The index name.</p>
   */
  indexName?: string;

  /**
   * <p>The index status.</p>
   */
  indexStatus?: IndexStatus | string;

  /**
   * <p>Contains a value that specifies the type of indexing performed. Valid values
   *       are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains only registry data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and
   *           thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry
   *           data, shadow data, and thing connectivity status data.</p>
   *             </li>
   *          </ul>
   */
  schema?: string;
}

export namespace DescribeIndexResponse {
  export function isa(o: any): o is DescribeIndexResponse {
    return __isa(o, "DescribeIndexResponse");
  }
}

/**
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
  __type?: "Field";
  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The datatype of the field.</p>
   */
  type?: FieldType | string;
}

export namespace Field {
  export function isa(o: any): o is Field {
    return __isa(o, "Field");
  }
}

export enum FieldType {
  BOOLEAN = "Boolean",
  NUMBER = "Number",
  STRING = "String"
}

export interface GetCardinalityRequest {
  __type?: "GetCardinalityRequest";
  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetCardinalityRequest {
  export function isa(o: any): o is GetCardinalityRequest {
    return __isa(o, "GetCardinalityRequest");
  }
}

export interface GetCardinalityResponse {
  __type?: "GetCardinalityResponse";
  /**
   * <p>The approximate count of unique values that match the query.</p>
   */
  cardinality?: number;
}

export namespace GetCardinalityResponse {
  export function isa(o: any): o is GetCardinalityResponse {
    return __isa(o, "GetCardinalityResponse");
  }
}

export interface GetIndexingConfigurationRequest {
  __type?: "GetIndexingConfigurationRequest";
}

export namespace GetIndexingConfigurationRequest {
  export function isa(o: any): o is GetIndexingConfigurationRequest {
    return __isa(o, "GetIndexingConfigurationRequest");
  }
}

export interface GetIndexingConfigurationResponse {
  __type?: "GetIndexingConfigurationResponse";
  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}

export namespace GetIndexingConfigurationResponse {
  export function isa(o: any): o is GetIndexingConfigurationResponse {
    return __isa(o, "GetIndexingConfigurationResponse");
  }
}

export interface GetPercentilesRequest {
  __type?: "GetPercentilesRequest";
  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The percentile groups returned.</p>
   */
  percents?: Array<number>;

  /**
   * <p>The query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetPercentilesRequest {
  export function isa(o: any): o is GetPercentilesRequest {
    return __isa(o, "GetPercentilesRequest");
  }
}

export interface GetPercentilesResponse {
  __type?: "GetPercentilesResponse";
  /**
   * <p>The percentile values of the aggregated fields.</p>
   */
  percentiles?: Array<PercentPair>;
}

export namespace GetPercentilesResponse {
  export function isa(o: any): o is GetPercentilesResponse {
    return __isa(o, "GetPercentilesResponse");
  }
}

export interface GetStatisticsRequest {
  __type?: "GetStatisticsRequest";
  /**
   * <p>The aggregation field name.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your AWS account.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;
}

export namespace GetStatisticsRequest {
  export function isa(o: any): o is GetStatisticsRequest {
    return __isa(o, "GetStatisticsRequest");
  }
}

export interface GetStatisticsResponse {
  __type?: "GetStatisticsResponse";
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   */
  statistics?: Statistics;
}

export namespace GetStatisticsResponse {
  export function isa(o: any): o is GetStatisticsResponse {
    return __isa(o, "GetStatisticsResponse");
  }
}

/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException
  extends __SmithyException,
    $MetadataBearer {
  name: "IndexNotReadyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace IndexNotReadyException {
  export function isa(o: any): o is IndexNotReadyException {
    return __isa(o, "IndexNotReadyException");
  }
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING"
}

export interface ListIndicesRequest {
  __type?: "ListIndicesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListIndicesRequest {
  export function isa(o: any): o is ListIndicesRequest {
    return __isa(o, "ListIndicesRequest");
  }
}

export interface ListIndicesResponse {
  __type?: "ListIndicesResponse";
  /**
   * <p>The index names.</p>
   */
  indexNames?: Array<string>;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListIndicesResponse {
  export function isa(o: any): o is ListIndicesResponse {
    return __isa(o, "ListIndicesResponse");
  }
}

/**
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
  __type?: "PercentPair";
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
  export function isa(o: any): o is PercentPair {
    return __isa(o, "PercentPair");
  }
}

export interface SearchIndexRequest {
  __type?: "SearchIndexRequest";
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace SearchIndexRequest {
  export function isa(o: any): o is SearchIndexRequest {
    return __isa(o, "SearchIndexRequest");
  }
}

export interface SearchIndexResponse {
  __type?: "SearchIndexResponse";
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: Array<ThingGroupDocument>;

  /**
   * <p>The things that match the search query.</p>
   */
  things?: Array<ThingDocument>;
}

export namespace SearchIndexResponse {
  export function isa(o: any): o is SearchIndexResponse {
    return __isa(o, "SearchIndexResponse");
  }
}

/**
 * <p>A map of key-value pairs for all supported statistics. Currently, only count is
 *       supported.</p>
 */
export interface Statistics {
  __type?: "Statistics";
  /**
   * <p>The average of the aggregated field values.</p>
   */
  average?: number;

  /**
   * <p>The count of things that match the query.</p>
   */
  count?: number;

  /**
   * <p>The maximum aggregated field value.</p>
   */
  maximum?: number;

  /**
   * <p>The minimum aggregated field value.</p>
   */
  minimum?: number;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   */
  stdDeviation?: number;

  /**
   * <p>The sum of the aggregated field values.</p>
   */
  sum?: number;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The variance of the aggregated field values.</p>
   */
  variance?: number;
}

export namespace Statistics {
  export function isa(o: any): o is Statistics {
    return __isa(o, "Statistics");
  }
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  __type?: "ThingConnectivity";
  /**
   * <p>True if the thing is connected to the AWS IoT service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for more than a few weeks, the time value might be missing.</p>
   */
  timestamp?: number;
}

export namespace ThingConnectivity {
  export function isa(o: any): o is ThingConnectivity {
    return __isa(o, "ThingConnectivity");
  }
}

export enum ThingConnectivityIndexingMode {
  OFF = "OFF",
  STATUS = "STATUS"
}

/**
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  __type?: "ThingDocument";
  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: ThingConnectivity;

  /**
   * <p>The shadow.</p>
   */
  shadow?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: Array<string>;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;
}

export namespace ThingDocument {
  export function isa(o: any): o is ThingDocument {
    return __isa(o, "ThingDocument");
  }
}

/**
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  __type?: "ThingGroupDocument";
  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: Array<string>;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace ThingGroupDocument {
  export function isa(o: any): o is ThingGroupDocument {
    return __isa(o, "ThingGroupDocument");
  }
}

/**
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
  __type?: "ThingGroupIndexingConfiguration";
  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   */
  customFields?: Array<Field>;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Array<Field>;

  /**
   * <p>Thing group indexing mode.</p>
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;
}

export namespace ThingGroupIndexingConfiguration {
  export function isa(o: any): o is ThingGroupIndexingConfiguration {
    return __isa(o, "ThingGroupIndexingConfiguration");
  }
}

export enum ThingGroupIndexingMode {
  OFF = "OFF",
  ON = "ON"
}

/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
  __type?: "ThingIndexingConfiguration";
  /**
   * <p>Contains custom field names and their data type.</p>
   */
  customFields?: Array<Field>;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Array<Field>;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, thingIndexMode must not be set to OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;

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
}

export namespace ThingIndexingConfiguration {
  export function isa(o: any): o is ThingIndexingConfiguration {
    return __isa(o, "ThingIndexingConfiguration");
  }
}

export enum ThingIndexingMode {
  OFF = "OFF",
  REGISTRY = "REGISTRY",
  REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW"
}

export interface UpdateIndexingConfigurationRequest {
  __type?: "UpdateIndexingConfigurationRequest";
  /**
   * <p>Thing group indexing configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}

export namespace UpdateIndexingConfigurationRequest {
  export function isa(o: any): o is UpdateIndexingConfigurationRequest {
    return __isa(o, "UpdateIndexingConfigurationRequest");
  }
}

export interface UpdateIndexingConfigurationResponse {
  __type?: "UpdateIndexingConfigurationResponse";
}

export namespace UpdateIndexingConfigurationResponse {
  export function isa(o: any): o is UpdateIndexingConfigurationResponse {
    return __isa(o, "UpdateIndexingConfigurationResponse");
  }
}

export enum AbortAction {
  CANCEL = "CANCEL"
}

/**
 * <p>Details of abort criteria to abort the job.</p>
 */
export interface AbortConfig {
  __type?: "AbortConfig";
  /**
   * <p>The list of abort criteria to define rules to abort the job.</p>
   */
  criteriaList: Array<AbortCriteria> | undefined;
}

export namespace AbortConfig {
  export function isa(o: any): o is AbortConfig {
    return __isa(o, "AbortConfig");
  }
}

/**
 * <p>Details of abort criteria to define rules to abort the job.</p>
 */
export interface AbortCriteria {
  __type?: "AbortCriteria";
  /**
   * <p>The type of abort action to initiate a job abort.</p>
   */
  action: AbortAction | string | undefined;

  /**
   * <p>The type of job execution failure to define a rule to initiate a job abort.</p>
   */
  failureType: JobExecutionFailureType | string | undefined;

  /**
   * <p>Minimum number of executed things before evaluating an abort rule.</p>
   */
  minNumberOfExecutedThings: number | undefined;

  /**
   * <p>The threshold as a percentage of the total number of executed things that will initiate a job abort.</p>
   *         <p>AWS IoT supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).</p>
   */
  thresholdPercentage: number | undefined;
}

export namespace AbortCriteria {
  export function isa(o: any): o is AbortCriteria {
    return __isa(o, "AbortCriteria");
  }
}

export interface AssociateTargetsWithJobRequest {
  __type?: "AssociateTargetsWithJobRequest";
  /**
   * <p>An optional comment string describing why the job was associated with the targets.</p>
   */
  comment?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A list of thing group ARNs that define the targets of the job.</p>
   */
  targets: Array<string> | undefined;
}

export namespace AssociateTargetsWithJobRequest {
  export function isa(o: any): o is AssociateTargetsWithJobRequest {
    return __isa(o, "AssociateTargetsWithJobRequest");
  }
}

export interface AssociateTargetsWithJobResponse {
  __type?: "AssociateTargetsWithJobResponse";
  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>An ARN identifying the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace AssociateTargetsWithJobResponse {
  export function isa(o: any): o is AssociateTargetsWithJobResponse {
    return __isa(o, "AssociateTargetsWithJobResponse");
  }
}

export interface CancelJobExecutionRequest {
  __type?: "CancelJobExecutionRequest";
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
   * <p>The ID of the job to be canceled.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If not
   *           specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
   * <p>The name of the thing whose execution of the job will be canceled.</p>
   */
  thingName: string | undefined;
}

export namespace CancelJobExecutionRequest {
  export function isa(o: any): o is CancelJobExecutionRequest {
    return __isa(o, "CancelJobExecutionRequest");
  }
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
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

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional)A reason code string that explains why the job was canceled.</p>
   */
  reasonCode?: string;
}

export namespace CancelJobRequest {
  export function isa(o: any): o is CancelJobRequest {
    return __isa(o, "CancelJobRequest");
  }
}

export interface CancelJobResponse {
  __type?: "CancelJobResponse";
  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace CancelJobResponse {
  export function isa(o: any): o is CancelJobResponse {
    return __isa(o, "CancelJobResponse");
  }
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>The job document.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  document?: string;

  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric
   *             characters, "-" and "_" are valid for use here.</p>
   */
  jobId: string | undefined;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Metadata which can be used to manage the job.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of things and thing groups to which the job should be sent.</p>
   */
  targets: Array<string> | undefined;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the time expires, it will be
   *            automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace CreateJobRequest {
  export function isa(o: any): o is CreateJobRequest {
    return __isa(o, "CreateJobRequest");
  }
}

export interface CreateJobResponse {
  __type?: "CreateJobResponse";
  /**
   * <p>The job description.</p>
   */
  description?: string;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job.</p>
   */
  jobId?: string;
}

export namespace CreateJobResponse {
  export function isa(o: any): o is CreateJobResponse {
    return __isa(o, "CreateJobResponse");
  }
}

export interface DeleteJobExecutionRequest {
  __type?: "DeleteJobExecutionRequest";
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
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   */
  thingName: string | undefined;
}

export namespace DeleteJobExecutionRequest {
  export function isa(o: any): o is DeleteJobExecutionRequest {
    return __isa(o, "DeleteJobExecutionRequest");
  }
}

export interface DeleteJobRequest {
  __type?: "DeleteJobRequest";
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
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new job.
   *         However, this is not recommended, and you must ensure that your devices are not using the
   *         jobId to refer to the deleted job.</p>
   */
  jobId: string | undefined;
}

export namespace DeleteJobRequest {
  export function isa(o: any): o is DeleteJobRequest {
    return __isa(o, "DeleteJobRequest");
  }
}

export interface DescribeJobExecutionRequest {
  __type?: "DescribeJobExecutionRequest";
  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
   *             on a particular device.</p>
   */
  executionNumber?: number;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeJobExecutionRequest {
  export function isa(o: any): o is DescribeJobExecutionRequest {
    return __isa(o, "DescribeJobExecutionRequest");
  }
}

export interface DescribeJobExecutionResponse {
  __type?: "DescribeJobExecutionResponse";
  /**
   * <p>Information about the job execution.</p>
   */
  execution?: JobExecution;
}

export namespace DescribeJobExecutionResponse {
  export function isa(o: any): o is DescribeJobExecutionResponse {
    return __isa(o, "DescribeJobExecutionResponse");
  }
}

export interface DescribeJobRequest {
  __type?: "DescribeJobRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeJobRequest {
  export function isa(o: any): o is DescribeJobRequest {
    return __isa(o, "DescribeJobRequest");
  }
}

export interface DescribeJobResponse {
  __type?: "DescribeJobResponse";
  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Information about the job.</p>
   */
  job?: Job;
}

export namespace DescribeJobResponse {
  export function isa(o: any): o is DescribeJobResponse {
    return __isa(o, "DescribeJobResponse");
  }
}

/**
 * <p>Allows you to create an exponential rate of rollout for a job.</p>
 */
export interface ExponentialRolloutRate {
  __type?: "ExponentialRolloutRate";
  /**
   * <p>The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.
   *             This parameter allows you to define the initial rate of rollout.</p>
   */
  baseRatePerMinute: number | undefined;

  /**
   * <p>The exponential factor to increase the rate of rollout for a job.</p>
   */
  incrementFactor: number | undefined;

  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p>
   *         <p>AWS IoT supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  rateIncreaseCriteria: RateIncreaseCriteria | undefined;
}

export namespace ExponentialRolloutRate {
  export function isa(o: any): o is ExponentialRolloutRate {
    return __isa(o, "ExponentialRolloutRate");
  }
}

export interface GetJobDocumentRequest {
  __type?: "GetJobDocumentRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace GetJobDocumentRequest {
  export function isa(o: any): o is GetJobDocumentRequest {
    return __isa(o, "GetJobDocumentRequest");
  }
}

export interface GetJobDocumentResponse {
  __type?: "GetJobDocumentResponse";
  /**
   * <p>The job document content.</p>
   */
  document?: string;
}

export namespace GetJobDocumentResponse {
  export function isa(o: any): o is GetJobDocumentResponse {
    return __isa(o, "GetJobDocumentResponse");
  }
}

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
  __type?: "Job";
  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
   *           <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: JobProcessDetails;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a device when the thing representing
   *             the device is added to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: Array<string>;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace Job {
  export function isa(o: any): o is Job {
    return __isa(o, "Job");
  }
}

/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
  __type?: "JobExecution";
  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
   *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *        This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used in commands which return or update job execution information.
   *         </p>
   */
  executionNumber?: number;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
   *           parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated
   *       by a device.</p>
   */
  versionNumber?: number;
}

export namespace JobExecution {
  export function isa(o: any): o is JobExecution {
    return __isa(o, "JobExecution");
  }
}

export enum JobExecutionFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  REJECTED = "REJECTED",
  TIMED_OUT = "TIMED_OUT"
}

/**
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
  __type?: "JobExecutionStatusDetails";
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: { [key: string]: string };
}

export namespace JobExecutionStatusDetails {
  export function isa(o: any): o is JobExecutionStatusDetails {
    return __isa(o, "JobExecutionStatusDetails");
  }
}

/**
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
  __type?: "JobExecutionSummary";
  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used later in commands which return or update job execution
   *             information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The status of the job execution.</p>
   */
  status?: JobExecutionStatus | string;
}

export namespace JobExecutionSummary {
  export function isa(o: any): o is JobExecutionSummary {
    return __isa(o, "JobExecutionSummary");
  }
}

/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
  __type?: "JobExecutionSummaryForJob";
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;
}

export namespace JobExecutionSummaryForJob {
  export function isa(o: any): o is JobExecutionSummaryForJob {
    return __isa(o, "JobExecutionSummaryForJob");
  }
}

/**
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
  __type?: "JobExecutionSummaryForThing";
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace JobExecutionSummaryForThing {
  export function isa(o: any): o is JobExecutionSummaryForThing {
    return __isa(o, "JobExecutionSummaryForThing");
  }
}

/**
 * <p>Allows you to create a staged rollout of a job.</p>
 */
export interface JobExecutionsRolloutConfig {
  __type?: "JobExecutionsRolloutConfig";
  /**
   * <p>The rate of increase for a job rollout.
   *             This parameter allows you to define an exponential rate for a job rollout.</p>
   */
  exponentialRate?: ExponentialRolloutRate;

  /**
   * <p>The maximum number of things that will be notified of a pending job, per minute.
   *         This parameter allows you to create a staged rollout.</p>
   */
  maximumPerMinute?: number;
}

export namespace JobExecutionsRolloutConfig {
  export function isa(o: any): o is JobExecutionsRolloutConfig {
    return __isa(o, "JobExecutionsRolloutConfig");
  }
}

/**
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
  __type?: "JobProcessDetails";
  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
   *             have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;

  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: Array<string>;
}

export namespace JobProcessDetails {
  export function isa(o: any): o is JobProcessDetails {
    return __isa(o, "JobProcessDetails");
  }
}

/**
 * <p>The job summary.</p>
 */
export interface JobSummary {
  __type?: "JobSummary";
  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The job summary status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;
}

export namespace JobSummary {
  export function isa(o: any): o is JobSummary {
    return __isa(o, "JobSummary");
  }
}

export interface ListJobExecutionsForJobRequest {
  __type?: "ListJobExecutionsForJobRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The status of the job.</p>
   */
  status?: JobExecutionStatus | string;
}

export namespace ListJobExecutionsForJobRequest {
  export function isa(o: any): o is ListJobExecutionsForJobRequest {
    return __isa(o, "ListJobExecutionsForJobRequest");
  }
}

export interface ListJobExecutionsForJobResponse {
  __type?: "ListJobExecutionsForJobResponse";
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: Array<JobExecutionSummaryForJob>;

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForJobResponse {
  export function isa(o: any): o is ListJobExecutionsForJobResponse {
    return __isa(o, "ListJobExecutionsForJobResponse");
  }
}

export interface ListJobExecutionsForThingRequest {
  __type?: "ListJobExecutionsForThingRequest";
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;
}

export namespace ListJobExecutionsForThingRequest {
  export function isa(o: any): o is ListJobExecutionsForThingRequest {
    return __isa(o, "ListJobExecutionsForThingRequest");
  }
}

export interface ListJobExecutionsForThingResponse {
  __type?: "ListJobExecutionsForThingResponse";
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: Array<JobExecutionSummaryForThing>;

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForThingResponse {
  export function isa(o: any): o is ListJobExecutionsForThingResponse {
    return __isa(o, "ListJobExecutionsForThingResponse");
  }
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupName?: string;
}

export namespace ListJobsRequest {
  export function isa(o: any): o is ListJobsRequest {
    return __isa(o, "ListJobsRequest");
  }
}

export interface ListJobsResponse {
  __type?: "ListJobsResponse";
  /**
   * <p>A list of jobs.</p>
   */
  jobs?: Array<JobSummary>;

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobsResponse {
  export function isa(o: any): o is ListJobsResponse {
    return __isa(o, "ListJobsResponse");
  }
}

/**
 * <p>Configuration for pre-signed S3 URLs.</p>
 */
export interface PresignedUrlConfig {
  __type?: "PresignedUrlConfig";
  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600
   *             seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>
   */
  expiresInSec?: number;

  /**
   * <p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job
   *             data/updates are stored. The role must also grant permission for IoT to download the files.</p>
   */
  roleArn?: string;
}

export namespace PresignedUrlConfig {
  export function isa(o: any): o is PresignedUrlConfig {
    return __isa(o, "PresignedUrlConfig");
  }
}

/**
 * <p>Allows you to define a criteria to initiate the increase in rate of rollout for a job.</p>
 */
export interface RateIncreaseCriteria {
  __type?: "RateIncreaseCriteria";
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
  export function isa(o: any): o is RateIncreaseCriteria {
    return __isa(o, "RateIncreaseCriteria");
  }
}

export enum TargetSelection {
  CONTINUOUS = "CONTINUOUS",
  SNAPSHOT = "SNAPSHOT"
}

/**
 * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
 *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
 *            execution status is not set to another terminal state before the timer expires, it will
 *            be automatically set to <code>TIMED_OUT</code>.</p>
 */
export interface TimeoutConfig {
  __type?: "TimeoutConfig";
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
  export function isa(o: any): o is TimeoutConfig {
    return __isa(o, "TimeoutConfig");
  }
}

export interface UpdateJobRequest {
  __type?: "UpdateJobRequest";
  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The ID of the job to be updated.</p>
   */
  jobId: string | undefined;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace UpdateJobRequest {
  export function isa(o: any): o is UpdateJobRequest {
    return __isa(o, "UpdateJobRequest");
  }
}

export enum JobExecutionStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT"
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>Configuration for the rollout of OTA updates.</p>
 */
export interface AwsJobExecutionsRolloutConfig {
  __type?: "AwsJobExecutionsRolloutConfig";
  /**
   * <p>The maximum number of OTA update job executions started per minute.</p>
   */
  maximumPerMinute?: number;
}

export namespace AwsJobExecutionsRolloutConfig {
  export function isa(o: any): o is AwsJobExecutionsRolloutConfig {
    return __isa(o, "AwsJobExecutionsRolloutConfig");
  }
}

/**
 * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
 *              contains HTTP.</p>
 */
export interface AwsJobPresignedUrlConfig {
  __type?: "AwsJobPresignedUrlConfig";
  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 1800
   *             seconds. Pre-signed URLs are generated when a request for the job document is received.</p>
   */
  expiresInSec?: number;
}

export namespace AwsJobPresignedUrlConfig {
  export function isa(o: any): o is AwsJobPresignedUrlConfig {
    return __isa(o, "AwsJobPresignedUrlConfig");
  }
}

/**
 * <p>Describes the method to use when code signing a file.</p>
 */
export interface CodeSigning {
  __type?: "CodeSigning";
  /**
   * <p>The ID of the AWSSignerJob which was created to sign the file.</p>
   */
  awsSignerJobId?: string;

  /**
   * <p>A custom method for code signing a file.</p>
   */
  customCodeSigning?: CustomCodeSigning;

  /**
   * <p>Describes the code-signing job.</p>
   */
  startSigningJobParameter?: StartSigningJobParameter;
}

export namespace CodeSigning {
  export function isa(o: any): o is CodeSigning {
    return __isa(o, "CodeSigning");
  }
}

/**
 * <p>Describes the certificate chain being used when code signing a file.</p>
 */
export interface CodeSigningCertificateChain {
  __type?: "CodeSigningCertificateChain";
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
  export function isa(o: any): o is CodeSigningCertificateChain {
    return __isa(o, "CodeSigningCertificateChain");
  }
}

/**
 * <p>Describes the signature for a file.</p>
 */
export interface CodeSigningSignature {
  __type?: "CodeSigningSignature";
  /**
   * <p>A base64 encoded binary representation of the code signing signature.</p>
   */
  inlineDocument?: Uint8Array;
}

export namespace CodeSigningSignature {
  export function isa(o: any): o is CodeSigningSignature {
    return __isa(o, "CodeSigningSignature");
  }
}

export interface CreateOTAUpdateRequest {
  __type?: "CreateOTAUpdateRequest";
  /**
   * <p>A list of additional OTA update parameters which are name-value pairs.</p>
   */
  additionalParameters?: { [key: string]: string };

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>The description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The files to be streamed by the OTA update.</p>
   */
  files: Array<OTAUpdateFile> | undefined;

  /**
   * <p>The ID of the OTA update to be created.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: Array<Protocol | string>;

  /**
   * <p>The IAM role that allows access to the AWS IoT Jobs service.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things
   * 			specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a
   * 			thing when a change is detected in a target. For example, an update will run on a thing when the thing is
   * 			added to a target group, even after the update was completed by all things originally in the group. Valid
   * 			values: CONTINUOUS | SNAPSHOT.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The targeted devices to receive OTA updates.</p>
   */
  targets: Array<string> | undefined;
}

export namespace CreateOTAUpdateRequest {
  export function isa(o: any): o is CreateOTAUpdateRequest {
    return __isa(o, "CreateOTAUpdateRequest");
  }
}

export interface CreateOTAUpdateResponse {
  __type?: "CreateOTAUpdateResponse";
  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace CreateOTAUpdateResponse {
  export function isa(o: any): o is CreateOTAUpdateResponse {
    return __isa(o, "CreateOTAUpdateResponse");
  }
}

/**
 * <p>Describes a custom method used to code sign a file.</p>
 */
export interface CustomCodeSigning {
  __type?: "CustomCodeSigning";
  /**
   * <p>The certificate chain.</p>
   */
  certificateChain?: CodeSigningCertificateChain;

  /**
   * <p>The hash algorithm used to code sign the file.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature for the file.</p>
   */
  signature?: CodeSigningSignature;

  /**
   * <p>The signature algorithm used to code sign the file.</p>
   */
  signatureAlgorithm?: string;
}

export namespace CustomCodeSigning {
  export function isa(o: any): o is CustomCodeSigning {
    return __isa(o, "CustomCodeSigning");
  }
}

export interface DeleteOTAUpdateRequest {
  __type?: "DeleteOTAUpdateRequest";
  /**
   * <p>Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.</p>
   */
  forceDeleteAWSJob?: boolean;

  /**
   * <p>The OTA update ID to delete.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace DeleteOTAUpdateRequest {
  export function isa(o: any): o is DeleteOTAUpdateRequest {
    return __isa(o, "DeleteOTAUpdateRequest");
  }
}

export interface DeleteOTAUpdateResponse {
  __type?: "DeleteOTAUpdateResponse";
}

export namespace DeleteOTAUpdateResponse {
  export function isa(o: any): o is DeleteOTAUpdateResponse {
    return __isa(o, "DeleteOTAUpdateResponse");
  }
}

/**
 * <p>Describes the location of the updated firmware.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>Describes the location in S3 of the updated firmware.</p>
   */
  s3Destination?: S3Destination;
}

export namespace Destination {
  export function isa(o: any): o is Destination {
    return __isa(o, "Destination");
  }
}

/**
 * <p>Error information.</p>
 */
export interface ErrorInfo {
  __type?: "ErrorInfo";
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
  export function isa(o: any): o is ErrorInfo {
    return __isa(o, "ErrorInfo");
  }
}

/**
 * <p>The location of the OTA update.</p>
 */
export interface FileLocation {
  __type?: "FileLocation";
  /**
   * <p>The location of the updated firmware in S3.</p>
   */
  s3Location?: S3Location;

  /**
   * <p>The stream that contains the OTA update.</p>
   */
  stream?: _Stream;
}

export namespace FileLocation {
  export function isa(o: any): o is FileLocation {
    return __isa(o, "FileLocation");
  }
}

export interface GetOTAUpdateRequest {
  __type?: "GetOTAUpdateRequest";
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace GetOTAUpdateRequest {
  export function isa(o: any): o is GetOTAUpdateRequest {
    return __isa(o, "GetOTAUpdateRequest");
  }
}

export interface GetOTAUpdateResponse {
  __type?: "GetOTAUpdateResponse";
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: OTAUpdateInfo;
}

export namespace GetOTAUpdateResponse {
  export function isa(o: any): o is GetOTAUpdateResponse {
    return __isa(o, "GetOTAUpdateResponse");
  }
}

export interface ListOTAUpdatesRequest {
  __type?: "ListOTAUpdatesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The OTA update job status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace ListOTAUpdatesRequest {
  export function isa(o: any): o is ListOTAUpdatesRequest {
    return __isa(o, "ListOTAUpdatesRequest");
  }
}

export interface ListOTAUpdatesResponse {
  __type?: "ListOTAUpdatesResponse";
  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: Array<OTAUpdateSummary>;
}

export namespace ListOTAUpdatesResponse {
  export function isa(o: any): o is ListOTAUpdatesResponse {
    return __isa(o, "ListOTAUpdatesResponse");
  }
}

/**
 * <p>Describes a file to be associated with an OTA update.</p>
 */
export interface OTAUpdateFile {
  __type?: "OTAUpdateFile";
  /**
   * <p>A list of name/attribute pairs.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The code signing method of the file.</p>
   */
  codeSigning?: CodeSigning;

  /**
   * <p>The location of the updated firmware.</p>
   */
  fileLocation?: FileLocation;

  /**
   * <p>The name of the file.</p>
   */
  fileName?: string;

  /**
   * <p>The file version.</p>
   */
  fileVersion?: string;
}

export namespace OTAUpdateFile {
  export function isa(o: any): o is OTAUpdateFile {
    return __isa(o, "OTAUpdateFile");
  }
}

/**
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
  __type?: "OTAUpdateInfo";
  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: { [key: string]: string };

  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

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
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: Array<OTAUpdateFile>;

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: Array<Protocol | string>;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   * 			things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   * 			be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   * 			the thing is added to a target group, even after the OTA update was completed by all things originally in
   * 			the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: Array<string>;
}

export namespace OTAUpdateInfo {
  export function isa(o: any): o is OTAUpdateInfo {
    return __isa(o, "OTAUpdateInfo");
  }
}

export enum OTAUpdateStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING"
}

/**
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
  __type?: "OTAUpdateSummary";
  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;
}

export namespace OTAUpdateSummary {
  export function isa(o: any): o is OTAUpdateSummary {
    return __isa(o, "OTAUpdateSummary");
  }
}

/**
 * <p>Describes the location of updated firmware in S3.</p>
 */
export interface S3Destination {
  __type?: "S3Destination";
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
  export function isa(o: any): o is S3Destination {
    return __isa(o, "S3Destination");
  }
}

/**
 * <p>Describes the code-signing profile.</p>
 */
export interface SigningProfileParameter {
  __type?: "SigningProfileParameter";
  /**
   * <p>Certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The location of the code-signing certificate on your device.</p>
   */
  certificatePathOnDevice?: string;

  /**
   * <p>The hardware platform of your device.</p>
   */
  platform?: string;
}

export namespace SigningProfileParameter {
  export function isa(o: any): o is SigningProfileParameter {
    return __isa(o, "SigningProfileParameter");
  }
}

/**
 * <p>Information required to start a signing job.</p>
 */
export interface StartSigningJobParameter {
  __type?: "StartSigningJobParameter";
  /**
   * <p>The location to write the code-signed file.</p>
   */
  destination?: Destination;

  /**
   * <p>The code-signing profile name.</p>
   */
  signingProfileName?: string;

  /**
   * <p>Describes the code-signing profile.</p>
   */
  signingProfileParameter?: SigningProfileParameter;
}

export namespace StartSigningJobParameter {
  export function isa(o: any): o is StartSigningJobParameter {
    return __isa(o, "StartSigningJobParameter");
  }
}

/**
 * <p>Describes a group of files that can be streamed.</p>
 */
export interface _Stream {
  __type?: "Stream";
  /**
   * <p>The ID of a file associated with a stream.</p>
   */
  fileId?: number;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;
}

export namespace _Stream {
  export function isa(o: any): o is _Stream {
    return __isa(o, "Stream");
  }
}

export interface AddThingToBillingGroupRequest {
  __type?: "AddThingToBillingGroupRequest";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the thing to be added to the billing group.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing to be added to the billing group.</p>
   */
  thingName?: string;
}

export namespace AddThingToBillingGroupRequest {
  export function isa(o: any): o is AddThingToBillingGroupRequest {
    return __isa(o, "AddThingToBillingGroupRequest");
  }
}

export interface AddThingToBillingGroupResponse {
  __type?: "AddThingToBillingGroupResponse";
}

export namespace AddThingToBillingGroupResponse {
  export function isa(o: any): o is AddThingToBillingGroupResponse {
    return __isa(o, "AddThingToBillingGroupResponse");
  }
}

export interface AddThingToThingGroupRequest {
  __type?: "AddThingToThingGroupRequest";
  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The ARN of the thing to add to a group.</p>
   */
  thingArn?: string;

  /**
   * <p>The ARN of the group to which you are adding a thing.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the group to which you are adding a thing.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The name of the thing to add to a group.</p>
   */
  thingName?: string;
}

export namespace AddThingToThingGroupRequest {
  export function isa(o: any): o is AddThingToThingGroupRequest {
    return __isa(o, "AddThingToThingGroupRequest");
  }
}

export interface AddThingToThingGroupResponse {
  __type?: "AddThingToThingGroupResponse";
}

export namespace AddThingToThingGroupResponse {
  export function isa(o: any): o is AddThingToThingGroupResponse {
    return __isa(o, "AddThingToThingGroupResponse");
  }
}

/**
 * <p>The input for the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalRequest {
  __type?: "AttachThingPrincipalRequest";
  /**
   * <p>The principal, which can be a certificate ARN (as returned from the
   * 			CreateCertificate operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace AttachThingPrincipalRequest {
  export function isa(o: any): o is AttachThingPrincipalRequest {
    return __isa(o, "AttachThingPrincipalRequest");
  }
}

/**
 * <p>The output from the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalResponse {
  __type?: "AttachThingPrincipalResponse";
}

export namespace AttachThingPrincipalResponse {
  export function isa(o: any): o is AttachThingPrincipalResponse {
    return __isa(o, "AttachThingPrincipalResponse");
  }
}

export interface CreateBillingGroupRequest {
  __type?: "CreateBillingGroupRequest";
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
  tags?: Array<Tag>;
}

export namespace CreateBillingGroupRequest {
  export function isa(o: any): o is CreateBillingGroupRequest {
    return __isa(o, "CreateBillingGroupRequest");
  }
}

export interface CreateBillingGroupResponse {
  __type?: "CreateBillingGroupResponse";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The name you gave to the billing group.</p>
   */
  billingGroupName?: string;
}

export namespace CreateBillingGroupResponse {
  export function isa(o: any): o is CreateBillingGroupResponse {
    return __isa(o, "CreateBillingGroupResponse");
  }
}

export interface CreateDynamicThingGroupRequest {
  __type?: "CreateDynamicThingGroupRequest";
  /**
   * <p>The dynamic thing group index name.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: "AWS_Things".</p>
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
  tags?: Array<Tag>;

  /**
   * <p>The dynamic thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;
}

export namespace CreateDynamicThingGroupRequest {
  export function isa(o: any): o is CreateDynamicThingGroupRequest {
    return __isa(o, "CreateDynamicThingGroupRequest");
  }
}

export interface CreateDynamicThingGroupResponse {
  __type?: "CreateDynamicThingGroupResponse";
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

  /**
   * <p>The dynamic thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The dynamic thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The dynamic thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace CreateDynamicThingGroupResponse {
  export function isa(o: any): o is CreateDynamicThingGroupResponse {
    return __isa(o, "CreateDynamicThingGroupResponse");
  }
}

export interface CreateThingGroupRequest {
  __type?: "CreateThingGroupRequest";
  /**
   * <p>The name of the parent thing group.</p>
   */
  parentGroupName?: string;

  /**
   * <p>Metadata which can be used to manage the thing group.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;
}

export namespace CreateThingGroupRequest {
  export function isa(o: any): o is CreateThingGroupRequest {
    return __isa(o, "CreateThingGroupRequest");
  }
}

export interface CreateThingGroupResponse {
  __type?: "CreateThingGroupResponse";
  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace CreateThingGroupResponse {
  export function isa(o: any): o is CreateThingGroupResponse {
    return __isa(o, "CreateThingGroupResponse");
  }
}

/**
 * <p>The input for the CreateThing operation.</p>
 */
export interface CreateThingRequest {
  __type?: "CreateThingRequest";
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

  /**
   * <p>The name of the thing to create.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type associated with the new thing.</p>
   */
  thingTypeName?: string;
}

export namespace CreateThingRequest {
  export function isa(o: any): o is CreateThingRequest {
    return __isa(o, "CreateThingRequest");
  }
}

/**
 * <p>The output of the CreateThing operation.</p>
 */
export interface CreateThingResponse {
  __type?: "CreateThingResponse";
  /**
   * <p>The ARN of the new thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The name of the new thing.</p>
   */
  thingName?: string;
}

export namespace CreateThingResponse {
  export function isa(o: any): o is CreateThingResponse {
    return __isa(o, "CreateThingResponse");
  }
}

/**
 * <p>The input for the CreateThingType operation.</p>
 */
export interface CreateThingTypeRequest {
  __type?: "CreateThingTypeRequest";
  /**
   * <p>Metadata which can be used to manage the thing type.</p>
   */
  tags?: Array<Tag>;

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
}

export namespace CreateThingTypeRequest {
  export function isa(o: any): o is CreateThingTypeRequest {
    return __isa(o, "CreateThingTypeRequest");
  }
}

/**
 * <p>The output of the CreateThingType operation.</p>
 */
export interface CreateThingTypeResponse {
  __type?: "CreateThingTypeResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the thing type.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace CreateThingTypeResponse {
  export function isa(o: any): o is CreateThingTypeResponse {
    return __isa(o, "CreateThingTypeResponse");
  }
}

export interface DeleteBillingGroupRequest {
  __type?: "DeleteBillingGroupRequest";
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
  export function isa(o: any): o is DeleteBillingGroupRequest {
    return __isa(o, "DeleteBillingGroupRequest");
  }
}

export interface DeleteBillingGroupResponse {
  __type?: "DeleteBillingGroupResponse";
}

export namespace DeleteBillingGroupResponse {
  export function isa(o: any): o is DeleteBillingGroupResponse {
    return __isa(o, "DeleteBillingGroupResponse");
  }
}

export interface DeleteDynamicThingGroupRequest {
  __type?: "DeleteDynamicThingGroupRequest";
  /**
   * <p>The expected version of the dynamic thing group to delete.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the dynamic thing group to delete.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DeleteDynamicThingGroupRequest {
  export function isa(o: any): o is DeleteDynamicThingGroupRequest {
    return __isa(o, "DeleteDynamicThingGroupRequest");
  }
}

export interface DeleteDynamicThingGroupResponse {
  __type?: "DeleteDynamicThingGroupResponse";
}

export namespace DeleteDynamicThingGroupResponse {
  export function isa(o: any): o is DeleteDynamicThingGroupResponse {
    return __isa(o, "DeleteDynamicThingGroupResponse");
  }
}

export interface DeleteThingGroupRequest {
  __type?: "DeleteThingGroupRequest";
  /**
   * <p>The expected version of the thing group to delete.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the thing group to delete.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DeleteThingGroupRequest {
  export function isa(o: any): o is DeleteThingGroupRequest {
    return __isa(o, "DeleteThingGroupRequest");
  }
}

export interface DeleteThingGroupResponse {
  __type?: "DeleteThingGroupResponse";
}

export namespace DeleteThingGroupResponse {
  export function isa(o: any): o is DeleteThingGroupResponse {
    return __isa(o, "DeleteThingGroupResponse");
  }
}

/**
 * <p>The input for the DeleteThing operation.</p>
 */
export interface DeleteThingRequest {
  __type?: "DeleteThingRequest";
  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>DeleteThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the thing to delete.</p>
   */
  thingName: string | undefined;
}

export namespace DeleteThingRequest {
  export function isa(o: any): o is DeleteThingRequest {
    return __isa(o, "DeleteThingRequest");
  }
}

/**
 * <p>The output of the DeleteThing operation.</p>
 */
export interface DeleteThingResponse {
  __type?: "DeleteThingResponse";
}

export namespace DeleteThingResponse {
  export function isa(o: any): o is DeleteThingResponse {
    return __isa(o, "DeleteThingResponse");
  }
}

/**
 * <p>The input for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeRequest {
  __type?: "DeleteThingTypeRequest";
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DeleteThingTypeRequest {
  export function isa(o: any): o is DeleteThingTypeRequest {
    return __isa(o, "DeleteThingTypeRequest");
  }
}

/**
 * <p>The output for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeResponse {
  __type?: "DeleteThingTypeResponse";
}

export namespace DeleteThingTypeResponse {
  export function isa(o: any): o is DeleteThingTypeResponse {
    return __isa(o, "DeleteThingTypeResponse");
  }
}

/**
 * <p>The input for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeRequest {
  __type?: "DeprecateThingTypeRequest";
  /**
   * <p>The name of the thing type to deprecate.</p>
   */
  thingTypeName: string | undefined;

  /**
   * <p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can
   * 			associate it with things.</p>
   */
  undoDeprecate?: boolean;
}

export namespace DeprecateThingTypeRequest {
  export function isa(o: any): o is DeprecateThingTypeRequest {
    return __isa(o, "DeprecateThingTypeRequest");
  }
}

/**
 * <p>The output for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeResponse {
  __type?: "DeprecateThingTypeResponse";
}

export namespace DeprecateThingTypeResponse {
  export function isa(o: any): o is DeprecateThingTypeResponse {
    return __isa(o, "DeprecateThingTypeResponse");
  }
}

export interface DescribeBillingGroupRequest {
  __type?: "DescribeBillingGroupRequest";
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
}

export namespace DescribeBillingGroupRequest {
  export function isa(o: any): o is DescribeBillingGroupRequest {
    return __isa(o, "DescribeBillingGroupRequest");
  }
}

export interface DescribeBillingGroupResponse {
  __type?: "DescribeBillingGroupResponse";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: BillingGroupMetadata;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;
}

export namespace DescribeBillingGroupResponse {
  export function isa(o: any): o is DescribeBillingGroupResponse {
    return __isa(o, "DescribeBillingGroupResponse");
  }
}

export interface DescribeEventConfigurationsRequest {
  __type?: "DescribeEventConfigurationsRequest";
}

export namespace DescribeEventConfigurationsRequest {
  export function isa(o: any): o is DescribeEventConfigurationsRequest {
    return __isa(o, "DescribeEventConfigurationsRequest");
  }
}

export interface DescribeEventConfigurationsResponse {
  __type?: "DescribeEventConfigurationsResponse";
  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeEventConfigurationsResponse {
  export function isa(o: any): o is DescribeEventConfigurationsResponse {
    return __isa(o, "DescribeEventConfigurationsResponse");
  }
}

export interface DescribeThingGroupRequest {
  __type?: "DescribeThingGroupRequest";
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DescribeThingGroupRequest {
  export function isa(o: any): o is DescribeThingGroupRequest {
    return __isa(o, "DescribeThingGroupRequest");
  }
}

export interface DescribeThingGroupResponse {
  __type?: "DescribeThingGroupResponse";
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

  /**
   * <p>The dynamic thing group status.</p>
   */
  status?: DynamicGroupStatus | string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: ThingGroupMetadata;

  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;
}

export namespace DescribeThingGroupResponse {
  export function isa(o: any): o is DescribeThingGroupResponse {
    return __isa(o, "DescribeThingGroupResponse");
  }
}

export interface DescribeThingRegistrationTaskRequest {
  __type?: "DescribeThingRegistrationTaskRequest";
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeThingRegistrationTaskRequest {
  export function isa(o: any): o is DescribeThingRegistrationTaskRequest {
    return __isa(o, "DescribeThingRegistrationTaskRequest");
  }
}

export interface DescribeThingRegistrationTaskResponse {
  __type?: "DescribeThingRegistrationTaskResponse";
  /**
   * <p>The task creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   */
  failureCount?: number;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket?: string;

  /**
   * <p>The input file key.</p>
   */
  inputFileKey?: string;

  /**
   * <p>The date when the task was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The message.</p>
   */
  message?: string;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   */
  percentageProgress?: number;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;

  /**
   * <p>The number of things successfully provisioned.</p>
   */
  successCount?: number;

  /**
   * <p>The task ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task's template.</p>
   */
  templateBody?: string;
}

export namespace DescribeThingRegistrationTaskResponse {
  export function isa(o: any): o is DescribeThingRegistrationTaskResponse {
    return __isa(o, "DescribeThingRegistrationTaskResponse");
  }
}

/**
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
  __type?: "DescribeThingRequest";
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeThingRequest {
  export function isa(o: any): o is DescribeThingRequest {
    return __isa(o, "DescribeThingRequest");
  }
}

/**
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
  __type?: "DescribeThingResponse";
  /**
   * <p>The thing attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The default client ID.</p>
   */
  defaultClientId?: string;

  /**
   * <p>The ARN of the thing to describe.</p>
   */
  thingArn?: string;

  /**
   * <p>The ID of the thing to describe.</p>
   */
  thingId?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The current version of the thing record in the registry.</p>
   * 		       <note>
   * 			         <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   * 		       </note>
   */
  version?: number;
}

export namespace DescribeThingResponse {
  export function isa(o: any): o is DescribeThingResponse {
    return __isa(o, "DescribeThingResponse");
  }
}

/**
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
  __type?: "DescribeThingTypeRequest";
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DescribeThingTypeRequest {
  export function isa(o: any): o is DescribeThingTypeRequest {
    return __isa(o, "DescribeThingTypeRequest");
  }
}

/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
  __type?: "DescribeThingTypeResponse";
  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;
}

export namespace DescribeThingTypeResponse {
  export function isa(o: any): o is DescribeThingTypeResponse {
    return __isa(o, "DescribeThingTypeResponse");
  }
}

/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
  __type?: "DetachThingPrincipalRequest";
  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   */
  principal: string | undefined;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DetachThingPrincipalRequest {
  export function isa(o: any): o is DetachThingPrincipalRequest {
    return __isa(o, "DetachThingPrincipalRequest");
  }
}

/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {
  __type?: "DetachThingPrincipalResponse";
}

export namespace DetachThingPrincipalResponse {
  export function isa(o: any): o is DetachThingPrincipalResponse {
    return __isa(o, "DetachThingPrincipalResponse");
  }
}

export interface ListBillingGroupsRequest {
  __type?: "ListBillingGroupsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsRequest {
  export function isa(o: any): o is ListBillingGroupsRequest {
    return __isa(o, "ListBillingGroupsRequest");
  }
}

export interface ListBillingGroupsResponse {
  __type?: "ListBillingGroupsResponse";
  /**
   * <p>The list of billing groups.</p>
   */
  billingGroups?: Array<GroupNameAndArn>;

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsResponse {
  export function isa(o: any): o is ListBillingGroupsResponse {
    return __isa(o, "ListBillingGroupsResponse");
  }
}

/**
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
  __type?: "ListPrincipalThingsRequest";
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalThingsRequest {
  export function isa(o: any): o is ListPrincipalThingsRequest {
    return __isa(o, "ListPrincipalThingsRequest");
  }
}

/**
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
  __type?: "ListPrincipalThingsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things.</p>
   */
  things?: Array<string>;
}

export namespace ListPrincipalThingsResponse {
  export function isa(o: any): o is ListPrincipalThingsResponse {
    return __isa(o, "ListPrincipalThingsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListThingGroupsForThingRequest {
  __type?: "ListThingGroupsForThingRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingGroupsForThingRequest {
  export function isa(o: any): o is ListThingGroupsForThingRequest {
    return __isa(o, "ListThingGroupsForThingRequest");
  }
}

export interface ListThingGroupsForThingResponse {
  __type?: "ListThingGroupsForThingResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: Array<GroupNameAndArn>;
}

export namespace ListThingGroupsForThingResponse {
  export function isa(o: any): o is ListThingGroupsForThingResponse {
    return __isa(o, "ListThingGroupsForThingResponse");
  }
}

export interface ListThingGroupsRequest {
  __type?: "ListThingGroupsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

export namespace ListThingGroupsRequest {
  export function isa(o: any): o is ListThingGroupsRequest {
    return __isa(o, "ListThingGroupsRequest");
  }
}

export interface ListThingGroupsResponse {
  __type?: "ListThingGroupsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: Array<GroupNameAndArn>;
}

export namespace ListThingGroupsResponse {
  export function isa(o: any): o is ListThingGroupsResponse {
    return __isa(o, "ListThingGroupsResponse");
  }
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  __type?: "ListThingPrincipalsRequest";
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingPrincipalsRequest {
  export function isa(o: any): o is ListThingPrincipalsRequest {
    return __isa(o, "ListThingPrincipalsRequest");
  }
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  __type?: "ListThingPrincipalsResponse";
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: Array<string>;
}

export namespace ListThingPrincipalsResponse {
  export function isa(o: any): o is ListThingPrincipalsResponse {
    return __isa(o, "ListThingPrincipalsResponse");
  }
}

export interface ListThingRegistrationTaskReportsRequest {
  __type?: "ListThingRegistrationTaskReportsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of task report.</p>
   */
  reportType: ReportType | string | undefined;

  /**
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;
}

export namespace ListThingRegistrationTaskReportsRequest {
  export function isa(o: any): o is ListThingRegistrationTaskReportsRequest {
    return __isa(o, "ListThingRegistrationTaskReportsRequest");
  }
}

export interface ListThingRegistrationTaskReportsResponse {
  __type?: "ListThingRegistrationTaskReportsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of task report.</p>
   */
  reportType?: ReportType | string;

  /**
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: Array<string>;
}

export namespace ListThingRegistrationTaskReportsResponse {
  export function isa(o: any): o is ListThingRegistrationTaskReportsResponse {
    return __isa(o, "ListThingRegistrationTaskReportsResponse");
  }
}

export interface ListThingRegistrationTasksRequest {
  __type?: "ListThingRegistrationTasksRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;
}

export namespace ListThingRegistrationTasksRequest {
  export function isa(o: any): o is ListThingRegistrationTasksRequest {
    return __isa(o, "ListThingRegistrationTasksRequest");
  }
}

export interface ListThingRegistrationTasksResponse {
  __type?: "ListThingRegistrationTasksResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: Array<string>;
}

export namespace ListThingRegistrationTasksResponse {
  export function isa(o: any): o is ListThingRegistrationTasksResponse {
    return __isa(o, "ListThingRegistrationTasksResponse");
  }
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  __type?: "ListThingTypesRequest";
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingTypesRequest {
  export function isa(o: any): o is ListThingTypesRequest {
    return __isa(o, "ListThingTypesRequest");
  }
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  __type?: "ListThingTypesResponse";
  /**
   * <p>The token for the next set of results, or <b>null</b> if
   * 			there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing types.</p>
   */
  thingTypes?: Array<ThingTypeDefinition>;
}

export namespace ListThingTypesResponse {
  export function isa(o: any): o is ListThingTypesResponse {
    return __isa(o, "ListThingTypesResponse");
  }
}

export interface ListThingsInBillingGroupRequest {
  __type?: "ListThingsInBillingGroupRequest";
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInBillingGroupRequest {
  export function isa(o: any): o is ListThingsInBillingGroupRequest {
    return __isa(o, "ListThingsInBillingGroupRequest");
  }
}

export interface ListThingsInBillingGroupResponse {
  __type?: "ListThingsInBillingGroupResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of things in the billing group.</p>
   */
  things?: Array<string>;
}

export namespace ListThingsInBillingGroupResponse {
  export function isa(o: any): o is ListThingsInBillingGroupResponse {
    return __isa(o, "ListThingsInBillingGroupResponse");
  }
}

export interface ListThingsInThingGroupRequest {
  __type?: "ListThingsInThingGroupRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;
}

export namespace ListThingsInThingGroupRequest {
  export function isa(o: any): o is ListThingsInThingGroupRequest {
    return __isa(o, "ListThingsInThingGroupRequest");
  }
}

export interface ListThingsInThingGroupResponse {
  __type?: "ListThingsInThingGroupResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: Array<string>;
}

export namespace ListThingsInThingGroupResponse {
  export function isa(o: any): o is ListThingsInThingGroupResponse {
    return __isa(o, "ListThingsInThingGroupResponse");
  }
}

/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  __type?: "ListThingsRequest";
  /**
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingsRequest {
  export function isa(o: any): o is ListThingsRequest {
    return __isa(o, "ListThingsRequest");
  }
}

/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  __type?: "ListThingsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things.</p>
   */
  things?: Array<ThingAttribute>;
}

export namespace ListThingsResponse {
  export function isa(o: any): o is ListThingsResponse {
    return __isa(o, "ListThingsResponse");
  }
}

export interface RemoveThingFromBillingGroupRequest {
  __type?: "RemoveThingFromBillingGroupRequest";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;
}

export namespace RemoveThingFromBillingGroupRequest {
  export function isa(o: any): o is RemoveThingFromBillingGroupRequest {
    return __isa(o, "RemoveThingFromBillingGroupRequest");
  }
}

export interface RemoveThingFromBillingGroupResponse {
  __type?: "RemoveThingFromBillingGroupResponse";
}

export namespace RemoveThingFromBillingGroupResponse {
  export function isa(o: any): o is RemoveThingFromBillingGroupResponse {
    return __isa(o, "RemoveThingFromBillingGroupResponse");
  }
}

export interface RemoveThingFromThingGroupRequest {
  __type?: "RemoveThingFromThingGroupRequest";
  /**
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;

  /**
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;
}

export namespace RemoveThingFromThingGroupRequest {
  export function isa(o: any): o is RemoveThingFromThingGroupRequest {
    return __isa(o, "RemoveThingFromThingGroupRequest");
  }
}

export interface RemoveThingFromThingGroupResponse {
  __type?: "RemoveThingFromThingGroupResponse";
}

export namespace RemoveThingFromThingGroupResponse {
  export function isa(o: any): o is RemoveThingFromThingGroupResponse {
    return __isa(o, "RemoveThingFromThingGroupResponse");
  }
}

export interface StartThingRegistrationTaskRequest {
  __type?: "StartThingRegistrationTaskRequest";
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

  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;
}

export namespace StartThingRegistrationTaskRequest {
  export function isa(o: any): o is StartThingRegistrationTaskRequest {
    return __isa(o, "StartThingRegistrationTaskRequest");
  }
}

export interface StartThingRegistrationTaskResponse {
  __type?: "StartThingRegistrationTaskResponse";
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export namespace StartThingRegistrationTaskResponse {
  export function isa(o: any): o is StartThingRegistrationTaskResponse {
    return __isa(o, "StartThingRegistrationTaskResponse");
  }
}

export interface StopThingRegistrationTaskRequest {
  __type?: "StopThingRegistrationTaskRequest";
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export namespace StopThingRegistrationTaskRequest {
  export function isa(o: any): o is StopThingRegistrationTaskRequest {
    return __isa(o, "StopThingRegistrationTaskRequest");
  }
}

export interface StopThingRegistrationTaskResponse {
  __type?: "StopThingRegistrationTaskResponse";
}

export namespace StopThingRegistrationTaskResponse {
  export function isa(o: any): o is StopThingRegistrationTaskResponse {
    return __isa(o, "StopThingRegistrationTaskResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateBillingGroupRequest {
  __type?: "UpdateBillingGroupRequest";
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
  export function isa(o: any): o is UpdateBillingGroupRequest {
    return __isa(o, "UpdateBillingGroupRequest");
  }
}

export interface UpdateBillingGroupResponse {
  __type?: "UpdateBillingGroupResponse";
  /**
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
}

export namespace UpdateBillingGroupResponse {
  export function isa(o: any): o is UpdateBillingGroupResponse {
    return __isa(o, "UpdateBillingGroupResponse");
  }
}

export interface UpdateDynamicThingGroupRequest {
  __type?: "UpdateDynamicThingGroupRequest";
  /**
   * <p>The expected version of the dynamic thing group to update.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The dynamic thing group index to update.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: 'AWS_Things'.</p>
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

  /**
   * <p>The name of the dynamic thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties to update.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;
}

export namespace UpdateDynamicThingGroupRequest {
  export function isa(o: any): o is UpdateDynamicThingGroupRequest {
    return __isa(o, "UpdateDynamicThingGroupRequest");
  }
}

export interface UpdateDynamicThingGroupResponse {
  __type?: "UpdateDynamicThingGroupResponse";
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

export namespace UpdateDynamicThingGroupResponse {
  export function isa(o: any): o is UpdateDynamicThingGroupResponse {
    return __isa(o, "UpdateDynamicThingGroupResponse");
  }
}

export interface UpdateEventConfigurationsRequest {
  __type?: "UpdateEventConfigurationsRequest";
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };
}

export namespace UpdateEventConfigurationsRequest {
  export function isa(o: any): o is UpdateEventConfigurationsRequest {
    return __isa(o, "UpdateEventConfigurationsRequest");
  }
}

export interface UpdateEventConfigurationsResponse {
  __type?: "UpdateEventConfigurationsResponse";
}

export namespace UpdateEventConfigurationsResponse {
  export function isa(o: any): o is UpdateEventConfigurationsResponse {
    return __isa(o, "UpdateEventConfigurationsResponse");
  }
}

export interface UpdateThingGroupRequest {
  __type?: "UpdateThingGroupRequest";
  /**
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;
}

export namespace UpdateThingGroupRequest {
  export function isa(o: any): o is UpdateThingGroupRequest {
    return __isa(o, "UpdateThingGroupRequest");
  }
}

export interface UpdateThingGroupResponse {
  __type?: "UpdateThingGroupResponse";
  /**
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
}

export namespace UpdateThingGroupResponse {
  export function isa(o: any): o is UpdateThingGroupResponse {
    return __isa(o, "UpdateThingGroupResponse");
  }
}

export interface UpdateThingGroupsForThingRequest {
  __type?: "UpdateThingGroupsForThingRequest";
  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: Array<string>;

  /**
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: Array<string>;

  /**
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;
}

export namespace UpdateThingGroupsForThingRequest {
  export function isa(o: any): o is UpdateThingGroupsForThingRequest {
    return __isa(o, "UpdateThingGroupsForThingRequest");
  }
}

export interface UpdateThingGroupsForThingResponse {
  __type?: "UpdateThingGroupsForThingResponse";
}

export namespace UpdateThingGroupsForThingResponse {
  export function isa(o: any): o is UpdateThingGroupsForThingResponse {
    return __isa(o, "UpdateThingGroupsForThingResponse");
  }
}

/**
 * <p>The input for the UpdateThing operation.</p>
 */
export interface UpdateThingRequest {
  __type?: "UpdateThingRequest";
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

  /**
   * <p>The name of the thing to update.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace UpdateThingRequest {
  export function isa(o: any): o is UpdateThingRequest {
    return __isa(o, "UpdateThingRequest");
  }
}

/**
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {
  __type?: "UpdateThingResponse";
}

export namespace UpdateThingResponse {
  export function isa(o: any): o is UpdateThingResponse {
    return __isa(o, "UpdateThingResponse");
  }
}

/**
 * <p>The attribute payload.</p>
 */
export interface AttributePayload {
  __type?: "AttributePayload";
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
  export function isa(o: any): o is AttributePayload {
    return __isa(o, "AttributePayload");
  }
}

/**
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
  __type?: "BillingGroupMetadata";
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}

export namespace BillingGroupMetadata {
  export function isa(o: any): o is BillingGroupMetadata {
    return __isa(o, "BillingGroupMetadata");
  }
}

/**
 * <p>The properties of a billing group.</p>
 */
export interface BillingGroupProperties {
  __type?: "BillingGroupProperties";
  /**
   * <p>The description of the billing group.</p>
   */
  billingGroupDescription?: string;
}

export namespace BillingGroupProperties {
  export function isa(o: any): o is BillingGroupProperties {
    return __isa(o, "BillingGroupProperties");
  }
}

export enum DynamicGroupStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING"
}

/**
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
  __type?: "GroupNameAndArn";
  /**
   * <p>The group ARN.</p>
   */
  groupArn?: string;

  /**
   * <p>The group name.</p>
   */
  groupName?: string;
}

export namespace GroupNameAndArn {
  export function isa(o: any): o is GroupNameAndArn {
    return __isa(o, "GroupNameAndArn");
  }
}

export enum ReportType {
  ERRORS = "ERRORS",
  RESULTS = "RESULTS"
}

export enum Status {
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Completed = "Completed",
  Failed = "Failed",
  InProgress = "InProgress"
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  __type?: "ThingAttribute";
  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

export namespace ThingAttribute {
  export function isa(o: any): o is ThingAttribute {
    return __isa(o, "ThingAttribute");
  }
}

/**
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
  __type?: "ThingGroupMetadata";
  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: Array<GroupNameAndArn>;
}

export namespace ThingGroupMetadata {
  export function isa(o: any): o is ThingGroupMetadata {
    return __isa(o, "ThingGroupMetadata");
  }
}

/**
 * <p>Thing group properties.</p>
 */
export interface ThingGroupProperties {
  __type?: "ThingGroupProperties";
  /**
   * <p>The thing group attributes in JSON format.</p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;
}

export namespace ThingGroupProperties {
  export function isa(o: any): o is ThingGroupProperties {
    return __isa(o, "ThingGroupProperties");
  }
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  __type?: "ThingTypeDefinition";
  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;
}

export namespace ThingTypeDefinition {
  export function isa(o: any): o is ThingTypeDefinition {
    return __isa(o, "ThingTypeDefinition");
  }
}

/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
  __type?: "ThingTypeMetadata";
  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;
}

export namespace ThingTypeMetadata {
  export function isa(o: any): o is ThingTypeMetadata {
    return __isa(o, "ThingTypeMetadata");
  }
}

/**
 * <p>The ThingTypeProperties contains information about the thing type including: a thing type description,
 * 			and a list of searchable thing attribute names.</p>
 */
export interface ThingTypeProperties {
  __type?: "ThingTypeProperties";
  /**
   * <p>A list of searchable thing attribute names.</p>
   */
  searchableAttributes?: Array<string>;

  /**
   * <p>The description of the thing type.</p>
   */
  thingTypeDescription?: string;
}

export namespace ThingTypeProperties {
  export function isa(o: any): o is ThingTypeProperties {
    return __isa(o, "ThingTypeProperties");
  }
}

export interface AttachSecurityProfileRequest {
  __type?: "AttachSecurityProfileRequest";
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
  export function isa(o: any): o is AttachSecurityProfileRequest {
    return __isa(o, "AttachSecurityProfileRequest");
  }
}

export interface AttachSecurityProfileResponse {
  __type?: "AttachSecurityProfileResponse";
}

export namespace AttachSecurityProfileResponse {
  export function isa(o: any): o is AttachSecurityProfileResponse {
    return __isa(o, "AttachSecurityProfileResponse");
  }
}

export interface CancelAuditMitigationActionsTaskRequest {
  __type?: "CancelAuditMitigationActionsTaskRequest";
  /**
   * <p>The unique identifier for the task that you want to cancel. </p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditMitigationActionsTaskRequest {
  export function isa(o: any): o is CancelAuditMitigationActionsTaskRequest {
    return __isa(o, "CancelAuditMitigationActionsTaskRequest");
  }
}

export interface CancelAuditMitigationActionsTaskResponse {
  __type?: "CancelAuditMitigationActionsTaskResponse";
}

export namespace CancelAuditMitigationActionsTaskResponse {
  export function isa(o: any): o is CancelAuditMitigationActionsTaskResponse {
    return __isa(o, "CancelAuditMitigationActionsTaskResponse");
  }
}

export interface CancelAuditTaskRequest {
  __type?: "CancelAuditTaskRequest";
  /**
   * <p>The ID of the audit you want to cancel. You can only cancel an
   *               audit that is "IN_PROGRESS".</p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditTaskRequest {
  export function isa(o: any): o is CancelAuditTaskRequest {
    return __isa(o, "CancelAuditTaskRequest");
  }
}

export interface CancelAuditTaskResponse {
  __type?: "CancelAuditTaskResponse";
}

export namespace CancelAuditTaskResponse {
  export function isa(o: any): o is CancelAuditTaskResponse {
    return __isa(o, "CancelAuditTaskResponse");
  }
}

export interface CreateMitigationActionRequest {
  __type?: "CreateMitigationActionRequest";
  /**
   * <p>A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).</p>
   */
  actionName: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams: MitigationActionParams | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the mitigation action.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateMitigationActionRequest {
  export function isa(o: any): o is CreateMitigationActionRequest {
    return __isa(o, "CreateMitigationActionRequest");
  }
}

export interface CreateMitigationActionResponse {
  __type?: "CreateMitigationActionResponse";
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
  export function isa(o: any): o is CreateMitigationActionResponse {
    return __isa(o, "CreateMitigationActionResponse");
  }
}

export interface CreateScheduledAuditRequest {
  __type?: "CreateScheduledAuditRequest";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1"
   *             through "31" or "LAST". This field is required if the "frequency" parameter is
   *             set to "MONTHLY". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the
   *             "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY",
   *             "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency: AuditFrequency | string | undefined;

  /**
   * <p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the scheduled audit.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames: Array<string> | undefined;
}

export namespace CreateScheduledAuditRequest {
  export function isa(o: any): o is CreateScheduledAuditRequest {
    return __isa(o, "CreateScheduledAuditRequest");
  }
}

export interface CreateScheduledAuditResponse {
  __type?: "CreateScheduledAuditResponse";
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace CreateScheduledAuditResponse {
  export function isa(o: any): o is CreateScheduledAuditResponse {
    return __isa(o, "CreateScheduledAuditResponse");
  }
}

export interface CreateSecurityProfileRequest {
  __type?: "CreateSecurityProfileRequest";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the
   *         console.) Alerts are generated when a device (thing) violates a behavior.</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<Behavior>;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name you are giving to the security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the security profile.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateSecurityProfileRequest {
  export function isa(o: any): o is CreateSecurityProfileRequest {
    return __isa(o, "CreateSecurityProfileRequest");
  }
}

export interface CreateSecurityProfileResponse {
  __type?: "CreateSecurityProfileResponse";
  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The name you gave to the security profile.</p>
   */
  securityProfileName?: string;
}

export namespace CreateSecurityProfileResponse {
  export function isa(o: any): o is CreateSecurityProfileResponse {
    return __isa(o, "CreateSecurityProfileResponse");
  }
}

export interface DeleteAccountAuditConfigurationRequest {
  __type?: "DeleteAccountAuditConfigurationRequest";
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   */
  deleteScheduledAudits?: boolean;
}

export namespace DeleteAccountAuditConfigurationRequest {
  export function isa(o: any): o is DeleteAccountAuditConfigurationRequest {
    return __isa(o, "DeleteAccountAuditConfigurationRequest");
  }
}

export interface DeleteAccountAuditConfigurationResponse {
  __type?: "DeleteAccountAuditConfigurationResponse";
}

export namespace DeleteAccountAuditConfigurationResponse {
  export function isa(o: any): o is DeleteAccountAuditConfigurationResponse {
    return __isa(o, "DeleteAccountAuditConfigurationResponse");
  }
}

export interface DeleteMitigationActionRequest {
  __type?: "DeleteMitigationActionRequest";
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

export namespace DeleteMitigationActionRequest {
  export function isa(o: any): o is DeleteMitigationActionRequest {
    return __isa(o, "DeleteMitigationActionRequest");
  }
}

export interface DeleteMitigationActionResponse {
  __type?: "DeleteMitigationActionResponse";
}

export namespace DeleteMitigationActionResponse {
  export function isa(o: any): o is DeleteMitigationActionResponse {
    return __isa(o, "DeleteMitigationActionResponse");
  }
}

export interface DeleteScheduledAuditRequest {
  __type?: "DeleteScheduledAuditRequest";
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DeleteScheduledAuditRequest {
  export function isa(o: any): o is DeleteScheduledAuditRequest {
    return __isa(o, "DeleteScheduledAuditRequest");
  }
}

export interface DeleteScheduledAuditResponse {
  __type?: "DeleteScheduledAuditResponse";
}

export namespace DeleteScheduledAuditResponse {
  export function isa(o: any): o is DeleteScheduledAuditResponse {
    return __isa(o, "DeleteScheduledAuditResponse");
  }
}

export interface DeleteSecurityProfileRequest {
  __type?: "DeleteSecurityProfileRequest";
  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the security profile to be deleted.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DeleteSecurityProfileRequest {
  export function isa(o: any): o is DeleteSecurityProfileRequest {
    return __isa(o, "DeleteSecurityProfileRequest");
  }
}

export interface DeleteSecurityProfileResponse {
  __type?: "DeleteSecurityProfileResponse";
}

export namespace DeleteSecurityProfileResponse {
  export function isa(o: any): o is DeleteSecurityProfileResponse {
    return __isa(o, "DeleteSecurityProfileResponse");
  }
}

export interface DescribeAccountAuditConfigurationRequest {
  __type?: "DescribeAccountAuditConfigurationRequest";
}

export namespace DescribeAccountAuditConfigurationRequest {
  export function isa(o: any): o is DescribeAccountAuditConfigurationRequest {
    return __isa(o, "DescribeAccountAuditConfigurationRequest");
  }
}

export interface DescribeAccountAuditConfigurationResponse {
  __type?: "DescribeAccountAuditConfigurationResponse";
  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   */
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

  /**
   * <p>Information about the targets to which audit notifications are sent for
   *             this account.</p>
   */
  auditNotificationTargetConfigurations?: {
    [key: string]: AuditNotificationTarget;
  };

  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information
   *             about your devices, policies, certificates, and other items as required when
   *             performing an audit.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required.</p>
   */
  roleArn?: string;
}

export namespace DescribeAccountAuditConfigurationResponse {
  export function isa(o: any): o is DescribeAccountAuditConfigurationResponse {
    return __isa(o, "DescribeAccountAuditConfigurationResponse");
  }
}

export interface DescribeAuditFindingRequest {
  __type?: "DescribeAuditFindingRequest";
  /**
   * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
   */
  findingId: string | undefined;
}

export namespace DescribeAuditFindingRequest {
  export function isa(o: any): o is DescribeAuditFindingRequest {
    return __isa(o, "DescribeAuditFindingRequest");
  }
}

export interface DescribeAuditFindingResponse {
  __type?: "DescribeAuditFindingResponse";
  /**
   * <p>The findings (results) of the audit.</p>
   */
  finding?: AuditFinding;
}

export namespace DescribeAuditFindingResponse {
  export function isa(o: any): o is DescribeAuditFindingResponse {
    return __isa(o, "DescribeAuditFindingResponse");
  }
}

export interface DescribeAuditMitigationActionsTaskRequest {
  __type?: "DescribeAuditMitigationActionsTaskRequest";
  /**
   * <p>The unique identifier for the audit mitigation task.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditMitigationActionsTaskRequest {
  export function isa(o: any): o is DescribeAuditMitigationActionsTaskRequest {
    return __isa(o, "DescribeAuditMitigationActionsTaskRequest");
  }
}

export interface DescribeAuditMitigationActionsTaskResponse {
  __type?: "DescribeAuditMitigationActionsTaskResponse";
  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   */
  actionsDefinition?: Array<MitigationAction>;

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   */
  auditCheckToActionsMapping?: { [key: string]: Array<string> };

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   */
  endTime?: Date;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   */
  target?: AuditMitigationActionsTaskTarget;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   */
  taskStatistics?: { [key: string]: TaskStatisticsForAuditCheck };

  /**
   * <p>The current status of the task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace DescribeAuditMitigationActionsTaskResponse {
  export function isa(o: any): o is DescribeAuditMitigationActionsTaskResponse {
    return __isa(o, "DescribeAuditMitigationActionsTaskResponse");
  }
}

export interface DescribeAuditTaskRequest {
  __type?: "DescribeAuditTaskRequest";
  /**
   * <p>The ID of the audit whose information you want to get.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditTaskRequest {
  export function isa(o: any): o is DescribeAuditTaskRequest {
    return __isa(o, "DescribeAuditTaskRequest");
  }
}

export interface DescribeAuditTaskResponse {
  __type?: "DescribeAuditTaskResponse";
  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: { [key: string]: AuditCheckDetails };

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: TaskStatistics;

  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace DescribeAuditTaskResponse {
  export function isa(o: any): o is DescribeAuditTaskResponse {
    return __isa(o, "DescribeAuditTaskResponse");
  }
}

export interface DescribeMitigationActionRequest {
  __type?: "DescribeMitigationActionRequest";
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName: string | undefined;
}

export namespace DescribeMitigationActionRequest {
  export function isa(o: any): o is DescribeMitigationActionRequest {
    return __isa(o, "DescribeMitigationActionRequest");
  }
}

export interface DescribeMitigationActionResponse {
  __type?: "DescribeMitigationActionResponse";
  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The date and time when the mitigation action was added to your AWS account.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;
}

export namespace DescribeMitigationActionResponse {
  export function isa(o: any): o is DescribeMitigationActionResponse {
    return __isa(o, "DescribeMitigationActionResponse");
  }
}

export interface DescribeScheduledAuditRequest {
  __type?: "DescribeScheduledAuditRequest";
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DescribeScheduledAuditRequest {
  export function isa(o: any): o is DescribeScheduledAuditRequest {
    return __isa(o, "DescribeScheduledAuditRequest");
  }
}

export interface DescribeScheduledAuditResponse {
  __type?: "DescribeScheduledAuditResponse";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Will be "1"
   *             through "31" or "LAST". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. One of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. One of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: Array<string>;
}

export namespace DescribeScheduledAuditResponse {
  export function isa(o: any): o is DescribeScheduledAuditResponse {
    return __isa(o, "DescribeScheduledAuditResponse");
  }
}

export interface DescribeSecurityProfileRequest {
  __type?: "DescribeSecurityProfileRequest";
  /**
   * <p>The name of the security profile whose information you want to get.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DescribeSecurityProfileRequest {
  export function isa(o: any): o is DescribeSecurityProfileRequest {
    return __isa(o, "DescribeSecurityProfileRequest");
  }
}

export interface DescribeSecurityProfileResponse {
  __type?: "DescribeSecurityProfileResponse";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<Behavior>;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>A description of the security profile (associated with the security profile
   *         when it was created or updated).</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
   */
  version?: number;
}

export namespace DescribeSecurityProfileResponse {
  export function isa(o: any): o is DescribeSecurityProfileResponse {
    return __isa(o, "DescribeSecurityProfileResponse");
  }
}

export interface DetachSecurityProfileRequest {
  __type?: "DetachSecurityProfileRequest";
  /**
   * <p>The security profile that is detached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the thing group from which the security profile is detached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace DetachSecurityProfileRequest {
  export function isa(o: any): o is DetachSecurityProfileRequest {
    return __isa(o, "DetachSecurityProfileRequest");
  }
}

export interface DetachSecurityProfileResponse {
  __type?: "DetachSecurityProfileResponse";
}

export namespace DetachSecurityProfileResponse {
  export function isa(o: any): o is DetachSecurityProfileResponse {
    return __isa(o, "DetachSecurityProfileResponse");
  }
}

export interface ListActiveViolationsRequest {
  __type?: "ListActiveViolationsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing whose active violations are listed.</p>
   */
  thingName?: string;
}

export namespace ListActiveViolationsRequest {
  export function isa(o: any): o is ListActiveViolationsRequest {
    return __isa(o, "ListActiveViolationsRequest");
  }
}

export interface ListActiveViolationsResponse {
  __type?: "ListActiveViolationsResponse";
  /**
   * <p>The list of active violations.</p>
   */
  activeViolations?: Array<ActiveViolation>;

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListActiveViolationsResponse {
  export function isa(o: any): o is ListActiveViolationsResponse {
    return __isa(o, "ListActiveViolationsResponse");
  }
}

export interface ListAuditFindingsRequest {
  __type?: "ListAuditFindingsRequest";
  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date;

  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;
}

export namespace ListAuditFindingsRequest {
  export function isa(o: any): o is ListAuditFindingsRequest {
    return __isa(o, "ListAuditFindingsRequest");
  }
}

export interface ListAuditFindingsResponse {
  __type?: "ListAuditFindingsResponse";
  /**
   * <p>The findings (results) of the audit.</p>
   */
  findings?: Array<AuditFinding>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditFindingsResponse {
  export function isa(o: any): o is ListAuditFindingsResponse {
    return __isa(o, "ListAuditFindingsResponse");
  }
}

export interface ListAuditMitigationActionsExecutionsRequest {
  __type?: "ListAuditMitigationActionsExecutionsRequest";
  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   */
  findingId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string | undefined;
}

export namespace ListAuditMitigationActionsExecutionsRequest {
  export function isa(
    o: any
  ): o is ListAuditMitigationActionsExecutionsRequest {
    return __isa(o, "ListAuditMitigationActionsExecutionsRequest");
  }
}

export interface ListAuditMitigationActionsExecutionsResponse {
  __type?: "ListAuditMitigationActionsExecutionsResponse";
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   */
  actionsExecutions?: Array<AuditMitigationActionExecutionMetadata>;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsExecutionsResponse {
  export function isa(
    o: any
  ): o is ListAuditMitigationActionsExecutionsResponse {
    return __isa(o, "ListAuditMitigationActionsExecutionsResponse");
  }
}

export interface ListAuditMitigationActionsTasksRequest {
  __type?: "ListAuditMitigationActionsTasksRequest";
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   */
  findingId?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace ListAuditMitigationActionsTasksRequest {
  export function isa(o: any): o is ListAuditMitigationActionsTasksRequest {
    return __isa(o, "ListAuditMitigationActionsTasksRequest");
  }
}

export interface ListAuditMitigationActionsTasksResponse {
  __type?: "ListAuditMitigationActionsTasksResponse";
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: Array<AuditMitigationActionsTaskMetadata>;
}

export namespace ListAuditMitigationActionsTasksResponse {
  export function isa(o: any): o is ListAuditMitigationActionsTasksResponse {
    return __isa(o, "ListAuditMitigationActionsTasksResponse");
  }
}

export interface ListAuditTasksRequest {
  __type?: "ListAuditTasksRequest";
  /**
   * <p>The end of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (180 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace ListAuditTasksRequest {
  export function isa(o: any): o is ListAuditTasksRequest {
    return __isa(o, "ListAuditTasksRequest");
  }
}

export interface ListAuditTasksResponse {
  __type?: "ListAuditTasksResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: Array<AuditTaskMetadata>;
}

export namespace ListAuditTasksResponse {
  export function isa(o: any): o is ListAuditTasksResponse {
    return __isa(o, "ListAuditTasksResponse");
  }
}

export interface ListMitigationActionsRequest {
  __type?: "ListMitigationActionsRequest";
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsRequest {
  export function isa(o: any): o is ListMitigationActionsRequest {
    return __isa(o, "ListMitigationActionsRequest");
  }
}

export interface ListMitigationActionsResponse {
  __type?: "ListMitigationActionsResponse";
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   */
  actionIdentifiers?: Array<MitigationActionIdentifier>;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsResponse {
  export function isa(o: any): o is ListMitigationActionsResponse {
    return __isa(o, "ListMitigationActionsResponse");
  }
}

export interface ListScheduledAuditsRequest {
  __type?: "ListScheduledAuditsRequest";
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListScheduledAuditsRequest {
  export function isa(o: any): o is ListScheduledAuditsRequest {
    return __isa(o, "ListScheduledAuditsRequest");
  }
}

export interface ListScheduledAuditsResponse {
  __type?: "ListScheduledAuditsResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: Array<ScheduledAuditMetadata>;
}

export namespace ListScheduledAuditsResponse {
  export function isa(o: any): o is ListScheduledAuditsResponse {
    return __isa(o, "ListScheduledAuditsResponse");
  }
}

export interface ListSecurityProfilesForTargetRequest {
  __type?: "ListSecurityProfilesForTargetRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

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
  export function isa(o: any): o is ListSecurityProfilesForTargetRequest {
    return __isa(o, "ListSecurityProfilesForTargetRequest");
  }
}

export interface ListSecurityProfilesForTargetResponse {
  __type?: "ListSecurityProfilesForTargetResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: Array<SecurityProfileTargetMapping>;
}

export namespace ListSecurityProfilesForTargetResponse {
  export function isa(o: any): o is ListSecurityProfilesForTargetResponse {
    return __isa(o, "ListSecurityProfilesForTargetResponse");
  }
}

export interface ListSecurityProfilesRequest {
  __type?: "ListSecurityProfilesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesRequest {
  export function isa(o: any): o is ListSecurityProfilesRequest {
    return __isa(o, "ListSecurityProfilesRequest");
  }
}

export interface ListSecurityProfilesResponse {
  __type?: "ListSecurityProfilesResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: Array<SecurityProfileIdentifier>;
}

export namespace ListSecurityProfilesResponse {
  export function isa(o: any): o is ListSecurityProfilesResponse {
    return __isa(o, "ListSecurityProfilesResponse");
  }
}

export interface ListTargetsForSecurityProfileRequest {
  __type?: "ListTargetsForSecurityProfileRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;
}

export namespace ListTargetsForSecurityProfileRequest {
  export function isa(o: any): o is ListTargetsForSecurityProfileRequest {
    return __isa(o, "ListTargetsForSecurityProfileRequest");
  }
}

export interface ListTargetsForSecurityProfileResponse {
  __type?: "ListTargetsForSecurityProfileResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: Array<SecurityProfileTarget>;
}

export namespace ListTargetsForSecurityProfileResponse {
  export function isa(o: any): o is ListTargetsForSecurityProfileResponse {
    return __isa(o, "ListTargetsForSecurityProfileResponse");
  }
}

export interface ListViolationEventsRequest {
  __type?: "ListViolationEventsRequest";
  /**
   * <p>The end time for the alerts to be listed.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;
}

export namespace ListViolationEventsRequest {
  export function isa(o: any): o is ListViolationEventsRequest {
    return __isa(o, "ListViolationEventsRequest");
  }
}

export interface ListViolationEventsResponse {
  __type?: "ListViolationEventsResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: Array<ViolationEvent>;
}

export namespace ListViolationEventsResponse {
  export function isa(o: any): o is ListViolationEventsResponse {
    return __isa(o, "ListViolationEventsResponse");
  }
}

export interface StartAuditMitigationActionsTaskRequest {
  __type?: "StartAuditMitigationActionsTaskRequest";
  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.</p>
   */
  auditCheckToActionsMapping: { [key: string]: Array<string> } | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply them to a type of audit check, to all findings from an audit, or to a speecific set of findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;
}

export namespace StartAuditMitigationActionsTaskRequest {
  export function isa(o: any): o is StartAuditMitigationActionsTaskRequest {
    return __isa(o, "StartAuditMitigationActionsTaskRequest");
  }
}

export interface StartAuditMitigationActionsTaskResponse {
  __type?: "StartAuditMitigationActionsTaskResponse";
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

export namespace StartAuditMitigationActionsTaskResponse {
  export function isa(o: any): o is StartAuditMitigationActionsTaskResponse {
    return __isa(o, "StartAuditMitigationActionsTaskResponse");
  }
}

export interface StartOnDemandAuditTaskRequest {
  __type?: "StartOnDemandAuditTaskRequest";
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: Array<string> | undefined;
}

export namespace StartOnDemandAuditTaskRequest {
  export function isa(o: any): o is StartOnDemandAuditTaskRequest {
    return __isa(o, "StartOnDemandAuditTaskRequest");
  }
}

export interface StartOnDemandAuditTaskResponse {
  __type?: "StartOnDemandAuditTaskResponse";
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

export namespace StartOnDemandAuditTaskResponse {
  export function isa(o: any): o is StartOnDemandAuditTaskResponse {
    return __isa(o, "StartOnDemandAuditTaskResponse");
  }
}

export interface UpdateAccountAuditConfigurationRequest {
  __type?: "UpdateAccountAuditConfigurationRequest";
  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *           <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *           <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check
   *             from the scheduled audit or delete the scheduled audit itself.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: {
    [key: string]: AuditNotificationTarget;
  };

  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information
   *             about your devices, policies, certificates and other items as required when
   *             performing an audit.</p>
   */
  roleArn?: string;
}

export namespace UpdateAccountAuditConfigurationRequest {
  export function isa(o: any): o is UpdateAccountAuditConfigurationRequest {
    return __isa(o, "UpdateAccountAuditConfigurationRequest");
  }
}

export interface UpdateAccountAuditConfigurationResponse {
  __type?: "UpdateAccountAuditConfigurationResponse";
}

export namespace UpdateAccountAuditConfigurationResponse {
  export function isa(o: any): o is UpdateAccountAuditConfigurationResponse {
    return __isa(o, "UpdateAccountAuditConfigurationResponse");
  }
}

export interface UpdateMitigationActionRequest {
  __type?: "UpdateMitigationActionRequest";
  /**
   * <p>The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;
}

export namespace UpdateMitigationActionRequest {
  export function isa(o: any): o is UpdateMitigationActionRequest {
    return __isa(o, "UpdateMitigationActionRequest");
  }
}

export interface UpdateMitigationActionResponse {
  __type?: "UpdateMitigationActionResponse";
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
  export function isa(o: any): o is UpdateMitigationActionResponse {
    return __isa(o, "UpdateMitigationActionResponse");
  }
}

export interface UpdateScheduledAuditRequest {
  __type?: "UpdateScheduledAuditRequest";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1"
   *             through "31" or "LAST". This field is required if the "frequency" parameter is
   *             set to "MONTHLY". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the
   *             "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: Array<string>;
}

export namespace UpdateScheduledAuditRequest {
  export function isa(o: any): o is UpdateScheduledAuditRequest {
    return __isa(o, "UpdateScheduledAuditRequest");
  }
}

export interface UpdateScheduledAuditResponse {
  __type?: "UpdateScheduledAuditResponse";
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace UpdateScheduledAuditResponse {
  export function isa(o: any): o is UpdateScheduledAuditResponse {
    return __isa(o, "UpdateScheduledAuditResponse");
  }
}

export interface UpdateSecurityProfileRequest {
  __type?: "UpdateSecurityProfileRequest";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<Behavior>;

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;
}

export namespace UpdateSecurityProfileRequest {
  export function isa(o: any): o is UpdateSecurityProfileRequest {
    return __isa(o, "UpdateSecurityProfileRequest");
  }
}

export interface UpdateSecurityProfileResponse {
  __type?: "UpdateSecurityProfileResponse";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the security profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: Array<string>;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Array<Behavior>;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The updated version of the security profile.</p>
   */
  version?: number;
}

export namespace UpdateSecurityProfileResponse {
  export function isa(o: any): o is UpdateSecurityProfileResponse {
    return __isa(o, "UpdateSecurityProfileResponse");
  }
}

export interface ValidateSecurityProfileBehaviorsRequest {
  __type?: "ValidateSecurityProfileBehaviorsRequest";
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Array<Behavior> | undefined;
}

export namespace ValidateSecurityProfileBehaviorsRequest {
  export function isa(o: any): o is ValidateSecurityProfileBehaviorsRequest {
    return __isa(o, "ValidateSecurityProfileBehaviorsRequest");
  }
}

export interface ValidateSecurityProfileBehaviorsResponse {
  __type?: "ValidateSecurityProfileBehaviorsResponse";
  /**
   * <p>True if the behaviors were valid.</p>
   */
  valid?: boolean;

  /**
   * <p>The list of any errors found in the behaviors.</p>
   */
  validationErrors?: Array<ValidationError>;
}

export namespace ValidateSecurityProfileBehaviorsResponse {
  export function isa(o: any): o is ValidateSecurityProfileBehaviorsResponse {
    return __isa(o, "ValidateSecurityProfileBehaviorsResponse");
  }
}

/**
 * <p>Parameters used when defining a mitigation action that move a set of things to a thing group.</p>
 */
export interface AddThingsToThingGroupParams {
  __type?: "AddThingsToThingGroupParams";
  /**
   * <p>Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic things groups.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you cannot add a thing to more than one group in the same hierarchy.</p>
   */
  thingGroupNames: Array<string> | undefined;
}

export namespace AddThingsToThingGroupParams {
  export function isa(o: any): o is AddThingsToThingGroupParams {
    return __isa(o, "AddThingsToThingGroupParams");
  }
}

export enum CACertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE"
}

export enum DeviceCertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE"
}

/**
 * <p>Parameters used when defining a mitigation action that enable AWS IoT logging.</p>
 */
export interface EnableIoTLoggingParams {
  __type?: "EnableIoTLoggingParams";
  /**
   * <p>Specifies the types of information to be logged.</p>
   */
  logLevel: LogLevel | string | undefined;

  /**
   * <p>The ARN of the IAM role used for logging.</p>
   */
  roleArnForLogging: string | undefined;
}

export namespace EnableIoTLoggingParams {
  export function isa(o: any): o is EnableIoTLoggingParams {
    return __isa(o, "EnableIoTLoggingParams");
  }
}

/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface MitigationAction {
  __type?: "MitigationAction";
  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  id?: string;

  /**
   * <p>A user-friendly name for the mitigation action.</p>
   */
  name?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  roleArn?: string;
}

export namespace MitigationAction {
  export function isa(o: any): o is MitigationAction {
    return __isa(o, "MitigationAction");
  }
}

/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
  __type?: "MitigationActionIdentifier";
  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}

export namespace MitigationActionIdentifier {
  export function isa(o: any): o is MitigationActionIdentifier {
    return __isa(o, "MitigationActionIdentifier");
  }
}

/**
 * <p>The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).</p>
 */
export interface MitigationActionParams {
  __type?: "MitigationActionParams";
  /**
   * <p>Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.</p>
   */
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  /**
   * <p>Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.</p>
   */
  enableIoTLoggingParams?: EnableIoTLoggingParams;

  /**
   * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
   */
  publishFindingToSnsParams?: PublishFindingToSnsParams;

  /**
   * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
   */
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
   */
  updateCACertificateParams?: UpdateCACertificateParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
   */
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
}

export namespace MitigationActionParams {
  export function isa(o: any): o is MitigationActionParams {
    return __isa(o, "MitigationActionParams");
  }
}

export enum MitigationActionType {
  ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE"
}

export enum PolicyTemplateName {
  BLANK_POLICY = "BLANK_POLICY"
}

/**
 * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
 */
export interface PublishFindingToSnsParams {
  __type?: "PublishFindingToSnsParams";
  /**
   * <p>The ARN of the topic to which you want to publish the findings.</p>
   */
  topicArn: string | undefined;
}

export namespace PublishFindingToSnsParams {
  export function isa(o: any): o is PublishFindingToSnsParams {
    return __isa(o, "PublishFindingToSnsParams");
  }
}

/**
 * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
 */
export interface ReplaceDefaultPolicyVersionParams {
  __type?: "ReplaceDefaultPolicyVersionParams";
  /**
   * <p>The name of the template to be applied. The only supported value is <code>BLANK_POLICY</code>.</p>
   */
  templateName: PolicyTemplateName | string | undefined;
}

export namespace ReplaceDefaultPolicyVersionParams {
  export function isa(o: any): o is ReplaceDefaultPolicyVersionParams {
    return __isa(o, "ReplaceDefaultPolicyVersionParams");
  }
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
 */
export interface UpdateCACertificateParams {
  __type?: "UpdateCACertificateParams";
  /**
   * <p>The action that you want to apply to the CA cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: CACertificateUpdateAction | string | undefined;
}

export namespace UpdateCACertificateParams {
  export function isa(o: any): o is UpdateCACertificateParams {
    return __isa(o, "UpdateCACertificateParams");
  }
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
 */
export interface UpdateDeviceCertificateParams {
  __type?: "UpdateDeviceCertificateParams";
  /**
   * <p>The action that you want to apply to the device cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: DeviceCertificateUpdateAction | string | undefined;
}

export namespace UpdateDeviceCertificateParams {
  export function isa(o: any): o is UpdateDeviceCertificateParams {
    return __isa(o, "UpdateDeviceCertificateParams");
  }
}

/**
 * <p>Which audit checks are enabled and disabled for this account.</p>
 */
export interface AuditCheckConfiguration {
  __type?: "AuditCheckConfiguration";
  /**
   * <p>True if this audit check is enabled for this account.</p>
   */
  enabled?: boolean;
}

export namespace AuditCheckConfiguration {
  export function isa(o: any): o is AuditCheckConfiguration {
    return __isa(o, "AuditCheckConfiguration");
  }
}

/**
 * <p>Information about the audit check.</p>
 */
export interface AuditCheckDetails {
  __type?: "AuditCheckDetails";
  /**
   * <p>True if the check is complete and found all resources compliant.</p>
   */
  checkCompliant?: boolean;

  /**
   * <p>The completion status of this check. One of "IN_PROGRESS", "WAITING_FOR_DATA_COLLECTION",
   *         "CANCELED", "COMPLETED_COMPLIANT", "COMPLETED_NON_COMPLIANT", or "FAILED".</p>
   */
  checkRunStatus?: AuditCheckRunStatus | string;

  /**
   * <p>The code of any error encountered when this check is performed during this audit.
   *           One of "INSUFFICIENT_PERMISSIONS" or "AUDIT_CHECK_DISABLED".</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with any error encountered when this check is performed during this audit.</p>
   */
  message?: string;

  /**
   * <p>The number of resources that were found noncompliant during the check.</p>
   */
  nonCompliantResourcesCount?: number;

  /**
   * <p>The number of resources on which the check was performed.</p>
   */
  totalResourcesCount?: number;
}

export namespace AuditCheckDetails {
  export function isa(o: any): o is AuditCheckDetails {
    return __isa(o, "AuditCheckDetails");
  }
}

export enum AuditCheckRunStatus {
  CANCELED = "CANCELED",
  COMPLETED_COMPLIANT = "COMPLETED_COMPLIANT",
  COMPLETED_NON_COMPLIANT = "COMPLETED_NON_COMPLIANT",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_FOR_DATA_COLLECTION = "WAITING_FOR_DATA_COLLECTION"
}

/**
 * <p>The findings (results) of the audit.</p>
 */
export interface AuditFinding {
  __type?: "AuditFinding";
  /**
   * <p>The audit check that generated this result.</p>
   */
  checkName?: string;

  /**
   * <p>A unique identifier for this set of audit findings. This identifier is used to apply
   *       mitigation tasks to one or more sets of findings.</p>
   */
  findingId?: string;

  /**
   * <p>The time the result (finding) was discovered.</p>
   */
  findingTime?: Date;

  /**
   * <p>The resource that was found to be noncompliant with the
   *         audit check.</p>
   */
  nonCompliantResource?: NonCompliantResource;

  /**
   * <p>The reason the resource was noncompliant.</p>
   */
  reasonForNonCompliance?: string;

  /**
   * <p>A code that indicates the reason that the resource was noncompliant.</p>
   */
  reasonForNonComplianceCode?: string;

  /**
   * <p>The list of related resources.</p>
   */
  relatedResources?: Array<RelatedResource>;

  /**
   * <p>The severity of the result (finding).</p>
   */
  severity?: AuditFindingSeverity | string;

  /**
   * <p>The ID of the audit that generated this result (finding).</p>
   */
  taskId?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;
}

export namespace AuditFinding {
  export function isa(o: any): o is AuditFinding {
    return __isa(o, "AuditFinding");
  }
}

export enum AuditFindingSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM"
}

export enum AuditFrequency {
  BIWEEKLY = "BIWEEKLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY"
}

/**
 * <p>Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.</p>
 */
export interface AuditMitigationActionExecutionMetadata {
  __type?: "AuditMitigationActionExecutionMetadata";
  /**
   * <p>The unique identifier for the mitigation action being applied by the task.</p>
   */
  actionId?: string;

  /**
   * <p>The friendly name of the mitigation action being applied by the task.</p>
   */
  actionName?: string;

  /**
   * <p>The date and time when the task was completed or canceled. Blank if the task is still running.</p>
   */
  endTime?: Date;

  /**
   * <p>If an error occurred, the code that indicates which type of error occurred.</p>
   */
  errorCode?: string;

  /**
   * <p>The unique identifier for the findings to which the task and associated mitigation action are applied.</p>
   */
  findingId?: string;

  /**
   * <p>If an error occurred, a message that describes the error.</p>
   */
  message?: string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The current status of the task being executed.</p>
   */
  status?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>The unique identifier for the task that applies the mitigation action.</p>
   */
  taskId?: string;
}

export namespace AuditMitigationActionExecutionMetadata {
  export function isa(o: any): o is AuditMitigationActionExecutionMetadata {
    return __isa(o, "AuditMitigationActionExecutionMetadata");
  }
}

export enum AuditMitigationActionsExecutionStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED"
}

/**
 * <p>Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.</p>
 */
export interface AuditMitigationActionsTaskMetadata {
  __type?: "AuditMitigationActionsTaskMetadata";
  /**
   * <p>The time at which the audit mitigation actions task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The unique identifier for the task.</p>
   */
  taskId?: string;

  /**
   * <p>The current state of the audit mitigation actions task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace AuditMitigationActionsTaskMetadata {
  export function isa(o: any): o is AuditMitigationActionsTaskMetadata {
    return __isa(o, "AuditMitigationActionsTaskMetadata");
  }
}

export enum AuditMitigationActionsTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.</p>
 */
export interface AuditMitigationActionsTaskTarget {
  __type?: "AuditMitigationActionsTaskTarget";
  /**
   * <p>Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.</p>
   */
  auditCheckToReasonCodeFilter?: { [key: string]: Array<string> };

  /**
   * <p>If the task will apply a mitigation action to findings from a specific audit, this value uniquely identifies the audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.</p>
   */
  findingIds?: Array<string>;
}

export namespace AuditMitigationActionsTaskTarget {
  export function isa(o: any): o is AuditMitigationActionsTaskTarget {
    return __isa(o, "AuditMitigationActionsTaskTarget");
  }
}

/**
 * <p>Information about the targets to which audit notifications are sent.</p>
 */
export interface AuditNotificationTarget {
  __type?: "AuditNotificationTarget";
  /**
   * <p>True if notifications to the target are enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role that grants permission to send notifications to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>The ARN of the target (SNS topic) to which audit notifications are sent.</p>
   */
  targetArn?: string;
}

export namespace AuditNotificationTarget {
  export function isa(o: any): o is AuditNotificationTarget {
    return __isa(o, "AuditNotificationTarget");
  }
}

export enum AuditNotificationType {
  SNS = "SNS"
}

/**
 * <p>The audits that were performed.</p>
 */
export interface AuditTaskMetadata {
  __type?: "AuditTaskMetadata";
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
  export function isa(o: any): o is AuditTaskMetadata {
    return __isa(o, "AuditTaskMetadata");
  }
}

export enum AuditTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

export enum AuditTaskType {
  ON_DEMAND_AUDIT_TASK = "ON_DEMAND_AUDIT_TASK",
  SCHEDULED_AUDIT_TASK = "SCHEDULED_AUDIT_TASK"
}

export enum DayOfWeek {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED"
}

/**
 * <p>Information about the resource that was noncompliant with the audit check.</p>
 */
export interface NonCompliantResource {
  __type?: "NonCompliantResource";
  /**
   * <p>Other information about the noncompliant resource.</p>
   */
  additionalInfo?: { [key: string]: string };

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The type of the noncompliant resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace NonCompliantResource {
  export function isa(o: any): o is NonCompliantResource {
    return __isa(o, "NonCompliantResource");
  }
}

/**
 * <p>Information about the version of the policy associated with the resource.</p>
 */
export interface PolicyVersionIdentifier {
  __type?: "PolicyVersionIdentifier";
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
  export function isa(o: any): o is PolicyVersionIdentifier {
    return __isa(o, "PolicyVersionIdentifier");
  }
}

/**
 * <p>Information about a related resource.</p>
 */
export interface RelatedResource {
  __type?: "RelatedResource";
  /**
   * <p>Other information about the resource.</p>
   */
  additionalInfo?: { [key: string]: string };

  /**
   * <p>Information that identifies the resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace RelatedResource {
  export function isa(o: any): o is RelatedResource {
    return __isa(o, "RelatedResource");
  }
}

/**
 * <p>Information that identifies the noncompliant resource.</p>
 */
export interface ResourceIdentifier {
  __type?: "ResourceIdentifier";
  /**
   * <p>The account with which the resource is associated.</p>
   */
  account?: string;

  /**
   * <p>The ID of the CA certificate used to authorize the certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The client ID.</p>
   */
  clientId?: string;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The ID of the certificate attached to the resource.</p>
   */
  deviceCertificateId?: string;

  /**
   * <p>The ARN of the IAM role that has overly permissive actions.</p>
   */
  iamRoleArn?: string;

  /**
   * <p>The version of the policy associated with the resource.</p>
   */
  policyVersionIdentifier?: PolicyVersionIdentifier;

  /**
   * <p>The ARN of the role alias that has overly permissive actions.</p>
   */
  roleAliasArn?: string;
}

export namespace ResourceIdentifier {
  export function isa(o: any): o is ResourceIdentifier {
    return __isa(o, "ResourceIdentifier");
  }
}

export enum ResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CLIENT_ID = "CLIENT_ID",
  COGNITO_IDENTITY_POOL = "COGNITO_IDENTITY_POOL",
  DEVICE_CERTIFICATE = "DEVICE_CERTIFICATE",
  IAM_ROLE = "IAM_ROLE",
  IOT_POLICY = "IOT_POLICY",
  ROLE_ALIAS = "ROLE_ALIAS"
}

/**
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
  __type?: "ScheduledAuditMetadata";
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

  /**
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;
}

export namespace ScheduledAuditMetadata {
  export function isa(o: any): o is ScheduledAuditMetadata {
    return __isa(o, "ScheduledAuditMetadata");
  }
}

/**
 * <p>This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.</p>
 */
export interface TaskAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TaskAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TaskAlreadyExistsException {
  export function isa(o: any): o is TaskAlreadyExistsException {
    return __isa(o, "TaskAlreadyExistsException");
  }
}

/**
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface TaskStatistics {
  __type?: "TaskStatistics";
  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   */
  canceledChecks?: number;

  /**
   * <p>The number of checks that found compliant resources.</p>
   */
  compliantChecks?: number;

  /**
   * <p>The number of checks.</p>
   */
  failedChecks?: number;

  /**
   * <p>The number of checks in progress.</p>
   */
  inProgressChecks?: number;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   */
  nonCompliantChecks?: number;

  /**
   * <p>The number of checks in this audit.</p>
   */
  totalChecks?: number;

  /**
   * <p>The number of checks waiting for data collection.</p>
   */
  waitingForDataCollectionChecks?: number;
}

export namespace TaskStatistics {
  export function isa(o: any): o is TaskStatistics {
    return __isa(o, "TaskStatistics");
  }
}

/**
 * <p>Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.</p>
 */
export interface TaskStatisticsForAuditCheck {
  __type?: "TaskStatisticsForAuditCheck";
  /**
   * <p>The number of findings to which the mitigation action task was canceled when applied.</p>
   */
  canceledFindingsCount?: number;

  /**
   * <p>The number of findings for which at least one of the actions failed when applied.</p>
   */
  failedFindingsCount?: number;

  /**
   * <p>The number of findings skipped because of filter conditions provided in the parameters to the command.</p>
   */
  skippedFindingsCount?: number;

  /**
   * <p>The number of findings for which all mitigation actions succeeded when applied.</p>
   */
  succeededFindingsCount?: number;

  /**
   * <p>The total number of findings to which a task is being applied.</p>
   */
  totalFindingsCount?: number;
}

export namespace TaskStatisticsForAuditCheck {
  export function isa(o: any): o is TaskStatisticsForAuditCheck {
    return __isa(o, "TaskStatisticsForAuditCheck");
  }
}

/**
 * <p>Information about an active Device Defender security profile behavior violation.</p>
 */
export interface ActiveViolation {
  __type?: "ActiveViolation";
  /**
   * <p>The behavior which is being violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The time the most recent violation occurred.</p>
   */
  lastViolationTime?: Date;

  /**
   * <p>The value of the metric (the measurement) which caused the most recent violation.</p>
   */
  lastViolationValue?: MetricValue;

  /**
   * <p>The security profile whose behavior is in violation.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing responsible for the active violation.</p>
   */
  thingName?: string;

  /**
   * <p>The ID of the active violation.</p>
   */
  violationId?: string;

  /**
   * <p>The time the violation started.</p>
   */
  violationStartTime?: Date;
}

export namespace ActiveViolation {
  export function isa(o: any): o is ActiveViolation {
    return __isa(o, "ActiveViolation");
  }
}

/**
 * <p>A structure containing the alert target ARN and the role ARN.</p>
 */
export interface AlertTarget {
  __type?: "AlertTarget";
  /**
   * <p>The ARN of the notification target to which alerts are sent.</p>
   */
  alertTargetArn: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to send alerts to the
   *         notification target.</p>
   */
  roleArn: string | undefined;
}

export namespace AlertTarget {
  export function isa(o: any): o is AlertTarget {
    return __isa(o, "AlertTarget");
  }
}

export enum AlertTargetType {
  SNS = "SNS"
}

/**
 * <p>A Device Defender security profile behavior.</p>
 */
export interface Behavior {
  __type?: "Behavior";
  /**
   * <p>The criteria that determine if a device is behaving normally in regard to
   *           the <code>metric</code>.</p>
   */
  criteria?: BehaviorCriteria;

  /**
   * <p>What is measured by the behavior.</p>
   */
  metric?: string;

  /**
   * <p>The name you have given to the behavior.</p>
   */
  name: string | undefined;
}

export namespace Behavior {
  export function isa(o: any): o is Behavior {
    return __isa(o, "Behavior");
  }
}

/**
 * <p>The criteria by which the behavior is determined to be normal.</p>
 */
export interface BehaviorCriteria {
  __type?: "BehaviorCriteria";
  /**
   * <p>The operator that relates the thing measured (<code>metric</code>) to the criteria
   *           (containing a <code>value</code> or <code>statisticalThreshold</code>).</p>
   */
  comparisonOperator?: ComparisonOperator | string;

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
   * <p>Use this to specify the time duration over which the behavior is evaluated,
   *           for those criteria which have a time dimension (for example, <code>NUM_MESSAGES_SENT</code>).
   *           For a <code>statisticalThreshhold</code> metric comparison, measurements from all devices are
   *           accumulated over this time duration before being used to calculate percentiles, and later,
   *           measurements from an individual device are also accumulated over this time duration before being
   *           given a percentile rank.</p>
   */
  durationSeconds?: number;

  /**
   * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior
   *           is determined to be in compliance or in violation of the behavior.</p>
   */
  statisticalThreshold?: StatisticalThreshold;

  /**
   * <p>The value to be compared with the <code>metric</code>.</p>
   */
  value?: MetricValue;
}

export namespace BehaviorCriteria {
  export function isa(o: any): o is BehaviorCriteria {
    return __isa(o, "BehaviorCriteria");
  }
}

export enum ComparisonOperator {
  GREATER_THAN = "greater-than",
  GREATER_THAN_EQUALS = "greater-than-equals",
  IN_CIDR_SET = "in-cidr-set",
  IN_PORT_SET = "in-port-set",
  LESS_THAN = "less-than",
  LESS_THAN_EQUALS = "less-than-equals",
  NOT_IN_CIDR_SET = "not-in-cidr-set",
  NOT_IN_PORT_SET = "not-in-port-set"
}

/**
 * <p>The value to be compared with the <code>metric</code>.</p>
 */
export interface MetricValue {
  __type?: "MetricValue";
  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  cidrs?: Array<string>;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a numeric value, use this
   *           to specify that numeric value to be compared with the <code>metric</code>.</p>
   */
  count?: number;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of ports, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  ports?: Array<number>;
}

export namespace MetricValue {
  export function isa(o: any): o is MetricValue {
    return __isa(o, "MetricValue");
  }
}

/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
  __type?: "SecurityProfileIdentifier";
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name you have given to the security profile.</p>
   */
  name: string | undefined;
}

export namespace SecurityProfileIdentifier {
  export function isa(o: any): o is SecurityProfileIdentifier {
    return __isa(o, "SecurityProfileIdentifier");
  }
}

/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
  __type?: "SecurityProfileTarget";
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileTarget {
  export function isa(o: any): o is SecurityProfileTarget {
    return __isa(o, "SecurityProfileTarget");
  }
}

/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
  __type?: "SecurityProfileTargetMapping";
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
  export function isa(o: any): o is SecurityProfileTargetMapping {
    return __isa(o, "SecurityProfileTargetMapping");
  }
}

/**
 * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior
 *           is determined to be in compliance or in violation of the behavior.</p>
 */
export interface StatisticalThreshold {
  __type?: "StatisticalThreshold";
  /**
   * <p>The percentile which resolves to a threshold value by which compliance with a behavior is
   *           determined. Metrics are collected over the specified period (<code>durationSeconds</code>) from
   *           all reporting devices in your account and statistical ranks are calculated. Then, the measurements
   *           from a device are collected over the same period. If the accumulated measurements from the device
   *           fall above or below (<code>comparisonOperator</code>) the value associated with the percentile
   *           specified, then the device is considered to be in compliance with the behavior, otherwise a
   *           violation occurs.</p>
   */
  statistic?: string;
}

export namespace StatisticalThreshold {
  export function isa(o: any): o is StatisticalThreshold {
    return __isa(o, "StatisticalThreshold");
  }
}

/**
 * <p>Information about an error found in a behavior specification.</p>
 */
export interface ValidationError {
  __type?: "ValidationError";
  /**
   * <p>The description of an error found in the behaviors.</p>
   */
  errorMessage?: string;
}

export namespace ValidationError {
  export function isa(o: any): o is ValidationError {
    return __isa(o, "ValidationError");
  }
}

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  __type?: "ViolationEvent";
  /**
   * <p>The behavior which was violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType | string;

  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;
}

export namespace ViolationEvent {
  export function isa(o: any): o is ViolationEvent {
    return __isa(o, "ViolationEvent");
  }
}

export enum ViolationEventType {
  ALARM_CLEARED = "alarm-cleared",
  ALARM_INVALIDATED = "alarm-invalidated",
  IN_ALARM = "in-alarm"
}

export interface CreateStreamRequest {
  __type?: "CreateStreamRequest";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files: Array<StreamFile> | undefined;

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateStreamRequest {
  export function isa(o: any): o is CreateStreamRequest {
    return __isa(o, "CreateStreamRequest");
  }
}

export interface CreateStreamResponse {
  __type?: "CreateStreamResponse";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The version of the stream.</p>
   */
  streamVersion?: number;
}

export namespace CreateStreamResponse {
  export function isa(o: any): o is CreateStreamResponse {
    return __isa(o, "CreateStreamResponse");
  }
}

export interface DeleteStreamRequest {
  __type?: "DeleteStreamRequest";
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DeleteStreamRequest {
  export function isa(o: any): o is DeleteStreamRequest {
    return __isa(o, "DeleteStreamRequest");
  }
}

export interface DeleteStreamResponse {
  __type?: "DeleteStreamResponse";
}

export namespace DeleteStreamResponse {
  export function isa(o: any): o is DeleteStreamResponse {
    return __isa(o, "DeleteStreamResponse");
  }
}

export interface DescribeStreamRequest {
  __type?: "DescribeStreamRequest";
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DescribeStreamRequest {
  export function isa(o: any): o is DescribeStreamRequest {
    return __isa(o, "DescribeStreamRequest");
  }
}

export interface DescribeStreamResponse {
  __type?: "DescribeStreamResponse";
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: StreamInfo;
}

export namespace DescribeStreamResponse {
  export function isa(o: any): o is DescribeStreamResponse {
    return __isa(o, "DescribeStreamResponse");
  }
}

export interface ListStreamsRequest {
  __type?: "ListStreamsRequest";
  /**
   * <p>Set to true to return the list of streams in ascending order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The maximum number of results to return at a time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsRequest {
  export function isa(o: any): o is ListStreamsRequest {
    return __isa(o, "ListStreamsRequest");
  }
}

export interface ListStreamsResponse {
  __type?: "ListStreamsResponse";
  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of streams.</p>
   */
  streams?: Array<StreamSummary>;
}

export namespace ListStreamsResponse {
  export function isa(o: any): o is ListStreamsResponse {
    return __isa(o, "ListStreamsResponse");
  }
}

/**
 * <p>Represents a file to stream.</p>
 */
export interface StreamFile {
  __type?: "StreamFile";
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
  export function isa(o: any): o is StreamFile {
    return __isa(o, "StreamFile");
  }
}

/**
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
  __type?: "StreamInfo";
  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: Array<StreamFile>;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>An IAM role AWS IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace StreamInfo {
  export function isa(o: any): o is StreamInfo {
    return __isa(o, "StreamInfo");
  }
}

/**
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
  __type?: "StreamSummary";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace StreamSummary {
  export function isa(o: any): o is StreamSummary {
    return __isa(o, "StreamSummary");
  }
}

export interface UpdateStreamRequest {
  __type?: "UpdateStreamRequest";
  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files associated with the stream.</p>
   */
  files?: Array<StreamFile>;

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace UpdateStreamRequest {
  export function isa(o: any): o is UpdateStreamRequest {
    return __isa(o, "UpdateStreamRequest");
  }
}

export interface UpdateStreamResponse {
  __type?: "UpdateStreamResponse";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace UpdateStreamResponse {
  export function isa(o: any): o is UpdateStreamResponse {
    return __isa(o, "UpdateStreamResponse");
  }
}

/**
 * <p>The S3 location.</p>
 */
export interface S3Location {
  __type?: "S3Location";
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
  export function isa(o: any): o is S3Location {
    return __isa(o, "S3Location");
  }
}
