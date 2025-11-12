// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SSMIncidentsServiceException as __BaseException } from "./SSMIncidentsServiceException";

/**
 * <p>You don't have sufficient access to perform this operation.</p>
 * @public
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
 * <p>The dynamic SSM parameter value.</p>
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
   * <p>Variable dynamic parameters. A parameter value is determined when an incident is
   *       created.</p>
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
 * <p>Details about the Systems Manager automation document that will be used as a runbook
 *       during an incident.</p>
 * @public
 */
export interface SsmAutomation {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that the automation document will assume when
   *       running commands.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The automation document's name.</p>
   * @public
   */
  documentName: string | undefined;

  /**
   * <p>The automation document's version to use when running.</p>
   * @public
   */
  documentVersion?: string | undefined;

  /**
   * <p>The account that the automation document will be run in. This can be in either the
   *       management account or an application account.</p>
   * @public
   */
  targetAccount?: SsmTargetAccount | undefined;

  /**
   * <p>The key-value pair parameters to use when running the automation document.</p>
   * @public
   */
  parameters?: Record<string, string[]> | undefined;

  /**
   * <p>The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation
   *       runbook.</p>
   * @public
   */
  dynamicParameters?: Record<string, DynamicSsmParameterValue> | undefined;
}

/**
 * <p>The action that starts at the beginning of an incident. The response plan defines the
 *       action.</p>
 * @public
 */
export type Action = Action.SsmAutomationMember | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * <p>The Systems Manager automation document to start as the runbook at the beginning of the
   *       incident.</p>
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
 * <p>Defines the Amazon Web Services Region and KMS key to add to the replication
 *       set. </p>
 * @public
 */
export interface AddRegionAction {
  /**
   * <p>The Amazon Web Services Region name to add to the replication set.</p>
   * @public
   */
  regionName: string | undefined;

  /**
   * <p>The KMS key ID to use to encrypt your replication set.</p>
   * @public
   */
  sseKmsKeyId?: string | undefined;
}

/**
 * <p>Use the AttributeValueList to filter by string or integer values.</p>
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
   * <p>The list of string values that the filter matches.</p>
   * @public
   */
  export interface StringValuesMember {
    stringValues: string[];
    integerValues?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of integer values that the filter matches.</p>
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
 * <p>The Systems Manager automation document process to start as the runbook at the
 *       beginning of the incident.</p>
 * @public
 */
export type AutomationExecution = AutomationExecution.SsmExecutionArnMember | AutomationExecution.$UnknownMember;

/**
 * @public
 */
export namespace AutomationExecution {
  /**
   * <p>The Amazon Resource Name (ARN) of the automation process.</p>
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
   * <p>The Amazon Resource Name (ARN) of the incident for which you want to view finding
   *       details.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>A list of IDs of findings for which you want to view details.</p>
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * <p>Details about an error returned for a <a>BatchGetIncidentFindings</a>
 *       operation.</p>
 * @public
 */
export interface BatchGetIncidentFindingsError {
  /**
   * <p>The ID of a specified finding for which an error was returned for a
   *         <code>BatchGetIncidentFindings</code> operation.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The code associated with an error that was returned for a
   *         <code>BatchGetIncidentFindings</code> operation.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The description for an error that was returned for a <code>BatchGetIncidentFindings</code>
   *       operation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Information about an CloudFormation stack creation or update that occurred around
 *       the time of an incident and could be a potential cause of the incident.</p>
 * @public
 */
export interface CloudFormationStackUpdate {
  /**
   * <p>The timestamp for when the CloudFormation stack creation or update began.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp for when the CloudFormation stack creation or update ended. Not reported
   *       for deployments that are still in progress.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFormation stack involved in the
   *       update.</p>
   * @public
   */
  stackArn: string | undefined;
}

/**
 * <p>Information about a CodeDeploy deployment that occurred around the time of an
 *       incident and could be a possible cause of the incident.</p>
 * @public
 */
export interface CodeDeployDeployment {
  /**
   * <p>The timestamp for when the CodeDeploy deployment began.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp for when the CodeDeploy deployment ended. Not reported for
   *       deployments that are still in progress.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CodeDeploy deployment group associated with
   *       the deployment.</p>
   * @public
   */
  deploymentGroupArn: string | undefined;

  /**
   * <p>The ID of the CodeDeploy deployment.</p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * <p>Extended textual information about the finding.</p>
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
   * <p>Information about the CodeDeploy deployment associated with the finding.</p>
   * @public
   */
  export interface CodeDeployDeploymentMember {
    codeDeployDeployment: CodeDeployDeployment;
    cloudFormationStackUpdate?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the CloudFormation stack creation or update associated with the
   *       finding.</p>
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
 * <p>Information about a specific CodeDeploy deployment or CloudFormation
 *       stack creation or update that occurred around the time of a reported incident. These
 *       activities can be investigated as a potential cause of the incident.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ID assigned to the finding.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The timestamp for when a finding was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp for when the finding was most recently updated with additional
   *       information.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Details about the finding.</p>
   * @public
   */
  details?: FindingDetails | undefined;
}

/**
 * @public
 */
export interface BatchGetIncidentFindingsOutput {
  /**
   * <p>Information about the requested findings.</p>
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * <p>A list of errors encountered during the operation.</p>
   * @public
   */
  errors: BatchGetIncidentFindingsError[] | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 * @public
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
 * <p>Request references a resource which doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * The identifier for the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * Originating service code
   * @public
   */
  serviceCode: ServiceCode | undefined;

  /**
   * Originating quota code
   * @public
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 * @public
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
 * <p>Used to remove the chat channel from an incident record or response plan.</p>
 * @public
 */
export interface EmptyChatChannel {}

/**
 * <p>The Chatbot chat channel used for collaboration during an incident.</p>
 * @public
 */
export type ChatChannel = ChatChannel.ChatbotSnsMember | ChatChannel.EmptyMember | ChatChannel.$UnknownMember;

/**
 * @public
 */
export namespace ChatChannel {
  /**
   * <p>Used to remove the chat channel from an incident record or response plan.</p>
   * @public
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
 * <p>A conditional statement with which to compare a value, after a timestamp, before a
 *       timestamp, or equal to a string or integer. If multiple conditions are specified, the
 *       conditionals become an <code>AND</code>ed statement. If multiple values are specified for a
 *       conditional, the values are <code>OR</code>d.</p>
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
   * <p>Before the specified timestamp</p>
   * @public
   */
  export interface BeforeMember {
    before: Date;
    after?: never;
    equals?: never;
    $unknown?: never;
  }

  /**
   * <p>After the specified timestamp.</p>
   * @public
   */
  export interface AfterMember {
    before?: never;
    after: Date;
    equals?: never;
    $unknown?: never;
  }

  /**
   * <p>The value is equal to the provided string or integer. </p>
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
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * The identifier of the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * If present in the output, the operation can be retried after this time
   * @public
   */
  retryAfter?: Date | undefined;

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
 * <p>The mapping between a Amazon Web Services Region and the key that's used to encrypt the
 *       data.</p>
 * @public
 */
export interface RegionMapInputValue {
  /**
   * <p>The KMS key used to encrypt the data in your replication set.</p>
   * @public
   */
  sseKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSetInput {
  /**
   * <p>The Regions that Incident Manager replicates your data to. You can have up to three Regions in
   *       your replication set.</p>
   * @public
   */
  regions: Record<string, RegionMapInputValue> | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of tags to add to the replication set.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateReplicationSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * The identifier for the requested resource
   * @public
   */
  resourceIdentifier?: string | undefined;

  /**
   * The resource type
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * Originating service code
   * @public
   */
  serviceCode: ServiceCode | undefined;

  /**
   * Originating quota code
   * @public
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
 * <p>The SNS targets that are notified when updates are made to an incident.</p>
 * @public
 */
export type NotificationTargetItem = NotificationTargetItem.SnsTopicArnMember | NotificationTargetItem.$UnknownMember;

/**
 * @public
 */
export namespace NotificationTargetItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
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
 * <p>Basic details used in creating a response plan. The response plan is then used to create
 *       an incident record.</p>
 * @public
 */
export interface IncidentTemplate {
  /**
   * <p>The title of the incident. </p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The impact of the incident on your customers and applications.</p>
   *          <p class="title">
   *             <b>Supported impact codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No Impact</p>
   *             </li>
   *          </ul>
   * @public
   */
  impact: number | undefined;

  /**
   * <p>The summary of the incident. The summary is a brief synopsis of what occurred, what's
   *       currently happening, and context.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The string Incident Manager uses to prevent the same root cause from creating multiple
   *       incidents in the same account.</p>
   *          <p>A deduplication string is a term or phrase the system uses to check for duplicate
   *       incidents. If you specify a deduplication string, Incident Manager searches for open incidents that
   *       contain the same string in the <code>dedupeString</code> field when it creates the incident.
   *       If a duplicate is detected, Incident Manager deduplicates the newer incident into the existing
   *       incident.</p>
   *          <note>
   *             <p>By default, Incident Manager automatically deduplicates multiple incidents created by the
   *         same Amazon CloudWatch alarm or Amazon EventBridge event. You don't have to enter
   *         your own deduplication string to prevent duplication for these resource types.</p>
   *          </note>
   * @public
   */
  dedupeString?: string | undefined;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   * @public
   */
  notificationTargets?: NotificationTargetItem[] | undefined;

  /**
   * <p>Tags to assign to the template. When the <code>StartIncident</code> API action is called,
   *       Incident Manager assigns the tags specified in the template to the incident.</p>
   * @public
   */
  incidentTags?: Record<string, string> | undefined;
}

/**
 * <p>Details about the PagerDuty service where the response plan creates an incident.</p>
 * @public
 */
export interface PagerDutyIncidentConfiguration {
  /**
   * <p>The ID of the PagerDuty service that the response plan associates with an incident when it
   *       launches.</p>
   * @public
   */
  serviceId: string | undefined;
}

/**
 * <p>Details about the PagerDuty configuration for a response plan.</p>
 * @public
 */
export interface PagerDutyConfiguration {
  /**
   * <p>The name of the PagerDuty configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or
   *       User Token REST API Key, and other user credentials.</p>
   * @public
   */
  secretId: string | undefined;

  /**
   * <p>Details about the PagerDuty service associated with the configuration.</p>
   * @public
   */
  pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration | undefined;
}

/**
 * <p>Information about third-party services integrated into a response plan.</p>
 * @public
 */
export type Integration = Integration.PagerDutyConfigurationMember | Integration.$UnknownMember;

/**
 * @public
 */
export namespace Integration {
  /**
   * <p>Information about the PagerDuty service where the response plan creates an
   *       incident.</p>
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
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The short format name of the response plan. Can't include spaces.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The long format of the response plan name. This field can contain spaces.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Details used to create an incident when using this response plan.</p>
   * @public
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * <p>The actions that the response plan starts at the beginning of an incident.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>A list of tags that you are adding to the response plan.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Information about third-party services integrated into the response plan.</p>
   * @public
   */
  integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface CreateResponsePlanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>An item referenced in a <code>TimelineEvent</code> that is involved in or somehow
 *       associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID.</p>
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
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services resource referenced in a
   *         <code>TimelineEvent</code>.</p>
   * @public
   */
  export interface ResourceMember {
    resource: string;
    relatedItemId?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of a <code>RelatedItem</code> referenced in a <code>TimelineEvent</code>.</p>
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
   * <p>A token that ensures that a client calls the action only once with the specified
   *       details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record that the action adds the incident
   *       to.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The timestamp for when the event occurred.</p>
   * @public
   */
  eventTime: Date | undefined;

  /**
   * <p>The type of event. You can create timeline events of type <code>Custom Event</code> and
   *         <code>Note</code>.</p>
   *          <p>To make a Note-type event appear on the <i>Incident notes</i> panel in the
   *       console, specify <code>eventType</code> as <code>Note</code>and enter the Amazon Resource Name
   *       (ARN) of the incident as the value for <code>eventReference</code>.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>A short description of the event.</p>
   * @public
   */
  eventData: string | undefined;

  /**
   * <p>Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter
   *       its Amazon Resource Name (ARN). You can also specify a related item associated with a
   *       resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a
   *       resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated
   *       with the DynamoDB table as a related item.</p>
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface CreateTimelineEventOutput {
  /**
   * <p>The ARN of the incident record that you added the event to.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event for easy reference later. </p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are deleting.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIncidentRecordOutput {}

/**
 * <p>Defines the information about the Amazon Web Services Region you're deleting from your
 *       replication set.</p>
 * @public
 */
export interface DeleteRegionAction {
  /**
   * <p>The name of the Amazon Web Services Region you're deleting from the replication set.</p>
   * @public
   */
  regionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you're deleting.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource you're deleting the policy from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ID of the resource policy you're deleting.</p>
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
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
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
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an
   *       event's ID.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTimelineEventOutput {}

/**
 * <p>Details about a timeline event during an incident.</p>
 * @public
 */
export interface EventSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event happened during.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The timeline event ID.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The timestamp for when the event occurred.</p>
   * @public
   */
  eventTime: Date | undefined;

  /**
   * <p>The timestamp for when the timeline event was last updated.</p>
   * @public
   */
  eventUpdatedTime: Date | undefined;

  /**
   * <p>The type of event. The timeline event must be <code>Custom Event</code> or
   *         <code>Note</code>.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>A list of references in a <code>TimelineEvent</code>.</p>
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * <p>Filter the selection by using a condition.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The key that you're filtering on.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The condition accepts before or after a specified time, equal to a string, or equal to an
   *       integer.</p>
   * @public
   */
  condition: Condition | undefined;
}

/**
 * <p>Identifying information about the finding.</p>
 * @public
 */
export interface FindingSummary {
  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The timestamp for when the finding was last updated.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface GetIncidentRecordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Details about what created the incident record and when it was created.</p>
 * @public
 */
export interface IncidentRecordSource {
  /**
   * <p>The principal that started the incident.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The service principal that assumed the role specified in <code>createdBy</code>. If no
   *       service principal assumed the role this will be left blank.</p>
   * @public
   */
  invokedBy?: string | undefined;

  /**
   * <p>The resource that caused the incident to be created.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The service that started the incident. This can be manually created from Incident Manager,
   *       automatically created using an Amazon CloudWatch alarm, or Amazon EventBridge
   *       event.</p>
   * @public
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
 * <p>The record of the incident that's created when an incident occurs.</p>
 * @public
 */
export interface IncidentRecord {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The summary of the incident. The summary is a brief synopsis of what occurred, what's
   *       currently happening, and context of the incident.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>The current status of the incident.</p>
   * @public
   */
  status: IncidentRecordStatus | undefined;

  /**
   * <p>The impact of the incident on customers and applications.</p>
   *          <p class="title">
   *             <b>Supported impact codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No Impact</p>
   *             </li>
   *          </ul>
   * @public
   */
  impact: number | undefined;

  /**
   * <p>The timestamp for when Incident Manager created the incident record.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp for when the incident was resolved. This appears as a timeline event.</p>
   * @public
   */
  resolvedTime?: Date | undefined;

  /**
   * <p>The timestamp for when the incident was most recently modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Who modified the incident most recently.</p>
   * @public
   */
  lastModifiedBy: string | undefined;

  /**
   * <p>The runbook, or automation document, that's run at the beginning of the incident.</p>
   * @public
   */
  automationExecutions?: AutomationExecution[] | undefined;

  /**
   * <p>Details about the action that started the incident.</p>
   * @public
   */
  incidentRecordSource: IncidentRecordSource | undefined;

  /**
   * <p>The string Incident Manager uses to prevent duplicate incidents from being created by the same
   *       incident in the same account.</p>
   * @public
   */
  dedupeString: string | undefined;

  /**
   * <p>The chat channel used for collaboration during an incident.</p>
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   * @public
   */
  notificationTargets?: NotificationTargetItem[] | undefined;
}

/**
 * @public
 */
export interface GetIncidentRecordOutput {
  /**
   * <p>Details the structure of the incident record.</p>
   * @public
   */
  incidentRecord: IncidentRecord | undefined;
}

/**
 * @public
 */
export interface GetReplicationSetInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set you want to retrieve.</p>
   * @public
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
 * <p>Information about a Amazon Web Services Region in your replication set.</p>
 * @public
 */
export interface RegionInfo {
  /**
   * <p>The ID of the KMS key used to encrypt the data in this Amazon Web Services Region.</p>
   * @public
   */
  sseKmsKeyId?: string | undefined;

  /**
   * <p>The status of the Amazon Web Services Region in the replication set.</p>
   * @public
   */
  status: RegionStatus | undefined;

  /**
   * <p>Information displayed about the status of the Amazon Web Services Region.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The timestamp for when Incident Manager updated the status of the Amazon Web Services Region.</p>
   * @public
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
 * <p>The set of Amazon Web Services Region that your Incident Manager data will be replicated to and
 *       the KMS key used to encrypt the data. </p>
 * @public
 */
export interface ReplicationSet {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication set.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.</p>
   * @public
   */
  regionMap: Record<string, RegionInfo> | undefined;

  /**
   * <p>The status of the replication set. If the replication set is still pending, you can't use
   *       Incident Manager functionality.</p>
   * @public
   */
  status: ReplicationSetStatus | undefined;

  /**
   * <p>Determines if the replication set deletion protection is enabled or not. If deletion
   *       protection is enabled, you can't delete the last Amazon Web Services Region in the replication
   *       set. </p>
   * @public
   */
  deletionProtected: boolean | undefined;

  /**
   * <p>When the replication set was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>Details about who created the replication set.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>When the replication set was last updated.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Who last modified the replication set.</p>
   * @public
   */
  lastModifiedBy: string | undefined;
}

/**
 * @public
 */
export interface GetReplicationSetOutput {
  /**
   * <p>Details of the replication set.</p>
   * @public
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
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The maximum number of resource policies to display for each page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The resource policy that allows Incident Manager to perform actions on resources on your
 *       behalf.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The JSON blob that describes the policy.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>The ID of the resource policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The Amazon Web Services Region that policy allows resources to be used in.</p>
   * @public
   */
  ramResourceShareRegion: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesOutput {
  /**
   * <p>Details about the resource policy attached to the response plan.</p>
   * @public
   */
  resourcePolicies: ResourcePolicy[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResponsePlanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetResponsePlanOutput {
  /**
   * <p>The ARN of the response plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The short format name of the response plan. The name can't contain spaces.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The long format name of the response plan. Can contain spaces.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Details used to create the incident when using this response plan.</p>
   * @public
   */
  incidentTemplate: IncidentTemplate | undefined;

  /**
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * <p>The actions that this response plan takes at the beginning of the incident.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>Information about third-party services integrated into the Incident Manager response
   *       plan.</p>
   * @public
   */
  integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface GetTimelineEventInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event. You can get an event's ID when you create it, or by using
   *         <code>ListTimelineEvents</code>.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * <p>A significant event that happened during the incident. </p>
 * @public
 */
export interface TimelineEvent {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident that the event occurred during.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the timeline event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The timestamp for when the event occurred.</p>
   * @public
   */
  eventTime: Date | undefined;

  /**
   * <p>The timestamp for when the timeline event was last updated.</p>
   * @public
   */
  eventUpdatedTime: Date | undefined;

  /**
   * <p>The type of event that occurred. Currently Incident Manager supports only the <code>Custom
   *         Event</code> and <code>Note</code> types.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>A short description of the event.</p>
   * @public
   */
  eventData: string | undefined;

  /**
   * <p>A list of references in a <code>TimelineEvent</code>.</p>
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface GetTimelineEventOutput {
  /**
   * <p>Details about the timeline event.</p>
   * @public
   */
  event: TimelineEvent | undefined;
}

/**
 * <p>Details describing an incident record.</p>
 * @public
 */
export interface IncidentRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The title of the incident. This value is either provided by the response plan or
   *       overwritten on creation.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The current status of the incident.</p>
   * @public
   */
  status: IncidentRecordStatus | undefined;

  /**
   * <p>Defines the impact to customers and applications.</p>
   * @public
   */
  impact: number | undefined;

  /**
   * <p>The timestamp for when the incident was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp for when the incident was resolved.</p>
   * @public
   */
  resolvedTime?: Date | undefined;

  /**
   * <p>What caused Incident Manager to create the incident.</p>
   * @public
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
 * <p>Details about the PagerDuty incident associated with an incident created by an Incident Manager
 *       response plan.</p>
 * @public
 */
export interface PagerDutyIncidentDetail {
  /**
   * <p>The ID of the incident associated with the PagerDuty service for the response plan.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Indicates whether to resolve the PagerDuty incident when you resolve the associated
   *       Incident Manager incident.</p>
   * @public
   */
  autoResolve?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or
   *       User Token REST API Key, and other user credentials.</p>
   * @public
   */
  secretId?: string | undefined;
}

/**
 * <p>Describes a related item.</p>
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
   * <p>The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon
   *       resource.</p>
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
   * <p>The URL, if the related item is a non-Amazon Web Services resource.</p>
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
   * <p>The metric definition, if the related item is a metric in Amazon CloudWatch.</p>
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
   * <p>Details about an incident that is associated with a PagerDuty incident.</p>
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
 * <p>Details and type of a related item.</p>
 * @public
 */
export interface ItemIdentifier {
  /**
   * <p>Details about the related item.</p>
   * @public
   */
  value: ItemValue | undefined;

  /**
   * <p>The type of related item. </p>
   * @public
   */
  type: ItemType | undefined;
}

/**
 * @public
 */
export interface ListIncidentFindingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident for which you want to view associated
   *       findings.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The maximum number of findings to retrieve per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncidentFindingsOutput {
  /**
   * <p>A list of findings that represent deployments that might be the potential cause of the
   *       incident.</p>
   * @public
   */
  findings: FindingSummary[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncidentRecordsOutput {
  /**
   * <p>The details of each listed incident record.</p>
   * @public
   */
  incidentRecordSummaries: IncidentRecordSummary[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRelatedItemsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the incident record containing the listed related
   *       items.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The maximum number of related items per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Resources that responders use to triage and mitigate the incident.</p>
 * @public
 */
export interface RelatedItem {
  /**
   * <p>Details about the related item.</p>
   * @public
   */
  identifier: ItemIdentifier | undefined;

  /**
   * <p>The title of the related item.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A unique ID for a <code>RelatedItem</code>.</p>
   *          <important>
   *             <p>Don't specify this parameter when you add a <code>RelatedItem</code> by using the <a>UpdateRelatedItems</a> API action.</p>
   *          </important>
   * @public
   */
  generatedId?: string | undefined;
}

/**
 * @public
 */
export interface ListRelatedItemsOutput {
  /**
   * <p>Details about each related item.</p>
   * @public
   */
  relatedItems: RelatedItem[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationSetsInput {
  /**
   * <p>The maximum number of results per page. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicationSetsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the list replication set.</p>
   * @public
   */
  replicationSetArns: string[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResponsePlansInput {
  /**
   * <p>The maximum number of response plans per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Details of the response plan that are used when creating an incident.</p>
 * @public
 */
export interface ResponsePlanSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the response plan. This can't include spaces.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human readable name of the response plan. This can include spaces.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListResponsePlansOutput {
  /**
   * <p>Details of each response plan.</p>
   * @public
   */
  responsePlanSummaries: ResponsePlanSummary[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan or incident.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the response plan or incident.</p>
   * @public
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
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Filters the timeline events based on the provided conditional values. You can filter
   *       timeline events with the following keys:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>eventReference</code>
   *                </p>
   *             </li>
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
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>Sort timeline events by the specified key value pair.</p>
   * @public
   */
  sortBy?: TimelineEventSort | undefined;

  /**
   * <p>Sorts the order of timeline events by the value specified in the <code>sortBy</code>
   *       field.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next set of items to return. (You received this token from a
   *       previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTimelineEventsOutput {
  /**
   * <p>Details about each event that occurred during the incident.</p>
   * @public
   */
  eventSummaries: EventSummary[] | undefined;

  /**
   * <p>The pagination token to use when requesting the next set of items. If there are no
   *       additional items to return, the string is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan to add the resource policy to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Details of the resource policy.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * <p>The ID of the resource policy.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * <p>Details about the related item you're adding.</p>
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
   * <p>Details about the related item you're adding.</p>
   * @public
   */
  export interface ItemToAddMember {
    itemToAdd: RelatedItem;
    itemToRemove?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the related item you're deleting.</p>
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
 * <p>Details about what caused the incident to be created in Incident Manager.</p>
 * @public
 */
export interface TriggerDetails {
  /**
   * <p>Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "<code>aws.</code>" Customer-generated events can have any value here,
   *       as long as it doesn't begin with "<code>aws.</code>" We recommend the use of Java package-name
   *       style reverse domain-name strings. </p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source that detected the incident.</p>
   * @public
   */
  triggerArn?: string | undefined;

  /**
   * <p>The timestamp for when the incident was detected.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.</p>
   * @public
   */
  rawData?: string | undefined;
}

/**
 * @public
 */
export interface StartIncidentInput {
  /**
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat
   *       channels, Amazon SNS topics, runbooks, title, and impact of the incident. </p>
   * @public
   */
  responsePlanArn: string | undefined;

  /**
   * <p>Provide a title for the incident. Providing a title overwrites the title provided by the
   *       response plan. </p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by
   *       a response plan.</p>
   *          <p class="title">
   *             <b>Supported impact codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No Impact</p>
   *             </li>
   *          </ul>
   * @public
   */
  impact?: number | undefined;

  /**
   * <p>Details of what created the incident record in Incident Manager.</p>
   * @public
   */
  triggerDetails?: TriggerDetails | undefined;

  /**
   * <p>Add related items to the incident for other responders to use. Related items are Amazon Web Services
   *       resources, external links, or files uploaded to an Amazon S3 bucket. </p>
   * @public
   */
  relatedItems?: RelatedItem[] | undefined;
}

/**
 * @public
 */
export interface StartIncidentOutput {
  /**
   * <p>The ARN of the newly created incident record.</p>
   * @public
   */
  incidentRecordArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the response plan you're adding the tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the response plan.</p>
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
   * <p>The Amazon Resource Name (ARN) of the response plan you're removing a tag from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the tag to remove from the response plan.</p>
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
   * <p>The Amazon Resource Name (ARN) of the replication set to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Specifies if deletion protection is turned on or off in your account. </p>
   * @public
   */
  deletionProtected: boolean | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
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
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record you are updating.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A brief description of the incident.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A longer description of what occurred during the incident.</p>
   * @public
   */
  summary?: string | undefined;

  /**
   * <p>Defines the impact of the incident to customers and applications. If you provide an impact
   *       for an incident, it overwrites the impact provided by the response plan.</p>
   *          <p class="title">
   *             <b>Supported impact codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No Impact</p>
   *             </li>
   *          </ul>
   * @public
   */
  impact?: number | undefined;

  /**
   * <p>The status of the incident. Possible statuses are <code>Open</code> or
   *         <code>Resolved</code>.</p>
   * @public
   */
  status?: IncidentRecordStatus | undefined;

  /**
   * <p>The Chatbot chat channel where responders can collaborate.</p>
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * <p>The Amazon SNS targets that Incident Manager notifies when a client updates an
   *       incident.</p>
   *          <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the
   *       incident.</p>
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
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident record that contains the related items that
   *       you update.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>Details about the item that you are add to, or delete from, an incident.</p>
   * @public
   */
  relatedItemsUpdate: RelatedItemsUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateRelatedItemsOutput {}

/**
 * <p>Details used when updating the replication set.</p>
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
   * <p>Details about the Amazon Web Services Region that you're adding to the replication
   *       set.</p>
   * @public
   */
  export interface AddRegionActionMember {
    addRegionAction: AddRegionAction;
    deleteRegionAction?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the Amazon Web Services Region that you're deleting to the replication
   *       set.</p>
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
   * <p>The Amazon Resource Name (ARN) of the replication set you're updating.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An action to add or delete a Region.</p>
   * @public
   */
  actions: UpdateReplicationSetAction[] | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *       details.</p>
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
   * <p>A token ensuring that the operation is called only once with the specified details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the response plan.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The long format name of the response plan. The display name can't contain spaces.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The short format name of the incident. The title can't contain spaces.</p>
   * @public
   */
  incidentTemplateTitle?: string | undefined;

  /**
   * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by
   *       a response plan.</p>
   *          <p class="title">
   *             <b>Supported impact codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> - Critical</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>2</code> - High</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3</code> - Medium</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>4</code> - Low</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>5</code> - No Impact</p>
   *             </li>
   *          </ul>
   * @public
   */
  incidentTemplateImpact?: number | undefined;

  /**
   * <p>A brief summary of the incident. This typically contains what has happened, what's
   *       currently happening, and next steps.</p>
   * @public
   */
  incidentTemplateSummary?: string | undefined;

  /**
   * <p>The string Incident Manager uses to prevent duplicate incidents from being created by the same
   *       incident in the same account.</p>
   * @public
   */
  incidentTemplateDedupeString?: string | undefined;

  /**
   * <p>The Amazon SNS targets that are notified when updates are made to an
   *       incident.</p>
   * @public
   */
  incidentTemplateNotificationTargets?: NotificationTargetItem[] | undefined;

  /**
   * <p>The Chatbot chat channel used for collaboration during an incident.</p>
   *          <p>Use the empty structure to remove the chat channel from the response plan.</p>
   * @public
   */
  chatChannel?: ChatChannel | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response
   *       plan engages during an incident.</p>
   * @public
   */
  engagements?: string[] | undefined;

  /**
   * <p>The actions that this response plan takes at the beginning of an incident.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>Tags to assign to the template. When the <code>StartIncident</code> API action is called,
   *       Incident Manager assigns the tags specified in the template to the incident. To call this action,
   *       you must also have permission to call the <code>TagResource</code> API action for the incident
   *       record resource.</p>
   * @public
   */
  incidentTemplateTags?: Record<string, string> | undefined;

  /**
   * <p>Information about third-party services integrated into the response plan.</p>
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
   * <p>A token that ensures that a client calls the operation only once with the specified
   *       details.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident that includes the timeline event.</p>
   * @public
   */
  incidentRecordArn: string | undefined;

  /**
   * <p>The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an
   *       event's ID.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The timestamp for when the event occurred.</p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>The type of event. You can update events of type <code>Custom Event</code> and
   *         <code>Note</code>.</p>
   * @public
   */
  eventType?: string | undefined;

  /**
   * <p>A short description of the event.</p>
   * @public
   */
  eventData?: string | undefined;

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
   * @public
   */
  eventReferences?: EventReference[] | undefined;
}

/**
 * @public
 */
export interface UpdateTimelineEventOutput {}
