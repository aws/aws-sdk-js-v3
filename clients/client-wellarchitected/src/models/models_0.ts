// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccountJiraIssueManagementStatus,
  AdditionalResourceType,
  AnswerReason,
  ApplicationType,
  CheckFailureReason,
  CheckProvider,
  CheckStatus,
  ChoiceReason,
  ChoiceStatus,
  ContextType,
  Criticality,
  DefinitionType,
  DifferenceStatus,
  DiscoveryIntegrationStatus,
  Effort,
  FeedbackCategory,
  GenerationStatus,
  ImpactCategory,
  ImportLensStatus,
  IntegratingService,
  IntegrationStatus,
  IntegrationStatusInput,
  IssueManagementType,
  LensStatus,
  LensStatusType,
  LensType,
  MetricType,
  NotificationType,
  OrganizationSharingStatus,
  PermissionType,
  Pillar,
  Priority,
  ProfileNotificationType,
  ProfileOwnerType,
  Question,
  QuestionPriority,
  QuestionType,
  RecommendationFeedbackType,
  RecommendationItemType,
  RecommendationSource,
  RecommendationState,
  RecommendationStatus,
  RecommendationType,
  RemediationType,
  ReportFormat,
  ReviewTemplateAnswerStatus,
  ReviewTemplateUpdateStatus,
  Risk,
  RiskRating,
  ShareInvitationAction,
  ShareResourceType,
  ShareStatus,
  TrustedAdvisorIntegrationStatus,
  WorkloadEnvironment,
  WorkloadImprovementStatus,
  WorkloadIssueManagementStatus,
} from "./enums";

/**
 * Account-level: Input for the Jira configuration.
 *
 * @public
 */
export interface AccountJiraConfigurationInput {
  /**
   * Account-level: Jira issue management status.
   *
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * Account-level: Jira issue management type.
   *
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * Account-level: Jira project key to sync workloads to.
   *
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * Account-level: Configuration status of the Jira integration.
   *
   * @public
   */
  IntegrationStatus?: IntegrationStatusInput | undefined;
}

/**
 * Account-level: Output configuration of the Jira integration.
 *
 * @public
 */
export interface AccountJiraConfigurationOutput {
  /**
   * Account-level: Configuration status of the Jira integration.
   *
   * @public
   */
  IntegrationStatus?: IntegrationStatus | undefined;

  /**
   * Account-level: Jira issue management status.
   *
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * Account-level: Jira issue management type.
   *
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * Account-level: Jira subdomain URL.
   *
   * @public
   */
  Subdomain?: string | undefined;

  /**
   * Account-level: Jira project key to sync workloads to.
   *
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * Account-level: Status message on configuration of the Jira integration.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * The choice content.
 *
 * @public
 */
export interface ChoiceContent {
  /**
   * The display text for the choice content.
   *
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * The URL for the choice content.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The choice level additional resources for a custom lens.
 *
 * This field does not apply to Amazon Web Services official lenses.
 *
 * @public
 */
export interface AdditionalResources {
  /**
   * Type of additional resource for a custom lens.
   *
   * @public
   */
  Type?: AdditionalResourceType | undefined;

  /**
   * The URLs for additional resources, either helpful resources or improvement plans, for a custom lens. Up to five additional URLs can be specified.
   *
   * @public
   */
  Content?: ChoiceContent[] | undefined;
}

/**
 * Configuration settings that define the scope of Amazon Web Services resources to analyze for optimization recommendations.
 *
 * @public
 */
export interface AggregationConfiguration {
  /**
   * The Amazon Web Services account ID to analyze.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * A list of Amazon Web Services Regions to include in the analysis.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The ARN of an IAM role to assume for resource analysis in this account.
   *
   * @public
   */
  accessRoleArn: string | undefined;
}

/**
 * A key-value pair associated with a resource for cost allocation and access control.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Summary of an optimization profile, including its configuration, metadata, and audit information.
 *
 * @public
 */
export interface AgentProfileSummary {
  /**
   * The system name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The display name of the profile shown to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business overview for this profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars associated with this profile.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled for the profile.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The ARN of the IAM execution role used for recommendation actions.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The aggregation configuration that defines which Amazon Web Services accounts and Regions to analyze.
   *
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the optimization profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Indicates whether the profile is valid for scheduled recommendation generation.
   *
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * Indicates whether the profile is valid for manual architecture generation.
   *
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * A map of field paths to error messages for invalid or missing input fields.
   *
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * The tags associated with the profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The identifier of the user or system that created this profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this profile.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the profile was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * Summary of a recommendation generation process initiated through the agent API.
 *
 * @public
 */
export interface AgentRecommendationGenerationSummary {
  /**
   * The unique identifier of the recommendation generation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile used for this generation.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The name of the recommendation generation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the recommendation generation.
   *
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * The estimated time for the generation to complete.
   *
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * The identifier of the user or system that started this generation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the generation was started.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this generation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the generation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * Summary of an agent recommendation item, representing an Amazon Web Services resource or recommendation affected by the optimization recommendation.
 *
 * @public
 */
export interface AgentRecommendationItemSummary {
  /**
   * The unique identifier of the recommendation item.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The type of the recommendation item.
   *
   * @public
   */
  type: RecommendationItemType | undefined;

  /**
   * Metadata containing a snapshot of the resource or recommendation at the time of generation.
   *
   * @public
   */
  metadata: __DocumentType | undefined;

  /**
   * The identifier of the user or system that created this recommendation item.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the recommendation item was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this recommendation item.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the recommendation item was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * An external reference associated with remediation steps.
 *
 * @public
 */
export interface ResourceLink {
  /**
   * The URL of the external reference.
   *
   * @public
   */
  url: string | undefined;

  /**
   * An optional human-readable title for the link.
   *
   * @public
   */
  title?: string | undefined;
}

/**
 * One step within a remediation procedure.
 *
 * @public
 */
export interface RemediationStep {
  /**
   * An optional short label for the step.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The content describing the step, which can include code examples and verification checklists.
   *
   * @public
   */
  content: string | undefined;
}

/**
 * The core fields for a remediation.
 *
 * @public
 */
export interface AgentRecommendationRemediation {
  /**
   * The ARN of the recommendation that this remediation belongs to.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The remediation method.
   *
   * @public
   */
  type: RemediationType | undefined;

  /**
   * The procedural steps to perform the remediation.
   *
   * @public
   */
  steps: RemediationStep[] | undefined;

  /**
   * External references associated with the steps.
   *
   * @public
   */
  resourceLinks?: ResourceLink[] | undefined;

  /**
   * The identifier of the user or system that created this remediation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the remediation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this remediation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the remediation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * A return-on-investment estimate with context.
 *
 * @public
 */
export interface Roi {
  /**
   * A short statistic or key metric. Optional when there is no quantifiable figure.
   *
   * @public
   */
  estimate?: string | undefined;

  /**
   * A sentence providing context for the estimate.
   *
   * @public
   */
  detail: string | undefined;
}

/**
 * Summary of an agent optimization recommendation returned by list operations.
 *
 * @public
 */
export interface AgentRecommendationSummary {
  /**
   * The Amazon Resource Name (ARN) of the recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The identifier of the generation process that produced this recommendation.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * The title of the recommendation.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the recommendation.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The type of the recommendation.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The Well-Architected Tool Framework pillar that the recommendation addresses.
   *
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * The priority of the recommendation.
   *
   * @public
   */
  priority: Priority | undefined;

  /**
   * The effort required to implement the recommendation.
   *
   * @public
   */
  effort: Effort | undefined;

  /**
   * The current status of the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The current state of the recommendation.
   *
   * @public
   */
  state: RecommendationState | undefined;

  /**
   * The free-text reason associated with the recommendation's most recent status update.
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * The severity of the recommendation's impact.
   *
   * @public
   */
  impact: ImpactCategory | undefined;

  /**
   * The return on investment estimate for the recommendation.
   *
   * @public
   */
  roi: Roi | undefined;

  /**
   * The number of Amazon Web Services resources this recommendation affects.
   *
   * @public
   */
  numberOfResources?: number | undefined;

  /**
   * The Amazon Web Services services that the recommendation applies to.
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The business units that own the affected resources.
   *
   * @public
   */
  businessUnits?: string[] | undefined;

  /**
   * The applications that the recommendation targets.
   *
   * @public
   */
  applications?: string[] | undefined;

  /**
   * The identifier of the user or system that created this recommendation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the recommendation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this recommendation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the recommendation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * A choice that has been answered on a question in your workload.
 *
 * @public
 */
export interface ChoiceAnswer {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The status of a choice.
   *
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * The reason why a choice is non-applicable to a question in your workload.
   *
   * @public
   */
  Reason?: ChoiceReason | undefined;

  /**
   * The notes associated with a choice.
   *
   * @public
   */
  Notes?: string | undefined;
}

/**
 * A choice available to answer question.
 *
 * @public
 */
export interface Choice {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The title of a choice.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The description of a choice.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The helpful resource (both text and URL) for a particular choice.
   *
   * This field only applies to custom lenses. Each choice can have only one helpful resource.
   *
   * @public
   */
  HelpfulResource?: ChoiceContent | undefined;

  /**
   * The improvement plan (both text and URL) for a particular choice.
   *
   * This field only applies to custom lenses. Each choice can have only one improvement plan.
   *
   * @public
   */
  ImprovementPlan?: ChoiceContent | undefined;

  /**
   * The additional resources for a choice in a custom lens.
   *
   * A choice can have up to two additional resources: one of type `HELPFUL_RESOURCE`, one of type `IMPROVEMENT_PLAN`, or both.
   *
   * @public
   */
  AdditionalResources?: AdditionalResources[] | undefined;
}

/**
 * Configuration of the Jira integration.
 *
 * @public
 */
export interface JiraConfiguration {
  /**
   * The URL of the associated Jira issue.
   *
   * @public
   */
  JiraIssueUrl?: string | undefined;

  /**
   * The date and time when the Jira configuration was last synced.
   *
   * @public
   */
  LastSyncedTime?: Date | undefined;
}

/**
 * An answer of the question.
 *
 * @public
 */
export interface Answer {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * The description of the question.
   *
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * The improvement plan URL for a question in an Amazon Web Services official lenses.
   *
   * This value is only available if the question has been answered.
   *
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * The helpful resource URL.
   *
   * For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.
   *
   * For custom lenses, this is the helpful resource URL for a question and is only provided if `HelpfulResourceDisplayText` was specified for the question.
   *
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * The helpful resource text to be displayed for a custom lens.
   *
   * This field does not apply to Amazon Web Services official lenses.
   *
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * List of choices available for a question.
   *
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of selected choices to a question in your workload.
   *
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The risk for a given workload, lens review, pillar, or question.
   *
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The reason why the question is not applicable to your workload.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * Configuration of the Jira integration.
   *
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * A choice summary that has been answered on a question in your workload.
 *
 * @public
 */
export interface ChoiceAnswerSummary {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The status of a choice.
   *
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * The reason why a choice is non-applicable to a question in your workload.
   *
   * @public
   */
  Reason?: ChoiceReason | undefined;
}

/**
 * An answer summary of a lens review in a workload.
 *
 * @public
 */
export interface AnswerSummary {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * List of choices available for a question.
   *
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of selected choices to a question in your workload.
   *
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The risk for a given workload, lens review, pillar, or question.
   *
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * The reason why a choice is non-applicable to a question in your workload.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * The type of the question.
   *
   * @public
   */
  QuestionType?: QuestionType | undefined;

  /**
   * Configuration of the Jira integration.
   *
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * Input to associate lens reviews.
 *
 * @public
 */
export interface AssociateLensesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.
   *
   * Identify a lens using its LensSummary$LensAlias.
   *
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name for which validation failed.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Description of the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociateProfilesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The list of profile ARNs to associate with the workload.
   *
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * A best practice, or question choice, that has been identified as a risk in this question.
 *
 * @public
 */
export interface BestPractice {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The title of a choice.
   *
   * @public
   */
  ChoiceTitle?: string | undefined;
}

/**
 * Account details for a Well-Architected best practice in relation to Trusted Advisor checks.
 *
 * @public
 */
export interface CheckDetail {
  /**
   * Trusted Advisor check ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Trusted Advisor check name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Trusted Advisor check description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Provider of the check related to the best practice.
   *
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * Well-Architected Lens ARN associated to the check.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * Status associated to the check.
   *
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Count of flagged resources associated to the check.
   *
   * @public
   */
  FlaggedResources?: number | undefined;

  /**
   * Reason associated to the check.
   *
   * @public
   */
  Reason?: CheckFailureReason | undefined;

  /**
   * The date and time when the check was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Trusted Advisor check summary.
 *
 * @public
 */
export interface CheckSummary {
  /**
   * Trusted Advisor check ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Trusted Advisor check name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Provider of the check related to the best practice.
   *
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * Trusted Advisor check description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time when the check summary was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Well-Architected Lens ARN associated to the check.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * Status associated to the check.
   *
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * Account summary associated to the check.
   *
   * @public
   */
  AccountSummary?: Partial<Record<CheckStatus, number>> | undefined;
}

/**
 * The choice level improvement plan.
 *
 * This value is only applicable to custom lenses.
 *
 * @public
 */
export interface ChoiceImprovementPlan {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The display text for the improvement plan.
   *
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * The improvement plan URL for a question in an Amazon Web Services official lenses.
   *
   * This value is only available if the question has been answered.
   *
   * @public
   */
  ImprovementPlanUrl?: string | undefined;
}

/**
 * A list of choices to be updated.
 *
 * @public
 */
export interface ChoiceUpdate {
  /**
   * The status of a choice.
   *
   * @public
   */
  Status: ChoiceStatus | undefined;

  /**
   * The reason why a choice is non-applicable to a question in your workload.
   *
   * @public
   */
  Reason?: ChoiceReason | undefined;

  /**
   * The notes associated with a choice.
   *
   * @public
   */
  Notes?: string | undefined;
}

/**
 * A metric for a particular question in the pillar.
 *
 * @public
 */
export interface QuestionMetric {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The risk for a given workload, lens review, pillar, or question.
   *
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * The best practices, or choices, that have been identified as contributing to risk in a question.
   *
   * @public
   */
  BestPractices?: BestPractice[] | undefined;
}

/**
 * A metric for a particular pillar in a lens.
 *
 * @public
 */
export interface PillarMetric {
  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The questions that have been identified as risks in the pillar.
   *
   * @public
   */
  Questions?: QuestionMetric[] | undefined;
}

/**
 * A metric for a particular lens in a workload.
 *
 * @public
 */
export interface LensMetric {
  /**
   * The lens ARN.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The metrics for the pillars in a lens.
   *
   * @public
   */
  Pillars?: PillarMetric[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * A metric that contributes to the consolidated report.
 *
 * @public
 */
export interface ConsolidatedReportMetric {
  /**
   * The metric type of a metric in the consolidated report. Currently only WORKLOAD metric types are supported.
   *
   * @public
   */
  MetricType?: MetricType | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * The date and time when the consolidated report metric was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The metrics for the lenses in the workload.
   *
   * @public
   */
  Lenses?: LensMetric[] | undefined;

  /**
   * The total number of lenses applied to the workload.
   *
   * @public
   */
  LensesAppliedCount?: number | undefined;
}

/**
 * A key-value pair representing a resource tag used to scope context content.
 *
 * @public
 */
export interface ContextResourceTag {
  /**
   * The tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Typed content structure for a context. Contains application-specific fields that describe the environment used during recommendation generation.
 *
 * @public
 */
export interface ContextContent {
  /**
   * The Amazon Web Services account IDs associated with this application context.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The Amazon Web Services Regions where this application operates.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The Amazon Web Services services used by this application.
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The Amazon Web Services resource types relevant to this application.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * Resource tags used to scope this application context.
   *
   * @public
   */
  resourceTags?: ContextResourceTag[] | undefined;

  /**
   * A free-form overview of the application.
   *
   * @public
   */
  applicationOverview?: string | undefined;

  /**
   * The industry vertical for this application.
   *
   * @public
   */
  industry?: string | undefined;

  /**
   * The type of the application.
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * The business criticality of the application.
   *
   * @public
   */
  criticality?: Criticality | undefined;

  /**
   * A free-form description of the application architecture.
   *
   * @public
   */
  architectureOverview?: string | undefined;

  /**
   * Additional context not captured by other fields.
   *
   * @public
   */
  additionalContext?: string | undefined;
}

/**
 * Summary of a context associated with a profile, representing application or environment information used during recommendation generation.
 *
 * @public
 */
export interface ContextSummary {
  /**
   * The unique identifier of the context.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The title of the context.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The type of the context.
   *
   * @public
   */
  contextType: ContextType | undefined;

  /**
   * The typed content of the context, containing application-specific fields such as account IDs, Regions, services, and resource types.
   *
   * @public
   */
  content: ContextContent | undefined;

  /**
   * The type of application described by this context.
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * The business criticality of the application described by this context.
   *
   * @public
   */
  criticality?: Criticality | undefined;

  /**
   * The identifier of the user or system that created this context.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the context was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this context.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the context was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAgentContextRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile to associate the context with.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The title of the context.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The type of the context.
   *
   * @public
   */
  contextType: ContextType | undefined;

  /**
   * The typed content of the context. The structure contains application-specific fields such as account IDs, Regions, services, and resource types.
   *
   * @public
   */
  content: ContextContent | undefined;
}

/**
 * @public
 */
export interface CreateAgentContextResponse {
  /**
   * The created context summary.
   *
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface CreateAgentGoalRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile to associate the goal with.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars to associate with this goal.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * The title of the goal.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the goal.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Summary of an optimization goal associated with a profile.
 *
 * @public
 */
export interface GoalSummary {
  /**
   * The unique identifier of the goal.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars associated with this goal.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * The title of the goal.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the goal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the user or system that created this goal.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the goal was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this goal.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the goal was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAgentGoalResponse {
  /**
   * The created goal summary.
   *
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface CreateAgentProfileRequest {
  /**
   * The system name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The display name of the profile shown to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business overview for this profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars to associate with this profile.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled for the profile.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The ARN of the IAM execution role used for recommendation actions.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The aggregation configuration that defines which Amazon Web Services accounts and Regions to analyze.
   *
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to associate with the profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAgentProfileResponse {
  /**
   * The system name of the created profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The display name of the created profile.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the created profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business overview of the created profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars associated with the created profile.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The ARN of the IAM execution role.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The aggregation configuration.
   *
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Indicates whether the profile is valid for scheduled recommendation generation.
   *
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * Indicates whether the profile is valid for manual architecture generation.
   *
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * A map of field paths to error messages for invalid or missing input fields.
   *
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * The tags associated with the created profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The identifier of the user or system that created this profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this profile.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the profile was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateLensShareInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensShareOutput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The version of the lens being created.
   *
   * @public
   */
  LensVersion: string | undefined;

  /**
   * Set to true if this new major lens version.
   *
   * @public
   */
  IsMajorVersion?: boolean | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionOutput {
  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The version of the lens.
   *
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * Input for milestone creation.
 *
 * @public
 */
export interface CreateMilestoneInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The name of the milestone in a workload.
   *
   * Milestone names must be unique within a workload.
   *
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Output of a create milestone call.
 *
 * @public
 */
export interface CreateMilestoneOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * An update to a profile question.
 *
 * @public
 */
export interface ProfileQuestionUpdate {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The selected choices.
   *
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateProfileInput {
  /**
   * Name of the profile.
   *
   * @public
   */
  ProfileName: string | undefined;

  /**
   * The profile description.
   *
   * @public
   */
  ProfileDescription: string | undefined;

  /**
   * The profile questions.
   *
   * @public
   */
  ProfileQuestions: ProfileQuestionUpdate[] | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags assigned to the profile.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProfileOutput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * Version of the profile.
   *
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileShareInput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileShareOutput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateReviewTemplateInput {
  /**
   * Name of the review template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The review template description.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Lenses applied to the review template.
   *
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The tags assigned to the review template.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReviewTemplateOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateShareInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateShareOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * Discovery configuration associated to the workload.
 *
 * @public
 */
export interface WorkloadDiscoveryConfig {
  /**
   * Discovery integration status in respect to Trusted Advisor for the workload.
   *
   * @public
   */
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus | undefined;

  /**
   * The mode to use for identifying resources associated with the workload.
   *
   * You can specify `WORKLOAD_METADATA`, `APP_REGISTRY`, or both.
   *
   * @public
   */
  WorkloadResourceDefinition?: DefinitionType[] | undefined;
}

/**
 * Workload-level: Input for the Jira configuration.
 *
 * @public
 */
export interface WorkloadJiraConfigurationInput {
  /**
   * Workload-level: Jira issue management status.
   *
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * Workload-level: Jira issue management type.
   *
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * Workload-level: Jira project key to sync workloads to.
   *
   * @public
   */
  JiraProjectKey?: string | undefined;
}

/**
 * Input for workload creation.
 *
 * @public
 */
export interface CreateWorkloadInput {
  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName: string | undefined;

  /**
   * The description for the workload.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The environment for the workload.
   *
   * @public
   */
  Environment: WorkloadEnvironment | undefined;

  /**
   * The list of Amazon Web Services account IDs associated with the workload.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The list of Amazon Web Services Regions associated with the workload, for example, `us-east-2`, or `ca-central-1`.
   *
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * The list of non-Amazon Web Services Regions associated with the workload.
   *
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * The URL of the architectural design for the workload.
   *
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
   *
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * The industry type for the workload.
   *
   * If specified, must be one of the following:
   *
   * - `Agriculture`
   * - `Automobile`
   * - `Defense`
   * - `Design and Engineering`
   * - `Digital Advertising`
   * - `Education`
   * - `Environmental Protection`
   * - `Financial Services`
   * - `Gaming`
   * - `General Public Services`
   * - `Healthcare`
   * - `Hospitality`
   * - `InfoTech`
   * - `Justice and Public Safety`
   * - `Life Sciences`
   * - `Manufacturing`
   * - `Media & Entertainment`
   * - `Mining & Resources`
   * - `Oil & Gas`
   * - `Power & Utilities`
   * - `Professional Services`
   * - `Real Estate & Construction`
   * - `Retail & Wholesale`
   * - `Social Protection`
   * - `Telecommunications`
   * - `Travel, Transportation & Logistics`
   * - `Other`
   *
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * The industry for the workload.
   *
   * @public
   */
  Industry?: string | undefined;

  /**
   * The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias.
   *
   * If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.
   *
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags to be associated with the workload.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Well-Architected discovery configuration settings associated to the workload.
   *
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * List of AppRegistry application ARNs associated to the workload.
   *
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * The list of profile ARNs associated with the workload.
   *
   * @public
   */
  ProfileArns?: string[] | undefined;

  /**
   * The list of review template ARNs to associate with the workload.
   *
   * @public
   */
  ReviewTemplateArns?: string[] | undefined;

  /**
   * Jira configuration settings when creating a workload.
   *
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
}

/**
 * Output of a create workload call.
 *
 * @public
 */
export interface CreateWorkloadOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn?: string | undefined;
}

/**
 * Input for Create Workload Share
 *
 * @public
 */
export interface CreateWorkloadShareInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith: string | undefined;

  /**
   * Permission granted on a share request.
   *
   * @public
   */
  PermissionType: PermissionType | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Input for Create Workload Share
 *
 * @public
 */
export interface CreateWorkloadShareOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * A benefit on a different pillar from acting on the recommendation.
 *
 * @public
 */
export interface CrossPillarBenefit {
  /**
   * The pillar that would be positively impacted.
   *
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * A short phrase describing the outcome.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of what changes and why it matters.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The severity of the benefit.
   *
   * @public
   */
  impact: ImpactCategory | undefined;
}

/**
 * @public
 */
export interface DeleteAgentContextRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile containing the context.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the context to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentContextResponse {}

/**
 * @public
 */
export interface DeleteAgentGoalRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile containing the goal.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the goal to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentGoalResponse {}

/**
 * @public
 */
export interface DeleteAgentProfileRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile to delete.
   *
   * @public
   */
  profileArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentProfileResponse {}

/**
 * @public
 */
export interface DeleteLensInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The status of the lens to be deleted.
   *
   * @public
   */
  LensStatus: LensStatusType | undefined;
}

/**
 * @public
 */
export interface DeleteLensShareInput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileInput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileShareInput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId: string | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteReviewTemplateInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateShareInput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId: string | undefined;

  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Input for workload deletion.
 *
 * @public
 */
export interface DeleteWorkloadInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Input for Delete Workload Share
 *
 * @public
 */
export interface DeleteWorkloadShareInput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId: string | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Input to disassociate lens reviews.
 *
 * @public
 */
export interface DisassociateLensesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.
   *
   * Identify a lens using its LensSummary$LensAlias.
   *
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateProfilesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The list of profile ARNs to disassociate from the workload.
   *
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * Details about an error that occurred during recommendation generation.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The status code identifying the type of error.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A human-readable description of the error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ExportLensInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The lens version to be exported.
   *
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * @public
 */
export interface ExportLensOutput {
  /**
   * The JSON representation of a lens.
   *
   * @public
   */
  LensJSON?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentContextRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile containing the context.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the context to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAgentContextResponse {
  /**
   * The retrieved context summary.
   *
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface GetAgentGoalRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile containing the goal.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the goal to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAgentGoalResponse {
  /**
   * The retrieved goal summary.
   *
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface GetAgentProfileRequest {
  /**
   * The Amazon Resource Name (ARN) of the optimization profile to retrieve.
   *
   * @public
   */
  profileArn: string | undefined;
}

/**
 * @public
 */
export interface GetAgentProfileResponse {
  /**
   * The system name of the profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The display name of the profile.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business overview of the profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars associated with the profile.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The ARN of the IAM execution role.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The aggregation configuration.
   *
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Indicates whether the profile is valid for scheduled recommendation generation.
   *
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * Indicates whether the profile is valid for manual architecture generation.
   *
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * A map of field paths to error messages for invalid or missing input fields.
   *
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * The tags associated with the profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The identifier of the user or system that created this profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this profile.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the profile was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommendation to retrieve.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * Optional filter on remediation type.
   *
   * @public
   */
  remediationType?: RemediationType | undefined;
}

/**
 * Contains information about a goal associated with a recommendation.
 *
 * @public
 */
export interface RecommendationGoal {
  /**
   * The title of the goal associated with the recommendation.
   *
   * @public
   */
  title: string | undefined;
}

/**
 * An insight describing a usage pattern and the signals detected.
 *
 * @public
 */
export interface Insight {
  /**
   * A description of the usage pattern.
   *
   * @public
   */
  usagePattern: string | undefined;

  /**
   * A description of the signals detected.
   *
   * @public
   */
  signalsDetected?: string | undefined;
}

/**
 * A high-level remediation summary returned in the detail response.
 *
 * @public
 */
export interface RemediationSummary {
  /**
   * A short imperative statement of the recommended action.
   *
   * @public
   */
  recommendation: string | undefined;

  /**
   * High-level steps to implement the fix.
   *
   * @public
   */
  steps: string[] | undefined;
}

/**
 * A negative trade-off from acting on the recommendation.
 *
 * @public
 */
export interface TradeOff {
  /**
   * The pillar that could be negatively impacted.
   *
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * A short phrase describing what is lost or degraded.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the specific risk and the condition that triggers it.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The risk rating for the trade-off.
   *
   * @public
   */
  risk: RiskRating | undefined;

  /**
   * A specific action to mitigate the trade-off and when to take it.
   *
   * @public
   */
  mitigation: string | undefined;

  /**
   * An optional explanation providing additional context for the risk rating.
   *
   * @public
   */
  riskExplanation?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The identifier of the generation process that produced this recommendation.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * The title of the recommendation.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the recommendation.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The type of the recommendation.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The Well-Architected Tool Framework pillar that the recommendation addresses.
   *
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * The priority of the recommendation.
   *
   * @public
   */
  priority: Priority | undefined;

  /**
   * The effort required to implement the recommendation.
   *
   * @public
   */
  effort: Effort | undefined;

  /**
   * The current status of the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The current state of the recommendation.
   *
   * @public
   */
  state: RecommendationState | undefined;

  /**
   * The free-text reason associated with the recommendation's most recent status update.
   *
   * @public
   */
  updateReason?: string | undefined;

  /**
   * The severity of the recommendation's impact.
   *
   * @public
   */
  impact: ImpactCategory | undefined;

  /**
   * The return on investment estimate for the recommendation.
   *
   * @public
   */
  roi: Roi | undefined;

  /**
   * The number of Amazon Web Services resources this recommendation affects.
   *
   * @public
   */
  numberOfResources?: number | undefined;

  /**
   * The Amazon Web Services services that the recommendation applies to.
   *
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * The business units that own the affected resources.
   *
   * @public
   */
  businessUnits?: string[] | undefined;

  /**
   * The applications that the recommendation targets.
   *
   * @public
   */
  applications?: string[] | undefined;

  /**
   * Detailed impact information for the recommendation.
   *
   * @public
   */
  impactDetails: string[] | undefined;

  /**
   * A list of insights about the recommendation.
   *
   * @public
   */
  insights: Insight[] | undefined;

  /**
   * Highlights describing what was detected.
   *
   * @public
   */
  highlights: string[] | undefined;

  /**
   * A high-level summary of the recommended remediation.
   *
   * @public
   */
  remediationSummary: RemediationSummary | undefined;

  /**
   * Cross-pillar benefits of acting on the recommendation.
   *
   * @public
   */
  crossPillarBenefits?: CrossPillarBenefit[] | undefined;

  /**
   * Trade-offs of acting on the recommendation.
   *
   * @public
   */
  tradeOffs?: TradeOff[] | undefined;

  /**
   * Sources that generated this recommendation.
   *
   * @public
   */
  sources?: RecommendationSource[] | undefined;

  /**
   * Goals that this recommendation targets.
   *
   * @public
   */
  goals?: RecommendationGoal[] | undefined;

  /**
   * A set of key-value pairs associated with the recommendation, used for cost allocation and access control.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The identifier of the user or system that created this recommendation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the recommendation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this recommendation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the recommendation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * A list of remediations for the recommendation.
   *
   * @public
   */
  remediations?: AgentRecommendationRemediation[] | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationGenerationRequest {
  /**
   * The ARN of the optimization profile associated with this generation.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the recommendation generation to retrieve.
   *
   * @public
   */
  generationId: string | undefined;
}

/**
 * Progress information for a recommendation generation process.
 *
 * @public
 */
export interface Progress {
  /**
   * The number of generation steps that have been completed.
   *
   * @public
   */
  stepsCompleted: number | undefined;

  /**
   * The total number of steps in the generation process.
   *
   * @public
   */
  totalSteps: number | undefined;

  /**
   * The completion percentage of the generation process (0-100).
   *
   * @public
   */
  completionPercentage: number | undefined;
}

/**
 * Item configuration for a specific Well-Architected Tool Framework pillar.
 *
 * @public
 */
export interface PillarItem {
  /**
   * The pillar this item configuration applies to.
   *
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * A list of item IDs to process for this pillar, such as best practice IDs, Amazon Web Services service names, or resource ARNs.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Defines the scope for recommendation generation, specifying which pillars and goals to focus on.
 *
 * @public
 */
export interface Scope {
  /**
   * The Well-Architected Tool Framework pillars to include in the generation scope.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Specific goal IDs to focus on during recommendation generation.
   *
   * @public
   */
  goalIds?: string[] | undefined;

  /**
   * Optional per-pillar item filtering configuration.
   *
   * @public
   */
  items?: PillarItem[] | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationGenerationResponse {
  /**
   * The unique identifier of the recommendation generation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile used for this generation.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The name of the recommendation generation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the recommendation generation.
   *
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * The estimated time for the generation to complete.
   *
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * The identifier of the user or system that started this generation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the generation was started.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this generation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the generation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * Additional context information provided to guide the recommendation generation process.
   *
   * @public
   */
  additionalContext?: __DocumentType | undefined;

  /**
   * The scope configuration that defines which pillars and goals to focus on during generation.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The timestamp when the recommendation generation process started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp when the recommendation generation process completed.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * Current progress information including steps completed and completion percentage.
   *
   * @public
   */
  progress?: Progress | undefined;

  /**
   * Details about the error if the generation status is ERROR.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * Input to get answer.
 *
 * @public
 */
export interface GetAnswerInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * Output of a get answer call.
 *
 * @public
 */
export interface GetAnswerOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * An answer of the question.
   *
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportInput {
  /**
   * The format of the consolidated report.
   *
   * For `PDF`, `Base64String` is returned. For `JSON`, `Metrics` is returned.
   *
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * Set to `true` to have shared resources included in the report.
   *
   * @public
   */
  IncludeSharedResources?: boolean | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportOutput {
  /**
   * The metrics that make up the consolidated report.
   *
   * Only returned when `JSON` format is requested.
   *
   * @public
   */
  Metrics?: ConsolidatedReportMetric[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Base64-encoded string representation of a lens review report.
   *
   * This data can be used to create a PDF file.
   *
   * Only returned by GetConsolidatedReport when `PDF` format is requested.
   *
   * @public
   */
  Base64String?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsOutput {
  /**
   * Amazon Web Services Organizations sharing status.
   *
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * Discovery integration status.
   *
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * Jira configuration status.
   *
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface GetLensInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The lens version to be retrieved.
   *
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * A lens return object.
 *
 * @public
 */
export interface Lens {
  /**
   * The ARN of a lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The version of a lens.
   *
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the lens.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the lens.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * The tags assigned to the lens.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLensOutput {
  /**
   * A lens return object.
   *
   * @public
   */
  Lens?: Lens | undefined;
}

/**
 * Input to get lens review.
 *
 * @public
 */
export interface GetLensReviewInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * The selected pillar.
 *
 * @public
 */
export interface SelectedPillar {
  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * Selected question IDs in the selected pillar.
   *
   * @public
   */
  SelectedQuestionIds?: string[] | undefined;
}

/**
 * Selected questions in the workload.
 *
 * @public
 */
export interface JiraSelectedQuestionConfiguration {
  /**
   * Selected pillars in the workload.
   *
   * @public
   */
  SelectedPillars?: SelectedPillar[] | undefined;
}

/**
 * A pillar review summary of a lens review.
 *
 * @public
 */
export interface PillarReviewSummary {
  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The name of the pillar.
   *
   * @public
   */
  PillarName?: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * The profile associated with a workload.
 *
 * @public
 */
export interface WorkloadProfile {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The profile version.
   *
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * A lens review of a question.
 *
 * @public
 */
export interface LensReview {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The version of the lens.
   *
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;

  /**
   * The status of the lens.
   *
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * List of pillar review summaries of lens review in a workload.
   *
   * @public
   */
  PillarReviewSummaries?: PillarReviewSummary[] | undefined;

  /**
   * Jira configuration status of the Lens review.
   *
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;

  /**
   * The date and time when the lens review was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The profiles associated with the workload.
   *
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * Output of a get lens review call.
 *
 * @public
 */
export interface GetLensReviewOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * A lens review of a question.
   *
   * @public
   */
  LensReview?: LensReview | undefined;
}

/**
 * Input to get lens review report.
 *
 * @public
 */
export interface GetLensReviewReportInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * A report of a lens review.
 *
 * @public
 */
export interface LensReviewReport {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The Base64-encoded string representation of a lens review report.
   *
   * This data can be used to create a PDF file.
   *
   * Only returned by GetConsolidatedReport when `PDF` format is requested.
   *
   * @public
   */
  Base64String?: string | undefined;
}

/**
 * Output of a get lens review report call.
 *
 * @public
 */
export interface GetLensReviewReportOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * A report of a lens review.
   *
   * @public
   */
  LensReviewReport?: LensReviewReport | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The base version of the lens.
   *
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * The lens version to target a difference for.
   *
   * @public
   */
  TargetLensVersion?: string | undefined;
}

/**
 * A question difference return object.
 *
 * @public
 */
export interface QuestionDifference {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * Indicates the type of change to the question.
   *
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;
}

/**
 * A pillar difference return object.
 *
 * @public
 */
export interface PillarDifference {
  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The name of the pillar.
   *
   * @public
   */
  PillarName?: string | undefined;

  /**
   * Indicates the type of change to the pillar.
   *
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;

  /**
   * List of question differences.
   *
   * @public
   */
  QuestionDifferences?: QuestionDifference[] | undefined;
}

/**
 * The differences between the base and latest versions of the lens.
 *
 * @public
 */
export interface VersionDifferences {
  /**
   * The differences between the base and latest versions of the lens.
   *
   * @public
   */
  PillarDifferences?: PillarDifference[] | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceOutput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The base version of the lens.
   *
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * The target lens version for the lens.
   *
   * @public
   */
  TargetLensVersion?: string | undefined;

  /**
   * The latest version of the lens.
   *
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * The differences between the base and latest versions of the lens.
   *
   * @public
   */
  VersionDifferences?: VersionDifferences | undefined;
}

/**
 * Input to get a milestone.
 *
 * @public
 */
export interface GetMilestoneInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber: number | undefined;
}

/**
 * Workload-level: Output configuration of the Jira integration.
 *
 * @public
 */
export interface WorkloadJiraConfigurationOutput {
  /**
   * Workload-level: Jira issue management status.
   *
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * Workload-level: Jira issue management type.
   *
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * Workload-level: Jira project key to sync workloads to.
   *
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * Workload-level: Status message on configuration of the Jira integration.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * A workload return object.
 *
 * @public
 */
export interface Workload {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The description for the workload.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The environment for the workload.
   *
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * The date and time when the workload was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The list of Amazon Web Services account IDs associated with the workload.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The list of Amazon Web Services Regions associated with the workload, for example, `us-east-2`, or `ca-central-1`.
   *
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * The list of non-Amazon Web Services Regions associated with the workload.
   *
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * The URL of the architectural design for the workload.
   *
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
   *
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * The review restriction date for the workload.
   *
   * @public
   */
  ReviewRestrictionDate?: Date | undefined;

  /**
   * Flag indicating whether the workload owner has acknowledged that the *Review owner* field is required.
   *
   * If a **Review owner** is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.
   *
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * The industry type for the workload.
   *
   * If specified, must be one of the following:
   *
   * - `Agriculture`
   * - `Automobile`
   * - `Defense`
   * - `Design and Engineering`
   * - `Digital Advertising`
   * - `Education`
   * - `Environmental Protection`
   * - `Financial Services`
   * - `Gaming`
   * - `General Public Services`
   * - `Healthcare`
   * - `Hospitality`
   * - `InfoTech`
   * - `Justice and Public Safety`
   * - `Life Sciences`
   * - `Manufacturing`
   * - `Media & Entertainment`
   * - `Mining & Resources`
   * - `Oil & Gas`
   * - `Power & Utilities`
   * - `Professional Services`
   * - `Real Estate & Construction`
   * - `Retail & Wholesale`
   * - `Social Protection`
   * - `Telecommunications`
   * - `Travel, Transportation & Logistics`
   * - `Other`
   *
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * The industry for the workload.
   *
   * @public
   */
  Industry?: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The improvement status for a workload.
   *
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias.
   *
   * If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.
   *
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * The tags associated with the workload.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Discovery configuration associated to the workload.
   *
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * List of AppRegistry application ARNs associated to the workload.
   *
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * Profile associated with a workload.
   *
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * Jira configuration for a specific workload.
   *
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationOutput | undefined;
}

/**
 * A milestone return object.
 *
 * @public
 */
export interface Milestone {
  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The name of the milestone in a workload.
   *
   * Milestone names must be unique within a workload.
   *
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * The date and time when the milestone was recorded.
   *
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * A workload return object.
   *
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * Output of a get milestone call.
 *
 * @public
 */
export interface GetMilestoneOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * A milestone return object.
   *
   * @public
   */
  Milestone?: Milestone | undefined;
}

/**
 * @public
 */
export interface GetProfileInput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * The profile version.
   *
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * The profile choice.
 *
 * @public
 */
export interface ProfileChoice {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The title of a choice.
   *
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * The description of a choice.
   *
   * @public
   */
  ChoiceDescription?: string | undefined;
}

/**
 * A profile question.
 *
 * @public
 */
export interface ProfileQuestion {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * The description of the question.
   *
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * The question choices.
   *
   * @public
   */
  QuestionChoices?: ProfileChoice[] | undefined;

  /**
   * The selected choices.
   *
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;

  /**
   * The minimum number of selected choices.
   *
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * The maximum number of selected choices.
   *
   * @public
   */
  MaxSelectedChoices?: number | undefined;
}

/**
 * A profile.
 *
 * @public
 */
export interface Profile {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The profile version.
   *
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * The profile name.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The profile description.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * Profile questions.
   *
   * @public
   */
  ProfileQuestions?: ProfileQuestion[] | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when the profile was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the profile was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * The tags assigned to the profile.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProfileOutput {
  /**
   * The profile.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetProfileTemplateInput {}

/**
 * A profile template choice.
 *
 * @public
 */
export interface ProfileTemplateChoice {
  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * The title of a choice.
   *
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * The description of a choice.
   *
   * @public
   */
  ChoiceDescription?: string | undefined;
}

/**
 * A profile template question.
 *
 * @public
 */
export interface ProfileTemplateQuestion {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * The description of the question.
   *
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * The question choices.
   *
   * @public
   */
  QuestionChoices?: ProfileTemplateChoice[] | undefined;

  /**
   * The minimum number of choices selected.
   *
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * The maximum number of choices selected.
   *
   * @public
   */
  MaxSelectedChoices?: number | undefined;
}

/**
 * The profile template.
 *
 * @public
 */
export interface ProfileTemplate {
  /**
   * The name of the profile template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * Profile template questions.
   *
   * @public
   */
  TemplateQuestions?: ProfileTemplateQuestion[] | undefined;

  /**
   * The date and time when the profile template was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the profile template was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProfileTemplateOutput {
  /**
   * The profile template.
   *
   * @public
   */
  ProfileTemplate?: ProfileTemplate | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * A review template.
 *
 * @public
 */
export interface ReviewTemplate {
  /**
   * The review template description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The lenses applied to the review template.
   *
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A count of how many total questions are answered and unanswered in the review template.
   *
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when the review template was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The name of the review template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The tags assigned to the review template.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The latest status of a review template.
   *
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;

  /**
   * The ID assigned to the template share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateOutput {
  /**
   * The review template.
   *
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;
}

/**
 * An answer of the question.
 *
 * @public
 */
export interface ReviewTemplateAnswer {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * The description of the question.
   *
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * The improvement plan URL for a question in an Amazon Web Services official lenses.
   *
   * This value is only available if the question has been answered.
   *
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * The helpful resource URL.
   *
   * For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.
   *
   * For custom lenses, this is the helpful resource URL for a question and is only provided if `HelpfulResourceDisplayText` was specified for the question.
   *
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * The helpful resource text to be displayed for a custom lens.
   *
   * > **Note:** This field does not apply to Amazon Web Services official lenses.
   *
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * List of choices available for a question.
   *
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of selected choices to a question in your review template.
   *
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The status of whether or not this question has been answered.
   *
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The reason why the question is not applicable to your review template.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * An answer of the question.
   *
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;
}

/**
 * Summary of a review template.
 *
 * @public
 */
export interface ReviewTemplatePillarReviewSummary {
  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The name of the pillar.
   *
   * @public
   */
  PillarName?: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A count of how many questions are answered and unanswered in the requested pillar of the lens review.
   *
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;
}

/**
 * The lens review of a review template.
 *
 * @public
 */
export interface ReviewTemplateLensReview {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The lens ARN.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The version of the lens.
   *
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;

  /**
   * The status of the lens.
   *
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * Pillar review summaries of a lens review.
   *
   * @public
   */
  PillarReviewSummaries?: ReviewTemplatePillarReviewSummary[] | undefined;

  /**
   * The date and time when the review template lens review was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A count of how many questions are answered and unanswered in the lens review.
   *
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A lens review of a question.
   *
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
}

/**
 * Input to get a workload.
 *
 * @public
 */
export interface GetWorkloadInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;
}

/**
 * Output of a get workload call.
 *
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * A workload return object.
   *
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * @public
 */
export interface ImportLensInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The JSON representation of a lens.
   *
   * @public
   */
  JSONString: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags to associate to a lens.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportLensOutput {
  /**
   * The ARN for the lens that was created or updated.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The status of the imported lens.
   *
   * @public
   */
  Status?: ImportLensStatus | undefined;
}

/**
 * An improvement summary of a lens review in a workload.
 *
 * @public
 */
export interface ImprovementSummary {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * The risk for a given workload, lens review, pillar, or question.
   *
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * The improvement plan URL for a question in an Amazon Web Services official lenses.
   *
   * This value is only available if the question has been answered.
   *
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * The improvement plan details.
   *
   * This value is only applicable to custom lenses.
   *
   * @public
   */
  ImprovementPlans?: ChoiceImprovementPlan[] | undefined;

  /**
   * Configuration of the Jira integration.
   *
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * A lens review summary of a workload.
 *
 * @public
 */
export interface LensReviewSummary {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The version of the lens.
   *
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;

  /**
   * The status of the lens.
   *
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * The date and time when the lens review was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The profiles associated with the workload.
   *
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * A lens share summary return object.
 *
 * @public
 */
export interface LensShareSummary {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * Optional message to compliment the Status field.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * A lens summary of a lens.
 *
 * @public
 */
export interface LensSummary {
  /**
   * The ARN of the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;

  /**
   * The type of the lens.
   *
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * The description of the lens.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time when the lens was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the lens was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The version of the lens.
   *
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The status of the lens.
   *
   * @public
   */
  LensStatus?: LensStatus | undefined;
}

/**
 * Lens upgrade summary return object.
 *
 * @public
 */
export interface LensUpgradeSummary {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The current version of the lens.
   *
   * @public
   */
  CurrentLensVersion?: string | undefined;

  /**
   * The latest version of the lens.
   *
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * `ResourceArn` of the lens being upgraded
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentContextsRequest {
  /**
   * The Amazon Resource Name (ARN) of the profile to list contexts for.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentContextsResponse {
  /**
   * A list of context summaries associated with the profile.
   *
   * @public
   */
  items: ContextSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentGoalsRequest {
  /**
   * The Amazon Resource Name (ARN) of the optimization profile to list goals for.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The maximum number of goals to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentGoalsResponse {
  /**
   * A list of goal summaries associated with the profile.
   *
   * @public
   */
  items: GoalSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentProfilesRequest {
  /**
   * The maximum number of profiles to return in a single call. Default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentProfilesResponse {
  /**
   * A list of profile summaries.
   *
   * @public
   */
  items: AgentProfileSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationGenerationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the optimization profile to list generation processes for.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * Optional filter by recommendation type.
   *
   * @public
   */
  recommendationType?: RecommendationType | undefined;

  /**
   * The maximum number of generation processes to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationGenerationsResponse {
  /**
   * A list of recommendation generation summaries.
   *
   * @public
   */
  items: AgentRecommendationGenerationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationItemsRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommendation to list items for.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * Optional filter to return only recommendation items of the specified type.
   *
   * @public
   */
  type?: RecommendationItemType | undefined;

  /**
   * The maximum number of recommendation items to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationItemsResponse {
  /**
   * A list of recommendation items with their detailed metadata and configuration information.
   *
   * @public
   */
  items: AgentRecommendationItemSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the optimization profile to list recommendations for.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The maximum number of recommendations to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned from a previous call to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional filter to return only recommendations with the specified state (OPEN or CLOSED).
   *
   * @public
   */
  state?: RecommendationState | undefined;

  /**
   * Optional filter to return only recommendations for the specified pillar.
   *
   * @public
   */
  pillar?: Pillar | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationsResponse {
  /**
   * A list of recommendation summaries.
   *
   * @public
   */
  items: AgentRecommendationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next set of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input to list answers.
 *
 * @public
 */
export interface ListAnswersInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The priority of the question.
   *
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
}

/**
 * Output of a list answers call.
 *
 * @public
 */
export interface ListAnswersOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * List of answer summaries of lens review in a workload.
   *
   * @public
   */
  AnswerSummaries?: AnswerSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Well-Architected Lens ARN.
   *
   * @public
   */
  LensArn: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;

  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsOutput {
  /**
   * The details about the Trusted Advisor checks related to the Well-Architected best practice.
   *
   * @public
   */
  CheckDetails?: CheckDetail[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Well-Architected Lens ARN.
   *
   * @public
   */
  LensArn: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;

  /**
   * The ID of a choice.
   *
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesOutput {
  /**
   * List of Trusted Advisor summaries related to the Well-Architected best practice.
   *
   * @public
   */
  CheckSummaries?: CheckSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to list lenses.
 *
 * @public
 */
export interface ListLensesInput {
  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The type of lenses to be returned.
   *
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * The status of lenses to be returned.
   *
   * @public
   */
  LensStatus?: LensStatusType | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;
}

/**
 * Output of a list lenses call.
 *
 * @public
 */
export interface ListLensesOutput {
  /**
   * List of lens summaries of available lenses.
   *
   * @public
   */
  LensSummaries?: LensSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to list lens review improvements.
 *
 * @public
 */
export interface ListLensReviewImprovementsInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The priority of the question.
   *
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
}

/**
 * Output of a list lens review improvements call.
 *
 * @public
 */
export interface ListLensReviewImprovementsOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * List of improvement summaries of lens review in a workload.
   *
   * @public
   */
  ImprovementSummaries?: ImprovementSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to list lens reviews.
 *
 * @public
 */
export interface ListLensReviewsInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Output of a list lens reviews call.
 *
 * @public
 */
export interface ListLensReviewsOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * List of lens summaries of lens reviews of a workload.
   *
   * @public
   */
  LensReviewSummaries?: LensReviewSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLensSharesInput {
  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the lens is shared.
   *
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface ListLensSharesOutput {
  /**
   * A list of lens share summaries.
   *
   * @public
   */
  LensShareSummaries?: LensShareSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to list all milestones for a workload.
 *
 * @public
 */
export interface ListMilestonesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A workload summary return object.
 *
 * @public
 */
export interface WorkloadSummary {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when the workload was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias.
   *
   * If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.
   *
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * The improvement status for a workload.
   *
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * Profile associated with a workload.
   *
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * A map from risk names to the count of how many questions have that rating.
   *
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * A milestone summary return object.
 *
 * @public
 */
export interface MilestoneSummary {
  /**
   * The milestone number.
   *
   * A workload can have a maximum of 100 milestones.
   *
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * The name of the milestone in a workload.
   *
   * Milestone names must be unique within a workload.
   *
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * The date and time when the milestone was recorded.
   *
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * A workload summary return object.
   *
   * @public
   */
  WorkloadSummary?: WorkloadSummary | undefined;
}

/**
 * Output of a list milestones call.
 *
 * @public
 */
export interface ListMilestonesOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * A list of milestone summaries.
   *
   * @public
   */
  MilestoneSummaries?: MilestoneSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ARN for the related resource for the notification.
   *
   * > **Note:** Only one of `WorkloadID` or `ResourceARN` should be specified.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * A notification summary return object.
 *
 * @public
 */
export interface NotificationSummary {
  /**
   * The type of notification.
   *
   * @public
   */
  Type?: NotificationType | undefined;

  /**
   * Summary of lens upgrade.
   *
   * @public
   */
  LensUpgradeSummary?: LensUpgradeSummary | undefined;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * List of lens notification summaries in a workload.
   *
   * @public
   */
  NotificationSummaries?: NotificationSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The profile notification summary.
 *
 * @public
 */
export interface ProfileNotificationSummary {
  /**
   * The current profile version.
   *
   * @public
   */
  CurrentProfileVersion?: string | undefined;

  /**
   * The latest profile version.
   *
   * @public
   */
  LatestProfileVersion?: string | undefined;

  /**
   * Type of notification.
   *
   * @public
   */
  Type?: ProfileNotificationType | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The profile name.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsOutput {
  /**
   * Notification summaries.
   *
   * @public
   */
  NotificationSummaries?: ProfileNotificationSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilesInput {
  /**
   * An optional string added to the beginning of each profile name returned in the results.
   *
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * Profile owner type.
   *
   * @public
   */
  ProfileOwnerType?: ProfileOwnerType | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of a profile.
 *
 * @public
 */
export interface ProfileSummary {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The profile version.
   *
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * The profile name.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The profile description.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when the profile was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the profile was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProfilesOutput {
  /**
   * Profile summaries.
   *
   * @public
   */
  ProfileSummaries?: ProfileSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileSharesInput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.
   *
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * Summary of a profile share.
 *
 * @public
 */
export interface ProfileShareSummary {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * Profile share invitation status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileSharesOutput {
  /**
   * Profile share summaries.
   *
   * @public
   */
  ProfileShareSummaries?: ProfileShareSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersInput {
  /**
   * The ARN of the review template.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of review template answers.
 *
 * @public
 */
export interface ReviewTemplateAnswerSummary {
  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * The ID used to identify a pillar, for example, `security`.
   *
   * A pillar is identified by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarId?: string | undefined;

  /**
   * The title of the question.
   *
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * List of choices available for a question.
   *
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of selected choices to a question in the review template.
   *
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The status of whether or not this question has been answered.
   *
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * The reason why a choice is not-applicable to a question in the review template.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * The type of question.
   *
   * @public
   */
  QuestionType?: QuestionType | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersOutput {
  /**
   * The ARN of the review template.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * List of answer summaries of a lens review in a review template.
   *
   * @public
   */
  AnswerSummaries?: ReviewTemplateAnswerSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesInput {
  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of a review template.
 *
 * @public
 */
export interface ReviewTemplateSummary {
  /**
   * Description of the review template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Lenses associated with the review template.
   *
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The date and time when the review template was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The name of the review template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The latest status of a review template.
   *
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesOutput {
  /**
   * List of review templates.
   *
   * @public
   */
  ReviewTemplates?: ReviewTemplateSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for List Share Invitations
 *
 * @public
 */
export interface ListShareInvitationsInput {
  /**
   * An optional string added to the beginning of each workload name returned in the results.
   *
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * An optional string added to the beginning of each lens name returned in the results.
   *
   * @public
   */
  LensNamePrefix?: string | undefined;

  /**
   * The type of share invitations to be returned.
   *
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional string added to the beginning of each profile name returned in the results.
   *
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * An optional string added to the beginning of each review template name returned in the results.
   *
   * @public
   */
  TemplateNamePrefix?: string | undefined;
}

/**
 * A share invitation summary return object.
 *
 * @public
 */
export interface ShareInvitationSummary {
  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * Permission granted on a share request.
   *
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * The resource type of the share invitation.
   *
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The full name of the lens.
   *
   * @public
   */
  LensName?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The profile name.
   *
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The name of the review template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * Input for List Share Invitations
 *
 * @public
 */
export interface ListShareInvitationsOutput {
  /**
   * List of share invitation summaries in a workload.
   *
   * @public
   */
  ShareInvitationSummaries?: ShareInvitationSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags for the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplateSharesInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.
   *
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * Summary of a review template share.
 *
 * @public
 */
export interface TemplateShareSummary {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * Review template share invitation status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateSharesOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A review template share summary return object.
   *
   * @public
   */
  TemplateShareSummaries?: TemplateShareSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input to list all workloads.
 *
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * An optional string added to the beginning of each workload name returned in the results.
   *
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Output of a list workloads call.
 *
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * A list of workload summaries.
   *
   * @public
   */
  WorkloadSummaries?: WorkloadSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Input for List Workload Share
 *
 * @public
 */
export interface ListWorkloadSharesInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload is shared.
   *
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * A workload share summary return object.
 *
 * @public
 */
export interface WorkloadShareSummary {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * Permission granted on a share request.
   *
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * Optional message to compliment the Status field.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Input for List Workload Share
 *
 * @public
 */
export interface ListWorkloadSharesOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * A list of workload share summaries.
   *
   * @public
   */
  WorkloadShareSummaries?: WorkloadShareSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAgentRecommendationFeedbackRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommendation to provide feedback for.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The type of feedback being provided.
   *
   * @public
   */
  type: RecommendationFeedbackType | undefined;

  /**
   * Optional category classifying the nature of the feedback.
   *
   * @public
   */
  feedbackCategory?: FeedbackCategory | undefined;

  /**
   * Optional comments providing additional context about the feedback.
   *
   * @public
   */
  comments?: string | undefined;
}

/**
 * @public
 */
export interface PutAgentRecommendationFeedbackResponse {}

/**
 * The share invitation.
 *
 * @public
 */
export interface ShareInvitation {
  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * The resource type of the share invitation.
   *
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface StartAgentRecommendationGenerationRequest {
  /**
   * The Amazon Resource Name (ARN) of the optimization profile to use for generating recommendations.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The types of recommendations to generate.
   *
   * @public
   */
  types: RecommendationType[] | undefined;

  /**
   * An optional name for this generation process to help identify it in lists and logs.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Optional additional context to guide the recommendation generation, such as specific business requirements or constraints.
   *
   * @public
   */
  additionalContext?: __DocumentType | undefined;

  /**
   * Scope configuration to focus the generation on specific pillars or goals.
   *
   * @public
   */
  scope: Scope | undefined;
}

/**
 * @public
 */
export interface StartAgentRecommendationGenerationResponse {
  /**
   * The unique identifier of the recommendation generation.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile used for this generation.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The name of the recommendation generation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the recommendation generation.
   *
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * The estimated time for the generation to complete.
   *
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * The identifier of the user or system that started this generation.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the generation was started.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this generation.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the generation was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * The tags for the resource.
   *
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
   * The ARN for the workload.
   *
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateAgentContextRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile containing the context.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the context to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated title of the context.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The updated typed content of the context. The structure contains application-specific fields such as account IDs, Regions, services, and resource types.
   *
   * @public
   */
  content?: ContextContent | undefined;
}

/**
 * @public
 */
export interface UpdateAgentContextResponse {
  /**
   * The updated context summary.
   *
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface UpdateAgentGoalRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile containing the goal to update.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The unique identifier of the goal to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated pillars for the goal. Pillars define the optimization focus areas such as cost, performance, resilience, and operational excellence.
   *
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * The updated title for the goal. Maximum length of 1000 characters.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A description of the goal.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentGoalResponse {
  /**
   * The updated goal summary.
   *
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface UpdateAgentProfileRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the profile to update.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The updated display name of the profile.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The updated description of the profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated ARN of the IAM execution role.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The updated aggregation configuration.
   *
   * @public
   */
  aggregationConfiguration?: AggregationConfiguration[] | undefined;

  /**
   * The updated business overview for the profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The updated Well-Architected Tool Framework pillars for the profile.
   *
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled for the profile.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAgentProfileResponse {
  /**
   * The system name of the updated profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The display name of the updated profile.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the updated profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The business overview of the updated profile.
   *
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * The Well-Architected Tool Framework pillars associated with the updated profile.
   *
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * Indicates whether deletion protection is enabled.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The ARN of the IAM execution role.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The aggregation configuration.
   *
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated profile.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Indicates whether the profile is valid for scheduled recommendation generation.
   *
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * Indicates whether the profile is valid for manual architecture generation.
   *
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * A map of field paths to error messages for invalid or missing input fields.
   *
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * The tags associated with the updated profile.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The identifier of the user or system that created this profile.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The timestamp when the profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The identifier of the user or system that last modified this profile.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The timestamp when the profile was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRecommendationStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the recommendation to update.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The new status to assign to the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * A free-text reason explaining this status update.
   *
   * @public
   */
  updateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRecommendationStatusResponse {}

/**
 * Input to update answer.
 *
 * @public
 */
export interface UpdateAnswerInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.
   *
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The reason why a question is not applicable to your workload.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * Output of a update answer call.
 *
 * @public
 */
export interface UpdateAnswerOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * The ARN for the lens.
   *
   * @public
   */
  LensArn?: string | undefined;

  /**
   * An answer of the question.
   *
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * The status of organization sharing settings.
   *
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * The status of discovery support settings.
   *
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * The status of Jira integration settings.
   *
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Which integrated service to update.
   *
   * @public
   */
  IntegratingService: IntegratingService | undefined;
}

/**
 * Input for update lens review.
 *
 * @public
 */
export interface UpdateLensReviewInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * List of pillar notes of a lens review in a workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;

  /**
   * Configuration of the Jira integration.
   *
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;
}

/**
 * Output of a update lens review call.
 *
 * @public
 */
export interface UpdateLensReviewOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * A lens review of a question.
   *
   * @public
   */
  LensReview?: LensReview | undefined;
}

/**
 * @public
 */
export interface UpdateProfileInput {
  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * The profile description.
   *
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * Profile questions.
   *
   * @public
   */
  ProfileQuestions?: ProfileQuestionUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileOutput {
  /**
   * The profile.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The review template name.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The review template description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A list of lens aliases or ARNs to apply to the review template.
   *
   * @public
   */
  LensesToAssociate?: string[] | undefined;

  /**
   * A list of lens aliases or ARNs to unapply to the review template. The `wellarchitected` lens cannot be unapplied.
   *
   * @public
   */
  LensesToDisassociate?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateOutput {
  /**
   * A review template.
   *
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The ID of the question.
   *
   * @public
   */
  QuestionId: string | undefined;

  /**
   * List of selected choice IDs in a question answer.
   *
   * The values entered replace the previously selected choices.
   *
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * A list of choices to be updated.
   *
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Defines whether this question is applicable to a lens review.
   *
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * The update reason.
   *
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * An answer of the question.
   *
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewInput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * List of pillar notes of a lens review in a workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewOutput {
  /**
   * The review template ARN.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A lens review of a question.
   *
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
}

/**
 * Input for Update Share Invitation
 *
 * @public
 */
export interface UpdateShareInvitationInput {
  /**
   * The ID assigned to the share invitation.
   *
   * @public
   */
  ShareInvitationId: string | undefined;

  /**
   * Share invitation action taken by contributor.
   *
   * @public
   */
  ShareInvitationAction: ShareInvitationAction | undefined;
}

/**
 * @public
 */
export interface UpdateShareInvitationOutput {
  /**
   * The updated workload or custom lens share invitation.
   *
   * @public
   */
  ShareInvitation?: ShareInvitation | undefined;
}

/**
 * Input to update a workload.
 *
 * @public
 */
export interface UpdateWorkloadInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The description for the workload.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The environment for the workload.
   *
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * The list of Amazon Web Services account IDs associated with the workload.
   *
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * The list of Amazon Web Services Regions associated with the workload, for example, `us-east-2`, or `ca-central-1`.
   *
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * The list of non-Amazon Web Services Regions associated with the workload.
   *
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.
   *
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * The URL of the architectural design for the workload.
   *
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
   *
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * Flag indicating whether the workload owner has acknowledged that the *Review owner* field is required.
   *
   * If a **Review owner** is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.
   *
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * The industry type for the workload.
   *
   * If specified, must be one of the following:
   *
   * - `Agriculture`
   * - `Automobile`
   * - `Defense`
   * - `Design and Engineering`
   * - `Digital Advertising`
   * - `Education`
   * - `Environmental Protection`
   * - `Financial Services`
   * - `Gaming`
   * - `General Public Services`
   * - `Healthcare`
   * - `Hospitality`
   * - `InfoTech`
   * - `Justice and Public Safety`
   * - `Life Sciences`
   * - `Manufacturing`
   * - `Media & Entertainment`
   * - `Mining & Resources`
   * - `Oil & Gas`
   * - `Power & Utilities`
   * - `Professional Services`
   * - `Real Estate & Construction`
   * - `Retail & Wholesale`
   * - `Social Protection`
   * - `Telecommunications`
   * - `Travel, Transportation & Logistics`
   * - `Other`
   *
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * The industry for the workload.
   *
   * @public
   */
  Industry?: string | undefined;

  /**
   * The notes associated with the workload.
   *
   * For a review template, these are the notes that will be associated with the workload when the template is applied.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * The improvement status for a workload.
   *
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * Well-Architected discovery configuration settings to associate to the workload.
   *
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * List of AppRegistry application ARNs to associate to the workload.
   *
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * Configuration of the Jira integration.
   *
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
}

/**
 * Output of an update workload call.
 *
 * @public
 */
export interface UpdateWorkloadOutput {
  /**
   * A workload return object.
   *
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * Input for Update Workload Share
 *
 * @public
 */
export interface UpdateWorkloadShareInput {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId: string | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * Permission granted on a share request.
   *
   * @public
   */
  PermissionType: PermissionType | undefined;
}

/**
 * A workload share return object.
 *
 * @public
 */
export interface WorkloadShare {
  /**
   * The ID associated with the share.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * An Amazon Web Services account ID.
   *
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
   *
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * Permission granted on a share request.
   *
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * The status of the share request.
   *
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * The name of the workload.
   *
   * The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.
   *
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;
}

/**
 * Input for Update Workload Share
 *
 * @public
 */
export interface UpdateWorkloadShareOutput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * A workload share return object.
   *
   * @public
   */
  WorkloadShare?: WorkloadShare | undefined;
}

/**
 * @public
 */
export interface UpgradeLensReviewInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * The name of the milestone in a workload.
   *
   * Milestone names must be unique within a workload.
   *
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeProfileVersionInput {
  /**
   * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
   *
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * The profile ARN.
   *
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * The name of the milestone in a workload.
   *
   * Milestone names must be unique within a workload.
   *
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeReviewTemplateLensReviewInput {
  /**
   * The ARN of the review template.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The alias of the lens.
   *
   * For Amazon Web Services official lenses, this is either the lens alias, such as `serverless`, or the lens ARN, such as `arn:aws:wellarchitected:us-east-1::lens/serverless`. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.
   *
   * For custom lenses, this is the lens ARN, such as `arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef`.
   *
   * Each lens is identified by its LensSummary$LensAlias.
   *
   * @public
   */
  LensAlias: string | undefined;

  /**
   * A unique case-sensitive string used to ensure that this request is idempotent (executes only once).
   *
   * You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * > **Important:** This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}
