// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { WellArchitectedServiceException as __BaseException } from "./WellArchitectedServiceException";

/**
 * @public
 * <p>User does not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
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
 * @public
 * <p>The choice content.</p>
 */
export interface ChoiceContent {
  /**
   * <p>The display text for the choice content.</p>
   */
  DisplayText?: string;

  /**
   * <p>The URL for the choice content.</p>
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
 * @public
 * <p>The choice level additional resources.</p>
 */
export interface AdditionalResources {
  /**
   * <p>Type of additional resource.</p>
   */
  Type?: AdditionalResourceType | string;

  /**
   * <p>The URLs for additional resources, either helpful resources or improvement plans. Up to five additional URLs can be specified.</p>
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
 * @public
 * <p>A choice that has been answered on a question in your workload.</p>
 */
export interface ChoiceAnswer {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   */
  Status?: ChoiceStatus | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;

  /**
   * <p>The notes associated with a choice.</p>
   */
  Notes?: string;
}

/**
 * @public
 * <p>A choice available to answer question.</p>
 */
export interface Choice {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   */
  Title?: string;

  /**
   * <p>The description of a choice.</p>
   */
  Description?: string;

  /**
   * <p>The choice level helpful resource.</p>
   */
  HelpfulResource?: ChoiceContent;

  /**
   * <p>The choice level improvement plan.</p>
   */
  ImprovementPlan?: ChoiceContent;

  /**
   * <p>The additional resources for a choice. A choice can have up to two additional resources: one of type <code>HELPFUL_RESOURCE</code>,
   *             one of type <code>IMPROVEMENT_PLAN</code>, or both.</p>
   */
  AdditionalResources?: AdditionalResources[];
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
 * @public
 * <p>An answer of the question.</p>
 */
export interface Answer {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   */
  QuestionDescription?: string;

  /**
   * <p>The improvement plan URL for a question.</p>
   *         <p>This value is only available if the question has been answered.</p>
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The helpful resource URL for a question.</p>
   */
  HelpfulResourceUrl?: string;

  /**
   * <p>The helpful resource text to be displayed.</p>
   */
  HelpfulResourceDisplayText?: string;

  /**
   * <p>List of choices available for a question.</p>
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   */
  ChoiceAnswers?: ChoiceAnswer[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The reason why the question is not applicable to your workload.</p>
   */
  Reason?: AnswerReason | string;
}

/**
 * @public
 * <p>A choice summary that has been answered on a question in your workload.</p>
 */
export interface ChoiceAnswerSummary {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   */
  Status?: ChoiceStatus | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;
}

/**
 * @public
 * <p>An answer summary of a lens review in a workload.</p>
 */
export interface AnswerSummary {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>List of choices available for a question.</p>
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: AnswerReason | string;
}

/**
 * @public
 * <p>Input to associate lens reviews.</p>
 */
export interface AssociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAliases: string[] | undefined;
}

/**
 * @public
 * <p>The resource already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
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
 * @public
 * <p>There is a problem with the Well-Architected Tool API service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Description of the error.</p>
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
 * @public
 * <p>The requested resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
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
 * @public
 * <p>Request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   */
  QuotaCode?: string;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
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
 * @public
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name for which validation failed.</p>
   */
  Name: string | undefined;

  /**
   * <p>Description of the error.</p>
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
 * @public
 * <p>The user input is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>The reason why the request failed validation.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The fields that caused the error, if applicable.</p>
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
 * @public
 * <p>Account details for a Well-Architected best practice in relation to Trusted Advisor checks.</p>
 */
export interface CheckDetail {
  /**
   * <p>Trusted Advisor check ID.</p>
   */
  Id?: string;

  /**
   * <p>Trusted Advisor check name.</p>
   */
  Name?: string;

  /**
   * <p>Trusted Advisor check description.</p>
   */
  Description?: string;

  /**
   * <p>Provider of the check related to the best practice.</p>
   */
  Provider?: CheckProvider | string;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   */
  LensArn?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>Status associated to the check.</p>
   */
  Status?: CheckStatus | string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>Count of flagged resources associated to the check.</p>
   */
  FlaggedResources?: number;

  /**
   * <p>Reason associated to the check.</p>
   */
  Reason?: CheckFailureReason | string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>Trusted Advisor check summary.</p>
 */
export interface CheckSummary {
  /**
   * <p>Trusted Advisor check ID.</p>
   */
  Id?: string;

  /**
   * <p>Trusted Advisor check name.</p>
   */
  Name?: string;

  /**
   * <p>Provider of the check related to the best practice.</p>
   */
  Provider?: CheckProvider | string;

  /**
   * <p>Trusted Advisor check description.</p>
   */
  Description?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   */
  LensArn?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>Status associated to the check.</p>
   */
  Status?: CheckStatus | string;

  /**
   * <p>Account summary associated to the check.</p>
   */
  AccountSummary?: Record<string, number>;
}

/**
 * @public
 * <p>The choice level improvement plan.</p>
 */
export interface ChoiceImprovementPlan {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The display text for the improvement plan.</p>
   */
  DisplayText?: string;

  /**
   * <p>The improvement plan URL for a question.</p>
   *         <p>This value is only available if the question has been answered.</p>
   */
  ImprovementPlanUrl?: string;
}

/**
 * @public
 * <p>A list of choices to be updated.</p>
 */
export interface ChoiceUpdate {
  /**
   * <p>The status of a choice.</p>
   */
  Status: ChoiceStatus | string | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;

  /**
   * <p>The notes associated with a choice.</p>
   */
  Notes?: string;
}

/**
 * @public
 */
export interface CreateLensShareInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateLensShareOutput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;
}

/**
 * @public
 * <p>The user has reached their resource quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource affected.</p>
   */
  ResourceType?: string;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
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
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The version of the lens being created.</p>
   */
  LensVersion: string | undefined;

  /**
   * <p>Set to true if this new major lens version.</p>
   */
  IsMajorVersion?: boolean;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateLensVersionOutput {
  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;
}

/**
 * @public
 * <p>Input for milestone creation.</p>
 */
export interface CreateMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>Output of a create milestone call.</p>
 */
export interface CreateMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
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
 * <p>Discovery configuration associated to the workload.</p>
 */
export interface WorkloadDiscoveryConfig {
  /**
   * <p>Discovery integration status in respect to Trusted Advisor for the workload.</p>
   */
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus | string;
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
 * <p>Input for workload creation.</p>
 */
export interface CreateWorkloadInput {
  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName: string | undefined;

  /**
   * <p>The description for the workload.</p>
   */
  Description: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment: WorkloadEnvironment | string | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner?: string;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to be associated with the workload.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Well-Architected discovery configuration settings associated to the workload.</p>
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   */
  Applications?: string[];
}

/**
 * @public
 * <p>Output of a create workload call.</p>
 */
export interface CreateWorkloadOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
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
 * @public
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith: string | undefined;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType: PermissionType | string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ID associated with the workload share.</p>
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
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The status of the lens to be deleted.</p>
   */
  LensStatus: LensStatusType | string | undefined;
}

/**
 * @public
 */
export interface DeleteLensShareInput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>Input for workload deletion.</p>
 */
export interface DeleteWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>Input for Delete Workload Share</p>
 */
export interface DeleteWorkloadShareInput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
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
 * @public
 * <p>Input to disassociate lens reviews.</p>
 */
export interface DisassociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAliases: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be exported.</p>
   */
  LensVersion?: string;
}

/**
 * @public
 */
export interface ExportLensOutput {
  /**
   * <p>The JSON for the lens.</p>
   */
  LensJSON?: string;
}

/**
 * @public
 * <p>Input to get answer.</p>
 */
export interface GetAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

/**
 * @public
 * <p>Output of a get answer call.</p>
 */
export interface GetAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>An answer of the question.</p>
   */
  Answer?: Answer;
}

/**
 * @public
 */
export interface GetLensInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be retrieved.</p>
   */
  LensVersion?: string;
}

/**
 * @public
 * <p>A lens return object.</p>
 */
export interface Lens {
  /**
   * <p>The ARN of a lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The version of a lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  Name?: string;

  /**
   * <p>The description of the lens.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Web Services account ID that owns the lens.</p>
   */
  Owner?: string;

  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags assigned to the lens.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetLensOutput {
  /**
   * <p>A lens return object.</p>
   */
  Lens?: Lens;
}

/**
 * @public
 * <p>Input to get lens review.</p>
 */
export interface GetLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
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
 * @public
 * <p>A pillar review summary of a lens review.</p>
 */
export interface PillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   */
  PillarName?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: Record<string, number>;
}

/**
 * @public
 * <p>A lens review of a question.</p>
 */
export interface LensReview {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   */
  LensStatus?: LensStatus | string;

  /**
   * <p>List of pillar review summaries of lens review in a workload.</p>
   */
  PillarReviewSummaries?: PillarReviewSummary[];

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: Record<string, number>;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Output of a get lens review call.</p>
 */
export interface GetLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>A lens review of a question.</p>
   */
  LensReview?: LensReview;
}

/**
 * @public
 * <p>Input to get lens review report.</p>
 */
export interface GetLensReviewReportInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

/**
 * @public
 * <p>A report of a lens review.</p>
 */
export interface LensReviewReport {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *         <p>This data can be used to create a PDF file.</p>
   */
  Base64String?: string;
}

/**
 * @public
 * <p>Output of a get lens review report call.</p>
 */
export interface GetLensReviewReportOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>A report of a lens review.</p>
   */
  LensReviewReport?: LensReviewReport;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   */
  BaseLensVersion?: string;

  /**
   * <p>The lens version to target a difference for.</p>
   */
  TargetLensVersion?: string;
}

/**
 * @public
 * <p>A question difference return object.</p>
 */
export interface QuestionDifference {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>Indicates the type of change to the question.</p>
   */
  DifferenceStatus?: DifferenceStatus | string;
}

/**
 * @public
 * <p>A pillar difference return object.</p>
 */
export interface PillarDifference {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   */
  PillarName?: string;

  /**
   * <p>Indicates the type of change to the pillar.</p>
   */
  DifferenceStatus?: DifferenceStatus | string;

  /**
   * <p>List of question differences.</p>
   */
  QuestionDifferences?: QuestionDifference[];
}

/**
 * @public
 * <p>The differences between the base and latest versions of the lens.</p>
 */
export interface VersionDifferences {
  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   */
  PillarDifferences?: PillarDifference[];
}

/**
 * @public
 */
export interface GetLensVersionDifferenceOutput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The base version of the lens.</p>
   */
  BaseLensVersion?: string;

  /**
   * <p>The target lens version for the lens.</p>
   */
  TargetLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   */
  LatestLensVersion?: string;

  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   */
  VersionDifferences?: VersionDifferences;
}

/**
 * @public
 * <p>Input to get a milestone.</p>
 */
export interface GetMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
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
 * @public
 * <p>A workload return object.</p>
 */
export interface Workload {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment?: WorkloadEnvironment | string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  ReviewRestrictionDate?: Date;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *         <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: Record<string, number>;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses?: string[];

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags associated with the workload.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Discovery configuration associated to the workload.</p>
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   */
  Applications?: string[];
}

/**
 * @public
 * <p>A milestone return object.</p>
 */
export interface Milestone {
  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  RecordedAt?: Date;

  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

/**
 * @public
 * <p>Output of a get milestone call.</p>
 */
export interface GetMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A milestone return object.</p>
   */
  Milestone?: Milestone;
}

/**
 * @public
 * <p>Input to get a workload.</p>
 */
export interface GetWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;
}

/**
 * @public
 * <p>Output of a get workload call.</p>
 */
export interface GetWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

/**
 * @public
 */
export interface ImportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The JSON representation of a lens.</p>
   */
  JSONString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags to associate to a lens.</p>
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
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The status of the imported lens.</p>
   */
  Status?: ImportLensStatus | string;
}

/**
 * @public
 * <p>An improvement summary of a lens review in a workload.</p>
 */
export interface ImprovementSummary {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The improvement plan URL for a question.</p>
   *         <p>This value is only available if the question has been answered.</p>
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The improvement plan details.</p>
   */
  ImprovementPlans?: ChoiceImprovementPlan[];
}

/**
 * @public
 * <p>A lens review summary of a workload.</p>
 */
export interface LensReviewSummary {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   */
  LensStatus?: LensStatus | string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: Record<string, number>;
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
 * @public
 * <p>A lens share summary return object.</p>
 */
export interface LensShareSummary {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;

  /**
   * <p>Optional message to compliment the Status field.</p>
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
 * @public
 * <p>A lens summary of a lens.</p>
 */
export interface LensSummary {
  /**
   * <p>The ARN of the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The type of the lens.</p>
   */
  LensType?: LensType | string;

  /**
   * <p>The description of the lens.</p>
   */
  Description?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * <p>The status of the lens.</p>
   */
  LensStatus?: LensStatus | string;
}

/**
 * @public
 * <p>Lens upgrade summary return object.</p>
 */
export interface LensUpgradeSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>The current version of the lens.</p>
   */
  CurrentLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   */
  LatestLensVersion?: string;
}

/**
 * @public
 * <p>Input to list answers.</p>
 */
export interface ListAnswersInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Output of a list answers call.</p>
 */
export interface ListAnswersOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>List of answer summaries of lens review in a workload.</p>
   */
  AnswerSummaries?: AnswerSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCheckDetailsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>Well-Architected Lens ARN.</p>
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsOutput {
  /**
   * <p>The details about the Trusted Advisor checks related to the Well-Architected best practice.</p>
   */
  CheckDetails?: CheckDetail[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCheckSummariesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>Well-Architected Lens ARN.</p>
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesOutput {
  /**
   * <p>List of Trusted Advisor summaries related to the Well-Architected best practice.</p>
   */
  CheckSummaries?: CheckSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Input to list lenses.</p>
 */
export interface ListLensesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The type of lenses to be returned.</p>
   */
  LensType?: LensType | string;

  /**
   * <p>The status of lenses to be returned.</p>
   */
  LensStatus?: LensStatusType | string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;
}

/**
 * @public
 * <p>Output of a list lenses call.</p>
 */
export interface ListLensesOutput {
  /**
   * <p>List of lens summaries of available lenses.</p>
   */
  LensSummaries?: LensSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Input to list lens review improvements.</p>
 */
export interface ListLensReviewImprovementsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Output of a list lens review improvements call.</p>
 */
export interface ListLensReviewImprovementsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>List of improvement summaries of lens review in a workload.</p>
   */
  ImprovementSummaries?: ImprovementSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Input to list lens reviews.</p>
 */
export interface ListLensReviewsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Output of a list lens reviews call.</p>
 */
export interface ListLensReviewsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>List of lens summaries of lens reviews of a workload.</p>
   */
  LensReviewSummaries?: LensReviewSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLensSharesInput {
  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the lens is shared.</p>
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;
}

/**
 * @public
 */
export interface ListLensSharesOutput {
  /**
   * <p>A list of lens share summaries.</p>
   */
  LensShareSummaries?: LensShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Input to list all milestones for a workload.</p>
 */
export interface ListMilestonesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A workload summary return object.</p>
 */
export interface WorkloadSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses?: string[];

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: Record<string, number>;

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;
}

/**
 * @public
 * <p>A milestone summary return object.</p>
 */
export interface MilestoneSummary {
  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  RecordedAt?: Date;

  /**
   * <p>A workload summary return object.</p>
   */
  WorkloadSummary?: WorkloadSummary;
}

/**
 * @public
 * <p>Output of a list milestones call.</p>
 */
export interface ListMilestonesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A list of milestone summaries.</p>
   */
  MilestoneSummaries?: MilestoneSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
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
 * @public
 * <p>A notification summary return object.</p>
 */
export interface NotificationSummary {
  /**
   * <p>The type of notification.</p>
   */
  Type?: NotificationType | string;

  /**
   * <p>Summary of lens upgrade.</p>
   */
  LensUpgradeSummary?: LensUpgradeSummary;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>List of lens notification summaries in a workload.</p>
   */
  NotificationSummaries?: NotificationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ShareResourceType = {
  LENS: "LENS",
  WORKLOAD: "WORKLOAD",
} as const;

/**
 * @public
 */
export type ShareResourceType = (typeof ShareResourceType)[keyof typeof ShareResourceType];

/**
 * @public
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>An optional string added to the beginning of each lens name returned in the results.</p>
   */
  LensNamePrefix?: string;

  /**
   * <p>The type of share invitations to be returned.</p>
   */
  ShareResourceType?: ShareResourceType | string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A share invitation summary return object.</p>
 */
export interface ShareInvitationSummary {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  SharedBy?: string;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The resource type of the share invitation.</p>
   */
  ShareResourceType?: ShareResourceType | string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;
}

/**
 * @public
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsOutput {
  /**
   * <p>List of share invitation summaries in a workload.</p>
   */
  ShareInvitationSummaries?: ShareInvitationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Input to list all workloads.</p>
 */
export interface ListWorkloadsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Output of a list workloads call.</p>
 */
export interface ListWorkloadsOutput {
  /**
   * <p>A list of workload summaries.</p>
   */
  WorkloadSummaries?: WorkloadSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;
}

/**
 * @public
 * <p>A workload share summary return object.</p>
 */
export interface WorkloadShareSummary {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;

  /**
   * <p>Optional message to compliment the Status field.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A list of workload share summaries.</p>
   */
  WorkloadShareSummaries?: WorkloadShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
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
 * <p>The share invitation.</p>
 */
export interface ShareInvitation {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>The resource type of the share invitation.</p>
   */
  ShareResourceType?: ShareResourceType | string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;
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
   */
  WorkloadArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
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
   */
  WorkloadArn: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags of the resource
   *             whose keys are members of this list are removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 * <p>Input to update answer.</p>
 */
export interface UpdateAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of choices to update on a question in your workload.  The String key
   *             corresponds to the choice ID to be updated.</p>
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate>;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The reason why a question is not applicable to your workload.</p>
   */
  Reason?: AnswerReason | string;
}

/**
 * @public
 * <p>Output of a update answer call.</p>
 */
export interface UpdateAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The ARN for the lens.</p>
   */
  LensArn?: string;

  /**
   * <p>An answer of the question.</p>
   */
  Answer?: Answer;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * <p>The status of organization sharing settings.</p>
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | string;
}

/**
 * @public
 * <p>Input for update lens review.</p>
 */
export interface UpdateLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   */
  LensNotes?: string;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   */
  PillarNotes?: Record<string, string>;
}

/**
 * @public
 * <p>Output of a update lens review call.</p>
 */
export interface UpdateLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A lens review of a question.</p>
   */
  LensReview?: LensReview;
}

/**
 * @public
 * <p>Input for Update Share Invitation</p>
 */
export interface UpdateShareInvitationInput {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId: string | undefined;

  /**
   * <p>Share invitation action taken by contributor.</p>
   */
  ShareInvitationAction: ShareInvitationAction | string | undefined;
}

/**
 * @public
 */
export interface UpdateShareInvitationOutput {
  /**
   * <p>The updated workload or custom lens share invitation.</p>
   */
  ShareInvitation?: ShareInvitation;
}

/**
 * @public
 * <p>Input to update a workload.</p>
 */
export interface UpdateWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment?: WorkloadEnvironment | string;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner?: string;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *         <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;

  /**
   * <p>Well-Architected discovery configuration settings to associate to the workload.</p>
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig;

  /**
   * <p>List of AppRegistry application ARNs to associate to the workload.</p>
   */
  Applications?: string[];
}

/**
 * @public
 * <p>Output of an update workload call.</p>
 */
export interface UpdateWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

/**
 * @public
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareInput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType: PermissionType | string | undefined;
}

/**
 * @public
 * <p>A workload share return object.</p>
 */
export interface WorkloadShare {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;

  /**
   * <p>An Amazon Web Services account ID.</p>
   */
  SharedBy?: string;

  /**
   * <p>The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;
}

/**
 * @public
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A workload share return object.</p>
   */
  WorkloadShare?: WorkloadShare;
}

/**
 * @public
 */
export interface UpgradeLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *         <p>For Amazon Web Services official lenses, this is either the lens alias,
   *             such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p>
   *         <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}
