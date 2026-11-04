// smithy-typescript generated code
import type {
  IncidentRecordStatus,
  ItemType,
  RegionStatus,
  ReplicationSetStatus,
  SortOrder,
  SsmTargetAccount,
  TimelineEventSort,
  VariableType,
} from "./enums";

/**
 * The dynamic SSM parameter value.
 *
 * @public
 */
export type DynamicSsmParameterValue =
  | DynamicSsmParameterValue.VariableMember
  | DynamicSsmParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace DynamicSsmParameterValue {
  /**
   * Variable dynamic parameters. A parameter value is determined when an incident is created.
   *
   * @public
   */
  export interface VariableMember {
    variable: VariableType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    variable?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    variable: (value: VariableType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
 *
 * @public
 */
export interface SsmAutomation {
  /**
   * The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The automation document's name.
   *
   * @public
   */
  documentName: string | undefined;

  /**
   * The automation document's version to use when running.
   *
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * The account that the automation document will be run in. This can be in either the management account or an application account.
   *
   * @public
   */
  targetAccount?: SsmTargetAccount | undefined;

  /**
   * The key-value pair parameters to use when running the automation document.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;

  /**
   * The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
   *
   * @public
   */
  dynamicParameters?: Record<string, DynamicSsmParameterValue> | undefined;
}

/**
 * The action that starts at the beginning of an incident. The response plan defines the action.
 *
 * @public
 */
export type Action =
  | Action.SsmAutomationMember
  | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * The Systems Manager automation document to start as the runbook at the beginning of the incident.
   *
   * @public
   */
  export interface SsmAutomationMember {
    ssmAutomation: SsmAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ssmAutomation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ssmAutomation: (value: SsmAutomation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the Amazon Web Services Region and KMS key to add to the replication set.
 *
 * @public
 */
export interface AddRegionAction {
  /**
   * The Amazon Web Services Region name to add to the replication set.
   *
   * @public
   */
  regionName: string | undefined;

  /**
   * The KMS key ID to use to encrypt your replication set.
   *
   * @public
   */
  sseKmsKeyId?: string | undefined;
}

/**
 * Use the AttributeValueList to filter by string or integer values.
 *
 * @public
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
   * The list of string values that the filter matches.
   *
   * @public
   */
  export interface StringValuesMember {
    stringValues: string[];
    integerValues?: never;
    $unknown?: never;
  }

  /**
   * The list of integer values that the filter matches.
   *
   * @public
   */
  export interface IntegerValuesMember {
    stringValues?: never;
    integerValues: number[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValues?: never;
    integerValues?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValues: (value: string[]) => T;
    integerValues: (value: number[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Systems Manager automation document process to start as the runbook at the beginning of the incident.
 *
 * @public
 */
export type AutomationExecution =
  | AutomationExecution.SsmExecutionArnMember
  | AutomationExecution.$UnknownMember;

/**
 * @public
 */
export namespace AutomationExecution {
  /**
   * The Amazon Resource Name (ARN) of the automation process.
   *
   * @public
   */
  export interface SsmExecutionArnMember {
    ssmExecutionArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ssmExecutionArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ssmExecutionArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface BatchGetIncidentFindingsInput {
  /**
   * The Amazon Resource Name (ARN) of the incident for which you want to view finding details.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * A list of IDs of findings for which you want to view details.
   *
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * Details about an error returned for a BatchGetIncidentFindings operation.
 *
 * @public
 */
export interface BatchGetIncidentFindingsError {
  /**
   * The ID of a specified finding for which an error was returned for a `BatchGetIncidentFindings` operation.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The code associated with an error that was returned for a `BatchGetIncidentFindings` operation.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The description for an error that was returned for a `BatchGetIncidentFindings` operation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Information about an CloudFormation stack creation or update that occurred around the time of an incident and could be a potential cause of the incident.
 *
 * @public
 */
export interface CloudFormationStackUpdate {
  /**
   * The timestamp for when the CloudFormation stack creation or update began.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp for when the CloudFormation stack creation or update ended. Not reported for deployments that are still in progress.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudFormation stack involved in the update.
   *
   * @public
   */
  stackArn: string | undefined;
}

/**
 * Information about a CodeDeploy deployment that occurred around the time of an incident and could be a possible cause of the incident.
 *
 * @public
 */
export interface CodeDeployDeployment {
  /**
   * The timestamp for when the CodeDeploy deployment began.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp for when the CodeDeploy deployment ended. Not reported for deployments that are still in progress.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CodeDeploy deployment group associated with the deployment.
   *
   * @public
   */
  deploymentGroupArn: string | undefined;

  /**
   * The ID of the CodeDeploy deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * Extended textual information about the finding.
 *
 * @public
 */
export type FindingDetails =
  | FindingDetails.CloudFormationStackUpdateMember
  | FindingDetails.CodeDeployDeploymentMember
  | FindingDetails.$UnknownMember;

/**
 * @public
 */
export namespace FindingDetails {
  /**
   * Information about the CodeDeploy deployment associated with the finding.
   *
   * @public
   */
  export interface CodeDeployDeploymentMember {
    codeDeployDeployment: CodeDeployDeployment;
    cloudFormationStackUpdate?: never;
    $unknown?: never;
  }

  /**
   * Information about the CloudFormation stack creation or update associated with the finding.
   *
   * @public
   */
  export interface CloudFormationStackUpdateMember {
    codeDeployDeployment?: never;
    cloudFormationStackUpdate: CloudFormationStackUpdate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    codeDeployDeployment?: never;
    cloudFormationStackUpdate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    codeDeployDeployment: (value: CodeDeployDeployment) => T;
    cloudFormationStackUpdate: (value: CloudFormationStackUpdate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about a specific CodeDeploy deployment or CloudFormation stack creation or update that occurred around the time of a reported incident. These activities can be investigated as a potential cause of the incident.
 *
 * @public
 */
export interface Finding {
  /**
   * The ID assigned to the finding.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The timestamp for when a finding was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The timestamp for when the finding was most recently updated with additional information.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Details about the finding.
   *
   * @public
   */
  details?: FindingDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetIncidentFindingsOutput {
  /**
   * Information about the requested findings.
   *
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * A list of errors encountered during the operation.
   *
   * @public
   */
  errors: BatchGetIncidentFindingsError[] | undefined;
}

/**
 * Used to remove the chat channel from an incident record or response plan.
 *
 * @public
 */
export interface EmptyChatChannel {}

/**
 * The Chatbot chat channel used for collaboration during an incident.
 *
 * @public
 */
export type ChatChannel =
  | ChatChannel.ChatbotSnsMember
  | ChatChannel.EmptyMember
  | ChatChannel.$UnknownMember;

/**
 * @public
 */
export namespace ChatChannel {
  /**
   * Used to remove the chat channel from an incident record or response plan.
   *
   * @public
   */
  export interface EmptyMember {
    empty: EmptyChatChannel;
    chatbotSns?: never;
    $unknown?: never;
  }

  /**
   * The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics.
   *
   * @public
   */
  export interface ChatbotSnsMember {
    empty?: never;
    chatbotSns: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    empty?: never;
    chatbotSns?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    empty: (value: EmptyChatChannel) => T;
    chatbotSns: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an `AND`ed statement. If multiple values are specified for a conditional, the values are `OR`d.
 *
 * @public
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
   * Before the specified timestamp
   *
   * @public
   */
  export interface BeforeMember {
    before: Date;
    after?: never;
    equals?: never;
    $unknown?: never;
  }

  /**
   * After the specified timestamp.
   *
   * @public
   */
  export interface AfterMember {
    before?: never;
    after: Date;
    equals?: never;
    $unknown?: never;
  }

  /**
   * The value is equal to the provided string or integer.
   *
   * @public
   */
  export interface EqualsMember {
    before?: never;
    after?: never;
    equals: AttributeValueList;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    before?: never;
    after?: never;
    equals?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    before: (value: Date) => T;
    after: (value: Date) => T;
    equals: (value: AttributeValueList) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The mapping between a Amazon Web Services Region and the key that's used to encrypt the data.
 *
 * @public
 */
export interface RegionMapInputValue {
  /**
   * The KMS key used to encrypt the data in your replication set.
   *
   * @public
   */
  sseKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSetInput {
  /**
   * The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.
   *
   * @public
   */
  regions: Record<string, RegionMapInputValue> | undefined;

  /**
   * A token that ensures that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of tags to add to the replication set.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSetOutput {
  /**
   * The Amazon Resource Name (ARN) of the replication set.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The SNS targets that are notified when updates are made to an incident.
 *
 * @public
 */
export type NotificationTargetItem =
  | NotificationTargetItem.SnsTopicArnMember
  | NotificationTargetItem.$UnknownMember;

/**
 * @public
 */
export namespace NotificationTargetItem {
  /**
   * The Amazon Resource Name (ARN) of the SNS topic.
   *
   * @public
   */
  export interface SnsTopicArnMember {
    snsTopicArn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    snsTopicArn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    snsTopicArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
 *
 * @public
 */
export interface IncidentTemplate {
  /**
   * The title of the incident.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The impact of the incident on your customers and applications.
   *
   * **Supported impact codes**
   *
   * - `1` - Critical
   * - `2` - High
   * - `3` - Medium
   * - `4` - Low
   * - `5` - No Impact
   *
   * @public
   */
  impact: number | undefined;

  /**
   * The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The string Incident Manager uses to prevent the same root cause from creating multiple incidents in the same account.
   *
   * A deduplication string is a term or phrase the system uses to check for duplicate incidents. If you specify a deduplication string, Incident Manager searches for open incidents that contain the same string in the `dedupeString` field when it creates the incident. If a duplicate is detected, Incident Manager deduplicates the newer incident into the existing incident.
   *
   * > **Note:** By default, Incident Manager automatically deduplicates multiple incidents created by the same Amazon CloudWatch alarm or Amazon EventBridge event. You don't have to enter your own deduplication string to prevent duplication for these resource types.
   *
   * @public
   */
  dedupeString?: string | undefined;

  /**
   * The Amazon SNS targets that are notified when updates are made to an incident.
   *
   * @public
   */
  notificationTargets?: NotificationTargetItem[] | undefined;

  /**
   * Tags to assign to the template. When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident.
   *
   * @public
   */
  incidentTags?: Record<string, string> | undefined;
}

/**
 * Details about the PagerDuty service where the response plan creates an incident.
 *
 * @public
 */
export interface PagerDutyIncidentConfiguration {
  /**
   * The ID of the PagerDuty service that the response plan associates with an incident when it launches.
   *
   * @public
   */
  serviceId: string | undefined;
}

/**
 * Details about the PagerDuty configuration for a response plan.
 *
 * @public
 */
export interface PagerDutyConfiguration {
  /**
   * The name of the PagerDuty configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
   *
   * @public
   */
  secretId: string | undefined;

  /**
   * Details about the PagerDuty service associated with the configuration.
   *
   * @public
   */
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration | undefined;
}

/**
 * Information about third-party services integrated into a response plan.
 *
 * @public
 */
export type Integration =
  | Integration.PagerDutyConfigurationMember
  | Integration.$UnknownMember;

/**
 * @public
 */
export namespace Integration {
  /**
   * Information about the PagerDuty service where the response plan creates an incident.
   *
   * @public
   */
  export interface PagerDutyConfigurationMember {
    pagerDutyConfiguration: PagerDutyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    pagerDutyConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    pagerDutyConfiguration: (value: PagerDutyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateResponsePlanInput {
  /**
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The short format name of the response plan. Can't include spaces.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The long format of the response plan name. This field can contain spaces.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Details used to create an incident when using this response plan.
   *
   * @public
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * The Chatbot chat channel used for collaboration during an incident.
   *
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
   *
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * The actions that the response plan starts at the beginning of an incident.
   *
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * A list of tags that you are adding to the response plan.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Information about third-party services integrated into the response plan.
   *
   * @public
   */
  integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface CreateResponsePlanOutput {
  /**
   * The Amazon Resource Name (ARN) of the response plan.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * An item referenced in a `TimelineEvent` that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a `RelatedItem` ID.
 *
 * @public
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
   * The Amazon Resource Name (ARN) of an Amazon Web Services resource referenced in a `TimelineEvent`.
   *
   * @public
   */
  export interface ResourceMember {
    resource: string;
    relatedItemId?: never;
    $unknown?: never;
  }

  /**
   * The ID of a `RelatedItem` referenced in a `TimelineEvent`.
   *
   * @public
   */
  export interface RelatedItemIdMember {
    resource?: never;
    relatedItemId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resource?: never;
    relatedItemId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resource: (value: string) => T;
    relatedItemId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateTimelineEventInput {
  /**
   * A token that ensures that a client calls the action only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The timestamp for when the event occurred.
   *
   * @public
   */
  eventTime: Date | undefined;

  /**
   * The type of event. You can create timeline events of type `Custom Event` and `Note`.
   *
   * To make a Note-type event appear on the *Incident notes* panel in the console, specify `eventType` as `Note`and enter the Amazon Resource Name (ARN) of the incident as the value for `eventReference`.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * A short description of the event.
   *
   * @public
   */
  eventData: string | undefined;

  /**
   * Adds one or more references to the `TimelineEvent`. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.
   *
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface CreateTimelineEventOutput {
  /**
   * The ARN of the incident record that you added the event to.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The ID of the event for easy reference later.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIncidentRecordInput {
  /**
   * The Amazon Resource Name (ARN) of the incident record you are deleting.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIncidentRecordOutput {}

/**
 * Defines the information about the Amazon Web Services Region you're deleting from your replication set.
 *
 * @public
 */
export interface DeleteRegionAction {
  /**
   * The name of the Amazon Web Services Region you're deleting from the replication set.
   *
   * @public
   */
  regionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSetInput {
  /**
   * The Amazon Resource Name (ARN) of the replication set you're deleting.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource you're deleting the policy from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ID of the resource policy you're deleting.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the response plan.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The ID of the event to update. You can use `ListTimelineEvents` to find an event's ID.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTimelineEventOutput {}

/**
 * Details about a timeline event during an incident.
 *
 * @public
 */
export interface EventSummary {
  /**
   * The Amazon Resource Name (ARN) of the incident that the event happened during.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The timeline event ID.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp for when the event occurred.
   *
   * @public
   */
  eventTime: Date | undefined;

  /**
   * The timestamp for when the timeline event was last updated.
   *
   * @public
   */
  eventUpdatedTime: Date | undefined;

  /**
   * The type of event. The timeline event must be `Custom Event` or `Note`.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * A list of references in a `TimelineEvent`.
   *
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * Filter the selection by using a condition.
 *
 * @public
 */
export interface Filter {
  /**
   * The key that you're filtering on.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The condition accepts before or after a specified time, equal to a string, or equal to an integer.
   *
   * @public
   */
  condition: Condition | undefined;
}

/**
 * Identifying information about the finding.
 *
 * @public
 */
export interface FindingSummary {
  /**
   * The ID of the finding.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The timestamp for when the finding was last updated.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface GetIncidentRecordInput {
  /**
   * The Amazon Resource Name (ARN) of the incident record.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Details about what created the incident record and when it was created.
 *
 * @public
 */
export interface IncidentRecordSource {
  /**
   * The principal that started the incident.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The service principal that assumed the role specified in `createdBy`. If no service principal assumed the role this will be left blank.
   *
   * @public
   */
  invokedBy?: string | undefined;

  /**
   * The resource that caused the incident to be created.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The service that started the incident. This can be manually created from Incident Manager, automatically created using an Amazon CloudWatch alarm, or Amazon EventBridge event.
   *
   * @public
   */
  source: string | undefined;
}

/**
 * The record of the incident that's created when an incident occurs.
 *
 * @public
 */
export interface IncidentRecord {
  /**
   * The Amazon Resource Name (ARN) of the incident record.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The title of the incident.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context of the incident.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * The current status of the incident.
   *
   * @public
   */
  status: IncidentRecordStatus | undefined;

  /**
   * The impact of the incident on customers and applications.
   *
   * **Supported impact codes**
   *
   * - `1` - Critical
   * - `2` - High
   * - `3` - Medium
   * - `4` - Low
   * - `5` - No Impact
   *
   * @public
   */
  impact: number | undefined;

  /**
   * The timestamp for when Incident Manager created the incident record.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The timestamp for when the incident was resolved. This appears as a timeline event.
   *
   * @public
   */
  resolvedTime?: Date | undefined;

  /**
   * The timestamp for when the incident was most recently modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Who modified the incident most recently.
   *
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * The runbook, or automation document, that's run at the beginning of the incident.
   *
   * @public
   */
  automationExecutions?: AutomationExecution[] | undefined;

  /**
   * Details about the action that started the incident.
   *
   * @public
   */
  incidentRecordSource: IncidentRecordSource | undefined;

  /**
   * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
   *
   * @public
   */
  dedupeString: string | undefined;

  /**
   * The chat channel used for collaboration during an incident.
   *
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * The Amazon SNS targets that are notified when updates are made to an incident.
   *
   * @public
   */
  notificationTargets?: NotificationTargetItem[] | undefined;
}

/**
 * @public
 */
export interface GetIncidentRecordOutput {
  /**
   * Details the structure of the incident record.
   *
   * @public
   */
  incidentRecord: IncidentRecord | undefined;
}

/**
 * @public
 */
export interface GetReplicationSetInput {
  /**
   * The Amazon Resource Name (ARN) of the replication set you want to retrieve.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Information about a Amazon Web Services Region in your replication set.
 *
 * @public
 */
export interface RegionInfo {
  /**
   * The ID of the KMS key used to encrypt the data in this Amazon Web Services Region.
   *
   * @public
   */
  sseKmsKeyId?: string | undefined;

  /**
   * The status of the Amazon Web Services Region in the replication set.
   *
   * @public
   */
  status: RegionStatus | undefined;

  /**
   * Information displayed about the status of the Amazon Web Services Region.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp for when Incident Manager updated the status of the Amazon Web Services Region.
   *
   * @public
   */
  statusUpdateDateTime: Date | undefined;
}

/**
 * The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.
 *
 * @public
 */
export interface ReplicationSet {
  /**
   * The Amazon Resource Name (ARN) of the replication set.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.
   *
   * @public
   */
  regionMap: Record<string, RegionInfo> | undefined;

  /**
   * The status of the replication set. If the replication set is still pending, you can't use Incident Manager functionality.
   *
   * @public
   */
  status: ReplicationSetStatus | undefined;

  /**
   * Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Amazon Web Services Region in the replication set.
   *
   * @public
   */
  deletionProtected: boolean | undefined;

  /**
   * When the replication set was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * Details about who created the replication set.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * When the replication set was last updated.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Who last modified the replication set.
   *
   * @public
   */
  lastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface GetReplicationSetOutput {
  /**
   * Details of the replication set.
   *
   * @public
   */
  replicationSet: ReplicationSet | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesInput {
  /**
   * The Amazon Resource Name (ARN) of the response plan with the attached resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The maximum number of resource policies to display for each page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The resource policy that allows Incident Manager to perform actions on resources on your behalf.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The JSON blob that describes the policy.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * The ID of the resource policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The Amazon Web Services Region that policy allows resources to be used in.
   *
   * @public
   */
  ramResourceShareRegion: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesOutput {
  /**
   * Details about the resource policy attached to the response plan.
   *
   * @public
   */
  resourcePolicies: ResourcePolicy[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResponsePlanInput {
  /**
   * The Amazon Resource Name (ARN) of the response plan.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetResponsePlanOutput {
  /**
   * The ARN of the response plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The short format name of the response plan. The name can't contain spaces.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The long format name of the response plan. Can contain spaces.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Details used to create the incident when using this response plan.
   *
   * @public
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * The Chatbot chat channel used for collaboration during an incident.
   *
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
   *
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * The actions that this response plan takes at the beginning of the incident.
   *
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * Information about third-party services integrated into the Incident Manager response plan.
   *
   * @public
   */
  integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface GetTimelineEventInput {
  /**
   * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The ID of the event. You can get an event's ID when you create it, or by using `ListTimelineEvents`.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * A significant event that happened during the incident.
 *
 * @public
 */
export interface TimelineEvent {
  /**
   * The Amazon Resource Name (ARN) of the incident that the event occurred during.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The ID of the timeline event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp for when the event occurred.
   *
   * @public
   */
  eventTime: Date | undefined;

  /**
   * The timestamp for when the timeline event was last updated.
   *
   * @public
   */
  eventUpdatedTime: Date | undefined;

  /**
   * The type of event that occurred. Currently Incident Manager supports only the `Custom Event` and `Note` types.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * A short description of the event.
   *
   * @public
   */
  eventData: string | undefined;

  /**
   * A list of references in a `TimelineEvent`.
   *
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface GetTimelineEventOutput {
  /**
   * Details about the timeline event.
   *
   * @public
   */
  event: TimelineEvent | undefined;
}

/**
 * Details describing an incident record.
 *
 * @public
 */
export interface IncidentRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the incident.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The title of the incident. This value is either provided by the response plan or overwritten on creation.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The current status of the incident.
   *
   * @public
   */
  status: IncidentRecordStatus | undefined;

  /**
   * Defines the impact to customers and applications.
   *
   * @public
   */
  impact: number | undefined;

  /**
   * The timestamp for when the incident was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The timestamp for when the incident was resolved.
   *
   * @public
   */
  resolvedTime?: Date | undefined;

  /**
   * What caused Incident Manager to create the incident.
   *
   * @public
   */
  incidentRecordSource: IncidentRecordSource | undefined;
}

/**
 * Details about the PagerDuty incident associated with an incident created by an Incident Manager response plan.
 *
 * @public
 */
export interface PagerDutyIncidentDetail {
  /**
   * The ID of the incident associated with the PagerDuty service for the response plan.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Indicates whether to resolve the PagerDuty incident when you resolve the associated Incident Manager incident.
   *
   * @public
   */
  autoResolve?: boolean | undefined;

  /**
   * The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
   *
   * @public
   */
  secretId?: string | undefined;
}

/**
 * Describes a related item.
 *
 * @public
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
   * The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon resource.
   *
   * @public
   */
  export interface ArnMember {
    arn: string;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * The URL, if the related item is a non-Amazon Web Services resource.
   *
   * @public
   */
  export interface UrlMember {
    arn?: never;
    url: string;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * The metric definition, if the related item is a metric in Amazon CloudWatch.
   *
   * @public
   */
  export interface MetricDefinitionMember {
    arn?: never;
    url?: never;
    metricDefinition: string;
    pagerDutyIncidentDetail?: never;
    $unknown?: never;
  }

  /**
   * Details about an incident that is associated with a PagerDuty incident.
   *
   * @public
   */
  export interface PagerDutyIncidentDetailMember {
    arn?: never;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail: PagerDutyIncidentDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    arn?: never;
    url?: never;
    metricDefinition?: never;
    pagerDutyIncidentDetail?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    arn: (value: string) => T;
    url: (value: string) => T;
    metricDefinition: (value: string) => T;
    pagerDutyIncidentDetail: (value: PagerDutyIncidentDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details and type of a related item.
 *
 * @public
 */
export interface ItemIdentifier {
  /**
   * Details about the related item.
   *
   * @public
   */
  value: ItemValue | undefined;

  /**
   * The type of related item.
   *
   * @public
   */
  type: ItemType | undefined;
}

/**
 * @public
 */
export interface ListIncidentFindingsInput {
  /**
   * The Amazon Resource Name (ARN) of the incident for which you want to view associated findings.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The maximum number of findings to retrieve per call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncidentFindingsOutput {
  /**
   * A list of findings that represent deployments that might be the potential cause of the incident.
   *
   * @public
   */
  findings: FindingSummary[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncidentRecordsInput {
  /**
   * Filters the list of incident records you want to search through. You can filter on the following keys:
   *
   * - `creationTime`
   * - `impact`
   * - `status`
   * - `createdBy`
   *
   * Note the following when when you use Filters:
   *
   * - If you don't specify a Filter, the response includes all incident records.
   * - If you specify more than one filter in a single request, the response returns incident records that match all filters.
   * - If you specify a filter with more than one value, the response returns incident records that match any of the values provided.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of results per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncidentRecordsOutput {
  /**
   * The details of each listed incident record.
   *
   * @public
   */
  incidentRecordSummaries: IncidentRecordSummary[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRelatedItemsInput {
  /**
   * The Amazon Resource Name (ARN) of the incident record containing the listed related items.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The maximum number of related items per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Resources that responders use to triage and mitigate the incident.
 *
 * @public
 */
export interface RelatedItem {
  /**
   * Details about the related item.
   *
   * @public
   */
  identifier: ItemIdentifier | undefined;

  /**
   * The title of the related item.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A unique ID for a `RelatedItem`.
   *
   * > **Important:** Don't specify this parameter when you add a `RelatedItem` by using the UpdateRelatedItems API action.
   *
   * @public
   */
  generatedId?: string | undefined;
}

/**
 * @public
 */
export interface ListRelatedItemsOutput {
  /**
   * Details about each related item.
   *
   * @public
   */
  relatedItems: RelatedItem[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationSetsInput {
  /**
   * The maximum number of results per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationSetsOutput {
  /**
   * The Amazon Resource Name (ARN) of the list replication set.
   *
   * @public
   */
  replicationSetArns: string[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponsePlansInput {
  /**
   * The maximum number of response plans per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details of the response plan that are used when creating an incident.
 *
 * @public
 */
export interface ResponsePlanSummary {
  /**
   * The Amazon Resource Name (ARN) of the response plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the response plan. This can't include spaces.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The human readable name of the response plan. This can include spaces.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListResponsePlansOutput {
  /**
   * Details of each response plan.
   *
   * @public
   */
  responsePlanSummaries: ResponsePlanSummary[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the response plan or incident.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags for the response plan or incident.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTimelineEventsInput {
  /**
   * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:
   *
   * - `eventReference`
   * - `eventTime`
   * - `eventType`
   *
   * Note the following when deciding how to use Filters:
   *
   * - If you don't specify a Filter, the response includes all timeline events.
   * - If you specify more than one filter in a single request, the response returns timeline events that match all filters.
   * - If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * Sort timeline events by the specified key value pair.
   *
   * @public
   */
  sortBy?: TimelineEventSort | undefined;

  /**
   * Sorts the order of timeline events by the value specified in the `sortBy` field.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The maximum number of results per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTimelineEventsOutput {
  /**
   * Details about each event that occurred during the incident.
   *
   * @public
   */
  eventSummaries: EventSummary[] | undefined;

  /**
   * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the response plan to add the resource policy to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Details of the resource policy.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * The ID of the resource policy.
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * Details about the related item you're adding.
 *
 * @public
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
   * Details about the related item you're adding.
   *
   * @public
   */
  export interface ItemToAddMember {
    itemToAdd: RelatedItem;
    itemToRemove?: never;
    $unknown?: never;
  }

  /**
   * Details about the related item you're deleting.
   *
   * @public
   */
  export interface ItemToRemoveMember {
    itemToAdd?: never;
    itemToRemove: ItemIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    itemToAdd?: never;
    itemToRemove?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    itemToAdd: (value: RelatedItem) => T;
    itemToRemove: (value: ItemIdentifier) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about what caused the incident to be created in Incident Manager.
 *
 * @public
 */
export interface TriggerDetails {
  /**
   * Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "`aws.`" Customer-generated events can have any value here, as long as it doesn't begin with "`aws.`" We recommend the use of Java package-name style reverse domain-name strings.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source that detected the incident.
   *
   * @public
   */
  triggerArn?: string | undefined;

  /**
   * The timestamp for when the incident was detected.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.
   *
   * @public
   */
  rawData?: string | undefined;
}

/**
 * @public
 */
export interface StartIncidentInput {
  /**
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident.
   *
   * @public
   */
  responsePlanArn: string | undefined;

  /**
   * Provide a title for the incident. Providing a title overwrites the title provided by the response plan.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.
   *
   * **Supported impact codes**
   *
   * - `1` - Critical
   * - `2` - High
   * - `3` - Medium
   * - `4` - Low
   * - `5` - No Impact
   *
   * @public
   */
  impact?: number | undefined;

  /**
   * Details of what created the incident record in Incident Manager.
   *
   * @public
   */
  triggerDetails?: TriggerDetails | undefined;

  /**
   * Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket.
   *
   * @public
   */
  relatedItems?: RelatedItem[] | undefined;
}

/**
 * @public
 */
export interface StartIncidentOutput {
  /**
   * The ARN of the newly created incident record.
   *
   * @public
   */
  incidentRecordArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the response plan you're adding the tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tags to add to the response plan.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the response plan you're removing a tag from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The name of the tag to remove from the response plan.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the replication set to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Specifies if deletion protection is turned on or off in your account.
   *
   * @public
   */
  deletionProtected: boolean | undefined;

  /**
   * A token that ensures that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * A token that ensures that a client calls the operation only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the incident record you are updating.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A brief description of the incident.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A longer description of what occurred during the incident.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.
   *
   * **Supported impact codes**
   *
   * - `1` - Critical
   * - `2` - High
   * - `3` - Medium
   * - `4` - Low
   * - `5` - No Impact
   *
   * @public
   */
  impact?: number | undefined;

  /**
   * The status of the incident. Possible statuses are `Open` or `Resolved`.
   *
   * @public
   */
  status?: IncidentRecordStatus | undefined;

  /**
   * The Chatbot chat channel where responders can collaborate.
   *
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * The Amazon SNS targets that Incident Manager notifies when a client updates an incident.
   *
   * Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.
   *
   * @public
   */
  notificationTargets?: NotificationTargetItem[] | undefined;
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
   * A token that ensures that a client calls the operation only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * Details about the item that you are add to, or delete from, an incident.
   *
   * @public
   */
  relatedItemsUpdate: RelatedItemsUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateRelatedItemsOutput {}

/**
 * Details used when updating the replication set.
 *
 * @public
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
   * Details about the Amazon Web Services Region that you're adding to the replication set.
   *
   * @public
   */
  export interface AddRegionActionMember {
    addRegionAction: AddRegionAction;
    deleteRegionAction?: never;
    $unknown?: never;
  }

  /**
   * Details about the Amazon Web Services Region that you're deleting to the replication set.
   *
   * @public
   */
  export interface DeleteRegionActionMember {
    addRegionAction?: never;
    deleteRegionAction: DeleteRegionAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    addRegionAction?: never;
    deleteRegionAction?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    addRegionAction: (value: AddRegionAction) => T;
    deleteRegionAction: (value: DeleteRegionAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateReplicationSetInput {
  /**
   * The Amazon Resource Name (ARN) of the replication set you're updating.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * An action to add or delete a Region.
   *
   * @public
   */
  actions: UpdateReplicationSetAction[] | undefined;

  /**
   * A token that ensures that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the response plan.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The long format name of the response plan. The display name can't contain spaces.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The short format name of the incident. The title can't contain spaces.
   *
   * @public
   */
  incidentTemplateTitle?: string | undefined;

  /**
   * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.
   *
   * **Supported impact codes**
   *
   * - `1` - Critical
   * - `2` - High
   * - `3` - Medium
   * - `4` - Low
   * - `5` - No Impact
   *
   * @public
   */
  incidentTemplateImpact?: number | undefined;

  /**
   * A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.
   *
   * @public
   */
  incidentTemplateSummary?: string | undefined;

  /**
   * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
   *
   * @public
   */
  incidentTemplateDedupeString?: string | undefined;

  /**
   * The Amazon SNS targets that are notified when updates are made to an incident.
   *
   * @public
   */
  incidentTemplateNotificationTargets?: NotificationTargetItem[] | undefined;

  /**
   * The Chatbot chat channel used for collaboration during an incident.
   *
   * Use the empty structure to remove the chat channel from the response plan.
   *
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
   *
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * The actions that this response plan takes at the beginning of an incident.
   *
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * Tags to assign to the template. When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the `TagResource` API action for the incident record resource.
   *
   * @public
   */
  incidentTemplateTags?: Record<string, string> | undefined;

  /**
   * Information about third-party services integrated into the response plan.
   *
   * @public
   */
  integrations?: Integration[] | undefined;
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
   * A token that ensures that a client calls the operation only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
   *
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * The ID of the event to update. You can use `ListTimelineEvents` to find an event's ID.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp for when the event occurred.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * The type of event. You can update events of type `Custom Event` and `Note`.
   *
   * @public
   */
  eventType?: string | undefined;

  /**
   * A short description of the event.
   *
   * @public
   */
  eventData?: string | undefined;

  /**
   * Updates all existing references in a `TimelineEvent`. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.
   *
   * > **Important:** This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.
   *
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface UpdateTimelineEventOutput {}
