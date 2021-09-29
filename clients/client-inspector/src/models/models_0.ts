import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AccessDeniedErrorCode {
  ACCESS_DENIED_TO_ASSESSMENT_RUN = "ACCESS_DENIED_TO_ASSESSMENT_RUN",
  ACCESS_DENIED_TO_ASSESSMENT_TARGET = "ACCESS_DENIED_TO_ASSESSMENT_TARGET",
  ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE = "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE",
  ACCESS_DENIED_TO_FINDING = "ACCESS_DENIED_TO_FINDING",
  ACCESS_DENIED_TO_IAM_ROLE = "ACCESS_DENIED_TO_IAM_ROLE",
  ACCESS_DENIED_TO_RESOURCE_GROUP = "ACCESS_DENIED_TO_RESOURCE_GROUP",
  ACCESS_DENIED_TO_RULES_PACKAGE = "ACCESS_DENIED_TO_RULES_PACKAGE",
  ACCESS_DENIED_TO_SNS_TOPIC = "ACCESS_DENIED_TO_SNS_TOPIC",
}

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: AccessDeniedErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a>
 *          actions.</p>
 */
export interface Attribute {
  /**
   * <p>The attribute key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   */
  value?: string;
}

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

export interface AddAttributesToFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to assign attributes to.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attributes that you want to assign to specified findings.</p>
   */
  attributes: Attribute[] | undefined;
}

export namespace AddAttributesToFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddAttributesToFindingsRequest): any => ({
    ...obj,
  });
}

export enum FailedItemErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  DUPLICATE_ARN = "DUPLICATE_ARN",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_ARN = "INVALID_ARN",
  ITEM_DOES_NOT_EXIST = "ITEM_DOES_NOT_EXIST",
  LIMIT_EXCEEDED = "LIMIT_EXCEEDED",
}

/**
 * <p>Includes details about the failed items.</p>
 */
export interface FailedItemDetails {
  /**
   * <p>The status code of a failed item.</p>
   */
  failureCode: FailedItemErrorCode | string | undefined;

  /**
   * <p>Indicates whether you can immediately retry a request for this item for a specified
   *          resource.</p>
   */
  retryable: boolean | undefined;
}

export namespace FailedItemDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedItemDetails): any => ({
    ...obj,
  });
}

export interface AddAttributesToFindingsResponse {
  /**
   * <p>Attribute details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace AddAttributesToFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddAttributesToFindingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace InternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

export enum InvalidInputErrorCode {
  ASSESSMENT_TARGET_NAME_ALREADY_TAKEN = "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN",
  ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN = "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN",
  INVALID_AGENT_ID = "INVALID_AGENT_ID",
  INVALID_ASSESSMENT_RUN_ARN = "INVALID_ASSESSMENT_RUN_ARN",
  INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE = "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_DURATION_RANGE = "INVALID_ASSESSMENT_RUN_DURATION_RANGE",
  INVALID_ASSESSMENT_RUN_START_TIME_RANGE = "INVALID_ASSESSMENT_RUN_START_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_STATE = "INVALID_ASSESSMENT_RUN_STATE",
  INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE = "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE",
  INVALID_ASSESSMENT_TARGET_ARN = "INVALID_ASSESSMENT_TARGET_ARN",
  INVALID_ASSESSMENT_TARGET_NAME = "INVALID_ASSESSMENT_TARGET_NAME",
  INVALID_ASSESSMENT_TARGET_NAME_PATTERN = "INVALID_ASSESSMENT_TARGET_NAME_PATTERN",
  INVALID_ASSESSMENT_TEMPLATE_ARN = "INVALID_ASSESSMENT_TEMPLATE_ARN",
  INVALID_ASSESSMENT_TEMPLATE_DURATION = "INVALID_ASSESSMENT_TEMPLATE_DURATION",
  INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE = "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE",
  INVALID_ASSESSMENT_TEMPLATE_NAME = "INVALID_ASSESSMENT_TEMPLATE_NAME",
  INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN = "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN",
  INVALID_ATTRIBUTE = "INVALID_ATTRIBUTE",
  INVALID_AUTO_SCALING_GROUP = "INVALID_AUTO_SCALING_GROUP",
  INVALID_EVENT = "INVALID_EVENT",
  INVALID_FINDING_ARN = "INVALID_FINDING_ARN",
  INVALID_IAM_ROLE_ARN = "INVALID_IAM_ROLE_ARN",
  INVALID_LOCALE = "INVALID_LOCALE",
  INVALID_MAX_RESULTS = "INVALID_MAX_RESULTS",
  INVALID_NUMBER_OF_AGENT_IDS = "INVALID_NUMBER_OF_AGENT_IDS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES = "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES",
  INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS",
  INVALID_NUMBER_OF_ATTRIBUTES = "INVALID_NUMBER_OF_ATTRIBUTES",
  INVALID_NUMBER_OF_AUTO_SCALING_GROUPS = "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS",
  INVALID_NUMBER_OF_FINDING_ARNS = "INVALID_NUMBER_OF_FINDING_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS = "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS = "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS",
  INVALID_NUMBER_OF_RULES_PACKAGE_ARNS = "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS",
  INVALID_NUMBER_OF_RULE_NAMES = "INVALID_NUMBER_OF_RULE_NAMES",
  INVALID_NUMBER_OF_SEVERITIES = "INVALID_NUMBER_OF_SEVERITIES",
  INVALID_NUMBER_OF_TAGS = "INVALID_NUMBER_OF_TAGS",
  INVALID_NUMBER_OF_USER_ATTRIBUTES = "INVALID_NUMBER_OF_USER_ATTRIBUTES",
  INVALID_PAGINATION_TOKEN = "INVALID_PAGINATION_TOKEN",
  INVALID_RESOURCE_ARN = "INVALID_RESOURCE_ARN",
  INVALID_RESOURCE_GROUP_ARN = "INVALID_RESOURCE_GROUP_ARN",
  INVALID_RESOURCE_GROUP_TAG_KEY = "INVALID_RESOURCE_GROUP_TAG_KEY",
  INVALID_RESOURCE_GROUP_TAG_VALUE = "INVALID_RESOURCE_GROUP_TAG_VALUE",
  INVALID_RULES_PACKAGE_ARN = "INVALID_RULES_PACKAGE_ARN",
  INVALID_RULE_NAME = "INVALID_RULE_NAME",
  INVALID_SEVERITY = "INVALID_SEVERITY",
  INVALID_SNS_TOPIC_ARN = "INVALID_SNS_TOPIC_ARN",
  INVALID_TAG = "INVALID_TAG",
  INVALID_TAG_KEY = "INVALID_TAG_KEY",
  INVALID_TAG_VALUE = "INVALID_TAG_VALUE",
  INVALID_USER_ATTRIBUTE = "INVALID_USER_ATTRIBUTE",
  INVALID_USER_ATTRIBUTE_KEY = "INVALID_USER_ATTRIBUTE_KEY",
  INVALID_USER_ATTRIBUTE_VALUE = "INVALID_USER_ATTRIBUTE_VALUE",
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: InvalidInputErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

export enum NoSuchEntityErrorCode {
  ASSESSMENT_RUN_DOES_NOT_EXIST = "ASSESSMENT_RUN_DOES_NOT_EXIST",
  ASSESSMENT_TARGET_DOES_NOT_EXIST = "ASSESSMENT_TARGET_DOES_NOT_EXIST",
  ASSESSMENT_TEMPLATE_DOES_NOT_EXIST = "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST",
  FINDING_DOES_NOT_EXIST = "FINDING_DOES_NOT_EXIST",
  IAM_ROLE_DOES_NOT_EXIST = "IAM_ROLE_DOES_NOT_EXIST",
  RESOURCE_GROUP_DOES_NOT_EXIST = "RESOURCE_GROUP_DOES_NOT_EXIST",
  RULES_PACKAGE_DOES_NOT_EXIST = "RULES_PACKAGE_DOES_NOT_EXIST",
  SNS_TOPIC_DOES_NOT_EXIST = "SNS_TOPIC_DOES_NOT_EXIST",
}

/**
 * <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 */
export interface NoSuchEntityException extends __SmithyException, $MetadataBearer {
  name: "NoSuchEntityException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: NoSuchEntityErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace NoSuchEntityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoSuchEntityException): any => ({
    ...obj,
  });
}

/**
 * <p>The serice is temporary unavailable.</p>
 */
export interface ServiceTemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceTemporarilyUnavailableException";
  $fault: "server";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>You can wait and then retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace ServiceTemporarilyUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceTemporarilyUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Used in the exception error that is thrown if you start an assessment run for an
 *          assessment target that includes an EC2 instance that is already participating in another
 *          started assessment run.</p>
 */
export interface AgentAlreadyRunningAssessment {
  /**
   * <p>ID of the agent that is running on an EC2 instance that is already participating in
   *          another started assessment run.</p>
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that has already been started.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace AgentAlreadyRunningAssessment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentAlreadyRunningAssessment): any => ({
    ...obj,
  });
}

export enum AgentHealthCode {
  IDLE = "IDLE",
  RUNNING = "RUNNING",
  SHUTDOWN = "SHUTDOWN",
  THROTTLED = "THROTTLED",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

export enum AgentHealth {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          request parameter in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface AgentFilter {
  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   */
  agentHealths: (AgentHealth | string)[] | undefined;

  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   */
  agentHealthCodes: (AgentHealthCode | string)[] | undefined;
}

export namespace AgentFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Used as a response element in the <a>PreviewAgents</a> action.</p>
 */
export interface AgentPreview {
  /**
   * <p>The hostname of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   */
  hostname?: string;

  /**
   * <p>The ID of the EC2 instance where the agent is installed.</p>
   */
  agentId: string | undefined;

  /**
   * <p>The Auto Scaling group for the EC2 instance where the agent is installed.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The health status of the Amazon Inspector Agent.</p>
   */
  agentHealth?: AgentHealth | string;

  /**
   * <p>The version of the Amazon Inspector Agent.</p>
   */
  agentVersion?: string;

  /**
   * <p>The operating system running on the EC2 instance on which the Amazon Inspector Agent
   *          is installed.</p>
   */
  operatingSystem?: string;

  /**
   * <p>The kernel version of the operating system running on the EC2 instance on which the
   *          Amazon Inspector Agent is installed.</p>
   */
  kernelVersion?: string;

  /**
   * <p>The IP address of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   */
  ipv4Address?: string;
}

export namespace AgentPreview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentPreview): any => ({
    ...obj,
  });
}

/**
 * <p>You started an assessment run, but one of the instances is already participating in
 *          another assessment run.</p>
 */
export interface AgentsAlreadyRunningAssessmentException extends __SmithyException, $MetadataBearer {
  name: "AgentsAlreadyRunningAssessmentException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p></p>
   */
  agents: AgentAlreadyRunningAssessment[] | undefined;

  /**
   * <p></p>
   */
  agentsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace AgentsAlreadyRunningAssessmentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentsAlreadyRunningAssessmentException): any => ({
    ...obj,
  });
}

export enum Severity {
  HIGH = "High",
  INFORMATIONAL = "Informational",
  LOW = "Low",
  MEDIUM = "Medium",
  UNDEFINED = "Undefined",
}

export enum InspectorEvent {
  ASSESSMENT_RUN_COMPLETED = "ASSESSMENT_RUN_COMPLETED",
  ASSESSMENT_RUN_STARTED = "ASSESSMENT_RUN_STARTED",
  ASSESSMENT_RUN_STATE_CHANGED = "ASSESSMENT_RUN_STATE_CHANGED",
  FINDING_REPORTED = "FINDING_REPORTED",
  OTHER = "OTHER",
}

export enum AssessmentRunNotificationSnsStatusCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  SUCCESS = "SUCCESS",
  TOPIC_DOES_NOT_EXIST = "TOPIC_DOES_NOT_EXIST",
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 */
export interface AssessmentRunNotification {
  /**
   * <p>The date of the notification.</p>
   */
  date: Date | undefined;

  /**
   * <p>The event for which a notification is sent.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The message included in the notification.</p>
   */
  message?: string;

  /**
   * <p>The Boolean value that specifies whether the notification represents an
   *          error.</p>
   */
  error: boolean | undefined;

  /**
   * <p>The SNS topic to which the SNS notification is sent.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The status code of the SNS notification.</p>
   */
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode | string;
}

export namespace AssessmentRunNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRunNotification): any => ({
    ...obj,
  });
}

export enum AssessmentRunState {
  CANCELED = "CANCELED",
  COLLECTING_DATA = "COLLECTING_DATA",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  CREATED = "CREATED",
  DATA_COLLECTED = "DATA_COLLECTED",
  ERROR = "ERROR",
  EVALUATING_RULES = "EVALUATING_RULES",
  FAILED = "FAILED",
  START_DATA_COLLECTION_IN_PROGRESS = "START_DATA_COLLECTION_IN_PROGRESS",
  START_DATA_COLLECTION_PENDING = "START_DATA_COLLECTION_PENDING",
  START_EVALUATING_RULES_PENDING = "START_EVALUATING_RULES_PENDING",
  STOP_DATA_COLLECTION_PENDING = "STOP_DATA_COLLECTION_PENDING",
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 */
export interface AssessmentRunStateChange {
  /**
   * <p>The last time the assessment run state changed.</p>
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>The assessment run state.</p>
   */
  state: AssessmentRunState | string | undefined;
}

export namespace AssessmentRunStateChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRunStateChange): any => ({
    ...obj,
  });
}

/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the
 *          assessment run .</p>
 *          <p>Used as the response element in the <a>DescribeAssessmentRuns</a>
 *          action.</p>
 */
export interface AssessmentRun {
  /**
   * <p>The ARN of the assessment run.</p>
   */
  arn: string | undefined;

  /**
   * <p>The auto-generated name for the assessment run.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment template that is associated with the assessment
   *          run.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The state of the assessment run.</p>
   */
  state: AssessmentRunState | string | undefined;

  /**
   * <p>The duration of the assessment run.</p>
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages selected for the assessment run.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  startedAt?: Date;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation
   *          completion time or failure.</p>
   */
  completedAt?: Date;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>A Boolean value (true or false) that specifies whether the process of collecting data
   *          from the agents is completed.</p>
   */
  dataCollected: boolean | undefined;

  /**
   * <p>A list of the assessment run state changes.</p>
   */
  stateChanges: AssessmentRunStateChange[] | undefined;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a
   *          particular generated finding is added to this list only once.</p>
   */
  notifications: AssessmentRunNotification[] | undefined;

  /**
   * <p>Provides a total count of generated findings per severity.</p>
   */
  findingCounts: { [key: string]: number } | undefined;
}

export namespace AssessmentRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRun): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata about the Amazon Inspector application data metrics collected by the
 *          agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>
 */
export interface TelemetryMetadata {
  /**
   * <p>A specific type of behavioral data that is collected by the agent.</p>
   */
  messageType: string | undefined;

  /**
   * <p>The count of messages that the agent sends to the Amazon Inspector service.</p>
   */
  count: number | undefined;

  /**
   * <p>The data size of messages that the agent sends to the Amazon Inspector
   *          service.</p>
   */
  dataSize?: number;
}

export namespace TelemetryMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TelemetryMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          response element in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface AssessmentRunAgent {
  /**
   * <p>The AWS account of the EC2 instance where the agent is installed.</p>
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that is associated with the agent.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>The current health state of the agent.</p>
   */
  agentHealth: AgentHealth | string | undefined;

  /**
   * <p>The detailed health state of the agent.</p>
   */
  agentHealthCode: AgentHealthCode | string | undefined;

  /**
   * <p>The description for the agent health code.</p>
   */
  agentHealthDetails?: string;

  /**
   * <p>The Auto Scaling group of the EC2 instance that is specified by the agent
   *          ID.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The Amazon Inspector application data metrics that are collected by the
   *          agent.</p>
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

export namespace AssessmentRunAgent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRunAgent): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used in the <a>AssessmentRunFilter</a> data
 *          type.</p>
 */
export interface TimestampRange {
  /**
   * <p>The minimum value of the timestamp range.</p>
   */
  beginDate?: Date;

  /**
   * <p>The maximum value of the timestamp range.</p>
   */
  endDate?: Date;
}

export namespace TimestampRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampRange): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used in the <a>AssessmentTemplateFilter</a> data
 *          type.</p>
 */
export interface DurationRange {
  /**
   * <p>The minimum value of the duration range. Must be greater than zero.</p>
   */
  minSeconds?: number;

  /**
   * <p>The maximum value of the duration range. Must be less than or equal to 604800 seconds
   *          (1 week).</p>
   */
  maxSeconds?: number;
}

export namespace DurationRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DurationRange): any => ({
    ...obj,
  });
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentRuns</a>
 *          action.</p>
 */
export interface AssessmentRunFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string containing a wildcard
   *          that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a>
   *          data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, one of the values specified for this data type
   *          property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   */
  states?: (AssessmentRunState | string)[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  durationRange?: DurationRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  startTimeRange?: TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  completionTimeRange?: TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must match the <b>stateChangedAt</b> property of the
   *             <a>AssessmentRun</a> data type.</p>
   */
  stateChangeTimeRange?: TimestampRange;
}

export namespace AssessmentRunFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRunFilter): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 */
export interface AssessmentRunInProgressException extends __SmithyException, $MetadataBearer {
  name: "AssessmentRunInProgressException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>The ARNs of the assessment runs that are currently in progress.</p>
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p>Boolean value that indicates whether the ARN list of the assessment runs is
   *          truncated.</p>
   */
  assessmentRunArnsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace AssessmentRunInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentRunInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an Amazon Inspector application. This data type is used as
 *          the response element in the <a>DescribeAssessmentTargets</a> action.</p>
 */
export interface AssessmentTarget {
  /**
   * <p>The ARN that specifies the Amazon Inspector assessment target.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the Amazon Inspector assessment target.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is associated with the assessment
   *          target.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The time at which the assessment target is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   */
  updatedAt: Date | undefined;
}

export namespace AssessmentTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTargets</a>
 *          action.</p>
 */
export interface AssessmentTargetFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.</p>
   */
  assessmentTargetNamePattern?: string;
}

export namespace AssessmentTargetFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentTargetFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an Amazon Inspector assessment template. This data type is
 *          used as the response element in the <a>DescribeAssessmentTemplates</a>
 *          action.</p>
 */
export interface AssessmentTemplate {
  /**
   * <p>The ARN of the assessment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the assessment template.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment target that corresponds to this assessment
   *          template.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The duration in seconds specified for this assessment template. The default value is
   *          3600 seconds (one hour). The maximum value is 86400 seconds (one day).</p>
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the
   *          assessment run that uses this assessment template.</p>
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent assessment run associated with this
   *          assessment template. This value exists only when the value of assessmentRunCount is
   *          greaterpa than zero.</p>
   */
  lastAssessmentRunArn?: string;

  /**
   * <p>The number of existing assessment runs associated with this assessment template. This
   *          value can be zero or a positive integer.</p>
   */
  assessmentRunCount: number | undefined;

  /**
   * <p>The time at which the assessment template is created.</p>
   */
  createdAt: Date | undefined;
}

export namespace AssessmentTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTemplates</a>
 *          action.</p>
 */
export interface AssessmentTemplateFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, the value specified for this data type property must
   *          inclusively match any value between the specified minimum and maximum values of the
   *             <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  durationRange?: DurationRange;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];
}

export namespace AssessmentTemplateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssessmentTemplateFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a private IP address associated with a network interface. This
 *          data type is used as a response element in the <a>DescribeFindings</a>
 *          action.</p>
 */
export interface PrivateIp {
  /**
   * <p>The DNS name of the private IP address.</p>
   */
  privateDnsName?: string;

  /**
   * <p>The full IP address of the network inteface.</p>
   */
  privateIpAddress?: string;
}

export namespace PrivateIp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateIp): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a security group associated with a network interface. This
 *          data type is used as one of the elements of the <a>NetworkInterface</a> data
 *          type.</p>
 */
export interface SecurityGroup {
  /**
   * <p>The name of the security group.</p>
   */
  groupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  groupId?: string;
}

export namespace SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the network interfaces interacting with an EC2 instance.
 *          This data type is used as one of the elements of the <a>AssetAttributes</a> data
 *          type.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The ID of a subnet associated with the network interface.</p>
   */
  subnetId?: string;

  /**
   * <p>The ID of a VPC associated with the network interface.</p>
   */
  vpcId?: string;

  /**
   * <p>The name of a private DNS associated with the network interface.</p>
   */
  privateDnsName?: string;

  /**
   * <p>The private IP address associated with the network interface.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes
   *          the privateDnsName and privateIpAddress.</p>
   */
  privateIpAddresses?: PrivateIp[];

  /**
   * <p>The name of a public DNS associated with the network interface.</p>
   */
  publicDnsName?: string;

  /**
   * <p>The public IP address from which the network interface is reachable.</p>
   */
  publicIp?: string;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   */
  ipv6Addresses?: string[];

  /**
   * <p>A list of the security groups associated with the network interface. Includes the
   *          groupId and groupName.</p>
   */
  securityGroups?: SecurityGroup[];
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>
 */
export interface Tag {
  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>A value assigned to a tag key.</p>
   */
  value?: string;
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
 * <p>A collection of attributes of the host from which the finding is generated.</p>
 */
export interface AssetAttributes {
  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ID of the agent that is installed on the EC2 instance where the finding is
   *          generated.</p>
   */
  agentId?: string;

  /**
   * <p>The Auto Scaling group of the EC2 instance where the finding is generated.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where
   *          the finding is generated.</p>
   */
  amiId?: string;

  /**
   * <p>The hostname of the EC2 instance where the finding is generated.</p>
   */
  hostname?: string;

  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is
   *          generated.</p>
   */
  ipv4Addresses?: string[];

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the
   *          finding is generated.</p>
   */
  networkInterfaces?: NetworkInterface[];
}

export namespace AssetAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetAttributes): any => ({
    ...obj,
  });
}

export enum AssetType {
  EC2_INSTANCE = "ec2-instance",
}

export interface CreateAssessmentTargetRequest {
  /**
   * <p>The user-defined name that identifies the assessment target that you want to create.
   *          The name must be unique within the AWS account.</p>
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is used to create the assessment
   *          target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account
   *          and region are included in the assessment target.</p>
   */
  resourceGroupArn?: string;
}

export namespace CreateAssessmentTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentTargetRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentTargetResponse {
  /**
   * <p>The ARN that specifies the assessment target that is created.</p>
   */
  assessmentTargetArn: string | undefined;
}

export namespace CreateAssessmentTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentTargetResponse): any => ({
    ...obj,
  });
}

export enum InvalidCrossAccountRoleErrorCode {
  ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP = "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP",
  ROLE_DOES_NOT_HAVE_CORRECT_POLICY = "ROLE_DOES_NOT_HAVE_CORRECT_POLICY",
}

/**
 * <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 */
export interface InvalidCrossAccountRoleException extends __SmithyException, $MetadataBearer {
  name: "InvalidCrossAccountRoleException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: InvalidCrossAccountRoleErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace InvalidCrossAccountRoleException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCrossAccountRoleException): any => ({
    ...obj,
  });
}

export enum LimitExceededErrorCode {
  ASSESSMENT_RUN_LIMIT_EXCEEDED = "ASSESSMENT_RUN_LIMIT_EXCEEDED",
  ASSESSMENT_TARGET_LIMIT_EXCEEDED = "ASSESSMENT_TARGET_LIMIT_EXCEEDED",
  ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED = "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED",
  EVENT_SUBSCRIPTION_LIMIT_EXCEEDED = "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED",
  RESOURCE_GROUP_LIMIT_EXCEEDED = "RESOURCE_GROUP_LIMIT_EXCEEDED",
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: LimitExceededErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment target for which you want to create the
   *          assessment template.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The user-defined name that identifies the assessment template that you want to
   *          create. You can create several assessment templates for an assessment target. The names of
   *          the assessment templates that correspond to a particular assessment target must be
   *          unique.</p>
   */
  assessmentTemplateName: string | undefined;

  /**
   * <p>The duration of the assessment run in seconds.</p>
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The ARNs that specify the rules packages that you want to attach to the assessment
   *          template.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every finding that is generated by
   *          the assessment run that uses this assessment template. An attribute is a key and value pair
   *          (an <a>Attribute</a> object). Within an assessment template, each key must be
   *          unique.</p>
   */
  userAttributesForFindings?: Attribute[];
}

export namespace CreateAssessmentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateAssessmentTemplateResponse {
  /**
   * <p>The ARN that specifies the assessment template that is created.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace CreateAssessmentTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssessmentTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreateExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which you want to create an
   *          exclusions preview.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace CreateExclusionsPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExclusionsPreviewRequest): any => ({
    ...obj,
  });
}

export interface CreateExclusionsPreviewResponse {
  /**
   * <p>Specifies the unique identifier of the requested exclusions preview. You can use the
   *          unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview
   *          API.</p>
   */
  previewToken: string | undefined;
}

export namespace CreateExclusionsPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExclusionsPreviewResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request is rejected. The specified assessment template is currently generating an
 *          exclusions preview.</p>
 */
export interface PreviewGenerationInProgressException extends __SmithyException, $MetadataBearer {
  name: "PreviewGenerationInProgressException";
  $fault: "client";
  message: string | undefined;
}

export namespace PreviewGenerationInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreviewGenerationInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as one of the elements of the <a>ResourceGroup</a>
 *          data type.</p>
 */
export interface ResourceGroupTag {
  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value assigned to a tag key.</p>
   */
  value?: string;
}

export namespace ResourceGroupTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceGroupTag): any => ({
    ...obj,
  });
}

export interface CreateResourceGroupRequest {
  /**
   * <p>A collection of keys and an array of possible values,
   *          '[{"key":"key1","values":["Value1","Value2"]},{"key":"Key2","values":["Value3"]}]'.</p>
   *          <p>For example,'[{"key":"Name","values":["TestEC2Instance"]}]'.</p>
   */
  resourceGroupTags: ResourceGroupTag[] | undefined;
}

export namespace CreateResourceGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceGroupResponse {
  /**
   * <p>The ARN that specifies the resource group that is created.</p>
   */
  resourceGroupArn: string | undefined;
}

export namespace CreateResourceGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentRunRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to delete.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace DeleteAssessmentRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentRunRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentTargetRequest {
  /**
   * <p>The ARN that specifies the assessment target that you want to delete.</p>
   */
  assessmentTargetArn: string | undefined;
}

export namespace DeleteAssessmentTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment template that you want to delete.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace DeleteAssessmentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssessmentTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentRunsRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to describe.</p>
   */
  assessmentRunArns: string[] | undefined;
}

export namespace DescribeAssessmentRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentRunsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentRunsResponse {
  /**
   * <p>Information about the assessment run.</p>
   */
  assessmentRuns: AssessmentRun[] | undefined;

  /**
   * <p>Assessment run details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeAssessmentRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentRunsResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentTargetsRequest {
  /**
   * <p>The ARNs that specifies the assessment targets that you want to describe.</p>
   */
  assessmentTargetArns: string[] | undefined;
}

export namespace DescribeAssessmentTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentTargetsResponse {
  /**
   * <p>Information about the assessment targets.</p>
   */
  assessmentTargets: AssessmentTarget[] | undefined;

  /**
   * <p>Assessment target details that cannot be described. An error code is provided for
   *          each failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeAssessmentTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentTargetsResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentTemplatesRequest {
  assessmentTemplateArns: string[] | undefined;
}

export namespace DescribeAssessmentTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentTemplatesRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssessmentTemplatesResponse {
  /**
   * <p>Information about the assessment templates.</p>
   */
  assessmentTemplates: AssessmentTemplate[] | undefined;

  /**
   * <p>Assessment template details that cannot be described. An error code is provided for
   *          each failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeAssessmentTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssessmentTemplatesResponse): any => ({
    ...obj,
  });
}

export interface DescribeCrossAccountAccessRoleResponse {
  /**
   * <p>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS
   *          account.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the IAM role has the necessary policies
   *          attached to enable Amazon Inspector to access your AWS account.</p>
   */
  valid: boolean | undefined;

  /**
   * <p>The date when the cross-account access role was registered.</p>
   */
  registeredAt: Date | undefined;
}

export namespace DescribeCrossAccountAccessRoleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCrossAccountAccessRoleResponse): any => ({
    ...obj,
  });
}

export enum Locale {
  EN_US = "EN_US",
}

export interface DescribeExclusionsRequest {
  /**
   * <p>The list of ARNs that specify the exclusions that you want to describe.</p>
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   */
  locale?: Locale | string;
}

export namespace DescribeExclusionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExclusionsRequest): any => ({
    ...obj,
  });
}

export enum ScopeType {
  INSTANCE_ID = "INSTANCE_ID",
  RULES_PACKAGE_ARN = "RULES_PACKAGE_ARN",
}

/**
 * <p>This data type contains key-value pairs that identify various Amazon
 *          resources.</p>
 */
export interface Scope {
  /**
   * <p>The type of the scope.</p>
   */
  key?: ScopeType | string;

  /**
   * <p>The resource identifier for the specified scope type.</p>
   */
  value?: string;
}

export namespace Scope {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scope): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about what was excluded from an assessment run.</p>
 */
export interface Exclusion {
  /**
   * <p>The ARN that specifies the exclusion.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the exclusion.</p>
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion.</p>
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion.</p>
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   */
  attributes?: Attribute[];
}

export namespace Exclusion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Exclusion): any => ({
    ...obj,
  });
}

export interface DescribeExclusionsResponse {
  /**
   * <p>Information about the exclusions.</p>
   */
  exclusions: { [key: string]: Exclusion } | undefined;

  /**
   * <p>Exclusion details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeExclusionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExclusionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeFindingsRequest {
  /**
   * <p>The ARN that specifies the finding that you want to describe.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate a finding description, recommendation,
   *          and the short description that identifies the finding.</p>
   */
  locale?: Locale | string;
}

export namespace DescribeFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used in the <a>Finding</a> data type.</p>
 */
export interface InspectorServiceAttributes {
  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ARN of the assessment run during which the finding is generated.</p>
   */
  assessmentRunArn?: string;

  /**
   * <p>The ARN of the rules package that is used to generate the finding.</p>
   */
  rulesPackageArn?: string;
}

export namespace InspectorServiceAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InspectorServiceAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an Amazon Inspector finding. This data type is used as the
 *          response element in the <a>DescribeFindings</a> action.</p>
 */
export interface Finding {
  /**
   * <p>The ARN that specifies the finding.</p>
   */
  arn: string | undefined;

  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion?: number;

  /**
   * <p>The data element is set to "Inspector".</p>
   */
  service?: string;

  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   */
  serviceAttributes?: InspectorServiceAttributes;

  /**
   * <p>The type of the host from which the finding is generated.</p>
   */
  assetType?: AssetType | string;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  assetAttributes?: AssetAttributes;

  /**
   * <p>The ID of the finding.</p>
   */
  id?: string;

  /**
   * <p>The name of the finding.</p>
   */
  title?: string;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The recommendation for the finding.</p>
   */
  recommendation?: string;

  /**
   * <p>The finding severity. Values can be set to High, Medium, Low, and
   *          Informational.</p>
   */
  severity?: Severity | string;

  /**
   * <p>The numeric value of the finding severity.</p>
   */
  numericSeverity?: number;

  /**
   * <p>This data element is currently not used.</p>
   */
  confidence?: number;

  /**
   * <p>This data element is currently not used.</p>
   */
  indicatorOfCompromise?: boolean;

  /**
   * <p>The system-defined attributes for the finding.</p>
   */
  attributes: Attribute[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   */
  userAttributes: Attribute[] | undefined;

  /**
   * <p>The time when the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   */
  updatedAt: Date | undefined;
}

export namespace Finding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
}

export interface DescribeFindingsResponse {
  /**
   * <p>Information about the finding.</p>
   */
  findings: Finding[] | undefined;

  /**
   * <p>Finding details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFindingsResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourceGroupsRequest {
  /**
   * <p>The ARN that specifies the resource group that you want to describe.</p>
   */
  resourceGroupArns: string[] | undefined;
}

export namespace DescribeResourceGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a resource group. The resource group defines a set of tags
 *          that, when queried, identify the AWS resources that make up the assessment target. This
 *          data type is used as the response element in the <a>DescribeResourceGroups</a>
 *          action.</p>
 */
export interface ResourceGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  arn: string | undefined;

  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used
   *          in the <a>CreateResourceGroup</a> action.</p>
   */
  tags: ResourceGroupTag[] | undefined;

  /**
   * <p>The time at which resource group is created.</p>
   */
  createdAt: Date | undefined;
}

export namespace ResourceGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceGroup): any => ({
    ...obj,
  });
}

export interface DescribeResourceGroupsResponse {
  /**
   * <p>Information about a resource group.</p>
   */
  resourceGroups: ResourceGroup[] | undefined;

  /**
   * <p>Resource group details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeResourceGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceGroupsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRulesPackagesRequest {
  /**
   * <p>The ARN that specifies the rules package that you want to describe.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The locale that you want to translate a rules package description into.</p>
   */
  locale?: Locale | string;
}

export namespace DescribeRulesPackagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRulesPackagesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an Amazon Inspector rules package. This data type is used
 *          as the response element in the <a>DescribeRulesPackages</a> action.</p>
 */
export interface RulesPackage {
  /**
   * <p>The ARN of the rules package.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the rules package.</p>
   */
  name: string | undefined;

  /**
   * <p>The version ID of the rules package.</p>
   */
  version: string | undefined;

  /**
   * <p>The provider of the rules package.</p>
   */
  provider: string | undefined;

  /**
   * <p>The description of the rules package.</p>
   */
  description?: string;
}

export namespace RulesPackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RulesPackage): any => ({
    ...obj,
  });
}

export interface DescribeRulesPackagesResponse {
  /**
   * <p>Information about the rules package.</p>
   */
  rulesPackages: RulesPackage[] | undefined;

  /**
   * <p>Rules package details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeRulesPackagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRulesPackagesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used in the <a>Subscription</a> data type.</p>
 */
export interface EventSubscription {
  /**
   * <p>The event for which Amazon Simple Notification Service (SNS) notifications are
   *          sent.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   */
  subscribedAt: Date | undefined;
}

export namespace EventSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about what is excluded from an assessment run given the current
 *          state of the assessment template.</p>
 */
export interface ExclusionPreview {
  /**
   * <p>The name of the exclusion preview.</p>
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion preview.</p>
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion preview.</p>
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   */
  attributes?: Attribute[];
}

export namespace ExclusionPreview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExclusionPreview): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a request parameter in the <a>ListFindings</a>
 *          action.</p>
 */
export interface FindingFilter {
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   */
  agentIds?: string[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  autoScalingGroups?: string[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   */
  ruleNames?: string[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   */
  severities?: (Severity | string)[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data
   *          type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  userAttributes?: Attribute[];

  /**
   * <p>The time range during which the finding is generated.</p>
   */
  creationTimeRange?: TimestampRange;
}

export namespace FindingFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingFilter): any => ({
    ...obj,
  });
}

export enum ReportFileFormat {
  HTML = "HTML",
  PDF = "PDF",
}

export enum ReportType {
  FINDING = "FINDING",
  FULL = "FULL",
}

export interface GetAssessmentReportRequest {
  /**
   * <p>The ARN that specifies the assessment run for which you want to generate a
   *          report.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>Specifies the file format (html or pdf) of the assessment report that you want to
   *          generate.</p>
   */
  reportFileFormat: ReportFileFormat | string | undefined;

  /**
   * <p>Specifies the type of the assessment report that you want to generate. There are two
   *          types of assessment reports: a finding report and a full report. For more information, see
   *             <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. </p>
   */
  reportType: ReportType | string | undefined;
}

export namespace GetAssessmentReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentReportRequest): any => ({
    ...obj,
  });
}

export enum ReportStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  WORK_IN_PROGRESS = "WORK_IN_PROGRESS",
}

export interface GetAssessmentReportResponse {
  /**
   * <p>Specifies the status of the request to generate an assessment report. </p>
   */
  status: ReportStatus | string | undefined;

  /**
   * <p>Specifies the URL where you can find the generated assessment report. This parameter
   *          is only returned if the report is successfully generated.</p>
   */
  url?: string;
}

export namespace GetAssessmentReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssessmentReportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected
 *          because you tried to generate a report for an assessment run that existed before reporting
 *          was supported in Amazon Inspector. You can only generate reports for assessment runs that
 *          took place or will take place after generating reports in Amazon Inspector became
 *          available.</p>
 */
export interface UnsupportedFeatureException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedFeatureException";
  $fault: "client";
  message: string | undefined;
  canRetry: boolean | undefined;
}

export namespace UnsupportedFeatureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedFeatureException): any => ({
    ...obj,
  });
}

export interface GetExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which the exclusions preview was
   *          requested.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The unique identifier associated of the exclusions preview.</p>
   */
  previewToken: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to
   *          the action fill nextToken in the request with the value of nextToken from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   */
  locale?: Locale | string;
}

export namespace GetExclusionsPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExclusionsPreviewRequest): any => ({
    ...obj,
  });
}

export enum PreviewStatus {
  COMPLETED = "COMPLETED",
  WORK_IN_PROGRESS = "WORK_IN_PROGRESS",
}

export interface GetExclusionsPreviewResponse {
  /**
   * <p>Specifies the status of the request to generate an exclusions preview.</p>
   */
  previewStatus: PreviewStatus | string | undefined;

  /**
   * <p>Information about the exclusions included in the preview.</p>
   */
  exclusionPreviews?: ExclusionPreview[];

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   */
  nextToken?: string;
}

export namespace GetExclusionsPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExclusionsPreviewResponse): any => ({
    ...obj,
  });
}

export interface GetTelemetryMetadataRequest {
  /**
   * <p>The ARN that specifies the assessment run that has the telemetry data that you want
   *          to obtain.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace GetTelemetryMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTelemetryMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetTelemetryMetadataResponse {
  /**
   * <p>Telemetry details.</p>
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

export namespace GetTelemetryMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTelemetryMetadataResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentRunAgentsRequest {
  /**
   * <p>The ARN that specifies the assessment run whose agents you want to list.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AgentFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRunAgents</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListAssessmentRunAgentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentRunAgentsRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentRunAgentsResponse {
  /**
   * <p>A list of ARNs that specifies the agents returned by the action.</p>
   */
  assessmentRunAgents: AssessmentRunAgent[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentRunAgentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentRunAgentsResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentRunsRequest {
  /**
   * <p>The ARNs that specify the assessment templates whose assessment runs you want to
   *          list.</p>
   */
  assessmentTemplateArns?: string[];

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentRunFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRuns</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListAssessmentRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentRunsRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentRunsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment runs that are returned by the
   *          action.</p>
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentRunsResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentTargetsRequest {
  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentTargetFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTargets</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListAssessmentTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentTargetsRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentTargetsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment targets that are returned by the
   *          action.</p>
   */
  assessmentTargetArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentTargetsResponse): any => ({
    ...obj,
  });
}

export interface ListAssessmentTemplatesRequest {
  /**
   * <p>A list of ARNs that specifies the assessment targets whose assessment templates you
   *          want to list.</p>
   */
  assessmentTargetArns?: string[];

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentTemplateFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTemplates</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListAssessmentTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListAssessmentTemplatesResponse {
  /**
   * <p>A list of ARNs that specifies the assessment templates returned by the
   *          action.</p>
   */
  assessmentTemplateArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssessmentTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListEventSubscriptionsRequest {
  /**
   * <p>The ARN of the assessment template for which you want to list the existing event
   *          subscriptions.</p>
   */
  resourceArn?: string;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListEventSubscriptions</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListEventSubscriptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventSubscriptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>
 */
export interface Subscription {
  /**
   * <p>The ARN of the assessment template that is used during the event for which the SNS
   *          notification is sent.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS
   *          notifications are sent.</p>
   */
  topicArn: string | undefined;

  /**
   * <p>The list of existing event subscriptions.</p>
   */
  eventSubscriptions: EventSubscription[] | undefined;
}

export namespace Subscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subscription): any => ({
    ...obj,
  });
}

export interface ListEventSubscriptionsResponse {
  /**
   * <p>Details of the returned event subscriptions.</p>
   */
  subscriptions: Subscription[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListEventSubscriptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventSubscriptionsResponse): any => ({
    ...obj,
  });
}

export interface ListExclusionsRequest {
  /**
   * <p>The ARN of the assessment run that generated the exclusions that you want to
   *          list.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the ListExclusionsRequest action. Subsequent calls to the
   *          action fill nextToken in the request with the value of nextToken from the previous response
   *          to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListExclusionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExclusionsRequest): any => ({
    ...obj,
  });
}

export interface ListExclusionsResponse {
  /**
   * <p>A list of exclusions' ARNs returned by the action.</p>
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   */
  nextToken?: string;
}

export namespace ListExclusionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExclusionsResponse): any => ({
    ...obj,
  });
}

export interface ListFindingsRequest {
  /**
   * <p>The ARNs of the assessment runs that generate the findings that you want to
   *          list.</p>
   */
  assessmentRunArns?: string[];

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: FindingFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListFindings</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
}

export interface ListFindingsResponse {
  /**
   * <p>A list of ARNs that specifies the findings returned by the action.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
}

export interface ListRulesPackagesRequest {
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListRulesPackages</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListRulesPackagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesPackagesRequest): any => ({
    ...obj,
  });
}

export interface ListRulesPackagesResponse {
  /**
   * <p>The list of ARNs that specifies the rules packages returned by the action.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListRulesPackagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesPackagesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN that specifies the assessment template whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
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
   * <p>A collection of key and value pairs.</p>
   */
  tags: Tag[] | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PreviewAgentsRequest {
  /**
   * <p>The ARN of the assessment target whose agents you want to preview.</p>
   */
  previewAgentsArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>PreviewAgents</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace PreviewAgentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreviewAgentsRequest): any => ({
    ...obj,
  });
}

export interface PreviewAgentsResponse {
  /**
   * <p>The resulting list of agents.</p>
   */
  agentPreviews: AgentPreview[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace PreviewAgentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreviewAgentsResponse): any => ({
    ...obj,
  });
}

export interface RegisterCrossAccountAccessRoleRequest {
  /**
   * <p>The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to
   *          perform security assessments. </p>
   */
  roleArn: string | undefined;
}

export namespace RegisterCrossAccountAccessRoleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCrossAccountAccessRoleRequest): any => ({
    ...obj,
  });
}

export interface RemoveAttributesFromFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to remove attributes from.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attribute keys that you want to remove from specified
   *          findings.</p>
   */
  attributeKeys: string[] | undefined;
}

export namespace RemoveAttributesFromFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveAttributesFromFindingsRequest): any => ({
    ...obj,
  });
}

export interface RemoveAttributesFromFindingsResponse {
  /**
   * <p>Attributes details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace RemoveAttributesFromFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveAttributesFromFindingsResponse): any => ({
    ...obj,
  });
}

export interface SetTagsForResourceRequest {
  /**
   * <p>The ARN of the assessment template that you want to set tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of key and value pairs that you want to set to the assessment
   *          template.</p>
   */
  tags?: Tag[];
}

export namespace SetTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface StartAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment template of the assessment run that you want to
   *          start.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>You can specify the name for the assessment run. The name must be unique for the
   *          assessment template whose ARN is used to start the assessment run.</p>
   */
  assessmentRunName?: string;
}

export namespace StartAssessmentRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssessmentRunRequest): any => ({
    ...obj,
  });
}

export interface StartAssessmentRunResponse {
  /**
   * <p>The ARN of the assessment run that has been started.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace StartAssessmentRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartAssessmentRunResponse): any => ({
    ...obj,
  });
}

export enum StopAction {
  SKIP_EVALUATION = "SKIP_EVALUATION",
  START_EVALUATION = "START_EVALUATION",
}

export interface StopAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment run that you want to stop.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>An input option that can be set to either START_EVALUATION or SKIP_EVALUATION.
   *          START_EVALUATION (the default value), stops the AWS agent from collecting data and begins
   *          the results evaluation and the findings generation process. SKIP_EVALUATION cancels the
   *          assessment run immediately, after which no findings are generated.</p>
   */
  stopAction?: StopAction | string;
}

export namespace StopAssessmentRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopAssessmentRunRequest): any => ({
    ...obj,
  });
}

export interface SubscribeToEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to receive SNS notifications.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to receive SNS notifications.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The ARN of the SNS topic to which the SNS notifications are sent.</p>
   */
  topicArn: string | undefined;
}

export namespace SubscribeToEventRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscribeToEventRequest): any => ({
    ...obj,
  });
}

export interface UnsubscribeFromEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to stop receiving SNS notifications.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to stop receiving SNS notifications.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The ARN of the SNS topic to which SNS notifications are sent.</p>
   */
  topicArn: string | undefined;
}

export namespace UnsubscribeFromEventRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsubscribeFromEventRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssessmentTargetRequest {
  /**
   * <p>The ARN of the assessment target that you want to update.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The name of the assessment target that you want to update.</p>
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN of the resource group that is used to specify the new resource group to
   *          associate with the assessment target.</p>
   */
  resourceGroupArn?: string;
}

export namespace UpdateAssessmentTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssessmentTargetRequest): any => ({
    ...obj,
  });
}
