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
  GenerationType,
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
  OrganizationalReportFormat,
  OrganizationalReportState,
  OrganizationSharingStatus,
  PermissionType,
  Pillar,
  PreferenceKey,
  PreferenceState,
  PreferenceStatus,
  Priority,
  ProfileNotificationType,
  ProfileOwnerType,
  ProfileType,
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
 * <p>Account-level: Input for the Jira configuration.</p>
 * @public
 */
export interface AccountJiraConfigurationInput {
  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatusInput | undefined;
}

/**
 * <p>Account-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface AccountJiraConfigurationOutput {
  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatus | undefined;

  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Account-level: Jira subdomain URL.</p>
   * @public
   */
  Subdomain?: string | undefined;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Account-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>The choice content.</p>
 * @public
 */
export interface ChoiceContent {
  /**
   * <p>The display text for the choice content.</p>
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * <p>The URL for the choice content.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>The choice level additional resources for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p>
 * @public
 */
export interface AdditionalResources {
  /**
   * <p>Type of additional resource for a custom lens.</p>
   * @public
   */
  Type?: AdditionalResourceType | undefined;

  /**
   * <p>The URLs for additional resources, either helpful resources or improvement plans, for a custom lens. Up to five additional URLs can be specified.</p>
   * @public
   */
  Content?: ChoiceContent[] | undefined;
}

/**
 * <p>Configuration settings that define the scope of Amazon Web Services resources to analyze for optimization recommendations.</p>
 * @public
 */
export interface AggregationConfiguration {
  /**
   * <p>The Amazon Web Services account ID to analyze.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions to include in the analysis.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The ARN of an IAM role to assume for resource analysis in this account.</p>
   * @public
   */
  accessRoleArn: string | undefined;
}

/**
 * <p>An individual account entry in the organizational monitoring boundary, with its associated regions.</p>
 * @public
 */
export interface OrganizationalAccountEntry {
  /**
   * <p>The Amazon Web Services account ID to include in the monitoring boundary.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The list of regions to monitor for this account.</p>
   * @public
   */
  regions: string[] | undefined;
}

/**
 * <p>An organizational unit or root entry in the organizational monitoring boundary, with its associated regions.</p>
 * @public
 */
export interface OrganizationalUnitEntry {
  /**
   * <p>The AWS Organizations organizational unit ID or root ID. Must match the pattern <code>r-[a-z0-9]\{4,32\}</code> for roots or <code>ou-[a-z0-9]\{4,32\}-[a-z0-9]\{8,32\}</code> for OUs.</p>
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * <p>The list of regions to monitor for this organizational unit or root.</p>
   * @public
   */
  regions: string[] | undefined;
}

/**
 * <p>The organizational monitoring boundary configuration. Contains organizational unit entries and individual account entries, each with their own region selections, that define the scope for organizational profile analysis.</p>
 * @public
 */
export interface OrganizationalAggregationConfiguration {
  /**
   * <p>A list of organizational unit or root entries that define the organizational scope. Each entry specifies an OU or root ID and the regions to monitor within it.</p>
   * @public
   */
  organizationalUnits?: OrganizationalUnitEntry[] | undefined;

  /**
   * <p>A list of individual account entries that define additional accounts to include. Each entry specifies an account ID and the regions to monitor within it.</p>
   * @public
   */
  accounts?: OrganizationalAccountEntry[] | undefined;
}

/**
 * <p>Summary of an optimization profile, including its configuration, metadata, and audit information.</p>
 * @public
 */
export interface AgentProfileSummary {
  /**
   * <p>The system name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the profile shown to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview for this profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with this profile. Not present for basic profiles.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled for the profile.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The type of the profile.</p>
   * @public
   */
  profileType?: ProfileType | undefined;

  /**
   * <p>The ARN of the IAM execution role used for recommendation actions. Not present for basic profiles.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The aggregation configuration that defines which Amazon Web Services accounts and Regions to analyze. Not present for basic profiles.</p>
   * @public
   */
  aggregationConfiguration?: AggregationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the user or system that created this profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The organizational monitoring boundary. Present only for organizational profiles.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;
}

/**
 * <p>Details about an error that occurred during recommendation generation.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The status code identifying the type of error.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A human-readable description of the error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Summary of a recommendation generation process initiated through the agent API.</p>
 * @public
 */
export interface AgentRecommendationGenerationSummary {
  /**
   * <p>The unique identifier of the recommendation generation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile used for this generation.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The name of the recommendation generation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the recommendation generation.</p>
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * <p>The estimated time for the generation to complete.</p>
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * <p>The identifier of the user or system that started this generation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the generation was started.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this generation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the generation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>How the generation was started.</p>
   * @public
   */
  generationType?: GenerationType | undefined;

  /**
   * <p>The recommendation types the generation covers.</p>
   * @public
   */
  generationRecommendationTypes?: RecommendationType[] | undefined;

  /**
   * <p>The timestamp when the recommendation generation process started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the recommendation generation process completed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>Details about the error if the generation status is ERROR.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;
}

/**
 * <p>The per-resource auto-remediation for a single affected resource. Represents one AWS Systems Manager (SSM) runbook execution that targets the resource. Present only when the resource's check is backed by an SSM automation runbook.</p>
 * @public
 */
export interface AutoRemediation {
  /**
   * <p>A deep link to the SSM runbook execution page in the AWS Management Console for this resource, with the execution parameters prefilled.</p>
   * @public
   */
  deepLink?: string | undefined;

  /**
   * <p>The AWS CLI command that triggers the same SSM runbook execution for this resource. You can copy and run this command as-is.</p>
   * @public
   */
  cliCommand?: string | undefined;
}

/**
 * <p>Summary of an agent recommendation item, representing an Amazon Web Services resource or recommendation affected by the optimization recommendation.</p>
 * @public
 */
export interface AgentRecommendationItemSummary {
  /**
   * <p>The unique identifier of the recommendation item.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The type of the recommendation item.</p>
   * @public
   */
  type: RecommendationItemType | undefined;

  /**
   * <p>Metadata containing a snapshot of the resource or recommendation at the time of generation.</p>
   * @public
   */
  metadata: __DocumentType | undefined;

  /**
   * <p>The identifier of the user or system that created this recommendation item.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the recommendation item was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this recommendation item.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the recommendation item was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The optional per-resource auto-remediation for this affected resource, representing an SSM runbook execution. Present only when the item's check is backed by an SSM automation runbook.</p>
   * @public
   */
  autoRemediation?: AutoRemediation | undefined;
}

/**
 * <p>An external reference associated with remediation steps.</p>
 * @public
 */
export interface ResourceLink {
  /**
   * <p>The URL of the external reference.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>An optional human-readable title for the link.</p>
   * @public
   */
  title?: string | undefined;
}

/**
 * <p>One step within a remediation procedure.</p>
 * @public
 */
export interface RemediationStep {
  /**
   * <p>An optional short label for the step.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The content describing the step, which can include code examples and verification checklists.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * <p>The core fields for a remediation.</p>
 * @public
 */
export interface AgentRecommendationRemediation {
  /**
   * <p>The ARN of the recommendation that this remediation belongs to.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The remediation method.</p>
   * @public
   */
  type: RemediationType | undefined;

  /**
   * <p>The procedural steps to perform the remediation.</p>
   * @public
   */
  steps: RemediationStep[] | undefined;

  /**
   * <p>External references associated with the steps.</p>
   * @public
   */
  resourceLinks?: ResourceLink[] | undefined;

  /**
   * <p>The identifier of the user or system that created this remediation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the remediation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this remediation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the remediation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>A return-on-investment estimate with context.</p>
 * @public
 */
export interface Roi {
  /**
   * <p>A short statistic or key metric. Optional when there is no quantifiable figure.</p>
   * @public
   */
  estimate?: string | undefined;

  /**
   * <p>A sentence providing context for the estimate.</p>
   * @public
   */
  detail: string | undefined;
}

/**
 * <p>Summary of an agent optimization recommendation returned by list operations.</p>
 * @public
 */
export interface AgentRecommendationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The identifier of the generation that produced this recommendation.</p>
   * @public
   */
  generationId?: string | undefined;

  /**
   * <p>The title of the recommendation.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the recommendation.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The type of the recommendation.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillar that the recommendation addresses.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>The priority of the recommendation.</p>
   * @public
   */
  priority: Priority | undefined;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  effort: Effort | undefined;

  /**
   * <p>The current status of the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The current state of the recommendation.</p>
   * @public
   */
  state: RecommendationState | undefined;

  /**
   * <p>The free-text reason associated with the recommendation's most recent status update.</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>The severity of the recommendation's impact.</p>
   * @public
   */
  impact: ImpactCategory | undefined;

  /**
   * <p>The return on investment estimate for the recommendation.</p>
   * @public
   */
  roi: Roi | undefined;

  /**
   * <p>The number of Amazon Web Services resources this recommendation affects.</p>
   * @public
   */
  numberOfResources?: number | undefined;

  /**
   * <p>The Amazon Web Services services that the recommendation applies to.</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The business units that own the affected resources.</p>
   * @public
   */
  businessUnits?: string[] | undefined;

  /**
   * <p>The applications that the recommendation targets.</p>
   * @public
   */
  applications?: string[] | undefined;

  /**
   * <p>The identifier of the user or system that created this recommendation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the recommendation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this recommendation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the recommendation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>A choice that has been answered on a question in your workload.</p>
 * @public
 */
export interface ChoiceAnswer {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason | undefined;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string | undefined;
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
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The helpful resource (both text and URL) for a particular choice.</p> <p>This field only applies to custom lenses. Each choice can have only one helpful resource.</p>
   * @public
   */
  HelpfulResource?: ChoiceContent | undefined;

  /**
   * <p>The improvement plan (both text and URL) for a particular choice.</p> <p>This field only applies to custom lenses. Each choice can have only one improvement plan.</p>
   * @public
   */
  ImprovementPlan?: ChoiceContent | undefined;

  /**
   * <p>The additional resources for a choice in a custom lens.</p> <p>A choice can have up to two additional resources: one of type <code>HELPFUL_RESOURCE</code>, one of type <code>IMPROVEMENT_PLAN</code>, or both.</p>
   * @public
   */
  AdditionalResources?: AdditionalResources[] | undefined;
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
  JiraIssueUrl?: string | undefined;

  /**
   * <p>The date and time when the Jira configuration was last synced.</p>
   * @public
   */
  LastSyncedTime?: Date | undefined;
}

/**
 * <p>An answer of the question.</p>
 * @public
 */
export interface Answer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p>
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The reason why the question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
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
  ChoiceId?: string | undefined;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason | undefined;
}

/**
 * <p>An answer summary of a lens review in a workload.</p>
 * @public
 */
export interface AnswerSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>The type of the question.</p>
   * @public
   */
  QuestionType?: QuestionType | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
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
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAliases: string[] | undefined;
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
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;
}

/**
 * <p>Account details for a Well-Architected best practice in relation to Trusted Advisor checks.</p>
 * @public
 */
export interface CheckDetail {
  /**
   * <p>Trusted Advisor check ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Count of flagged resources associated to the check.</p>
   * @public
   */
  FlaggedResources?: number | undefined;

  /**
   * <p>Reason associated to the check.</p>
   * @public
   */
  Reason?: CheckFailureReason | undefined;

  /**
   * <p>The date and time when the check was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
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
  Id?: string | undefined;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the check summary was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * <p>Account summary associated to the check.</p>
   * @public
   */
  AccountSummary?: Partial<Record<CheckStatus, number>> | undefined;
}

/**
 * <p>The choice level improvement plan.</p> <p>This value is only applicable to custom lenses.</p>
 * @public
 */
export interface ChoiceImprovementPlan {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The display text for the improvement plan.</p>
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;
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
  Reason?: ChoiceReason | undefined;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The best practices, or choices, that have been identified as contributing to risk in a question.</p>
   * @public
   */
  BestPractices?: BestPractice[] | undefined;
}

/**
 * <p>A metric for a particular pillar in a lens.</p>
 * @public
 */
export interface PillarMetric {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The questions that have been identified as risks in the pillar.</p>
   * @public
   */
  Questions?: QuestionMetric[] | undefined;
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
  LensArn?: string | undefined;

  /**
   * <p>The metrics for the pillars in a lens.</p>
   * @public
   */
  Pillars?: PillarMetric[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A metric that contributes to the consolidated report.</p>
 * @public
 */
export interface ConsolidatedReportMetric {
  /**
   * <p>The metric type of a metric in the consolidated report. Currently only WORKLOAD metric types are supported.</p>
   * @public
   */
  MetricType?: MetricType | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The date and time when the consolidated report metric was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The metrics for the lenses in the workload.</p>
   * @public
   */
  Lenses?: LensMetric[] | undefined;

  /**
   * <p>The total number of lenses applied to the workload.</p>
   * @public
   */
  LensesAppliedCount?: number | undefined;
}

/**
 * <p>A key-value pair representing a resource tag used to scope context content.</p>
 * @public
 */
export interface ContextResourceTag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Typed content structure for a context. Contains application-specific fields that describe the environment used during recommendation generation.</p>
 * @public
 */
export interface ContextContent {
  /**
   * <p>The Amazon Web Services account IDs associated with this application context.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Regions where this application operates.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The Amazon Web Services services used by this application.</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The Amazon Web Services resource types relevant to this application.</p>
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * <p>Resource tags used to scope this application context.</p>
   * @public
   */
  resourceTags?: ContextResourceTag[] | undefined;

  /**
   * <p>The AWS Organizations organizational unit (OU) IDs associated with this application context. Valid only for organizational profiles; rejected for standard profiles.</p>
   * @public
   */
  organizationalUnitIds?: string[] | undefined;

  /**
   * <p>A free-form overview of the application.</p>
   * @public
   */
  applicationOverview?: string | undefined;

  /**
   * <p>The industry vertical for this application.</p>
   * @public
   */
  industry?: string | undefined;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>The business criticality of the application.</p>
   * @public
   */
  criticality?: Criticality | undefined;

  /**
   * <p>A free-form description of the application architecture.</p>
   * @public
   */
  architectureOverview?: string | undefined;

  /**
   * <p>Additional context not captured by other fields.</p>
   * @public
   */
  additionalContext?: string | undefined;
}

/**
 * <p>Summary of a context associated with a profile, representing application or environment information used during recommendation generation.</p>
 * @public
 */
export interface ContextSummary {
  /**
   * <p>The unique identifier of the context.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The title of the context.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The type of the context.</p>
   * @public
   */
  contextType: ContextType | undefined;

  /**
   * <p>The typed content of the context, containing application-specific fields such as account IDs, Regions, services, and resource types.</p>
   * @public
   */
  content: ContextContent | undefined;

  /**
   * <p>The type of application described by this context.</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>The business criticality of the application described by this context.</p>
   * @public
   */
  criticality?: Criticality | undefined;

  /**
   * <p>The identifier of the user or system that created this context.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the context was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this context.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the context was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>An account that was in scope for an Organizational Report but could not be processed, along with the reason for the failure.</p>
 * @public
 */
export interface FailedAccount {
  /**
   * <p>The AWS account ID that failed.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>A human-readable explanation of why the account could not be processed.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * <p>An organizational unit that was requested in an Organizational Report's filters but could not be expanded into its member accounts. A failed OU means the report is missing the accounts it contained.</p>
 * @public
 */
export interface FailedOrganizationalUnit {
  /**
   * <p>The AWS Organizations OU ID that could not be expanded.</p>
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * <p>A human-readable explanation of why the organizational unit could not be expanded.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * <p>Pair of a Well-Architected pillar and the number of recommendations attributed to it in a CoverageSummary.</p>
 * @public
 */
export interface PillarCount {
  /**
   * <p>Well-Architected pillar this count is attributed to.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>Non-negative count of recommendations in the report that are attributed to this pillar.</p>
   * @public
   */
  count: number | undefined;
}

/**
 * <p>Pair of a recommendation Priority and the number of recommendations attributed to it in a CoverageSummary.</p>
 * @public
 */
export interface PriorityCount {
  /**
   * <p>Priority this count is attributed to.</p>
   * @public
   */
  priority: Priority | undefined;

  /**
   * <p>Non-negative count of recommendations in the report that are attributed to this priority.</p>
   * @public
   */
  count: number | undefined;
}

/**
 * <p>Counts describing the coverage of a completed Organizational Report. Includes the number of accounts in scope, how many had a profile, how many failed, and aggregated recommendation counts by pillar and priority. Returned only by GetAgentOrganizationalReport after the report reaches COMPLETED status. Not returned on the list response.</p>
 * @public
 */
export interface CoverageSummary {
  /**
   * <p>Total number of accounts that were in scope for the report after applying all filters and AWS Organizations membership validation.</p>
   * @public
   */
  totalAccountsInScope: number | undefined;

  /**
   * <p>Number of in-scope accounts that had an Agent Profile and were successfully processed.</p>
   * @public
   */
  accountsWithProfile: number | undefined;

  /**
   * <p>Number of in-scope accounts that had no Agent Profile at the time of the snapshot.</p>
   * @public
   */
  accountsWithoutProfile: number | undefined;

  /**
   * <p>Number of in-scope accounts that errored during processing. Equal to the length of failedAccounts.</p>
   * @public
   */
  failedAccountCount: number | undefined;

  /**
   * <p>Total number of Agent Profiles contributing to the report.</p>
   * @public
   */
  totalProfiles: number | undefined;

  /**
   * <p>Total number of recommendations included in the report across all profiles and all pillars.</p>
   * @public
   */
  totalRecommendations: number | undefined;

  /**
   * <p>Recommendation count grouped by Well-Architected pillar. Each entry pairs a Pillar enum value with a non-negative long. The counts sum to totalRecommendations.</p>
   * @public
   */
  recommendationCountByPillar?: PillarCount[] | undefined;

  /**
   * <p>Recommendation count grouped by Priority. Each entry pairs a Priority enum value with a non-negative long. The counts sum to totalRecommendations.</p>
   * @public
   */
  recommendationCountByPriority?: PriorityCount[] | undefined;

  /**
   * <p>Accounts that errored during processing and the reason they failed.</p>
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;

  /**
   * <p>Organizational units named in the report's filters that could not be expanded into their member accounts, along with the reason each failed. A failed OU means the report is missing whatever accounts it contained. Absent or empty when every requested OU expanded successfully.</p>
   * @public
   */
  failedOrganizationalUnits?: FailedOrganizationalUnit[] | undefined;
}

/**
 * <p>A key-value pair associated with a resource for cost allocation and access control.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAgentBasicProfileRequest {
  /**
   * <p>Tags to apply to the Basic profile at creation time.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAgentBasicProfileResponse {
  /**
   * <p>The identifier of the user or system that created this resource.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this resource.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the resource was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created Basic profile.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface CreateAgentContextRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile to associate the context with.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The title of the context.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The type of the context.</p>
   * @public
   */
  contextType: ContextType | undefined;

  /**
   * <p>The typed content of the context. The structure contains application-specific fields such as account IDs, Regions, services, and resource types.</p>
   * @public
   */
  content: ContextContent | undefined;
}

/**
 * @public
 */
export interface CreateAgentContextResponse {
  /**
   * <p>The created context summary.</p>
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface CreateAgentGoalRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile to associate the goal with.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars to associate with this goal.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>The title of the goal.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the goal.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Summary of an optimization goal associated with a profile.</p>
 * @public
 */
export interface GoalSummary {
  /**
   * <p>The unique identifier of the goal.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with this goal.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>The title of the goal.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the goal.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the user or system that created this goal.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the goal was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this goal.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the goal was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAgentGoalResponse {
  /**
   * <p>The created goal summary.</p>
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface CreateAgentOrganizationalProfileRequest {
  /**
   * <p>The system name of the organizational profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the organizational profile shown to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the organizational profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview for this organizational profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars to associate with this organizational profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled for the organizational profile.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The organizational monitoring boundary. Contains organizational unit or root entries and individual account entries that define the scope for the profile.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;

  /**
   * <p>The tags to associate with the organizational profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAgentOrganizationalProfileResponse {
  /**
   * <p>The system name of the created organizational profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the created organizational profile.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the created organizational profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview of the created organizational profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with the created organizational profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Organization this profile belongs to.</p>
   * @public
   */
  organizationId: string | undefined;

  /**
   * <p>The organizational monitoring boundary for the created profile. Present only for organizational profiles.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created organizational profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The tags associated with the created organizational profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the user or system that created this organizational profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the organizational profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this organizational profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the organizational profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>An inclusive time window used by Organizational Report filters. Both bounds are optional, but at least one of from or to must be set when the structure is present.</p>
 * @public
 */
export interface TimeWindow {
  /**
   * <p>Lower bound of the window (inclusive). Absent means no lower bound.</p>
   * @public
   */
  from?: Date | undefined;

  /**
   * <p>Upper bound of the window (inclusive). Absent means no upper bound.</p>
   * @public
   */
  to?: Date | undefined;
}

/**
 * <p>Filters narrowing the scope of an Organizational Report. Every member is optional. An absent or empty member places no constraint on that dimension. When the entire structure is absent, the report covers every account and every recommendation in the organization.</p>
 * @public
 */
export interface OrganizationalReportFilters {
  /**
   * <p>AWS account IDs to include in the report. Absent or empty means all accounts in the organization are in scope. Each supplied account is validated against AWS Organizations membership. Accounts that do not belong to the caller's organization are excluded and recorded on the report's coverage summary.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>AWS Organizational Unit IDs whose member accounts are included in the report. Absent or empty means no OU-based scoping is applied. Account and OU filters combine as a union.</p>
   * @public
   */
  organizationalUnitIds?: string[] | undefined;

  /**
   * <p>Well-Architected pillars to include. Absent or empty means all pillars.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>Recommendation types (RESOURCE, ARCHITECTURE, APPLICATION) to include. Absent or empty means all types.</p>
   * @public
   */
  recommendationTypes?: RecommendationType[] | undefined;

  /**
   * <p>Recommendation statuses (ACTIVE, SUPPRESSED, COMPLETED) to include. Absent or empty means all statuses.</p>
   * @public
   */
  statuses?: RecommendationStatus[] | undefined;

  /**
   * <p>Recommendation priorities (HIGH, MEDIUM, LOW) to include. Absent or empty means all priorities.</p>
   * @public
   */
  priorities?: Priority[] | undefined;

  /**
   * <p>Inclusive window on recommendation creation time. Absent means no lower or upper bound on createdAt.</p>
   * @public
   */
  createdAtRange?: TimeWindow | undefined;

  /**
   * <p>Inclusive window on recommendation last-updated time. Absent means no lower or upper bound on updatedAt.</p>
   * @public
   */
  updatedAtRange?: TimeWindow | undefined;
}

/**
 * @public
 */
export interface CreateAgentOrganizationalReportRequest {
  /**
   * <p>A caller-supplied idempotency token. Two create calls sharing the same token within the service's idempotency window return the same reportId.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Optional human-readable label (1-500 characters) that helps callers distinguish reports created with the same filters. Carried through list and get responses.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>Optional filters narrowing the report's scope. Absent means the report covers the whole organization.</p>
   * @public
   */
  filters?: OrganizationalReportFilters | undefined;
}

/**
 * @public
 */
export interface CreateAgentOrganizationalReportResponse {
  /**
   * <p>Unique identifier assigned to the newly-created report.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Lifecycle state of the report at the moment the create call returned. For a freshly-created report this is typically DISCOVERING.</p>
   * @public
   */
  state: OrganizationalReportState | undefined;
}

/**
 * @public
 */
export interface CreateAgentProfileRequest {
  /**
   * <p>The system name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the profile shown to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview for this profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars to associate with this profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled for the profile.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The ARN of the IAM execution role used for recommendation actions.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The aggregation configuration that defines which Amazon Web Services accounts and Regions to analyze.</p>
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags to associate with the profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAgentProfileResponse {
  /**
   * <p>The system name of the created profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the created profile.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the created profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview of the created profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with the created profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The ARN of the IAM execution role.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The aggregation configuration.</p>
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The tags associated with the created profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the user or system that created this profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateLensShareInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
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
  IsMajorVersion?: boolean | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionOutput {
  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;
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
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProfileOutput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>Version of the profile.</p>
   * @public
   */
  ProfileVersion?: string | undefined;
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
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;
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
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReviewTemplateOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
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
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateShareOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * <p>Discovery configuration associated to the workload.</p>
 * @public
 */
export interface WorkloadDiscoveryConfig {
  /**
   * <p>Discovery integration status in respect to Trusted Advisor for the workload.</p>
   * @public
   */
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus | undefined;

  /**
   * <p>The mode to use for identifying resources associated with the workload.</p> <p>You can specify <code>WORKLOAD_METADATA</code>, <code>APP_REGISTRY</code>, or both.</p>
   * @public
   */
  WorkloadResourceDefinition?: DefinitionType[] | undefined;
}

/**
 * <p>Workload-level: Input for the Jira configuration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationInput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;
}

/**
 * <p>Input for workload creation.</p>
 * @public
 */
export interface CreateWorkloadInput {
  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
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
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p> <p>If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags to be associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Well-Architected discovery configuration settings associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>The list of profile ARNs associated with the workload.</p>
   * @public
   */
  ProfileArns?: string[] | undefined;

  /**
   * <p>The list of review template ARNs to associate with the workload.</p>
   * @public
   */
  ReviewTemplateArns?: string[] | undefined;

  /**
   * <p>Jira configuration settings when creating a workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;
}

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
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * <p>A benefit on a different pillar from acting on the recommendation.</p>
 * @public
 */
export interface CrossPillarBenefit {
  /**
   * <p>The pillar that would be positively impacted.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>A short phrase describing the outcome.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of what changes and why it matters.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The severity of the benefit.</p>
   * @public
   */
  impact: ImpactCategory | undefined;
}

/**
 * @public
 */
export interface DeleteAgentContextRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the profile containing the context.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the context to delete.</p>
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
   * <p>The Amazon Resource Name (ARN) of the profile containing the goal.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the goal to delete.</p>
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
export interface DeleteAgentOrganizationalReportRequest {
  /**
   * <p>Identifier of the report to delete.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentOrganizationalReportResponse {}

/**
 * @public
 */
export interface DeleteAgentProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the profile to delete.</p>
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
export interface DeleteAgentProfilePolicyRequest {
  /**
   * <p>The ARN of the Agent Profile whose policy to delete.</p>
   * @public
   */
  profileArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentProfilePolicyResponse {}

/**
 * @public
 */
export interface DeleteAgentRecommendationPolicyRequest {
  /**
   * <p>The ARN of the Agent Recommendation whose policy to delete.</p>
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRecommendationPolicyResponse {}

/**
 * @public
 */
export interface DeleteLensInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

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
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
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
 */
export interface ExportLensInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be exported.</p>
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * @public
 */
export interface ExportLensOutput {
  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  LensJSON?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentContextRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the profile containing the context.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the context to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAgentContextResponse {
  /**
   * <p>The retrieved context summary.</p>
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface GetAgentGoalRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the profile containing the goal.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the goal to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAgentGoalResponse {
  /**
   * <p>The retrieved goal summary.</p>
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface GetAgentOrganizationalReportRequest {
  /**
   * <p>Identifier of the report to retrieve.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentOrganizationalReportResponse {
  /**
   * <p>Unique identifier of the Organizational Report assigned by the service at creation time.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>AWS account ID of the caller that created the report. Only this account or a delegated administrator of the same organization may retrieve or delete the report.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>Identifier of the AWS Organization the report belongs to. Derived from the caller's authorization context at creation time and not accepted as a client-supplied input.</p>
   * @public
   */
  organizationId: string | undefined;

  /**
   * <p>Optional human-readable label supplied by the caller at creation time.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>Current lifecycle state of the report.</p>
   * @public
   */
  state: OrganizationalReportState | undefined;

  /**
   * <p>Timestamp at which the report was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Filters captured when the report was created. Absent when no filters were supplied (meaning the report covered the whole organization).</p>
   * @public
   */
  filters?: OrganizationalReportFilters | undefined;

  /**
   * <p>Coverage and aggregate counts for the report. Present only after the report reaches COMPLETED.</p>
   * @public
   */
  coverageSummary?: CoverageSummary | undefined;
}

/**
 * @public
 */
export interface GetAgentOrganizationalReportDataRequest {
  /**
   * <p>Identifier of the report whose data is being retrieved.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Format of the returned artifact (CSV, JSON, or PARQUET).</p>
   * @public
   */
  format: OrganizationalReportFormat | undefined;
}

/**
 * @public
 */
export interface GetAgentOrganizationalReportDataResponse {
  /**
   * <p>Presigned URL that can be used to download the artifact.</p>
   * @public
   */
  downloadUrl: string | undefined;

  /**
   * <p>Expiration time of downloadUrl.</p>
   * @public
   */
  expiresAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAgentPreferencesRequest {}

/**
 * <p>A single Well-Architected Agent preference and its current state.</p>
 * @public
 */
export interface PreferenceEntry {
  /**
   * <p>Which preference this entry describes.</p>
   * @public
   */
  key: PreferenceKey | undefined;

  /**
   * <p>Current state of the preference. ENABLED and DISABLED reflect the result of the most recent successful change. FAILED reflects a stored failure surfaced on a read and is accompanied by a detail message.</p>
   * @public
   */
  status: PreferenceStatus | undefined;

  /**
   * <p>A human-readable explanation present only when status is FAILED, describing what went wrong and how to recover.</p>
   * @public
   */
  detail?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentPreferencesResponse {
  /**
   * <p>The caller's complete set of preferences.</p>
   * @public
   */
  preferences: PreferenceEntry[] | undefined;
}

/**
 * @public
 */
export interface GetAgentProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile to retrieve.</p>
   * @public
   */
  profileArn: string | undefined;
}

/**
 * @public
 */
export interface GetAgentProfileResponse {
  /**
   * <p>The system name of the profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the profile.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview of the profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with the profile. Not present for basic profiles.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The type of the profile.</p>
   * @public
   */
  profileType?: ProfileType | undefined;

  /**
   * <p>The ARN of the IAM execution role. Not present for basic profiles.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The aggregation configuration. Not present for basic profiles.</p>
   * @public
   */
  aggregationConfiguration?: AggregationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The tags associated with the profile.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the user or system that created this profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The organizational monitoring boundary. Present only for organizational profiles.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAgentProfilePolicyRequest {
  /**
   * <p>The ARN of the Agent Profile whose policy to retrieve.</p>
   * @public
   */
  profileArn: string | undefined;
}

/**
 * @public
 */
export interface GetAgentProfilePolicyResponse {
  /**
   * <p>The ARN of the Agent Profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The IAM resource-based policy document in JSON format.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation to retrieve.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>Optional filter on remediation type.</p>
   * @public
   */
  remediationType?: RemediationType | undefined;
}

/**
 * <p>Contains information about a goal associated with a recommendation.</p>
 * @public
 */
export interface RecommendationGoal {
  /**
   * <p>The title of the goal associated with the recommendation.</p>
   * @public
   */
  title: string | undefined;
}

/**
 * <p>An insight describing a usage pattern and the signals detected.</p>
 * @public
 */
export interface Insight {
  /**
   * <p>A description of the usage pattern.</p>
   * @public
   */
  usagePattern: string | undefined;

  /**
   * <p>A description of the signals detected.</p>
   * @public
   */
  signalsDetected?: string | undefined;
}

/**
 * <p>A high-level remediation summary returned in the detail response.</p>
 * @public
 */
export interface RemediationSummary {
  /**
   * <p>A short imperative statement of the recommended action.</p>
   * @public
   */
  recommendation: string | undefined;

  /**
   * <p>High-level steps to implement the fix.</p>
   * @public
   */
  steps: string[] | undefined;
}

/**
 * <p>A negative trade-off from acting on the recommendation.</p>
 * @public
 */
export interface TradeOff {
  /**
   * <p>The pillar that could be negatively impacted.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>A short phrase describing what is lost or degraded.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the specific risk and the condition that triggers it.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The risk rating for the trade-off.</p>
   * @public
   */
  risk: RiskRating | undefined;

  /**
   * <p>A specific action to mitigate the trade-off and when to take it.</p>
   * @public
   */
  mitigation: string | undefined;

  /**
   * <p>An optional explanation providing additional context for the risk rating.</p>
   * @public
   */
  riskExplanation?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The identifier of the generation that produced this recommendation.</p>
   * @public
   */
  generationId?: string | undefined;

  /**
   * <p>The title of the recommendation.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the recommendation.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The type of the recommendation.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillar that the recommendation addresses.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>The priority of the recommendation.</p>
   * @public
   */
  priority: Priority | undefined;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  effort: Effort | undefined;

  /**
   * <p>The current status of the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The current state of the recommendation.</p>
   * @public
   */
  state: RecommendationState | undefined;

  /**
   * <p>The free-text reason associated with the recommendation's most recent status update.</p>
   * @public
   */
  updateReason?: string | undefined;

  /**
   * <p>The severity of the recommendation's impact.</p>
   * @public
   */
  impact: ImpactCategory | undefined;

  /**
   * <p>The return on investment estimate for the recommendation.</p>
   * @public
   */
  roi: Roi | undefined;

  /**
   * <p>The number of Amazon Web Services resources this recommendation affects.</p>
   * @public
   */
  numberOfResources?: number | undefined;

  /**
   * <p>The Amazon Web Services services that the recommendation applies to.</p>
   * @public
   */
  awsServices?: string[] | undefined;

  /**
   * <p>The business units that own the affected resources.</p>
   * @public
   */
  businessUnits?: string[] | undefined;

  /**
   * <p>The applications that the recommendation targets.</p>
   * @public
   */
  applications?: string[] | undefined;

  /**
   * <p>Detailed impact information for the recommendation.</p>
   * @public
   */
  impactDetails: string[] | undefined;

  /**
   * <p>A list of insights about the recommendation.</p>
   * @public
   */
  insights: Insight[] | undefined;

  /**
   * <p>Highlights describing what was detected.</p>
   * @public
   */
  highlights: string[] | undefined;

  /**
   * <p>A high-level summary of the recommended remediation.</p>
   * @public
   */
  remediationSummary: RemediationSummary | undefined;

  /**
   * <p>Cross-pillar benefits of acting on the recommendation.</p>
   * @public
   */
  crossPillarBenefits?: CrossPillarBenefit[] | undefined;

  /**
   * <p>Trade-offs of acting on the recommendation.</p>
   * @public
   */
  tradeOffs?: TradeOff[] | undefined;

  /**
   * <p>Sources that generated this recommendation.</p>
   * @public
   */
  sources?: RecommendationSource[] | undefined;

  /**
   * <p>Goals that this recommendation targets.</p>
   * @public
   */
  goals?: RecommendationGoal[] | undefined;

  /**
   * <p>A set of key-value pairs associated with the recommendation, used for cost allocation and access control.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the user or system that created this recommendation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the recommendation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this recommendation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the recommendation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>A list of remediations for the recommendation.</p>
   * @public
   */
  remediations?: AgentRecommendationRemediation[] | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationGenerationRequest {
  /**
   * <p>The ARN of the optimization profile associated with this generation.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the recommendation generation to retrieve.</p>
   * @public
   */
  generationId: string | undefined;
}

/**
 * <p>Progress information for a recommendation generation process.</p>
 * @public
 */
export interface Progress {
  /**
   * <p>The number of generation steps that have been completed.</p>
   * @public
   */
  stepsCompleted: number | undefined;

  /**
   * <p>The total number of steps in the generation process.</p>
   * @public
   */
  totalSteps: number | undefined;

  /**
   * <p>The completion percentage of the generation process (0-100).</p>
   * @public
   */
  completionPercentage: number | undefined;
}

/**
 * <p>Item configuration for a specific Amazon Web Services Well-Architected Framework pillar.</p>
 * @public
 */
export interface PillarItem {
  /**
   * <p>The pillar this item configuration applies to.</p>
   * @public
   */
  pillar: Pillar | undefined;

  /**
   * <p>A list of item IDs to process for this pillar, such as best practice IDs, Amazon Web Services service names, or resource ARNs.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * <p>Defines the scope for recommendation generation, specifying which pillars and goals to focus on.</p>
 * @public
 */
export interface Scope {
  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars to include in the generation scope.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Specific goal IDs to focus on during recommendation generation. Use <code>ListAgentGoals</code> to retrieve goal IDs.</p>
   * @public
   */
  goalIds?: string[] | undefined;

  /**
   * <p>An optional per-pillar filter. When you specify items, only the listed items are processed for each pillar. When you omit items, all items are processed.</p>
   * @public
   */
  items?: PillarItem[] | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationGenerationResponse {
  /**
   * <p>The unique identifier of the recommendation generation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile used for this generation.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The name of the recommendation generation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the recommendation generation.</p>
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * <p>The estimated time for the generation to complete.</p>
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * <p>The identifier of the user or system that started this generation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the generation was started.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this generation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the generation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>How the generation was started.</p>
   * @public
   */
  generationType?: GenerationType | undefined;

  /**
   * <p>The recommendation types the generation covers.</p>
   * @public
   */
  generationRecommendationTypes?: RecommendationType[] | undefined;

  /**
   * <p>The timestamp when the recommendation generation process started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the recommendation generation process completed.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>Details about the error if the generation status is ERROR.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * <p>The additional context that was provided when the generation was started. For <code>ARCHITECTURE</code> generations, this includes the location of the reviewed IaC template and the lenses used.</p>
   * @public
   */
  additionalContext?: __DocumentType | undefined;

  /**
   * <p>The scope configuration that defines which pillars and goals to focus on during generation.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>Current progress information including steps completed and completion percentage.</p>
   * @public
   */
  progress?: Progress | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationPolicyRequest {
  /**
   * <p>The ARN of the Agent Recommendation whose policy to retrieve.</p>
   * @public
   */
  recommendationArn: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRecommendationPolicyResponse {
  /**
   * <p>The ARN of the Agent Recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The IAM resource-based policy document in JSON format.</p>
   * @public
   */
  policy: string | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportInput {
  /**
   * <p>The format of the consolidated report.</p> <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>, <code>Metrics</code> is returned.</p>
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * <p>Set to <code>true</code> to have shared resources included in the report.</p>
   * @public
   */
  IncludeSharedResources?: boolean | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportOutput {
  /**
   * <p>The metrics that make up the consolidated report.</p> <p>Only returned when <code>JSON</code> format is requested.</p>
   * @public
   */
  Metrics?: ConsolidatedReportMetric[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsOutput {
  /**
   * <p>Amazon Web Services Organizations sharing status.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * <p>Discovery integration status.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * <p>Jira configuration status.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface GetLensInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be retrieved.</p>
   * @public
   */
  LensVersion?: string | undefined;
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
  LensArn?: string | undefined;

  /**
   * <p>The version of a lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the lens.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags assigned to the lens.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLensOutput {
  /**
   * <p>A lens return object.</p>
   * @public
   */
  Lens?: Lens | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>The selected pillar.</p>
 * @public
 */
export interface SelectedPillar {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>Selected question IDs in the selected pillar.</p>
   * @public
   */
  SelectedQuestionIds?: string[] | undefined;
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
  SelectedPillars?: SelectedPillar[] | undefined;
}

/**
 * <p>A pillar review summary of a lens review.</p>
 * @public
 */
export interface PillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
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
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * <p>A lens review of a question.</p>
 * @public
 */
export interface LensReview {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>List of pillar review summaries of lens review in a workload.</p>
   * @public
   */
  PillarReviewSummaries?: PillarReviewSummary[] | undefined;

  /**
   * <p>Jira configuration status of the Lens review.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;

  /**
   * <p>The date and time when the lens review was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>A report of a lens review.</p>
 * @public
 */
export interface LensReviewReport {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>A report of a lens review.</p>
   * @public
   */
  LensReviewReport?: LensReviewReport | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * <p>The lens version to target a difference for.</p>
   * @public
   */
  TargetLensVersion?: string | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>Indicates the type of change to the question.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;
}

/**
 * <p>A pillar difference return object.</p>
 * @public
 */
export interface PillarDifference {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>Indicates the type of change to the pillar.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;

  /**
   * <p>List of question differences.</p>
   * @public
   */
  QuestionDifferences?: QuestionDifference[] | undefined;
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
  PillarDifferences?: PillarDifference[] | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceOutput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * <p>The target lens version for the lens.</p>
   * @public
   */
  TargetLensVersion?: string | undefined;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   * @public
   */
  VersionDifferences?: VersionDifferences | undefined;
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
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber: number | undefined;
}

/**
 * <p>Workload-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationOutput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Workload-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * <p>The date and time when the workload was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>The review restriction date for the workload.</p>
   * @public
   */
  ReviewRestrictionDate?: Date | undefined;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p> <p>If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Discovery configuration associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>Jira configuration for a specific workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationOutput | undefined;
}

/**
 * <p>A milestone return object.</p>
 * @public
 */
export interface Milestone {
  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>The date and time when the milestone was recorded.</p>
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>A milestone return object.</p>
   * @public
   */
  Milestone?: Milestone | undefined;
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
  ProfileVersion?: string | undefined;
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
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileChoice[] | undefined;

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;

  /**
   * <p>The minimum number of selected choices.</p>
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * <p>The maximum number of selected choices.</p>
   * @public
   */
  MaxSelectedChoices?: number | undefined;
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
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestion[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when the profile was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the profile was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile | undefined;
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
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileTemplateChoice[] | undefined;

  /**
   * <p>The minimum number of choices selected.</p>
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * <p>The maximum number of choices selected.</p>
   * @public
   */
  MaxSelectedChoices?: number | undefined;
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
  TemplateName?: string | undefined;

  /**
   * <p>Profile template questions.</p>
   * @public
   */
  TemplateQuestions?: ProfileTemplateQuestion[] | undefined;

  /**
   * <p>The date and time when the profile template was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the profile template was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProfileTemplateOutput {
  /**
   * <p>The profile template.</p>
   * @public
   */
  ProfileTemplate?: ProfileTemplate | undefined;
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
 * <p>A review template.</p>
 * @public
 */
export interface ReviewTemplate {
  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The lenses applied to the review template.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many total questions are answered and unanswered in the review template.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when the review template was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;

  /**
   * <p>The ID assigned to the template share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateOutput {
  /**
   * <p>The review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
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
 * <p>An answer of the question.</p>
 * @public
 */
export interface ReviewTemplateAnswer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p> <note> <p>This field does not apply to Amazon Web Services official lenses.</p> </note>
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your review template.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The reason why the question is not applicable to your review template.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
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
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many questions are answered and unanswered in the requested pillar of the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;
}

/**
 * <p>The lens review of a review template.</p>
 * @public
 */
export interface ReviewTemplateLensReview {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The lens ARN.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>Pillar review summaries of a lens review.</p>
   * @public
   */
  PillarReviewSummaries?: ReviewTemplatePillarReviewSummary[] | undefined;

  /**
   * <p>The date and time when the review template lens review was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many questions are answered and unanswered in the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
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
  Workload?: Workload | undefined;
}

/**
 * @public
 */
export interface ImportLensInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  JSONString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags to associate to a lens.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportLensOutput {
  /**
   * <p>The ARN for the lens that was created or updated.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The status of the imported lens.</p>
   * @public
   */
  Status?: ImportLensStatus | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The improvement plan details.</p> <p>This value is only applicable to custom lenses.</p>
   * @public
   */
  ImprovementPlans?: ChoiceImprovementPlan[] | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * <p>A lens review summary of a workload.</p>
 * @public
 */
export interface LensReviewSummary {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>The date and time when the lens review was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A lens share summary return object.</p>
 * @public
 */
export interface LensShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>A lens summary of a lens.</p>
 * @public
 */
export interface LensSummary {
  /**
   * <p>The ARN of the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The type of the lens.</p>
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the lens was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the lens was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The current version of the lens.</p>
   * @public
   */
  CurrentLensVersion?: string | undefined;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * <p> <code>ResourceArn</code> of the lens being upgraded</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentContextsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the profile to list contexts for.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The maximum number of contexts to return in a single call. Default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentContextsResponse {
  /**
   * <p>A list of context summaries associated with the profile.</p>
   * @public
   */
  items: ContextSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentGoalsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile to list goals for.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The maximum number of goals to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentGoalsResponse {
  /**
   * <p>A list of goal summaries associated with the profile.</p>
   * @public
   */
  items: GoalSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentOrganizationalReportsRequest {
  /**
   * <p>Maximum number of items to return in a single page. Defaults to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token from a previous ListAgentOrganizationalReports response. Absent on the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional filter restricting the response to reports in a single lifecycle state.</p>
   * @public
   */
  state?: OrganizationalReportState | undefined;
}

/**
 * <p>Summary of an Organizational Report returned in a list response. Includes the core fields of the full report and the optional label, but omits the filters and coverage summary. The filters and coverage summary are available through GetAgentOrganizationalReport. The coverage summary is populated once the report reaches COMPLETED.</p>
 * @public
 */
export interface OrganizationalReportSummary {
  /**
   * <p>Unique identifier of the Organizational Report assigned by the service at creation time.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>AWS account ID of the caller that created the report. Only this account or a delegated administrator of the same organization may retrieve or delete the report.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>Identifier of the AWS Organization the report belongs to. Derived from the caller's authorization context at creation time and not accepted as a client-supplied input.</p>
   * @public
   */
  organizationId: string | undefined;

  /**
   * <p>Optional human-readable label supplied by the caller at creation time.</p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>Current lifecycle state of the report.</p>
   * @public
   */
  state: OrganizationalReportState | undefined;

  /**
   * <p>Timestamp at which the report was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentOrganizationalReportsResponse {
  /**
   * <p>Page of report summaries, most-recently-created first.</p>
   * @public
   */
  items: OrganizationalReportSummary[] | undefined;

  /**
   * <p>Pagination token to supply on the next request, or absent when there are no more pages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentProfilesRequest {
  /**
   * <p>The maximum number of profiles to return in a single call. Default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentProfilesResponse {
  /**
   * <p>A list of profile summaries.</p>
   * @public
   */
  items: AgentProfileSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationGenerationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile to list generation processes for.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>Optional filter by recommendation type.</p>
   * @public
   */
  recommendationType?: RecommendationType | undefined;

  /**
   * <p>The maximum number of generation processes to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationGenerationsResponse {
  /**
   * <p>A list of recommendation generation summaries.</p>
   * @public
   */
  items: AgentRecommendationGenerationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationItemsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation to list items for.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>Optional filter to return only recommendation items of the specified type.</p>
   * @public
   */
  type?: RecommendationItemType | undefined;

  /**
   * <p>The maximum number of recommendation items to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationItemsResponse {
  /**
   * <p>A list of recommendation items with their detailed metadata and configuration information.</p>
   * @public
   */
  items: AgentRecommendationItemSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile to list recommendations for.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The maximum number of recommendations to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token returned from a previous call to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional filter to return only recommendations with the specified state (OPEN or CLOSED).</p>
   * @public
   */
  state?: RecommendationState | undefined;

  /**
   * <p>Optional filter to return only recommendations for the specified pillar.</p>
   * @public
   */
  pillar?: Pillar | undefined;
}

/**
 * @public
 */
export interface ListAgentRecommendationsResponse {
  /**
   * <p>A list of recommendation summaries.</p>
   * @public
   */
  items: AgentRecommendationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>List of answer summaries of lens review in a workload.</p>
   * @public
   */
  AnswerSummaries?: AnswerSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
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
  CheckDetails?: CheckDetail[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
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
  CheckSummaries?: CheckSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of lenses to be returned.</p>
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * <p>The status of lenses to be returned.</p>
   * @public
   */
  LensStatus?: LensStatusType | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;
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
  LensSummaries?: LensSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>List of improvement summaries of lens review in a workload.</p>
   * @public
   */
  ImprovementSummaries?: ImprovementSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>List of lens summaries of lens reviews of a workload.</p>
   * @public
   */
  LensReviewSummaries?: LensReviewSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLensSharesInput {
  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the lens is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface ListLensSharesOutput {
  /**
   * <p>A list of lens share summaries.</p>
   * @public
   */
  LensShareSummaries?: LensShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when the workload was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p> <p>If a review template that specifies lenses is applied to the workload, those lenses are applied to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A milestone summary return object.</p>
 * @public
 */
export interface MilestoneSummary {
  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>The date and time when the milestone was recorded.</p>
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * <p>A workload summary return object.</p>
   * @public
   */
  WorkloadSummary?: WorkloadSummary | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>A list of milestone summaries.</p>
   * @public
   */
  MilestoneSummaries?: MilestoneSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ARN for the related resource for the notification.</p> <note> <p>Only one of <code>WorkloadID</code> or <code>ResourceARN</code> should be specified.</p> </note>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>A notification summary return object.</p>
 * @public
 */
export interface NotificationSummary {
  /**
   * <p>The type of notification.</p>
   * @public
   */
  Type?: NotificationType | undefined;

  /**
   * <p>Summary of lens upgrade.</p>
   * @public
   */
  LensUpgradeSummary?: LensUpgradeSummary | undefined;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>List of lens notification summaries in a workload.</p>
   * @public
   */
  NotificationSummaries?: NotificationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The profile notification summary.</p>
 * @public
 */
export interface ProfileNotificationSummary {
  /**
   * <p>The current profile version.</p>
   * @public
   */
  CurrentProfileVersion?: string | undefined;

  /**
   * <p>The latest profile version.</p>
   * @public
   */
  LatestProfileVersion?: string | undefined;

  /**
   * <p>Type of notification.</p>
   * @public
   */
  Type?: ProfileNotificationType | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsOutput {
  /**
   * <p>Notification summaries.</p>
   * @public
   */
  NotificationSummaries?: ProfileNotificationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilesInput {
  /**
   * <p>An optional string added to the beginning of each profile name returned in the results.</p>
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * <p>Profile owner type.</p>
   * @public
   */
  ProfileOwnerType?: ProfileOwnerType | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when the profile was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the profile was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProfilesOutput {
  /**
   * <p>Profile summaries.</p>
   * @public
   */
  ProfileSummaries?: ProfileSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
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
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Profile share invitation status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileSharesOutput {
  /**
   * <p>Profile share summaries.</p>
   * @public
   */
  ProfileShareSummaries?: ProfileShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in the review template.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * <p>The reason why a choice is not-applicable to a question in the review template.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>The type of question.</p>
   * @public
   */
  QuestionType?: QuestionType | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersOutput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>List of answer summaries of a lens review in a review template.</p>
   * @public
   */
  AnswerSummaries?: ReviewTemplateAnswerSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  Description?: string | undefined;

  /**
   * <p>Lenses associated with the review template.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time when the review template was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesOutput {
  /**
   * <p>List of review templates.</p>
   * @public
   */
  ReviewTemplates?: ReviewTemplateSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input for List Share Invitations</p>
 * @public
 */
export interface ListShareInvitationsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the results.</p>
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * <p>An optional string added to the beginning of each lens name returned in the results.</p>
   * @public
   */
  LensNamePrefix?: string | undefined;

  /**
   * <p>The type of share invitations to be returned.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional string added to the beginning of each profile name returned in the results.</p>
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * <p>An optional string added to the beginning of each review template name returned in the results.</p>
   * @public
   */
  TemplateNamePrefix?: string | undefined;
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
  ShareInvitationId?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
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
  ShareInvitationSummaries?: ShareInvitationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Tags?: Record<string, string> | undefined;
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
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
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
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Review template share invitation status message. </p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateSharesOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A review template share summary return object.</p>
   * @public
   */
  TemplateShareSummaries?: TemplateShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list all workloads.</p>
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the results.</p>
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
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
  WorkloadSummaries?: WorkloadSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
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
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>A list of workload share summaries.</p>
   * @public
   */
  WorkloadShareSummaries?: WorkloadShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A caller's requested change to one preference, supplied to PutAgentPreferences.</p>
 * @public
 */
export interface PreferenceUpdate {
  /**
   * <p>Which preference to update.</p>
   * @public
   */
  key: PreferenceKey | undefined;

  /**
   * <p>State to set the preference to. FAILED is an observed state only and cannot be requested.</p>
   * @public
   */
  state: PreferenceState | undefined;
}

/**
 * @public
 */
export interface PutAgentPreferencesRequest {
  /**
   * <p>Preference updates to apply. A given preference key may appear at most once.</p>
   * @public
   */
  preferences: PreferenceUpdate[] | undefined;
}

/**
 * @public
 */
export interface PutAgentPreferencesResponse {}

/**
 * @public
 */
export interface PutAgentProfilePolicyRequest {
  /**
   * <p>The ARN of the Agent Profile to attach the policy to.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The IAM resource-based policy document in JSON format. Maximum size 50KB.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAgentProfilePolicyResponse {}

/**
 * @public
 */
export interface PutAgentRecommendationFeedbackRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation to provide feedback for.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The type of feedback being provided.</p>
   * @public
   */
  type: RecommendationFeedbackType | undefined;

  /**
   * <p>Optional category classifying the nature of the feedback.</p>
   * @public
   */
  feedbackCategory?: FeedbackCategory | undefined;

  /**
   * <p>Optional comments providing additional context about the feedback.</p>
   * @public
   */
  comments?: string | undefined;
}

/**
 * @public
 */
export interface PutAgentRecommendationFeedbackResponse {}

/**
 * @public
 */
export interface PutAgentRecommendationPolicyRequest {
  /**
   * <p>The ARN of the Agent Recommendation to attach the policy to.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The IAM resource-based policy document in JSON format. Maximum size 50KB.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutAgentRecommendationPolicyResponse {}

/**
 * @public
 */
export interface SendAgentOrganizationalReportDataToS3Request {
  /**
   * <p>Identifier of the report whose data is being delivered.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Format of the delivered artifact (CSV, JSON, or PARQUET).</p>
   * @public
   */
  format: OrganizationalReportFormat | undefined;

  /**
   * <p>ARN of the caller-owned S3 bucket that will receive the artifact.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>S3 object key under bucketArn where the artifact will be written.</p>
   * @public
   */
  objectKey: string | undefined;
}

/**
 * @public
 */
export interface SendAgentOrganizationalReportDataToS3Response {
  /**
   * <p>S3 URI (format s3://bucket/key) where the artifact was written.</p>
   * @public
   */
  deliveredTo: string | undefined;
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
  ShareInvitationId?: string | undefined;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface StartAgentRecommendationGenerationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization profile to use for generating recommendations.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The types of recommendations to generate. You can specify up to two types in a single request. Currently, only <code>ARCHITECTURE</code> is supported for this operation.</p>
   * @public
   */
  types: RecommendationType[] | undefined;

  /**
   * <p>An optional name for this generation that identifies the architecture review in the console and in <code>ListAgentRecommendationGenerations</code> results. Applies to <code>ARCHITECTURE</code> type only. Must be absent for other types.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The location of the infrastructure as code (IaC) template to review, and the lenses to review it against. Required for the <code>ARCHITECTURE</code> type. Must be absent for other types. Specify a JSON object with the following members:</p> <ul> <li> <p> <code>s3Uri</code>: The Amazon S3 URI of the IaC template, .zip archive, or folder to review.</p> </li> <li> <p> <code>s3VersionId</code>: The version ID of the Amazon S3 object. If you omit this member, the current version is used.</p> </li> <li> <p> <code>lensArns</code>: The ARNs of the lenses to review against. Only <code>arn:aws:wellarchitected::aws:lens/wellarchitected</code> is supported.</p> </li> </ul>
   * @public
   */
  additionalContext?: __DocumentType | undefined;

  /**
   * <p>Defines which pillars, goals, and items the review covers. Required for the <code>ARCHITECTURE</code> type. Must be absent for other types.</p>
   * @public
   */
  scope?: Scope | undefined;
}

/**
 * @public
 */
export interface StartAgentRecommendationGenerationResponse {
  /**
   * <p>The unique identifier of the recommendation generation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile used for this generation.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The name of the recommendation generation.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the recommendation generation.</p>
   * @public
   */
  status: GenerationStatus | undefined;

  /**
   * <p>The estimated time for the generation to complete.</p>
   * @public
   */
  estimatedCompletionTime?: Date | undefined;

  /**
   * <p>The identifier of the user or system that started this generation.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the generation was started.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this generation.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the generation was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

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
   * <p>A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile containing the context.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the context to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The updated title of the context.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated typed content of the context. The structure contains application-specific fields such as account IDs, Regions, services, and resource types.</p>
   * @public
   */
  content?: ContextContent | undefined;
}

/**
 * @public
 */
export interface UpdateAgentContextResponse {
  /**
   * <p>The updated context summary.</p>
   * @public
   */
  context: ContextSummary | undefined;
}

/**
 * @public
 */
export interface UpdateAgentGoalRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile containing the goal to update.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The unique identifier of the goal to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The updated pillars for the goal. Pillars define the optimization focus areas such as cost, performance, resilience, and operational excellence.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>The updated title for the goal. Maximum length of 1000 characters.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A description of the goal.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentGoalResponse {
  /**
   * <p>The updated goal summary.</p>
   * @public
   */
  goal: GoalSummary | undefined;
}

/**
 * @public
 */
export interface UpdateAgentOrganizationalProfileRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the organizational profile to update.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The updated display name of the organizational profile. Omit this field to keep the current display name. A display name is required, so it cannot be cleared.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The updated description of the organizational profile. Omit this field to keep the current description, or supply an empty string to clear it; a cleared description is read back as absent rather than as an empty string.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated business overview for the organizational profile. Omit this field to keep the current business overview, or supply an empty string to clear it; a cleared business overview is read back as absent rather than as an empty string.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The updated Amazon Web Services Well-Architected Framework pillars for the organizational profile. Omit this field to keep the current pillars. A profile must target at least one pillar, so an empty list is rejected.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled for the organizational profile.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The organizational monitoring boundary. Contains organizational unit or root entries and individual account entries that define the scope for the profile. Omit this field to keep the current boundary, or supply this structure with both its <code>organizationalUnits</code> and <code>accounts</code> lists empty to remove every monitored organizational unit and account. The field remains set either way — an emptied boundary is read back as a structure with two empty lists, not as an absent field.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateAgentOrganizationalProfileResponse {
  /**
   * <p>The system name of the updated organizational profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the updated organizational profile.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the updated organizational profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview of the updated organizational profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with the updated organizational profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Organization this profile belongs to.</p>
   * @public
   */
  organizationId: string | undefined;

  /**
   * <p>The organizational monitoring boundary for the updated profile.</p>
   * @public
   */
  organizationalAggregationConfiguration?: OrganizationalAggregationConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated organizational profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the user or system that created this organizational profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the organizational profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this organizational profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the organizational profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAgentProfileRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the profile to update.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The updated display name of the profile. Omit this field to keep the current display name. A display name is required, so it cannot be cleared.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The updated description of the profile. Omit this field to keep the current description, or supply an empty string to clear it; a cleared description is read back as absent rather than as an empty string.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated ARN of the IAM execution role. Omit this field to keep the current execution role.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The updated aggregation configuration, as a list of per-account entries. Omit this field to keep the current entries, or supply an empty list to remove them all. The field remains set either way — an emptied configuration is read back as an empty list, not as an absent field.</p>
   * @public
   */
  aggregationConfiguration?: AggregationConfiguration[] | undefined;

  /**
   * <p>The updated business overview for the profile. Omit this field to keep the current business overview, or supply an empty string to clear it; a cleared business overview is read back as absent rather than as an empty string.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The updated Amazon Web Services Well-Architected Framework pillars for the profile. Omit this field to keep the current pillars. A profile must target at least one pillar, so an empty list is rejected.</p>
   * @public
   */
  pillars?: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled for the profile.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAgentProfileResponse {
  /**
   * <p>The system name of the updated profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The display name of the updated profile.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the updated profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The business overview of the updated profile.</p>
   * @public
   */
  businessOverview?: string | undefined;

  /**
   * <p>The Amazon Web Services Well-Architected Framework pillars associated with the updated profile.</p>
   * @public
   */
  pillars: Pillar[] | undefined;

  /**
   * <p>Indicates whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * <p>The ARN of the IAM execution role.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The aggregation configuration.</p>
   * @public
   */
  aggregationConfiguration: AggregationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated profile.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Indicates whether the profile is valid for scheduled recommendation generation.</p>
   * @public
   */
  eligibleForScheduledGeneration?: boolean | undefined;

  /**
   * <p>Indicates whether the profile is valid for manual architecture generation.</p>
   * @public
   */
  eligibleForArchitectureGeneration?: boolean | undefined;

  /**
   * <p>A map of field paths to error messages for invalid or missing input fields.</p>
   * @public
   */
  fieldErrors?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the user or system that created this profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp when the profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The identifier of the user or system that last modified this profile.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The timestamp when the profile was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRecommendationStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation to update.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The new status to assign to the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>A free-text reason explaining this status update.</p>
   * @public
   */
  updateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRecommendationStatusResponse {}

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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The reason why a question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * <p>The status of organization sharing settings.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * <p>The status of discovery support settings.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * <p>The status of Jira integration settings.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationInput | undefined;
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
   * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;
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
  WorkloadId?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview | undefined;
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
  ProfileDescription?: string | undefined;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestionUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile | undefined;
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
  TemplateName?: string | undefined;

  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A list of lens aliases or ARNs to apply to the review template.</p>
   * @public
   */
  LensesToAssociate?: string[] | undefined;

  /**
   * <p>A list of lens aliases or ARNs to unapply to the review template. The <code>wellarchitected</code> lens cannot be unapplied.</p>
   * @public
   */
  LensesToDisassociate?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateOutput {
  /**
   * <p>A review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of choices to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The update reason.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
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
   * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
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
  ShareInvitation?: ShareInvitation | undefined;
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
   * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p> <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>Well-Architected discovery configuration settings to associate to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs to associate to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
}
