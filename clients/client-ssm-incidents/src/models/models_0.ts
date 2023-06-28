// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SSMIncidentsServiceException as __BaseException } from "./SSMIncidentsServiceException";

/**
 * @public
 * <p>You don't have sufficient access to perform this operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const VariableType = {
  INCIDENT_RECORD_ARN: "INCIDENT_RECORD_ARN",
  INVOLVED_RESOURCES: "INVOLVED_RESOURCES",
} as const;

/**
 * @public
 */
export type VariableType = (typeof VariableType)[keyof typeof VariableType];

/**
 * @public
 * <p>The dynamic SSM parameter value.</p>
 */
export type DynamicSsmParameterValue =
  | DynamicSsmParameterValue.VariableMember
  | DynamicSsmParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace DynamicSsmParameterValue {
  /**
   * <p>Variable dynamic parameters. A parameter value is determined when an incident is
   *       created.</p>
   */
  export interface VariableMember {
    variable: VariableType | string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    variable?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    variable: (value: VariableType | string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DynamicSsmParameterValue, visitor: Visitor<T>): T => {
    if (value.variable !== undefined) return visitor.variable(value.variable);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const SsmTargetAccount = {
  IMPACTED_ACCOUNT: "IMPACTED_ACCOUNT",
  RESPONSE_PLAN_OWNER_ACCOUNT: "RESPONSE_PLAN_OWNER_ACCOUNT",
} as const;

/**
 * @public
 */
export type SsmTargetAccount = (typeof SsmTargetAccount)[keyof typeof SsmTargetAccount];

/**
 * @public
 * <p>Details about the Systems Manager automation document that will be used as a runbook
 *       during an incident.</p>
 */
export interface SsmAutomation {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that the automation document will assume when
   *       running commands.</p>
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
   * <p>The account that the automation document will be run in. This can be in either the
   *       management account or an application account.</p>
   */
  targetAccount?: SsmTargetAccount | string;

  /**
   * <p>The key-value pair parameters to use when running the automation document.</p>
   */
  parameters?: Record<string, string[]>;

  /**
   * <p>The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation
   *       runbook.</p>
   */
  dynamicParameters?: Record<string, DynamicSsmParameterValue>;
}

/**
 * @public
 * <p>The action that starts at the beginning of an incident. The response plan defines the
 *       action.</p>
 */
export type Action = Action.SsmAutomationMember | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * <p>The Systems Manager automation document to start as the runbook at the beginning of the
   *       incident.</p>
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
}

/**
 * @public
 * <p>Defines the Amazon Web Services Region and KMS key to add to the replication
 *       set. </p>
 */
export interface AddRegionAction {
  /**
   * <p>The Amazon Web Services Region name to add to the replication set.</p>
   */
  regionName: string | undefined;

  /**
   * <p>The KMS key ID to use to encrypt your replication set.</p>
   */
  sseKmsKeyId?: string;
}

/**
 * @public
 * <p>Use the AttributeValueList to filter by string or integer values.</p>
 */
export type AttributeValueList =
  | AttributeValueList.IntegerValuesMember
  | AttributeValueList.StringValuesMember
  | AttributeValueList.$UnknownMember;

/**
 * @public
 */
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
}

/**
 * @public
 * <p>The Systems Manager automation document process to start as the runbook at the
 *       beginning of the incident.</p>
 */
export type AutomationExecution = AutomationExecution.SsmExecutionArnMember | AutomationExecution.$UnknownMember;

/**
 * @public
 */
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
}

/**
 * @public
 * <p>Used to remove the chat channel from an incident record or response plan.</p>
 */
export interface EmptyChatChannel {}

/**
 * @public
 * <p>The Chatbot chat channel used for collaboration during an incident.</p>
 */
export type ChatChannel = ChatChannel.ChatbotSnsMember | ChatChannel.EmptyMember | ChatChannel.$UnknownMember;

/**
 * @public
 */
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
   * <p>The Amazon SNS targets that Chatbot uses to notify the chat channel of
   *       updates to an incident. You can also make updates to the incident through the chat channel by
   *       using the Amazon SNS topics. </p>
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
}

/**
 * @public
 * <p>A conditional statement with which to compare a value, after a timestamp, before a
 *       timestamp, or equal to a string or integer. If multiple conditions are specified, the
 *       conditionals become an <code>AND</code>ed statement. If multiple values are specified for a
 *       conditional, the values are <code>OR</code>d.</p>
 */
export type Condition =
  | Condition.AfterMember
  | Condition.BeforeMember
  | Condition.EqualsMember
  | Condition.$UnknownMember;

/**
 * @public
 */
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
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  INCIDENT_RECORD: "INCIDENT_RECORD",
  REPLICATION_SET: "REPLICATION_SET",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  RESPONSE_PLAN: "RESPONSE_PLAN",
  TIMELINE_EVENT: "TIMELINE_EVENT",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * The identifier of the requested resource
   */
  resourceIdentifier?: string;

  /**
   * The resource type
   */
  resourceType?: ResourceType | string;

  /**
   * If present in the output, the operation can be retried after this time
   */
  retryAfter?: Date;

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
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
    this.retryAfter = opts.retryAfter;
  }
}

/**
 * @public
 * <p>The mapping between a Amazon Web Services Region and the key that's used to encrypt the
 *       data.</p>
 */
export interface RegionMapInputValue {
  /**
   * <p>The KMS key used to encrypt the data in your replication set.</p>
   */
  sseKmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateReplicationSetInput {
  /**
   * <p>The Regions that Incident Manager replicates your data to. You can have up to three Regions in
   *       your replication set.</p>
   */
  regions: Record<string, RegionMapInputValue> | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of tags to add to the replication set.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateReplicationSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set. </p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
 * @public
 * @enum
 */
export const ServiceCode = {
  SSM_INCIDENTS: "ssm-incidents",
} as const;

/**
 * @public
 */
export type ServiceCode = (typeof ServiceCode)[keyof typeof ServiceCode];

/**
 * @public
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * Originating service code
   */
  serviceCode: ServiceCode | string | undefined;

  /**
   * Originating quota code
   */
  quotaCode: string | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * <p>The SNS targets that are notified when updates are made to an incident.</p>
 */
export type NotificationTargetItem = NotificationTargetItem.SnsTopicArnMember | NotificationTargetItem.$UnknownMember;

/**
 * @public
 */
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
}

/**
 * @public
 * <p>Basic details used in creating a response plan. The response plan is then used to create
 *       an incident record.</p>
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
   *       currently happening, and context.</p>
   */
  summary?: string;

  /**
   * <p>Used to stop Incident Manager from creating multiple incident records for the same incident.
   *     </p>
   */
  dedupeString?: string;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];

  /**
   * <p>Tags to assign to the template. When the <code>StartIncident</code> API action is called,
   *       Incident Manager assigns the tags specified in the template to the incident.</p>
   */
  incidentTags?: Record<string, string>;
}

/**
 * @public
 * <p>Details about the PagerDuty service where the response plan creates an incident.</p>
 */
export interface PagerDutyIncidentConfiguration {
  /**
   * <p>The ID of the PagerDuty service that the response plan associates with an incident when it
   *       launches.</p>
   */
  serviceId: string | undefined;
}

/**
 * @public
 * <p>Details about the PagerDuty configuration for a response plan.</p>
 */
export interface PagerDutyConfiguration {
  /**
   * <p>The name of the PagerDuty configuration.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or
   *       User Token REST API Key, and other user credentials.</p>
   */
  secretId: string | undefined;

  /**
   * <p>Details about the PagerDuty service associated with the configuration.</p>
   */
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration | undefined;
}

/**
 * @public
 * <p>Information about third-party services integrated into a response plan.</p>
 */
export type Integration = Integration.PagerDutyConfigurationMember | Integration.$UnknownMember;

/**
 * @public
 */
export namespace Integration {
  /**
   * <p>Information about the PagerDuty service where the response plan creates an
   *       incident.</p>
   */
  export interface PagerDutyConfigurationMember {
    pagerDutyConfiguration: PagerDutyConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    pagerDutyConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    pagerDutyConfiguration: (value: PagerDutyConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Integration, visitor: Visitor<T>): T => {
    if (value.pagerDutyConfiguration !== undefined) return visitor.pagerDutyConfiguration(value.pagerDutyConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateResponsePlanInput {
  /**
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
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
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that the response plan starts at the beginning of an incident.</p>
   */
  actions?: Action[];

  /**
   * <p>A list of tags that you are adding to the response plan.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Information about third-party services integrated into the response plan.</p>
   */
  integrations?: Integration[];
}

/**
 * @public
 */
export interface CreateResponsePlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Request references a resource which doesn't exist. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * The identifier for the requested resource
   */
  resourceIdentifier?: string;

  /**
   * The resource type
   */
  resourceType?: ResourceType | string;

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
    this.resourceIdentifier = opts.resourceIdentifier;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>An item referenced in a <code>TimelineEvent</code> that is involved in or somehow
 *       associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID.</p>
 */
export type EventReference =
  | EventReference.RelatedItemIdMember
  | EventReference.ResourceMember
  | EventReference.$UnknownMember;

/**
 * @public
 */
export namespace EventReference {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services resource referenced in a
   *         <code>TimelineEvent</code>.</p>
   */
  export interface ResourceMember {
    resource: string;
    relatedItemId?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of a <code>RelatedItem</code> referenced in a <code>TimelineEvent</code>.</p>
   */
  export interface RelatedItemIdMember {
    resource?: never;
    relatedItemId: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    resource?: never;
    relatedItemId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    resource: (value: string) => T;
    relatedItemId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EventReference, visitor: Visitor<T>): T => {
    if (value.resource !== undefined) return visitor.resource(value.resource);
    if (value.relatedItemId !== undefined) return visitor.relatedItemId(value.relatedItemId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateTimelineEventInput {
  /**
   * <p>A token that ensures that a client calls the action only once with the specified
   *       details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record that the action adds the incident
   *       to.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime: Date | undefined;

  /**
   * <p>The type of event. You can create timeline events of type <code>Custom
   *       Event</code>.</p>
   */
  eventType: string | undefined;

  /**
   * <p>A short description of the event.</p>
   */
  eventData: string | undefined;

  /**
   * <p>Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter
   *       its Amazon Resource Name (ARN). You can also specify a related item associated with a
   *       resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a
   *       resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated
   *       with the DynamoDB table as a related item.</p>
   */
  eventReferences?: EventReference[];
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface DeleteIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are deleting.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIncidentRecordOutput {}

/**
 * @public
 * <p>Defines the information about the Amazon Web Services Region you're deleting from your
 *       replication set.</p>
 */
export interface DeleteRegionAction {
  /**
   * <p>The name of the Amazon Web Services Region you're deleting from the replication set.</p>
   */
  regionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you're deleting.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSetOutput {}

/**
 * @public
 */
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

/**
 * @public
 */
export interface DeleteResourcePolicyOutput {}

/**
 * @public
 */
export interface DeleteResponsePlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResponsePlanOutput {}

/**
 * @public
 */
export interface DeleteTimelineEventInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an
   *       event's ID.</p>
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTimelineEventOutput {}

/**
 * @public
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

  /**
   * <p>A list of references in a <code>TimelineEvent</code>.</p>
   */
  eventReferences?: EventReference[];
}

/**
 * @public
 * <p>Filter the selection by using a condition.</p>
 */
export interface Filter {
  /**
   * <p>The key that you're filtering on.</p>
   */
  key: string | undefined;

  /**
   * <p>The condition accepts before or after a specified time, equal to a string, or equal to an
   *       integer.</p>
   */
  condition: Condition | undefined;
}

/**
 * @public
 */
export interface GetIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Details about what created the incident record and when it was created.</p>
 */
export interface IncidentRecordSource {
  /**
   * <p>The principal that started the incident.</p>
   */
  createdBy: string | undefined;

  /**
   * <p>The service principal that assumed the role specified in <code>createdBy</code>. If no
   *       service principal assumed the role this will be left blank.</p>
   */
  invokedBy?: string;

  /**
   * <p>The resource that caused the incident to be created.</p>
   */
  resourceArn?: string;

  /**
   * <p>The service that started the incident. This can be manually created from Incident Manager,
   *       automatically created using an Amazon CloudWatch alarm, or Amazon EventBridge
   *       event.</p>
   */
  source: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncidentRecordStatus = {
  OPEN: "OPEN",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type IncidentRecordStatus = (typeof IncidentRecordStatus)[keyof typeof IncidentRecordStatus];

/**
 * @public
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
   * <p>The summary of the incident. The summary is a brief synopsis of what occurred, what's
   *       currently happening, and context of the incident.</p>
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
   * <p>The string Incident Manager uses to prevent duplicate incidents from being created by the same
   *       incident in the same account.</p>
   */
  dedupeString: string | undefined;

  /**
   * <p>The chat channel used for collaboration during an incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];
}

/**
 * @public
 */
export interface GetIncidentRecordOutput {
  /**
   * <p>Details the structure of the incident record.</p>
   */
  incidentRecord: IncidentRecord | undefined;
}

/**
 * @public
 */
export interface GetReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you want to retrieve.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RegionStatus = {
  /**
   * All operations have completed successfully and the region is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * The region is in the process of being created.
   */
  CREATING: "CREATING",
  /**
   * The region is in the process of being deleted.
   */
  DELETING: "DELETING",
  /**
   * The region is not healthy and we cannot automatically fix it.
   */
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type RegionStatus = (typeof RegionStatus)[keyof typeof RegionStatus];

/**
 * @public
 * <p>Information about a Amazon Web Services Region in your replication set.</p>
 */
export interface RegionInfo {
  /**
   * <p>The ID of the KMS key used to encrypt the data in this Amazon Web Services Region.</p>
   */
  sseKmsKeyId?: string;

  /**
   * <p>The status of the Amazon Web Services Region in the replication set.</p>
   */
  status: RegionStatus | string | undefined;

  /**
   * <p>Information displayed about the status of the Amazon Web Services Region.</p>
   */
  statusMessage?: string;

  /**
   * <p>The most recent date and time that Incident Manager updated the Amazon Web Services Region's status.</p>
   */
  statusUpdateDateTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationSetStatus = {
  /**
   * All operations have completed successfully and the replication set is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Replication set is in the process of being created.
   */
  CREATING: "CREATING",
  /**
   * Replication set is in the process of being deleted.
   */
  DELETING: "DELETING",
  /**
   * Replication set is not healthy and we cannot fix it.
   */
  FAILED: "FAILED",
  /**
   * Replication set is in the process of being updated.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ReplicationSetStatus = (typeof ReplicationSetStatus)[keyof typeof ReplicationSetStatus];

/**
 * @public
 * <p>The set of Amazon Web Services Region that your Incident Manager data will be replicated to and
 *       the KMS key used to encrypt the data. </p>
 */
export interface ReplicationSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set.</p>
   */
  arn?: string;

  /**
   * <p>The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.</p>
   */
  regionMap: Record<string, RegionInfo> | undefined;

  /**
   * <p>The status of the replication set. If the replication set is still pending, you can't use
   *       Incident Manager functionality.</p>
   */
  status: ReplicationSetStatus | string | undefined;

  /**
   * <p>Determines if the replication set deletion protection is enabled or not. If deletion
   *       protection is enabled, you can't delete the last Amazon Web Services Region in the replication
   *       set. </p>
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

/**
 * @public
 */
export interface GetReplicationSetOutput {
  /**
   * <p>Details of the replication set.</p>
   */
  replicationSet: ReplicationSet | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan with the attached resource policy.
   *     </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The maximum number of resource policies to display for each page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The resource policy that allows Incident Manager to perform actions on resources on your
 *       behalf.</p>
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
   * <p>The Amazon Web Services Region that policy allows resources to be used in.</p>
   */
  ramResourceShareRegion: string | undefined;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface GetResponsePlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetResponsePlanOutput {
  /**
   * <p>The ARN of the response plan.</p>
   */
  arn: string | undefined;

  /**
   * <p>The short format name of the response plan. The name can't contain spaces.</p>
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
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that this response plan takes at the beginning of the incident.</p>
   */
  actions?: Action[];

  /**
   * <p>Information about third-party services integrated into the Incident Manager response
   *       plan.</p>
   */
  integrations?: Integration[];
}

/**
 * @public
 */
export interface GetTimelineEventInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event. You can get an event's ID when you create it, or by using
   *         <code>ListTimelineEvents</code>.</p>
   */
  eventId: string | undefined;
}

/**
 * @public
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
   *         Event</code> type.</p>
   */
  eventType: string | undefined;

  /**
   * <p>A short description of the event.</p>
   */
  eventData: string | undefined;

  /**
   * <p>A list of references in a <code>TimelineEvent</code>.</p>
   */
  eventReferences?: EventReference[];
}

/**
 * @public
 */
export interface GetTimelineEventOutput {
  /**
   * <p>Details about the timeline event.</p>
   */
  event: TimelineEvent | undefined;
}

/**
 * @public
 * <p>Details describing an incident record.</p>
 */
export interface IncidentRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident.</p>
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident. This value is either provided by the response plan or
   *       overwritten on creation.</p>
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

/**
 * @public
 * @enum
 */
export const ItemType = {
  ANALYSIS: "ANALYSIS",
  ATTACHMENT: "ATTACHMENT",
  AUTOMATION: "AUTOMATION",
  INCIDENT: "INCIDENT",
  INVOLVED_RESOURCE: "INVOLVED_RESOURCE",
  METRIC: "METRIC",
  OTHER: "OTHER",
  PARENT: "PARENT",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

/**
 * @public
 * <p>Details about the PagerDuty incident associated with an incident created by an Incident Manager
 *       response plan.</p>
 */
export interface PagerDutyIncidentDetail {
  /**
   * <p>The ID of the incident associated with the PagerDuty service for the response plan.</p>
   */
  id: string | undefined;

  /**
   * <p>Indicates whether to resolve the PagerDuty incident when you resolve the associated
   *       Incident Manager incident.</p>
   */
  autoResolve?: boolean;

  /**
   * <p>The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or
   *       User Token REST API Key, and other user credentials.</p>
   */
  secretId?: string;
}

/**
 * @public
 * <p>Describes a related item.</p>
 */
export type ItemValue =
  | ItemValue.ArnMember
  | ItemValue.MetricDefinitionMember
  | ItemValue.PagerDutyIncidentDetailMember
  | ItemValue.UrlMember
  | ItemValue.$UnknownMember;

/**
 * @public
 */
export namespace ItemValue {
  /**
   * <p>The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon
   *       resource.</p>
   */
  export interface ArnMember {
    arn: string;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>The URL, if the related item is a non-Amazon Web Services resource.</p>
   */
  export interface UrlMember {
    arn?: never;
    url: string;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>The metric definition, if the related item is a metric in Amazon CloudWatch.</p>
   */
  export interface MetricDefinitionMember {
    arn?: never;
    url?: never;
    metricDefinition: string;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an incident that is associated with a PagerDuty incident.</p>
   */
  export interface PagerDutyIncidentDetailMember {
    arn?: never;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail: PagerDutyIncidentDetail;
    $unknown?: never;
  }

  export interface $UnknownMember {
    arn?: never;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    arn: (value: string) => T;
    url: (value: string) => T;
    metricDefinition: (value: string) => T;
    pagerDutyIncidentDetail: (value: PagerDutyIncidentDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ItemValue, visitor: Visitor<T>): T => {
    if (value.arn !== undefined) return visitor.arn(value.arn);
    if (value.url !== undefined) return visitor.url(value.url);
    if (value.metricDefinition !== undefined) return visitor.metricDefinition(value.metricDefinition);
    if (value.pagerDutyIncidentDetail !== undefined)
      return visitor.pagerDutyIncidentDetail(value.pagerDutyIncidentDetail);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Details and type of a related item.</p>
 */
export interface ItemIdentifier {
  /**
   * <p>Details about the related item.</p>
   */
  value: ItemValue | undefined;

  /**
   * <p>The type of related item. </p>
   */
  type: ItemType | string | undefined;
}

/**
 * @public
 */
export interface ListIncidentRecordsInput {
  /**
   * <p>Filters the list of incident records you want to search through. You can filter on the
   *       following keys:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>creationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>impact</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>createdBy</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Note the following when when you use Filters:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify a Filter, the response includes all incident records.</p>
   *             </li>
   *             <li>
   *                <p>If you specify more than one filter in a single request, the response returns incident
   *           records that match all filters.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter with more than one value, the response returns incident
   *           records that match any of the values provided.</p>
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface ListRelatedItemsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record containing the listed related
   *       items.</p>
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

/**
 * @public
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

  /**
   * <p>A unique ID for a <code>RelatedItem</code>.</p>
   *          <important>
   *             <p>Don't specify this parameter when you add a <code>RelatedItem</code> by using the <a>UpdateRelatedItems</a> API action.</p>
   *          </important>
   */
  generatedId?: string;
}

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the response plan.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const TimelineEventSort = {
  EVENT_TIME: "EVENT_TIME",
} as const;

/**
 * @public
 */
export type TimelineEventSort = (typeof TimelineEventSort)[keyof typeof TimelineEventSort];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListTimelineEventsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Filters the timeline events based on the provided conditional values. You can filter
   *       timeline events with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>eventTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>eventType</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Note the following when deciding how to use Filters:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify a Filter, the response includes all timeline events.</p>
   *             </li>
   *             <li>
   *                <p>If you specify more than one filter in a single request, the response returns timeline
   *           events that match all filters.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter with more than one value, the response returns timeline events
   *           that match any of the values provided.</p>
   *             </li>
   *          </ul>
   */
  filters?: Filter[];

  /**
   * <p>Sort timeline events by the specified key value pair.</p>
   */
  sortBy?: TimelineEventSort | string;

  /**
   * <p>Sorts the order of timeline events by the value specified in the <code>sortBy</code>
   *       field.</p>
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan to add the resource policy to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Details of the resource policy.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * <p>The ID of the resource policy.</p>
   */
  policyId: string | undefined;
}

/**
 * @public
 * <p>Details about the related item you're adding.</p>
 */
export type RelatedItemsUpdate =
  | RelatedItemsUpdate.ItemToAddMember
  | RelatedItemsUpdate.ItemToRemoveMember
  | RelatedItemsUpdate.$UnknownMember;

/**
 * @public
 */
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
}

/**
 * @public
 * <p>Details about what caused the incident to be created in Incident Manager.</p>
 */
export interface TriggerDetails {
  /**
   * <p>Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "<code>aws.</code>" Customer-generated events can have any value here,
   *       as long as it doesn't begin with "<code>aws.</code>" We recommend the use of Java package-name
   *       style reverse domain-name strings. </p>
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source that detected the incident.</p>
   */
  triggerArn?: string;

  /**
   * <p>The time that the incident was detected.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.</p>
   */
  rawData?: string;
}

/**
 * @public
 */
export interface StartIncidentInput {
  /**
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat
   *       channels, Amazon SNS topics, runbooks, title, and impact of the incident. </p>
   */
  responsePlanArn: string | undefined;

  /**
   * <p>Provide a title for the incident. Providing a title overwrites the title provided by the
   *       response plan. </p>
   */
  title?: string;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by
   *       a response plan.</p>
   *          <p class="title">
   *             <b>Possible impacts:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical impact, this typically relates to full application failure
   *           that impacts many to all customers. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High impact, partial application failure with impact to many
   *           customers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium impact, the application is providing reduced service to
   *           customers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low impact, customer might aren't impacted by the problem yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No impact, customers aren't currently impacted but urgent action is
   *           needed to avoid impact.</p>
   *             </li>
   *          </ul>
   */
  impact?: number;

  /**
   * <p>Details of what created the incident record in Incident Manager.</p>
   */
  triggerDetails?: TriggerDetails;

  /**
   * <p>Add related items to the incident for other responders to use. Related items are Amazon Web Services
   *       resources, external links, or files uploaded to an Amazon S3 bucket. </p>
   */
  relatedItems?: RelatedItem[];
}

/**
 * @public
 */
export interface StartIncidentOutput {
  /**
   * <p>The ARN of the newly created incident record.</p>
   */
  incidentRecordArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're adding the tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the response plan.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're removing a tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the tag to remove from the response plan.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDeletionProtectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set to update.</p>
   */
  arn: string | undefined;

  /**
   * <p>Specifies if deletion protection is turned on or off in your account. </p>
   */
  deletionProtected: boolean | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDeletionProtectionOutput {}

/**
 * @public
 */
export interface UpdateIncidentRecordInput {
  /**
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are updating.</p>
   */
  arn: string | undefined;

  /**
   * <p>A brief description of the incident.</p>
   */
  title?: string;

  /**
   * <p>A longer description of what occurred during the incident.</p>
   */
  summary?: string;

  /**
   * <p>Defines the impact of the incident to customers and applications. If you provide an impact
   *       for an incident, it overwrites the impact provided by the response plan.</p>
   *          <p class="title">
   *             <b>Possible impacts:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical impact, full application failure that impacts many to all
   *           customers. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High impact, partial application failure with impact to many
   *           customers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium impact, the application is providing reduced service to
   *           customers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low impact, customer aren't impacted by the problem yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No impact, customers aren't currently impacted but urgent action is
   *           needed to avoid impact.</p>
   *             </li>
   *          </ul>
   */
  impact?: number;

  /**
   * <p>The status of the incident. Possible statuses are <code>Open</code> or
   *         <code>Resolved</code>.</p>
   */
  status?: IncidentRecordStatus | string;

  /**
   * <p>The Chatbot chat channel where responders can collaborate.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The Amazon SNS targets that Incident Manager notifies when a client updates an
   *       incident.</p>
   *          <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the
   *       incident.</p>
   */
  notificationTargets?: NotificationTargetItem[];
}

/**
 * @public
 */
export interface UpdateIncidentRecordOutput {}

/**
 * @public
 */
export interface UpdateRelatedItemsInput {
  /**
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record that contains the related items that
   *       you update.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Details about the item that you are add to, or delete from, an incident.</p>
   */
  relatedItemsUpdate: RelatedItemsUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateRelatedItemsOutput {}

/**
 * @public
 * <p>Details used when updating the replication set.</p>
 */
export type UpdateReplicationSetAction =
  | UpdateReplicationSetAction.AddRegionActionMember
  | UpdateReplicationSetAction.DeleteRegionActionMember
  | UpdateReplicationSetAction.$UnknownMember;

/**
 * @public
 */
export namespace UpdateReplicationSetAction {
  /**
   * <p>Details about the Amazon Web Services Region that you're adding to the replication
   *       set.</p>
   */
  export interface AddRegionActionMember {
    addRegionAction: AddRegionAction;
    deleteRegionAction?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the Amazon Web Services Region that you're deleting to the replication
   *       set.</p>
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
}

/**
 * @public
 */
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
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateReplicationSetOutput {}

/**
 * @public
 */
export interface UpdateResponsePlanInput {
  /**
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   */
  arn: string | undefined;

  /**
   * <p>The long format name of the response plan. The display name can't contain spaces.</p>
   */
  displayName?: string;

  /**
   * <p>The short format name of the incident. The title can't contain spaces.</p>
   */
  incidentTemplateTitle?: string;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by
   *       a response plan.</p>
   *          <p class="title">
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
   *       currently happening, and next steps.</p>
   */
  incidentTemplateSummary?: string;

  /**
   * <p>The string Incident Manager uses to prevent duplicate incidents from being created by the same
   *       incident in the same account.</p>
   */
  incidentTemplateDedupeString?: string;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   */
  incidentTemplateNotificationTargets?: NotificationTargetItem[];

  /**
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   *          <p>Use the empty structure to remove the chat channel from the response plan.</p>
   */
  chatChannel?: ChatChannel;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   */
  engagements?: string[];

  /**
   * <p>The actions that this response plan takes at the beginning of an incident.</p>
   */
  actions?: Action[];

  /**
   * <p>Tags to assign to the template. When the <code>StartIncident</code> API action is called,
   *       Incident Manager assigns the tags specified in the template to the incident. To call this action,
   *       you must also have permission to call the <code>TagResource</code> API action for the incident
   *       record resource.</p>
   */
  incidentTemplateTags?: Record<string, string>;

  /**
   * <p>Information about third-party services integrated into the response plan.</p>
   */
  integrations?: Integration[];
}

/**
 * @public
 */
export interface UpdateResponsePlanOutput {}

/**
 * @public
 */
export interface UpdateTimelineEventInput {
  /**
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an
   *       event's ID.</p>
   */
  eventId: string | undefined;

  /**
   * <p>The time that the event occurred.</p>
   */
  eventTime?: Date;

  /**
   * <p>The type of event. You can update events of type <code>Custom Event</code>.</p>
   */
  eventType?: string;

  /**
   * <p>A short description of the event.</p>
   */
  eventData?: string;

  /**
   * <p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter
   *       its Amazon Resource Name (ARN). You can also specify a related item associated with that
   *       resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a
   *       resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with
   *       the DynamoDB table as a related item.</p>
   *          <important>
   *             <p>This update action overrides all existing references. If you want to keep existing
   *         references, you must specify them in the call. If you don't, this action removes any
   *         existing references and enters only new references.</p>
   *          </important>
   */
  eventReferences?: EventReference[];
}

/**
 * @public
 */
export interface UpdateTimelineEventOutput {}
