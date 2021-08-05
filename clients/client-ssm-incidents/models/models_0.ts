import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum SsmTargetAccount {
  IMPACTED_ACCOUNT = "IMPACTED_ACCOUNT",
  RESPONSE_PLAN_OWNER_ACCOUNT = "RESPONSE_PLAN_OWNER_ACCOUNT",
}

/**
 * <p>Details about the Systems Manager automation document that will be used as a runbook during an incident.</p>
 */
export interface SsmAutomation {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The automation document's name.</p>
   */
  documentName: string | undefined;

  /**
   * <p>The automation document's version to use when running.</p>
   */
  documentVersion?: string;

  /**
   * <p>The account that the automation document will be run in. This can be in either the management account or an application account.</p>
   */
  targetAccount?: SsmTargetAccount | string;

  /**
   * <p>The key-value pair parameters to use when running the automation document.</p>
   */
  parameters?: { [key: string]: string[] };
}

export namespace SsmAutomation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SsmAutomation): any => ({
    ...obj,
  });
}

/**
 * <p>The action that starts at the beginning of an incident. The response plan defines the
 *          action.</p>
 */
export type Action = Action.SsmAutomationMember | Action.$UnknownMember;

export namespace Action {
  /**
   * <p>The Systems Manager automation document to start as the runbook at the beginning of the
   *          incident.</p>
   */
  export interface SsmAutomationMember {
    ssmAutomation: SsmAutomation;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ssmAutomation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ssmAutomation: (value: SsmAutomation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Action, visitor: Visitor<T>): T => {
    if (value.ssmAutomation !== undefined) return visitor.ssmAutomation(value.ssmAutomation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => {
    if (obj.ssmAutomation !== undefined) return { ssmAutomation: SsmAutomation.filterSensitiveLog(obj.ssmAutomation) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Defines the Region and KMS key to add to the replication set. </p>
 */
export interface AddRegionAction {
  /**
   * <p>The Region name to add to the replication set.</p>
   */
  regionName: string | undefined;

  /**
   * <p>The KMS key ID to use to encrypt your replication set.</p>
   */
  sseKmsKeyId?: string;
}

export namespace AddRegionAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddRegionAction): any => ({
    ...obj,
  });
}

/**
 * <p>Use the AttributeValueList to filter by string or integer values.</p>
 */
export type AttributeValueList =
  | AttributeValueList.IntegerValuesMember
  | AttributeValueList.StringValuesMember
  | AttributeValueList.$UnknownMember;

export namespace AttributeValueList {
  /**
   * <p>The list of string values that the filter matches.</p>
   */
  export interface StringValuesMember {
    stringValues: string[];
    integerValues?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of integer values that the filter matches.</p>
   */
  export interface IntegerValuesMember {
    stringValues?: never;
    integerValues: number[];
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValues?: never;
    integerValues?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValues: (value: string[]) => T;
    integerValues: (value: number[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AttributeValueList, visitor: Visitor<T>): T => {
    if (value.stringValues !== undefined) return visitor.stringValues(value.stringValues);
    if (value.integerValues !== undefined) return visitor.integerValues(value.integerValues);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValueList): any => {
    if (obj.stringValues !== undefined) return { stringValues: obj.stringValues };
    if (obj.integerValues !== undefined) return { integerValues: obj.integerValues };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The Systems Manager automation document
 *          process
 *          to start as the runbook at the beginning of the incident.</p>
 */
export type AutomationExecution = AutomationExecution.SsmExecutionArnMember | AutomationExecution.$UnknownMember;

export namespace AutomationExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the automation process.</p>
   */
  export interface SsmExecutionArnMember {
    ssmExecutionArn: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ssmExecutionArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ssmExecutionArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomationExecution, visitor: Visitor<T>): T => {
    if (value.ssmExecutionArn !== undefined) return visitor.ssmExecutionArn(value.ssmExecutionArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutomationExecution): any => {
    if (obj.ssmExecutionArn !== undefined) return { ssmExecutionArn: obj.ssmExecutionArn };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Used to remove the chat channel from an incident record or response plan.</p>
 */
export interface EmptyChatChannel {}

export namespace EmptyChatChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyChatChannel): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Chatbot chat channel used for collaboration during an incident.</p>
 */
export type ChatChannel = ChatChannel.ChatbotSnsMember | ChatChannel.EmptyMember | ChatChannel.$UnknownMember;

export namespace ChatChannel {
  /**
   * <p>Used to remove the chat channel from an incident record or response plan.</p>
   */
  export interface EmptyMember {
    empty: EmptyChatChannel;
    chatbotSns?: never;
    $unknown?: never;
  }

  /**
   * <p>The SNS targets that AWS Chatbot uses to notify the chat channel of updates to an
   *          incident. You can also make updates to the incident through the chat channel
   *          by
   *          using the SNS topics. </p>
   */
  export interface ChatbotSnsMember {
    empty?: never;
    chatbotSns: string[];
    $unknown?: never;
  }

  export interface $UnknownMember {
    empty?: never;
    chatbotSns?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    empty: (value: EmptyChatChannel) => T;
    chatbotSns: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChatChannel, visitor: Visitor<T>): T => {
    if (value.empty !== undefined) return visitor.empty(value.empty);
    if (value.chatbotSns !== undefined) return visitor.chatbotSns(value.chatbotSns);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatChannel): any => {
    if (obj.empty !== undefined) return { empty: EmptyChatChannel.filterSensitiveLog(obj.empty) };
    if (obj.chatbotSns !== undefined) return { chatbotSns: obj.chatbotSns };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A conditional statement with which to compare a value, after a timestamp, before a
 *          timestamp, or equal to a string or integer. If multiple conditions are specified, the
 *          conditionals become an <code>AND</code>ed statement. If multiple values are specified for a
 *          conditional, the values are <code>OR</code>d.</p>
 */
export type Condition =
  | Condition.AfterMember
  | Condition.BeforeMember
  | Condition.EqualsMember
  | Condition.$UnknownMember;

export namespace Condition {
  /**
   * <p>Before the specified timestamp</p>
   */
  export interface BeforeMember {
    before: Date;
    after?: never;
    equals?: never;
    $unknown?: never;
  }

  /**
   * <p>After the specified timestamp.</p>
   */
  export interface AfterMember {
    before?: never;
    after: Date;
    equals?: never;
    $unknown?: never;
  }

  /**
   * <p>The value is equal to the provided string or integer. </p>
   */
  export interface EqualsMember {
    before?: never;
    after?: never;
    equals: AttributeValueList;
    $unknown?: never;
  }

  export interface $UnknownMember {
    before?: never;
    after?: never;
    equals?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    before: (value: Date) => T;
    after: (value: Date) => T;
    equals: (value: AttributeValueList) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Condition, visitor: Visitor<T>): T => {
    if (value.before !== undefined) return visitor.before(value.before);
    if (value.after !== undefined) return visitor.after(value.after);
    if (value.equals !== undefined) return visitor.equals(value.equals);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Condition): any => {
    if (obj.before !== undefined) return { before: obj.before };
    if (obj.after !== undefined) return { after: obj.after };
    if (obj.equals !== undefined) return { equals: AttributeValueList.filterSensitiveLog(obj.equals) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum ResourceType {
  INCIDENT_RECORD = "INCIDENT_RECORD",
  REPLICATION_SET = "REPLICATION_SET",
  RESOURCE_POLICY = "RESOURCE_POLICY",
  RESPONSE_PLAN = "RESPONSE_PLAN",
  TIMELINE_EVENT = "TIMELINE_EVENT",
}

/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
  /**
   * The identifier of the requested resource
   */
  resourceIdentifier?: string;

  /**
   * The resource type
   */
  resourceType?: ResourceType | string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The mapping between a Region and the key that's used to encrypt the data.</p>
 */
export interface RegionMapInputValue {
  /**
   * <p>The KMS key used to encrypt the data in your replication set.</p>
   */
  sseKmsKeyId?: string;
}

export namespace RegionMapInputValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionMapInputValue): any => ({
    ...obj,
  });
}

export interface CreateReplicationSetInput {
  /**
   * <p>The Regions that Incident Manager replicates your data to. You can have up to three Regions
   *             in your replication set.</p>
   */
  regions: { [key: string]: RegionMapInputValue } | undefined;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

export namespace CreateReplicationSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplicationSetInput): any => ({
    ...obj,
  });
}

export interface CreateReplicationSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set. </p>
   */
  arn: string | undefined;
}

export namespace CreateReplicationSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplicationSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export enum ServiceCode {
  SSM_INCIDENTS = "ssm-incidents",
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
  /**
   * The identifier for the requested resource
   */
  resourceIdentifier?: string;

  /**
   * The resource type
   */
  resourceType?: ResourceType | string;

  /**
   * Originating service code
   */
  serviceCode: ServiceCode | string | undefined;

  /**
   * Originating quota code
   */
  quotaCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
  /**
   * Originating service code
   */
  serviceCode: ServiceCode | string | undefined;

  /**
   * Originating quota code
   */
  quotaCode: string | undefined;
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
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>The SNS targets that are notified when updates are made to an incident.</p>
 */
export type NotificationTargetItem = NotificationTargetItem.SnsTopicArnMember | NotificationTargetItem.$UnknownMember;

export namespace NotificationTargetItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
   */
  export interface SnsTopicArnMember {
    snsTopicArn: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    snsTopicArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    snsTopicArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NotificationTargetItem, visitor: Visitor<T>): T => {
    if (value.snsTopicArn !== undefined) return visitor.snsTopicArn(value.snsTopicArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationTargetItem): any => {
    if (obj.snsTopicArn !== undefined) return { snsTopicArn: obj.snsTopicArn };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Basic details used in creating a response plan. The response plan is then used to create an incident record.</p>
 */
export interface IncidentTemplate {
  /**
   * <p>The title of the incident. </p>
   */
  title: string | undefined;

  /**
   * <p>The impact of the incident on your customers and applications. </p>
   */
  impact: number | undefined;

  /**
   * <p>The summary of the incident. The summary is a brief synopsis of what occurred, what's
   *          currently happening, and context.</p>
   */
  summary?: string;

  /**
   * <p>Used to stop Incident Manager from creating multiple incident records for the same incident. </p>
   */
  dedupeString?: string;

  /**
   * <p>The SNS targets that are notified when updates are made to an incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];
}

export namespace IncidentTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncidentTemplate): any => ({
    ...obj,
    ...(obj.notificationTargets && {
      notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateResponsePlanInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The short format name of the response plan. Can't include spaces.</p>
   */
  name: string | undefined;

  /**
   * <p>The long format of the response plan name. This field can contain spaces.</p>
   */
  displayName?: string;

  /**
   * <p>Details used to create an incident when using this response plan.</p>
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * <p>The
   *             AWS Chatbot
   *             chat channel used for collaboration during an incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The contacts and escalation plans that the response plan engages during an
   *             incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that the response plan starts at the beginning of an incident.</p>
   */
  actions?: Action[];

  /**
   * <p>A list of tags that you are adding to the response plan.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateResponsePlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResponsePlanInput): any => ({
    ...obj,
    ...(obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) }),
    ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
    ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
  });
}

export interface CreateResponsePlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

export namespace CreateResponsePlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResponsePlanOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Request references a resource which does not exist. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * The identifier for the requested resource
   */
  resourceIdentifier?: string;

  /**
   * The resource type
   */
  resourceType?: ResourceType | string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface CreateTimelineEventInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are adding the event
   *             to.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime: Date | undefined;

  /**
   * <p>The type of the event. You can create timeline events of type <code>Custom
   *                 Event</code>.</p>
   */
  eventType: string | undefined;

  /**
   * <p>A valid JSON string. There is no other schema imposed. A short description of the event.</p>
   */
  eventData: string | undefined;
}

export namespace CreateTimelineEventInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTimelineEventInput): any => ({
    ...obj,
  });
}

export interface CreateTimelineEventOutput {
  /**
   * <p>The ARN of the incident record that you added the event to.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event for easy reference later. </p>
   */
  eventId: string | undefined;
}

export namespace CreateTimelineEventOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTimelineEventOutput): any => ({
    ...obj,
  });
}

export interface DeleteIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are deleting.</p>
   */
  arn: string | undefined;
}

export namespace DeleteIncidentRecordInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIncidentRecordInput): any => ({
    ...obj,
  });
}

export interface DeleteIncidentRecordOutput {}

export namespace DeleteIncidentRecordOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIncidentRecordOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the information about the Region you're deleting from your replication
 *          set.</p>
 */
export interface DeleteRegionAction {
  /**
   * <p>The name of the Region you're deleting from the replication set.</p>
   */
  regionName: string | undefined;
}

export namespace DeleteRegionAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegionAction): any => ({
    ...obj,
  });
}

export interface DeleteReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you're deleting.</p>
   */
  arn: string | undefined;
}

export namespace DeleteReplicationSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicationSetInput): any => ({
    ...obj,
  });
}

export interface DeleteReplicationSetOutput {}

export namespace DeleteReplicationSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicationSetOutput): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you're deleting the policy from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The ID of the resource policy you're deleting.</p>
   */
  policyId: string | undefined;
}

export namespace DeleteResourcePolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyInput): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyOutput {}

export namespace DeleteResourcePolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyOutput): any => ({
    ...obj,
  });
}

export interface DeleteResponsePlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

export namespace DeleteResponsePlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResponsePlanInput): any => ({
    ...obj,
  });
}

export interface DeleteResponsePlanOutput {}

export namespace DeleteResponsePlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResponsePlanOutput): any => ({
    ...obj,
  });
}

export interface DeleteTimelineEventInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event is part of.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event you are updating. You can find this by using <code>ListTimelineEvents</code>.</p>
   */
  eventId: string | undefined;
}

export namespace DeleteTimelineEventInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTimelineEventInput): any => ({
    ...obj,
  });
}

export interface DeleteTimelineEventOutput {}

export namespace DeleteTimelineEventOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTimelineEventOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a timeline event during an incident.</p>
 */
export interface EventSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event happened during.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The timeline event ID.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime: Date | undefined;

  /**
   * <p>The time that the timeline event was last updated.</p>
   */
  eventUpdatedTime: Date | undefined;

  /**
   * <p>The type of event. The timeline event must be <code>Custom Event</code>.</p>
   */
  eventType: string | undefined;
}

export namespace EventSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Filter the selection by using a condition.</p>
 */
export interface Filter {
  /**
   * <p>The key that you're filtering on.</p>
   */
  key: string | undefined;

  /**
   * <p>The condition accepts before or after a specified time, equal to a string, or equal to an integer.</p>
   */
  condition: Condition | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
    ...(obj.condition && { condition: Condition.filterSensitiveLog(obj.condition) }),
  });
}

export interface GetIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record.</p>
   */
  arn: string | undefined;
}

export namespace GetIncidentRecordInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIncidentRecordInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details about how the incident record was created and when.</p>
 */
export interface IncidentRecordSource {
  /**
   * <p>The principal that started the incident.</p>
   */
  createdBy: string | undefined;

  /**
   * <p>The principal the assumed the role specified of the <code>createdBy</code>.</p>
   */
  invokedBy?: string;

  /**
   * <p>The resource that caused the incident to be created.</p>
   */
  resourceArn?: string;

  /**
   * <p>The service that started the incident. This can be manually created from Incident Manager,
   *          automatically created using an
   *          AWS
   *          CloudWatch alarm, or
   *          Amazon
   *          EventBridge event.</p>
   */
  source: string | undefined;
}

export namespace IncidentRecordSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncidentRecordSource): any => ({
    ...obj,
  });
}

export enum IncidentRecordStatus {
  OPEN = "OPEN",
  RESOLVED = "RESOLVED",
}

/**
 * <p>The record of the incident that's created when an incident occurs.</p>
 */
export interface IncidentRecord {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record.</p>
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident.</p>
   */
  title: string | undefined;

  /**
   * <p>The summary of the incident. The summary is a brief synopsis of what occurred, what is currently happening, and context.</p>
   */
  summary?: string;

  /**
   * <p>The current status of the incident.</p>
   */
  status: IncidentRecordStatus | string | undefined;

  /**
   * <p>The impact of the incident on customers and applications.</p>
   */
  impact: number | undefined;

  /**
   * <p>The time that Incident Manager created the incident record.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time at which the incident was resolved. This appears as a timeline event.</p>
   */
  resolvedTime?: Date;

  /**
   * <p>The time at which the incident was most recently modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Who modified the incident most recently.</p>
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The runbook, or automation document, that's run at the beginning of the incident.</p>
   */
  automationExecutions?: AutomationExecution[];

  /**
   * <p>Details about the action that started the incident.</p>
   */
  incidentRecordSource: IncidentRecordSource | undefined;

  /**
   * <p>The string Incident Manager uses to prevent duplicate incidents from being created by the same incident.</p>
   */
  dedupeString: string | undefined;

  /**
   * <p>The chat channel used for collaboration during an incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The SNS targets that are notified when updates are made to an incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];
}

export namespace IncidentRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncidentRecord): any => ({
    ...obj,
    ...(obj.automationExecutions && {
      automationExecutions: obj.automationExecutions.map((item) => AutomationExecution.filterSensitiveLog(item)),
    }),
    ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
    ...(obj.notificationTargets && {
      notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
    }),
  });
}

export interface GetIncidentRecordOutput {
  /**
   * <p>Details structure of the incident record.</p>
   */
  incidentRecord: IncidentRecord | undefined;
}

export namespace GetIncidentRecordOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIncidentRecordOutput): any => ({
    ...obj,
    ...(obj.incidentRecord && { incidentRecord: IncidentRecord.filterSensitiveLog(obj.incidentRecord) }),
  });
}

export interface GetReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you want to retrieve.</p>
   */
  arn: string | undefined;
}

export namespace GetReplicationSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReplicationSetInput): any => ({
    ...obj,
  });
}

export enum RegionStatus {
  /**
   * All operations have completed successfully and the region is ready to use
   */
  ACTIVE = "ACTIVE",
  /**
   * The region is in the process of being created.
   */
  CREATING = "CREATING",
  /**
   * The region is in the process of being deleted.
   */
  DELETING = "DELETING",
  /**
   * The region is not healthy and we cannot automatically fix it.
   */
  FAILED = "FAILED",
}

/**
 * <p>Information about a Region in your replication set.</p>
 */
export interface RegionInfo {
  /**
   * <p>The ID of the KMS key used to encrypt the data in this Region.</p>
   */
  sseKmsKeyId?: string;

  /**
   * <p>The status of the Region in the replication set.</p>
   */
  status: RegionStatus | string | undefined;

  /**
   * <p>Information displayed about the status of the Region.</p>
   */
  statusMessage?: string;

  /**
   * <p>The most recent date and time that the Region's status was updated.</p>
   */
  statusUpdateDateTime: Date | undefined;
}

export namespace RegionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionInfo): any => ({
    ...obj,
  });
}

export enum ReplicationSetStatus {
  /**
   * All operations have completed successfully and the replication set is ready to use
   */
  ACTIVE = "ACTIVE",
  /**
   * Replication set is in the process of being created.
   */
  CREATING = "CREATING",
  /**
   * Replication set is in the process of being deleted.
   */
  DELETING = "DELETING",
  /**
   * Replication set is not healthy and we cannot fix it.
   */
  FAILED = "FAILED",
  /**
   * Replication set is in the process of being updated.
   */
  UPDATING = "UPDATING",
}

/**
 * <p>The set of Regions that your Incident Manager data will be replicated to and the KMS key used
 *          to encrypt the data. </p>
 */
export interface ReplicationSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set.</p>
   */
  arn?: string;

  /**
   * <p>The map between each Region in your replication set and the KMS key that is used to
   *          encrypt the data in that Region.</p>
   */
  regionMap: { [key: string]: RegionInfo } | undefined;

  /**
   * <p>The status of the replication set. If the replication set is still pending, you can't
   *          use Incident Manager functionality.</p>
   */
  status: ReplicationSetStatus | string | undefined;

  /**
   * <p>Determines if the replication set deletion protection is enabled or not. If deletion
   *          protection is enabled, you can't delete the last Region in the replication set. </p>
   */
  deletionProtected: boolean | undefined;

  /**
   * <p>When the replication set was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * <p>Details about who created the replication set.</p>
   */
  createdBy: string | undefined;

  /**
   * <p>When the replication set was last updated.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Who last modified the replication set.</p>
   */
  lastModifiedBy: string | undefined;
}

export namespace ReplicationSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationSet): any => ({
    ...obj,
  });
}

export interface GetReplicationSetOutput {
  /**
   * <p>Details of the replication set.</p>
   */
  replicationSet: ReplicationSet | undefined;
}

export namespace GetReplicationSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReplicationSetOutput): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan with the attached resource policy. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The maximum number of resource policies to display per page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourcePoliciesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The resource policy that allows Incident Manager to perform actions on resources on your behalf.</p>
 */
export interface ResourcePolicy {
  /**
   * <p>The JSON blob that describes the policy.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The ID of the resource policy.</p>
   */
  policyId: string | undefined;

  /**
   * <p>The Region that policy allows resources to be used in.</p>
   */
  ramResourceShareRegion: string | undefined;
}

export namespace ResourcePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourcePolicy): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesOutput {
  /**
   * <p>Details about the resource policy attached to the response plan.</p>
   */
  resourcePolicies: ResourcePolicy[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace GetResourcePoliciesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesOutput): any => ({
    ...obj,
  });
}

export interface GetResponsePlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

export namespace GetResponsePlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponsePlanInput): any => ({
    ...obj,
  });
}

export interface GetResponsePlanOutput {
  /**
   * <p>The ARN of the response plan.</p>
   */
  arn: string | undefined;

  /**
   * <p>The short format name of the response plan. Can't contain spaces.</p>
   */
  name: string | undefined;

  /**
   * <p>The long format name of the response plan. Can contain spaces.</p>
   */
  displayName?: string;

  /**
   * <p>Details used to create the incident when using this response plan.</p>
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * <p>The
   *             AWS
   *             Chatbot chat channel used for collaboration during an
   *             incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The contacts and escalation plans that the response plan engages during an
   *             incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that this response plan takes at the beginning of the incident.</p>
   */
  actions?: Action[];
}

export namespace GetResponsePlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResponsePlanOutput): any => ({
    ...obj,
    ...(obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) }),
    ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
    ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
  });
}

export interface GetTimelineEventInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the timeline event is part of.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event. You can get an event's ID when you create it or by using <code>ListTimelineEvents</code>.</p>
   */
  eventId: string | undefined;
}

export namespace GetTimelineEventInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTimelineEventInput): any => ({
    ...obj,
  });
}

/**
 * <p>A significant event that happened during the incident. </p>
 */
export interface TimelineEvent {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event occurred during.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the timeline event.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime: Date | undefined;

  /**
   * <p>The time that the timeline event was last updated.</p>
   */
  eventUpdatedTime: Date | undefined;

  /**
   * <p>The type of event that occurred. Currently Incident Manager supports only the <code>Custom
   *             Event</code> type.</p>
   */
  eventType: string | undefined;

  /**
   * <p>A short description of the event.</p>
   */
  eventData: string | undefined;
}

export namespace TimelineEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimelineEvent): any => ({
    ...obj,
  });
}

export interface GetTimelineEventOutput {
  /**
   * <p>Details about the timeline event.</p>
   */
  event: TimelineEvent | undefined;
}

export namespace GetTimelineEventOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTimelineEventOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Details describing an incident record.</p>
 */
export interface IncidentRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident.</p>
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident. This value is either provided by the response plan or
   *          overwritten on creation.</p>
   */
  title: string | undefined;

  /**
   * <p>The current status of the incident.</p>
   */
  status: IncidentRecordStatus | string | undefined;

  /**
   * <p>Defines the impact to customers and applications.</p>
   */
  impact: number | undefined;

  /**
   * <p>The time the incident was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the incident was resolved.</p>
   */
  resolvedTime?: Date;

  /**
   * <p>What caused Incident Manager to create the incident.</p>
   */
  incidentRecordSource: IncidentRecordSource | undefined;
}

export namespace IncidentRecordSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncidentRecordSummary): any => ({
    ...obj,
  });
}

export enum ItemType {
  ANALYSIS = "ANALYSIS",
  ATTACHMENT = "ATTACHMENT",
  INCIDENT = "INCIDENT",
  METRIC = "METRIC",
  OTHER = "OTHER",
  PARENT = "PARENT",
}

/**
 * <p>Describes a related item.</p>
 */
export type ItemValue =
  | ItemValue.ArnMember
  | ItemValue.MetricDefinitionMember
  | ItemValue.UrlMember
  | ItemValue.$UnknownMember;

export namespace ItemValue {
  /**
   * <p>The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon
   *          resource.</p>
   */
  export interface ArnMember {
    arn: string;
    url?: never;
    metricDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>The URL, if the related item is a non-AWS resource.</p>
   */
  export interface UrlMember {
    arn?: never;
    url: string;
    metricDefinition?: never;
    $unknown?: never;
  }

  /**
   * <p>The metric definition, if the related item is a metric in CloudWatch.</p>
   */
  export interface MetricDefinitionMember {
    arn?: never;
    url?: never;
    metricDefinition: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    arn?: never;
    url?: never;
    metricDefinition?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    arn: (value: string) => T;
    url: (value: string) => T;
    metricDefinition: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ItemValue, visitor: Visitor<T>): T => {
    if (value.arn !== undefined) return visitor.arn(value.arn);
    if (value.url !== undefined) return visitor.url(value.url);
    if (value.metricDefinition !== undefined) return visitor.metricDefinition(value.metricDefinition);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemValue): any => {
    if (obj.arn !== undefined) return { arn: obj.arn };
    if (obj.url !== undefined) return { url: obj.url };
    if (obj.metricDefinition !== undefined) return { metricDefinition: obj.metricDefinition };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Details and type of a related item.</p>
 */
export interface ItemIdentifier {
  /**
   * <p>Details about the related item.</p>
   */
  value: ItemValue | undefined;

  /**
   * <p>The type of related item. Incident Manager supports the following types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ANALYSIS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCIDENT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>METRIC</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ATTACHMENT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OTHER</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  type: ItemType | string | undefined;
}

export namespace ItemIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemIdentifier): any => ({
    ...obj,
    ...(obj.value && { value: ItemValue.filterSensitiveLog(obj.value) }),
  });
}

export interface ListIncidentRecordsInput {
  /**
   * <p>Filter the list of incident records you are searching through. You can filter on the
   *             following keys:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>creationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>impact</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>createdBy</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  filters?: Filter[];

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListIncidentRecordsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIncidentRecordsInput): any => ({
    ...obj,
    ...(obj.filters && { filters: obj.filters.map((item) => Filter.filterSensitiveLog(item)) }),
  });
}

export interface ListIncidentRecordsOutput {
  /**
   * <p>The details of each listed incident record.</p>
   */
  incidentRecordSummaries: IncidentRecordSummary[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListIncidentRecordsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIncidentRecordsOutput): any => ({
    ...obj,
  });
}

export interface ListRelatedItemsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record that you are listing related items for.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The maximum number of related items per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListRelatedItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRelatedItemsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Resources that responders use to triage and mitigate the incident.</p>
 */
export interface RelatedItem {
  /**
   * <p>Details about the related item.</p>
   */
  identifier: ItemIdentifier | undefined;

  /**
   * <p>The title of the related item.</p>
   */
  title?: string;
}

export namespace RelatedItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedItem): any => ({
    ...obj,
    ...(obj.identifier && { identifier: ItemIdentifier.filterSensitiveLog(obj.identifier) }),
  });
}

export interface ListRelatedItemsOutput {
  /**
   * <p>Details about each related item.</p>
   */
  relatedItems: RelatedItem[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListRelatedItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRelatedItemsOutput): any => ({
    ...obj,
    ...(obj.relatedItems && { relatedItems: obj.relatedItems.map((item) => RelatedItem.filterSensitiveLog(item)) }),
  });
}

export interface ListReplicationSetsInput {
  /**
   * <p>The maximum number of results per page. </p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListReplicationSetsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReplicationSetsInput): any => ({
    ...obj,
  });
}

export interface ListReplicationSetsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the list replication set.</p>
   */
  replicationSetArns: string[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListReplicationSetsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReplicationSetsOutput): any => ({
    ...obj,
  });
}

export interface ListResponsePlansInput {
  /**
   * <p>The maximum number of response plans per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListResponsePlansInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResponsePlansInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the response plan that are used when creating an incident.</p>
 */
export interface ResponsePlanSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the response plan. This can't include spaces.</p>
   */
  name: string | undefined;

  /**
   * <p>The human readable name of the response plan. This can include spaces.</p>
   */
  displayName?: string;
}

export namespace ResponsePlanSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponsePlanSummary): any => ({
    ...obj,
  });
}

export interface ListResponsePlansOutput {
  /**
   * <p>Details of each response plan.</p>
   */
  responsePlanSummaries: ResponsePlanSummary[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListResponsePlansOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResponsePlansOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
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
   * <p>A list of tags for the response plan.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum TimelineEventSort {
  EVENT_TIME = "EVENT_TIME",
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListTimelineEventsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event is part of.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Filters the timeline events based on the provided conditional values. You can filter
   *             timeline events using the following keys:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>eventTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>eventType</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  filters?: Filter[];

  /**
   * <p>Sort by the specified key value pair.</p>
   */
  sortBy?: TimelineEventSort | string;

  /**
   * <p>Sorts the order of timeline events by the value specified in the <code>sortBy</code>
   *             field.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListTimelineEventsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTimelineEventsInput): any => ({
    ...obj,
    ...(obj.filters && { filters: obj.filters.map((item) => Filter.filterSensitiveLog(item)) }),
  });
}

export interface ListTimelineEventsOutput {
  /**
   * <p>Details about each event that occurred during the incident.</p>
   */
  eventSummaries: EventSummary[] | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListTimelineEventsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTimelineEventsOutput): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're adding the resource policy
   *             to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Details of the resource policy.</p>
   */
  policy: string | undefined;
}

export namespace PutResourcePolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyInput): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyOutput {
  /**
   * <p>The ID of the resource policy.</p>
   */
  policyId: string | undefined;
}

export namespace PutResourcePolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the related item you're adding.</p>
 */
export type RelatedItemsUpdate =
  | RelatedItemsUpdate.ItemToAddMember
  | RelatedItemsUpdate.ItemToRemoveMember
  | RelatedItemsUpdate.$UnknownMember;

export namespace RelatedItemsUpdate {
  /**
   * <p>Details about the related item you're adding.</p>
   */
  export interface ItemToAddMember {
    itemToAdd: RelatedItem;
    itemToRemove?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the related item you're deleting.</p>
   */
  export interface ItemToRemoveMember {
    itemToAdd?: never;
    itemToRemove: ItemIdentifier;
    $unknown?: never;
  }

  export interface $UnknownMember {
    itemToAdd?: never;
    itemToRemove?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    itemToAdd: (value: RelatedItem) => T;
    itemToRemove: (value: ItemIdentifier) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RelatedItemsUpdate, visitor: Visitor<T>): T => {
    if (value.itemToAdd !== undefined) return visitor.itemToAdd(value.itemToAdd);
    if (value.itemToRemove !== undefined) return visitor.itemToRemove(value.itemToRemove);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedItemsUpdate): any => {
    if (obj.itemToAdd !== undefined) return { itemToAdd: RelatedItem.filterSensitiveLog(obj.itemToAdd) };
    if (obj.itemToRemove !== undefined) return { itemToRemove: ItemIdentifier.filterSensitiveLog(obj.itemToRemove) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Details about what caused the incident to be created in Incident Manager.</p>
 */
export interface TriggerDetails {
  /**
   * <p>Identifies the service that sourced the event. All events sourced from within AWS begin
   *          with "aws." Customer-generated events can have any value here, as long as it doesn't begin
   *          with "aws." We recommend the use of Java package-name style reverse domain-name strings. </p>
   */
  source: string | undefined;

  /**
   * <p>The ARN of the source that detected the incident.</p>
   */
  triggerArn?: string;

  /**
   * <p>The time that the incident was detected.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>Raw data passed from either EventBridge, CloudWatch, or Incident Manager when an
   *          incident is created.</p>
   */
  rawData?: string;
}

export namespace TriggerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerDetails): any => ({
    ...obj,
  });
}

export interface StartIncidentInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat
   *             channels, SNS topics, runbooks, title, and impact of the incident. </p>
   */
  responsePlanArn: string | undefined;

  /**
   * <p>Provide a title for the incident. Providing a title overwrites the title provided by
   *             the response plan. </p>
   */
  title?: string;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact
   *             provided by a response plan.</p>
   *         <p class="title">
   *             <b>Possible impacts:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>
   *                   <code>1</code> - Critical impact, this typically relates to full application
   *                     failure that impacts many to all customers. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>2</code> - High impact, partial application failure with impact to many
   *                     customers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>3</code> -  Medium impact, the application is providing reduced service
   *                     to customers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>4</code> -  Low impact, customer might aren't impacted by the problem
   *                     yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>5</code> - No impact, customers aren't currently impacted but urgent
   *                     action is needed to avoid impact.</p>
   *             </li>
   *          </ul>
   */
  impact?: number;

  /**
   * <p>Details of what created the incident record in Incident Manager.</p>
   */
  triggerDetails?: TriggerDetails;

  /**
   * <p>Add related items to the incident for other responders to use. Related items are AWS
   *             resources, external links, or files uploaded to an S3 bucket. </p>
   */
  relatedItems?: RelatedItem[];
}

export namespace StartIncidentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartIncidentInput): any => ({
    ...obj,
    ...(obj.relatedItems && { relatedItems: obj.relatedItems.map((item) => RelatedItem.filterSensitiveLog(item)) }),
  });
}

export interface StartIncidentOutput {
  /**
   * <p>The ARN of the newly created incident record.</p>
   */
  incidentRecordArn: string | undefined;
}

export namespace StartIncidentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartIncidentOutput): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're adding the tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags that you are adding to the response plan.</p>
   */
  tags: { [key: string]: string } | undefined;
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

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're removing a tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the tag you're removing from the response plan.</p>
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

export interface UpdateDeletionProtectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you're updating.</p>
   */
  arn: string | undefined;

  /**
   * <p>Details if deletion protection is enabled or disabled in your account.</p>
   */
  deletionProtected: boolean | undefined;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

export namespace UpdateDeletionProtectionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeletionProtectionInput): any => ({
    ...obj,
  });
}

export interface UpdateDeletionProtectionOutput {}

export namespace UpdateDeletionProtectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeletionProtectionOutput): any => ({
    ...obj,
  });
}

export interface UpdateIncidentRecordInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are updating.</p>
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident is a brief and easily recognizable.</p>
   */
  title?: string;

  /**
   * <p>The summary describes what has happened during the incident.</p>
   */
  summary?: string;

  /**
   * <p>Defines the impact to customers and applications. Providing an impact overwrites the
   *             impact provided by the response plan.</p>
   *         <p class="title">
   *             <b>Possible impacts:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                 <p>
   *                   <code>1</code> - Critical impact, this typically relates to full application
   *                     failure that impacts many to all customers. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>2</code> - High impact, partial application failure with impact to many
   *                     customers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>3</code> -  Medium impact, the application is providing reduced service
   *                     to customers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>4</code> -  Low impact, customer might aren't impacted by the problem
   *                     yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>5</code> - No impact, customers aren't currently impacted but urgent
   *                     action is needed to avoid impact.</p>
   *             </li>
   *          </ul>
   */
  impact?: number;

  /**
   * <p>The status of the incident. An incident can be <code>Open</code> or <code>Resolved</code>.</p>
   */
  status?: IncidentRecordStatus | string;

  /**
   * <p>The AWS Chatbot chat channel for responders to collaborate in.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The SNS targets that are notified when updates are made to an incident.</p>
   *         <p>Using multiple SNS topics creates redundancy in the case that a Region is down during
   *             the incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];
}

export namespace UpdateIncidentRecordInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIncidentRecordInput): any => ({
    ...obj,
    ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
    ...(obj.notificationTargets && {
      notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateIncidentRecordOutput {}

export namespace UpdateIncidentRecordOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIncidentRecordOutput): any => ({
    ...obj,
  });
}

export interface UpdateRelatedItemsInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are updating related items
   *             in.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Details about the item you are adding or deleting.</p>
   */
  relatedItemsUpdate: RelatedItemsUpdate | undefined;
}

export namespace UpdateRelatedItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelatedItemsInput): any => ({
    ...obj,
    ...(obj.relatedItemsUpdate && {
      relatedItemsUpdate: RelatedItemsUpdate.filterSensitiveLog(obj.relatedItemsUpdate),
    }),
  });
}

export interface UpdateRelatedItemsOutput {}

export namespace UpdateRelatedItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRelatedItemsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Details used when updating the replication set.</p>
 */
export type UpdateReplicationSetAction =
  | UpdateReplicationSetAction.AddRegionActionMember
  | UpdateReplicationSetAction.DeleteRegionActionMember
  | UpdateReplicationSetAction.$UnknownMember;

export namespace UpdateReplicationSetAction {
  /**
   * <p>Details about the Region that you're adding to the replication set.</p>
   */
  export interface AddRegionActionMember {
    addRegionAction: AddRegionAction;
    deleteRegionAction?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the Region that you're deleting to the replication set.</p>
   */
  export interface DeleteRegionActionMember {
    addRegionAction?: never;
    deleteRegionAction: DeleteRegionAction;
    $unknown?: never;
  }

  export interface $UnknownMember {
    addRegionAction?: never;
    deleteRegionAction?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    addRegionAction: (value: AddRegionAction) => T;
    deleteRegionAction: (value: DeleteRegionAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateReplicationSetAction, visitor: Visitor<T>): T => {
    if (value.addRegionAction !== undefined) return visitor.addRegionAction(value.addRegionAction);
    if (value.deleteRegionAction !== undefined) return visitor.deleteRegionAction(value.deleteRegionAction);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationSetAction): any => {
    if (obj.addRegionAction !== undefined)
      return { addRegionAction: AddRegionAction.filterSensitiveLog(obj.addRegionAction) };
    if (obj.deleteRegionAction !== undefined)
      return { deleteRegionAction: DeleteRegionAction.filterSensitiveLog(obj.deleteRegionAction) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface UpdateReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you're updating.</p>
   */
  arn: string | undefined;

  /**
   * <p>An action to add or delete a Region.</p>
   */
  actions: UpdateReplicationSetAction[] | undefined;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

export namespace UpdateReplicationSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationSetInput): any => ({
    ...obj,
    ...(obj.actions && { actions: obj.actions.map((item) => UpdateReplicationSetAction.filterSensitiveLog(item)) }),
  });
}

export interface UpdateReplicationSetOutput {}

export namespace UpdateReplicationSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationSetOutput): any => ({
    ...obj,
  });
}

export interface UpdateResponsePlanInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;

  /**
   * <p>The long format name of the response plan. Can't contain spaces.</p>
   */
  displayName?: string;

  /**
   * <p>The short format name of the incident. Can't contain spaces.</p>
   */
  incidentTemplateTitle?: string;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact
   *             provided by a response plan.</p>
   *         <p class="title">
   *             <b>Possible impacts:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>5</code> - Severe impact</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - High impact</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium impact</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - Low impact</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1</code> - No impact</p>
   *             </li>
   *          </ul>
   */
  incidentTemplateImpact?: number;

  /**
   * <p>A brief summary of the incident. This typically contains what has happened, what's
   *             currently happening, and next steps.</p>
   */
  incidentTemplateSummary?: string;

  /**
   * <p>Used to create only one incident record for an incident.</p>
   */
  incidentTemplateDedupeString?: string;

  /**
   * <p>The SNS targets that are notified when updates are made to an incident.</p>
   */
  incidentTemplateNotificationTargets?: NotificationTargetItem[];

  /**
   * <p>The
   *             AWS
   *             Chatbot chat channel used for collaboration during an
   *             incident.</p>
   *         <p>Use the empty structure to remove the chat channel from the response plan.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The contacts and escalation plans that Incident Manager engages at the start of the incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that this response plan takes at the beginning of an incident.</p>
   */
  actions?: Action[];
}

export namespace UpdateResponsePlanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResponsePlanInput): any => ({
    ...obj,
    ...(obj.incidentTemplateNotificationTargets && {
      incidentTemplateNotificationTargets: obj.incidentTemplateNotificationTargets.map((item) =>
        NotificationTargetItem.filterSensitiveLog(item)
      ),
    }),
    ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
    ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
  });
}

export interface UpdateResponsePlanOutput {}

export namespace UpdateResponsePlanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResponsePlanOutput): any => ({
    ...obj,
  });
}

export interface UpdateTimelineEventInput {
  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the timeline event is part
   *             of.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event you are updating. You can find this by using <code>ListTimelineEvents</code>.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime?: Date;

  /**
   * <p>The type of the event. You can update events of type <code>Custom Event</code>.</p>
   */
  eventType?: string;

  /**
   * <p>A short description of the event.</p>
   */
  eventData?: string;
}

export namespace UpdateTimelineEventInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTimelineEventInput): any => ({
    ...obj,
  });
}

export interface UpdateTimelineEventOutput {}

export namespace UpdateTimelineEventOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTimelineEventOutput): any => ({
    ...obj,
  });
}
