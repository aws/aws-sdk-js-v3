// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  ASSIGN_CONTACT_CATEGORY: "ASSIGN_CONTACT_CATEGORY",
  CREATE_CASE: "CREATE_CASE",
  CREATE_TASK: "CREATE_TASK",
  END_ASSOCIATED_TASKS: "END_ASSOCIATED_TASKS",
  GENERATE_EVENTBRIDGE_EVENT: "GENERATE_EVENTBRIDGE_EVENT",
  SEND_NOTIFICATION: "SEND_NOTIFICATION",
  SUBMIT_AUTO_EVALUATION: "SUBMIT_AUTO_EVALUATION",
  UPDATE_CASE: "UPDATE_CASE",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * <p>Information about an action.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The action type.</p>
   * @public
   */
  ActionType: ActionType | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The version of the evaluation form to activate. If the version property is not provided, the
   *    latest version of the evaluation form is activated.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormResponse {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * <p>Request processing failed because of an error or failure with the service.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified parameters are not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the parameters.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource already has that name.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the resource.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The throttling limit has been exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AgentAvailabilityTimer = {
  TIME_SINCE_LAST_ACTIVITY: "TIME_SINCE_LAST_ACTIVITY",
  TIME_SINCE_LAST_INBOUND: "TIME_SINCE_LAST_INBOUND",
} as const;

/**
 * @public
 */
export type AgentAvailabilityTimer = (typeof AgentAvailabilityTimer)[keyof typeof AgentAvailabilityTimer];

/**
 * <p>Information about a traffic distribution.</p>
 * @public
 */
export interface Distribution {
  /**
   * <p>The Amazon Web Services Region where the traffic is distributed.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The percentage of the traffic that is distributed, in increments of 10.</p>
   * @public
   */
  Percentage: number | undefined;
}

/**
 * <p>The distribution of agents between the instance and its replica(s).</p>
 * @public
 */
export interface AgentConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactState = {
  CONNECTED: "CONNECTED",
  CONNECTED_ONHOLD: "CONNECTED_ONHOLD",
  CONNECTING: "CONNECTING",
  ENDED: "ENDED",
  ERROR: "ERROR",
  INCOMING: "INCOMING",
  MISSED: "MISSED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ContactState = (typeof ContactState)[keyof typeof ContactState];

/**
 * @public
 * @enum
 */
export const Channel = {
  CHAT: "CHAT",
  TASK: "TASK",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type Channel = (typeof Channel)[keyof typeof Channel];

/**
 * @public
 * @enum
 */
export const ContactInitiationMethod = {
  API: "API",
  CALLBACK: "CALLBACK",
  DISCONNECT: "DISCONNECT",
  EXTERNAL_OUTBOUND: "EXTERNAL_OUTBOUND",
  INBOUND: "INBOUND",
  MONITOR: "MONITOR",
  OUTBOUND: "OUTBOUND",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
  TRANSFER: "TRANSFER",
} as const;

/**
 * @public
 */
export type ContactInitiationMethod = (typeof ContactInitiationMethod)[keyof typeof ContactInitiationMethod];

/**
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 * @public
 */
export interface QueueReference {
  /**
   * <p>The identifier of the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the
 *    user.</p>
 * @public
 */
export interface AgentContactReference {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The channel of the contact.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>How the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">state of the contact</a>.</p>
   *          <note>
   *             <p>When <code>AgentContactState</code> is set to <code>CONNECTED_ONHOLD</code>,
   *      <code>StateStartTimestamp</code> is not changed. Instead, <code>StateStartTimestamp</code>
   *     reflects the time the contact was <code>CONNECTED</code> to the agent.</p>
   *          </note>
   * @public
   */
  AgentContactState?: ContactState | undefined;

  /**
   * <p>The epoch timestamp when the contact state started.</p>
   * @public
   */
  StateStartTimestamp?: Date | undefined;

  /**
   * <p>The time at which the contact was connected to an agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * <p>Contains information about a queue resource for which metrics are returned.</p>
   * @public
   */
  Queue?: QueueReference | undefined;
}

/**
 * <p>Information about an agent hierarchy group.</p>
 * @public
 */
export interface AgentHierarchyGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A structure that defines search criteria for contacts using agent hierarchy group levels.
 *    For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export interface AgentHierarchyGroups {
  /**
   * <p>The identifiers for level 1 hierarchy groups.</p>
   * @public
   */
  L1Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 2 hierarchy groups.</p>
   * @public
   */
  L2Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 3 hierarchy groups.</p>
   * @public
   */
  L3Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 4 hierarchy groups.</p>
   * @public
   */
  L4Ids?: string[] | undefined;

  /**
   * <p>The identifiers for level 5 hierarchy groups.</p>
   * @public
   */
  L5Ids?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScreenShareCapability = {
  SEND: "SEND",
} as const;

/**
 * @public
 */
export type ScreenShareCapability = (typeof ScreenShareCapability)[keyof typeof ScreenShareCapability];

/**
 * @public
 * @enum
 */
export const VideoCapability = {
  SEND: "SEND",
} as const;

/**
 * @public
 */
export type VideoCapability = (typeof VideoCapability)[keyof typeof VideoCapability];

/**
 * <p>The configuration for the allowed video and screen sharing capabilities for participants
 *    present over the call. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up in-app, web, video calling, and screen
 *     sharing capabilities</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export interface ParticipantCapabilities {
  /**
   * <p>The configuration having the video and screen sharing capabilities for participants over the
   *    call.</p>
   * @public
   */
  Video?: VideoCapability | undefined;

  /**
   * <p>The screen sharing capability that is enabled for the participant. <code>SEND</code>
   *    indicates the participant can share their screen.</p>
   * @public
   */
  ScreenShare?: ScreenShareCapability | undefined;
}

/**
 * <p>Information regarding the device.</p>
 * @public
 */
export interface DeviceInfo {
  /**
   * <p>Name of the platform that the participant used for the call.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>Version of the platform that the participant used for the call.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Operating system that the participant used for the call.</p>
   * @public
   */
  OperatingSystem?: string | undefined;
}

/**
 * <p>Information about the agent hierarchy. Hierarchies can be configured with up to five
 *    levels.</p>
 * @public
 */
export interface HierarchyGroups {
  /**
   * <p>The group at level one of the agent hierarchy.</p>
   * @public
   */
  Level1?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level two of the agent hierarchy.</p>
   * @public
   */
  Level2?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level three of the agent hierarchy.</p>
   * @public
   */
  Level3?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level four of the agent hierarchy.</p>
   * @public
   */
  Level4?: AgentHierarchyGroup | undefined;

  /**
   * <p>The group at level five of the agent hierarchy.</p>
   * @public
   */
  Level5?: AgentHierarchyGroup | undefined;
}

/**
 * <p>Information about the agent who accepted the contact.</p>
 * @public
 */
export interface AgentInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was connected to the agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date | undefined;

  /**
   * <p>Agent pause duration for a contact in seconds.</p>
   * @public
   */
  AgentPauseDurationInSeconds?: number | undefined;

  /**
   * <p>The agent hierarchy groups for the agent.</p>
   * @public
   */
  HierarchyGroups?: HierarchyGroups | undefined;

  /**
   * <p>Information regarding Agent’s device.</p>
   * @public
   */
  DeviceInfo?: DeviceInfo | undefined;

  /**
   * <p>The configuration for the allowed video and screen sharing capabilities for participants
   *    present over the call. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up in-app, web, video calling, and screen
   *     sharing capabilities</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Capabilities?: ParticipantCapabilities | undefined;
}

/**
 * <p>Contains information for score and potential quality issues for Audio</p>
 * @public
 */
export interface AudioQualityMetricsInfo {
  /**
   * <p>Number measuring the estimated quality of the media connection.</p>
   * @public
   */
  QualityScore?: number | undefined;

  /**
   * <p>List of potential issues causing degradation of quality on a media connection. If the
   *    service did not detect any potential quality issues the list is empty.</p>
   *          <p>Valid values: <code>HighPacketLoss</code> | <code>HighRoundTripTime</code> |
   *     <code>HighJitterBuffer</code>
   *          </p>
   * @public
   */
  PotentialQualityIssues?: string[] | undefined;
}

/**
 * <p>Information about the quality of the Agent's media connection</p>
 * @public
 */
export interface AgentQualityMetrics {
  /**
   * <p>Information about the audio quality of the Agent</p>
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * <p>Can be used to define a list of preferred agents to target the contact to within the queue.
 *    Note that agents must have the queue in their routing profile in order to be offered the
 *    contact.</p>
 * @public
 */
export interface AgentsCriteria {
  /**
   * <p>An object to specify a list of agents, by user ID.</p>
   * @public
   */
  AgentIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentStatusState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AgentStatusState = (typeof AgentStatusState)[keyof typeof AgentStatusState];

/**
 * @public
 * @enum
 */
export const AgentStatusType = {
  CUSTOM: "CUSTOM",
  OFFLINE: "OFFLINE",
  ROUTABLE: "ROUTABLE",
} as const;

/**
 * @public
 */
export type AgentStatusType = (typeof AgentStatusType)[keyof typeof AgentStatusType];

/**
 * <p>Contains information about an agent status.</p>
 * @public
 */
export interface AgentStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the agent status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of agent status.</p>
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * <p>The display order of the agent status.</p>
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * <p>The state of the agent status.</p>
   * @public
   */
  State?: AgentStatusState | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p>Information about the agent's status.</p>
 * @public
 */
export interface AgentStatusReference {
  /**
   * <p>The start timestamp of the agent's status.</p>
   * @public
   */
  StatusStartTimestamp?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent's status.</p>
   * @public
   */
  StatusArn?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  StatusName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StringComparisonType = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type StringComparisonType = (typeof StringComparisonType)[keyof typeof StringComparisonType];

/**
 * <p>A leaf node condition which can be used to specify a string condition.</p>
 * @public
 */
export interface StringCondition {
  /**
   * <p>The name of the field in the string condition.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>The value of the string.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of comparison to be made when evaluating the string condition.</p>
   * @public
   */
  ComparisonType?: StringComparisonType | undefined;
}

/**
 * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
 *     BPO = 123</code>. </p>
 * @public
 */
export interface TagCondition {
  /**
   * <p>The tag key in the tag condition.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>The tag value in the tag condition.</p>
   * @public
   */
  TagValue?: string | undefined;
}

/**
 * <p>A list of conditions which would be applied together with an <code>AND</code>
 *    condition.</p>
 * @public
 */
export interface CommonAttributeAndCondition {
  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagConditions?: TagCondition[] | undefined;
}

/**
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
 *    This accepts an <code>OR</code> or <code>AND</code> (List of List) input where: </p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
 *      operator.</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
 *      operator.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ControlPlaneAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: CommonAttributeAndCondition[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndCondition?: CommonAttributeAndCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
   *     BPO = 123</code>. </p>
   * @public
   */
  TagCondition?: TagCondition | undefined;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface AgentStatusSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
   *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter | undefined;
}

/**
 * <p>Summary information for an agent status.</p>
 * @public
 */
export interface AgentStatusSummary {
  /**
   * <p>The identifier for an agent status.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the agent status.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the agent status.</p>
   * @public
   */
  Type?: AgentStatusType | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p>Information about the capabilities enabled for participants of the contact.</p>
 * @public
 */
export interface AllowedCapabilities {
  /**
   * <p>Information about the customer's video sharing capabilities.</p>
   * @public
   */
  Customer?: ParticipantCapabilities | undefined;

  /**
   * <p>Information about the agent's video sharing capabilities.</p>
   * @public
   */
  Agent?: ParticipantCapabilities | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitorCapability = {
  BARGE: "BARGE",
  SILENT_MONITOR: "SILENT_MONITOR",
} as const;

/**
 * @public
 */
export type MonitorCapability = (typeof MonitorCapability)[keyof typeof MonitorCapability];

/**
 * @public
 */
export interface AssociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to associate with the target account.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAnalyticsDataSetResponse {
  /**
   * <p>The identifier of the dataset that was associated.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The identifier of the target account. </p>
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * <p>The Resource Access Manager share ID that is generated.</p>
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Resource Access Manager share. </p>
   * @public
   */
  ResourceShareArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AttachedFileInvalidRequestExceptionReason = {
  INVALID_FILE_NAME: "INVALID_FILE_NAME",
  INVALID_FILE_SIZE: "INVALID_FILE_SIZE",
  INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
} as const;

/**
 * @public
 */
export type AttachedFileInvalidRequestExceptionReason =
  (typeof AttachedFileInvalidRequestExceptionReason)[keyof typeof AttachedFileInvalidRequestExceptionReason];

/**
 * <p>Reason why the request was invalid.</p>
 * @public
 */
export type InvalidRequestExceptionReason =
  | InvalidRequestExceptionReason.AttachedFileInvalidRequestExceptionReasonMember
  | InvalidRequestExceptionReason.$UnknownMember;

/**
 * @public
 */
export namespace InvalidRequestExceptionReason {
  /**
   * <p>Reason why the StartAttachedFiledUpload request was invalid.</p>
   * @public
   */
  export interface AttachedFileInvalidRequestExceptionReasonMember {
    AttachedFileInvalidRequestExceptionReason: AttachedFileInvalidRequestExceptionReason;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AttachedFileInvalidRequestExceptionReason?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AttachedFileInvalidRequestExceptionReason: (value: AttachedFileInvalidRequestExceptionReason) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvalidRequestExceptionReason, visitor: Visitor<T>): T => {
    if (value.AttachedFileInvalidRequestExceptionReason !== undefined)
      return visitor.AttachedFileInvalidRequestExceptionReason(value.AttachedFileInvalidRequestExceptionReason);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the request.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Reason why the request was invalid.</p>
   * @public
   */
  Reason?: InvalidRequestExceptionReason | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 */
export interface AssociateApprovedOriginRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain to add to your allow list.</p>
   * @public
   */
  Origin: string | undefined;
}

/**
 * <p>The service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Configuration information of an Amazon Lex bot.</p>
 * @public
 */
export interface LexBot {
  /**
   * <p>The name of the Amazon Lex bot.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the Amazon Lex bot was created.</p>
   * @public
   */
  LexRegion: string | undefined;
}

/**
 * <p>Configuration information of an Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexV2Bot {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.</p>
   * @public
   */
  AliasArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * <p>The Amazon Lex V2 bot to associate with the instance.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;
}

/**
 * <p>The allowed limit for the resource has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the limit.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const VocabularyLanguageCode = {
  AR_AE: "ar-AE",
  CA_ES: "ca-ES",
  DA_DK: "da-DK",
  DE_CH: "de-CH",
  DE_DE: "de-DE",
  EN_AB: "en-AB",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IE: "en-IE",
  EN_IN: "en-IN",
  EN_NZ: "en-NZ",
  EN_US: "en-US",
  EN_WL: "en-WL",
  EN_ZA: "en-ZA",
  ES_ES: "es-ES",
  ES_US: "es-US",
  FI_FI: "fi-FI",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  ID_ID: "id-ID",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  MS_MY: "ms-MY",
  NL_NL: "nl-NL",
  NO_NO: "no-NO",
  PL_PL: "pl-PL",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  SV_SE: "sv-SE",
  TL_PH: "tl-PH",
  ZH_CN: "zh-CN",
} as const;

/**
 * @public
 */
export type VocabularyLanguageCode = (typeof VocabularyLanguageCode)[keyof typeof VocabularyLanguageCode];

/**
 * @public
 */
export interface AssociateDefaultVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The identifier of the custom vocabulary. If this is empty, the default is set to none.</p>
   * @public
   */
  VocabularyId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDefaultVocabularyResponse {}

/**
 * @public
 * @enum
 */
export const FlowAssociationResourceType = {
  SMS_PHONE_NUMBER: "SMS_PHONE_NUMBER",
} as const;

/**
 * @public
 */
export type FlowAssociationResourceType =
  (typeof FlowAssociationResourceType)[keyof typeof FlowAssociationResourceType];

/**
 * @public
 */
export interface AssociateFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface AssociateFlowResponse {}

/**
 * @public
 * @enum
 */
export const InstanceStorageResourceType = {
  AGENT_EVENTS: "AGENT_EVENTS",
  ATTACHMENTS: "ATTACHMENTS",
  CALL_RECORDINGS: "CALL_RECORDINGS",
  CHAT_TRANSCRIPTS: "CHAT_TRANSCRIPTS",
  CONTACT_EVALUATIONS: "CONTACT_EVALUATIONS",
  CONTACT_TRACE_RECORDS: "CONTACT_TRACE_RECORDS",
  MEDIA_STREAMS: "MEDIA_STREAMS",
  REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS",
  REAL_TIME_CONTACT_ANALYSIS_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS",
  REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS",
  SCHEDULED_REPORTS: "SCHEDULED_REPORTS",
  SCREEN_RECORDINGS: "SCREEN_RECORDINGS",
} as const;

/**
 * @public
 */
export type InstanceStorageResourceType =
  (typeof InstanceStorageResourceType)[keyof typeof InstanceStorageResourceType];

/**
 * <p>Configuration information of a Kinesis Data Firehose delivery stream.</p>
 * @public
 */
export interface KinesisFirehoseConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
   */
  FirehoseArn: string | undefined;
}

/**
 * <p>Configuration information of a Kinesis data stream.</p>
 * @public
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream.</p>
   * @public
   */
  StreamArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>The encryption configuration.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>The type of encryption.</p>
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * <p>The full ARN of the encryption key. </p>
   *          <note>
   *             <p>Be sure to provide the full ARN of the encryption key, not just the ID.</p>
   *             <p>Amazon Connect supports only KMS keys with the default key spec of
   *      <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default">
   *                   <code>SYMMETRIC_DEFAULT</code>
   *                </a>. </p>
   *          </note>
   * @public
   */
  KeyId: string | undefined;
}

/**
 * <p>Configuration information of a Kinesis video stream.</p>
 * @public
 */
export interface KinesisVideoStreamConfig {
  /**
   * <p>The prefix of the video stream.</p>
   * @public
   */
  Prefix: string | undefined;

  /**
   * <p>The number of hours data is retained in the stream. Kinesis Video Streams retains the data
   *    in a data store that is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The encryption configuration.</p>
   * @public
   */
  EncryptionConfig: EncryptionConfig | undefined;
}

/**
 * <p>Information about the Amazon Simple Storage Service (Amazon S3) storage type.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>The S3 bucket name.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   * @public
   */
  BucketPrefix: string | undefined;

  /**
   * <p>The Amazon S3 encryption configuration.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageType = {
  KINESIS_FIREHOSE: "KINESIS_FIREHOSE",
  KINESIS_STREAM: "KINESIS_STREAM",
  KINESIS_VIDEO_STREAM: "KINESIS_VIDEO_STREAM",
  S3: "S3",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * <p>The storage configuration for the instance.</p>
 * @public
 */
export interface InstanceStorageConfig {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;

  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageType: StorageType | undefined;

  /**
   * <p>The S3 bucket
   *    configuration.</p>
   * @public
   */
  S3Config?: S3Config | undefined;

  /**
   * <p>The configuration of the Kinesis video stream.</p>
   * @public
   */
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig | undefined;

  /**
   * <p>The configuration of the Kinesis data stream.</p>
   * @public
   */
  KinesisStreamConfig?: KinesisStreamConfig | undefined;

  /**
   * <p>The configuration of the Kinesis Firehose delivery stream.</p>
   * @public
   */
  KinesisFirehoseConfig?: KinesisFirehoseConfig | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type. To <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-contact-analysis-segment-streams.html">enable streaming
   *     for real-time analysis of contacts</a>, use the following types:</p>
   *          <ul>
   *             <li>
   *                <p>For chat contacts, use <code>REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>For voice contacts, use <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <code>REAL_TIME_CONTACT_ANALYSIS_SEGMENTS</code> is deprecated, but it is still supported
   *     and will apply only to VOICE channel contacts. Use
   *      <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code> for voice contacts moving
   *     forward.</p>
   *             <p>If you have previously associated a stream with
   *      <code>REAL_TIME_CONTACT_ANALYSIS_SEGMENTS</code>, no action is needed to update the stream to
   *      <code>REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS</code>.</p>
   *          </note>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfig: InstanceStorageConfig | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters
   *    allowed is 140.</p>
   * @public
   */
  FunctionArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Lex bot to associate with the instance.</p>
   * @public
   */
  LexBot: LexBot | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberContactFlowRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 */
export interface AssociateQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The quick connects to associate with this queue.</p>
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * <p>Contains the channel and queue identifier for a routing profile.</p>
 * @public
 */
export interface RoutingProfileQueueReference {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   * @public
   */
  Channel: Channel | undefined;
}

/**
 * <p>Contains information about the queue and channel for which priority and delay can be
 *    set.</p>
 * @public
 */
export interface RoutingProfileQueueConfig {
  /**
   * <p>Contains information about a queue resource.</p>
   * @public
   */
  QueueReference: RoutingProfileQueueReference | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Delay: number | undefined;
}

/**
 * @public
 */
export interface AssociateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to associate with this routing profile.</p>
   * @public
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid security key in PEM format as a String.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The identifier of the user account. This can be the ID or the ARN of the user. </p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserResponse {}

/**
 * <p>Information about proficiency of a user.</p>
 * @public
 */
export interface UserProficiency {
  /**
   * <p>The name of user's proficiency. You must use name of predefined attribute present in the
   *    Amazon Connect instance.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of user's proficiency. You must use value of predefined attribute present in the
   *    Amazon Connect instance.</p>
   * @public
   */
  AttributeValue: string | undefined;

  /**
   * <p>The level of the proficiency. The valid values are 1, 2, 3, 4 and 5.</p>
   * @public
   */
  Level: number | undefined;
}

/**
 * @public
 */
export interface AssociateUserProficienciesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN of the instance).</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The proficiencies to associate with the user.</p>
   * @public
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>An array of dataset identifiers to associate.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Information about associations that are successfully created: <code>DataSetId</code>,
 *     <code>TargetAccountId</code>, <code>ResourceShareId</code>,
 *    <code>ResourceShareArn</code>. </p>
 * @public
 */
export interface AnalyticsDataAssociationResult {
  /**
   * <p>The identifier of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The identifier of the target account. </p>
   * @public
   */
  TargetAccountId?: string | undefined;

  /**
   * <p>The Resource Access Manager share ID.</p>
   * @public
   */
  ResourceShareId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Resource Access Manager share. </p>
   * @public
   */
  ResourceShareArn?: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>List of errors for dataset association failures. </p>
 * @public
 */
export interface ErrorResult {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The corresponding error message for the error code.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateAnalyticsDataSetResponse {
  /**
   * <p>Information about associations that are successfully created: <code>DataSetId</code>,
   *     <code>TargetAccountId</code>, <code>ResourceShareId</code>,
   *    <code>ResourceShareArn</code>. </p>
   * @public
   */
  Created?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * <p>A list of errors for datasets that aren't successfully associated with the target
   *    account.</p>
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>An array of associated dataset identifiers to remove.</p>
   * @public
   */
  DataSetIds: string[] | undefined;

  /**
   * <p>The identifier of the target account.  Use to disassociate a dataset from a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateAnalyticsDataSetResponse {
  /**
   * <p>An array of successfully disassociated dataset identifiers.</p>
   * @public
   */
  Deleted?: string[] | undefined;

  /**
   * <p>A list of errors for any datasets not successfully removed.</p>
   * @public
   */
  Errors?: ErrorResult[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataRequest {
  /**
   * <p>The unique identifiers of the attached file resource.</p>
   * @public
   */
  FileIds: string[] | undefined;

  /**
   * <p>The unique identifier of the Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * <p>Error describing a failure to retrieve attached file metadata through
 *    BatchGetAttachedFileMetadata action.</p>
 * @public
 */
export interface AttachedFileError {
  /**
   * <p> Status code describing the failure. </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Why the attached file couldn't be retrieved. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string | undefined;
}

/**
 * <p>Information on the identity that created the file.</p>
 * @public
 */
export type CreatedByInfo =
  | CreatedByInfo.AWSIdentityArnMember
  | CreatedByInfo.ConnectUserArnMember
  | CreatedByInfo.$UnknownMember;

/**
 * @public
 */
export namespace CreatedByInfo {
  /**
   * <p>An agent ARN representing a <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-resources-for-iam-policies">connect user</a>.</p>
   * @public
   */
  export interface ConnectUserArnMember {
    ConnectUserArn: string;
    AWSIdentityArn?: never;
    $unknown?: never;
  }

  /**
   * <p>STS or IAM ARN representing the identity of API Caller. SDK users cannot populate this and
   *    this value is calculated automatically if <code>ConnectUserArn</code> is not provided.</p>
   * @public
   */
  export interface AWSIdentityArnMember {
    ConnectUserArn?: never;
    AWSIdentityArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ConnectUserArn?: never;
    AWSIdentityArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ConnectUserArn: (value: string) => T;
    AWSIdentityArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CreatedByInfo, visitor: Visitor<T>): T => {
    if (value.ConnectUserArn !== undefined) return visitor.ConnectUserArn(value.ConnectUserArn);
    if (value.AWSIdentityArn !== undefined) return visitor.AWSIdentityArn(value.AWSIdentityArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FileStatusType = {
  APPROVED: "APPROVED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type FileStatusType = (typeof FileStatusType)[keyof typeof FileStatusType];

/**
 * @public
 * @enum
 */
export const FileUseCaseType = {
  ATTACHMENT: "ATTACHMENT",
} as const;

/**
 * @public
 */
export type FileUseCaseType = (typeof FileUseCaseType)[keyof typeof FileUseCaseType];

/**
 * <p>Information about the attached file.</p>
 * @public
 */
export interface AttachedFile {
  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601
   *    format: <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus: FileStatusType | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * <p>The use case for the file.</p>
   * @public
   */
  FileUseCaseType?: FileUseCaseType | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "Tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetAttachedFileMetadataResponse {
  /**
   * <p>List of attached files that were successfully retrieved. </p>
   * @public
   */
  Files?: AttachedFile[] | undefined;

  /**
   * <p>List of errors of attached files that could not be retrieved. </p>
   * @public
   */
  Errors?: AttachedFileError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ListFlowAssociationResourceType = {
  VOICE_PHONE_NUMBER: "VOICE_PHONE_NUMBER",
} as const;

/**
 * @public
 */
export type ListFlowAssociationResourceType =
  (typeof ListFlowAssociationResourceType)[keyof typeof ListFlowAssociationResourceType];

/**
 * @public
 */
export interface BatchGetFlowAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A list of resource identifiers to retrieve flow associations.</p>
   * @public
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource association.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * <p>Information about flow associations.</p>
 * @public
 */
export interface FlowAssociationSummary {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId?: string | undefined;

  /**
   * <p>The type of resource association.</p>
   * @public
   */
  ResourceType?: ListFlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface BatchGetFlowAssociationResponse {
  /**
   * <p>Information about flow associations.</p>
   * @public
   */
  FlowAssociationSummaryList?: FlowAssociationSummary[] | undefined;
}

/**
 * <p>Information associated with a campaign.</p>
 * @public
 */
export interface Campaign {
  /**
   * <p>A unique identifier for a campaign.</p>
   * @public
   */
  CampaignId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  CONNECT_PHONENUMBER_ARN: "CONNECT_PHONENUMBER_ARN",
  CONTACT_FLOW: "CONTACT_FLOW",
  TELEPHONE_NUMBER: "TELEPHONE_NUMBER",
  VOIP: "VOIP",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * <p>Information about the endpoint.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>Type of the endpoint.</p>
   * @public
   */
  Type?: EndpointType | undefined;

  /**
   * <p>Address of the endpoint.</p>
   * @public
   */
  Address?: string | undefined;
}

/**
 * <p>Request object with information to create a contact.</p>
 * @public
 */
export interface ContactDataRequest {
  /**
   * <p>Endpoint associated with the Amazon Connect instance from which outbound contact will be
   *    initiated for the campaign.</p>
   * @public
   */
  SystemEndpoint?: Endpoint | undefined;

  /**
   * <p>Endpoint of the customer for which contact will be initiated.</p>
   * @public
   */
  CustomerEndpoint?: Endpoint | undefined;

  /**
   * <p>Identifier to uniquely identify individual requests in the batch.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>The identifier of the queue associated with the Amazon Connect instance in which
   *    contacts that are created will be queued.</p>
   * @public
   */
  QueueId?: string | undefined;

  /**
   * <p>List of attributes to be stored in a contact.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Structure to store information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign | undefined;
}

/**
 * @public
 */
export interface BatchPutContactRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>List of individual contact requests.</p>
   * @public
   */
  ContactDataRequestList: ContactDataRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureReasonCode = {
  IDEMPOTENCY_EXCEPTION: "IDEMPOTENCY_EXCEPTION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ATTRIBUTE_KEY: "INVALID_ATTRIBUTE_KEY",
  INVALID_CUSTOMER_ENDPOINT: "INVALID_CUSTOMER_ENDPOINT",
  INVALID_QUEUE: "INVALID_QUEUE",
  INVALID_SYSTEM_ENDPOINT: "INVALID_SYSTEM_ENDPOINT",
  MISSING_CAMPAIGN: "MISSING_CAMPAIGN",
  MISSING_CUSTOMER_ENDPOINT: "MISSING_CUSTOMER_ENDPOINT",
  MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT: "MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT",
  REQUEST_THROTTLED: "REQUEST_THROTTLED",
} as const;

/**
 * @public
 */
export type FailureReasonCode = (typeof FailureReasonCode)[keyof typeof FailureReasonCode];

/**
 * <p>Request for which contact failed to be generated.</p>
 * @public
 */
export interface FailedRequest {
  /**
   * <p>Request identifier provided in the API call in the ContactDataRequest to create a
   *    contact.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>Reason code for the failure.</p>
   * @public
   */
  FailureReasonCode?: FailureReasonCode | undefined;

  /**
   * <p>Why the request to create a contact failed.</p>
   * @public
   */
  FailureReasonMessage?: string | undefined;
}

/**
 * <p>Request for which contact was successfully created.</p>
 * @public
 */
export interface SuccessfulRequest {
  /**
   * <p>Request identifier provided in the API call in the ContactDataRequest to create a
   *    contact.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;

  /**
   * <p>The contactId of the contact that was created successfully.</p>
   * @public
   */
  ContactId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutContactResponse {
  /**
   * <p>List of requests for which contact was successfully created.</p>
   * @public
   */
  SuccessfulRequestList?: SuccessfulRequest[] | undefined;

  /**
   * <p>List of requests for which contact creation failed.</p>
   * @public
   */
  FailedRequestList?: FailedRequest[] | undefined;
}

/**
 * <p>An entity with the same name already exists.</p>
 * @public
 */
export class IdempotencyException extends __BaseException {
  readonly name: "IdempotencyException" = "IdempotencyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ClaimPhoneNumberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The phone number you want to claim. Phone numbers are formatted <code>[+] [country code]
   *     [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>Pattern: <code>^[a-f0-9]\{8\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{12\}$</code>
   *          </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface ClaimPhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;
}

/**
 * Request to CompleteAttachedFileUpload API
 * @public
 */
export interface CompleteAttachedFileUploadRequest {
  /**
   * <p>The unique identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Response from CompleteAttachedFileUpload API
 * @public
 */
export interface CompleteAttachedFileUploadResponse {}

/**
 * @public
 */
export interface CreateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the status.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of the status.</p>
   * @public
   */
  State: AgentStatusState | undefined;

  /**
   * <p>The display order of the status.</p>
   * @public
   */
  DisplayOrder?: number | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   * @public
   */
  AgentStatusARN?: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId?: string | undefined;
}

/**
 * <p>A resource with the specified name already exists.</p>
 * @public
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ContactFlowStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;

/**
 * @public
 */
export type ContactFlowStatus = (typeof ContactFlowStatus)[keyof typeof ContactFlowStatus];

/**
 * @public
 * @enum
 */
export const ContactFlowType = {
  AGENT_HOLD: "AGENT_HOLD",
  AGENT_TRANSFER: "AGENT_TRANSFER",
  AGENT_WHISPER: "AGENT_WHISPER",
  CONTACT_FLOW: "CONTACT_FLOW",
  CUSTOMER_HOLD: "CUSTOMER_HOLD",
  CUSTOMER_QUEUE: "CUSTOMER_QUEUE",
  CUSTOMER_WHISPER: "CUSTOMER_WHISPER",
  OUTBOUND_WHISPER: "OUTBOUND_WHISPER",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
} as const;

/**
 * @public
 */
export type ContactFlowType = (typeof ContactFlowType)[keyof typeof ContactFlowType];

/**
 * @public
 */
export interface CreateContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   * @public
   */
  Type: ContactFlowType | undefined;

  /**
   * <p>The description of the flow. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>Indicates the flow status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content. the <code>SAVED</code>
   *    status does not initiate validation of the content. <code>SAVED</code> |
   *    <code>PUBLISHED</code>.</p>
   * @public
   */
  Status?: ContactFlowStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowResponse {
  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * <p>Indicates the checksum value of the flow content.</p>
   * @public
   */
  FlowContentSha256?: string | undefined;
}

/**
 * <p>Information about a problem detail.</p>
 * @public
 */
export interface ProblemDetail {
  /**
   * <p>The problem detail's message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The flow is not valid.</p>
 * @public
 */
export class InvalidContactFlowException extends __BaseException {
  readonly name: "InvalidContactFlowException" = "InvalidContactFlowException";
  readonly $fault: "client" = "client";
  /**
   * <p>The problems with the flow. Please fix before trying again.</p>
   * @public
   */
  problems?: ProblemDetail[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowException, __BaseException>) {
    super({
      name: "InvalidContactFlowException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowException.prototype);
    this.problems = opts.problems;
  }
}

/**
 * @public
 */
export interface CreateContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the flow module. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowModuleResponse {
  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The problems with the module. Please fix before trying again.</p>
 * @public
 */
export class InvalidContactFlowModuleException extends __BaseException {
  readonly name: "InvalidContactFlowModuleException" = "InvalidContactFlowModuleException";
  readonly $fault: "client" = "client";
  Problems?: ProblemDetail[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowModuleException, __BaseException>) {
    super({
      name: "InvalidContactFlowModuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowModuleException.prototype);
    this.Problems = opts.Problems;
  }
}

/**
 * @public
 */
export interface CreateContactFlowVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The description of the flow version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>Indicates the checksum value of the flow content.</p>
   * @public
   */
  FlowContentSha256?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactFlowVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  ContactFlowArn?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormQuestionType = {
  NUMERIC: "NUMERIC",
  SINGLESELECT: "SINGLESELECT",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type EvaluationFormQuestionType = (typeof EvaluationFormQuestionType)[keyof typeof EvaluationFormQuestionType];

/**
 * @public
 * @enum
 */
export const NumericQuestionPropertyAutomationLabel = {
  AGENT_INTERACTION_DURATION: "AGENT_INTERACTION_DURATION",
  CONTACT_DURATION: "CONTACT_DURATION",
  CUSTOMER_HOLD_TIME: "CUSTOMER_HOLD_TIME",
  NON_TALK_TIME: "NON_TALK_TIME",
  NON_TALK_TIME_PERCENTAGE: "NON_TALK_TIME_PERCENTAGE",
  NUMBER_OF_INTERRUPTIONS: "NUMBER_OF_INTERRUPTIONS",
  OVERALL_AGENT_SENTIMENT_SCORE: "OVERALL_AGENT_SENTIMENT_SCORE",
  OVERALL_CUSTOMER_SENTIMENT_SCORE: "OVERALL_CUSTOMER_SENTIMENT_SCORE",
} as const;

/**
 * @public
 */
export type NumericQuestionPropertyAutomationLabel =
  (typeof NumericQuestionPropertyAutomationLabel)[keyof typeof NumericQuestionPropertyAutomationLabel];

/**
 * <p>Information about the property value used in automation of a numeric questions. Label values
 *    are associated with minimum and maximum values for the numeric question.</p>
 *          <ul>
 *             <li>
 *                <p>Sentiment scores have a minimum value of -5 and maximum value of 5.</p>
 *             </li>
 *             <li>
 *                <p> Duration labels, such as <code>NON_TALK_TIME</code>, <code>CONTACT_DURATION</code>,
 *       <code>AGENT_INTERACTION_DURATION</code>, <code>CUSTOMER_HOLD_TIME</code> have a minimum value
 *      of 0 and maximum value of 63072000.</p>
 *             </li>
 *             <li>
 *                <p>Percentages have a minimum value of 0 and maximum value of 100. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NUMBER_OF_INTERRUPTIONS</code> has a minimum value of 0 and maximum value of
 *      1000.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface NumericQuestionPropertyValueAutomation {
  /**
   * <p>The property label of the automation.</p>
   * @public
   */
  Label: NumericQuestionPropertyAutomationLabel | undefined;
}

/**
 * <p>Information about the automation configuration in numeric questions.</p>
 * @public
 */
export type EvaluationFormNumericQuestionAutomation =
  | EvaluationFormNumericQuestionAutomation.PropertyValueMember
  | EvaluationFormNumericQuestionAutomation.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormNumericQuestionAutomation {
  /**
   * <p>The property value of the automation.</p>
   * @public
   */
  export interface PropertyValueMember {
    PropertyValue: NumericQuestionPropertyValueAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PropertyValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PropertyValue: (value: NumericQuestionPropertyValueAutomation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormNumericQuestionAutomation, visitor: Visitor<T>): T => {
    if (value.PropertyValue !== undefined) return visitor.PropertyValue(value.PropertyValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about the option range used for scoring in numeric questions.</p>
 * @public
 */
export interface EvaluationFormNumericQuestionOption {
  /**
   * <p>The minimum answer value of the range option.</p>
   * @public
   */
  MinValue: number | undefined;

  /**
   * <p>The maximum answer value of the range option.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The score assigned to answer values within the range option.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the
   *    overall evaluation gets a score of 0.</p>
   * @public
   */
  AutomaticFail?: boolean | undefined;
}

/**
 * <p>Information about properties for a numeric question in an evaluation form.</p>
 * @public
 */
export interface EvaluationFormNumericQuestionProperties {
  /**
   * <p>The minimum answer value.</p>
   * @public
   */
  MinValue: number | undefined;

  /**
   * <p>The maximum answer value.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The scoring options of the numeric question.</p>
   * @public
   */
  Options?: EvaluationFormNumericQuestionOption[] | undefined;

  /**
   * <p>The automation properties of the numeric question.</p>
   * @public
   */
  Automation?: EvaluationFormNumericQuestionAutomation | undefined;
}

/**
 * @public
 * @enum
 */
export const SingleSelectQuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;

/**
 * @public
 */
export type SingleSelectQuestionRuleCategoryAutomationCondition =
  (typeof SingleSelectQuestionRuleCategoryAutomationCondition)[keyof typeof SingleSelectQuestionRuleCategoryAutomationCondition];

/**
 * <p>Information about the automation option based on a rule category for a single select
 *    question.</p>
 * @public
 */
export interface SingleSelectQuestionRuleCategoryAutomation {
  /**
   * <p> The category name, as defined in Rules.</p>
   * @public
   */
  Category: string | undefined;

  /**
   * <p>The condition to apply for the automation option. If the condition is <code>PRESENT</code>,
   *    then the option is applied when the contact data includes the category. Similarly, if the
   *    condition is <code>NOT_PRESENT</code>, then the option is applied when the contact data does not
   *    include the category.</p>
   * @public
   */
  Condition: SingleSelectQuestionRuleCategoryAutomationCondition | undefined;

  /**
   * <p>The identifier of the answer option.</p>
   * @public
   */
  OptionRefId: string | undefined;
}

/**
 * <p>Information about the automation option of a single select question.</p>
 * @public
 */
export type EvaluationFormSingleSelectQuestionAutomationOption =
  | EvaluationFormSingleSelectQuestionAutomationOption.RuleCategoryMember
  | EvaluationFormSingleSelectQuestionAutomationOption.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormSingleSelectQuestionAutomationOption {
  /**
   * <p>The automation option based on a rule category for the single select question.</p>
   * @public
   */
  export interface RuleCategoryMember {
    RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RuleCategory?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RuleCategory: (value: SingleSelectQuestionRuleCategoryAutomation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormSingleSelectQuestionAutomationOption, visitor: Visitor<T>): T => {
    if (value.RuleCategory !== undefined) return visitor.RuleCategory(value.RuleCategory);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about the automation configuration in single select questions. Automation
 *    options are evaluated in order, and the first matched option is applied. If no automation option
 *    matches, and there is a default option, then the default option is applied.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionAutomation {
  /**
   * <p>The automation options of the single select question.</p>
   * @public
   */
  Options: EvaluationFormSingleSelectQuestionAutomationOption[] | undefined;

  /**
   * <p>The identifier of the default answer option, when none of the automation options match the
   *    criteria.</p>
   * @public
   */
  DefaultOptionRefId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormSingleSelectQuestionDisplayMode = {
  DROPDOWN: "DROPDOWN",
  RADIO: "RADIO",
} as const;

/**
 * @public
 */
export type EvaluationFormSingleSelectQuestionDisplayMode =
  (typeof EvaluationFormSingleSelectQuestionDisplayMode)[keyof typeof EvaluationFormSingleSelectQuestionDisplayMode];

/**
 * <p>Information about the automation configuration in single select questions.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionOption {
  /**
   * <p>The identifier of the answer option. An identifier must be unique within the
   *    question.</p>
   * @public
   */
  RefId: string | undefined;

  /**
   * <p>The title of the answer option.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The score assigned to the answer option.</p>
   * @public
   */
  Score?: number | undefined;

  /**
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the
   *    overall evaluation gets a score of 0.</p>
   * @public
   */
  AutomaticFail?: boolean | undefined;
}

/**
 * <p>Information about the options in single select questions.</p>
 * @public
 */
export interface EvaluationFormSingleSelectQuestionProperties {
  /**
   * <p>The answer options of the single select question.</p>
   * @public
   */
  Options: EvaluationFormSingleSelectQuestionOption[] | undefined;

  /**
   * <p>The display mode of the single select question.</p>
   * @public
   */
  DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode | undefined;

  /**
   * <p>The display mode of the single select question.</p>
   * @public
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation | undefined;
}

/**
 * <p>Information about properties for a question in an evaluation form. The question type
 *    properties must be either for a numeric question or a single select question.</p>
 * @public
 */
export type EvaluationFormQuestionTypeProperties =
  | EvaluationFormQuestionTypeProperties.NumericMember
  | EvaluationFormQuestionTypeProperties.SingleSelectMember
  | EvaluationFormQuestionTypeProperties.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormQuestionTypeProperties {
  /**
   * <p>The properties of the numeric question.</p>
   * @public
   */
  export interface NumericMember {
    Numeric: EvaluationFormNumericQuestionProperties;
    SingleSelect?: never;
    $unknown?: never;
  }

  /**
   * <p>The properties of the numeric question.</p>
   * @public
   */
  export interface SingleSelectMember {
    Numeric?: never;
    SingleSelect: EvaluationFormSingleSelectQuestionProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Numeric?: never;
    SingleSelect?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Numeric: (value: EvaluationFormNumericQuestionProperties) => T;
    SingleSelect: (value: EvaluationFormSingleSelectQuestionProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormQuestionTypeProperties, visitor: Visitor<T>): T => {
    if (value.Numeric !== undefined) return visitor.Numeric(value.Numeric);
    if (value.SingleSelect !== undefined) return visitor.SingleSelect(value.SingleSelect);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about a question from an evaluation form.</p>
 * @public
 */
export interface EvaluationFormQuestion {
  /**
   * <p>The title of the question.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The instructions of the section.</p>
   * @public
   */
  Instructions?: string | undefined;

  /**
   * <p>The identifier of the question. An identifier must be unique within the evaluation
   *    form.</p>
   * @public
   */
  RefId: string | undefined;

  /**
   * <p>The flag to enable not applicable answers to the question.</p>
   * @public
   */
  NotApplicableEnabled?: boolean | undefined;

  /**
   * <p>The type of the question.</p>
   * @public
   */
  QuestionType: EvaluationFormQuestionType | undefined;

  /**
   * <p>The properties of the type of question. Text questions do not have to define question type
   *    properties.</p>
   * @public
   */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties | undefined;

  /**
   * <p>The scoring weight of the section.</p>
   * @public
   */
  Weight?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringMode = {
  QUESTION_ONLY: "QUESTION_ONLY",
  SECTION_ONLY: "SECTION_ONLY",
} as const;

/**
 * @public
 */
export type EvaluationFormScoringMode = (typeof EvaluationFormScoringMode)[keyof typeof EvaluationFormScoringMode];

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EvaluationFormScoringStatus =
  (typeof EvaluationFormScoringStatus)[keyof typeof EvaluationFormScoringStatus];

/**
 * <p>Information about scoring strategy for an evaluation form.</p>
 * @public
 */
export interface EvaluationFormScoringStrategy {
  /**
   * <p>The scoring mode of the evaluation form.</p>
   * @public
   */
  Mode: EvaluationFormScoringMode | undefined;

  /**
   * <p>The scoring status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormScoringStatus | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormResponse {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HoursOfOperationDays = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type HoursOfOperationDays = (typeof HoursOfOperationDays)[keyof typeof HoursOfOperationDays];

/**
 * <p>The start time or end time for an hours of operation.</p>
 * @public
 */
export interface HoursOfOperationTimeSlice {
  /**
   * <p>The hours.</p>
   * @public
   */
  Hours: number | undefined;

  /**
   * <p>The minutes.</p>
   * @public
   */
  Minutes: number | undefined;
}

/**
 * <p>Contains information about the hours of operation.</p>
 * @public
 */
export interface HoursOfOperationConfig {
  /**
   * <p>The day that the hours of operation applies to.</p>
   * @public
   */
  Day: HoursOfOperationDays | undefined;

  /**
   * <p>The start time that your contact center opens.</p>
   * @public
   */
  StartTime: HoursOfOperationTimeSlice | undefined;

  /**
   * <p>The end time that your contact center closes.</p>
   * @public
   */
  EndTime: HoursOfOperationTimeSlice | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the hours of operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time zone of the hours of operation.</p>
   * @public
   */
  TimeZone: string | undefined;

  /**
   * <p>Configuration information for the hours of operation: day, start time, and end time.</p>
   * @public
   */
  Config: HoursOfOperationConfig[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationResponse {
  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   * @public
   */
  HoursOfOperationArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DirectoryType = {
  CONNECT_MANAGED: "CONNECT_MANAGED",
  EXISTING_DIRECTORY: "EXISTING_DIRECTORY",
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * <p>The idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The type of identity management for your Amazon Connect users.</p>
   * @public
   */
  IdentityManagementType: DirectoryType | undefined;

  /**
   * <p>The name for your instance.</p>
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * <p>The identifier for the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Your contact center handles incoming contacts.</p>
   * @public
   */
  InboundCallsEnabled: boolean | undefined;

  /**
   * <p>Your contact center allows outbound calls.</p>
   * @public
   */
  OutboundCallsEnabled: boolean | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * <p>The identifier for the instance.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  APPLICATION: "APPLICATION",
  CASES_DOMAIN: "CASES_DOMAIN",
  EVENT: "EVENT",
  FILE_SCANNER: "FILE_SCANNER",
  PINPOINT_APP: "PINPOINT_APP",
  Q_MESSAGE_TEMPLATES: "Q_MESSAGE_TEMPLATES",
  VOICE_ID: "VOICE_ID",
  WISDOM_ASSISTANT: "WISDOM_ASSISTANT",
  WISDOM_KNOWLEDGE_BASE: "WISDOM_KNOWLEDGE_BASE",
  WISDOM_QUICK_RESPONSES: "WISDOM_QUICK_RESPONSES",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  CASES: "CASES",
  SALESFORCE: "SALESFORCE",
  ZENDESK: "ZENDESK",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 */
export interface CreateIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of information to be ingested.</p>
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   *          <note>
   *             <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint
   *     instances must be in the same account.</p>
   *          </note>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The URL for the external application. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceApplicationUrl?: string | undefined;

  /**
   * <p>The name of the external application. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceApplicationName?: string | undefined;

  /**
   * <p>The type of the data source. This field is only required for the EVENT integration type.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationResponse {
  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the association.</p>
   * @public
   */
  IntegrationAssociationArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
  CUSTOM_BOT: "CUSTOM_BOT",
  SUPERVISOR: "SUPERVISOR",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * <p>The details to add for the participant.</p>
 * @public
 */
export interface ParticipantDetailsToAdd {
  /**
   * <p>The role of the participant being added.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>The display name of the participant.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect.  Only contacts in the CHAT channel are supported.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Information identifying the participant.</p>
   *          <important>
   *             <p>The only Valid value for <code>ParticipantRole</code> is <code>CUSTOM_BOT</code>. </p>
   *             <p>
   *                <code>DisplayName</code> is <b>Required</b>.</p>
   *          </important>
   * @public
   */
  ParticipantDetails: ParticipantDetailsToAdd | undefined;
}

/**
 * <p>The credentials used by the participant.</p>
 * @public
 */
export interface ParticipantTokenCredentials {
  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant. </p>
   * @public
   */
  ParticipantToken?: string | undefined;

  /**
   * <p>The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ.
   *    For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  Expiry?: string | undefined;
}

/**
 * @public
 */
export interface CreateParticipantResponse {
  /**
   * <p>The token used by the chat participant to call <code>CreateParticipantConnection</code>. The
   *    participant token is valid for the lifetime of a chat participant.</p>
   * @public
   */
  ParticipantCredentials?: ParticipantTokenCredentials | undefined;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   * @public
   */
  ParticipantId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RehydrationType = {
  ENTIRE_PAST_SESSION: "ENTIRE_PAST_SESSION",
  FROM_SEGMENT: "FROM_SEGMENT",
} as const;

/**
 * @public
 */
export type RehydrationType = (typeof RehydrationType)[keyof typeof RehydrationType];

/**
 * @public
 */
export interface CreatePersistentContactAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>This is the contactId of the current contact that the
   *     <code>CreatePersistentContactAssociation</code> API is being called from.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The contactId chosen for rehydration depends on the type chosen.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTIRE_PAST_SESSION</code>: Rehydrates a chat from the most recently terminated past
   *      chat contact of the specified past ended chat session. To use this type, provide the
   *       <code>initialContactId</code> of the past ended chat session in the
   *       <code>sourceContactId</code> field. In this type, Amazon Connect determines what the most
   *      recent chat contact on the past ended chat session and uses it to start a persistent chat.
   *     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_SEGMENT</code>: Rehydrates a chat from the specified past chat contact provided
   *      in the <code>sourceContactId</code> field. </p>
   *             </li>
   *          </ul>
   *          <p>The actual contactId used for rehydration is provided in the response of this API.</p>
   *          <p>To illustrate how to use rehydration type, consider the following example: A customer starts
   *    a chat session. Agent a1 accepts the chat and a conversation starts between the customer and
   *    Agent a1. This first contact creates a contact ID <b>C1</b>. Agent a1
   *    then transfers the chat to Agent a2. This creates another contact ID <b>C2</b>. At this point Agent a2 ends the chat. The customer is forwarded to the
   *    disconnect flow for a post chat survey that creates another contact ID <b>C3</b>. After the chat survey, the chat session ends. Later, the customer returns and
   *    wants to resume their past chat session. At this point, the customer can have following use
   *    cases: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Use Case 1</b>: The customer wants to continue the past chat
   *      session but they want to hide the post chat survey. For this they will use the following
   *      configuration:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Configuration</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>SourceContactId = "C2"</p>
   *                         </li>
   *                         <li>
   *                            <p>RehydrationType = "FROM_SEGMENT"</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Expected behavior</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>This starts a persistent chat session from the specified past ended contact (C2).
   *          Transcripts of past chat sessions C2 and C1 are accessible in the current persistent chat
   *          session. Note that chat segment C3 is dropped from the persistent chat session.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Use Case 2</b>: The customer wants to continue the past chat
   *      session and see the transcript of the entire past engagement, including the post chat survey.
   *      For this they will use the following configuration:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Configuration</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>SourceContactId = "C1"</p>
   *                         </li>
   *                         <li>
   *                            <p>RehydrationType = "ENTIRE_PAST_SESSION"</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Expected behavior</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>This starts a persistent chat session from the most recently ended chat contact (C3).
   *          Transcripts of past chat sessions C3, C2 and C1 are accessible in the current persistent
   *          chat session.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  RehydrationType: RehydrationType | undefined;

  /**
   * <p>The contactId from which a persistent chat session must be started.</p>
   * @public
   */
  SourceContactId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentContactAssociationResponse {
  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only
   *    for persistent chat.</p>
   * @public
   */
  ContinuedFromContactId?: string | undefined;
}

/**
 * <p>Information about values of a predefined attribute.</p>
 * @public
 */
export type PredefinedAttributeValues =
  | PredefinedAttributeValues.StringListMember
  | PredefinedAttributeValues.$UnknownMember;

/**
 * @public
 */
export namespace PredefinedAttributeValues {
  /**
   * <p>Predefined attribute values of type string list.</p>
   * @public
   */
  export interface StringListMember {
    StringList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PredefinedAttributeValues, visitor: Visitor<T>): T => {
    if (value.StringList !== undefined) return visitor.StringList(value.StringList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePredefinedAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The name of the predefined attribute. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The values of the predefined attribute. </p>
   * @public
   */
  Values: PredefinedAttributeValues | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html">GetPromptFile</a>
   *  API instead of providing S3 URIs.</p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  PromptARN?: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId?: string | undefined;
}

/**
 * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
 * @public
 */
export interface OutboundCallerConfig {
  /**
   * <p>The caller ID name.</p>
   * @public
   */
  OutboundCallerIdName?: string | undefined;

  /**
   * <p>The caller ID number.</p>
   * @public
   */
  OutboundCallerIdNumberId?: string | undefined;

  /**
   * <p>The outbound whisper flow to be used during an outbound call.</p>
   * @public
   */
  OutboundFlowId?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   * @public
   */
  OutboundCallerConfig?: OutboundCallerConfig | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   * @public
   */
  MaxContacts?: number | undefined;

  /**
   * <p>The quick connects available to agents who are working the queue.</p>
   * @public
   */
  QuickConnectIds?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   * @public
   */
  QueueArn?: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string | undefined;
}

/**
 * <p>Contains information about a phone number for a quick connect.</p>
 * @public
 */
export interface PhoneNumberQuickConnectConfig {
  /**
   * <p>The phone number in E.164 format.</p>
   * @public
   */
  PhoneNumber: string | undefined;
}

/**
 * <p>Contains information about a queue for a quick connect. The flow must be of type Transfer to
 *    Queue.</p>
 * @public
 */
export interface QueueQuickConnectConfig {
  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuickConnectType = {
  PHONE_NUMBER: "PHONE_NUMBER",
  QUEUE: "QUEUE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type QuickConnectType = (typeof QuickConnectType)[keyof typeof QuickConnectType];

/**
 * <p>Contains information about the quick connect configuration settings for a user. The contact
 *    flow must be of type Transfer to Agent.</p>
 * @public
 */
export interface UserQuickConnectConfig {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * <p>Contains configuration settings for a quick connect.</p>
 * @public
 */
export interface QuickConnectConfig {
  /**
   * <p>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). </p>
   * @public
   */
  QuickConnectType: QuickConnectType | undefined;

  /**
   * <p>The user configuration. This is required only if QuickConnectType is USER.</p>
   * @public
   */
  UserConfig?: UserQuickConnectConfig | undefined;

  /**
   * <p>The queue configuration. This is required only if QuickConnectType is QUEUE.</p>
   * @public
   */
  QueueConfig?: QueueQuickConnectConfig | undefined;

  /**
   * <p>The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.</p>
   * @public
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the quick connect.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the quick connect.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration settings for the quick connect.</p>
   * @public
   */
  QuickConnectConfig: QuickConnectConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickConnectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the quick connect. </p>
   * @public
   */
  QuickConnectARN?: string | undefined;

  /**
   * <p>The identifier for the quick connect. </p>
   * @public
   */
  QuickConnectId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BehaviorType = {
  ROUTE_ANY_CHANNEL: "ROUTE_ANY_CHANNEL",
  ROUTE_CURRENT_CHANNEL_ONLY: "ROUTE_CURRENT_CHANNEL_ONLY",
} as const;

/**
 * @public
 */
export type BehaviorType = (typeof BehaviorType)[keyof typeof BehaviorType];

/**
 * <p>Defines the cross-channel routing behavior that allows an agent working on a contact in one
 *    channel to be offered a contact from a different channel.</p>
 * @public
 */
export interface CrossChannelBehavior {
  /**
   * <p>Specifies the other channels that can be routed to an agent handling their current
   *    channel.</p>
   * @public
   */
  BehaviorType: BehaviorType | undefined;
}

/**
 * <p>Contains information about which channels are supported, and how many contacts an agent can
 *    have on a channel simultaneously.</p>
 * @public
 */
export interface MediaConcurrency {
  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   * @public
   */
  Channel: Channel | undefined;

  /**
   * <p>The number of contacts an agent can have on a channel simultaneously.</p>
   *          <p>Valid Range for <code>VOICE</code>: Minimum value of 1. Maximum value of 1.</p>
   *          <p>Valid Range for <code>CHAT</code>: Minimum value of 1. Maximum value of 10.</p>
   *          <p>Valid Range for <code>TASK</code>: Minimum value of 1. Maximum value of 10.</p>
   * @public
   */
  Concurrency: number | undefined;

  /**
   * <p>Defines the cross-channel routing behavior for each channel that is enabled for this Routing
   *    Profile. For example, this allows you to offer an agent a different contact from another channel
   *    when they are currently working with a contact from a Voice channel.</p>
   * @public
   */
  CrossChannelBehavior?: CrossChannelBehavior | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Description of the routing profile. Must not be more than 250 characters.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The default outbound queue for the routing profile.</p>
   * @public
   */
  DefaultOutboundQueueId: string | undefined;

  /**
   * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can
   *    make only outbound calls.</p>
   *          <p>The limit of 10 array members applies to the maximum number of
   *     <code>RoutingProfileQueueConfig</code> objects that can be passed during a CreateRoutingProfile
   *    API request. It is different from the quota of 50 queues per routing profile per instance that is
   *    listed in <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service
   *     quotas</a>. </p>
   * @public
   */
  QueueConfigs?: RoutingProfileQueueConfig[] | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   * @public
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>longest idle time</i> or <i>time since their last inbound
   *     contact</i>. </p>
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface CreateRoutingProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  RoutingProfileArn?: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId?: string | undefined;
}

/**
 * <p>This action must be set if <code>TriggerEventSource</code> is one of the following values:
 *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
 *     <code>OnRealTimeChatAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>. Contact
 *    is categorized using the rule name.</p>
 *          <p>
 *             <code>RuleName</code> is used as <code>ContactCategory</code>.</p>
 * @public
 */
export interface AssignContactCategoryActionDefinition {}

/**
 * <p>An empty value.</p>
 * @public
 */
export interface EmptyFieldValue {}

/**
 * <p>Object to store union of Field values.</p>
 * @public
 */
export interface FieldValueUnion {
  /**
   * <p>A Boolean number value type.</p>
   * @public
   */
  BooleanValue?: boolean | undefined;

  /**
   * <p>A Double number value type.</p>
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * <p>An empty value.</p>
   * @public
   */
  EmptyValue?: EmptyFieldValue | undefined;

  /**
   * <p>String value type.</p>
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * <p>Object for case field values.</p>
 * @public
 */
export interface FieldValue {
  /**
   * <p>Unique identifier of a field.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Union of potential field value types.</p>
   * @public
   */
  Value: FieldValueUnion | undefined;
}

/**
 * <p>The <code>CreateCase</code> action definition.</p>
 * @public
 */
export interface CreateCaseActionDefinition {
  /**
   * <p>An array of objects with <code>Field ID</code> and <code>Value</code> data.</p>
   * @public
   */
  Fields: FieldValue[] | undefined;

  /**
   * <p>A unique identifier of a template.</p>
   * @public
   */
  TemplateId: string | undefined;
}

/**
 * <p>End associated tasks related to a case.</p>
 * @public
 */
export interface EndAssociatedTasksActionDefinition {}

/**
 * <p>The EventBridge action definition.</p>
 * @public
 */
export interface EventBridgeActionDefinition {
  /**
   * <p>The name.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationContentType = {
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;

/**
 * @public
 */
export type NotificationContentType = (typeof NotificationContentType)[keyof typeof NotificationContentType];

/**
 * @public
 * @enum
 */
export const NotificationDeliveryType = {
  EMAIL: "EMAIL",
} as const;

/**
 * @public
 */
export type NotificationDeliveryType = (typeof NotificationDeliveryType)[keyof typeof NotificationDeliveryType];

/**
 * <p>The type of notification recipient.</p>
 * @public
 */
export interface NotificationRecipientType {
  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}. Amazon Connect users with the specified tags will be notified.</p>
   * @public
   */
  UserTags?: Record<string, string> | undefined;

  /**
   * <p>A list of user IDs.</p>
   * @public
   */
  UserIds?: string[] | undefined;
}

/**
 * <p>Information about the send notification action.</p>
 * @public
 */
export interface SendNotificationActionDefinition {
  /**
   * <p>Notification delivery method.</p>
   * @public
   */
  DeliveryMethod: NotificationDeliveryType | undefined;

  /**
   * <p>The subject of the email if the delivery method is <code>EMAIL</code>.
   *    Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>Notification content. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>Content type format.</p>
   * @public
   */
  ContentType: NotificationContentType | undefined;

  /**
   * <p>Notification recipient.</p>
   * @public
   */
  Recipient: NotificationRecipientType | undefined;
}

/**
 * <p>Information about the submit automated evaluation action.</p>
 * @public
 */
export interface SubmitAutoEvaluationActionDefinition {
  /**
   * <p>The identifier of the auto-evaluation enabled form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  ATTACHMENT: "ATTACHMENT",
  DATE: "DATE",
  EMAIL: "EMAIL",
  NUMBER: "NUMBER",
  STRING: "STRING",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * <p>Well-formed data on a contact, used by agents to complete a contact request. You can have up
 *    to 4,096 UTF-8 bytes across all references for a contact.</p>
 * @public
 */
export interface Reference {
  /**
   * <p>A valid value for the reference. For example, for a URL reference, a formatted URL that is
   *    displayed to an agent in the Contact Control Panel (CCP).</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The type of the reference. <code>DATE</code> must be of type Epoch timestamp.
   *    </p>
   * @public
   */
  Type: ReferenceType | undefined;
}

/**
 * <p>Information about the task action.</p>
 * @public
 */
export interface TaskActionDefinition {
  /**
   * <p>The name. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null. (Supports variable injection in the <code>Value</code> field.)</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;
}

/**
 * <p>The <code>UpdateCase</code> action definition.</p>
 * @public
 */
export interface UpdateCaseActionDefinition {
  /**
   * <p>An array of objects with <code>Field ID</code> and Value data.</p>
   * @public
   */
  Fields: FieldValue[] | undefined;
}

/**
 * <p>Information about the action to be performed when a rule is triggered.</p>
 * @public
 */
export interface RuleAction {
  /**
   * <p>The type of action that creates a rule.</p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>Information about the task action. This field is required if <code>TriggerEventSource</code>
   *    is one of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   * @public
   */
  TaskAction?: TaskActionDefinition | undefined;

  /**
   * <p>Information about the EventBridge action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values:
   *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
   *     <code>OnRealTimeChatAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code> |
   *     <code>OnContactEvaluationSubmit</code> | <code>OnMetricDataUpdate</code>
   *          </p>
   * @public
   */
  EventBridgeAction?: EventBridgeActionDefinition | undefined;

  /**
   * <p>Information about the contact category action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values:
   *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
   *     <code>OnRealTimeChatAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code> |
   *     <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> |
   *     <code>OnSalesforceCaseCreate</code>
   *          </p>
   * @public
   */
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition | undefined;

  /**
   * <p>Information about the send notification action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values:
   *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
   *     <code>OnRealTimeChatAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code> |
   *     <code>OnContactEvaluationSubmit</code> | <code>OnMetricDataUpdate</code>
   *          </p>
   * @public
   */
  SendNotificationAction?: SendNotificationActionDefinition | undefined;

  /**
   * <p>Information about the create case action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values:
   *     <code>OnPostCallAnalysisAvailable</code> | <code>OnPostChatAnalysisAvailable</code>.</p>
   * @public
   */
  CreateCaseAction?: CreateCaseActionDefinition | undefined;

  /**
   * <p>Information about the update case action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnCaseCreate</code> |
   *     <code>OnCaseUpdate</code>.</p>
   * @public
   */
  UpdateCaseAction?: UpdateCaseActionDefinition | undefined;

  /**
   * <p>Information about the end associated tasks action.</p>
   *          <p>Supported only for <code>TriggerEventSource</code> values: <code>OnCaseUpdate</code>.</p>
   * @public
   */
  EndAssociatedTasksAction?: EndAssociatedTasksActionDefinition | undefined;

  /**
   * <p>Information about the submit automated evaluation action.</p>
   * @public
   */
  SubmitAutoEvaluationAction?: SubmitAutoEvaluationActionDefinition | undefined;
}

/**
 * @public
 * @enum
 */
export const RulePublishStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type RulePublishStatus = (typeof RulePublishStatus)[keyof typeof RulePublishStatus];

/**
 * @public
 * @enum
 */
export const EventSourceName = {
  OnCaseCreate: "OnCaseCreate",
  OnCaseUpdate: "OnCaseUpdate",
  OnContactEvaluationSubmit: "OnContactEvaluationSubmit",
  OnMetricDataUpdate: "OnMetricDataUpdate",
  OnPostCallAnalysisAvailable: "OnPostCallAnalysisAvailable",
  OnPostChatAnalysisAvailable: "OnPostChatAnalysisAvailable",
  OnRealTimeCallAnalysisAvailable: "OnRealTimeCallAnalysisAvailable",
  OnRealTimeChatAnalysisAvailable: "OnRealTimeChatAnalysisAvailable",
  OnSalesforceCaseCreate: "OnSalesforceCaseCreate",
  OnZendeskTicketCreate: "OnZendeskTicketCreate",
  OnZendeskTicketStatusUpdate: "OnZendeskTicketStatusUpdate",
} as const;

/**
 * @public
 */
export type EventSourceName = (typeof EventSourceName)[keyof typeof EventSourceName];

/**
 * <p>The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the
 *    following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> |
 *     <code>OnSalesforceCaseCreate</code> | <code>OnContactEvaluationSubmit</code> |
 *     <code>OnMetricDataUpdate</code>.</p>
 * @public
 */
export interface RuleTriggerEventSource {
  /**
   * <p>The name of the event source.</p>
   * @public
   */
  EventSourceName: EventSourceName | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name for the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The event source to trigger the rule.</p>
   * @public
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * <p>The conditions of the rule.</p>
   * @public
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   * @public
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>A third-party application's metadata.</p>
 * @public
 */
export interface Application {
  /**
   * <p>Namespace of the application that you want to give access to.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The permissions that the agent is granted on the application. Only the <code>ACCESS</code>
   *    permission is supported.</p>
   * @public
   */
  ApplicationPermissions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileRequest {
  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  SecurityProfileName: string | undefined;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>. </p>
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlTags?: Record<string, string> | undefined;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code> |
   *     <code>SecurityProfile</code> | <code>Queue</code> | <code>RoutingProfile</code>
   *          </p>
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

  /**
   * <p>A list of third-party applications that the security profile will give access to.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code>.</p>
   * @public
   */
  HierarchyRestrictedResources?: string[] | undefined;

  /**
   * <p>The identifier of the hierarchy group that a security profile uses to restrict access to
   *    resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileResponse {
  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the security profile.</p>
   * @public
   */
  SecurityProfileArn?: string | undefined;
}

/**
 * <p>The identifier of the task template field.</p>
 * @public
 */
export interface TaskTemplateFieldIdentifier {
  /**
   * <p>The name of the task template field.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A field that is invisible to an agent.</p>
 * @public
 */
export interface InvisibleFieldInfo {
  /**
   * <p>Identifier of the invisible field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Indicates a field that is read-only to an agent.</p>
 * @public
 */
export interface ReadOnlyFieldInfo {
  /**
   * <p>Identifier of the read-only field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Information about a required field.</p>
 * @public
 */
export interface RequiredFieldInfo {
  /**
   * <p>The unique identifier for the field.</p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;
}

/**
 * <p>Describes constraints that apply to the template fields.</p>
 * @public
 */
export interface TaskTemplateConstraints {
  /**
   * <p>Lists the fields that are required to be filled by agents.</p>
   * @public
   */
  RequiredFields?: RequiredFieldInfo[] | undefined;

  /**
   * <p>Lists the fields that are read-only to agents, and cannot be edited.</p>
   * @public
   */
  ReadOnlyFields?: ReadOnlyFieldInfo[] | undefined;

  /**
   * <p>Lists the fields that are invisible to agents.</p>
   * @public
   */
  InvisibleFields?: InvisibleFieldInfo[] | undefined;
}

/**
 * <p>Describes a default field and its corresponding value.</p>
 * @public
 */
export interface TaskTemplateDefaultFieldValue {
  /**
   * <p>Identifier of a field. </p>
   * @public
   */
  Id?: TaskTemplateFieldIdentifier | undefined;

  /**
   * <p>Default value for the field.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * <p>Describes default values for fields on a template.</p>
 * @public
 */
export interface TaskTemplateDefaults {
  /**
   * <p>Default value for the field.</p>
   * @public
   */
  DefaultFieldValues?: TaskTemplateDefaultFieldValue[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskTemplateFieldType = {
  BOOLEAN: "BOOLEAN",
  DATE_TIME: "DATE_TIME",
  DESCRIPTION: "DESCRIPTION",
  EMAIL: "EMAIL",
  NAME: "NAME",
  NUMBER: "NUMBER",
  QUICK_CONNECT: "QUICK_CONNECT",
  SCHEDULED_TIME: "SCHEDULED_TIME",
  SINGLE_SELECT: "SINGLE_SELECT",
  TEXT: "TEXT",
  TEXT_AREA: "TEXT_AREA",
  URL: "URL",
} as const;

/**
 * @public
 */
export type TaskTemplateFieldType = (typeof TaskTemplateFieldType)[keyof typeof TaskTemplateFieldType];

/**
 * <p>Describes a single task template field.</p>
 * @public
 */
export interface TaskTemplateField {
  /**
   * <p>The unique identifier for the field.</p>
   * @public
   */
  Id: TaskTemplateFieldIdentifier | undefined;

  /**
   * <p>The description of the field.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the type of field.</p>
   * @public
   */
  Type?: TaskTemplateFieldType | undefined;

  /**
   * <p>A list of options for a single select field.</p>
   * @public
   */
  SingleSelectOptions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskTemplateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskTemplateStatus = (typeof TaskTemplateStatus)[keyof typeof TaskTemplateStatus];

/**
 * @public
 */
export interface CreateTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. </p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields: TaskTemplateField[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTaskTemplateResponse {
  /**
   * <p>The identifier of the task template resource.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyValidationExceptionReason = {
  INVALID_FORMAT: "INVALID_FORMAT",
  NOT_SUPPORTED: "NOT_SUPPORTED",
  REFERENCED_RESOURCE_NOT_FOUND: "REFERENCED_RESOURCE_NOT_FOUND",
  REQUIRED_PROPERTY_MISSING: "REQUIRED_PROPERTY_MISSING",
  RESOURCE_NAME_ALREADY_EXISTS: "RESOURCE_NAME_ALREADY_EXISTS",
  UNIQUE_CONSTRAINT_VIOLATED: "UNIQUE_CONSTRAINT_VIOLATED",
} as const;

/**
 * @public
 */
export type PropertyValidationExceptionReason =
  (typeof PropertyValidationExceptionReason)[keyof typeof PropertyValidationExceptionReason];

/**
 * <p>Contains information about why a property is not valid.</p>
 * @public
 */
export interface PropertyValidationExceptionProperty {
  /**
   * <p>The full property path.</p>
   * @public
   */
  PropertyPath: string | undefined;

  /**
   * <p>Why the property is not valid.</p>
   * @public
   */
  Reason: PropertyValidationExceptionReason | undefined;

  /**
   * <p>A message describing why the property is not valid.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The property is not valid.</p>
 * @public
 */
export class PropertyValidationException extends __BaseException {
  readonly name: "PropertyValidationException" = "PropertyValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  PropertyList?: PropertyValidationExceptionProperty[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PropertyValidationException, __BaseException>) {
    super({
      name: "PropertyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PropertyValidationException.prototype);
    this.Message = opts.Message;
    this.PropertyList = opts.PropertyList;
  }
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupRequest {
  /**
   * <p>The name for the traffic distribution group. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the traffic distribution group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that has been replicated. You can find the
   *     <code>instanceId</code> in the ARN of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupResponse {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The resource is not ready.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const UseCaseType = {
  CONNECT_CAMPAIGNS: "CONNECT_CAMPAIGNS",
  RULES_EVALUATION: "RULES_EVALUATION",
} as const;

/**
 * @public
 */
export type UseCaseType = (typeof UseCaseType)[keyof typeof UseCaseType];

/**
 * @public
 */
export interface CreateUseCaseRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   * @public
   */
  UseCaseType: UseCaseType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUseCaseResponse {
  /**
   * <p>The identifier of the use case.</p>
   * @public
   */
  UseCaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   * @public
   */
  UseCaseArn?: string | undefined;
}

/**
 * <p>Contains information about the identity of a user.</p>
 *          <note>
 *             <p>For Amazon Connect instances that are created with the <code>EXISTING_DIRECTORY</code>
 *     identity management type, <code>FirstName</code>, <code>LastName</code>, and <code>Email</code>
 *     cannot be updated from within Amazon Connect because they are managed by the
 *     directory.</p>
 *          </note>
 *          <important>
 *             <p>The <code>FirstName</code> and <code>LastName</code> length constraints below apply only to
 *     instances using SAML for identity management. If you are using Amazon Connect for identity
 *     management, the length constraints are 1-255 for <code>FirstName</code>, and 1-256 for
 *      <code>LastName</code>. </p>
 *          </important>
 * @public
 */
export interface UserIdentityInfo {
  /**
   * <p>The first name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The last name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The email address. If you are using SAML for identity management and include this parameter,
   *    an error is returned.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The user's secondary email address. If you provide a secondary email, the user receives
   *    email notifications - other than password reset notifications - to this email address instead of
   *    to their primary email address.</p>
   *          <p>Pattern: <code>(?=^.\{0,265\}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]\{2,63\}</code>
   *          </p>
   * @public
   */
  SecondaryEmail?: string | undefined;

  /**
   * <p>The user's mobile number.</p>
   * @public
   */
  Mobile?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneType = {
  DESK_PHONE: "DESK_PHONE",
  SOFT_PHONE: "SOFT_PHONE",
} as const;

/**
 * @public
 */
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType];

/**
 * <p>Contains information about the phone configuration settings for a user.</p>
 * @public
 */
export interface UserPhoneConfig {
  /**
   * <p>The phone type.</p>
   * @public
   */
  PhoneType: PhoneType | undefined;

  /**
   * <p>The Auto accept setting.</p>
   * @public
   */
  AutoAccept?: boolean | undefined;

  /**
   * <p>The After Call Work (ACW) timeout setting, in seconds. This parameter has a minimum value of
   *    0 and a maximum value of 2,000,000 seconds (24 days). Enter 0 if you don't want to allocate a
   *    specific amount of ACW time. It essentially means an indefinite amount of time. When the
   *    conversation ends, ACW starts; the agent must choose Close contact to end ACW. </p>
   *          <note>
   *             <p>When returned by a <code>SearchUsers</code> call, <code>AfterContactWorkTimeLimit</code> is
   *     returned in milliseconds. </p>
   *          </note>
   * @public
   */
  AfterContactWorkTimeLimit?: number | undefined;

  /**
   * <p>The phone number for the user's desk phone.</p>
   * @public
   */
  DeskPhoneNumber?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The user name for the account. For instances not using SAML for identity management, the
   *    user name can include up to 20 characters. If you are using SAML for identity management, the
   *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   *          <p>Username can include @ only if used in an email format. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Correct: testuser</p>
   *             </li>
   *             <li>
   *                <p>Correct: testuser@example.com</p>
   *             </li>
   *             <li>
   *                <p>Incorrect: testuser@example</p>
   *             </li>
   *          </ul>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The information about the identity of the user.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfo | undefined;

  /**
   * <p>The phone settings for the user.</p>
   * @public
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users.
   *    If you include the identifier, we assume that Amazon Connect cannot access the directory.
   *    Otherwise, the identity information is used to authenticate users from your directory.</p>
   *          <p>This parameter is required if you are using an existing directory for identity management in
   *     Amazon Connect when Amazon Connect cannot access your directory to authenticate users.
   *    If you are using SAML for identity management and include this parameter, an error is
   *    returned.</p>
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * <p>The identifier of the security profile for the user.</p>
   * @public
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  UserArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupRequest {
  /**
   * <p>The name of the user hierarchy group. Must not be more than 100 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the parent hierarchy group. The user hierarchy is created at level one if
   *    the parent group ID is null.</p>
   * @public
   */
  ParentGroupId?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupResponse {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group. </p>
   * @public
   */
  HierarchyGroupArn?: string | undefined;
}

/**
 * <p>View content containing all content necessary to render a view except for runtime input data
 *    and the runtime input schema, which is auto-generated by this operation.</p>
 * @public
 */
export interface ViewInputContent {
  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string | undefined;

  /**
   * <p>A list of possible actions from the view.</p>
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ViewStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;

/**
 * @public
 */
export type ViewStatus = (typeof ViewStatus)[keyof typeof ViewStatus];

/**
 * @public
 */
export interface CreateViewRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique Id for each create view request to avoid duplicate view creation. For example, the
   *    view is idempotent ClientToken is provided.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   * @public
   */
  Status: ViewStatus | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime input
   *    data.</p>
   *          <p>The total uncompressed content has a maximum file size of 400kB.</p>
   * @public
   */
  Content: ViewInputContent | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The tags associated with the view resource (not specific to view version).These tags can be
   *    used to organize, track, or control access for this resource. For example, \{ "tags":
   *    \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>View content containing all content necessary to render a view except for runtime input
 *    data.</p>
 * @public
 */
export interface ViewContent {
  /**
   * <p>The data schema matching data that the view template must be provided to render.</p>
   * @public
   */
  InputSchema?: string | undefined;

  /**
   * <p>The view template representing the structure of the view.</p>
   * @public
   */
  Template?: string | undefined;

  /**
   * <p>A list of possible actions from the view.</p>
   * @public
   */
  Actions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ViewType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;

/**
 * @public
 */
export type ViewType = (typeof ViewType)[keyof typeof ViewType];

/**
 * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
 * @public
 */
export interface View {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   * @public
   */
  Status?: ViewStatus | undefined;

  /**
   * <p>The type of the view - <code>CUSTOMER_MANAGED</code>.</p>
   * @public
   */
  Type?: ViewType | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Current version of the view.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime input
   *    data.</p>
   * @public
   */
  Content?: ViewContent | undefined;

  /**
   * <p>The tags associated with the view resource (not specific to view version).</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp of when the view was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>Latest timestamp of the <code>UpdateViewContent</code> or <code>CreateViewVersion</code>
   *    operations.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Indicates the checksum value of the latest published view content.</p>
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewResponse {
  /**
   * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONTACT: "CONTACT",
  CONTACT_FLOW: "CONTACT_FLOW",
  HIERARCHY_GROUP: "HIERARCHY_GROUP",
  HIERARCHY_LEVEL: "HIERARCHY_LEVEL",
  INSTANCE: "INSTANCE",
  PARTICIPANT: "PARTICIPANT",
  PHONE_NUMBER: "PHONE_NUMBER",
  USER: "USER",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>That resource is already in use. Please try another.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier for the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>Displayed when rate-related API limits are exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateViewVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The description for the version being published.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Indicates the checksum value of the latest published view content.</p>
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewVersionResponse {
  /**
   * <p>All view data is contained within the View object.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token,
   *    subsequent requests return the previous response without creating a vocabulary again.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const VocabularyState = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState];

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form. If the version property is not provided, the latest version of the
   *    evaluation form is deactivated.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormResponse {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The version of the deactivated evaluation form resource.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * Request to DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileRequest {
  /**
   * <p>The unique identifier of the Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Response from DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileResponse {}

/**
 * @public
 */
export interface DeleteContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowModuleResponse {}

/**
 * @public
 */
export interface DeleteEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePredefinedAttributeRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The name of the predefined attribute.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  TaskTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateResponse {}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupResponse {}

/**
 * @public
 */
export interface DeleteUseCaseRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The identifier for the use case.</p>
   * @public
   */
  UseCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserHierarchyGroupRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteViewRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;
}

/**
 * @public
 */
export interface DeleteViewResponse {}

/**
 * @public
 */
export interface DeleteViewVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The version number of the view.</p>
   * @public
   */
  ViewVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteViewVersionResponse {}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusResponse {
  /**
   * <p>The agent status.</p>
   * @public
   */
  AgentStatus?: AgentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileRequest {
  /**
   * <p>A unique identifier for the authentication profile. </p>
   * @public
   */
  AuthenticationProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>Information about an authentication profile. An authentication profile is a resource that
 *    stores the authentication settings for users in your contact center. You use authentication
 *    profiles to set up IP address range restrictions and session timeouts. For more information, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html">Set IP
 *     address restrictions or session timeouts</a>. </p>
 * @public
 */
export interface AuthenticationProfile {
  /**
   * <p>A unique identifier for the authentication profile. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the authentication profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name for the authentication profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the authentication profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of IP address range strings that are allowed to access the Amazon Connect
   *    instance. For more information about how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure IP
   *     address based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  AllowedIps?: string[] | undefined;

  /**
   * <p>A list of IP address range strings that are blocked from accessing the Amazon Connect
   *    instance. For more information about how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure IP
   *     address based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  BlockedIps?: string[] | undefined;

  /**
   * <p>Shows whether the authentication profile is the default authentication profile for the
   *     Amazon Connect instance. The default authentication profile applies to all agents in an
   *     Amazon Connect instance, unless overridden by another authentication profile.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The timestamp when the authentication profile was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The timestamp when the authentication profile was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where the authentication profile was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * <p>The short lived session duration configuration for users logged in to Amazon Connect, in
   *    minutes. This value determines the maximum possible time before an agent is authenticated. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure the session duration</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  PeriodicSessionDuration?: number | undefined;

  /**
   * <p>The long lived session duration for users logged in to Amazon Connect, in minutes. After
   *    this time period, users must log in again. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure the session duration</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  MaxSessionDuration?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileResponse {
  /**
   * <p>The authentication profile object being described.</p>
   * @public
   */
  AuthenticationProfile?: AuthenticationProfile | undefined;
}

/**
 * @public
 */
export interface DescribeContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AnsweringMachineDetectionStatus = {
  AMD_ERROR: "AMD_ERROR",
  AMD_NOT_APPLICABLE: "AMD_NOT_APPLICABLE",
  AMD_UNANSWERED: "AMD_UNANSWERED",
  AMD_UNRESOLVED: "AMD_UNRESOLVED",
  ANSWERED: "ANSWERED",
  ERROR: "ERROR",
  FAX_MACHINE_DETECTED: "FAX_MACHINE_DETECTED",
  HUMAN_ANSWERED: "HUMAN_ANSWERED",
  SIT_TONE_BUSY: "SIT_TONE_BUSY",
  SIT_TONE_DETECTED: "SIT_TONE_DETECTED",
  SIT_TONE_INVALID_NUMBER: "SIT_TONE_INVALID_NUMBER",
  UNDETECTED: "UNDETECTED",
  VOICEMAIL_BEEP: "VOICEMAIL_BEEP",
  VOICEMAIL_NO_BEEP: "VOICEMAIL_NO_BEEP",
} as const;

/**
 * @public
 */
export type AnsweringMachineDetectionStatus =
  (typeof AnsweringMachineDetectionStatus)[keyof typeof AnsweringMachineDetectionStatus];

/**
 * <p>Information about the Customer on the contact.</p>
 * @public
 */
export interface Customer {
  /**
   * <p>Information regarding Customer’s device.</p>
   * @public
   */
  DeviceInfo?: DeviceInfo | undefined;

  /**
   * <p>The configuration for the allowed video and screen sharing capabilities for participants
   *    present over the call. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up in-app, web, video calling, and screen
   *     sharing capabilities</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Capabilities?: ParticipantCapabilities | undefined;
}

/**
 * <p>Information about customer’s voice activity.</p>
 * @public
 */
export interface CustomerVoiceActivity {
  /**
   * <p>Timestamp that measures the beginning of the customer greeting from an outbound voice
   *    call.</p>
   * @public
   */
  GreetingStartTimestamp?: Date | undefined;

  /**
   * <p>Timestamp that measures the end of the customer greeting from an outbound voice call.</p>
   * @public
   */
  GreetingEndTimestamp?: Date | undefined;
}

/**
 * <p>Information about the call disconnect experience.</p>
 * @public
 */
export interface DisconnectDetails {
  /**
   * <p>Indicates the potential disconnection issues for a call. This field is not populated if the
   *    service does not detect potential issues.</p>
   * @public
   */
  PotentialDisconnectIssue?: string | undefined;
}

/**
 * <p>Information about the quality of the Customer's media connection</p>
 * @public
 */
export interface CustomerQualityMetrics {
  /**
   * <p>Information about the audio quality of the Customer</p>
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * <p>Information about the quality of the participant's media connection.</p>
 * @public
 */
export interface QualityMetrics {
  /**
   * <p>Information about the quality of Agent media connection.</p>
   * @public
   */
  Agent?: AgentQualityMetrics | undefined;

  /**
   * <p>Information about the quality of Customer media connection.</p>
   * @public
   */
  Customer?: CustomerQualityMetrics | undefined;
}

/**
 * <p>If this contact was queued, this contains information about the queue. </p>
 * @public
 */
export interface QueueInfo {
  /**
   * <p>The unique identifier for the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   * @public
   */
  EnqueueTimestamp?: Date | undefined;
}

/**
 * @internal
 */
export const CreateInstanceRequestFilterSensitiveLog = (obj: CreateInstanceRequest): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserIdentityInfoFilterSensitiveLog = (obj: UserIdentityInfo): any => ({
  ...obj,
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.Email && { Email: SENSITIVE_STRING }),
  ...(obj.SecondaryEmail && { SecondaryEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const ViewInputContentFilterSensitiveLog = (obj: ViewInputContent): any => ({
  ...obj,
  ...(obj.Actions && { Actions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateViewRequestFilterSensitiveLog = (obj: CreateViewRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: ViewInputContentFilterSensitiveLog(obj.Content) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ViewContentFilterSensitiveLog = (obj: ViewContent): any => ({
  ...obj,
  ...(obj.InputSchema && { InputSchema: SENSITIVE_STRING }),
  ...(obj.Actions && { Actions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ViewFilterSensitiveLog = (obj: View): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Content && { Content: ViewContentFilterSensitiveLog(obj.Content) }),
});

/**
 * @internal
 */
export const CreateViewResponseFilterSensitiveLog = (obj: CreateViewResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});

/**
 * @internal
 */
export const CreateViewVersionResponseFilterSensitiveLog = (obj: CreateViewVersionResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});
