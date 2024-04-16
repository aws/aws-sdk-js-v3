// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WellArchitectedServiceException as __BaseException } from "./WellArchitectedServiceException";

/**
 * <p>User does not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;
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
export const IntegrationStatusInput = {
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type IntegrationStatusInput = (typeof IntegrationStatusInput)[keyof typeof IntegrationStatusInput];

/**
 * @public
 * @enum
 */
export const AccountJiraIssueManagementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AccountJiraIssueManagementStatus =
  (typeof AccountJiraIssueManagementStatus)[keyof typeof AccountJiraIssueManagementStatus];

/**
 * @public
 * @enum
 */
export const IssueManagementType = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type IssueManagementType = (typeof IssueManagementType)[keyof typeof IssueManagementType];

/**
 * <p>Account-level: Input for the Jira configuration.</p>
 * @public
 */
export interface AccountJiraConfigurationInput {
  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string;

  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatusInput;
}

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  CONFIGURED: "CONFIGURED",
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * <p>Account-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface AccountJiraConfigurationOutput {
  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatus;

  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType;

  /**
   * <p>Account-level: Jira subdomain URL.</p>
   * @public
   */
  Subdomain?: string;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string;

  /**
   * <p>Account-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const CheckStatus = {
  ERROR: "ERROR",
  FETCH_FAILED: "FETCH_FAILED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  OKAY: "OKAY",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus];

/**
 * <p>The choice content.</p>
 * @public
 */
export interface ChoiceContent {
  /**
   * <p>The display text for the choice content.</p>
   * @public
   */
  DisplayText?: string;

  /**
   * <p>The URL for the choice content.</p>
   * @public
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const AdditionalResourceType = {
  HELPFUL_RESOURCE: "HELPFUL_RESOURCE",
  IMPROVEMENT_PLAN: "IMPROVEMENT_PLAN",
} as const;

/**
 * @public
 */
export type AdditionalResourceType = (typeof AdditionalResourceType)[keyof typeof AdditionalResourceType];

/**
 * <p>The choice level additional resources for a custom lens.</p>
 *          <p>This field does not apply to Amazon Web Services official lenses.</p>
 * @public
 */
export interface AdditionalResources {
  /**
   * <p>Type of additional resource for a custom lens.</p>
   * @public
   */
  Type?: AdditionalResourceType;

  /**
   * <p>The URLs for additional resources, either helpful resources or improvement plans, for a custom lens. Up to five additional URLs can be specified.</p>
   * @public
   */
  Content?: ChoiceContent[];
}

/**
 * @public
 * @enum
 */
export const ChoiceReason = {
  ARCHITECTURE_CONSTRAINTS: "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES: "BUSINESS_PRIORITIES",
  NONE: "NONE",
  OTHER: "OTHER",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
} as const;

/**
 * @public
 */
export type ChoiceReason = (typeof ChoiceReason)[keyof typeof ChoiceReason];

/**
 * @public
 * @enum
 */
export const ChoiceStatus = {
  NOT_APPLICABLE: "NOT_APPLICABLE",
  SELECTED: "SELECTED",
  UNSELECTED: "UNSELECTED",
} as const;

/**
 * @public
 */
export type ChoiceStatus = (typeof ChoiceStatus)[keyof typeof ChoiceStatus];

/**
 * <p>A choice that has been answered on a question in your workload.</p>
 * @public
 */
export interface ChoiceAnswer {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string;
}

/**
 * <p>A choice available to answer question.</p>
 * @public
 */
export interface Choice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  Title?: string;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The helpful resource (both text and URL) for a particular choice.</p>
   *          <p>This field only applies to custom lenses. Each choice can have only one helpful resource.</p>
   * @public
   */
  HelpfulResource?: ChoiceContent;

  /**
   * <p>The improvement plan (both text and URL) for a particular choice.</p>
   *          <p>This field only applies to custom lenses. Each choice can have only one improvement plan.</p>
   * @public
   */
  ImprovementPlan?: ChoiceContent;

  /**
   * <p>The additional resources for a choice in a custom lens.</p>
   *          <p>A choice can have up to two additional resources: one of type <code>HELPFUL_RESOURCE</code>,
   *             one of type <code>IMPROVEMENT_PLAN</code>, or both.</p>
   * @public
   */
  AdditionalResources?: AdditionalResources[];
}

/**
 * <p>Configuration of the Jira integration.</p>
 * @public
 */
export interface JiraConfiguration {
  /**
   * <p>The URL of the associated Jira issue.</p>
   * @public
   */
  JiraIssueUrl?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  LastSyncedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const AnswerReason = {
  ARCHITECTURE_CONSTRAINTS: "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES: "BUSINESS_PRIORITIES",
  NONE: "NONE",
  OTHER: "OTHER",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
} as const;

/**
 * @public
 */
export type AnswerReason = (typeof AnswerReason)[keyof typeof AnswerReason];

/**
 * @public
 * @enum
 */
export const Risk = {
  HIGH: "HIGH",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  UNANSWERED: "UNANSWERED",
} as const;

/**
 * @public
 */
export type Risk = (typeof Risk)[keyof typeof Risk];

/**
 * <p>An answer of the question.</p>
 * @public
 */
export interface Answer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The helpful resource URL.</p>
   *          <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p>
   *          <p>For custom lenses, this is the helpful resource URL for a question and is only provided
   *             if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p>
   *          <p>This field does not apply to Amazon Web Services official lenses.</p>
   * @public
   */
  HelpfulResourceDisplayText?: string;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>The reason why the question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration;
}

/**
 * <p>A choice summary that has been answered on a question in your workload.</p>
 * @public
 */
export interface ChoiceAnswerSummary {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason;
}

/**
 * @public
 * @enum
 */
export const QuestionType = {
  NON_PRIORITIZED: "NON_PRIORITIZED",
  PRIORITIZED: "PRIORITIZED",
} as const;

/**
 * @public
 */
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

/**
 * <p>An answer summary of a lens review in a workload.</p>
 * @public
 */
export interface AnswerSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: AnswerReason;

  /**
   * <p>The type of the question.</p>
   * @public
   */
  QuestionType?: QuestionType;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration;
}

/**
 * <p>Input to associate lens reviews.</p>
 * @public
 */
export interface AssociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *          <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * <p>The resource has already been processed, was deleted, or is too large.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  ResourceType: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>There is a problem with the Well-Architected Tool API service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   * @public
   */
  QuotaCode?: string;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
   * @public
   */
  ServiceCode?: string;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name for which validation failed.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The user input is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The reason why the request failed validation.</p>
   * @public
   */
  Reason?: ValidationExceptionReason;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   * @public
   */
  Fields?: ValidationExceptionField[];
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 */
export interface AssociateProfilesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The list of profile ARNs to associate with the workload.</p>
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * <p>A best practice, or question choice, that has been identified as a risk in this question.</p>
 * @public
 */
export interface BestPractice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string;
}

/**
 * @public
 * @enum
 */
export const CheckProvider = {
  TRUSTED_ADVISOR: "TRUSTED_ADVISOR",
} as const;

/**
 * @public
 */
export type CheckProvider = (typeof CheckProvider)[keyof typeof CheckProvider];

/**
 * @public
 * @enum
 */
export const CheckFailureReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ASSUME_ROLE_ERROR: "ASSUME_ROLE_ERROR",
  PREMIUM_SUPPORT_REQUIRED: "PREMIUM_SUPPORT_REQUIRED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

/**
 * @public
 */
export type CheckFailureReason = (typeof CheckFailureReason)[keyof typeof CheckFailureReason];

/**
 * <p>Account details for a Well-Architected best practice in relation to Trusted Advisor checks.</p>
 * @public
 */
export interface CheckDetail {
  /**
   * <p>Trusted Advisor check ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>Count of flagged resources associated to the check.</p>
   * @public
   */
  FlaggedResources?: number;

  /**
   * <p>Reason associated to the check.</p>
   * @public
   */
  Reason?: CheckFailureReason;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * <p>Trusted Advisor check summary.</p>
 * @public
 */
export interface CheckSummary {
  /**
   * <p>Trusted Advisor check ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus;

  /**
   * <p>Account summary associated to the check.</p>
   * @public
   */
  AccountSummary?: Partial<Record<CheckStatus, number>>;
}

/**
 * <p>The choice level improvement plan.</p>
 * @public
 */
export interface ChoiceImprovementPlan {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The display text for the improvement plan.</p>
   * @public
   */
  DisplayText?: string;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string;
}

/**
 * <p>A list of choices to be updated.</p>
 * @public
 */
export interface ChoiceUpdate {
  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string;
}

/**
 * <p>A metric for a particular question in the pillar. </p>
 * @public
 */
export interface QuestionMetric {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk;

  /**
   * <p>The best practices, or choices, that have been identified as contributing to risk in a question.</p>
   * @public
   */
  BestPractices?: BestPractice[];
}

/**
 * <p>A metric for a particular pillar in a lens.</p>
 * @public
 */
export interface PillarMetric {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The questions that have been identified as risks in the pillar.</p>
   * @public
   */
  Questions?: QuestionMetric[];
}

/**
 * <p>A metric for a particular lens in a workload.</p>
 * @public
 */
export interface LensMetric {
  /**
   * <p>The lens ARN.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The metrics for the pillars in a lens.</p>
   * @public
   */
  Pillars?: PillarMetric[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;
}

/**
 * @public
 * @enum
 */
export const MetricType = {
  WORKLOAD: "WORKLOAD",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * <p>A metric that contributes to the consolidated report.</p>
 * @public
 */
export interface ConsolidatedReportMetric {
  /**
   * <p>The metric type of a metric in the consolidated report. Currently only WORKLOAD metric types are supported.</p>
   * @public
   */
  MetricType?: MetricType;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The metrics for the lenses in the workload.</p>
   * @public
   */
  Lenses?: LensMetric[];

  /**
   * <p>The total number of lenses applied to the workload.</p>
   * @public
   */
  LensesAppliedCount?: number;
}

/**
 * @public
 */
export interface CreateLensShareInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateLensShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;
}

/**
 * <p>The user has reached their resource quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
   * @public
   */
  ServiceCode: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 */
export interface CreateLensVersionInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The version of the lens being created.</p>
   * @public
   */
  LensVersion: string | undefined;

  /**
   * <p>Set to true if this new major lens version.</p>
   * @public
   */
  IsMajorVersion?: boolean;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateLensVersionOutput {
  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string;
}

/**
 * <p>Input for milestone creation.</p>
 * @public
 */
export interface CreateMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * <p>Output of a create milestone call.</p>
 * @public
 */
export interface CreateMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;
}

/**
 * <p>An update to a profile question.</p>
 * @public
 */
export interface ProfileQuestionUpdate {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[];
}

/**
 * @public
 */
export interface CreateProfileInput {
  /**
   * <p>Name of the profile.</p>
   * @public
   */
  ProfileName: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription: string | undefined;

  /**
   * <p>The profile questions.</p>
   * @public
   */
  ProfileQuestions: ProfileQuestionUpdate[] | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProfileOutput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>Version of the profile.</p>
   * @public
   */
  ProfileVersion?: string;
}

/**
 * @public
 */
export interface CreateProfileShareInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateProfileShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;
}

/**
 * @public
 */
export interface CreateReviewTemplateInput {
  /**
   * <p>Name of the review template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The review template description.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Lenses applied to the review template.</p>
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateReviewTemplateOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;
}

/**
 * @public
 */
export interface CreateTemplateShareInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateTemplateShareOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;
}

/**
 * @public
 * @enum
 */
export const TrustedAdvisorIntegrationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TrustedAdvisorIntegrationStatus =
  (typeof TrustedAdvisorIntegrationStatus)[keyof typeof TrustedAdvisorIntegrationStatus];

/**
 * @public
 * @enum
 */
export const DefinitionType = {
  APP_REGISTRY: "APP_REGISTRY",
  WORKLOAD_METADATA: "WORKLOAD_METADATA",
} as const;

/**
 * @public
 */
export type DefinitionType = (typeof DefinitionType)[keyof typeof DefinitionType];

/**
 * <p>Discovery configuration associated to the workload.</p>
 * @public
 */
export interface WorkloadDiscoveryConfig {
  /**
   * <p>Discovery integration status in respect to Trusted Advisor for the workload.</p>
   * @public
   */
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;

  /**
   * <p>The mode to use for identifying resources associated with the workload.</p>
   *          <p>You can specify <code>WORKLOAD_METADATA</code>, <code>APP_REGISTRY</code>, or both.</p>
   * @public
   */
  WorkloadResourceDefinition?: DefinitionType[];
}

/**
 * @public
 * @enum
 */
export const WorkloadEnvironment = {
  PREPRODUCTION: "PREPRODUCTION",
  PRODUCTION: "PRODUCTION",
} as const;

/**
 * @public
 */
export type WorkloadEnvironment = (typeof WorkloadEnvironment)[keyof typeof WorkloadEnvironment];

/**
 * @public
 * @enum
 */
export const WorkloadIssueManagementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  INHERIT: "INHERIT",
} as const;

/**
 * @public
 */
export type WorkloadIssueManagementStatus =
  (typeof WorkloadIssueManagementStatus)[keyof typeof WorkloadIssueManagementStatus];

/**
 * <p>Workload-level: Input for the Jira configuration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationInput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string;
}

/**
 * <p>Input for workload creation.</p>
 * @public
 */
export interface CreateWorkloadInput {
  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment: WorkloadEnvironment | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to be associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>Well-Architected discovery configuration settings associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[];

  /**
   * <p>The list of profile ARNs associated with the workload.</p>
   * @public
   */
  ProfileArns?: string[];

  /**
   * <p>The list of review template ARNs to associate with the workload.</p>
   * @public
   */
  ReviewTemplateArns?: string[];

  /**
   * <p>Jira configuration settings when creating a workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}

/**
 * <p>Output of a create workload call.</p>
 * @public
 */
export interface CreateWorkloadOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string;
}

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CONTRIBUTOR: "CONTRIBUTOR",
  READONLY: "READONLY",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * <p>Input for Create Workload Share</p>
 * @public
 */
export interface CreateWorkloadShareInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * <p>Input for Create Workload Share</p>
 * @public
 */
export interface CreateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;
}

/**
 * @public
 * @enum
 */
export const LensStatusType = {
  ALL: "ALL",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type LensStatusType = (typeof LensStatusType)[keyof typeof LensStatusType];

/**
 * @public
 */
export interface DeleteLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>The status of the lens to be deleted.</p>
   * @public
   */
  LensStatus: LensStatusType | undefined;
}

/**
 * @public
 */
export interface DeleteLensShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteProfileShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteTemplateShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * <p>Input for workload deletion.</p>
 * @public
 */
export interface DeleteWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * <p>Input for Delete Workload Share</p>
 * @public
 */
export interface DeleteWorkloadShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * @enum
 */
export const DifferenceStatus = {
  DELETED: "DELETED",
  NEW: "NEW",
  UPDATED: "UPDATED",
} as const;

/**
 * @public
 */
export type DifferenceStatus = (typeof DifferenceStatus)[keyof typeof DifferenceStatus];

/**
 * <p>Input to disassociate lens reviews.</p>
 * @public
 */
export interface DisassociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *          <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateProfilesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The list of profile ARNs to disassociate from the workload.</p>
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryIntegrationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DiscoveryIntegrationStatus = (typeof DiscoveryIntegrationStatus)[keyof typeof DiscoveryIntegrationStatus];

/**
 * @public
 */
export interface ExportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be exported.</p>
   * @public
   */
  LensVersion?: string;
}

/**
 * @public
 */
export interface ExportLensOutput {
  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  LensJSON?: string;
}

/**
 * <p>Input to get answer.</p>
 * @public
 */
export interface GetAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;
}

/**
 * <p>Output of a get answer call.</p>
 * @public
 */
export interface GetAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer;
}

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  JSON: "JSON",
  PDF: "PDF",
} as const;

/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 */
export interface GetConsolidatedReportInput {
  /**
   * <p>The format of the consolidated report.</p>
   *          <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>,
   *             <code>Metrics</code> is returned.</p>
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * <p>Set to <code>true</code> to have shared resources included in the report.</p>
   * @public
   */
  IncludeSharedResources?: boolean;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetConsolidatedReportOutput {
  /**
   * <p>The metrics that make up the consolidated report.</p>
   *          <p>Only returned when <code>JSON</code> format is requested.</p>
   * @public
   */
  Metrics?: ConsolidatedReportMetric[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *          <p>This data can be used to create a PDF file.</p>
   *          <p>Only returned by <a>GetConsolidatedReport</a>
   *          when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string;
}

/**
 * @public
 * @enum
 */
export const OrganizationSharingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type OrganizationSharingStatus = (typeof OrganizationSharingStatus)[keyof typeof OrganizationSharingStatus];

/**
 * @public
 */
export interface GetGlobalSettingsOutput {
  /**
   * <p>Amazon Web Services Organizations sharing status.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus;

  /**
   * <p>Discovery integration status.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;

  /**
   * <p>Jira configuration status.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationOutput;
}

/**
 * @public
 */
export interface GetLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be retrieved.</p>
   * @public
   */
  LensVersion?: string;
}

/**
 * <p>A lens return object.</p>
 * @public
 */
export interface Lens {
  /**
   * <p>The ARN of a lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The version of a lens.</p>
   * @public
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Web Services account ID that owns the lens.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags assigned to the lens.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetLensOutput {
  /**
   * <p>A lens return object.</p>
   * @public
   */
  Lens?: Lens;
}

/**
 * <p>Input to get lens review.</p>
 * @public
 */
export interface GetLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;
}

/**
 * <p>The selected pillar.</p>
 * @public
 */
export interface SelectedPillar {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>Selected question IDs in the selected pillar.</p>
   * @public
   */
  SelectedQuestionIds?: string[];
}

/**
 * <p>Selected questions in the workload.</p>
 * @public
 */
export interface JiraSelectedQuestionConfiguration {
  /**
   * <p>Selected pillars in the workload.</p>
   * @public
   */
  SelectedPillars?: SelectedPillar[];
}

/**
 * @public
 * @enum
 */
export const LensStatus = {
  CURRENT: "CURRENT",
  DELETED: "DELETED",
  DEPRECATED: "DEPRECATED",
  NOT_CURRENT: "NOT_CURRENT",
  UNSHARED: "UNSHARED",
} as const;

/**
 * @public
 */
export type LensStatus = (typeof LensStatus)[keyof typeof LensStatus];

/**
 * <p>A pillar review summary of a lens review.</p>
 * @public
 */
export interface PillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>>;
}

/**
 * <p>The profile associated with a workload.</p>
 * @public
 */
export interface WorkloadProfile {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string;
}

/**
 * <p>A lens review of a question.</p>
 * @public
 */
export interface LensReview {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus;

  /**
   * <p>List of pillar review summaries of lens review in a workload.</p>
   * @public
   */
  PillarReviewSummaries?: PillarReviewSummary[];

  /**
   * <p>Jira configuration status of the Lens review.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>>;
}

/**
 * <p>Output of a get lens review call.</p>
 * @public
 */
export interface GetLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview;
}

/**
 * <p>Input to get lens review report.</p>
 * @public
 */
export interface GetLensReviewReportInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;
}

/**
 * <p>A report of a lens review.</p>
 * @public
 */
export interface LensReviewReport {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *          <p>This data can be used to create a PDF file.</p>
   *          <p>Only returned by <a>GetConsolidatedReport</a>
   *          when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string;
}

/**
 * <p>Output of a get lens review report call.</p>
 * @public
 */
export interface GetLensReviewReportOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>A report of a lens review.</p>
   * @public
   */
  LensReviewReport?: LensReviewReport;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string;

  /**
   * <p>The lens version to target a difference for.</p>
   * @public
   */
  TargetLensVersion?: string;
}

/**
 * <p>A question difference return object.</p>
 * @public
 */
export interface QuestionDifference {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>Indicates the type of change to the question.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus;
}

/**
 * <p>A pillar difference return object.</p>
 * @public
 */
export interface PillarDifference {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string;

  /**
   * <p>Indicates the type of change to the pillar.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus;

  /**
   * <p>List of question differences.</p>
   * @public
   */
  QuestionDifferences?: QuestionDifference[];
}

/**
 * <p>The differences between the base and latest versions of the lens.</p>
 * @public
 */
export interface VersionDifferences {
  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   * @public
   */
  PillarDifferences?: PillarDifference[];
}

/**
 * @public
 */
export interface GetLensVersionDifferenceOutput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string;

  /**
   * <p>The target lens version for the lens.</p>
   * @public
   */
  TargetLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string;

  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   * @public
   */
  VersionDifferences?: VersionDifferences;
}

/**
 * <p>Input to get a milestone.</p>
 * @public
 */
export interface GetMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadImprovementStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  NOT_STARTED: "NOT_STARTED",
  RISK_ACKNOWLEDGED: "RISK_ACKNOWLEDGED",
} as const;

/**
 * @public
 */
export type WorkloadImprovementStatus = (typeof WorkloadImprovementStatus)[keyof typeof WorkloadImprovementStatus];

/**
 * <p>Workload-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationOutput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string;

  /**
   * <p>Workload-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * <p>A workload return object.</p>
 * @public
 */
export interface Workload {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  ReviewRestrictionDate?: Date;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *          <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[];

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[];

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>Discovery configuration associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[];

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>Jira configuration for a specific workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationOutput;
}

/**
 * <p>A milestone return object.</p>
 * @public
 */
export interface Milestone {
  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  RecordedAt?: Date;

  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload;
}

/**
 * <p>Output of a get milestone call.</p>
 * @public
 */
export interface GetMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>A milestone return object.</p>
   * @public
   */
  Milestone?: Milestone;
}

/**
 * @public
 */
export interface GetProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string;
}

/**
 * <p>The profile choice.</p>
 * @public
 */
export interface ProfileChoice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string;
}

/**
 * <p>A profile question.</p>
 * @public
 */
export interface ProfileQuestion {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileChoice[];

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[];

  /**
   * <p>The minimum number of selected choices.</p>
   * @public
   */
  MinSelectedChoices?: number;

  /**
   * <p>The maximum number of selected choices.</p>
   * @public
   */
  MaxSelectedChoices?: number;
}

/**
 * <p>A profile.</p>
 * @public
 */
export interface Profile {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestion[];

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile;
}

/**
 * @public
 */
export interface GetProfileTemplateInput {}

/**
 * <p>A profile template choice.</p>
 * @public
 */
export interface ProfileTemplateChoice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string;
}

/**
 * <p>A profile template question.</p>
 * @public
 */
export interface ProfileTemplateQuestion {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileTemplateChoice[];

  /**
   * <p>The minimum number of choices selected.</p>
   * @public
   */
  MinSelectedChoices?: number;

  /**
   * <p>The maximum number of choices selected.</p>
   * @public
   */
  MaxSelectedChoices?: number;
}

/**
 * <p>The profile template.</p>
 * @public
 */
export interface ProfileTemplate {
  /**
   * <p>The name of the profile template.</p>
   * @public
   */
  TemplateName?: string;

  /**
   * <p>Profile template questions.</p>
   * @public
   */
  TemplateQuestions?: ProfileTemplateQuestion[];

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetProfileTemplateOutput {
  /**
   * <p>The profile template.</p>
   * @public
   */
  ProfileTemplate?: ProfileTemplate;
}

/**
 * @public
 */
export interface GetReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Question = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED",
} as const;

/**
 * @public
 */
export type Question = (typeof Question)[keyof typeof Question];

/**
 * @public
 * @enum
 */
export const ReviewTemplateUpdateStatus = {
  CURRENT: "CURRENT",
  LENS_NOT_CURRENT: "LENS_NOT_CURRENT",
} as const;

/**
 * @public
 */
export type ReviewTemplateUpdateStatus = (typeof ReviewTemplateUpdateStatus)[keyof typeof ReviewTemplateUpdateStatus];

/**
 * <p>A review template.</p>
 * @public
 */
export interface ReviewTemplate {
  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The lenses applied to the review template.</p>
   * @public
   */
  Lenses?: string[];

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A count of how many total questions are answered and unanswered in the review template.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>>;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus;

  /**
   * <p>The ID assigned to the template share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;
}

/**
 * @public
 */
export interface GetReviewTemplateOutput {
  /**
   * <p>The review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReviewTemplateAnswerStatus = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED",
} as const;

/**
 * @public
 */
export type ReviewTemplateAnswerStatus = (typeof ReviewTemplateAnswerStatus)[keyof typeof ReviewTemplateAnswerStatus];

/**
 * <p>An answer of the question.</p>
 * @public
 */
export interface ReviewTemplateAnswer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The helpful resource URL.</p>
   *          <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p>
   *          <p>For custom lenses, this is the helpful resource URL for a question and is only provided
   *             if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p>
   *          <note>
   *             <p>This field does not apply to Amazon Web Services official lenses.</p>
   *          </note>
   * @public
   */
  HelpfulResourceDisplayText?: string;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your review template.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>The reason why the question is not applicable to your review template.</p>
   * @public
   */
  Reason?: AnswerReason;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;
}

/**
 * <p>Summary of a review template.</p>
 * @public
 */
export interface ReviewTemplatePillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A count of how many questions are answered and unanswered in the requested pillar of the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>>;
}

/**
 * <p>The lens review of a review template.</p>
 * @public
 */
export interface ReviewTemplateLensReview {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The lens ARN.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus;

  /**
   * <p>Pillar review summaries of a lens review.</p>
   * @public
   */
  PillarReviewSummaries?: ReviewTemplatePillarReviewSummary[];

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A count of how many questions are answered and unanswered in the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>>;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview;
}

/**
 * <p>Input to get a workload.</p>
 * @public
 */
export interface GetWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;
}

/**
 * <p>Output of a get workload call.</p>
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload;
}

/**
 * @public
 */
export interface ImportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  JSONString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags to associate to a lens.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ImportLensStatus = {
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ImportLensStatus = (typeof ImportLensStatus)[keyof typeof ImportLensStatus];

/**
 * @public
 */
export interface ImportLensOutput {
  /**
   * <p>The ARN for the lens that was created or updated.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The status of the imported lens.</p>
   * @public
   */
  Status?: ImportLensStatus;
}

/**
 * <p>An improvement summary of a lens review in a workload.</p>
 * @public
 */
export interface ImprovementSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The improvement plan details.</p>
   * @public
   */
  ImprovementPlans?: ChoiceImprovementPlan[];

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration;
}

/**
 * @public
 * @enum
 */
export const IntegratingService = {
  JIRA: "JIRA",
} as const;

/**
 * @public
 */
export type IntegratingService = (typeof IntegratingService)[keyof typeof IntegratingService];

/**
 * <p>A lens review summary of a workload.</p>
 * @public
 */
export interface LensReviewSummary {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>>;
}

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  ACCEPTED: "ACCEPTED",
  ASSOCIATED: "ASSOCIATED",
  ASSOCIATING: "ASSOCIATING",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  REVOKED: "REVOKED",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * <p>A lens share summary return object.</p>
 * @public
 */
export interface LensShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 * @enum
 */
export const LensType = {
  AWS_OFFICIAL: "AWS_OFFICIAL",
  CUSTOM_SELF: "CUSTOM_SELF",
  CUSTOM_SHARED: "CUSTOM_SHARED",
} as const;

/**
 * @public
 */
export type LensType = (typeof LensType)[keyof typeof LensType];

/**
 * <p>A lens summary of a lens.</p>
 * @public
 */
export interface LensSummary {
  /**
   * <p>The ARN of the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;

  /**
   * <p>The type of the lens.</p>
   * @public
   */
  LensType?: LensType;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus;
}

/**
 * <p>Lens upgrade summary return object.</p>
 * @public
 */
export interface LensUpgradeSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The current version of the lens.</p>
   * @public
   */
  CurrentLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string;

  /**
   * <p>
   *             <code>ResourceArn</code> of the lens being upgraded</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * @public
 * @enum
 */
export const QuestionPriority = {
  NONE: "NONE",
  PRIORITIZED: "PRIORITIZED",
} as const;

/**
 * @public
 */
export type QuestionPriority = (typeof QuestionPriority)[keyof typeof QuestionPriority];

/**
 * <p>Input to list answers.</p>
 * @public
 */
export interface ListAnswersInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority;
}

/**
 * <p>Output of a list answers call.</p>
 * @public
 */
export interface ListAnswersOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>List of answer summaries of lens review in a workload.</p>
   * @public
   */
  AnswerSummaries?: AnswerSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCheckDetailsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsOutput {
  /**
   * <p>The details about the Trusted Advisor checks related to the Well-Architected best practice.</p>
   * @public
   */
  CheckDetails?: CheckDetail[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCheckSummariesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesOutput {
  /**
   * <p>List of Trusted Advisor summaries related to the Well-Architected best practice.</p>
   * @public
   */
  CheckSummaries?: CheckSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to list lenses.</p>
 * @public
 */
export interface ListLensesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The type of lenses to be returned.</p>
   * @public
   */
  LensType?: LensType;

  /**
   * <p>The status of lenses to be returned.</p>
   * @public
   */
  LensStatus?: LensStatusType;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;
}

/**
 * <p>Output of a list lenses call.</p>
 * @public
 */
export interface ListLensesOutput {
  /**
   * <p>List of lens summaries of available lenses.</p>
   * @public
   */
  LensSummaries?: LensSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to list lens review improvements.</p>
 * @public
 */
export interface ListLensReviewImprovementsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority;
}

/**
 * <p>Output of a list lens review improvements call.</p>
 * @public
 */
export interface ListLensReviewImprovementsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>List of improvement summaries of lens review in a workload.</p>
   * @public
   */
  ImprovementSummaries?: ImprovementSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to list lens reviews.</p>
 * @public
 */
export interface ListLensReviewsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Output of a list lens reviews call.</p>
 * @public
 */
export interface ListLensReviewsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>List of lens summaries of lens reviews of a workload.</p>
   * @public
   */
  LensReviewSummaries?: LensReviewSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLensSharesInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the lens is shared.</p>
   * @public
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;
}

/**
 * @public
 */
export interface ListLensSharesOutput {
  /**
   * <p>A list of lens share summaries.</p>
   * @public
   */
  LensShareSummaries?: LensShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to list all milestones for a workload.</p>
 * @public
 */
export interface ListMilestonesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A workload summary return object.</p>
 * @public
 */
export interface WorkloadSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>>;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus;

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[];

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>>;
}

/**
 * <p>A milestone summary return object.</p>
 * @public
 */
export interface MilestoneSummary {
  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  RecordedAt?: Date;

  /**
   * <p>A workload summary return object.</p>
   * @public
   */
  WorkloadSummary?: WorkloadSummary;
}

/**
 * <p>Output of a list milestones call.</p>
 * @public
 */
export interface ListMilestonesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>A list of milestone summaries.</p>
   * @public
   */
  MilestoneSummaries?: MilestoneSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The ARN for the related resource for the notification.</p>
   *          <note>
   *             <p>Only one of <code>WorkloadID</code> or <code>ResourceARN</code> should be specified.</p>
   *          </note>
   * @public
   */
  ResourceArn?: string;
}

/**
 * @public
 * @enum
 */
export const NotificationType = {
  LENS_VERSION_DEPRECATED: "LENS_VERSION_DEPRECATED",
  LENS_VERSION_UPGRADED: "LENS_VERSION_UPGRADED",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * <p>A notification summary return object.</p>
 * @public
 */
export interface NotificationSummary {
  /**
   * <p>The type of notification.</p>
   * @public
   */
  Type?: NotificationType;

  /**
   * <p>Summary of lens upgrade.</p>
   * @public
   */
  LensUpgradeSummary?: LensUpgradeSummary;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>List of lens notification summaries in a workload.</p>
   * @public
   */
  NotificationSummaries?: NotificationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProfileNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ProfileNotificationType = {
  PROFILE_ANSWERS_UPDATED: "PROFILE_ANSWERS_UPDATED",
  PROFILE_DELETED: "PROFILE_DELETED",
} as const;

/**
 * @public
 */
export type ProfileNotificationType = (typeof ProfileNotificationType)[keyof typeof ProfileNotificationType];

/**
 * <p>The profile notification summary.</p>
 * @public
 */
export interface ProfileNotificationSummary {
  /**
   * <p>The current profile version.</p>
   * @public
   */
  CurrentProfileVersion?: string;

  /**
   * <p>The latest profile version.</p>
   * @public
   */
  LatestProfileVersion?: string;

  /**
   * <p>Type of notification.</p>
   * @public
   */
  Type?: ProfileNotificationType;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;
}

/**
 * @public
 */
export interface ListProfileNotificationsOutput {
  /**
   * <p>Notification summaries.</p>
   * @public
   */
  NotificationSummaries?: ProfileNotificationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ProfileOwnerType = {
  SELF: "SELF",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type ProfileOwnerType = (typeof ProfileOwnerType)[keyof typeof ProfileOwnerType];

/**
 * @public
 */
export interface ListProfilesInput {
  /**
   * <p>An optional string added to the beginning of each profile name returned in the
   *             results.</p>
   * @public
   */
  ProfileNamePrefix?: string;

  /**
   * <p>Profile owner type.</p>
   * @public
   */
  ProfileOwnerType?: ProfileOwnerType;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Summary of a profile.</p>
 * @public
 */
export interface ProfileSummary {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListProfilesOutput {
  /**
   * <p>Profile summaries.</p>
   * @public
   */
  ProfileSummaries?: ProfileSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProfileSharesInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.</p>
   * @public
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;
}

/**
 * <p>Summary of a profile share.</p>
 * @public
 */
export interface ProfileShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;

  /**
   * <p>Profile share invitation status message.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface ListProfileSharesOutput {
  /**
   * <p>Profile share summaries.</p>
   * @public
   */
  ProfileShareSummaries?: ProfileShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersInput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The summary of review template answers.</p>
 * @public
 */
export interface ReviewTemplateAnswerSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in the review template.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus;

  /**
   * <p>The reason why a choice is not-applicable to a question in the review template.</p>
   * @public
   */
  Reason?: AnswerReason;

  /**
   * <p>The type of question.</p>
   * @public
   */
  QuestionType?: QuestionType;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersOutput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>List of answer summaries of a lens review in a review template.</p>
   * @public
   */
  AnswerSummaries?: ReviewTemplateAnswerSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReviewTemplatesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Summary of a review template.</p>
 * @public
 */
export interface ReviewTemplateSummary {
  /**
   * <p>Description of the review template.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Lenses associated with the review template.</p>
   * @public
   */
  Lenses?: string[];

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus;
}

/**
 * @public
 */
export interface ListReviewTemplatesOutput {
  /**
   * <p>List of review templates.</p>
   * @public
   */
  ReviewTemplates?: ReviewTemplateSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ShareResourceType = {
  LENS: "LENS",
  PROFILE: "PROFILE",
  TEMPLATE: "TEMPLATE",
  WORKLOAD: "WORKLOAD",
} as const;

/**
 * @public
 */
export type ShareResourceType = (typeof ShareResourceType)[keyof typeof ShareResourceType];

/**
 * <p>Input for List Share Invitations</p>
 * @public
 */
export interface ListShareInvitationsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   * @public
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>An optional string added to the beginning of each lens name returned in the results.</p>
   * @public
   */
  LensNamePrefix?: string;

  /**
   * <p>The type of share invitations to be returned.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional string added to the beginning of each profile name returned in the
   *             results.</p>
   * @public
   */
  ProfileNamePrefix?: string;

  /**
   * <p>An optional string added to the beginning of each review template name returned in the
   *             results.</p>
   * @public
   */
  TemplateNamePrefix?: string;
}

/**
 * <p>A share invitation summary return object.</p>
 * @public
 */
export interface ShareInvitationSummary {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;
}

/**
 * <p>Input for List Share Invitations</p>
 * @public
 */
export interface ListShareInvitationsOutput {
  /**
   * <p>List of share invitation summaries in a workload.</p>
   * @public
   */
  ShareInvitationSummaries?: ShareInvitationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTemplateSharesInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit
   *             (OU) ID with which the profile is shared.</p>
   * @public
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;
}

/**
 * <p>Summary of a review template share.</p>
 * @public
 */
export interface TemplateShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;

  /**
   * <p>Review template share invitation status message. </p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface ListTemplateSharesOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>A review template share summary return object.</p>
   * @public
   */
  TemplateShareSummaries?: TemplateShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input to list all workloads.</p>
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   * @public
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Output of a list workloads call.</p>
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * <p>A list of workload summaries.</p>
   * @public
   */
  WorkloadSummaries?: WorkloadSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Input for List Workload Share</p>
 * @public
 */
export interface ListWorkloadSharesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   * @public
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;
}

/**
 * <p>A workload share summary return object.</p>
 * @public
 */
export interface WorkloadShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * <p>Input for List Workload Share</p>
 * @public
 */
export interface ListWorkloadSharesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>A list of workload share summaries.</p>
   * @public
   */
  WorkloadShareSummaries?: WorkloadShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The share invitation.</p>
 * @public
 */
export interface ShareInvitation {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;
}

/**
 * @public
 * @enum
 */
export const ShareInvitationAction = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type ShareInvitationAction = (typeof ShareInvitationAction)[keyof typeof ShareInvitationAction];

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags of the resource
   *             whose keys are members of this list are removed from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Input to update answer.</p>
 * @public
 */
export interface UpdateAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of choices to update on a question in your workload.  The String key
   *             corresponds to the choice ID to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate>;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The reason why a question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason;
}

/**
 * <p>Output of a update answer call.</p>
 * @public
 */
export interface UpdateAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * <p>The status of organization sharing settings.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus;

  /**
   * <p>The status of discovery support settings.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus;

  /**
   * <p>The status of Jira integration settings.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationInput;
}

/**
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;

  /**
   * <p>Which integrated service to update.</p>
   * @public
   */
  IntegratingService: IntegratingService | undefined;
}

/**
 * <p>Input for update lens review.</p>
 * @public
 */
export interface UpdateLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string>;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration;
}

/**
 * <p>Output of a update lens review call.</p>
 * @public
 */
export interface UpdateLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview;
}

/**
 * @public
 */
export interface UpdateProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestionUpdate[];
}

/**
 * @public
 */
export interface UpdateProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile;
}

/**
 * @public
 */
export interface UpdateReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The review template name.</p>
   * @public
   */
  TemplateName?: string;

  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>A list of lens aliases or ARNs to apply to the review template.</p>
   * @public
   */
  LensesToAssociate?: string[];

  /**
   * <p>A list of lens aliases or ARNs to unapply to the review template. The <code>wellarchitected</code> lens cannot be unapplied.</p>
   * @public
   */
  LensesToDisassociate?: string[];
}

/**
 * @public
 */
export interface UpdateReviewTemplateOutput {
  /**
   * <p>A review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of choices to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate>;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean;

  /**
   * <p>The update reason.</p>
   * @public
   */
  Reason?: AnswerReason;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview;
}

/**
 * <p>Input for Update Share Invitation</p>
 * @public
 */
export interface UpdateShareInvitationInput {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId: string | undefined;

  /**
   * <p>Share invitation action taken by contributor.</p>
   * @public
   */
  ShareInvitationAction: ShareInvitationAction | undefined;
}

/**
 * @public
 */
export interface UpdateShareInvitationOutput {
  /**
   * <p>The updated workload or custom lens share invitation.</p>
   * @public
   */
  ShareInvitation?: ShareInvitation;
}

/**
 * <p>Input to update a workload.</p>
 * @public
 */
export interface UpdateWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *          <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus;

  /**
   * <p>Well-Architected discovery configuration settings to associate to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs to associate to the workload.</p>
   * @public
   */
  Applications?: string[];

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput;
}

/**
 * <p>Output of an update workload call.</p>
 * @public
 */
export interface UpdateWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;
}

/**
 * <p>A workload share return object.</p>
 * @public
 */
export interface WorkloadShare {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string;

  /**
   * <p>A workload share return object.</p>
   * @public
   */
  WorkloadShare?: WorkloadShare;
}

/**
 * @public
 */
export interface UpgradeLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface UpgradeProfileVersionInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface UpgradeReviewTemplateLensReviewInput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string;
}
