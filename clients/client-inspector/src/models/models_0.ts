// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { InspectorServiceException as __BaseException } from "./InspectorServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedErrorCode = {
  ACCESS_DENIED_TO_ASSESSMENT_RUN: "ACCESS_DENIED_TO_ASSESSMENT_RUN",
  ACCESS_DENIED_TO_ASSESSMENT_TARGET: "ACCESS_DENIED_TO_ASSESSMENT_TARGET",
  ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE: "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE",
  ACCESS_DENIED_TO_FINDING: "ACCESS_DENIED_TO_FINDING",
  ACCESS_DENIED_TO_IAM_ROLE: "ACCESS_DENIED_TO_IAM_ROLE",
  ACCESS_DENIED_TO_RESOURCE_GROUP: "ACCESS_DENIED_TO_RESOURCE_GROUP",
  ACCESS_DENIED_TO_RULES_PACKAGE: "ACCESS_DENIED_TO_RULES_PACKAGE",
  ACCESS_DENIED_TO_SNS_TOPIC: "ACCESS_DENIED_TO_SNS_TOPIC",
} as const;

/**
 * @public
 */
export type AccessDeniedErrorCode = (typeof AccessDeniedErrorCode)[keyof typeof AccessDeniedErrorCode];

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: AccessDeniedErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

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
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * <p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a>
 *          actions.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The attribute key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to assign attributes to.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attributes that you want to assign to specified findings.</p>
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailedItemErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DUPLICATE_ARN: "DUPLICATE_ARN",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ARN: "INVALID_ARN",
  ITEM_DOES_NOT_EXIST: "ITEM_DOES_NOT_EXIST",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type FailedItemErrorCode = (typeof FailedItemErrorCode)[keyof typeof FailedItemErrorCode];

/**
 * <p>Includes details about the failed items.</p>
 * @public
 */
export interface FailedItemDetails {
  /**
   * <p>The status code of a failed item.</p>
   * @public
   */
  failureCode: FailedItemErrorCode | undefined;

  /**
   * <p>Indicates whether you can immediately retry a request for this item for a specified
   *          resource.</p>
   * @public
   */
  retryable: boolean | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsResponse {
  /**
   * <p>Attribute details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * <p>Internal server error.</p>
 * @public
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

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
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 * @enum
 */
export const InvalidInputErrorCode = {
  ASSESSMENT_TARGET_NAME_ALREADY_TAKEN: "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN",
  ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN: "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN",
  INVALID_AGENT_ID: "INVALID_AGENT_ID",
  INVALID_ASSESSMENT_RUN_ARN: "INVALID_ASSESSMENT_RUN_ARN",
  INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE: "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_DURATION_RANGE: "INVALID_ASSESSMENT_RUN_DURATION_RANGE",
  INVALID_ASSESSMENT_RUN_START_TIME_RANGE: "INVALID_ASSESSMENT_RUN_START_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_STATE: "INVALID_ASSESSMENT_RUN_STATE",
  INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE: "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE",
  INVALID_ASSESSMENT_TARGET_ARN: "INVALID_ASSESSMENT_TARGET_ARN",
  INVALID_ASSESSMENT_TARGET_NAME: "INVALID_ASSESSMENT_TARGET_NAME",
  INVALID_ASSESSMENT_TARGET_NAME_PATTERN: "INVALID_ASSESSMENT_TARGET_NAME_PATTERN",
  INVALID_ASSESSMENT_TEMPLATE_ARN: "INVALID_ASSESSMENT_TEMPLATE_ARN",
  INVALID_ASSESSMENT_TEMPLATE_DURATION: "INVALID_ASSESSMENT_TEMPLATE_DURATION",
  INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE: "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE",
  INVALID_ASSESSMENT_TEMPLATE_NAME: "INVALID_ASSESSMENT_TEMPLATE_NAME",
  INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN: "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN",
  INVALID_ATTRIBUTE: "INVALID_ATTRIBUTE",
  INVALID_AUTO_SCALING_GROUP: "INVALID_AUTO_SCALING_GROUP",
  INVALID_EVENT: "INVALID_EVENT",
  INVALID_FINDING_ARN: "INVALID_FINDING_ARN",
  INVALID_IAM_ROLE_ARN: "INVALID_IAM_ROLE_ARN",
  INVALID_LOCALE: "INVALID_LOCALE",
  INVALID_MAX_RESULTS: "INVALID_MAX_RESULTS",
  INVALID_NUMBER_OF_AGENT_IDS: "INVALID_NUMBER_OF_AGENT_IDS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS: "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES: "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES",
  INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS: "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS: "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS",
  INVALID_NUMBER_OF_ATTRIBUTES: "INVALID_NUMBER_OF_ATTRIBUTES",
  INVALID_NUMBER_OF_AUTO_SCALING_GROUPS: "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS",
  INVALID_NUMBER_OF_FINDING_ARNS: "INVALID_NUMBER_OF_FINDING_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS: "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS: "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS",
  INVALID_NUMBER_OF_RULES_PACKAGE_ARNS: "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS",
  INVALID_NUMBER_OF_RULE_NAMES: "INVALID_NUMBER_OF_RULE_NAMES",
  INVALID_NUMBER_OF_SEVERITIES: "INVALID_NUMBER_OF_SEVERITIES",
  INVALID_NUMBER_OF_TAGS: "INVALID_NUMBER_OF_TAGS",
  INVALID_NUMBER_OF_USER_ATTRIBUTES: "INVALID_NUMBER_OF_USER_ATTRIBUTES",
  INVALID_PAGINATION_TOKEN: "INVALID_PAGINATION_TOKEN",
  INVALID_RESOURCE_ARN: "INVALID_RESOURCE_ARN",
  INVALID_RESOURCE_GROUP_ARN: "INVALID_RESOURCE_GROUP_ARN",
  INVALID_RESOURCE_GROUP_TAG_KEY: "INVALID_RESOURCE_GROUP_TAG_KEY",
  INVALID_RESOURCE_GROUP_TAG_VALUE: "INVALID_RESOURCE_GROUP_TAG_VALUE",
  INVALID_RULES_PACKAGE_ARN: "INVALID_RULES_PACKAGE_ARN",
  INVALID_RULE_NAME: "INVALID_RULE_NAME",
  INVALID_SEVERITY: "INVALID_SEVERITY",
  INVALID_SNS_TOPIC_ARN: "INVALID_SNS_TOPIC_ARN",
  INVALID_TAG: "INVALID_TAG",
  INVALID_TAG_KEY: "INVALID_TAG_KEY",
  INVALID_TAG_VALUE: "INVALID_TAG_VALUE",
  INVALID_USER_ATTRIBUTE: "INVALID_USER_ATTRIBUTE",
  INVALID_USER_ATTRIBUTE_KEY: "INVALID_USER_ATTRIBUTE_KEY",
  INVALID_USER_ATTRIBUTE_VALUE: "INVALID_USER_ATTRIBUTE_VALUE",
} as const;

/**
 * @public
 */
export type InvalidInputErrorCode = (typeof InvalidInputErrorCode)[keyof typeof InvalidInputErrorCode];

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: InvalidInputErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

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
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 * @enum
 */
export const NoSuchEntityErrorCode = {
  ASSESSMENT_RUN_DOES_NOT_EXIST: "ASSESSMENT_RUN_DOES_NOT_EXIST",
  ASSESSMENT_TARGET_DOES_NOT_EXIST: "ASSESSMENT_TARGET_DOES_NOT_EXIST",
  ASSESSMENT_TEMPLATE_DOES_NOT_EXIST: "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST",
  FINDING_DOES_NOT_EXIST: "FINDING_DOES_NOT_EXIST",
  IAM_ROLE_DOES_NOT_EXIST: "IAM_ROLE_DOES_NOT_EXIST",
  RESOURCE_GROUP_DOES_NOT_EXIST: "RESOURCE_GROUP_DOES_NOT_EXIST",
  RULES_PACKAGE_DOES_NOT_EXIST: "RULES_PACKAGE_DOES_NOT_EXIST",
  SNS_TOPIC_DOES_NOT_EXIST: "SNS_TOPIC_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type NoSuchEntityErrorCode = (typeof NoSuchEntityErrorCode)[keyof typeof NoSuchEntityErrorCode];

/**
 * <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 * @public
 */
export class NoSuchEntityException extends __BaseException {
  readonly name: "NoSuchEntityException" = "NoSuchEntityException";
  readonly $fault: "client" = "client";
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: NoSuchEntityErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchEntityException, __BaseException>) {
    super({
      name: "NoSuchEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchEntityException.prototype);
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * <p>The serice is temporary unavailable.</p>
 * @public
 */
export class ServiceTemporarilyUnavailableException extends __BaseException {
  readonly name: "ServiceTemporarilyUnavailableException" = "ServiceTemporarilyUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>You can wait and then retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceTemporarilyUnavailableException, __BaseException>) {
    super({
      name: "ServiceTemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceTemporarilyUnavailableException.prototype);
    this.canRetry = opts.canRetry;
  }
}

/**
 * <p>Used in the exception error that is thrown if you start an assessment run for an
 *          assessment target that includes an EC2 instance that is already participating in another
 *          started assessment run.</p>
 * @public
 */
export interface AgentAlreadyRunningAssessment {
  /**
   * <p>ID of the agent that is running on an EC2 instance that is already participating in
   *          another started assessment run.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that has already been started.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentHealthCode = {
  IDLE: "IDLE",
  RUNNING: "RUNNING",
  SHUTDOWN: "SHUTDOWN",
  THROTTLED: "THROTTLED",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type AgentHealthCode = (typeof AgentHealthCode)[keyof typeof AgentHealthCode];

/**
 * @public
 * @enum
 */
export const AgentHealth = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type AgentHealth = (typeof AgentHealth)[keyof typeof AgentHealth];

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          request parameter in the <a>ListAssessmentRunAgents</a> action.</p>
 * @public
 */
export interface AgentFilter {
  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   * @public
   */
  agentHealths: AgentHealth[] | undefined;

  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   * @public
   */
  agentHealthCodes: AgentHealthCode[] | undefined;
}

/**
 * <p>Used as a response element in the <a>PreviewAgents</a> action.</p>
 * @public
 */
export interface AgentPreview {
  /**
   * <p>The hostname of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The ID of the EC2 instance where the agent is installed.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The Auto Scaling group for the EC2 instance where the agent is installed.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The health status of the Amazon Inspector Agent.</p>
   * @public
   */
  agentHealth?: AgentHealth | undefined;

  /**
   * <p>The version of the Amazon Inspector Agent.</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>The operating system running on the EC2 instance on which the Amazon Inspector Agent
   *          is installed.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>The kernel version of the operating system running on the EC2 instance on which the
   *          Amazon Inspector Agent is installed.</p>
   * @public
   */
  kernelVersion?: string | undefined;

  /**
   * <p>The IP address of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   * @public
   */
  ipv4Address?: string | undefined;
}

/**
 * <p>You started an assessment run, but one of the instances is already participating in
 *          another assessment run.</p>
 * @public
 */
export class AgentsAlreadyRunningAssessmentException extends __BaseException {
  readonly name: "AgentsAlreadyRunningAssessmentException" = "AgentsAlreadyRunningAssessmentException";
  readonly $fault: "client" = "client";
  /**
   * <p></p>
   * @public
   */
  agents: AgentAlreadyRunningAssessment[] | undefined;

  /**
   * <p></p>
   * @public
   */
  agentsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AgentsAlreadyRunningAssessmentException, __BaseException>) {
    super({
      name: "AgentsAlreadyRunningAssessmentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AgentsAlreadyRunningAssessmentException.prototype);
    this.agents = opts.agents;
    this.agentsTruncated = opts.agentsTruncated;
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 * @enum
 */
export const Severity = {
  HIGH: "High",
  INFORMATIONAL: "Informational",
  LOW: "Low",
  MEDIUM: "Medium",
  UNDEFINED: "Undefined",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const InspectorEvent = {
  ASSESSMENT_RUN_COMPLETED: "ASSESSMENT_RUN_COMPLETED",
  ASSESSMENT_RUN_STARTED: "ASSESSMENT_RUN_STARTED",
  ASSESSMENT_RUN_STATE_CHANGED: "ASSESSMENT_RUN_STATE_CHANGED",
  FINDING_REPORTED: "FINDING_REPORTED",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type InspectorEvent = (typeof InspectorEvent)[keyof typeof InspectorEvent];

/**
 * @public
 * @enum
 */
export const AssessmentRunNotificationSnsStatusCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  SUCCESS: "SUCCESS",
  TOPIC_DOES_NOT_EXIST: "TOPIC_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type AssessmentRunNotificationSnsStatusCode =
  (typeof AssessmentRunNotificationSnsStatusCode)[keyof typeof AssessmentRunNotificationSnsStatusCode];

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 * @public
 */
export interface AssessmentRunNotification {
  /**
   * <p>The date of the notification.</p>
   * @public
   */
  date: Date | undefined;

  /**
   * <p>The event for which a notification is sent.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The message included in the notification.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The Boolean value that specifies whether the notification represents an
   *          error.</p>
   * @public
   */
  error: boolean | undefined;

  /**
   * <p>The SNS topic to which the SNS notification is sent.</p>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The status code of the SNS notification.</p>
   * @public
   */
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode | undefined;
}

/**
 * @public
 * @enum
 */
export const AssessmentRunState = {
  CANCELED: "CANCELED",
  COLLECTING_DATA: "COLLECTING_DATA",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  CREATED: "CREATED",
  DATA_COLLECTED: "DATA_COLLECTED",
  ERROR: "ERROR",
  EVALUATING_RULES: "EVALUATING_RULES",
  FAILED: "FAILED",
  START_DATA_COLLECTION_IN_PROGRESS: "START_DATA_COLLECTION_IN_PROGRESS",
  START_DATA_COLLECTION_PENDING: "START_DATA_COLLECTION_PENDING",
  START_EVALUATING_RULES_PENDING: "START_EVALUATING_RULES_PENDING",
  STOP_DATA_COLLECTION_PENDING: "STOP_DATA_COLLECTION_PENDING",
} as const;

/**
 * @public
 */
export type AssessmentRunState = (typeof AssessmentRunState)[keyof typeof AssessmentRunState];

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 * @public
 */
export interface AssessmentRunStateChange {
  /**
   * <p>The last time the assessment run state changed.</p>
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>The assessment run state.</p>
   * @public
   */
  state: AssessmentRunState | undefined;
}

/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the
 *          assessment run .</p>
 *          <p>Used as the response element in the <a>DescribeAssessmentRuns</a>
 *          action.</p>
 * @public
 */
export interface AssessmentRun {
  /**
   * <p>The ARN of the assessment run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The auto-generated name for the assessment run.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment template that is associated with the assessment
   *          run.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The state of the assessment run.</p>
   * @public
   */
  state: AssessmentRunState | undefined;

  /**
   * <p>The duration of the assessment run.</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages selected for the assessment run.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation
   *          completion time or failure.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>A Boolean value (true or false) that specifies whether the process of collecting data
   *          from the agents is completed.</p>
   * @public
   */
  dataCollected: boolean | undefined;

  /**
   * <p>A list of the assessment run state changes.</p>
   * @public
   */
  stateChanges: AssessmentRunStateChange[] | undefined;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a
   *          particular generated finding is added to this list only once.</p>
   * @public
   */
  notifications: AssessmentRunNotification[] | undefined;

  /**
   * <p>Provides a total count of generated findings per severity.</p>
   * @public
   */
  findingCounts: Partial<Record<Severity, number>> | undefined;
}

/**
 * <p>The metadata about the Amazon Inspector application data metrics collected by the
 *          agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>
 * @public
 */
export interface TelemetryMetadata {
  /**
   * <p>A specific type of behavioral data that is collected by the agent.</p>
   * @public
   */
  messageType: string | undefined;

  /**
   * <p>The count of messages that the agent sends to the Amazon Inspector service.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>The data size of messages that the agent sends to the Amazon Inspector
   *          service.</p>
   * @public
   */
  dataSize?: number | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          response element in the <a>ListAssessmentRunAgents</a> action.</p>
 * @public
 */
export interface AssessmentRunAgent {
  /**
   * <p>The AWS account of the EC2 instance where the agent is installed.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that is associated with the agent.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>The current health state of the agent.</p>
   * @public
   */
  agentHealth: AgentHealth | undefined;

  /**
   * <p>The detailed health state of the agent.</p>
   * @public
   */
  agentHealthCode: AgentHealthCode | undefined;

  /**
   * <p>The description for the agent health code.</p>
   * @public
   */
  agentHealthDetails?: string | undefined;

  /**
   * <p>The Auto Scaling group of the EC2 instance that is specified by the agent
   *          ID.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The Amazon Inspector application data metrics that are collected by the
   *          agent.</p>
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * <p>This data type is used in the <a>AssessmentRunFilter</a> data
 *          type.</p>
 * @public
 */
export interface TimestampRange {
  /**
   * <p>The minimum value of the timestamp range.</p>
   * @public
   */
  beginDate?: Date | undefined;

  /**
   * <p>The maximum value of the timestamp range.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>This data type is used in the <a>AssessmentTemplateFilter</a> data
 *          type.</p>
 * @public
 */
export interface DurationRange {
  /**
   * <p>The minimum value of the duration range. Must be greater than zero.</p>
   * @public
   */
  minSeconds?: number | undefined;

  /**
   * <p>The maximum value of the duration range. Must be less than or equal to 604800 seconds
   *          (1 week).</p>
   * @public
   */
  maxSeconds?: number | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentRuns</a>
 *          action.</p>
 * @public
 */
export interface AssessmentRunFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string containing a wildcard
   *          that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a>
   *          data type.</p>
   * @public
   */
  namePattern?: string | undefined;

  /**
   * <p>For a record to match a filter, one of the values specified for this data type
   *          property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   * @public
   */
  states?: AssessmentRunState[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  startTimeRange?: TimestampRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  completionTimeRange?: TimestampRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must match the <b>stateChangedAt</b> property of the
   *             <a>AssessmentRun</a> data type.</p>
   * @public
   */
  stateChangeTimeRange?: TimestampRange | undefined;
}

/**
 * <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 * @public
 */
export class AssessmentRunInProgressException extends __BaseException {
  readonly name: "AssessmentRunInProgressException" = "AssessmentRunInProgressException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ARNs of the assessment runs that are currently in progress.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p>Boolean value that indicates whether the ARN list of the assessment runs is
   *          truncated.</p>
   * @public
   */
  assessmentRunArnsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssessmentRunInProgressException, __BaseException>) {
    super({
      name: "AssessmentRunInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssessmentRunInProgressException.prototype);
    this.assessmentRunArns = opts.assessmentRunArns;
    this.assessmentRunArnsTruncated = opts.assessmentRunArnsTruncated;
    this.canRetry = opts.canRetry;
  }
}

/**
 * <p>Contains information about an Amazon Inspector application. This data type is used as
 *          the response element in the <a>DescribeAssessmentTargets</a> action.</p>
 * @public
 */
export interface AssessmentTarget {
  /**
   * <p>The ARN that specifies the Amazon Inspector assessment target.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the Amazon Inspector assessment target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is associated with the assessment
   *          target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;

  /**
   * <p>The time at which the assessment target is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTargets</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTargetFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.</p>
   * @public
   */
  assessmentTargetNamePattern?: string | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector assessment template. This data type is
 *          used as the response element in the <a>DescribeAssessmentTemplates</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTemplate {
  /**
   * <p>The ARN of the assessment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the assessment template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment target that corresponds to this assessment
   *          template.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The duration in seconds specified for this assessment template. The default value is
   *          3600 seconds (one hour). The maximum value is 86400 seconds (one day).</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the
   *          assessment run that uses this assessment template.</p>
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent assessment run associated with this
   *          assessment template. This value exists only when the value of assessmentRunCount is
   *          greaterpa than zero.</p>
   * @public
   */
  lastAssessmentRunArn?: string | undefined;

  /**
   * <p>The number of existing assessment runs associated with this assessment template. This
   *          value can be zero or a positive integer.</p>
   * @public
   */
  assessmentRunCount: number | undefined;

  /**
   * <p>The time at which the assessment template is created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTemplates</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTemplateFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.</p>
   * @public
   */
  namePattern?: string | undefined;

  /**
   * <p>For a record to match a filter, the value specified for this data type property must
   *          inclusively match any value between the specified minimum and maximum values of the
   *             <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;
}

/**
 * <p>Contains information about a private IP address associated with a network interface. This
 *          data type is used as a response element in the <a>DescribeFindings</a>
 *          action.</p>
 * @public
 */
export interface PrivateIp {
  /**
   * <p>The DNS name of the private IP address.</p>
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * <p>The full IP address of the network inteface.</p>
   * @public
   */
  privateIpAddress?: string | undefined;
}

/**
 * <p>Contains information about a security group associated with a network interface. This
 *          data type is used as one of the elements of the <a>NetworkInterface</a> data
 *          type.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The name of the security group.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>Contains information about the network interfaces interacting with an EC2 instance.
 *          This data type is used as one of the elements of the <a>AssetAttributes</a> data
 *          type.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The ID of a subnet associated with the network interface.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The ID of a VPC associated with the network interface.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The name of a private DNS associated with the network interface.</p>
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * <p>The private IP address associated with the network interface.</p>
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes
   *          the privateDnsName and privateIpAddress.</p>
   * @public
   */
  privateIpAddresses?: PrivateIp[] | undefined;

  /**
   * <p>The name of a public DNS associated with the network interface.</p>
   * @public
   */
  publicDnsName?: string | undefined;

  /**
   * <p>The public IP address from which the network interface is reachable.</p>
   * @public
   */
  publicIp?: string | undefined;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * <p>A list of the security groups associated with the network interface. Includes the
   *          groupId and groupName.</p>
   * @public
   */
  securityGroups?: SecurityGroup[] | undefined;
}

/**
 * <p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A value assigned to a tag key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>A collection of attributes of the host from which the finding is generated.</p>
 * @public
 */
export interface AssetAttributes {
  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ID of the agent that is installed on the EC2 instance where the finding is
   *          generated.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The Auto Scaling group of the EC2 instance where the finding is generated.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where
   *          the finding is generated.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The hostname of the EC2 instance where the finding is generated.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is
   *          generated.</p>
   * @public
   */
  ipv4Addresses?: string[] | undefined;

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the
   *          finding is generated.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetType = {
  EC2_INSTANCE: "ec2-instance",
} as const;

/**
 * @public
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

/**
 * @public
 */
export interface CreateAssessmentTargetRequest {
  /**
   * <p>The user-defined name that identifies the assessment target that you want to create.
   *          The name must be unique within the AWS account.</p>
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is used to create the assessment
   *          target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account
   *          and region are included in the assessment target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTargetResponse {
  /**
   * <p>The ARN that specifies the assessment target that is created.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InvalidCrossAccountRoleErrorCode = {
  ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP: "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP",
  ROLE_DOES_NOT_HAVE_CORRECT_POLICY: "ROLE_DOES_NOT_HAVE_CORRECT_POLICY",
} as const;

/**
 * @public
 */
export type InvalidCrossAccountRoleErrorCode =
  (typeof InvalidCrossAccountRoleErrorCode)[keyof typeof InvalidCrossAccountRoleErrorCode];

/**
 * <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 * @public
 */
export class InvalidCrossAccountRoleException extends __BaseException {
  readonly name: "InvalidCrossAccountRoleException" = "InvalidCrossAccountRoleException";
  readonly $fault: "client" = "client";
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: InvalidCrossAccountRoleErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCrossAccountRoleException, __BaseException>) {
    super({
      name: "InvalidCrossAccountRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCrossAccountRoleException.prototype);
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 * @enum
 */
export const LimitExceededErrorCode = {
  ASSESSMENT_RUN_LIMIT_EXCEEDED: "ASSESSMENT_RUN_LIMIT_EXCEEDED",
  ASSESSMENT_TARGET_LIMIT_EXCEEDED: "ASSESSMENT_TARGET_LIMIT_EXCEEDED",
  ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED: "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED",
  EVENT_SUBSCRIPTION_LIMIT_EXCEEDED: "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED",
  RESOURCE_GROUP_LIMIT_EXCEEDED: "RESOURCE_GROUP_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type LimitExceededErrorCode = (typeof LimitExceededErrorCode)[keyof typeof LimitExceededErrorCode];

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Code that indicates the type of error that is generated.</p>
   * @public
   */
  errorCode: LimitExceededErrorCode | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   * @public
   */
  canRetry: boolean | undefined;

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
    this.errorCode = opts.errorCode;
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 */
export interface CreateAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment target for which you want to create the
   *          assessment template.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The user-defined name that identifies the assessment template that you want to
   *          create. You can create several assessment templates for an assessment target. The names of
   *          the assessment templates that correspond to a particular assessment target must be
   *          unique.</p>
   * @public
   */
  assessmentTemplateName: string | undefined;

  /**
   * <p>The duration of the assessment run in seconds.</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The ARNs that specify the rules packages that you want to attach to the assessment
   *          template.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every finding that is generated by
   *          the assessment run that uses this assessment template. An attribute is a key and value pair
   *          (an <a>Attribute</a> object). Within an assessment template, each key must be
   *          unique.</p>
   * @public
   */
  userAttributesForFindings?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTemplateResponse {
  /**
   * <p>The ARN that specifies the assessment template that is created.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which you want to create an
   *          exclusions preview.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewResponse {
  /**
   * <p>Specifies the unique identifier of the requested exclusions preview. You can use the
   *          unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview
   *          API.</p>
   * @public
   */
  previewToken: string | undefined;
}

/**
 * <p>The request is rejected. The specified assessment template is currently generating an
 *          exclusions preview.</p>
 * @public
 */
export class PreviewGenerationInProgressException extends __BaseException {
  readonly name: "PreviewGenerationInProgressException" = "PreviewGenerationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreviewGenerationInProgressException, __BaseException>) {
    super({
      name: "PreviewGenerationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreviewGenerationInProgressException.prototype);
  }
}

/**
 * <p>This data type is used as one of the elements of the <a>ResourceGroup</a>
 *          data type.</p>
 * @public
 */
export interface ResourceGroupTag {
  /**
   * <p>A tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value assigned to a tag key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupRequest {
  /**
   * <p>A collection of keys and an array of possible values,
   *          '[\{"key":"key1","values":["Value1","Value2"]\},\{"key":"Key2","values":["Value3"]\}]'.</p>
   *          <p>For example,'[\{"key":"Name","values":["TestEC2Instance"]\}]'.</p>
   * @public
   */
  resourceGroupTags: ResourceGroupTag[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupResponse {
  /**
   * <p>The ARN that specifies the resource group that is created.</p>
   * @public
   */
  resourceGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentRunRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to delete.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTargetRequest {
  /**
   * <p>The ARN that specifies the assessment target that you want to delete.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment template that you want to delete.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to describe.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsResponse {
  /**
   * <p>Information about the assessment run.</p>
   * @public
   */
  assessmentRuns: AssessmentRun[] | undefined;

  /**
   * <p>Assessment run details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsRequest {
  /**
   * <p>The ARNs that specifies the assessment targets that you want to describe.</p>
   * @public
   */
  assessmentTargetArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsResponse {
  /**
   * <p>Information about the assessment targets.</p>
   * @public
   */
  assessmentTargets: AssessmentTarget[] | undefined;

  /**
   * <p>Assessment target details that cannot be described. An error code is provided for
   *          each failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTemplatesRequest {
  assessmentTemplateArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTemplatesResponse {
  /**
   * <p>Information about the assessment templates.</p>
   * @public
   */
  assessmentTemplates: AssessmentTemplate[] | undefined;

  /**
   * <p>Assessment template details that cannot be described. An error code is provided for
   *          each failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAccessRoleResponse {
  /**
   * <p>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS
   *          account.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the IAM role has the necessary policies
   *          attached to enable Amazon Inspector to access your AWS account.</p>
   * @public
   */
  valid: boolean | undefined;

  /**
   * <p>The date when the cross-account access role was registered.</p>
   * @public
   */
  registeredAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const Locale = {
  EN_US: "EN_US",
} as const;

/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 */
export interface DescribeExclusionsRequest {
  /**
   * <p>The list of ARNs that specify the exclusions that you want to describe.</p>
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * @public
 * @enum
 */
export const ScopeType = {
  INSTANCE_ID: "INSTANCE_ID",
  RULES_PACKAGE_ARN: "RULES_PACKAGE_ARN",
} as const;

/**
 * @public
 */
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType];

/**
 * <p>This data type contains key-value pairs that identify various Amazon
 *          resources.</p>
 * @public
 */
export interface Scope {
  /**
   * <p>The type of the scope.</p>
   * @public
   */
  key?: ScopeType | undefined;

  /**
   * <p>The resource identifier for the specified scope type.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains information about what was excluded from an assessment run.</p>
 * @public
 */
export interface Exclusion {
  /**
   * <p>The ARN that specifies the exclusion.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the exclusion.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion.</p>
   * @public
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeExclusionsResponse {
  /**
   * <p>Information about the exclusions.</p>
   * @public
   */
  exclusions: Record<string, Exclusion> | undefined;

  /**
   * <p>Exclusion details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsRequest {
  /**
   * <p>The ARN that specifies the finding that you want to describe.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate a finding description, recommendation,
   *          and the short description that identifies the finding.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * <p>This data type is used in the <a>Finding</a> data type.</p>
 * @public
 */
export interface InspectorServiceAttributes {
  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ARN of the assessment run during which the finding is generated.</p>
   * @public
   */
  assessmentRunArn?: string | undefined;

  /**
   * <p>The ARN of the rules package that is used to generate the finding.</p>
   * @public
   */
  rulesPackageArn?: string | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector finding. This data type is used as the
 *          response element in the <a>DescribeFindings</a> action.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ARN that specifies the finding.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion?: number | undefined;

  /**
   * <p>The data element is set to "Inspector".</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   * @public
   */
  serviceAttributes?: InspectorServiceAttributes | undefined;

  /**
   * <p>The type of the host from which the finding is generated.</p>
   * @public
   */
  assetType?: AssetType | undefined;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   * @public
   */
  assetAttributes?: AssetAttributes | undefined;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The recommendation for the finding.</p>
   * @public
   */
  recommendation?: string | undefined;

  /**
   * <p>The finding severity. Values can be set to High, Medium, Low, and
   *          Informational.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>The numeric value of the finding severity.</p>
   * @public
   */
  numericSeverity?: number | undefined;

  /**
   * <p>This data element is currently not used.</p>
   * @public
   */
  confidence?: number | undefined;

  /**
   * <p>This data element is currently not used.</p>
   * @public
   */
  indicatorOfCompromise?: boolean | undefined;

  /**
   * <p>The system-defined attributes for the finding.</p>
   * @public
   */
  attributes: Attribute[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   * @public
   */
  userAttributes: Attribute[] | undefined;

  /**
   * <p>The time when the finding was generated.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsResponse {
  /**
   * <p>Information about the finding.</p>
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * <p>Finding details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsRequest {
  /**
   * <p>The ARN that specifies the resource group that you want to describe.</p>
   * @public
   */
  resourceGroupArns: string[] | undefined;
}

/**
 * <p>Contains information about a resource group. The resource group defines a set of tags
 *          that, when queried, identify the AWS resources that make up the assessment target. This
 *          data type is used as the response element in the <a>DescribeResourceGroups</a>
 *          action.</p>
 * @public
 */
export interface ResourceGroup {
  /**
   * <p>The ARN of the resource group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used
   *          in the <a>CreateResourceGroup</a> action.</p>
   * @public
   */
  tags: ResourceGroupTag[] | undefined;

  /**
   * <p>The time at which resource group is created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsResponse {
  /**
   * <p>Information about a resource group.</p>
   * @public
   */
  resourceGroups: ResourceGroup[] | undefined;

  /**
   * <p>Resource group details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesRequest {
  /**
   * <p>The ARN that specifies the rules package that you want to describe.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The locale that you want to translate a rules package description into.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector rules package. This data type is used
 *          as the response element in the <a>DescribeRulesPackages</a> action.</p>
 * @public
 */
export interface RulesPackage {
  /**
   * <p>The ARN of the rules package.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the rules package.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version ID of the rules package.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The provider of the rules package.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The description of the rules package.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesResponse {
  /**
   * <p>Information about the rules package.</p>
   * @public
   */
  rulesPackages: RulesPackage[] | undefined;

  /**
   * <p>Rules package details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * <p>This data type is used in the <a>Subscription</a> data type.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The event for which Amazon Simple Notification Service (SNS) notifications are
   *          sent.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   * @public
   */
  subscribedAt: Date | undefined;
}

/**
 * <p>Contains information about what is excluded from an assessment run given the current
 *          state of the assessment template.</p>
 * @public
 */
export interface ExclusionPreview {
  /**
   * <p>The name of the exclusion preview.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion preview.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion preview.</p>
   * @public
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * <p>This data type is used as a request parameter in the <a>ListFindings</a>
 *          action.</p>
 * @public
 */
export interface FindingFilter {
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  agentIds?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  ruleNames?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  severities?: Severity[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data
   *          type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  userAttributes?: Attribute[] | undefined;

  /**
   * <p>The time range during which the finding is generated.</p>
   * @public
   */
  creationTimeRange?: TimestampRange | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportFileFormat = {
  HTML: "HTML",
  PDF: "PDF",
} as const;

/**
 * @public
 */
export type ReportFileFormat = (typeof ReportFileFormat)[keyof typeof ReportFileFormat];

/**
 * @public
 * @enum
 */
export const ReportType = {
  FINDING: "FINDING",
  FULL: "FULL",
} as const;

/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 */
export interface GetAssessmentReportRequest {
  /**
   * <p>The ARN that specifies the assessment run for which you want to generate a
   *          report.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>Specifies the file format (html or pdf) of the assessment report that you want to
   *          generate.</p>
   * @public
   */
  reportFileFormat: ReportFileFormat | undefined;

  /**
   * <p>Specifies the type of the assessment report that you want to generate. There are two
   *          types of assessment reports: a finding report and a full report. For more information, see
   *             <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. </p>
   * @public
   */
  reportType: ReportType | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  WORK_IN_PROGRESS: "WORK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];

/**
 * @public
 */
export interface GetAssessmentReportResponse {
  /**
   * <p>Specifies the status of the request to generate an assessment report. </p>
   * @public
   */
  status: ReportStatus | undefined;

  /**
   * <p>Specifies the URL where you can find the generated assessment report. This parameter
   *          is only returned if the report is successfully generated.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected
 *          because you tried to generate a report for an assessment run that existed before reporting
 *          was supported in Amazon Inspector. You can only generate reports for assessment runs that
 *          took place or will take place after generating reports in Amazon Inspector became
 *          available.</p>
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
  readonly name: "UnsupportedFeatureException" = "UnsupportedFeatureException";
  readonly $fault: "client" = "client";
  canRetry: boolean | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>) {
    super({
      name: "UnsupportedFeatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
    this.canRetry = opts.canRetry;
  }
}

/**
 * @public
 */
export interface GetExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which the exclusions preview was
   *          requested.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The unique identifier associated of the exclusions preview.</p>
   * @public
   */
  previewToken: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to
   *          the action fill nextToken in the request with the value of nextToken from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * @public
 * @enum
 */
export const PreviewStatus = {
  COMPLETED: "COMPLETED",
  WORK_IN_PROGRESS: "WORK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type PreviewStatus = (typeof PreviewStatus)[keyof typeof PreviewStatus];

/**
 * @public
 */
export interface GetExclusionsPreviewResponse {
  /**
   * <p>Specifies the status of the request to generate an exclusions preview.</p>
   * @public
   */
  previewStatus: PreviewStatus | undefined;

  /**
   * <p>Information about the exclusions included in the preview.</p>
   * @public
   */
  exclusionPreviews?: ExclusionPreview[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataRequest {
  /**
   * <p>The ARN that specifies the assessment run that has the telemetry data that you want
   *          to obtain.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataResponse {
  /**
   * <p>Telemetry details.</p>
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsRequest {
  /**
   * <p>The ARN that specifies the assessment run whose agents you want to list.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AgentFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRunAgents</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsResponse {
  /**
   * <p>A list of ARNs that specifies the agents returned by the action.</p>
   * @public
   */
  assessmentRunAgents: AssessmentRunAgent[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsRequest {
  /**
   * <p>The ARNs that specify the assessment templates whose assessment runs you want to
   *          list.</p>
   * @public
   */
  assessmentTemplateArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentRunFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRuns</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment runs that are returned by the
   *          action.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsRequest {
  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentTargetFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTargets</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment targets that are returned by the
   *          action.</p>
   * @public
   */
  assessmentTargetArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesRequest {
  /**
   * <p>A list of ARNs that specifies the assessment targets whose assessment templates you
   *          want to list.</p>
   * @public
   */
  assessmentTargetArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentTemplateFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTemplates</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesResponse {
  /**
   * <p>A list of ARNs that specifies the assessment templates returned by the
   *          action.</p>
   * @public
   */
  assessmentTemplateArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsRequest {
  /**
   * <p>The ARN of the assessment template for which you want to list the existing event
   *          subscriptions.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListEventSubscriptions</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The ARN of the assessment template that is used during the event for which the SNS
   *          notification is sent.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS
   *          notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The list of existing event subscriptions.</p>
   * @public
   */
  eventSubscriptions: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsResponse {
  /**
   * <p>Details of the returned event subscriptions.</p>
   * @public
   */
  subscriptions: Subscription[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExclusionsRequest {
  /**
   * <p>The ARN of the assessment run that generated the exclusions that you want to
   *          list.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the ListExclusionsRequest action. Subsequent calls to the
   *          action fill nextToken in the request with the value of nextToken from the previous response
   *          to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListExclusionsResponse {
  /**
   * <p>A list of exclusions' ARNs returned by the action.</p>
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The ARNs of the assessment runs that generate the findings that you want to
   *          list.</p>
   * @public
   */
  assessmentRunArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: FindingFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListFindings</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>A list of ARNs that specifies the findings returned by the action.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesRequest {
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListRulesPackages</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesResponse {
  /**
   * <p>The list of ARNs that specifies the rules packages returned by the action.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN that specifies the assessment template whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsRequest {
  /**
   * <p>The ARN of the assessment target whose agents you want to preview.</p>
   * @public
   */
  previewAgentsArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>PreviewAgents</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsResponse {
  /**
   * <p>The resulting list of agents.</p>
   * @public
   */
  agentPreviews: AgentPreview[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCrossAccountAccessRoleRequest {
  /**
   * <p>The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to
   *          perform security assessments. </p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to remove attributes from.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attribute keys that you want to remove from specified
   *          findings.</p>
   * @public
   */
  attributeKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsResponse {
  /**
   * <p>Attributes details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface SetTagsForResourceRequest {
  /**
   * <p>The ARN of the assessment template that you want to set tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of key and value pairs that you want to set to the assessment
   *          template.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment template of the assessment run that you want to
   *          start.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>You can specify the name for the assessment run. The name must be unique for the
   *          assessment template whose ARN is used to start the assessment run.</p>
   * @public
   */
  assessmentRunName?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunResponse {
  /**
   * <p>The ARN of the assessment run that has been started.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StopAction = {
  SKIP_EVALUATION: "SKIP_EVALUATION",
  START_EVALUATION: "START_EVALUATION",
} as const;

/**
 * @public
 */
export type StopAction = (typeof StopAction)[keyof typeof StopAction];

/**
 * @public
 */
export interface StopAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment run that you want to stop.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>An input option that can be set to either START_EVALUATION or SKIP_EVALUATION.
   *          START_EVALUATION (the default value), stops the AWS agent from collecting data and begins
   *          the results evaluation and the findings generation process. SKIP_EVALUATION cancels the
   *          assessment run immediately, after which no findings are generated.</p>
   * @public
   */
  stopAction?: StopAction | undefined;
}

/**
 * @public
 */
export interface SubscribeToEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to receive SNS notifications.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to receive SNS notifications.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The ARN of the SNS topic to which the SNS notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeFromEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to stop receiving SNS notifications.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to stop receiving SNS notifications.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The ARN of the SNS topic to which SNS notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentTargetRequest {
  /**
   * <p>The ARN of the assessment target that you want to update.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The name of the assessment target that you want to update.</p>
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN of the resource group that is used to specify the new resource group to
   *          associate with the assessment target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;
}
